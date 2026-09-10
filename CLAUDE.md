# Clean Code Kitap Çeviri Projesi

## Proje Amacı

Bu proje, Robert C. Martin'in "Clean Code: A Handbook of Agile Software Craftsmanship" kitabını sayfa sayfa Türkçeye çevirmeyi ve kitap benzeri, iki dilli, interaktif bir okuyucuda (reader) sunmayı amaçlar. Kullanıcı her seferinde bir ya da birkaç sayfa çeviri ister. Çeviriler `data/pages/page-N.js` veri dosyaları olarak saklanır; tek sayfalık `index.html` okuyucusu bu verileri çizer.

## PDF Bilgileri

- **PDF Dosya Yolu**: `progress.json` → `book_pdf` (depo köküne göreli; araçlar yolu buradan okur, elle yazılan mutlak yol kullanılmaz)
- **Sayfa Offset**: PDF sayfa numarası = Kitap sayfa numarası + 31 (`progress.json` → `pdf_offset`)
  - Örnek: Kitap sayfa 1 = PDF sayfa 32
  - Örnek: Kitap sayfa 10 = PDF sayfa 41
- **Kitap Yapısı**:
  - Foreword: PDF sayfa 20-22
  - Introduction: PDF sayfa 26-28
  - Chapter 1 (Clean Code): PDF sayfa 32'den başlar (kitap sayfa 1)
  - Tüm bölümlerin (17 bölüm + Ekler) başlangıç sayfaları `progress.json` → `chapters` tablosundadır.

## İlerleme Takibi (progress.json)

- **KRİTİK KURAL**: İlerlemenin TEK doğruluk kaynağı (single source of truth) kök dizindeki `progress.json` dosyasıdır. Bu dosya (CLAUDE.md) hiçbir ilerleme sayısı içermez. Kural: **değişen her şey `progress.json`'dadır.**
- `progress.json` alanları:
  - `last_translated_page`: son çevrilen (ya da boş diye işaretlenen) kitap sayfası
  - `pages`: çevrilmiş sayfa kaydı (sayfa başına `pdf_page`, `chapter`, `title_en/tr`, `section_en/tr`; sayfa 16 gibi boş sayfalar için `"blank": true`)
  - `chapters`: bölüm tablosu (`num`, `en`, `tr`, `start` = başlangıç kitap sayfası)
  - `pdf_offset` (31), `book_total_pages` (431), `pages_per_run` (bir çalıştırmada hazırlanacak sayfa sayısı)
- `progress.json` elle düzenlenmez; `tools/prepare_page.py` (boş sayfa işaretleme) ve `tools/finalize_page.py` (kayıt + ilerletme) tarafından güncellenir.
- Kullanıcı "sıradaki sayfa", "sonraki sayfa", "next", "devam et" dediğinde veya `/cevir next` yazdığında `last_translated_page + 1`'den başlayan sayfa(lar) çevrilir; bunu `prepare_page.py` kendisi hesaplar.

## Çeviri Kuralları

### Dil Yaklaşımı
1. **Parantezli Terminoloji (Parenthetical Terminology)**: Teknik terimler Türkçe yazılır, yanına parantez içinde İngilizce orijinali eklenir.
   - Örnek: "Yeniden düzenleme (Refactoring), kodun dış davranışını değiştirmeden iç yapısını iyileştirme sürecidir."
2. **Kod blokları ASLA çevrilmez**: Değişken adları, fonksiyon adları, sınıf adları, import ifadeleri, dosya yolları, komut satırı komutları her zaman İngilizce kalır.
3. **Sektörde yaygın kullanılan terimler**: API, bug, debug, commit, push, pull, merge, framework, library gibi terimler İngilizce bırakılır, gerekirse Türkçe açıklama eklenir.
4. **Deyimler ve metaforlar**: Türkçe karşılığı bulunur veya açıklanır. Örneğin "Boy Scout Rule" -> "İzci Kuralı (Boy Scout Rule)" şeklinde yazılır.
5. **Başlıklar**: Hem Türkçe hem İngilizce yazılır. Örnek: "Anlamlı İsimler / Meaningful Names"
6. **ÖZET YASAKTIR**: Çeviriler asla özet niteliğinde olmamalıdır. Sayfadaki her cümle, tüm detayları ve kod analizleriyle birlikte tam sadakatle çevrilir (`blocks` yapısı bunu zorunlu kılar: her `en` için bir `tr`).

### Sayfa Bağlamı
- Her çeviri yapılırken istenilen sayfanın **bir önceki** ve **bir sonraki** sayfası da bağlam için kullanılır. `prepare_page.py` bunu otomatik sağlar: girdi dosyasındaki `context.prev_tail` (önceki sayfanın sonu) ve `context.next_head` (sonraki sayfanın başı).
- Amaç: Paragraf ortasında kesilebilecek cümleleri tamamlamak ve bağlamı anlamak.
- Ancak çeviri sadece istenilen sayfayı kapsar, önceki/sonraki sayfalar sadece bağlam içindir.

### Bulunduğu Başlık/Bölüm
- Sayfanın hangi Chapter ve Section altında olduğu her zaman belirtilmelidir (`chapter` ve `section` alanları).
- `chapter` hazırlayıcı tarafından `progress.json`'dan doldurulur; `section.en` koşu başlığından tahmin edilir, çevirmen agent yanlışsa düzeltir ve `section.tr`'yi yazar.
- Bu bilgi okuyucuda koşu başlığında (running header) ve üst barda görünür.

## Glossary (Terim Sözlüğü) Kuralı

- **KRİTİK KURAL**: Çeviriye başlamadan önce `.claude/skills/cevir/glossary.md` okunur ve mevcut terimler aynen kullanılır. Bir terimi nasıl çevirdiysen, her yerde aynı şekilde çevirmelisin.
- Çevirmen agent, sayfada geçen ve sözlükte OLMAYAN her terimi çıktı JSON'unun `glossary_new` listesine yazar: `[{ "en": "...", "tr": "...", "note": "..." }]`.
- `finalize_page.py` bu terimleri `glossary.md`'ye otomatik ekler (alfabetik sıra korunur) ve `data/glossary.js`'i yeniden üretir. Yine de her sayfadan sonra agent yeni terim var mı diye kontrol etmek zorundadır; boş bırakılan `glossary_new` "yeni terim yok" anlamına gelir.
- Format: `| İngilizce Terim | Türkçe Karşılığı | Açıklama/Not |`
- `data/glossary.js` elle düzenlenmez; kaynak dosya her zaman `glossary.md`'dir.

## Sistem Mimarisi

```
Clean Code/
├── index.html                  Okuyucu uygulaması (tek sayfa, kitap benzeri arayüz)
├── css/reader.css              Okuyucu stili
├── js/
│   ├── reader.js               Okuyucu motoru (tek/çift sayfa görünümü, gezinme, adres yönlendirme)
│   ├── pages.js                Sayfa verisi yükleyici (data/pages/page-N.js, önbellek)
│   ├── sheet.js                Tek bir kitap yaprağını doldurur (koşu başlığı, gövde, kavramlar, folyo)
│   ├── controls.js             Denetimler (dil modu, yazı boyutu, klavye, kaydırma, görünüm düğmesi)
│   ├── blocks.js               Blok tiplerini HTML'e çizer
│   ├── concepts.js             Kavram kartları (few-shot modal)
│   ├── panels.js               İçindekiler ve sözlük çekmeceleri
│   ├── cover.js                Kapak görünümü (ilerleme, bölüm listesi)
│   └── highlight.js            Kod vurgulama (syntax highlighting)
├── data/
│   ├── toc.js                  window.TOC — ÜRETİLİR (tools/toc_builder.py), elle düzenlenmez
│   ├── glossary.js             window.GLOSSARY — ÜRETİLİR (glossary.md'den), elle düzenlenmez
│   └── pages/
│       ├── page-N.js           Çevrilmiş sayfa: window.PAGE({...}) — format: tools/FORMAT.md
│       └── page-N_images/      Sayfadan çıkarılan PNG görseller
├── progress.json               İlerlemenin tek doğruluk kaynağı
├── tools/
│   ├── prepare_page.py         PDF → _work/in/page-N.json (çevirmen agent girdisi)
│   ├── finalize_page.py        _work/out/page-N.json → data/pages + progress + glossary + toc
│   ├── toc_builder.py          data/toc.js ve data/glossary.js üretimi
│   ├── odl_extract.py          Sayfayı yapılı bloklara ayırır (OpenDataLoader + PyMuPDF)
│   ├── odl_runner.py           OpenDataLoader PDF çağrısı
│   ├── layout_scan.py          PyMuPDF düzen taraması (kod satırları, satır içi kod, tire)
│   ├── text_fixer.py           ODL metnini PyMuPDF bulgularıyla onarır
│   ├── text_utils.py           Metin temizleme ve cümle ayırma yardımcıları
│   ├── migrate_legacy.py       Eski HTML sayfalarını tek seferlik dönüştürücü
│   ├── backfill_images.py      Mevcut sayfalara PDF'teki görselleri geriye dönük ekler (tekrar çalıştırılabilir)
│   ├── FORMAT.md               Sayfa veri formatı ve çevirmen agent sözleşmesi
│   └── _work/in | out          Geçici çalışma dizini (git'e girmez)
├── legacy/                     Eski sayfa-başına-HTML site (index.html, pages/, js/common.js)
│                               Yalnız referans için; artık güncellenmez
└── .claude/skills/cevir/       /cevir skill'i ve glossary.md
```

- **Okuyucuyu açmak**: `xdg-open index.html` veya `python3 -m http.server 8000` (sonra `http://localhost:8000`).
- **CSS/JS değişince**: `index.html` içindeki `?v=N` sürüm ekini artır (tarayıcı önbelleği).
- **Mevcut bir sayfanın verisi yeniden yazılınca** (yeniden çeviri, düzeltme): `js/pages.js` içindeki `ASSET_VERSION` artırılır; sayfa verileri bu ekle yüklenir, artırılmazsa okur eski `data/pages/page-N.js`'i görmeye devam eder. Yeni sayfa eklemek için gerekmez.
- **`odl_extract.py` ne yapar**: OpenDataLoader PDF ile kalın başlıklar, paragraflar, listeler, görseller ve caption'lar; PyMuPDF ile Clean Code'a özgü işler: Courier satırlarından girintili kod listeleri, `Listing N-N` caption'ları, bölüm açılış sayfaları, koşu başlığı/alt bilgi temizliği, font boyutuna göre dipnotlar, italik alıntı paragrafları, ters tırnakla işaretlenen satır içi kod, tire onarımı (örn. McGraw-Hill).
- **Bağımlılıklar**: `opendataloader-pdf` ve `pymupdf` (pip) ile Java 11+ (OpenDataLoader Java tabanlıdır). `prepare_page.py` `ModuleNotFoundError` verirse: `python3 -m pip install -U opendataloader-pdf pymupdf`.
- **macOS'ta Java**: Homebrew'un `openjdk` formülü keg-only'dir; kurulu olsa bile `/usr/libexec/java_home` onu bulamaz ve `prepare_page.py` "Unable to locate a Java Runtime" ile düşer. `prepare_page.py` çalıştırmadan önce:
  ```sh
  export JAVA_HOME="$(brew --prefix openjdk)/libexec/openjdk.jdk/Contents/Home"
  export PATH="$JAVA_HOME/bin:$PATH"
  ```
  Kalıcı çözüm için bu iki satır `~/.zshrc`'ye eklenebilir. Java yoksa: `brew install openjdk`.
- **toc/glossary'yi elle yeniden üretmek**: `cd tools && python3 toc_builder.py`.
- Sayfa veri formatının ayrıntıları (blok tipleri, kavram kartı şeması, agent girdi/çıktı sözleşmesi) için `tools/FORMAT.md` okunur; burada tekrarlanmaz.

## Çalışma Akışı

Kullanıcı `/cevir N`, `/cevir next`, "sıradaki sayfa", "devam et" vb. dediğinde şu adımlar izlenir:

1. **Glossary'yi oku**: `.claude/skills/cevir/glossary.md` (terim tutarlılığı için).
2. **Hazırla**: `cd tools && python3 prepare_page.py`
   - Argümansız: `progress.json`'daki sıradaki sayfa(lar), adet = `pages_per_run`. Boş sayfalar otomatik atlanır ve `blank` olarak işaretlenir.
   - `python3 prepare_page.py 55`: yalnız kitap sayfası 55.
   - `python3 prepare_page.py next --count 3`: sıradaki 3 sayfa.
   - Çıktı: `tools/_work/in/page-N.json` — blok şemasının yalnız `en` tarafı, bağlam için `context.prev_tail` / `context.next_head`, önceden doldurulmuş `chapter` ve tahmini `section.en`. Script sayfa/PDF numaralarını ve blok sayılarını yazdırır.
3. **Çevir (paralel agent'lar)**: Hazırlanan HER sayfa için bir çevirmen agent başlat — hepsi tek mesajda, paralel (Agent aracı). Her agent `tools/FORMAT.md`'yi, glossary'yi ve girdi JSON'unu okur, ardından `tools/_work/out/page-N.json` yazar:
   - Aynı bloklar, aynı sırada; her `en` alanının yanına `tr` (başlıklar, cümleler, liste maddeleri, caption'lar, dipnotlar, bölüm başlığı).
   - `section.tr` (yanlışsa `section.en` düzeltilir), `title.en` / `title.tr` (içindekiler için kısa sayfa başlığı).
   - 2-4 `concepts` kartı, yapılı biçimde: kitaptakinden FARKLI özgün örnekler, Java/Python/JavaScript, kötü + iyi kod, neden, ipucu — hepsi iki dilli.
   - `glossary_new`: sözlükte henüz olmayan terimler.
   - `code` ve `image` blokları ASLA değiştirilmez veya çevrilmez. Tüm çeviri kuralları (parantezli terminoloji, iki dilli başlıklar, kod/tanımlayıcı çevrilmez vb.) geçerlidir.
4. **Sonlandır**: Her sayfa için `cd tools && python3 finalize_page.py _work/out/page-N.json`
   - `data/pages/page-N.js` yazılır, görseller kopyalanır, `progress.json` güncellenir (kayıt + `last_translated_page`), `glossary_new` terimleri `glossary.md`'ye eklenir, `data/toc.js` ve `data/glossary.js` yeniden üretilir.
   - Boş `tr` alanı varsa uyarı verir: düzelt ve yeniden çalıştır.
5. **Doğrula ve raporla**: Kısa kontrol (isteğe bağlı olarak okuyucuyu aç). Kullanıcıya hangi sayfaların çevrildiğini ve sıradaki sayfa numarasını bildir.
6. **Commit ve push**: `git add -A && git commit -m "Sayfa N çevirisi eklendi — Chapter X: Title"` ardından `git push`. Bu adım her çeviri sonunda otomatik yapılır. (Git Commit Kuralı'na bak: yapay zeka imzası yok.)

Yeni bir bölüme geçerken özel bir işlem gerekmez; `chapters` tablosu tüm bölümleri başlangıç sayfalarıyla zaten içerir.

## Okuyucu (Reader) Özellikleri

- **Kitap benzeri sayfa**: Basılı kitaptaki gibi koşu başlığı (bölüm / kesit) ve sayfa numarası taşıyan sayfa yaprağı.
- **Çift sayfa (açık kitap) görünümü**: Üst bardaki çift sayfa düğmesi (≥1000px genişlikte; geniş ekranda varsayılan) iki yaprağı yan yana, ortada sırt olacak şekilde gösterir. TR veya EN modunda kitaptaki gibi ardışık iki sayfa (solda çift, sağda tek numara; boş/çevrilmemiş sayfalar yer tutucu yaprak olur). EN+TR modunda ise **paralel kitap**: solda aynı sayfanın İngilizcesi, sağda Türkçesi; bir cümleye tıklanınca karşı yapraktaki cümle de vurgulanır. Tercih `localStorage`'da saklanır.
- **Üst bar**: Kitap adı, bölüm breadcrumb'ı, sayfa numarası girişi (Enter ile gider; çevrilmemiş sayfa için toast: "Sayfa N henüz çevrilmedi. '/cevir N' yazın veya 'sıradaki sayfa' deyin."), dil modu, yazı boyutu A- / A+, içindekiler çekmecesi, sözlük çekmecesi.
- **Dil modu**: TR / EN / EN+TR. Varsayılan TR, tercih `localStorage`'da hatırlanır. Kod blokları dil değişiminden etkilenmez.
- **Cümle eşleme**: Bir cümleye tıklanınca diğer dildeki karşılığı gösterilir.
- **Kod listeleri**: Çerçeveli kutu, "Listing" caption'ı ve syntax highlighting ile çizilir.
- **Kavram butonları**: Her sayfanın altında; tıklanınca kötü/iyi örnekli few-shot modal açılır.
- **Navigasyon**: Önceki/sonraki oklar, klavye ← →, dokunmatik kaydırma (swipe). Derin bağlantı: `index.html#page-32`. Son okunan sayfa hatırlanır.

## Antigravity IDE Aynası (AGENTS.md)

- `AGENTS.md` ve `.agent/skills/cevir/SKILL.md`, Antigravity IDE için `CLAUDE.md` ve `.claude/skills/cevir/SKILL.md` dosyalarının birebir kopyasıdır; `.agent/rules/translation-style.md` de `.claude/rules/translation-style.md` ile aynıdır.
- Bu dosyalardan biri değişince aynası da güncellenir (`cp CLAUDE.md AGENTS.md` vb.). Kaynak her zaman `.claude/` tarafıdır.

## Önemli Notlar

- Bu proje eğitim amaçlıdır. Kitabın tamamını bir seferde çevirme gibi bir amaç yoktur.
- Kullanıcı sayfa sayfa ilerler, kendi hızında okur.
- Her sohbette CLAUDE.md otomatik okunacağı için, kullanıcının uzun açıklamalar yapmasına gerek yoktur.
- Kullanıcı sadece `/cevir 5` veya "sıradaki sayfa" demesi yeterlidir.
- `data/toc.js`, `data/glossary.js` ve `progress.json` üretilen/yönetilen dosyalardır; elle düzenlenmez.
- `legacy/` altındaki eski site güncellenmez; yeni sayfalar yalnız `data/pages/` altına eklenir.

## Git Commit Kuralı

- **KRİTİK KURAL**: Commit mesajlarında `Co-Authored-By` veya yapay zekaya ait herhangi bir imza/referans OLMAYACAKTIR.
- Commit mesajları sade ve açıklayıcı olmalıdır.
- Format: `Sayfa X çevirisi eklendi — Bölüm/Section bilgisi`
- Örnek: `Sayfa 32 çevirisi eklendi — Chapter 3: Functions`

## Türkçe Karakter Kuralı

- **KRİTİK KURAL**: Bu projedeki tüm Türkçe içerikli dosyalar (`.md`, `.html`, `.js`, `.json` vb.) doğru Türkçe karakterlerle yazılmalıdır.
- ASCII karşılıkları (c, g, i, o, s, u) yerine her zaman doğru Türkçe harfler kullanılmalıdır:
  - `ç` (c değil), `ğ` (g değil), `ı` (i değil), `ö` (o değil), `ş` (s değil), `ü` (u değil)
  - `Ç`, `Ğ`, `İ`, `Ö`, `Ş`, `Ü` (büyük harfler)
- Tüm dosyalar UTF-8 kodlamasında olmalıdır.
- Yeni dosya oluştururken veya mevcut dosyaları düzenlerken bu kurala mutlaka uyulmalıdır.

## AI Agent Team Kullanımı

- Bu projede Claude Code'un **Agent (subagent)** özelliği aktif olarak kullanılmalıdır.
- Uygun durumlarda birden fazla agent paralel çalıştırılarak verimlilik artırılmalıdır.
- Agent kullanım senaryoları:
  - **Çevirmen agent (general-purpose)**: Çeviri akışının çekirdeği. `prepare_page.py` ile hazırlanan her sayfa için ayrı bir agent, hepsi tek mesajda paralel başlatılır. Her agent `tools/FORMAT.md`, glossary ve `_work/in/page-N.json`'u okur, `_work/out/page-N.json` yazar.
  - **Explore agent**: Kod tabanı araştırması, dosya arama, bağlam toplama, Türkçe karakter kontrolü için
  - **Bash agent**: Terminal komutları, git işlemleri için
  - **Plan agent**: Uygulama planlaması ve mimari kararlar için
- Çevirmen agent'lar birbirinden bağımsızdır; `finalize_page.py` ise sayfa sayfa sırayla çalıştırılır (progress.json ve glossary.md'ye yazar).
