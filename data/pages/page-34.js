window.PAGE({
  "id": "page-34",
  "page": 34,
  "pdf_page": 65,
  "chapter": {
    "num": 3,
    "en": "Functions",
    "tr": "Fonksiyonlar"
  },
  "section": {
    "en": "Tek Şey Yapmalı",
    "tr": "Tek Şey Yapmalı"
  },
  "title": {
    "en": "Do One Thing",
    "tr": "Tek Şey Yapmalı"
  },
  "blocks": [
    {
      "type": "heading",
      "level": 1,
      "en": "Do One Thing",
      "tr": "Tek Şey Yapmalı / Do One Thing",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "It should be very clear that Listing 3-1 is doing lots more than one thing. It's creating buffers, fetching pages, searching for inherited pages, rendering paths, appending arcane strings, and generating HTML, among other things. Listing 3-1 is very busy doing lots of different things. On the other hand, Listing 3-3 is doing one simple thing. It's including setups and teardowns into test pages.",
          "tr": "Listing 3-1'in birden fazla şey yaptığı çok açık olmalıdır. Buffer oluşturuyor, sayfaları alıyor, kalıtılmış sayfaları arıyor, yolları oluşturuyor, garip dizgileri ekliyor ve HTML oluşturuyor, başka şeylerin yanı sıra. Listing 3-1 çok meşgul, çok farklı şeyler yapıyor. Öte yandan, Listing 3-3 tek basit şey yapıyor. Setup ve teardown'ları test sayfalarına ekliyor.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "The following advice has appeared in one form or another for 30 years or more.",
          "tr": "Aşağıdaki tavsiye 30 yılı aşkin bir süredir bir form veya başka bir formda ortaya çıkmıştır.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "<strong>FUNCTIONS SHOULD DO ONE THING. THEY SHOULD DO IT WELL. THEY SHOULD DO IT ONLY.</strong>",
          "tr": "<strong>FONKSİYONLAR BİR ŞEY YAPMALIDIR. ONU İYİ YAPMALIDIR. SADECE ONU YAPMALIDIR.</strong>",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "The problem with this statement is that it's hard to know what \"one thing\" is. Does Listing 3-3 do one thing? It's easy to make the case that it's doing three things:",
          "tr": "Bu ifadeyle ilgili sorun, \"bir şey\"in ne olduğunu bilmenin zor olmasıdır. Listing 3-3 bir şey mi yapıyor? Üç şey yaptığı iddia edilebilir:",
          "html": true
        }
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        {
          "en": "Determining whether the page is a test page.",
          "tr": "Sayfanın test sayfası olup olmadığını belirlemek.",
          "html": true
        },
        {
          "en": "If so, including setups and teardowns.",
          "tr": "Eğer öyleyse, setup ve teardown'ları eklemek.",
          "html": true
        },
        {
          "en": "Rendering the page in HTML.",
          "tr": "Sayfayı HTML olarak oluşturmak.",
          "html": true
        }
      ]
    }
  ],
  "concepts": [
    {
      "id": "do-one-thing",
      "title": {
        "en": "Do One Thing",
        "tr": "Tek Şey Yapma (Do One Thing)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Fonksiyonlar tek bir sorumluluğa sahip olmalıdır. \"Tek şey\" kavramı bazen belirsiz olabilir, ancak temel kural şudur: Eğer bir fonksiyonu birden fazla adımda anlatıyorsanız (veya \"ve\" kelimesini kullanıyorsanız), muhtemelen birden fazla şey yapıyordur.</span><span class=\"en-text\">Functions should have a single responsibility. The concept of \"one thing\" can sometimes be ambiguous, but the basic rule is: If you describe a function in multiple steps (or use the word \"and\"), it's probably doing more than one thing.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Üç şey yapıyor</span><span class=\"en-text\">BAD — Does three things</span></span>\n<pre><span class=\"kw\">def</span> <span class=\"method\">processUserOrder</span>(order):\n    <span class=\"comment\"># 1. Siparişi doğrula</span>\n    <span class=\"kw\">if</span> <span class=\"kw\">not</span> order.<span class=\"method\">isValid</span>():\n        <span class=\"kw\">return</span> <span class=\"str\">\"Hata\"</span>\n class=\"comment\"&gt;    \n    <span# 2.=\"\" işle<=\"\" span=\"\" ödemeyi=\"\">\n    payment = <span class=\"method\">processPayment</span>(order.amount)\n    \n    <span class=\"comment\"># 3. Email gönder</span>\n    <span class=\"method\">sendEmail</span>(order.customer)\n    \n    <span class=\"kw\">return</span> <span class=\"str\">\"Başarılı\"</span></span#></pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Her fonksiyon tek şey yapıyor</span><span class=\"en-text\">GOOD — Each function does one thing</span></span>\n<pre><span class=\"kw\">def</span> <span class=\"method\">processUserOrder</span>(order):\n    <span class=\"kw\">if</span> <span class=\"kw\">not</span> <span class=\"method\">validateOrder</span>(order):\n        <span class=\"kw\">return</span> <span class=\"str\">\"Hata\"</span>\n    \n    <span class=\"method\">processPayment</span>(order.amount)\n    <span class=\"method\">notifyCustomer</span>(order.customer)\n    \n    <span class=\"kw\">return</span> <span class=\"str\">\"Başarılı\"</span>\n\n<span class=\"kw\">def</span> <span class=\"method\">validateOrder</span>(order):\n    <span class=\"kw\">return</span> order.<span class=\"method\">isValid</span>()\n\n<span class=\"kw\">def</span> <span class=\"method\">notifyCustomer</span>(customer):\n    <span class=\"method\">sendEmail</span>(customer)</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">Fonksiyon ismi bir fiil ise (yapmak, almak, hesaplamak), fonksiyon sadece o eylemi yapmalıdır. \"Kullanıcıyı doğrula ve email gönder\" değil, sadece \"kullanıcıyı doğrula\".</span><span class=\"en-text\">If function name is a verb (do, get, calculate), the function should only do that action. Not \"validate and send email\", just \"validate user\".</span></div>"
    },
    {
      "id": "srp-function",
      "title": {
        "en": "Single Responsibility and Functions",
        "tr": "Tek Sorumluluk İlkesi ve Fonksiyonlar"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Tek Sorumluluk İlkesi (SRP - Single Responsibility Principle), sınıfların ve fonksiyonların yalnızca bir değişim nedenine sahip olması gerektiğini söyler. Fonksiyonlar bağlamında bu, fonksiyonun sadece bir şey yapması gerektiği anlamına gelir. Eğer bir fonksiyonu değiştirmek için birden fazla sebepiniz varsa, fonksiyonunuz muhtemelen birden fazla sorumluluk taşıyordur.</span><span class=\"en-text\">The Single Responsibility Principle (SRP) states that classes and functions should have only one reason to change. In the context of functions, this means a function should only do one thing. If you have multiple reasons to change a function, it probably carries multiple responsibilities.</span></p>\n<h4><span class=\"tr-text\">SRP İhlali Belirtileri</span><span class=\"en-text\">Signs of SRP Violation</span></h4>\n<ul style=\"margin-left: 20px; line-height: 1.8;\">\n<li><span class=\"tr-text\">Fonksiyon ismindeki \"and\"/\"or\" kelimeleri</span><span class=\"en-text\">\"and\"/\"or\" in function name</span></li>\n<li><span class=\"tr-text\">Birden fazla seviye soyutlama</span><span class=\"en-text\">Multiple levels of abstraction</span></li>\n<li><span class=\"tr-text\">3'ten fazla parametre</span><span class=\"en-text\">More than 3 parameters</span></li>\n<li><span class=\"tr-text\">Test yazarken birden fazla test case</span><span class=\"en-text\">Multiple test cases when writing tests</span></li>\n</ul>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">\"Değişim\" kelimesini düşünün: Bu fonksiyon hangi nedenle değişir? Sadece bir cevap varsa, SRP'ye uyuyordur.</span><span class=\"en-text\">Think about \"change\": For what reason would this function change? If there's only one answer, you're following SRP.</span></div>"
    }
  ]
});
