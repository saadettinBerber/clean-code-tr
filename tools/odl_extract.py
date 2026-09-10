"""Bir Clean Code PDF sayfasını yapılı bloklara ayırır. İki sinyali birleştirir:
  1. OpenDataLoader PDF -> başlık, paragraf, liste, görsel, caption, okuma sırası
  2. PyMuPDF (layout_scan) -> girintili kod listeleri, satır içi kod, tire onarımı

Kitaba özgü temizlik: koşu başlığı (üst), 'www.it-ebooks.info' (alt), sayfa
numaraları atılır; bölüm açılış sayfası tek bir `chapter` bloğuna toplanır.
Çıktı tools/FORMAT.md'deki blok şemasının yalnız `en` tarafıdır.
"""
import os
import re

from layout_scan import scan_page
from text_fixer import TextFixer
from odl_runner import extract_odl_elements
from text_utils import (clean_ligatures, is_numeric_only, normalize_spaces,
                        split_sentences, strip_list_marker)

HEADER_ZONE_BOTTOM = 610       # ODL koordinatı (alt-sol orijin); koşu başlığı ~621-632
FOOTER_ZONE_TOP = 30           # 'www.it-ebooks.info' ~5-17
CHAPTER_NUMBER_MIN_SIZE = 40
CHAPTER_TITLE_MIN_SIZE = 20
SECTION_MIN_SIZE = 13.5
SUBSECTION_MIN_SIZE = 11
FOOTNOTE_MAX_SIZE = 7.5
CODE_OVERLAP_RATIO = 0.5
DEFAULT_CODE_LANGUAGE = "java"
_LISTING_CAPTION = re.compile(r"^Listing \d+-\d+")
_CHAPTER_AUTHOR = re.compile(r"^(?:by|with) [A-Z]")
_EDGE_PAGE_NUMBER = re.compile(r"^\d+\s*|\s+\d+$")   # koşu başlığında sayı bazen yapışıktır: "39Use Descriptive Names"
CAPTION_MAX_GAP = 40           # caption alt kenarı ile kod üst kenarı arası (pt)
_BIBLIOGRAPHY_ENTRY = re.compile(r"^\[[A-Za-z0-9]+\]:")


def _bbox(element):
    return element.get("bounding box") or [0, 0, 0, 0]


def _split_header(elements):
    header, body = None, []
    for element in elements:
        if _bbox(element)[1] > HEADER_ZONE_BOTTOM and header is None:
            header = _running_header(element.get("content", ""))
        else:
            body.append(element)
    return header, body


def _running_header(text):
    title = _EDGE_PAGE_NUMBER.sub("", normalize_spaces(clean_ligatures(text)))
    return {"text": title, "is_chapter": title.startswith("Chapter ")}


def _drop_footer(elements):
    return [e for e in elements if _bbox(e)[3] >= FOOTER_ZONE_TOP]


def _caption_above(block, captions):
    """Kod bloğunun hemen üstündeki listing başlığı (PyMuPDF koordinatı, üst-sol)."""
    for caption in captions:
        if 0 <= block["y0"] - caption["y1"] <= CAPTION_MAX_GAP:
            return caption["text"]
    return None


def _code_regions(layout):
    height = layout["page_height"]
    captions = layout.get("listing_captions", [])
    return [{"bottom": height - block["y1"], "top": height - block["y0"],
             "code": block["code"], "caption": _caption_above(block, captions)}
            for block in layout["code_blocks"]]


def _region_index(element, regions):
    bottom, top = _bbox(element)[1], _bbox(element)[3]
    element_height = max(top - bottom, 1)
    for index, region in enumerate(regions):
        overlap = min(top, region["top"]) - max(bottom, region["bottom"])
        if overlap / element_height >= CODE_OVERLAP_RATIO:
            return index
    return None


def _code_block(region):
    return {"type": "code", "lang": DEFAULT_CODE_LANGUAGE, "code": region["code"]}


def _heading_level(size):
    if size >= SECTION_MIN_SIZE:
        return 1
    return 2 if size >= SUBSECTION_MIN_SIZE else 3


def _heading_blocks(element, fixer):
    text = fixer.plain(element.get("content"))
    size = element.get("font size") or 0
    if not text:
        return []
    if size >= CHAPTER_NUMBER_MIN_SIZE and text.isdigit():
        return [{"type": "chapter_number", "num": int(text)}]
    if size >= CHAPTER_TITLE_MIN_SIZE:
        return [{"type": "chapter", "en": text}]
    if _LISTING_CAPTION.match(text):
        return [{"type": "caption", "kind": "listing", "en": text}]
    return [{"type": "heading", "level": _heading_level(size), "en": text}]


def _sentence_objects(text):
    return [{"en": s} for s in split_sentences(text) if not is_numeric_only(s)]


def _paragraph_blocks(element, fixer):
    text = fixer.plain(element.get("content"))
    if not text or is_numeric_only(text):
        return []
    font = element.get("font") or ""
    if (element.get("font size") or 0) <= FOOTNOTE_MAX_SIZE:
        return [{"type": "footnote", "en": fixer.rich(text)}]
    if "Arial" in font and "Bold" in font:
        return [{"type": "heading", "level": 3, "en": text}]
    block = {"type": "para", "sentences": _sentence_objects(fixer.rich(text))}
    style = _paragraph_style(text, font)
    if style:
        block["style"] = style
    return [block] if block["sentences"] else []


def _paragraph_style(text, font):
    if _BIBLIOGRAPHY_ENTRY.match(text):
        return "reference"
    return "quote" if "Italic" in font else None


def _list_block(element, fixer):
    items = [{"en": strip_list_marker(fixer.rich(fixer.plain(item.get("content"))))}
             for item in element.get("list items", [])]
    ordered = element.get("numbering style", "unordered") != "unordered"
    return [{"type": "list", "ordered": ordered, "items": items}]


def _cell_text(cell, fixer):
    parts = [kid.get("content", "") for kid in cell.get("kids", [])]
    return {"en": fixer.rich(fixer.plain(" ".join(parts)))}


def _table_block(element, fixer):
    rows = [[_cell_text(cell, fixer) for cell in row.get("cells", [])]
            for row in element.get("rows", [])]
    return [{"type": "table", "rows": rows}] if rows else []


def _element_blocks(element, fixer):
    kind = element.get("type")
    if kind == "heading":
        return _heading_blocks(element, fixer)
    if kind == "paragraph":
        return _paragraph_blocks(element, fixer)
    if kind == "list":
        return _list_block(element, fixer)
    if kind == "image":
        src = os.path.basename(element.get("source", ""))
        # Kaynak dosyası olmayan görsel öğeleri (çıkarılamayan vektör çizimler vb.)
        # blok üretmez: boş src okuyucuda klasöre istek atıp kırık görsel gösterir.
        return [{"type": "image", "src": src}] if src else []
    if kind == "caption":
        return [{"type": "caption", "en": fixer.rich(fixer.plain(element.get("content")))}]
    if kind == "table":
        return _table_block(element, fixer)
    return []


def _caption_blocks(region, blocks):
    """ODL başlığı zaten caption üretmişse (sayfa 32 gibi) tekrar eklenmez."""
    if not region.get("caption"):
        return []
    if blocks and blocks[-1].get("type") == "caption" and blocks[-1].get("kind") == "listing":
        return []
    return [{"type": "caption", "kind": "listing", "en": region["caption"]}]


def _build_blocks(elements, layout, fixer):
    regions, emitted, blocks = _code_regions(layout), set(), []
    for element in elements:
        index = _region_index(element, regions)
        if index is None:
            blocks.extend(_element_blocks(element, fixer))
        elif index not in emitted:
            emitted.add(index)
            blocks.extend(_caption_blocks(regions[index], blocks))
            blocks.append(_code_block(regions[index]))
    return _merge_chapter_opener(blocks)


def _author_line(block):
    if block.get("type") != "para" or len(block["sentences"]) != 1:
        return None
    text = block["sentences"][0]["en"]
    return text if _CHAPTER_AUTHOR.match(text) else None


def _merge_chapter_opener(blocks):
    """chapter_number + chapter + 'by ...' paragrafını tek chapter bloğu yapar."""
    merged, pending_number = [], None
    for block in blocks:
        if block["type"] == "chapter_number":
            pending_number = block["num"]
        elif block["type"] == "chapter":
            block["num"] = pending_number
            merged.append(block)
        elif merged and merged[-1]["type"] == "chapter" and _author_line(block):
            merged[-1]["author"] = _author_line(block)
        else:
            merged.append(block)
    return merged


def extract_page(pdf_path, pdf_page, image_dir):
    """Sayfayı {blocks, running_header} olarak döndürür; görseller image_dir'e yazılır."""
    elements = extract_odl_elements(pdf_path, pdf_page, image_dir)
    layout = scan_page(pdf_path, pdf_page)
    header, body = _split_header(elements)
    fixer = TextFixer(layout)
    blocks = _build_blocks(_drop_footer(body), layout, fixer)
    return {"blocks": blocks, "running_header": header}
