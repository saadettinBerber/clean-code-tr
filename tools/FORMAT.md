# Sayfa Veri Formatı (data/pages/page-N.js)

Her çevrilmiş sayfa `data/pages/page-N.js` dosyasında saklanır ve tek bir
`window.PAGE({...})` çağrısından oluşur. Okuyucu (`index.html` + `js/reader.js`)
bu nesneyi tipli bloklar halinde çizer.

```js
window.PAGE({
  "id": "page-5",
  "page": 5,                         // kitap sayfa numarası
  "pdf_page": 36,                    // PDF fiziksel sayfa (page + 31)
  "chapter": { "num": 1, "en": "Clean Code", "tr": "Temiz Kod" },
  "section": { "en": "The Grand Redesign in the Sky", "tr": "Gökyüzündeki Büyük Yeniden Tasarım" },
  "title":   { "en": "The Grand Redesign in the Sky", "tr": "Gökyüzündeki Büyük Yeniden Tasarım" },
  "blocks":  [ ...aşağıdaki blok tipleri, sayfadaki sırayla... ],
  "concepts": [ ...kavram kartları... ]
});
```

- `section`: sayfanın üst kısmında geçerli olan bölüm başlığı (kitaptaki koşu
  başlığı). Sayfa yeni bir başlıkla başlamıyorsa önceki sayfanın devamıdır.
- `title`: içindekiler ve sayfa kartlarında görünen kısa sayfa başlığı.

## İki dilli metin birimi

Her metin alanı `en` (orijinal) ve `tr` (çeviri) taşır. `html: true` ise her
iki alan da güvenli HTML içerebilir (yalnız `<code>`, `<strong>`, `<em>`,
`<br>`, `<sup>`); aksi halde düz metindir ve `` `kod` `` biçimindeki ters
tırnak parçaları okuyucuda `<code>` olarak çizilir.

## Blok tipleri

| type        | Alanlar                                                        | Açıklama |
|-------------|----------------------------------------------------------------|----------|
| `chapter`   | `num`, `en`, `tr`, `author?`                                   | Bölüm açılış başlığı (sadece bölümün ilk sayfasında) |
| `heading`   | `level` (1-3), `en`, `tr`                                      | Bölüm içi başlık. 1 = ana kesit, 2 = alt kesit, 3 = küçük etiket |
| `para`      | `sentences: [{en, tr, html?, words?}]`, `style?`               | Gövde paragrafı; cümle cümle. `style: "quote"` italik alıntı paragrafı |
| `list`      | `ordered` (bool), `items: [{en, tr, html?}]`                   | Madde listesi |
| `code`      | `lang`, `code`, `caption?: {en, tr}`                           | Kod listesi. `code` ASLA çevrilmez; satır sonu ve girinti korunur |
| `caption`   | `en`, `tr`, `kind?`                                            | Şekil/listing açıklaması (`kind: "listing"` → "Listing 3-7 ..." başlığı) |
| `image`     | `src`                                                          | `data/pages/page-N_images/<src>` içindeki görsel |
| `footnote`  | `en`, `tr`                                                     | Sayfa altı dipnotu |
| `table`     | `rows: [[{en,tr}]]`                                            | Basit tablo |
| `html`      | `html`                                                         | Eski (legacy) sayfalardan taşınan serbest HTML; içinde `.tr-text` / `.en-text` span'ları olabilir |

`words` (isteğe bağlı): `[{w, t}]` — cümledeki kelimeler ve bağlama uygun
Türkçe anlamları. Varsa okuyucu kelimeye tıklayınca anlamını gösterir.

## Kavram kartları (`concepts`)

Yeni sayfalar için yapılı biçim:

```js
{
  "id": "boy-scout-rule",
  "title":   { "en": "The Boy Scout Rule", "tr": "İzci Kuralı (Boy Scout Rule)" },
  "summary": { "en": "...", "tr": "..." },
  "bad":  { "lang": "java", "code": "...", "why": { "en": "...", "tr": "..." } },
  "good": { "lang": "java", "code": "...", "why": { "en": "...", "tr": "..." } },
  "tip":  { "en": "...", "tr": "..." }
}
```

Eski sayfalardan taşınan kartlar `body_html` alanı taşır ve olduğu gibi çizilir:
`{ "id", "title": {en, tr}, "body_html": "<h4>...</h4>..." }`.

## Çevirmen agent girdisi ve çıktısı

`tools/prepare_page.py`, `tools/_work/in/page-N.json` dosyasını üretir. Bu dosya
yukarıdaki şemanın yalnız `en` tarafını içerir; ayrıca bağlam için
`context.prev_tail` (önceki sayfanın son paragrafı) ve `context.next_head`
(sonraki sayfanın ilk paragrafı) alanlarını taşır. Agent:

1. `blocks` listesini **aynı sırada** korur, her `en` alanının yanına `tr` ekler
   (`code` bloklarına ve `image` bloklarına dokunmaz).
2. `section.tr`, `title.en`, `title.tr` alanlarını doldurur (`section.en`
   hazırlayıcı tarafından tahmin edilir; yanlışsa düzeltir).
3. `concepts` listesini (2-4 kart) yapılı biçimde üretir.
4. Sayfada geçen ve sözlükte olmayan yeni terimleri `glossary_new` listesine
   yazar: `[{ "en": "...", "tr": "...", "note": "..." }]`.
5. Çıktıyı `tools/_work/out/page-N.json` olarak kaydeder.

`tools/finalize_page.py _work/out/page-N.json` bunu `data/pages/page-N.js`'e
işler, görselleri kopyalar, `progress.json`'u ilerletir, `data/toc.js` ve
`data/glossary.js` dosyalarını yeniden üretir ve `glossary_new` terimlerini
`.claude/skills/cevir/glossary.md`'ye ekler.
