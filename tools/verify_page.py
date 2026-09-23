#!/usr/bin/env python3
"""Girdi-çıktı yapısal doğrulayıcı: python3 verify_page.py 193 [194 195 ...]

Kontrol listesi:
- üst düzey anahtarlar tam olarak {id,page,pdf_page,chapter,section,title,blocks,concepts,glossary_new}
- id/page/pdf_page/chapter tutarlılığı
- section.tr dolu (section.en doluysa), title en+tr dolu
- blok sayısı/sırası/tipleri birebir
- code blokları lang+code birebir
- code dışı bloklarda en alanları birebir (sıra duyarlı)
- boş tr yok
- image src değişmemiş
- concepts 2-4, alanlar eksiksiz
- glossary_new en+tr dolu
"""
import json
import sys


def enfields(x, acc):
    if isinstance(x, dict):
        for k, v in x.items():
            if k == 'en':
                acc.append(v)
            else:
                enfields(v, acc)
    elif isinstance(x, list):
        for i in x:
            enfields(i, acc)


def trfields(x, acc):
    if isinstance(x, dict):
        for k, v in x.items():
            if k == 'tr':
                acc.append(v)
            else:
                trfields(v, acc)
    elif isinstance(x, list):
        for i in x:
                trfields(i, acc)


def verify(n):
    inp = json.load(open(f'_work/in/page-{n}.json'))
    out = json.load(open(f'_work/out/page-{n}.json'))
    errs = []

    expected = {'id', 'page', 'pdf_page', 'chapter', 'section', 'title',
                'blocks', 'concepts', 'glossary_new'}
    keys = set(out.keys())
    if keys != expected:
        errs.append(f"top-level keys: {sorted(keys)}")
    if out.get('id') != f'page-{n}':
        errs.append(f"id={out.get('id')}")
    if out.get('page') != int(n):
        errs.append(f"page={out.get('page')}")
    if out.get('pdf_page') != inp.get('pdf_page'):
        errs.append(f"pdf_page={out.get('pdf_page')}")
    if out.get('chapter') != inp.get('chapter'):
        errs.append("chapter differs")

    sec = out.get('section', {})
    if sec.get('en') and not sec.get('tr'):
        errs.append("section.tr empty")
    t = out.get('title', {})
    if not t.get('en') or not t.get('tr'):
        errs.append(f"title incomplete: {t}")

    ib, ob = inp['blocks'], out['blocks']
    if len(ib) != len(ob):
        errs.append(f"block count {len(ib)} -> {len(ob)}")

    for i, (a, b) in enumerate(zip(ib, ob)):
        ta, tb = a.get('type'), b.get('type')
        if ta != tb:
            errs.append(f"block[{i}] type {ta} -> {tb}")
            continue
        if ta == 'code':
            if (a.get('lang'), a.get('code')) != (b.get('lang'), b.get('code')):
                errs.append(f"block[{i}] code modified")
        else:
            ea, eb = [], []
            enfields(a, ea)
            enfields(b, eb)
            if ea != eb:
                errs.append(f"block[{i}] en fields differ")
        if ta == 'image' and a.get('src') != b.get('src'):
            errs.append(f"block[{i}] image src changed")

    trall = []
    trfields(out['blocks'], trall)
    for i, v in enumerate(trall):
        if v is None or (isinstance(v, str) and not v.strip()):
            errs.append(f"empty tr #{i}")

    c = out.get('concepts', [])
    if not (2 <= len(c) <= 4):
        errs.append(f"concepts count {len(c)}")
    for i, cart in enumerate(c):
        for k in ('id', 'title', 'summary', 'bad', 'good', 'tip'):
            if k not in cart:
                errs.append(f"concept[{i}] missing {k}")
        for kk in ('bad', 'good'):
            for f in ('lang', 'code', 'why'):
                if f not in cart.get(kk, {}):
                    errs.append(f"concept[{i}].{kk} missing {f}")

    g = out.get('glossary_new', [])
    for i, term in enumerate(g):
        if not term.get('en') or not term.get('tr'):
            errs.append(f"glossary_new[{i}] incomplete: {term}")

    status = "OK" if not errs else "FAIL"
    print(f"p{n}: {status}  (concepts={len(c)} gloss_new={[x.get('en') for x in g]})")
    for e in errs:
        print(f"    - {e}")
    return not errs


if __name__ == '__main__':
    pages = [int(a) for a in sys.argv[1:]]
    if not pages:
        print(__doc__)
        sys.exit(2)
    ok = all(verify(n) for n in pages)
    sys.exit(0 if ok else 1)
