window.PAGE({
  "id": "page-38",
  "page": 38,
  "pdf_page": 69,
  "chapter": {
    "num": 3,
    "en": "Functions",
    "tr": "Fonksiyonlar"
  },
  "section": {
    "en": "Açıklayıcı İsimler",
    "tr": "Açıklayıcı İsimler"
  },
  "title": {
    "en": "Consistent Lexicon & Function Arguments",
    "tr": "Tutarlı Kelime Haznesi & Fonksiyon Argümanları"
  },
  "blocks": [
    {
      "type": "para",
      "sentences": [
        {
          "en": "One of the things that Ward Cunningham taught me was that when you name something, you understand it. The reverse is also true: When you name something, you understand what it should do. Choosing good names is hard because choosing good names requires you to understand the structure of the code well, and that requires the code to be well structured. If you're having trouble naming something, it's time to improve the structure of the code.",
          "tr": "Ward Cunningham'ın bana öğrettiği şeylerden biri şuydu: İsim verdiğinizde kodu anlamış olursunuz. Tersi de doğrudur: İsim verdiğinizde kodun ne yapması gerektiğini anlarsınız. İyi bir isim seçmek zordur çünkü iyi bir isim seçmek için kodun yapısını iyi anlamanız gerekir ve bu da kodun iyi yapılandırılmasını gerektirir. Eğer isim vermekte zorlanıyorsanız, kodun yapısını daha iyi hale getirmenin zamanı gelmiştir.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "The exception to this rule is test code. Don't skimp on descriptive names for test code. Test function names should be descriptions of the rule and conditions being tested. Test function names can be very long. For example: <code>testUserCanAddItemToCartWhenLoggedInAndCartIsEmpty</code> is perfectly acceptable. Readability is paramount in tests.",
          "tr": "Bu kuralın istisnası test kodudur. Test kodu için açıklayıcı isimlerden vazgeçmeyin. Test fonksiyonlarının isimleri, test edilen kuralın ve koşulların açıklaması olmalıdır. Test fonksiyonu isimleri çok uzun olabilir. Örneğin: <code>testUserCanAddItemToCartWhenLoggedInAndCartIsEmpty</code> gibi bir isim tamamen kabul edilebilirdir. Testlerde okunabilirlik her şeyden önemlidir.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Since naming conventions were covered in Chapter 2, I won't repeat them here. But I want to emphasize: Use a consistent lexicon. Use a consistent vocabulary in your functions. Don't use different words for the same thing. For example, don't randomly mix <code>fetch</code>, <code>retrieve</code>, and <code>get</code>. Similarly, don't mix <code>controller</code>, <code>manager</code>, and <code>driver</code>. Consistency is vital.",
          "tr": "İsimlendirme kuralları Bölüm 2'de ele alındığı için burada tekrar etmeyeceğim. Ancak şunu vurgulamak istiyorum: Tutarlı bir kelime haznesi (consistent lexicon) kullanın. Fonksiyonlarınızda tutarlı bir kelime haznesi kullanın. Aynı şeyi yapmak için farklı kelimeler kullanmayın. Örneğin, <code>fetch</code>, <code>retrieve</code> ve <code>get</code> kelimelerini rastgele karıştırmayın. Aynı şekilde <code>controller</code>, <code>manager</code> ve <code>driver</code> kelimelerini de karıştırmayın. Tutarlılık hayati önem taşır.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Don't use the same names for different purposes. For example, if you use the word <code>add</code> to mean concatenation in one place, you can't use it to mean mathematical addition somewhere else. Because in that case, the word <code>add</code> means different things and readers get confused. This is an example of a pun and should be avoided.",
          "tr": "Aynı isimleri farklı amaçlar için kullanmayın. Örneğin, bir yerde <code>add</code> kelimesini birbiriyle bağlama (concatenation) anlamında kullanırsanız, başka bir yerde matematiksel toplama anlamında kullanamazsınız. Çünkü bu durumda <code>add</code> kelimesi farklı şeyler ifade eder ve okuyucular kafası karışır. Bu bir kelime oyunu (pun) örneğidir ve kaçınılması gerekir.",
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
          "en": "The ideal number of arguments for a function is zero (niladic). Next comes one (monadic), followed by two (dyadic). Three arguments (triadic) should be avoided where possible. More than three arguments (polyadic) requires very special justification - and then shouldn't be used anyway.",
          "tr": "Bir fonksiyon için ideal argüman sayısı sıfırdır (niladic). Sonra bir (monadic) gelir, ardından iki (dyadic). Üç argüman (triadic) mümkünse kaçınılmalıdır. Üçten fazla argüman (polyadic) çok özel bir gerekçe gerektirir - ve yine de kullanılmamalıdır.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Arguments are hard from a testing point of view as well. Imagine the difficulty of writing test cases to ensure that all various combinations of arguments work properly. As the number of arguments increases, test combinations grow exponentially.",
          "tr": "Argümanlar, test edilebilirlik açısından da zordur. Argümanların tüm olası kombinasyonlarının doğru çalıştığından emin olmak için test senaryoları yazmanın zorluğunu hayal edin. Argüman sayısı arttıkça, test kombinasyonları üstel olarak artar.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Output arguments are harder to understand than input arguments. When we read a function, we assume information goes into the function through arguments and out through the return value. We don't usually expect information to be going out through the arguments.",
          "tr": "Çıkış argümanları (output arguments), giriş argümanlarından (input arguments) daha zor anlaşılır. Bir fonksiyonu okurken, bilginin argümanlar aracılığıyla fonksiyona girdiğini ve dönüş değeri aracılığıyla çıktığını varsayarız. Genellikle bilginin argümanlar aracılığıyla çıktığını beklemeyiz.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "It may not always be possible to use zero arguments in your functions, but you should aim for it. Functions with many arguments usually mean they're trying to do too much. If a function needs many arguments, it's a sign that the function is not doing one thing.",
          "tr": "Fonksiyonlarınızda sıfır argüman kullanmak her zaman mümkün olmayabilir, ancak bunu hedeflemelisiniz. Çok argümanlı fonksiyonlar genellikle çok fazla şey yapmaya çalışıyor demektir. Bir fonksiyonun çok sayıda argümana ihtiyaç duyması, fonksiyonun tek bir şey yapmadığının işaretidir.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "One way to reduce the number of arguments is to group arguments into an object. For example, instead of <code>Circle makeCircle(int x, int y, int radius)</code> you can write <code>Circle makeCircle(Point center, int radius)</code>. This reduces the argument count from three to two and also improves conceptual integrity.",
          "tr": "Argüman sayısını azaltmanın bir yolu, argümanları bir nesne içinde gruplamaktır. Örneğin, <code>Circle makeCircle(int x, int y, int radius)</code> yerine <code>Circle makeCircle(Point center, int radius)</code> yazabilirsiniz. Bu, argüman sayısını üçten ikiye düşürür ve aynı zamanda kavramsal bütünlüğü artırır.",
          "html": true
        }
      ]
    }
  ],
  "concepts": [
    {
      "id": "consistent-lexicon",
      "title": {
        "en": "Consistent Lexicon",
        "tr": "Tutarlı Kelime Haznesi (Consistent Lexicon)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Aynı şeyi yapmak için farklı kelimeler kullanmayın. Kod tabanınızda tutarlı bir dil (lexicon) oluşturun. fetch, retrieve, get kelimelerini rastgele karıştırmayın. Controller, manager, driver kelimelerini tutarlı kullanın.</span><span class=\"en-text\" style=\"display:none;\">Don't use different words for the same thing. Create a consistent language (lexicon) in your codebase. Don't randomly mix fetch, retrieve, get. Use controller, manager, driver consistently.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Tutarsız kelimeler</span><span class=\"en-text\" style=\"display:none;\">BAD — Inconsistent words</span></span>\n<pre><span class=\"type\">UserService</span>.<span class=\"method\">fetchUser</span>(id)      <span class=\"comment\"># fetch</span>\n<span class=\"type\">OrderService</span>.<span class=\"method\">retrieveOrder</span>(id)  <span class=\"comment\"># retrieve</span>\n<span class=\"type\">ProductService</span>.<span class=\"method\">getProduct</span>(id)   <span class=\"comment\"># get - Aynı şey!</span>\n\n<span class=\"type\">UserController</span> <span class=\"comment\"># controller</span>\n<span class=\"type\">OrderManager</span>   <span class=\"comment\"># manager</span>\n<span class=\"type\">ProductDriver</span>  <span class=\"comment\"># driver - Ne farkı var?</span></pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Tutarlı kelime haznesi</span><span class=\"en-text\" style=\"display:none;\">GOOD — Consistent lexicon</span></span>\n<pre><span class=\"type\">UserService</span>.<span class=\"method\">get</span>(id)      <span class=\"comment\"># get - Hepsi get</span>\n<span class=\"type\">OrderService</span>.<span class=\"method\">get</span>(id)     <span class=\"comment\"># get</span>\n<span class=\"type\">ProductService</span>.<span class=\"method\">get</span>(id)   <span class=\"comment\"># get</span>\n\n<span class=\"type\">UserController</span>   <span class=\"comment\"># controller - HTTP istekleri</span>\n<span class=\"type\">OrderController</span>  <span class=\"comment\"># controller</span>\n<span class=\"type\">ProductController</span> <span class=\"comment\"># controller</span></pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Takımınızla bir \"sözlük\" (lexicon) oluşturun. Her kavram için bir kelime seçin ve hep onu kullanın. Yeni geliştiricilere bu sözlüğü öğretin.</span><span class=\"en-text\" style=\"display:none;\">Create a \"lexicon\" with your team. Choose one word for each concept and always use it. Teach this lexicon to new developers.</span></div>"
    },
    {
      "id": "argument-count",
      "title": {
        "en": "Argument Count",
        "tr": "Argüman Sayısı (Argument Count)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">İdeal: 0 argüman (niladic). Kabul edilebilir: 1 (monadic) veya 2 (dyadic). Kaçınılması gerekir: 3 (triadic). Kullanılmamalı: 3+ (polyadic). Çok argüman fonksiyonlar test edilmesi zor ve anlaşılması güçtür.</span><span class=\"en-text\" style=\"display:none;\">Ideal: 0 arguments (niladic). Acceptable: 1 (monadic) or 2 (dyadic). Should be avoided: 3 (triadic). Should not be used: 3+ (polyadic). Many-argument functions are hard to test and understand.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Çok fazla argüman</span><span class=\"en-text\" style=\"display:none;\">BAD — Too many arguments</span></span>\n<pre><span class=\"kw\">def</span> <span class=\"method\">createUser</span>(\n    firstName, lastName, email, phone,\n    address, city, country, postalCode,\n    isActive, isVerified, role\n):  <span class=\"comment\"># 11 argüman!</span>\n    ...</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Nesne ile gruplama</span><span class=\"en-text\" style=\"display:none;\">GOOD — Grouped into object</span></span>\n<pre><span class=\"kw\">def</span> <span class=\"method\">createUser</span>(userData):\n    <span class=\"comment\"># Tek argüman - bir nesne</span>\n    ...\n\n<span class=\"comment\"># Veya daha da iyi:</span>\n<span class=\"kw\">def</span> <span class=\"method\">createUser</span>(name, contact, address, status):\n    <span class=\"comment\"># 4 argüman - her biri bir nesne</span></pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">3+ argüman gördüğünüzde, bunları bir nesne içinde gruplayıp gruplayemeyeceğinizi düşünün. \"Bu argümanlar birlikte mi kullanılıyor?\" sorusunu sorun.</span><span class=\"en-text\" style=\"display:none;\">When you see 3+ arguments, consider if they can be grouped into an object. Ask: \"Are these arguments used together?\"</span></div>"
    },
    {
      "id": "argument-objects",
      "title": {
        "en": "Argument Objects",
        "tr": "Argüman Nesneleri (Argument Objects)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Birden fazla argüman bir kavramın parçasıysa, onları bir nesne içinde gruplayın. Bu hem argüman sayısını azaltır hem de kodun anlaşılırlığını artırır. Örneğin x, y koordinatları bir Point nesnesi olabilir.</span><span class=\"en-text\" style=\"display:none;\">When multiple arguments are part of a concept, group them into an object. This reduces argument count and improves code clarity. For example, x, y coordinates can be a Point object.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Ayrı koordinatlar</span><span class=\"en-text\" style=\"display:none;\">BAD — Separate coordinates</span></span>\n<pre><span class=\"kw\">def</span> <span class=\"method\">drawCircle</span>(centerX, centerY, radius,\n              colorR, colorG, colorB):\n    <span class=\"comment\"># 6 argüman - karmaşık!</span>\n    ...\n\n<span class=\"comment\"># Kullanım:</span>\ndrawCircle(<span class=\"field\">10</span>, <span class=\"field\">20</span>, <span class=\"field\">5</span>, <span class=\"field\">255</span>, <span class=\"field\">0</span>, <span class=\"field\">0</span>)\n<span class=\"comment\"># Hangisi x? Hangisi renk?</span></pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Kavramsal nesneler</span><span class=\"en-text\" style=\"display:none;\">GOOD — Conceptual objects</span></span>\n<pre><span class=\"kw\">def</span> <span class=\"method\">drawCircle</span>(center, radius, color):\n    <span class=\"comment\"># 3 argüman - her biri bir nesne</span>\n    ...\n\n<span class=\"comment\"># Kullanım:</span>\ndrawCircle(\n    Point(<span class=\"field\">10</span>, <span class=\"field\">20</span>),\n    Radius(<span class=\"field\">5</span>),\n    Color(<span class=\"field\">255</span>, <span class=\"field\">0</span>, <span class=\"field\">0</span>)\n)\n<span class=\"comment\"># Açık ve anlaşılır</span></pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Argümanlar birlikte geziyorsa (her zaman birlikte kullanılıyorsa), bir nesne yapın. Bu aynı zamanda validation mantığını da nesneye taşımanızı sağlar.</span><span class=\"en-text\" style=\"display:none;\">If arguments travel together (always used together), make them an object. This also allows you to move validation logic into the object.</span></div>"
    }
  ]
});
