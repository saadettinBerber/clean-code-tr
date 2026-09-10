window.PAGE({
  "id": "page-24",
  "page": 24,
  "pdf_page": 55,
  "chapter": {
    "num": 2,
    "en": "Meaningful Names",
    "tr": "Anlamlı İsimler"
  },
  "section": {
    "en": "Avoid Encodings (cont.) / Member Prefixes / Interfaces and Implementations",
    "tr": "Avoid Encodings (cont.) / Member Prefixes / Interfaces and Implementations"
  },
  "title": {
    "en": "Kodlamalardan Kaçının (devam), Üye Önekleri, Arayüzler ve Uygulamalar",
    "tr": "Kodlamalardan Kaçının (devam), Üye Önekleri, Arayüzler ve Uygulamalar"
  },
  "blocks": [
    {
      "type": "para",
      "sentences": [
        {
          "en": "Java programmers don’t need type encoding. Objects are strongly typed, and editing environments have advanced such that they detect a type error long before you can run a compile! So today HN and other forms of type encoding are merely impediments. They make it harder to change the name or type of a variable, function, or class. They make it harder to read the code. And they create the possibility of the encoding system misleading the reader.",
          "tr": "Java programcılarının tip kodlamasına (type encoding) ihtiyacı yoktur. Nesneler güçlü tiplidir (strongly typed) ve düzenleme ortamları, siz daha derleme yapmadan çok önce bir tip hatasını tespit edebilecek kadar gelişmiştir! Bu yüzden günümüzde Macar Notasyonu (Hungarian Notation) ve diğer tip kodlama biçimleri sadece birer engeldir. Bir değişkenin, fonksiyonun veya sınıfın adını ya da tipini değiştirmeyi zorlaştırırlar. Kodun okunmasını zorlaştırırlar. Ve kodlama sisteminin okuyucuyu yanıltma olasılığını yaratırlar.",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "PhoneNumber phoneString; \n// tip değiştiğinde ad değişmedi! / name didn't change when type changed!"
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Member Prefixes",
      "tr": "Üye Önekleri / Member Prefixes",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "You also don’t need to prefix member variables with <code>m_</code> anymore. Your classes and functions should be small enough that you don’t need them. And you should be using an editing environment that highlights or colorizes members to make them distinct.",
          "tr": "Artık üye değişkenlerin önüne <code>m_</code> öneki koymanıza da gerek yok. Sınıflarınız ve fonksiyonlarınız bunları gerektirmeyecek kadar küçük olmalıdır. Ayrıca, üyeleri belirgin hale getirmek için onları vurgulayan veya renklendiren bir düzenleme ortamı (editing environment) kullanıyor olmalısınız.",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "public class Part { \n  private String m_dsc; // Metinsel açıklama / Textual description\n  void setName(String name) {\n    m_dsc = name;\n  }\n}\n_________________________________________________\npublic class Part { \n  String description;\n  void setDescription(String description) { \n    this.description = description;\n  }\n}"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Besides, people quickly learn to ignore the prefix (or suffix) to see the meaningful part of the name. The more we read the code, the less we see the prefixes. Eventually the prefixes become unseen clutter and a marker of older code.",
          "tr": "Üstelik insanlar, ismin anlamlı kısmını görmek için öneki (veya son eki) görmezden gelmeyi çabucak öğrenirler. Kodu ne kadar çok okursak, önekleri o kadar az görürüz. Sonunda önekler görünmeyen bir karmaşaya (unseen clutter) ve eski kodun bir işaretine dönüşür.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Interfaces and Implementations",
      "tr": "Arayüzler ve Uygulamalar / Interfaces and Implementations",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "These are sometimes a special case for encodings. For example, say you are building an ABSTRACT FACTORY for the creation of shapes. This factory will be an interface and will be implemented by a concrete class. What should you name them? <code>IShapeFactory</code> and <code>ShapeFactory</code>? I prefer to leave interfaces unadorned. The preceding I, so common in today’s legacy, is at best a distraction and at worst too much information. I don’t want my users knowing that I’m handing them an interface. I just want them to know that it’s a ShapeFactory. So if I must encode either the interface or the implementation, I choose the implementation. Calling it ShapeFactoryImp or even the hideous CShapeFactory is preferable to encoding the interface.",
          "tr": "Bunlar bazen kodlamalar için özel bir durum teşkil eder. Örneğin, şekillerin oluşturulması için bir Soyut Fabrika (Abstract Factory) inşa ettiğinizi varsayalım. Bu fabrika bir arayüz (interface) olacak ve somut bir sınıf (concrete class) tarafından uygulanacaktır. Bunları nasıl isimlendirmelisiniz? <code>IShapeFactory</code> ve <code>ShapeFactory</code> mi? Ben arayüzleri süslemesiz bırakmayı tercih ederim. Günümüzün eski kod yığınlarında (legacy) çok yaygın olan o baştaki \"I\", en iyi ihtimalle dikkat dağıtıcıdır, en kötü ihtimalle ise çok fazla bilgidir. Kullanıcılarımın onlara bir arayüz verdiğimi bilmelerini istemem. Sadece bunun bir <code>ShapeFactory</code> olduğunu bilmelerini isterim. Eğer arayüzü veya uygulamayı kodlamam gerekiyorsa, uygulamayı (implementation) seçerim. Onu <code>ShapeFactoryImp</code> veya hatta iğrenç olan <code>CShapeFactory</code> olarak adlandırmak, arayüzü kodlamaya (I-önekine) tercih edilir.",
          "html": true
        }
      ]
    }
  ],
  "concepts": [
    {
      "id": "avoid-encoding",
      "title": {
        "en": "Avoid Type Encoding",
        "tr": "Tip Kodlamasından Kaçınma (Avoid Type Encoding)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Modern programlama dillerinde ve IDE'lerde, değişken isimlerine tip bilgisi eklemek (örneğin <code>nameString</code>, <code>ageInt</code>) gereksizdir. Bu uygulama, tip değiştiğinde ismin güncellenmemesi riskini taşır ve kodu okurken görsel bir gürültü yaratır. Derleyici ve IDE zaten tipi bildiği için, isim sadece \"niyeti\" (intent) belirtmelidir.</span><span class=\"en-text\">In modern programming languages and IDEs, adding type information to variable names (e.g., <code>nameString</code>, <code>ageInt</code>) is unnecessary. This practice risks the name not being updated when the type changes and creates visual noise. Since the compiler and IDE already know the type, the name should only specify the \"intent.\"</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Tip bilgisi isimde kodlanmış</span><span class=\"en-text\">BAD — Type information encoded in the name</span></span>\n<pre>public class UserProfile {\n    private String nameStr;\n    private int ageInt;\n    private List&lt;String&gt; addressList;\n\n    public void updateAge(int newAgeInt) {\n        this.ageInt = newAgeInt;\n    }\n}</pre>\n<div class=\"explanation\"><span class=\"tr-text\"><code>Str</code>, <code>Int</code>, <code>List</code> gibi ekler okumayı zorlaştırır. Eğer <code>ageInt</code> tipini <code>long</code> yaparsak, ismi de <code>ageLong</code> olarak değiştirmemiz gerekir ki bu da her yerde refactoring gerektirir.</span><span class=\"en-text\">Suffixes like <code>Str</code>, <code>Int</code>, <code>List</code> make reading harder. If we change <code>ageInt</code> to <code>long</code>, we must also rename it to <code>ageLong</code>, requiring refactoring everywhere.</span></div>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Sadece niyet belirten temiz isimler</span><span class=\"en-text\">GOOD — Clean names revealing only intent</span></span>\n<pre>public class UserProfile {\n    private String name;\n    private int age;\n    private List&lt;String&gt; addresses;\n\n    public void updateAge(int age) {\n        this.age = age;\n    }\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">Değişken ismini seçerken \"Bu nedir?\" yerine \"Bu ne işe yarar?\" diye düşünün. Tipi zaten IDE'de üzerine gelerek görebilirsiniz. Koleksiyonlar için <code>addressList</code> yerine <code>addresses</code> (çoğul isim) kullanmak çok daha doğal bir okunabilirlik sağlar.</span><span class=\"en-text\">When choosing a variable name, think \"What does this do?\" instead of \"What is this?\". You can already see the type by hovering in the IDE. For collections, using <code>addresses</code> (plural) instead of <code>addressList</code> provides much more natural readability.</span></div>"
    },
    {
      "id": "member-prefixes",
      "title": {
        "en": "No Member Prefixes",
        "tr": "Üye Öneklerini Bırakma (No Member Prefixes)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Eski kodlarda üye değişkenleri (fields) yerel değişkenlerden ayırmak için <code>m_</code> veya sadece <code>_</code> gibi önekler kullanılırdı. Ancak modern temiz kod anlayışında sınıflar küçülmüştür ve IDE'ler üye değişkenleri farklı renklerle vurgulayabilmektedir. Bu önekler, ismin asıl anlamını gölgeleyen birer \"görünmeyen karmaşa\" (unseen clutter) haline gelir.</span><span class=\"en-text\">In older code, prefixes like <code>m_</code> or just <code>_</code> were used to distinguish member variables (fields) from local variables. However, in modern clean code, classes have become smaller and IDEs can highlight member variables with different colors. These prefixes become \"unseen clutter\" that obscures the actual meaning of the name.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — m_ önekiyle kirletilmiş isimler</span><span class=\"en-text\">BAD — Names polluted with m_ prefix</span></span>\n<pre>public class Employee {\n    private String m_name;\n    private double m_salary;\n\n    public Employee(String name, double salary) {\n        m_name = name;\n        m_salary = salary;\n    }\n}</pre>\n<div class=\"explanation\"><span class=\"tr-text\">Okurken sürekli <code>m_</code> kısmını atlayıp <code>name</code> ve <code>salary</code> kelimelerine odaklanmaya çalışırsınız. Beyniniz bu gürültüyü filtrelemek için fazladan enerji harcar.</span><span class=\"en-text\">While reading, you constantly try to skip the <code>m_</code> part and focus on the words <code>name</code> and <code>salary</code>. Your brain spends extra energy to filter this noise.</span></div>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Sade ve doğrudan isimler</span><span class=\"en-text\">GOOD — Simple and direct names</span></span>\n<pre>public class Employee {\n    private String name;\n    private double salary;\n\n    public Employee(String name, double salary) {\n        this.name = name;\n        this.salary = salary;\n    }\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">Eğer üye değişkenle yerel değişkeni karıştırıyorsanız, bu genellikle metodunuzun veya sınıfınızın çok büyük olduğunun işaretidir. Önek eklemek yerine, kodu daha küçük parçalara bölün. Çakışma durumunda Java/C#'taki <code>this.</code> anahtar kelimesi zaten yeterli ayrımı sağlar.</span><span class=\"en-text\">If you are confusing member variables with local variables, it's often a sign that your method or class is too large. Instead of adding prefixes, break the code into smaller pieces. In case of a conflict, the <code>this.</code> keyword in Java/C# already provides sufficient distinction.</span></div>"
    },
    {
      "id": "interface-naming",
      "title": {
        "en": "Interface Naming",
        "tr": "Arayüz İsimlendirme (Interface Naming)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Arayüzlerin başına \"I\" koymak (örn: <code>IShape</code>), kullanıcıya gereksiz bir uygulama detayı verir. Temiz kod felsefesinde, kullanıcı bir arayüzle mi yoksa somut bir sınıfla mı çalıştığını bilmek zorunda kalmamalıdır. Eğer bir ayrım yapılması gerekiyorsa, arayüzü sade bırakıp uygulamaya (implementation) bir son ek eklemek daha doğrudur.</span><span class=\"en-text\">Prefixing interfaces with \"I\" (e.g., <code>IShape</code>) provides an unnecessary implementation detail to the user. In clean code philosophy, the user shouldn't have to know whether they are working with an interface or a concrete class. If a distinction must be made, it's better to leave the interface unadorned and add a suffix to the implementation.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — I-önekli arayüzler</span><span class=\"en-text\">BAD — I-prefixed interfaces</span></span>\n<pre>interface ILogger {\n    void log(String message);\n}\n\nclass ConsoleLogger implements ILogger {\n    public void log(String message) { ... }\n}</pre>\n<div class=\"explanation\"><span class=\"tr-text\">\"I\" öneki sadece bir kodlama detayıdır. Müşteri kodu <code>ILogger</code> yerine sadece bir <code>Logger</code> istediğini bilmelidir.</span><span class=\"en-text\">The \"I\" prefix is just a coding detail. Client code should only know that it wants a <code>Logger</code>, not an <code>ILogger</code>.</span></div>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Sade arayüz, açıklayıcı uygulama</span><span class=\"en-text\">GOOD — Unadorned interface, descriptive implementation</span></span>\n<pre>interface Logger {\n    void log(String message);\n}\n\nclass ConsoleLogger implements Logger {\n    public void log(String message) { ... }\n}\n\n// Veya genel bir uygulama için:\nclass LoggerImpl implements Logger { ... }</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">Kullanıcılarınızın \"Ben bir arayüz kullanıyorum\" diye düşünmesini istemezsiniz. Onlara sadece ne sunduğunuzu (soyutlamayı) gösterin. Eğer isimlendirme çakışıyorsa, arayüzü değil, somut sınıfı süsleyin (<code>ShapeFactory</code> vs <code>ShapeFactoryImpl</code>).</span><span class=\"en-text\">You don't want your users thinking \"I'm using an interface.\" Just show them what you offer (the abstraction). If naming conflicts, adorn the concrete class, not the interface (<code>ShapeFactory</code> vs <code>ShapeFactoryImpl</code>).</span></div>"
    }
  ]
});
