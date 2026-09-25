window.PAGE({
  "id": "page-25",
  "page": 25,
  "pdf_page": 56,
  "chapter": {
    "num": 2,
    "en": "Meaningful Names",
    "tr": "Anlamlı İsimler"
  },
  "section": {
    "en": "Avoid Mental Mapping / Class Names / Method Names",
    "tr": "Zihinsel Eşleştirmeden Kaçının / Sınıf İsimleri / Metot İsimleri"
  },
  "title": {
    "en": "Avoid Mental Mapping, Class Names, Method Names",
    "tr": "Zihinsel Eşleştirmeden Kaçının, Sınıf ve Metot İsimlendirme"
  },
  "blocks": [
    {
      "type": "heading",
      "level": 1,
      "en": "Avoid Mental Mapping",
      "tr": "Zihinsel Eşleştirmeden Kaçınmak / Avoid Mental Mapping",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Readers shouldn’t have to mentally translate your names into other names they already know. This problem generally arises from a choice to use neither problem domain terms nor solution domain terms.",
          "tr": "Okuyucular, isimlerinizi halihazırda bildikleri başka isimlere zihinsel olarak tercüme etmek zorunda kalmamalıdır. Bu sorun genellikle, ne problem alanı (problem domain) terimlerini ne de çözüm alanı (solution domain) terimlerini kullanmamayı tercih etmekten kaynaklanır.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "This is a problem with single-letter variable names. Certainly a loop counter may be named <code>i</code> or <code>j</code> or <code>k</code> (though never <code>l</code>!) if its scope is very small and no other names can conflict with it. This is because those single-letter names for loop counters are traditional. However, in most other contexts a single-letter name is a poor choice; it’s just a placeholder that the reader must mentally map to the actual concept. There can be no worse reason for using the name <code>c</code> than because <code>a</code> and <code>b</code> were already taken.",
          "tr": "Bu, tek harfli değişken isimleriyle (single-letter variable names) ilgili bir sorundur. Elbette, kapsamı (scope) çok darsa ve başka hiçbir isimle çakışmıyorsa, bir döngü sayacı (loop counter) <code>i</code>, <code>j</code> veya <code>k</code> olarak adlandırılabilir (asla <code>l</code> değil!). Bunun nedeni, döngü sayaçları için bu tek harfli isimlerin geleneksel olmasıdır. Ancak, diğer çoğu bağlamda tek harfli bir isim kötü bir seçimdir; bu sadece okuyucunun gerçek kavramla zihinsel olarak eşleştirmesi gereken bir yer tutucudur (placeholder). Bir ismi <code>c</code> olarak kullanmak için, <code>a</code> ve <code>b</code> zaten alınmış olmasından daha kötü bir neden olamaz.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "In general programmers are pretty smart people. Smart people sometimes like to show off their smarts by demonstrating their mental juggling abilities. After all, if you can reliably remember that <code>r</code> is the lower-cased version of the url with the host and scheme removed, then you must clearly be very smart.",
          "tr": "Genelde programcılar oldukça zeki insanlardır. Zeki insanlar bazen zihinsel hokkabazlık (mental juggling) yeteneklerini sergileyerek zekalarıyla hava atmayı severler. Sonuçta, <code>r</code> harfinin URL'nin host ve şema (scheme) kısımları çıkarılmış küçük harfli hali olduğunu güvenilir bir şekilde hatırlayabiliyorsanız, açıkça çok zeki olmalısınız.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "One difference between a smart programmer and a professional programmer is that the professional understands that <em>clarity is king</em>. Professionals use their powers for good and write code that others can understand.",
          "tr": "Zeki bir programcı ile profesyonel bir programcı arasındaki farklardan biri, profesyonelin <em>açıklığın kral (clarity is king)</em> olduğunu anlamasıdır. Profesyoneller yeteneklerini iyilik için kullanırlar ve başkalarının anlayabileceği kodlar yazarlar.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Class Names",
      "tr": "Sınıf İsimleri / Class Names",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Classes and objects should have noun or noun phrase names like <code>Customer</code>, <code>WikiPage</code>, <code>Account</code>, and <code>AddressParser</code>. Avoid words like <code>Manager</code>, <code>Processor</code>, <code>Data</code>, or <code>Info</code> in the name of a class. A class name should not be a verb.",
          "tr": "Sınıflar ve nesneler; <code>Customer</code>, <code>WikiPage</code>, <code>Account</code> ve <code>AddressParser</code> gibi isim (noun) veya isim tamlaması şeklinde adlara sahip olmalıdır. Bir sınıfın adında <code>Manager</code>, <code>Processor</code>, <code>Data</code> veya <code>Info</code> gibi kelimelerden kaçının. Bir sınıf adı fiil (verb) olmamalıdır.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Method Names",
      "tr": "Metot İsimleri / Method Names",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Methods should have verb or verb phrase names like <code>postPayment</code>, <code>deletePage</code>, or <code>save</code>. Accessors, mutators, and predicates should be named for their value and prefixed with <code>get</code>, <code>set</code>, and <code>is</code> according to the javabean standard.",
          "tr": "Metotlar; <code>postPayment</code>, <code>deletePage</code> veya <code>save</code> gibi fiil (verb) veya fiil tamlaması şeklinde adlara sahip olmalıdır. Erişimciler (accessors), değiştiriciler (mutators) ve yüklemler (predicates); değerlerine göre adlandırılmalı ve JavaBean standartlarına uygun olarak <code>get</code>, <code>set</code> ve <code>is</code> önekleriyle başlatılmalıdır.",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "string name = employee.getName();\ncustomer.setName(\"mike\");\nif (paycheck.isPosted())..."
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "When constructors are overloaded, use static factory methods with names that describe the arguments. For example,",
          "tr": "Yapıcılar (constructors) aşırı yüklendiğinde (overloaded), argümanları betimleyen isimlere sahip statik fabrika metotlarını (static factory methods) kullanın. Örneğin:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "Complex fulcrumPoint = Complex.FromRealNumber(23.0);"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "is generally better than",
          "tr": "şu kullanımdan genellikle daha iyidir:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "Complex fulcrumPoint = new Complex(23.0);"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Consider enforcing their use by making the corresponding constructors private.",
          "tr": "Karşılık gelen yapıcıları (constructors) private yaparak bu metotların kullanımını zorunlu kılmayı düşünebilirsiniz.",
          "html": true
        }
      ]
    }
  ],
  "concepts": [
    {
      "id": "mental-mapping",
      "kind": "code",
      "title": {
        "en": "Mental Mapping",
        "tr": "Zihinsel Eşleştirme (Mental Mapping)"
      },
      "summary": {
        "en": "A code reader should not have to spend effort mentally converting a name into its actual meaning. Single-letter names (except for loop counters) or abbreviations known only to the author create mental burden. A professional programmer uses their intelligence not to remember complex mappings, but to write code clear enough for everyone to understand.",
        "tr": "Kod okuyucusu, gördüğü bir ismi zihninde asıl anlamına dönüştürmek için çaba sarf etmemelidir. Tek harfli isimler (döngü sayaçları hariç) veya sadece yazarın bildiği kısaltmalar zihinsel yük yaratır. Profesyonel bir programcı, zekasını karmaşık eşleştirmeleri hatırlamak için değil, herkesin anlayabileceği netlikte kod yazmak için kullanır."
      },
      "bad": {
        "lang": "java",
        "code": "for (int i = 0; i < n; i++) {\n    var r = getR(u[i]);\n    // r neydi? u neydi? r -> result, u -> urls?\n}",
        "why": {
          "en": "Here, the reader must constantly remember that `r` is \"result\" and `u` is \"URL list.\" This is \"mental juggling.\"",
          "tr": "Burada okuyucu sürekli `r`'nin \"sonuç\" ve `u`'nun \"URL listesi\" olduğunu hatırlamak zorundadır. Bu bir \"zihinsel hokkabazlık\"tır."
        }
      },
      "good": {
        "lang": "java",
        "code": "for (String url : urlList) {\n    String pageContent = fetchPageContent(url);\n    // sayfa içeriği doğrudan anlaşılıyor\n}",
        "why": {
          "en": "url and pageContent are read directly, no mapping table in the head required.",
          "tr": "url ve pageContent doğrudan okunur; kafada eşleştirme tablosu gerekmez."
        }
      },
      "tip": {
        "en": "Avoid \"shortcut\" names known only to you. Write your code so that someone joining the project today can understand it without looking at a glossary. \"Clarity is King.\"",
        "tr": "Sadece sizin bildiğiniz \"kısayol\" isimlerden kaçının. Kodunuzu, projeye bugün katılan birinin sözlüğe bakmadan anlayabileceği şekilde yazın. \"Clarity is King\" (Açıklık Kraldır)."
      }
    },
    {
      "id": "class-naming",
      "kind": "code",
      "title": {
        "en": "Class Naming",
        "tr": "Sınıf İsimlendirme (Class Naming)"
      },
      "summary": {
        "en": "Since class names represent objects, they should be nouns or noun phrases. Verbs should not be used in class names. Additionally, very general and vague words like `Data`, `Info`, `Manager` should be avoided because they don't clarify the class's responsibility.",
        "tr": "Sınıf isimleri nesneleri temsil ettiği için isim (noun) veya isim tamlaması olmalıdır. Sınıf isimlerinde fiil kullanılmamalıdır. Ayrıca `Data`, `Info`, `Manager` gibi çok genel ve belirsiz kelimelerden kaçınılmalıdır, çünkü bu kelimeler sınıfın sorumluluğunu netleştirmez."
      },
      "bad": {
        "lang": "java",
        "code": "class CleanData { } // Fiil gibi duruyor (Verbal)\nclass UserInfo { }  // Info gürültü kelimesidir\nclass Processor { } // Çok genel, neyi işliyor?",
        "why": {
          "en": "Saying just `User` instead of `UserInfo` is often sufficient. Names like `Processor` can lead to the class becoming a \"do-it-all\" giant structure.",
          "tr": "`UserInfo` yerine sadece `User` demek çoğu zaman yeterlidir. `Processor` gibi isimler sınıfın \"her şeyi yapan\" dev bir yapıya dönüşmesine neden olabilir."
        }
      },
      "good": {
        "lang": "java",
        "code": "class User { }\nclass AddressParser { }\nclass PaymentAccount { }",
        "why": {
          "en": "User, AddressParser, PaymentAccount are nouns that state the class's responsibility.",
          "tr": "User, AddressParser, PaymentAccount sınıfın sorumluluğunu söyleyen isimlerdir."
        }
      },
      "tip": {
        "en": "If you're having trouble naming a class, it probably does more than one thing. When you make the class smaller, finding a specific and meaningful name will become easier.",
        "tr": "Eğer bir sınıfı isimlendirmekte zorlanıyorsanız, muhtemelen o sınıf birden fazla iş yapıyordur. Sınıfı küçülttüğünüzde daha spesifik ve anlamlı bir isim bulmak kolaylaşacaktır."
      }
    },
    {
      "id": "method-naming",
      "kind": "code",
      "title": {
        "en": "Method Naming",
        "tr": "Metot İsimlendirme (Method Naming)"
      },
      "summary": {
        "en": "Methods represent actions, so they should be verbs or verb phrases. Standards like `get` for accessors, `set` for mutators, and `is` for logical (boolean) checks should be followed.",
        "tr": "Metotlar eylemleri temsil eder, bu yüzden fiil (verb) veya fiil tamlaması olmalıdırlar. Erişimciler için `get`, değiştiriciler için `set` ve mantıksal (boolean) kontroller için `is` standartlarına uyulmalıdır."
      },
      "bad": {
        "lang": "java",
        "code": "user.name();      // Ne yapıyor? Get mi set mi?\naccount.status(); // Durumu mu dönüyor yoksa güncelliyor mu?\nif(order.posted)  // Boolean mı metot mu?",
        "why": {
          "en": "name()/status()/posted leave the action or the return type unclear.",
          "tr": "name()/status()/posted eylemin ya da dönüş tipinin ne olduğunu belirsiz bırakır."
        }
      },
      "good": {
        "lang": "java",
        "code": "user.getName();\naccount.updateStatus(newStatus);\nif(order.isPosted())",
        "why": {
          "en": "get/set/is verbs state exactly what each method does.",
          "tr": "get/set/is fiilleri her metodun ne yaptığını tam olarak söyler."
        }
      },
      "tip": {
        "en": "When you read a method name, it should feel like asking a question (`isReady?`) or giving a command (`saveUser!`). If connectors like \"and\" or \"or\" appear in the method name, the method is likely doing more than one thing.",
        "tr": "Bir metot ismini okuduğunuzda bir soru sormuş gibi (`isReady?`) veya bir emir vermiş gibi (`saveUser!`) hissetmelisiniz. Eğer metot isminde \"and\", \"or\" gibi bağlaçlar geçiyorsa, metot muhtemelen birden fazla iş yapıyordur."
      }
    },
    {
      "id": "static-factory",
      "kind": "code",
      "title": {
        "en": "Static Factory Methods",
        "tr": "Statik Fabrika Metotları (Static Factory Methods)"
      },
      "summary": {
        "en": "When constructors are overloaded (multiple constructors with different parameters), it can be difficult to understand which one is used for what purpose. Static factory methods make the object creation process much clearer thanks to their intention-revealing names.",
        "tr": "Yapıcılar (constructors) aşırı yüklendiğinde (farklı parametrelerle birden fazla yapıcı), hangisinin ne amaçla kullanıldığını anlamak zorlaşabilir. Statik fabrika metotları, niyet belirten isimleri sayesinde nesne oluşturma sürecini çok daha açık hale getirir."
      },
      "bad": {
        "lang": "java",
        "code": "Duration d1 = new Duration(60);   // Saniye mi? Dakika mı?\nDuration d2 = new Duration(1, 30); // Saat-dakika mı? Dakika-saniye mi?",
        "why": {
          "en": "`new Duration(60)` leaves the unit of the argument ambiguous.",
          "tr": "`new Duration(60)` argümanın birimini belirsiz bırakır."
        }
      },
      "good": {
        "lang": "java",
        "code": "Duration d1 = Duration.fromSeconds(60);\nDuration d2 = Duration.fromMinutesAndSeconds(1, 30);",
        "why": {
          "en": "fromSeconds/fromMinutesAndSeconds name the units, so the call documents itself.",
          "tr": "fromSeconds/fromMinutesAndSeconds birimleri adlandırır; çağrı kendini belgeler."
        }
      },
      "tip": {
        "en": "Instead of just using `new` when creating objects, look for static factory methods offered by the class if available. These methods usually start with prefixes like `from...`, `of...`, `valueOf...`, or `newInstance...`.",
        "tr": "Nesne oluştururken sadece `new` kullanmak yerine, eğer varsa sınıfın sunduğu statik fabrika metotlarını arayın. Bu metotlar genellikle `from...`, `of...`, `valueOf...` veya `newInstance...` gibi öneklerle başlar."
      }
    }
  ]
});
