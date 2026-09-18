"""Sıradaki (ya da belirtilen) kitap sayfasını PDF'ten çıkarır ve çevirmen
agent'ının girdi dosyasını üretir: tools/_work/in/page-N.json

Kullanım:
  python3 prepare_page.py             -> progress.json'daki sıradaki sayfa(lar)
  python3 prepare_page.py 55          -> yalnız kitap sayfası 55
  python3 prepare_page.py next --count 3

Boş sayfalar (bölüm sonu) "next" akışında otomatik atlanır ve progress.json'da
blank olarak işaretlenir. Görseller _work/in/page-N_images/ altına yazılır.
"""
import json
import os
import sys

from layout_scan import page_plain_text
from odl_extract import extract_page
from text_utils import normalize_spaces
from toc_builder import load_progress, save_progress

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
WORK_IN = os.path.join(HERE, "_work", "in")
CONTEXT_CHARS = 700
MAX_BLANK_SKIPS = 3


def pdf_path(progress):
    return os.path.join(ROOT, progress["book_pdf"])


def chapter_of(progress, page):
    current = progress["chapters"][0]
    for chapter in progress["chapters"]:
        if chapter["start"] <= page:
            current = chapter
    return {"num": current["num"], "en": current["en"], "tr": current["tr"]}


def _previous_section(progress, page):
    previous = progress["pages"].get(str(page - 1), {})
    return {"en": previous.get("section_en", ""), "tr": previous.get("section_tr", "")}


def _section_of(progress, page, header):
    """Koşu başlığı yoksa bölüm açılış sayfasıdır (kesit yok); tek sayfa
    başlığı (Chapter ...) ise kesit önceki sayfadan devam eder."""
    if header is None:
        return {"en": "", "tr": ""}
    if not header["is_chapter"] and header["text"]:
        return {"en": header["text"], "tr": ""}
    return _previous_section(progress, page)


def _context_snippets(pdf, pdf_page):
    previous = normalize_spaces(page_plain_text(pdf, pdf_page - 1))
    following = normalize_spaces(page_plain_text(pdf, pdf_page + 1))
    return {"prev_tail": previous[-CONTEXT_CHARS:],
            "next_head": following[:CONTEXT_CHARS]}


def build_input(progress, page):
    pdf_page = page + progress["pdf_offset"]
    image_dir = os.path.join(WORK_IN, f"page-{page}_images")
    extracted = extract_page(pdf_path(progress), pdf_page, image_dir)
    return {
        "id": f"page-{page}", "page": page, "pdf_page": pdf_page,
        "chapter": chapter_of(progress, page),
        "section": _section_of(progress, page, extracted["running_header"]),
        "title": {"en": "", "tr": ""},
        "blocks": extracted["blocks"],
        "concepts": [], "glossary_new": [],
        "context": _context_snippets(pdf_path(progress), pdf_page),
    }


def _is_blank(document):
    return not any(b["type"] != "image" for b in document["blocks"])


def write_input(document):
    os.makedirs(WORK_IN, exist_ok=True)
    path = os.path.join(WORK_IN, f"{document['id']}.json")
    with open(path, "w", encoding="utf-8") as handle:
        json.dump(document, handle, ensure_ascii=False, indent=2)
    return path


def mark_blank(progress, page):
    progress["pages"][str(page)] = {"blank": True, "pdf_page": page + progress["pdf_offset"]}
    progress["last_translated_page"] = max(progress["last_translated_page"], page)
    save_progress(progress)


def parse_args(argv):
    spec, count = "next", None
    args = [a for a in argv[1:]]
    if "--count" in args:
        count = int(args[args.index("--count") + 1])
        del args[args.index("--count"):args.index("--count") + 2]
    if args:
        spec = args[0]
    return spec, count


def _next_pages(progress, count):
    start = progress["last_translated_page"] + 1
    pages, page, skipped = [], start, 0
    while len(pages) < count and page <= progress["book_total_pages"]:
        pages.append(page)
        page += 1
    return pages


def prepare_pages(progress, spec, count):
    if spec != "next":
        return [_prepare_one(progress, int(spec), auto_skip=False)]
    wanted = count or progress.get("pages_per_run", 1)
    prepared, skipped = [], 0
    for page in _next_pages(progress, wanted + MAX_BLANK_SKIPS):
        if len(prepared) == wanted:
            break
        entry = _prepare_one(progress, page, auto_skip=True)
        if entry:
            prepared.append(entry)
    return prepared


def _prepare_one(progress, page, auto_skip):
    document = build_input(progress, page)
    if _is_blank(document):
        print(f"  ! Sayfa {page} boş" + (" — atlandı, işaretlendi" if auto_skip else ""))
        if auto_skip:
            mark_blank(progress, page)
        return None
    return {"page": page, "pdf_page": document["pdf_page"],
            "path": write_input(document), "blocks": _block_summary(document)}


def _block_summary(document):
    counts = {}
    for block in document["blocks"]:
        counts[block["type"]] = counts.get(block["type"], 0) + 1
    return ", ".join(f"{k}:{v}" for k, v in counts.items())


def main():
    spec, count = parse_args(sys.argv)
    progress = load_progress()
    prepared = [p for p in prepare_pages(progress, spec, count) if p]
    if not prepared:
        print("Hazırlanacak sayfa yok.")
        return
    print(f"Hazırlanan sayfa sayısı: {len(prepared)}\n")
    for entry in prepared:
        print(f"  Sayfa {entry['page']} (PDF {entry['pdf_page']})  [{entry['blocks']}]")
        print(f"    girdi: {entry['path']}")
    print("\nSonraki adım: her girdi için bir çevirmen agent çalıştır "
          "(kurallar: tools/FORMAT.md), çıktıyı tools/_work/out/page-N.json yaz, "
          "sonra: python3 tools/finalize_page.py tools/_work/out/page-N.json")


if __name__ == "__main__":
    main()
