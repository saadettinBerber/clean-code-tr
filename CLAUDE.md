# Clean Code Kitap Çeviri Projesi

## Proje Amacı

Bu proje, Robert C. Martin'in "Clean Code: A Handbook of Agile Software Craftsmanship" kitabını sayfa sayfa interaktif bir HTML sayfasına çevirmeyi amaçlar. Kullanıcı her seferinde bir sayfa çeviri ister. Çıktı olarak bir `index.html` dosyası üretilir.

## PDF Bilgileri

- **PDF Dosya Yolu**: `../docs/[PROGRAMMING][Clean Code by Robert C Martin].pdf`
- **Sayfa Offset**: PDF sayfa numarası = Kitap sayfa numarası + 31
  - Örnek: Kitap sayfa 1 = PDF sayfa 32
  - Örnek: Kitap sayfa 10 = PDF sayfa 41
- **Kitap Yapısı**:
  - Foreword: PDF sayfa 20-22
  - Introduction: PDF sayfa 26-28
  - Chapter 1 (Clean Code): PDF sayfa 32'den başlar (kitap sayfa 1)

## Son Çevrilen Sayfa Takibi

- **KRİTİK KURAL**: Her çeviri tamamlandığında, bu dosyadaki `last_translated_page` değerini güncelle.
- **last_translated_page**: 71
- **last_translated_group**: 5 (Chapter 4'ten itibaren grup takibi başlar)
- Kullanıcı "sıradaki grup", "sonraki grup", "next group", "devam" gibi ifadeler kullandığında veya `/cevir group next` yazdığında, `implementation_plan.md`'de tanımlanan sıradaki grubu çevir.

## Çeviri Kuralları

### Dil Yaklaşımı
1. **Parantezli Terminoloji (Parenthetical Terminology)**: Teknik terimler Türkçe yazılır, yanına parantez içinde İngilizce orijinali eklenir.
   - Örnek: "Yeniden düzenleme (Refactoring), kodun dış davranışını değiştirmeden iç yapısını iyileştirme sürecidir."
2. **Kod blokları ASLA çevrilmez**: Değişken adları, fonksiyon adları, sınıf adları, import ifadeleri, dosya yolları, komut satırı komutları her zaman İngilizce kalır.
   - **KRİTİK**: Kod içindeki **yorum satırları** (`// ...`, `/* ... */`, `/** ... */`, `# ...`) da bu kurala tabidir — kitap listing'lerinde yorumlar her zaman orijinal İngilizce halleriyle kalır.
   - **İSTİSNA**: Kavram Butonları (concept-panel/modal) içindeki özel eğitim örneklerinde yorum satırları Türkçe olabilir. Bu örnekler kitaptan alınmamış, Claude tarafından üretilmiş örneklerdir ve EN/TR toggle içermeleri zorunlu değildir.
3. **Sektörde yaygın kullanılan terimler**: API, bug, debug, commit, push, pull, merge, framework, library gibi terimler İngilizce bırakılır, gerekirse Türkçe açıklama eklenir.
4. **Deyimler ve metaforlar**: Türkçe karşılığı bulunur veya açıklanır. Örneğin "Boy Scout Rule" -> "İzci Kuralı (Boy Scout Rule)" şeklinde yazılır.
5. **Başlıklar**: Hem Türkçe hem İngilizce yazılır. Örnek: "Anlamlı İsimler / Meaningful Names"
6. **ÖZET YASAKTIR**: Çeviriler asla özet niteliğinde olmamalıdır. Kitabın orijinal metni paragraf paragraf, tüm detayları ve kod analizleriyle birlikte tam sadakatle çevrilmelidir.

### Sayfa Bağlamı ve Önbellek Kullanımı
- Her çeviri yapılırken istenilen sayfanın **bir önceki** ve **bir sonraki** sayfası da bağlam için okunur.
- Amaç: Paragraf ortasında kesilebilecek cümleleri tamamlamak ve bağlamı anlamak.
- Ancak çeviri sadece istenilen sayfayı kapsar, önceki/sonraki sayfalar sadece bağlam içindir.
- **KRİTİK OPTİMİZASYON — Önbellek Kontrolü**: Bağlam sayfalarını okumadan önce `pages/page-X.html` dosyasının var olup olmadığını kontrol et:
  - **Dosya varsa** → dosyadan EN içeriğini oku. PDF okuma YOK, zaman kaybı YOK.
  - **Dosya yoksa** → PDF'den oku VE dosyayı EN-only olarak kaydet (ileride çevrilmeye hazır önbellek).
- Bu sayede toplu çevirilerde her sayfa için PDF yalnızca **bir kez** okunur.

### Bulunduğu Başlık/Bölüm
- Sayfanın hangi Chapter ve Section altında olduğu her zaman belirtilmelidir.
- Bu bilgi HTML çıktısında üst kısımda görünür olmalıdır.

## Glossary (Terim Sözlüğü) Kuralı

- **KRİTİK KURAL**: Her sayfa çevrildikten sonra, o sayfada geçen yeni teknik terimlerin `.claude/skills/cevir/glossary.md` dosyasına eklenip eklenmediğini kontrol et.
- Eğer yeni bir terim varsa ve glossary'de yoksa, MUTLAKA ekle.
- Glossary'deki terimler alfabetik sıralı tutulur.
- Format: `| İngilizce Terim | Türkçe Karşılığı | Açıklama/Not |`
- Bu sayede tüm çeviri boyunca terimler TUTARLI kalır. Bir terimi nasıl çevirdiysen, her yerde aynı şekilde çevirmelisin.
- Çeviri yapmadan önce glossary'yi oku ve mevcut terimleri kullan.

## HTML Çıktı Kuralları

### Genel Yapı
- **Çoklu dosya yapısı** kullanılır:
  - `index.html`: Ana sayfa (navigasyon hub'ı, sayfa numarası giriş kutusu, çevrilen sayfaların listesi)
  - `pages/page-X.html`: Her sayfa `pages/` klasörü altında saklanır (örnek: `pages/page-1.html`, `pages/page-2.html`)
  - Sayfa dosyalarından `index.html`'e linkler `../index.html` şeklinde, sayfalar arası linkler ise `page-X.html` şeklinde (aynı dizinde oldukları için) olmalıdır.
- Her sayfa dosyası CSS'i inline içerir, JS ise `../js/common.js` harici dosyasından yüklenir.
- Her sayfa dosyasında sadece `<script>const CURRENT_PAGE = X;</script>` ve `<script src="../js/common.js"></script>` bulunur.
- Responsive tasarım (mobil uyumlu).
- Türkçe karakter desteği (UTF-8).

- **İki Aşamalı Sayfa Durumu**:
  - **EN-only (Önbellek)**: Sayfa, bir başka sayfanın bağlamı okunurken PDF'den alınmış ve kaydedilmiştir. Yalnızca İngilizce (EN) kısmı doludur; TR kısmı henüz çevrilmemiştir. Tarayıcıda açılabilir, EN toggle ile içerik görüntülenebilir. `index.html`'e eklenmez.
  - **Tam Çeviri**: Hem EN hem TR kısımları dolu, kavram butonları ve navigasyon tamamlanmış. `index.html`'e eklenir.

- **Her yeni TAM ÇEVİRİ tamamlandığında `index.html` de güncellenmelidir**:
  - `TRANSLATED_PAGES` JavaScript objesine yeni sayfa eklenir
  - Sayfa kartı (page-card) HTML'e eklenir
  - Badge sayısı ve input-hint güncellenir

### Zorunlu Bileşenler
1. **Üst Bar**:
   - Kitap adı: "Clean Code - Robert C. Martin"
   - Bulunulan bölüm/başlık bilgisi (Chapter ve Section)
   - **Sayfa Numarası Input'u**: Sağ üstte interaktif sayfa numarası input'u bulunur
     - Kullanıcı sayfa numarası yazıp Enter'a basınca çevrilmiş sayfaya yönlendirilir
     - Çevrilmemiş sayfa girilirse tooltip ile uyarı gösterilir
     - Focus kaybedilince mevcut sayfa numarasına döner
     - `PAGES_MAP` objesi tüm çevrilen sayfaların dosya yollarını tutar
     - `CURRENT_PAGE` değişkeni o sayfanın numarasını tutar

2. **Dil Değiştirme (EN/TR Toggle)**:
   - Sayfanın sağ üst köşesinde EN | TR butonu
   - Varsayılan dil: TR (Türkçe)
   - Butona basılınca tüm açıklama metinleri dil değiştirir
   - Kod blokları dil değiştiğinde değişmez, her zaman aynı kalır
   - Seçilen dil tercihi hatırlanmalı (localStorage)

3. **İçerik Alanı**:
   - Sayfanın metni paragraflara bölünmüş şekilde gösterilir
   - Kod örnekleri syntax highlighting ile gösterilir
   - Kitaptaki orijinal formatlama mümkün olduğunca korunur (başlıklar, listeler, kod blokları)

3b. **`<pre>` Blokları için Zorunlu Format Kuralları**:
   - Tag her zaman `<pre>` olmalıdır — `<pre">` (fazla tırnak) veya başka varyantlar GEÇERSİZDİR.
   - **HTML girinti sızıntısı yasaktır**: `<pre>` içindeki kod satırları HTML belgesinin girintisinden etkilenmemelidir. `<pre>` elementi içindeki boşluklar tarayıcıda olduğu gibi görüntülenir.
   - Doğru kullanım: `<pre>` tagından hemen sonra kodun ilk satırı sıfır girintiden başlamalı, kodun kendi iç girintisi (4 boşluk, 8 boşluk vb.) korunmalı.
   - **Yanlış** (HTML girintisi sızıyor):
     ```html
     <div class="code-listing">
         <pre>        for (int i = 0; i < n; i++)
                 doSomething(i);</pre>
     </div>
     ```
   - **Doğru** (kod kendi girintisiyle, HTML girintisi yok):
     ```html
     <div class="code-listing">
         <pre>for (int i = 0; i < n; i++)
     doSomething(i);</pre>
     </div>
     ```

4. **Kavram Butonları (Few-Shot Örnekler)**:
   - Sayfada geçen her önemli Clean Code kavramı/ilkesi için bir buton oluşturulur
   - Butona basılınca bir panel/modal açılır
   - Panel içeriği:
     - Kavram adı (EN/TR)
     - Kısa açıklama (EN/TR toggle'a uyumlu)
     - KÖTÜ ÖRNEK (Before): İlkeyi ihlal eden kod
     - Neden kötü olduğunu açıklama
     - İYİ ÖRNEK (After): Refactor edilmiş, temiz kod
     - Ekstra pratik ipucu veya alıştırma önerisi
   - Örnekler kitaptakilerden FARKLI olmalı, orijinal örnekler üretilmeli
   - Örnekler Java, Python, JavaScript gibi popüler dillerden seçilmeli

5. **Sayfa Navigasyonu**:
   - Sayfanın alt kısmında "Önceki Sayfa" ve "Sonraki Sayfa" butonları
   - Bu butonlar sadece görsel navigasyon içindir (kullanıcıya hangi sayfaya geçebileceğini gösterir)
   - Butonlarda sayfa numarası ve varsa bölüm/başlık bilgisi yazar
   - Butonlara basıldığında kullanıcıya "Bu sayfayı çevirmem için '/cevir X' yazın veya 'sıradaki sayfa' deyin" şeklinde bir bilgi gösterilir

6. **Tasarım**:
   - Modern, temiz, okunabilir tasarım
   - Açık tema (light mode) varsayılan
   - Kod blokları için koyu arka plan
   - Yeterli satır aralığı ve kenar boşlukları
   - Türkçe metin genişlemesine uygun layout (%30 daha uzun olabilir)
   - Font: sistem fontu (system-ui) veya okunabilir bir sans-serif font

## Çalışma Akışı

Kullanıcı bir sayfa çevirisi istediğinde şu adımları takip et:

1. **Glossary'yi oku**: `.claude/skills/cevir/glossary.md` dosyasını oku, mevcut terimleri öğren.
2. **Bağlam sayfalarını kontrol et ve oku**: N-1 ve N+1 için önce `pages/page-X.html` dosyası var mı kontrol et.
   - **Varsa** → dosyadan EN içeriğini oku (PDF okuma YOK).
   - **Yoksa** → PDF'den oku (sayfa numarası + 31 = PDF sayfası) ve dosyayı **EN-only** olarak kaydet.
   - Hedef sayfa N her zaman PDF'den okunur.
3. **Bölüm/başlık bilgisini belirle**: Sayfanın hangi Chapter ve Section altında olduğunu tespit et.
4. **Çeviriyi yap**: Kurallara uygun şekilde hem EN hem TR metinleri hazırla.
5. **Kavram butonlarını hazırla**: Sayfadaki önemli kavramlar için few-shot örnekler oluştur.
6. **Sayfa HTML dosyasını oluştur**: `pages/page-X.html` olarak tüm bileşen kurallarına uygun HTML dosyasını yaz.
7. **js/common.js'deki PAGES_MAP'i güncelle**: Yeni eklenen sayfayı `js/common.js` dosyasındaki `PAGES_MAP` objesine ekle. Tek dosya güncellemesi yeterlidir, sayfa dosyalarına dokunmaya gerek yoktur.
8. **index.html'i güncelle**: `TRANSLATED_PAGES` objesine, sayfa kartına, badge ve input-hint'e yeni sayfayı ekle.
9. **Glossary'yi güncelle**: Yeni terimler varsa glossary'ye ekle.
10. **last_translated_page değerini güncelle**: Bu dosyadaki (CLAUDE.md) değeri güncelle.
11. **GitHub'a push et**: Tüm değişiklikleri commit'le ve GitHub'a push et. Commit mesajı `Sayfa X çevirisi eklendi` formatında olsun. Bu adım her çeviri sonunda otomatik yapılır.

## Önemli Notlar

- Bu proje eğitim amaçlıdır. Kitabın tamamını bir seferde çevirme gibi bir amaç yoktur.
- Kullanıcı sayfa sayfa ilerler, kendi hızında okur.
- Her sohbette CLAUDE.md otomatik okunacağı için, kullanıcının uzun açıklamalar yapmasına gerek yoktur.
- Kullanıcı sadece `/cevir group 1` veya "sıradaki grup" demesi yeterlidir.

## Git Commit Kuralı

- **KRİTİK KURAL**: Commit mesajlarında `Co-Authored-By` veya yapay zekaya ait herhangi bir imza/referans OLMAYACAKTIR.
- Commit mesajları sade ve açıklayıcı olmalıdır.
- Format: `Sayfa X çevirisi eklendi — Bölüm/Section bilgisi`
- Örnek: `Sayfa 32 çevirisi eklendi — Chapter 3: Functions`

## Türkçe Karakter Kuralı

- **KRİTİK KURAL**: Bu projedeki tüm Türkçe içerikli dosyalar (`.md`, `.html` vb.) doğru Türkçe karakterlerle yazılmalıdır.
- ASCII karşılıkları (c, g, i, o, s, u) yerine her zaman doğru Türkçe harfler kullanılmalıdır:
  - `ç` (c değil), `ğ` (g değil), `ı` (i değil), `ö` (o değil), `ş` (s değil), `ü` (u değil)
  - `Ç`, `Ğ`, `İ`, `Ö`, `Ş`, `Ü` (büyük harfler)
- Tüm dosyalar UTF-8 kodlamasında olmalıdır.
- Yeni dosya oluştururken veya mevcut dosyaları düzenlerken bu kurala mutlaka uyulmalıdır.

## AI Agent Team Kullanımı

- Bu projede Claude Code'un **Task (subagent)** özelliği aktif olarak kullanılmalıdır.
- Uygun durumlarda birden fazla agent paralel çalıştırılarak verimlilik artırılmalıdır.
- Agent kullanım senaryoları:
  - **Explore agent**: Kod tabanı araştırması, dosya arama, bağlam toplama için
  - **Bash agent**: Terminal komutları, git işlemleri için
  - **General-purpose agent**: Çoklu adımlı karmaşık görevler için
  - **Plan agent**: Uygulama planlaması ve mimari kararlar için
- Özellikle çeviri iş akışında:
  - Glossary kontrolü ve PDF okuma paralel yapılabilir
  - Türkçe karakter kontrolü için Explore agent kullanılabilir
  - Birden fazla bağımsız dosya düzenlemesi gerektiğinde paralel agent'lar tercih edilmeli
