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
    "tr": "Avoid Mental Mapping / Class Names / Method Names"
  },
  "title": {
    "en": "Zihinsel Eşleştirmeden Kaçının, Sınıf ve Metot İsimlendirme",
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
      "title": {
        "en": "Mental Mapping",
        "tr": "Zihinsel Eşleştirme (Mental Mapping)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Kod okuyucusu, gördüğü bir ismi zihninde asıl anlamına dönüştürmek için çaba sarf etmemelidir. Tek harfli isimler (döngü sayaçları hariç) veya sadece yazarın bildiği kısaltmalar zihinsel yük yaratır. Profesyonel bir programcı, zekasını karmaşık eşleştirmeleri hatırlamak için değil, herkesin anlayabileceği netlikte kod yazmak için kullanır.</span><span class=\"en-text\">A code reader should not have to spend effort mentally converting a name into its actual meaning. Single-letter names (except for loop counters) or abbreviations known only to the author create mental burden. A professional programmer uses their intelligence not to remember complex mappings, but to write code clear enough for everyone to understand.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Zihinsel eşleştirme gerektiren isimler</span><span class=\"en-text\">BAD — Names requiring mental mapping</span></span>\n<pre>for (int i = 0; i &lt; n; i++) {\n    var r = getR(u[i]);\n    // r neydi? u neydi? r -&gt; result, u -&gt; urls?\n}</pre>\n<div class=\"explanation\"><span class=\"tr-text\">Burada okuyucu sürekli <code>r</code>'nin \"sonuç\" ve <code>u</code>'nun \"URL listesi\" olduğunu hatırlamak zorundadır. Bu bir \"zihinsel hokkabazlık\"tır.</span><span class=\"en-text\">Here, the reader must constantly remember that <code>r</code> is \"result\" and <code>u</code> is \"URL list.\" This is \"mental juggling.\"</span></div>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Açık ve net isimler</span><span class=\"en-text\">GOOD — Clear and explicit names</span></span>\n<pre>for (String url : urlList) {\n    String pageContent = fetchPageContent(url);\n    // sayfa içeriği doğrudan anlaşılıyor\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">Sadece sizin bildiğiniz \"kısayol\" isimlerden kaçının. Kodunuzu, projeye bugün katılan birinin sözlüğe bakmadan anlayabileceği şekilde yazın. \"Clarity is King\" (Açıklık Kraldır).</span><span class=\"en-text\">Avoid \"shortcut\" names known only to you. Write your code so that someone joining the project today can understand it without looking at a glossary. \"Clarity is King.\"</span></div>"
    },
    {
      "id": "class-naming",
      "title": {
        "en": "Class Naming",
        "tr": "Sınıf İsimlendirme (Class Naming)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Sınıf isimleri nesneleri temsil ettiği için isim (noun) veya isim tamlaması olmalıdır. Sınıf isimlerinde fiil kullanılmamalıdır. Ayrıca <code>Data</code>, <code>Info</code>, <code>Manager</code> gibi çok genel ve belirsiz kelimelerden kaçınılmalıdır, çünkü bu kelimeler sınıfın sorumluluğunu netleştirmez.</span><span class=\"en-text\">Since class names represent objects, they should be nouns or noun phrases. Verbs should not be used in class names. Additionally, very general and vague words like <code>Data</code>, <code>Info</code>, <code>Manager</code> should be avoided because they don't clarify the class's responsibility.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Belirsiz veya hatalı sınıf isimleri</span><span class=\"en-text\">BAD — Vague or incorrect class names</span></span>\n<pre>class CleanData { } // Fiil gibi duruyor (Verbal)\nclass UserInfo { }  // Info gürültü kelimesidir\nclass Processor { } // Çok genel, neyi işliyor?</pre>\n<div class=\"explanation\"><span class=\"tr-text\"><code>UserInfo</code> yerine sadece <code>User</code> demek çoğu zaman yeterlidir. <code>Processor</code> gibi isimler sınıfın \"her şeyi yapan\" dev bir yapıya dönüşmesine neden olabilir.</span><span class=\"en-text\">Saying just <code>User</code> instead of <code>UserInfo</code> is often sufficient. Names like <code>Processor</code> can lead to the class becoming a \"do-it-all\" giant structure.</span></div>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Net isim tamlamaları</span><span class=\"en-text\">GOOD — Clear noun phrases</span></span>\n<pre>class User { }\nclass AddressParser { }\nclass PaymentAccount { }</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">Eğer bir sınıfı isimlendirmekte zorlanıyorsanız, muhtemelen o sınıf birden fazla iş yapıyordur. Sınıfı küçülttüğünüzde daha spesifik ve anlamlı bir isim bulmak kolaylaşacaktır.</span><span class=\"en-text\">If you're having trouble naming a class, it probably does more than one thing. When you make the class smaller, finding a specific and meaningful name will become easier.</span></div>"
    },
    {
      "id": "method-naming",
      "title": {
        "en": "Method Naming",
        "tr": "Metot İsimlendirme (Method Naming)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Metotlar eylemleri temsil eder, bu yüzden fiil (verb) veya fiil tamlaması olmalıdırlar. Erişimciler için <code>get</code>, değiştiriciler için <code>set</code> ve mantıksal (boolean) kontroller için <code>is</code> standartlarına uyulmalıdır.</span><span class=\"en-text\">Methods represent actions, so they should be verbs or verb phrases. Standards like <code>get</code> for accessors, <code>set</code> for mutators, and <code>is</code> for logical (boolean) checks should be followed.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Eylem belirtmeyen isimler</span><span class=\"en-text\">BAD — Names not indicating action</span></span>\n<pre>user.name();      // Ne yapıyor? Get mi set mi?\naccount.status(); // Durumu mu dönüyor yoksa güncelliyor mu?\nif(order.posted)  // Boolean mı metot mu?</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Fiil odaklı isimler</span><span class=\"en-text\">GOOD — Verb-oriented names</span></span>\n<pre>user.getName();\naccount.updateStatus(newStatus);\nif(order.isPosted())</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">Bir metot ismini okuduğunuzda bir soru sormuş gibi (<code>isReady?</code>) veya bir emir vermiş gibi (<code>saveUser!</code>) hissetmelisiniz. Eğer metot isminde \"and\", \"or\" gibi bağlaçlar geçiyorsa, metot muhtemelen birden fazla iş yapıyordur.</span><span class=\"en-text\">When you read a method name, it should feel like asking a question (<code>isReady?</code>) or giving a command (<code>saveUser!</code>). If connectors like \"and\" or \"or\" appear in the method name, the method is likely doing more than one thing.</span></div>"
    },
    {
      "id": "static-factory",
      "title": {
        "en": "Static Factory Methods",
        "tr": "Statik Fabrika Metotları (Static Factory Methods)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Yapıcılar (constructors) aşırı yüklendiğinde (farklı parametrelerle birden fazla yapıcı), hangisinin ne amaçla kullanıldığını anlamak zorlaşabilir. Statik fabrika metotları, niyet belirten isimleri sayesinde nesne oluşturma sürecini çok daha açık hale getirir.</span><span class=\"en-text\">When constructors are overloaded (multiple constructors with different parameters), it can be difficult to understand which one is used for what purpose. Static factory methods make the object creation process much clearer thanks to their intention-revealing names.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Kafa karıştırıcı overloaded yapıcılar</span><span class=\"en-text\">BAD — Confusing overloaded constructors</span></span>\n<pre>Duration d1 = new Duration(60);   // Saniye mi? Dakika mı?\nDuration d2 = new Duration(1, 30); // Saat-dakika mı? Dakika-saniye mi?</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Kendini açıklayan fabrika metotları</span><span class=\"en-text\">GOOD — Self-explaining factory methods</span></span>\n<pre>Duration d1 = Duration.fromSeconds(60);\nDuration d2 = Duration.fromMinutesAndSeconds(1, 30);</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">Nesne oluştururken sadece <code>new</code> kullanmak yerine, eğer varsa sınıfın sunduğu statik fabrika metotlarını arayın. Bu metotlar genellikle <code>from...</code>, <code>of...</code>, <code>valueOf...</code> veya <code>newInstance...</code> gibi öneklerle başlar.</span><span class=\"en-text\">Instead of just using <code>new</code> when creating objects, look for static factory methods offered by the class if available. These methods usually start with prefixes like <code>from...</code>, <code>of...</code>, <code>valueOf...</code>, or <code>newInstance...</code>.</span></div>"
    }
  ]
});
