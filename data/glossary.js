window.GLOSSARY = [
  {
    "en": "@Ignore",
    "tr": "@Ignore",
    "note": "T4 bağlamında: bir testin, belirsiz bir gereksinimle ilgili soruyu kaydetmek üzere çalıştırılmadan bırakılmasını sağlayan ek açıklama (annotation); test derlenebiliyorsa @Ignore, derlenemiyorsa yorum satırına alma (commented out) tercih edilir. Ek açıklama adı olduğu için çevrilmez."
  },
  {
    "en": "Abstract Class",
    "tr": "Soyut Sınıf (Abstract Class)",
    "note": "Yalnızca kavramı temsil eden, gerçekleştirim ayrıntısı taşımayan (ya da kısmen taşıyan) sınıf; istemciyi somut ayrıntılardan yalıtmak için arayüzlerle birlikte kullanılır"
  },
  {
    "en": "Abstract Factory",
    "tr": "Soyut Fabrika (Abstract Factory)",
    "note": "Nesne oluşturma mantığını gizleyen tasarım deseni"
  },
  {
    "en": "Abstract Method",
    "tr": "Soyut Metot (Abstract Method)",
    "note": "İçeriği üst sınıfta verilmeden, tüm türevlerin gerçekleştirmek zorunda olduğu metot; derleyici türevleri bu sözleşmeye uymaya zorlar. Sayfa 234'te set() metodu için kullanılır."
  },
  {
    "en": "Abstraction",
    "tr": "Soyutlama (Abstraction)",
    "note": ""
  },
  {
    "en": "Acceptance Test",
    "tr": "Kabul Testi (Acceptance Test)",
    "note": "Kullanıcı gereksinimlerini doğrulayan test"
  },
  {
    "en": "Access Policy",
    "tr": "Erişim Politikası (Access Policy)",
    "note": "Bir arayüzün metotlarıyla verinin nasıl okunup değiştirilebileceğine dair dayattığı kurallar; ör. koordinatları ayrı oku, birlikte ayarla"
  },
  {
    "en": "Accessor",
    "tr": "Erişimci (Accessor)",
    "note": "JavaBean standardında get metotları"
  },
  {
    "en": "Active Record",
    "tr": "Aktif Kayıt (Active Record)",
    "note": "Veritabanı tablosunu doğrudan yansıtan, save/find gibi gezinme metotları olan özel DTO biçimi"
  },
  {
    "en": "Ad hoc",
    "tr": "ad hoc (geçici/rastgele yazılmış)",
    "note": "Özel bir plana veya kalıba uymayan, ihtiyaç anında gelişigüzel yazılan kod"
  },
  {
    "en": "Adapted Server",
    "tr": "Uyarlanmış Sunucu (Adapted Server)",
    "note": "Orijinal sunucunun değiştirilemediği durumlarda, kilitlemeyi kendisi yapan bir aracı (intermediary) katmanla sunucuyu sarmak; sunucu tabanlı kilitlemenin bir örneğidir. Sayfa 185'te üç düzeltme yolundan üçüncüsüdür."
  },
  {
    "en": "Adapter Pattern",
    "tr": "Adaptör Deseni (Adapter Pattern)",
    "note": "Uyumsuz bir arayüzü (ör. üçüncü taraf API) uygulamanın beklediği arayüze çeviren tasarım deseni; API değiştiğinde tek değişiklik noktası sağlar [GOF]"
  },
  {
    "en": "Address",
    "tr": "Adres (Address)",
    "note": ""
  },
  {
    "en": "Agile",
    "tr": "Çevik (Agile)",
    "note": "Çevik yazılım geliştirme"
  },
  {
    "en": "Agility",
    "tr": "Çeviklik (Agility)",
    "note": "Çevik (Agile) yazılım geliştirme pratiklerinin sağladığı, değişime hızla uyum sağlama yeteneği; istilacı (invasive) mimariler bunu tehdit eder. Sayfa 168'de 'çeviklik' olarak kullanılmıştır; sözlükteki 'Çevik (Agile)' terimiyle aynı kökten gelir."
  },
  {
    "en": "Algorithm",
    "tr": "algoritma (algorithm)",
    "note": "Belirli bir işi yapmak için izlenen adım dizisi; bu sayfada `Args` sınıfının şemayı (schema) ayrıştırma akışı. Sayfadaki 'the three different maps up at the top of the algorithm' ifadesinde geçer."
  },
  {
    "en": "Ambiguity",
    "tr": "Belirsizlik (Ambiguity)",
    "note": "T4 sezgisel kuralının başlığında geçer: gereksinimlerin (requirements) netleştirmediği davranış ayrıntısı; bu belirsizlik, yorum satırına alınmış ya da @Ignore ile yoksayılmış bir test aracılığıyla soru olarak ifade edilir. Sözlükteki 'Belirsizliğe Yer Bırakmayan İsimler (Unambiguous Names)' terimiyle ilişkilidir."
  },
  {
    "en": "Amplification",
    "tr": "Önem Belirtme (Amplification)",
    "note": "Önemsiz görünebilecek bir şeyin önemini vurgulayan yorum"
  },
  {
    "en": "Analysis Function",
    "tr": "Analiz Fonksiyonu (Analysis Function)",
    "note": "Bir modülü, veriyi inceleyen/ayrıştıran fonksiyon grubu; sayfa 265'te 'a group of analysis functions' ifadesinde geçer. 'Synthesis Function' teriminin karşıtıdır."
  },
  {
    "en": "Annotation",
    "tr": "ek açıklama (annotation)",
    "note": "Java 5 ile gelen, sınıf, metot ve alanlara üstveri (metadata) ekleyen @ işaretli bildirimler; JPA gibi framework'ler bağlama (wiring) ve kalıcılık bilgisini bu ek açıklamalarla taşır. Kitapta 'Java 5 annotations' olarak geçer."
  },
  {
    "en": "Anonymous Inner Class",
    "tr": "Anonim İç Sınıf (Anonymous Inner Class)",
    "note": "Adı olmayan, tek kullanımlık iç sınıf; arayüzü ya da üst sınıfı doğrudan gerçekleştiren bir nesne bildirir. Sayfa 340'ta Listing A-2'nin 12–16. satırlarında, `ClassWithThreadingProblem`'ın tek örneğini kullanan `Runnable` için geçer. İçinden başvurulan yerel değişkenler final (ya da fiilen final) olmalıdır."
  },
  {
    "en": "Application Container",
    "tr": "Konteyner (Container)",
    "note": "EJB'de bean'leri barındıran ve yaşam döngüsünü yöneten uygulama sunucusu ortamı; sözlükteki 'Kap (Container)' veri yapısı kapsayıcısından farklıdır. Kitapta 'konteyner' olarak kullanılır"
  },
  {
    "en": "Argument",
    "tr": "Argüman (Argument)",
    "note": "Fonksiyona geçirilen parametre"
  },
  {
    "en": "Argument List",
    "tr": "Argüman Listesi (Argument List)",
    "note": "Değişken sayıda argüman alan fonksiyonlar (varargs)"
  },
  {
    "en": "Argument Object",
    "tr": "Argüman Nesnesi (Argument Object)",
    "note": "Birden fazla argümanı bir sınıfa sarma tekniği"
  },
  {
    "en": "artifact",
    "tr": "yapıt (artifact)",
    "note": "Derleme (build) sürecinin ürettiği ya da gerektirdiği dosya/ürün (ör. JAR, XML dosyası); bu sayfada 'other artifacts that the system requires' ifadesinde geçer."
  },
  {
    "en": "Artificial Coupling",
    "tr": "Yapay Bağımlılık (Artificial Coupling)",
    "note": "G13 sezgisel kuralı: doğrudan bir amaca hizmet etmeyen, iki modül arasındaki bağımlılık; genel enum'ların/statik fonksiyonların daha özel bir sınıfın içine konulmasıyla oluşur."
  },
  {
    "en": "ASM",
    "tr": "ASM (Java bytecode manipulation framework)",
    "note": "Java bayt kodu işleme/üretme çerçevesi; sayfa 189'da CGLIB ile birlikte programatik enstrümantasyon aracı olarak geçer. Teknik araç adı olduğu için İngilizce kalır."
  },
  {
    "en": "Aspect",
    "tr": "Görünüm (Aspect)",
    "note": "AOP'de belirli bir kaygıyı desteklemek için sistemin hangi noktalarında davranışın tutarlı biçimde değiştirileceğini belirten modüler yapı"
  },
  {
    "en": "Aspect Oriented Programming",
    "tr": "Görünüm Yönelimli Programlama (AOP)",
    "note": "Tekrarı kaldırma stratejilerinden biri"
  },
  {
    "en": "AspectJ",
    "tr": "AspectJ",
    "note": "Java'nın bir uzantısı olan, görünümleri (aspects) 'birinci sınıf' (first-class) yapılar olarak destekleyen tam donanımlı görünüm yönelimli programlama (AOP) dili. Ürün adı olarak İngilizce kalır."
  },
  {
    "en": "Assembly Language",
    "tr": "Assembly Dili (Assembly Language)",
    "note": "Makine koduna çok yakın, düşük seviyeli programlama dili"
  },
  {
    "en": "Assertion",
    "tr": "Doğrulama İfadesi (Assertion)",
    "note": "Doğru olması gereken bir koşulu çalışma anında denetleyen ifade (assert); iyi bir belgelemedir ama null sorununu çözmez"
  },
  {
    "en": "Assignment Operator",
    "tr": "Atama Operatörü (Assignment Operator)",
    "note": "Sağ taraftaki değeri sol taraftaki değişkene atayan operatör (=)"
  },
  {
    "en": "Assignment Statement",
    "tr": "Atama İfadesi (Assignment Statement)",
    "note": "Bir değişkene değer atayan ifade"
  },
  {
    "en": "Assumption",
    "tr": "Varsayım (Assumption)",
    "note": "Bir modülün, bağımlı olduğu modül hakkında koda hiçbir şekilde yansımayan kabulü; G22 kuralında 'mantıksal bağımlılık' (logical dependency) ile eş anlamlı kullanılır. 'make assumptions' = 'varsayımlarda bulunmak'."
  },
  {
    "en": "Atomic Operation",
    "tr": "Atomik İşlem (Atomic Operation)",
    "note": "Bölünemeyen, tek adımda bütün olarak gerçekleşen işlem; birlikte anlam taşıyan değerlerin tek çağrıyla ayarlanması"
  },
  {
    "en": "AtomicInteger",
    "tr": "AtomicInteger",
    "note": "Java'nın java.util.concurrent.atomic paketindeki, atomik (bölünemez) işlemlerle artırılıp okunabilen tamsayı sınıfı; karşılıklı dışlama (mutual exclusion) gerektirmeden aynı anda kullanıma izin veren kaynak örneği. Sayfa 337'de eşzamanlı kullanıma izin veren kaynak örneği olarak geçer. Teknik sınıf adı olduğu için çevrilmez."
  },
  {
    "en": "Attention to Detail",
    "tr": "Detaylara Dikkat (Attention to Detail)",
    "note": "Temiz kodun temel özelliği"
  },
  {
    "en": "Author",
    "tr": "Yazar (Author)",
    "note": ""
  },
  {
    "en": "Autocomplete / Code Completion",
    "tr": "Otomatik Kod Tamamlama (Autocomplete)",
    "note": "IDE'nin isim önerme özelliği"
  },
  {
    "en": "Automated Tool",
    "tr": "Otomatik Araç (Automated Tool)",
    "note": "Biçimlendirme kurallarını geliştirici yerine uygulayan araç"
  },
  {
    "en": "Backpressure",
    "tr": "Geri Baskı (Backpressure)",
    "note": "Sınırlı kuyruğun dolmasıyla hızlı tarafın (üreticinin) bloklayan put çağrısında bekleyerek otomatik yavaşlatılması; kavram kartı (bounded-queue-backpressure) için eklendi."
  },
  {
    "en": "Bad Code",
    "tr": "Kötü Kod (Bad Code)",
    "note": "Bakımı zor, okunması güç kod"
  },
  {
    "en": "Base Class",
    "tr": "Üst Sınıf (Base Class)",
    "note": "Kalıtım hiyerarşisinde davranışın önce toplandığı kök sınıf; bu sayfada 'the ArgumentMarshaler base class' ifadesinde geçer. Sözlükteki 'Concrete Class' ve 'Abstract Class' terimlerinden ayrı, genel kavram."
  },
  {
    "en": "Be Precise",
    "tr": "Kesin Olun (Be Precise)",
    "note": "G26 sezgisel kuralı: kodda verilen her kararın (tür seçimi, null kontrolü, para birimi, eş zamanlılık) kesin ve belirsizlikten uzak olması gerektiğini söyler."
  },
  {
    "en": "Bean",
    "tr": "Bean",
    "note": "Private alanlarına getter ve setter ile erişilen veri sınıfı (JavaBean); terim çevrilmez"
  },
  {
    "en": "Beautiful Code",
    "tr": "Güzel Kod (Beautiful Code)",
    "note": ""
  },
  {
    "en": "Bibliography",
    "tr": "Kaynakça (Bibliography)",
    "note": ""
  },
  {
    "en": "Big Design Up Front (BDUF)",
    "tr": "Baştan Büyük Tasarım (BDUF)",
    "note": "Hiçbir şey gerçekleştirmeden önce her şeyi baştan tasarlama uygulaması; önden tasarım (up-front design) gibi iyi bir uygulamayla karıştırılmamalıdır. Değişime uyum sağlamayı engellediği (önceki emeği bırakmanın psikolojik direnci) için zararlıdır."
  },
  {
    "en": "Big Picture",
    "tr": "Büyük Resim (Big Picture)",
    "note": "Sistemin ya da takımın genelini gören üst seviye bakış açısı"
  },
  {
    "en": "Boilerplate Code",
    "tr": "Basmakalıp/Şablon Kod (Boilerplate Code)",
    "note": "Pek çok yerde aynı biçimde tekrarlanan, çoğunlukla kopyalanarak çoğaltılan kalıp kod"
  },
  {
    "en": "Bound Resource",
    "tr": "Sınırlı Kaynak (Bound Resource)",
    "note": "Kapasitesi sınırlı, doluluk/boşluk durumunun sinyalle (signal) yönetilmesi gereken kaynak; sayfa 184'te üretici-tüketici deseni bağlamında 'a bound resource' ifadesinde geçer."
  },
  {
    "en": "Bound Resources",
    "tr": "Sınırlı Kaynaklar (Bound Resources)",
    "note": "Eşzamanlı ortamda kullanılan sabit boyutlu/sayılı kaynaklar (ör. veritabanı bağlantıları, sabit boyutlu tamponlar); sayfa 183'ün tanım tablosunda geçer."
  },
  {
    "en": "Boundary",
    "tr": "Sınır (Boundary)",
    "note": "Kendi kodumuzun kontrol etmediğimiz kodla (üçüncü taraf paket, açık kaynak ya da başka bir ekibin bileşeni) buluştuğu yer; Chapter 8'in konusu"
  },
  {
    "en": "Boundary Case",
    "tr": "Sınır Durumu (Boundary Case)",
    "note": "Eşzamanlı kodda özellikle inatçı olan uç durumlar: örn. temiz biçimde kapanmak, bir döngünün yinelemesini tamamlamak. Sayfa 190'ın Sonuç kesitinde geçer; 'Boundary' (Sınır) ve 'Boundary Test' terimlerinden ayrı, daha genel bir kavramdır."
  },
  {
    "en": "Boundary Condition",
    "tr": "Sınır Koşulu (Boundary Condition)",
    "note": "Bir algoritmanın sınır değerlerinde geçerli olan koşul; G3 kuralına göre her sınır koşulu için test yazılmalıdır. 'Boundary Condition Error' (Sınır Koşulu Hatası) teriminden ayrı, daha genel kavramdır."
  },
  {
    "en": "Boundary Condition Error",
    "tr": "Sınır Koşulu Hatası (Boundary Condition Error)",
    "note": "[T5] ile işaretli hata türü: sınır değerlerdeki kapsayıcılık yanlışının (ör. > yerine >= olması gereken koşul) yol açtığı tipik hata. Sayfa 269'da getFollowingDayOfWeek metodundaki hata için geçer."
  },
  {
    "en": "Boundary Interface",
    "tr": "Sınır Arayüzü (Boundary Interface)",
    "note": "Sistemin sınırında üçüncü taraf kodla temas eden arayüz (ör. Map); kullanıldığı sınıfta ya da yakın sınıf ailesinde tutulmalı, public API'lerde dolaştırılmamalı"
  },
  {
    "en": "Boundary Test",
    "tr": "Sınır Testi (Boundary Test)",
    "note": "Üçüncü taraf koda giden arayüzü üretim kodunun kullandığı şekilde çalıştıran testler; yeni sürümlere geçişi kolaylaştırır"
  },
  {
    "en": "Boy Scout Rule",
    "tr": "İzci Kuralı (Boy Scout Rule)",
    "note": "Kamp alanını bulduğundan daha temiz bırak prensibi"
  },
  {
    "en": "Breaking Indentation",
    "tr": "Girintiyi Bozma (Breaking Indentation)",
    "note": "Kısa if/while/fonksiyon bloklarını tek satıra sıkıştırarak girinti kuralının çiğnenmesi; kaçınılması gereken bir alışkanlık"
  },
  {
    "en": "Breakpoint",
    "tr": "Kesme Noktası (Breakpoint)",
    "note": "Hata ayıklamada (debug) programın durdurulması için ayarlanan nokta; vurulan kesme noktalarına bakarak sistemin durumu belirlenebilir."
  },
  {
    "en": "Broken Windows",
    "tr": "Kırık Pencereler (Broken Windows)",
    "note": "Pragmatik Programcılar metaforu: bir kırık pencere tüm binayı çürütür"
  },
  {
    "en": "brute force",
    "tr": "kaba kuvvet (brute force)",
    "note": "G23 bağlamında: durum için en doğru çözüm olmasa da bariz ve akla ilk gelen çözüm; çoğu switch kullanımının ardındaki neden."
  },
  {
    "en": "Bucket Brigade",
    "tr": "Kova Zinciri (Bucket Brigade)",
    "note": "G31 bağlamında: her fonksiyonun ürettiği sonucu bir sonraki fonksiyonun girdisi olarak aktardığı veri akışı deseni; fonksiyonların çağrılma sırasını görünür kılarak zamansal bağımlılığı (temporal coupling) açığa çıkarır."
  },
  {
    "en": "Bug",
    "tr": "Hata (Bug)",
    "note": "Sektörde \"bug\" olarak da kullanılır"
  },
  {
    "en": "Build",
    "tr": "derleme (build)",
    "note": "Projeyi çalıştırılabilir ürüne dönüştüren süreç; bu sayfada tek adımlı, önemsiz (trivial) bir işlem olması gerektiği vurgulanır (E1). Sözlükteki 'derlemek (compile)' teriminden farklı, üst seviye bir kavramdır. Fiil olarak 'derlemek (build)'."
  },
  {
    "en": "BUILD-OPERATE-CHECK",
    "tr": "KUR-İŞLET-DENETLE (BUILD-OPERATE-CHECK)",
    "note": "Testi üç bölüme ayıran desen: test verisini kur, bu veri üzerinde işlem yap, işlemin beklenen sonucu verdiğini denetle; Arrange-Act-Assert olarak da bilinir (FitNesse kabul testi desenleri)"
  },
  {
    "en": "Business Logic",
    "tr": "İş Mantığı (Business Logic)",
    "note": "Uygulamanın iş kurallarını (Business Rule) uygulayan mantık katmanı; sözlükteki 'İş Kuralı (Business Rule)' teriminden türetilmiştir."
  },
  {
    "en": "Business Rule",
    "tr": "İş Kuralı (Business Rule)",
    "note": "Uygulamanın alanına ait politika ve hesaplama mantığı; veri yapısına değil nesneye aittir"
  },
  {
    "en": "Byte-Code",
    "tr": "Bayt Kodu (Byte-Code)",
    "note": "Derleyicinin ürettiği, JVM tarafından çalıştırılan orta düzey makine temsilinin kendisi; sözlükteki 'Byte-Code Manipulation' (Bayt Kodu İşleme) teriminden ayrıdır, yalnızca bayt kodu kavramıdır."
  },
  {
    "en": "Byte-Code Manipulation",
    "tr": "Bayt Kodu İşleme (Byte-Code Manipulation)",
    "note": "Derlenmiş sınıf dosyalarının bayt kodunun çalışma anında değiştirilmesi; arayüzü olmayan sınıfları vekillemek için CGLIB, ASM, Javassist gibi kütüphaneler kullanılır."
  },
  {
    "en": "Caching",
    "tr": "Önbellekleme (Caching)",
    "note": "Sık erişilen verilerin, tekrar hesaplama ya da veritabanı erişiminden kaçınmak için hızlı erişilen bellekte saklanması; çapraz kesim kaygısı (cross-cutting concern) örneği."
  },
  {
    "en": "Callable",
    "tr": "Callable (arayüz)",
    "note": "Java'da Runnable'a benzeyen ama sonuç döndürebilen ve istisna (exception) fırlatabilen arayüz; çok iş parçacıklı (multithreaded) çözümlerde yaygın bir ihtiyaçtır. Bu sayfada 'implement the Callable interface' ifadesinde geçer. Teknik arayüz adı olduğu için İngilizce kalır."
  },
  {
    "en": "Callee",
    "tr": "Çağrılan Fonksiyon (Callee)",
    "note": "Başka bir fonksiyon tarafından çağrılan fonksiyon"
  },
  {
    "en": "Caller",
    "tr": "Çağıran Fonksiyon (Caller)",
    "note": "Başka bir fonksiyonu çağıran fonksiyon"
  },
  {
    "en": "Cardinality",
    "tr": "Kardinalite (Cardinality)",
    "note": "Args vaka çalışmasında fiilen sağlanan argüman sayısını ifade eder; args.cardinality() metodu bu sayıyı döndürür."
  },
  {
    "en": "Care",
    "tr": "Önemseme (Care)",
    "note": "Zanaata ve koda duyulan özen"
  },
  {
    "en": "Case Study",
    "tr": "Vaka Çalışması (Case Study)",
    "note": "Chapter 14'ün açılış alt başlığı ve konusu; gerçek bir modülün (komut satırı argümanı ayrıştırıcısı) adım adım yeniden düzenlenmesi üzerinden anlatılan örnek inceleme."
  },
  {
    "en": "Case-Insensitive Comparison",
    "tr": "büyük/küçük harfe duyarsız karşılaştırma (case-insensitive comparison)",
    "note": "equalsIgnoreCase gibi, metinleri harf büyüklüğünü dikkate almadan karşılaştıran işlem; testWeekdayCodeToString testinin ve stringToMonthCode fonksiyonunun düzeltilmesinde geçer."
  },
  {
    "en": "Casting",
    "tr": "Tür Dönüştürme (Casting)",
    "note": "Bir değeri açıkça başka bir türe çevirme, ör. (Sensor) sensors.get(id); istemci koda dağıldığında kodu kirletir"
  },
  {
    "en": "CGLIB",
    "tr": "CGLIB (Java Bytecode Generator Library)",
    "note": "Java bayt kodu üreten kütüphane; sayfa 189'da kodu programatik olarak enstrümanlamak için önerilen araçlardan biri. Teknik araç adı olduğu için İngilizce kalır."
  },
  {
    "en": "Chain of Inheritance",
    "tr": "Kalıtım Zinciri (Chain of Inheritance)",
    "note": "Bir sınıftan üst sınıflarına uzanan kalıtım hiyerarşisi"
  },
  {
    "en": "Change History",
    "tr": "Değişiklik Geçmişi (Change History)",
    "note": "Dosyaya eklenen, kimin ne zaman hangi değişikliği yaptığını listeleyen kayıt; C1 kuralına göre sürüm kontrol sistemine aittir, yorumlara konmaz."
  },
  {
    "en": "Check In",
    "tr": "Teslim Etmek (Check In)",
    "note": "Kod ve test değişikliklerini sürüm kontrol sistemindeki depoya kaydetmek; commit ile benzer anlamda"
  },
  {
    "en": "Check Out",
    "tr": "çekip almak (check out)",
    "note": "Kaynak kodu kontrol sisteminden (source code control) bir sürümü yerel çalışma kopyasınıza almak; 'check out a previous version' ifadesinde geçer."
  },
  {
    "en": "Checked Exception",
    "tr": "Denetlenen İstisna (Checked Exception)",
    "note": "Java'da metot imzasında throws ile bildirilmesi derleyici tarafından zorunlu tutulan istisna"
  },
  {
    "en": "Circular Wait",
    "tr": "Döngüsel Bekleme (Circular Wait)",
    "note": "Kilitlenmenin (deadlock) dört koşulundan sonuncusu: her iş parçacığının başka bir iş parçacığının tuttuğu kaynağı beklediği, 'ölümcül kucaklaşma' (deadly embrace) olarak da anılan döngü; sayfa 337'de T1/T2 ve R1/R2 örneğiyle açıklanır."
  },
  {
    "en": "Clarification",
    "tr": "Netleştirme (Clarification)",
    "note": "Karmaşık kütüphane çağrılarını veya dönüş değerlerini açıklayan yorum"
  },
  {
    "en": "Clarity",
    "tr": "Açıklık (Clarity)",
    "note": "Kodun anlaşılırlığı"
  },
  {
    "en": "Class",
    "tr": "Sınıf (Class)",
    "note": ""
  },
  {
    "en": "Class Name",
    "tr": "Sınıf İsmi (Class Name)",
    "note": ""
  },
  {
    "en": "Class Size",
    "tr": "Sınıf Boyutu (Class Size)",
    "note": "Bir sınıfın kapladığı satır/sorumluluk büyüklüğü"
  },
  {
    "en": "Clean Code",
    "tr": "Temiz Kod (Clean Code)",
    "note": ""
  },
  {
    "en": "Clean Test",
    "tr": "Temiz Test (Clean Test)",
    "note": "Başlıca niteliği okunabilirlik olan test: açıklık, sadelik ve ifade yoğunluğu; az ifadeyle çok şey söyler"
  },
  {
    "en": "Client Code",
    "tr": "İstemci Kod (Client Code)",
    "note": "Bir sınıfı, arayüzü ya da API'yi kullanan (çağıran) kod"
  },
  {
    "en": "Client-Based Locking",
    "tr": "İstemci Tabanlı Kilit (Client-Based Locking)",
    "note": "Paylaşılan nesnedeki birden fazla senkronize metodu istemcinin çağırması gerektiğinde, kilitleme sorumluluğunun istemciye verilmesi: istemci ilk çağrıda sunucuyu kilitler ve kilidin kapsamı son metodu çağıran kodu da kapsar. Sayfa 185'te üç düzeltme yolundan ilkidir."
  },
  {
    "en": "Client/Server",
    "tr": "İstemci/Sunucu (Client/Server)",
    "note": "Bir tarafın (sunucu) hizmet sunduğu, diğer tarafın (istemci) bağlanıp istek gönderdiği mimari desen; sayfa 317'de 'client/server application' ifadesinde geçer."
  },
  {
    "en": "Client/Server Nonthreaded",
    "tr": "İstemci/Sunucu İş Parçacıksız (Client/Server Nonthreaded)",
    "note": "Sayfa 343'ün level-2 başlığı: istemci bağlantılarını tek bir iş parçacığında, sırayla işleyen sunucu modeli. 'Nonthreaded | İş Parçacıksız (Nonthreaded)' girdisiyle uyumludur."
  },
  {
    "en": "Client/Server Using Threads",
    "tr": "İstemci/Sunucu İş Parçacıklı (Client/Server Using Threads)",
    "note": "Sayfa 346'nın level-2 başlığı: istemci bağlantılarının her birinin kendi iş parçacığında (thread) işlendiği sunucu modeli; sözlükteki 'Client/Server Nonthreaded' (İstemci/Sunucu İş Parçacıksız) girdisinin iş parçacıklı karşılığı."
  },
  {
    "en": "Closed Class",
    "tr": "Kapalı Sınıf (Closed Class)",
    "note": "Açık Kapalı İlkesi (OCP) anlamında değişikliğe kapalı sınıf: yeni işlev, mevcut sınıfı düzenleyerek değil yeni bir alt sınıf ekleyerek kazandırılır (Listing 10-10)"
  },
  {
    "en": "Closing Brace",
    "tr": "Kapatma Parantezi (Closing Brace)",
    "note": "Fonksiyon veya blok sonuna eklenen (artık gereksiz) yorum"
  },
  {
    "en": "Clutter",
    "tr": "Karmaşa (Clutter)",
    "note": "Koda değer katmayan, yalnızca okumayı güçleştiren fazlalık; sayfa 276'da metot imzasına bir şey katmayan Javadoc'lar ve final anahtar sözcükleri için geçer."
  },
  {
    "en": "Codd Normal Forms",
    "tr": "Codd Normal Formları (Codd Normal Forms)",
    "note": "Codd'un veritabanı şemalarındaki tekrarı (duplication) ortadan kaldırmak için önerdiği normalleştirme (normalization) biçimleri; sözlükteki 'Normal Forms' (Normal Formlar) girdisiyle aynı kavram, bu sayfada 'Codd Normal Forms' olarak geçer."
  },
  {
    "en": "Code Coverage",
    "tr": "Kod Kapsamı (Code Coverage)",
    "note": "Üretim kodunun testlerle çalıştırılan bölümünün oranı; sayfa 284'te 'the code coverage in DayDate has decreased' ifadesinde geçer. Sözlükteki 'Test Coverage | Test Kapsamı (Test Coverage)' terimiyle yakın anlamlıdır."
  },
  {
    "en": "Code Formatting",
    "tr": "Kod Biçimlendirme (Code Formatting)",
    "note": "Kodun biçimini yöneten kuralların uygulanması; bir iletişim aracıdır"
  },
  {
    "en": "Code Rot",
    "tr": "Kod Çürümesi (Code Rot)",
    "note": "Kötü kodun zamanla çürümesi, mayalanması ve ekibi aşağı çeken durdurulamaz bir yüke dönüşmesi; 'code rots' = 'kod çürür'. Sözlükteki 'Decay' (Çürüme) teriminin kod bağlamındaki karşılığı."
  },
  {
    "en": "Code Smell",
    "tr": "Kod Kokusu (Code Smell)",
    "note": "Koddaki potansiyel sorunların belirtisi"
  },
  {
    "en": "Code-Sense",
    "tr": "Kod Duygusu (Code-Sense)",
    "note": "Temiz kodu kirli koddan ayırt etme ve düzeltme yetisi"
  },
  {
    "en": "Coding Standard",
    "tr": "Kodlama Standardı (Coding Standard)",
    "note": "Bir takımın uyduğu biçimlendirme/kodlama kurallarının yazılı ya da örnek kod hâlindeki tanımı"
  },
  {
    "en": "Coding Style",
    "tr": "Kodlama Biçemi (Coding Style)",
    "note": "Bir geliştirici ya da ekibin kodu yazarken izlediği tutarlı biçim alışkanlıkları"
  },
  {
    "en": "Cognitive Break",
    "tr": "Bilişsel Kesinti (Cognitive Break)",
    "note": "Fonksiyon imzasını kontrol etme gerekliliği"
  },
  {
    "en": "Cohesion",
    "tr": "Bütünlük (Cohesion)",
    "note": "Bir grup argümanın ya da elemanın birbiriyle ne kadar doğal biçimde ilişkili olduğu; ör. bir noktanın x ve y bileşenleri"
  },
  {
    "en": "Collapse (methods)",
    "tr": "birleştirme (collapse)",
    "note": "İki benzer/ikiz metodu tek bir metoda indirgeme yeniden düzenlemesi (refactoring); sayfa 277'de iki getMonths fonksiyonunun tek fonksiyonda birleştirilmesinde geçer."
  },
  {
    "en": "Collection Abstraction",
    "tr": "Koleksiyon Soyutlama (Collection Abstraction)",
    "note": ""
  },
  {
    "en": "Command Query Separation",
    "tr": "Komut Sorgu Ayrımı (Command Query Separation)",
    "note": "Fonksiyonlar ya bir şey yapmalı ya da bir soruyu yanıtlamalı, ikisini birden değil"
  },
  {
    "en": "Command-Line Argument",
    "tr": "Komut Satırı Argümanı (Command-Line Argument)",
    "note": "main fonksiyonuna dizgi dizisi olarak geçirilen ve ayrıştırılması gereken satır içi girdi; bu bölümde Args sınıfının konusu. 'Argument' ve 'Argument List' terimlerinden ayrı, dar bir kavramdır."
  },
  {
    "en": "Command-Line Arguments",
    "tr": "Komut Satırı Argümanları (Command-Line Arguments)",
    "note": "Komut satırından programa aktarılan girdi dizgileri; bu sayfada `Args` sınıfının ayrıştırdığı ana girdi. Sözlükteki 'Argument' (Argüman) teriminin komut satırı bağlamındaki kullanımıdır."
  },
  {
    "en": "Commented-out Code",
    "tr": "Yorum Satırına Alınmış Kod (Commented-out Code)",
    "note": "Silinmesi gereken, artık kullanılmayan kod blokları"
  },
  {
    "en": "Commit",
    "tr": "Commit",
    "note": "Çevrilmez, olduğu gibi kullanılır"
  },
  {
    "en": "Commitment",
    "tr": "Taahhüt (Commitment)",
    "note": ""
  },
  {
    "en": "Committer",
    "tr": "committer (commit hakkına sahip geliştirici)",
    "note": "Kaynak kodu deposuna doğrudan değişiklik yazma (commit) yetkisine sahip geliştirici; kitapta 'one of our committers' ifadesinde geçer. Sözlükteki 'Commit | Commit' terimiyle ilişkilidir."
  },
  {
    "en": "Common Closure Principle",
    "tr": "Ortak Kapanış İlkesi (Common Closure Principle)",
    "note": "Dipnot 7'de geçer: birlikte değişme nedeni paylaşan sınıfların aynı pakette/parçada toplanmasını öneren paketleme ilkesi [PPP]."
  },
  {
    "en": "Communication Gap",
    "tr": "İletişim Boşluğu (Communication Gap)",
    "note": "Alan kavramı ile onu gerçekleştiren kod arasındaki anlam kaybı/uzaklık; DSL'ler bu boşluğu en aza indirir"
  },
  {
    "en": "Compare and Swap (CAS)",
    "tr": "Karşılaştır ve Değiştir (Compare and Swap — CAS)",
    "note": "Modern işlemcilerin sunduğu donanım işlemi: bir değeri beklenen eski değerle karşılaştır, eşleşiyorsa değiştir; eşleşmiyorsa yeniden dene. İyimser (optimistic) kilitlemenin donanım karşılığıdır."
  },
  {
    "en": "Comparison Predicate",
    "tr": "Karşılaştırma Yüklemi (Comparison Predicate)",
    "note": "İki nesne (ör. tarih) arasındaki ilişkiyi boolean döndüren ve cümle gibi okunan metot; SerialDate'in isOn, isBefore, isOnOrBefore, isAfter, isOnOrAfter soyut metotları buna örnektir. Sözlükteki 'Predicate | Yüklem (Predicate)' girdisinden (JavaBean is-metotları) ayrıdır; sıralama ilişkisi odaklıdır."
  },
  {
    "en": "compile",
    "tr": "derlemek (compile)",
    "note": "Glossary'deki 'Compiler | Derleyici (Compiler)'in fiil hâli; 'get this to compile' = 'bunun derlenmesi için'."
  },
  {
    "en": "Compiler",
    "tr": "Derleyici (Compiler)",
    "note": "Kaynak kodu makine koduna çeviren program"
  },
  {
    "en": "Compiler Warning",
    "tr": "Derleyici Uyarısı (Compiler Warning)",
    "note": "Derleyicinin potansiyel sorunlara karşı ürettiği uyarı; G4 kuralına göre bunları kapatmak (ya da tümünü kapatmak) risklidir."
  },
  {
    "en": "Completeness",
    "tr": "Tamamlılık (Completeness)",
    "note": "Bir dizi test veya işlemin her olası durumu kapsaması; sayfa 239'da 'for completeness' ifadesinde geçer: eksik double argümanının testi yalnızca tamamlılık için yazılmıştır."
  },
  {
    "en": "Component Oriented Programming",
    "tr": "Bileşen Yönelimli Programlama (COP)",
    "note": "Tekrarı kaldırma stratejilerinden biri"
  },
  {
    "en": "Composed Method",
    "tr": "Oluşturulmuş Metot (Composed Method)",
    "note": "Metodu küçük adımlara bölerek oluşturma"
  },
  {
    "en": "Compromise",
    "tr": "Uzlaşma (Compromise)",
    "note": "Mükemmel çözüm yerine pratikte kabul edilen orta yol; bu sayfada hata mesajı biçimlendirmesinin ArgsException'ta tutulması bir uzlaşma olarak nitelendirilir."
  },
  {
    "en": "Conceptual Affinity",
    "tr": "Kavramsal Yakınlık (Conceptual Affinity)",
    "note": "Kod parçalarının kavramsal olarak birbirine yakın olması; doğrudan bağımlılık ya da benzer işlem yapma nedeniyle olabilir; yakınlık arttıkça dikey mesafe azalmalı"
  },
  {
    "en": "Concrete Class",
    "tr": "Somut Sınıf (Concrete Class)",
    "note": "Gerçekleştirim ayrıntılarını (kodu) içeren sınıf; istemcinin doğrudan somut sınıfa bağımlı olması, ayrıntılar değiştiğinde risk yaratır"
  },
  {
    "en": "Concurrency",
    "tr": "Eşzamanlılık (Concurrency)",
    "note": "Bölüm 13'ün açılış sayfası ve konusu: birden çok işin iş parçacıkları (threads) aracılığıyla aynı anda yürütülmesini sağlayan tasarım ve programlama disiplini. Sözlükteki 'Race Condition' (Yarış Durumu) terimiyle ilişkili ama ayrı bir kavramdır."
  },
  {
    "en": "Concurrent Code",
    "tr": "Eşzamanlı Kod (Concurrent Code)",
    "note": "Birden çok iş parçacığının (thread) aynı anda yürütüldüğü kod; 'Dependencies Between Methods Can Break Concurrent Code' başlığında geçer. 'Concurrency | Eşzamanlılık (Concurrency)' ve 'Concurrent Programming | Eşzamanlı Programlama' terimlerinin kod bağlamındaki kullanımıdır."
  },
  {
    "en": "Concurrent Programming",
    "tr": "Eşzamanlı Programlama (Concurrent Programming)",
    "note": "Birden çok iş parçacığının aynı anda yürütüldüğü programlama disiplini; sözlükteki 'Concurrency | Eşzamanlılık (Concurrency)' teriminin sıfat biçimi. Bu sayfada 'the case of concurrent programming' ifadesinde geçer."
  },
  {
    "en": "Concurrent Update",
    "tr": "Eşzamanlı Güncelleme (Concurrent Update)",
    "note": "Sayfa 342'nin Sonuç (Conclusion) kesitinde geçer: birden çok iş parçacığının paylaşılan bir durumu aynı anda güncellemesi; temiz senkronizasyon (synchronization) ve kilitleme (locking) disiplinleriyle önlenir."
  },
  {
    "en": "Configurable Data",
    "tr": "Yapılandırılabilir Veri (Configurable Data)",
    "note": "G35 sezgisel kuralı: yüksek soyutlama seviyesinde bilinen ve beklenen varsayılan/yapılandırma değerlerinin düşük seviyeli fonksiyonlara gömülmesi yerine, onlara argüman olarak aşağı aktarılması gerektiğini söyler."
  },
  {
    "en": "Configuration File",
    "tr": "Yapılandırma Dosyası (Configuration File)",
    "note": "Hangi nesnelerin birbirine bağlanacağı (wiring) gibi kurulum kararlarının koda gömülmek yerine dışarıda tutulduğu dosya; ör. Spring'in XML yapılandırma dosyası"
  },
  {
    "en": "Connection Strategy",
    "tr": "Bağlantı Stratejisi (Connection Strategy)",
    "note": "Bir modemin bağlanma yöntemi (çevirme, sabit kablolama, USB anahtarı üzerinden vb.); sayfa 311'de 'any other kind of connection strategy' ifadesinde geçer."
  },
  {
    "en": "Consistent Lexicon",
    "tr": "Tutarlı Kelime Haznesi (Consistent Lexicon)",
    "note": "Kod tabanında tutarlı terimler kullanma prensibi"
  },
  {
    "en": "Constant",
    "tr": "Sabit (Constant)",
    "note": "Programın çalışması boyunca değişmeyen, adlandırılmış değer; uygun soyutlama seviyesinde tutulmalıdır [G35]"
  },
  {
    "en": "Constants Interface",
    "tr": "Sabit Arayüzü (Constants Interface)",
    "note": "Yalnızca sabitleri (constants) taşıyan ve istemcilerin bu sabitlere niteleme yapmadan erişmek için gerçekleştirdiği arayüz; MonthConstants bunun bir örneğidir. J2 sezgisel kuralı (sabitlerden kalıtım almayın — Don't Inherit Constants), sabitler arayüzü gerçekleştiren sınıfın genel API'sine (public API) sızdığı için bu deseni eleştirir."
  },
  {
    "en": "Constructor",
    "tr": "Kurucu (Constructor)",
    "note": "Bir nesne oluşturulurken çağrılan, ilklendirme yapan özel metot"
  },
  {
    "en": "Constructor Argument",
    "tr": "kurucu argümanı",
    "note": "Bir nesnenin kurucusuna (constructor) geçirilen parametre; Abstract Factory bağlamında uygulama, kurulum ayrıntılarını bilmeden fabrika yöntemiyle uygulamaya özgü kurucu argümanları sağlayabilir"
  },
  {
    "en": "Container",
    "tr": "Kap (Container)",
    "note": "Veri yapısı kapsayıcısı (List, Set, Map vb.)"
  },
  {
    "en": "Contention",
    "tr": "Çekişme (Contention)",
    "note": "Birden çok iş parçacığının aynı kilit/kaynak için yarışması; sayfa 185'te 'increases contention and degrades performance' ifadesinde geçer. Kritik bölge büyüdükçe çekişme artar."
  },
  {
    "en": "ConTest",
    "tr": "ConTest",
    "note": "IBM tarafından geliştirilen, eşzamanlılık hatalarını yakalamak için thread scheduling'i programatik olarak kontrol eden test aracı; dipnot 18: http://www.alphaworks.ibm.com/tech/contest. Araç adı olduğu için çevrilmez."
  },
  {
    "en": "Context",
    "tr": "Bağlam (Context)",
    "note": "Kodun anlaşılması için gereken çevresel bilgi"
  },
  {
    "en": "Context Switch",
    "tr": "Bağlam Değişimi (Context Switch)",
    "note": "Bir iş parçacığından diğerine geçerken yürütme biriminin (işlemci/sanal makine) bir iş parçacığının durumunu kaydedip diğerinin durumunu yüklediği geçiş; bu sayfada her adımdan önce T iş parçacığı arasında seçim yapan bağlam değişimi ve yolların rakam dizgeleriyle (1122, 1212, ...) temsil edilmesi bağlamında geçer."
  },
  {
    "en": "Continuous Improvement",
    "tr": "Sürekli İyileştirme (Continuous Improvement)",
    "note": ""
  },
  {
    "en": "Continuous Integration",
    "tr": "Sürekli Entegrasyon (Continuous Integration)",
    "note": "Kod değişikliklerini otomatik olarak derleyip test eden ve bu sayede testlerin sürekli çalıştırıldığı geliştirme uygulaması/ortamı; sayfa 341'de 'a continuous integration server starts running them soon' ifadesinde geçer."
  },
  {
    "en": "Conundrum",
    "tr": "İkilem (Conundrum)",
    "note": "Temiz kodun temel felsefesiyle ilgili zorluk"
  },
  {
    "en": "convention",
    "tr": "kural (convention)",
    "note": "İki gösterim arasındaki dönüşümde, farklı hassasiyet (precision) yüzünden belirsiz kalan davranışı (ör. 'günün saati — time of day') sabitlemek için API'de yazılı olarak bildirilen uzlaşım; Listing B-1'deki toDate() Javadoc'unda ve sayfa 362 kavram kartlarında geçer. Sözlükteki 'Convention over Configuration' (yapılandırmadan çok kural) ve 'Naming Convention' (İsimlendirme Kuralı) terimlerinden ayrı, genel kavramdır."
  },
  {
    "en": "Convention over Configuration",
    "tr": "yapılandırmadan çok kural (convention over configuration)",
    "note": "Açıkça yapılandırılacak pek çok şey için akla uygun varsayılan davranışlar tanımlama ilkesi; açık 'bağlama' (wiring) mantığı miktarını azaltır."
  },
  {
    "en": "Corner Case",
    "tr": "Uç Durum (Corner Case)",
    "note": "Bir algoritmanın uç/uç değerlerinde ortaya çıkan özel durum; kitapta 'corner and boundary cases' ifadesinde geçer. 'Boundary Case' (Sınır Durumu) ile yakın anlamlıdır."
  },
  {
    "en": "Cosmic Ray",
    "tr": "Kozmik Işın (Cosmic Ray)",
    "note": "Tek seferlik, açıklanamayan başarısızlıklara uydurulan bahane; bu sayfada 'write off the failure as a cosmic ray' ifadesinde geçer."
  },
  {
    "en": "CountDownLatch",
    "tr": "CountDownLatch",
    "note": "Bir dizi olayın gerçekleşmesini bekleyip sonra tüm iş parçacıklarını serbest bırakan kilit; java.util.concurrent paketinde. Teknik sınıf adı olduğu için çevrilmez."
  },
  {
    "en": "Coup de Grace",
    "tr": "Nihai Darbe (Coup de Grace)",
    "note": "Fransızca 'nihai darbe' ifadesi; yeniden düzenlemede (refactoring) bir yapının (ör. tip-zinciri) son kullanımı taşındıktan sonra tek hamlede kaldırılma anını betimler. Sayfa 236'da 'the coup de grace' ifadesinde geçer."
  },
  {
    "en": "Coupling",
    "tr": "Bağımlılık (Coupling)",
    "note": "Bileşenlerin birbirine bağımlılığı"
  },
  {
    "en": "Coverage Map",
    "tr": "Kapsam Haritası (Coverage Map)",
    "note": "Kod kapsamı (code coverage) aracının, sınıfın hangi bölgelerinin testlerce yürütüldüğünü/çalıştırılmadığını renklendirerek gösteren görselleştirmesi; yeniden düzenlemede riskli bölgeleri işaret eder. Sayfa 268'de 'yama yorganına (patchwork quilt) benzer' olarak betimlenir."
  },
  {
    "en": "Coverage Tool",
    "tr": "Kapsam Aracı (Coverage Tool)",
    "note": "T2 sezgisel kuralının konusu: test stratejisindeki boşlukları gösteren, kapsanan satırları yeşil, kapsanmayanları kırmızı işaretleyen araç; çoğu IDE'de yerleşiktir. Sözlükteki 'Kod Kapsamı (Code Coverage)' ve 'Test Kapsamı (Test Coverage)' terimleriyle ilişkilidir."
  },
  {
    "en": "CPU utilization",
    "tr": "CPU kullanımı (CPU utilization)",
    "note": "İşlemcinin gerçek iş yaparak geçirdiği sürenin toplam süreye oranı; kilitlenmeyi önleme stratejilerinin düşük ya da yüksek ve yararsız CPU kullanımı gibi etkileri sayfa 338'de karşılaştırılır."
  },
  {
    "en": "Craft",
    "tr": "Zanaat (Craft)",
    "note": "Programlamanın bir bilimden çok zanaat olduğuna dair 'programming is a craft' ifadesindeki sade terim; sayfa 200'de geçer. Sözlükteki 'Craftsmanship | Zanaat / Ustalık (Craftsmanship)' ve 'Software Craftsmanship | Yazılım Zanaatı (Software Craftsmanship)' girdilerinden ayrıdır."
  },
  {
    "en": "Craftsmanship",
    "tr": "Zanaat / Ustalık (Craftsmanship)",
    "note": "Yazılım zanaatı"
  },
  {
    "en": "Crawler",
    "tr": "Tarayıcı (Crawler)",
    "note": "Sayfaları dolaşıp işleyen bileşen; FitNesse'de wiki sayfalarını ekleyip bulan nesne (crawler.addPage). Web tarayıcısı (browser) ile karıştırılmamalı"
  },
  {
    "en": "Crisp Abstraction",
    "tr": "Keskin Soyutlama (Crisp Abstraction)",
    "note": "Grady Booch'un temiz kod tanımından; net ve öz soyutlama"
  },
  {
    "en": "Critical Section",
    "tr": "Kritik Bölge (Critical Section)",
    "note": "Paylaşılan kaynağa erişim için iş parçacıklarının sırayla girmesi gereken kod bölümü; kavram kartlarında kullanıldı."
  },
  {
    "en": "Cross Section",
    "tr": "Kesit Alanı (Cross Section)",
    "note": "Bu sayfada 'have such a small cross section' ifadesinde geçer: bir eşzamanlılık (concurrency) sorununun, hangi koşullar altında ortaya çıkabileceğinin dar aralığı; kesit ne kadar küçükse sorun o kadar nadir görülür."
  },
  {
    "en": "Cross-Cutting Concern",
    "tr": "Çapraz Kesim Kaygısı (Cross-Cutting Concern)",
    "note": "Kalıcılık, güvenlik, işlem yönetimi gibi nesnelerin doğal sınırlarını keserek birçok modüle yayılan kaygı türü"
  },
  {
    "en": "Cross-Reference",
    "tr": "Çapraz Başvuru (Cross-Reference)",
    "note": "Bir sezgisel kuralın (heuristic) metnin başka bir yerinde (ör. Ek C) nerede anıldığını gösteren bağlantı."
  },
  {
    "en": "crufty",
    "tr": "paslı/çürümüş (crufty)",
    "note": "Eski, köhne, ömrünü tamamladığı için temizlenmesi gereken kod için kullanılan sıfat; bu sayfada IntegerArgumentMarshaler'daki artık kullanılmayan metotlar için geçer. 'Dirty Code' (Kirli Kod) teriminden ayrıdır, eskilik/ömrünü tamamlama vurgusu taşır."
  },
  {
    "en": "Culprit",
    "tr": "Suçlu (culprit)",
    "note": "Bu sayfada hatalı kullanımın bulunduğu kod parçasının 'suçlu' olarak adlandırılması; 'the culprit' = 'suçlu (culprit)'."
  },
  {
    "en": "Data Abstraction",
    "tr": "Veri Soyutlama (Data Abstraction)",
    "note": "Verinin nasıl saklandığını değil ne anlama geldiğini dışarı açma"
  },
  {
    "en": "Data Access Object (DAO)",
    "tr": "Veri Erişim Nesnesi (DAO)",
    "note": "Kalıcı depoya (ör. veritabanı) erişimi kapsülleyen, iş nesnesini depolama ayrıntılarından ayıran nesne; kitapta 'data accessor object (DAO)' olarak geçer."
  },
  {
    "en": "Data Structure",
    "tr": "Veri Yapısı (Data Structure)",
    "note": "Verisini açıkça gösteren, anlamlı davranışı olmayan yapı"
  },
  {
    "en": "Data Transfer Object (DTO)",
    "tr": "Veri Aktarım Nesnesi (Data Transfer Object / DTO)",
    "note": "Public değişkenleri olan, fonksiyonu olmayan saf veri yapısı; veritabanı ve soket sınırlarında kullanılır"
  },
  {
    "en": "Data Type",
    "tr": "Veri Türü (Data Type)",
    "note": "Bir değişkenin veya değerin türünü belirten kavram"
  },
  {
    "en": "Data/Object Anti-Symmetry",
    "tr": "Veri/Nesne Karşı Simetrisi (Data/Object Anti-Symmetry)",
    "note": "Nesneler yeni türü, veri yapıları yeni işlemi kolaylaştırır"
  },
  {
    "en": "Database Connections",
    "tr": "Veritabanı Bağlantıları (Database Connections)",
    "note": "Birden çok iş parçacığının aynı anda kullanamayacağı, doğası gereği iş parçacığına güvenli (thread safe) olmayan kaynaklar; sayfa 328'in 'İş Parçacığına Güvenli Olmayan Sınıflar' listesinde geçer."
  },
  {
    "en": "date format",
    "tr": "tarih biçimi (date format)",
    "note": "Tarihlerin temsil edildiği/okunduğu biçim; kod yorumunda 'this date format' ifadesinde geçer (MINIMUM_YEAR_SUPPORTED civarı)."
  },
  {
    "en": "date format symbols",
    "tr": "tarih biçimi simgeleri (date format symbols)",
    "note": "java.text.DateFormatSymbols sınıfının temsil ettiği, ay ve gün adları gibi yerelleştirilmiş (localized) tarih biçimleme (formatting) öğeleri; SerialDate'in DATE_FORMAT_SYMBOLS sabitinde kullanılır."
  },
  {
    "en": "Day-of-the-week relative constant",
    "tr": "Hafta Günü Göreli Sabiti (Day-of-the-week Relative Constant)",
    "note": "PRECEDING / NEAREST / FOLLOWING sabitleri, bir hafta gününü sabit bir tarihe göreli olarak (önceki, en yakın, sonraki) belirtir; işaretli ofsetlerin (1, 0, -1) anlamını gizlemesi yerine çağrıyı düz metin gibi okutur (Listing B-1)."
  },
  {
    "en": "DBMS",
    "tr": "DBMS (Veritabanı Yönetim Sistemi — Database Management System)",
    "note": "Database Management System; veritabanını yöneten yazılım. Kısaltma İngilizce kalır"
  },
  {
    "en": "Dead Code",
    "tr": "Ölü Kod (Dead Code)",
    "note": "Çalıştırılmayan, artık kullanılmayan kod (ulaşılamayan if dalları, asla istisna fırlatmayan try'ların catch blokları, hiç çağrılmayan yardımcı metotlar); G9 sezgisel kuralının konusu. Tasarım değiştikçe güncellenmediği için çürür, silinmelidir."
  },
  {
    "en": "Deadline",
    "tr": "Son Teslim Tarihi (Deadline)",
    "note": "Projenin teslim edilmesi gereken tarih"
  },
  {
    "en": "Deadlock",
    "tr": "Ölü Kilit (Deadlock)",
    "note": "Sayfa 179 listesinde 'concurrent update and deadlock' ifadesinde geçer; iş parçacıklarının birbirini sonsuza dek beklediği durum."
  },
  {
    "en": "Deadly Embrace",
    "tr": "Ölümcül Kucaklaşma (Deadly Embrace)",
    "note": "Döngüsel beklemeye (circular wait) verilen bir diğer ad: iki ya da daha çok iş parçacığının, her birinin diğerinin tuttuğu kaynağı beklediği, kilitlenme (deadlock) biçimi. Sayfa 337'de 'This is also referred to as the deadly embrace' ifadesinde geçer."
  },
  {
    "en": "Decay",
    "tr": "Çürüme (Decay)",
    "note": "Kırık pencereler metaforunda kodun giderek kötüleşmesi"
  },
  {
    "en": "Decentralized Management",
    "tr": "Merkezi Olmayan Yönetim (Decentralized Management)",
    "note": "Modülerlik (Modularity) ve kaygıların ayrılması (Separation of Concerns) sayesinde, yeterince büyük bir sistemde yönetim ve karar verme sorumluluğunun tek bir kişiye değil alanlara/ekiplerine dağıtılması."
  },
  {
    "en": "Decisive",
    "tr": "Kararlı (Decisive)",
    "note": "Kodun tereddütsüz ve kesin olması"
  },
  {
    "en": "Declaration",
    "tr": "Tanımlama (Declaration)",
    "note": "Bir değişkenin ya da üyenin adının ve türünün kodda bildirilmesi"
  },
  {
    "en": "Decorator (GoF pattern)",
    "tr": "Süsleyici (Decorator)",
    "note": "GoF tasarım deseni: bir nesneyi aynı arayüzü taşıyan başka bir nesneyle sarmalayarak (wrap) davranışını saydam (transparent) biçimde genişletme; iç içe süsleyiciler 'Rus bebeği (Russian doll)' gibi katmanlanır."
  },
  {
    "en": "Decoupling",
    "tr": "Ayrıştırma (Decoupling)",
    "note": "Bileşenler arasındaki bağımlılığı (coupling) azaltma; bu şekilde ayrıştırılmış sistemler daha kolay test edilir, daha esnektir ve yeniden kullanımı teşvik eder"
  },
  {
    "en": "defactored",
    "tr": "defactored (yeniden düzenleme yapılmamış)",
    "note": "Listing 15-3'ün başlığında geçer: modülün kasıtlı olarak yeniden düzenlenmemiş (refactoring uygulanmamış), yani daha kötü bırakılmış hâli; 'refactored' sözcüğünün zıt yönlü bir kelime oyunudur."
  },
  {
    "en": "Default Constructor",
    "tr": "Varsayılan Kurucu (Default Constructor)",
    "note": "Argüman almayan kurucu; log4j'de ConsoleAppender'ın varsayılan kurucusu nesneyi yapılandırılmamış bırakır"
  },
  {
    "en": "Degenerate Constructor",
    "tr": "Yoz Kurucu (Degenerate Constructor)",
    "note": "Hiçbir iş yapmayan, derleyicinin kendiliğinden üreteceği boş kurucu; sayfa 276'da 'degenerate default constructor' ifadesinde geçer [G12]."
  },
  {
    "en": "Delegation",
    "tr": "Delege Etme (Delegation)",
    "note": "Sorumluluğu başka bir nesneye devretme"
  },
  {
    "en": "Dependencies Between Methods",
    "tr": "Metotlar Arasındaki Bağımlılıklar (Dependencies Between Methods)",
    "note": "Birbiri ardına çağrılması gereken metotların oluşturduğu sıra bağımlılığı; her metot tek başına iş parçacığına güvenli (thread-safe) olsa bile, çağrıların gruplandığı aralık korunmazsa eşzamanlı kod bozulabilir. Sayfa 329'un ana başlığı."
  },
  {
    "en": "Dependency",
    "tr": "Bağımlılık (Dependency)",
    "note": ""
  },
  {
    "en": "Dependency Injection",
    "tr": "Bağımlılık Enjeksiyonu (Dependency Injection)",
    "note": ""
  },
  {
    "en": "Dependency Inversion Principle (DIP)",
    "tr": "Bağımlılık Tersine Çevirme İlkesi (DIP)",
    "note": "Üst seviye modüller alt seviye modüllere değil, soyutlamalara bağımlı olmalı"
  },
  {
    "en": "Dependency Magnet",
    "tr": "Bağımlılık Mıknatısı (Dependency Magnet)",
    "note": "Birçok sınıfın bağımlı olduğu merkezi yapı (ör. Error enum)"
  },
  {
    "en": "Dependent Functions",
    "tr": "Bağımlı Fonksiyonlar (Dependent Functions)",
    "note": "Biri diğerini çağıran fonksiyonlar; dikey olarak yakın durmalı, çağıran çağrılanın üstünde olmalı"
  },
  {
    "en": "deploy",
    "tr": "yerleştirmek (deploy)",
    "note": "Chapter 14 vaka çalışması jargonu: bir fonksiyonu/değişkeni üst sınıftan doğru alt sınıfa taşıma; glossary'deki 'Deployment Descriptor' (Dağıtım Betimleyicisi) ve 'Redeployment' (Yeniden Dağıtım) terimlerinden farklı bir anlam taşır."
  },
  {
    "en": "Deploy (down)",
    "tr": "yerleştirmek/deploy (deploy)",
    "note": "Ardışık iyileştirme (Successive Refinement) bağlamında bir fonksiyonu taban sınıftan alt sınıflara (ör. set'in BooleanArgumentMarshaller'a) doğru indirme/yerleştirme; sayfa 218'de get için de kullanılacak."
  },
  {
    "en": "Deploying",
    "tr": "Yerleştirme (Deploying)",
    "note": "Bu sayfadaki anlamda bir metodu/davranışı marshaler sınıfına taşıma; yazılım dağıtımı (deployment) anlamında değildir."
  },
  {
    "en": "Deployment Descriptor",
    "tr": "Dağıtım Betimleyicisi (Deployment Descriptor)",
    "note": "EJB'de kalıcılık, işlemsel davranış ve güvenlik gibi ayarları kaynak koddan bağımsız olarak bildiren XML dosyası"
  },
  {
    "en": "Deployment Platform",
    "tr": "Dağıtım Platformu (Deployment Platform)",
    "note": "Yazılımın son kullanıcıya sunulduğu (deploy edildiği) hedef ortam/lar; sayfa 341'de 'target deployment platforms' ifadesinde geçer. Sözlükteki 'deploy | yerleştirmek' teriminden farklı, dağıtım anlamıdır."
  },
  {
    "en": "Derivative",
    "tr": "Türev (Derivative)",
    "note": "Kitaptaki kullanımda ArgumentMarshaler arayüzünü gerçekleştiren sınıflar (BooleanArgumentMarshaler, StringArgumentMarshaler vb.); matematiğin türev kavramıyla ilgisi yoktur. Sayfa 197'de 'what its derivatives do' ifadesinde geçer."
  },
  {
    "en": "Derivatives",
    "tr": "Türevler (Derivatives)",
    "note": "Soyut taban sınıftan kalıtımla türetilen alt sınıflar; sayfa 197-198'de 'derivatives' için 'türevler' kullanılmıştı, tutarlıdır."
  },
  {
    "en": "Descriptive Names",
    "tr": "Betimleyici İsimler (Descriptive Names)",
    "note": "Fonksiyonun ne yaptığını açıkça anlatan, gerekirse uzun tutulan isimlendirme ilkesi"
  },
  {
    "en": "Design Intent",
    "tr": "Tasarım Amacı (Design Intent)",
    "note": "Sistemin amaçlanan mimari yapısı"
  },
  {
    "en": "Design Pattern",
    "tr": "Tasarım Deseni (Design Pattern)",
    "note": ""
  },
  {
    "en": "Design Patterns",
    "tr": "Tasarım Desenleri (Design Patterns)",
    "note": "Gamma ve diğerleri (GoF) tarafından kataloglanan, yinelenen nesne yönelimli sorunlara yeniden kullanılabilir çözümler; kaynakçadaki [GOF] maddesinde geçer."
  },
  {
    "en": "Dining Philosophers",
    "tr": "Yemek Yiyen Filozoflar (Dining Philosophers)",
    "note": "Yuvarlak masada çatal (resource) için yarışan filozoflar (threads) metaforuyla kaynak yarışı; dikkat edilmezse ölü kilit (deadlock) ve canlı kilit (livelock) üretir; sayfa 184'te level-2 başlık."
  },
  {
    "en": "Dirty Code",
    "tr": "Kirli Kod (Dirty Code)",
    "note": "Temiz olmayan, bakımı zor kod"
  },
  {
    "en": "Dirty Tests",
    "tr": "Kirli Testler (Dirty Tests)",
    "note": "Kalite standartları gözetilmeden “çabuk ve kirli” yazılmış testler; değiştirilmeleri zorlaşır ve zamanla bir yüke dönüşürler"
  },
  {
    "en": "Disinformation",
    "tr": "Yanlış Bilgi (Disinformation)",
    "note": "İsimlerin okuyucuyu yanlış yönlendirmesi"
  },
  {
    "en": "Do One Thing",
    "tr": "Tek Bir Şey Yap (Do One Thing)",
    "note": "Fonksiyonların tek bir işi yerine getirmesi ilkesi; Chapter 3'teki bölüm başlığı, G30 sezgisel kuralında yeniden anılır."
  },
  {
    "en": "Documentation by Example",
    "tr": "Örnekle Dokümantasyon (Documentation by Example)",
    "note": "Testlerin başlıca amaçlarından biri: testleri okuyan kişinin sınıfın ne işe yaradığını hızlıca anlaması; sayfa 175'te 'documentation by example' ifadesi olarak geçer."
  },
  {
    "en": "Dogma",
    "tr": "Dogma",
    "note": "Chapter 12 'Minimal Classes and Methods' kesitinde: her sınıfa arayüz dayatma ya da veri/davranışı zorla ayırma gibi bağlamdan kopuk, sorgulanamaz kurallar; kitapta 'pointless dogmatism' (anlamsız dogmatizm) ifadesiyle eleştirilir."
  },
  {
    "en": "Dogmatism",
    "tr": "Dogmatizm",
    "note": "Dogma kelimesinin hâl/kavram karşılığı; 'pointless dogmatism' = 'anlamsız dogmatizm'. 'Minimal Classes and Methods' kesitinde yüksek sınıf/metot sayılarının kaynağı olarak işaret edilir."
  },
  {
    "en": "Domain Driven Design",
    "tr": "Alan Odaklı Tasarım (Domain Driven Design)",
    "note": "Eric Evans'ın, kodun iş alanının dilini yansıtan bir alan modeli (domain model) etrafında kurulması gerektiğini savunan yaklaşımı; kaynakçadaki [DDD] maddesinde geçer."
  },
  {
    "en": "Domain Expert",
    "tr": "Alan Uzmanı (Domain Expert)",
    "note": "İş alanına (problem alanına) hakim uzman kişi"
  },
  {
    "en": "Domain Logic",
    "tr": "alan mantığı (domain logic)",
    "note": "Uygulamanın iş alanına (domain) ait saf mantık; kalıcılık, güvenlik gibi mimari kaygılardan ayrıştırılmış POJO'larda tutulur. Sözlükteki 'İş Mantığı (Business Logic)' terimiyle yakın anlamlıdır."
  },
  {
    "en": "Domain-Specific Language",
    "tr": "Alana Özgü Dil (Domain-Specific Language)",
    "note": ""
  },
  {
    "en": "Domain-Specific Testing Language",
    "tr": "Alana Özgü Test Dili (Domain-Specific Testing Language)",
    "note": "Sistem API'lerinin üzerine kurulan, testleri yazmayı ve okumayı kolaylaştıran fonksiyon ve yardımcı araçlardan oluşan test dili; baştan tasarlanmaz, test kodunun yeniden düzenlenmesiyle gelişir"
  },
  {
    "en": "Don't Repeat Yourself (DRY)",
    "tr": "Kendini Tekrar Etme (Don't Repeat Yourself / DRY)",
    "note": "Kod ve bilgi tekrarını en aza indirmeyi amaçlayan ilke; sayfa 48 başlığı"
  },
  {
    "en": "Don’t Inherit Constants",
    "tr": "Sabitlerden Kalıtım Almayın (Don’t Inherit Constants)",
    "note": "J2 sezgisel kuralı: sabitleri erişmek için bir arayüze koyup o arayüzden kalıtım almak; dilin kapsam (scoping) kurallarını atlatan ve sabitleri hiyerarşinin tepesinde gizleyen kötü bir uygulama."
  },
  {
    "en": "Double Dispatch",
    "tr": "Çift Gönderim (Double Dispatch)",
    "note": "Çağrılacak metodu iki nesnenin türüne göre seçme tekniği"
  },
  {
    "en": "Driver Program",
    "tr": "Sürücü Program (Driver Program)",
    "note": "Test edilen kodu çağırıp onunla elle etkileşim kurmayı sağlayan basit, çoğu zaman kullanılıp atılan yardımcı program"
  },
  {
    "en": "Dual Standard",
    "tr": "Çifte Standart (Dual Standard)",
    "note": "Test kodunun üretim kodundan farklı mühendislik standartlarına tabi olması: basit, öz ve anlatımlı olmalı, ancak üretim kodu kadar verimli olması gerekmez"
  },
  {
    "en": "Due Diligence",
    "tr": "Gerekli Özen (Due Diligence)",
    "note": "Bir konuda gereken dikkati gösterme, yükümlülüğünü eksiksiz yerine getirme; bu sayfada 'you’ve done due diligence' ifadesinde geçer: testler geçerse jiggle'lamayla gerekli özeni göstermiş sayılır."
  },
  {
    "en": "Dummy Scope",
    "tr": "Boş Kapsam (Dummy Scope)",
    "note": "While/for gövdesinin kasıtlı olarak boş bırakıldığı, dikkatli biçimlendirme (parantez + girinti) gerektiren yapı"
  },
  {
    "en": "Duplication",
    "tr": "Tekrar (Duplication)",
    "note": "DRY ilkesi: Don't Repeat Yourself"
  },
  {
    "en": "Duplication of Implementation",
    "tr": "Gerçekleştirim Tekrarı (Duplication of Implementation)",
    "note": "Aynı olgunun farklı mekanizmalarla (ör. bir boolean ve bir sayaç) iki kez saklanması; sayfa 173'te isEmpty/size örneğiyle işlenir. Sözlükteki 'Duplication | Tekrar (Duplication)' teriminden ayrı, daha dar bir kavramdır."
  },
  {
    "en": "Dyadic",
    "tr": "İkili (Dyadic)",
    "note": "İki argümanlı fonksiyon"
  },
  {
    "en": "Dynamic Proxy",
    "tr": "Dinamik Vekil (Dynamic Proxy)",
    "note": "JDK'nın sağladığı, çalışma zamanında bir arayüz için vekil sınıfını otomatik üreten mekanizma; yalnızca arayüzlerle çalışır."
  },
  {
    "en": "Efficiency",
    "tr": "Verimlilik (Efficiency)",
    "note": "Kodun performans ve kaynak kullanımı açısından etkinliği"
  },
  {
    "en": "EJB (Enterprise JavaBeans)",
    "tr": "EJB (Kurumsal JavaBeans)",
    "note": "Dağıtık kurumsal bileşenler için eski Java EE bileşen standardı; kitapta EJB1 ve EJB2 sürümleri geçer. Terim kısaltma olarak olduğu gibi kullanılır."
  },
  {
    "en": "Elegant",
    "tr": "Zarif (Elegant)",
    "note": "Hoş derecede zarif, şık ve basit kod"
  },
  {
    "en": "Embeddable / @Embedded",
    "tr": "Gömülebilir / @Embedded",
    "note": "JPA'da bir sınıfın, sahibi olan varlığın (entity) veritabanı satırına 'gömülü' olarak saklanmasını sağlayan eşleme; @Embeddable sınıfı, @Embedded alanı işaretler."
  },
  {
    "en": "Embedded System",
    "tr": "Gömülü Sistem (Embedded System)",
    "note": "Daha büyük bir cihazın parçası olarak, çoğu zaman gerçek zamanlı kısıtlar altında belirli bir işi yapan bilgisayar sistemi"
  },
  {
    "en": "Emergent Design",
    "tr": "Ortaya Çıkan Tasarım (Emergent Design)",
    "note": "Tasarımın baştan büyük bir planla değil, çalışma sırasında birkaç basit kurala uyularak adım adım ortaya çıkması kavramı; Chapter 12'nin açılış teması. Sayfada 'Getting Clean via Emergent Design' başlığı ve 'emergence of good designs' ifadesinde geçer."
  },
  {
    "en": "Encapsulate Boundary Conditions",
    "tr": "Sınır Koşullarını Kapsülleyin (Encapsulate Boundary Conditions)",
    "note": "G33 sezgisel kuralının başlığı: sınır koşullarının (boundary conditions) işlenmesini tek bir yerde toplayın ve +1/-1 gibi sınır aritmetiğinin koda yayılmasına izin vermeyin; 'nextLevel' örneğinde olduğu gibi adlandırılmış bir değişkenle kapsüllenmelidir. Sözlükteki 'Boundary Condition | Sınır Koşulu (Boundary Condition)' terimiyle ilişkilidir."
  },
  {
    "en": "Encapsulate Conditionals",
    "tr": "Koşulları Kapsülleyin (Encapsulate Conditionals)",
    "note": "G28 sezgisel kuralı: karmaşık boolean mantığını, koşulun amacını açıklayan bir fonksiyonun arkasına gizleme tekniği."
  },
  {
    "en": "Encapsulation",
    "tr": "Kapsülleme (Encapsulation)",
    "note": ""
  },
  {
    "en": "Encoding",
    "tr": "Kodlama (encoding)",
    "note": "N6 bağlamında: bir isme tür ya da kapsam bilgisini önek/sonek olarak kodlama uygulaması (ör. m_, f); günümüz ortamlarında gereksizdir."
  },
  {
    "en": "Entity",
    "tr": "Varlık (Entity)",
    "note": "Sınıf, metot, fonksiyon gibi yapı"
  },
  {
    "en": "Entity Bean",
    "tr": "Entity Bean (Varlık Bean’i)",
    "note": "EJB2’de ilişkisel verinin (bir tablo satırının) bellek içi temsilini sağlayan kalıcı bileşen; kalıcılık, işlem ve iş API’sini tek sınıfta birleştirmesi organik büyümeyi engeller."
  },
  {
    "en": "Enum",
    "tr": "enum (sıralı sabit kümesi)",
    "note": "Java'da sabit bir değer kümesini tür güvenli (type-safe) biçimde temsil eden dil yapısı; Month ve WeekInMonth buna örnektir. Sayfa 272 ve 275'te olduğu gibi 'enum' olarak kullanılır."
  },
  {
    "en": "Enumeration",
    "tr": "Sayım (Enumeration)",
    "note": "Adlandırılmış bir değer/sabit kümesi; enum’lar adlandırılmış bir sayıma ait oldukları için anlamlarını kaybetmezler. Sözlükteki 'Enum | enum (sıralı sabit kümesi)' ve 'Enumerator | sayıcı (enumerator)' terimleriyle ilişkilidir."
  },
  {
    "en": "Enumerator",
    "tr": "sayıcı (enumerator)",
    "note": "Bir enum'ın (sıralı sabit kümesinin) tek tek değerleri; sayfa 272'de 'sayıcısı (enumerator)' olarak geçmiştir, bu sayfada da aynen kullanılır."
  },
  {
    "en": "Environment",
    "tr": "Ortam (Environment)",
    "note": "Chapter 17'de derleme (build) ve test çalıştırma deneyimini düzenleyen koşullar bütünü; E1/E2 sezgisel kurallarının kesit başlığı."
  },
  {
    "en": "Error Code",
    "tr": "Hata Kodu (Error Code)",
    "note": "Bir fonksiyonun başarı/hata durumunu bildirmek için döndürdüğü özel değer; istisnaların (exception) alternatifi"
  },
  {
    "en": "Error Flag",
    "tr": "Hata Bayrağı (Error Flag)",
    "note": "Hata oluştuğunu belirtmek için ayarlanan ve çağıranın kontrol etmesi gereken değişken; istisnaların eski alternatifi"
  },
  {
    "en": "Error Handling",
    "tr": "Hata Yönetimi (Error Handling)",
    "note": "Hataları yakalama ve işleme stratejisi"
  },
  {
    "en": "Error Processing",
    "tr": "Hata İşleme (Error Processing)",
    "note": "Sayfa 238’de 'all the error processing works correctly' ifadesinde geçer; sözlükteki 'Error Handling | Hata Yönetimi' teriminin 'işleme' odaklı varyantıdır. Bu sayfada 'hata işleme' olarak çevrilmiştir."
  },
  {
    "en": "Event (argument form)",
    "tr": "Olay (Event)",
    "note": "Tek argümanlı fonksiyonların üçüncü ortak formu: bir girdi argümanı alır ama çıktı döndürmez, çağrının bir olay olarak yorumlanmasını ve sistemin durumunu değiştirmesini amaçlar."
  },
  {
    "en": "Event Polling Loop",
    "tr": "Olay Yoklama Döngüsü (Event Polling Loop)",
    "note": "Bir olayın meydana gelip gelmediğini sürekli kontrol ederek bekleyen döngü; bu sayfada tek iş parçacıklı (single-threaded) kodu hızlandırmanın sınırlı yollarından biri olarak geçer."
  },
  {
    "en": "Exception",
    "tr": "İstisna (Exception)",
    "note": "Hata yönetimi bağlamında"
  },
  {
    "en": "Exception Class",
    "tr": "İstisna Sınıfı (Exception Class)",
    "note": "Hatayı temsil eden sınıf; en önemli ölçüt, çağıranın onu nasıl yakalayacağıdır"
  },
  {
    "en": "Exception Classification",
    "tr": "İstisna Sınıflandırması (Exception Classification)",
    "note": "İstisnaların türlere ayrılma biçimi; Clean Code'a göre kaynağa değil, nasıl yakalandıklarına göre yapılmalı"
  },
  {
    "en": "Exception Management",
    "tr": "İstisna Yönetimi (Exception Management)",
    "note": "İstisnaların (exception) akışını düzenleyen try/catch kod bloklarının bütünü; bu sayfada 'the ugly exception management code' ifadesinde geçer. Sözlükteki 'Error Handling | Hata Yönetimi (Error Handling)' terimiyle yakından ilişkili, istisna odaklı kullanımıdır."
  },
  {
    "en": "Executable Statement",
    "tr": "Çalıştırılabilir İfade (Executable Statement)",
    "note": "Kodda bir testin yürütebildiği, komut düzeyindeki çalıştırılabilir ifade; test kapsamı (test coverage) raporlarında kapsanan/yürütülen ifade sayısı olarak geçer. Sayfa 268'de SerialDate'in 185 çalıştırılabilir ifadesinden söz edilir."
  },
  {
    "en": "Execution Path",
    "tr": "Çalışma Yolu (Execution Path)",
    "note": "İş parçacıklarının izleyebileceği talimat sıralaması; bu sayfada 'possible execution paths' ve 'Possible Paths of Execution' başlığında geçer. Sözlükteki 'Normal Flow' (Normal Akış) teriminden farklıdır."
  },
  {
    "en": "execution time",
    "tr": "Yürütme Süresi (Execution Time)",
    "note": "Bir görevin ya da işlemin tamamlanması için geçen toplam süre; sayfa 334'te tek iş parçacığı için 'the total execution time is 1.5 seconds * N' ifadesinde geçer."
  },
  {
    "en": "Executor Framework",
    "tr": "İcracı Çerçevesi (Executor Framework)",
    "note": "Java 5'in java.util.concurrent paketinde; iş parçacığı yönetimini soyutlayarak görevleri (tasks) çalıştıran çerçeve. Sayfadaki 'Use the executor framework for executing unrelated tasks' maddesinde geçer."
  },
  {
    "en": "Explaining Temporary Variables",
    "tr": "Açıklayıcı Geçici Değişkenler (Explaining Temporary Variables)",
    "note": "Karmaşık bir ifadeyi, her biri hesaplamanın bir adımını kaydeden küçük ve iyi adlandırılmış yerel değişkenlere bölme tekniği; sayfa 279'da addMonths için [G19] işaretiyle geçer."
  },
  {
    "en": "Explanation of Intent",
    "tr": "Niyetin Açıklanması (Explanation of Intent)",
    "note": "Kodun neden o şekilde yazıldığını açıklayan yorum"
  },
  {
    "en": "Explanatory Variables",
    "tr": "Açıklayıcı Değişkenler (Explanatory Variables)",
    "note": "G19 sezgisel kuralının başlığı: karmaşık hesaplamaları anlamlı (meaningful) isimli ara değerlere (intermediate values) bölerek okunabilirliği artırma tekniği."
  },
  {
    "en": "Explicit",
    "tr": "Açık (Explicit)",
    "note": "Bağlamın kodda doğrudan yer alması"
  },
  {
    "en": "Expressive",
    "tr": "İfade Gücü (Expressive)",
    "note": "Chapter 12'nin koşu başlığı (running header) terimi; sözlükteki 'Expressiveness | İfade Gücü (Expressiveness)' teriminin sıfatı. Sayfa 175'te kesit başlığı olarak geçer."
  },
  {
    "en": "Expressiveness",
    "tr": "İfade Gücü (Expressiveness)",
    "note": "Kodun tasarım fikirlerini açıkça iletmesi"
  },
  {
    "en": "Extensibility",
    "tr": "Genişletilebilirlik (Extensibility)",
    "note": "Kodun yeni yeteneklerle genişletilebilme kolaylığı"
  },
  {
    "en": "Extract Method",
    "tr": "Metot Çıkarma (Extract Method)",
    "note": "Büyük bir metodu daha küçük parçalara bölme refactoring tekniği"
  },
  {
    "en": "extraneous",
    "tr": "gereksiz/fazlalık (extraneous)",
    "note": "İşlevi bulunmayan, ortamda fazladan duran yapı; sayfa 262'de 'eliminate the extraneous if statements' ifadesinde geçer."
  },
  {
    "en": "Extreme Programming (XP)",
    "tr": "Aşırı Programlama (Extreme Programming)",
    "note": "Test güdümlü geliştirme ve çift programlama gibi pratikleri çekirdek uygulamalardan biri sayan çevik (Agile) yazılım geliştirme yaklaşımı; G5 kuralında Kent Beck'in 'Bir kez, ve yalnızca bir kez' ilkesiyle anılır."
  },
  {
    "en": "F.I.R.S.T.",
    "tr": "F.I.R.S.T.",
    "note": "Temiz testlerin beş özelliği: Hızlı (Fast), Bağımsız (Independent), Tekrarlanabilir (Repeatable), Kendini Doğrulayan (Self-Validating), Zamanında (Timely)"
  },
  {
    "en": "Factory Method",
    "tr": "Fabrika Metodu (Factory Method)",
    "note": "Nesne oluşturma mantığını kapsülleyen metot"
  },
  {
    "en": "Failover",
    "tr": "Hata Devri (Failover)",
    "note": "Bir bileşenin ya da sunucunun devre dışı kalması durumunda iş yükünün otomatik olarak yedek/başka bir bileşene aktarılması; çapraz kesim kaygısı (cross-cutting concern) örneği."
  },
  {
    "en": "Fake",
    "tr": "Sahte Nesne (Fake)",
    "note": "Testte gerçek bağımlılığın yerine geçen, basit ama çalışan gerçekleştirim; ör. FakeTransmitter"
  },
  {
    "en": "fallback",
    "tr": "geri dönüş (fallback)",
    "note": "Asıl yol sonuç üretemediğinde denenmek üzere sıralı denemelerin içindeki ikincil yol; stringToMonthCode'ta tamsayı ayrıştırması başarısız olunca ay adlarında aramaya geçilmesi buna örnektir."
  },
  {
    "en": "False Clue",
    "tr": "Yanlış İpucu (False Clue)",
    "note": "Kodun anlamını bulanıklaştıran yanıltıcı isimler"
  },
  {
    "en": "Fault",
    "tr": "Hata (fault)",
    "note": "Kusur/arıza; sayfa 330'da 'causes a fault' ifadesinde geçer — iş parçacığının yineleyicinin (iterator) sonunu aşıp istisna (exception) fırlatması durumu. 'Bug | Hata (Bug)' teriminden ayrı, daha dar kullanımı."
  },
  {
    "en": "Feature",
    "tr": "Özellik (Feature)",
    "note": ""
  },
  {
    "en": "Feature Envy",
    "tr": "Özellik Kıskançlığı (Feature Envy)",
    "note": "Bir fonksiyonun başka bir sınıfın verisiyle kendi sınıfınınkinden daha çok ilgilenmesi"
  },
  {
    "en": "Field",
    "tr": "Alan (Field)",
    "note": "Bayt kodu (byte-code) bağlamında bir nesnenin sakladığı değer; PUTFIELD/GETFIELD talimatlarının yazıp okuduğu, paylaşıldığında eşzamanlılık sorunlarının kaynağı olan yapı. Sayfa 325'teki bayt kodu tablolarında 'the field value' ifadesinde geçer."
  },
  {
    "en": "File Length",
    "tr": "Dosya Uzunluğu (File Length)",
    "note": "Kaynak dosyanın satır sayısı; hedef ~200 satır, üst sınır 500 satır"
  },
  {
    "en": "File Size",
    "tr": "Dosya Boyutu (File Size)",
    "note": "Kaynak dosyasının satır sayısı; Java'da sınıf boyutuyla yakından ilişkilidir"
  },
  {
    "en": "final",
    "tr": "son sürüm (final)",
    "note": "Listing 15-5'in caption'ında '(final)' olarak geçer; '(interim)' (geçici sürüm) teriminin karşıtıdır ve yeniden düzenleme (refactoring) sürecinin son ürününü belirtir."
  },
  {
    "en": "final keyword",
    "tr": "final anahtar sözcüğü (final keyword)",
    "note": "Java'da değişkenin başvurusunun yeniden atanamayacağını bildiren anahtar sözcük; anonim iç sınıfların (anonymous inner class) yakaladığı yerel değişkenlerde zorunludur. Sayfa 340'ta 'we must use the final keyword' ifadesinde geçer. Sözlükteki 'final | son sürüm (final)' girdisinden (Listing caption'larındaki kullanım) farklıdır."
  },
  {
    "en": "Finite State Machine",
    "tr": "Sonlu Durum Makinesi (Finite State Machine)",
    "note": "Belirli bir anda yalnızca bir durumda (state) bulunabilen ve durumlara göre olaylara (events) tepki veren hesaplama modeli; türev (derivative) sayısının kesin olarak sabitlendiği ve üst sınıfın (base class) türevler arasında seçim yapan kod içerdiği tipik senaryo. Sayfa 291'de 'finite state machine implementations' ifadesinde geçer."
  },
  {
    "en": "First Draft",
    "tr": "İlk Taslak (First Draft)",
    "note": "Listing 14-8'in caption'ında 'Args.java (first draft)' ifadesinde geçer: ilk çalışan sürümün etiketi, sonraki taslakların başlangıç noktası."
  },
  {
    "en": "First-Class Support",
    "tr": "birinci sınıf destek (first-class support)",
    "note": "Bir dil ya da platformun bir kavramı, ayrı bir dil yapısı olarak doğrudan ve eksiksiz biçimde desteklemesi; kitapta görünümlerin (aspects) modülerlik yapıları olarak AspectJ'de birinci sınıf destek görmesi bağlamında geçer."
  },
  {
    "en": "FitNesse",
    "tr": "FitNesse",
    "note": "Açık kaynaklı test aracı (www.fitnesse.org)"
  },
  {
    "en": "Flag",
    "tr": "Bayrak (Flag)",
    "note": "Boolean kontrol parametresi"
  },
  {
    "en": "Flag Argument",
    "tr": "Bayrak Argümanı (Flag Argument)",
    "note": "Boolean parametre - fonksiyonun birden fazla şey yaptığını gösterir"
  },
  {
    "en": "Flexibility",
    "tr": "Esneklik (Flexibility)",
    "note": "Kodun değişikliklere kolayca uyum sağlayabilmesi; birim testlerinin mümkün kıldığı -liklerden biri"
  },
  {
    "en": "Floating Point",
    "tr": "Kayan Nokta (Floating Point)",
    "note": "Ondalıklı sayıların ikili gösterim biçimi; eşitlik karşılaştırmaları hassasiyet payı gerektirir (göreceli eşitlik)"
  },
  {
    "en": "Focused",
    "tr": "Odaklanmış (Focused)",
    "note": "Temiz kodun tek amaca yönelik olması"
  },
  {
    "en": "Format String",
    "tr": "Biçim Dizesi (Format String)",
    "note": "Beklenen komut satırı argümanlarını kompakt biçimde tanımlayan dize (ör. \"l,p#,d*\"); bu sayfada 'format, or schema, string' ifadesiyle geçer ve 'Schema' ile eş anlamlı kullanılır."
  },
  {
    "en": "Formatting",
    "tr": "Biçimlendirme (Formatting)",
    "note": "Kodun görsel yerleşimi: girinti, boşluk, satır uzunluğu, dikey ayrım"
  },
  {
    "en": "forward",
    "tr": "yönlendirmek (forward)",
    "note": "Bir çağrıyı doğrudan başka nesneye/metoda aktarmak; bu sayfada `setBooleanArg`'ın görevinin `BooleanArgumentMarshaler`'a yönlendirmek olduğu söylenir"
  },
  {
    "en": "Frame",
    "tr": "Yığın Çerçevesi (Frame)",
    "note": "Her metot çağrısı için oluşturulan çağrı yığını (call stack) kaydı; dönüş adresini (return address), metoda geçirilen parametreleri ve yerel değişkenleri barındırır. Sayfa 324'teki tanım listesinde geçer."
  },
  {
    "en": "Front Panel Switch",
    "tr": "Ön Panel Anahtarı (Front Panel Switch)",
    "note": "Eski ana bilgisayarların ön panelinde bulunan, elle çevrilebilen donanım anahtarları; bu sayfada hata ayıklama (debugging) amacıyla okunurlar."
  },
  {
    "en": "Function",
    "tr": "Fonksiyon (Function)",
    "note": ""
  },
  {
    "en": "Function Call Dependency",
    "tr": "Fonksiyon Çağrı Bağımlılığı (Function Call Dependency)",
    "note": "Bir fonksiyonun başka bir fonksiyonu çağırmasından doğan bağımlılık; aşağı yönü göstermelidir"
  },
  {
    "en": "Function Header",
    "tr": "Fonksiyon Başlığı (Function Header)",
    "note": "Fonksiyonun başına eklenen açıklama bloğu"
  },
  {
    "en": "Function Sections",
    "tr": "Fonksiyon Bölümleri (Function Sections)",
    "note": "Fonksiyon içinde ayrılmış bölümler (declarations, initializations vb.)"
  },
  {
    "en": "Functions Should Descend Only One Level of Abstraction",
    "tr": "Fonksiyonlar Yalnızca Tek Bir Soyutlama Seviyesi İnmelidir (Functions Should Descend Only One Level of Abstraction)",
    "note": "G34 sezgisel kuralının başlığı: bir fonksiyonun içindeki tüm ifadeler aynı soyutlama seviyesinde (level of abstraction) yazılmalı; bu seviye, fonksiyonun adının tanımladığı işlemin bir seviye altında olmalıdır. Sözlükteki 'Level of Abstraction' (Soyutlama Seviyesi) ve 'Level of Detail' (Ayrıntı Seviyesi) terimleriyle ilişkilidir."
  },
  {
    "en": "Future",
    "tr": "Future (gelecekte tamamlanacak işlemin sonucu)",
    "note": "Eşzamanlı çalışan bir görevin henüz hazır olmayan sonucunu temsil eden, `java.util.concurrent` paketindeki yapı; get() sonuç hazır olana dek bekler. Bu sayfada 'It also supports futures' ve 'A future is handy when...' ifadelerinde geçer. Teknik terim olduğu için İngilizce kalır."
  },
  {
    "en": "Garbage Collection",
    "tr": "Çöp Toplama (Garbage Collection)",
    "note": "Artık ulaşılamayan nesneleri bellekten geri alan otomatik bellek yönetimi işlemi; sayfadaki 'garbage collection overhead' ifadesinde 'çöp toplama ek yükü' olarak geçer."
  },
  {
    "en": "geek",
    "tr": "inek (geek)",
    "note": "Teknolojiye derin bağlı, meraklı kişi için kullanılan argo/sıcak ifade; kitapta sıkışık uçak ortamında dizüstü bilgisayarlarını çıkarıp kod yazmaya başlayan Kent Beck ve Eric Gamma için kullanılır."
  },
  {
    "en": "Generic",
    "tr": "jenerik (generic)",
    "note": "Özel bir durum yerine genel anlamında sıfat; 'much more generic' = 'çok daha jenerik'. Sözlükteki 'Generics | Jenerik Türler (Generics)' (Java 5 dili özelliği) teriminden ayrı bir kullanımdır."
  },
  {
    "en": "Generics",
    "tr": "Jenerik Türler (Generics)",
    "note": "Java 5 ile gelen, sınıf ve koleksiyonların tür parametresi almasını sağlayan özellik (ör. Map<Sensor>); tür dönüştürme ihtiyacını azaltır"
  },
  {
    "en": "Given-When-Then",
    "tr": "Given-When-Then",
    "note": "Testleri hazırlık (given), eylem (when) ve doğrulama (then) bölümlerine ayıran yaygın adlandırma kuralı; çevrilmez, olduğu gibi kullanılır."
  },
  {
    "en": "Glitch",
    "tr": "Arıza (Glitch)",
    "note": "Donanım kaynaklı kısa süreli geçici bozulma; bu sayfanın dipnotlarında 'Cosmic-rays, glitches, and so on.' ifadesinde geçer."
  },
  {
    "en": "global ordering",
    "tr": "küresel sıralama (global ordering)",
    "note": "Kilitlenmeyi önlemek için tüm iş parçacıklarının kaynakları aynı sırayla edinmesi konusunda anlaştığı, kaynaklar üzerinde tanımlanan toplam sıra; döngüsel beklemeyi (circular wait) koşulunu kırar. Sayfa 338'de geçer."
  },
  {
    "en": "God class",
    "tr": "Tanrı sınıfı (God class)",
    "note": "Aşırı sayıda public metot ve sorumluluk yükleyerek neredeyse tüm sistemi tek başına yöneten aşırı büyük sınıf; kötü sınıf tasarımının uç örneği."
  },
  {
    "en": "Graceful Shutdown",
    "tr": "Düzgün Kapanış (Graceful Shutdown)",
    "note": "Kaynakların sırayla ve güvenle serbest bırakılarak, ölü kilit veya asılı iş parçacığı kalmadan sistemin sonlandırılması; bu sayfada ana tema."
  },
  {
    "en": "Gratuitous Context",
    "tr": "Gereksiz Bağlam (Gratuitous Context)",
    "note": "Bir isme zaten içinde bulunduğu yapı tarafından sağlanan bağlamı tekrar eklemek"
  },
  {
    "en": "Green-field Project",
    "tr": "Yeşil Alan Projesi (Green-field Project)",
    "note": "Sıfırdan başlanan proje"
  },
  {
    "en": "Half-Duplex",
    "tr": "Yarı Çift Yönlü (Half-Duplex)",
    "note": "Bir iletişim hattının aynı anda yalnızca tek yönde veri taşıyabilmesi; '600bps half-duplex modems' ifadesinde geçer."
  },
  {
    "en": "Happy Path",
    "tr": "Mutlu Yol (Happy Path)",
    "note": "Hiçbir hatanın oluşmadığı, kodun normal akışta izlediği yol"
  },
  {
    "en": "Hard Wiring",
    "tr": "Sabit Kablolama (Hard Wiring)",
    "note": "Modemlerin çevirme (dialling) yerine birbirine fiziksel olarak doğrudan bağlanması; sayfa 311'de 'hard wiring them together' ifadesinde geçer."
  },
  {
    "en": "Hard-coded Dependency",
    "tr": "Sabit Kodlanmış Bağımlılık (Hard-coded Dependency)",
    "note": "Bir sınıfın içinde doğrudan new ile oluşturulan ya da sabit yapılandırmayla gömülen bağımlılık; değiştirilmesi ve test edilmesi zordur, küçük Tek Sorumluluk İlkesi ihlaline yol açar"
  },
  {
    "en": "Headline",
    "tr": "Manşet (Headline)",
    "note": "Gazete metaforunda dosyanın adı ve en üstteki üst seviye kod; okuyucuya dosyanın neyle ilgili olduğunu söyler"
  },
  {
    "en": "Heuristic",
    "tr": "Sezgisel Kural (Heuristic)",
    "note": ""
  },
  {
    "en": "Hidden Temporal Coupling",
    "tr": "Gizli Zamansal Bağımlılık (Hidden Temporal Coupling)",
    "note": "Fonksiyonların hangi sırayla çağrılması gerektiğinin koddan anlaşılamadığı, gizlenmiş sıra bağımlılığı; G31 sezgisel kuralının konusu. Sözlükteki 'Temporal Coupling | Zamansal Bağımlılık (Temporal Coupling)' teriminin özel biçimidir."
  },
  {
    "en": "Hiding Structure",
    "tr": "Yapıyı Gizleme (Hiding Structure)",
    "note": "Nesnenin iç yapısını sormak yerine ondan iş yapmasını istemek"
  },
  {
    "en": "Hierarchy",
    "tr": "Hiyerarşi (Hierarchy)",
    "note": "Kaynak dosyanın taslak benzeri iç içe yapısı; dosya, sınıf, metot ve blok seviyelerinden oluşur"
  },
  {
    "en": "High Availability",
    "tr": "Yüksek Kullanılabilirlik (High Availability)",
    "note": "Bir sistemin kesintisiz biçimde erişilebilir ve kullanılabilir kalma yeteneği; büyük Web sitelerinin performansla birlikte hedeflediği özellik."
  },
  {
    "en": "Hollerith Limit",
    "tr": "Hollerith Sınırı (Hollerith Limit)",
    "note": "Delikli kartlardan kalma 80 karakterlik satır sınırı; bugün biraz keyfi kabul edilir"
  },
  {
    "en": "Horizontal Alignment",
    "tr": "Yatay Hizalama (Horizontal Alignment)",
    "note": "Tanımlamalardaki isimleri ya da atamalardaki değerleri boşluklarla aynı sütuna dizme; yanlış şeyleri vurguladığı için önerilmez"
  },
  {
    "en": "Horizontal Formatting",
    "tr": "Yatay Biçimlendirme (Horizontal Formatting)",
    "note": "Satır genişliği ve satır içi boşluklarla ilgili biçimlendirme; kısa satırlar tercih edilir (en fazla ~120 karakter)"
  },
  {
    "en": "Horizontal Openness and Density",
    "tr": "Yatay Açıklık ve Yoğunluk (Horizontal Openness and Density)",
    "note": "İlişkili öğeleri bitişik yazma, zayıf ilişkili öğeleri yatay boşlukla ayırma"
  },
  {
    "en": "Horizontal White Space",
    "tr": "Yatay Boşluk (Horizontal White Space)",
    "note": "Satır içindeki boşluklar; güçlü ilişkiyi birleştirmek, zayıf ilişkiyi ayırmak için kullanılır"
  },
  {
    "en": "Hourly Employee",
    "tr": "Saatlik Ücretli Çalışan (Hourly Employee)",
    "note": "Saat başına ücretle çalışan personel; sayfadaki test veritabanında 'John Doe' bu rolü temsil eder."
  },
  {
    "en": "Hungarian notation",
    "tr": "Macar Notasyonu (Hungarian notation)",
    "note": "Değişken adının başına türünü kodlayan önekler ekleme geleneği (ör. iThsWkd, sName); Charles Simonyi'nin adını taşır ve niyeti kararttığı için günümüzde önerilmez."
  },
  {
    "en": "Hybrid",
    "tr": "Melez Yapı (Hybrid)",
    "note": "Hem anlamlı davranışı hem de açık durumu olan yarı nesne, yarı veri yapısı"
  },
  {
    "en": "if-else chain",
    "tr": "if-else Zinciri (if-else chain)",
    "note": "Ardışık if/else if dallarıyla (tipik olarak instanceof ile) tür denetimi yapan kontrol yapısı; bu sayfada tamamen ortadan kaldırılmak istenen yapı, sayfa başlığı 'if-else Zincirinin Tasfiyesi'"
  },
  {
    "en": "Immutable",
    "tr": "Değiştirilemez (Immutable)",
    "note": "Oluşturulduktan sonra durumu değiştirilemeyen nesne/koleksiyon; ör. Collections.emptyList()"
  },
  {
    "en": "Implementation",
    "tr": "Gerçekleştirim (Implementation)",
    "note": "Bir arayüzün ya da soyutlamanın somut kod karşılığı; Bölüm 6'da veri soyutlama ve gizleme bağlamında sürekli geçer"
  },
  {
    "en": "Implementation Detail",
    "tr": "Gerçekleştirim Ayrıntısı (Implementation Detail)",
    "note": "Bir sınıfın kullanıcılarının bilmesi ya da umursaması gerekmeyen iç tercih (ör. jenerik tür kullanılıp kullanılmadığı)"
  },
  {
    "en": "Implicity",
    "tr": "Örtüklük (Implicity)",
    "note": "Bağlamın kodda açıkça belirtilmeme derecesi"
  },
  {
    "en": "Inappropriate Information",
    "tr": "Uygunsuz Bilgi (Inappropriate Information)",
    "note": "C1 sezgisel kuralı: yorumlar, kaynak kod kontrol sistemi, sorun takip sistemi gibi başka sistemlere ait bilgileri barındırmamalıdır."
  },
  {
    "en": "Inappropriate Static",
    "tr": "Uygunsuz Statik (Inappropriate Static)",
    "note": "G18 sezgisel kuralının başlığı: çok biçimli (polymorphic) davranışa ihtiyaç duyabileceği için statik (static) yapılmaması gereken fonksiyonlarla ilgili."
  },
  {
    "en": "Include Directive",
    "tr": "Dahil Etme Yönergesi (Include Directive)",
    "note": "FitNesse'de sayfa dahil etme komutu"
  },
  {
    "en": "Inconsistency",
    "tr": "Tutarsızlık (Inconsistency)",
    "note": "Benzer işlerin aynı şekilde yapılmaması, aynı tür yapılara farklı adlar verilmesi; G11 sezgisel kuralının konusu. 'En Az Şaşırtma İlkesi'nin (Principle of Least Surprise) ihlalidir."
  },
  {
    "en": "incremental",
    "tr": "kademeli (incremental)",
    "note": "Tek tek, küçük adımlarla ilerleme; sayfa 208'de 'I added the two argument types incrementally' ifadesinde geçer."
  },
  {
    "en": "Incrementalism",
    "tr": "Kademecilik (Incrementalism)",
    "note": "Kodun yapısının büyük patama (big-bang) yeniden yazımlar yerine küçük, testle doğrulanan kademeli adımlarla iyileştirilmesi yaklaşımı; bu sayfada 'On Incrementalism' alt kesitinin konusu. Sözlükteki 'Successive Refinement' (Ardışık İyileştirme) kavramıyla yakından ilgilidir."
  },
  {
    "en": "Indent Level",
    "tr": "Girinti Seviyesi (Indent Level)",
    "note": "Kod bloklarının iç içe geçme derinliği"
  },
  {
    "en": "Indentation",
    "tr": "Girinti (Indentation)",
    "note": "Kod satırlarının hiyerarşideki konumlarına göre sağa kaydırılması; kapsam hiyerarşisini görünür kılar"
  },
  {
    "en": "Index",
    "tr": "Dizin (Index)",
    "note": "Bir dizgideki ya da koleksiyondaki konum değeri; bu sayfada `prefixIndex` ve `suffixIndex` üye değişkenlerinin gerçekte birer dizin olduğu vurgulanır. Çoğulu 'indices' olarak geçer."
  },
  {
    "en": "Infer",
    "tr": "çıkarımda bulunmak (infer)",
    "note": "İyi adlandırılmış kodda bir fonksiyonun amacını/gerçekleştirimini gövdesine bakmadan anlayabilmek; sayfa 310'da 'you can infer' ifadesinde geçer. Sözlükteki 'Inferred Meaning / Anlam Çıkarımı (Inferred Meaning)' terimiyle ilişkilidir."
  },
  {
    "en": "Inferred Meaning",
    "tr": "Anlam Çıkarımı (Inferred Meaning)",
    "note": "İsimlerin yapıya yüklediği betimlemeden çıkarılan anlam; sayfa 310'da 'based on that inferred meaning' ifadesinde geçer. Sözlükteki 'Infer / çıkarımda bulunmak (infer)' ve 'Descriptive Names' terimleriyle ilişkilidir."
  },
  {
    "en": "Informative Comment",
    "tr": "Bilgilendirici Yorum (Informative Comment)",
    "note": "Kodun yapısı veya regex gibi karmaşık kısımlar hakkında bilgi veren yorum"
  },
  {
    "en": "Informed Decision",
    "tr": "Bilinçli Karar (Informed Decision)",
    "note": "Mümkün olan en iyi ve en güncel bilgiyle verilen karar"
  },
  {
    "en": "Inheritance",
    "tr": "Kalıtım (Inheritance)",
    "note": ""
  },
  {
    "en": "Inline / Inlining",
    "tr": "satır içi (inline)",
    "note": "Refactoring tekniği: küçük bir metot çağrısının yerine gövdesinin doğrudan çağrı noktasına yapıştırılması ve metotların kaldırılması. Sayfa başlığında 'Inlining Parse Methods', parçada 'I inlined the three parse methods' ifadesinde geçer; metinde 'satır içine (inline) aldım' biçiminde kullanılmıştır."
  },
  {
    "en": "Inlining / Inline",
    "tr": "Satır İçi Alma (Inlining)",
    "note": "Tek satırlık, tek çağrılı metotların gövdesini çağıran metot içinde doğrudan kullanma yeniden düzenleme (refactoring) tekniği; 'inline (a method)' = (bir metodu) satır içine almak. Sözlükte 'Inline'/'Inlining' girdisi yoktu; bu sayfada 'So I inlined them' ifadesinde geçer."
  },
  {
    "en": "Instance",
    "tr": "Örnek (Instance)",
    "note": "Bir sınıftan oluşturulmuş somut nesne; ör. PathParser.parse çağrısının döndürdüğü PagePath örneği"
  },
  {
    "en": "Instance Method",
    "tr": "Örnek Metodu (Instance Method)",
    "note": "Bir sınıfın belirli bir örneği (instance) üzerinde, o örneğin alanlarına erişerek çalışan metot; sayfa 279'da addDays ve addMonths'un statik (static) yerine örnek metoduna dönüştürülmesi bağlamında geçer [G18]."
  },
  {
    "en": "Instance Variable",
    "tr": "Örnek Değişkeni (Instance Variable)",
    "note": "Bir sınıfın her nesnesinde ayrı ayrı tutulan üye değişken"
  },
  {
    "en": "instant in time",
    "tr": "zamandaki an (instant in time)",
    "note": "java.util.Date'in temsil ettiği, milisaniye hassasiyetinde ve tarihin hangi gün sayılacağı saat dilimine (time zone) bağlı olan noktasal zaman; SerialDate'in yalnızca günü temsil etme amacıyla karşılaştırma yaptığı kavram."
  },
  {
    "en": "Instantiation",
    "tr": "Örnekleme (Instantiation)",
    "note": "Bir sınıftan nesne oluşturma işlemi; 'instantiate' = örneklemek. Tembel örnekleme (lazy instantiation) ile birlikte geçer"
  },
  {
    "en": "Instrumentation",
    "tr": "Enstrümantasyon (Instrumentation)",
    "note": "Kodun içine, yalnızca test sırasında etkin olacak ölçüm/kesinti noktaları (ör. wait, sleep, yield, priority çağrıları) ekleme tekniği; nadir eşzamanlılık kusurlarını zorlayarak ortaya çıkarmak için kullanılır. Sayfa 188'de 'Instrument Your Code to Try and Force Failures' başlığı altında geçer."
  },
  {
    "en": "integer",
    "tr": "tamsayı (integer)",
    "note": "Tam sayı veri tipi; sayfa 208'de 'String and integer' ifadesinde argüman tipi olarak geçer. Sözlükteki 'Integer Handle' teriminden farklıdır."
  },
  {
    "en": "Integer Argument",
    "tr": "Tamsayı Argümanı (Integer Argument)",
    "note": "Komut satırında beklenen tipi int olan argüman; sayfadaki intArgs haritası, setIntArg ve getInt metotlarının konusu. Sözlükteki 'Argument' teriminin daraltılmış biçimidir."
  },
  {
    "en": "Integer Handle",
    "tr": "Tamsayı Tanıtıcısı (Integer Handle)",
    "note": ""
  },
  {
    "en": "Integer Overflow",
    "tr": "Tamsayı Taşması (Integer Overflow)",
    "note": "Bir tamsayı değişkeninin temsil edebileceği en büyük değeri aşması durumu; bu sayfada 'Ignore integer overflow' ifadesinde geçer ve örnekte kasıtlı olarak yok sayılır."
  },
  {
    "en": "Integration",
    "tr": "Entegrasyon (Integration)",
    "note": "Mevcut kodun bir parçasının yeni bir yapıya/metoda birleştirilmesi; bu sayfada 'integrate ... into the setArgument function' ifadesinde geçer: istisna yönetimi kodunun `setArgument` fonksiyonuna entegre edilmesi. Fiil biçimi 'entegre etmek' olarak çevrilir."
  },
  {
    "en": "Intent",
    "tr": "niyet (intent)",
    "note": "Yazarın küçük, testle doğrulanan adımlarla koda kazandırmak istediği yapısal niyet; bu sayfada 'you should be able to see my intent' ifadesinde geçer. 'Explanation of Intent' ve 'Intention-Revealing Names' terimlerinden ayrı, genel kavram."
  },
  {
    "en": "Intention-Revealing Names",
    "tr": "Niyet Belirten İsimler (Intention-Revealing Names)",
    "note": "Amacı açıkça ortaya koyan isimler"
  },
  {
    "en": "Interface",
    "tr": "Arayüz (Interface)",
    "note": ""
  },
  {
    "en": "Interference",
    "tr": "Karışma (Interference)",
    "note": "Birden çok iş parçacığının paylaşılan bir duruma eşzamanlı erişip onu bozması; yarış durumu (race condition) riski. Sayfa 325'te 'there is no interference between multiple threads' ifadesinde geçer."
  },
  {
    "en": "interim",
    "tr": "geçici sürüm (interim)",
    "note": "Listing 15-4 başlığında (interim): yeniden düzenleme (refactoring) sürecindeki ara, beklenen-geçiş sürümünü belirtir; 'Listing 15-4 ComparisonCompactor.java (interim)' ifadesinde geçer."
  },
  {
    "en": "Interleave",
    "tr": "İç İçe Geçirmek (Interleave)",
    "note": "İki ya da daha çok iş parçacığının talimatlarının, tek bir yürütme dizisi içinde birbirine karıştırılarak sıralanması; bu sayfada 'the two threads to interleave the execution of these eight instructions' ifadesinde geçer ve kart karıştırma (shuffle) metaforuyla açıklanır."
  },
  {
    "en": "Intermediate Value",
    "tr": "Ara Değer (Intermediate Value)",
    "note": "Bir hesaplamanın akışında üretilen ve anlamlı bir isimle değişkende tutulan ara sonuç; 'açıklayıcı değişkenler' (explanatory variables) tekniğinin temel öğesidir. Sayfadaki 'well-named intermediate values' ifadesinde geçer."
  },
  {
    "en": "Interpreter",
    "tr": "Yorumlayıcı (Interpreter)",
    "note": "Kaynak kodu satır satır çalıştıran program"
  },
  {
    "en": "Intrinsic Lock",
    "tr": "İçsel Kilit (Intrinsic Lock)",
    "note": "Her Java nesnesine gömülü olan kilit; `synchronized` blokları bu kilitle çalışır. Sayfa 182'de 'the intrinsic lock' ifadesinde geçer."
  },
  {
    "en": "Invasiveness",
    "tr": "istilacılık (invasiveness)",
    "note": "Bir çerçevenin (framework) gereksinimlerinin iş nesnesinin içine girerek onu kirletmesi; EJB2'nin sınıf ve arayüz dayatmasının yan etkisi."
  },
  {
    "en": "Inversion of Control (IoC)",
    "tr": "Kontrolün Tersine Çevrilmesi (Inversion of Control — IoC)",
    "note": "Bağımlılık yönetiminde kontrolün nesneden, bu amaca adanmış harici bir mekanizmaya (main, kap/container) devredilmesi ilkesi; Bağımlılık Enjeksiyonu (DI) bu ilkenin uygulanmasıdır"
  },
  {
    "en": "InvocationHandler",
    "tr": "Çağrı İşleyici (InvocationHandler)",
    "note": "Java yansıma (reflection) API'sindeki arayüz; vekile yapılan her metot çağrısı, bu nesnenin invoke metodu aracılığıyla ele alınır."
  },
  {
    "en": "Isomorph",
    "tr": "İzomorf (Isomorph)",
    "note": "Yalnızca özdeş etiketlerin (ör. 1'lerin ya da 2'lerin) yer değiştirmesiyle elde edilen, dizgenin anlamını değiştirmeyen eşdeğer sıralama; bu sayfada her dizge için dört izomorf olduğu söylenir. Kopya (duplicate) kavramıyla doğrudan ilişkilidir."
  },
  {
    "en": "Issue Tracking System",
    "tr": "Sorun Takip Sistemi (Issue Tracking System)",
    "note": "Hata, görev ve istek kayıtlarının izlendiği sistem; kural C1'e göre bu tür bilgiler yorumlarda değil burada tutulur."
  },
  {
    "en": "Iteration (test loop)",
    "tr": "Yineleme (Iteration)",
    "note": "Testin belirli sayıda kez tekrarlanması; bu sayfada 'run for a number of iterations' maddesinde geçer."
  },
  {
    "en": "Iterative Process",
    "tr": "Yinelemeli Süreç (Iterative Process)",
    "note": "Sonuca tek seferde değil, tekrarlanan adımlarla ulaşan süreç; sayfa 265'te 'Refactoring is an iterative process' ifadesinde geçer. Sözlükteki 'Iteration (test loop) | Yineleme' terimiyle aynı köktendir."
  },
  {
    "en": "iterator",
    "tr": "Yineleyici (Iterator)",
    "note": "Bir koleksiyonda sırayla elemanlara erişen nesne (ör. Iterator<String>); bu sayfada currentArgument olarak üç set fonksiyonuna da geçirilir"
  },
  {
    "en": "jar file",
    "tr": "jar dosyası (jar file)",
    "note": "Java arşiv dosyası: sıkıştırılmış biçimde tek dosyada paketlenmiş sınıf ve kaynaklar. Sayfa 291'de türevlerin ve üst sınıfların aynı ya da farklı jar dosyalarında birlikte/ayrı dağıtılabilmesi (deploy) bağlamında geçer."
  },
  {
    "en": "Java Memory Model",
    "tr": "Java Bellek Modeli (Java Memory Model)",
    "note": "Java'nın hangi okuma/yazma işlemlerini atomik (atomic) saydığını ve paylaşılan değişkenlerin iş parçacıkları arasında nasıl göründüğünü tanımlayan sözleşme; bu sayfada 'what the Java memory model considers to be atomic' ifadesinde geçer."
  },
  {
    "en": "Javadoc",
    "tr": "Javadoc",
    "note": "Java API dokümantasyon formatı"
  },
  {
    "en": "JDK",
    "tr": "JDK (Java Development Kit)",
    "note": "Java Geliştirme Kiti; kısaltma olduğu gibi kullanılır (sözlükteki 'JVM' girdisine paralel). Sayfadaki 'became part of the JDK' ifadesinde geçer."
  },
  {
    "en": "Jiggle",
    "tr": "Titretme (Jiggle)",
    "note": "Kod içine eklenen enstrümantasyon noktalarında rastgele uyku/yerini verme/hiçbir şey yapma seçimleri yaparak iş parçacıklarının çalışma sıralamasını zorla değiştirme tekniği; 'jiggle' fiili 'jiggle'lamak (titretmek)' olarak, isim 'titretme (jiggle)' olarak çevrilir. Sayfa 188-190 (Automated instrumentation) bağlamında geçer."
  },
  {
    "en": "JNDI",
    "tr": "JNDI",
    "note": "Java Naming and Directory Interface; bir dizin sunucusundan (directory server) ada göre hizmet/nesne aramayı sağlayan Java API'si; DI'ın 'kısmi' bir gerçekleştirimi olarak kabul edilir"
  },
  {
    "en": "JobQueue",
    "tr": "İş Kuyruğu (JobQueue)",
    "note": ""
  },
  {
    "en": "Journal Comment",
    "tr": "Günlük Yorumu (Journal Comment)",
    "note": "Modüldeki değişikliklerin kaydını tutan (artık gereksiz) yorum"
  },
  {
    "en": "JPA (Java Persistence API)",
    "tr": "JPA (Java Kalıcılık API'si — Java Persistence API)",
    "note": "EJB3 ile birlikte ortaya çıkan, Java'da kalıcılığı (persistence) ek açıklamalar (annotations) ve XML üzerinden bildirimsel olarak yöneten standart API."
  },
  {
    "en": "JUnit test runner",
    "tr": "JUnit test çalıştırıcısı (JUnit test runner)",
    "note": "JUnit framework'ünde test sınıfını bulup metotlarını çalıştıran mekanizma; kod yorumundaki 'Returns a test suite for the JUnit test runner' ifadesinde geçer."
  },
  {
    "en": "Just-in-Time",
    "tr": "Tam Zamanında (Just-in-Time)",
    "note": "Kararların en güncel bilgiyle, en geç gerektiği anda alınması yaklaşımı"
  },
  {
    "en": "Just-In-Time Compiler",
    "tr": "Tam Zamanında Derleyici (Just-In-Time Compiler)",
    "note": "JVM'nin bayt kodunu çalışma anında makine koduna çeviren bileşeni (JIT); bu sayfada üretilen bayt kodunun nasıl yürütüldüğünü anlamak için anahattır. Sözlükteki 'Just-in-Time' (karar alma yaklaşımı) teriminden farklı bir kavramdır."
  },
  {
    "en": "JVM",
    "tr": "JVM (Java Sanal Makinesi)",
    "note": "Java Virtual Machine; Java bayt kodunu çalıştıran sanal makine. Kitapta “ayrı JVM” (separate JVM), uzak arayüzün çalıştığı ayrı süreci ifade eder."
  },
  {
    "en": "Keyword Form",
    "tr": "Anahtar Kelime Formu (Keyword Form)",
    "note": "Argüman isimlerini fonksiyon adına kodlama tekniği"
  },
  {
    "en": "Language Bigot",
    "tr": "Dil Bağnazı (Language Bigot)",
    "note": ""
  },
  {
    "en": "Law of Demeter",
    "tr": "Demeter Yasası (Law of Demeter)",
    "note": "Bir modül üzerinde çalıştığı nesnelerin iç yapısını bilmemelidir"
  },
  {
    "en": "Lazy Evaluation",
    "tr": "Tembel Değerlendirme (Lazy Evaluation)",
    "note": "Bir değerin yalnızca gerçekten gerektiğinde hesaplanması; kitapta Lazy Initialization ile birlikte LAZY INITIALIZATION/EVALUATION kalıbı olarak geçer"
  },
  {
    "en": "Lazy Initialization",
    "tr": "Tembel Başlatma (Lazy Initialization)",
    "note": "Nesne oluşturmayı ilk kullanıma erteleyen kalıp; ek yükü azaltsa da kurulum mantığını çalışma zamanı koduna karıştırabilir"
  },
  {
    "en": "leap year",
    "tr": "artık yıl (leap year)",
    "note": "Şubat ayı 29 çeken, gün sayısı 366 olan yıl; SerialDate'in artık yıla özgü gün toplamı dizilerinde (LEAP_YEAR_AGGREGATE_DAYS_TO_END_OF_MONTH) geçer. Kod yorumlarında 'leap year' ve 'non leap year' (artık olmayan yıl) olarak kullanılır."
  },
  {
    "en": "Learning Test",
    "tr": "Öğrenme Testi (Learning Test)",
    "note": "Jim Newkirk'ün terimi: üçüncü taraf bir API'yi, uygulamada kullanılacağı şekilde çağırarak onu ne kadar anladığımızı sınayan kontrollü deney niteliğindeki test"
  },
  {
    "en": "LeBlanc's Law",
    "tr": "LeBlanc Yasası (LeBlanc's Law)",
    "note": "\"Sonra asla demektir\" (Later equals never)"
  },
  {
    "en": "Legal Comment",
    "tr": "Yasal Yorum (Legal Comment)",
    "note": "Telif hakkı, lisans gibi yasal zorunlulukları belirten yorum"
  },
  {
    "en": "Level of Abstraction",
    "tr": "Soyutlama Seviyesi (Level of Abstraction)",
    "note": "Kodun genelden özele doğru soyutluk derecesi"
  },
  {
    "en": "Level of Abstraction (wrong level)",
    "tr": "yanlış soyutlama seviyesi (wrong level of abstraction)",
    "note": "Bir adın/uygulamanın, olması gerekenden daha alt ya da üst bir soyutlama düzeyinde kalması; sayfa 271'de [N2] işaretiyle SerialDate adının gerçekleştirimi (implementation) ima ettiği, dolayısıyla yanlış soyutlama seviyesinde olduğu söylenir."
  },
  {
    "en": "Level of Detail",
    "tr": "Ayrıntı Seviyesi (Level of Detail)",
    "note": "Kodun ne kadar alt seviye ayrıntı (nokta, eğik çizgi, dosya uzantısı vb.) içerdiği; farklı ayrıntı seviyeleri aynı kodda karıştırılmamalıdır [G34][G6]"
  },
  {
    "en": "Lexicon",
    "tr": "Sözlük (Lexicon)",
    "note": "Bir projedeki tutarlı terimler bütünü"
  },
  {
    "en": "Lifecycle Method",
    "tr": "Yaşam Döngüsü Metodu (Lifecycle Method)",
    "note": "Konteynerin çağırdığı ejbCreate, ejbActivate, ejbLoad gibi, bir bileşenin yaşam döngüsünü yöneten metotlar."
  },
  {
    "en": "Listing A-3 Server.java",
    "tr": "Listing A-3 Server.java",
    "note": "Ek A'nın üçüncü kod listesinin level-3 başlığı; kod listesi etiketi (listing) olduğu için çevrilmez — sayfa 339'daki 'Listing A-2 ClassWithThreadingProblemTest.java' başlığıyla aynı kullanım. 'Listing N-N' caption'larıyla tutarlıdır."
  },
  {
    "en": "Literate Programming",
    "tr": "Okuryazar Programlama (Literate Programming)",
    "note": "Knuth'un kavramı: kod önce insanlar için yazılmalı"
  },
  {
    "en": "Livelock",
    "tr": "Canlı Kilit (Livelock)",
    "note": "İş parçacıkları sürekli yeniden deneyip ilerleyemediğinde oluşan durum; ölü kilit (deadlock) ve açlık (starvation) ile birlikte sayfa 183'ün tanım tablosunda geçer."
  },
  {
    "en": "Local Interface",
    "tr": "Yerel Arayüz (Local Interface)",
    "note": "EJB'de aynı JVM içinden erişim için kullanılan istemci arayüzü."
  },
  {
    "en": "Local Variable",
    "tr": "Yerel Değişken (Local Variable)",
    "note": "Yalnızca tanımlandığı fonksiyon ya da blok içinde geçerli değişken"
  },
  {
    "en": "locale",
    "tr": "yerel ayar (locale)",
    "note": "Dile ve bölgeye özgü biçimleme kuralları (tarih/saat biçimleri, ay ve gün adları); 'default locale' (varsayılan yerel ayar) ifadesiyle DateFormatSymbols'un ay adlarını hangi dile göre ürettiğini belirtir. Listing B-1 Javadoc'unda geçer."
  },
  {
    "en": "Lock",
    "tr": "Kilit (Lock)",
    "note": "Paylaşılan kaynağa aynı anda yalnız bir iş parçacığının erişmesini sağlayan mekanizma; sayfa 185'te 'lock the server', 'the lock’s extent' ve 'Locks are expensive' ifadelerinde geçer. Sözlükteki 'Deadlock' (Ölü Kilit) ve 'Intrinsic Lock' (İçsel Kilit) terimlerinden ayrı, genel kavramdır."
  },
  {
    "en": "Lock & Wait",
    "tr": "Kilitlen ve Bekle (Lock & Wait)",
    "note": "Kilitlenmenin (deadlock) dört koşulundan ikincisi: bir iş parçacığı bir kaynağı edindikten sonra, gereksinim duyduğu diğer kaynakların tümünü edininceye kadar onu bırakmaz. Sayfa 337'de tek tek açıklanır."
  },
  {
    "en": "Lock-up",
    "tr": "Kilitlenme (lock-up)",
    "note": "Bir sistemin/iş parçacığının ilerleyemeyecek biçimde takılıp kalması durumu; sayfadaki 'the frequency of the lock-ups' ifadesinde geçer. 'Deadlock | Ölü Kilit' teriminden ayrı, genel takılma durumudur."
  },
  {
    "en": "Logical Dependency",
    "tr": "Mantıksal Bağımlılık (Logical Dependency)",
    "note": "Kodun fiziksel yapısında görünmeyen, ama algoritmanın örtük olarak dayandığı varsayım/bağımlılık; sayfa 282'de getDayOfWeek algoritmasının 0. günün haftanın hangi günü olduğuna (başlangıç noktasına) bağımlı olması bağlamında geçer. 'Physical Dependency' (Fiziksel Bağımlılık) teriminin karşıtı olarak kullanılır."
  },
  {
    "en": "Loop Control Variable",
    "tr": "Döngü Kontrol Değişkeni (Loop Control Variable)",
    "note": "Döngünün yinelemesini yöneten değişken; genellikle döngü ifadesinin içinde tanımlanır"
  },
  {
    "en": "Lost Update",
    "tr": "Kayıp Güncelleme (Lost Update)",
    "note": "Paylaşılan bir değeri oku-değiştir-yaz (read-modify-write) yapan iki iş parçacığının aynı değeri geri yazmasıyla bir güncellemenin sessizce yitirilmesi; sayfa 339'daki nextId++ hatasına yol açar."
  },
  {
    "en": "Low-Level",
    "tr": "Alt Seviye (Low-Level)",
    "note": "Ayrıntılara ve mekanizmaya yakın kod; üst seviye (high-level) kodun çağırdığı katman"
  },
  {
    "en": "Magic Number",
    "tr": "Sihirli Sayı (Magic Number)",
    "note": "Kodda açıklamasız kullanılan sabit değer"
  },
  {
    "en": "Maintainability",
    "tr": "Bakılabilirlik (Maintainability)",
    "note": "Kodun zaman içinde bakımının yapılabilme kolaylığı"
  },
  {
    "en": "Maintainer",
    "tr": "Bakımcı (Maintainer)",
    "note": "Kodun bakımını üstlenen geliştirici; sözlükteki 'Maintainability | Bakılabilirlik' teriminin kişi karşılığı. Sayfa 175'te 'Other maintainers of the code' ifadesinde geçer."
  },
  {
    "en": "Management",
    "tr": "Yönetim (Management)",
    "note": ""
  },
  {
    "en": "Mandated Comment",
    "tr": "Zorunlu Yorum (Mandated Comment)",
    "note": "Şirket politikası veya kurallar gereği zorla eklenen yorum"
  },
  {
    "en": "Map",
    "tr": "harita (map)",
    "note": "Anahtar-değer eşlemesi (java.util.Map, HashMap); bu sayfada tip başına ayrı üç harita, tek bir `marshalers` haritasına birleştirilir. Sözlükteki 'Table Lookup' (Tablo Araması) ve 'Container' (Kap) terimleriyle bağlantılıdır."
  },
  {
    "en": "Marketer",
    "tr": "Pazarlamacı (Marketer)",
    "note": ""
  },
  {
    "en": "Marshaler",
    "tr": "Argüman Hazırlayıcı (Marshaler)",
    "note": "Args uygulamasında ham token akımından bir argümanı hazırlayıp (consume) değerini kendi alanında tutan bileşen; set() metoduyla doldurulur, statik getValue() ile okunur. Sayfa 197'nin ana teması."
  },
  {
    "en": "Marshalling",
    "tr": "marshalling (serileştirme/tanzim)",
    "note": "Argüman değerini ilgili türün beklediği biçime çevirme/uyarlama davranışı (boolean, dizgi, tamsayı); bu sayfada 'marshalling behavior' ifadesinde ve 'Moving String Marshalling & Intent' başlığında geçer."
  },
  {
    "en": "Master Repository",
    "tr": "Ana Depo (Master Repository)",
    "note": "Merkezi, başvuru niteliğindeki veri deposu; bu sayfada MQ bağlantılarıyla erişilen paylaşılan kaynak. 'repository' için sürüm kontrol deposu (VCS) anlamının yanı sıra veri merkezi anlamı da taşır."
  },
  {
    "en": "Matter-of-fact",
    "tr": "Olgusal (Matter-of-fact)",
    "note": "Spekülatif olmayan, gerçeklere dayanan kod"
  },
  {
    "en": "Meaningful Distinctions",
    "tr": "Anlamlı Ayrımlar (Meaningful Distinctions)",
    "note": "İsimlerin gerçekten farklı anlamlar taşıyacak şekilde farklılaştırılması"
  },
  {
    "en": "Meaningful Names",
    "tr": "Anlamlı İsimler (Meaningful Names)",
    "note": "Niyet ifade eden değişken/fonksiyon isimleri"
  },
  {
    "en": "Member Variable",
    "tr": "Üye Değişken (Member Variable)",
    "note": "Bir sınıfın her örneğine ait üye alan; sayfa 257'de 'the f prefix for the member variables' ifadesinde geçer. 'Instance Variable' (Örnek Değişkeni) ile aynı kavram."
  },
  {
    "en": "Memory Leak",
    "tr": "Bellek Sızıntısı (Memory Leak)",
    "note": "Programın artık kullanmadığı belleği serbest bırakamayıp zamanla tüketmesi; sayfa 330'da 'gece yarısı yeniden başlatarak temizlemek' metaforuyla eleştirilir."
  },
  {
    "en": "Mental Burden",
    "tr": "Zihinsel Yük (Mental Burden)",
    "note": "Kod okurken harcanan bilişsel çaba"
  },
  {
    "en": "Mental Mapping",
    "tr": "Zihinsel Eşleştirme (Mental Mapping)",
    "note": "Bir ismin zihinsel olarak başka bir isme çevrilmesi süreci"
  },
  {
    "en": "Mental Reflection",
    "tr": "Zihinsel Düşünme (Mental Reflection)",
    "note": "Proje hakkında derinlemesine düşünme, zihinsel değerlendirme"
  },
  {
    "en": "Mess",
    "tr": "Karmaşa (Mess)",
    "note": "Dağınık, düzensiz kod"
  },
  {
    "en": "Messy Code",
    "tr": "Dağınık Kod (Messy Code)",
    "note": ""
  },
  {
    "en": "Metadata",
    "tr": "Üstveri (Metadata)",
    "note": "Veriyi tanımlayan veri; ör. Sql sınıfına verilen tablo adı ve sütun bilgileri"
  },
  {
    "en": "Method",
    "tr": "Metot (Method)",
    "note": ""
  },
  {
    "en": "Method Chaining",
    "tr": "Metot Zincirleme (Method Chaining)",
    "note": "Metot çağrılarını ardışık zincirleme"
  },
  {
    "en": "Method Interception",
    "tr": "Metot Araya Girme (Method Interception)",
    "note": "AOP'yi gerçekleştirmek için kullanılan tekniklerden biri; bir framework'ün bir metot çağrısını yakalayıp, çağrıdan önce/sonra davranış eklemesi (günlükleme, işlem, güvenlik vb.). Sayfada dipnot 11'de 'wrapping' (sarmalama) ile birlikte anılır."
  },
  {
    "en": "Method Name",
    "tr": "Metot İsmi (Method Name)",
    "note": ""
  },
  {
    "en": "method signature",
    "tr": "Metot İmzası (Method Signature)",
    "note": "Metodu tanımlayan ad + parametre listesi; kavram kartında tüm türevlerde tek tipli imza kullanmak, if-else zincirini tek polimorfik çağrıya indirir"
  },
  {
    "en": "Minimal",
    "tr": "Minimal (Minimal)",
    "note": "Mümkün olan en küçük, yalnızca gerekli olanı içeren"
  },
  {
    "en": "Minimal Classes and Methods",
    "tr": "Küçük Sınıflar ve Metotlar",
    "note": "Chapter 12'nin (Jeff Langr) Basit Tasarım (Simple Design) kuralları arasındaki DÖRDÜNCÜ ve EN DÜŞÜK öncelikli kural: fonksiyon ve sınıf sayısını düşük tutma. Sayfa 176'da kesit başlığı olarak geçer."
  },
  {
    "en": "Mis-type",
    "tr": "Yanlış Yazım (Mis-type)",
    "note": ""
  },
  {
    "en": "Misleading Comment",
    "tr": "Yanıltıcı Yorum (Misleading Comment)",
    "note": "Kodun gerçekte yaptığından farklı bir şey söyleyen hatalı yorum"
  },
  {
    "en": "Misplaced Responsibility",
    "tr": "Yanlış Yerleştirilmiş Sorumluluk (Misplaced Responsibility)",
    "note": "G17 sezgisel kuralı: kodun (sabit, fonksiyon vb.) nereye konacağı kararı; en az şaşırtma ilkesine (principle of least surprise) göre kod, okuyucunun doğal olarak bekleyeceği yere yerleştirilmelidir. Ör. PI sabiti trigonometrik fonksiyonların, OVERTIME_RATE ise HourlyPayCalculator sınıfının yanında olmalıdır."
  },
  {
    "en": "Misspelling",
    "tr": "Kasıtlı Yazım Hatası (Misspelling)",
    "note": "Derleyiciyi tatmin etmek için yapılan yanlış yazım (ör. klass)"
  },
  {
    "en": "Mnemonic",
    "tr": "Anımsatıcı (Mnemonic)",
    "note": "JVM bayt kodu (byte-code) tablosunda ALOAD gibi talimat adlarının anımsatıcı karşılıkları; sayfa 324'teki tablonun 'Mnemonic' sütununda geçer."
  },
  {
    "en": "Mock",
    "tr": "Taklit (Mock)",
    "note": "Test sırasında gerçek bağımlılığın yerine geçen sahte uygulama; 'mock out' = taklit etmek"
  },
  {
    "en": "Mock Object",
    "tr": "Taklit Nesne (Mock Object)",
    "note": "Test sırasında gerçek bağımlılığın davranışını taklit eden ve çağrı beklentilerini doğrulayan sahte nesne; sözlükteki Mock (Taklit) ile uyumludur"
  },
  {
    "en": "Modularity",
    "tr": "Modülerlik (Modularity)",
    "note": "Sistemin bağımsız, yeniden kullanılabilir parçalara (modüllere) bölünmesi"
  },
  {
    "en": "Module",
    "tr": "Modül (Module)",
    "note": ""
  },
  {
    "en": "Monadic",
    "tr": "Tekli (Monadic)",
    "note": "Bir argümanlı fonksiyon"
  },
  {
    "en": "Monolithic",
    "tr": "Tek parça (monolithic)",
    "note": "Tek blok hâlinde, bölümlere ayrılmamış (yapı) anlamında sıfat; sayfadaki 'monolithic assembly language code' ifadesinde geçer."
  },
  {
    "en": "Monte Carlo Testing",
    "tr": "Monte Carlo Testi (Monte Carlo Testing)",
    "note": "Testin ayar (tuning) değerlerini rastgele değiştirerek testi tekrar tekrar — ör. bir test sunucusunda — çalıştırıp seyrek görülen eşzamanlılık (concurrency) hatalarını yakalamaya çalışan test tekniği; sayfa 341'de 'Monte Carlo Testing' maddesinde geçer."
  },
  {
    "en": "month code",
    "tr": "ay kodu (month code)",
    "note": "Ayları temsil eden tamsayı kodlar (JANUARY..DECEMBER); SerialDate'in isValidMonthCode ve monthCodeToQuarter metotlarının girdisi olarak geçer. java.util.Calendar sabitleriyle aynı değerleri kullanır."
  },
  {
    "en": "MQ (Message Queue)",
    "tr": "MQ (İleti Kuyruğu — Message Queue)",
    "note": "Uygulamalar arasında zaman uyumsuz (asynchronous) ileti alışverişi sağlayan mesajlaşma sistemi; bu sayfada ana depoya (master repository) giden, sonlu boyutlu paylaşılan bağlantı havuzunun kaynağı. Kısaltma İngilizce kalır."
  },
  {
    "en": "Multithreaded / Single-threaded",
    "tr": "Çok İş Parçacıklı (multithreaded) / Tek İş Parçacıklı (single-threaded)",
    "note": "Sözlükteki 'Thread | İş Parçacığı (Thread)' teriminin sıfat biçimleri; sayfa 179'da 'single threaded', 'multithreaded algorithm', 'single-threaded system' ifadelerinde geçer."
  },
  {
    "en": "Mumbling",
    "tr": "Mırıldanma (Mumbling)",
    "note": "Belirsiz, özensiz veya ne dediği anlaşılmayan yorum"
  },
  {
    "en": "Mutator",
    "tr": "Değiştirici (Mutator)",
    "note": "JavaBean standardında set metotları"
  },
  {
    "en": "Mutual Exclusion",
    "tr": "Karşılıklı Dışlama (Mutual Exclusion)",
    "note": "Bir anda yalnızca bir iş parçacığının ortak veriye ya da kaynağa erişebilmesi ilkesi; sayfa 183'ün tanım tablosunda geçer."
  },
  {
    "en": "Named Constant",
    "tr": "Adlandırılmış Sabit (Named Constant)",
    "note": "G25 sezgisel kuralı: ham sayıları ya da değeri belirsiz simgeleri iyi adlandırılmış, anlamlı sabitlerin arkasına gizleme; sözlükteki 'Constant | Sabit (Constant)' teriminin G25 bağlamındaki özel kullanımı."
  },
  {
    "en": "Namespace",
    "tr": "Ad Alanı (Namespace)",
    "note": ""
  },
  {
    "en": "Naming Convention",
    "tr": "İsimlendirme Kuralı (Naming Convention)",
    "note": ""
  },
  {
    "en": "Necessary Evil",
    "tr": "Zorunlu Kötülük (Necessary Evil)",
    "note": "Yorumların en iyi ihtimalle kaçınılmaz ama asla övülmemesi gereken bir kötülük olduğu fikri; Bölüm 4'ün açılış temasıdır"
  },
  {
    "en": "Negative Conditional",
    "tr": "Olumsuz Koşul (Negative Conditional)",
    "note": "Değilleme (!) içeren, olumlu karşılığına göre anlaşılması daha zor olan koşul ifadesi; G29 sezgisel kuralı, mümkün olduğunda koşulların olumlu yazılmasını önerir."
  },
  {
    "en": "Nesting Level",
    "tr": "İç İçe Geçme Seviyesi (Nesting Level)",
    "note": "Kod bloklarının derinlik seviyesi"
  },
  {
    "en": "Newspaper Metaphor",
    "tr": "Gazete Metaforu (Newspaper Metaphor)",
    "note": "Kaynak dosya gazete makalesi gibi okunmalı: üstte manşet ve özet, aşağı indikçe artan ayrıntı"
  },
  {
    "en": "Niladic",
    "tr": "Sıfırlı (Niladic)",
    "note": "Argümansız fonksiyon"
  },
  {
    "en": "No Preemption",
    "tr": "Önalım Yok (No Preemption)",
    "note": "Kilitlenmenin (deadlock) dört koşulundan üçüncüsü: bir iş parçacığı, başka bir iş parçacığının elindeki kaynağı ondan alamaz; sayfa 337'de açıklanır."
  },
  {
    "en": "Noise Comment",
    "tr": "Gürültü Yorumu (Noise Comment)",
    "note": "Hiçbir değer katmayan, bariz olanı tekrar eden yorum"
  },
  {
    "en": "Noise Word",
    "tr": "Gürültü Kelimesi (Noise Word)",
    "note": "İsme anlam katmayan ek (Info, Data, the, a)"
  },
  {
    "en": "Nonblocking",
    "tr": "Engel Olmayan (Nonblocking)",
    "note": "İş parçacığını bekleme (blocking) durumuna sokmayan eşzamanlılık çözümleri; sayfadaki 'Use nonblocking solutions when possible' maddesinde geçer."
  },
  {
    "en": "nonfunctional",
    "tr": "işlevsiz (nonfunctional)",
    "note": "Hiçbir zaman yanlış olmayan ya da akışı etkilemeyen koşul için kullanılır; sayfa 262'de 'the if statement was nonfunctional' ifadesinde geçer."
  },
  {
    "en": "Noninvasive",
    "tr": "Müdahalesiz (Noninvasive)",
    "note": "Hedef koda ya da iş nesnesinin içine girmeden uygulanan; görünüm benzeri (aspect-like) mekanizmaların diğer gerçekleştirim kaygılarını (implementation concerns) bu biçimde dahil etmesi anlamında. Sayfa 161'de 'noninvasively' için 'müdahalesiz (noninvasively)' kullanılmıştır; sözlükteki 'istilacılık (Invasiveness)' teriminin karşıtıdır."
  },
  {
    "en": "Nonlocal Information",
    "tr": "Yerel Olmayan Bilgi (Nonlocal Information)",
    "note": "Bulunduğu yerle doğrudan ilgili olmayan sistem bilgisi"
  },
  {
    "en": "nonstatic",
    "tr": "statik olmayan (nonstatic)",
    "note": "G18 kuralında statik (static) metotların karşıtı; örnek (instance) gerektiren, bir nesneye bağlı üye fonksiyonu (member function) anlamında kullanılır."
  },
  {
    "en": "Nonthread-Safe Classes",
    "tr": "İş Parçacığına Güvenli Olmayan Sınıflar (Nonthread-Safe Classes)",
    "note": "Doğası gereği iş parçacığına güvenli (thread safe) olmayan sınıflar; SimpleDateFormat, veritabanı bağlantıları, java.util kapları ve servlet'ler örnek verilir. Sözlükteki 'Thread-Safe | İş Parçacığına Güvenli (Thread-Safe)' teriminin karşıtıdır; sayfa 328'in bölüm başlığı."
  },
  {
    "en": "Nonthreaded",
    "tr": "İş Parçacıksız (Nonthreaded)",
    "note": "İstekleri aynı iş parçacığında sırayla işleyen sunucu modeli; sayfa 317'de 'Client/Server Nonthreaded' kesit başvurusunda geçer."
  },
  {
    "en": "Normal Flow",
    "tr": "Normal Akış (Normal Flow)",
    "note": "Hata durumlarıyla kesintiye uğramayan, asıl iş akışı"
  },
  {
    "en": "Normal Forms",
    "tr": "Normal Formlar (Normal Forms)",
    "note": "Codd'un veritabanı tekrar kaldırma stratejisi"
  },
  {
    "en": "Null Check",
    "tr": "null Kontrolü (Null Check)",
    "note": "Bir değerin null olup olmadığını denetleyen koşul; çoğalması null döndürmenin belirtisidir"
  },
  {
    "en": "Null Detection",
    "tr": "null Tespiti (Null Detection)",
    "note": "Bir değerin null olup olmadığını denetleyip ona göre davranan mantık; bu sayfada getBoolean'a eklenen 'am != null' kontrolü bağlamında geçer. Sözlükteki 'Null Check' (null Kontrolü) teriminden ayrı, daha genel bir kavramdır."
  },
  {
    "en": "Number-Series Naming",
    "tr": "Numara Serili İsimlendirme (Number-Series Naming)",
    "note": "a1, a2, aN şeklinde anlamsız numara ekleme"
  },
  {
    "en": "Object",
    "tr": "Nesne (Object)",
    "note": ""
  },
  {
    "en": "Object Graph",
    "tr": "Nesne Grafiği (Object Graph)",
    "note": "Sistemdeki nesnelerin ve aralarındaki iş birlikçi (collaborator) ilişkilerinin bütünü; Demeter Yasası'nın (Law of Demeter) ihlali, çağrılacak metodu aramak için nesne grafiğinde dolaşmak (roam) anlamına gelir."
  },
  {
    "en": "Object Reference",
    "tr": "Nesne Başvurusu (Object Reference)",
    "note": "Bir nesneyi işaret eden başvuru; bayt kodunda this gibi değerler nesne başvurusudur ve yığında taşınır. Sayfa 325'te PUTFIELD açıklamasında 'the object reference one away from the top of the stack' ifadesinde geçer."
  },
  {
    "en": "Object-Oriented Code",
    "tr": "Nesne Yönelimli Kod (Object-Oriented Code)",
    "note": "Davranışı nesnelere dağıtan kod; yeni sınıf eklemeyi kolaylaştırır, yeni fonksiyon eklemeyi zorlaştırır (sayfa 97)"
  },
  {
    "en": "Object-Oriented Design",
    "tr": "Nesne Yönelimli Tasarım (Object-Oriented Design)",
    "note": ""
  },
  {
    "en": "Obscured Intent",
    "tr": "Karartılmış Niyet (Obscured Intent)",
    "note": "G16 sezgisel kuralı: uzun soluklu ifadeler (run-on expressions), Macar notasyonu (Hungarian notation) ve sihirli sayılar (magic numbers) gibi yapıların yazarın niyetini gizlemesi; kod mümkün olduğunca ifade gücü yüksek (expressive) yazılmalıdır."
  },
  {
    "en": "Obsolete Comment",
    "tr": "Eskimiş Yorum (Obsolete Comment)",
    "note": "C2 sezgisel kuralı: eskimiş, alakasız ve yanlış hale gelmiş yorum; mümkün olduğunca çabuk güncellenmeli ya da silinmelidir."
  },
  {
    "en": "Obvious Behavior Is Unimplemented",
    "tr": "Açık Davranış Gerçekleştirilmemiş (Obvious Behavior Is Unimplemented)",
    "note": "Bir fonksiyon ya da sınıfın, başka bir programcının makul biçimde bekleyebileceği davranışları gerçekleştirmemiş olması; 'En Az Şaşırtma İlkesi'nin (Principle of Least Surprise) ihlali [G2]."
  },
  {
    "en": "off-by-one",
    "tr": "bir eksik/fazla (off-by-one)",
    "note": "Sayacın/indeksin birer birim sapmasından kaynaklanan sınır hatası; sıfır tabanlı ile birden başlayan (1 based) sayımlar karıştırıldığında ortaya çıkar. Sayfa 261'de suffixIndex'in 1 tabanlı olmasının computeCommonSuffix'teki +1 düzeltmelerinin nedeni olması bağlamında geçer."
  },
  {
    "en": "One Pass",
    "tr": "Tek Geçiş (One Pass)",
    "note": "Tek seferde, tek vuruşla; temiz ve zarif programların tek geçişte yazılamayacağı beklentisi. Sayfa 200'de 'write clean and elegant programs in one pass' ifadesinde geçer."
  },
  {
    "en": "ONE SWITCH rule",
    "tr": "TEK SWITCH kuralı (ONE SWITCH rule)",
    "note": "G23'teki kural: belirli bir seçim türü için en fazla bir switch ifadesi olabilir ve o switch, sistemin geri kalanındaki benzer switch'lerin yerini alacak çok biçimli (polymorphic) nesneler üretmelidir."
  },
  {
    "en": "One-Off",
    "tr": "Tek Seferlik Olay (One-Off)",
    "note": "Yalnızca bir kez görülüp geçiştirilen düzensiz başarısızlık; sayfadaki 'written off as a onetime occurrence' ve 'so-called one-offs' ifadelerinde geçer. Aslında yük altında ya da rastgele zamanlarda ortaya çıkan eşzamanlılık hatası adayıdır."
  },
  {
    "en": "Open Closed Principle (OCP)",
    "tr": "Açık Kapalı İlkesi (OCP)",
    "note": "Sınıflar genişlemeye açık, değişikliğe kapalı olmalı"
  },
  {
    "en": "Open Interval / Half-Open Interval / Closed Interval",
    "tr": "Açık Aralık / Yarı Açık Aralık / Kapalı Aralık",
    "note": "Matematikte bir aralığın uç noktalarının o aralığa dahil olup olmadığını tanımlayan terimler; sayfa 276'da DateInterval enum'unun CLOSED, CLOSED_LEFT, CLOSED_RIGHT, OPEN sayıcılarının gerekçesi."
  },
  {
    "en": "Open Source",
    "tr": "Açık Kaynak (Open Source)",
    "note": "Kaynak kodu herkesin kullanımına açık olarak dağıtılan yazılım"
  },
  {
    "en": "Open/Closed Principle (OCP)",
    "tr": "Açık/Kapalı İlkesi (OCP)",
    "note": "Genişletmeye açık, değişikliğe kapalı prensibi"
  },
  {
    "en": "Opening a Class",
    "tr": "Sınıfı Açmak (Opening a Class)",
    "note": "Var olan bir sınıfı yeni işlev eklemek için değiştirmek; risk getirir ve sınıfın baştan sona yeniden test edilmesini gerektirir (OCP'nin 'değişikliğe kapalı' ilkesinin ihlali)"
  },
  {
    "en": "Operand Stack",
    "tr": "İşlenen Yığını (Operand Stack)",
    "note": "Java Sanal Makinesindeki (JVM) parametre alan talimatların parametrelerinin konduğu yığın; standart bir son giren ilk çıkar (LIFO) veri yapısıdır. Sayfa 324'teki tanım listesinde ve bayt kodu tablosunda geçer."
  },
  {
    "en": "Operator Precedence",
    "tr": "Operatör Önceliği (Operator Precedence)",
    "note": "Bir ifadede operatörlerin hangi sırayla değerlendirileceği; ör. çarpma toplamadan önce"
  },
  {
    "en": "Optimistic Locking",
    "tr": "İyimser Kilit (Optimistic Locking)",
    "note": "Çakışma yokmuş gibi varsayıp işlemi gerçekleştirme ve çakışma olmuşsa tekrar deneme stratejisi; CAS (Compare and Swap) bu yaklaşımın donanım karşılığıdır. 'Kötümser Kilit (Pessimistic Locking)' teriminin karşıtıdır."
  },
  {
    "en": "Ordering (possible orderings)",
    "tr": "Olası Sıralama (Ordering)",
    "note": "İş parçacıklarının talimatlarının izleyebileceği farklı yürütme sıralarından her biri; 'possible paths of execution' ile eş anlamlı kullanılır. Sayfa 325'te '4.38679733629e+24 possible orderings' ifadesinde geçer."
  },
  {
    "en": "ordinal",
    "tr": "sıral sayı (ordinal)",
    "note": "Bir dizideki sırayı/konumu belirten sayı; kitapta seri numarası (serial number) yerine önerilen daha betimleyici terim. Sayfa 271'de 'A more descriptive term might be ordinal' ifadesinde geçer."
  },
  {
    "en": "Organic Growth",
    "tr": "Organik Büyüme (Organic Growth)",
    "note": "Sistemin büyük bir ön tasarım yerine küçük adımlarla, gerçek ihtiyaçlara göre doğal biçimde büyümesi; uygun kaygı ayrımı (separation of concerns) gerektirir."
  },
  {
    "en": "Origin (of the ordinal day)",
    "tr": "Başlangıç Noktası (Origin)",
    "note": "Sıral gün (ordinal day) sayımının sıfır noktası olan gün; sayfa 282'de getDayOfWeek algoritmasının, haftanın hangi günüyle başladığını belirleyen bu başlangıç noktasına örtük bağımlılığından söz edilir."
  },
  {
    "en": "Outbound Test",
    "tr": "Dışa Dönük Test (Outbound Test)",
    "note": "Kendi kodumuzdan üçüncü taraf arayüze doğru yapılan çağrıları, üretim kodunun kullandığı biçimde sınayan test"
  },
  {
    "en": "Output Argument",
    "tr": "Çıkış Argümanı (Output Argument)",
    "note": "Değer döndürmek için kullanılan argüman"
  },
  {
    "en": "Output Arguments",
    "tr": "Çıkış Argümanları (Output Arguments)",
    "note": "Fonksiyona geçirilen argümanın, girdi yerine çıktı taşımak için kullanılması; okuyucu beklentisine aykırı olduğu için kaçınılması gereken biçim [F2]. Sözlükteki 'Argument' (Argüman) teriminin zıt kullanımıdır."
  },
  {
    "en": "Output Stream",
    "tr": "Çıkış Akışı (Output Stream)",
    "note": "Verinin yazıldığı hedef akış (ör. konsol, dosya); log4j'de bir Appender'ın mesajları gönderdiği yer"
  },
  {
    "en": "Overhead",
    "tr": "Ek Yük (Overhead)",
    "note": "Bir işlemin kendi işi dışında yarattığı maliyet; ör. nesne hiç kullanılmasa bile oluşturma maliyeti"
  },
  {
    "en": "Overload",
    "tr": "Aşırı Yükleme (Overload)",
    "note": "Aynı isimli fonksiyon/metodun farklı parametre listeleriyle birden fazla kez tanımlanması"
  },
  {
    "en": "Overload the Structure",
    "tr": "Yapıyı Betimlemeyle Donatma (Overload the Structure)",
    "note": "Özenli isimlerin kodun yapısına betimleme yüklemesi; sayfa 310'da 'they overload the structure of the code with description' ifadesinde geçer. Sözlükteki 'Overload / Aşırı Yükleme (Overload)' teriminden farklı bir metafor kullanımıdır."
  },
  {
    "en": "Oxymoron",
    "tr": "Oksimoron (Oxymoron)",
    "note": "Birbirine zıt kavramların birleşimi (ör. \"keskin soyutlama\")"
  },
  {
    "en": "Package",
    "tr": "Paket (Package)",
    "note": "Kod organizasyon birimi"
  },
  {
    "en": "Package Scope",
    "tr": "Paket Kapsamı (Package Scope)",
    "note": "Java'da yalnızca aynı paketteki sınıflardan erişilebilen görünürlük seviyesi; testler uğruna kapsüllemeyi gevşetmenin private'tan sonraki en az zararlı yolu."
  },
  {
    "en": "Painless",
    "tr": "Acısız (painless)",
    "note": "Sayfa 238’de 'That was pretty painless' ifadesinde geçer: zahmetsiz, sürtünmesiz. Double marshaler’ın ispatlanmış integer marshaler deseninden kopyalanarak kolayca yazılabildiği vurgulanır."
  },
  {
    "en": "Parent Thread / Child Thread",
    "tr": "Ana İş Parçacığı / Çocuk İş Parçacığı (Parent Thread / Child Thread)",
    "note": "Bir iş parçacığının (parent) başlattığı ve beklediği alt iş parçacıkları (children); kapanışta ana iş parçacığı çocukları bitirmeyi bekler."
  },
  {
    "en": "Parse",
    "tr": "Ayrıştırma (Parse)",
    "note": "Dizgiyi anlamlı parçalara ya da hedef tipe çevirme işlemi; burada Integer.parseInt dizgiyi tamsayıya çevirir. Sözlükteki 'Decoupling | Ayrıştırma (Decoupling)' girdisinden bağımsız, farklı bir kavramdır."
  },
  {
    "en": "Parsing",
    "tr": "Ayrıştırma (Parsing)",
    "note": "Bir dizgiyi (ör. şema dizgisini, girdi dizgisini) sözdizimi kurallarına göre parçalara ayırıp anlamlandırma işlemi; bu sayfada 'schema parsing' (şema ayrıştırma) ifadesinde geçer."
  },
  {
    "en": "Partitioning",
    "tr": "Parçalama (Partitioning)",
    "note": "Farklı türlerdeki kodları koymak için uygun yerler yaratma; iyi yazılım tasarımının büyük kısmının konusu. Sözlükteki 'Modularity' (Modülerlik) ve 'Separation of Concerns' (Kaygıların Ayrılması) terimleriyle ilişkilidir."
  },
  {
    "en": "pattern",
    "tr": "desen (pattern)",
    "note": "'the same pattern of changes' ifadesinde genel terim olarak geçer; glossary'de yalnız 'Design Pattern' (Tasarım Deseni) gibi bileşik terimler vardır."
  },
  {
    "en": "Performance Test",
    "tr": "Performans Testi (Performance Test)",
    "note": "Bir sistemin belirli bir süre içinde işi tamamlayıp tamamlayamadığını doğrulayan test; bu sayfada 10.000 milisaniyelik zaman aşımıyla (timeout) yazılan `shouldRunInUnder10Seconds` testi örneğinde geçer."
  },
  {
    "en": "Permutation",
    "tr": "Permütasyon (Permutation)",
    "note": "Bir kümenin öğelerinin sıralanma biçimlerinden her biri; bu sayfada, olası çalışma yollarını (paths of execution) hesaplamak için N adımın ve T iş parçacığının tüm sıralamalarının sayılmasında geçer."
  },
  {
    "en": "Persistence",
    "tr": "Kalıcılık (Persistence)",
    "note": "Verinin veritabanı, düz dosya gibi kalıcı bir depoda saklanması"
  },
  {
    "en": "Pessimistic Locking",
    "tr": "Kötümser Kilit (Pessimistic Locking)",
    "note": "İşlem yapmadan önce kaynağı kilitleyerek diğer iş parçacıklarını dışlayan (senkronize, synchronized) strateji; çekişmesiz durumlarda bile kilit maliyeti öder. 'İyimser Kilit (Optimistic Locking)' teriminin karşıtıdır."
  },
  {
    "en": "Physical Dependency",
    "tr": "Fiziksel Bağımlılık (Physical Dependency)",
    "note": "Kodun yapısında açıkça görünen, fiziksel olarak gerçekleştirilmiş bağımlılık; G22 kuralına göre bağımlı modül, bağımlı olduğu modülden gereksindiği tüm bilgileri açıkça istemelidir. Sözlükteki 'Logical Dependency' (Mantıksal Bağımlılık) teriminin karşıtıdır."
  },
  {
    "en": "physicalize",
    "tr": "fizikselleştirmek (physicalize)",
    "note": "G22 bağlamında: örtük (mantıksal) bir bağımlılığı kodun yapısında görünür hale getirmek; bağımlılığı bir metot/sabit aracılığıyla açıkça ifade etmek. 'Mantıksal Bağımlılık (Logical Dependency)' teriminin karşıtı yönünde bir eylemdir."
  },
  {
    "en": "Plug-ability",
    "tr": "Takılabilirlik (Plug-ability)",
    "note": "'Pluggable | Takılabilir (Pluggable)' teriminin isim biçimi; sayfadaki 'implies some level of plug-ability' ifadesinde geçer. TDD'nin Üç Yasası'ndan gelen test edilebilirliğin ima ettiği özellik."
  },
  {
    "en": "Pluggable",
    "tr": "Takılabilir (Pluggable)",
    "note": "Bağımlılıkların (ör. test ikizleri) çalışma zamanında değiştirilebilir/takılabilir olması; bu sayfada 'Make Your Threaded Code Pluggable' başlığında geçer."
  },
  {
    "en": "Point of Declaration",
    "tr": "Tanımlama Noktası (Point of Declaration)",
    "note": "Değişkenin tanımlandığı yer"
  },
  {
    "en": "POJO (Plain-Old Java Object)",
    "tr": "POJO (Sade Eski Java Nesnesi)",
    "note": "Herhangi bir çerçeveye (framework) veya kapsayıcıya (container) bağımlılığı olmayan, tamamen kendi alanına odaklanmış sade Java sınıfı; kitapta 'Plain-Old Java Object (POJO)' olarak geçer ve BankImpl buna örnektir. Yazar kitapta POJO'lara kısa süre sonra yeniden döneceğini söyler (Pure Java AOP Frameworks)."
  },
  {
    "en": "Polyadic",
    "tr": "Çoklu (Polyadic)",
    "note": "Üç veya daha fazla argümanlı fonksiyon"
  },
  {
    "en": "Polymorphism",
    "tr": "Çok Biçimlilik (Polymorphism)",
    "note": ""
  },
  {
    "en": "Poorly Written Comment",
    "tr": "Kötü Yazılmış Yorum (Poorly Written Comment)",
    "note": "C4 kuralı: yazılmaya değer yorum iyi yazılmaya da değer; özensiz, geveze, dil bilgisi hatalı yorumlar."
  },
  {
    "en": "Position Marker",
    "tr": "Konum İşaretçisi (Position Marker)",
    "note": "Kod bloklarını ayırmak için kullanılan görsel banner'lar"
  },
  {
    "en": "Pre-increment operator",
    "tr": "Ön Artırma Operatörü (Pre-increment Operator)",
    "note": "Java'da değeri önce artırıp sonra kullanan ++ operatörü; birden çok bayt kodu (byte-code) talimatına derlendiği için kesintiye uğrayabilir ve atomik (atomic) değildir. Sayfa 324'te 9. satırdaki ++ için geçer."
  },
  {
    "en": "Precision",
    "tr": "Hassasiyet (Precision)",
    "note": "Gereksinimlerdeki kesinlik"
  },
  {
    "en": "Predicate",
    "tr": "Yüklem (Predicate)",
    "note": "JavaBean standardında boolean dönen is metotları"
  },
  {
    "en": "preempted",
    "tr": "kesintiye uğramak (preempted)",
    "note": "Bir iş parçacığının, kendisi izin vermeden işletim sistemi/sanal makine tarafından durdurulup yerine başka bir iş parçacığının geçirilmesi; 'Preemptive Threading' (Önemleyici İş Parçacıklama) teriminin fiil biçimi. Sayfa 330'da 'Thread 1 gets preempted' ifadesinde geçer."
  },
  {
    "en": "Preemptive Threading",
    "tr": "Önemleyici İş Parçacıklama (Preemptive Threading)",
    "note": "İşletim sisteminin veya sanal makinenin, bir iş parçacığının kendisi izin vermeden kontrolü devralarak başka bir iş parçacığına geçebilmesi. Dipnot 16'da Java'nın bu davranışı garanti etmediği, modern işletim sistemlerinin bunu 'bedava' sağladığı belirtilir."
  },
  {
    "en": "Prefix Convention",
    "tr": "Önek Kuralı (Prefix Convention)",
    "note": "Yerel değişkenler için a, argümanlar için the gibi önek kuralları"
  },
  {
    "en": "Premature Decision",
    "tr": "Erken Verilmiş Karar (Premature Decision)",
    "note": "Optimal olmayan bilgiyle, gerekli bilgi henüz birikmeden verilen karar"
  },
  {
    "en": "Prequel",
    "tr": "Öncül (Prequel)",
    "note": "Bu kitabın PPP kitabına göre konumu"
  },
  {
    "en": "Principle",
    "tr": "İlke (Principle)",
    "note": ""
  },
  {
    "en": "Principle of Least Surprise",
    "tr": "En Az Şaşırtma İlkesi (Principle of Least Surprise)",
    "note": ""
  },
  {
    "en": "Problem Domain",
    "tr": "Problem Alanı (Problem Domain)",
    "note": ""
  },
  {
    "en": "Procedural Code",
    "tr": "Prosedürel Kod (Procedural Code)",
    "note": "Veri yapıları üzerinde çalışan fonksiyonlarla yazılan kod"
  },
  {
    "en": "processing time",
    "tr": "İşleme Süresi (Processing Time)",
    "note": "Bir sayfanın ayrıştırılması (parsing) gibi hesaplama işinin sürdüğü süre; sayfa 334'ün liste maddesinde I/O süresinden ayrılmıştır."
  },
  {
    "en": "Processor-Bound / I/O-Bound",
    "tr": "İşlemciye Bağlı (Processor-Bound) / I/O'ya Bağlı (I/O-Bound)",
    "note": "Performansın işlemci hesaplamasına mı yoksa giriş/çıkış (I/O) beklemesine mi bağlı olduğunu belirten sınıflandırma; eşzamanlılık (concurrency) yalnızca I/O'ya bağlı işlerde verimliliği artırır."
  },
  {
    "en": "Producer-Consumer",
    "tr": "Üretici-Tüketicici (Producer-Consumer)",
    "note": "İşi bir tampona (buffer) veya kuyruğa (queue) bırakan üretici iş parçacıkları ile kuyruktan iş alan tüketici iş parçacıklarını sinyal (signal) alışverişiyle koordine eden klasik eşzamanlılık problemi; sayfa 184'te level-2 başlık."
  },
  {
    "en": "Production Code",
    "tr": "Üretim Kodu (Production Code)",
    "note": "Uygulamanın gerçekte çalışan, test kodu olmayan kısmı"
  },
  {
    "en": "Productivity",
    "tr": "Verimlilik (Productivity)",
    "note": ""
  },
  {
    "en": "Professional",
    "tr": "Profesyonel (Professional)",
    "note": ""
  },
  {
    "en": "Professional Review",
    "tr": "Profesyonel İnceleme (Professional Review)",
    "note": "Kötü niyet ya da saygısızlık taşımayan, mesleki disiplinle yürütülen kod eleştirisi; doktorlar, pilotlar ve avukatların uyguladığı mesleki denetim pratiğine benzetilir. Sayfa 268'de yazarın yaptığı işin doğası bu terimle açıklanır."
  },
  {
    "en": "Programatic Configuration",
    "tr": "Programatik Yapılandırma (Programatic Configuration)",
    "note": "Yapılandırmanın dosya yerine kod içinde programatik olarak yapılması; kitapta 'programatic configurations' olarak geçer (orijinal yazım 'programatic')."
  },
  {
    "en": "Programmer-eese",
    "tr": "Programcı Dili (Programmer-eese)",
    "note": "Programcıların kendi aralarında kullandığı teknik jargon"
  },
  {
    "en": "Pronounceable Names",
    "tr": "Telaffuz Edilebilir İsimler (Pronounceable Names)",
    "note": "İsimlerin sesli okunabilir olması gerektiği ilkesi"
  },
  {
    "en": "Prose",
    "tr": "Düzyazı (Prose)",
    "note": "Grady Booch: \"Temiz kod iyi yazılmış bir düzyazı gibi okunur\""
  },
  {
    "en": "Protected Variable",
    "tr": "Korumalı Değişken (Protected Variable)",
    "note": "Alt sınıflardan erişilebilen değişken; ilişkili kavramları dosyalara dağıttığı için kaçınılmalıdır"
  },
  {
    "en": "Proxy",
    "tr": "Vekil (Proxy)",
    "note": "Başka bir nesneyi temsil eden, istenen işi ona devreden sarmalayıcı nesne; tembel değerlendirme (lazy evaluation) gibi optimizasyonlar için kullanılabilir"
  },
  {
    "en": "Pull Up (a member)",
    "tr": "Yukarı Taşımak (Pull Up)",
    "note": "Bir üyeyi alt sınıftan, tüm türevlerin paylaştığı üst sınıfa taşıma yeniden düzenlemesi; sayfa 280-282'de toDate, getDayOfWeek, compare ve isInRange metotlarının SpreadsheetDate'ten DayDate'e taşınmasında geçer. 'Push Down (a member)' (Aşağı Taşımak) teriminin karşıtıdır."
  },
  {
    "en": "Pun",
    "tr": "Kelime Oyunu (Pun)",
    "note": "Bir kelimenin iki farklı anlamda kullanılması"
  },
  {
    "en": "Push Down (a member)",
    "tr": "Aşağı Taşımak (Push Down)",
    "note": "Bir üyeyi üst sınıftan, onu gerçekten kullanan alt sınıfa taşıma yeniden düzenlemesi; sayfa 279'da leapYearCount'un DayDate'ten SpreadsheetDate'e taşınması bağlamında geçer [G6]. Sözlükteki 'Deploy' (yerleştirmek) terimiyle yakından ilişkilidir."
  },
  {
    "en": "quarter",
    "tr": "çeyrek (quarter)",
    "note": "Üç aylık dönem; monthCodeToQuarter metodu, ay kodunu yılın 1-4 arasındaki çeyreğine eşler. Takvim/finans bağlamında 'çeyrek' Türkçede yerleşik karşılıktır."
  },
  {
    "en": "Quasi-Encapsulation",
    "tr": "Yarı Kapsülleme (Quasi-Encapsulation)",
    "note": "Bean'lerin getter/setter ile sağladığı, pratikte hiçbir şeyi gizlemeyen görünüşte kapsülleme"
  },
  {
    "en": "Query",
    "tr": "Sorgu (Query)",
    "note": "Bu sayfada fiil olarak geçer: 'query the Args instance for the values of the arguments' = argüman değerlerini `Args` örneğinden istemek/okumak. Sözlükteki 'Command Query Separation' (Komut Sorgu Ayrımı) terimindeki 'query' kavramıyla bağlantılıdır."
  },
  {
    "en": "Race Condition",
    "tr": "Yarış Durumu (Race Condition)",
    "note": "Eşzamanlı erişimden kaynaklanan hata"
  },
  {
    "en": "Range constant (inclusion)",
    "tr": "Kapsama Sabiti (Range Constant)",
    "note": "INCLUDE_NONE / INCLUDE_FIRST / INCLUDE_SECOND / INCLUDE_BOTH sabitleri, bir tarih aralığının hangi uçlarının kapsandığını tek bir adlandırılmış değerde kodlar; iki boolean parametrenin ürettiği anlamsız kombinasyonları önler (Listing B-1)."
  },
  {
    "en": "Readability",
    "tr": "Okunabilirlik (Readability)",
    "note": "Kodun okunup anlaşılma kolaylığı; sonraki tüm değişiklikleri etkiler"
  },
  {
    "en": "Readable Code",
    "tr": "Okunabilir Kod (Readable Code)",
    "note": ""
  },
  {
    "en": "Readers-Writers",
    "tr": "Okuyucu-Yazarlar (Readers-Writers)",
    "note": "Paylaşılan kaynağı sürekli okuyan ve ara sıra güncelleyen tarafların doğruluk, geçirimi (throughput) ve açlık (starvation) dengesini bulmasını gerektiren klasik eşzamanlılık problemi; sayfa 184'te level-2 başlık."
  },
  {
    "en": "Real-Time System",
    "tr": "Gerçek Zamanlı Sistem (Real-Time System)",
    "note": "Girdilere belirli zaman sınırları içinde yanıt vermek zorunda olan sistem; çoğunlukla gömülü olup işlemci ve bellek kaynakları kısıtlıdır (Bölüm 9, çifte standart tartışması)"
  },
  {
    "en": "Reason to Change",
    "tr": "Değişme Nedeni (Reason to Change)",
    "note": "Tek Sorumluluk İlkesi'nin (SRP) tanımındaki temel ölçüt: bir sınıfın değişmesine yol açabilecek her ayrı sebep bir sorumluluktur; 'responsibility' ile eş anlamlı kullanılır."
  },
  {
    "en": "Recompilation",
    "tr": "Yeniden Derleme (Recompilation)",
    "note": "Değişiklik sonrası kodun tekrar derlenmesi"
  },
  {
    "en": "Recursion",
    "tr": "Özyineleme (Recursion)",
    "note": "Bir fonksiyonun doğrudan ya da dolaylı olarak kendini çağırması"
  },
  {
    "en": "Redeployment",
    "tr": "Yeniden Dağıtım (Redeployment)",
    "note": "Değişiklik sonrası kodun tekrar dağıtılması"
  },
  {
    "en": "Redesign",
    "tr": "Yeniden Tasarım (Redesign)",
    "note": ""
  },
  {
    "en": "Redundant Comment",
    "tr": "Gereksiz Yorum (Redundant Comment)",
    "note": "Koddan daha fazla bilgi vermeyen, fazlalık yorum"
  },
  {
    "en": "ReentrantLock",
    "tr": "ReentrantLock",
    "note": "Bir metotta elde edilip başka bir metotta bırakılabilecek kilit; java.util.concurrent.locks paketinde. Teknik sınıf adı olduğu için çevrilmez."
  },
  {
    "en": "Refactoring",
    "tr": "Yeniden Düzenleme (Refactoring)",
    "note": ""
  },
  {
    "en": "Reflection",
    "tr": "Yansıma (Reflection)",
    "note": "Bir programın kendi yapısını (sınıflar, metotlar, alanlar) çalışma anında incelemesine ve bunlara dinamik olarak erişmesine olanak tanıyan API/mekanizma; Java'da java.lang.reflect paketinde bulunur. Sayfada 'Java reflection API' olarak geçer."
  },
  {
    "en": "Regular Expression",
    "tr": "Düzenli İfade (Regular Expression)",
    "note": "Metin desenlerini eşleştirmek için kullanılan söz dizimi; regex olarak da bilinir"
  },
  {
    "en": "relative offset",
    "tr": "göreli konum değeri (relative offset)",
    "note": "Bir başlangıç noktasına göre ölçülen fark/değer; SerialDate'in gösterimi bir seri numarasından çok göreli bir konum değeridir. Sayfa 271'de 'the representation is more of a relative offset' ifadesinde geçer."
  },
  {
    "en": "Release",
    "tr": "Sürüm (Release)",
    "note": "Yazılımın yayımlanan bir versiyonu"
  },
  {
    "en": "Release Cycle",
    "tr": "Yayın Döngüsü (Release Cycle)",
    "note": "Ürün sürüm yayınlama süreci"
  },
  {
    "en": "Renaming",
    "tr": "Yeniden Adlandırma (Renaming)",
    "note": "Değişken/fonksiyon/sınıf adını değiştirme"
  },
  {
    "en": "Request",
    "tr": "İstek (Request)",
    "note": "İstemcinin sunucuya gönderdiği işlem talebi; sayfa 317'de 'sends a request' ifadesinde geçer."
  },
  {
    "en": "Requirement",
    "tr": "Gereksinim (Requirement)",
    "note": ""
  },
  {
    "en": "Resource",
    "tr": "Kaynak (Resource)",
    "note": "Bir isteğin hedeflediği, URL ile adreslenen öğe; ör. FitNesse'de request.setResource(\"root\")"
  },
  {
    "en": "Resource Pool",
    "tr": "Kaynak Havuzu (Resource Pool)",
    "note": "Birden çok iş parçacığının ortak kullandığı sınırlı kaynak kümesi (örn. veritabanı bağlantıları); eşzamanlılık sorunlarının olası kaynaklarından biri olarak sayfa 190'da 'a common resource pool' ifadesinde geçer. 'Bound Resources' terimiyle yakından ilgilidir."
  },
  {
    "en": "Response Time",
    "tr": "Yanıt Süresi (Response Time)",
    "note": "Bir isteğin yanıtlanması için geçen süre; bazı sistemler yanıt süresi ve geçirimi (throughput) kısıtlarına tabidir."
  },
  {
    "en": "Responsibility-Driven Design (RDD)",
    "tr": "Sorumluluk Odaklı Tasarım (Responsibility-Driven Design)",
    "note": "Rebecca Wirfs-Brock'un nesne tasarımı yaklaşımı: sınıflar veri alanlarından değil rollerden, sorumluluklardan ve iş birliklerinden yola çıkarak tasarlanır; Chapter 10 kaynakçasında [RDD] etiketiyle anılır"
  },
  {
    "en": "Responsiveness",
    "tr": "Yanıt Verebilirlik (Responsiveness)",
    "note": "Sayfa 339'da ölü kilidi önlemek için işlemciyi (CPU) yoğun kullanan stratejilerin yanıt verebilirliği azalttığı ifadesinde geçer."
  },
  {
    "en": "Return Code",
    "tr": "Dönüş Kodu (Return Code)",
    "note": "Fonksiyonun başarı/hata durumunu dönüş değeriyle bildirmesi; Bölüm 7 bunun yerine istisna kullanmayı önerir"
  },
  {
    "en": "Reusability",
    "tr": "Yeniden Kullanılabilirlik (Reusability)",
    "note": "Kodun başka bağlamlarda yeniden kullanılabilmesi; testlerin güvence altına aldığı -liklerden biri"
  },
  {
    "en": "Reuse in the Large",
    "tr": "Büyük Ölçekli Yeniden Kullanım (Reuse in the Large)",
    "note": "Sistem genelinde, büyük yapılar düzeyinde yeniden kullanım; 'reuse in the small'ın (küçük ölçekte yeniden kullanım) birikimiyle mümkün olur. Sayfa 174'te 'reuse in the large' ifadesi olarak geçer."
  },
  {
    "en": "Reuse in the Small",
    "tr": "Küçük Ölçekli Yeniden Kullanım (Reuse in the Small)",
    "note": "Çok küçük ortaklıkları (birkaç satır bile olsa) isimli metotlar olarak çıkarma; bu küçük yeniden kullanımlar birikerek büyük ölçekte yeniden kullanımı mümkün kılar ve sistem karmaşıklığını dramatik biçimde azaltır. Sayfa 174'te 'reuse in the small' ifadesi olarak geçer."
  },
  {
    "en": "Ring Buffer",
    "tr": "Halka Tampon (Ring Buffer)",
    "note": "Sabit boyutlu, dairesel olarak düzenlenmiş tampon; dizinin sonuna gelindiğinde işaretçi başa sarar. Bu sayfada uçbirim çıktısını denetleyen tamponun, sayaç ile işaretçinin (counter-pointer) senkronunu yitirmesi nedeniyle kilitlenmeye yol açması anlatılır."
  },
  {
    "en": "Rough Draft",
    "tr": "Kaba Taslak (Rough Draft)",
    "note": "İlkokul kompozisyonu metaforundaki ilk taslak; 'ardışık iyileştirme' (successive refinement) temasının parçası. Sayfa 200'de 'write rough drafts of our compositions' ifadesinde geçer."
  },
  {
    "en": "Rounding",
    "tr": "Yuvarlama (Rounding)",
    "note": "Bir sayıyı daha az anlamlı basamağa tamamlama işlemi; para birimi tamsayılarla (integers) temsil edildiğinde yuvarlama uygun biçimde ele alınmalıdır."
  },
  {
    "en": "Routine",
    "tr": "Rutin (Routine)",
    "note": "Programlamanın ilk günlerindeki fonksiyon benzeri yapı"
  },
  {
    "en": "Run-on expressions",
    "tr": "Uzun soluklu ifadeler (run-on expressions)",
    "note": "Birbiri içine geçen, soluksuz yazılmış birleşik ifadeler; okunması güçtür ve yazarın niyetini karartır. G16 sezgisel kuralında 'the author’s intent' ifadesiyle birlikte geçer."
  },
  {
    "en": "Runnable",
    "tr": "Runnable (arayüz)",
    "note": "Java'da bir görevi temsil eden, tek bir run() metodu içeren arayüz; `Executor` onu çalıştırabilir. Bu sayfada 'classes that implement Runnable' ifadesinde geçer. Teknik arayüz adı olduğu için İngilizce kalır."
  },
  {
    "en": "running total",
    "tr": "güncel toplam (running total)",
    "note": "G16 bağlamında: zaman kartları (time cards) kabul edilirken adım adım biriktirilen toplam; bu sayfada 'koddaki güncel toplam' ifadesinde geçer."
  },
  {
    "en": "Runtime Error",
    "tr": "Çalışma Zamanı Hatası (Runtime Error)",
    "note": "Derleme sırasında değil, program çalışırken ortaya çıkan hata"
  },
  {
    "en": "Runtime Logic",
    "tr": "Çalışma Zamanı Mantığı (Runtime Logic)",
    "note": "Uygulama başladıktan sonra asıl işi yapan kod; başlangıç (startup) sürecinden ayrılmalıdır"
  },
  {
    "en": "rvalue",
    "tr": "Sağ Taraf Değeri (rvalue)",
    "note": "Bir atama ifadesinde eşittir işaretinin sağında kalan değer"
  },
  {
    "en": "Safeties",
    "tr": "Güvenlik Önlemleri (Safeties)",
    "note": "Derleyici uyarıları, testler, otomatik denetimler gibi sistemin hatalara karşı sunduğu koruyucu mekanizmalar; G4 kuralının konusu. 'override' = geçersiz kılmak."
  },
  {
    "en": "Scary Noise",
    "tr": "Korkunç Gürültü (Scary Noise)",
    "note": "Bariz olanı karmaşık Javadoc formatında tekrar eden sinir bozucu yorum"
  },
  {
    "en": "Schedule",
    "tr": "Takvim / Zamanlama (Schedule)",
    "note": ""
  },
  {
    "en": "Scheduler",
    "tr": "Zamanlayıcı (Scheduler)",
    "note": "İşleri/görevleri belirli bir sıraya ve zamana göre çalıştıran sistem bileşeni; sayfadaki 'we added a function to the scheduler' ifadesinde geçer."
  },
  {
    "en": "Schema",
    "tr": "Şema (Schema)",
    "note": "Ayrıştırılacak argümanların türlerini tek bir biçim dizgisinde beyan eden tanım (ör. \"l,p#,d*\"); Chapter 14'ün sonraki sayfalarında 'format, or schema, string' olarak geçer."
  },
  {
    "en": "School of Thought",
    "tr": "Düşünce Okulu (School of Thought)",
    "note": ""
  },
  {
    "en": "Scissors Rule",
    "tr": "Makas Kuralı (Scissors Rule)",
    "note": "C++'ta örnek değişkenlerini sınıfın en altına koyma geleneği"
  },
  {
    "en": "Scope",
    "tr": "Kapsam (Scope)",
    "note": "Bir değişkenin geçerli olduğu kod alanı"
  },
  {
    "en": "Scope (of a class)",
    "tr": "Kapsam (Scope)",
    "note": "G14'te 'envies the scope of the class' ifadesinde geçer: sınıfın sahip olduğu değişkenler ve fonksiyonlar bütünü; mevcut 'Kapsam (Scope)' girdisinin sınıf bağlamındaki kullanımı."
  },
  {
    "en": "Scope Encoding",
    "tr": "Kapsam Kodlaması (Scope Encoding)",
    "note": "Bir değişkenin kapsamını (ör. üyelik/statiklik) isminin başına önek (f_, m_, s_) kodlayarak belirtme; günümüz IDE'leri bunu gereksiz kılar. Sayfa 257'de 'this kind of scope encoding' ifadesinde geçer."
  },
  {
    "en": "Scoping Rules",
    "tr": "Kapsam Kuralları (Scoping Rules)",
    "note": "Bir dilin, tanımlayıcıların (değişken, sabit, üye vb.) nerelerden görünür/erişilebilir olduğunu belirleyen kuralları; J2 kuralında kalıtımın bu kuralları atlatmak için kullanılmaması gerektiği belirtilir."
  },
  {
    "en": "Seam",
    "tr": "Dikiş Noktası (Seam)",
    "note": "Kodu o noktada düzenlemeden davranışı değiştirebildiğiniz yer; ör. bir arayüz üzerinden test için sahte nesne takmak [WELC]"
  },
  {
    "en": "Search-friendly name",
    "tr": "Arama Dostu İsim (Search-friendly name)",
    "note": ""
  },
  {
    "en": "Searchable Names",
    "tr": "Aranabilir İsimler (Searchable Names)",
    "note": ""
  },
  {
    "en": "Selector Arguments",
    "tr": "Seçici Argümanlar (Selector Arguments)",
    "note": "G15 sezgisel kuralı: bir fonksiyonun davranışını birden fazla mod arasında değiştirmek için kullanılan boolean/enum/tamsayı bayrak argümanı; amacı hatırlaması zordur ve birçok fonksiyonu tek fonksiyonda birleştirir."
  },
  {
    "en": "Self-Descriptive Name",
    "tr": "kendini betimleyen isim (self-descriptive name)",
    "note": "Adın, taşıdığı şeyi kendisinin açıklaması; sayfa 277'de getMonths fonksiyonuna [N1] ile işaretlenen daha betimleyici isim verme işleminde geçer. Sözlükteki 'Descriptive Names' (Betimleyici İsimler) terimiyle ilişkilidir."
  },
  {
    "en": "Semaphore",
    "tr": "Sinyal (Semaphore)",
    "note": "Sayaçlı bir kilitle klasik semaforun gerçekleştirimi; java.util.concurrent paketinde."
  },
  {
    "en": "sentinel value",
    "tr": "gösterge değer (sentinel value)",
    "note": "Geçerli bir sonucun bulunamadığını belirtmek için döndürülen özel değer; stringToMonthCode, tanınamayan bir dizgi için -1 döndürür. Ayrıca 'find' benzeri aramalarda 'bulunamadı' (not found) göstergesi olarak yaygındır."
  },
  {
    "en": "Separate",
    "tr": "Ayırmak (Separate)",
    "note": "Bir yapıyı ana modülden bağımsız bir parça hâline getirerek dışarı çıkarma; sayfa 242'de 'completely separated the exception and error code from the Args module' ifadesinde geçer. 'Decoupling | Ayrıştırma (Decoupling)' teriminden farklıdır: burada bağımlılığı azaltmak değil, kodun fiziksel olarak başka bir modüle taşınması kastedilir."
  },
  {
    "en": "Separation of Concerns",
    "tr": "Kaygıların Ayrılması (Separation of Concerns)",
    "note": "Yazılımı çalıştırma kaygısı ile onu düzenli ve temiz tutma kaygısının ayrı, birbiri kadar önemli iki etkinlik olarak ele alınması gerektiği ilkesi; Chapter 10'da sınıf tasarımı bağlamında geçer."
  },
  {
    "en": "serial number",
    "tr": "seri numarası (serial number)",
    "note": "Ürün tanımlama işareti olarak kullanılan numara; kitapta SerialDate'in 30 Aralık 1899'dan bu yana geçen gün sayısını tutan gösterimi için kullanılmıştır ve yazar bunu yanıltıcı bulur. Sayfa 271'de 'serial number' teriminin tarih bağlamında doğru olmadığı tartışılır."
  },
  {
    "en": "Serialization",
    "tr": "Serileştirme (Serialization)",
    "note": "Bir nesnenin durumunun, saklanabilir ya da iletilebilir bir biçime (ör. bayt akışı) dönüştürülmesi; Java'da Serializable arayüzü ve serialVersionUID değişkeniyle kontrol edilir. Sayfa 272'de serileştirme denetiminin (serialization control) elle mi otomatik mi olacağı tartışılır."
  },
  {
    "en": "Serialize / Deserialize",
    "tr": "serileştirmek / seri durumdan çözmek (serialize / deserialize)",
    "note": "Nesne durumunu bayt akışına dönüştürmek (serialize) ya da bayt akışından yeniden nesneye kurmak (deserialize); 'deserialize' için 'seri durumdan çözmek' kullanılmıştır. Sayfa 272 dipnotunda sürümler arası seri durumdan çözme (deserialize) beklentisi eleştirilir."
  },
  {
    "en": "Serializer",
    "tr": "Serileştirici (Serializer)",
    "note": "Nesneleri serileştirme (serialization) işlemini yürüten bileşen/mekanizma; sayfa 272'de serialVersionUID değişkeninin 'the serializer'ı denetlemek için kullanıldığı söylenir."
  },
  {
    "en": "Server",
    "tr": "Sunucu (Server)",
    "note": "İstemci/sunucu (client/server) kilit modellerinde kilitlenen ve paylaşılan nesneyi barındıran taraf; sayfa 185'te 'lock the server', 'Within the server' ve 'the original server cannot be changed' ifadelerinde geçer."
  },
  {
    "en": "Server-Based Locking",
    "tr": "Sunucu Tabanlı Kilit (Server-Based Locking)",
    "note": "Kilitleme sorumluluğunun sunucuya verilmesi: sunucu, tüm metotları tek seferde çağıran ve kendi kilidiyle çalıştırıcı birleşik bir metot sunar; istemci yalnızca o metodu çağırır. Sayfa 185'te üç düzeltme yolundan ikincisidir."
  },
  {
    "en": "ServerSocket",
    "tr": "ServerSocket (sunucu soketi)",
    "note": "Java'da bir portu dinleyen (listen) ve gelen istemci bağlantılarını kabul eden (accept) sunucu tarafı soket sınıfı; sunucunun hangi portta, hangi zaman aşımıyla (timeout) dinleyeceğini yönetir. Teknik sınıf adı olduğu için çevrilmez."
  },
  {
    "en": "Servlet",
    "tr": "Servlet",
    "note": "Java Web'de gelen istekleri asenkron işleyen bileşen; Web ya da EJB konteyneri tarafından yönetilir. Terim çevrilmez."
  },
  {
    "en": "Setter Method",
    "tr": "Set Metodu (Setter Method)",
    "note": "Bir özelliği dışarıdan atamaya yarayan metot; DI'da bağımlılıklar setter metotları ya da kurucu argümanlarıyla enjekte edilir (JavaBeans'teki Mutator ile aynı kavram)"
  },
  {
    "en": "Setup",
    "tr": "Kurulum (Setup)",
    "note": "FitNesse test sayfalarında testten önce çalıştırılan hazırlık sayfası/adımı"
  },
  {
    "en": "Shared State",
    "tr": "Paylaşılan Durum (Shared State)",
    "note": "Birden çok iş parçacığının erişip değiştirebildiği nesne/veriyi ifade eder; sayfadaki 'forcing clients to manage shared state' ifadesinde geçer. 'shared data' ile eş anlamlı kullanılır."
  },
  {
    "en": "Shotgun Approach",
    "tr": "Tüfek Yaklaşımı (Shotgun Approach)",
    "note": "Rastgele, hedefsiz uygulama biçimi; sayfa 189'da elle enstrümantasyonun 'It's a shotgun approach' ifadesinde geçer — kusurları bulup bulamayacağınızı bilemezsiniz, olasılıklar lehinize değildir."
  },
  {
    "en": "Side Effect",
    "tr": "Yan Etki (Side Effect)",
    "note": ""
  },
  {
    "en": "Sieve",
    "tr": "Eleme (Sieve)",
    "note": "Asal sayıları bulmak için kullanılan algoritma (Eratosthenes Kalburu)"
  },
  {
    "en": "Signal",
    "tr": "Sinyal (Signal)",
    "note": "Eşzamanlı iş parçacıklarının birbirine 'devam edebilirsin' bilgisini iletmesi; sayfa 184'te 'signaling each other' ifadesinde geçer. Kavram kartında kuyruğun doluluk/boşluk bildirimi olarak kullanılır."
  },
  {
    "en": "Simple Code",
    "tr": "Basit Kod (Simple Code)",
    "note": "Beck'in kuralları: testler çalışır, tekrar yok, ifade gücü yüksek, varlıklar minimize"
  },
  {
    "en": "Simple Design",
    "tr": "Basit Tasarım (Simple Design)",
    "note": "Kent Beck'in [XPE] kaynağına dayanan dört kural: (1) tüm testleri çalıştırır, (2) tekrar (duplication) yok, (3) ifade gücü (expressiveness) yüksek, (4) sınıf ve metot sayısı minimal. Chapter 12'nin omurgası; bu sayfada 'the four rules of Simple Design' ifadesinde geçer."
  },
  {
    "en": "Single Responsibility",
    "tr": "Tek Sorumluluk (Single Responsibility)",
    "note": ""
  },
  {
    "en": "Single Responsibility Principle (SRP)",
    "tr": "Tek Sorumluluk İlkesi (SRP)",
    "note": "Bir sınıfın/fonksiyonun değişmesi için yalnızca bir nedeni olmalıdır ilkesi"
  },
  {
    "en": "Single-Entry, Single-Exit Rule",
    "tr": "Tek Giriş, Tek Çıkış Kuralı (Single-Entry, Single-Exit Rule)",
    "note": "Dijkstra'nın yapısal programlama disiplini: her fonksiyon ve blok yalnızca bir girişe ve bir çıkışa sahip olmalı"
  },
  {
    "en": "Singleton",
    "tr": "Tekil (Singleton)",
    "note": "Nesne oluşturmayı denetleyen ve sistem genelinde tek bir örneğin (instance) paylaşılmasını sağlayan tasarım deseni; bu sayfada ABSTRACT FACTORY ve DECORATOR desenleriyle birlikte, statik metotların tek bir fabrika örneğine yönlendirme yaptığı yapıda kullanılır."
  },
  {
    "en": "Snail's Pace",
    "tr": "Salyangoz Hızı (Snail's Pace)",
    "note": "Çok yavaş ilerleme metaforu"
  },
  {
    "en": "snapshot",
    "tr": "Anlık Görüntü (Snapshot)",
    "note": "Belirli bir andaki durumu gösteren görsel/kayıt; sayfa 334'te 'Figure A-1 shows a snapshot of 13 pages' ifadesinde geçer."
  },
  {
    "en": "Soak Test",
    "tr": "Süre Testi (Soak Test)",
    "note": "Eşzamanlı kodu üretime koymadan önce uzun süre, yük altında, birçok yapılandırmada çalıştırma pratiği; kavram kartında (soak-test-before-production) 30 dakikalık CI örneğiyle kullanıldı."
  },
  {
    "en": "Socket",
    "tr": "Soket (Socket)",
    "note": "Ağ iletişiminin uç noktası; sunucu istemci bağlantılarını bir sokette dinler (listen), istemci bağlanır ve istek gönderir. Sayfa 317'de 'listening on a socket' ifadesinde geçer."
  },
  {
    "en": "SocketException",
    "tr": "SocketException (soket istisnası)",
    "note": "java.net paketindeki, soket düzeyindeki hataları (ör. istemcinin bağlantıyı kesmesi) temsil eden istisna; örnekte beklenen bu durumu yoksayıp diğer istisnaların yığın izini (stack trace) göstermek için kullanılır. Teknik sınıf adı olduğu için çevrilmez."
  },
  {
    "en": "Software Craftsmanship",
    "tr": "Yazılım Zanaatı (Software Craftsmanship)",
    "note": ""
  },
  {
    "en": "Software Physics",
    "tr": "Yazılım Fiziği (Software Physics)",
    "note": "Terimi ilk kez [Kolence] kullanmıştır; yazılımın, yapı kaygılarını etkili biçimde ayırdığında kökten değişikliğin ekonomik olarak mümkün olduğu kendine özgü doğasını anlatır."
  },
  {
    "en": "Solution Domain",
    "tr": "Çözüm Alanı (Solution Domain)",
    "note": ""
  },
  {
    "en": "Source Code Control",
    "tr": "Kaynak Kodu Kontrolü (Source Code Control)",
    "note": "Kaynak kodu değişikliklerini ve sürümlerini saklayan sistem ('source code control system'); sayfa 68/69'da 'kaynak kodu kontrol sistemleri' olarak geçmişti."
  },
  {
    "en": "Source Code Control System",
    "tr": "Kaynak Kod Kontrol Sistemi (Source Code Control System)",
    "note": "Kaynak kodu sürümlü olarak saklayan sistem (CVS, SVN, Git); değişiklik geçmişi gibi bilgiler yorumlarda değil burada tutulur."
  },
  {
    "en": "Source File",
    "tr": "Kaynak Dosyası (Source File)",
    "note": "Programın kaynak kodunu içeren dosya"
  },
  {
    "en": "Special Case Object",
    "tr": "Özel Durum Nesnesi (Special Case Object)",
    "note": "Null yerine döndürülen, eksik durum için makul varsayılan davranışı kapsülleyen nesne (SPECIAL CASE deseni)"
  },
  {
    "en": "Special Case Pattern",
    "tr": "Özel Durum Deseni (Special Case Pattern)",
    "note": "Özel durumu kendisi ele alan bir sınıf/nesne döndürerek istemci kodu istisna yönetiminden kurtaran desen [Fowler]"
  },
  {
    "en": "Specification",
    "tr": "Spesifikasyon (Specification)",
    "note": "Biçimsel gereksinim tanımı"
  },
  {
    "en": "SPR Number",
    "tr": "SPR Numarası (SPR Number)",
    "note": "Software Problem Report (Yazılım Sorun Raporu) numarası; kurumsal ortamlarda hata kayıtlarını izlemek için kullanılır, C1 kuralına göre yorumlara yazılmaz."
  },
  {
    "en": "Spring Framework",
    "tr": "Spring Framework",
    "note": "Java için en bilinen DI kabını (container) sağlayan açık kaynaklı çerçeve; XML yapılandırma dosyasıyla bağlama (wiring) yapmayı destekler; Spring.NET adlı bir .NET sürümü de vardır"
  },
  {
    "en": "Spurious Failure",
    "tr": "Sahte Başarısızlık (Spurious Failure)",
    "note": "Bir sonraki çalıştırmada kendiliğinden geçen, tekrarlanamayan düzensiz test başarısızlığı; iş parçacıklı kodda olası eşzamanlılık sorunu adayı olarak ele alınmalıdır."
  },
  {
    "en": "Stack Backtrace",
    "tr": "Yığın İzi (Stack Backtrace)",
    "note": "Çağrı yığınının anlık görüntüsü; tek iş parçacıklı uygulamalarda tüm uygulamanın durumunu gösterir. Sözlükteki 'Stack Trace | Yığın İzi (Stack Trace)' ile tutarlıdır."
  },
  {
    "en": "Stack Trace",
    "tr": "Yığın İzi (Stack Trace)",
    "note": "İstisna anındaki çağrı zinciri; hatanın yerini gösterir ama başarısız işlemin amacını söylemez"
  },
  {
    "en": "Stakeholder",
    "tr": "Paydaş (Stakeholder)",
    "note": "Projeden etkilenen ya da projeyle çıkarı olan kişi/grup (müşteri, kullanıcı, sponsor vb.)"
  },
  {
    "en": "Stale Information",
    "tr": "Bayat/Eski Bilgi (Stale Information)",
    "note": "Güncellenmemiş, eskimiş bilgi birikimi; sayfa 184'te 'the accumulation of stale information' ifadesinde geçer."
  },
  {
    "en": "Standard Nomenclature",
    "tr": "Standart Adlandırma (Standard Nomenclature)",
    "note": "N3 sezgisel kuralının başlığı: isimlendirmede mevcut kural ve kullanımları (tasarım desenleri, dil gelenekleri, takımın kendi standardı) esas alma; 'Use Standard Nomenclature Where Possible' başlığında geçer."
  },
  {
    "en": "startover",
    "tr": "baştan başlama (startover)",
    "note": "Bir iş parçacığının, meşgul bir kaynağa rastladığında edindiği tüm kaynakları serbest bırakıp sürece sıfırdan yeniden başlaması; kilitlenmeyi (deadlock) kırma stratejilerinde geçer. Sayfa 338'de 'start over' fiili ve 'startovers' ismi biçiminde kullanılır."
  },
  {
    "en": "Startup Process",
    "tr": "Başlangıç Süreci (Startup Process)",
    "note": "Uygulama nesnelerinin oluşturulduğu ve bağımlılıkların birbirine bağlandığı süreç; çalışma zamanı mantığından ayrı tutulmalıdır"
  },
  {
    "en": "Starvation",
    "tr": "Açlık (Starvation)",
    "note": "Bir iş parçacığının ya da grubun aşırı uzun süre ya da sonsuza dek ilerlemesinin engellenmesi; sayfa 183'ün tanım tablosunda geçer."
  },
  {
    "en": "Static Import",
    "tr": "Statik İçe Aktarma (Static Import)",
    "note": "Java'da bir sınıfın statik (static) üyelerine sınıf adı kullanmadan erişmeyi sağlayan import bildirimi (ör. import static PayrollConstants.*;); J2 kuralında sabitlere miras yoluyla değil, doğrudan erişmek için önerilir."
  },
  {
    "en": "Static Initializer",
    "tr": "Statik Başlatıcı (Static Initializer)",
    "note": "Java'da bir sınıf yüklenirken bir kez çalışan başlatma bloğu"
  },
  {
    "en": "Static Method",
    "tr": "Statik Metot (Static Method)",
    "note": "Sınıfa ait olan, örnek (instance) gerektirmeyen ve doğrudan sınıf adıyla çağrılan metot; getMonthNames, isLeapYear ve lastDayOfMonth metotlarının DateUtil sınıfına taşınması bağlamında geçer."
  },
  {
    "en": "Static Variable",
    "tr": "Statik Değişken (Static Variable)",
    "note": "Sınıfa ait olan ve tüm örnekler arasında paylaşılan değişken; sayfa 283'te `dateFormatSymbols`'un DateUtil sınıfına taşınması bağlamında geçer."
  },
  {
    "en": "Status Value",
    "tr": "Durum Değeri (Status Value)",
    "note": "Bir öğenin mevcut durumunu temsil eden değer"
  },
  {
    "en": "Stepdown Rule",
    "tr": "Basamak Kuralı (Stepdown Rule)",
    "note": "Kodun üst seviyeden alt seviyeye \"aşağı doğru\" okunması prensibi"
  },
  {
    "en": "Story",
    "tr": "Hikaye (Story)",
    "note": "Çevik geliştirme (Agile) bağlamında, müşteriye değer katan küçük ve uygulanabilir işlev parçası; “bugünün hikayeleri” (today’s stories) ifadesi bu anlamdadır."
  },
  {
    "en": "Strategy Pattern",
    "tr": "Strateji Deseni (Strategy Pattern)",
    "note": "Bir algoritma ailesini tanımlayıp her birini kendi sınıfına kapsülleyen ve aralarında değiştirilebilir kılan tasarım deseni; tekrarı ortadan kaldırmanın yollarından biri olarak anılır, Şablon Metot (Template Method) ile birlikte geçer."
  },
  {
    "en": "string representation",
    "tr": "dizge gösterimi (string representation)",
    "note": "Bir nesnenin metin biçimindeki karşılığı; Java'da toString() metodu bu gösterimi sağlar. Listing B-1'de 'a string representation of the date' ifadesinde geçer — toString() günü '10-Şub-2007' gibi okunur bir dizgeye çevirir."
  },
  {
    "en": "StringBuffer",
    "tr": "StringBuffer",
    "note": "Java'da değiştirilebilir dizgi nesnesi"
  },
  {
    "en": "Struct",
    "tr": "Yapı (Struct)",
    "note": "Yalnızca veri alanları bulunan, davranışı olmayan veri yapısı"
  },
  {
    "en": "Structure over Convention",
    "tr": "Yapı, Kuraldan Üstündür (Structure over Convention)",
    "note": "G27 sezgisel kuralı: uyumu zorunlu kılan yapıların (ör. soyut metotlu üst sınıflar) gönüllü isimlendirme kurallarından (naming conventions) daha güçlü olduğunu ifade eder."
  },
  {
    "en": "Structured Programming",
    "tr": "Yapısal Programlama (Structured Programming)",
    "note": "Dijkstra'nın tek giriş / tek çıkış kuralları"
  },
  {
    "en": "Stub",
    "tr": "Geçici Gövde (Stub)",
    "note": "Gerçek gerçekleştirim yazılana kadar yer tutan, sahte değer döndüren asgari kod"
  },
  {
    "en": "Subclass",
    "tr": "Alt Sınıf (Subclass)",
    "note": "Bir sınıftan kalıtımla türetilen sınıf; OCP'de yeni işlevsellik mevcut kodu değiştirmeden alt sınıf ekleyerek katılır"
  },
  {
    "en": "Subprogram",
    "tr": "Alt Program (Subprogram)",
    "note": "Fortran/PL1 döneminde kullanılan program parçası"
  },
  {
    "en": "Subroutine",
    "tr": "Alt Rutin (Subroutine)",
    "note": "Programlamanın ilk günlerindeki alt program yapısı"
  },
  {
    "en": "Subscript",
    "tr": "Alt İndis (Subscript)",
    "note": "Dizi veya koleksiyondaki öğeye erişim indeksi"
  },
  {
    "en": "Subselect",
    "tr": "Alt Sorgu (Subselect)",
    "note": "Bir SQL select ifadesinin içine gömülü ikinci bir select sorgusu"
  },
  {
    "en": "Subsystem",
    "tr": "Alt Sistem (Subsystem)",
    "note": "Projenin kendi içindeki alt sistemi; N6'da proje ve/veya alt sistem adına göre yapılan kodlamaların dikkat dağıtıcı ve gereksiz olduğu söylenir."
  },
  {
    "en": "Successive Refinement",
    "tr": "Ardışık İyileştirme (Successive Refinement)",
    "note": "Chapter 14'ün başlığı ve omurgası: kodun büyük patama (big-bang) yeniden yazımı yerine küçük, testle doğrulanan ardışık adımlarla kademeli olarak iyileştirilmesi."
  },
  {
    "en": "Suffix",
    "tr": "Sonek (Suffix)",
    "note": "Bir şema öğesinin sonuna eklenen ve türünü belirleyen karakter (boş, *, #); sözlükteki 'Prefix' (önek) teriminin aynası. 'Schema Suffix Convention' kavram kartında kullanıldı."
  },
  {
    "en": "Suite",
    "tr": "Suite",
    "note": "Çevrilmez; FitNesse'de bir grup test sayfasını ifade eden yapı"
  },
  {
    "en": "Switch Statement",
    "tr": "Switch İfadesi (Switch Statement)",
    "note": "Bir değişkenin farklı değerlerine göre dallanma sağlayan kontrol yapısı"
  },
  {
    "en": "Synchronization",
    "tr": "Senkronizasyon (Synchronization)",
    "note": "Eşzamanlı erişimin kilitleme gibi mekanizmalarla koordine edilmesi; sayfadaki 'avoid synchronizing', 'synchronization requirements' ve 'synchronization problems' ifadelerinde geçer."
  },
  {
    "en": "Synchronized",
    "tr": "Senkronize (synchronized)",
    "note": "Java anahtar kelimesi; kod metninde `synchronized` olarak ters tırnakla gösterilir ve çevrilmez. Sayfa 181'de kritik bölgeyi korumak için kullanımı anlatılır."
  },
  {
    "en": "synchronized block",
    "tr": "Senkronize Blok (synchronized block)",
    "note": "`synchronized` anahtar sözcüğüyle korunan, aynı anda yalnızca bir iş parçacığının girebildiği kod parçası; mümkün olduğunca küçük tutulmalıdır. Sayfa 334'te 'we've kept the synchronized block very small' ifadesinde geçer."
  },
  {
    "en": "Synopsis",
    "tr": "Özet (Synopsis)",
    "note": "Gazete metaforunda ilk paragraf; kodda dosyanın tepesindeki üst seviye kavram ve algoritmalar"
  },
  {
    "en": "Synthesis Function",
    "tr": "Sentez Fonksiyonu (Synthesis Function)",
    "note": "Analiz sonuçlarından çıktıyı/karşılaştırma sonucunu bir araya getiren fonksiyon grubu; sayfa 265'te 'another group of synthesis functions' ifadesinde geçer."
  },
  {
    "en": "Table (constant array)",
    "tr": "sabit tablosu (table)",
    "note": "Bu sayfada statik sabit diziler (int[]) biçimindeki veri tabloları (LAST_DAY_OF_MONTH, AGGREGATE_DAYS_TO_END_OF_PRECEDING_MONTH vb.); JCommon'da gün hesaplamaları için kullanılır ve enum'a dönüştürülme adaylarıdır."
  },
  {
    "en": "Table Lookup",
    "tr": "Tablo Araması (Table Lookup)",
    "note": "Bir sonucu hesaplamak yerine önceden sabitlenmiş bir tablodan okumak; sabit değer döndüren test stub'larının indirgendiği basit davranış"
  },
  {
    "en": "Talk to Friends, Not to Strangers",
    "tr": "Yabancılarla Değil, Arkadaşlarla Konuş (Talk to Friends, Not to Strangers)",
    "note": "Demeter Yasası'nın özlü ifadesi: metot yalnızca doğrudan tanıdığı nesnelerle konuşmalı, onların döndürdüğü nesnelerin metotlarını çağırmamalıdır"
  },
  {
    "en": "TANSTAAFL",
    "tr": "Bedava öğle yemeği diye bir şey yoktur (There Ain't No Such Thing As A Free Lunch)",
    "note": "Sayfa 339'da ölü kilidi önleme stratejilerinin hiçbirinin bedava olmadığı vurgusunda geçer; kısaltmanın açılımı dipnot 5'te verilir."
  },
  {
    "en": "Teardown",
    "tr": "Temizlik (Teardown)",
    "note": "FitNesse test sayfalarında testten sonra çalıştırılan temizlik sayfası/adımı"
  },
  {
    "en": "Technical Debt",
    "tr": "Teknik Borç (Technical Debt)",
    "note": "Hızlı çözümlerden kaynaklanan birikmiş kod sorunları"
  },
  {
    "en": "Template Method",
    "tr": "Şablon Metot (Template Method)",
    "note": "Ortak algoritma iskeletini üst sınıfta tanımlayıp değişen adımları alt sınıflara bırakan tasarım deseni [GOF]."
  },
  {
    "en": "TEMPLATE METHOD pattern",
    "tr": "ŞABLON METOT Deseni (TEMPLATE METHOD pattern)",
    "note": "Ortak algoritma iskeletini üst sınıfta tanımlayıp değişen adımları alt sınıflara bırakan tasarım deseni; bu sayfada büyük harflerle desen adı olarak geçer, sözlükteki 'Template Method | Şablon Metot (Template Method)' girdisiyle aynı kavramdır."
  },
  {
    "en": "Temporal Coupling",
    "tr": "Zamansal Bağımlılık (Temporal Coupling)",
    "note": "Fonksiyonun sadece belirli zamanlarda çağrılabilmesi sorunu"
  },
  {
    "en": "Temporaries",
    "tr": "geçici değişkenler (temporaries)",
    "note": "Fonksiyon içinde kısa süreli ara hesaplar için kullanılan yerel değişkenler; 'Hide your constants and your temporaries.' ifadesinde (sabitlerinizi ve geçici değişkenlerinizi gizleyin) geçer. Sözlükteki 'Explaining Temporary Variables' (Açıklayıcı Geçici Değişkenler) terimiyle ilişkilidir."
  },
  {
    "en": "temporary regression",
    "tr": "Geçici Gerileme (Temporary Regression)",
    "note": "Kaldırılmak üzere kısa süreliğine eklenen kod (ör. boş catch); kavram kartında testler yeşil kaldığı sürece güvenli geçiş adımı olarak ele alınır"
  },
  {
    "en": "Test",
    "tr": "Test",
    "note": "Çevrilmez"
  },
  {
    "en": "Test Case",
    "tr": "Test Durumu (Test Case)",
    "note": "Bir test sınıfı içindeki tek bir senaryo: belirli bir girdinin beklenen davranışını denetler; 'Test' ve 'Unit Test' (Birim Testi) terimlerinden daha dar bir kavramdır."
  },
  {
    "en": "Test Coverage",
    "tr": "Test Kapsamı (Test Coverage)",
    "note": "Üretim kodunun testlerle çalıştırılan bölümünün oranı; yükseldikçe değişiklik yapma korkusu azalır"
  },
  {
    "en": "Test Double",
    "tr": "Test Çifti (Test Double)",
    "note": "Birim testinde gerçek bağımlılığın yerine geçen herhangi bir nesne için kapsayıcı terim; stub, fake, mock vb. varyantları kapsar"
  },
  {
    "en": "Test Drive",
    "tr": "test güdümlü geliştirmek (test drive)",
    "note": "Kitapta fiil olarak geçer: bir yapıyı (ör. mimariyi) testler aracılığıyla yönlendirerek geliştirmek; 'Test Driven Development' (Test Güdümlü Geliştirme) terimiyle aynı kökten gelir."
  },
  {
    "en": "Test Driven Development",
    "tr": "Test Güdümlü Geliştirme (Test Driven Development / TDD)",
    "note": "Önce test yaz, sonra kodu yaz disiplini"
  },
  {
    "en": "Test Jig",
    "tr": "Test Jig'i (Test Jig)",
    "note": "Kodu denetlenmesi istenen koşullar altında (ör. farklı sleep/yield rejimlerinde) çalıştırmak için kurulan test düzeneği; sayfa 189'da 'test jigs' ifadesinde geçer."
  },
  {
    "en": "Test Suite",
    "tr": "Test Paketi (Test Suite)",
    "note": "Bir sistemin otomatik testlerinin bütünü; üretim kodu değiştikçe onunla birlikte bakımı yapılmalıdır"
  },
  {
    "en": "Testable System",
    "tr": "Test Edilebilir Sistem (Testable System)",
    "note": "Kapsamlı biçimde test edilen ve testlerinin tümünü her zaman geçen sistem; test edilemeyen sistem doğrulanamaz ve asla devreye alınmamalıdır. Sayfa 172'de 'Simple Design Rule 1: Runs All the Tests' kesitinde geçer."
  },
  {
    "en": "Testing API",
    "tr": "Test API'si (Testing API)",
    "note": "Testlerin kullandığı, sistemin API'lerini saran özelleşmiş fonksiyon ve yardımcı araçlar kümesi; alana özgü test dilinin kendisi"
  },
  {
    "en": "Testing Framework",
    "tr": "Test Çerçevesi (Testing Framework)",
    "note": "Testlerin yazılmasını, çalıştırılmasını ve sonuçların doğrulanmasını sağlayan çerçeve (framework); bu sayfada geçirimin (throughput) doğrulanmasında 'through a testing framework' ifadesinde geçer."
  },
  {
    "en": "The Principle of Least Astonishment",
    "tr": "En Az Şaşkınlık İlkesi (The Principle of Least Astonishment)",
    "note": "'The Principle of Least Surprise' (En Az Şaşırtma İlkesi) teriminin eş anlamlı varyantı; dipnot 2'de geçer."
  },
  {
    "en": "Third-Party API",
    "tr": "Üçüncü Taraf API (Third-Party API)",
    "note": "Başka bir satıcı ya da ekip tarafından sağlanan API; sarmalanarak bağımlılık azaltılır"
  },
  {
    "en": "Third-Party Code",
    "tr": "Üçüncü Taraf Kod (Third-Party Code)",
    "note": "Satın alınan paketler, açık kaynak kütüphaneler ya da başka ekiplerin ürettiği, kontrolümüzde olmayan kod; sağlayıcı geniş uygulanabilirlik, kullanıcı ise odaklı bir arayüz ister (Bölüm 8)"
  },
  {
    "en": "Thread",
    "tr": "İş Parçacığı (Thread)",
    "note": "Bir süreç içinde diğer işlerle eşzamanlı yürütülebilen bağımsız çalışma birimi"
  },
  {
    "en": "Thread Management",
    "tr": "İş Parçacığı Yönetimi (Thread Management)",
    "note": "İş parçacıklarının oluşturulması, zamanlanması ve denetlenmesi gibi iş parçacığına özgü sorumlulukların bütünü; temiz eşzamanlılık için az sayıda, iyi denetlenen yerde toplanmalıdır. Sayfa 320'de 'thread management should be kept to a few, well-controlled places' ifadesinde geçer."
  },
  {
    "en": "Thread Pool",
    "tr": "İş Parçacığı Havuzu (Thread Pool)",
    "note": "Önceden oluşturulmuş, yeniden kullanılabilir iş parçacıkları kümesi; `Executor` çerçevesinin yürütmeyi yönettiği yapı. Bu sayfada 'using thread pools' ifadesinde geçer. Sözlükteki 'Resource Pool | Kaynak Havuzu (Resource Pool)' terimiyle ilişkilidir."
  },
  {
    "en": "Thread-Aware / Thread-Ignorant",
    "tr": "İş Parçacığından Haberdar / Habersiz (Thread-Aware / Thread-Ignorant)",
    "note": "Sistemi POJO'lara bölme stratejisindeki iki kod türü: eşzamanlılık mekanizmalarını bilen (thread-aware) kod ve iş parçacıkları hakkında hiçbir şey bilmeyen, saf iş mantığı taşıyan (thread-ignorant) kod. Sayfa 190'ın Sonuç kesitinde geçer; 'Thread-Safe' teriminden ayrıdır."
  },
  {
    "en": "Thread-Safe",
    "tr": "İş Parçacığına Güvenli (Thread-Safe)",
    "note": "Birden çok iş parçacığı tarafından eşzamanlı erişildiğinde güvenle kullanılabilen yapılar için sıfat; sayfadaki 'Thread-Safe Collections' başlığı ve 'thread-safe collections' maddesinde geçer."
  },
  {
    "en": "Threading Policy",
    "tr": "İş Parçacığı Politikası (Threading Policy)",
    "note": "Bir sunucunun gelen istekleri hangi iş parçacığı stratejisiyle işleyeceğini belirleyen kural/strateji; örneğin her istek için bir iş parçacığı (thread per request) açmak ya da bir Executor kullanmak. Sayfa 320'de 'The current policy is easy to implement' ifadesinde geçer."
  },
  {
    "en": "Three Laws of TDD",
    "tr": "TDD'nin Üç Yasası (Three Laws of TDD)",
    "note": "Robert C. Martin: başarısız bir birim testi yazmadan üretim kodu yazma; testin yalnızca başarısız olmaya yetecek kadarını yaz (derlenmemek de başarısızlıktır); yalnızca başarısız testi geçirecek kadar üretim kodu yaz"
  },
  {
    "en": "Throughput",
    "tr": "Geçirim (Throughput)",
    "note": "Birim zamanda işlenen iş/istek miktarı; sayfa 178'de 'geçirimi (throughput)' biçiminde kullanılmıştır."
  },
  {
    "en": "Tiger Team",
    "tr": "Kaplan Ekibi (Tiger Team)",
    "note": "En yetenekli geliştiricilerden oluşan ekip"
  },
  {
    "en": "time zone",
    "tr": "zaman dilimi (time zone)",
    "note": "Bir bölgede geçerli olan standart saat ayarı; bir anın (instant) hangi takvim gününe denk geldiğini belirlediği için tarih temsilinde önem taşır. Kod Javadoc'unda 'the date itself depending on the time-zone' ifadesinde geçer."
  },
  {
    "en": "Time-Sharing System",
    "tr": "Zaman Paylaşımlı Sistem (Time-Sharing System)",
    "note": "Birden çok kullanıcının/terminalin tek bir bilgisayarı dönüşümlü olarak paylaştığı eski işletim sistemi mimarisi; 'multi-terminal time-sharing system' ifadesinde geçer."
  },
  {
    "en": "TO Paragraph",
    "tr": "TO Paragrafı",
    "note": "Fonksiyonun ne yaptığını \"Bunu yapmak için (TO)...\" kalıbıyla anlatan cümle; LOGO dilindeki TO anahtar kelimesinden esinlenilmiştir"
  },
  {
    "en": "TODO",
    "tr": "TODO / Yapılacaklar (TODO)",
    "note": "Gelecek için bırakılan notlar ve hatırlatıcılar"
  },
  {
    "en": "Tolerate the Failure",
    "tr": "Başarısızlığa Katlanmak (Tolerate the Failure)",
    "note": "Üç düzeltme yolundan ilki (sayfa 330'da level-2 başlık): başarısızlığın zararsız olduğu durumlarda, kodu değiştirmek yerine hatayı yakalayıp yoksayma seçeneği; kitap bunu 'özensiz' (sloppy) bulur."
  },
  {
    "en": "Topological Sort (of Functions)",
    "tr": "Topolojik Sıralama (Topological Sort)",
    "note": "Fonksiyonları, her tanımı kullanıldığı yerin hemen ardına gelecek biçimde sıralama; sayfa 265'te 'They are topologically sorted' ifadesinde geçer."
  },
  {
    "en": "Touche",
    "tr": "Touche!",
    "note": "Fransızca 'vuruldum / yendin' ifadesi; eskrim (çarpışma) oyunundan gelen, rakibin vuruşunu kabul eden teslimiyet sözü. Sayfa 236'da tip-zincirinin (type-case) kaldırılmasıyla birlikte kullanılır."
  },
  {
    "en": "Train Wreck",
    "tr": "Tren Kazası (Train Wreck)",
    "note": "Birbirine noktayla bağlanmış çağrı zinciri; Demeter Yasası ihlalinin tipik görüntüsü"
  },
  {
    "en": "Transaction",
    "tr": "İşlem (Transaction)",
    "note": "Ya bütünüyle gerçekleşen ya da hiç gerçekleşmemiş sayılan iş birimi; try blokları buna benzetilir"
  },
  {
    "en": "Transactional Behavior",
    "tr": "İşlemsel Davranış (Transactional Behavior)",
    "note": "Bir işlemin (Transaction) bütünlüğünü yöneten davranış; EJB'de dağıtım betimleyicisinde bildirilir"
  },
  {
    "en": "Transformation",
    "tr": "Dönüşüm (Transformation)",
    "note": "Kodun bir halden başka bir hale davranışı koruyarak değiştirilmesi"
  },
  {
    "en": "Transitive Navigation",
    "tr": "Geçişli Gezinme (Transitive Navigation)",
    "note": "G36 sezgisel kuralı: bir modülün, iş birlikçilerinin iş birlikçilerini bilmesi (ör. a.getB().getC() gezinmesi); Demeter Yasası'nın (Law of Demeter) ihlal biçimidir."
  },
  {
    "en": "Trap Function",
    "tr": "Tuzak Fonksiyonu (Trap Function)",
    "note": "Belirli bir olayı (bu sayfada ön panel anahtarlarından birinin çevrilmesini) algılayan ve ardından ilgili denetimi yapan yardımcı fonksiyon; burada geçici çözüm (hack) olarak kullanılır."
  },
  {
    "en": "Triadic",
    "tr": "Üçlü (Triadic)",
    "note": "Üç argümanlı fonksiyon"
  },
  {
    "en": "Trial and Error",
    "tr": "Deneme-Yanılma (Trial and Error)",
    "note": "Uygun iş parçacığı dengesinin sistematik ölçümle değil deneysel tekrarlarla bulunması; bu sayfada 'trial an error' (yazım hatası) ifadesinde geçer."
  },
  {
    "en": "trivial",
    "tr": "önemsiz (trivial)",
    "note": "Çok basit, az uğraş gerektiren; bu sayfada `setBooleanArg` fonksiyonu için kullanılır ve taşınmaya ilk o hazırlanır"
  },
  {
    "en": "trivial operation",
    "tr": "önemsiz işlem (trivial operation)",
    "note": "Az çaba ve düşünme gerektiren, basit işlem; derlemenin (build) tek ve önemsiz bir işlem olması gerektiği ifadesinde geçer. Sözlükteki 'trivial' girdisiyle uyumludur."
  },
  {
    "en": "Trivial Test",
    "tr": "Önemsiz Test (Trivial Test)",
    "note": "T3 sezgisel kuralının konusu: yazması kolay ve belgeleme değeri, üretim maliyetinden yüksek olan testler; atlanmamalıdır. Sözlükteki 'trivial | önemsiz (trivial)' teriminin test bağlamındaki kullanımı."
  },
  {
    "en": "Tunable",
    "tr": "Ayarlanabilir (Tunable)",
    "note": "İş parçacığı sayısı gibi parametrelerin çalışma sırasında kolayca ayarlanabilir olması; bu sayfada 'Make Your Threaded Code Tunable' başlığında geçer."
  },
  {
    "en": "Tutorial: Full Code Examples",
    "tr": "Öğretici: Tam Kod Örnekleri",
    "note": "Appendix A: Concurrency II'nin tam kod örnekleri kesitinin başlığı; sayfa 343'te level-1 başlık olarak geçer. 'Sonuç (Conclusion)' kesitinden sonraki uygulamalı bölümü açar ve tamamı İngilizce kod listelerinden oluşur."
  },
  {
    "en": "Type System",
    "tr": "Tür Sistemi (Type System)",
    "note": ""
  },
  {
    "en": "Type-Case",
    "tr": "Tip-Zinciri (Type-Case)",
    "note": "Bir değerin türüne göre if/else veya switch ile dallanan kod bloğu; davranış polimorfizme (çok biçimliliğe) devredilerek kaldırılmalıdır. Sayfa 231'de setArgument içindeki 'horrible type-case' ifadesinde geçer."
  },
  {
    "en": "Ubiquitous Language",
    "tr": "Her Yerde Geçerli Dil (Ubiquitous Language)",
    "note": "Eric Evans'ın [DDD]'deki terimi: bir projenin tüm katılımcılarının (alan uzmanları ve geliştiriciler) ortaklaşa kullandığı, kodda da birebir geçerli olan ortak dil; sayfa 311'de 'a ubiquitous language for the project' ifadesinde geçer."
  },
  {
    "en": "Unambiguous Names",
    "tr": "Belirsizliğe Yer Bırakmayan İsimler (Unambiguous Names)",
    "note": "N4 sezgisel kuralının başlığı: isimlerin, fonksiyonun ya da değişkenin ne yaptığını belirsizliğe yer bırakmayacak biçimde anlatması gerektiğini söyler."
  },
  {
    "en": "Unchecked Exception",
    "tr": "Denetlenmeyen İstisna (Unchecked Exception)",
    "note": "Bildirilmesi zorunlu olmayan istisna (Java'da RuntimeException alt sınıfları)"
  },
  {
    "en": "Uncle Bob's Formatting Rules",
    "tr": "Uncle Bob'un Biçimlendirme Kuralları",
    "note": "Bölüm 5'te yazarın kişisel biçimlendirme kurallarını CodeAnalyzer.java örneğiyle gösterdiği alt başlık (sayfa 91 ve devamı)."
  },
  {
    "en": "Uninterruptable (atomic operation)",
    "tr": "Kesintiye Uğratılamaz (uninterruptable)",
    "note": "Atomik işlem (atomic operation) tanımında geçen özellik: başladıktan sonra başka bir iş parçacığı tarafından bölünemez. Java Bellek Modeli'ne (Java Memory Model) göre 32 bitlik atama kesintiye uğratılamazken, 64 bitlik atama iki 32 bitlik yazmaya bölündüğü için bu özelliği taşımaz."
  },
  {
    "en": "Unit Test",
    "tr": "Birim Testi (Unit Test)",
    "note": ""
  },
  {
    "en": "Unprofessional",
    "tr": "Profesyonel Olmayan (Unprofessional)",
    "note": "Mesleğin gerekliliklerini yerine getirmemek"
  },
  {
    "en": "User Story",
    "tr": "Kullanıcı Hikayesi (User Story)",
    "note": "Çevik (Agile) geliştirmede, müşteriye değer katan küçük ve uygulanabilir işlev parçası; sözlükteki 'Hikaye (Story)' terimiyle uyumludur."
  },
  {
    "en": "Utility Class",
    "tr": "Yardımcı Sınıf (Utility Class)",
    "note": "Birden çok sınıfın paylaştığı ortak private davranışı yalıtan küçük, odaklı sınıf; ör. Listing 10-10'daki Where ve ColumnList"
  },
  {
    "en": "Variable",
    "tr": "Değişken (Variable)",
    "note": ""
  },
  {
    "en": "Variable Declaration",
    "tr": "Değişken Tanımlaması (Variable Declaration)",
    "note": "Değişkenler kullanıldıkları yere mümkün olduğunca yakın tanımlanmalıdır"
  },
  {
    "en": "Vertical Density",
    "tr": "Dikey Yoğunluk (Vertical Density)",
    "note": "Sıkı ilişkili kod satırlarının dikey olarak bitişik yazılması; yakın ilişkiyi gösterir"
  },
  {
    "en": "Vertical Distance",
    "tr": "Dikey Mesafe (Vertical Distance)",
    "note": "Yakından ilişkili kavramlar arasındaki satır mesafesi; anlaşılabilirlik açısından birbirlerine ne kadar önemli olduklarını yansıtmalıdır"
  },
  {
    "en": "Vertical Formatting",
    "tr": "Dikey Biçimlendirme (Vertical Formatting)",
    "note": "Dosya uzunluğu, satır sırası ve dikey boşluk ile ilgili biçimlendirme"
  },
  {
    "en": "Vertical Openness",
    "tr": "Dikey Açıklık (Vertical Openness)",
    "note": "Kavramları birbirinden boş satırlarla ayırma; her satır grubu tam bir düşünceyi temsil eder"
  },
  {
    "en": "Vertical Ordering",
    "tr": "Dikey Sıralama (Vertical Ordering)",
    "note": "Çağrılan fonksiyonun çağıranın altında yer alması; kaynak dosya üst seviyeden alt seviyeye akar"
  },
  {
    "en": "Vertical Separation",
    "tr": "Dikey Ayrım (Vertical Separation)",
    "note": "Değişkenlerin ve fonksiyonların kullanıldıkları yere yakın tanımlanması: yerel değişkenler ilk kullanımın hemen üstünde, özel fonksiyonlar ilk çağrının hemen altında; G10 sezgisel kuralının konusu. Sözlükteki 'Dikey Mesafe (Vertical Distance)' terimiyle ilişkilidir."
  },
  {
    "en": "Virtualization",
    "tr": "Sanallaştırma (Virtualization)",
    "note": "Donanım, işletim sistemi gibi kaynakları yazılım katmanında soyutlayarak birden çok sanal ortamda paylaştırma; dünyanın büyük Web sitelerinin ölçeklenirken kullandığı altyapı tekniklerinden biri."
  },
  {
    "en": "Visitor Pattern",
    "tr": "Ziyaretçi Deseni (Visitor Pattern)",
    "note": ""
  },
  {
    "en": "Visual Cue",
    "tr": "Görsel İpucu (Visual Cue)",
    "note": "Okuyucunun gözüne yeni ve ayrı bir kavramın başladığını belirten işaret; ör. boş satır"
  },
  {
    "en": "volatile",
    "tr": "volatile (geçici/değişken değer)",
    "note": "Sayfa 344'te `volatile boolean keepProcessing` ifadesinde geçen Java anahtar sözcüğü: alanın, iş parçacıkları (threads) arasında en güncel değeriyle okunup yazılmasını garanti eder; önbellekte kalmış eski bir değerin okunmasını engeller. Anahtar sözcük olduğu için kodda olduğu gibi kalır, açıklaması parantez içinde verilir."
  },
  {
    "en": "Wading",
    "tr": "Çamura Batma (Wading)",
    "note": "Kötü kodda ilerlerken hissedilen zorluk metaforu"
  },
  {
    "en": "Ward's Principle",
    "tr": "Ward'ın İlkesi (Ward's Principle)",
    "note": "Ward Cunningham'ın temiz kod tanımı: her rutin, tam olarak beklediğiniz gibi çıkar"
  },
  {
    "en": "Warning of Consequences",
    "tr": "Sonuçlara Dair Uyarı (Warning of Consequences)",
    "note": "Belirli bir işlemin etkileri hakkında diğer programcıları uyaran yorum"
  },
  {
    "en": "weasel words",
    "tr": "kaypak sözcükler (weasel words)",
    "note": "Processor, Manager, Super gibi anlamı belirsiz bırakan, bir sınıfın gerçekte ne yaptığını gizleyen ve çoğu zaman fazla sorumluluk yığılmasına işaret eden isim bileşenleri."
  },
  {
    "en": "Week In Month (constant)",
    "tr": "Aydaki Hafta (Week In Month sabiti)",
    "note": "SerialDate'in bir ay içindeki haftayı belirten public static final int sabitleri: FIRST_WEEK_IN_MONTH = 1, SECOND_WEEK_IN_MONTH = 2, THIRD_WEEK_IN_MONTH = 3, FOURTH_WEEK_IN_MONTH = 4; ayın son haftası LAST_WEEK_IN_MONTH = 0 ile temsil edilir (Listing B-1)."
  },
  {
    "en": "weekday code",
    "tr": "hafta günü kodu (weekday code)",
    "note": "Haftanın günlerini temsil eden tamsayı kodu; SerialDate'in getDayOfWeek() ve isValidWeekdayCode gibi metotlarında geçer (bu sayfada getDayOfWeek() soyut metodu ve javadoc'u). 'Day-of-the-week relative constant' (Hafta Günü Göreli Sabiti) teriminden ayrıdır."
  },
  {
    "en": "Whim",
    "tr": "Keyfî (Whim)",
    "note": "'on a whim' = keyfî olarak, içinden geldiği anda; test paketinin anında ve istekle çalıştırılabilir olması TDD'nin güveninin temelidir. Sayfa 213'te 'run on a whim' ifadesinde geçer."
  },
  {
    "en": "Whole Picture",
    "tr": "tüm resim (whole picture)",
    "note": "Uzun bir yeniden düzenleme sırasında ya da ardından ayrıntılardan uzaklaşıp sınıfın/sistemin bütününe yeniden bakıp değerlendirmek; bu sayfada 'let’s look at the whole picture again' ifadesinde geçer. Sözlükteki 'Big Picture' (Büyük Resim) girdisinden ayrıdır: Big Picture genel sistem bakış açısıdır, Whole Picture ise mevcut bütüncül biçime atılan kontrol noktası niteliğindeki bakıştır."
  },
  {
    "en": "Wildcard Import",
    "tr": "Joker İmport (Wildcard Import)",
    "note": "J1 sezgisel kuralı: bir paketten iki ya da daha fazla sınıf kullanıldığında paketin tamamını (import package.*) içe aktaran import biçimi; özel (specific) importlardan farklı olarak gerçek bir bağımlılık (dependency) yaratmaz, paketi yalnızca arama yoluna (search path) ekler."
  },
  {
    "en": "Wiring",
    "tr": "Bağlama (Wiring)",
    "note": "Nesnelerin bağımlılıklarının kurularak uygulamanın bir araya getirilmesi işlemi"
  },
  {
    "en": "Work in Progress",
    "tr": "Tamamlanmamış Çalışma (Work in Progress)",
    "note": "Belirgin biçimde bitirilmemiş, üzerinde çalışma süren kod durumu; bu sayfada 'It's clearly a work in progress' ifadesinde geçer. Sözlükteki 'Rough Draft' (Kaba Taslak) terimiyle bağlantılıdır."
  },
  {
    "en": "Wrapper",
    "tr": "Sarmalayıcı (Wrapper)",
    "note": ""
  },
  {
    "en": "Writing Shy Code",
    "tr": "Utangaç Kod Yazmak (Writing Shy Code)",
    "note": "Pragmatik Programcılar'ın (The Pragmatic Programmers) Demeter Yasası için kullandığı ifade: modüller yalnızca doğrudan iş birlikçilerini (immediate collaborators) bilmeli, tüm sistemin gezinme haritasını bilmemelidir."
  },
  {
    "en": "zero based",
    "tr": "sıfır tabanlı (zero based)",
    "note": "Dizi ya da uzunluk değerlerinin 0'dan başlaması; karşıtı '1 based' (birden başlayan). Sayfa 261'de 'the suffixIndex variable is not zero based; it is 1 based' ifadesinde geçer; bir eksik/fazla (off-by-one) hatalarının kaynağıdır."
  }
];
