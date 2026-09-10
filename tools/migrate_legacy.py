#!/usr/bin/env python3
"""Convert legacy legacy/pages/page-N.html files into data/pages/page-N.js.

Output schema is described in tools/FORMAT.md. The legacy HTML is read only;
nothing under pages/ is modified.
"""
import copy
import json
import re
import sys
from collections import Counter
from pathlib import Path

from bs4 import BeautifulSoup

PROJECT_ROOT = Path(__file__).resolve().parent.parent
LEGACY_PAGES_DIR = PROJECT_ROOT / "legacy" / "pages"
OUTPUT_DIR = PROJECT_ROOT / "data" / "pages"
REGISTRY_PATH = PROJECT_ROOT / "tools" / "_work" / "legacy_registry.json"
INDEX_HTML_PATH = PROJECT_ROOT / "legacy" / "index.html"

PDF_PAGE_OFFSET = 31
HTML_PARSER = "html.parser"
KEPT_INLINE_TAGS = {"code", "strong", "em", "br", "sup"}
CHAPTER_NAMES_TR = {1: "Temiz Kod", 2: "Anlamlı İsimler", 3: "Fonksiyonlar"}
BILINGUAL_SEPARATOR = " / "
SECTION_SEPARATOR = "›"
TURKISH_LETTERS = set("çğıöşüÇĞİÖŞÜ")
TURKISH_HINT_WORDS = {"ve", "bir", "kod", "her", "için", "ile", "devam", "son"}
# html.parser lowercases every attribute/tag; SVG is case-sensitive, so
# verbatim html blocks get their camelCase names restored.
SVG_CASE_FIXES = {"viewbox=": "viewBox=", "lineargradient": "linearGradient"}
JS_WRAPPER_PREFIX = "window.PAGE("
JS_WRAPPER_SUFFIX = ");\n"

LEGACY_PAGE_PATTERN = re.compile(r"page-(\d+)\.html$")
CHAPTER_HEAD_PATTERN = re.compile(r"Chapter\s+(\d+)\s*:\s*(.*)")
INDEX_TITLE_PATTERN = re.compile(
    r"^\s*(\d+)\s*:\s*\{\s*file:\s*'[^']*',\s*title:\s*'((?:[^'\\]|\\.)*)'",
    re.MULTILINE,
)


def collapse_whitespace(text):
    return re.sub(r"\s+", " ", text).strip()


def strip_single_newlines(text):
    if text.startswith("\n"):
        text = text[1:]
    if text.endswith("\n"):
        text = text[:-1]
    return text


def looks_turkish(text):
    if any(letter in TURKISH_LETTERS for letter in text):
        return True
    words = re.findall(r"[a-zçğıöşü]+", text.lower())
    return any(word in TURKISH_HINT_WORDS for word in words)


def clean_inline_html(container):
    """Keep only the inline tags allowed by FORMAT.md, unwrap the rest."""
    for tag in list(container.find_all(True)):
        if tag.name in KEPT_INLINE_TAGS:
            tag.attrs = {}
        else:
            tag.unwrap()
    return collapse_whitespace(container.decode_contents())


def bilingual_unit(element):
    tr_span = element.find(class_="tr-text")
    en_span = element.find(class_="en-text")
    if tr_span is None or en_span is None:
        plain = collapse_whitespace(element.get_text(" "))
        return {"en": plain, "tr": plain, "html": True}
    return {
        "en": clean_inline_html(en_span),
        "tr": clean_inline_html(tr_span),
        "html": True,
    }


def is_language_span(node):
    classes = set(getattr(node, "attrs", {}).get("class") or [])
    return bool(classes & {"tr-text", "en-text"})


def leading_marker_html(footnote):
    """Footnote numbers sometimes sit outside the language spans; keep them."""
    wrapper = BeautifulSoup("", HTML_PARSER).new_tag("span")
    for node in footnote.contents:
        if is_language_span(node):
            break
        wrapper.append(copy.copy(node))
    return clean_inline_html(wrapper)


def heading_block(element, level):
    return {"type": "heading", "level": level, **bilingual_unit(element)}


def para_block(element, style=None):
    block = {"type": "para", "sentences": [bilingual_unit(element)]}
    if style:
        block["style"] = style
    return block


def code_block(pre, caption=None):
    block = {
        "type": "code",
        "lang": "java",
        "code": strip_single_newlines(pre.get_text()),
    }
    if caption:
        block["caption"] = caption
    return block


def listing_caption(header):
    if header is None:
        return None
    if header.find(class_="en-text") and header.find(class_="tr-text"):
        unit = bilingual_unit(header)
        return {"en": unit["en"], "tr": unit["tr"]}
    label = header.find(class_="listing-label")
    label_text = label.extract().get_text(strip=True) if label else ""
    name = collapse_whitespace(header.get_text(" "))
    parts = [label_text, name] if label_text.startswith("Listing") else [name]
    text = BILINGUAL_SEPARATOR.join(part for part in parts if part)
    return {"en": text, "tr": text}


def listing_block(element):
    caption = listing_caption(element.find(class_="code-listing-header"))
    pre = element.find("pre")
    if pre is None:
        return html_block(element)
    return code_block(pre, caption)


def footnote_block(element):
    unit = bilingual_unit(element)
    marker = leading_marker_html(element)
    if marker:
        unit["en"] = f"{marker} {unit['en']}"
        unit["tr"] = f"{marker} {unit['tr']}"
    return {"type": "footnote", **unit}


def list_block(element):
    items = [bilingual_unit(item) for item in element.find_all("li", recursive=False)]
    return {"type": "list", "ordered": element.name == "ol", "items": items}


def html_block(element):
    html = str(element)
    for lowered, original in SVG_CASE_FIXES.items():
        html = html.replace(lowered, original)
    return {"type": "html", "html": html}


def paragraph_block(element, classes):
    if "content-paragraph" in classes or "page-continuation" in classes:
        style = "continuation" if "page-continuation" in classes else None
        return para_block(element, style)
    if element.name == "blockquote":
        return para_block(element, "quote")
    return None


def convert_element(element):
    classes = set(element.get("class") or [])
    if "concepts-section" in classes:
        return None
    paragraph = paragraph_block(element, classes)
    if paragraph is not None:
        return paragraph
    if "section-title" in classes:
        return heading_block(element, level=1)
    if "section-title-sub" in classes:
        return heading_block(element, level=2)
    if "code-listing" in classes:
        return listing_block(element)
    if element.name == "pre" or "code-block" in classes:
        return code_block(element)
    if "footnote" in classes:
        return footnote_block(element)
    if element.name in ("ol", "ul") or "numbered-list" in classes:
        return list_block(element)
    return html_block(element)


def content_blocks(soup):
    wrapper = soup.select_one(".content-wrapper")
    blocks = []
    for child in wrapper.find_all(recursive=False):
        if "page-nav" in (child.get("class") or []):
            break
        block = convert_element(child)
        if block is not None:
            blocks.append(block)
    return blocks


def concept_from_modal(modal):
    heading = modal.select_one(".modal-header h3")
    title = bilingual_unit(heading) if heading else {"en": "", "tr": ""}
    body = modal.select_one(".modal-body")
    return {
        "id": modal["id"].removeprefix("modal-"),
        "title": {"en": title["en"], "tr": title["tr"]},
        "body_html": body.decode_contents().strip() if body else "",
    }


def concepts(soup):
    modals = soup.select("div.modal-overlay[id^='modal-']")
    return [concept_from_modal(modal) for modal in modals]


def parse_chapter(head):
    match = CHAPTER_HEAD_PATTERN.match(head)
    number = int(match.group(1)) if match else 0
    names = match.group(2) if match else head
    en, _, tr = names.partition(BILINGUAL_SEPARATOR)
    fallback_tr = CHAPTER_NAMES_TR.get(number, en.strip())
    return {"num": number, "en": en.strip(), "tr": tr.strip() or fallback_tr}


def parse_section(text, chapter):
    text = text.strip()
    if not text:
        return {"en": chapter["en"], "tr": chapter["tr"]}
    parts = [part.strip() for part in text.split(BILINGUAL_SEPARATOR)]
    is_en_tr_pair = len(parts) == 2 and not looks_turkish(parts[0]) and looks_turkish(parts[1])
    if is_en_tr_pair:
        return {"en": parts[0], "tr": parts[1]}
    return {"en": text, "tr": text}


def chapter_and_section(soup):
    info = soup.select_one(".chapter-info")
    text = collapse_whitespace(info.get_text(" ")) if info else ""
    head, _, section_text = text.partition(SECTION_SEPARATOR)
    chapter = parse_chapter(head.strip())
    return chapter, parse_section(section_text, chapter)


def titles_from_index():
    source = INDEX_HTML_PATH.read_text(encoding="utf-8")
    titles = {}
    for number, raw_title in INDEX_TITLE_PATTERN.findall(source):
        title = raw_title.replace("\\'", "'")
        tr, _, en = title.partition(BILINGUAL_SEPARATOR)
        titles[int(number)] = {"en": en.strip() or tr.strip(), "tr": tr.strip()}
    return titles


def page_number_of(path):
    match = LEGACY_PAGE_PATTERN.search(path.name)
    return int(match.group(1)) if match else None


def build_page(path, titles):
    soup = BeautifulSoup(path.read_text(encoding="utf-8"), HTML_PARSER)
    number = page_number_of(path)
    chapter, section = chapter_and_section(soup)
    return {
        "id": f"page-{number}",
        "page": number,
        "pdf_page": number + PDF_PAGE_OFFSET,
        "chapter": chapter,
        "section": section,
        "title": titles.get(number, dict(section)),
        "blocks": content_blocks(soup),
        "concepts": concepts(soup),
    }


def write_page_js(page):
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    target = OUTPUT_DIR / f"{page['id']}.js"
    payload = json.dumps(page, ensure_ascii=False, indent=2)
    target.write_text(f"{JS_WRAPPER_PREFIX}{payload}{JS_WRAPPER_SUFFIX}", encoding="utf-8")
    return target


def registry_entry(page):
    return {
        "pdf_page": page["pdf_page"],
        "title_en": page["title"]["en"],
        "title_tr": page["title"]["tr"],
        "section_en": page["section"]["en"],
        "section_tr": page["section"]["tr"],
        "chapter": page["chapter"]["num"],
    }


def write_registry(pages):
    REGISTRY_PATH.parent.mkdir(parents=True, exist_ok=True)
    registry = {str(page["page"]): registry_entry(page) for page in pages}
    REGISTRY_PATH.write_text(
        json.dumps(registry, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )


def load_page_js(path):
    source = path.read_text(encoding="utf-8")
    if not (source.startswith(JS_WRAPPER_PREFIX) and source.endswith(JS_WRAPPER_SUFFIX)):
        raise ValueError(f"{path.name}: missing window.PAGE wrapper")
    return json.loads(source[len(JS_WRAPPER_PREFIX):-len(JS_WRAPPER_SUFFIX)])


def verify_outputs(paths):
    block_counts = Counter()
    html_only_pages = []
    for path in paths:
        page = load_page_js(path)
        if not page["blocks"]:
            raise ValueError(f"{path.name}: no blocks produced")
        block_types = [block["type"] for block in page["blocks"]]
        block_counts.update(block_types)
        if set(block_types) == {"html"}:
            html_only_pages.append(page["page"])
    return block_counts, html_only_pages


def print_summary(page_count, block_counts, html_only_pages):
    print(f"Pages converted: {page_count}")
    for block_type, count in sorted(block_counts.items()):
        print(f"  {block_type:10s} {count}")
    if html_only_pages:
        print(f"Pages with only html blocks: {html_only_pages}")
    else:
        print("Pages with only html blocks: none")


def legacy_page_paths():
    paths = [p for p in LEGACY_PAGES_DIR.glob("page-*.html") if page_number_of(p)]
    return sorted(paths, key=page_number_of)


def main():
    titles = titles_from_index()
    pages = [build_page(path, titles) for path in legacy_page_paths()]
    written = [write_page_js(page) for page in pages]
    write_registry(pages)
    block_counts, html_only_pages = verify_outputs(written)
    print_summary(len(written), block_counts, html_only_pages)
    return 0


if __name__ == "__main__":
    sys.exit(main())
