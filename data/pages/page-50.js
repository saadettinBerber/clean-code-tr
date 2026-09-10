window.PAGE({
  "id": "page-50",
  "page": 50,
  "pdf_page": 81,
  "chapter": {
    "num": 3,
    "en": "Functions",
    "tr": "Fonksiyonlar"
  },
  "section": {
    "en": "SetupTeardownIncluder (devam)",
    "tr": "SetupTeardownIncluder (devam)"
  },
  "title": {
    "en": "SetupTeardownIncluder (devam)",
    "tr": "SetupTeardownIncluder (devam)"
  },
  "blocks": [
    {
      "type": "heading",
      "level": 1,
      "en": "SetupTeardownIncluder (cont.)",
      "tr": "SetupTeardownIncluder (devam) / SetupTeardownIncluder (cont.)",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "The continuation of the code contains the private methods that hold the actual business logic. The <code>render(boolean isSuite)</code> method is the main entry point and coordinates the entire workflow at a high level. Notice that this method consists of only a few lines and clearly expresses what it does.",
          "tr": "Kodun devamında, sınıfın asıl iş mantığını içeren özel (private) metotlar yer almaktadır. <code>render(boolean isSuite)</code> metodu, sınıfın ana giriş noktasıdır ve tüm iş akışını üst seviyede koordine eder. Dikkat ederseniz, bu metot yalnızca birkaç satırdan oluşur ve ne yaptığını açıkça ifade eder.",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "private String render(boolean isSuite) throws Exception {\n    this.isSuite = isSuite;\n    if (isTestPage())\n        includeSetupAndTeardownPages();\n    return pageData.getHtml();\n}\n\nprivate boolean isTestPage() throws Exception {\n    return pageData.hasAttribute(\"Test\");\n}\n\nprivate void includeSetupAndTeardownPages() throws Exception {\n    includeSetupPages();\n    includePageContent();\n    includeTeardownPages();\n    updatePageContent();\n}\n\nprivate void includeSetupPages() throws Exception {\n    if (isSuite)\n        includeSuiteSetupPage();\n    includeSetupPage();\n}\n\nprivate void includeSuiteSetupPage() throws Exception {\n    include(SuiteResponder.SUITE_SETUP_NAME, \"-setup\");\n}\n\nprivate void includeSetupPage() throws Exception {\n    include(\"SetUp\", \"-setup\");\n}\n\nprivate void includePageContent() throws Exception {\n    newPageContent.append(pageData.getContent());\n}\n\nprivate void includeTeardownPages() throws Exception {\n    includeTeardownPage();\n    if (isSuite)\n        includeSuiteTeardownPage();\n}\n\nprivate void includeTeardownPage() throws Exception {\n    include(\"TearDown\", \"-teardown\");\n}\n\nprivate void includeSuiteTeardownPage() throws Exception {\n    include(SuiteResponder.SUITE_TEARDOWN_NAME, \"-teardown\");\n}",
      "caption": {
        "en": "Listing 3-7 (devam) / SetupTeardownIncluder.java (devam)",
        "tr": "Listing 3-7 (devam) / SetupTeardownIncluder.java (devam)"
      }
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Each of these methods does only one thing. Each method has a single responsibility consistent with its name: <code>includeSetupPages()</code> only includes setup pages, <code>includeTeardownPages()</code> only includes teardown pages. This is a perfect application of the Single Responsibility principle at the method level.",
          "tr": "Bu metotların her biri yalnızca tek bir iş yapmaktadır. Her metot, adıyla uyumlu tek bir sorumluluğa sahiptir: <code>includeSetupPages()</code> yalnızca kurulum sayfalarını ekler, <code>includeTeardownPages()</code> yalnızca temizlik sayfalarını ekler. Bu, Tek Sorumluluk (Single Responsibility) ilkesinin metot seviyesindeki mükemmel bir uygulamasıdır.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Also notice how the Stepdown Rule is followed: the code reads top-down like a newspaper article. Higher-level methods come first, details unfold downward. A hierarchy of abstraction forms: <code>render</code> → <code>includeSetupAndTeardownPages</code> → <code>includeSetupPages</code> → <code>includeSuiteSetupPage</code>.",
          "tr": "Ayrıca Basamak Kuralına (Stepdown Rule) da uyulduğuna dikkat edin: kod yukarıdan aşağıya bir gazete makalesi gibi okunabilir. Üst seviye metotlar önce gelir, ayrıntılar aşağıya doğru açılır. <code>render</code> → <code>includeSetupAndTeardownPages</code> → <code>includeSetupPages</code> → <code>includeSuiteSetupPage</code> şeklinde bir soyutlama hiyerarşisi oluşur.",
          "html": true
        }
      ]
    }
  ],
  "concepts": [
    {
      "id": "single-responsibility-method",
      "title": {
        "en": "Method-Level Single Responsibility",
        "tr": "Metot Seviyesinde Tek Sorumluluk (Method-Level SRP)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Tek Sorumluluk İlkesi (SRP) sadece sınıflar için değil, metotlar için de geçerlidir. Her metot yalnızca bir şey yapmalı ve bunu adıyla açıkça ifade etmelidir. Bir metodun ne yaptığını özetlemek için \"ve\" kullanıyorsanız, o metot muhtemelen bölünmelidir.</span><span class=\"en-text\" style=\"display:none;\">The Single Responsibility Principle (SRP) applies not only to classes but also to methods. Every method should do only one thing and express it clearly through its name. If you need the word \"and\" to summarize what a method does, it probably needs to be split.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Birden fazla sorumluluk</span><span class=\"en-text\" style=\"display:none;\">BAD — Multiple responsibilities</span></span>\n<pre><span class=\"kw\">function</span> <span class=\"method\">processOrder</span>(order) {\n    <span class=\"comment\">// Doğrulama</span>\n    <span class=\"kw\">if</span> (!order.items || order.items.length === 0)\n        <span class=\"kw\">throw new</span> <span class=\"type\">Error</span>(<span class=\"str\">\"Empty order\"</span>);\n    <span class=\"comment\">// Hesaplama</span>\n    <span class=\"kw\">let</span> total = 0;\n    <span class=\"kw\">for</span> (<span class=\"kw\">const</span> item <span class=\"kw\">of</span> order.items)\n        total += item.price * item.qty;\n    <span class=\"comment\">// Veritabanı</span>\n    db.<span class=\"method\">save</span>({ ...order, total });\n    <span class=\"comment\">// E-posta</span>\n    <span class=\"method\">sendConfirmation</span>(order.email, total);\n}</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Her metot tek iş</span><span class=\"en-text\" style=\"display:none;\">GOOD — Each method does one thing</span></span>\n<pre><span class=\"kw\">function</span> <span class=\"method\">processOrder</span>(order) {\n    <span class=\"method\">validateOrder</span>(order);\n    <span class=\"kw\">const</span> total = <span class=\"method\">calculateTotal</span>(order.items);\n    <span class=\"method\">persistOrder</span>(order, total);\n    <span class=\"method\">notifyCustomer</span>(order.email, total);\n}\n\n<span class=\"kw\">function</span> <span class=\"method\">validateOrder</span>(order) { <span class=\"comment\">/* ... */</span> }\n<span class=\"kw\">function</span> <span class=\"method\">calculateTotal</span>(items) { <span class=\"comment\">/* ... */</span> }\n<span class=\"kw\">function</span> <span class=\"method\">persistOrder</span>(order, total) { <span class=\"comment\">/* ... */</span> }\n<span class=\"kw\">function</span> <span class=\"method\">notifyCustomer</span>(email, total) { <span class=\"comment\">/* ... */</span> }</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Bir metotta yorum başlıkları görüyorsanız (// Doğrulama, // Hesaplama, // Kaydet), her bölüm ayrı bir metot olmalıdır. Yorum başlığı, \"burada yeni bir sorumluluk başlıyor\" demektir.</span><span class=\"en-text\" style=\"display:none;\">If you see comment headers in a method (// Validate, // Calculate, // Save), each section should be a separate method. A comment header means \"a new responsibility starts here.\"</span></div>"
    },
    {
      "id": "stepdown-rule",
      "title": {
        "en": "Stepdown Rule",
        "tr": "Basamak Kuralı (Stepdown Rule)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Basamak Kuralı (Stepdown Rule), kodu bir gazete makalesi gibi organize etmeyi önerir: önce üst seviye özet, sonra detaylar. Her fonksiyonun altındaki fonksiyonlar, bir soyutlama seviyesi daha düşük olmalıdır. Okuyucu yukarıdan aşağıya inerken giderek daha fazla detayla karşılaşır.</span><span class=\"en-text\" style=\"display:none;\">The Stepdown Rule suggests organizing code like a newspaper article: first a high-level summary, then details. Functions below each function should be one level of abstraction lower. As the reader moves top-down, they encounter progressively more detail.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Karışık soyutlama seviyeleri</span><span class=\"en-text\" style=\"display:none;\">BAD — Mixed abstraction levels</span></span>\n<pre><span class=\"kw\">class</span> <span class=\"type\">ReportGenerator</span> {\n    <span class=\"comment\">// Düşük seviye detay en üstte</span>\n    <span class=\"kw\">private</span> <span class=\"type\">String</span> <span class=\"method\">formatCurrency</span>(<span class=\"kw\">double</span> v) {\n        <span class=\"kw\">return</span> <span class=\"type\">String</span>.<span class=\"method\">format</span>(<span class=\"str\">\"$%.2f\"</span>, v);\n    }\n    <span class=\"comment\">// Yüksek seviye metot altta</span>\n    <span class=\"kw\">public</span> <span class=\"type\">Report</span> <span class=\"method\">generate</span>() { ... }\n    <span class=\"comment\">// Orta seviye arada</span>\n    <span class=\"kw\">private</span> <span class=\"type\">List</span> <span class=\"method\">fetchData</span>() { ... }\n}</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Yukarıdan aşağıya soyutlama</span><span class=\"en-text\" style=\"display:none;\">GOOD — Top-down abstraction</span></span>\n<pre><span class=\"kw\">class</span> <span class=\"type\">ReportGenerator</span> {\n    <span class=\"comment\">// Seviye 1: En yüksek soyutlama</span>\n    <span class=\"kw\">public</span> <span class=\"type\">Report</span> <span class=\"method\">generate</span>() {\n        <span class=\"type\">List</span> data = <span class=\"method\">fetchData</span>();\n        <span class=\"type\">Table</span> table = <span class=\"method\">buildTable</span>(data);\n        <span class=\"kw\">return</span> <span class=\"method\">formatReport</span>(table);\n    }\n    <span class=\"comment\">// Seviye 2: Orta soyutlama</span>\n    <span class=\"kw\">private</span> <span class=\"type\">List</span> <span class=\"method\">fetchData</span>() { ... }\n    <span class=\"kw\">private</span> <span class=\"type\">Table</span> <span class=\"method\">buildTable</span>(...) { ... }\n    <span class=\"kw\">private</span> <span class=\"type\">Report</span> <span class=\"method\">formatReport</span>(...) { ... }\n    <span class=\"comment\">// Seviye 3: Düşük seviye detay</span>\n    <span class=\"kw\">private</span> <span class=\"type\">String</span> <span class=\"method\">formatCurrency</span>(...) { ... }\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Dosyanızı açtığınızda ilk gördüğünüz metot, \"bu sınıf ne yapıyor?\" sorusunun cevabı olmalıdır. Detaylar aşağıda olsun — bir gazete makalesinin manşetinden gövdeye inmesi gibi.</span><span class=\"en-text\" style=\"display:none;\">The first method you see when opening a file should answer \"what does this class do?\" Details come below — like going from a newspaper headline to the body text.</span></div>"
    },
    {
      "id": "composed-method",
      "title": {
        "en": "Composed Method",
        "tr": "Oluşturulmuş Metot (Composed Method)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Oluşturulmuş Metot (Composed Method) deseni, bir metodu yalnızca diğer metotlara yapılan çağrılardan oluşturma tekniğidir. <code class=\"inline\">includeSetupAndTeardownPages()</code> bunun harika bir örneğidir: kendi içinde herhangi bir düşük seviye iş yapmaz, sadece diğer metotları doğru sırayla çağırır.</span><span class=\"en-text\" style=\"display:none;\">The Composed Method pattern is a technique of building a method entirely from calls to other methods. <code class=\"inline\">includeSetupAndTeardownPages()</code> is a great example: it doesn't do any low-level work itself, it just calls other methods in the right order.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Tek monolitik metot</span><span class=\"en-text\" style=\"display:none;\">BAD — Single monolithic method</span></span>\n<pre><span class=\"kw\">def</span> <span class=\"method\">deploy</span>(app):\n    <span class=\"comment\"># 50+ satır: build, test, package, upload,</span>\n    <span class=\"comment\"># verify, notify... hepsi tek metotta</span>\n    subprocess.<span class=\"method\">run</span>([<span class=\"str\">\"npm\"</span>, <span class=\"str\">\"run\"</span>, <span class=\"str\">\"build\"</span>])\n    subprocess.<span class=\"method\">run</span>([<span class=\"str\">\"npm\"</span>, <span class=\"str\">\"test\"</span>])\n    <span class=\"comment\"># ... 40 satır daha</span></pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Oluşturulmuş metot</span><span class=\"en-text\" style=\"display:none;\">GOOD — Composed method</span></span>\n<pre><span class=\"kw\">def</span> <span class=\"method\">deploy</span>(app):\n    <span class=\"method\">build_application</span>(app)\n    <span class=\"method\">run_tests</span>(app)\n    <span class=\"method\">create_package</span>(app)\n    <span class=\"method\">upload_to_server</span>(app)\n    <span class=\"method\">verify_deployment</span>(app)\n    <span class=\"method\">notify_team</span>(app)</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Üst seviye bir metot \"ne yapılacağını\" anlatmalı, \"nasıl yapılacağını\" değil. <code class=\"inline\">includeSetupAndTeardownPages</code> okuyucuya tam olarak ne olduğunu söyler — detaylar merak edenler alt metotlara inebilir.</span><span class=\"en-text\" style=\"display:none;\">A high-level method should tell \"what\" to do, not \"how\" to do it. <code class=\"inline\">includeSetupAndTeardownPages</code> tells the reader exactly what happens — those curious about details can drill into the sub-methods.</span></div>"
    }
  ]
});
