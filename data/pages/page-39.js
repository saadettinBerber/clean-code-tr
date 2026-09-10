window.PAGE({
  "id": "page-39",
  "page": 39,
  "pdf_page": 70,
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
    "en": "Common Monadic Forms, Flag Arguments, Dyads",
    "tr": "Sık Görülen Tekli Formlar, Bayrak Argümanları, İkililer"
  },
  "blocks": [
    {
      "type": "heading",
      "level": 1,
      "en": "Common Monadic Forms",
      "tr": "Sık Görülen Tekli Formlar / Common Monadic Forms",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "There are two very common reasons to pass a single argument into a function. You may be asking a question about that argument, as in <code>boolean fileExists(String fileName)</code>. Or you may be operating on that argument, transforming it into something else and returning it, as in <code>InputStream fileOpen(String fileName)</code>.",
          "tr": "Bir argümanı bir fonksiyona geçirmek için iki çok yaygın neden vardır. Argüman hakkında bir soru soruyor olabilirsiniz, örneğin: <code>boolean fileExists(String fileName)</code>. Ya da argüman üzerinde bir işlem yapıyor, onu başka bir şeye dönüştürüp geri döndürüyor olabilirsiniz, örneğin: <code>InputStream fileOpen(String fileName)</code>.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Now try to use a single-argument function outside of these two cases and you should think carefully. For example, a function that returns void and takes a single argument might be creating a side effect on that argument. In this case, the function name should clearly indicate this side effect.",
          "tr": "Bu iki kullanım dışında, tek argümanlı bir fonksiyon kullanmaya çalışmak dikkatli düşünmeyi gerektirir. Örneğin, bir <code>void</code> dönen ve tek argüman alan bir fonksiyon, o argüman üzerinde yan etki (side effect) yaratıyor olabilir. Bu durumda fonksiyon ismi bu yan etkiyi açıkça belirtmelidir.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Flag Arguments",
      "tr": "Bayrak Argümanları / Flag Arguments",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Flag arguments are ugly. Passing a boolean into a function loudly proclaims that this function does more than one thing. It does one thing if the flag is true and another if the flag is false!",
          "tr": "Bayrak argümanları (flag arguments) çirkindir. Bir fonksiyona boolean değer geçirmek, fonksiyonun birden fazla şey yaptığını yüksek sesle ilan eder. Doğruysa bir şey yapar, yanlışsa başka bir şey yapar!",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Consider the <code>render(boolean isSuite)</code> function in Listing 3-7. This function does different things depending on whether the <code>isSuite</code> value is true or false. This function should be split into two functions: <code>renderForSuite()</code> and <code>renderForSingleTest()</code>.",
          "tr": "Liste 3-7'deki <code>render(boolean isSuite)</code> fonksiyonunu ele alalım. Bu fonksiyon, <code>isSuite</code> değeri true olduğunda farklı, false olduğunda farklı bir şey yapar. Bu fonksiyon iki fonksiyona bölünmelidir: <code>renderForSuite()</code> ve <code>renderForSingleTest()</code>.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Yes, these two functions might duplicate some code. But this duplication is the price of better readability and a cleaner API. Avoid flag arguments!",
          "tr": "Evet, bu iki fonksiyonun bazı kodları tekrar etmesi gerekebilir. Ancak bu tekrar, daha iyi okunabilirlik ve daha temiz bir API'nin bedelidir. Bayrak argümanlarından kaçının!",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Dyadic Functions",
      "tr": "İkililer / Dyadic Functions",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "A function with two arguments is harder to understand than a monadic function. There is a short pause in understanding the two inputs. For example: <code>InputStream fileOpen(String fileName, String mode)</code> vs <code>InputStream fileOpen(String fileName)</code>.",
          "tr": "İki argümanlı bir fonksiyon, tek argümanlı bir fonksiyondan daha zor anlaşılır. İki girdiyi anlamak için kısa bir duraksama vardır. Örneğin: <code>InputStream fileOpen(String fileName, String mode)</code> vs <code>InputStream fileOpen(String fileName)</code>.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Using dyads is not an evil practice, but you should be aware of the cost and ask whether there is a way to convert them into monads. For example, the <code>writeField(String name, String value)</code> method can be made monadic by writing it as <code>writeField(Field field)</code>.",
          "tr": "İkililer kullanmak kötü bir uygulama değildir, ancak maliyetinin farkında olmalı ve bunları ikiliye dönüştürmenin bir yolu olup olmadığını sormalısınız. Örneğin, <code>writeField(String name, String value)</code> metodu, <code>writeField(Field field)</code> şeklinde yazılarak tekli hale getirilebilir.",
          "html": true
        }
      ]
    }
  ],
  "concepts": [
    {
      "id": "monadic-forms",
      "title": {
        "en": "Monadic Forms",
        "tr": "Tekli Formlar (Monadic Forms)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Tek argümanlı fonksiyonların iki yaygın formu vardır: (1) Argüman hakkında soru soran (boolean fileExists), (2) Argümanı dönüştürüp yeni değer döndüren (InputStream fileOpen).</span><span class=\"en-text\">Single-argument functions have two common forms: (1) Asking a question about the argument (boolean fileExists), (2) Transforming the argument and returning a new value (InputStream fileOpen).</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Void + tek argüman (yan etki)</span><span class=\"en-text\">BAD — Void + single argument (side effect)</span></span>\n<pre><span class=\"kw\">void</span> <span class=\"method\">process</span>(String data) {\n    <span class=\"comment\">// Ne yapıyor? Belirsiz!</span>\n    saveToFile(data);\n}</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Açık isim veya soru</span><span class=\"en-text\">GOOD — Clear name or question</span></span>\n<pre><span class=\"kw\">boolean</span> <span class=\"method\">isValidEmail</span>(String email);\n<span class=\"type\">Report</span> <span class=\"method\">generateReportFrom</span>(Data data);\n<span class=\"kw\">void</span> <span class=\"method\">saveToDatabase</span>(User user); <span class=\"comment\">// Void ise yan etki açık</span></pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">Tek argümanlı void fonksiyonlardan kaçının. Ya bir değer döndürün (dönüşüm) ya da isim yan etkiyi açıkça belirtsin.</span><span class=\"en-text\">Avoid single-argument void functions. Either return a value (transformation) or make the name clearly indicate the side effect.</span></div>"
    },
    {
      "id": "flag-arguments",
      "title": {
        "en": "Flag Arguments",
        "tr": "Bayrak Argümanları (Flag Arguments)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Boolean argümanlar fonksiyonun birden fazla şey yaptığını gösterir. Doğruysa bir şey, yanlışsa başka bir şey yapar. Bu iki ayrı fonksiyon olmalıdır.</span><span class=\"en-text\">Boolean arguments indicate a function does more than one thing. Does one thing if true, another if false. These should be two separate functions.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Bayrak argümanı</span><span class=\"en-text\">BAD — Flag argument</span></span>\n<pre><span class=\"kw\">def</span> <span class=\"method\">render</span>(data, isSuite):\n    <span class=\"kw\">if</span> isSuite:\n        <span class=\"method\">renderSuite</span>(data)\n    <span class=\"kw\">else</span>:\n        <span class=\"method\">renderSingle</span>(data)\n\n<span class=\"comment\"># Kullanım:</span>\nrender(data, <span class=\"kw\">True</span>)  <span class=\"comment\"># True ne anlama geliyor?</span></pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Ayrı fonksiyonlar</span><span class=\"en-text\">GOOD — Separate functions</span></span>\n<pre><span class=\"kw\">def</span> <span class=\"method\">renderForSuite</span>(data):\n    <span class=\"method\">renderSuite</span>(data)\n\n<span class=\"kw\">def</span> <span class=\"method\">renderForSingleTest</span>(data):\n    <span class=\"method\">renderSingle</span>(data)\n\n<span class=\"comment\"># Kullanım:</span>\nrenderForSuite(data)      <span class=\"comment\"># Açık!</span>\nrenderForSingleTest(data) <span class=\"comment\"># Açık!</span></pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">Boolean parametre gördüğünüzde alarm çalması gerekir. \"Bu fonksiyon iki şey mi yapıyor?\" diye sorun. Eğer öyleyse, ikiye bölün.</span><span class=\"en-text\">When you see a boolean parameter, alarm bells should ring. Ask: \"Is this function doing two things?\" If yes, split it in two.</span></div>"
    },
    {
      "id": "dyadic-functions",
      "title": {
        "en": "Dyadic Functions",
        "tr": "İkili Fonksiyonlar (Dyadic Functions)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">İki argümanlı fonksiyonlar tekliye göre daha zor anlaşılır. Argüman sırası hatırlanmalıdır. Mümkünse ikilileri tekliye dönüştürün.</span><span class=\"en-text\">Two-argument functions are harder to understand than monads. Argument order must be remembered. Convert dyads to monads when possible.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Ayrı argümanlar</span><span class=\"en-text\">BAD — Separate arguments</span></span>\n<pre><span class=\"kw\">def</span> <span class=\"method\">writeField</span>(name, value):\n    <span class=\"comment\"># Hangisi önce? Hangisi sonra?</span>\n    ...\n\nwriteField(<span class=\"str\">\"email\"</span>, <span class=\"str\">\"user@test.com\"</span>)\nwriteField(<span class=\"str\">\"user@test.com\"</span>, <span class=\"str\">\"email\"</span>)  <span class=\"comment\"># Hata!</span></pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Nesne olarak gruplama</span><span class=\"en-text\">GOOD — Grouped as object</span></span>\n<pre><span class=\"kw\">class</span> <span class=\"type\">Field</span>:\n    <span class=\"kw\">def</span> <span class=\"method\">__init__</span>(self, name, value):\n        self.name = name\n        self.value = value\n\n<span class=\"kw\">def</span> <span class=\"method\">writeField</span>(field):\n    <span class=\"comment\"># Tek argüman - nesne</span>\n    ...\n\nwriteField(Field(<span class=\"str\">\"email\"</span>, <span class=\"str\">\"user@test.com\"</span>))</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">Argümanlar birlikte geziyorsa (her zaman birlikte kullanılıyorsa), bir nesne yapın. \"Bu iki argüman birbirine ait mi?\" sorusunu sorun.</span><span class=\"en-text\">When arguments travel together (always used together), make them an object. Ask: \"Do these two arguments belong together?\"</span></div>"
    }
  ]
});
