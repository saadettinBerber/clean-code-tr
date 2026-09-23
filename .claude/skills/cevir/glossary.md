# Clean Code - Terim Sözlüğü (Glossary)

Bu dosya çeviri boyunca tutarlılık sağlamak için kullanılır.
Her yeni sayfa çevrildikten sonra, o sayfada geçen yeni teknik terimler buraya eklenir.
Çeviriye başlamadan önce bu dosya okunmalı ve mevcut terimler kullanılmalıdır.

## Terimler

| İngilizce Terim | Türkçe Karşılığı | Açıklama/Not |
|----------------|-----------------|-------------|
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
| Amplification | Önem Belirtme (Amplification) | Önemsiz görünebilecek bir şeyin önemini vurgulayan yorum |
| Analysis Function | Analiz Fonksiyonu (Analysis Function) | Bir modülü, veriyi inceleyen/ayrıştıran fonksiyon grubu; sayfa 265'te 'a group of analysis functions' ifadesinde geçer. 'Synthesis Function' teriminin karşıtıdır. |
| Annotation | ek açıklama (annotation) | Java 5 ile gelen, sınıf, metot ve alanlara üstveri (metadata) ekleyen @ işaretli bildirimler; JPA gibi framework'ler bağlama (wiring) ve kalıcılık bilgisini bu ek açıklamalarla taşır. Kitapta 'Java 5 annotations' olarak geçer. |
| Application Container | Konteyner (Container) | EJB'de bean'leri barındıran ve yaşam döngüsünü yöneten uygulama sunucusu ortamı; sözlükteki 'Kap (Container)' veri yapısı kapsayıcısından farklıdır. Kitapta 'konteyner' olarak kullanılır |
| Argument | Argüman (Argument) | Fonksiyona geçirilen parametre |
| Argument List | Argüman Listesi (Argument List) | Değişken sayıda argüman alan fonksiyonlar (varargs) |
| Argument Object | Argüman Nesnesi (Argument Object) | Birden fazla argümanı bir sınıfa sarma tekniği |
| ASM | ASM (Java bytecode manipulation framework) | Java bayt kodu işleme/üretme çerçevesi; sayfa 189'da CGLIB ile birlikte programatik enstrümantasyon aracı olarak geçer. Teknik araç adı olduğu için İngilizce kalır. |
| Aspect | Görünüm (Aspect) | AOP'de belirli bir kaygıyı desteklemek için sistemin hangi noktalarında davranışın tutarlı biçimde değiştirileceğini belirten modüler yapı |
| Aspect Oriented Programming | Görünüm Yönelimli Programlama (AOP) | Tekrarı kaldırma stratejilerinden biri |
| AspectJ | AspectJ | Java'nın bir uzantısı olan, görünümleri (aspects) 'birinci sınıf' (first-class) yapılar olarak destekleyen tam donanımlı görünüm yönelimli programlama (AOP) dili. Ürün adı olarak İngilizce kalır. |
| Assembly Language | Assembly Dili (Assembly Language) | Makine koduna çok yakın, düşük seviyeli programlama dili |
| Assertion | Doğrulama İfadesi (Assertion) | Doğru olması gereken bir koşulu çalışma anında denetleyen ifade (assert); iyi bir belgelemedir ama null sorununu çözmez |
| Assignment Operator | Atama Operatörü (Assignment Operator) | Sağ taraftaki değeri sol taraftaki değişkene atayan operatör (=) |
| Assignment Statement | Atama İfadesi (Assignment Statement) | Bir değişkene değer atayan ifade |
| Atomic Operation | Atomik İşlem (Atomic Operation) | Bölünemeyen, tek adımda bütün olarak gerçekleşen işlem; birlikte anlam taşıyan değerlerin tek çağrıyla ayarlanması |
| Attention to Detail | Detaylara Dikkat (Attention to Detail) | Temiz kodun temel özelliği |
| Author | Yazar (Author) |  |
| Autocomplete / Code Completion | Otomatik Kod Tamamlama (Autocomplete) | IDE'nin isim önerme özelliği |
| Automated Tool | Otomatik Araç (Automated Tool) | Biçimlendirme kurallarını geliştirici yerine uygulayan araç |
| Backpressure | Geri Baskı (Backpressure) | Sınırlı kuyruğun dolmasıyla hızlı tarafın (üreticinin) bloklayan put çağrısında bekleyerek otomatik yavaşlatılması; kavram kartı (bounded-queue-backpressure) için eklendi. |
| Bad Code | Kötü Kod (Bad Code) | Bakımı zor, okunması güç kod |
| Base Class | Üst Sınıf (Base Class) | Kalıtım hiyerarşisinde davranışın önce toplandığı kök sınıf; bu sayfada 'the ArgumentMarshaler base class' ifadesinde geçer. Sözlükteki 'Concrete Class' ve 'Abstract Class' terimlerinden ayrı, genel kavram. |
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
| Boundary Condition Error | Sınır Koşulu Hatası (Boundary Condition Error) | [T5] ile işaretli hata türü: sınır değerlerdeki kapsayıcılık yanlışının (ör. > yerine >= olması gereken koşul) yol açtığı tipik hata. Sayfa 269'da getFollowingDayOfWeek metodundaki hata için geçer. |
| Boundary Interface | Sınır Arayüzü (Boundary Interface) | Sistemin sınırında üçüncü taraf kodla temas eden arayüz (ör. Map); kullanıldığı sınıfta ya da yakın sınıf ailesinde tutulmalı, public API'lerde dolaştırılmamalı |
| Boundary Test | Sınır Testi (Boundary Test) | Üçüncü taraf koda giden arayüzü üretim kodunun kullandığı şekilde çalıştıran testler; yeni sürümlere geçişi kolaylaştırır |
| Boy Scout Rule | İzci Kuralı (Boy Scout Rule) | Kamp alanını bulduğundan daha temiz bırak prensibi |
| Breaking Indentation | Girintiyi Bozma (Breaking Indentation) | Kısa if/while/fonksiyon bloklarını tek satıra sıkıştırarak girinti kuralının çiğnenmesi; kaçınılması gereken bir alışkanlık |
| Breakpoint | Kesme Noktası (Breakpoint) | Hata ayıklamada (debug) programın durdurulması için ayarlanan nokta; vurulan kesme noktalarına bakarak sistemin durumu belirlenebilir. |
| Broken Windows | Kırık Pencereler (Broken Windows) | Pragmatik Programcılar metaforu: bir kırık pencere tüm binayı çürütür |
| Bug | Hata (Bug) | Sektörde "bug" olarak da kullanılır |
| BUILD-OPERATE-CHECK | KUR-İŞLET-DENETLE (BUILD-OPERATE-CHECK) | Testi üç bölüme ayıran desen: test verisini kur, bu veri üzerinde işlem yap, işlemin beklenen sonucu verdiğini denetle; Arrange-Act-Assert olarak da bilinir (FitNesse kabul testi desenleri) |
| Business Logic | İş Mantığı (Business Logic) | Uygulamanın iş kurallarını (Business Rule) uygulayan mantık katmanı; sözlükteki 'İş Kuralı (Business Rule)' teriminden türetilmiştir. |
| Business Rule | İş Kuralı (Business Rule) | Uygulamanın alanına ait politika ve hesaplama mantığı; veri yapısına değil nesneye aittir |
| Byte-Code | Bayt Kodu (Byte-Code) | Derleyicinin ürettiği, JVM tarafından çalıştırılan orta düzey makine temsilinin kendisi; sözlükteki 'Byte-Code Manipulation' (Bayt Kodu İşleme) teriminden ayrıdır, yalnızca bayt kodu kavramıdır. |
| Byte-Code Manipulation | Bayt Kodu İşleme (Byte-Code Manipulation) | Derlenmiş sınıf dosyalarının bayt kodunun çalışma anında değiştirilmesi; arayüzü olmayan sınıfları vekillemek için CGLIB, ASM, Javassist gibi kütüphaneler kullanılır. |
| Caching | Önbellekleme (Caching) | Sık erişilen verilerin, tekrar hesaplama ya da veritabanı erişiminden kaçınmak için hızlı erişilen bellekte saklanması; çapraz kesim kaygısı (cross-cutting concern) örneği. |
| Callee | Çağrılan Fonksiyon (Callee) | Başka bir fonksiyon tarafından çağrılan fonksiyon |
| Caller | Çağıran Fonksiyon (Caller) | Başka bir fonksiyonu çağıran fonksiyon |
| Cardinality | Kardinalite (Cardinality) | Args vaka çalışmasında fiilen sağlanan argüman sayısını ifade eder; args.cardinality() metodu bu sayıyı döndürür. |
| Care | Önemseme (Care) | Zanaata ve koda duyulan özen |
| Case Study | Vaka Çalışması (Case Study) | Chapter 14'ün açılış alt başlığı ve konusu; gerçek bir modülün (komut satırı argümanı ayrıştırıcısı) adım adım yeniden düzenlenmesi üzerinden anlatılan örnek inceleme. |
| Case-Insensitive Comparison | büyük/küçük harfe duyarsız karşılaştırma (case-insensitive comparison) | equalsIgnoreCase gibi, metinleri harf büyüklüğünü dikkate almadan karşılaştıran işlem; testWeekdayCodeToString testinin ve stringToMonthCode fonksiyonunun düzeltilmesinde geçer. |
| Casting | Tür Dönüştürme (Casting) | Bir değeri açıkça başka bir türe çevirme, ör. (Sensor) sensors.get(id); istemci koda dağıldığında kodu kirletir |
| CGLIB | CGLIB (Java Bytecode Generator Library) | Java bayt kodu üreten kütüphane; sayfa 189'da kodu programatik olarak enstrümanlamak için önerilen araçlardan biri. Teknik araç adı olduğu için İngilizce kalır. |
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
| Client-Based Locking | İstemci Tabanlı Kilit (Client-Based Locking) | Paylaşılan nesnedeki birden fazla senkronize metodu istemcinin çağırması gerektiğinde, kilitleme sorumluluğunun istemciye verilmesi: istemci ilk çağrıda sunucuyu kilitler ve kilidin kapsamı son metodu çağıran kodu da kapsar. Sayfa 185'te üç düzeltme yolundan ilkidir. |
| Closed Class | Kapalı Sınıf (Closed Class) | Açık Kapalı İlkesi (OCP) anlamında değişikliğe kapalı sınıf: yeni işlev, mevcut sınıfı düzenleyerek değil yeni bir alt sınıf ekleyerek kazandırılır (Listing 10-10) |
| Closing Brace | Kapatma Parantezi (Closing Brace) | Fonksiyon veya blok sonuna eklenen (artık gereksiz) yorum |
| Code Formatting | Kod Biçimlendirme (Code Formatting) | Kodun biçimini yöneten kuralların uygulanması; bir iletişim aracıdır |
| Code Rot | Kod Çürümesi (Code Rot) | Kötü kodun zamanla çürümesi, mayalanması ve ekibi aşağı çeken durdurulamaz bir yüke dönüşmesi; 'code rots' = 'kod çürür'. Sözlükteki 'Decay' (Çürüme) teriminin kod bağlamındaki karşılığı. |
| Code Smell | Kod Kokusu (Code Smell) | Koddaki potansiyel sorunların belirtisi |
| Code-Sense | Kod Duygusu (Code-Sense) | Temiz kodu kirli koddan ayırt etme ve düzeltme yetisi |
| Coding Standard | Kodlama Standardı (Coding Standard) | Bir takımın uyduğu biçimlendirme/kodlama kurallarının yazılı ya da örnek kod hâlindeki tanımı |
| Coding Style | Kodlama Biçemi (Coding Style) | Bir geliştirici ya da ekibin kodu yazarken izlediği tutarlı biçim alışkanlıkları |
| Cognitive Break | Bilişsel Kesinti (Cognitive Break) | Fonksiyon imzasını kontrol etme gerekliliği |
| Cohesion | Bütünlük (Cohesion) | Bir grup argümanın ya da elemanın birbiriyle ne kadar doğal biçimde ilişkili olduğu; ör. bir noktanın x ve y bileşenleri |
| Collection Abstraction | Koleksiyon Soyutlama (Collection Abstraction) |  |
| Command Query Separation | Komut Sorgu Ayrımı (Command Query Separation) | Fonksiyonlar ya bir şey yapmalı ya da bir soruyu yanıtlamalı, ikisini birden değil |
| Command-Line Argument | Komut Satırı Argümanı (Command-Line Argument) | main fonksiyonuna dizgi dizisi olarak geçirilen ve ayrıştırılması gereken satır içi girdi; bu bölümde Args sınıfının konusu. 'Argument' ve 'Argument List' terimlerinden ayrı, dar bir kavramdır. |
| Command-Line Arguments | Komut Satırı Argümanları (Command-Line Arguments) | Komut satırından programa aktarılan girdi dizgileri; bu sayfada `Args` sınıfının ayrıştırdığı ana girdi. Sözlükteki 'Argument' (Argüman) teriminin komut satırı bağlamındaki kullanımıdır. |
| Commented-out Code | Yorum Satırına Alınmış Kod (Commented-out Code) | Silinmesi gereken, artık kullanılmayan kod blokları |
| Commit | Commit | Çevrilmez, olduğu gibi kullanılır |
| Commitment | Taahhüt (Commitment) |  |
| Communication Gap | İletişim Boşluğu (Communication Gap) | Alan kavramı ile onu gerçekleştiren kod arasındaki anlam kaybı/uzaklık; DSL'ler bu boşluğu en aza indirir |
| compile | derlemek (compile) | Glossary'deki 'Compiler | Derleyici (Compiler)'in fiil hâli; 'get this to compile' = 'bunun derlenmesi için'. |
| Compiler | Derleyici (Compiler) | Kaynak kodu makine koduna çeviren program |
| Completeness | Tamamlılık (Completeness) | Bir dizi test veya işlemin her olası durumu kapsaması; sayfa 239'da 'for completeness' ifadesinde geçer: eksik double argümanının testi yalnızca tamamlılık için yazılmıştır. |
| Component Oriented Programming | Bileşen Yönelimli Programlama (COP) | Tekrarı kaldırma stratejilerinden biri |
| Composed Method | Oluşturulmuş Metot (Composed Method) | Metodu küçük adımlara bölerek oluşturma |
| Compromise | Uzlaşma (Compromise) | Mükemmel çözüm yerine pratikte kabul edilen orta yol; bu sayfada hata mesajı biçimlendirmesinin ArgsException'ta tutulması bir uzlaşma olarak nitelendirilir. |
| Conceptual Affinity | Kavramsal Yakınlık (Conceptual Affinity) | Kod parçalarının kavramsal olarak birbirine yakın olması; doğrudan bağımlılık ya da benzer işlem yapma nedeniyle olabilir; yakınlık arttıkça dikey mesafe azalmalı |
| Concrete Class | Somut Sınıf (Concrete Class) | Gerçekleştirim ayrıntılarını (kodu) içeren sınıf; istemcinin doğrudan somut sınıfa bağımlı olması, ayrıntılar değiştiğinde risk yaratır |
| Concurrency | Eşzamanlılık (Concurrency) | Bölüm 13'ün açılış sayfası ve konusu: birden çok işin iş parçacıkları (threads) aracılığıyla aynı anda yürütülmesini sağlayan tasarım ve programlama disiplini. Sözlükteki 'Race Condition' (Yarış Durumu) terimiyle ilişkili ama ayrı bir kavramdır. |
| Configuration File | Yapılandırma Dosyası (Configuration File) | Hangi nesnelerin birbirine bağlanacağı (wiring) gibi kurulum kararlarının koda gömülmek yerine dışarıda tutulduğu dosya; ör. Spring'in XML yapılandırma dosyası |
| Consistent Lexicon | Tutarlı Kelime Haznesi (Consistent Lexicon) | Kod tabanında tutarlı terimler kullanma prensibi |
| Constant | Sabit (Constant) | Programın çalışması boyunca değişmeyen, adlandırılmış değer; uygun soyutlama seviyesinde tutulmalıdır [G35] |
| Constructor | Kurucu (Constructor) | Bir nesne oluşturulurken çağrılan, ilklendirme yapan özel metot |
| Constructor Argument | kurucu argümanı | Bir nesnenin kurucusuna (constructor) geçirilen parametre; Abstract Factory bağlamında uygulama, kurulum ayrıntılarını bilmeden fabrika yöntemiyle uygulamaya özgü kurucu argümanları sağlayabilir |
| Container | Kap (Container) | Veri yapısı kapsayıcısı (List, Set, Map vb.) |
| Contention | Çekişme (Contention) | Birden çok iş parçacığının aynı kilit/kaynak için yarışması; sayfa 185'te 'increases contention and degrades performance' ifadesinde geçer. Kritik bölge büyüdükçe çekişme artar. |
| ConTest | ConTest | IBM tarafından geliştirilen, eşzamanlılık hatalarını yakalamak için thread scheduling'i programatik olarak kontrol eden test aracı; dipnot 18: http://www.alphaworks.ibm.com/tech/contest. Araç adı olduğu için çevrilmez. |
| Context | Bağlam (Context) | Kodun anlaşılması için gereken çevresel bilgi |
| Continuous Improvement | Sürekli İyileştirme (Continuous Improvement) |  |
| Conundrum | İkilem (Conundrum) | Temiz kodun temel felsefesiyle ilgili zorluk |
| Convention over Configuration | yapılandırmadan çok kural (convention over configuration) | Açıkça yapılandırılacak pek çok şey için akla uygun varsayılan davranışlar tanımlama ilkesi; açık 'bağlama' (wiring) mantığı miktarını azaltır. |
| Cosmic Ray | Kozmik Işın (Cosmic Ray) | Tek seferlik, açıklanamayan başarısızlıklara uydurulan bahane; bu sayfada 'write off the failure as a cosmic ray' ifadesinde geçer. |
| CountDownLatch | CountDownLatch | Bir dizi olayın gerçekleşmesini bekleyip sonra tüm iş parçacıklarını serbest bırakan kilit; java.util.concurrent paketinde. Teknik sınıf adı olduğu için çevrilmez. |
| Coup de Grace | Nihai Darbe (Coup de Grace) | Fransızca 'nihai darbe' ifadesi; yeniden düzenlemede (refactoring) bir yapının (ör. tip-zinciri) son kullanımı taşındıktan sonra tek hamlede kaldırılma anını betimler. Sayfa 236'da 'the coup de grace' ifadesinde geçer. |
| Coupling | Bağımlılık (Coupling) | Bileşenlerin birbirine bağımlılığı |
| Coverage Map | Kapsam Haritası (Coverage Map) | Kod kapsamı (code coverage) aracının, sınıfın hangi bölgelerinin testlerce yürütüldüğünü/çalıştırılmadığını renklendirerek gösteren görselleştirmesi; yeniden düzenlemede riskli bölgeleri işaret eder. Sayfa 268'de 'yama yorganına (patchwork quilt) benzer' olarak betimlenir. |
| Craft | Zanaat (Craft) | Programlamanın bir bilimden çok zanaat olduğuna dair 'programming is a craft' ifadesindeki sade terim; sayfa 200'de geçer. Sözlükteki 'Craftsmanship | Zanaat / Ustalık (Craftsmanship)' ve 'Software Craftsmanship | Yazılım Zanaatı (Software Craftsmanship)' girdilerinden ayrıdır. |
| Craftsmanship | Zanaat / Ustalık (Craftsmanship) | Yazılım zanaatı |
| Crawler | Tarayıcı (Crawler) | Sayfaları dolaşıp işleyen bileşen; FitNesse'de wiki sayfalarını ekleyip bulan nesne (crawler.addPage). Web tarayıcısı (browser) ile karıştırılmamalı |
| Crisp Abstraction | Keskin Soyutlama (Crisp Abstraction) | Grady Booch'un temiz kod tanımından; net ve öz soyutlama |
| Critical Section | Kritik Bölge (Critical Section) | Paylaşılan kaynağa erişim için iş parçacıklarının sırayla girmesi gereken kod bölümü; kavram kartlarında kullanıldı. |
| Cross-Cutting Concern | Çapraz Kesim Kaygısı (Cross-Cutting Concern) | Kalıcılık, güvenlik, işlem yönetimi gibi nesnelerin doğal sınırlarını keserek birçok modüle yayılan kaygı türü |
| crufty | paslı/çürümüş (crufty) | Eski, köhne, ömrünü tamamladığı için temizlenmesi gereken kod için kullanılan sıfat; bu sayfada IntegerArgumentMarshaler'daki artık kullanılmayan metotlar için geçer. 'Dirty Code' (Kirli Kod) teriminden ayrıdır, eskilik/ömrünü tamamlama vurgusu taşır. |
| Data Abstraction | Veri Soyutlama (Data Abstraction) | Verinin nasıl saklandığını değil ne anlama geldiğini dışarı açma |
| Data Access Object (DAO) | Veri Erişim Nesnesi (DAO) | Kalıcı depoya (ör. veritabanı) erişimi kapsülleyen, iş nesnesini depolama ayrıntılarından ayıran nesne; kitapta 'data accessor object (DAO)' olarak geçer. |
| Data Structure | Veri Yapısı (Data Structure) | Verisini açıkça gösteren, anlamlı davranışı olmayan yapı |
| Data Transfer Object (DTO) | Veri Aktarım Nesnesi (Data Transfer Object / DTO) | Public değişkenleri olan, fonksiyonu olmayan saf veri yapısı; veritabanı ve soket sınırlarında kullanılır |
| Data Type | Veri Türü (Data Type) | Bir değişkenin veya değerin türünü belirten kavram |
| Data/Object Anti-Symmetry | Veri/Nesne Karşı Simetrisi (Data/Object Anti-Symmetry) | Nesneler yeni türü, veri yapıları yeni işlemi kolaylaştırır |
| DBMS | DBMS (Veritabanı Yönetim Sistemi — Database Management System) | Database Management System; veritabanını yöneten yazılım. Kısaltma İngilizce kalır |
| Deadline | Son Teslim Tarihi (Deadline) | Projenin teslim edilmesi gereken tarih |
| Deadlock | Ölü Kilit (Deadlock) | Sayfa 179 listesinde 'concurrent update and deadlock' ifadesinde geçer; iş parçacıklarının birbirini sonsuza dek beklediği durum. |
| Decay | Çürüme (Decay) | Kırık pencereler metaforunda kodun giderek kötüleşmesi |
| Decentralized Management | Merkezi Olmayan Yönetim (Decentralized Management) | Modülerlik (Modularity) ve kaygıların ayrılması (Separation of Concerns) sayesinde, yeterince büyük bir sistemde yönetim ve karar verme sorumluluğunun tek bir kişiye değil alanlara/ekiplerine dağıtılması. |
| Decisive | Kararlı (Decisive) | Kodun tereddütsüz ve kesin olması |
| Declaration | Tanımlama (Declaration) | Bir değişkenin ya da üyenin adının ve türünün kodda bildirilmesi |
| Decorator (GoF pattern) | Süsleyici (Decorator) | GoF tasarım deseni: bir nesneyi aynı arayüzü taşıyan başka bir nesneyle sarmalayarak (wrap) davranışını saydam (transparent) biçimde genişletme; iç içe süsleyiciler 'Rus bebeği (Russian doll)' gibi katmanlanır. |
| Decoupling | Ayrıştırma (Decoupling) | Bileşenler arasındaki bağımlılığı (coupling) azaltma; bu şekilde ayrıştırılmış sistemler daha kolay test edilir, daha esnektir ve yeniden kullanımı teşvik eder |
| defactored | defactored (yeniden düzenleme yapılmamış) | Listing 15-3'ün başlığında geçer: modülün kasıtlı olarak yeniden düzenlenmemiş (refactoring uygulanmamış), yani daha kötü bırakılmış hâli; 'refactored' sözcüğünün zıt yönlü bir kelime oyunudur. |
| Default Constructor | Varsayılan Kurucu (Default Constructor) | Argüman almayan kurucu; log4j'de ConsoleAppender'ın varsayılan kurucusu nesneyi yapılandırılmamış bırakır |
| Delegation | Delege Etme (Delegation) | Sorumluluğu başka bir nesneye devretme |
| Dependency | Bağımlılık (Dependency) |  |
| Dependency Injection | Bağımlılık Enjeksiyonu (Dependency Injection) |  |
| Dependency Inversion Principle (DIP) | Bağımlılık Tersine Çevirme İlkesi (DIP) | Üst seviye modüller alt seviye modüllere değil, soyutlamalara bağımlı olmalı |
| Dependency Magnet | Bağımlılık Mıknatısı (Dependency Magnet) | Birçok sınıfın bağımlı olduğu merkezi yapı (ör. Error enum) |
| Dependent Functions | Bağımlı Fonksiyonlar (Dependent Functions) | Biri diğerini çağıran fonksiyonlar; dikey olarak yakın durmalı, çağıran çağrılanın üstünde olmalı |
| deploy | yerleştirmek (deploy) | Chapter 14 vaka çalışması jargonu: bir fonksiyonu/değişkeni üst sınıftan doğru alt sınıfa taşıma; glossary'deki 'Deployment Descriptor' (Dağıtım Betimleyicisi) ve 'Redeployment' (Yeniden Dağıtım) terimlerinden farklı bir anlam taşır. |
| Deploy (down) | yerleştirmek/deploy (deploy) | Ardışık iyileştirme (Successive Refinement) bağlamında bir fonksiyonu taban sınıftan alt sınıflara (ör. set'in BooleanArgumentMarshaller'a) doğru indirme/yerleştirme; sayfa 218'de get için de kullanılacak. |
| Deploying | Yerleştirme (Deploying) | Bu sayfadaki anlamda bir metodu/davranışı marshaler sınıfına taşıma; yazılım dağıtımı (deployment) anlamında değildir. |
| Deployment Descriptor | Dağıtım Betimleyicisi (Deployment Descriptor) | EJB'de kalıcılık, işlemsel davranış ve güvenlik gibi ayarları kaynak koddan bağımsız olarak bildiren XML dosyası |
| Derivative | Türev (Derivative) | Kitaptaki kullanımda ArgumentMarshaler arayüzünü gerçekleştiren sınıflar (BooleanArgumentMarshaler, StringArgumentMarshaler vb.); matematiğin türev kavramıyla ilgisi yoktur. Sayfa 197'de 'what its derivatives do' ifadesinde geçer. |
| Derivatives | Türevler (Derivatives) | Soyut taban sınıftan kalıtımla türetilen alt sınıflar; sayfa 197-198'de 'derivatives' için 'türevler' kullanılmıştı, tutarlıdır. |
| Descriptive Names | Betimleyici İsimler (Descriptive Names) | Fonksiyonun ne yaptığını açıkça anlatan, gerekirse uzun tutulan isimlendirme ilkesi |
| Design Intent | Tasarım Amacı (Design Intent) | Sistemin amaçlanan mimari yapısı |
| Design Pattern | Tasarım Deseni (Design Pattern) |  |
| Dining Philosophers | Yemek Yiyen Filozoflar (Dining Philosophers) | Yuvarlak masada çatal (resource) için yarışan filozoflar (threads) metaforuyla kaynak yarışı; dikkat edilmezse ölü kilit (deadlock) ve canlı kilit (livelock) üretir; sayfa 184'te level-2 başlık. |
| Dirty Code | Kirli Kod (Dirty Code) | Temiz olmayan, bakımı zor kod |
| Dirty Tests | Kirli Testler (Dirty Tests) | Kalite standartları gözetilmeden “çabuk ve kirli” yazılmış testler; değiştirilmeleri zorlaşır ve zamanla bir yüke dönüşürler |
| Disinformation | Yanlış Bilgi (Disinformation) | İsimlerin okuyucuyu yanlış yönlendirmesi |
| Documentation by Example | Örnekle Dokümantasyon (Documentation by Example) | Testlerin başlıca amaçlarından biri: testleri okuyan kişinin sınıfın ne işe yaradığını hızlıca anlaması; sayfa 175'te 'documentation by example' ifadesi olarak geçer. |
| Dogma | Dogma | Chapter 12 'Minimal Classes and Methods' kesitinde: her sınıfa arayüz dayatma ya da veri/davranışı zorla ayırma gibi bağlamdan kopuk, sorgulanamaz kurallar; kitapta 'pointless dogmatism' (anlamsız dogmatizm) ifadesiyle eleştirilir. |
| Dogmatism | Dogmatizm | Dogma kelimesinin hâl/kavram karşılığı; 'pointless dogmatism' = 'anlamsız dogmatizm'. 'Minimal Classes and Methods' kesitinde yüksek sınıf/metot sayılarının kaynağı olarak işaret edilir. |
| Domain Expert | Alan Uzmanı (Domain Expert) | İş alanına (problem alanına) hakim uzman kişi |
| Domain Logic | alan mantığı (domain logic) | Uygulamanın iş alanına (domain) ait saf mantık; kalıcılık, güvenlik gibi mimari kaygılardan ayrıştırılmış POJO'larda tutulur. Sözlükteki 'İş Mantığı (Business Logic)' terimiyle yakın anlamlıdır. |
| Domain-Specific Language | Alana Özgü Dil (Domain-Specific Language) |  |
| Domain-Specific Testing Language | Alana Özgü Test Dili (Domain-Specific Testing Language) | Sistem API'lerinin üzerine kurulan, testleri yazmayı ve okumayı kolaylaştıran fonksiyon ve yardımcı araçlardan oluşan test dili; baştan tasarlanmaz, test kodunun yeniden düzenlenmesiyle gelişir |
| Don't Repeat Yourself (DRY) | Kendini Tekrar Etme (Don't Repeat Yourself / DRY) | Kod ve bilgi tekrarını en aza indirmeyi amaçlayan ilke; sayfa 48 başlığı |
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
| Encapsulation | Kapsülleme (Encapsulation) |  |
| Entity | Varlık (Entity) | Sınıf, metot, fonksiyon gibi yapı |
| Entity Bean | Entity Bean (Varlık Bean’i) | EJB2’de ilişkisel verinin (bir tablo satırının) bellek içi temsilini sağlayan kalıcı bileşen; kalıcılık, işlem ve iş API’sini tek sınıfta birleştirmesi organik büyümeyi engeller. |
| Error Code | Hata Kodu (Error Code) | Bir fonksiyonun başarı/hata durumunu bildirmek için döndürdüğü özel değer; istisnaların (exception) alternatifi |
| Error Flag | Hata Bayrağı (Error Flag) | Hata oluştuğunu belirtmek için ayarlanan ve çağıranın kontrol etmesi gereken değişken; istisnaların eski alternatifi |
| Error Handling | Hata Yönetimi (Error Handling) | Hataları yakalama ve işleme stratejisi |
| Error Processing | Hata İşleme (Error Processing) | Sayfa 238’de 'all the error processing works correctly' ifadesinde geçer; sözlükteki 'Error Handling | Hata Yönetimi' teriminin 'işleme' odaklı varyantıdır. Bu sayfada 'hata işleme' olarak çevrilmiştir. |
| Event (argument form) | Olay (Event) | Tek argümanlı fonksiyonların üçüncü ortak formu: bir girdi argümanı alır ama çıktı döndürmez, çağrının bir olay olarak yorumlanmasını ve sistemin durumunu değiştirmesini amaçlar. |
| Exception | İstisna (Exception) | Hata yönetimi bağlamında |
| Exception Class | İstisna Sınıfı (Exception Class) | Hatayı temsil eden sınıf; en önemli ölçüt, çağıranın onu nasıl yakalayacağıdır |
| Exception Classification | İstisna Sınıflandırması (Exception Classification) | İstisnaların türlere ayrılma biçimi; Clean Code'a göre kaynağa değil, nasıl yakalandıklarına göre yapılmalı |
| Exception Management | İstisna Yönetimi (Exception Management) | İstisnaların (exception) akışını düzenleyen try/catch kod bloklarının bütünü; bu sayfada 'the ugly exception management code' ifadesinde geçer. Sözlükteki 'Error Handling | Hata Yönetimi (Error Handling)' terimiyle yakından ilişkili, istisna odaklı kullanımıdır. |
| Executable Statement | Çalıştırılabilir İfade (Executable Statement) | Kodda bir testin yürütebildiği, komut düzeyindeki çalıştırılabilir ifade; test kapsamı (test coverage) raporlarında kapsanan/yürütülen ifade sayısı olarak geçer. Sayfa 268'de SerialDate'in 185 çalıştırılabilir ifadesinden söz edilir. |
| Execution Path | Çalışma Yolu (Execution Path) | İş parçacıklarının izleyebileceği talimat sıralaması; bu sayfada 'possible execution paths' ve 'Possible Paths of Execution' başlığında geçer. Sözlükteki 'Normal Flow' (Normal Akış) teriminden farklıdır. |
| Executor Framework | İcracı Çerçevesi (Executor Framework) | Java 5'in java.util.concurrent paketinde; iş parçacığı yönetimini soyutlayarak görevleri (tasks) çalıştıran çerçeve. Sayfadaki 'Use the executor framework for executing unrelated tasks' maddesinde geçer. |
| Explanation of Intent | Niyetin Açıklanması (Explanation of Intent) | Kodun neden o şekilde yazıldığını açıklayan yorum |
| Explicit | Açık (Explicit) | Bağlamın kodda doğrudan yer alması |
| Expressive | İfade Gücü (Expressive) | Chapter 12'nin koşu başlığı (running header) terimi; sözlükteki 'Expressiveness | İfade Gücü (Expressiveness)' teriminin sıfatı. Sayfa 175'te kesit başlığı olarak geçer. |
| Expressiveness | İfade Gücü (Expressiveness) | Kodun tasarım fikirlerini açıkça iletmesi |
| Extensibility | Genişletilebilirlik (Extensibility) | Kodun yeni yeteneklerle genişletilebilme kolaylığı |
| Extract Method | Metot Çıkarma (Extract Method) | Büyük bir metodu daha küçük parçalara bölme refactoring tekniği |
| extraneous | gereksiz/fazlalık (extraneous) | İşlevi bulunmayan, ortamda fazladan duran yapı; sayfa 262'de 'eliminate the extraneous if statements' ifadesinde geçer. |
| F.I.R.S.T. | F.I.R.S.T. | Temiz testlerin beş özelliği: Hızlı (Fast), Bağımsız (Independent), Tekrarlanabilir (Repeatable), Kendini Doğrulayan (Self-Validating), Zamanında (Timely) |
| Factory Method | Fabrika Metodu (Factory Method) | Nesne oluşturma mantığını kapsülleyen metot |
| Failover | Hata Devri (Failover) | Bir bileşenin ya da sunucunun devre dışı kalması durumunda iş yükünün otomatik olarak yedek/başka bir bileşene aktarılması; çapraz kesim kaygısı (cross-cutting concern) örneği. |
| Fake | Sahte Nesne (Fake) | Testte gerçek bağımlılığın yerine geçen, basit ama çalışan gerçekleştirim; ör. FakeTransmitter |
| False Clue | Yanlış İpucu (False Clue) | Kodun anlamını bulanıklaştıran yanıltıcı isimler |
| Feature | Özellik (Feature) |  |
| Feature Envy | Özellik Kıskançlığı (Feature Envy) | Bir fonksiyonun başka bir sınıfın verisiyle kendi sınıfınınkinden daha çok ilgilenmesi |
| File Length | Dosya Uzunluğu (File Length) | Kaynak dosyanın satır sayısı; hedef ~200 satır, üst sınır 500 satır |
| File Size | Dosya Boyutu (File Size) | Kaynak dosyasının satır sayısı; Java'da sınıf boyutuyla yakından ilişkilidir |
| final | son sürüm (final) | Listing 15-5'in caption'ında '(final)' olarak geçer; '(interim)' (geçici sürüm) teriminin karşıtıdır ve yeniden düzenleme (refactoring) sürecinin son ürününü belirtir. |
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
| Function | Fonksiyon (Function) |  |
| Function Call Dependency | Fonksiyon Çağrı Bağımlılığı (Function Call Dependency) | Bir fonksiyonun başka bir fonksiyonu çağırmasından doğan bağımlılık; aşağı yönü göstermelidir |
| Function Header | Fonksiyon Başlığı (Function Header) | Fonksiyonun başına eklenen açıklama bloğu |
| Function Sections | Fonksiyon Bölümleri (Function Sections) | Fonksiyon içinde ayrılmış bölümler (declarations, initializations vb.) |
| Garbage Collection | Çöp Toplama (Garbage Collection) | Artık ulaşılamayan nesneleri bellekten geri alan otomatik bellek yönetimi işlemi; sayfadaki 'garbage collection overhead' ifadesinde 'çöp toplama ek yükü' olarak geçer. |
| geek | inek (geek) | Teknolojiye derin bağlı, meraklı kişi için kullanılan argo/sıcak ifade; kitapta sıkışık uçak ortamında dizüstü bilgisayarlarını çıkarıp kod yazmaya başlayan Kent Beck ve Eric Gamma için kullanılır. |
| Generic | jenerik (generic) | Özel bir durum yerine genel anlamında sıfat; 'much more generic' = 'çok daha jenerik'. Sözlükteki 'Generics | Jenerik Türler (Generics)' (Java 5 dili özelliği) teriminden ayrı bir kullanımdır. |
| Generics | Jenerik Türler (Generics) | Java 5 ile gelen, sınıf ve koleksiyonların tür parametresi almasını sağlayan özellik (ör. Map<Sensor>); tür dönüştürme ihtiyacını azaltır |
| Given-When-Then | Given-When-Then | Testleri hazırlık (given), eylem (when) ve doğrulama (then) bölümlerine ayıran yaygın adlandırma kuralı; çevrilmez, olduğu gibi kullanılır. |
| Glitch | Arıza (Glitch) | Donanım kaynaklı kısa süreli geçici bozulma; bu sayfanın dipnotlarında 'Cosmic-rays, glitches, and so on.' ifadesinde geçer. |
| God class | Tanrı sınıfı (God class) | Aşırı sayıda public metot ve sorumluluk yükleyerek neredeyse tüm sistemi tek başına yöneten aşırı büyük sınıf; kötü sınıf tasarımının uç örneği. |
| Graceful Shutdown | Düzgün Kapanış (Graceful Shutdown) | Kaynakların sırayla ve güvenle serbest bırakılarak, ölü kilit veya asılı iş parçacığı kalmadan sistemin sonlandırılması; bu sayfada ana tema. |
| Gratuitous Context | Gereksiz Bağlam (Gratuitous Context) | Bir isme zaten içinde bulunduğu yapı tarafından sağlanan bağlamı tekrar eklemek |
| Green-field Project | Yeşil Alan Projesi (Green-field Project) | Sıfırdan başlanan proje |
| Happy Path | Mutlu Yol (Happy Path) | Hiçbir hatanın oluşmadığı, kodun normal akışta izlediği yol |
| Hard-coded Dependency | Sabit Kodlanmış Bağımlılık (Hard-coded Dependency) | Bir sınıfın içinde doğrudan new ile oluşturulan ya da sabit yapılandırmayla gömülen bağımlılık; değiştirilmesi ve test edilmesi zordur, küçük Tek Sorumluluk İlkesi ihlaline yol açar |
| Headline | Manşet (Headline) | Gazete metaforunda dosyanın adı ve en üstteki üst seviye kod; okuyucuya dosyanın neyle ilgili olduğunu söyler |
| Heuristic | Sezgisel Kural (Heuristic) |  |
| Hiding Structure | Yapıyı Gizleme (Hiding Structure) | Nesnenin iç yapısını sormak yerine ondan iş yapmasını istemek |
| Hierarchy | Hiyerarşi (Hierarchy) | Kaynak dosyanın taslak benzeri iç içe yapısı; dosya, sınıf, metot ve blok seviyelerinden oluşur |
| High Availability | Yüksek Kullanılabilirlik (High Availability) | Bir sistemin kesintisiz biçimde erişilebilir ve kullanılabilir kalma yeteneği; büyük Web sitelerinin performansla birlikte hedeflediği özellik. |
| Hollerith Limit | Hollerith Sınırı (Hollerith Limit) | Delikli kartlardan kalma 80 karakterlik satır sınırı; bugün biraz keyfi kabul edilir |
| Horizontal Alignment | Yatay Hizalama (Horizontal Alignment) | Tanımlamalardaki isimleri ya da atamalardaki değerleri boşluklarla aynı sütuna dizme; yanlış şeyleri vurguladığı için önerilmez |
| Horizontal Formatting | Yatay Biçimlendirme (Horizontal Formatting) | Satır genişliği ve satır içi boşluklarla ilgili biçimlendirme; kısa satırlar tercih edilir (en fazla ~120 karakter) |
| Horizontal Openness and Density | Yatay Açıklık ve Yoğunluk (Horizontal Openness and Density) | İlişkili öğeleri bitişik yazma, zayıf ilişkili öğeleri yatay boşlukla ayırma |
| Horizontal White Space | Yatay Boşluk (Horizontal White Space) | Satır içindeki boşluklar; güçlü ilişkiyi birleştirmek, zayıf ilişkiyi ayırmak için kullanılır |
| Hybrid | Melez Yapı (Hybrid) | Hem anlamlı davranışı hem de açık durumu olan yarı nesne, yarı veri yapısı |
| if-else chain | if-else Zinciri (if-else chain) | Ardışık if/else if dallarıyla (tipik olarak instanceof ile) tür denetimi yapan kontrol yapısı; bu sayfada tamamen ortadan kaldırılmak istenen yapı, sayfa başlığı 'if-else Zincirinin Tasfiyesi' |
| Immutable | Değiştirilemez (Immutable) | Oluşturulduktan sonra durumu değiştirilemeyen nesne/koleksiyon; ör. Collections.emptyList() |
| Implementation | Gerçekleştirim (Implementation) | Bir arayüzün ya da soyutlamanın somut kod karşılığı; Bölüm 6'da veri soyutlama ve gizleme bağlamında sürekli geçer |
| Implementation Detail | Gerçekleştirim Ayrıntısı (Implementation Detail) | Bir sınıfın kullanıcılarının bilmesi ya da umursaması gerekmeyen iç tercih (ör. jenerik tür kullanılıp kullanılmadığı) |
| Implicity | Örtüklük (Implicity) | Bağlamın kodda açıkça belirtilmeme derecesi |
| Include Directive | Dahil Etme Yönergesi (Include Directive) | FitNesse'de sayfa dahil etme komutu |
| incremental | kademeli (incremental) | Tek tek, küçük adımlarla ilerleme; sayfa 208'de 'I added the two argument types incrementally' ifadesinde geçer. |
| Incrementalism | Kademecilik (Incrementalism) | Kodun yapısının büyük patama (big-bang) yeniden yazımlar yerine küçük, testle doğrulanan kademeli adımlarla iyileştirilmesi yaklaşımı; bu sayfada 'On Incrementalism' alt kesitinin konusu. Sözlükteki 'Successive Refinement' (Ardışık İyileştirme) kavramıyla yakından ilgilidir. |
| Indent Level | Girinti Seviyesi (Indent Level) | Kod bloklarının iç içe geçme derinliği |
| Indentation | Girinti (Indentation) | Kod satırlarının hiyerarşideki konumlarına göre sağa kaydırılması; kapsam hiyerarşisini görünür kılar |
| Index | Dizin (Index) | Bir dizgideki ya da koleksiyondaki konum değeri; bu sayfada `prefixIndex` ve `suffixIndex` üye değişkenlerinin gerçekte birer dizin olduğu vurgulanır. Çoğulu 'indices' olarak geçer. |
| Informative Comment | Bilgilendirici Yorum (Informative Comment) | Kodun yapısı veya regex gibi karmaşık kısımlar hakkında bilgi veren yorum |
| Informed Decision | Bilinçli Karar (Informed Decision) | Mümkün olan en iyi ve en güncel bilgiyle verilen karar |
| Inheritance | Kalıtım (Inheritance) |  |
| Inline / Inlining | satır içi (inline) | Refactoring tekniği: küçük bir metot çağrısının yerine gövdesinin doğrudan çağrı noktasına yapıştırılması ve metotların kaldırılması. Sayfa başlığında 'Inlining Parse Methods', parçada 'I inlined the three parse methods' ifadesinde geçer; metinde 'satır içine (inline) aldım' biçiminde kullanılmıştır. |
| Inlining / Inline | Satır İçi Alma (Inlining) | Tek satırlık, tek çağrılı metotların gövdesini çağıran metot içinde doğrudan kullanma yeniden düzenleme (refactoring) tekniği; 'inline (a method)' = (bir metodu) satır içine almak. Sözlükte 'Inline'/'Inlining' girdisi yoktu; bu sayfada 'So I inlined them' ifadesinde geçer. |
| Instance | Örnek (Instance) | Bir sınıftan oluşturulmuş somut nesne; ör. PathParser.parse çağrısının döndürdüğü PagePath örneği |
| Instance Variable | Örnek Değişkeni (Instance Variable) | Bir sınıfın her nesnesinde ayrı ayrı tutulan üye değişken |
| Instantiation | Örnekleme (Instantiation) | Bir sınıftan nesne oluşturma işlemi; 'instantiate' = örneklemek. Tembel örnekleme (lazy instantiation) ile birlikte geçer |
| Instrumentation | Enstrümantasyon (Instrumentation) | Kodun içine, yalnızca test sırasında etkin olacak ölçüm/kesinti noktaları (ör. wait, sleep, yield, priority çağrıları) ekleme tekniği; nadir eşzamanlılık kusurlarını zorlayarak ortaya çıkarmak için kullanılır. Sayfa 188'de 'Instrument Your Code to Try and Force Failures' başlığı altında geçer. |
| integer | tamsayı (integer) | Tam sayı veri tipi; sayfa 208'de 'String and integer' ifadesinde argüman tipi olarak geçer. Sözlükteki 'Integer Handle' teriminden farklıdır. |
| Integer Argument | Tamsayı Argümanı (Integer Argument) | Komut satırında beklenen tipi int olan argüman; sayfadaki intArgs haritası, setIntArg ve getInt metotlarının konusu. Sözlükteki 'Argument' teriminin daraltılmış biçimidir. |
| Integer Handle | Tamsayı Tanıtıcısı (Integer Handle) |  |
| Integration | Entegrasyon (Integration) | Mevcut kodun bir parçasının yeni bir yapıya/metoda birleştirilmesi; bu sayfada 'integrate ... into the setArgument function' ifadesinde geçer: istisna yönetimi kodunun `setArgument` fonksiyonuna entegre edilmesi. Fiil biçimi 'entegre etmek' olarak çevrilir. |
| Intent | niyet (intent) | Yazarın küçük, testle doğrulanan adımlarla koda kazandırmak istediği yapısal niyet; bu sayfada 'you should be able to see my intent' ifadesinde geçer. 'Explanation of Intent' ve 'Intention-Revealing Names' terimlerinden ayrı, genel kavram. |
| Intention-Revealing Names | Niyet Belirten İsimler (Intention-Revealing Names) | Amacı açıkça ortaya koyan isimler |
| Interface | Arayüz (Interface) |  |
| interim | geçici sürüm (interim) | Listing 15-4 başlığında (interim): yeniden düzenleme (refactoring) sürecindeki ara, beklenen-geçiş sürümünü belirtir; 'Listing 15-4 ComparisonCompactor.java (interim)' ifadesinde geçer. |
| Interpreter | Yorumlayıcı (Interpreter) | Kaynak kodu satır satır çalıştıran program |
| Intrinsic Lock | İçsel Kilit (Intrinsic Lock) | Her Java nesnesine gömülü olan kilit; `synchronized` blokları bu kilitle çalışır. Sayfa 182'de 'the intrinsic lock' ifadesinde geçer. |
| Invasiveness | istilacılık (invasiveness) | Bir çerçevenin (framework) gereksinimlerinin iş nesnesinin içine girerek onu kirletmesi; EJB2'nin sınıf ve arayüz dayatmasının yan etkisi. |
| Inversion of Control (IoC) | Kontrolün Tersine Çevrilmesi (Inversion of Control — IoC) | Bağımlılık yönetiminde kontrolün nesneden, bu amaca adanmış harici bir mekanizmaya (main, kap/container) devredilmesi ilkesi; Bağımlılık Enjeksiyonu (DI) bu ilkenin uygulanmasıdır |
| InvocationHandler | Çağrı İşleyici (InvocationHandler) | Java yansıma (reflection) API'sindeki arayüz; vekile yapılan her metot çağrısı, bu nesnenin invoke metodu aracılığıyla ele alınır. |
| Iteration (test loop) | Yineleme (Iteration) | Testin belirli sayıda kez tekrarlanması; bu sayfada 'run for a number of iterations' maddesinde geçer. |
| Iterative Process | Yinelemeli Süreç (Iterative Process) | Sonuca tek seferde değil, tekrarlanan adımlarla ulaşan süreç; sayfa 265'te 'Refactoring is an iterative process' ifadesinde geçer. Sözlükteki 'Iteration (test loop) | Yineleme' terimiyle aynı köktendir. |
| iterator | Yineleyici (Iterator) | Bir koleksiyonda sırayla elemanlara erişen nesne (ör. Iterator<String>); bu sayfada currentArgument olarak üç set fonksiyonuna da geçirilir |
| Java Memory Model | Java Bellek Modeli (Java Memory Model) | Java'nın hangi okuma/yazma işlemlerini atomik (atomic) saydığını ve paylaşılan değişkenlerin iş parçacıkları arasında nasıl göründüğünü tanımlayan sözleşme; bu sayfada 'what the Java memory model considers to be atomic' ifadesinde geçer. |
| Javadoc | Javadoc | Java API dokümantasyon formatı |
| JDK | JDK (Java Development Kit) | Java Geliştirme Kiti; kısaltma olduğu gibi kullanılır (sözlükteki 'JVM' girdisine paralel). Sayfadaki 'became part of the JDK' ifadesinde geçer. |
| Jiggle | Titretme (Jiggle) | Kod içine eklenen enstrümantasyon noktalarında rastgele uyku/yerini verme/hiçbir şey yapma seçimleri yaparak iş parçacıklarının çalışma sıralamasını zorla değiştirme tekniği; 'jiggle' fiili 'jiggle'lamak (titretmek)' olarak, isim 'titretme (jiggle)' olarak çevrilir. Sayfa 188-190 (Automated instrumentation) bağlamında geçer. |
| JNDI | JNDI | Java Naming and Directory Interface; bir dizin sunucusundan (directory server) ada göre hizmet/nesne aramayı sağlayan Java API'si; DI'ın 'kısmi' bir gerçekleştirimi olarak kabul edilir |
| JobQueue | İş Kuyruğu (JobQueue) |  |
| Journal Comment | Günlük Yorumu (Journal Comment) | Modüldeki değişikliklerin kaydını tutan (artık gereksiz) yorum |
| JPA (Java Persistence API) | JPA (Java Kalıcılık API'si — Java Persistence API) | EJB3 ile birlikte ortaya çıkan, Java'da kalıcılığı (persistence) ek açıklamalar (annotations) ve XML üzerinden bildirimsel olarak yöneten standart API. |
| Just-in-Time | Tam Zamanında (Just-in-Time) | Kararların en güncel bilgiyle, en geç gerektiği anda alınması yaklaşımı |
| Just-In-Time Compiler | Tam Zamanında Derleyici (Just-In-Time Compiler) | JVM'nin bayt kodunu çalışma anında makine koduna çeviren bileşeni (JIT); bu sayfada üretilen bayt kodunun nasıl yürütüldüğünü anlamak için anahattır. Sözlükteki 'Just-in-Time' (karar alma yaklaşımı) teriminden farklı bir kavramdır. |
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
| Livelock | Canlı Kilit (Livelock) | İş parçacıkları sürekli yeniden deneyip ilerleyemediğinde oluşan durum; ölü kilit (deadlock) ve açlık (starvation) ile birlikte sayfa 183'ün tanım tablosunda geçer. |
| Local Interface | Yerel Arayüz (Local Interface) | EJB'de aynı JVM içinden erişim için kullanılan istemci arayüzü. |
| Local Variable | Yerel Değişken (Local Variable) | Yalnızca tanımlandığı fonksiyon ya da blok içinde geçerli değişken |
| Lock | Kilit (Lock) | Paylaşılan kaynağa aynı anda yalnız bir iş parçacığının erişmesini sağlayan mekanizma; sayfa 185'te 'lock the server', 'the lock’s extent' ve 'Locks are expensive' ifadelerinde geçer. Sözlükteki 'Deadlock' (Ölü Kilit) ve 'Intrinsic Lock' (İçsel Kilit) terimlerinden ayrı, genel kavramdır. |
| Loop Control Variable | Döngü Kontrol Değişkeni (Loop Control Variable) | Döngünün yinelemesini yöneten değişken; genellikle döngü ifadesinin içinde tanımlanır |
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
| Matter-of-fact | Olgusal (Matter-of-fact) | Spekülatif olmayan, gerçeklere dayanan kod |
| Meaningful Distinctions | Anlamlı Ayrımlar (Meaningful Distinctions) | İsimlerin gerçekten farklı anlamlar taşıyacak şekilde farklılaştırılması |
| Meaningful Names | Anlamlı İsimler (Meaningful Names) | Niyet ifade eden değişken/fonksiyon isimleri |
| Member Variable | Üye Değişken (Member Variable) | Bir sınıfın her örneğine ait üye alan; sayfa 257'de 'the f prefix for the member variables' ifadesinde geçer. 'Instance Variable' (Örnek Değişkeni) ile aynı kavram. |
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
| Misspelling | Kasıtlı Yazım Hatası (Misspelling) | Derleyiciyi tatmin etmek için yapılan yanlış yazım (ör. klass) |
| Mock | Taklit (Mock) | Test sırasında gerçek bağımlılığın yerine geçen sahte uygulama; 'mock out' = taklit etmek |
| Mock Object | Taklit Nesne (Mock Object) | Test sırasında gerçek bağımlılığın davranışını taklit eden ve çağrı beklentilerini doğrulayan sahte nesne; sözlükteki Mock (Taklit) ile uyumludur |
| Modularity | Modülerlik (Modularity) | Sistemin bağımsız, yeniden kullanılabilir parçalara (modüllere) bölünmesi |
| Module | Modül (Module) |  |
| Monadic | Tekli (Monadic) | Bir argümanlı fonksiyon |
| Multithreaded / Single-threaded | Çok İş Parçacıklı (multithreaded) / Tek İş Parçacıklı (single-threaded) | Sözlükteki 'Thread | İş Parçacığı (Thread)' teriminin sıfat biçimleri; sayfa 179'da 'single threaded', 'multithreaded algorithm', 'single-threaded system' ifadelerinde geçer. |
| Mumbling | Mırıldanma (Mumbling) | Belirsiz, özensiz veya ne dediği anlaşılmayan yorum |
| Mutator | Değiştirici (Mutator) | JavaBean standardında set metotları |
| Mutual Exclusion | Karşılıklı Dışlama (Mutual Exclusion) | Bir anda yalnızca bir iş parçacığının ortak veriye ya da kaynağa erişebilmesi ilkesi; sayfa 183'ün tanım tablosunda geçer. |
| Namespace | Ad Alanı (Namespace) |  |
| Naming Convention | İsimlendirme Kuralı (Naming Convention) |  |
| Necessary Evil | Zorunlu Kötülük (Necessary Evil) | Yorumların en iyi ihtimalle kaçınılmaz ama asla övülmemesi gereken bir kötülük olduğu fikri; Bölüm 4'ün açılış temasıdır |
| Nesting Level | İç İçe Geçme Seviyesi (Nesting Level) | Kod bloklarının derinlik seviyesi |
| Newspaper Metaphor | Gazete Metaforu (Newspaper Metaphor) | Kaynak dosya gazete makalesi gibi okunmalı: üstte manşet ve özet, aşağı indikçe artan ayrıntı |
| Niladic | Sıfırlı (Niladic) | Argümansız fonksiyon |
| Noise Comment | Gürültü Yorumu (Noise Comment) | Hiçbir değer katmayan, bariz olanı tekrar eden yorum |
| Noise Word | Gürültü Kelimesi (Noise Word) | İsme anlam katmayan ek (Info, Data, the, a) |
| Nonblocking | Engel Olmayan (Nonblocking) | İş parçacığını bekleme (blocking) durumuna sokmayan eşzamanlılık çözümleri; sayfadaki 'Use nonblocking solutions when possible' maddesinde geçer. |
| nonfunctional | işlevsiz (nonfunctional) | Hiçbir zaman yanlış olmayan ya da akışı etkilemeyen koşul için kullanılır; sayfa 262'de 'the if statement was nonfunctional' ifadesinde geçer. |
| Noninvasive | Müdahalesiz (Noninvasive) | Hedef koda ya da iş nesnesinin içine girmeden uygulanan; görünüm benzeri (aspect-like) mekanizmaların diğer gerçekleştirim kaygılarını (implementation concerns) bu biçimde dahil etmesi anlamında. Sayfa 161'de 'noninvasively' için 'müdahalesiz (noninvasively)' kullanılmıştır; sözlükteki 'istilacılık (Invasiveness)' teriminin karşıtıdır. |
| Nonlocal Information | Yerel Olmayan Bilgi (Nonlocal Information) | Bulunduğu yerle doğrudan ilgili olmayan sistem bilgisi |
| Normal Flow | Normal Akış (Normal Flow) | Hata durumlarıyla kesintiye uğramayan, asıl iş akışı |
| Normal Forms | Normal Formlar (Normal Forms) | Codd'un veritabanı tekrar kaldırma stratejisi |
| Null Check | null Kontrolü (Null Check) | Bir değerin null olup olmadığını denetleyen koşul; çoğalması null döndürmenin belirtisidir |
| Null Detection | null Tespiti (Null Detection) | Bir değerin null olup olmadığını denetleyip ona göre davranan mantık; bu sayfada getBoolean'a eklenen 'am != null' kontrolü bağlamında geçer. Sözlükteki 'Null Check' (null Kontrolü) teriminden ayrı, daha genel bir kavramdır. |
| Number-Series Naming | Numara Serili İsimlendirme (Number-Series Naming) | a1, a2, aN şeklinde anlamsız numara ekleme |
| Object | Nesne (Object) |  |
| Object-Oriented Code | Nesne Yönelimli Kod (Object-Oriented Code) | Davranışı nesnelere dağıtan kod; yeni sınıf eklemeyi kolaylaştırır, yeni fonksiyon eklemeyi zorlaştırır (sayfa 97) |
| Object-Oriented Design | Nesne Yönelimli Tasarım (Object-Oriented Design) |  |
| off-by-one | bir eksik/fazla (off-by-one) | Sayacın/indeksin birer birim sapmasından kaynaklanan sınır hatası; sıfır tabanlı ile birden başlayan (1 based) sayımlar karıştırıldığında ortaya çıkar. Sayfa 261'de suffixIndex'in 1 tabanlı olmasının computeCommonSuffix'teki +1 düzeltmelerinin nedeni olması bağlamında geçer. |
| One Pass | Tek Geçiş (One Pass) | Tek seferde, tek vuruşla; temiz ve zarif programların tek geçişte yazılamayacağı beklentisi. Sayfa 200'de 'write clean and elegant programs in one pass' ifadesinde geçer. |
| One-Off | Tek Seferlik Olay (One-Off) | Yalnızca bir kez görülüp geçiştirilen düzensiz başarısızlık; sayfadaki 'written off as a onetime occurrence' ve 'so-called one-offs' ifadelerinde geçer. Aslında yük altında ya da rastgele zamanlarda ortaya çıkan eşzamanlılık hatası adayıdır. |
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
| Painless | Acısız (painless) | Sayfa 238’de 'That was pretty painless' ifadesinde geçer: zahmetsiz, sürtünmesiz. Double marshaler’ın ispatlanmış integer marshaler deseninden kopyalanarak kolayca yazılabildiği vurgulanır. |
| Parent Thread / Child Thread | Ana İş Parçacığı / Çocuk İş Parçacığı (Parent Thread / Child Thread) | Bir iş parçacığının (parent) başlattığı ve beklediği alt iş parçacıkları (children); kapanışta ana iş parçacığı çocukları bitirmeyi bekler. |
| Parse | Ayrıştırma (Parse) | Dizgiyi anlamlı parçalara ya da hedef tipe çevirme işlemi; burada Integer.parseInt dizgiyi tamsayıya çevirir. Sözlükteki 'Decoupling | Ayrıştırma (Decoupling)' girdisinden bağımsız, farklı bir kavramdır. |
| Parsing | Ayrıştırma (Parsing) | Bir dizgiyi (ör. şema dizgisini, girdi dizgisini) sözdizimi kurallarına göre parçalara ayırıp anlamlandırma işlemi; bu sayfada 'schema parsing' (şema ayrıştırma) ifadesinde geçer. |
| Partitioning | Parçalama (Partitioning) | Farklı türlerdeki kodları koymak için uygun yerler yaratma; iyi yazılım tasarımının büyük kısmının konusu. Sözlükteki 'Modularity' (Modülerlik) ve 'Separation of Concerns' (Kaygıların Ayrılması) terimleriyle ilişkilidir. |
| pattern | desen (pattern) | 'the same pattern of changes' ifadesinde genel terim olarak geçer; glossary'de yalnız 'Design Pattern' (Tasarım Deseni) gibi bileşik terimler vardır. |
| Persistence | Kalıcılık (Persistence) | Verinin veritabanı, düz dosya gibi kalıcı bir depoda saklanması |
| Plug-ability | Takılabilirlik (Plug-ability) | 'Pluggable | Takılabilir (Pluggable)' teriminin isim biçimi; sayfadaki 'implies some level of plug-ability' ifadesinde geçer. TDD'nin Üç Yasası'ndan gelen test edilebilirliğin ima ettiği özellik. |
| Pluggable | Takılabilir (Pluggable) | Bağımlılıkların (ör. test ikizleri) çalışma zamanında değiştirilebilir/takılabilir olması; bu sayfada 'Make Your Threaded Code Pluggable' başlığında geçer. |
| Point of Declaration | Tanımlama Noktası (Point of Declaration) | Değişkenin tanımlandığı yer |
| POJO (Plain-Old Java Object) | POJO (Sade Eski Java Nesnesi) | Herhangi bir çerçeveye (framework) veya kapsayıcıya (container) bağımlılığı olmayan, tamamen kendi alanına odaklanmış sade Java sınıfı; kitapta 'Plain-Old Java Object (POJO)' olarak geçer ve BankImpl buna örnektir. Yazar kitapta POJO'lara kısa süre sonra yeniden döneceğini söyler (Pure Java AOP Frameworks). |
| Polyadic | Çoklu (Polyadic) | Üç veya daha fazla argümanlı fonksiyon |
| Polymorphism | Çok Biçimlilik (Polymorphism) |  |
| Position Marker | Konum İşaretçisi (Position Marker) | Kod bloklarını ayırmak için kullanılan görsel banner'lar |
| Precision | Hassasiyet (Precision) | Gereksinimlerdeki kesinlik |
| Predicate | Yüklem (Predicate) | JavaBean standardında boolean dönen is metotları |
| Preemptive Threading | Önemleyici İş Parçacıklama (Preemptive Threading) | İşletim sisteminin veya sanal makinenin, bir iş parçacığının kendisi izin vermeden kontrolü devralarak başka bir iş parçacığına geçebilmesi. Dipnot 16'da Java'nın bu davranışı garanti etmediği, modern işletim sistemlerinin bunu 'bedava' sağladığı belirtilir. |
| Prefix Convention | Önek Kuralı (Prefix Convention) | Yerel değişkenler için a, argümanlar için the gibi önek kuralları |
| Premature Decision | Erken Verilmiş Karar (Premature Decision) | Optimal olmayan bilgiyle, gerekli bilgi henüz birikmeden verilen karar |
| Prequel | Öncül (Prequel) | Bu kitabın PPP kitabına göre konumu |
| Principle | İlke (Principle) |  |
| Principle of Least Surprise | En Az Şaşırtma İlkesi (Principle of Least Surprise) |  |
| Problem Domain | Problem Alanı (Problem Domain) |  |
| Procedural Code | Prosedürel Kod (Procedural Code) | Veri yapıları üzerinde çalışan fonksiyonlarla yazılan kod |
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
| Pun | Kelime Oyunu (Pun) | Bir kelimenin iki farklı anlamda kullanılması |
| Quasi-Encapsulation | Yarı Kapsülleme (Quasi-Encapsulation) | Bean'lerin getter/setter ile sağladığı, pratikte hiçbir şeyi gizlemeyen görünüşte kapsülleme |
| Query | Sorgu (Query) | Bu sayfada fiil olarak geçer: 'query the Args instance for the values of the arguments' = argüman değerlerini `Args` örneğinden istemek/okumak. Sözlükteki 'Command Query Separation' (Komut Sorgu Ayrımı) terimindeki 'query' kavramıyla bağlantılıdır. |
| Race Condition | Yarış Durumu (Race Condition) | Eşzamanlı erişimden kaynaklanan hata |
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
| Release | Sürüm (Release) | Yazılımın yayımlanan bir versiyonu |
| Release Cycle | Yayın Döngüsü (Release Cycle) | Ürün sürüm yayınlama süreci |
| Renaming | Yeniden Adlandırma (Renaming) | Değişken/fonksiyon/sınıf adını değiştirme |
| Requirement | Gereksinim (Requirement) |  |
| Resource | Kaynak (Resource) | Bir isteğin hedeflediği, URL ile adreslenen öğe; ör. FitNesse'de request.setResource("root") |
| Resource Pool | Kaynak Havuzu (Resource Pool) | Birden çok iş parçacığının ortak kullandığı sınırlı kaynak kümesi (örn. veritabanı bağlantıları); eşzamanlılık sorunlarının olası kaynaklarından biri olarak sayfa 190'da 'a common resource pool' ifadesinde geçer. 'Bound Resources' terimiyle yakından ilgilidir. |
| Response Time | Yanıt Süresi (Response Time) | Bir isteğin yanıtlanması için geçen süre; bazı sistemler yanıt süresi ve geçirimi (throughput) kısıtlarına tabidir. |
| Responsibility-Driven Design (RDD) | Sorumluluk Odaklı Tasarım (Responsibility-Driven Design) | Rebecca Wirfs-Brock'un nesne tasarımı yaklaşımı: sınıflar veri alanlarından değil rollerden, sorumluluklardan ve iş birliklerinden yola çıkarak tasarlanır; Chapter 10 kaynakçasında [RDD] etiketiyle anılır |
| Return Code | Dönüş Kodu (Return Code) | Fonksiyonun başarı/hata durumunu dönüş değeriyle bildirmesi; Bölüm 7 bunun yerine istisna kullanmayı önerir |
| Reusability | Yeniden Kullanılabilirlik (Reusability) | Kodun başka bağlamlarda yeniden kullanılabilmesi; testlerin güvence altına aldığı -liklerden biri |
| Reuse in the Large | Büyük Ölçekli Yeniden Kullanım (Reuse in the Large) | Sistem genelinde, büyük yapılar düzeyinde yeniden kullanım; 'reuse in the small'ın (küçük ölçekte yeniden kullanım) birikimiyle mümkün olur. Sayfa 174'te 'reuse in the large' ifadesi olarak geçer. |
| Reuse in the Small | Küçük Ölçekli Yeniden Kullanım (Reuse in the Small) | Çok küçük ortaklıkları (birkaç satır bile olsa) isimli metotlar olarak çıkarma; bu küçük yeniden kullanımlar birikerek büyük ölçekte yeniden kullanımı mümkün kılar ve sistem karmaşıklığını dramatik biçimde azaltır. Sayfa 174'te 'reuse in the small' ifadesi olarak geçer. |
| Rough Draft | Kaba Taslak (Rough Draft) | İlkokul kompozisyonu metaforundaki ilk taslak; 'ardışık iyileştirme' (successive refinement) temasının parçası. Sayfa 200'de 'write rough drafts of our compositions' ifadesinde geçer. |
| Routine | Rutin (Routine) | Programlamanın ilk günlerindeki fonksiyon benzeri yapı |
| Runtime Error | Çalışma Zamanı Hatası (Runtime Error) | Derleme sırasında değil, program çalışırken ortaya çıkan hata |
| Runtime Logic | Çalışma Zamanı Mantığı (Runtime Logic) | Uygulama başladıktan sonra asıl işi yapan kod; başlangıç (startup) sürecinden ayrılmalıdır |
| rvalue | Sağ Taraf Değeri (rvalue) | Bir atama ifadesinde eşittir işaretinin sağında kalan değer |
| Scary Noise | Korkunç Gürültü (Scary Noise) | Bariz olanı karmaşık Javadoc formatında tekrar eden sinir bozucu yorum |
| Schedule | Takvim / Zamanlama (Schedule) |  |
| Schema | Şema (Schema) | Ayrıştırılacak argümanların türlerini tek bir biçim dizgisinde beyan eden tanım (ör. "l,p#,d*"); Chapter 14'ün sonraki sayfalarında 'format, or schema, string' olarak geçer. |
| School of Thought | Düşünce Okulu (School of Thought) |  |
| Scissors Rule | Makas Kuralı (Scissors Rule) | C++'ta örnek değişkenlerini sınıfın en altına koyma geleneği |
| Scope | Kapsam (Scope) | Bir değişkenin geçerli olduğu kod alanı |
| Scope Encoding | Kapsam Kodlaması (Scope Encoding) | Bir değişkenin kapsamını (ör. üyelik/statiklik) isminin başına önek (f_, m_, s_) kodlayarak belirtme; günümüz IDE'leri bunu gereksiz kılar. Sayfa 257'de 'this kind of scope encoding' ifadesinde geçer. |
| Seam | Dikiş Noktası (Seam) | Kodu o noktada düzenlemeden davranışı değiştirebildiğiniz yer; ör. bir arayüz üzerinden test için sahte nesne takmak [WELC] |
| Search-friendly name | Arama Dostu İsim (Search-friendly name) |  |
| Searchable Names | Aranabilir İsimler (Searchable Names) |  |
| Semaphore | Sinyal (Semaphore) | Sayaçlı bir kilitle klasik semaforun gerçekleştirimi; java.util.concurrent paketinde. |
| Separate | Ayırmak (Separate) | Bir yapıyı ana modülden bağımsız bir parça hâline getirerek dışarı çıkarma; sayfa 242'de 'completely separated the exception and error code from the Args module' ifadesinde geçer. 'Decoupling | Ayrıştırma (Decoupling)' teriminden farklıdır: burada bağımlılığı azaltmak değil, kodun fiziksel olarak başka bir modüle taşınması kastedilir. |
| Separation of Concerns | Kaygıların Ayrılması (Separation of Concerns) | Yazılımı çalıştırma kaygısı ile onu düzenli ve temiz tutma kaygısının ayrı, birbiri kadar önemli iki etkinlik olarak ele alınması gerektiği ilkesi; Chapter 10'da sınıf tasarımı bağlamında geçer. |
| Server | Sunucu (Server) | İstemci/sunucu (client/server) kilit modellerinde kilitlenen ve paylaşılan nesneyi barındıran taraf; sayfa 185'te 'lock the server', 'Within the server' ve 'the original server cannot be changed' ifadelerinde geçer. |
| Server-Based Locking | Sunucu Tabanlı Kilit (Server-Based Locking) | Kilitleme sorumluluğunun sunucuya verilmesi: sunucu, tüm metotları tek seferde çağıran ve kendi kilidiyle çalıştırıcı birleşik bir metot sunar; istemci yalnızca o metodu çağırır. Sayfa 185'te üç düzeltme yolundan ikincisidir. |
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
| Snail's Pace | Salyangoz Hızı (Snail's Pace) | Çok yavaş ilerleme metaforu |
| Soak Test | Süre Testi (Soak Test) | Eşzamanlı kodu üretime koymadan önce uzun süre, yük altında, birçok yapılandırmada çalıştırma pratiği; kavram kartında (soak-test-before-production) 30 dakikalık CI örneğiyle kullanıldı. |
| Software Craftsmanship | Yazılım Zanaatı (Software Craftsmanship) |  |
| Software Physics | Yazılım Fiziği (Software Physics) | Terimi ilk kez [Kolence] kullanmıştır; yazılımın, yapı kaygılarını etkili biçimde ayırdığında kökten değişikliğin ekonomik olarak mümkün olduğu kendine özgü doğasını anlatır. |
| Solution Domain | Çözüm Alanı (Solution Domain) |  |
| Source File | Kaynak Dosyası (Source File) | Programın kaynak kodunu içeren dosya |
| Special Case Object | Özel Durum Nesnesi (Special Case Object) | Null yerine döndürülen, eksik durum için makul varsayılan davranışı kapsülleyen nesne (SPECIAL CASE deseni) |
| Special Case Pattern | Özel Durum Deseni (Special Case Pattern) | Özel durumu kendisi ele alan bir sınıf/nesne döndürerek istemci kodu istisna yönetiminden kurtaran desen [Fowler] |
| Specification | Spesifikasyon (Specification) | Biçimsel gereksinim tanımı |
| Spring Framework | Spring Framework | Java için en bilinen DI kabını (container) sağlayan açık kaynaklı çerçeve; XML yapılandırma dosyasıyla bağlama (wiring) yapmayı destekler; Spring.NET adlı bir .NET sürümü de vardır |
| Spurious Failure | Sahte Başarısızlık (Spurious Failure) | Bir sonraki çalıştırmada kendiliğinden geçen, tekrarlanamayan düzensiz test başarısızlığı; iş parçacıklı kodda olası eşzamanlılık sorunu adayı olarak ele alınmalıdır. |
| Stack Backtrace | Yığın İzi (Stack Backtrace) | Çağrı yığınının anlık görüntüsü; tek iş parçacıklı uygulamalarda tüm uygulamanın durumunu gösterir. Sözlükteki 'Stack Trace | Yığın İzi (Stack Trace)' ile tutarlıdır. |
| Stack Trace | Yığın İzi (Stack Trace) | İstisna anındaki çağrı zinciri; hatanın yerini gösterir ama başarısız işlemin amacını söylemez |
| Stakeholder | Paydaş (Stakeholder) | Projeden etkilenen ya da projeyle çıkarı olan kişi/grup (müşteri, kullanıcı, sponsor vb.) |
| Stale Information | Bayat/Eski Bilgi (Stale Information) | Güncellenmemiş, eskimiş bilgi birikimi; sayfa 184'te 'the accumulation of stale information' ifadesinde geçer. |
| Startup Process | Başlangıç Süreci (Startup Process) | Uygulama nesnelerinin oluşturulduğu ve bağımlılıkların birbirine bağlandığı süreç; çalışma zamanı mantığından ayrı tutulmalıdır |
| Starvation | Açlık (Starvation) | Bir iş parçacığının ya da grubun aşırı uzun süre ya da sonsuza dek ilerlemesinin engellenmesi; sayfa 183'ün tanım tablosunda geçer. |
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
| Successive Refinement | Ardışık İyileştirme (Successive Refinement) | Chapter 14'ün başlığı ve omurgası: kodun büyük patama (big-bang) yeniden yazımı yerine küçük, testle doğrulanan ardışık adımlarla kademeli olarak iyileştirilmesi. |
| Suffix | Sonek (Suffix) | Bir şema öğesinin sonuna eklenen ve türünü belirleyen karakter (boş, *, #); sözlükteki 'Prefix' (önek) teriminin aynası. 'Schema Suffix Convention' kavram kartında kullanıldı. |
| Suite | Suite | Çevrilmez; FitNesse'de bir grup test sayfasını ifade eden yapı |
| Switch Statement | Switch İfadesi (Switch Statement) | Bir değişkenin farklı değerlerine göre dallanma sağlayan kontrol yapısı |
| Synchronization | Senkronizasyon (Synchronization) | Eşzamanlı erişimin kilitleme gibi mekanizmalarla koordine edilmesi; sayfadaki 'avoid synchronizing', 'synchronization requirements' ve 'synchronization problems' ifadelerinde geçer. |
| Synchronized | Senkronize (synchronized) | Java anahtar kelimesi; kod metninde `synchronized` olarak ters tırnakla gösterilir ve çevrilmez. Sayfa 181'de kritik bölgeyi korumak için kullanımı anlatılır. |
| Synopsis | Özet (Synopsis) | Gazete metaforunda ilk paragraf; kodda dosyanın tepesindeki üst seviye kavram ve algoritmalar |
| Synthesis Function | Sentez Fonksiyonu (Synthesis Function) | Analiz sonuçlarından çıktıyı/karşılaştırma sonucunu bir araya getiren fonksiyon grubu; sayfa 265'te 'another group of synthesis functions' ifadesinde geçer. |
| Table Lookup | Tablo Araması (Table Lookup) | Bir sonucu hesaplamak yerine önceden sabitlenmiş bir tablodan okumak; sabit değer döndüren test stub'larının indirgendiği basit davranış |
| Talk to Friends, Not to Strangers | Yabancılarla Değil, Arkadaşlarla Konuş (Talk to Friends, Not to Strangers) | Demeter Yasası'nın özlü ifadesi: metot yalnızca doğrudan tanıdığı nesnelerle konuşmalı, onların döndürdüğü nesnelerin metotlarını çağırmamalıdır |
| Teardown | Temizlik (Teardown) | FitNesse test sayfalarında testten sonra çalıştırılan temizlik sayfası/adımı |
| Technical Debt | Teknik Borç (Technical Debt) | Hızlı çözümlerden kaynaklanan birikmiş kod sorunları |
| Template Method | Şablon Metot (Template Method) | Ortak algoritma iskeletini üst sınıfta tanımlayıp değişen adımları alt sınıflara bırakan tasarım deseni [GOF]. |
| Temporal Coupling | Zamansal Bağımlılık (Temporal Coupling) | Fonksiyonun sadece belirli zamanlarda çağrılabilmesi sorunu |
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
| Third-Party API | Üçüncü Taraf API (Third-Party API) | Başka bir satıcı ya da ekip tarafından sağlanan API; sarmalanarak bağımlılık azaltılır |
| Third-Party Code | Üçüncü Taraf Kod (Third-Party Code) | Satın alınan paketler, açık kaynak kütüphaneler ya da başka ekiplerin ürettiği, kontrolümüzde olmayan kod; sağlayıcı geniş uygulanabilirlik, kullanıcı ise odaklı bir arayüz ister (Bölüm 8) |
| Thread | İş Parçacığı (Thread) | Bir süreç içinde diğer işlerle eşzamanlı yürütülebilen bağımsız çalışma birimi |
| Thread-Aware / Thread-Ignorant | İş Parçacığından Haberdar / Habersiz (Thread-Aware / Thread-Ignorant) | Sistemi POJO'lara bölme stratejisindeki iki kod türü: eşzamanlılık mekanizmalarını bilen (thread-aware) kod ve iş parçacıkları hakkında hiçbir şey bilmeyen, saf iş mantığı taşıyan (thread-ignorant) kod. Sayfa 190'ın Sonuç kesitinde geçer; 'Thread-Safe' teriminden ayrıdır. |
| Thread-Safe | İş Parçacığına Güvenli (Thread-Safe) | Birden çok iş parçacığı tarafından eşzamanlı erişildiğinde güvenle kullanılabilen yapılar için sıfat; sayfadaki 'Thread-Safe Collections' başlığı ve 'thread-safe collections' maddesinde geçer. |
| Three Laws of TDD | TDD'nin Üç Yasası (Three Laws of TDD) | Robert C. Martin: başarısız bir birim testi yazmadan üretim kodu yazma; testin yalnızca başarısız olmaya yetecek kadarını yaz (derlenmemek de başarısızlıktır); yalnızca başarısız testi geçirecek kadar üretim kodu yaz |
| Throughput | Geçirim (Throughput) | Birim zamanda işlenen iş/istek miktarı; sayfa 178'de 'geçirimi (throughput)' biçiminde kullanılmıştır. |
| Tiger Team | Kaplan Ekibi (Tiger Team) | En yetenekli geliştiricilerden oluşan ekip |
| TO Paragraph | TO Paragrafı | Fonksiyonun ne yaptığını "Bunu yapmak için (TO)..." kalıbıyla anlatan cümle; LOGO dilindeki TO anahtar kelimesinden esinlenilmiştir |
| TODO | TODO / Yapılacaklar (TODO) | Gelecek için bırakılan notlar ve hatırlatıcılar |
| Topological Sort (of Functions) | Topolojik Sıralama (Topological Sort) | Fonksiyonları, her tanımı kullanıldığı yerin hemen ardına gelecek biçimde sıralama; sayfa 265'te 'They are topologically sorted' ifadesinde geçer. |
| Touche | Touche! | Fransızca 'vuruldum / yendin' ifadesi; eskrim (çarpışma) oyunundan gelen, rakibin vuruşunu kabul eden teslimiyet sözü. Sayfa 236'da tip-zincirinin (type-case) kaldırılmasıyla birlikte kullanılır. |
| Train Wreck | Tren Kazası (Train Wreck) | Birbirine noktayla bağlanmış çağrı zinciri; Demeter Yasası ihlalinin tipik görüntüsü |
| Transaction | İşlem (Transaction) | Ya bütünüyle gerçekleşen ya da hiç gerçekleşmemiş sayılan iş birimi; try blokları buna benzetilir |
| Transactional Behavior | İşlemsel Davranış (Transactional Behavior) | Bir işlemin (Transaction) bütünlüğünü yöneten davranış; EJB'de dağıtım betimleyicisinde bildirilir |
| Transformation | Dönüşüm (Transformation) | Kodun bir halden başka bir hale davranışı koruyarak değiştirilmesi |
| Triadic | Üçlü (Triadic) | Üç argümanlı fonksiyon |
| Trial and Error | Deneme-Yanılma (Trial and Error) | Uygun iş parçacığı dengesinin sistematik ölçümle değil deneysel tekrarlarla bulunması; bu sayfada 'trial an error' (yazım hatası) ifadesinde geçer. |
| trivial | önemsiz (trivial) | Çok basit, az uğraş gerektiren; bu sayfada `setBooleanArg` fonksiyonu için kullanılır ve taşınmaya ilk o hazırlanır |
| Tunable | Ayarlanabilir (Tunable) | İş parçacığı sayısı gibi parametrelerin çalışma sırasında kolayca ayarlanabilir olması; bu sayfada 'Make Your Threaded Code Tunable' başlığında geçer. |
| Type System | Tür Sistemi (Type System) |  |
| Type-Case | Tip-Zinciri (Type-Case) | Bir değerin türüne göre if/else veya switch ile dallanan kod bloğu; davranış polimorfizme (çok biçimliliğe) devredilerek kaldırılmalıdır. Sayfa 231'de setArgument içindeki 'horrible type-case' ifadesinde geçer. |
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
| Virtualization | Sanallaştırma (Virtualization) | Donanım, işletim sistemi gibi kaynakları yazılım katmanında soyutlayarak birden çok sanal ortamda paylaştırma; dünyanın büyük Web sitelerinin ölçeklenirken kullandığı altyapı tekniklerinden biri. |
| Visitor Pattern | Ziyaretçi Deseni (Visitor Pattern) |  |
| Visual Cue | Görsel İpucu (Visual Cue) | Okuyucunun gözüne yeni ve ayrı bir kavramın başladığını belirten işaret; ör. boş satır |
| Wading | Çamura Batma (Wading) | Kötü kodda ilerlerken hissedilen zorluk metaforu |
| Ward's Principle | Ward'ın İlkesi (Ward's Principle) | Ward Cunningham'ın temiz kod tanımı: her rutin, tam olarak beklediğiniz gibi çıkar |
| Warning of Consequences | Sonuçlara Dair Uyarı (Warning of Consequences) | Belirli bir işlemin etkileri hakkında diğer programcıları uyaran yorum |
| weasel words | kaypak sözcükler (weasel words) | Processor, Manager, Super gibi anlamı belirsiz bırakan, bir sınıfın gerçekte ne yaptığını gizleyen ve çoğu zaman fazla sorumluluk yığılmasına işaret eden isim bileşenleri. |
| Whim | Keyfî (Whim) | 'on a whim' = keyfî olarak, içinden geldiği anda; test paketinin anında ve istekle çalıştırılabilir olması TDD'nin güveninin temelidir. Sayfa 213'te 'run on a whim' ifadesinde geçer. |
| Whole Picture | tüm resim (whole picture) | Uzun bir yeniden düzenleme sırasında ya da ardından ayrıntılardan uzaklaşıp sınıfın/sistemin bütününe yeniden bakıp değerlendirmek; bu sayfada 'let’s look at the whole picture again' ifadesinde geçer. Sözlükteki 'Big Picture' (Büyük Resim) girdisinden ayrıdır: Big Picture genel sistem bakış açısıdır, Whole Picture ise mevcut bütüncül biçime atılan kontrol noktası niteliğindeki bakıştır. |
| Wiring | Bağlama (Wiring) | Nesnelerin bağımlılıklarının kurularak uygulamanın bir araya getirilmesi işlemi |
| Work in Progress | Tamamlanmamış Çalışma (Work in Progress) | Belirgin biçimde bitirilmemiş, üzerinde çalışma süren kod durumu; bu sayfada 'It's clearly a work in progress' ifadesinde geçer. Sözlükteki 'Rough Draft' (Kaba Taslak) terimiyle bağlantılıdır. |
| Wrapper | Sarmalayıcı (Wrapper) |  |
| zero based | sıfır tabanlı (zero based) | Dizi ya da uzunluk değerlerinin 0'dan başlaması; karşıtı '1 based' (birden başlayan). Sayfa 261'de 'the suffixIndex variable is not zero based; it is 1 based' ifadesinde geçer; bir eksik/fazla (off-by-one) hatalarının kaynağıdır. |
