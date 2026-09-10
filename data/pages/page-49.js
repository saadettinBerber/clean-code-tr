window.PAGE({
  "id": "page-49",
  "page": 49,
  "pdf_page": 80,
  "chapter": {
    "num": 3,
    "en": "Functions",
    "tr": "Fonksiyonlar"
  },
  "section": {
    "en": "SetupTeardownIncluder",
    "tr": "SetupTeardownIncluder"
  },
  "title": {
    "en": "SetupTeardownIncluder (Listing 3-7)",
    "tr": "SetupTeardownIncluder (Listing 3-7)"
  },
  "blocks": [
    {
      "type": "heading",
      "level": 1,
      "en": "SetupTeardownIncluder",
      "tr": "SetupTeardownIncluder / SetupTeardownIncluder",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Listing 3-7 shows the final refactored version of the messy code (Listing 3-1) we saw at the beginning of this chapter. This class is a concrete example of applying the clean code principles we discussed throughout the chapter. Every function is small, does one thing, and has a meaningful name.",
          "tr": "Liste 3-7, bu bölümün başında gördüğümüz karmaşık kodun (Liste 3-1) yeniden düzenlenmiş (refactored) nihai halini göstermektedir. Bu sınıf, tüm bölüm boyunca tartıştığımız temiz kod ilkelerinin uygulandığı somut bir örnektir. Her fonksiyon küçük, tek bir iş yapar ve anlamlı isimler taşır.",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "package fitnesse.html;\n\nimport fitnesse.responders.run.SuiteResponder;\nimport fitnesse.wiki.*;\n\npublic class SetupTeardownIncluder {\n    private PageData pageData;\n    private boolean isSuite;\n    private WikiPage testPage;\n    private StringBuffer newPageContent;\n    private PageCrawler pageCrawler;\n\n    public static String render(PageData pageData) throws Exception {\n        return render(pageData, false);\n    }\n\n    public static String render(PageData pageData, boolean isSuite)\n            throws Exception {\n        return new SetupTeardownIncluder(pageData).render(isSuite);\n    }\n\n    private SetupTeardownIncluder(PageData pageData) {\n        this.pageData = pageData;\n        testPage = pageData.getWikiPage();\n        pageCrawler = testPage.getPageCrawler();\n        newPageContent = new StringBuffer();\n    }",
      "caption": {
        "en": "Listing 3-7 / SetupTeardownIncluder.java",
        "tr": "Listing 3-7 / SetupTeardownIncluder.java"
      }
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "There are several important points to notice in this code. First, all fields of the class are declared <code>private</code> — following the principle of Encapsulation. Second, the only entry point exposed to the outside world is the static <code>render</code> methods. This is a simplified application of the Factory Method pattern.",
          "tr": "Bu kodda dikkat edilmesi gereken birkaç önemli nokta vardır. İlk olarak, sınıfın tüm alanları (fields) <code>private</code> olarak tanımlanmıştır — Kapsülleme (Encapsulation) ilkesine uygun şekilde. İkincisi, dışarıya açılan tek giriş noktası statik <code>render</code> metotlarıdır. Bu, Fabrika Metodu (Factory Method) deseninin basitleştirilmiş bir uygulamasıdır.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "The constructor is also declared <code>private</code>, so the class can only be instantiated through its own static methods. The constructor initializes all necessary dependencies once, and the rest of the class operates on these initialized values.",
          "tr": "Yapıcı metot (constructor) da <code>private</code> olarak tanımlanmıştır, bu sayede sınıf yalnızca kendi statik metotları aracılığıyla oluşturulabilir. Yapıcı, gerekli tüm bağımlılıkları bir kez başlatır ve sınıfın geri kalanını bu başlatılmış değerler üzerinde çalışır hale getirir.",
          "html": true
        }
      ]
    }
  ],
  "concepts": [
    {
      "id": "encapsulation",
      "title": {
        "en": "Encapsulation",
        "tr": "Kapsülleme (Encapsulation)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Kapsülleme (Encapsulation), bir sınıfın iç durumunu dış dünyadan gizleyerek yalnızca kontrollü bir arayüz (interface) üzerinden erişim sağlama ilkesidir. Alanları <code class=\"inline\">private</code> yaparak iç detayları korursunuz.</span><span class=\"en-text\" style=\"display:none;\">Encapsulation is the principle of hiding a class's internal state from the outside world and providing access only through a controlled interface. By making fields <code class=\"inline\">private</code>, you protect internal details.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Public alanlar</span><span class=\"en-text\" style=\"display:none;\">BAD — Public fields</span></span>\n<pre><span class=\"kw\">class</span> <span class=\"type\">UserSession</span> {\n    <span class=\"kw\">public</span> <span class=\"type\">String</span> <span class=\"field\">token</span>;\n    <span class=\"kw\">public boolean</span> <span class=\"field\">isExpired</span>;\n    <span class=\"kw\">public</span> <span class=\"type\">Date</span> <span class=\"field\">lastAccess</span>;\n}\n\n<span class=\"comment\">// Dışarıdan doğrudan müdahale:</span>\nsession.<span class=\"field\">isExpired</span> = <span class=\"kw\">false</span>; <span class=\"comment\">// Tehlikeli!</span>\nsession.<span class=\"field\">token</span> = <span class=\"str\">\"hacked\"</span>;   <span class=\"comment\">// Hiçbir kontrol yok</span></pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Private alanlar + kontrollü erişim</span><span class=\"en-text\" style=\"display:none;\">GOOD — Private fields + controlled access</span></span>\n<pre><span class=\"kw\">class</span> <span class=\"type\">UserSession</span> {\n    <span class=\"kw\">private</span> <span class=\"type\">String</span> <span class=\"field\">token</span>;\n    <span class=\"kw\">private</span> <span class=\"type\">Instant</span> <span class=\"field\">expiresAt</span>;\n\n    <span class=\"kw\">public boolean</span> <span class=\"method\">isExpired</span>() {\n        <span class=\"kw\">return</span> <span class=\"type\">Instant</span>.<span class=\"method\">now</span>().<span class=\"method\">isAfter</span>(<span class=\"field\">expiresAt</span>);\n    }\n\n    <span class=\"kw\">public</span> <span class=\"type\">String</span> <span class=\"method\">getToken</span>() {\n        <span class=\"kw\">if</span> (<span class=\"method\">isExpired</span>())\n            <span class=\"kw\">throw new</span> <span class=\"type\">SessionExpiredException</span>();\n        <span class=\"kw\">return</span> <span class=\"field\">token</span>;\n    }\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Varsayılan olarak her alanı <code class=\"inline\">private</code> yapın. Gerçekten dışarıya açılması gerektiğinde bile doğrudan alan yerine bir metot sunun. Bu, ileride iç yapıyı değiştirme özgürlüğü verir.</span><span class=\"en-text\" style=\"display:none;\">Make every field <code class=\"inline\">private</code> by default. Even when you need to expose it, provide a method instead of direct field access. This gives you the freedom to change the internal structure later.</span></div>"
    },
    {
      "id": "factory-method",
      "title": {
        "en": "Factory Method",
        "tr": "Fabrika Metodu (Factory Method)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Fabrika Metodu (Factory Method), nesne oluşturma mantığını kapsülleyen bir tasarım desenidir. Doğrudan <code class=\"inline\">new</code> çağırmak yerine, statik bir metot üzerinden nesne oluşturulur. Bu sayede oluşturma süreci kontrol altına alınır ve iç detaylar gizlenir.</span><span class=\"en-text\" style=\"display:none;\">The Factory Method is a design pattern that encapsulates object creation logic. Instead of calling <code class=\"inline\">new</code> directly, objects are created through a static method. This puts the creation process under control and hides internal details.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Doğrudan nesne oluşturma</span><span class=\"en-text\" style=\"display:none;\">BAD — Direct object creation</span></span>\n<pre><span class=\"comment\">// İstemci kodu karmaşık kurulumu bilmek zorunda</span>\n<span class=\"type\">DatabaseConnection</span> conn = <span class=\"kw\">new</span> <span class=\"type\">DatabaseConnection</span>();\nconn.<span class=\"method\">setHost</span>(<span class=\"str\">\"localhost\"</span>);\nconn.<span class=\"method\">setPort</span>(5432);\nconn.<span class=\"method\">setCredentials</span>(user, pass);\nconn.<span class=\"method\">connect</span>();</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Statik fabrika metodu</span><span class=\"en-text\" style=\"display:none;\">GOOD — Static factory method</span></span>\n<pre><span class=\"kw\">class</span> <span class=\"type\">DatabaseConnection</span> {\n    <span class=\"kw\">private</span> <span class=\"method\">DatabaseConnection</span>() { }\n\n    <span class=\"kw\">public static</span> <span class=\"type\">DatabaseConnection</span> <span class=\"method\">create</span>(\n            <span class=\"type\">Config</span> config) {\n        <span class=\"type\">DatabaseConnection</span> conn =\n            <span class=\"kw\">new</span> <span class=\"type\">DatabaseConnection</span>();\n        conn.<span class=\"method\">initialize</span>(config);\n        <span class=\"kw\">return</span> conn;\n    }\n}\n\n<span class=\"comment\">// Kullanım: tek satır, temiz</span>\n<span class=\"type\">DatabaseConnection</span> conn =\n    <span class=\"type\">DatabaseConnection</span>.<span class=\"method\">create</span>(config);</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Nesne oluşturmak birden fazla adım gerektiriyorsa veya oluşturma mantığı değişebilirse, statik fabrika metodu kullanın. Yapıcıyı <code class=\"inline\">private</code> yaparak istemci kodunun kontrolsüz nesne yaratmasını engelleyin.</span><span class=\"en-text\" style=\"display:none;\">If creating an object requires multiple steps or the creation logic might change, use a static factory method. Make the constructor <code class=\"inline\">private</code> to prevent uncontrolled object creation by client code.</span></div>"
    },
    {
      "id": "private-constructor",
      "title": {
        "en": "Private Constructor",
        "tr": "Private Yapıcı Metot (Private Constructor)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Yapıcı metodu (constructor) <code class=\"inline\">private</code> yapmak, sınıfın dışarıdan doğrudan örneklenmesini (instantiation) engeller. Bu teknik genellikle Fabrika Metodu deseniyle birlikte kullanılır ve nesne oluşturma sürecinin tamamen sınıfın kontrolünde kalmasını sağlar.</span><span class=\"en-text\" style=\"display:none;\">Making a constructor <code class=\"inline\">private</code> prevents the class from being directly instantiated from outside. This technique is commonly used with the Factory Method pattern to ensure that the object creation process remains entirely under the class's control.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Public yapıcı, kontrolsüz oluşturma</span><span class=\"en-text\" style=\"display:none;\">BAD — Public constructor, uncontrolled creation</span></span>\n<pre><span class=\"kw\">class</span> <span class=\"type\">Logger</span>:\n    <span class=\"kw\">def</span> <span class=\"method\">__init__</span>(self, file_path):\n        self.file = <span class=\"method\">open</span>(file_path, <span class=\"str\">\"a\"</span>)\n\n<span class=\"comment\"># Her yerde yeni logger oluşturulabilir</span>\nlogger1 = <span class=\"type\">Logger</span>(<span class=\"str\">\"/var/log/app.log\"</span>)\nlogger2 = <span class=\"type\">Logger</span>(<span class=\"str\">\"/var/log/app.log\"</span>)\n<span class=\"comment\"># Aynı dosyaya iki farklı handler — sorun!</span></pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Kontrollü oluşturma</span><span class=\"en-text\" style=\"display:none;\">GOOD — Controlled creation</span></span>\n<pre><span class=\"kw\">class</span> <span class=\"type\">Logger</span>:\n    _instance = <span class=\"kw\">None</span>\n\n    <span class=\"kw\">def</span> <span class=\"method\">__init__</span>(self):\n        <span class=\"kw\">raise</span> <span class=\"type\">RuntimeError</span>(<span class=\"str\">\"Use Logger.get()\"</span>)\n\n    @<span class=\"method\">classmethod</span>\n    <span class=\"kw\">def</span> <span class=\"method\">get</span>(cls, file_path):\n        <span class=\"kw\">if</span> cls._instance <span class=\"kw\">is None</span>:\n            obj = <span class=\"method\">object</span>.<span class=\"method\">__new__</span>(cls)\n            obj.file = <span class=\"method\">open</span>(file_path, <span class=\"str\">\"a\"</span>)\n            cls._instance = obj\n        <span class=\"kw\">return</span> cls._instance\n\n<span class=\"comment\"># Her zaman aynı nesne döner</span>\nlogger = <span class=\"type\">Logger</span>.<span class=\"method\">get</span>(<span class=\"str\">\"/var/log/app.log\"</span>)</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Yapıcıyı private yapmak \"Bu nesneyi nasıl oluşturacağıma ben karar veririm\" demektir. SetupTeardownIncluder'da olduğu gibi, kullanıcının <code class=\"inline\">render()</code> çağırması yeterli — sınıfın iç mekanizmasını bilmesine gerek yoktur.</span><span class=\"en-text\" style=\"display:none;\">Making the constructor private means \"I decide how this object is created.\" As in SetupTeardownIncluder, the user just calls <code class=\"inline\">render()</code> — they don't need to know the class's internal mechanics.</span></div>"
    }
  ]
});
