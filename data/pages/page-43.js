window.PAGE({
  "id": "page-43",
  "page": 43,
  "pdf_page": 74,
  "chapter": {
    "num": 3,
    "en": "Functions",
    "tr": "Fonksiyonlar"
  },
  "section": {
    "en": "Fonksiyon Argümanları",
    "tr": "Fonksiyon Argümanları"
  },
  "title": {
    "en": "Argüman Nesneleri, Argüman Listeleri, Fiiller ve Anahtar Kelimeler",
    "tr": "Argüman Nesneleri, Argüman Listeleri, Fiiller ve Anahtar Kelimeler"
  },
  "blocks": [
    {
      "type": "heading",
      "level": 1,
      "en": "Argument Objects",
      "tr": "Argüman Nesneleri / Argument Objects",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "When a function seems to need more than two or three arguments, it is likely that some of those arguments ought to be wrapped into a class of their own. Consider, for example, the difference between the two following declarations:",
          "tr": "Bir fonksiyon iki veya üçten fazla argümana ihtiyaç duyuyorsa, bu argümanların bazılarının kendi sınıflarına sarılması gerektiğinin işaretidir. Örneğin, aşağıdaki iki bildirimi karşılaştırın:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "Circle makeCircle(double x, double y, double radius);\nCircle makeCircle(Point center, double radius);",
      "caption": {
        "en": "Argüman Nesnesi Karşılaştırması",
        "tr": "Argüman Nesnesi Karşılaştırması"
      }
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Reducing the number of arguments by creating objects out of them may seem like cheating, but it's not. When groups of variables are passed together, the way <code>x</code> and <code>y</code> are in the example above, they are likely part of a concept that deserves a name of its own.",
          "tr": "Nesneler oluşturarak argüman sayısını azaltmak hile gibi görünebilir, ama değildir. Değişken grupları birlikte geçiriliyorsa —yukarıdaki örnekteki <code>x</code> ve <code>y</code> gibi— büyük olasılıkla kendi adını hak eden bir kavramın parçasıdırlar.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Argument Lists",
      "tr": "Argüman Listeleri / Argument Lists",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Sometimes we want to pass a variable number of arguments into a function. Consider, for example, the <code>String.format</code> method:",
          "tr": "Bazen bir fonksiyona değişken sayıda argüman geçirmek isteriz. Örneğin, <code>String.format</code> metodunu ele alalım:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "String.format(\"%s worked %.2f hours.\", name, hours);",
      "caption": {
        "en": "String.format Örneği",
        "tr": "String.format Örneği"
      }
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "If the variable arguments are all treated identically, as they are in the example above, then they are equivalent to a single argument of type <code>List</code>. By that reasoning, <code>String.format</code> is actually dyadic. Indeed, the declaration of <code>String.format</code> as shown below is clearly dyadic.",
          "tr": "Eğer değişken argümanlar —yukarıdaki örnekte olduğu gibi— hepsi aynı şekilde işleniyorsa, bunlar <code>List</code> türünde tek bir argümana eşdeğerdir. Bu mantıkla <code>String.format</code> aslında ikili (dyadic) bir fonksiyondur. Gerçekten de aşağıdaki bildirim açıkça ikiliye işaret eder.",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "public String format(String format, Object... args)",
      "caption": {
        "en": "String.format Bildirimi",
        "tr": "String.format Bildirimi"
      }
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "So all the same rules apply. Functions that take variable arguments can be monads, dyads, or even triads. But it would be a mistake to give them more arguments than that.",
          "tr": "Dolayısıyla aynı kurallar geçerlidir. Değişken argüman alan fonksiyonlar tekli (monadic), ikili (dyadic), hatta üçlü (triadic) olabilir. Ancak bundan daha fazla argüman vermek hata olur.",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "void monad(Integer... args);\nvoid dyad(String name, Integer... args);\nvoid triad(String name, int count, Integer... args);",
      "caption": {
        "en": "Değişken Argümanlı Fonksiyon Türleri",
        "tr": "Değişken Argümanlı Fonksiyon Türleri"
      }
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Verbs and Keywords",
      "tr": "Fiiller ve Anahtar Kelimeler / Verbs and Keywords",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Choosing good names for a function can go a long way toward explaining the intent of the function and the order and intent of the arguments. In the case of a monad, the function and argument should form a very nice verb/noun pair. For example, <code>write(name)</code> is very evocative. Whatever this \"name\" thing is, it is being \"written.\" An even better name might be <code>writeField(name)</code>, which tells us that the \"name\" thing is a \"field.\"",
          "tr": "Bir fonksiyon için iyi isimler seçmek, fonksiyonun amacını ve argümanların sırasını ve niyetini açıklamada uzun bir yol kat eder. Tekli (monadic) bir fonksiyonda, fonksiyon ve argüman çok güzel bir fiil/isim çifti oluşturmalıdır. Örneğin, <code>write(name)</code> oldukça çağrışımlıdır. Bu \"isim\" neyse, \"yazılıyor\" denmektedir. Daha da iyi bir isim <code>writeField(name)</code> olabilir; bu bize \"isim\" denen şeyin bir \"alan\" (field) olduğunu söyler.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "This last is an example of the <em>keyword</em> form of a function name. Using this form we encode the names of the arguments into the function name. For example, <code>assertEquals</code> might be better written as <code>assertExpectedEqualsActual(expected, actual)</code>. This strongly mitigates the problem of having to remember the ordering of the arguments.",
          "tr": "Bu son örnek, fonksiyon isminin <em>anahtar kelime</em> (keyword) formuna bir örnektir. Bu formda argüman isimlerini fonksiyon isminin içine kodlarız. Örneğin, <code>assertEquals</code> yerine <code>assertExpectedEqualsActual(expected, actual)</code> yazmak, argüman sırasını hatırlama sorununu büyük ölçüde ortadan kaldırır.",
          "html": true
        }
      ]
    }
  ],
  "concepts": [
    {
      "id": "argument-objects",
      "title": {
        "en": "Argument Objects",
        "tr": "Argüman Nesneleri (Argument Objects)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Birlikte gezinen argümanlar muhtemelen bir kavramın parçasıdır ve kendi sınıflarına sarılmalıdır. Bu, argüman sayısını azaltır ve kodu daha okunabilir hale getirir.</span><span class=\"en-text\" style=\"display:none;\">Arguments that travel together are likely part of a concept and should be wrapped into their own class. This reduces argument count and makes code more readable.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Çok fazla ilkel argüman</span><span class=\"en-text\" style=\"display:none;\">BAD — Too many primitive arguments</span></span>\n<pre><span class=\"kw\">function</span> <span class=\"method\">createUser</span>(firstName, lastName, email, age, city, country) {\n    <span class=\"comment\">// 6 argüman - hangi sırada?</span>\n    <span class=\"kw\">return</span> { firstName, lastName, email, age, city, country };\n}\n\n<span class=\"method\">createUser</span>(<span class=\"str\">\"Ali\"</span>, <span class=\"str\">\"Yılmaz\"</span>, <span class=\"str\">\"ali@mail.com\"</span>, <span class=\"field\">28</span>, <span class=\"str\">\"İstanbul\"</span>, <span class=\"str\">\"TR\"</span>);</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Nesnelerle gruplandırılmış</span><span class=\"en-text\" style=\"display:none;\">GOOD — Grouped with objects</span></span>\n<pre><span class=\"kw\">function</span> <span class=\"method\">createUser</span>(personalInfo, address) {\n    <span class=\"kw\">return</span> { ...personalInfo, ...address };\n}\n\n<span class=\"kw\">const</span> personalInfo = { firstName: <span class=\"str\">\"Ali\"</span>, lastName: <span class=\"str\">\"Yılmaz\"</span>, email: <span class=\"str\">\"ali@mail.com\"</span>, age: <span class=\"field\">28</span> };\n<span class=\"kw\">const</span> address = { city: <span class=\"str\">\"İstanbul\"</span>, country: <span class=\"str\">\"TR\"</span> };\n<span class=\"method\">createUser</span>(personalInfo, address);</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">3'ten fazla argüman gördüğünüzde kendinize sorun: \"Bu argümanlar birlikte bir kavram mı oluşturuyor?\" Eğer öyleyse, onları bir nesneye sarın.</span><span class=\"en-text\" style=\"display:none;\">When you see more than 3 arguments, ask yourself: \"Do these arguments form a concept together?\" If so, wrap them into an object.</span></div>"
    },
    {
      "id": "keyword-form",
      "title": {
        "en": "Keyword Form",
        "tr": "Anahtar Kelime Formu (Keyword Form)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Fonksiyon isminin içine argüman isimlerini kodlamak, argüman sırasını hatırlama sorununu ortadan kaldırır. Bu özellikle çok argümanlı fonksiyonlarda faydalıdır.</span><span class=\"en-text\" style=\"display:none;\">Encoding argument names into the function name eliminates the problem of remembering argument order. This is especially useful for multi-argument functions.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Argüman sırası belirsiz</span><span class=\"en-text\" style=\"display:none;\">BAD — Ambiguous argument order</span></span>\n<pre><span class=\"kw\">def</span> <span class=\"method\">copy</span>(source, destination):\n    shutil.<span class=\"method\">copy</span>(source, destination)\n\n<span class=\"comment\"># Hangisi kaynak, hangisi hedef?</span>\n<span class=\"method\">copy</span>(<span class=\"str\">\"/tmp/a.txt\"</span>, <span class=\"str\">\"/home/b.txt\"</span>)</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Argümanlar isimde kodlanmış</span><span class=\"en-text\" style=\"display:none;\">GOOD — Arguments encoded in name</span></span>\n<pre><span class=\"kw\">def</span> <span class=\"method\">copySourceToDestination</span>(source, destination):\n    shutil.<span class=\"method\">copy</span>(source, destination)\n\n<span class=\"comment\"># Sıra açık!</span>\n<span class=\"method\">copySourceToDestination</span>(<span class=\"str\">\"/tmp/a.txt\"</span>, <span class=\"str\">\"/home/b.txt\"</span>)</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Birden fazla argümanlı fonksiyonlarda, argüman sırasının kafa karıştırdığı yerlerde anahtar kelime formunu kullanın. <code class=\"inline\">assertEquals</code> yerine <code class=\"inline\">assertExpectedEqualsActual</code> çok daha açıktır.</span><span class=\"en-text\" style=\"display:none;\">For multi-argument functions where argument order is confusing, use the keyword form. <code class=\"inline\">assertExpectedEqualsActual</code> is much clearer than <code class=\"inline\">assertEquals</code>.</span></div>"
    },
    {
      "id": "variable-arguments",
      "title": {
        "en": "Variable Arguments",
        "tr": "Değişken Argümanlar (Variable Arguments)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Değişken sayıda argüman alan fonksiyonlar, aynı şekilde işlenen argümanlar tek bir liste olarak değerlendirilerek sınıflandırılır. Böylece argüman sayısı kuralları geçerliliğini korur.</span><span class=\"en-text\" style=\"display:none;\">Functions with variable arguments are classified by treating identically-processed arguments as a single list. This way, argument count rules still apply.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Sabit sayıda argüman zorlaması</span><span class=\"en-text\" style=\"display:none;\">BAD — Forcing fixed argument count</span></span>\n<pre><span class=\"kw\">function</span> <span class=\"method\">logMessage</span>(level, msg1, msg2, msg3, msg4) {\n    <span class=\"comment\">// Kullanılmayan argümanlar null geçilir</span>\n    console.<span class=\"method\">log</span>(level, msg1, msg2 || <span class=\"str\">\"\"</span>, msg3 || <span class=\"str\">\"\"</span>, msg4 || <span class=\"str\">\"\"</span>);\n}\n\n<span class=\"method\">logMessage</span>(<span class=\"str\">\"ERROR\"</span>, <span class=\"str\">\"Disk dolu\"</span>, <span class=\"kw\">null</span>, <span class=\"kw\">null</span>, <span class=\"kw\">null</span>);</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Rest parametresi ile</span><span class=\"en-text\" style=\"display:none;\">GOOD — Using rest parameter</span></span>\n<pre><span class=\"kw\">function</span> <span class=\"method\">logMessage</span>(level, ...messages) {\n    <span class=\"comment\">// level + messages = ikili (dyadic)</span>\n    console.<span class=\"method\">log</span>(level, messages.<span class=\"method\">join</span>(<span class=\"str\">\" \"</span>));\n}\n\n<span class=\"method\">logMessage</span>(<span class=\"str\">\"ERROR\"</span>, <span class=\"str\">\"Disk dolu\"</span>);\n<span class=\"method\">logMessage</span>(<span class=\"str\">\"WARN\"</span>, <span class=\"str\">\"Bellek\"</span>, <span class=\"str\">\"azalıyor\"</span>, <span class=\"str\">\"dikkat!\"</span>);</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Değişken argümanlar kullanırken bile toplam mantıksal argüman sayısını 3'ün altında tutmaya çalışın. Rest parametresi tek bir liste argümanı olarak sayılır.</span><span class=\"en-text\" style=\"display:none;\">Even when using variable arguments, try to keep the total logical argument count below 3. A rest parameter counts as a single list argument.</span></div>"
    }
  ]
});
