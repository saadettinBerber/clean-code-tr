window.PAGE({
  "id": "page-40",
  "page": 40,
  "pdf_page": 71,
  "chapter": {
    "num": 3,
    "en": "Functions",
    "tr": "Fonksiyonlar"
  },
  "section": {
    "en": "Betimleyici İsimler Kullanın & Fonksiyon Argümanları",
    "tr": "Betimleyici İsimler Kullanın & Fonksiyon Argümanları"
  },
  "title": {
    "en": "Function Arguments (cont.)",
    "tr": "Fonksiyon Argümanları (devam)"
  },
  "blocks": [
    {
      "type": "heading",
      "level": 1,
      "en": "Use Descriptive Names (continued)",
      "tr": "Betimleyici İsimler Kullanın / Use Descriptive Names (devam)",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Don't be afraid to spend time choosing a name. Indeed, you should try several different names and read the code with each in place. Modern IDEs like Eclipse or IntelliJ make it trivial to change names. Use one of those IDEs and experiment with different names until you find one that is as descriptive as you can make it.",
          "tr": "Bir isim seçerken zaman harcamaktan korkmayın. Aslında birkaç farklı isim deneyip her birinin yerinde nasıl göründüğünü okuyarak kodu gözden geçirmelisiniz. Eclipse veya IntelliJ gibi modern IDE'ler isimleri değiştirmeyi son derece kolaylaştırır. Bu IDE'lerden birini kullanın ve mümkün olduğunca betimleyici olan ismi bulana kadar farklı isimlerle denemeler yapın.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Choosing descriptive names will clarify the design of the module in your mind and help you to improve it. It is not at all uncommon that hunting for a good name results in a favorable restructuring of the code.",
          "tr": "Betimleyici isimler (descriptive names) seçmek, modülün tasarımını zihninizde netleştirecek ve onu geliştirmenize yardımcı olacaktır. İyi bir isim arayışının kodun olumlu bir yeniden yapılandırmasıyla (restructuring) sonuçlanması hiç de nadir değildir.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Be consistent in your names. Use the same phrases, nouns, and verbs in the function names you choose for your modules. Consider, for example, the names <code>includeSetupAndTeardownPages</code>, <code>includeSetupPages</code>, <code>includeSuiteSetupPage</code>, and <code>includeSetupPage</code>. The similar phraseology in those names allows the sequence to tell a story. Indeed, if I showed you just the sequence above, you'd ask yourself: \"What happened to <code>includeTeardownPages</code>, <code>includeSuiteTeardownPage</code>, and <code>includeTeardownPage</code>?\" How's that for being \"<em>...pretty much what you expected.</em>\"",
          "tr": "İsimlerinizde tutarlı (consistent) olun. Modülleriniz için seçtiğiniz fonksiyon isimlerinde aynı kalıpları, isimleri ve fiilleri kullanın. Örneğin, <code>includeSetupAndTeardownPages</code>, <code>includeSetupPages</code>, <code>includeSuiteSetupPage</code> ve <code>includeSetupPage</code> isimlerini ele alalım. Bu isimlerdeki benzer ifade kalıbı, dizinin bir hikaye anlatmasını sağlar. Eğer size yukarıdaki diziyi göstersem, kendinize sorarsınız: \"<code>includeTeardownPages</code>, <code>includeSuiteTeardownPage</code> ve <code>includeTeardownPage</code>'e ne oldu?\" Bu, tam da Ward'un ilkesindeki gibi \"<em>...hemen hemen beklediğiniz gibi</em>\" olmak demektir.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Function Arguments",
      "tr": "Fonksiyon Argümanları / Function Arguments",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "The ideal number of arguments for a function is zero (niladic). Next comes one (monadic), followed closely by two (dyadic). Three arguments (triadic) should be avoided where possible. More than three (polyadic) requires very special justification—and then shouldn't be used anyway.",
          "tr": "Bir fonksiyon için ideal argüman sayısı sıfırdır (sıfırlı / niladic). Sonra bir (tekli / monadic) gelir, ardından yakın bir şekilde iki (ikili / dyadic). Üç argüman (üçlü / triadic) mümkün olduğunca kaçınılmalıdır. Üçten fazla (çoklu / polyadic) çok özel bir gerekçe gerektirir — ve o zaman bile kullanılmamalıdır.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Arguments are hard. They take a lot of conceptual power. That's why I got rid of almost all of them from the example. Consider, for instance, the <code>StringBuffer</code> in the example. We could have passed it around as an argument rather than making it an instance variable, but then our readers would have had to interpret it each time they saw it. When you are reading the story told by the module, <code>includeSetupPage()</code> is easier to understand than <code>includeSetupPageInto(newPageContent)</code>. The argument is at a different level of abstraction than the function name and forces you to know a detail (in other words, <code>StringBuffer</code>) that isn't particularly important at that point.",
          "tr": "Argümanlar zordur. Çok fazla kavramsal güç gerektirirler. Bu yüzden örnekten neredeyse hepsini çıkardım. Örneğin, örnekteki <code>StringBuffer</code>'ı ele alalım. Onu bir örnek değişkeni (instance variable) yapmak yerine argüman olarak geçirebilirdik, ama o zaman okuyucularımız her gördüklerinde onu yorumlamak zorunda kalırlardı. Modülün anlattığı hikayeyi okurken, <code>includeSetupPage()</code> ifadesini anlamak <code>includeSetupPageInto(newPageContent)</code> ifadesinden daha kolaydır. Argüman, fonksiyon adından farklı bir soyutlama seviyesindedir (abstraction level) ve sizi o noktada özellikle önemli olmayan bir detayı (başka bir deyişle, <code>StringBuffer</code>) bilmeye zorlar.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Arguments are even harder from a testing point of view. Imagine the difficulty of writing all the test cases to ensure that all the various combinations of arguments work properly. If there are no arguments, this is trivial. If there's one argument, it's not too hard. With two arguments the problem gets a bit more challenging. With more than two arguments, testing every combination of appropriate values can be daunting.",
          "tr": "Argümanlar test açısından daha da zordur. Tüm argüman kombinasyonlarının doğru çalıştığından emin olmak için gerekli tüm test senaryolarını yazmanın zorluğunu hayal edin. Hiç argüman yoksa bu iş önemsizdir. Tek argüman varsa çok da zor değildir. İki argümanla problem biraz daha zorlaşır. İkiden fazla argümanla, uygun değerlerin her kombinasyonunu test etmek gözünüzü korkutabilir.",
          "html": true
        }
      ]
    }
  ],
  "concepts": [
    {
      "id": "naming-consistency",
      "title": {
        "en": "Naming Consistency",
        "tr": "İsimlendirme Tutarlılığı (Naming Consistency)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Fonksiyon isimlerinde aynı kalıpları, fiilleri ve isimleri kullanmak okunabilirliği artırır. Tutarlı isimlendirme, kod tabanında bir hikaye anlatır ve okuyucunun beklentilerini doğrular.</span><span class=\"en-text\" style=\"display:none;\">Using the same phrases, verbs, and nouns in function names improves readability. Consistent naming tells a story in the codebase and confirms the reader's expectations.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Tutarsız isimlendirme</span><span class=\"en-text\" style=\"display:none;\">BAD — Inconsistent naming</span></span>\n<pre><span class=\"kw\">class</span> <span class=\"type\">UserService</span> {\n    <span class=\"kw\">void</span> <span class=\"method\">fetchUserById</span>(<span class=\"type\">int</span> id);\n    <span class=\"kw\">void</span> <span class=\"method\">retrieveOrders</span>(<span class=\"type\">int</span> userId);\n    <span class=\"kw\">void</span> <span class=\"method\">loadPaymentHistory</span>(<span class=\"type\">int</span> userId);\n    <span class=\"kw\">void</span> <span class=\"method\">getAccountDetails</span>(<span class=\"type\">int</span> userId);\n}</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Tutarlı fiil kalıbı</span><span class=\"en-text\" style=\"display:none;\">GOOD — Consistent verb pattern</span></span>\n<pre><span class=\"kw\">class</span> <span class=\"type\">UserService</span> {\n    <span class=\"kw\">void</span> <span class=\"method\">fetchUserById</span>(<span class=\"type\">int</span> id);\n    <span class=\"kw\">void</span> <span class=\"method\">fetchOrdersByUserId</span>(<span class=\"type\">int</span> userId);\n    <span class=\"kw\">void</span> <span class=\"method\">fetchPaymentHistoryByUserId</span>(<span class=\"type\">int</span> userId);\n    <span class=\"kw\">void</span> <span class=\"method\">fetchAccountDetailsByUserId</span>(<span class=\"type\">int</span> userId);\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Bir modüldeki tüm fonksiyon isimlerini bir listeye yazın. Fiiller ve kalıplar tutarlı mı? \"fetch, get, retrieve, load\" gibi karışıklık varsa tek bir fiilde karar kılın.</span><span class=\"en-text\" style=\"display:none;\">List all function names in a module. Are verbs and patterns consistent? If you see a mix like \"fetch, get, retrieve, load\", settle on a single verb.</span></div>"
    },
    {
      "id": "argument-count",
      "title": {
        "en": "Argument Count",
        "tr": "Argüman Sayısı (Argument Count)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Fonksiyon argüman sayısı ne kadar azsa, fonksiyon o kadar anlaşılır ve test edilebilir olur. İdeal olan sıfır argümandır. Her eklenen argüman kavramsal karmaşıklığı artırır.</span><span class=\"en-text\" style=\"display:none;\">The fewer arguments a function has, the easier it is to understand and test. Zero arguments is ideal. Each additional argument increases conceptual complexity.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Çok fazla argüman</span><span class=\"en-text\" style=\"display:none;\">BAD — Too many arguments</span></span>\n<pre><span class=\"kw\">function</span> <span class=\"method\">createUser</span>(name, email, age, role, department, isActive) {\n    <span class=\"comment\">// 6 argüman - anlaması ve test etmesi zor</span>\n    ...\n}</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Nesne ile sarma</span><span class=\"en-text\" style=\"display:none;\">GOOD — Wrapped in object</span></span>\n<pre><span class=\"kw\">function</span> <span class=\"method\">createUser</span>(userConfig) {\n    <span class=\"comment\">// Tek argüman - açık ve test edilmesi kolay</span>\n    <span class=\"kw\">const</span> { name, email, age, role, department, isActive } = userConfig;\n    ...\n}\n\n<span class=\"method\">createUser</span>({\n    name: <span class=\"str\">\"Ayşe\"</span>,\n    email: <span class=\"str\">\"ayse@firma.com\"</span>,\n    age: <span class=\"field\">28</span>,\n    role: <span class=\"str\">\"developer\"</span>,\n    department: <span class=\"str\">\"engineering\"</span>,\n    isActive: <span class=\"kw\">true</span>\n});</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Kural basit: 0 ideal, 1 iyi, 2 kabul edilebilir, 3 kaçının, 4+ asla. Üçten fazla argüman görürseniz bir parametre nesnesi (parameter object) oluşturun.</span><span class=\"en-text\" style=\"display:none;\">The rule is simple: 0 ideal, 1 good, 2 acceptable, 3 avoid, 4+ never. If you see more than three arguments, create a parameter object.</span></div>"
    },
    {
      "id": "testability",
      "title": {
        "en": "Testability",
        "tr": "Test Edilebilirlik (Testability)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Argüman sayısı arttıkça test senaryoları katlanarak büyür. Her argüman kombinasyonunu test etmeniz gerekir. Az argümanlı fonksiyonlar doğal olarak daha test edilebilirdir.</span><span class=\"en-text\" style=\"display:none;\">As argument count increases, test cases grow exponentially. You need to test every combination. Functions with fewer arguments are naturally more testable.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Test kombinasyonu patlaması</span><span class=\"en-text\" style=\"display:none;\">BAD — Test combination explosion</span></span>\n<pre><span class=\"kw\">def</span> <span class=\"method\">calculate_shipping</span>(weight, distance, is_fragile, is_express, zone):\n    <span class=\"comment\"># 5 argüman = yüzlerce test kombinasyonu</span>\n    ...\n\n<span class=\"comment\"># Test etmek: 5 parametre x olası değerler = kabus</span>\n<span class=\"kw\">def</span> <span class=\"method\">test_shipping</span>():\n    <span class=\"method\">calculate_shipping</span>(<span class=\"field\">2.5</span>, <span class=\"field\">100</span>, <span class=\"kw\">True</span>, <span class=\"kw\">False</span>, <span class=\"str\">\"A\"</span>)\n    <span class=\"method\">calculate_shipping</span>(<span class=\"field\">2.5</span>, <span class=\"field\">100</span>, <span class=\"kw\">True</span>, <span class=\"kw\">True</span>, <span class=\"str\">\"A\"</span>)\n    <span class=\"comment\"># ... daha yüzlerce kombinasyon</span></pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Bölünmüş ve test edilebilir</span><span class=\"en-text\" style=\"display:none;\">GOOD — Split and testable</span></span>\n<pre><span class=\"kw\">def</span> <span class=\"method\">calculate_base_cost</span>(package):\n    <span class=\"kw\">return</span> package.weight * RATE_PER_KG\n\n<span class=\"kw\">def</span> <span class=\"method\">apply_zone_modifier</span>(base_cost, zone):\n    <span class=\"kw\">return</span> base_cost * ZONE_RATES[zone]\n\n<span class=\"kw\">def</span> <span class=\"method\">apply_express_surcharge</span>(cost):\n    <span class=\"kw\">return</span> cost * EXPRESS_MULTIPLIER\n\n<span class=\"comment\"># Her fonksiyon bağımsız test edilebilir</span></pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Test yazarken \"bu fonksiyonu test etmek kaç satır alıyor?\" diye sorun. Çok uzun bir test, fonksiyonun çok fazla argüman aldığının işaretidir.</span><span class=\"en-text\" style=\"display:none;\">When writing tests, ask \"how many lines does it take to test this function?\" A very long test is a sign the function takes too many arguments.</span></div>"
    }
  ]
});
