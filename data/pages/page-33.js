window.PAGE({
  "id": "page-33",
  "page": 33,
  "pdf_page": 64,
  "chapter": {
    "num": 3,
    "en": "Functions",
    "tr": "Fonksiyonlar"
  },
  "section": {
    "en": "Küçük Olmalı!",
    "tr": "Küçük Olmalı!"
  },
  "title": {
    "en": "Blocks and Indenting",
    "tr": "Bloklar ve Girinti"
  },
  "blocks": [
    {
      "type": "para",
      "sentences": [
        {
          "en": "How short should your functions be? They should usually be shorter than Listing 3-2! Indeed, Listing 3-2 should really be shortened to Listing 3-3.",
          "tr": "Fonksiyonlarınız ne kadar kısa olmalıdır? Genellikle Listing 3-2'den daha kısa olmalıdır! Gerçekten de, Listing 3-2 gerçekten Listing 3-3'e kısaltılmalıdır.",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "public static String renderPageWithSetupsAndTeardowns(\n    PageData pageData, boolean isSuite) throws Exception {\n  if (isTestPage(pageData))\n    includeSetupAndTeardownPages(pageData, isSuite);\n  return pageData.getHtml();\n}",
      "caption": {
        "en": "Listing 3-3 / HtmlUtil.java (re-refactored)",
        "tr": "Listing 3-3 / HtmlUtil.java (re-refactored)"
      }
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Blocks and Indenting",
      "tr": "Bloklar ve Girinti / Blocks and Indenting",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "This implies that the blocks within <code>if</code> statements, <code>else</code> statements, <code>while</code> statements, and so on should be one line long. Probably that line should be a function call. Not only does this keep the enclosing function small, but it also adds documentary value because the function called within the block can have a nicely descriptive name.",
          "tr": "Bu, <code>if</code> ifadeleri, <code>else</code> ifadeleri, <code>while</code> ifadeleri ve benzerleri içindeki blokların bir satır uzunluğunda olması gerektiği anlamına gelir. Muhtemelen bu satır bir fonksiyon çağrısı olmalıdır. Bu, sadece fonksiyonu küçük tutmakla kalmaz, ayrıca blok içinde çağrılan fonksiyonun güzel bir açıklayıcı isme sahip olması nedeniyle belgesel değer de katar.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "This also implies that functions should not be large enough to hold nested structures. Therefore, the indent level of a function should not be greater than one or two. This, of course, makes the functions easier to read and understand.",
          "tr": "Bu aynı zamanda fonksiyonların iç içe yapıları (nested structures) tutacak kadar büyük olmaması gerektiği anlamına da gelir. Bu nedenle, bir fonksiyonun girinti seviyesi (indent level) bir veya ikiyi geçmemelidir. Bu, elbette fonksiyonların okunmasını ve anlaşılmasını kolaylaştırır.",
          "html": true
        }
      ]
    }
  ],
  "concepts": [
    {
      "id": "blocks-indenting",
      "title": {
        "en": "Blocks and Indenting",
        "tr": "Bloklar ve Girinti (Blocks and Indenting)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\"><code class=\"inline\">if</code>, <code class=\"inline\">while</code>, <code class=\"inline\">for</code> gibi bloklar bir satır olmalıdır - bu satır genellikle bir fonksiyon çağrısıdır. Bu kural, fonksiyonların küçük kalmasını sağlar ve okunabilirliği artırır. Ayrıca fonksiyonun girinti seviyesi 1-2'yi geçmemelidir.</span><span class=\"en-text\"><code class=\"inline\">if</code>, <code class=\"inline\">while</code>, <code class=\"inline\">for</code> blocks should be one line - usually a function call. This rule keeps functions small and improves readability. Also, function indent level should not exceed 1-2.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Çok satırlı bloklar</span><span class=\"en-text\">BAD — Multi-line blocks</span></span>\n<pre><span class=\"kw\">if</span> (user.isActive()) {\n    <span class=\"type\">List</span> permissions = <span class=\"type\">ArrayList</span>();\n    <span class=\"kw\">for</span> (<span class=\"type\">Role</span> role : user.getRoles()) {\n        <span class=\"kw\">if</span> (role.hasPermission(<span class=\"str\">\"READ\"</span>)) {\n            permissions.add(role.getName());\n        }\n    }\n    <span class=\"kw\">return</span> permissions;\n}</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Tek satırlı bloklar</span><span class=\"en-text\">GOOD — Single-line blocks</span></span>\n<pre><span class=\"kw\">if</span> (user.isActive())\n    <span class=\"kw\">return</span> extractReadPermissions(user.getRoles());\n\n<span class=\"kw\">private</span> <span class=\"type\">List</span> <span class=\"method\">extractReadPermissions</span>(<span class=\"type\">List</span>&lt;<span class=\"type\">Role</span>&gt; roles) {\n    <span class=\"kw\">return</span> roles.stream()\n        .filter(<span class=\"str\">r</span> -&gt; r.hasPermission(<span class=\"str\">\"READ\"</span>))\n        .map(<span class=\"str\">r</span> -&gt; r.getName())\n        .collect(<span class=\"method\">toList</span>());\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">Blok içinde birden fazla satır varsa, o kodu hemen bir fonksiyona çıkarın. İsimlendirmesi de önemlidir - ne yaptığını anlatan açıklayıcı bir isim seçin.</span><span class=\"en-text\">If a block has multiple lines, extract that code into a function immediately. Naming is also important - choose a descriptive name that explains what it does.</span></div>"
    },
    {
      "id": "nested-structures",
      "title": {
        "en": "Nested Structures",
        "tr": "İç İçe Yapılar (Nested Structures)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Fonksiyonlardaki aşırı iç içe geçme (over-nesting), kodun okunmasını ve anlaşılmasını zorlaştırır. Her seviye girinti, okuyucunun zihinsel yükünü artırır. Martin, fonksiyon girinti seviyesinin 1-2'yi geçmemesi gerektiğini söyler. Daha derin iç içe geçmeler, fonksiyonun bölünmesi gerektiğinin işaretidir.</span><span class=\"en-text\">Excessive nesting in functions makes code hard to read and understand. Each indent level increases the reader's mental load. Martin says function indent level should not exceed 1-2. Deeper nesting is a sign the function should be split.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — 4 seviye iç içe geçme</span><span class=\"en-text\">BAD — 4 levels deep</span></span>\n<pre><span class=\"kw\">function</span> processData(data) {\n    <span class=\"kw\">if</span> (data) {\n        <span class=\"kw\">if</span> (data.items) {\n            <span class=\"kw\">for</span> (<span class=\"kw\">let</span> item <span class=\"kw\">of</span> data.items) {\n                <span class=\"kw\">if</span> (item.isValid) {\n                    <span class=\"method\">save</span>(item);\n                }\n            }\n        }\n    }\n}</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Düz, okunabilir yapı</span><span class=\"en-text\">GOOD — Flat, readable structure</span></span>\n<pre><span class=\"kw\">function</span> processData(data) {\n    <span class=\"kw\">if</span> (!data?.items) <span class=\"kw\">return</span>;\n    \n    <span class=\"kw\">const</span> validItems = <span class=\"method\">filterValidItems</span>(data.items);\n    validItems.forEach(<span class=\"method\">save</span>);\n}\n\n<span class=\"kw\">function</span> filterValidItems(items) {\n    <span class=\"kw\">return</span> items.<span class=\"method\">filter</span>(<span class=\"str\">i</span> =&gt; i.isValid);\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">\"Ok koridoru\" (corridor of doom) oluşmaya başladığında - yani sürekli sağa kaydığınızda - bu, fonksiyonları bölme zamanı gelmiştir.</span><span class=\"en-text\">When you start creating a \"corridor of doom\" - constantly shifting right - it's time to split the functions.</span></div>"
    }
  ]
});
