# Clean Code - Terim Sözlüğü (Glossary)

Bu dosya çeviri boyunca tutarlılık sağlamak için kullanılır.
Her yeni sayfa çevrildikten sonra, o sayfada geçen yeni teknik terimler buraya eklenir.
Çeviriye başlamadan önce bu dosya okunmalı ve mevcut terimler kullanılmalıdır.

## Terimler

| İngilizce Terim | Türkçe Karşılığı | Açıklama/Not |
|----------------|-----------------|-------------|
| @Ignore | @Ignore | T4 bağlamında: bir testin, belirsiz bir gereksinimle ilgili soruyu kaydetmek üzere çalıştırılmadan bırakılmasını sağlayan ek açıklama (annotation); test derlenebiliyorsa @Ignore, derlenemiyorsa yorum satırına alma (commented out) tercih edilir. Ek açıklama adı olduğu için çevrilmez. |
| Abstract Class | Soyut Sınıf (Abstract Class) | Yalnızca kavramı temsil eden, gerçekleştirim ayrıntısı taşımayan (ya da kısmen taşıyan) sınıf; istemciyi somut ayrıntılardan yalıtmak için arayüzlerle birlikte kullanılır |
| Abstract Factory | Soyut Fabrika (Abstract Factory) | Nesne oluşturma mantığını gizleyen tasarım deseni |
| Abstract Method | Soyut Metot (Abstract Method) | İçeriği üst sınıfta verilmeden, tüm türevlerin gerçekleştirmek zorunda olduğu metot; derleyici türevleri bu sözleşmeye uymaya zorlar. Sayfa 234'te set() metodu için kullanılır. |
| Abstraction | Soyutlama (Abstraction) |  |
| Acceptance Test | Kabul Testi (Acceptance Test) | Kullanıcı gereksinimlerini doğrulayan test |
| Access Policy | Erişim Politikası (Access Policy) | Bir arayüzün metotlarıyla verinin nasıl okunup değiştirilebileceğine dair dayattığı kurallar; ör. koordinatları ayrı oku, birlikte ayarla |
| Accessor | Erişimci (Accessor) | JavaBean standardında get metotları |
| Active Record | Aktif Kayıt (Active Record) | Veritabanı tablosunu doğrudan yansıtan, save/find gibi gezinme metotları olan özel DTO biçimi |
| Ad hoc | ad hoc (geçici/rastgele yazılmış) | Özel bir plana veya kalıba uymayan, ihtiyaç anında gelişigüzel yazılan kod |
| Adapted Server | Uyarlanmış Sunucu (Adapted Server) | Orijinal sunucunun değiştirilemediği durumlarda, kilitlemeyi kendisi yapan bir aracı (intermediary) katmanla sunucuyu sarmak; sunucu tabanlı kilitlemenin bir örneğidir. Sayfa 185'te üç düzeltme yolundan üçüncüsüdür. |
| Adapter Pattern | Adaptör Deseni (Adapter Pattern) | Uyumsuz bir arayüzü (ör. üçüncü taraf API) uygulamanın beklediği arayüze çeviren tasarım deseni; API değiştiğinde tek değişiklik noktası sağlar [GOF] |
| Address | Adres (Address) |  |
| Agile | Çevik (Agile) | Çevik yazılım geliştirme |
| Agility | Çeviklik (Agility) | Çevik (Agile) yazılım geliştirme pratiklerinin sağladığı, değişime hızla uyum sağlama yeteneği; istilacı (invasive) mimariler bunu tehdit eder. Sayfa 168'de 'çeviklik' olarak kullanılmıştır; sözlükteki 'Çevik (Agile)' terimiyle aynı kökten gelir. |
| Algorithm | algoritma (algorithm) | Belirli bir işi yapmak için izlenen adım dizisi; bu sayfada `Args` sınıfının şemayı (schema) ayrıştırma akışı. Sayfadaki 'the three different maps up at the top of the algorithm' ifadesinde geçer. |
| Ambiguity | Belirsizlik (Ambiguity) | T4 sezgisel kuralının başlığında geçer: gereksinimlerin (requirements) netleştirmediği davranış ayrıntısı; bu belirsizlik, yorum satırına alınmış ya da @Ignore ile yoksayılmış bir test aracılığıyla soru olarak ifade edilir. Sözlükteki 'Belirsizliğe Yer Bırakmayan İsimler (Unambiguous Names)' terimiyle ilişkilidir. |
| Amplification | Önem Belirtme (Amplification) | Önemsiz görünebilecek bir şeyin önemini vurgulayan yorum |
| Analysis Function | Analiz Fonksiyonu (Analysis Function) | Bir modülü, veriyi inceleyen/ayrıştıran fonksiyon grubu; sayfa 265'te 'a group of analysis functions' ifadesinde geçer. 'Synthesis Function' teriminin karşıtıdır. |
| Annotation | ek açıklama (annotation) | Java 5 ile gelen, sınıf, metot ve alanlara üstveri (metadata) ekleyen @ işaretli bildirimler; JPA gibi framework'ler bağlama (wiring) ve kalıcılık bilgisini bu ek açıklamalarla taşır. Kitapta 'Java 5 annotations' olarak geçer. |
| Anonymous Inner Class | Anonim İç Sınıf (Anonymous Inner Class) | Adı olmayan, tek kullanımlık iç sınıf; arayüzü ya da üst sınıfı doğrudan gerçekleştiren bir nesne bildirir. Sayfa 340'ta Listing A-2'nin 12–16. satırlarında, `ClassWithThreadingProblem`'ın tek örneğini kullanan `Runnable` için geçer. İçinden başvurulan yerel değişkenler final (ya da fiilen final) olmalıdır. |
| Application Container | Konteyner (Container) | EJB'de bean'leri barındıran ve yaşam döngüsünü yöneten uygulama sunucusu ortamı; sözlükteki 'Kap (Container)' veri yapısı kapsayıcısından farklıdır. Kitapta 'konteyner' olarak kullanılır |
| Argument | Argüman (Argument) | Fonksiyona geçirilen parametre |
| Argument List | Argüman Listesi (Argument List) | Değişken sayıda argüman alan fonksiyonlar (varargs) |
| Argument Object | Argüman Nesnesi (Argument Object) | Birden fazla argümanı bir sınıfa sarma tekniği |
| artifact | yapıt (artifact) | Derleme (build) sürecinin ürettiği ya da gerektirdiği dosya/ürün (ör. JAR, XML dosyası); bu sayfada 'other artifacts that the system requires' ifadesinde geçer. |
| Artificial Coupling | Yapay Bağımlılık (Artificial Coupling) | G13 sezgisel kuralı: doğrudan bir amaca hizmet etmeyen, iki modül arasındaki bağımlılık; genel enum'ların/statik fonksiyonların daha özel bir sınıfın içine konulmasıyla oluşur. |
| ASM | ASM (Java bytecode manipulation framework) | Java bayt kodu işleme/üretme çerçevesi; sayfa 189'da CGLIB ile birlikte programatik enstrümantasyon aracı olarak geçer. Teknik araç adı olduğu için İngilizce kalır. |
| Aspect | Görünüm (Aspect) | AOP'de belirli bir kaygıyı desteklemek için sistemin hangi noktalarında davranışın tutarlı biçimde değiştirileceğini belirten modüler yapı |
| Aspect Oriented Programming | Görünüm Yönelimli Programlama (AOP) | Tekrarı kaldırma stratejilerinden biri |
| AspectJ | AspectJ | Java'nın bir uzantısı olan, görünümleri (aspects) 'birinci sınıf' (first-class) yapılar olarak destekleyen tam donanımlı görünüm yönelimli programlama (AOP) dili. Ürün adı olarak İngilizce kalır. |
| Assembly Language | Assembly Dili (Assembly Language) | Makine koduna çok yakın, düşük seviyeli programlama dili |
| Assertion | Doğrulama İfadesi (Assertion) | Doğru olması gereken bir koşulu çalışma anında denetleyen ifade (assert); iyi bir belgelemedir ama null sorununu çözmez |
| Assignment Operator | Atama Operatörü (Assignment Operator) | Sağ taraftaki değeri sol taraftaki değişkene atayan operatör (=) |
| Assignment Statement | Atama İfadesi (Assignment Statement) | Bir değişkene değer atayan ifade |
| Assumption | Varsayım (Assumption) | Bir modülün, bağımlı olduğu modül hakkında koda hiçbir şekilde yansımayan kabulü; G22 kuralında 'mantıksal bağımlılık' (logical dependency) ile eş anlamlı kullanılır. 'make assumptions' = 'varsayımlarda bulunmak'. |
| Atomic Operation | Atomik İşlem (Atomic Operation) | Bölünemeyen, tek adımda bütün olarak gerçekleşen işlem; birlikte anlam taşıyan değerlerin tek çağrıyla ayarlanması |
| AtomicInteger | AtomicInteger | Java'nın java.util.concurrent.atomic paketindeki, atomik (bölünemez) işlemlerle artırılıp okunabilen tamsayı sınıfı; karşılıklı dışlama (mutual exclusion) gerektirmeden aynı anda kullanıma izin veren kaynak örneği. Sayfa 337'de eşzamanlı kullanıma izin veren kaynak örneği olarak geçer. Teknik sınıf adı olduğu için çevrilmez. |
| Attention to Detail | Detaylara Dikkat (Attention to Detail) | Temiz kodun temel özelliği |
| Author | Yazar (Author) |  |
| Autocomplete / Code Completion | Otomatik Kod Tamamlama (Autocomplete) | IDE'nin isim önerme özelliği |
| Automated Tool | Otomatik Araç (Automated Tool) | Biçimlendirme kurallarını geliştirici yerine uygulayan araç |
| Backpressure | Geri Baskı (Backpressure) | Sınırlı kuyruğun dolmasıyla hızlı tarafın (üreticinin) bloklayan put çağrısında bekleyerek otomatik yavaşlatılması; kavram kartı (bounded-queue-backpressure) için eklendi. |
| Bad Code | Kötü Kod (Bad Code) | Bakımı zor, okunması güç kod |
| Base Class | Üst Sınıf (Base Class) | Kalıtım hiyerarşisinde davranışın önce toplandığı kök sınıf; bu sayfada 'the ArgumentMarshaler base class' ifadesinde geçer. Sözlükteki 'Concrete Class' ve 'Abstract Class' terimlerinden ayrı, genel kavram. |
| Be Precise | Kesin Olun (Be Precise) | G26 sezgisel kuralı: kodda verilen her kararın (tür seçimi, null kontrolü, para birimi, eş zamanlılık) kesin ve belirsizlikten uzak olması gerektiğini söyler. |
| Bean | Bean | Private alanlarına getter ve setter ile erişilen veri sınıfı (JavaBean); terim çevrilmez |
| Beautiful Code | Güzel Kod (Beautiful Code) |  |
| Bibliography | Kaynakça (Bibliography) |  |
| Big Design Up Front (BDUF) | Baştan Büyük Tasarım (BDUF) | Hiçbir şey gerçekleştirmeden önce her şeyi baştan tasarlama uygulaması; önden tasarım (up-front design) gibi iyi bir uygulamayla karıştırılmamalıdır. Değişime uyum sağlamayı engellediği (önceki emeği bırakmanın psikolojik direnci) için zararlıdır. |
| Big Picture | Büyük Resim (Big Picture) | Sistemin ya da takımın genelini gören üst seviye bakış açısı |
| Boilerplate Code | Basmakalıp/Şablon Kod (Boilerplate Code) | Pek çok yerde aynı biçimde tekrarlanan, çoğunlukla kopyalanarak çoğaltılan kalıp kod |
| Bound Resource | Sınırlı Kaynak (Bound Resource) | Kapasitesi sınırlı, doluluk/boşluk durumunun sinyalle (signal) yönetilmesi gereken kaynak; sayfa 184'te üretici-tüketici deseni bağlamında 'a bound resource' ifadesinde geçer. |
| Bound Resources | Sınırlı Kaynaklar (Bound Resources) | Eşzamanlı ortamda kullanılan sabit boyutlu/sayılı kaynaklar (ör. veritabanı bağlantıları, sabit boyutlu tamponlar); sayfa 183'ün tanım tablosunda geçer. |
| Boundary | Sınır (Boundary) | Kendi kodumuzun kontrol etmediğimiz kodla (üçüncü taraf paket, açık kaynak ya da başka bir ekibin bileşeni) buluştuğu yer; Chapter 8'in konusu |
| Boundary Case | Sınır Durumu (Boundary Case) | Eşzamanlı kodda özellikle inatçı olan uç durumlar: örn. temiz biçimde kapanmak, bir döngünün yinelemesini tamamlamak. Sayfa 190'ın Sonuç kesitinde geçer; 'Boundary' (Sınır) ve 'Boundary Test' terimlerinden ayrı, daha genel bir kavramdır. |
| Boundary Condition | Sınır Koşulu (Boundary Condition) | Bir algoritmanın sınır değerlerinde geçerli olan koşul; G3 kuralına göre her sınır koşulu için test yazılmalıdır. 'Boundary Condition Error' (Sınır Koşulu Hatası) teriminden ayrı, daha genel kavramdır. |
| Boundary Condition Error | Sınır Koşulu Hatası (Boundary Condition Error) | [T5] ile işaretli hata türü: sınır değerlerdeki kapsayıcılık yanlışının (ör. > yerine >= olması gereken koşul) yol açtığı tipik hata. Sayfa 269'da getFollowingDayOfWeek metodundaki hata için geçer. |
| Boundary Interface | Sınır Arayüzü (Boundary Interface) | Sistemin sınırında üçüncü taraf kodla temas eden arayüz (ör. Map); kullanıldığı sınıfta ya da yakın sınıf ailesinde tutulmalı, public API'lerde dolaştırılmamalı |
| Boundary Test | Sınır Testi (Boundary Test) | Üçüncü taraf koda giden arayüzü üretim kodunun kullandığı şekilde çalıştıran testler; yeni sürümlere geçişi kolaylaştırır |
| Boy Scout Rule | İzci Kuralı (Boy Scout Rule) | Kamp alanını bulduğundan daha temiz bırak prensibi |
| Breaking Indentation | Girintiyi Bozma (Breaking Indentation) | Kısa if/while/fonksiyon bloklarını tek satıra sıkıştırarak girinti kuralının çiğnenmesi; kaçınılması gereken bir alışkanlık |
| Breakpoint | Kesme Noktası (Breakpoint) | Hata ayıklamada (debug) programın durdurulması için ayarlanan nokta; vurulan kesme noktalarına bakarak sistemin durumu belirlenebilir. |
| Broken Windows | Kırık Pencereler (Broken Windows) | Pragmatik Programcılar metaforu: bir kırık pencere tüm binayı çürütür |
| brute force | kaba kuvvet (brute force) | G23 bağlamında: durum için en doğru çözüm olmasa da bariz ve akla ilk gelen çözüm; çoğu switch kullanımının ardındaki neden. |
| Bucket Brigade | Kova Zinciri (Bucket Brigade) | G31 bağlamında: her fonksiyonun ürettiği sonucu bir sonraki fonksiyonun girdisi olarak aktardığı veri akışı deseni; fonksiyonların çağrılma sırasını görünür kılarak zamansal bağımlılığı (temporal coupling) açığa çıkarır. |
| Bug | Hata (Bug) | Sektörde "bug" olarak da kullanılır |
| Build | derleme (build) | Projeyi çalıştırılabilir ürüne dönüştüren süreç; bu sayfada tek adımlı, önemsiz (trivial) bir işlem olması gerektiği vurgulanır (E1). Sözlükteki 'derlemek (compile)' teriminden farklı, üst seviye bir kavramdır. Fiil olarak 'derlemek (build)'. |
| BUILD-OPERATE-CHECK | KUR-İŞLET-DENETLE (BUILD-OPERATE-CHECK) | Testi üç bölüme ayıran desen: test verisini kur, bu veri üzerinde işlem yap, işlemin beklenen sonucu verdiğini denetle; Arrange-Act-Assert olarak da bilinir (FitNesse kabul testi desenleri) |
| Business Logic | İş Mantığı (Business Logic) | Uygulamanın iş kurallarını (Business Rule) uygulayan mantık katmanı; sözlükteki 'İş Kuralı (Business Rule)' teriminden türetilmiştir. |
| Business Rule | İş Kuralı (Business Rule) | Uygulamanın alanına ait politika ve hesaplama mantığı; veri yapısına değil nesneye aittir |
| Byte-Code | Bayt Kodu (Byte-Code) | Derleyicinin ürettiği, JVM tarafından çalıştırılan orta düzey makine temsilinin kendisi; sözlükteki 'Byte-Code Manipulation' (Bayt Kodu İşleme) teriminden ayrıdır, yalnızca bayt kodu kavramıdır. |
| Byte-Code Manipulation | Bayt Kodu İşleme (Byte-Code Manipulation) | Derlenmiş sınıf dosyalarının bayt kodunun çalışma anında değiştirilmesi; arayüzü olmayan sınıfları vekillemek için CGLIB, ASM, Javassist gibi kütüphaneler kullanılır. |
| Caching | Önbellekleme (Caching) | Sık erişilen verilerin, tekrar hesaplama ya da veritabanı erişiminden kaçınmak için hızlı erişilen bellekte saklanması; çapraz kesim kaygısı (cross-cutting concern) örneği. |
| Callable | Callable (arayüz) | Java'da Runnable'a benzeyen ama sonuç döndürebilen ve istisna (exception) fırlatabilen arayüz; çok iş parçacıklı (multithreaded) çözümlerde yaygın bir ihtiyaçtır. Bu sayfada 'implement the Callable interface' ifadesinde geçer. Teknik arayüz adı olduğu için İngilizce kalır. |
| Callee | Çağrılan Fonksiyon (Callee) | Başka bir fonksiyon tarafından çağrılan fonksiyon |
| Caller | Çağıran Fonksiyon (Caller) | Başka bir fonksiyonu çağıran fonksiyon |
| Cardinality | Kardinalite (Cardinality) | Args vaka çalışmasında fiilen sağlanan argüman sayısını ifade eder; args.cardinality() metodu bu sayıyı döndürür. |
| Care | Önemseme (Care) | Zanaata ve koda duyulan özen |
| Case Study | Vaka Çalışması (Case Study) | Chapter 14'ün açılış alt başlığı ve konusu; gerçek bir modülün (komut satırı argümanı ayrıştırıcısı) adım adım yeniden düzenlenmesi üzerinden anlatılan örnek inceleme. |
| Case-Insensitive Comparison | büyük/küçük harfe duyarsız karşılaştırma (case-insensitive comparison) | equalsIgnoreCase gibi, metinleri harf büyüklüğünü dikkate almadan karşılaştıran işlem; testWeekdayCodeToString testinin ve stringToMonthCode fonksiyonunun düzeltilmesinde geçer. |
| Casting | Tür Dönüştürme (Casting) | Bir değeri açıkça başka bir türe çevirme, ör. (Sensor) sensors.get(id); istemci koda dağıldığında kodu kirletir |
| CGLIB | CGLIB (Java Bytecode Generator Library) | Java bayt kodu üreten kütüphane; sayfa 189'da kodu programatik olarak enstrümanlamak için önerilen araçlardan biri. Teknik araç adı olduğu için İngilizce kalır. |
| Chain of Inheritance | Kalıtım Zinciri (Chain of Inheritance) | Bir sınıftan üst sınıflarına uzanan kalıtım hiyerarşisi |
| Change History | Değişiklik Geçmişi (Change History) | Dosyaya eklenen, kimin ne zaman hangi değişikliği yaptığını listeleyen kayıt; C1 kuralına göre sürüm kontrol sistemine aittir, yorumlara konmaz. |
| Check In | Teslim Etmek (Check In) | Kod ve test değişikliklerini sürüm kontrol sistemindeki depoya kaydetmek; commit ile benzer anlamda |
| Check Out | çekip almak (check out) | Kaynak kodu kontrol sisteminden (source code control) bir sürümü yerel çalışma kopyasınıza almak; 'check out a previous version' ifadesinde geçer. |
| Checked Exception | Denetlenen İstisna (Checked Exception) | Java'da metot imzasında throws ile bildirilmesi derleyici tarafından zorunlu tutulan istisna |
| Circular Wait | Döngüsel Bekleme (Circular Wait) | Kilitlenmenin (deadlock) dört koşulundan sonuncusu: her iş parçacığının başka bir iş parçacığının tuttuğu kaynağı beklediği, 'ölümcül kucaklaşma' (deadly embrace) olarak da anılan döngü; sayfa 337'de T1/T2 ve R1/R2 örneğiyle açıklanır. |
| Clarification | Netleştirme (Clarification) | Karmaşık kütüphane çağrılarını veya dönüş değerlerini açıklayan yorum |
| Clarity | Açıklık (Clarity) | Kodun anlaşılırlığı |
| Class | Sınıf (Class) |  |
| Class Name | Sınıf İsmi (Class Name) |  |
| Class Size | Sınıf Boyutu (Class Size) | Bir sınıfın kapladığı satır/sorumluluk büyüklüğü |
| Clean Code | Temiz Kod (Clean Code) |  |
| Clean Test | Temiz Test (Clean Test) | Başlıca niteliği okunabilirlik olan test: açıklık, sadelik ve ifade yoğunluğu; az ifadeyle çok şey söyler |
| Client Code | İstemci Kod (Client Code) | Bir sınıfı, arayüzü ya da API'yi kullanan (çağıran) kod |
| Client-Based Locking | İstemci Tabanlı Kilit (Client-Based Locking) | Paylaşılan nesnedeki birden fazla senkronize metodu istemcinin çağırması gerektiğinde, kilitleme sorumluluğunun istemciye verilmesi: istemci ilk çağrıda sunucuyu kilitler ve kilidin kapsamı son metodu çağıran kodu da kapsar. Sayfa 185'te üç düzeltme yolundan ilkidir. |
| Client/Server | İstemci/Sunucu (Client/Server) | Bir tarafın (sunucu) hizmet sunduğu, diğer tarafın (istemci) bağlanıp istek gönderdiği mimari desen; sayfa 317'de 'client/server application' ifadesinde geçer. |
| Client/Server Nonthreaded | İstemci/Sunucu İş Parçacıksız (Client/Server Nonthreaded) | Sayfa 343'ün level-2 başlığı: istemci bağlantılarını tek bir iş parçacığında, sırayla işleyen sunucu modeli. 'Nonthreaded | İş Parçacıksız (Nonthreaded)' girdisiyle uyumludur. |
| Client/Server Using Threads | İstemci/Sunucu İş Parçacıklı (Client/Server Using Threads) | Sayfa 346'nın level-2 başlığı: istemci bağlantılarının her birinin kendi iş parçacığında (thread) işlendiği sunucu modeli; sözlükteki 'Client/Server Nonthreaded' (İstemci/Sunucu İş Parçacıksız) girdisinin iş parçacıklı karşılığı. |
| Closed Class | Kapalı Sınıf (Closed Class) | Açık Kapalı İlkesi (OCP) anlamında değişikliğe kapalı sınıf: yeni işlev, mevcut sınıfı düzenleyerek değil yeni bir alt sınıf ekleyerek kazandırılır (Listing 10-10) |
| Closing Brace | Kapatma Parantezi (Closing Brace) | Fonksiyon veya blok sonuna eklenen (artık gereksiz) yorum |
| Clutter | Karmaşa (Clutter) | Koda değer katmayan, yalnızca okumayı güçleştiren fazlalık; sayfa 276'da metot imzasına bir şey katmayan Javadoc'lar ve final anahtar sözcükleri için geçer. |
| Codd Normal Forms | Codd Normal Formları (Codd Normal Forms) | Codd'un veritabanı şemalarındaki tekrarı (duplication) ortadan kaldırmak için önerdiği normalleştirme (normalization) biçimleri; sözlükteki 'Normal Forms' (Normal Formlar) girdisiyle aynı kavram, bu sayfada 'Codd Normal Forms' olarak geçer. |
| Code Coverage | Kod Kapsamı (Code Coverage) | Üretim kodunun testlerle çalıştırılan bölümünün oranı; sayfa 284'te 'the code coverage in DayDate has decreased' ifadesinde geçer. Sözlükteki 'Test Coverage | Test Kapsamı (Test Coverage)' terimiyle yakın anlamlıdır. |
| Code Formatting | Kod Biçimlendirme (Code Formatting) | Kodun biçimini yöneten kuralların uygulanması; bir iletişim aracıdır |
| Code Rot | Kod Çürümesi (Code Rot) | Kötü kodun zamanla çürümesi, mayalanması ve ekibi aşağı çeken durdurulamaz bir yüke dönüşmesi; 'code rots' = 'kod çürür'. Sözlükteki 'Decay' (Çürüme) teriminin kod bağlamındaki karşılığı. |
| Code Smell | Kod Kokusu (Code Smell) | Koddaki potansiyel sorunların belirtisi |
| Code-Sense | Kod Duygusu (Code-Sense) | Temiz kodu kirli koddan ayırt etme ve düzeltme yetisi |
| Coding Standard | Kodlama Standardı (Coding Standard) | Bir takımın uyduğu biçimlendirme/kodlama kurallarının yazılı ya da örnek kod hâlindeki tanımı |
| Coding Style | Kodlama Biçemi (Coding Style) | Bir geliştirici ya da ekibin kodu yazarken izlediği tutarlı biçim alışkanlıkları |
| Cognitive Break | Bilişsel Kesinti (Cognitive Break) | Fonksiyon imzasını kontrol etme gerekliliği |
| Cohesion | Bütünlük (Cohesion) | Bir grup argümanın ya da elemanın birbiriyle ne kadar doğal biçimde ilişkili olduğu; ör. bir noktanın x ve y bileşenleri |
| Collapse (methods) | birleştirme (collapse) | İki benzer/ikiz metodu tek bir metoda indirgeme yeniden düzenlemesi (refactoring); sayfa 277'de iki getMonths fonksiyonunun tek fonksiyonda birleştirilmesinde geçer. |
| Collection Abstraction | Koleksiyon Soyutlama (Collection Abstraction) |  |
| Command Query Separation | Komut Sorgu Ayrımı (Command Query Separation) | Fonksiyonlar ya bir şey yapmalı ya da bir soruyu yanıtlamalı, ikisini birden değil |
| Command-Line Argument | Komut Satırı Argümanı (Command-Line Argument) | main fonksiyonuna dizgi dizisi olarak geçirilen ve ayrıştırılması gereken satır içi girdi; bu bölümde Args sınıfının konusu. 'Argument' ve 'Argument List' terimlerinden ayrı, dar bir kavramdır. |
| Command-Line Arguments | Komut Satırı Argümanları (Command-Line Arguments) | Komut satırından programa aktarılan girdi dizgileri; bu sayfada `Args` sınıfının ayrıştırdığı ana girdi. Sözlükteki 'Argument' (Argüman) teriminin komut satırı bağlamındaki kullanımıdır. |
| Commented-out Code | Yorum Satırına Alınmış Kod (Commented-out Code) | Silinmesi gereken, artık kullanılmayan kod blokları |
| Commit | Commit | Çevrilmez, olduğu gibi kullanılır |
| Commitment | Taahhüt (Commitment) |  |
| Committer | committer (commit hakkına sahip geliştirici) | Kaynak kodu deposuna doğrudan değişiklik yazma (commit) yetkisine sahip geliştirici; kitapta 'one of our committers' ifadesinde geçer. Sözlükteki 'Commit | Commit' terimiyle ilişkilidir. |
| Common Closure Principle | Ortak Kapanış İlkesi (Common Closure Principle) | Dipnot 7'de geçer: birlikte değişme nedeni paylaşan sınıfların aynı pakette/parçada toplanmasını öneren paketleme ilkesi [PPP]. |
| Communication Gap | İletişim Boşluğu (Communication Gap) | Alan kavramı ile onu gerçekleştiren kod arasındaki anlam kaybı/uzaklık; DSL'ler bu boşluğu en aza indirir |
| Compare and Swap (CAS) | Karşılaştır ve Değiştir (Compare and Swap — CAS) | Modern işlemcilerin sunduğu donanım işlemi: bir değeri beklenen eski değerle karşılaştır, eşleşiyorsa değiştir; eşleşmiyorsa yeniden dene. İyimser (optimistic) kilitlemenin donanım karşılığıdır. |
| Comparison Predicate | Karşılaştırma Yüklemi (Comparison Predicate) | İki nesne (ör. tarih) arasındaki ilişkiyi boolean döndüren ve cümle gibi okunan metot; SerialDate'in isOn, isBefore, isOnOrBefore, isAfter, isOnOrAfter soyut metotları buna örnektir. Sözlükteki 'Predicate | Yüklem (Predicate)' girdisinden (JavaBean is-metotları) ayrıdır; sıralama ilişkisi odaklıdır. |
| compile | derlemek (compile) | Glossary'deki 'Compiler | Derleyici (Compiler)'in fiil hâli; 'get this to compile' = 'bunun derlenmesi için'. |
| Compiler | Derleyici (Compiler) | Kaynak kodu makine koduna çeviren program |
| Compiler Warning | Derleyici Uyarısı (Compiler Warning) | Derleyicinin potansiyel sorunlara karşı ürettiği uyarı; G4 kuralına göre bunları kapatmak (ya da tümünü kapatmak) risklidir. |
| Completeness | Tamamlılık (Completeness) | Bir dizi test veya işlemin her olası durumu kapsaması; sayfa 239'da 'for completeness' ifadesinde geçer: eksik double argümanının testi yalnızca tamamlılık için yazılmıştır. |
| Component Oriented Programming | Bileşen Yönelimli Programlama (COP) | Tekrarı kaldırma stratejilerinden biri |
| Composed Method | Oluşturulmuş Metot (Composed Method) | Metodu küçük adımlara bölerek oluşturma |
| Compromise | Uzlaşma (Compromise) | Mükemmel çözüm yerine pratikte kabul edilen orta yol; bu sayfada hata mesajı biçimlendirmesinin ArgsException'ta tutulması bir uzlaşma olarak nitelendirilir. |
| Conceptual Affinity | Kavramsal Yakınlık (Conceptual Affinity) | Kod parçalarının kavramsal olarak birbirine yakın olması; doğrudan bağımlılık ya da benzer işlem yapma nedeniyle olabilir; yakınlık arttıkça dikey mesafe azalmalı |
| Concrete Class | Somut Sınıf (Concrete Class) | Gerçekleştirim ayrıntılarını (kodu) içeren sınıf; istemcinin doğrudan somut sınıfa bağımlı olması, ayrıntılar değiştiğinde risk yaratır |
| Concurrency | Eşzamanlılık (Concurrency) | Bölüm 13'ün açılış sayfası ve konusu: birden çok işin iş parçacıkları (threads) aracılığıyla aynı anda yürütülmesini sağlayan tasarım ve programlama disiplini. Sözlükteki 'Race Condition' (Yarış Durumu) terimiyle ilişkili ama ayrı bir kavramdır. |
| Concurrent Code | Eşzamanlı Kod (Concurrent Code) | Birden çok iş parçacığının (thread) aynı anda yürütüldüğü kod; 'Dependencies Between Methods Can Break Concurrent Code' başlığında geçer. 'Concurrency | Eşzamanlılık (Concurrency)' ve 'Concurrent Programming | Eşzamanlı Programlama' terimlerinin kod bağlamındaki kullanımıdır. |
| Concurrent Programming | Eşzamanlı Programlama (Concurrent Programming) | Birden çok iş parçacığının aynı anda yürütüldüğü programlama disiplini; sözlükteki 'Concurrency | Eşzamanlılık (Concurrency)' teriminin sıfat biçimi. Bu sayfada 'the case of concurrent programming' ifadesinde geçer. |
| Concurrent Update | Eşzamanlı Güncelleme (Concurrent Update) | Sayfa 342'nin Sonuç (Conclusion) kesitinde geçer: birden çok iş parçacığının paylaşılan bir durumu aynı anda güncellemesi; temiz senkronizasyon (synchronization) ve kilitleme (locking) disiplinleriyle önlenir. |
| Configurable Data | Yapılandırılabilir Veri (Configurable Data) | G35 sezgisel kuralı: yüksek soyutlama seviyesinde bilinen ve beklenen varsayılan/yapılandırma değerlerinin düşük seviyeli fonksiyonlara gömülmesi yerine, onlara argüman olarak aşağı aktarılması gerektiğini söyler. |
| Configuration File | Yapılandırma Dosyası (Configuration File) | Hangi nesnelerin birbirine bağlanacağı (wiring) gibi kurulum kararlarının koda gömülmek yerine dışarıda tutulduğu dosya; ör. Spring'in XML yapılandırma dosyası |
| Connection Strategy | Bağlantı Stratejisi (Connection Strategy) | Bir modemin bağlanma yöntemi (çevirme, sabit kablolama, USB anahtarı üzerinden vb.); sayfa 311'de 'any other kind of connection strategy' ifadesinde geçer. |
| Consistent Lexicon | Tutarlı Kelime Haznesi (Consistent Lexicon) | Kod tabanında tutarlı terimler kullanma prensibi |
| Constant | Sabit (Constant) | Programın çalışması boyunca değişmeyen, adlandırılmış değer; uygun soyutlama seviyesinde tutulmalıdır [G35] |
| Constants Interface | Sabit Arayüzü (Constants Interface) | Yalnızca sabitleri (constants) taşıyan ve istemcilerin bu sabitlere niteleme yapmadan erişmek için gerçekleştirdiği arayüz; MonthConstants bunun bir örneğidir. J2 sezgisel kuralı (sabitlerden kalıtım almayın — Don't Inherit Constants), sabitler arayüzü gerçekleştiren sınıfın genel API'sine (public API) sızdığı için bu deseni eleştirir. |
| Constructor | Kurucu (Constructor) | Bir nesne oluşturulurken çağrılan, ilklendirme yapan özel metot |
| Constructor Argument | kurucu argümanı | Bir nesnenin kurucusuna (constructor) geçirilen parametre; Abstract Factory bağlamında uygulama, kurulum ayrıntılarını bilmeden fabrika yöntemiyle uygulamaya özgü kurucu argümanları sağlayabilir |
| Container | Kap (Container) | Veri yapısı kapsayıcısı (List, Set, Map vb.) |
| Contention | Çekişme (Contention) | Birden çok iş parçacığının aynı kilit/kaynak için yarışması; sayfa 185'te 'increases contention and degrades performance' ifadesinde geçer. Kritik bölge büyüdükçe çekişme artar. |
| ConTest | ConTest | IBM tarafından geliştirilen, eşzamanlılık hatalarını yakalamak için thread scheduling'i programatik olarak kontrol eden test aracı; dipnot 18: http://www.alphaworks.ibm.com/tech/contest. Araç adı olduğu için çevrilmez. |
| Context | Bağlam (Context) | Kodun anlaşılması için gereken çevresel bilgi |
| Context Switch | Bağlam Değişimi (Context Switch) | Bir iş parçacığından diğerine geçerken yürütme biriminin (işlemci/sanal makine) bir iş parçacığının durumunu kaydedip diğerinin durumunu yüklediği geçiş; bu sayfada her adımdan önce T iş parçacığı arasında seçim yapan bağlam değişimi ve yolların rakam dizgeleriyle (1122, 1212, ...) temsil edilmesi bağlamında geçer. |
| Continuous Improvement | Sürekli İyileştirme (Continuous Improvement) |  |
| Continuous Integration | Sürekli Entegrasyon (Continuous Integration) | Kod değişikliklerini otomatik olarak derleyip test eden ve bu sayede testlerin sürekli çalıştırıldığı geliştirme uygulaması/ortamı; sayfa 341'de 'a continuous integration server starts running them soon' ifadesinde geçer. |
| Conundrum | İkilem (Conundrum) | Temiz kodun temel felsefesiyle ilgili zorluk |
| convention | kural (convention) | İki gösterim arasındaki dönüşümde, farklı hassasiyet (precision) yüzünden belirsiz kalan davranışı (ör. 'günün saati — time of day') sabitlemek için API'de yazılı olarak bildirilen uzlaşım; Listing B-1'deki toDate() Javadoc'unda ve sayfa 362 kavram kartlarında geçer. Sözlükteki 'Convention over Configuration' (yapılandırmadan çok kural) ve 'Naming Convention' (İsimlendirme Kuralı) terimlerinden ayrı, genel kavramdır. |
| Convention over Configuration | yapılandırmadan çok kural (convention over configuration) | Açıkça yapılandırılacak pek çok şey için akla uygun varsayılan davranışlar tanımlama ilkesi; açık 'bağlama' (wiring) mantığı miktarını azaltır. |
| Corner Case | Uç Durum (Corner Case) | Bir algoritmanın uç/uç değerlerinde ortaya çıkan özel durum; kitapta 'corner and boundary cases' ifadesinde geçer. 'Boundary Case' (Sınır Durumu) ile yakın anlamlıdır. |
| Cosmic Ray | Kozmik Işın (Cosmic Ray) | Tek seferlik, açıklanamayan başarısızlıklara uydurulan bahane; bu sayfada 'write off the failure as a cosmic ray' ifadesinde geçer. |
| CountDownLatch | CountDownLatch | Bir dizi olayın gerçekleşmesini bekleyip sonra tüm iş parçacıklarını serbest bırakan kilit; java.util.concurrent paketinde. Teknik sınıf adı olduğu için çevrilmez. |
| Coup de Grace | Nihai Darbe (Coup de Grace) | Fransızca 'nihai darbe' ifadesi; yeniden düzenlemede (refactoring) bir yapının (ör. tip-zinciri) son kullanımı taşındıktan sonra tek hamlede kaldırılma anını betimler. Sayfa 236'da 'the coup de grace' ifadesinde geçer. |
| Coupling | Bağımlılık (Coupling) | Bileşenlerin birbirine bağımlılığı |
| Coverage Map | Kapsam Haritası (Coverage Map) | Kod kapsamı (code coverage) aracının, sınıfın hangi bölgelerinin testlerce yürütüldüğünü/çalıştırılmadığını renklendirerek gösteren görselleştirmesi; yeniden düzenlemede riskli bölgeleri işaret eder. Sayfa 268'de 'yama yorganına (patchwork quilt) benzer' olarak betimlenir. |
| Coverage Tool | Kapsam Aracı (Coverage Tool) | T2 sezgisel kuralının konusu: test stratejisindeki boşlukları gösteren, kapsanan satırları yeşil, kapsanmayanları kırmızı işaretleyen araç; çoğu IDE'de yerleşiktir. Sözlükteki 'Kod Kapsamı (Code Coverage)' ve 'Test Kapsamı (Test Coverage)' terimleriyle ilişkilidir. |
| CPU utilization | CPU kullanımı (CPU utilization) | İşlemcinin gerçek iş yaparak geçirdiği sürenin toplam süreye oranı; kilitlenmeyi önleme stratejilerinin düşük ya da yüksek ve yararsız CPU kullanımı gibi etkileri sayfa 338'de karşılaştırılır. |
| Craft | Zanaat (Craft) | Programlamanın bir bilimden çok zanaat olduğuna dair 'programming is a craft' ifadesindeki sade terim; sayfa 200'de geçer. Sözlükteki 'Craftsmanship | Zanaat / Ustalık (Craftsmanship)' ve 'Software Craftsmanship | Yazılım Zanaatı (Software Craftsmanship)' girdilerinden ayrıdır. |
| Craftsmanship | Zanaat / Ustalık (Craftsmanship) | Yazılım zanaatı |
| Crawler | Tarayıcı (Crawler) | Sayfaları dolaşıp işleyen bileşen; FitNesse'de wiki sayfalarını ekleyip bulan nesne (crawler.addPage). Web tarayıcısı (browser) ile karıştırılmamalı |
| Crisp Abstraction | Keskin Soyutlama (Crisp Abstraction) | Grady Booch'un temiz kod tanımından; net ve öz soyutlama |
| Critical Section | Kritik Bölge (Critical Section) | Paylaşılan kaynağa erişim için iş parçacıklarının sırayla girmesi gereken kod bölümü; kavram kartlarında kullanıldı. |
| Cross Section | Kesit Alanı (Cross Section) | Bu sayfada 'have such a small cross section' ifadesinde geçer: bir eşzamanlılık (concurrency) sorununun, hangi koşullar altında ortaya çıkabileceğinin dar aralığı; kesit ne kadar küçükse sorun o kadar nadir görülür. |
| Cross-Cutting Concern | Çapraz Kesim Kaygısı (Cross-Cutting Concern) | Kalıcılık, güvenlik, işlem yönetimi gibi nesnelerin doğal sınırlarını keserek birçok modüle yayılan kaygı türü |
| Cross-Reference | Çapraz Başvuru (Cross-Reference) | Bir sezgisel kuralın (heuristic) metnin başka bir yerinde (ör. Ek C) nerede anıldığını gösteren bağlantı. |
| crufty | paslı/çürümüş (crufty) | Eski, köhne, ömrünü tamamladığı için temizlenmesi gereken kod için kullanılan sıfat; bu sayfada IntegerArgumentMarshaler'daki artık kullanılmayan metotlar için geçer. 'Dirty Code' (Kirli Kod) teriminden ayrıdır, eskilik/ömrünü tamamlama vurgusu taşır. |
| Culprit | Suçlu (culprit) | Bu sayfada hatalı kullanımın bulunduğu kod parçasının 'suçlu' olarak adlandırılması; 'the culprit' = 'suçlu (culprit)'. |
| Data Abstraction | Veri Soyutlama (Data Abstraction) | Verinin nasıl saklandığını değil ne anlama geldiğini dışarı açma |
| Data Access Object (DAO) | Veri Erişim Nesnesi (DAO) | Kalıcı depoya (ör. veritabanı) erişimi kapsülleyen, iş nesnesini depolama ayrıntılarından ayıran nesne; kitapta 'data accessor object (DAO)' olarak geçer. |
| Data Structure | Veri Yapısı (Data Structure) | Verisini açıkça gösteren, anlamlı davranışı olmayan yapı |
| Data Transfer Object (DTO) | Veri Aktarım Nesnesi (Data Transfer Object / DTO) | Public değişkenleri olan, fonksiyonu olmayan saf veri yapısı; veritabanı ve soket sınırlarında kullanılır |
| Data Type | Veri Türü (Data Type) | Bir değişkenin veya değerin türünü belirten kavram |
| Data/Object Anti-Symmetry | Veri/Nesne Karşı Simetrisi (Data/Object Anti-Symmetry) | Nesneler yeni türü, veri yapıları yeni işlemi kolaylaştırır |
| Database Connections | Veritabanı Bağlantıları (Database Connections) | Birden çok iş parçacığının aynı anda kullanamayacağı, doğası gereği iş parçacığına güvenli (thread safe) olmayan kaynaklar; sayfa 328'in 'İş Parçacığına Güvenli Olmayan Sınıflar' listesinde geçer. |
| date format | tarih biçimi (date format) | Tarihlerin temsil edildiği/okunduğu biçim; kod yorumunda 'this date format' ifadesinde geçer (MINIMUM_YEAR_SUPPORTED civarı). |
| date format symbols | tarih biçimi simgeleri (date format symbols) | java.text.DateFormatSymbols sınıfının temsil ettiği, ay ve gün adları gibi yerelleştirilmiş (localized) tarih biçimleme (formatting) öğeleri; SerialDate'in DATE_FORMAT_SYMBOLS sabitinde kullanılır. |
| Day-of-the-week relative constant | Hafta Günü Göreli Sabiti (Day-of-the-week Relative Constant) | PRECEDING / NEAREST / FOLLOWING sabitleri, bir hafta gününü sabit bir tarihe göreli olarak (önceki, en yakın, sonraki) belirtir; işaretli ofsetlerin (1, 0, -1) anlamını gizlemesi yerine çağrıyı düz metin gibi okutur (Listing B-1). |
| DBMS | DBMS (Veritabanı Yönetim Sistemi — Database Management System) | Database Management System; veritabanını yöneten yazılım. Kısaltma İngilizce kalır |
| Dead Code | Ölü Kod (Dead Code) | Çalıştırılmayan, artık kullanılmayan kod (ulaşılamayan if dalları, asla istisna fırlatmayan try'ların catch blokları, hiç çağrılmayan yardımcı metotlar); G9 sezgisel kuralının konusu. Tasarım değiştikçe güncellenmediği için çürür, silinmelidir. |
| Deadline | Son Teslim Tarihi (Deadline) | Projenin teslim edilmesi gereken tarih |
| Deadlock | Ölü Kilit (Deadlock) | Sayfa 179 listesinde 'concurrent update and deadlock' ifadesinde geçer; iş parçacıklarının birbirini sonsuza dek beklediği durum. |
| Deadly Embrace | Ölümcül Kucaklaşma (Deadly Embrace) | Döngüsel beklemeye (circular wait) verilen bir diğer ad: iki ya da daha çok iş parçacığının, her birinin diğerinin tuttuğu kaynağı beklediği, kilitlenme (deadlock) biçimi. Sayfa 337'de 'This is also referred to as the deadly embrace' ifadesinde geçer. |
| Decay | Çürüme (Decay) | Kırık pencereler metaforunda kodun giderek kötüleşmesi |
| Decentralized Management | Merkezi Olmayan Yönetim (Decentralized Management) | Modülerlik (Modularity) ve kaygıların ayrılması (Separation of Concerns) sayesinde, yeterince büyük bir sistemde yönetim ve karar verme sorumluluğunun tek bir kişiye değil alanlara/ekiplerine dağıtılması. |
| Decisive | Kararlı (Decisive) | Kodun tereddütsüz ve kesin olması |
| Declaration | Tanımlama (Declaration) | Bir değişkenin ya da üyenin adının ve türünün kodda bildirilmesi |
| Decorator (GoF pattern) | Süsleyici (Decorator) | GoF tasarım deseni: bir nesneyi aynı arayüzü taşıyan başka bir nesneyle sarmalayarak (wrap) davranışını saydam (transparent) biçimde genişletme; iç içe süsleyiciler 'Rus bebeği (Russian doll)' gibi katmanlanır. |
| Decoupling | Ayrıştırma (Decoupling) | Bileşenler arasındaki bağımlılığı (coupling) azaltma; bu şekilde ayrıştırılmış sistemler daha kolay test edilir, daha esnektir ve yeniden kullanımı teşvik eder |
| defactored | defactored (yeniden düzenleme yapılmamış) | Listing 15-3'ün başlığında geçer: modülün kasıtlı olarak yeniden düzenlenmemiş (refactoring uygulanmamış), yani daha kötü bırakılmış hâli; 'refactored' sözcüğünün zıt yönlü bir kelime oyunudur. |
| Default Constructor | Varsayılan Kurucu (Default Constructor) | Argüman almayan kurucu; log4j'de ConsoleAppender'ın varsayılan kurucusu nesneyi yapılandırılmamış bırakır |
| Degenerate Constructor | Yoz Kurucu (Degenerate Constructor) | Hiçbir iş yapmayan, derleyicinin kendiliğinden üreteceği boş kurucu; sayfa 276'da 'degenerate default constructor' ifadesinde geçer [G12]. |
| Delegation | Delege Etme (Delegation) | Sorumluluğu başka bir nesneye devretme |
| Dependencies Between Methods | Metotlar Arasındaki Bağımlılıklar (Dependencies Between Methods) | Birbiri ardına çağrılması gereken metotların oluşturduğu sıra bağımlılığı; her metot tek başına iş parçacığına güvenli (thread-safe) olsa bile, çağrıların gruplandığı aralık korunmazsa eşzamanlı kod bozulabilir. Sayfa 329'un ana başlığı. |
| Dependency | Bağımlılık (Dependency) |  |
| Dependency Injection | Bağımlılık Enjeksiyonu (Dependency Injection) |  |
| Dependency Inversion Principle (DIP) | Bağımlılık Tersine Çevirme İlkesi (DIP) | Üst seviye modüller alt seviye modüllere değil, soyutlamalara bağımlı olmalı |
| Dependency Magnet | Bağımlılık Mıknatısı (Dependency Magnet) | Birçok sınıfın bağımlı olduğu merkezi yapı (ör. Error enum) |
| Dependent Functions | Bağımlı Fonksiyonlar (Dependent Functions) | Biri diğerini çağıran fonksiyonlar; dikey olarak yakın durmalı, çağıran çağrılanın üstünde olmalı |
| deploy | yerleştirmek (deploy) | Chapter 14 vaka çalışması jargonu: bir fonksiyonu/değişkeni üst sınıftan doğru alt sınıfa taşıma; glossary'deki 'Deployment Descriptor' (Dağıtım Betimleyicisi) ve 'Redeployment' (Yeniden Dağıtım) terimlerinden farklı bir anlam taşır. |
| Deploy (down) | yerleştirmek/deploy (deploy) | Ardışık iyileştirme (Successive Refinement) bağlamında bir fonksiyonu taban sınıftan alt sınıflara (ör. set'in BooleanArgumentMarshaller'a) doğru indirme/yerleştirme; sayfa 218'de get için de kullanılacak. |
| Deploying | Yerleştirme (Deploying) | Bu sayfadaki anlamda bir metodu/davranışı marshaler sınıfına taşıma; yazılım dağıtımı (deployment) anlamında değildir. |
| Deployment Descriptor | Dağıtım Betimleyicisi (Deployment Descriptor) | EJB'de kalıcılık, işlemsel davranış ve güvenlik gibi ayarları kaynak koddan bağımsız olarak bildiren XML dosyası |
| Deployment Platform | Dağıtım Platformu (Deployment Platform) | Yazılımın son kullanıcıya sunulduğu (deploy edildiği) hedef ortam/lar; sayfa 341'de 'target deployment platforms' ifadesinde geçer. Sözlükteki 'deploy | yerleştirmek' teriminden farklı, dağıtım anlamıdır. |
| Derivative | Türev (Derivative) | Kitaptaki kullanımda ArgumentMarshaler arayüzünü gerçekleştiren sınıflar (BooleanArgumentMarshaler, StringArgumentMarshaler vb.); matematiğin türev kavramıyla ilgisi yoktur. Sayfa 197'de 'what its derivatives do' ifadesinde geçer. |
| Derivatives | Türevler (Derivatives) | Soyut taban sınıftan kalıtımla türetilen alt sınıflar; sayfa 197-198'de 'derivatives' için 'türevler' kullanılmıştı, tutarlıdır. |
| Descriptive Names | Betimleyici İsimler (Descriptive Names) | Fonksiyonun ne yaptığını açıkça anlatan, gerekirse uzun tutulan isimlendirme ilkesi |
| Design Intent | Tasarım Amacı (Design Intent) | Sistemin amaçlanan mimari yapısı |
| Design Pattern | Tasarım Deseni (Design Pattern) |  |
| Design Patterns | Tasarım Desenleri (Design Patterns) | Gamma ve diğerleri (GoF) tarafından kataloglanan, yinelenen nesne yönelimli sorunlara yeniden kullanılabilir çözümler; kaynakçadaki [GOF] maddesinde geçer. |
| Dining Philosophers | Yemek Yiyen Filozoflar (Dining Philosophers) | Yuvarlak masada çatal (resource) için yarışan filozoflar (threads) metaforuyla kaynak yarışı; dikkat edilmezse ölü kilit (deadlock) ve canlı kilit (livelock) üretir; sayfa 184'te level-2 başlık. |
| Dirty Code | Kirli Kod (Dirty Code) | Temiz olmayan, bakımı zor kod |
| Dirty Tests | Kirli Testler (Dirty Tests) | Kalite standartları gözetilmeden “çabuk ve kirli” yazılmış testler; değiştirilmeleri zorlaşır ve zamanla bir yüke dönüşürler |
| Disinformation | Yanlış Bilgi (Disinformation) | İsimlerin okuyucuyu yanlış yönlendirmesi |
| Do One Thing | Tek Bir Şey Yap (Do One Thing) | Fonksiyonların tek bir işi yerine getirmesi ilkesi; Chapter 3'teki bölüm başlığı, G30 sezgisel kuralında yeniden anılır. |
| Documentation by Example | Örnekle Dokümantasyon (Documentation by Example) | Testlerin başlıca amaçlarından biri: testleri okuyan kişinin sınıfın ne işe yaradığını hızlıca anlaması; sayfa 175'te 'documentation by example' ifadesi olarak geçer. |
| Dogma | Dogma | Chapter 12 'Minimal Classes and Methods' kesitinde: her sınıfa arayüz dayatma ya da veri/davranışı zorla ayırma gibi bağlamdan kopuk, sorgulanamaz kurallar; kitapta 'pointless dogmatism' (anlamsız dogmatizm) ifadesiyle eleştirilir. |
| Dogmatism | Dogmatizm | Dogma kelimesinin hâl/kavram karşılığı; 'pointless dogmatism' = 'anlamsız dogmatizm'. 'Minimal Classes and Methods' kesitinde yüksek sınıf/metot sayılarının kaynağı olarak işaret edilir. |
| Domain Driven Design | Alan Odaklı Tasarım (Domain Driven Design) | Eric Evans'ın, kodun iş alanının dilini yansıtan bir alan modeli (domain model) etrafında kurulması gerektiğini savunan yaklaşımı; kaynakçadaki [DDD] maddesinde geçer. |
| Domain Expert | Alan Uzmanı (Domain Expert) | İş alanına (problem alanına) hakim uzman kişi |
| Domain Logic | alan mantığı (domain logic) | Uygulamanın iş alanına (domain) ait saf mantık; kalıcılık, güvenlik gibi mimari kaygılardan ayrıştırılmış POJO'larda tutulur. Sözlükteki 'İş Mantığı (Business Logic)' terimiyle yakın anlamlıdır. |
| Domain-Specific Language | Alana Özgü Dil (Domain-Specific Language) |  |
| Domain-Specific Testing Language | Alana Özgü Test Dili (Domain-Specific Testing Language) | Sistem API'lerinin üzerine kurulan, testleri yazmayı ve okumayı kolaylaştıran fonksiyon ve yardımcı araçlardan oluşan test dili; baştan tasarlanmaz, test kodunun yeniden düzenlenmesiyle gelişir |
| Don't Repeat Yourself (DRY) | Kendini Tekrar Etme (Don't Repeat Yourself / DRY) | Kod ve bilgi tekrarını en aza indirmeyi amaçlayan ilke; sayfa 48 başlığı |
| Don’t Inherit Constants | Sabitlerden Kalıtım Almayın (Don’t Inherit Constants) | J2 sezgisel kuralı: sabitleri erişmek için bir arayüze koyup o arayüzden kalıtım almak; dilin kapsam (scoping) kurallarını atlatan ve sabitleri hiyerarşinin tepesinde gizleyen kötü bir uygulama. |
| Double Dispatch | Çift Gönderim (Double Dispatch) | Çağrılacak metodu iki nesnenin türüne göre seçme tekniği |
| Driver Program | Sürücü Program (Driver Program) | Test edilen kodu çağırıp onunla elle etkileşim kurmayı sağlayan basit, çoğu zaman kullanılıp atılan yardımcı program |
| Dual Standard | Çifte Standart (Dual Standard) | Test kodunun üretim kodundan farklı mühendislik standartlarına tabi olması: basit, öz ve anlatımlı olmalı, ancak üretim kodu kadar verimli olması gerekmez |
| Due Diligence | Gerekli Özen (Due Diligence) | Bir konuda gereken dikkati gösterme, yükümlülüğünü eksiksiz yerine getirme; bu sayfada 'you’ve done due diligence' ifadesinde geçer: testler geçerse jiggle'lamayla gerekli özeni göstermiş sayılır. |
| Dummy Scope | Boş Kapsam (Dummy Scope) | While/for gövdesinin kasıtlı olarak boş bırakıldığı, dikkatli biçimlendirme (parantez + girinti) gerektiren yapı |
| Duplication | Tekrar (Duplication) | DRY ilkesi: Don't Repeat Yourself |
| Duplication of Implementation | Gerçekleştirim Tekrarı (Duplication of Implementation) | Aynı olgunun farklı mekanizmalarla (ör. bir boolean ve bir sayaç) iki kez saklanması; sayfa 173'te isEmpty/size örneğiyle işlenir. Sözlükteki 'Duplication | Tekrar (Duplication)' teriminden ayrı, daha dar bir kavramdır. |
| Dyadic | İkili (Dyadic) | İki argümanlı fonksiyon |
| Dynamic Proxy | Dinamik Vekil (Dynamic Proxy) | JDK'nın sağladığı, çalışma zamanında bir arayüz için vekil sınıfını otomatik üreten mekanizma; yalnızca arayüzlerle çalışır. |
| Efficiency | Verimlilik (Efficiency) | Kodun performans ve kaynak kullanımı açısından etkinliği |
| EJB (Enterprise JavaBeans) | EJB (Kurumsal JavaBeans) | Dağıtık kurumsal bileşenler için eski Java EE bileşen standardı; kitapta EJB1 ve EJB2 sürümleri geçer. Terim kısaltma olarak olduğu gibi kullanılır. |
| Elegant | Zarif (Elegant) | Hoş derecede zarif, şık ve basit kod |
| Embeddable / @Embedded | Gömülebilir / @Embedded | JPA'da bir sınıfın, sahibi olan varlığın (entity) veritabanı satırına 'gömülü' olarak saklanmasını sağlayan eşleme; @Embeddable sınıfı, @Embedded alanı işaretler. |
| Embedded System | Gömülü Sistem (Embedded System) | Daha büyük bir cihazın parçası olarak, çoğu zaman gerçek zamanlı kısıtlar altında belirli bir işi yapan bilgisayar sistemi |
| Emergent Design | Ortaya Çıkan Tasarım (Emergent Design) | Tasarımın baştan büyük bir planla değil, çalışma sırasında birkaç basit kurala uyularak adım adım ortaya çıkması kavramı; Chapter 12'nin açılış teması. Sayfada 'Getting Clean via Emergent Design' başlığı ve 'emergence of good designs' ifadesinde geçer. |
| Encapsulate Boundary Conditions | Sınır Koşullarını Kapsülleyin (Encapsulate Boundary Conditions) | G33 sezgisel kuralının başlığı: sınır koşullarının (boundary conditions) işlenmesini tek bir yerde toplayın ve +1/-1 gibi sınır aritmetiğinin koda yayılmasına izin vermeyin; 'nextLevel' örneğinde olduğu gibi adlandırılmış bir değişkenle kapsüllenmelidir. Sözlükteki 'Boundary Condition | Sınır Koşulu (Boundary Condition)' terimiyle ilişkilidir. |
| Encapsulate Conditionals | Koşulları Kapsülleyin (Encapsulate Conditionals) | G28 sezgisel kuralı: karmaşık boolean mantığını, koşulun amacını açıklayan bir fonksiyonun arkasına gizleme tekniği. |
| Encapsulation | Kapsülleme (Encapsulation) |  |
| Encoding | Kodlama (encoding) | N6 bağlamında: bir isme tür ya da kapsam bilgisini önek/sonek olarak kodlama uygulaması (ör. m_, f); günümüz ortamlarında gereksizdir. |
| Entity | Varlık (Entity) | Sınıf, metot, fonksiyon gibi yapı |
| Entity Bean | Entity Bean (Varlık Bean’i) | EJB2’de ilişkisel verinin (bir tablo satırının) bellek içi temsilini sağlayan kalıcı bileşen; kalıcılık, işlem ve iş API’sini tek sınıfta birleştirmesi organik büyümeyi engeller. |
| Enum | enum (sıralı sabit kümesi) | Java'da sabit bir değer kümesini tür güvenli (type-safe) biçimde temsil eden dil yapısı; Month ve WeekInMonth buna örnektir. Sayfa 272 ve 275'te olduğu gibi 'enum' olarak kullanılır. |
| Enumeration | Sayım (Enumeration) | Adlandırılmış bir değer/sabit kümesi; enum’lar adlandırılmış bir sayıma ait oldukları için anlamlarını kaybetmezler. Sözlükteki 'Enum | enum (sıralı sabit kümesi)' ve 'Enumerator | sayıcı (enumerator)' terimleriyle ilişkilidir. |
| Enumerator | sayıcı (enumerator) | Bir enum'ın (sıralı sabit kümesinin) tek tek değerleri; sayfa 272'de 'sayıcısı (enumerator)' olarak geçmiştir, bu sayfada da aynen kullanılır. |
| Environment | Ortam (Environment) | Chapter 17'de derleme (build) ve test çalıştırma deneyimini düzenleyen koşullar bütünü; E1/E2 sezgisel kurallarının kesit başlığı. |
| Error Code | Hata Kodu (Error Code) | Bir fonksiyonun başarı/hata durumunu bildirmek için döndürdüğü özel değer; istisnaların (exception) alternatifi |
| Error Flag | Hata Bayrağı (Error Flag) | Hata oluştuğunu belirtmek için ayarlanan ve çağıranın kontrol etmesi gereken değişken; istisnaların eski alternatifi |
| Error Handling | Hata Yönetimi (Error Handling) | Hataları yakalama ve işleme stratejisi |
| Error Processing | Hata İşleme (Error Processing) | Sayfa 238’de 'all the error processing works correctly' ifadesinde geçer; sözlükteki 'Error Handling | Hata Yönetimi' teriminin 'işleme' odaklı varyantıdır. Bu sayfada 'hata işleme' olarak çevrilmiştir. |
| Event (argument form) | Olay (Event) | Tek argümanlı fonksiyonların üçüncü ortak formu: bir girdi argümanı alır ama çıktı döndürmez, çağrının bir olay olarak yorumlanmasını ve sistemin durumunu değiştirmesini amaçlar. |
| Event Polling Loop | Olay Yoklama Döngüsü (Event Polling Loop) | Bir olayın meydana gelip gelmediğini sürekli kontrol ederek bekleyen döngü; bu sayfada tek iş parçacıklı (single-threaded) kodu hızlandırmanın sınırlı yollarından biri olarak geçer. |
| Exception | İstisna (Exception) | Hata yönetimi bağlamında |
| Exception Class | İstisna Sınıfı (Exception Class) | Hatayı temsil eden sınıf; en önemli ölçüt, çağıranın onu nasıl yakalayacağıdır |
| Exception Classification | İstisna Sınıflandırması (Exception Classification) | İstisnaların türlere ayrılma biçimi; Clean Code'a göre kaynağa değil, nasıl yakalandıklarına göre yapılmalı |
| Exception Management | İstisna Yönetimi (Exception Management) | İstisnaların (exception) akışını düzenleyen try/catch kod bloklarının bütünü; bu sayfada 'the ugly exception management code' ifadesinde geçer. Sözlükteki 'Error Handling | Hata Yönetimi (Error Handling)' terimiyle yakından ilişkili, istisna odaklı kullanımıdır. |
| Executable Statement | Çalıştırılabilir İfade (Executable Statement) | Kodda bir testin yürütebildiği, komut düzeyindeki çalıştırılabilir ifade; test kapsamı (test coverage) raporlarında kapsanan/yürütülen ifade sayısı olarak geçer. Sayfa 268'de SerialDate'in 185 çalıştırılabilir ifadesinden söz edilir. |
| Execution Path | Çalışma Yolu (Execution Path) | İş parçacıklarının izleyebileceği talimat sıralaması; bu sayfada 'possible execution paths' ve 'Possible Paths of Execution' başlığında geçer. Sözlükteki 'Normal Flow' (Normal Akış) teriminden farklıdır. |
| execution time | Yürütme Süresi (Execution Time) | Bir görevin ya da işlemin tamamlanması için geçen toplam süre; sayfa 334'te tek iş parçacığı için 'the total execution time is 1.5 seconds * N' ifadesinde geçer. |
| Executor Framework | İcracı Çerçevesi (Executor Framework) | Java 5'in java.util.concurrent paketinde; iş parçacığı yönetimini soyutlayarak görevleri (tasks) çalıştıran çerçeve. Sayfadaki 'Use the executor framework for executing unrelated tasks' maddesinde geçer. |
| Explaining Temporary Variables | Açıklayıcı Geçici Değişkenler (Explaining Temporary Variables) | Karmaşık bir ifadeyi, her biri hesaplamanın bir adımını kaydeden küçük ve iyi adlandırılmış yerel değişkenlere bölme tekniği; sayfa 279'da addMonths için [G19] işaretiyle geçer. |
| Explanation of Intent | Niyetin Açıklanması (Explanation of Intent) | Kodun neden o şekilde yazıldığını açıklayan yorum |
| Explanatory Variables | Açıklayıcı Değişkenler (Explanatory Variables) | G19 sezgisel kuralının başlığı: karmaşık hesaplamaları anlamlı (meaningful) isimli ara değerlere (intermediate values) bölerek okunabilirliği artırma tekniği. |
| Explicit | Açık (Explicit) | Bağlamın kodda doğrudan yer alması |
| Expressive | İfade Gücü (Expressive) | Chapter 12'nin koşu başlığı (running header) terimi; sözlükteki 'Expressiveness | İfade Gücü (Expressiveness)' teriminin sıfatı. Sayfa 175'te kesit başlığı olarak geçer. |
| Expressiveness | İfade Gücü (Expressiveness) | Kodun tasarım fikirlerini açıkça iletmesi |
| Extensibility | Genişletilebilirlik (Extensibility) | Kodun yeni yeteneklerle genişletilebilme kolaylığı |
| Extract Method | Metot Çıkarma (Extract Method) | Büyük bir metodu daha küçük parçalara bölme refactoring tekniği |
| extraneous | gereksiz/fazlalık (extraneous) | İşlevi bulunmayan, ortamda fazladan duran yapı; sayfa 262'de 'eliminate the extraneous if statements' ifadesinde geçer. |
| Extreme Programming (XP) | Aşırı Programlama (Extreme Programming) | Test güdümlü geliştirme ve çift programlama gibi pratikleri çekirdek uygulamalardan biri sayan çevik (Agile) yazılım geliştirme yaklaşımı; G5 kuralında Kent Beck'in 'Bir kez, ve yalnızca bir kez' ilkesiyle anılır. |
| F.I.R.S.T. | F.I.R.S.T. | Temiz testlerin beş özelliği: Hızlı (Fast), Bağımsız (Independent), Tekrarlanabilir (Repeatable), Kendini Doğrulayan (Self-Validating), Zamanında (Timely) |
| Factory Method | Fabrika Metodu (Factory Method) | Nesne oluşturma mantığını kapsülleyen metot |
| Failover | Hata Devri (Failover) | Bir bileşenin ya da sunucunun devre dışı kalması durumunda iş yükünün otomatik olarak yedek/başka bir bileşene aktarılması; çapraz kesim kaygısı (cross-cutting concern) örneği. |
| Fake | Sahte Nesne (Fake) | Testte gerçek bağımlılığın yerine geçen, basit ama çalışan gerçekleştirim; ör. FakeTransmitter |
| fallback | geri dönüş (fallback) | Asıl yol sonuç üretemediğinde denenmek üzere sıralı denemelerin içindeki ikincil yol; stringToMonthCode'ta tamsayı ayrıştırması başarısız olunca ay adlarında aramaya geçilmesi buna örnektir. |
| False Clue | Yanlış İpucu (False Clue) | Kodun anlamını bulanıklaştıran yanıltıcı isimler |
| Fault | Hata (fault) | Kusur/arıza; sayfa 330'da 'causes a fault' ifadesinde geçer — iş parçacığının yineleyicinin (iterator) sonunu aşıp istisna (exception) fırlatması durumu. 'Bug | Hata (Bug)' teriminden ayrı, daha dar kullanımı. |
| Feature | Özellik (Feature) |  |
| Feature Envy | Özellik Kıskançlığı (Feature Envy) | Bir fonksiyonun başka bir sınıfın verisiyle kendi sınıfınınkinden daha çok ilgilenmesi |
| Field | Alan (Field) | Bayt kodu (byte-code) bağlamında bir nesnenin sakladığı değer; PUTFIELD/GETFIELD talimatlarının yazıp okuduğu, paylaşıldığında eşzamanlılık sorunlarının kaynağı olan yapı. Sayfa 325'teki bayt kodu tablolarında 'the field value' ifadesinde geçer. |
| File Length | Dosya Uzunluğu (File Length) | Kaynak dosyanın satır sayısı; hedef ~200 satır, üst sınır 500 satır |
| File Size | Dosya Boyutu (File Size) | Kaynak dosyasının satır sayısı; Java'da sınıf boyutuyla yakından ilişkilidir |
| final | son sürüm (final) | Listing 15-5'in caption'ında '(final)' olarak geçer; '(interim)' (geçici sürüm) teriminin karşıtıdır ve yeniden düzenleme (refactoring) sürecinin son ürününü belirtir. |
| final keyword | final anahtar sözcüğü (final keyword) | Java'da değişkenin başvurusunun yeniden atanamayacağını bildiren anahtar sözcük; anonim iç sınıfların (anonymous inner class) yakaladığı yerel değişkenlerde zorunludur. Sayfa 340'ta 'we must use the final keyword' ifadesinde geçer. Sözlükteki 'final | son sürüm (final)' girdisinden (Listing caption'larındaki kullanım) farklıdır. |
| Finite State Machine | Sonlu Durum Makinesi (Finite State Machine) | Belirli bir anda yalnızca bir durumda (state) bulunabilen ve durumlara göre olaylara (events) tepki veren hesaplama modeli; türev (derivative) sayısının kesin olarak sabitlendiği ve üst sınıfın (base class) türevler arasında seçim yapan kod içerdiği tipik senaryo. Sayfa 291'de 'finite state machine implementations' ifadesinde geçer. |
| First Draft | İlk Taslak (First Draft) | Listing 14-8'in caption'ında 'Args.java (first draft)' ifadesinde geçer: ilk çalışan sürümün etiketi, sonraki taslakların başlangıç noktası. |
| First-Class Support | birinci sınıf destek (first-class support) | Bir dil ya da platformun bir kavramı, ayrı bir dil yapısı olarak doğrudan ve eksiksiz biçimde desteklemesi; kitapta görünümlerin (aspects) modülerlik yapıları olarak AspectJ'de birinci sınıf destek görmesi bağlamında geçer. |
| FitNesse | FitNesse | Açık kaynaklı test aracı (www.fitnesse.org) |
| Flag | Bayrak (Flag) | Boolean kontrol parametresi |
| Flag Argument | Bayrak Argümanı (Flag Argument) | Boolean parametre - fonksiyonun birden fazla şey yaptığını gösterir |
| Flexibility | Esneklik (Flexibility) | Kodun değişikliklere kolayca uyum sağlayabilmesi; birim testlerinin mümkün kıldığı -liklerden biri |
| Floating Point | Kayan Nokta (Floating Point) | Ondalıklı sayıların ikili gösterim biçimi; eşitlik karşılaştırmaları hassasiyet payı gerektirir (göreceli eşitlik) |
| Focused | Odaklanmış (Focused) | Temiz kodun tek amaca yönelik olması |
| Format String | Biçim Dizesi (Format String) | Beklenen komut satırı argümanlarını kompakt biçimde tanımlayan dize (ör. "l,p#,d*"); bu sayfada 'format, or schema, string' ifadesiyle geçer ve 'Schema' ile eş anlamlı kullanılır. |
| Formatting | Biçimlendirme (Formatting) | Kodun görsel yerleşimi: girinti, boşluk, satır uzunluğu, dikey ayrım |
| forward | yönlendirmek (forward) | Bir çağrıyı doğrudan başka nesneye/metoda aktarmak; bu sayfada `setBooleanArg`'ın görevinin `BooleanArgumentMarshaler`'a yönlendirmek olduğu söylenir |
| Frame | Yığın Çerçevesi (Frame) | Her metot çağrısı için oluşturulan çağrı yığını (call stack) kaydı; dönüş adresini (return address), metoda geçirilen parametreleri ve yerel değişkenleri barındırır. Sayfa 324'teki tanım listesinde geçer. |
| Front Panel Switch | Ön Panel Anahtarı (Front Panel Switch) | Eski ana bilgisayarların ön panelinde bulunan, elle çevrilebilen donanım anahtarları; bu sayfada hata ayıklama (debugging) amacıyla okunurlar. |
| Function | Fonksiyon (Function) |  |
| Function Call Dependency | Fonksiyon Çağrı Bağımlılığı (Function Call Dependency) | Bir fonksiyonun başka bir fonksiyonu çağırmasından doğan bağımlılık; aşağı yönü göstermelidir |
| Function Header | Fonksiyon Başlığı (Function Header) | Fonksiyonun başına eklenen açıklama bloğu |
| Function Sections | Fonksiyon Bölümleri (Function Sections) | Fonksiyon içinde ayrılmış bölümler (declarations, initializations vb.) |
| Functions Should Descend Only One Level of Abstraction | Fonksiyonlar Yalnızca Tek Bir Soyutlama Seviyesi İnmelidir (Functions Should Descend Only One Level of Abstraction) | G34 sezgisel kuralının başlığı: bir fonksiyonun içindeki tüm ifadeler aynı soyutlama seviyesinde (level of abstraction) yazılmalı; bu seviye, fonksiyonun adının tanımladığı işlemin bir seviye altında olmalıdır. Sözlükteki 'Level of Abstraction' (Soyutlama Seviyesi) ve 'Level of Detail' (Ayrıntı Seviyesi) terimleriyle ilişkilidir. |
| Future | Future (gelecekte tamamlanacak işlemin sonucu) | Eşzamanlı çalışan bir görevin henüz hazır olmayan sonucunu temsil eden, `java.util.concurrent` paketindeki yapı; get() sonuç hazır olana dek bekler. Bu sayfada 'It also supports futures' ve 'A future is handy when...' ifadelerinde geçer. Teknik terim olduğu için İngilizce kalır. |
| Garbage Collection | Çöp Toplama (Garbage Collection) | Artık ulaşılamayan nesneleri bellekten geri alan otomatik bellek yönetimi işlemi; sayfadaki 'garbage collection overhead' ifadesinde 'çöp toplama ek yükü' olarak geçer. |
| geek | inek (geek) | Teknolojiye derin bağlı, meraklı kişi için kullanılan argo/sıcak ifade; kitapta sıkışık uçak ortamında dizüstü bilgisayarlarını çıkarıp kod yazmaya başlayan Kent Beck ve Eric Gamma için kullanılır. |
| Generic | jenerik (generic) | Özel bir durum yerine genel anlamında sıfat; 'much more generic' = 'çok daha jenerik'. Sözlükteki 'Generics | Jenerik Türler (Generics)' (Java 5 dili özelliği) teriminden ayrı bir kullanımdır. |
| Generics | Jenerik Türler (Generics) | Java 5 ile gelen, sınıf ve koleksiyonların tür parametresi almasını sağlayan özellik (ör. Map<Sensor>); tür dönüştürme ihtiyacını azaltır |
| Given-When-Then | Given-When-Then | Testleri hazırlık (given), eylem (when) ve doğrulama (then) bölümlerine ayıran yaygın adlandırma kuralı; çevrilmez, olduğu gibi kullanılır. |
| Glitch | Arıza (Glitch) | Donanım kaynaklı kısa süreli geçici bozulma; bu sayfanın dipnotlarında 'Cosmic-rays, glitches, and so on.' ifadesinde geçer. |
| global ordering | küresel sıralama (global ordering) | Kilitlenmeyi önlemek için tüm iş parçacıklarının kaynakları aynı sırayla edinmesi konusunda anlaştığı, kaynaklar üzerinde tanımlanan toplam sıra; döngüsel beklemeyi (circular wait) koşulunu kırar. Sayfa 338'de geçer. |
| God class | Tanrı sınıfı (God class) | Aşırı sayıda public metot ve sorumluluk yükleyerek neredeyse tüm sistemi tek başına yöneten aşırı büyük sınıf; kötü sınıf tasarımının uç örneği. |
| Graceful Shutdown | Düzgün Kapanış (Graceful Shutdown) | Kaynakların sırayla ve güvenle serbest bırakılarak, ölü kilit veya asılı iş parçacığı kalmadan sistemin sonlandırılması; bu sayfada ana tema. |
| Gratuitous Context | Gereksiz Bağlam (Gratuitous Context) | Bir isme zaten içinde bulunduğu yapı tarafından sağlanan bağlamı tekrar eklemek |
| Green-field Project | Yeşil Alan Projesi (Green-field Project) | Sıfırdan başlanan proje |
| Half-Duplex | Yarı Çift Yönlü (Half-Duplex) | Bir iletişim hattının aynı anda yalnızca tek yönde veri taşıyabilmesi; '600bps half-duplex modems' ifadesinde geçer. |
| Happy Path | Mutlu Yol (Happy Path) | Hiçbir hatanın oluşmadığı, kodun normal akışta izlediği yol |
| Hard Wiring | Sabit Kablolama (Hard Wiring) | Modemlerin çevirme (dialling) yerine birbirine fiziksel olarak doğrudan bağlanması; sayfa 311'de 'hard wiring them together' ifadesinde geçer. |
| Hard-coded Dependency | Sabit Kodlanmış Bağımlılık (Hard-coded Dependency) | Bir sınıfın içinde doğrudan new ile oluşturulan ya da sabit yapılandırmayla gömülen bağımlılık; değiştirilmesi ve test edilmesi zordur, küçük Tek Sorumluluk İlkesi ihlaline yol açar |
| Headline | Manşet (Headline) | Gazete metaforunda dosyanın adı ve en üstteki üst seviye kod; okuyucuya dosyanın neyle ilgili olduğunu söyler |
| Heuristic | Sezgisel Kural (Heuristic) |  |
| Hidden Temporal Coupling | Gizli Zamansal Bağımlılık (Hidden Temporal Coupling) | Fonksiyonların hangi sırayla çağrılması gerektiğinin koddan anlaşılamadığı, gizlenmiş sıra bağımlılığı; G31 sezgisel kuralının konusu. Sözlükteki 'Temporal Coupling | Zamansal Bağımlılık (Temporal Coupling)' teriminin özel biçimidir. |
| Hiding Structure | Yapıyı Gizleme (Hiding Structure) | Nesnenin iç yapısını sormak yerine ondan iş yapmasını istemek |
| Hierarchy | Hiyerarşi (Hierarchy) | Kaynak dosyanın taslak benzeri iç içe yapısı; dosya, sınıf, metot ve blok seviyelerinden oluşur |
| High Availability | Yüksek Kullanılabilirlik (High Availability) | Bir sistemin kesintisiz biçimde erişilebilir ve kullanılabilir kalma yeteneği; büyük Web sitelerinin performansla birlikte hedeflediği özellik. |
| Hollerith Limit | Hollerith Sınırı (Hollerith Limit) | Delikli kartlardan kalma 80 karakterlik satır sınırı; bugün biraz keyfi kabul edilir |
| Horizontal Alignment | Yatay Hizalama (Horizontal Alignment) | Tanımlamalardaki isimleri ya da atamalardaki değerleri boşluklarla aynı sütuna dizme; yanlış şeyleri vurguladığı için önerilmez |
| Horizontal Formatting | Yatay Biçimlendirme (Horizontal Formatting) | Satır genişliği ve satır içi boşluklarla ilgili biçimlendirme; kısa satırlar tercih edilir (en fazla ~120 karakter) |
| Horizontal Openness and Density | Yatay Açıklık ve Yoğunluk (Horizontal Openness and Density) | İlişkili öğeleri bitişik yazma, zayıf ilişkili öğeleri yatay boşlukla ayırma |
| Horizontal White Space | Yatay Boşluk (Horizontal White Space) | Satır içindeki boşluklar; güçlü ilişkiyi birleştirmek, zayıf ilişkiyi ayırmak için kullanılır |
| Hourly Employee | Saatlik Ücretli Çalışan (Hourly Employee) | Saat başına ücretle çalışan personel; sayfadaki test veritabanında 'John Doe' bu rolü temsil eder. |
| Hungarian notation | Macar Notasyonu (Hungarian notation) | Değişken adının başına türünü kodlayan önekler ekleme geleneği (ör. iThsWkd, sName); Charles Simonyi'nin adını taşır ve niyeti kararttığı için günümüzde önerilmez. |
| Hybrid | Melez Yapı (Hybrid) | Hem anlamlı davranışı hem de açık durumu olan yarı nesne, yarı veri yapısı |
| if-else chain | if-else Zinciri (if-else chain) | Ardışık if/else if dallarıyla (tipik olarak instanceof ile) tür denetimi yapan kontrol yapısı; bu sayfada tamamen ortadan kaldırılmak istenen yapı, sayfa başlığı 'if-else Zincirinin Tasfiyesi' |
| Immutable | Değiştirilemez (Immutable) | Oluşturulduktan sonra durumu değiştirilemeyen nesne/koleksiyon; ör. Collections.emptyList() |
| Implementation | Gerçekleştirim (Implementation) | Bir arayüzün ya da soyutlamanın somut kod karşılığı; Bölüm 6'da veri soyutlama ve gizleme bağlamında sürekli geçer |
| Implementation Detail | Gerçekleştirim Ayrıntısı (Implementation Detail) | Bir sınıfın kullanıcılarının bilmesi ya da umursaması gerekmeyen iç tercih (ör. jenerik tür kullanılıp kullanılmadığı) |
| Implicity | Örtüklük (Implicity) | Bağlamın kodda açıkça belirtilmeme derecesi |
| Inappropriate Information | Uygunsuz Bilgi (Inappropriate Information) | C1 sezgisel kuralı: yorumlar, kaynak kod kontrol sistemi, sorun takip sistemi gibi başka sistemlere ait bilgileri barındırmamalıdır. |
| Inappropriate Static | Uygunsuz Statik (Inappropriate Static) | G18 sezgisel kuralının başlığı: çok biçimli (polymorphic) davranışa ihtiyaç duyabileceği için statik (static) yapılmaması gereken fonksiyonlarla ilgili. |
| Include Directive | Dahil Etme Yönergesi (Include Directive) | FitNesse'de sayfa dahil etme komutu |
| Inconsistency | Tutarsızlık (Inconsistency) | Benzer işlerin aynı şekilde yapılmaması, aynı tür yapılara farklı adlar verilmesi; G11 sezgisel kuralının konusu. 'En Az Şaşırtma İlkesi'nin (Principle of Least Surprise) ihlalidir. |
| incremental | kademeli (incremental) | Tek tek, küçük adımlarla ilerleme; sayfa 208'de 'I added the two argument types incrementally' ifadesinde geçer. |
| Incrementalism | Kademecilik (Incrementalism) | Kodun yapısının büyük patama (big-bang) yeniden yazımlar yerine küçük, testle doğrulanan kademeli adımlarla iyileştirilmesi yaklaşımı; bu sayfada 'On Incrementalism' alt kesitinin konusu. Sözlükteki 'Successive Refinement' (Ardışık İyileştirme) kavramıyla yakından ilgilidir. |
| Indent Level | Girinti Seviyesi (Indent Level) | Kod bloklarının iç içe geçme derinliği |
| Indentation | Girinti (Indentation) | Kod satırlarının hiyerarşideki konumlarına göre sağa kaydırılması; kapsam hiyerarşisini görünür kılar |
| Index | Dizin (Index) | Bir dizgideki ya da koleksiyondaki konum değeri; bu sayfada `prefixIndex` ve `suffixIndex` üye değişkenlerinin gerçekte birer dizin olduğu vurgulanır. Çoğulu 'indices' olarak geçer. |
| Infer | çıkarımda bulunmak (infer) | İyi adlandırılmış kodda bir fonksiyonun amacını/gerçekleştirimini gövdesine bakmadan anlayabilmek; sayfa 310'da 'you can infer' ifadesinde geçer. Sözlükteki 'Inferred Meaning / Anlam Çıkarımı (Inferred Meaning)' terimiyle ilişkilidir. |
| Inferred Meaning | Anlam Çıkarımı (Inferred Meaning) | İsimlerin yapıya yüklediği betimlemeden çıkarılan anlam; sayfa 310'da 'based on that inferred meaning' ifadesinde geçer. Sözlükteki 'Infer / çıkarımda bulunmak (infer)' ve 'Descriptive Names' terimleriyle ilişkilidir. |
| Informative Comment | Bilgilendirici Yorum (Informative Comment) | Kodun yapısı veya regex gibi karmaşık kısımlar hakkında bilgi veren yorum |
| Informed Decision | Bilinçli Karar (Informed Decision) | Mümkün olan en iyi ve en güncel bilgiyle verilen karar |
| Inheritance | Kalıtım (Inheritance) |  |
| Inline / Inlining | satır içi (inline) | Refactoring tekniği: küçük bir metot çağrısının yerine gövdesinin doğrudan çağrı noktasına yapıştırılması ve metotların kaldırılması. Sayfa başlığında 'Inlining Parse Methods', parçada 'I inlined the three parse methods' ifadesinde geçer; metinde 'satır içine (inline) aldım' biçiminde kullanılmıştır. |
| Inlining / Inline | Satır İçi Alma (Inlining) | Tek satırlık, tek çağrılı metotların gövdesini çağıran metot içinde doğrudan kullanma yeniden düzenleme (refactoring) tekniği; 'inline (a method)' = (bir metodu) satır içine almak. Sözlükte 'Inline'/'Inlining' girdisi yoktu; bu sayfada 'So I inlined them' ifadesinde geçer. |
| Instance | Örnek (Instance) | Bir sınıftan oluşturulmuş somut nesne; ör. PathParser.parse çağrısının döndürdüğü PagePath örneği |
| Instance Method | Örnek Metodu (Instance Method) | Bir sınıfın belirli bir örneği (instance) üzerinde, o örneğin alanlarına erişerek çalışan metot; sayfa 279'da addDays ve addMonths'un statik (static) yerine örnek metoduna dönüştürülmesi bağlamında geçer [G18]. |
| Instance Variable | Örnek Değişkeni (Instance Variable) | Bir sınıfın her nesnesinde ayrı ayrı tutulan üye değişken |
| instant in time | zamandaki an (instant in time) | java.util.Date'in temsil ettiği, milisaniye hassasiyetinde ve tarihin hangi gün sayılacağı saat dilimine (time zone) bağlı olan noktasal zaman; SerialDate'in yalnızca günü temsil etme amacıyla karşılaştırma yaptığı kavram. |
| Instantiation | Örnekleme (Instantiation) | Bir sınıftan nesne oluşturma işlemi; 'instantiate' = örneklemek. Tembel örnekleme (lazy instantiation) ile birlikte geçer |
| Instrumentation | Enstrümantasyon (Instrumentation) | Kodun içine, yalnızca test sırasında etkin olacak ölçüm/kesinti noktaları (ör. wait, sleep, yield, priority çağrıları) ekleme tekniği; nadir eşzamanlılık kusurlarını zorlayarak ortaya çıkarmak için kullanılır. Sayfa 188'de 'Instrument Your Code to Try and Force Failures' başlığı altında geçer. |
| integer | tamsayı (integer) | Tam sayı veri tipi; sayfa 208'de 'String and integer' ifadesinde argüman tipi olarak geçer. Sözlükteki 'Integer Handle' teriminden farklıdır. |
| Integer Argument | Tamsayı Argümanı (Integer Argument) | Komut satırında beklenen tipi int olan argüman; sayfadaki intArgs haritası, setIntArg ve getInt metotlarının konusu. Sözlükteki 'Argument' teriminin daraltılmış biçimidir. |
| Integer Handle | Tamsayı Tanıtıcısı (Integer Handle) |  |
| Integer Overflow | Tamsayı Taşması (Integer Overflow) | Bir tamsayı değişkeninin temsil edebileceği en büyük değeri aşması durumu; bu sayfada 'Ignore integer overflow' ifadesinde geçer ve örnekte kasıtlı olarak yok sayılır. |
| Integration | Entegrasyon (Integration) | Mevcut kodun bir parçasının yeni bir yapıya/metoda birleştirilmesi; bu sayfada 'integrate ... into the setArgument function' ifadesinde geçer: istisna yönetimi kodunun `setArgument` fonksiyonuna entegre edilmesi. Fiil biçimi 'entegre etmek' olarak çevrilir. |
| Intent | niyet (intent) | Yazarın küçük, testle doğrulanan adımlarla koda kazandırmak istediği yapısal niyet; bu sayfada 'you should be able to see my intent' ifadesinde geçer. 'Explanation of Intent' ve 'Intention-Revealing Names' terimlerinden ayrı, genel kavram. |
| Intention-Revealing Names | Niyet Belirten İsimler (Intention-Revealing Names) | Amacı açıkça ortaya koyan isimler |
| Interface | Arayüz (Interface) |  |
| Interference | Karışma (Interference) | Birden çok iş parçacığının paylaşılan bir duruma eşzamanlı erişip onu bozması; yarış durumu (race condition) riski. Sayfa 325'te 'there is no interference between multiple threads' ifadesinde geçer. |
| interim | geçici sürüm (interim) | Listing 15-4 başlığında (interim): yeniden düzenleme (refactoring) sürecindeki ara, beklenen-geçiş sürümünü belirtir; 'Listing 15-4 ComparisonCompactor.java (interim)' ifadesinde geçer. |
| Interleave | İç İçe Geçirmek (Interleave) | İki ya da daha çok iş parçacığının talimatlarının, tek bir yürütme dizisi içinde birbirine karıştırılarak sıralanması; bu sayfada 'the two threads to interleave the execution of these eight instructions' ifadesinde geçer ve kart karıştırma (shuffle) metaforuyla açıklanır. |
| Intermediate Value | Ara Değer (Intermediate Value) | Bir hesaplamanın akışında üretilen ve anlamlı bir isimle değişkende tutulan ara sonuç; 'açıklayıcı değişkenler' (explanatory variables) tekniğinin temel öğesidir. Sayfadaki 'well-named intermediate values' ifadesinde geçer. |
| Interpreter | Yorumlayıcı (Interpreter) | Kaynak kodu satır satır çalıştıran program |
| Intrinsic Lock | İçsel Kilit (Intrinsic Lock) | Her Java nesnesine gömülü olan kilit; `synchronized` blokları bu kilitle çalışır. Sayfa 182'de 'the intrinsic lock' ifadesinde geçer. |
| Invasiveness | istilacılık (invasiveness) | Bir çerçevenin (framework) gereksinimlerinin iş nesnesinin içine girerek onu kirletmesi; EJB2'nin sınıf ve arayüz dayatmasının yan etkisi. |
| Inversion of Control (IoC) | Kontrolün Tersine Çevrilmesi (Inversion of Control — IoC) | Bağımlılık yönetiminde kontrolün nesneden, bu amaca adanmış harici bir mekanizmaya (main, kap/container) devredilmesi ilkesi; Bağımlılık Enjeksiyonu (DI) bu ilkenin uygulanmasıdır |
| InvocationHandler | Çağrı İşleyici (InvocationHandler) | Java yansıma (reflection) API'sindeki arayüz; vekile yapılan her metot çağrısı, bu nesnenin invoke metodu aracılığıyla ele alınır. |
| Isomorph | İzomorf (Isomorph) | Yalnızca özdeş etiketlerin (ör. 1'lerin ya da 2'lerin) yer değiştirmesiyle elde edilen, dizgenin anlamını değiştirmeyen eşdeğer sıralama; bu sayfada her dizge için dört izomorf olduğu söylenir. Kopya (duplicate) kavramıyla doğrudan ilişkilidir. |
| Issue Tracking System | Sorun Takip Sistemi (Issue Tracking System) | Hata, görev ve istek kayıtlarının izlendiği sistem; kural C1'e göre bu tür bilgiler yorumlarda değil burada tutulur. |
| Iteration (test loop) | Yineleme (Iteration) | Testin belirli sayıda kez tekrarlanması; bu sayfada 'run for a number of iterations' maddesinde geçer. |
| Iterative Process | Yinelemeli Süreç (Iterative Process) | Sonuca tek seferde değil, tekrarlanan adımlarla ulaşan süreç; sayfa 265'te 'Refactoring is an iterative process' ifadesinde geçer. Sözlükteki 'Iteration (test loop) | Yineleme' terimiyle aynı köktendir. |
| iterator | Yineleyici (Iterator) | Bir koleksiyonda sırayla elemanlara erişen nesne (ör. Iterator<String>); bu sayfada currentArgument olarak üç set fonksiyonuna da geçirilir |
| jar file | jar dosyası (jar file) | Java arşiv dosyası: sıkıştırılmış biçimde tek dosyada paketlenmiş sınıf ve kaynaklar. Sayfa 291'de türevlerin ve üst sınıfların aynı ya da farklı jar dosyalarında birlikte/ayrı dağıtılabilmesi (deploy) bağlamında geçer. |
| Java Memory Model | Java Bellek Modeli (Java Memory Model) | Java'nın hangi okuma/yazma işlemlerini atomik (atomic) saydığını ve paylaşılan değişkenlerin iş parçacıkları arasında nasıl göründüğünü tanımlayan sözleşme; bu sayfada 'what the Java memory model considers to be atomic' ifadesinde geçer. |
| Javadoc | Javadoc | Java API dokümantasyon formatı |
| JDK | JDK (Java Development Kit) | Java Geliştirme Kiti; kısaltma olduğu gibi kullanılır (sözlükteki 'JVM' girdisine paralel). Sayfadaki 'became part of the JDK' ifadesinde geçer. |
| Jiggle | Titretme (Jiggle) | Kod içine eklenen enstrümantasyon noktalarında rastgele uyku/yerini verme/hiçbir şey yapma seçimleri yaparak iş parçacıklarının çalışma sıralamasını zorla değiştirme tekniği; 'jiggle' fiili 'jiggle'lamak (titretmek)' olarak, isim 'titretme (jiggle)' olarak çevrilir. Sayfa 188-190 (Automated instrumentation) bağlamında geçer. |
| JNDI | JNDI | Java Naming and Directory Interface; bir dizin sunucusundan (directory server) ada göre hizmet/nesne aramayı sağlayan Java API'si; DI'ın 'kısmi' bir gerçekleştirimi olarak kabul edilir |
| JobQueue | İş Kuyruğu (JobQueue) |  |
| Journal Comment | Günlük Yorumu (Journal Comment) | Modüldeki değişikliklerin kaydını tutan (artık gereksiz) yorum |
| JPA (Java Persistence API) | JPA (Java Kalıcılık API'si — Java Persistence API) | EJB3 ile birlikte ortaya çıkan, Java'da kalıcılığı (persistence) ek açıklamalar (annotations) ve XML üzerinden bildirimsel olarak yöneten standart API. |
| JUnit test runner | JUnit test çalıştırıcısı (JUnit test runner) | JUnit framework'ünde test sınıfını bulup metotlarını çalıştıran mekanizma; kod yorumundaki 'Returns a test suite for the JUnit test runner' ifadesinde geçer. |
| Just-in-Time | Tam Zamanında (Just-in-Time) | Kararların en güncel bilgiyle, en geç gerektiği anda alınması yaklaşımı |
| Just-In-Time Compiler | Tam Zamanında Derleyici (Just-In-Time Compiler) | JVM'nin bayt kodunu çalışma anında makine koduna çeviren bileşeni (JIT); bu sayfada üretilen bayt kodunun nasıl yürütüldüğünü anlamak için anahattır. Sözlükteki 'Just-in-Time' (karar alma yaklaşımı) teriminden farklı bir kavramdır. |
| JVM | JVM (Java Sanal Makinesi) | Java Virtual Machine; Java bayt kodunu çalıştıran sanal makine. Kitapta “ayrı JVM” (separate JVM), uzak arayüzün çalıştığı ayrı süreci ifade eder. |
| Keyword Form | Anahtar Kelime Formu (Keyword Form) | Argüman isimlerini fonksiyon adına kodlama tekniği |
| Language Bigot | Dil Bağnazı (Language Bigot) |  |
| Law of Demeter | Demeter Yasası (Law of Demeter) | Bir modül üzerinde çalıştığı nesnelerin iç yapısını bilmemelidir |
| Lazy Evaluation | Tembel Değerlendirme (Lazy Evaluation) | Bir değerin yalnızca gerçekten gerektiğinde hesaplanması; kitapta Lazy Initialization ile birlikte LAZY INITIALIZATION/EVALUATION kalıbı olarak geçer |
| Lazy Initialization | Tembel Başlatma (Lazy Initialization) | Nesne oluşturmayı ilk kullanıma erteleyen kalıp; ek yükü azaltsa da kurulum mantığını çalışma zamanı koduna karıştırabilir |
| leap year | artık yıl (leap year) | Şubat ayı 29 çeken, gün sayısı 366 olan yıl; SerialDate'in artık yıla özgü gün toplamı dizilerinde (LEAP_YEAR_AGGREGATE_DAYS_TO_END_OF_MONTH) geçer. Kod yorumlarında 'leap year' ve 'non leap year' (artık olmayan yıl) olarak kullanılır. |
| Learning Test | Öğrenme Testi (Learning Test) | Jim Newkirk'ün terimi: üçüncü taraf bir API'yi, uygulamada kullanılacağı şekilde çağırarak onu ne kadar anladığımızı sınayan kontrollü deney niteliğindeki test |
| LeBlanc's Law | LeBlanc Yasası (LeBlanc's Law) | "Sonra asla demektir" (Later equals never) |
| Legal Comment | Yasal Yorum (Legal Comment) | Telif hakkı, lisans gibi yasal zorunlulukları belirten yorum |
| Level of Abstraction | Soyutlama Seviyesi (Level of Abstraction) | Kodun genelden özele doğru soyutluk derecesi |
| Level of Abstraction (wrong level) | yanlış soyutlama seviyesi (wrong level of abstraction) | Bir adın/uygulamanın, olması gerekenden daha alt ya da üst bir soyutlama düzeyinde kalması; sayfa 271'de [N2] işaretiyle SerialDate adının gerçekleştirimi (implementation) ima ettiği, dolayısıyla yanlış soyutlama seviyesinde olduğu söylenir. |
| Level of Detail | Ayrıntı Seviyesi (Level of Detail) | Kodun ne kadar alt seviye ayrıntı (nokta, eğik çizgi, dosya uzantısı vb.) içerdiği; farklı ayrıntı seviyeleri aynı kodda karıştırılmamalıdır [G34][G6] |
| Lexicon | Sözlük (Lexicon) | Bir projedeki tutarlı terimler bütünü |
| Lifecycle Method | Yaşam Döngüsü Metodu (Lifecycle Method) | Konteynerin çağırdığı ejbCreate, ejbActivate, ejbLoad gibi, bir bileşenin yaşam döngüsünü yöneten metotlar. |
| Listing A-3 Server.java | Listing A-3 Server.java | Ek A'nın üçüncü kod listesinin level-3 başlığı; kod listesi etiketi (listing) olduğu için çevrilmez — sayfa 339'daki 'Listing A-2 ClassWithThreadingProblemTest.java' başlığıyla aynı kullanım. 'Listing N-N' caption'larıyla tutarlıdır. |
| Literate Programming | Okuryazar Programlama (Literate Programming) | Knuth'un kavramı: kod önce insanlar için yazılmalı |
| Livelock | Canlı Kilit (Livelock) | İş parçacıkları sürekli yeniden deneyip ilerleyemediğinde oluşan durum; ölü kilit (deadlock) ve açlık (starvation) ile birlikte sayfa 183'ün tanım tablosunda geçer. |
| Local Interface | Yerel Arayüz (Local Interface) | EJB'de aynı JVM içinden erişim için kullanılan istemci arayüzü. |
| Local Variable | Yerel Değişken (Local Variable) | Yalnızca tanımlandığı fonksiyon ya da blok içinde geçerli değişken |
| locale | yerel ayar (locale) | Dile ve bölgeye özgü biçimleme kuralları (tarih/saat biçimleri, ay ve gün adları); 'default locale' (varsayılan yerel ayar) ifadesiyle DateFormatSymbols'un ay adlarını hangi dile göre ürettiğini belirtir. Listing B-1 Javadoc'unda geçer. |
| Lock | Kilit (Lock) | Paylaşılan kaynağa aynı anda yalnız bir iş parçacığının erişmesini sağlayan mekanizma; sayfa 185'te 'lock the server', 'the lock’s extent' ve 'Locks are expensive' ifadelerinde geçer. Sözlükteki 'Deadlock' (Ölü Kilit) ve 'Intrinsic Lock' (İçsel Kilit) terimlerinden ayrı, genel kavramdır. |
| Lock & Wait | Kilitlen ve Bekle (Lock & Wait) | Kilitlenmenin (deadlock) dört koşulundan ikincisi: bir iş parçacığı bir kaynağı edindikten sonra, gereksinim duyduğu diğer kaynakların tümünü edininceye kadar onu bırakmaz. Sayfa 337'de tek tek açıklanır. |
| Lock-up | Kilitlenme (lock-up) | Bir sistemin/iş parçacığının ilerleyemeyecek biçimde takılıp kalması durumu; sayfadaki 'the frequency of the lock-ups' ifadesinde geçer. 'Deadlock | Ölü Kilit' teriminden ayrı, genel takılma durumudur. |
| Logical Dependency | Mantıksal Bağımlılık (Logical Dependency) | Kodun fiziksel yapısında görünmeyen, ama algoritmanın örtük olarak dayandığı varsayım/bağımlılık; sayfa 282'de getDayOfWeek algoritmasının 0. günün haftanın hangi günü olduğuna (başlangıç noktasına) bağımlı olması bağlamında geçer. 'Physical Dependency' (Fiziksel Bağımlılık) teriminin karşıtı olarak kullanılır. |
| Loop Control Variable | Döngü Kontrol Değişkeni (Loop Control Variable) | Döngünün yinelemesini yöneten değişken; genellikle döngü ifadesinin içinde tanımlanır |
| Lost Update | Kayıp Güncelleme (Lost Update) | Paylaşılan bir değeri oku-değiştir-yaz (read-modify-write) yapan iki iş parçacığının aynı değeri geri yazmasıyla bir güncellemenin sessizce yitirilmesi; sayfa 339'daki nextId++ hatasına yol açar. |
| Low-Level | Alt Seviye (Low-Level) | Ayrıntılara ve mekanizmaya yakın kod; üst seviye (high-level) kodun çağırdığı katman |
| Magic Number | Sihirli Sayı (Magic Number) | Kodda açıklamasız kullanılan sabit değer |
| Maintainability | Bakılabilirlik (Maintainability) | Kodun zaman içinde bakımının yapılabilme kolaylığı |
| Maintainer | Bakımcı (Maintainer) | Kodun bakımını üstlenen geliştirici; sözlükteki 'Maintainability | Bakılabilirlik' teriminin kişi karşılığı. Sayfa 175'te 'Other maintainers of the code' ifadesinde geçer. |
| Management | Yönetim (Management) |  |
| Mandated Comment | Zorunlu Yorum (Mandated Comment) | Şirket politikası veya kurallar gereği zorla eklenen yorum |
| Map | harita (map) | Anahtar-değer eşlemesi (java.util.Map, HashMap); bu sayfada tip başına ayrı üç harita, tek bir `marshalers` haritasına birleştirilir. Sözlükteki 'Table Lookup' (Tablo Araması) ve 'Container' (Kap) terimleriyle bağlantılıdır. |
| Marketer | Pazarlamacı (Marketer) |  |
| Marshaler | Argüman Hazırlayıcı (Marshaler) | Args uygulamasında ham token akımından bir argümanı hazırlayıp (consume) değerini kendi alanında tutan bileşen; set() metoduyla doldurulur, statik getValue() ile okunur. Sayfa 197'nin ana teması. |
| Marshalling | marshalling (serileştirme/tanzim) | Argüman değerini ilgili türün beklediği biçime çevirme/uyarlama davranışı (boolean, dizgi, tamsayı); bu sayfada 'marshalling behavior' ifadesinde ve 'Moving String Marshalling & Intent' başlığında geçer. |
| Master Repository | Ana Depo (Master Repository) | Merkezi, başvuru niteliğindeki veri deposu; bu sayfada MQ bağlantılarıyla erişilen paylaşılan kaynak. 'repository' için sürüm kontrol deposu (VCS) anlamının yanı sıra veri merkezi anlamı da taşır. |
| Matter-of-fact | Olgusal (Matter-of-fact) | Spekülatif olmayan, gerçeklere dayanan kod |
| Meaningful Distinctions | Anlamlı Ayrımlar (Meaningful Distinctions) | İsimlerin gerçekten farklı anlamlar taşıyacak şekilde farklılaştırılması |
| Meaningful Names | Anlamlı İsimler (Meaningful Names) | Niyet ifade eden değişken/fonksiyon isimleri |
| Member Variable | Üye Değişken (Member Variable) | Bir sınıfın her örneğine ait üye alan; sayfa 257'de 'the f prefix for the member variables' ifadesinde geçer. 'Instance Variable' (Örnek Değişkeni) ile aynı kavram. |
| Memory Leak | Bellek Sızıntısı (Memory Leak) | Programın artık kullanmadığı belleği serbest bırakamayıp zamanla tüketmesi; sayfa 330'da 'gece yarısı yeniden başlatarak temizlemek' metaforuyla eleştirilir. |
| Mental Burden | Zihinsel Yük (Mental Burden) | Kod okurken harcanan bilişsel çaba |
| Mental Mapping | Zihinsel Eşleştirme (Mental Mapping) | Bir ismin zihinsel olarak başka bir isme çevrilmesi süreci |
| Mental Reflection | Zihinsel Düşünme (Mental Reflection) | Proje hakkında derinlemesine düşünme, zihinsel değerlendirme |
| Mess | Karmaşa (Mess) | Dağınık, düzensiz kod |
| Messy Code | Dağınık Kod (Messy Code) |  |
| Metadata | Üstveri (Metadata) | Veriyi tanımlayan veri; ör. Sql sınıfına verilen tablo adı ve sütun bilgileri |
| Method | Metot (Method) |  |
| Method Chaining | Metot Zincirleme (Method Chaining) | Metot çağrılarını ardışık zincirleme |
| Method Interception | Metot Araya Girme (Method Interception) | AOP'yi gerçekleştirmek için kullanılan tekniklerden biri; bir framework'ün bir metot çağrısını yakalayıp, çağrıdan önce/sonra davranış eklemesi (günlükleme, işlem, güvenlik vb.). Sayfada dipnot 11'de 'wrapping' (sarmalama) ile birlikte anılır. |
| Method Name | Metot İsmi (Method Name) |  |
| method signature | Metot İmzası (Method Signature) | Metodu tanımlayan ad + parametre listesi; kavram kartında tüm türevlerde tek tipli imza kullanmak, if-else zincirini tek polimorfik çağrıya indirir |
| Minimal | Minimal (Minimal) | Mümkün olan en küçük, yalnızca gerekli olanı içeren |
| Minimal Classes and Methods | Küçük Sınıflar ve Metotlar | Chapter 12'nin (Jeff Langr) Basit Tasarım (Simple Design) kuralları arasındaki DÖRDÜNCÜ ve EN DÜŞÜK öncelikli kural: fonksiyon ve sınıf sayısını düşük tutma. Sayfa 176'da kesit başlığı olarak geçer. |
| Mis-type | Yanlış Yazım (Mis-type) |  |
| Misleading Comment | Yanıltıcı Yorum (Misleading Comment) | Kodun gerçekte yaptığından farklı bir şey söyleyen hatalı yorum |
| Misplaced Responsibility | Yanlış Yerleştirilmiş Sorumluluk (Misplaced Responsibility) | G17 sezgisel kuralı: kodun (sabit, fonksiyon vb.) nereye konacağı kararı; en az şaşırtma ilkesine (principle of least surprise) göre kod, okuyucunun doğal olarak bekleyeceği yere yerleştirilmelidir. Ör. PI sabiti trigonometrik fonksiyonların, OVERTIME_RATE ise HourlyPayCalculator sınıfının yanında olmalıdır. |
| Misspelling | Kasıtlı Yazım Hatası (Misspelling) | Derleyiciyi tatmin etmek için yapılan yanlış yazım (ör. klass) |
| Mnemonic | Anımsatıcı (Mnemonic) | JVM bayt kodu (byte-code) tablosunda ALOAD gibi talimat adlarının anımsatıcı karşılıkları; sayfa 324'teki tablonun 'Mnemonic' sütununda geçer. |
| Mock | Taklit (Mock) | Test sırasında gerçek bağımlılığın yerine geçen sahte uygulama; 'mock out' = taklit etmek |
| Mock Object | Taklit Nesne (Mock Object) | Test sırasında gerçek bağımlılığın davranışını taklit eden ve çağrı beklentilerini doğrulayan sahte nesne; sözlükteki Mock (Taklit) ile uyumludur |
| Modularity | Modülerlik (Modularity) | Sistemin bağımsız, yeniden kullanılabilir parçalara (modüllere) bölünmesi |
| Module | Modül (Module) |  |
| Monadic | Tekli (Monadic) | Bir argümanlı fonksiyon |
| Monolithic | Tek parça (monolithic) | Tek blok hâlinde, bölümlere ayrılmamış (yapı) anlamında sıfat; sayfadaki 'monolithic assembly language code' ifadesinde geçer. |
| Monte Carlo Testing | Monte Carlo Testi (Monte Carlo Testing) | Testin ayar (tuning) değerlerini rastgele değiştirerek testi tekrar tekrar — ör. bir test sunucusunda — çalıştırıp seyrek görülen eşzamanlılık (concurrency) hatalarını yakalamaya çalışan test tekniği; sayfa 341'de 'Monte Carlo Testing' maddesinde geçer. |
| month code | ay kodu (month code) | Ayları temsil eden tamsayı kodlar (JANUARY..DECEMBER); SerialDate'in isValidMonthCode ve monthCodeToQuarter metotlarının girdisi olarak geçer. java.util.Calendar sabitleriyle aynı değerleri kullanır. |
| MQ (Message Queue) | MQ (İleti Kuyruğu — Message Queue) | Uygulamalar arasında zaman uyumsuz (asynchronous) ileti alışverişi sağlayan mesajlaşma sistemi; bu sayfada ana depoya (master repository) giden, sonlu boyutlu paylaşılan bağlantı havuzunun kaynağı. Kısaltma İngilizce kalır. |
| Multithreaded / Single-threaded | Çok İş Parçacıklı (multithreaded) / Tek İş Parçacıklı (single-threaded) | Sözlükteki 'Thread | İş Parçacığı (Thread)' teriminin sıfat biçimleri; sayfa 179'da 'single threaded', 'multithreaded algorithm', 'single-threaded system' ifadelerinde geçer. |
| Mumbling | Mırıldanma (Mumbling) | Belirsiz, özensiz veya ne dediği anlaşılmayan yorum |
| Mutator | Değiştirici (Mutator) | JavaBean standardında set metotları |
| Mutual Exclusion | Karşılıklı Dışlama (Mutual Exclusion) | Bir anda yalnızca bir iş parçacığının ortak veriye ya da kaynağa erişebilmesi ilkesi; sayfa 183'ün tanım tablosunda geçer. |
| Named Constant | Adlandırılmış Sabit (Named Constant) | G25 sezgisel kuralı: ham sayıları ya da değeri belirsiz simgeleri iyi adlandırılmış, anlamlı sabitlerin arkasına gizleme; sözlükteki 'Constant | Sabit (Constant)' teriminin G25 bağlamındaki özel kullanımı. |
| Namespace | Ad Alanı (Namespace) |  |
| Naming Convention | İsimlendirme Kuralı (Naming Convention) |  |
| Necessary Evil | Zorunlu Kötülük (Necessary Evil) | Yorumların en iyi ihtimalle kaçınılmaz ama asla övülmemesi gereken bir kötülük olduğu fikri; Bölüm 4'ün açılış temasıdır |
| Negative Conditional | Olumsuz Koşul (Negative Conditional) | Değilleme (!) içeren, olumlu karşılığına göre anlaşılması daha zor olan koşul ifadesi; G29 sezgisel kuralı, mümkün olduğunda koşulların olumlu yazılmasını önerir. |
| Nesting Level | İç İçe Geçme Seviyesi (Nesting Level) | Kod bloklarının derinlik seviyesi |
| Newspaper Metaphor | Gazete Metaforu (Newspaper Metaphor) | Kaynak dosya gazete makalesi gibi okunmalı: üstte manşet ve özet, aşağı indikçe artan ayrıntı |
| Niladic | Sıfırlı (Niladic) | Argümansız fonksiyon |
| No Preemption | Önalım Yok (No Preemption) | Kilitlenmenin (deadlock) dört koşulundan üçüncüsü: bir iş parçacığı, başka bir iş parçacığının elindeki kaynağı ondan alamaz; sayfa 337'de açıklanır. |
| Noise Comment | Gürültü Yorumu (Noise Comment) | Hiçbir değer katmayan, bariz olanı tekrar eden yorum |
| Noise Word | Gürültü Kelimesi (Noise Word) | İsme anlam katmayan ek (Info, Data, the, a) |
| Nonblocking | Engel Olmayan (Nonblocking) | İş parçacığını bekleme (blocking) durumuna sokmayan eşzamanlılık çözümleri; sayfadaki 'Use nonblocking solutions when possible' maddesinde geçer. |
| nonfunctional | işlevsiz (nonfunctional) | Hiçbir zaman yanlış olmayan ya da akışı etkilemeyen koşul için kullanılır; sayfa 262'de 'the if statement was nonfunctional' ifadesinde geçer. |
| Noninvasive | Müdahalesiz (Noninvasive) | Hedef koda ya da iş nesnesinin içine girmeden uygulanan; görünüm benzeri (aspect-like) mekanizmaların diğer gerçekleştirim kaygılarını (implementation concerns) bu biçimde dahil etmesi anlamında. Sayfa 161'de 'noninvasively' için 'müdahalesiz (noninvasively)' kullanılmıştır; sözlükteki 'istilacılık (Invasiveness)' teriminin karşıtıdır. |
| Nonlocal Information | Yerel Olmayan Bilgi (Nonlocal Information) | Bulunduğu yerle doğrudan ilgili olmayan sistem bilgisi |
| nonstatic | statik olmayan (nonstatic) | G18 kuralında statik (static) metotların karşıtı; örnek (instance) gerektiren, bir nesneye bağlı üye fonksiyonu (member function) anlamında kullanılır. |
| Nonthread-Safe Classes | İş Parçacığına Güvenli Olmayan Sınıflar (Nonthread-Safe Classes) | Doğası gereği iş parçacığına güvenli (thread safe) olmayan sınıflar; SimpleDateFormat, veritabanı bağlantıları, java.util kapları ve servlet'ler örnek verilir. Sözlükteki 'Thread-Safe | İş Parçacığına Güvenli (Thread-Safe)' teriminin karşıtıdır; sayfa 328'in bölüm başlığı. |
| Nonthreaded | İş Parçacıksız (Nonthreaded) | İstekleri aynı iş parçacığında sırayla işleyen sunucu modeli; sayfa 317'de 'Client/Server Nonthreaded' kesit başvurusunda geçer. |
| Normal Flow | Normal Akış (Normal Flow) | Hata durumlarıyla kesintiye uğramayan, asıl iş akışı |
| Normal Forms | Normal Formlar (Normal Forms) | Codd'un veritabanı tekrar kaldırma stratejisi |
| Null Check | null Kontrolü (Null Check) | Bir değerin null olup olmadığını denetleyen koşul; çoğalması null döndürmenin belirtisidir |
| Null Detection | null Tespiti (Null Detection) | Bir değerin null olup olmadığını denetleyip ona göre davranan mantık; bu sayfada getBoolean'a eklenen 'am != null' kontrolü bağlamında geçer. Sözlükteki 'Null Check' (null Kontrolü) teriminden ayrı, daha genel bir kavramdır. |
| Number-Series Naming | Numara Serili İsimlendirme (Number-Series Naming) | a1, a2, aN şeklinde anlamsız numara ekleme |
| Object | Nesne (Object) |  |
| Object Graph | Nesne Grafiği (Object Graph) | Sistemdeki nesnelerin ve aralarındaki iş birlikçi (collaborator) ilişkilerinin bütünü; Demeter Yasası'nın (Law of Demeter) ihlali, çağrılacak metodu aramak için nesne grafiğinde dolaşmak (roam) anlamına gelir. |
| Object Reference | Nesne Başvurusu (Object Reference) | Bir nesneyi işaret eden başvuru; bayt kodunda this gibi değerler nesne başvurusudur ve yığında taşınır. Sayfa 325'te PUTFIELD açıklamasında 'the object reference one away from the top of the stack' ifadesinde geçer. |
| Object-Oriented Code | Nesne Yönelimli Kod (Object-Oriented Code) | Davranışı nesnelere dağıtan kod; yeni sınıf eklemeyi kolaylaştırır, yeni fonksiyon eklemeyi zorlaştırır (sayfa 97) |
| Object-Oriented Design | Nesne Yönelimli Tasarım (Object-Oriented Design) |  |
| Obscured Intent | Karartılmış Niyet (Obscured Intent) | G16 sezgisel kuralı: uzun soluklu ifadeler (run-on expressions), Macar notasyonu (Hungarian notation) ve sihirli sayılar (magic numbers) gibi yapıların yazarın niyetini gizlemesi; kod mümkün olduğunca ifade gücü yüksek (expressive) yazılmalıdır. |
| Obsolete Comment | Eskimiş Yorum (Obsolete Comment) | C2 sezgisel kuralı: eskimiş, alakasız ve yanlış hale gelmiş yorum; mümkün olduğunca çabuk güncellenmeli ya da silinmelidir. |
| Obvious Behavior Is Unimplemented | Açık Davranış Gerçekleştirilmemiş (Obvious Behavior Is Unimplemented) | Bir fonksiyon ya da sınıfın, başka bir programcının makul biçimde bekleyebileceği davranışları gerçekleştirmemiş olması; 'En Az Şaşırtma İlkesi'nin (Principle of Least Surprise) ihlali [G2]. |
| off-by-one | bir eksik/fazla (off-by-one) | Sayacın/indeksin birer birim sapmasından kaynaklanan sınır hatası; sıfır tabanlı ile birden başlayan (1 based) sayımlar karıştırıldığında ortaya çıkar. Sayfa 261'de suffixIndex'in 1 tabanlı olmasının computeCommonSuffix'teki +1 düzeltmelerinin nedeni olması bağlamında geçer. |
| One Pass | Tek Geçiş (One Pass) | Tek seferde, tek vuruşla; temiz ve zarif programların tek geçişte yazılamayacağı beklentisi. Sayfa 200'de 'write clean and elegant programs in one pass' ifadesinde geçer. |
| ONE SWITCH rule | TEK SWITCH kuralı (ONE SWITCH rule) | G23'teki kural: belirli bir seçim türü için en fazla bir switch ifadesi olabilir ve o switch, sistemin geri kalanındaki benzer switch'lerin yerini alacak çok biçimli (polymorphic) nesneler üretmelidir. |
| One-Off | Tek Seferlik Olay (One-Off) | Yalnızca bir kez görülüp geçiştirilen düzensiz başarısızlık; sayfadaki 'written off as a onetime occurrence' ve 'so-called one-offs' ifadelerinde geçer. Aslında yük altında ya da rastgele zamanlarda ortaya çıkan eşzamanlılık hatası adayıdır. |
| Open Closed Principle (OCP) | Açık Kapalı İlkesi (OCP) | Sınıflar genişlemeye açık, değişikliğe kapalı olmalı |
| Open Interval / Half-Open Interval / Closed Interval | Açık Aralık / Yarı Açık Aralık / Kapalı Aralık | Matematikte bir aralığın uç noktalarının o aralığa dahil olup olmadığını tanımlayan terimler; sayfa 276'da DateInterval enum'unun CLOSED, CLOSED_LEFT, CLOSED_RIGHT, OPEN sayıcılarının gerekçesi. |
| Open Source | Açık Kaynak (Open Source) | Kaynak kodu herkesin kullanımına açık olarak dağıtılan yazılım |
| Open/Closed Principle (OCP) | Açık/Kapalı İlkesi (OCP) | Genişletmeye açık, değişikliğe kapalı prensibi |
| Opening a Class | Sınıfı Açmak (Opening a Class) | Var olan bir sınıfı yeni işlev eklemek için değiştirmek; risk getirir ve sınıfın baştan sona yeniden test edilmesini gerektirir (OCP'nin 'değişikliğe kapalı' ilkesinin ihlali) |
| Operand Stack | İşlenen Yığını (Operand Stack) | Java Sanal Makinesindeki (JVM) parametre alan talimatların parametrelerinin konduğu yığın; standart bir son giren ilk çıkar (LIFO) veri yapısıdır. Sayfa 324'teki tanım listesinde ve bayt kodu tablosunda geçer. |
| Operator Precedence | Operatör Önceliği (Operator Precedence) | Bir ifadede operatörlerin hangi sırayla değerlendirileceği; ör. çarpma toplamadan önce |
| Optimistic Locking | İyimser Kilit (Optimistic Locking) | Çakışma yokmuş gibi varsayıp işlemi gerçekleştirme ve çakışma olmuşsa tekrar deneme stratejisi; CAS (Compare and Swap) bu yaklaşımın donanım karşılığıdır. 'Kötümser Kilit (Pessimistic Locking)' teriminin karşıtıdır. |
| Ordering (possible orderings) | Olası Sıralama (Ordering) | İş parçacıklarının talimatlarının izleyebileceği farklı yürütme sıralarından her biri; 'possible paths of execution' ile eş anlamlı kullanılır. Sayfa 325'te '4.38679733629e+24 possible orderings' ifadesinde geçer. |
| ordinal | sıral sayı (ordinal) | Bir dizideki sırayı/konumu belirten sayı; kitapta seri numarası (serial number) yerine önerilen daha betimleyici terim. Sayfa 271'de 'A more descriptive term might be ordinal' ifadesinde geçer. |
| Organic Growth | Organik Büyüme (Organic Growth) | Sistemin büyük bir ön tasarım yerine küçük adımlarla, gerçek ihtiyaçlara göre doğal biçimde büyümesi; uygun kaygı ayrımı (separation of concerns) gerektirir. |
| Origin (of the ordinal day) | Başlangıç Noktası (Origin) | Sıral gün (ordinal day) sayımının sıfır noktası olan gün; sayfa 282'de getDayOfWeek algoritmasının, haftanın hangi günüyle başladığını belirleyen bu başlangıç noktasına örtük bağımlılığından söz edilir. |
| Outbound Test | Dışa Dönük Test (Outbound Test) | Kendi kodumuzdan üçüncü taraf arayüze doğru yapılan çağrıları, üretim kodunun kullandığı biçimde sınayan test |
| Output Argument | Çıkış Argümanı (Output Argument) | Değer döndürmek için kullanılan argüman |
| Output Arguments | Çıkış Argümanları (Output Arguments) | Fonksiyona geçirilen argümanın, girdi yerine çıktı taşımak için kullanılması; okuyucu beklentisine aykırı olduğu için kaçınılması gereken biçim [F2]. Sözlükteki 'Argument' (Argüman) teriminin zıt kullanımıdır. |
| Output Stream | Çıkış Akışı (Output Stream) | Verinin yazıldığı hedef akış (ör. konsol, dosya); log4j'de bir Appender'ın mesajları gönderdiği yer |
| Overhead | Ek Yük (Overhead) | Bir işlemin kendi işi dışında yarattığı maliyet; ör. nesne hiç kullanılmasa bile oluşturma maliyeti |
| Overload | Aşırı Yükleme (Overload) | Aynı isimli fonksiyon/metodun farklı parametre listeleriyle birden fazla kez tanımlanması |
| Overload the Structure | Yapıyı Betimlemeyle Donatma (Overload the Structure) | Özenli isimlerin kodun yapısına betimleme yüklemesi; sayfa 310'da 'they overload the structure of the code with description' ifadesinde geçer. Sözlükteki 'Overload / Aşırı Yükleme (Overload)' teriminden farklı bir metafor kullanımıdır. |
| Oxymoron | Oksimoron (Oxymoron) | Birbirine zıt kavramların birleşimi (ör. "keskin soyutlama") |
| Package | Paket (Package) | Kod organizasyon birimi |
| Package Scope | Paket Kapsamı (Package Scope) | Java'da yalnızca aynı paketteki sınıflardan erişilebilen görünürlük seviyesi; testler uğruna kapsüllemeyi gevşetmenin private'tan sonraki en az zararlı yolu. |
| Painless | Acısız (painless) | Sayfa 238’de 'That was pretty painless' ifadesinde geçer: zahmetsiz, sürtünmesiz. Double marshaler’ın ispatlanmış integer marshaler deseninden kopyalanarak kolayca yazılabildiği vurgulanır. |
| Parent Thread / Child Thread | Ana İş Parçacığı / Çocuk İş Parçacığı (Parent Thread / Child Thread) | Bir iş parçacığının (parent) başlattığı ve beklediği alt iş parçacıkları (children); kapanışta ana iş parçacığı çocukları bitirmeyi bekler. |
| Parse | Ayrıştırma (Parse) | Dizgiyi anlamlı parçalara ya da hedef tipe çevirme işlemi; burada Integer.parseInt dizgiyi tamsayıya çevirir. Sözlükteki 'Decoupling | Ayrıştırma (Decoupling)' girdisinden bağımsız, farklı bir kavramdır. |
| Parsing | Ayrıştırma (Parsing) | Bir dizgiyi (ör. şema dizgisini, girdi dizgisini) sözdizimi kurallarına göre parçalara ayırıp anlamlandırma işlemi; bu sayfada 'schema parsing' (şema ayrıştırma) ifadesinde geçer. |
| Partitioning | Parçalama (Partitioning) | Farklı türlerdeki kodları koymak için uygun yerler yaratma; iyi yazılım tasarımının büyük kısmının konusu. Sözlükteki 'Modularity' (Modülerlik) ve 'Separation of Concerns' (Kaygıların Ayrılması) terimleriyle ilişkilidir. |
| pattern | desen (pattern) | 'the same pattern of changes' ifadesinde genel terim olarak geçer; glossary'de yalnız 'Design Pattern' (Tasarım Deseni) gibi bileşik terimler vardır. |
| Performance Test | Performans Testi (Performance Test) | Bir sistemin belirli bir süre içinde işi tamamlayıp tamamlayamadığını doğrulayan test; bu sayfada 10.000 milisaniyelik zaman aşımıyla (timeout) yazılan `shouldRunInUnder10Seconds` testi örneğinde geçer. |
| Permutation | Permütasyon (Permutation) | Bir kümenin öğelerinin sıralanma biçimlerinden her biri; bu sayfada, olası çalışma yollarını (paths of execution) hesaplamak için N adımın ve T iş parçacığının tüm sıralamalarının sayılmasında geçer. |
| Persistence | Kalıcılık (Persistence) | Verinin veritabanı, düz dosya gibi kalıcı bir depoda saklanması |
| Pessimistic Locking | Kötümser Kilit (Pessimistic Locking) | İşlem yapmadan önce kaynağı kilitleyerek diğer iş parçacıklarını dışlayan (senkronize, synchronized) strateji; çekişmesiz durumlarda bile kilit maliyeti öder. 'İyimser Kilit (Optimistic Locking)' teriminin karşıtıdır. |
| Physical Dependency | Fiziksel Bağımlılık (Physical Dependency) | Kodun yapısında açıkça görünen, fiziksel olarak gerçekleştirilmiş bağımlılık; G22 kuralına göre bağımlı modül, bağımlı olduğu modülden gereksindiği tüm bilgileri açıkça istemelidir. Sözlükteki 'Logical Dependency' (Mantıksal Bağımlılık) teriminin karşıtıdır. |
| physicalize | fizikselleştirmek (physicalize) | G22 bağlamında: örtük (mantıksal) bir bağımlılığı kodun yapısında görünür hale getirmek; bağımlılığı bir metot/sabit aracılığıyla açıkça ifade etmek. 'Mantıksal Bağımlılık (Logical Dependency)' teriminin karşıtı yönünde bir eylemdir. |
| Plug-ability | Takılabilirlik (Plug-ability) | 'Pluggable | Takılabilir (Pluggable)' teriminin isim biçimi; sayfadaki 'implies some level of plug-ability' ifadesinde geçer. TDD'nin Üç Yasası'ndan gelen test edilebilirliğin ima ettiği özellik. |
| Pluggable | Takılabilir (Pluggable) | Bağımlılıkların (ör. test ikizleri) çalışma zamanında değiştirilebilir/takılabilir olması; bu sayfada 'Make Your Threaded Code Pluggable' başlığında geçer. |
| Point of Declaration | Tanımlama Noktası (Point of Declaration) | Değişkenin tanımlandığı yer |
| POJO (Plain-Old Java Object) | POJO (Sade Eski Java Nesnesi) | Herhangi bir çerçeveye (framework) veya kapsayıcıya (container) bağımlılığı olmayan, tamamen kendi alanına odaklanmış sade Java sınıfı; kitapta 'Plain-Old Java Object (POJO)' olarak geçer ve BankImpl buna örnektir. Yazar kitapta POJO'lara kısa süre sonra yeniden döneceğini söyler (Pure Java AOP Frameworks). |
| Polyadic | Çoklu (Polyadic) | Üç veya daha fazla argümanlı fonksiyon |
| Polymorphism | Çok Biçimlilik (Polymorphism) |  |
| Poorly Written Comment | Kötü Yazılmış Yorum (Poorly Written Comment) | C4 kuralı: yazılmaya değer yorum iyi yazılmaya da değer; özensiz, geveze, dil bilgisi hatalı yorumlar. |
| Position Marker | Konum İşaretçisi (Position Marker) | Kod bloklarını ayırmak için kullanılan görsel banner'lar |
| Pre-increment operator | Ön Artırma Operatörü (Pre-increment Operator) | Java'da değeri önce artırıp sonra kullanan ++ operatörü; birden çok bayt kodu (byte-code) talimatına derlendiği için kesintiye uğrayabilir ve atomik (atomic) değildir. Sayfa 324'te 9. satırdaki ++ için geçer. |
| Precision | Hassasiyet (Precision) | Gereksinimlerdeki kesinlik |
| Predicate | Yüklem (Predicate) | JavaBean standardında boolean dönen is metotları |
| preempted | kesintiye uğramak (preempted) | Bir iş parçacığının, kendisi izin vermeden işletim sistemi/sanal makine tarafından durdurulup yerine başka bir iş parçacığının geçirilmesi; 'Preemptive Threading' (Önemleyici İş Parçacıklama) teriminin fiil biçimi. Sayfa 330'da 'Thread 1 gets preempted' ifadesinde geçer. |
| Preemptive Threading | Önemleyici İş Parçacıklama (Preemptive Threading) | İşletim sisteminin veya sanal makinenin, bir iş parçacığının kendisi izin vermeden kontrolü devralarak başka bir iş parçacığına geçebilmesi. Dipnot 16'da Java'nın bu davranışı garanti etmediği, modern işletim sistemlerinin bunu 'bedava' sağladığı belirtilir. |
| Prefix Convention | Önek Kuralı (Prefix Convention) | Yerel değişkenler için a, argümanlar için the gibi önek kuralları |
| Premature Decision | Erken Verilmiş Karar (Premature Decision) | Optimal olmayan bilgiyle, gerekli bilgi henüz birikmeden verilen karar |
| Prequel | Öncül (Prequel) | Bu kitabın PPP kitabına göre konumu |
| Principle | İlke (Principle) |  |
| Principle of Least Surprise | En Az Şaşırtma İlkesi (Principle of Least Surprise) |  |
| Problem Domain | Problem Alanı (Problem Domain) |  |
| Procedural Code | Prosedürel Kod (Procedural Code) | Veri yapıları üzerinde çalışan fonksiyonlarla yazılan kod |
| processing time | İşleme Süresi (Processing Time) | Bir sayfanın ayrıştırılması (parsing) gibi hesaplama işinin sürdüğü süre; sayfa 334'ün liste maddesinde I/O süresinden ayrılmıştır. |
| Processor-Bound / I/O-Bound | İşlemciye Bağlı (Processor-Bound) / I/O'ya Bağlı (I/O-Bound) | Performansın işlemci hesaplamasına mı yoksa giriş/çıkış (I/O) beklemesine mi bağlı olduğunu belirten sınıflandırma; eşzamanlılık (concurrency) yalnızca I/O'ya bağlı işlerde verimliliği artırır. |
| Producer-Consumer | Üretici-Tüketicici (Producer-Consumer) | İşi bir tampona (buffer) veya kuyruğa (queue) bırakan üretici iş parçacıkları ile kuyruktan iş alan tüketici iş parçacıklarını sinyal (signal) alışverişiyle koordine eden klasik eşzamanlılık problemi; sayfa 184'te level-2 başlık. |
| Production Code | Üretim Kodu (Production Code) | Uygulamanın gerçekte çalışan, test kodu olmayan kısmı |
| Productivity | Verimlilik (Productivity) |  |
| Professional | Profesyonel (Professional) |  |
| Professional Review | Profesyonel İnceleme (Professional Review) | Kötü niyet ya da saygısızlık taşımayan, mesleki disiplinle yürütülen kod eleştirisi; doktorlar, pilotlar ve avukatların uyguladığı mesleki denetim pratiğine benzetilir. Sayfa 268'de yazarın yaptığı işin doğası bu terimle açıklanır. |
| Programatic Configuration | Programatik Yapılandırma (Programatic Configuration) | Yapılandırmanın dosya yerine kod içinde programatik olarak yapılması; kitapta 'programatic configurations' olarak geçer (orijinal yazım 'programatic'). |
| Programmer-eese | Programcı Dili (Programmer-eese) | Programcıların kendi aralarında kullandığı teknik jargon |
| Pronounceable Names | Telaffuz Edilebilir İsimler (Pronounceable Names) | İsimlerin sesli okunabilir olması gerektiği ilkesi |
| Prose | Düzyazı (Prose) | Grady Booch: "Temiz kod iyi yazılmış bir düzyazı gibi okunur" |
| Protected Variable | Korumalı Değişken (Protected Variable) | Alt sınıflardan erişilebilen değişken; ilişkili kavramları dosyalara dağıttığı için kaçınılmalıdır |
| Proxy | Vekil (Proxy) | Başka bir nesneyi temsil eden, istenen işi ona devreden sarmalayıcı nesne; tembel değerlendirme (lazy evaluation) gibi optimizasyonlar için kullanılabilir |
| Pull Up (a member) | Yukarı Taşımak (Pull Up) | Bir üyeyi alt sınıftan, tüm türevlerin paylaştığı üst sınıfa taşıma yeniden düzenlemesi; sayfa 280-282'de toDate, getDayOfWeek, compare ve isInRange metotlarının SpreadsheetDate'ten DayDate'e taşınmasında geçer. 'Push Down (a member)' (Aşağı Taşımak) teriminin karşıtıdır. |
| Pun | Kelime Oyunu (Pun) | Bir kelimenin iki farklı anlamda kullanılması |
| Push Down (a member) | Aşağı Taşımak (Push Down) | Bir üyeyi üst sınıftan, onu gerçekten kullanan alt sınıfa taşıma yeniden düzenlemesi; sayfa 279'da leapYearCount'un DayDate'ten SpreadsheetDate'e taşınması bağlamında geçer [G6]. Sözlükteki 'Deploy' (yerleştirmek) terimiyle yakından ilişkilidir. |
| quarter | çeyrek (quarter) | Üç aylık dönem; monthCodeToQuarter metodu, ay kodunu yılın 1-4 arasındaki çeyreğine eşler. Takvim/finans bağlamında 'çeyrek' Türkçede yerleşik karşılıktır. |
| Quasi-Encapsulation | Yarı Kapsülleme (Quasi-Encapsulation) | Bean'lerin getter/setter ile sağladığı, pratikte hiçbir şeyi gizlemeyen görünüşte kapsülleme |
| Query | Sorgu (Query) | Bu sayfada fiil olarak geçer: 'query the Args instance for the values of the arguments' = argüman değerlerini `Args` örneğinden istemek/okumak. Sözlükteki 'Command Query Separation' (Komut Sorgu Ayrımı) terimindeki 'query' kavramıyla bağlantılıdır. |
| Race Condition | Yarış Durumu (Race Condition) | Eşzamanlı erişimden kaynaklanan hata |
| Range constant (inclusion) | Kapsama Sabiti (Range Constant) | INCLUDE_NONE / INCLUDE_FIRST / INCLUDE_SECOND / INCLUDE_BOTH sabitleri, bir tarih aralığının hangi uçlarının kapsandığını tek bir adlandırılmış değerde kodlar; iki boolean parametrenin ürettiği anlamsız kombinasyonları önler (Listing B-1). |
| Readability | Okunabilirlik (Readability) | Kodun okunup anlaşılma kolaylığı; sonraki tüm değişiklikleri etkiler |
| Readable Code | Okunabilir Kod (Readable Code) |  |
| Readers-Writers | Okuyucu-Yazarlar (Readers-Writers) | Paylaşılan kaynağı sürekli okuyan ve ara sıra güncelleyen tarafların doğruluk, geçirimi (throughput) ve açlık (starvation) dengesini bulmasını gerektiren klasik eşzamanlılık problemi; sayfa 184'te level-2 başlık. |
| Real-Time System | Gerçek Zamanlı Sistem (Real-Time System) | Girdilere belirli zaman sınırları içinde yanıt vermek zorunda olan sistem; çoğunlukla gömülü olup işlemci ve bellek kaynakları kısıtlıdır (Bölüm 9, çifte standart tartışması) |
| Reason to Change | Değişme Nedeni (Reason to Change) | Tek Sorumluluk İlkesi'nin (SRP) tanımındaki temel ölçüt: bir sınıfın değişmesine yol açabilecek her ayrı sebep bir sorumluluktur; 'responsibility' ile eş anlamlı kullanılır. |
| Recompilation | Yeniden Derleme (Recompilation) | Değişiklik sonrası kodun tekrar derlenmesi |
| Recursion | Özyineleme (Recursion) | Bir fonksiyonun doğrudan ya da dolaylı olarak kendini çağırması |
| Redeployment | Yeniden Dağıtım (Redeployment) | Değişiklik sonrası kodun tekrar dağıtılması |
| Redesign | Yeniden Tasarım (Redesign) |  |
| Redundant Comment | Gereksiz Yorum (Redundant Comment) | Koddan daha fazla bilgi vermeyen, fazlalık yorum |
| ReentrantLock | ReentrantLock | Bir metotta elde edilip başka bir metotta bırakılabilecek kilit; java.util.concurrent.locks paketinde. Teknik sınıf adı olduğu için çevrilmez. |
| Refactoring | Yeniden Düzenleme (Refactoring) |  |
| Reflection | Yansıma (Reflection) | Bir programın kendi yapısını (sınıflar, metotlar, alanlar) çalışma anında incelemesine ve bunlara dinamik olarak erişmesine olanak tanıyan API/mekanizma; Java'da java.lang.reflect paketinde bulunur. Sayfada 'Java reflection API' olarak geçer. |
| Regular Expression | Düzenli İfade (Regular Expression) | Metin desenlerini eşleştirmek için kullanılan söz dizimi; regex olarak da bilinir |
| relative offset | göreli konum değeri (relative offset) | Bir başlangıç noktasına göre ölçülen fark/değer; SerialDate'in gösterimi bir seri numarasından çok göreli bir konum değeridir. Sayfa 271'de 'the representation is more of a relative offset' ifadesinde geçer. |
| Release | Sürüm (Release) | Yazılımın yayımlanan bir versiyonu |
| Release Cycle | Yayın Döngüsü (Release Cycle) | Ürün sürüm yayınlama süreci |
| Renaming | Yeniden Adlandırma (Renaming) | Değişken/fonksiyon/sınıf adını değiştirme |
| Request | İstek (Request) | İstemcinin sunucuya gönderdiği işlem talebi; sayfa 317'de 'sends a request' ifadesinde geçer. |
| Requirement | Gereksinim (Requirement) |  |
| Resource | Kaynak (Resource) | Bir isteğin hedeflediği, URL ile adreslenen öğe; ör. FitNesse'de request.setResource("root") |
| Resource Pool | Kaynak Havuzu (Resource Pool) | Birden çok iş parçacığının ortak kullandığı sınırlı kaynak kümesi (örn. veritabanı bağlantıları); eşzamanlılık sorunlarının olası kaynaklarından biri olarak sayfa 190'da 'a common resource pool' ifadesinde geçer. 'Bound Resources' terimiyle yakından ilgilidir. |
| Response Time | Yanıt Süresi (Response Time) | Bir isteğin yanıtlanması için geçen süre; bazı sistemler yanıt süresi ve geçirimi (throughput) kısıtlarına tabidir. |
| Responsibility-Driven Design (RDD) | Sorumluluk Odaklı Tasarım (Responsibility-Driven Design) | Rebecca Wirfs-Brock'un nesne tasarımı yaklaşımı: sınıflar veri alanlarından değil rollerden, sorumluluklardan ve iş birliklerinden yola çıkarak tasarlanır; Chapter 10 kaynakçasında [RDD] etiketiyle anılır |
| Responsiveness | Yanıt Verebilirlik (Responsiveness) | Sayfa 339'da ölü kilidi önlemek için işlemciyi (CPU) yoğun kullanan stratejilerin yanıt verebilirliği azalttığı ifadesinde geçer. |
| Return Code | Dönüş Kodu (Return Code) | Fonksiyonun başarı/hata durumunu dönüş değeriyle bildirmesi; Bölüm 7 bunun yerine istisna kullanmayı önerir |
| Reusability | Yeniden Kullanılabilirlik (Reusability) | Kodun başka bağlamlarda yeniden kullanılabilmesi; testlerin güvence altına aldığı -liklerden biri |
| Reuse in the Large | Büyük Ölçekli Yeniden Kullanım (Reuse in the Large) | Sistem genelinde, büyük yapılar düzeyinde yeniden kullanım; 'reuse in the small'ın (küçük ölçekte yeniden kullanım) birikimiyle mümkün olur. Sayfa 174'te 'reuse in the large' ifadesi olarak geçer. |
| Reuse in the Small | Küçük Ölçekli Yeniden Kullanım (Reuse in the Small) | Çok küçük ortaklıkları (birkaç satır bile olsa) isimli metotlar olarak çıkarma; bu küçük yeniden kullanımlar birikerek büyük ölçekte yeniden kullanımı mümkün kılar ve sistem karmaşıklığını dramatik biçimde azaltır. Sayfa 174'te 'reuse in the small' ifadesi olarak geçer. |
| Ring Buffer | Halka Tampon (Ring Buffer) | Sabit boyutlu, dairesel olarak düzenlenmiş tampon; dizinin sonuna gelindiğinde işaretçi başa sarar. Bu sayfada uçbirim çıktısını denetleyen tamponun, sayaç ile işaretçinin (counter-pointer) senkronunu yitirmesi nedeniyle kilitlenmeye yol açması anlatılır. |
| Rough Draft | Kaba Taslak (Rough Draft) | İlkokul kompozisyonu metaforundaki ilk taslak; 'ardışık iyileştirme' (successive refinement) temasının parçası. Sayfa 200'de 'write rough drafts of our compositions' ifadesinde geçer. |
| Rounding | Yuvarlama (Rounding) | Bir sayıyı daha az anlamlı basamağa tamamlama işlemi; para birimi tamsayılarla (integers) temsil edildiğinde yuvarlama uygun biçimde ele alınmalıdır. |
| Routine | Rutin (Routine) | Programlamanın ilk günlerindeki fonksiyon benzeri yapı |
| Run-on expressions | Uzun soluklu ifadeler (run-on expressions) | Birbiri içine geçen, soluksuz yazılmış birleşik ifadeler; okunması güçtür ve yazarın niyetini karartır. G16 sezgisel kuralında 'the author’s intent' ifadesiyle birlikte geçer. |
| Runnable | Runnable (arayüz) | Java'da bir görevi temsil eden, tek bir run() metodu içeren arayüz; `Executor` onu çalıştırabilir. Bu sayfada 'classes that implement Runnable' ifadesinde geçer. Teknik arayüz adı olduğu için İngilizce kalır. |
| running total | güncel toplam (running total) | G16 bağlamında: zaman kartları (time cards) kabul edilirken adım adım biriktirilen toplam; bu sayfada 'koddaki güncel toplam' ifadesinde geçer. |
| Runtime Error | Çalışma Zamanı Hatası (Runtime Error) | Derleme sırasında değil, program çalışırken ortaya çıkan hata |
| Runtime Logic | Çalışma Zamanı Mantığı (Runtime Logic) | Uygulama başladıktan sonra asıl işi yapan kod; başlangıç (startup) sürecinden ayrılmalıdır |
| rvalue | Sağ Taraf Değeri (rvalue) | Bir atama ifadesinde eşittir işaretinin sağında kalan değer |
| Safeties | Güvenlik Önlemleri (Safeties) | Derleyici uyarıları, testler, otomatik denetimler gibi sistemin hatalara karşı sunduğu koruyucu mekanizmalar; G4 kuralının konusu. 'override' = geçersiz kılmak. |
| Scary Noise | Korkunç Gürültü (Scary Noise) | Bariz olanı karmaşık Javadoc formatında tekrar eden sinir bozucu yorum |
| Schedule | Takvim / Zamanlama (Schedule) |  |
| Scheduler | Zamanlayıcı (Scheduler) | İşleri/görevleri belirli bir sıraya ve zamana göre çalıştıran sistem bileşeni; sayfadaki 'we added a function to the scheduler' ifadesinde geçer. |
| Schema | Şema (Schema) | Ayrıştırılacak argümanların türlerini tek bir biçim dizgisinde beyan eden tanım (ör. "l,p#,d*"); Chapter 14'ün sonraki sayfalarında 'format, or schema, string' olarak geçer. |
| School of Thought | Düşünce Okulu (School of Thought) |  |
| Scissors Rule | Makas Kuralı (Scissors Rule) | C++'ta örnek değişkenlerini sınıfın en altına koyma geleneği |
| Scope | Kapsam (Scope) | Bir değişkenin geçerli olduğu kod alanı |
| Scope (of a class) | Kapsam (Scope) | G14'te 'envies the scope of the class' ifadesinde geçer: sınıfın sahip olduğu değişkenler ve fonksiyonlar bütünü; mevcut 'Kapsam (Scope)' girdisinin sınıf bağlamındaki kullanımı. |
| Scope Encoding | Kapsam Kodlaması (Scope Encoding) | Bir değişkenin kapsamını (ör. üyelik/statiklik) isminin başına önek (f_, m_, s_) kodlayarak belirtme; günümüz IDE'leri bunu gereksiz kılar. Sayfa 257'de 'this kind of scope encoding' ifadesinde geçer. |
| Scoping Rules | Kapsam Kuralları (Scoping Rules) | Bir dilin, tanımlayıcıların (değişken, sabit, üye vb.) nerelerden görünür/erişilebilir olduğunu belirleyen kuralları; J2 kuralında kalıtımın bu kuralları atlatmak için kullanılmaması gerektiği belirtilir. |
| Seam | Dikiş Noktası (Seam) | Kodu o noktada düzenlemeden davranışı değiştirebildiğiniz yer; ör. bir arayüz üzerinden test için sahte nesne takmak [WELC] |
| Search-friendly name | Arama Dostu İsim (Search-friendly name) |  |
| Searchable Names | Aranabilir İsimler (Searchable Names) |  |
| Selector Arguments | Seçici Argümanlar (Selector Arguments) | G15 sezgisel kuralı: bir fonksiyonun davranışını birden fazla mod arasında değiştirmek için kullanılan boolean/enum/tamsayı bayrak argümanı; amacı hatırlaması zordur ve birçok fonksiyonu tek fonksiyonda birleştirir. |
| Self-Descriptive Name | kendini betimleyen isim (self-descriptive name) | Adın, taşıdığı şeyi kendisinin açıklaması; sayfa 277'de getMonths fonksiyonuna [N1] ile işaretlenen daha betimleyici isim verme işleminde geçer. Sözlükteki 'Descriptive Names' (Betimleyici İsimler) terimiyle ilişkilidir. |
| Semaphore | Sinyal (Semaphore) | Sayaçlı bir kilitle klasik semaforun gerçekleştirimi; java.util.concurrent paketinde. |
| sentinel value | gösterge değer (sentinel value) | Geçerli bir sonucun bulunamadığını belirtmek için döndürülen özel değer; stringToMonthCode, tanınamayan bir dizgi için -1 döndürür. Ayrıca 'find' benzeri aramalarda 'bulunamadı' (not found) göstergesi olarak yaygındır. |
| Separate | Ayırmak (Separate) | Bir yapıyı ana modülden bağımsız bir parça hâline getirerek dışarı çıkarma; sayfa 242'de 'completely separated the exception and error code from the Args module' ifadesinde geçer. 'Decoupling | Ayrıştırma (Decoupling)' teriminden farklıdır: burada bağımlılığı azaltmak değil, kodun fiziksel olarak başka bir modüle taşınması kastedilir. |
| Separation of Concerns | Kaygıların Ayrılması (Separation of Concerns) | Yazılımı çalıştırma kaygısı ile onu düzenli ve temiz tutma kaygısının ayrı, birbiri kadar önemli iki etkinlik olarak ele alınması gerektiği ilkesi; Chapter 10'da sınıf tasarımı bağlamında geçer. |
| serial number | seri numarası (serial number) | Ürün tanımlama işareti olarak kullanılan numara; kitapta SerialDate'in 30 Aralık 1899'dan bu yana geçen gün sayısını tutan gösterimi için kullanılmıştır ve yazar bunu yanıltıcı bulur. Sayfa 271'de 'serial number' teriminin tarih bağlamında doğru olmadığı tartışılır. |
| Serialization | Serileştirme (Serialization) | Bir nesnenin durumunun, saklanabilir ya da iletilebilir bir biçime (ör. bayt akışı) dönüştürülmesi; Java'da Serializable arayüzü ve serialVersionUID değişkeniyle kontrol edilir. Sayfa 272'de serileştirme denetiminin (serialization control) elle mi otomatik mi olacağı tartışılır. |
| Serialize / Deserialize | serileştirmek / seri durumdan çözmek (serialize / deserialize) | Nesne durumunu bayt akışına dönüştürmek (serialize) ya da bayt akışından yeniden nesneye kurmak (deserialize); 'deserialize' için 'seri durumdan çözmek' kullanılmıştır. Sayfa 272 dipnotunda sürümler arası seri durumdan çözme (deserialize) beklentisi eleştirilir. |
| Serializer | Serileştirici (Serializer) | Nesneleri serileştirme (serialization) işlemini yürüten bileşen/mekanizma; sayfa 272'de serialVersionUID değişkeninin 'the serializer'ı denetlemek için kullanıldığı söylenir. |
| Server | Sunucu (Server) | İstemci/sunucu (client/server) kilit modellerinde kilitlenen ve paylaşılan nesneyi barındıran taraf; sayfa 185'te 'lock the server', 'Within the server' ve 'the original server cannot be changed' ifadelerinde geçer. |
| Server-Based Locking | Sunucu Tabanlı Kilit (Server-Based Locking) | Kilitleme sorumluluğunun sunucuya verilmesi: sunucu, tüm metotları tek seferde çağıran ve kendi kilidiyle çalıştırıcı birleşik bir metot sunar; istemci yalnızca o metodu çağırır. Sayfa 185'te üç düzeltme yolundan ikincisidir. |
| ServerSocket | ServerSocket (sunucu soketi) | Java'da bir portu dinleyen (listen) ve gelen istemci bağlantılarını kabul eden (accept) sunucu tarafı soket sınıfı; sunucunun hangi portta, hangi zaman aşımıyla (timeout) dinleyeceğini yönetir. Teknik sınıf adı olduğu için çevrilmez. |
| Servlet | Servlet | Java Web'de gelen istekleri asenkron işleyen bileşen; Web ya da EJB konteyneri tarafından yönetilir. Terim çevrilmez. |
| Setter Method | Set Metodu (Setter Method) | Bir özelliği dışarıdan atamaya yarayan metot; DI'da bağımlılıklar setter metotları ya da kurucu argümanlarıyla enjekte edilir (JavaBeans'teki Mutator ile aynı kavram) |
| Setup | Kurulum (Setup) | FitNesse test sayfalarında testten önce çalıştırılan hazırlık sayfası/adımı |
| Shared State | Paylaşılan Durum (Shared State) | Birden çok iş parçacığının erişip değiştirebildiği nesne/veriyi ifade eder; sayfadaki 'forcing clients to manage shared state' ifadesinde geçer. 'shared data' ile eş anlamlı kullanılır. |
| Shotgun Approach | Tüfek Yaklaşımı (Shotgun Approach) | Rastgele, hedefsiz uygulama biçimi; sayfa 189'da elle enstrümantasyonun 'It's a shotgun approach' ifadesinde geçer — kusurları bulup bulamayacağınızı bilemezsiniz, olasılıklar lehinize değildir. |
| Side Effect | Yan Etki (Side Effect) |  |
| Sieve | Eleme (Sieve) | Asal sayıları bulmak için kullanılan algoritma (Eratosthenes Kalburu) |
| Signal | Sinyal (Signal) | Eşzamanlı iş parçacıklarının birbirine 'devam edebilirsin' bilgisini iletmesi; sayfa 184'te 'signaling each other' ifadesinde geçer. Kavram kartında kuyruğun doluluk/boşluk bildirimi olarak kullanılır. |
| Simple Code | Basit Kod (Simple Code) | Beck'in kuralları: testler çalışır, tekrar yok, ifade gücü yüksek, varlıklar minimize |
| Simple Design | Basit Tasarım (Simple Design) | Kent Beck'in [XPE] kaynağına dayanan dört kural: (1) tüm testleri çalıştırır, (2) tekrar (duplication) yok, (3) ifade gücü (expressiveness) yüksek, (4) sınıf ve metot sayısı minimal. Chapter 12'nin omurgası; bu sayfada 'the four rules of Simple Design' ifadesinde geçer. |
| Single Responsibility | Tek Sorumluluk (Single Responsibility) |  |
| Single Responsibility Principle (SRP) | Tek Sorumluluk İlkesi (SRP) | Bir sınıfın/fonksiyonun değişmesi için yalnızca bir nedeni olmalıdır ilkesi |
| Single-Entry, Single-Exit Rule | Tek Giriş, Tek Çıkış Kuralı (Single-Entry, Single-Exit Rule) | Dijkstra'nın yapısal programlama disiplini: her fonksiyon ve blok yalnızca bir girişe ve bir çıkışa sahip olmalı |
| Singleton | Tekil (Singleton) | Nesne oluşturmayı denetleyen ve sistem genelinde tek bir örneğin (instance) paylaşılmasını sağlayan tasarım deseni; bu sayfada ABSTRACT FACTORY ve DECORATOR desenleriyle birlikte, statik metotların tek bir fabrika örneğine yönlendirme yaptığı yapıda kullanılır. |
| Snail's Pace | Salyangoz Hızı (Snail's Pace) | Çok yavaş ilerleme metaforu |
| snapshot | Anlık Görüntü (Snapshot) | Belirli bir andaki durumu gösteren görsel/kayıt; sayfa 334'te 'Figure A-1 shows a snapshot of 13 pages' ifadesinde geçer. |
| Soak Test | Süre Testi (Soak Test) | Eşzamanlı kodu üretime koymadan önce uzun süre, yük altında, birçok yapılandırmada çalıştırma pratiği; kavram kartında (soak-test-before-production) 30 dakikalık CI örneğiyle kullanıldı. |
| Socket | Soket (Socket) | Ağ iletişiminin uç noktası; sunucu istemci bağlantılarını bir sokette dinler (listen), istemci bağlanır ve istek gönderir. Sayfa 317'de 'listening on a socket' ifadesinde geçer. |
| SocketException | SocketException (soket istisnası) | java.net paketindeki, soket düzeyindeki hataları (ör. istemcinin bağlantıyı kesmesi) temsil eden istisna; örnekte beklenen bu durumu yoksayıp diğer istisnaların yığın izini (stack trace) göstermek için kullanılır. Teknik sınıf adı olduğu için çevrilmez. |
| Software Craftsmanship | Yazılım Zanaatı (Software Craftsmanship) |  |
| Software Physics | Yazılım Fiziği (Software Physics) | Terimi ilk kez [Kolence] kullanmıştır; yazılımın, yapı kaygılarını etkili biçimde ayırdığında kökten değişikliğin ekonomik olarak mümkün olduğu kendine özgü doğasını anlatır. |
| Solution Domain | Çözüm Alanı (Solution Domain) |  |
| Source Code Control | Kaynak Kodu Kontrolü (Source Code Control) | Kaynak kodu değişikliklerini ve sürümlerini saklayan sistem ('source code control system'); sayfa 68/69'da 'kaynak kodu kontrol sistemleri' olarak geçmişti. |
| Source Code Control System | Kaynak Kod Kontrol Sistemi (Source Code Control System) | Kaynak kodu sürümlü olarak saklayan sistem (CVS, SVN, Git); değişiklik geçmişi gibi bilgiler yorumlarda değil burada tutulur. |
| Source File | Kaynak Dosyası (Source File) | Programın kaynak kodunu içeren dosya |
| Special Case Object | Özel Durum Nesnesi (Special Case Object) | Null yerine döndürülen, eksik durum için makul varsayılan davranışı kapsülleyen nesne (SPECIAL CASE deseni) |
| Special Case Pattern | Özel Durum Deseni (Special Case Pattern) | Özel durumu kendisi ele alan bir sınıf/nesne döndürerek istemci kodu istisna yönetiminden kurtaran desen [Fowler] |
| Specification | Spesifikasyon (Specification) | Biçimsel gereksinim tanımı |
| SPR Number | SPR Numarası (SPR Number) | Software Problem Report (Yazılım Sorun Raporu) numarası; kurumsal ortamlarda hata kayıtlarını izlemek için kullanılır, C1 kuralına göre yorumlara yazılmaz. |
| Spring Framework | Spring Framework | Java için en bilinen DI kabını (container) sağlayan açık kaynaklı çerçeve; XML yapılandırma dosyasıyla bağlama (wiring) yapmayı destekler; Spring.NET adlı bir .NET sürümü de vardır |
| Spurious Failure | Sahte Başarısızlık (Spurious Failure) | Bir sonraki çalıştırmada kendiliğinden geçen, tekrarlanamayan düzensiz test başarısızlığı; iş parçacıklı kodda olası eşzamanlılık sorunu adayı olarak ele alınmalıdır. |
| Stack Backtrace | Yığın İzi (Stack Backtrace) | Çağrı yığınının anlık görüntüsü; tek iş parçacıklı uygulamalarda tüm uygulamanın durumunu gösterir. Sözlükteki 'Stack Trace | Yığın İzi (Stack Trace)' ile tutarlıdır. |
| Stack Trace | Yığın İzi (Stack Trace) | İstisna anındaki çağrı zinciri; hatanın yerini gösterir ama başarısız işlemin amacını söylemez |
| Stakeholder | Paydaş (Stakeholder) | Projeden etkilenen ya da projeyle çıkarı olan kişi/grup (müşteri, kullanıcı, sponsor vb.) |
| Stale Information | Bayat/Eski Bilgi (Stale Information) | Güncellenmemiş, eskimiş bilgi birikimi; sayfa 184'te 'the accumulation of stale information' ifadesinde geçer. |
| Standard Nomenclature | Standart Adlandırma (Standard Nomenclature) | N3 sezgisel kuralının başlığı: isimlendirmede mevcut kural ve kullanımları (tasarım desenleri, dil gelenekleri, takımın kendi standardı) esas alma; 'Use Standard Nomenclature Where Possible' başlığında geçer. |
| startover | baştan başlama (startover) | Bir iş parçacığının, meşgul bir kaynağa rastladığında edindiği tüm kaynakları serbest bırakıp sürece sıfırdan yeniden başlaması; kilitlenmeyi (deadlock) kırma stratejilerinde geçer. Sayfa 338'de 'start over' fiili ve 'startovers' ismi biçiminde kullanılır. |
| Startup Process | Başlangıç Süreci (Startup Process) | Uygulama nesnelerinin oluşturulduğu ve bağımlılıkların birbirine bağlandığı süreç; çalışma zamanı mantığından ayrı tutulmalıdır |
| Starvation | Açlık (Starvation) | Bir iş parçacığının ya da grubun aşırı uzun süre ya da sonsuza dek ilerlemesinin engellenmesi; sayfa 183'ün tanım tablosunda geçer. |
| Static Import | Statik İçe Aktarma (Static Import) | Java'da bir sınıfın statik (static) üyelerine sınıf adı kullanmadan erişmeyi sağlayan import bildirimi (ör. import static PayrollConstants.*;); J2 kuralında sabitlere miras yoluyla değil, doğrudan erişmek için önerilir. |
| Static Initializer | Statik Başlatıcı (Static Initializer) | Java'da bir sınıf yüklenirken bir kez çalışan başlatma bloğu |
| Static Method | Statik Metot (Static Method) | Sınıfa ait olan, örnek (instance) gerektirmeyen ve doğrudan sınıf adıyla çağrılan metot; getMonthNames, isLeapYear ve lastDayOfMonth metotlarının DateUtil sınıfına taşınması bağlamında geçer. |
| Static Variable | Statik Değişken (Static Variable) | Sınıfa ait olan ve tüm örnekler arasında paylaşılan değişken; sayfa 283'te `dateFormatSymbols`'un DateUtil sınıfına taşınması bağlamında geçer. |
| Status Value | Durum Değeri (Status Value) | Bir öğenin mevcut durumunu temsil eden değer |
| Stepdown Rule | Basamak Kuralı (Stepdown Rule) | Kodun üst seviyeden alt seviyeye "aşağı doğru" okunması prensibi |
| Story | Hikaye (Story) | Çevik geliştirme (Agile) bağlamında, müşteriye değer katan küçük ve uygulanabilir işlev parçası; “bugünün hikayeleri” (today’s stories) ifadesi bu anlamdadır. |
| Strategy Pattern | Strateji Deseni (Strategy Pattern) | Bir algoritma ailesini tanımlayıp her birini kendi sınıfına kapsülleyen ve aralarında değiştirilebilir kılan tasarım deseni; tekrarı ortadan kaldırmanın yollarından biri olarak anılır, Şablon Metot (Template Method) ile birlikte geçer. |
| string representation | dizge gösterimi (string representation) | Bir nesnenin metin biçimindeki karşılığı; Java'da toString() metodu bu gösterimi sağlar. Listing B-1'de 'a string representation of the date' ifadesinde geçer — toString() günü '10-Şub-2007' gibi okunur bir dizgeye çevirir. |
| StringBuffer | StringBuffer | Java'da değiştirilebilir dizgi nesnesi |
| Struct | Yapı (Struct) | Yalnızca veri alanları bulunan, davranışı olmayan veri yapısı |
| Structure over Convention | Yapı, Kuraldan Üstündür (Structure over Convention) | G27 sezgisel kuralı: uyumu zorunlu kılan yapıların (ör. soyut metotlu üst sınıflar) gönüllü isimlendirme kurallarından (naming conventions) daha güçlü olduğunu ifade eder. |
| Structured Programming | Yapısal Programlama (Structured Programming) | Dijkstra'nın tek giriş / tek çıkış kuralları |
| Stub | Geçici Gövde (Stub) | Gerçek gerçekleştirim yazılana kadar yer tutan, sahte değer döndüren asgari kod |
| Subclass | Alt Sınıf (Subclass) | Bir sınıftan kalıtımla türetilen sınıf; OCP'de yeni işlevsellik mevcut kodu değiştirmeden alt sınıf ekleyerek katılır |
| Subprogram | Alt Program (Subprogram) | Fortran/PL1 döneminde kullanılan program parçası |
| Subroutine | Alt Rutin (Subroutine) | Programlamanın ilk günlerindeki alt program yapısı |
| Subscript | Alt İndis (Subscript) | Dizi veya koleksiyondaki öğeye erişim indeksi |
| Subselect | Alt Sorgu (Subselect) | Bir SQL select ifadesinin içine gömülü ikinci bir select sorgusu |
| Subsystem | Alt Sistem (Subsystem) | Projenin kendi içindeki alt sistemi; N6'da proje ve/veya alt sistem adına göre yapılan kodlamaların dikkat dağıtıcı ve gereksiz olduğu söylenir. |
| Successive Refinement | Ardışık İyileştirme (Successive Refinement) | Chapter 14'ün başlığı ve omurgası: kodun büyük patama (big-bang) yeniden yazımı yerine küçük, testle doğrulanan ardışık adımlarla kademeli olarak iyileştirilmesi. |
| Suffix | Sonek (Suffix) | Bir şema öğesinin sonuna eklenen ve türünü belirleyen karakter (boş, *, #); sözlükteki 'Prefix' (önek) teriminin aynası. 'Schema Suffix Convention' kavram kartında kullanıldı. |
| Suite | Suite | Çevrilmez; FitNesse'de bir grup test sayfasını ifade eden yapı |
| Switch Statement | Switch İfadesi (Switch Statement) | Bir değişkenin farklı değerlerine göre dallanma sağlayan kontrol yapısı |
| Synchronization | Senkronizasyon (Synchronization) | Eşzamanlı erişimin kilitleme gibi mekanizmalarla koordine edilmesi; sayfadaki 'avoid synchronizing', 'synchronization requirements' ve 'synchronization problems' ifadelerinde geçer. |
| Synchronized | Senkronize (synchronized) | Java anahtar kelimesi; kod metninde `synchronized` olarak ters tırnakla gösterilir ve çevrilmez. Sayfa 181'de kritik bölgeyi korumak için kullanımı anlatılır. |
| synchronized block | Senkronize Blok (synchronized block) | `synchronized` anahtar sözcüğüyle korunan, aynı anda yalnızca bir iş parçacığının girebildiği kod parçası; mümkün olduğunca küçük tutulmalıdır. Sayfa 334'te 'we've kept the synchronized block very small' ifadesinde geçer. |
| Synopsis | Özet (Synopsis) | Gazete metaforunda ilk paragraf; kodda dosyanın tepesindeki üst seviye kavram ve algoritmalar |
| Synthesis Function | Sentez Fonksiyonu (Synthesis Function) | Analiz sonuçlarından çıktıyı/karşılaştırma sonucunu bir araya getiren fonksiyon grubu; sayfa 265'te 'another group of synthesis functions' ifadesinde geçer. |
| Table (constant array) | sabit tablosu (table) | Bu sayfada statik sabit diziler (int[]) biçimindeki veri tabloları (LAST_DAY_OF_MONTH, AGGREGATE_DAYS_TO_END_OF_PRECEDING_MONTH vb.); JCommon'da gün hesaplamaları için kullanılır ve enum'a dönüştürülme adaylarıdır. |
| Table Lookup | Tablo Araması (Table Lookup) | Bir sonucu hesaplamak yerine önceden sabitlenmiş bir tablodan okumak; sabit değer döndüren test stub'larının indirgendiği basit davranış |
| Talk to Friends, Not to Strangers | Yabancılarla Değil, Arkadaşlarla Konuş (Talk to Friends, Not to Strangers) | Demeter Yasası'nın özlü ifadesi: metot yalnızca doğrudan tanıdığı nesnelerle konuşmalı, onların döndürdüğü nesnelerin metotlarını çağırmamalıdır |
| TANSTAAFL | Bedava öğle yemeği diye bir şey yoktur (There Ain't No Such Thing As A Free Lunch) | Sayfa 339'da ölü kilidi önleme stratejilerinin hiçbirinin bedava olmadığı vurgusunda geçer; kısaltmanın açılımı dipnot 5'te verilir. |
| Teardown | Temizlik (Teardown) | FitNesse test sayfalarında testten sonra çalıştırılan temizlik sayfası/adımı |
| Technical Debt | Teknik Borç (Technical Debt) | Hızlı çözümlerden kaynaklanan birikmiş kod sorunları |
| Template Method | Şablon Metot (Template Method) | Ortak algoritma iskeletini üst sınıfta tanımlayıp değişen adımları alt sınıflara bırakan tasarım deseni [GOF]. |
| TEMPLATE METHOD pattern | ŞABLON METOT Deseni (TEMPLATE METHOD pattern) | Ortak algoritma iskeletini üst sınıfta tanımlayıp değişen adımları alt sınıflara bırakan tasarım deseni; bu sayfada büyük harflerle desen adı olarak geçer, sözlükteki 'Template Method | Şablon Metot (Template Method)' girdisiyle aynı kavramdır. |
| Temporal Coupling | Zamansal Bağımlılık (Temporal Coupling) | Fonksiyonun sadece belirli zamanlarda çağrılabilmesi sorunu |
| Temporaries | geçici değişkenler (temporaries) | Fonksiyon içinde kısa süreli ara hesaplar için kullanılan yerel değişkenler; 'Hide your constants and your temporaries.' ifadesinde (sabitlerinizi ve geçici değişkenlerinizi gizleyin) geçer. Sözlükteki 'Explaining Temporary Variables' (Açıklayıcı Geçici Değişkenler) terimiyle ilişkilidir. |
| temporary regression | Geçici Gerileme (Temporary Regression) | Kaldırılmak üzere kısa süreliğine eklenen kod (ör. boş catch); kavram kartında testler yeşil kaldığı sürece güvenli geçiş adımı olarak ele alınır |
| Test | Test | Çevrilmez |
| Test Case | Test Durumu (Test Case) | Bir test sınıfı içindeki tek bir senaryo: belirli bir girdinin beklenen davranışını denetler; 'Test' ve 'Unit Test' (Birim Testi) terimlerinden daha dar bir kavramdır. |
| Test Coverage | Test Kapsamı (Test Coverage) | Üretim kodunun testlerle çalıştırılan bölümünün oranı; yükseldikçe değişiklik yapma korkusu azalır |
| Test Double | Test Çifti (Test Double) | Birim testinde gerçek bağımlılığın yerine geçen herhangi bir nesne için kapsayıcı terim; stub, fake, mock vb. varyantları kapsar |
| Test Drive | test güdümlü geliştirmek (test drive) | Kitapta fiil olarak geçer: bir yapıyı (ör. mimariyi) testler aracılığıyla yönlendirerek geliştirmek; 'Test Driven Development' (Test Güdümlü Geliştirme) terimiyle aynı kökten gelir. |
| Test Driven Development | Test Güdümlü Geliştirme (Test Driven Development / TDD) | Önce test yaz, sonra kodu yaz disiplini |
| Test Jig | Test Jig'i (Test Jig) | Kodu denetlenmesi istenen koşullar altında (ör. farklı sleep/yield rejimlerinde) çalıştırmak için kurulan test düzeneği; sayfa 189'da 'test jigs' ifadesinde geçer. |
| Test Suite | Test Paketi (Test Suite) | Bir sistemin otomatik testlerinin bütünü; üretim kodu değiştikçe onunla birlikte bakımı yapılmalıdır |
| Testable System | Test Edilebilir Sistem (Testable System) | Kapsamlı biçimde test edilen ve testlerinin tümünü her zaman geçen sistem; test edilemeyen sistem doğrulanamaz ve asla devreye alınmamalıdır. Sayfa 172'de 'Simple Design Rule 1: Runs All the Tests' kesitinde geçer. |
| Testing API | Test API'si (Testing API) | Testlerin kullandığı, sistemin API'lerini saran özelleşmiş fonksiyon ve yardımcı araçlar kümesi; alana özgü test dilinin kendisi |
| Testing Framework | Test Çerçevesi (Testing Framework) | Testlerin yazılmasını, çalıştırılmasını ve sonuçların doğrulanmasını sağlayan çerçeve (framework); bu sayfada geçirimin (throughput) doğrulanmasında 'through a testing framework' ifadesinde geçer. |
| The Principle of Least Astonishment | En Az Şaşkınlık İlkesi (The Principle of Least Astonishment) | 'The Principle of Least Surprise' (En Az Şaşırtma İlkesi) teriminin eş anlamlı varyantı; dipnot 2'de geçer. |
| Third-Party API | Üçüncü Taraf API (Third-Party API) | Başka bir satıcı ya da ekip tarafından sağlanan API; sarmalanarak bağımlılık azaltılır |
| Third-Party Code | Üçüncü Taraf Kod (Third-Party Code) | Satın alınan paketler, açık kaynak kütüphaneler ya da başka ekiplerin ürettiği, kontrolümüzde olmayan kod; sağlayıcı geniş uygulanabilirlik, kullanıcı ise odaklı bir arayüz ister (Bölüm 8) |
| Thread | İş Parçacığı (Thread) | Bir süreç içinde diğer işlerle eşzamanlı yürütülebilen bağımsız çalışma birimi |
| Thread Management | İş Parçacığı Yönetimi (Thread Management) | İş parçacıklarının oluşturulması, zamanlanması ve denetlenmesi gibi iş parçacığına özgü sorumlulukların bütünü; temiz eşzamanlılık için az sayıda, iyi denetlenen yerde toplanmalıdır. Sayfa 320'de 'thread management should be kept to a few, well-controlled places' ifadesinde geçer. |
| Thread Pool | İş Parçacığı Havuzu (Thread Pool) | Önceden oluşturulmuş, yeniden kullanılabilir iş parçacıkları kümesi; `Executor` çerçevesinin yürütmeyi yönettiği yapı. Bu sayfada 'using thread pools' ifadesinde geçer. Sözlükteki 'Resource Pool | Kaynak Havuzu (Resource Pool)' terimiyle ilişkilidir. |
| Thread-Aware / Thread-Ignorant | İş Parçacığından Haberdar / Habersiz (Thread-Aware / Thread-Ignorant) | Sistemi POJO'lara bölme stratejisindeki iki kod türü: eşzamanlılık mekanizmalarını bilen (thread-aware) kod ve iş parçacıkları hakkında hiçbir şey bilmeyen, saf iş mantığı taşıyan (thread-ignorant) kod. Sayfa 190'ın Sonuç kesitinde geçer; 'Thread-Safe' teriminden ayrıdır. |
| Thread-Safe | İş Parçacığına Güvenli (Thread-Safe) | Birden çok iş parçacığı tarafından eşzamanlı erişildiğinde güvenle kullanılabilen yapılar için sıfat; sayfadaki 'Thread-Safe Collections' başlığı ve 'thread-safe collections' maddesinde geçer. |
| Threading Policy | İş Parçacığı Politikası (Threading Policy) | Bir sunucunun gelen istekleri hangi iş parçacığı stratejisiyle işleyeceğini belirleyen kural/strateji; örneğin her istek için bir iş parçacığı (thread per request) açmak ya da bir Executor kullanmak. Sayfa 320'de 'The current policy is easy to implement' ifadesinde geçer. |
| Three Laws of TDD | TDD'nin Üç Yasası (Three Laws of TDD) | Robert C. Martin: başarısız bir birim testi yazmadan üretim kodu yazma; testin yalnızca başarısız olmaya yetecek kadarını yaz (derlenmemek de başarısızlıktır); yalnızca başarısız testi geçirecek kadar üretim kodu yaz |
| Throughput | Geçirim (Throughput) | Birim zamanda işlenen iş/istek miktarı; sayfa 178'de 'geçirimi (throughput)' biçiminde kullanılmıştır. |
| Tiger Team | Kaplan Ekibi (Tiger Team) | En yetenekli geliştiricilerden oluşan ekip |
| time zone | zaman dilimi (time zone) | Bir bölgede geçerli olan standart saat ayarı; bir anın (instant) hangi takvim gününe denk geldiğini belirlediği için tarih temsilinde önem taşır. Kod Javadoc'unda 'the date itself depending on the time-zone' ifadesinde geçer. |
| Time-Sharing System | Zaman Paylaşımlı Sistem (Time-Sharing System) | Birden çok kullanıcının/terminalin tek bir bilgisayarı dönüşümlü olarak paylaştığı eski işletim sistemi mimarisi; 'multi-terminal time-sharing system' ifadesinde geçer. |
| TO Paragraph | TO Paragrafı | Fonksiyonun ne yaptığını "Bunu yapmak için (TO)..." kalıbıyla anlatan cümle; LOGO dilindeki TO anahtar kelimesinden esinlenilmiştir |
| TODO | TODO / Yapılacaklar (TODO) | Gelecek için bırakılan notlar ve hatırlatıcılar |
| Tolerate the Failure | Başarısızlığa Katlanmak (Tolerate the Failure) | Üç düzeltme yolundan ilki (sayfa 330'da level-2 başlık): başarısızlığın zararsız olduğu durumlarda, kodu değiştirmek yerine hatayı yakalayıp yoksayma seçeneği; kitap bunu 'özensiz' (sloppy) bulur. |
| Topological Sort (of Functions) | Topolojik Sıralama (Topological Sort) | Fonksiyonları, her tanımı kullanıldığı yerin hemen ardına gelecek biçimde sıralama; sayfa 265'te 'They are topologically sorted' ifadesinde geçer. |
| Touche | Touche! | Fransızca 'vuruldum / yendin' ifadesi; eskrim (çarpışma) oyunundan gelen, rakibin vuruşunu kabul eden teslimiyet sözü. Sayfa 236'da tip-zincirinin (type-case) kaldırılmasıyla birlikte kullanılır. |
| Train Wreck | Tren Kazası (Train Wreck) | Birbirine noktayla bağlanmış çağrı zinciri; Demeter Yasası ihlalinin tipik görüntüsü |
| Transaction | İşlem (Transaction) | Ya bütünüyle gerçekleşen ya da hiç gerçekleşmemiş sayılan iş birimi; try blokları buna benzetilir |
| Transactional Behavior | İşlemsel Davranış (Transactional Behavior) | Bir işlemin (Transaction) bütünlüğünü yöneten davranış; EJB'de dağıtım betimleyicisinde bildirilir |
| Transformation | Dönüşüm (Transformation) | Kodun bir halden başka bir hale davranışı koruyarak değiştirilmesi |
| Transitive Navigation | Geçişli Gezinme (Transitive Navigation) | G36 sezgisel kuralı: bir modülün, iş birlikçilerinin iş birlikçilerini bilmesi (ör. a.getB().getC() gezinmesi); Demeter Yasası'nın (Law of Demeter) ihlal biçimidir. |
| Trap Function | Tuzak Fonksiyonu (Trap Function) | Belirli bir olayı (bu sayfada ön panel anahtarlarından birinin çevrilmesini) algılayan ve ardından ilgili denetimi yapan yardımcı fonksiyon; burada geçici çözüm (hack) olarak kullanılır. |
| Triadic | Üçlü (Triadic) | Üç argümanlı fonksiyon |
| Trial and Error | Deneme-Yanılma (Trial and Error) | Uygun iş parçacığı dengesinin sistematik ölçümle değil deneysel tekrarlarla bulunması; bu sayfada 'trial an error' (yazım hatası) ifadesinde geçer. |
| trivial | önemsiz (trivial) | Çok basit, az uğraş gerektiren; bu sayfada `setBooleanArg` fonksiyonu için kullanılır ve taşınmaya ilk o hazırlanır |
| trivial operation | önemsiz işlem (trivial operation) | Az çaba ve düşünme gerektiren, basit işlem; derlemenin (build) tek ve önemsiz bir işlem olması gerektiği ifadesinde geçer. Sözlükteki 'trivial' girdisiyle uyumludur. |
| Trivial Test | Önemsiz Test (Trivial Test) | T3 sezgisel kuralının konusu: yazması kolay ve belgeleme değeri, üretim maliyetinden yüksek olan testler; atlanmamalıdır. Sözlükteki 'trivial | önemsiz (trivial)' teriminin test bağlamındaki kullanımı. |
| Tunable | Ayarlanabilir (Tunable) | İş parçacığı sayısı gibi parametrelerin çalışma sırasında kolayca ayarlanabilir olması; bu sayfada 'Make Your Threaded Code Tunable' başlığında geçer. |
| Tutorial: Full Code Examples | Öğretici: Tam Kod Örnekleri | Appendix A: Concurrency II'nin tam kod örnekleri kesitinin başlığı; sayfa 343'te level-1 başlık olarak geçer. 'Sonuç (Conclusion)' kesitinden sonraki uygulamalı bölümü açar ve tamamı İngilizce kod listelerinden oluşur. |
| Type System | Tür Sistemi (Type System) |  |
| Type-Case | Tip-Zinciri (Type-Case) | Bir değerin türüne göre if/else veya switch ile dallanan kod bloğu; davranış polimorfizme (çok biçimliliğe) devredilerek kaldırılmalıdır. Sayfa 231'de setArgument içindeki 'horrible type-case' ifadesinde geçer. |
| Ubiquitous Language | Her Yerde Geçerli Dil (Ubiquitous Language) | Eric Evans'ın [DDD]'deki terimi: bir projenin tüm katılımcılarının (alan uzmanları ve geliştiriciler) ortaklaşa kullandığı, kodda da birebir geçerli olan ortak dil; sayfa 311'de 'a ubiquitous language for the project' ifadesinde geçer. |
| Unambiguous Names | Belirsizliğe Yer Bırakmayan İsimler (Unambiguous Names) | N4 sezgisel kuralının başlığı: isimlerin, fonksiyonun ya da değişkenin ne yaptığını belirsizliğe yer bırakmayacak biçimde anlatması gerektiğini söyler. |
| Unchecked Exception | Denetlenmeyen İstisna (Unchecked Exception) | Bildirilmesi zorunlu olmayan istisna (Java'da RuntimeException alt sınıfları) |
| Uncle Bob's Formatting Rules | Uncle Bob'un Biçimlendirme Kuralları | Bölüm 5'te yazarın kişisel biçimlendirme kurallarını CodeAnalyzer.java örneğiyle gösterdiği alt başlık (sayfa 91 ve devamı). |
| Uninterruptable (atomic operation) | Kesintiye Uğratılamaz (uninterruptable) | Atomik işlem (atomic operation) tanımında geçen özellik: başladıktan sonra başka bir iş parçacığı tarafından bölünemez. Java Bellek Modeli'ne (Java Memory Model) göre 32 bitlik atama kesintiye uğratılamazken, 64 bitlik atama iki 32 bitlik yazmaya bölündüğü için bu özelliği taşımaz. |
| Unit Test | Birim Testi (Unit Test) |  |
| Unprofessional | Profesyonel Olmayan (Unprofessional) | Mesleğin gerekliliklerini yerine getirmemek |
| User Story | Kullanıcı Hikayesi (User Story) | Çevik (Agile) geliştirmede, müşteriye değer katan küçük ve uygulanabilir işlev parçası; sözlükteki 'Hikaye (Story)' terimiyle uyumludur. |
| Utility Class | Yardımcı Sınıf (Utility Class) | Birden çok sınıfın paylaştığı ortak private davranışı yalıtan küçük, odaklı sınıf; ör. Listing 10-10'daki Where ve ColumnList |
| Variable | Değişken (Variable) |  |
| Variable Declaration | Değişken Tanımlaması (Variable Declaration) | Değişkenler kullanıldıkları yere mümkün olduğunca yakın tanımlanmalıdır |
| Vertical Density | Dikey Yoğunluk (Vertical Density) | Sıkı ilişkili kod satırlarının dikey olarak bitişik yazılması; yakın ilişkiyi gösterir |
| Vertical Distance | Dikey Mesafe (Vertical Distance) | Yakından ilişkili kavramlar arasındaki satır mesafesi; anlaşılabilirlik açısından birbirlerine ne kadar önemli olduklarını yansıtmalıdır |
| Vertical Formatting | Dikey Biçimlendirme (Vertical Formatting) | Dosya uzunluğu, satır sırası ve dikey boşluk ile ilgili biçimlendirme |
| Vertical Openness | Dikey Açıklık (Vertical Openness) | Kavramları birbirinden boş satırlarla ayırma; her satır grubu tam bir düşünceyi temsil eder |
| Vertical Ordering | Dikey Sıralama (Vertical Ordering) | Çağrılan fonksiyonun çağıranın altında yer alması; kaynak dosya üst seviyeden alt seviyeye akar |
| Vertical Separation | Dikey Ayrım (Vertical Separation) | Değişkenlerin ve fonksiyonların kullanıldıkları yere yakın tanımlanması: yerel değişkenler ilk kullanımın hemen üstünde, özel fonksiyonlar ilk çağrının hemen altında; G10 sezgisel kuralının konusu. Sözlükteki 'Dikey Mesafe (Vertical Distance)' terimiyle ilişkilidir. |
| Virtualization | Sanallaştırma (Virtualization) | Donanım, işletim sistemi gibi kaynakları yazılım katmanında soyutlayarak birden çok sanal ortamda paylaştırma; dünyanın büyük Web sitelerinin ölçeklenirken kullandığı altyapı tekniklerinden biri. |
| Visitor Pattern | Ziyaretçi Deseni (Visitor Pattern) |  |
| Visual Cue | Görsel İpucu (Visual Cue) | Okuyucunun gözüne yeni ve ayrı bir kavramın başladığını belirten işaret; ör. boş satır |
| volatile | volatile (geçici/değişken değer) | Sayfa 344'te `volatile boolean keepProcessing` ifadesinde geçen Java anahtar sözcüğü: alanın, iş parçacıkları (threads) arasında en güncel değeriyle okunup yazılmasını garanti eder; önbellekte kalmış eski bir değerin okunmasını engeller. Anahtar sözcük olduğu için kodda olduğu gibi kalır, açıklaması parantez içinde verilir. |
| Wading | Çamura Batma (Wading) | Kötü kodda ilerlerken hissedilen zorluk metaforu |
| Ward's Principle | Ward'ın İlkesi (Ward's Principle) | Ward Cunningham'ın temiz kod tanımı: her rutin, tam olarak beklediğiniz gibi çıkar |
| Warning of Consequences | Sonuçlara Dair Uyarı (Warning of Consequences) | Belirli bir işlemin etkileri hakkında diğer programcıları uyaran yorum |
| weasel words | kaypak sözcükler (weasel words) | Processor, Manager, Super gibi anlamı belirsiz bırakan, bir sınıfın gerçekte ne yaptığını gizleyen ve çoğu zaman fazla sorumluluk yığılmasına işaret eden isim bileşenleri. |
| Week In Month (constant) | Aydaki Hafta (Week In Month sabiti) | SerialDate'in bir ay içindeki haftayı belirten public static final int sabitleri: FIRST_WEEK_IN_MONTH = 1, SECOND_WEEK_IN_MONTH = 2, THIRD_WEEK_IN_MONTH = 3, FOURTH_WEEK_IN_MONTH = 4; ayın son haftası LAST_WEEK_IN_MONTH = 0 ile temsil edilir (Listing B-1). |
| weekday code | hafta günü kodu (weekday code) | Haftanın günlerini temsil eden tamsayı kodu; SerialDate'in getDayOfWeek() ve isValidWeekdayCode gibi metotlarında geçer (bu sayfada getDayOfWeek() soyut metodu ve javadoc'u). 'Day-of-the-week relative constant' (Hafta Günü Göreli Sabiti) teriminden ayrıdır. |
| Whim | Keyfî (Whim) | 'on a whim' = keyfî olarak, içinden geldiği anda; test paketinin anında ve istekle çalıştırılabilir olması TDD'nin güveninin temelidir. Sayfa 213'te 'run on a whim' ifadesinde geçer. |
| Whole Picture | tüm resim (whole picture) | Uzun bir yeniden düzenleme sırasında ya da ardından ayrıntılardan uzaklaşıp sınıfın/sistemin bütününe yeniden bakıp değerlendirmek; bu sayfada 'let’s look at the whole picture again' ifadesinde geçer. Sözlükteki 'Big Picture' (Büyük Resim) girdisinden ayrıdır: Big Picture genel sistem bakış açısıdır, Whole Picture ise mevcut bütüncül biçime atılan kontrol noktası niteliğindeki bakıştır. |
| Wildcard Import | Joker İmport (Wildcard Import) | J1 sezgisel kuralı: bir paketten iki ya da daha fazla sınıf kullanıldığında paketin tamamını (import package.*) içe aktaran import biçimi; özel (specific) importlardan farklı olarak gerçek bir bağımlılık (dependency) yaratmaz, paketi yalnızca arama yoluna (search path) ekler. |
| Wiring | Bağlama (Wiring) | Nesnelerin bağımlılıklarının kurularak uygulamanın bir araya getirilmesi işlemi |
| Work in Progress | Tamamlanmamış Çalışma (Work in Progress) | Belirgin biçimde bitirilmemiş, üzerinde çalışma süren kod durumu; bu sayfada 'It's clearly a work in progress' ifadesinde geçer. Sözlükteki 'Rough Draft' (Kaba Taslak) terimiyle bağlantılıdır. |
| Wrapper | Sarmalayıcı (Wrapper) |  |
| Writing Shy Code | Utangaç Kod Yazmak (Writing Shy Code) | Pragmatik Programcılar'ın (The Pragmatic Programmers) Demeter Yasası için kullandığı ifade: modüller yalnızca doğrudan iş birlikçilerini (immediate collaborators) bilmeli, tüm sistemin gezinme haritasını bilmemelidir. |
| zero based | sıfır tabanlı (zero based) | Dizi ya da uzunluk değerlerinin 0'dan başlaması; karşıtı '1 based' (birden başlayan). Sayfa 261'de 'the suffixIndex variable is not zero based; it is 1 based' ifadesinde geçer; bir eksik/fazla (off-by-one) hatalarının kaynağıdır. |
