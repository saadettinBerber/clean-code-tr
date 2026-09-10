---
name: cevir
description: Clean Code kitabının belirtilen sayfasını PDF'ten çıkarıp EN/TR olarak çevirir ve interaktif okuyucuya ekler. Sayfa numarası veya "next/sıradaki" ile kullanılır.
argument-hint: "[sayfa-numarasi veya next]"
allowed-tools: ["Read", "Write", "Edit", "Bash", "Glob", "Agent"]
---

# Clean Code Sayfa Çeviri Skill'i

Kullanıcı bu skill'i çağırdığında aşağıdaki adımları takip et. İlerleme bilgisi
yalnız `progress.json`'dadır; CLAUDE.md'de sayfa numarası tutulmaz. Sayfa veri
formatı ve agent sözleşmesi için `tools/FORMAT.md` okunur.

## 1. Glossary'yi Oku

- `.claude/skills/cevir/glossary.md` dosyasını oku; mevcut terimleri aynen kullan.

## 2. Sayfayı Hazırla

- `$ARGUMENTS` bir sayı ise (örnek: `55`):
  `cd tools && python3 prepare_page.py 55`
- `$ARGUMENTS` "next", "sıradaki", "sonraki", "devam" ise veya boşsa:
  `cd tools && python3 prepare_page.py`
  (`progress.json` → `last_translated_page + 1`'den başlayarak `pages_per_run` adet sayfa; boş sayfalar otomatik atlanıp `blank` işaretlenir.)
- Belirli sayıda sayfa için: `python3 prepare_page.py next --count 3`
- Çıktı: `tools/_work/in/page-N.json` — blok şemasının `en` tarafı, bağlam için
  `context.prev_tail` / `context.next_head`, hazır `chapter` ve tahmini `section.en`.
  Script sayfa/PDF numaralarını ve blok sayılarını yazdırır.
- `ModuleNotFoundError` alırsan: `python3 -m pip install -U opendataloader-pdf pymupdf` (Java 11+ gerekir).

## 3. Çevir (Paralel Çevirmen Agent'lar)

- Hazırlanan HER sayfa için bir çevirmen agent başlat; hepsini TEK mesajda,
  paralel olarak (Agent aracı, general-purpose).
- Her agent şunları okur: `tools/FORMAT.md`, `.claude/skills/cevir/glossary.md`,
  `tools/_work/in/page-N.json`. Çıktıyı `tools/_work/out/page-N.json` olarak yazar:
  - `blocks` aynı sırada korunur; her `en` alanının yanına `tr` eklenir
    (heading, para cümleleri, list maddeleri, caption, footnote, chapter).
  - `code` ve `image` bloklarına DOKUNULMAZ; kod asla çevrilmez.
  - `section.tr` yazılır (`section.en` yanlışsa düzeltilir); `title.en` / `title.tr`
    kısa sayfa başlığı olarak doldurulur (içindekilerde görünür).
  - `concepts`: 2-4 kart, yapılı biçim (`title`, `summary`, `bad`, `good`, `tip`;
    hepsi EN+TR). Örnekler kitaptakinden FARKLI ve özgün; Java/Python/JavaScript.
  - `glossary_new`: sözlükte olmayan yeni terimler `[{en, tr, note}]`.
- CLAUDE.md'deki tüm çeviri kuralları geçerlidir: parantezli terminoloji,
  iki dilli başlıklar, kod/tanımlayıcı çevrilmez, doğru Türkçe karakterler.

## 4. Sonlandır

- Her sayfa için sırayla:
  `cd tools && python3 finalize_page.py _work/out/page-N.json`
- Script şunları yapar: `data/pages/page-N.js` yazar, görselleri kopyalar,
  `progress.json`'u günceller (kayıt + `last_translated_page`), `glossary_new`
  terimlerini `glossary.md`'ye ekler, `data/toc.js` ve `data/glossary.js`'i yeniden üretir.
- `UYARI: ... 'tr' alanı boş` çıktısı görürsen ilgili çıktı JSON'unu düzelt ve
  `finalize_page.py`'yi yeniden çalıştır.

## 5. Doğrula ve Raporla

- Kısa kontrol yap (isteğe bağlı: `xdg-open index.html` ile okuyucuyu aç,
  `index.html#page-N` bağlantısına git).
- Kullanıcıya bildir: hangi sayfalar çevrildi, sıradaki sayfa numarası nedir.

## 6. Commit ve Push

- `git add -A && git commit -m "Sayfa N çevirisi eklendi — Chapter X: Title"`
- `git push`
- Commit mesajında `Co-Authored-By` veya yapay zeka imzası OLMAZ.
