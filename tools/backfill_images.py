"""Eski HTML'den taşınan sayfalara (1-71) PDF'teki görselleri geriye dönük ekler.

Her çevrilmiş sayfa için PDF'ten görseller çıkarılır; her görsel, PDF'te hemen
önünde gelen metin bloğunun data/pages/page-N.js içindeki karşılığının ALTINA
`image` bloğu olarak eklenir. Metin bloklarına dokunulmaz; tekrar çalıştırmak
güvenlidir (aynı görsel iki kez eklenmez).

Kullanım: python3 backfill_images.py [N ...]   (argümansız: tüm çevrilmiş sayfalar)
"""
import difflib
import json
import os
import re
import shutil
import sys

import fitz

from odl_extract import extract_page
from toc_builder import load_progress

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
PAGES_DIR = os.path.join(ROOT, "data", "pages")
WORK_IN = os.path.join(HERE, "_work", "in")
MIN_IMAGE_SIDE_PX = 80          # daha küçükler süs/çizgi parçasıdır
MATCH_THRESHOLD = 0.55
ANCHOR_CHARS = 80
_TAG = re.compile(r"<[^>]+>")


def _plain(text):
    return re.sub(r"[^a-z0-9]+", " ", _TAG.sub(" ", text or "").lower()).strip()


def block_text(block):
    if block["type"] == "para":
        return " ".join(s.get("en", "") for s in block["sentences"])
    if block["type"] == "list":
        return " ".join(i.get("en", "") for i in block["items"])
    return block.get("en") or block.get("html") or ""


def read_page_js(page):
    path = os.path.join(PAGES_DIR, f"page-{page}.js")
    with open(path, encoding="utf-8") as handle:
        raw = handle.read().strip()
    return path, json.loads(raw[len("window.PAGE("):-2])


def write_page_js(path, document):
    with open(path, "w", encoding="utf-8") as handle:
        handle.write("window.PAGE(" + json.dumps(document, ensure_ascii=False) + ");\n")


def _is_real_image(image_dir, src):
    path = os.path.join(image_dir, src)
    if not os.path.isfile(path):
        return False
    pixmap = fitz.Pixmap(path)
    return min(pixmap.width, pixmap.height) >= MIN_IMAGE_SIDE_PX


def images_with_anchors(blocks, image_dir):
    """PDF sırasına göre (görsel src, önündeki metin) çiftleri."""
    found, previous_text = [], ""
    for block in blocks:
        if block["type"] == "image":
            if _is_real_image(image_dir, block["src"]):
                found.append((block["src"], previous_text))
        elif block["type"] != "code":
            previous_text = _plain(block_text(block))[:ANCHOR_CHARS] or previous_text
    return found


def _similarity(anchor, candidate):
    return difflib.SequenceMatcher(None, anchor, candidate[:len(anchor) + 20]).ratio()


def insertion_index(blocks, anchor):
    """Anchor metnine en çok benzeyen bloğun hemen sonrası; eşleşme yoksa
    ilk başlık/bölüm bloğunun sonrası (sayfa başı görseli)."""
    if anchor:
        scored = [(_similarity(anchor, _plain(block_text(b))), i) for i, b in enumerate(blocks)]
        best = max(scored, default=(0, -1))
        if best[0] >= MATCH_THRESHOLD:
            return best[1] + 1
    for index, block in enumerate(blocks):
        if block["type"] not in ("chapter", "heading", "html"):
            return index
    return len(blocks)


def already_has(blocks, src):
    return any(b["type"] == "image" and b.get("src") == src for b in blocks)


def copy_image(page, image_dir, src):
    target_dir = os.path.join(PAGES_DIR, f"page-{page}_images")
    os.makedirs(target_dir, exist_ok=True)
    shutil.copy2(os.path.join(image_dir, src), os.path.join(target_dir, src))


def backfill_page(progress, page):
    image_dir = os.path.join(WORK_IN, f"page-{page}_images")
    extracted = extract_page(os.path.join(ROOT, progress["book_pdf"]), page + progress["pdf_offset"], image_dir)
    path, document = read_page_js(page)
    added = 0
    for src, anchor in images_with_anchors(extracted["blocks"], image_dir):
        if already_has(document["blocks"], src):
            continue
        document["blocks"].insert(insertion_index(document["blocks"], anchor), {"type": "image", "src": src})
        copy_image(page, image_dir, src)
        added += 1
    if added:
        write_page_js(path, document)
    return added


def translated_pages(progress):
    return [int(n) for n, info in progress["pages"].items() if not info.get("blank")]


def main():
    progress = load_progress()
    pages = [int(a) for a in sys.argv[1:]] or translated_pages(progress)
    total = 0
    for page in sorted(pages):
        added = backfill_page(progress, page)
        total += added
        if added:
            print(f"  sayfa {page}: {added} görsel eklendi")
    print(f"Toplam {total} görsel, {len(pages)} sayfa tarandı.")


if __name__ == "__main__":
    main()
