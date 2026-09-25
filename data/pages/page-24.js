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
    "tr": "Kodlamalardan Kaçının (devam) / Üye Önekleri / Arayüzler ve Uygulamalar"
  },
  "title": {
    "en": "Avoid Encodings (cont.), Member Prefixes, Interfaces and Implementations",
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
      "kind": "code",
      "title": {
        "en": "Avoid Type Encoding",
        "tr": "Tip Kodlamasından Kaçınma (Avoid Type Encoding)"
      },
      "summary": {
        "en": "In modern programming languages and IDEs, adding type information to variable names (e.g., `nameString`, `ageInt`) is unnecessary. This practice risks the name not being updated when the type changes and creates visual noise. Since the compiler and IDE already know the type, the name should only specify the \"intent.\"",
        "tr": "Modern programlama dillerinde ve IDE'lerde, değişken isimlerine tip bilgisi eklemek (örneğin `nameString`, `ageInt`) gereksizdir. Bu uygulama, tip değiştiğinde ismin güncellenmemesi riskini taşır ve kodu okurken görsel bir gürültü yaratır. Derleyici ve IDE zaten tipi bildiği için, isim sadece \"niyeti\" (intent) belirtmelidir."
      },
      "bad": {
        "lang": "java",
        "code": "public class UserProfile {\n    private String nameStr;\n    private int ageInt;\n    private List<String> addressList;\n\n    public void updateAge(int newAgeInt) {\n        this.ageInt = newAgeInt;\n    }\n}",
        "why": {
          "en": "Suffixes like `Str`, `Int`, `List` make reading harder. If we change `ageInt` to `long`, we must also rename it to `ageLong`, requiring refactoring everywhere.",
          "tr": "`Str`, `Int`, `List` gibi ekler okumayı zorlaştırır. Eğer `ageInt` tipini `long` yaparsak, ismi de `ageLong` olarak değiştirmemiz gerekir ki bu da her yerde refactoring gerektirir."
        }
      },
      "good": {
        "lang": "java",
        "code": "public class UserProfile {\n    private String name;\n    private int age;\n    private List<String> addresses;\n\n    public void updateAge(int age) {\n        this.age = age;\n    }\n}",
        "why": {
          "en": "name, age, addresses carry only intent; the type can change without renaming.",
          "tr": "name, age, addresses yalnız niyet taşır; tür yeniden adlandırma olmadan değişebilir."
        }
      },
      "tip": {
        "en": "When choosing a variable name, think \"What does this do?\" instead of \"What is this?\". You can already see the type by hovering in the IDE. For collections, using `addresses` (plural) instead of `addressList` provides much more natural readability.",
        "tr": "Değişken ismini seçerken \"Bu nedir?\" yerine \"Bu ne işe yarar?\" diye düşünün. Tipi zaten IDE'de üzerine gelerek görebilirsiniz. Koleksiyonlar için `addressList` yerine `addresses` (çoğul isim) kullanmak çok daha doğal bir okunabilirlik sağlar."
      }
    },
    {
      "id": "member-prefixes",
      "kind": "code",
      "title": {
        "en": "No Member Prefixes",
        "tr": "Üye Öneklerini Bırakma (No Member Prefixes)"
      },
      "summary": {
        "en": "In older code, prefixes like `m_` or just `_` were used to distinguish member variables (fields) from local variables. However, in modern clean code, classes have become smaller and IDEs can highlight member variables with different colors. These prefixes become \"unseen clutter\" that obscures the actual meaning of the name.",
        "tr": "Eski kodlarda üye değişkenleri (fields) yerel değişkenlerden ayırmak için `m_` veya sadece `_` gibi önekler kullanılırdı. Ancak modern temiz kod anlayışında sınıflar küçülmüştür ve IDE'ler üye değişkenleri farklı renklerle vurgulayabilmektedir. Bu önekler, ismin asıl anlamını gölgeleyen birer \"görünmeyen karmaşa\" (unseen clutter) haline gelir."
      },
      "bad": {
        "lang": "java",
        "code": "public class Employee {\n    private String m_name;\n    private double m_salary;\n\n    public Employee(String name, double salary) {\n        m_name = name;\n        m_salary = salary;\n    }\n}",
        "why": {
          "en": "While reading, you constantly try to skip the `m_` part and focus on the words `name` and `salary`. Your brain spends extra energy to filter this noise.",
          "tr": "Okurken sürekli `m_` kısmını atlayıp `name` ve `salary` kelimelerine odaklanmaya çalışırsınız. Beyniniz bu gürültüyü filtrelemek için fazladan enerji harcar."
        }
      },
      "good": {
        "lang": "java",
        "code": "public class Employee {\n    private String name;\n    private double salary;\n\n    public Employee(String name, double salary) {\n        this.name = name;\n        this.salary = salary;\n    }\n}",
        "why": {
          "en": "name and salary stand clean; `this.` resolves any shadowing without m_ noise.",
          "tr": "name ve salary temiz durur; gölgeleme varsa m_ gürültüsü olmadan `this.` çözer."
        }
      },
      "tip": {
        "en": "If you are confusing member variables with local variables, it's often a sign that your method or class is too large. Instead of adding prefixes, break the code into smaller pieces. In case of a conflict, the `this.` keyword in Java/C# already provides sufficient distinction.",
        "tr": "Eğer üye değişkenle yerel değişkeni karıştırıyorsanız, bu genellikle metodunuzun veya sınıfınızın çok büyük olduğunun işaretidir. Önek eklemek yerine, kodu daha küçük parçalara bölün. Çakışma durumunda Java/C#'taki `this.` anahtar kelimesi zaten yeterli ayrımı sağlar."
      }
    },
    {
      "id": "interface-naming",
      "kind": "code",
      "title": {
        "en": "Interface Naming",
        "tr": "Arayüz İsimlendirme (Interface Naming)"
      },
      "summary": {
        "en": "Prefixing interfaces with \"I\" (e.g., `IShape`) provides an unnecessary implementation detail to the user. In clean code philosophy, the user shouldn't have to know whether they are working with an interface or a concrete class. If a distinction must be made, it's better to leave the interface unadorned and add a suffix to the implementation.",
        "tr": "Arayüzlerin başına \"I\" koymak (örn: `IShape`), kullanıcıya gereksiz bir uygulama detayı verir. Temiz kod felsefesinde, kullanıcı bir arayüzle mi yoksa somut bir sınıfla mı çalıştığını bilmek zorunda kalmamalıdır. Eğer bir ayrım yapılması gerekiyorsa, arayüzü sade bırakıp uygulamaya (implementation) bir son ek eklemek daha doğrudur."
      },
      "bad": {
        "lang": "java",
        "code": "interface ILogger {\n    void log(String message);\n}\n\nclass ConsoleLogger implements ILogger {\n    public void log(String message) { ... }\n}",
        "why": {
          "en": "The \"I\" prefix is just a coding detail. Client code should only know that it wants a `Logger`, not an `ILogger`.",
          "tr": "\"I\" öneki sadece bir kodlama detayıdır. Müşteri kodu `ILogger` yerine sadece bir `Logger` istediğini bilmelidir."
        }
      },
      "good": {
        "lang": "java",
        "code": "interface Logger {\n    void log(String message);\n}\n\nclass ConsoleLogger implements Logger {\n    public void log(String message) { ... }\n}\n\n// Veya genel bir uygulama için:\nclass LoggerImpl implements Logger { ... }",
        "why": {
          "en": "Logger names the abstraction; the implementation (ConsoleLogger) carries the detail.",
          "tr": "Logger soyutlamayı adlandırır; uygulama (ConsoleLogger) ayrıntıyı taşır."
        }
      },
      "tip": {
        "en": "You don't want your users thinking \"I'm using an interface.\" Just show them what you offer (the abstraction). If naming conflicts, adorn the concrete class, not the interface (`ShapeFactory` vs `ShapeFactoryImpl`).",
        "tr": "Kullanıcılarınızın \"Ben bir arayüz kullanıyorum\" diye düşünmesini istemezsiniz. Onlara sadece ne sunduğunuzu (soyutlamayı) gösterin. Eğer isimlendirme çakışıyorsa, arayüzü değil, somut sınıfı süsleyin (`ShapeFactory` vs `ShapeFactoryImpl`)."
      }
    }
  ]
});
