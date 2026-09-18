# Clean Code - Terim Sözlüğü (Glossary)

Bu dosya çeviri boyunca tutarlılık sağlamak için kullanılır.
Her yeni sayfa çevrildikten sonra, o sayfada geçen yeni teknik terimler buraya eklenir.
Çeviriye başlamadan önce bu dosya okunmalı ve mevcut terimler kullanılmalıdır.

## Terimler

| İngilizce Terim | Türkçe Karşılığı | Açıklama/Not |
|----------------|-----------------|-------------|
| Abstract Class | Soyut Sınıf (Abstract Class) | Yalnızca kavramı temsil eden, gerçekleştirim ayrıntısı taşımayan (ya da kısmen taşıyan) sınıf; istemciyi somut ayrıntılardan yalıtmak için arayüzlerle birlikte kullanılır |
| Abstract Factory | Soyut Fabrika (Abstract Factory) | Nesne oluşturma mantığını gizleyen tasarım deseni |
| Abstraction | Soyutlama (Abstraction) |  |
| Acceptance Test | Kabul Testi (Acceptance Test) | Kullanıcı gereksinimlerini doğrulayan test |
| Access Policy | Erişim Politikası (Access Policy) | Bir arayüzün metotlarıyla verinin nasıl okunup değiştirilebileceğine dair dayattığı kurallar; ör. koordinatları ayrı oku, birlikte ayarla |
| Accessor | Erişimci (Accessor) | JavaBean standardında get metotları |
| Active Record | Aktif Kayıt (Active Record) | Veritabanı tablosunu doğrudan yansıtan, save/find gibi gezinme metotları olan özel DTO biçimi |
| Ad hoc | ad hoc (geçici/rastgele yazılmış) | Özel bir plana veya kalıba uymayan, ihtiyaç anında gelişigüzel yazılan kod |
| Adapter Pattern | Adaptör Deseni (Adapter Pattern) | Uyumsuz bir arayüzü (ör. üçüncü taraf API) uygulamanın beklediği arayüze çeviren tasarım deseni; API değiştiğinde tek değişiklik noktası sağlar [GOF] |
| Address | Adres (Address) |  |
| Agile | Çevik (Agile) | Çevik yazılım geliştirme |
| Amplification | Önem Belirtme (Amplification) | Önemsiz görünebilecek bir şeyin önemini vurgulayan yorum |
| Annotation | ek açıklama (annotation) | Java 5 ile gelen, sınıf, metot ve alanlara üstveri (metadata) ekleyen @ işaretli bildirimler; JPA gibi framework'ler bağlama (wiring) ve kalıcılık bilgisini bu ek açıklamalarla taşır. Kitapta 'Java 5 annotations' olarak geçer. |
| Application Container | Konteyner (Container) | EJB'de bean'leri barındıran ve yaşam döngüsünü yöneten uygulama sunucusu ortamı; sözlükteki 'Kap (Container)' veri yapısı kapsayıcısından farklıdır. Kitapta 'konteyner' olarak kullanılır |
| Argument | Argüman (Argument) | Fonksiyona geçirilen parametre |
| Argument List | Argüman Listesi (Argument List) | Değişken sayıda argüman alan fonksiyonlar (varargs) |
| Argument Object | Argüman Nesnesi (Argument Object) | Birden fazla argümanı bir sınıfa sarma tekniği |
| Aspect | Görünüm (Aspect) | AOP'de belirli bir kaygıyı desteklemek için sistemin hangi noktalarında davranışın tutarlı biçimde değiştirileceğini belirten modüler yapı |
| Aspect Oriented Programming | Görünüm Yönelimli Programlama (AOP) | Tekrarı kaldırma stratejilerinden biri |
| Assembly Language | Assembly Dili (Assembly Language) | Makine koduna çok yakın, düşük seviyeli programlama dili |
| Assertion | Doğrulama İfadesi (Assertion) | Doğru olması gereken bir koşulu çalışma anında denetleyen ifade (assert); iyi bir belgelemedir ama null sorununu çözmez |
| Assignment Operator | Atama Operatörü (Assignment Operator) | Sağ taraftaki değeri sol taraftaki değişkene atayan operatör (=) |
| Assignment Statement | Atama İfadesi (Assignment Statement) | Bir değişkene değer atayan ifade |
| Atomic Operation | Atomik İşlem (Atomic Operation) | Bölünemeyen, tek adımda bütün olarak gerçekleşen işlem; birlikte anlam taşıyan değerlerin tek çağrıyla ayarlanması |
| Attention to Detail | Detaylara Dikkat (Attention to Detail) | Temiz kodun temel özelliği |
| Author | Yazar (Author) |  |
| Autocomplete / Code Completion | Otomatik Kod Tamamlama (Autocomplete) | IDE'nin isim önerme özelliği |
| Automated Tool | Otomatik Araç (Automated Tool) | Biçimlendirme kurallarını geliştirici yerine uygulayan araç |
| Bad Code | Kötü Kod (Bad Code) | Bakımı zor, okunması güç kod |
| Bean | Bean | Private alanlarına getter ve setter ile erişilen veri sınıfı (JavaBean); terim çevrilmez |
| Beautiful Code | Güzel Kod (Beautiful Code) |  |
| Bibliography | Kaynakça (Bibliography) |  |
| Big Picture | Büyük Resim (Big Picture) | Sistemin ya da takımın genelini gören üst seviye bakış açısı |
| Boilerplate Code | Basmakalıp/Şablon Kod (Boilerplate Code) | Pek çok yerde aynı biçimde tekrarlanan, çoğunlukla kopyalanarak çoğaltılan kalıp kod |
| Boundary | Sınır (Boundary) | Kendi kodumuzun kontrol etmediğimiz kodla (üçüncü taraf paket, açık kaynak ya da başka bir ekibin bileşeni) buluştuğu yer; Chapter 8'in konusu |
| Boundary Interface | Sınır Arayüzü (Boundary Interface) | Sistemin sınırında üçüncü taraf kodla temas eden arayüz (ör. Map); kullanıldığı sınıfta ya da yakın sınıf ailesinde tutulmalı, public API'lerde dolaştırılmamalı |
| Boundary Test | Sınır Testi (Boundary Test) | Üçüncü taraf koda giden arayüzü üretim kodunun kullandığı şekilde çalıştıran testler; yeni sürümlere geçişi kolaylaştırır |
| Boy Scout Rule | İzci Kuralı (Boy Scout Rule) | Kamp alanını bulduğundan daha temiz bırak prensibi |
| Breaking Indentation | Girintiyi Bozma (Breaking Indentation) | Kısa if/while/fonksiyon bloklarını tek satıra sıkıştırarak girinti kuralının çiğnenmesi; kaçınılması gereken bir alışkanlık |
| Broken Windows | Kırık Pencereler (Broken Windows) | Pragmatik Programcılar metaforu: bir kırık pencere tüm binayı çürütür |
| Bug | Hata (Bug) | Sektörde "bug" olarak da kullanılır |
| BUILD-OPERATE-CHECK | KUR-İŞLET-DENETLE (BUILD-OPERATE-CHECK) | Testi üç bölüme ayıran desen: test verisini kur, bu veri üzerinde işlem yap, işlemin beklenen sonucu verdiğini denetle; Arrange-Act-Assert olarak da bilinir (FitNesse kabul testi desenleri) |
| Business Logic | İş Mantığı (Business Logic) | Uygulamanın iş kurallarını (Business Rule) uygulayan mantık katmanı; sözlükteki 'İş Kuralı (Business Rule)' teriminden türetilmiştir. |
| Business Rule | İş Kuralı (Business Rule) | Uygulamanın alanına ait politika ve hesaplama mantığı; veri yapısına değil nesneye aittir |
| Byte-Code Manipulation | Bayt Kodu İşleme (Byte-Code Manipulation) | Derlenmiş sınıf dosyalarının bayt kodunun çalışma anında değiştirilmesi; arayüzü olmayan sınıfları vekillemek için CGLIB, ASM, Javassist gibi kütüphaneler kullanılır. |
| Caching | Önbellekleme (Caching) | Sık erişilen verilerin, tekrar hesaplama ya da veritabanı erişiminden kaçınmak için hızlı erişilen bellekte saklanması; çapraz kesim kaygısı (cross-cutting concern) örneği. |
| Callee | Çağrılan Fonksiyon (Callee) | Başka bir fonksiyon tarafından çağrılan fonksiyon |
| Caller | Çağıran Fonksiyon (Caller) | Başka bir fonksiyonu çağıran fonksiyon |
| Care | Önemseme (Care) | Zanaata ve koda duyulan özen |
| Casting | Tür Dönüştürme (Casting) | Bir değeri açıkça başka bir türe çevirme, ör. (Sensor) sensors.get(id); istemci koda dağıldığında kodu kirletir |
| Chain of Inheritance | Kalıtım Zinciri (Chain of Inheritance) | Bir sınıftan üst sınıflarına uzanan kalıtım hiyerarşisi |
| Check In | Teslim Etmek (Check In) | Kod ve test değişikliklerini sürüm kontrol sistemindeki depoya kaydetmek; commit ile benzer anlamda |
| Checked Exception | Denetlenen İstisna (Checked Exception) | Java'da metot imzasında throws ile bildirilmesi derleyici tarafından zorunlu tutulan istisna |
| Clarification | Netleştirme (Clarification) | Karmaşık kütüphane çağrılarını veya dönüş değerlerini açıklayan yorum |
| Clarity | Açıklık (Clarity) | Kodun anlaşılırlığı |
| Class | Sınıf (Class) |  |
| Class Name | Sınıf İsmi (Class Name) |  |
| Class Size | Sınıf Boyutu (Class Size) | Bir sınıfın kapladığı satır/sorumluluk büyüklüğü |
| Clean Code | Temiz Kod (Clean Code) |  |
| Clean Test | Temiz Test (Clean Test) | Başlıca niteliği okunabilirlik olan test: açıklık, sadelik ve ifade yoğunluğu; az ifadeyle çok şey söyler |
| Client Code | İstemci Kod (Client Code) | Bir sınıfı, arayüzü ya da API'yi kullanan (çağıran) kod |
| Closed Class | Kapalı Sınıf (Closed Class) | Açık Kapalı İlkesi (OCP) anlamında değişikliğe kapalı sınıf: yeni işlev, mevcut sınıfı düzenleyerek değil yeni bir alt sınıf ekleyerek kazandırılır (Listing 10-10) |
| Closing Brace | Kapatma Parantezi (Closing Brace) | Fonksiyon veya blok sonuna eklenen (artık gereksiz) yorum |
| Code Formatting | Kod Biçimlendirme (Code Formatting) | Kodun biçimini yöneten kuralların uygulanması; bir iletişim aracıdır |
| Code Smell | Kod Kokusu (Code Smell) | Koddaki potansiyel sorunların belirtisi |
| Code-Sense | Kod Duygusu (Code-Sense) | Temiz kodu kirli koddan ayırt etme ve düzeltme yetisi |
| Coding Standard | Kodlama Standardı (Coding Standard) | Bir takımın uyduğu biçimlendirme/kodlama kurallarının yazılı ya da örnek kod hâlindeki tanımı |
| Coding Style | Kodlama Biçemi (Coding Style) | Bir geliştirici ya da ekibin kodu yazarken izlediği tutarlı biçim alışkanlıkları |
| Cognitive Break | Bilişsel Kesinti (Cognitive Break) | Fonksiyon imzasını kontrol etme gerekliliği |
| Cohesion | Bütünlük (Cohesion) | Bir grup argümanın ya da elemanın birbiriyle ne kadar doğal biçimde ilişkili olduğu; ör. bir noktanın x ve y bileşenleri |
| Collection Abstraction | Koleksiyon Soyutlama (Collection Abstraction) |  |
| Command Query Separation | Komut Sorgu Ayrımı (Command Query Separation) | Fonksiyonlar ya bir şey yapmalı ya da bir soruyu yanıtlamalı, ikisini birden değil |
| Commented-out Code | Yorum Satırına Alınmış Kod (Commented-out Code) | Silinmesi gereken, artık kullanılmayan kod blokları |
| Commit | Commit | Çevrilmez, olduğu gibi kullanılır |
| Commitment | Taahhüt (Commitment) |  |
| Compiler | Derleyici (Compiler) | Kaynak kodu makine koduna çeviren program |
| Component Oriented Programming | Bileşen Yönelimli Programlama (COP) | Tekrarı kaldırma stratejilerinden biri |
| Composed Method | Oluşturulmuş Metot (Composed Method) | Metodu küçük adımlara bölerek oluşturma |
| Conceptual Affinity | Kavramsal Yakınlık (Conceptual Affinity) | Kod parçalarının kavramsal olarak birbirine yakın olması; doğrudan bağımlılık ya da benzer işlem yapma nedeniyle olabilir; yakınlık arttıkça dikey mesafe azalmalı |
| Concrete Class | Somut Sınıf (Concrete Class) | Gerçekleştirim ayrıntılarını (kodu) içeren sınıf; istemcinin doğrudan somut sınıfa bağımlı olması, ayrıntılar değiştiğinde risk yaratır |
| Configuration File | Yapılandırma Dosyası (Configuration File) | Hangi nesnelerin birbirine bağlanacağı (wiring) gibi kurulum kararlarının koda gömülmek yerine dışarıda tutulduğu dosya; ör. Spring'in XML yapılandırma dosyası |
| Consistent Lexicon | Tutarlı Kelime Haznesi (Consistent Lexicon) | Kod tabanında tutarlı terimler kullanma prensibi |
| Constant | Sabit (Constant) | Programın çalışması boyunca değişmeyen, adlandırılmış değer; uygun soyutlama seviyesinde tutulmalıdır [G35] |
| Constructor | Kurucu (Constructor) | Bir nesne oluşturulurken çağrılan, ilklendirme yapan özel metot |
| Constructor Argument | kurucu argümanı | Bir nesnenin kurucusuna (constructor) geçirilen parametre; Abstract Factory bağlamında uygulama, kurulum ayrıntılarını bilmeden fabrika yöntemiyle uygulamaya özgü kurucu argümanları sağlayabilir |
| Container | Kap (Container) | Veri yapısı kapsayıcısı (List, Set, Map vb.) |
| Context | Bağlam (Context) | Kodun anlaşılması için gereken çevresel bilgi |
| Continuous Improvement | Sürekli İyileştirme (Continuous Improvement) |  |
| Conundrum | İkilem (Conundrum) | Temiz kodun temel felsefesiyle ilgili zorluk |
| Convention over Configuration | yapılandırmadan çok kural (convention over configuration) | Açıkça yapılandırılacak pek çok şey için akla uygun varsayılan davranışlar tanımlama ilkesi; açık 'bağlama' (wiring) mantığı miktarını azaltır. |
| Coupling | Bağımlılık (Coupling) | Bileşenlerin birbirine bağımlılığı |
| Craftsmanship | Zanaat / Ustalık (Craftsmanship) | Yazılım zanaatı |
| Crawler | Tarayıcı (Crawler) | Sayfaları dolaşıp işleyen bileşen; FitNesse'de wiki sayfalarını ekleyip bulan nesne (crawler.addPage). Web tarayıcısı (browser) ile karıştırılmamalı |
| Crisp Abstraction | Keskin Soyutlama (Crisp Abstraction) | Grady Booch'un temiz kod tanımından; net ve öz soyutlama |
| Cross-Cutting Concern | Çapraz Kesim Kaygısı (Cross-Cutting Concern) | Kalıcılık, güvenlik, işlem yönetimi gibi nesnelerin doğal sınırlarını keserek birçok modüle yayılan kaygı türü |
| Data Abstraction | Veri Soyutlama (Data Abstraction) | Verinin nasıl saklandığını değil ne anlama geldiğini dışarı açma |
| Data Access Object (DAO) | Veri Erişim Nesnesi (DAO) | Kalıcı depoya (ör. veritabanı) erişimi kapsülleyen, iş nesnesini depolama ayrıntılarından ayıran nesne; kitapta 'data accessor object (DAO)' olarak geçer. |
| Data Structure | Veri Yapısı (Data Structure) | Verisini açıkça gösteren, anlamlı davranışı olmayan yapı |
| Data Transfer Object (DTO) | Veri Aktarım Nesnesi (Data Transfer Object / DTO) | Public değişkenleri olan, fonksiyonu olmayan saf veri yapısı; veritabanı ve soket sınırlarında kullanılır |
| Data Type | Veri Türü (Data Type) | Bir değişkenin veya değerin türünü belirten kavram |
| Data/Object Anti-Symmetry | Veri/Nesne Karşı Simetrisi (Data/Object Anti-Symmetry) | Nesneler yeni türü, veri yapıları yeni işlemi kolaylaştırır |
| DBMS | DBMS (Veritabanı Yönetim Sistemi — Database Management System) | Database Management System; veritabanını yöneten yazılım. Kısaltma İngilizce kalır |
| Deadline | Son Teslim Tarihi (Deadline) | Projenin teslim edilmesi gereken tarih |
| Decay | Çürüme (Decay) | Kırık pencereler metaforunda kodun giderek kötüleşmesi |
| Decisive | Kararlı (Decisive) | Kodun tereddütsüz ve kesin olması |
| Declaration | Tanımlama (Declaration) | Bir değişkenin ya da üyenin adının ve türünün kodda bildirilmesi |
| Decorator (GoF pattern) | Süsleyici (Decorator) | GoF tasarım deseni: bir nesneyi aynı arayüzü taşıyan başka bir nesneyle sarmalayarak (wrap) davranışını saydam (transparent) biçimde genişletme; iç içe süsleyiciler 'Rus bebeği (Russian doll)' gibi katmanlanır. |
| Decoupling | Ayrıştırma (Decoupling) | Bileşenler arasındaki bağımlılığı (coupling) azaltma; bu şekilde ayrıştırılmış sistemler daha kolay test edilir, daha esnektir ve yeniden kullanımı teşvik eder |
| Default Constructor | Varsayılan Kurucu (Default Constructor) | Argüman almayan kurucu; log4j'de ConsoleAppender'ın varsayılan kurucusu nesneyi yapılandırılmamış bırakır |
| Delegation | Delege Etme (Delegation) | Sorumluluğu başka bir nesneye devretme |
| Dependency | Bağımlılık (Dependency) |  |
| Dependency Injection | Bağımlılık Enjeksiyonu (Dependency Injection) |  |
| Dependency Inversion Principle (DIP) | Bağımlılık Tersine Çevirme İlkesi (DIP) | Üst seviye modüller alt seviye modüllere değil, soyutlamalara bağımlı olmalı |
| Dependency Magnet | Bağımlılık Mıknatısı (Dependency Magnet) | Birçok sınıfın bağımlı olduğu merkezi yapı (ör. Error enum) |
| Dependent Functions | Bağımlı Fonksiyonlar (Dependent Functions) | Biri diğerini çağıran fonksiyonlar; dikey olarak yakın durmalı, çağıran çağrılanın üstünde olmalı |
| Deployment Descriptor | Dağıtım Betimleyicisi (Deployment Descriptor) | EJB'de kalıcılık, işlemsel davranış ve güvenlik gibi ayarları kaynak koddan bağımsız olarak bildiren XML dosyası |
| Descriptive Names | Betimleyici İsimler (Descriptive Names) | Fonksiyonun ne yaptığını açıkça anlatan, gerekirse uzun tutulan isimlendirme ilkesi |
| Design Intent | Tasarım Amacı (Design Intent) | Sistemin amaçlanan mimari yapısı |
| Design Pattern | Tasarım Deseni (Design Pattern) |  |
| Dirty Code | Kirli Kod (Dirty Code) | Temiz olmayan, bakımı zor kod |
| Dirty Tests | Kirli Testler (Dirty Tests) | Kalite standartları gözetilmeden “çabuk ve kirli” yazılmış testler; değiştirilmeleri zorlaşır ve zamanla bir yüke dönüşürler |
| Disinformation | Yanlış Bilgi (Disinformation) | İsimlerin okuyucuyu yanlış yönlendirmesi |
| Domain Expert | Alan Uzmanı (Domain Expert) | İş alanına (problem alanına) hakim uzman kişi |
| Domain-Specific Language | Alana Özgü Dil (Domain-Specific Language) |  |
| Domain-Specific Testing Language | Alana Özgü Test Dili (Domain-Specific Testing Language) | Sistem API'lerinin üzerine kurulan, testleri yazmayı ve okumayı kolaylaştıran fonksiyon ve yardımcı araçlardan oluşan test dili; baştan tasarlanmaz, test kodunun yeniden düzenlenmesiyle gelişir |
| Don't Repeat Yourself (DRY) | Kendini Tekrar Etme (Don't Repeat Yourself / DRY) | Kod ve bilgi tekrarını en aza indirmeyi amaçlayan ilke; sayfa 48 başlığı |
| Double Dispatch | Çift Gönderim (Double Dispatch) | Çağrılacak metodu iki nesnenin türüne göre seçme tekniği |
| Driver Program | Sürücü Program (Driver Program) | Test edilen kodu çağırıp onunla elle etkileşim kurmayı sağlayan basit, çoğu zaman kullanılıp atılan yardımcı program |
| Dual Standard | Çifte Standart (Dual Standard) | Test kodunun üretim kodundan farklı mühendislik standartlarına tabi olması: basit, öz ve anlatımlı olmalı, ancak üretim kodu kadar verimli olması gerekmez |
| Dummy Scope | Boş Kapsam (Dummy Scope) | While/for gövdesinin kasıtlı olarak boş bırakıldığı, dikkatli biçimlendirme (parantez + girinti) gerektiren yapı |
| Duplication | Tekrar (Duplication) | DRY ilkesi: Don't Repeat Yourself |
| Dyadic | İkili (Dyadic) | İki argümanlı fonksiyon |
| Dynamic Proxy | Dinamik Vekil (Dynamic Proxy) | JDK'nın sağladığı, çalışma zamanında bir arayüz için vekil sınıfını otomatik üreten mekanizma; yalnızca arayüzlerle çalışır. |
| Efficiency | Verimlilik (Efficiency) | Kodun performans ve kaynak kullanımı açısından etkinliği |
| EJB (Enterprise JavaBeans) | EJB (Kurumsal JavaBeans) | Dağıtık kurumsal bileşenler için eski Java EE bileşen standardı; kitapta EJB1 ve EJB2 sürümleri geçer. Terim kısaltma olarak olduğu gibi kullanılır. |
| Elegant | Zarif (Elegant) | Hoş derecede zarif, şık ve basit kod |
| Embeddable / @Embedded | Gömülebilir / @Embedded | JPA'da bir sınıfın, sahibi olan varlığın (entity) veritabanı satırına 'gömülü' olarak saklanmasını sağlayan eşleme; @Embeddable sınıfı, @Embedded alanı işaretler. |
| Embedded System | Gömülü Sistem (Embedded System) | Daha büyük bir cihazın parçası olarak, çoğu zaman gerçek zamanlı kısıtlar altında belirli bir işi yapan bilgisayar sistemi |
| Encapsulation | Kapsülleme (Encapsulation) |  |
| Entity | Varlık (Entity) | Sınıf, metot, fonksiyon gibi yapı |
| Entity Bean | Entity Bean (Varlık Bean’i) | EJB2’de ilişkisel verinin (bir tablo satırının) bellek içi temsilini sağlayan kalıcı bileşen; kalıcılık, işlem ve iş API’sini tek sınıfta birleştirmesi organik büyümeyi engeller. |
| Error Code | Hata Kodu (Error Code) | Bir fonksiyonun başarı/hata durumunu bildirmek için döndürdüğü özel değer; istisnaların (exception) alternatifi |
| Error Flag | Hata Bayrağı (Error Flag) | Hata oluştuğunu belirtmek için ayarlanan ve çağıranın kontrol etmesi gereken değişken; istisnaların eski alternatifi |
| Error Handling | Hata Yönetimi (Error Handling) | Hataları yakalama ve işleme stratejisi |
| Event (argument form) | Olay (Event) | Tek argümanlı fonksiyonların üçüncü ortak formu: bir girdi argümanı alır ama çıktı döndürmez, çağrının bir olay olarak yorumlanmasını ve sistemin durumunu değiştirmesini amaçlar. |
| Exception | İstisna (Exception) | Hata yönetimi bağlamında |
| Exception Class | İstisna Sınıfı (Exception Class) | Hatayı temsil eden sınıf; en önemli ölçüt, çağıranın onu nasıl yakalayacağıdır |
| Exception Classification | İstisna Sınıflandırması (Exception Classification) | İstisnaların türlere ayrılma biçimi; Clean Code'a göre kaynağa değil, nasıl yakalandıklarına göre yapılmalı |
| Explanation of Intent | Niyetin Açıklanması (Explanation of Intent) | Kodun neden o şekilde yazıldığını açıklayan yorum |
| Explicit | Açık (Explicit) | Bağlamın kodda doğrudan yer alması |
| Expressiveness | İfade Gücü (Expressiveness) | Kodun tasarım fikirlerini açıkça iletmesi |
| Extensibility | Genişletilebilirlik (Extensibility) | Kodun yeni yeteneklerle genişletilebilme kolaylığı |
| Extract Method | Metot Çıkarma (Extract Method) | Büyük bir metodu daha küçük parçalara bölme refactoring tekniği |
| F.I.R.S.T. | F.I.R.S.T. | Temiz testlerin beş özelliği: Hızlı (Fast), Bağımsız (Independent), Tekrarlanabilir (Repeatable), Kendini Doğrulayan (Self-Validating), Zamanında (Timely) |
| Factory Method | Fabrika Metodu (Factory Method) | Nesne oluşturma mantığını kapsülleyen metot |
| Failover | Hata Devri (Failover) | Bir bileşenin ya da sunucunun devre dışı kalması durumunda iş yükünün otomatik olarak yedek/başka bir bileşene aktarılması; çapraz kesim kaygısı (cross-cutting concern) örneği. |
| Fake | Sahte Nesne (Fake) | Testte gerçek bağımlılığın yerine geçen, basit ama çalışan gerçekleştirim; ör. FakeTransmitter |
| False Clue | Yanlış İpucu (False Clue) | Kodun anlamını bulanıklaştıran yanıltıcı isimler |
| Feature | Özellik (Feature) |  |
| Feature Envy | Özellik Kıskançlığı (Feature Envy) | Bir fonksiyonun başka bir sınıfın verisiyle kendi sınıfınınkinden daha çok ilgilenmesi |
| File Length | Dosya Uzunluğu (File Length) | Kaynak dosyanın satır sayısı; hedef ~200 satır, üst sınır 500 satır |
| File Size | Dosya Boyutu (File Size) | Kaynak dosyasının satır sayısı; Java'da sınıf boyutuyla yakından ilişkilidir |
| FitNesse | FitNesse | Açık kaynaklı test aracı (www.fitnesse.org) |
| Flag | Bayrak (Flag) | Boolean kontrol parametresi |
| Flag Argument | Bayrak Argümanı (Flag Argument) | Boolean parametre - fonksiyonun birden fazla şey yaptığını gösterir |
| Flexibility | Esneklik (Flexibility) | Kodun değişikliklere kolayca uyum sağlayabilmesi; birim testlerinin mümkün kıldığı -liklerden biri |
| Floating Point | Kayan Nokta (Floating Point) | Ondalıklı sayıların ikili gösterim biçimi; eşitlik karşılaştırmaları hassasiyet payı gerektirir (göreceli eşitlik) |
| Focused | Odaklanmış (Focused) | Temiz kodun tek amaca yönelik olması |
| Formatting | Biçimlendirme (Formatting) | Kodun görsel yerleşimi: girinti, boşluk, satır uzunluğu, dikey ayrım |
| Function | Fonksiyon (Function) |  |
| Function Call Dependency | Fonksiyon Çağrı Bağımlılığı (Function Call Dependency) | Bir fonksiyonun başka bir fonksiyonu çağırmasından doğan bağımlılık; aşağı yönü göstermelidir |
| Function Header | Fonksiyon Başlığı (Function Header) | Fonksiyonun başına eklenen açıklama bloğu |
| Function Sections | Fonksiyon Bölümleri (Function Sections) | Fonksiyon içinde ayrılmış bölümler (declarations, initializations vb.) |
| Generics | Jenerik Türler (Generics) | Java 5 ile gelen, sınıf ve koleksiyonların tür parametresi almasını sağlayan özellik (ör. Map<Sensor>); tür dönüştürme ihtiyacını azaltır |
| Given-When-Then | Given-When-Then | Testleri hazırlık (given), eylem (when) ve doğrulama (then) bölümlerine ayıran yaygın adlandırma kuralı; çevrilmez, olduğu gibi kullanılır. |
| God class | Tanrı sınıfı (God class) | Aşırı sayıda public metot ve sorumluluk yükleyerek neredeyse tüm sistemi tek başına yöneten aşırı büyük sınıf; kötü sınıf tasarımının uç örneği. |
| Gratuitous Context | Gereksiz Bağlam (Gratuitous Context) | Bir isme zaten içinde bulunduğu yapı tarafından sağlanan bağlamı tekrar eklemek |
| Green-field Project | Yeşil Alan Projesi (Green-field Project) | Sıfırdan başlanan proje |
| Happy Path | Mutlu Yol (Happy Path) | Hiçbir hatanın oluşmadığı, kodun normal akışta izlediği yol |
| Hard-coded Dependency | Sabit Kodlanmış Bağımlılık (Hard-coded Dependency) | Bir sınıfın içinde doğrudan new ile oluşturulan ya da sabit yapılandırmayla gömülen bağımlılık; değiştirilmesi ve test edilmesi zordur, küçük Tek Sorumluluk İlkesi ihlaline yol açar |
| Headline | Manşet (Headline) | Gazete metaforunda dosyanın adı ve en üstteki üst seviye kod; okuyucuya dosyanın neyle ilgili olduğunu söyler |
| Heuristic | Sezgisel Kural (Heuristic) |  |
| Hiding Structure | Yapıyı Gizleme (Hiding Structure) | Nesnenin iç yapısını sormak yerine ondan iş yapmasını istemek |
| Hierarchy | Hiyerarşi (Hierarchy) | Kaynak dosyanın taslak benzeri iç içe yapısı; dosya, sınıf, metot ve blok seviyelerinden oluşur |
| Hollerith Limit | Hollerith Sınırı (Hollerith Limit) | Delikli kartlardan kalma 80 karakterlik satır sınırı; bugün biraz keyfi kabul edilir |
| Horizontal Alignment | Yatay Hizalama (Horizontal Alignment) | Tanımlamalardaki isimleri ya da atamalardaki değerleri boşluklarla aynı sütuna dizme; yanlış şeyleri vurguladığı için önerilmez |
| Horizontal Formatting | Yatay Biçimlendirme (Horizontal Formatting) | Satır genişliği ve satır içi boşluklarla ilgili biçimlendirme; kısa satırlar tercih edilir (en fazla ~120 karakter) |
| Horizontal Openness and Density | Yatay Açıklık ve Yoğunluk (Horizontal Openness and Density) | İlişkili öğeleri bitişik yazma, zayıf ilişkili öğeleri yatay boşlukla ayırma |
| Horizontal White Space | Yatay Boşluk (Horizontal White Space) | Satır içindeki boşluklar; güçlü ilişkiyi birleştirmek, zayıf ilişkiyi ayırmak için kullanılır |
| Hybrid | Melez Yapı (Hybrid) | Hem anlamlı davranışı hem de açık durumu olan yarı nesne, yarı veri yapısı |
| Immutable | Değiştirilemez (Immutable) | Oluşturulduktan sonra durumu değiştirilemeyen nesne/koleksiyon; ör. Collections.emptyList() |
| Implementation | Gerçekleştirim (Implementation) | Bir arayüzün ya da soyutlamanın somut kod karşılığı; Bölüm 6'da veri soyutlama ve gizleme bağlamında sürekli geçer |
| Implementation Detail | Gerçekleştirim Ayrıntısı (Implementation Detail) | Bir sınıfın kullanıcılarının bilmesi ya da umursaması gerekmeyen iç tercih (ör. jenerik tür kullanılıp kullanılmadığı) |
| Implicity | Örtüklük (Implicity) | Bağlamın kodda açıkça belirtilmeme derecesi |
| Include Directive | Dahil Etme Yönergesi (Include Directive) | FitNesse'de sayfa dahil etme komutu |
| Indent Level | Girinti Seviyesi (Indent Level) | Kod bloklarının iç içe geçme derinliği |
| Indentation | Girinti (Indentation) | Kod satırlarının hiyerarşideki konumlarına göre sağa kaydırılması; kapsam hiyerarşisini görünür kılar |
| Informative Comment | Bilgilendirici Yorum (Informative Comment) | Kodun yapısı veya regex gibi karmaşık kısımlar hakkında bilgi veren yorum |
| Inheritance | Kalıtım (Inheritance) |  |
| Instance | Örnek (Instance) | Bir sınıftan oluşturulmuş somut nesne; ör. PathParser.parse çağrısının döndürdüğü PagePath örneği |
| Instance Variable | Örnek Değişkeni (Instance Variable) | Bir sınıfın her nesnesinde ayrı ayrı tutulan üye değişken |
| Instantiation | Örnekleme (Instantiation) | Bir sınıftan nesne oluşturma işlemi; 'instantiate' = örneklemek. Tembel örnekleme (lazy instantiation) ile birlikte geçer |
| Integer Handle | Tamsayı Tanıtıcısı (Integer Handle) |  |
| Intention-Revealing Names | Niyet Belirten İsimler (Intention-Revealing Names) | Amacı açıkça ortaya koyan isimler |
| Interface | Arayüz (Interface) |  |
| Interpreter | Yorumlayıcı (Interpreter) | Kaynak kodu satır satır çalıştıran program |
| Invasiveness | istilacılık (invasiveness) | Bir çerçevenin (framework) gereksinimlerinin iş nesnesinin içine girerek onu kirletmesi; EJB2'nin sınıf ve arayüz dayatmasının yan etkisi. |
| Inversion of Control (IoC) | Kontrolün Tersine Çevrilmesi (Inversion of Control — IoC) | Bağımlılık yönetiminde kontrolün nesneden, bu amaca adanmış harici bir mekanizmaya (main, kap/container) devredilmesi ilkesi; Bağımlılık Enjeksiyonu (DI) bu ilkenin uygulanmasıdır |
| InvocationHandler | Çağrı İşleyici (InvocationHandler) | Java yansıma (reflection) API'sindeki arayüz; vekile yapılan her metot çağrısı, bu nesnenin invoke metodu aracılığıyla ele alınır. |
| Javadoc | Javadoc | Java API dokümantasyon formatı |
| JNDI | JNDI | Java Naming and Directory Interface; bir dizin sunucusundan (directory server) ada göre hizmet/nesne aramayı sağlayan Java API'si; DI'ın 'kısmi' bir gerçekleştirimi olarak kabul edilir |
| JobQueue | İş Kuyruğu (JobQueue) |  |
| Journal Comment | Günlük Yorumu (Journal Comment) | Modüldeki değişikliklerin kaydını tutan (artık gereksiz) yorum |
| JPA (Java Persistence API) | JPA (Java Kalıcılık API'si — Java Persistence API) | EJB3 ile birlikte ortaya çıkan, Java'da kalıcılığı (persistence) ek açıklamalar (annotations) ve XML üzerinden bildirimsel olarak yöneten standart API. |
| JVM | JVM (Java Sanal Makinesi) | Java Virtual Machine; Java bayt kodunu çalıştıran sanal makine. Kitapta “ayrı JVM” (separate JVM), uzak arayüzün çalıştığı ayrı süreci ifade eder. |
| Keyword Form | Anahtar Kelime Formu (Keyword Form) | Argüman isimlerini fonksiyon adına kodlama tekniği |
| Language Bigot | Dil Bağnazı (Language Bigot) |  |
| Law of Demeter | Demeter Yasası (Law of Demeter) | Bir modül üzerinde çalıştığı nesnelerin iç yapısını bilmemelidir |
| Lazy Evaluation | Tembel Değerlendirme (Lazy Evaluation) | Bir değerin yalnızca gerçekten gerektiğinde hesaplanması; kitapta Lazy Initialization ile birlikte LAZY INITIALIZATION/EVALUATION kalıbı olarak geçer |
| Lazy Initialization | Tembel Başlatma (Lazy Initialization) | Nesne oluşturmayı ilk kullanıma erteleyen kalıp; ek yükü azaltsa da kurulum mantığını çalışma zamanı koduna karıştırabilir |
| Learning Test | Öğrenme Testi (Learning Test) | Jim Newkirk'ün terimi: üçüncü taraf bir API'yi, uygulamada kullanılacağı şekilde çağırarak onu ne kadar anladığımızı sınayan kontrollü deney niteliğindeki test |
| LeBlanc's Law | LeBlanc Yasası (LeBlanc's Law) | "Sonra asla demektir" (Later equals never) |
| Legal Comment | Yasal Yorum (Legal Comment) | Telif hakkı, lisans gibi yasal zorunlulukları belirten yorum |
| Level of Abstraction | Soyutlama Seviyesi (Level of Abstraction) | Kodun genelden özele doğru soyutluk derecesi |
| Level of Detail | Ayrıntı Seviyesi (Level of Detail) | Kodun ne kadar alt seviye ayrıntı (nokta, eğik çizgi, dosya uzantısı vb.) içerdiği; farklı ayrıntı seviyeleri aynı kodda karıştırılmamalıdır [G34][G6] |
| Lexicon | Sözlük (Lexicon) | Bir projedeki tutarlı terimler bütünü |
| Lifecycle Method | Yaşam Döngüsü Metodu (Lifecycle Method) | Konteynerin çağırdığı ejbCreate, ejbActivate, ejbLoad gibi, bir bileşenin yaşam döngüsünü yöneten metotlar. |
| Literate Programming | Okuryazar Programlama (Literate Programming) | Knuth'un kavramı: kod önce insanlar için yazılmalı |
| Local Interface | Yerel Arayüz (Local Interface) | EJB'de aynı JVM içinden erişim için kullanılan istemci arayüzü. |
| Local Variable | Yerel Değişken (Local Variable) | Yalnızca tanımlandığı fonksiyon ya da blok içinde geçerli değişken |
| Loop Control Variable | Döngü Kontrol Değişkeni (Loop Control Variable) | Döngünün yinelemesini yöneten değişken; genellikle döngü ifadesinin içinde tanımlanır |
| Low-Level | Alt Seviye (Low-Level) | Ayrıntılara ve mekanizmaya yakın kod; üst seviye (high-level) kodun çağırdığı katman |
| Magic Number | Sihirli Sayı (Magic Number) | Kodda açıklamasız kullanılan sabit değer |
| Maintainability | Bakılabilirlik (Maintainability) | Kodun zaman içinde bakımının yapılabilme kolaylığı |
| Management | Yönetim (Management) |  |
| Mandated Comment | Zorunlu Yorum (Mandated Comment) | Şirket politikası veya kurallar gereği zorla eklenen yorum |
| Marketer | Pazarlamacı (Marketer) |  |
| Matter-of-fact | Olgusal (Matter-of-fact) | Spekülatif olmayan, gerçeklere dayanan kod |
| Meaningful Distinctions | Anlamlı Ayrımlar (Meaningful Distinctions) | İsimlerin gerçekten farklı anlamlar taşıyacak şekilde farklılaştırılması |
| Meaningful Names | Anlamlı İsimler (Meaningful Names) | Niyet ifade eden değişken/fonksiyon isimleri |
| Mental Burden | Zihinsel Yük (Mental Burden) | Kod okurken harcanan bilişsel çaba |
| Mental Mapping | Zihinsel Eşleştirme (Mental Mapping) | Bir ismin zihinsel olarak başka bir isme çevrilmesi süreci |
| Mess | Karmaşa (Mess) | Dağınık, düzensiz kod |
| Messy Code | Dağınık Kod (Messy Code) |  |
| Metadata | Üstveri (Metadata) | Veriyi tanımlayan veri; ör. Sql sınıfına verilen tablo adı ve sütun bilgileri |
| Method | Metot (Method) |  |
| Method Chaining | Metot Zincirleme (Method Chaining) | Metot çağrılarını ardışık zincirleme |
| Method Interception | Metot Araya Girme (Method Interception) | AOP'yi gerçekleştirmek için kullanılan tekniklerden biri; bir framework'ün bir metot çağrısını yakalayıp, çağrıdan önce/sonra davranış eklemesi (günlükleme, işlem, güvenlik vb.). Sayfada dipnot 11'de 'wrapping' (sarmalama) ile birlikte anılır. |
| Method Name | Metot İsmi (Method Name) |  |
| Minimal | Minimal (Minimal) | Mümkün olan en küçük, yalnızca gerekli olanı içeren |
| Mis-type | Yanlış Yazım (Mis-type) |  |
| Misleading Comment | Yanıltıcı Yorum (Misleading Comment) | Kodun gerçekte yaptığından farklı bir şey söyleyen hatalı yorum |
| Misspelling | Kasıtlı Yazım Hatası (Misspelling) | Derleyiciyi tatmin etmek için yapılan yanlış yazım (ör. klass) |
| Mock | Taklit (Mock) | Test sırasında gerçek bağımlılığın yerine geçen sahte uygulama; 'mock out' = taklit etmek |
| Mock Object | Taklit Nesne (Mock Object) | Test sırasında gerçek bağımlılığın davranışını taklit eden ve çağrı beklentilerini doğrulayan sahte nesne; sözlükteki Mock (Taklit) ile uyumludur |
| Modularity | Modülerlik (Modularity) | Sistemin bağımsız, yeniden kullanılabilir parçalara (modüllere) bölünmesi |
| Module | Modül (Module) |  |
| Monadic | Tekli (Monadic) | Bir argümanlı fonksiyon |
| Mumbling | Mırıldanma (Mumbling) | Belirsiz, özensiz veya ne dediği anlaşılmayan yorum |
| Mutator | Değiştirici (Mutator) | JavaBean standardında set metotları |
| Namespace | Ad Alanı (Namespace) |  |
| Naming Convention | İsimlendirme Kuralı (Naming Convention) |  |
| Necessary Evil | Zorunlu Kötülük (Necessary Evil) | Yorumların en iyi ihtimalle kaçınılmaz ama asla övülmemesi gereken bir kötülük olduğu fikri; Bölüm 4'ün açılış temasıdır |
| Nesting Level | İç İçe Geçme Seviyesi (Nesting Level) | Kod bloklarının derinlik seviyesi |
| Newspaper Metaphor | Gazete Metaforu (Newspaper Metaphor) | Kaynak dosya gazete makalesi gibi okunmalı: üstte manşet ve özet, aşağı indikçe artan ayrıntı |
| Niladic | Sıfırlı (Niladic) | Argümansız fonksiyon |
| Noise Comment | Gürültü Yorumu (Noise Comment) | Hiçbir değer katmayan, bariz olanı tekrar eden yorum |
| Noise Word | Gürültü Kelimesi (Noise Word) | İsme anlam katmayan ek (Info, Data, the, a) |
| Nonlocal Information | Yerel Olmayan Bilgi (Nonlocal Information) | Bulunduğu yerle doğrudan ilgili olmayan sistem bilgisi |
| Normal Flow | Normal Akış (Normal Flow) | Hata durumlarıyla kesintiye uğramayan, asıl iş akışı |
| Normal Forms | Normal Formlar (Normal Forms) | Codd'un veritabanı tekrar kaldırma stratejisi |
| Null Check | null Kontrolü (Null Check) | Bir değerin null olup olmadığını denetleyen koşul; çoğalması null döndürmenin belirtisidir |
| Number-Series Naming | Numara Serili İsimlendirme (Number-Series Naming) | a1, a2, aN şeklinde anlamsız numara ekleme |
| Object | Nesne (Object) |  |
| Object-Oriented Code | Nesne Yönelimli Kod (Object-Oriented Code) | Davranışı nesnelere dağıtan kod; yeni sınıf eklemeyi kolaylaştırır, yeni fonksiyon eklemeyi zorlaştırır (sayfa 97) |
| Object-Oriented Design | Nesne Yönelimli Tasarım (Object-Oriented Design) |  |
| Open Closed Principle (OCP) | Açık Kapalı İlkesi (OCP) | Sınıflar genişlemeye açık, değişikliğe kapalı olmalı |
| Open Source | Açık Kaynak (Open Source) | Kaynak kodu herkesin kullanımına açık olarak dağıtılan yazılım |
| Open/Closed Principle (OCP) | Açık/Kapalı İlkesi (OCP) | Genişletmeye açık, değişikliğe kapalı prensibi |
| Opening a Class | Sınıfı Açmak (Opening a Class) | Var olan bir sınıfı yeni işlev eklemek için değiştirmek; risk getirir ve sınıfın baştan sona yeniden test edilmesini gerektirir (OCP'nin 'değişikliğe kapalı' ilkesinin ihlali) |
| Operator Precedence | Operatör Önceliği (Operator Precedence) | Bir ifadede operatörlerin hangi sırayla değerlendirileceği; ör. çarpma toplamadan önce |
| Organic Growth | Organik Büyüme (Organic Growth) | Sistemin büyük bir ön tasarım yerine küçük adımlarla, gerçek ihtiyaçlara göre doğal biçimde büyümesi; uygun kaygı ayrımı (separation of concerns) gerektirir. |
| Outbound Test | Dışa Dönük Test (Outbound Test) | Kendi kodumuzdan üçüncü taraf arayüze doğru yapılan çağrıları, üretim kodunun kullandığı biçimde sınayan test |
| Output Argument | Çıkış Argümanı (Output Argument) | Değer döndürmek için kullanılan argüman |
| Output Stream | Çıkış Akışı (Output Stream) | Verinin yazıldığı hedef akış (ör. konsol, dosya); log4j'de bir Appender'ın mesajları gönderdiği yer |
| Overhead | Ek Yük (Overhead) | Bir işlemin kendi işi dışında yarattığı maliyet; ör. nesne hiç kullanılmasa bile oluşturma maliyeti |
| Overload | Aşırı Yükleme (Overload) | Aynı isimli fonksiyon/metodun farklı parametre listeleriyle birden fazla kez tanımlanması |
| Oxymoron | Oksimoron (Oxymoron) | Birbirine zıt kavramların birleşimi (ör. "keskin soyutlama") |
| Package | Paket (Package) | Kod organizasyon birimi |
| Package Scope | Paket Kapsamı (Package Scope) | Java'da yalnızca aynı paketteki sınıflardan erişilebilen görünürlük seviyesi; testler uğruna kapsüllemeyi gevşetmenin private'tan sonraki en az zararlı yolu. |
| Persistence | Kalıcılık (Persistence) | Verinin veritabanı, düz dosya gibi kalıcı bir depoda saklanması |
| Point of Declaration | Tanımlama Noktası (Point of Declaration) | Değişkenin tanımlandığı yer |
| POJO (Plain-Old Java Object) | POJO (Sade Eski Java Nesnesi) | Herhangi bir çerçeveye (framework) veya kapsayıcıya (container) bağımlılığı olmayan, tamamen kendi alanına odaklanmış sade Java sınıfı; kitapta 'Plain-Old Java Object (POJO)' olarak geçer ve BankImpl buna örnektir. Yazar kitapta POJO'lara kısa süre sonra yeniden döneceğini söyler (Pure Java AOP Frameworks). |
| Polyadic | Çoklu (Polyadic) | Üç veya daha fazla argümanlı fonksiyon |
| Polymorphism | Çok Biçimlilik (Polymorphism) |  |
| Position Marker | Konum İşaretçisi (Position Marker) | Kod bloklarını ayırmak için kullanılan görsel banner'lar |
| Precision | Hassasiyet (Precision) | Gereksinimlerdeki kesinlik |
| Predicate | Yüklem (Predicate) | JavaBean standardında boolean dönen is metotları |
| Prefix Convention | Önek Kuralı (Prefix Convention) | Yerel değişkenler için a, argümanlar için the gibi önek kuralları |
| Prequel | Öncül (Prequel) | Bu kitabın PPP kitabına göre konumu |
| Principle | İlke (Principle) |  |
| Principle of Least Surprise | En Az Şaşırtma İlkesi (Principle of Least Surprise) |  |
| Problem Domain | Problem Alanı (Problem Domain) |  |
| Procedural Code | Prosedürel Kod (Procedural Code) | Veri yapıları üzerinde çalışan fonksiyonlarla yazılan kod |
| Production Code | Üretim Kodu (Production Code) | Uygulamanın gerçekte çalışan, test kodu olmayan kısmı |
| Productivity | Verimlilik (Productivity) |  |
| Professional | Profesyonel (Professional) |  |
| Programmer-eese | Programcı Dili (Programmer-eese) | Programcıların kendi aralarında kullandığı teknik jargon |
| Pronounceable Names | Telaffuz Edilebilir İsimler (Pronounceable Names) | İsimlerin sesli okunabilir olması gerektiği ilkesi |
| Prose | Düzyazı (Prose) | Grady Booch: "Temiz kod iyi yazılmış bir düzyazı gibi okunur" |
| Protected Variable | Korumalı Değişken (Protected Variable) | Alt sınıflardan erişilebilen değişken; ilişkili kavramları dosyalara dağıttığı için kaçınılmalıdır |
| Proxy | Vekil (Proxy) | Başka bir nesneyi temsil eden, istenen işi ona devreden sarmalayıcı nesne; tembel değerlendirme (lazy evaluation) gibi optimizasyonlar için kullanılabilir |
| Pun | Kelime Oyunu (Pun) | Bir kelimenin iki farklı anlamda kullanılması |
| Quasi-Encapsulation | Yarı Kapsülleme (Quasi-Encapsulation) | Bean'lerin getter/setter ile sağladığı, pratikte hiçbir şeyi gizlemeyen görünüşte kapsülleme |
| Race Condition | Yarış Durumu (Race Condition) | Eşzamanlı erişimden kaynaklanan hata |
| Readability | Okunabilirlik (Readability) | Kodun okunup anlaşılma kolaylığı; sonraki tüm değişiklikleri etkiler |
| Readable Code | Okunabilir Kod (Readable Code) |  |
| Real-Time System | Gerçek Zamanlı Sistem (Real-Time System) | Girdilere belirli zaman sınırları içinde yanıt vermek zorunda olan sistem; çoğunlukla gömülü olup işlemci ve bellek kaynakları kısıtlıdır (Bölüm 9, çifte standart tartışması) |
| Reason to Change | Değişme Nedeni (Reason to Change) | Tek Sorumluluk İlkesi'nin (SRP) tanımındaki temel ölçüt: bir sınıfın değişmesine yol açabilecek her ayrı sebep bir sorumluluktur; 'responsibility' ile eş anlamlı kullanılır. |
| Recompilation | Yeniden Derleme (Recompilation) | Değişiklik sonrası kodun tekrar derlenmesi |
| Recursion | Özyineleme (Recursion) | Bir fonksiyonun doğrudan ya da dolaylı olarak kendini çağırması |
| Redeployment | Yeniden Dağıtım (Redeployment) | Değişiklik sonrası kodun tekrar dağıtılması |
| Redesign | Yeniden Tasarım (Redesign) |  |
| Redundant Comment | Gereksiz Yorum (Redundant Comment) | Koddan daha fazla bilgi vermeyen, fazlalık yorum |
| Refactoring | Yeniden Düzenleme (Refactoring) |  |
| Reflection | Yansıma (Reflection) | Bir programın kendi yapısını (sınıflar, metotlar, alanlar) çalışma anında incelemesine ve bunlara dinamik olarak erişmesine olanak tanıyan API/mekanizma; Java'da java.lang.reflect paketinde bulunur. Sayfada 'Java reflection API' olarak geçer. |
| Regular Expression | Düzenli İfade (Regular Expression) | Metin desenlerini eşleştirmek için kullanılan söz dizimi; regex olarak da bilinir |
| Release | Sürüm (Release) | Yazılımın yayımlanan bir versiyonu |
| Release Cycle | Yayın Döngüsü (Release Cycle) | Ürün sürüm yayınlama süreci |
| Renaming | Yeniden Adlandırma (Renaming) | Değişken/fonksiyon/sınıf adını değiştirme |
| Requirement | Gereksinim (Requirement) |  |
| Resource | Kaynak (Resource) | Bir isteğin hedeflediği, URL ile adreslenen öğe; ör. FitNesse'de request.setResource("root") |
| Responsibility-Driven Design (RDD) | Sorumluluk Odaklı Tasarım (Responsibility-Driven Design) | Rebecca Wirfs-Brock'un nesne tasarımı yaklaşımı: sınıflar veri alanlarından değil rollerden, sorumluluklardan ve iş birliklerinden yola çıkarak tasarlanır; Chapter 10 kaynakçasında [RDD] etiketiyle anılır |
| Return Code | Dönüş Kodu (Return Code) | Fonksiyonun başarı/hata durumunu dönüş değeriyle bildirmesi; Bölüm 7 bunun yerine istisna kullanmayı önerir |
| Reusability | Yeniden Kullanılabilirlik (Reusability) | Kodun başka bağlamlarda yeniden kullanılabilmesi; testlerin güvence altına aldığı -liklerden biri |
| Routine | Rutin (Routine) | Programlamanın ilk günlerindeki fonksiyon benzeri yapı |
| Runtime Error | Çalışma Zamanı Hatası (Runtime Error) | Derleme sırasında değil, program çalışırken ortaya çıkan hata |
| Runtime Logic | Çalışma Zamanı Mantığı (Runtime Logic) | Uygulama başladıktan sonra asıl işi yapan kod; başlangıç (startup) sürecinden ayrılmalıdır |
| rvalue | Sağ Taraf Değeri (rvalue) | Bir atama ifadesinde eşittir işaretinin sağında kalan değer |
| Scary Noise | Korkunç Gürültü (Scary Noise) | Bariz olanı karmaşık Javadoc formatında tekrar eden sinir bozucu yorum |
| Schedule | Takvim / Zamanlama (Schedule) |  |
| School of Thought | Düşünce Okulu (School of Thought) |  |
| Scissors Rule | Makas Kuralı (Scissors Rule) | C++'ta örnek değişkenlerini sınıfın en altına koyma geleneği |
| Scope | Kapsam (Scope) | Bir değişkenin geçerli olduğu kod alanı |
| Seam | Dikiş Noktası (Seam) | Kodu o noktada düzenlemeden davranışı değiştirebildiğiniz yer; ör. bir arayüz üzerinden test için sahte nesne takmak [WELC] |
| Search-friendly name | Arama Dostu İsim (Search-friendly name) |  |
| Searchable Names | Aranabilir İsimler (Searchable Names) |  |
| Separation of Concerns | Kaygıların Ayrılması (Separation of Concerns) | Yazılımı çalıştırma kaygısı ile onu düzenli ve temiz tutma kaygısının ayrı, birbiri kadar önemli iki etkinlik olarak ele alınması gerektiği ilkesi; Chapter 10'da sınıf tasarımı bağlamında geçer. |
| Setter Method | Set Metodu (Setter Method) | Bir özelliği dışarıdan atamaya yarayan metot; DI'da bağımlılıklar setter metotları ya da kurucu argümanlarıyla enjekte edilir (JavaBeans'teki Mutator ile aynı kavram) |
| Setup | Kurulum (Setup) | FitNesse test sayfalarında testten önce çalıştırılan hazırlık sayfası/adımı |
| Side Effect | Yan Etki (Side Effect) |  |
| Sieve | Eleme (Sieve) | Asal sayıları bulmak için kullanılan algoritma (Eratosthenes Kalburu) |
| Simple Code | Basit Kod (Simple Code) | Beck'in kuralları: testler çalışır, tekrar yok, ifade gücü yüksek, varlıklar minimize |
| Single Responsibility | Tek Sorumluluk (Single Responsibility) |  |
| Single Responsibility Principle (SRP) | Tek Sorumluluk İlkesi (SRP) | Bir sınıfın/fonksiyonun değişmesi için yalnızca bir nedeni olmalıdır ilkesi |
| Single-Entry, Single-Exit Rule | Tek Giriş, Tek Çıkış Kuralı (Single-Entry, Single-Exit Rule) | Dijkstra'nın yapısal programlama disiplini: her fonksiyon ve blok yalnızca bir girişe ve bir çıkışa sahip olmalı |
| Snail's Pace | Salyangoz Hızı (Snail's Pace) | Çok yavaş ilerleme metaforu |
| Software Craftsmanship | Yazılım Zanaatı (Software Craftsmanship) |  |
| Solution Domain | Çözüm Alanı (Solution Domain) |  |
| Source File | Kaynak Dosyası (Source File) | Programın kaynak kodunu içeren dosya |
| Special Case Object | Özel Durum Nesnesi (Special Case Object) | Null yerine döndürülen, eksik durum için makul varsayılan davranışı kapsülleyen nesne (SPECIAL CASE deseni) |
| Special Case Pattern | Özel Durum Deseni (Special Case Pattern) | Özel durumu kendisi ele alan bir sınıf/nesne döndürerek istemci kodu istisna yönetiminden kurtaran desen [Fowler] |
| Specification | Spesifikasyon (Specification) | Biçimsel gereksinim tanımı |
| Spring Framework | Spring Framework | Java için en bilinen DI kabını (container) sağlayan açık kaynaklı çerçeve; XML yapılandırma dosyasıyla bağlama (wiring) yapmayı destekler; Spring.NET adlı bir .NET sürümü de vardır |
| Stack Trace | Yığın İzi (Stack Trace) | İstisna anındaki çağrı zinciri; hatanın yerini gösterir ama başarısız işlemin amacını söylemez |
| Startup Process | Başlangıç Süreci (Startup Process) | Uygulama nesnelerinin oluşturulduğu ve bağımlılıkların birbirine bağlandığı süreç; çalışma zamanı mantığından ayrı tutulmalıdır |
| Static Initializer | Statik Başlatıcı (Static Initializer) | Java'da bir sınıf yüklenirken bir kez çalışan başlatma bloğu |
| Status Value | Durum Değeri (Status Value) | Bir öğenin mevcut durumunu temsil eden değer |
| Stepdown Rule | Basamak Kuralı (Stepdown Rule) | Kodun üst seviyeden alt seviyeye "aşağı doğru" okunması prensibi |
| Story | Hikaye (Story) | Çevik geliştirme (Agile) bağlamında, müşteriye değer katan küçük ve uygulanabilir işlev parçası; “bugünün hikayeleri” (today’s stories) ifadesi bu anlamdadır. |
| StringBuffer | StringBuffer | Java'da değiştirilebilir dizgi nesnesi |
| Struct | Yapı (Struct) | Yalnızca veri alanları bulunan, davranışı olmayan veri yapısı |
| Structured Programming | Yapısal Programlama (Structured Programming) | Dijkstra'nın tek giriş / tek çıkış kuralları |
| Stub | Geçici Gövde (Stub) | Gerçek gerçekleştirim yazılana kadar yer tutan, sahte değer döndüren asgari kod |
| Subclass | Alt Sınıf (Subclass) | Bir sınıftan kalıtımla türetilen sınıf; OCP'de yeni işlevsellik mevcut kodu değiştirmeden alt sınıf ekleyerek katılır |
| Subprogram | Alt Program (Subprogram) | Fortran/PL1 döneminde kullanılan program parçası |
| Subroutine | Alt Rutin (Subroutine) | Programlamanın ilk günlerindeki alt program yapısı |
| Subscript | Alt İndis (Subscript) | Dizi veya koleksiyondaki öğeye erişim indeksi |
| Subselect | Alt Sorgu (Subselect) | Bir SQL select ifadesinin içine gömülü ikinci bir select sorgusu |
| Suite | Suite | Çevrilmez; FitNesse'de bir grup test sayfasını ifade eden yapı |
| Switch Statement | Switch İfadesi (Switch Statement) | Bir değişkenin farklı değerlerine göre dallanma sağlayan kontrol yapısı |
| Synopsis | Özet (Synopsis) | Gazete metaforunda ilk paragraf; kodda dosyanın tepesindeki üst seviye kavram ve algoritmalar |
| Table Lookup | Tablo Araması (Table Lookup) | Bir sonucu hesaplamak yerine önceden sabitlenmiş bir tablodan okumak; sabit değer döndüren test stub'larının indirgendiği basit davranış |
| Talk to Friends, Not to Strangers | Yabancılarla Değil, Arkadaşlarla Konuş (Talk to Friends, Not to Strangers) | Demeter Yasası'nın özlü ifadesi: metot yalnızca doğrudan tanıdığı nesnelerle konuşmalı, onların döndürdüğü nesnelerin metotlarını çağırmamalıdır |
| Teardown | Temizlik (Teardown) | FitNesse test sayfalarında testten sonra çalıştırılan temizlik sayfası/adımı |
| Technical Debt | Teknik Borç (Technical Debt) | Hızlı çözümlerden kaynaklanan birikmiş kod sorunları |
| Template Method | Şablon Metot (Template Method) | Ortak algoritma iskeletini üst sınıfta tanımlayıp değişen adımları alt sınıflara bırakan tasarım deseni [GOF]. |
| Temporal Coupling | Zamansal Bağımlılık (Temporal Coupling) | Fonksiyonun sadece belirli zamanlarda çağrılabilmesi sorunu |
| Test | Test | Çevrilmez |
| Test Coverage | Test Kapsamı (Test Coverage) | Üretim kodunun testlerle çalıştırılan bölümünün oranı; yükseldikçe değişiklik yapma korkusu azalır |
| Test Double | Test Çifti (Test Double) | Birim testinde gerçek bağımlılığın yerine geçen herhangi bir nesne için kapsayıcı terim; stub, fake, mock vb. varyantları kapsar |
| Test Driven Development | Test Güdümlü Geliştirme (Test Driven Development / TDD) | Önce test yaz, sonra kodu yaz disiplini |
| Test Suite | Test Paketi (Test Suite) | Bir sistemin otomatik testlerinin bütünü; üretim kodu değiştikçe onunla birlikte bakımı yapılmalıdır |
| Testing API | Test API'si (Testing API) | Testlerin kullandığı, sistemin API'lerini saran özelleşmiş fonksiyon ve yardımcı araçlar kümesi; alana özgü test dilinin kendisi |
| Third-Party API | Üçüncü Taraf API (Third-Party API) | Başka bir satıcı ya da ekip tarafından sağlanan API; sarmalanarak bağımlılık azaltılır |
| Third-Party Code | Üçüncü Taraf Kod (Third-Party Code) | Satın alınan paketler, açık kaynak kütüphaneler ya da başka ekiplerin ürettiği, kontrolümüzde olmayan kod; sağlayıcı geniş uygulanabilirlik, kullanıcı ise odaklı bir arayüz ister (Bölüm 8) |
| Thread | İş Parçacığı (Thread) | Bir süreç içinde diğer işlerle eşzamanlı yürütülebilen bağımsız çalışma birimi |
| Three Laws of TDD | TDD'nin Üç Yasası (Three Laws of TDD) | Robert C. Martin: başarısız bir birim testi yazmadan üretim kodu yazma; testin yalnızca başarısız olmaya yetecek kadarını yaz (derlenmemek de başarısızlıktır); yalnızca başarısız testi geçirecek kadar üretim kodu yaz |
| Tiger Team | Kaplan Ekibi (Tiger Team) | En yetenekli geliştiricilerden oluşan ekip |
| TO Paragraph | TO Paragrafı | Fonksiyonun ne yaptığını "Bunu yapmak için (TO)..." kalıbıyla anlatan cümle; LOGO dilindeki TO anahtar kelimesinden esinlenilmiştir |
| TODO | TODO / Yapılacaklar (TODO) | Gelecek için bırakılan notlar ve hatırlatıcılar |
| Train Wreck | Tren Kazası (Train Wreck) | Birbirine noktayla bağlanmış çağrı zinciri; Demeter Yasası ihlalinin tipik görüntüsü |
| Transaction | İşlem (Transaction) | Ya bütünüyle gerçekleşen ya da hiç gerçekleşmemiş sayılan iş birimi; try blokları buna benzetilir |
| Transactional Behavior | İşlemsel Davranış (Transactional Behavior) | Bir işlemin (Transaction) bütünlüğünü yöneten davranış; EJB'de dağıtım betimleyicisinde bildirilir |
| Transformation | Dönüşüm (Transformation) | Kodun bir halden başka bir hale davranışı koruyarak değiştirilmesi |
| Triadic | Üçlü (Triadic) | Üç argümanlı fonksiyon |
| Type System | Tür Sistemi (Type System) |  |
| Unchecked Exception | Denetlenmeyen İstisna (Unchecked Exception) | Bildirilmesi zorunlu olmayan istisna (Java'da RuntimeException alt sınıfları) |
| Uncle Bob's Formatting Rules | Uncle Bob'un Biçimlendirme Kuralları | Bölüm 5'te yazarın kişisel biçimlendirme kurallarını CodeAnalyzer.java örneğiyle gösterdiği alt başlık (sayfa 91 ve devamı). |
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
| Visitor Pattern | Ziyaretçi Deseni (Visitor Pattern) |  |
| Visual Cue | Görsel İpucu (Visual Cue) | Okuyucunun gözüne yeni ve ayrı bir kavramın başladığını belirten işaret; ör. boş satır |
| Wading | Çamura Batma (Wading) | Kötü kodda ilerlerken hissedilen zorluk metaforu |
| Ward's Principle | Ward'ın İlkesi (Ward's Principle) | Ward Cunningham'ın temiz kod tanımı: her rutin, tam olarak beklediğiniz gibi çıkar |
| Warning of Consequences | Sonuçlara Dair Uyarı (Warning of Consequences) | Belirli bir işlemin etkileri hakkında diğer programcıları uyaran yorum |
| weasel words | kaypak sözcükler (weasel words) | Processor, Manager, Super gibi anlamı belirsiz bırakan, bir sınıfın gerçekte ne yaptığını gizleyen ve çoğu zaman fazla sorumluluk yığılmasına işaret eden isim bileşenleri. |
| Wiring | Bağlama (Wiring) | Nesnelerin bağımlılıklarının kurularak uygulamanın bir araya getirilmesi işlemi |
| Wrapper | Sarmalayıcı (Wrapper) |  |
