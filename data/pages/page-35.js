window.PAGE({
  "id": "page-35",
  "page": 35,
  "pdf_page": 66,
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
    "en": "Sections within Functions & One Level of Abstraction per Function",
    "tr": "Fonksiyonlar İçinde Bölümler & Soyutlama Seviyesi"
  },
  "blocks": [
    {
      "type": "para",
      "sentences": [
        {
          "en": "So which is it? Is the function doing one thing or three things? Notice that the three steps of the function are one level of abstraction below the stated name of the function. We can describe the function by describing it as a brief TO<sup>4</sup> paragraph:",
          "tr": "Peki hangisi doğru? Fonksiyon bir şey mi yoksa üç şey mi yapıyor? Fonksiyonun üç adımının, fonksiyonun belirtilen isminden bir seviye aşağıda olduğuna dikkat edin. Fonksiyonu kısa bir TO<sup>4</sup> paragrafıyla tanımlayarak açıklayabiliriz:",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "<em>TO RenderPageWithSetupsAndTeardowns, we check to see whether the page is a test page and if so, we include the setups and teardowns. In either case we render the page in HTML.</em>",
          "tr": "<em>Setup ve Teardown'larla SayfayıOluştur (RenderPageWithSetupsAndTeardowns) için, sayfanın test sayfası olup olmadığını kontrol ederiz ve öyleyse, setup ve teardown'ları ekleriz. Her iki durumda da sayfayı HTML olarak oluştururuz.</em>",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "If a function does only those steps that are one level below the stated name of the function, then the function is doing one thing. After all, the reason we write functions is to decompose a larger concept (in other words, the name of the function) into a set of steps at the next level of abstraction.",
          "tr": "Bir fonksiyon, yalnızca fonksiyonun belirtilen isminin bir alt seviyesindeki adımları gerçekleştiriyorsa, bir şey yapıyordur. Sonuçta, fonksiyonlar yazmamızın nedeni, daha büyük bir kavramı (başka bir deyişle, fonksiyonun ismini) bir sonraki soyutlama seviyesindeki adımlar kümesine ayrıştırmaktır.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "It should be very clear that Listing 3-1 contains steps at many different levels of abstraction. So it is clearly doing more than one thing. Even Listing 3-2 has two levels of abstraction, as proved by our ability to shrink it down. But it would be very hard to meaningfully shrink Listing 3-3. We could extract the <code>if</code> statement into a function named <code>includeSetupsAndTeardownsIfTestPage</code>, but that simply restates the code without changing the level of abstraction.",
          "tr": "Listing 3-1'in birçok farklı seviyede soyutlama içeren adımlar içerdiği çok açık olmalıdır. Dolayısıyla, açıkça birden fazla şey yapıyor. Hatta Listing 3-2'nin bile küçültülebildiğimizde kanıtladığımız gibi iki seviye soyutlaması vardır. Ancak Listing 3-3'ü anlamlı bir şekilde küçültmek çok zor olurdu. <code>if</code> ifadesini <code>includeSetupsAndTeardownsIfTestPage</code> isimli bir fonksiyona çıkarabilirdik, ancak bu sadece kodu yeniden ifade etmekten başka bir şey yapmaz, soyutlama seviyesini değiştirmez.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "So, another way to know that a function is doing more than \"one thing\" is if you can extract another function from it with a name that is not merely a restatement of its implementation [G34].",
          "tr": "Fonksiyonun \"bir şey\"den fazla yaptığını bilmenin bir diğer yolu, ondan ismi sadece implementasyonunun yeniden ifadesi olmayan başka bir fonksiyon çıkarıp çıkaramayacağınızı görmektir [G34].",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Sections within Functions",
      "tr": "Fonksiyonlar İçinde Bölümler / Sections within Functions",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Look at Listing 4-7 on page 71. Notice that the <code>generatePrimes</code> function is divided into sections such as <em>declarations</em>, <em>initializations</em>, and <em>sieve</em>. This is an obvious symptom of doing more than one thing. Functions that do one thing cannot be reasonably divided into sections.",
          "tr": "Sayfa 71'deki Listing 4-7'e bakın. <code>generatePrimes</code> fonksiyonunun <em>bildirimler</em> (declarations), <em>başlatmalar</em> (initializations) ve <em>eleme</em> (sieve) gibi bölümlere ayrıldığına dikkat edin. Bu, birden fazla şey yapmanın açık bir belirtisidir. Tek şey yapan fonksiyonlar makul bir şekilde bölümlere ayrılamaz.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "One Level of Abstraction per Function",
      "tr": "Fonksiyon Başına Bir Soyutlama Seviyesi / One Level of Abstraction per Function",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "In order to make sure our functions are doing \"one thing,\" we need to make sure that the statements within our function are all at the same level of abstraction. It is easy to see how Listing 3-1 violates this rule. There are concepts in there that are at a very high level of abstraction, such as <code>getHtml()</code>; others that are at an intermediate level of abstraction, such as: <code>String pagePathName = PathParser.render(pagePath);</code> and still others that are remarkably low level, such as: <code>.append(\"\\n\")</code>.",
          "tr": "Fonksiyonlarımızın \"bir şey\" yaptığından emin olmak için, fonksiyonumuzdaki ifadelerin hepsinin aynı seviyede soyutlama (abstraction) olduğundan emin olmamız gerekir. Listing 3-1'in bu kuralı ihlal ettiğini görmek kolaydır. İçinde çok yüksek seviyede soyutlama kavramları var, örneğin <code>getHtml()</code>; ortada seviyede soyutlama kavramları, örneğin: <code>String pagePathName = PathParser.render(pagePath);</code>; ve oldukça düşük seviyede kavramlar, örneğin: <code>.append(\"\\n\")</code>.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Mixing levels of abstraction within a function is always confusing. Readers may not be able to tell whether a particular expression is an essential concept or a detail. Worse,",
          "tr": "Bir fonksiyon içinde farklı soyutlama seviyelerini karıştırmak her zaman kafa karıştırıcıdır. Okuyucular belirli bir ifadenin temel bir kavram mı yoksa bir detay mı olduğunu söyleyemeyebilir. Daha da kötüsü,",
          "html": true
        }
      ]
    },
    {
      "type": "footnote",
      "en": "4. The LOGO language used the keyword \"TO\" in the same way that Ruby and Python use \"def.\" So every function began with the word \"TO.\" This had an interesting effect on the way functions were designed.",
      "tr": "4. LOGO dili Ruby ve Python'un \"def\" kullandığı şekilde \"TO\" anahtar kelimesini kullanırdı. Bu nedenle her fonksiyon \"TO\" kelimesiyle başlardı. Bu, fonksiyonların tasarlanma şekli üzerinde ilginç bir etkiye sahipti.",
      "html": true
    }
  ],
  "concepts": [
    {
      "id": "abstraction-level",
      "title": {
        "en": "Abstraction Level",
        "tr": "Soyutlama Seviyesi (Abstraction Level)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Bir fonksiyondaki tüm ifadeler aynı soyutlama seviyesinde olmalıdır. Yüksek seviye kavramlar (ne yapılacağı), orta seviye kavramlar (nasıl yapılacağı) ve düşük seviye detaylar (implementasyon detayları) karıştırılmamalıdır.</span><span class=\"en-text\" style=\"display:none;\">All statements in a function should be at the same level of abstraction. High-level concepts (what to do), mid-level concepts (how to do it), and low-level details (implementation details) should not be mixed.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Karışık soyutlama seviyeleri</span><span class=\"en-text\" style=\"display:none;\">BAD — Mixed abstraction levels</span></span>\n<pre><span class=\"kw\">def</span> <span class=\"method\">sendWelcomeEmail</span>(user):\n    <span class=\"comment\"># Yüksek seviye</span>\n    <span class=\"type\">email</span> = <span class=\"method\">createEmail</span>(user.name)\n    \n    <span class=\"comment\"># Düşük seviye - KARMAŞIK!</span>\n    <span class=\"type\">smtp</span> = <span class=\"type\">SMTP</span>(<span class=\"str\">'smtp.example.com'</span>)\n    smtp.<span class=\"method\">connect</span>()\n    smtp.<span class=\"method\">send</span>(email)\n    smtp.<span class=\"method\">quit</span>()</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Tek seviye soyutlama</span><span class=\"en-text\" style=\"display:none;\">GOOD — Single abstraction level</span></span>\n<pre><span class=\"kw\">def</span> <span class=\"method\">sendWelcomeEmail</span>(user):\n    <span class=\"type\">email</span> = <span class=\"method\">createEmail</span>(user.name)\n    <span class=\"method\">smtpClient</span>.<span class=\"method\">send</span>(email)</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">\"Sayfa sayfası okur gibi kod oku\" kuralını uygulayın. Her satır aynı düzeyde olmalı - ya hepsi \"ne yapılacak\" ya da hepsi \"nasıl yapılacak\".</span><span class=\"en-text\" style=\"display:none;\">Apply the \"read code like a page\" rule. Each line should be at the same level - either all \"what to do\" or all \"how to do it\".</span></div>"
    },
    {
      "id": "function-sections",
      "title": {
        "en": "Function Sections",
        "tr": "Fonksiyon Bölümleri (Function Sections)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Bir fonksiyon içinde ayrı bölümler (bildirimler, başlatmalar, işlemler vb.) görmek, fonksiyonun birden fazla şey yaptığının işaretidir. Tek sorumluluklu fonksiyonlar bölümlere ayrılamaz - tek bir akış veya eylem temsil ederler.</span><span class=\"en-text\" style=\"display:none;\">Seeing separate sections within a function (declarations, initializations, operations, etc.) is a sign the function does multiple things. Single-responsibility functions cannot be divided into sections - they represent a single flow or action.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Ayrı bölümler var</span><span class=\"en-text\" style=\"display:none;\">BAD — Separate sections exist</span></span>\n<pre><span class=\"kw\">def</span> <span class=\"method\">processOrder</span>(order):\n    <span class=\"comment\"># Bölüm 1: Bildirimler</span>\n    total = 0\n    items = []\n    \n    <span class=\"comment\"># Bölüm 2: Başlatmalar</span>\n    <span class=\"kw\">for</span> item <span class=\"kw\">in</span> order.items:\n        items.<span class=\"method\">append</span>(item.name)\n        total += item.price\n    \n    <span class=\"comment\"># Bölüm 3: İşlemler</span>\n    <span class=\"method\">saveToDatabase</span>(items)\n    <span class=\"method\">sendConfirmation</span>(total)</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Ayrı fonksiyonlar</span><span class=\"en-text\" style=\"display:none;\">GOOD — Separate functions</span></span>\n<pre><span class=\"kw\">def</span> <span class=\"method\">processOrder</span>(order):\n    <span class=\"method\">calculateTotal</span>(order)\n    <span class=\"method\">saveToDatabase</span>(order)\n    <span class=\"method\">sendConfirmation</span>(order)</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Fonksiyonunuzda yorumlarla ayrılmış bölümler görüyorsanız, bunları ayrı fonksiyonlara bölme zamanı gelmiştir.</span><span class=\"en-text\" style=\"display:none;\">If you see sections separated by comments in your function, it's time to split them into separate functions.</span></div>"
    },
    {
      "id": "stepdown-rule",
      "title": {
        "en": "Stepdown Rule",
        "tr": "Basamak Kuralı (Stepdown Rule)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Kod, yüksek seviyeden düşük seviyeye doğru \"aşağı doğru\" okunmalıdır. Her fonksiyon, bir sonraki soyutlama seviyesindeki fonksiyonları çağırmalıdır. Bu, gazete makalesi okuma düzenine benzer - önce özet, sonra detaylar.</span><span class=\"en-text\" style=\"display:none;\">Code should be read \"top down\" from high level to low level. Each function should call functions at the next level of abstraction. This is similar to reading a newspaper article - first the summary, then the details.</span></p>\n<pre><span class=\"kw\">def</span> <span class=\"method\">main</span>():\n    <span class=\"comment\"># Yüksek seviye - NE yapılacağı</span>\n    <span class=\"method\">processUserRegistration</span>(data)\n\n<span class=\"kw\">def</span> <span class=\"method\">processUserRegistration</span>(data):\n    <span class=\"comment\"># Orta seviye - ADIMLAR</span>\n    <span class=\"method\">validate</span>(data)\n    <span class=\"method\">save</span>(data)\n    <span class=\"method\">notify</span>(data)\n\n<span class=\"kw\">def</span> <span class=\"method\">validate</span>(data):\n    <span class=\"comment\"># Düşük seviye - DETAYLAR</span>\n    <span class=\"comment\"># Form validation kodu</span></pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Her fonksiyon, ismini okuyucunun anlayabileceği bir hikaye oluşturacak şekilde yazın. Kod bir şiir gibi akmalıdır.</span><span class=\"en-text\" style=\"display:none;\">Write each function so that its name creates a story the reader can understand. Code should flow like a poem.</span></div>"
    }
  ]
});
