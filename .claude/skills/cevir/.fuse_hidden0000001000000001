---
name: cevir
description: Clean Code kitabının belirtilen sayfasını EN/TR interaktif HTML olarak çevirir. Sayfa numarası veya "next/sıradaki" ile kullanılır.
argument-hint: "[sayfa-numarasi veya next]"
allowed-tools: ["Read", "Write", "Edit", "Bash", "Glob"]
---

# Clean Code Sayfa Çeviri Skill'i

Kullanıcı bu skill'i çağırdığında aşağıdaki adımları takip et:

## 1. Sayfa Numarasını Belirle

- Eğer `$ARGUMENTS` bir sayı ise (örnek: `5`), o sayfayı çevir.
- Eğer `$ARGUMENTS` "next", "sıradaki", "sonraki", "devam" gibi bir ifade ise veya boş ise:
  - `CLAUDE.md` dosyasındaki `last_translated_page` değerini oku.
  - O değere 1 ekleyerek sonraki sayfayı belirle.
  - Eğer değer 0 ise, sayfa 1'den başla.

## 2. Glossary'yi Oku

- `.claude/skills/cevir/glossary.md` dosyasını oku.
- Mevcut terim çevirilerini öğren ve çeviri sırasında tutarlı kullan.

## 3. PDF'den Sayfaları Oku

- PDF yolu: `/home/b920/Desktop/make_greater/Clean Code/[PROGRAMMING][Clean Code by Robert C Martin].pdf`
- Sayfa offset: PDF sayfa = kitap sayfa + 31
- İstenilen sayfanın **bir önceki**, **kendisi** ve **bir sonraki** sayfasını oku (toplam 3 sayfa).
- Örnek: Sayfa 5 için PDF sayfaları 35, 36, 37'yi oku.

## 4. Çeviriyi Yap

- CLAUDE.md'deki tüm çeviri kurallarına uy.
- Parantezli terminoloji kullan.
- Kod bloklarını çevirmeden bırak.
- Hangi Chapter/Section altında olduğunu belirle.

## 5. Kavram Butonları Oluştur

- Sayfada geçen her önemli Clean Code kavramı için:
  - Kavram adı (EN + TR)
  - Kısa açıklama
  - Kötü örnek (Before) + açıklama
  - İyi örnek (After) + açıklama
  - Pratik ipucu
- Örnekler kitaptakilerden FARKLI, orijinal örnekler olmalı.

## 6. page-X.html Oluştur

- Dosya yolu: `/home/b920/Desktop/make_greater/Clean Code/pages/page-X.html` (X = sayfa numarası)
- CLAUDE.md'deki HTML çıktı kurallarına uy.
- CSS inline, JS ise `../js/common.js` harici dosyasından yüklenir.
- Script bölümü sadece şu 2 satırdan oluşmalı:
  - `<script>const CURRENT_PAGE = X;</script>`
  - `<script src="../js/common.js"></script>`
- EN/TR toggle, kavram butonları dahil.
- Navigasyon butonları (alt kısım):
  - Önceki sayfa: Eğer çevrilmişse `<a href="page-(X-1).html">`, yoksa disabled
  - Sonraki sayfa: Eğer çevrilmişse `<a href="page-(X+1).html">`, yoksa `not-translated` sınıfıyla göster
- Üst barda `../index.html`'e dönüş linki (Ana Sayfa) olmalı.
- **Sayfa Numarası Input'u (Üst Bar)**: Sağ üstte interaktif input olmalı (JS işlevleri `common.js`'den gelir):
  - CSS sınıfları: `.page-number-wrapper`, `.page-number-label`, `.page-number-input`, `.page-nav-tooltip`

## 6b. js/common.js'deki PAGES_MAP'i Güncelle

- **KRİTİK**: Yeni sayfa eklendiğinde, `js/common.js` dosyasındaki `PAGES_MAP` objesine yeni sayfa eklenmelidir.
- Tek dosya güncellemesi yeterlidir, sayfa dosyalarına dokunmaya gerek yoktur.
- Örnek: Sayfa 32 eklendiğinde, `js/common.js`'deki `PAGES_MAP` objesine `32:'page-32.html'` eklenir.

## 6c. index.html Güncelle

- `TRANSLATED_PAGES` objesine yeni sayfayı ekle
- Sayfa kartı (page-card) HTML bloğunu ekle
- Badge sayısını ve input-hint metnini güncelle

## 7. Glossary'yi Güncelle

- Yeni teknik terimler varsa `.claude/skills/cevir/glossary.md`'ye ekle.
- Alfabetik sıra koru.

## 8. CLAUDE.md'yi Güncelle

- `last_translated_page` değerini yeni çevrilen sayfa numarasıyla güncelle.
- CLAUDE.md dosyasındaki `last_translated_page: X` satırını `last_translated_page: Y` olarak değiştir.
