window.PAGE({
  "id": "page-36",
  "page": 36,
  "pdf_page": 67,
  "chapter": {
    "num": 3,
    "en": "Functions",
    "tr": "Fonksiyonlar"
  },
  "section": {
    "en": "Fonksiyon Başına Bir Soyutlama Seviyesi",
    "tr": "Fonksiyon Başına Bir Soyutlama Seviyesi"
  },
  "title": {
    "en": "One Level of Abstraction per Function & The Stepdown Rule",
    "tr": "Fonksiyon Başına Bir Soyutlama Seviyesi & Basamak Kuralı"
  },
  "blocks": [
    {
      "type": "para",
      "sentences": [
        {
          "en": "worse, like broken windows, bad code attracts more bad code [KP]. When people see a function in need, they tend to add their own statements to it rather than adding to the existing algorithm. Eventually this leads to a pile of confusion that makes it hard to follow what the function is doing and often leads to the function spinning out of control.",
          "tr": "daha da kötüsü, kırık pencereler (broken windows) gibi, kötü kod da kötü kodu çeker [KP]. İnsanlar bir fonksiyona gereksinim duyduklarında, fonksiyonun mevcut algoritmasından ziyade kendi düşüncelerini ifade eden ifadeler eklemeye eğilimlidirler. Sonunda bu, fonksiyonun orijinal amacını izlemeyi zorlaştıran ve fonksiyonu çoğu zaman kontrolsüz hâle getiren bir karışıklık yığınına yol açar.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Reading Code from Top to Bottom: The Stepdown Rule",
      "tr": "Yukarıdan Aşağıya Kod Okumak: Basamak Kuralı / Reading Code from Top to Bottom: The Stepdown Rule",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Look again at the <code>getHtml</code> function on page 34. Notice that the abstraction level drops by two levels at once. This requires a mental leap when reading it. As we read it, we have to drop down one level, then after seeing some low-level detail, jump back up again. This mental jumping is hard.",
          "tr": "34. sayfadaki <code>getHtml</code> fonksiyonunu tekrar inceleyin. Dikkat edin, soyutlama seviyesi bir kerede iki seviye düşüyor. Bu, okurken zihinsel bir sıçrama gerektirir. Bunu okurken önce bir seviye aşağı, sonra bir düşük seviye detay gördükten sonra tekrar yukarı çıkmamız gerekir. Bu zihinsel sıçrama zorlayıcıdır.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "We want the code to read like a top-down narrative [KP]. We want every function to be followed by those at the next level of abstraction so that we can read the program, dropping one level of abstraction at a time as we read down the list of functions. I call this <em>The Stepdown Rule</em>.",
          "tr": "Kodumuzun üstten alta doğru bir anlatı gibi okunmasını istiyoruz [KP]. Her fonksiyonun, bir sonraki soyutlama seviyesindeki fonksiyonları takip etmesini istiyoruz, böylece programı okurken bir fonksiyon seviyesinden diğerine düşeriz. Bunu <em>Basamak Kuralı</em> (Stepdown Rule) olarak adlandırıyoruz.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "To say this differently, we want to be able to read the program as though it were a set of TO paragraphs, each of which is describing the current level of abstraction and referencing subsequent TO paragraphs at the next level down. It turns out to be very difficult for humans to hold more than about three levels of nesting in working memory. Thus, each function should lead into the next by doing one thing at the current level of abstraction.",
          "tr": "Başka bir deyişle, aynı seviyede bir sonraki adımı gerçekleştirmek için ihtiyacımız olan detayları anlamak istiyoruz. Bu, bir makaleyi okumak gibidir. Gazeteyi alırsınız ve bir makaleyi okumaya başlarsınız. İlk cümle genel konunun bir özeti verir, bu sizi bir sonraki paragrafa götürür ve bu paragraf biraz daha fazla detay verir. Okudukça detaylar açıklanır.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "This means that as we compose our functions, the functions that are called should be at the next level of abstraction. Thus, as we read down the list of functions in a module, we see the abstraction level decreasing step by step. We want to avoid the jarring alternation of high and low levels that makes the code hard to read.",
          "tr": "Bu, fonksiyonlarımızı oluştururken, bir sonraki soyutlama seviyesindeki fonksiyonları çağırdığımızdan emin olmak anlamına gelir. Böylece kodu okurken, bir fonksiyonu okurken gözümüzü bir sonraki fonksiyona kaydırırız ve bu fonksiyon bir sonraki seviyedir. Kodumuzu bu şekilde yazarsak, Basamak Kuralı'nı takip ederiz.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Of course this is hard. People can typically hold only about three levels of nesting in working memory. Therefore, each function should lead into the next by doing one thing at the current level of abstraction.",
          "tr": "Tabii ki bu kuralı takip etmek zordur. İnsanlar bir seferde yaklaşık üç seviyelik iç içe geçmeyi çalışma belleğinde (working memory) tutmakta zorlanırlar. Bu nedenle, her fonksiyon mevcut soyutlama seviyesinde tek bir şey yaparak bir sonrakine yol göstermelidir.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Switch Statements",
      "tr": "Switch İfadeleri / Switch Statements",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "It's hard to make a small <code>switch</code> statement. Even a switch statement with only two cases is larger than I'd like a single block or function to be. It's also hard to make a switch statement that does one thing. By their nature, switch statements always do <em>N</em> things. Unfortunately we can't always avoid switch statements, but we can make sure that each switch statement is buried in a low-level class and is never repeated. We do this, of course, with polymorphism.",
          "tr": "<code>switch</code> ifadeleriyle ilgili sorun, yapılacak <em>N</em> şeyin olduğunu belirtmek zorunda olmalarıdır. Ne yazık ki, N şey yapmak için kullanılan switch ifadelerini tamamen önleyemeyiz, ancak her switch ifadesinin düşük seviyeli bir sınıfta görünmesini ve asla tekrarlanmamasını sağlayabiliriz. Bunu bir çok biçimli (polymorphic) nesne oluşturmak için kullanırız.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Consider Listing 3-4. It shows a switch statement that can be buried in the basement of an abstract factory and never seen. The factory uses the switch statement to create appropriate instances of the derivatives of <code>Employee</code> based on the <code>EmployeeType</code> code.",
          "tr": "Liste 3-4'te gösterildiği gibi, switch ifadesi bir abstract factory'nin (soyut fabrika) bodrum katına gömülebilir ve hiçbir zaman görünmez. Factory, switch ifadesini kullanarak uygun somut türevleri (concrete derivatives) <code>Employee</code> arayüzünün (interface) arkasına yerleştirir.",
          "html": true
        }
      ]
    }
  ],
  "concepts": [
    {
      "id": "stepdown-rule",
      "title": {
        "en": "Stepdown Rule",
        "tr": "Basamak Kuralı (Stepdown Rule)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Kod, yüksek seviyeden düşük seviyeye doğru \"aşağı doğru\" okunmalıdır. Her fonksiyon, bir sonraki soyutlama seviyesindeki fonksiyonları çağırmalıdır. Bu, gazete makalesi okuma düzenine benzer - önce özet, sonra detaylar.</span><span class=\"en-text\">Code should be read \"top down\" from high level to low level. Each function should call functions at the next level of abstraction. This is similar to reading a newspaper article - first the summary, then the details.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Seviyeler karışık</span><span class=\"en-text\">BAD — Levels mixed</span></span>\n<pre><span class=\"kw\">def</span> <span class=\"method\">processOrder</span>(order):\n    <span class=\"comment\"># Yüksek seviye</span>\n    <span class=\"method\">validateOrder</span>(order)\n    \n    <span class=\"comment\"># Düşük seviye - KARMAŞIK!</span>\n    <span class=\"kw\">for</span> item <span class=\"kw\">in</span> order.items:\n        <span class=\"type\">db</span>.<span class=\"method\">execute</span>(<span class=\"str\">\"INSERT...\"</span>, item.id)\n    \n    <span class=\"comment\"># Tekrar yüksek seviye</span>\n    <span class=\"method\">sendConfirmation</span>(order)</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Aşamalı seviye düşüşü</span><span class=\"en-text\">GOOD — Step-by-step level drop</span></span>\n<pre><span class=\"kw\">def</span> <span class=\"method\">processOrder</span>(order):  <span class=\"comment\"># Seviye 1: İş akışı</span>\n    <span class=\"method\">validateOrder</span>(order)\n    <span class=\"method\">saveToDatabase</span>(order)\n    <span class=\"method\">sendConfirmation</span>(order)\n\n<span class=\"kw\">def</span> <span class=\"method\">saveToDatabase</span>(order):  <span class=\"comment\"># Seviye 2: Veritabanı</span>\n    <span class=\"kw\">for</span> item <span class=\"kw\">in</span> order.items:\n        <span class=\"method\">insertItem</span>(item)\n\n<span class=\"kw\">def</span> <span class=\"method\">insertItem</span>(item):  <span class=\"comment\"># Seviye 3: SQL</span>\n    <span class=\"type\">db</span>.<span class=\"method\">execute</span>(<span class=\"str\">\"INSERT...\"</span>, item.id)</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">Kodunuzu bir gazete makalesi gibi organize edin: en üstte özet (yüksek seviye fonksiyon), aşağıya doğru detaylar (yardımcı fonksiyonlar).</span><span class=\"en-text\">Organize your code like a newspaper article: summary at the top (high-level function), details below (helper functions).</span></div>"
    },
    {
      "id": "switch-polymorphism",
      "title": {
        "en": "Switch and Polymorphism",
        "tr": "Switch ve Çok Biçimlilik (Switch and Polymorphism)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Switch ifadeleri N şey yapar. Ancak abstract factory'nin bodrum katına gömülerek gizlenebilir. Factory, çok biçimlilik (polymorphism) kullanarak switch mantığını soyutlar ve her tür için uygun somut sınıfı oluşturur.</span><span class=\"en-text\">Switch statements do N things. But they can be buried in the basement of an abstract factory. The factory uses polymorphism to abstract away the switch logic and creates appropriate concrete classes for each type.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Her yerde switch</span><span class=\"en-text\">BAD — Switch everywhere</span></span>\n<pre><span class=\"kw\">def</span> <span class=\"method\">calculatePay</span>(employee):\n    <span class=\"kw\">switch</span> employee.type:\n        <span class=\"kw\">case</span> HOURLY:\n            <span class=\"kw\">return</span> employee.hours * employee.rate\n        <span class=\"kw\">case</span> SALARIED:\n            <span class=\"kw\">return</span> employee.salary / 12\n        <span class=\"kw\">case</span> COMMISSION:\n            <span class=\"kw\">return</span> employee.base + employee.sales * 0.1\n\n<span class=\"kw\">def</span> <span class=\"method\">calculateBonus</span>(employee):\n    <span class=\"kw\">switch</span> employee.type:  <span class=\"comment\"># Tekrar!</span>\n        <span class=\"kw\">case</span> HOURLY: ...</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Factory + Polymorphism</span><span class=\"en-text\">GOOD — Factory + Polymorphism</span></span>\n<pre><span class=\"kw\">abstract class</span> <span class=\"type\">Employee</span>:\n    <span class=\"kw\">abstract def</span> <span class=\"method\">calculatePay</span>()\n    <span class=\"kw\">abstract def</span> <span class=\"method\">calculateBonus</span>()\n\n<span class=\"kw\">class</span> <span class=\"type\">HourlyEmployee</span>(<span class=\"type\">Employee</span>):\n    <span class=\"kw\">def</span> <span class=\"method\">calculatePay</span>(self): ...\n\n<span class=\"comment\"># Factory - switch sadece burada</span>\n<span class=\"kw\">def</span> <span class=\"method\">createEmployee</span>(type):\n    <span class=\"kw\">switch</span> type:\n        <span class=\"kw\">case</span> HOURLY: <span class=\"kw\">return</span> <span class=\"kw\">new</span> <span class=\"type\">HourlyEmployee</span>()</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">Switch ifadesini abstract factory'de gizleyin. İş mantığını her tür için ayrı sınıflara dağıtın. \"Open/Closed Principle\" - yeni tür eklemek için sadece yeni sınıf ekleyin, mevcut kodu değiştirmeyin.</span><span class=\"en-text\">Hide the switch statement in an abstract factory. Distribute business logic into separate classes for each type. \"Open/Closed Principle\" - add new types by adding new classes, don't change existing code.</span></div>"
    },
    {
      "id": "broken-windows",
      "title": {
        "en": "Broken Windows",
        "tr": "Kırık Pencereler (Broken Windows)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">\"Kırık Pencereler\" teorisi, Pragmatik Programcılar kitabından gelir: bir binada bir pencere kırık bırakılırsa, diğer pencereler de kırılır. Kötü kod da öyledir - bir kez başladı mı, daha fazla kötü kod çeker. Her zaman temiz tutun!</span><span class=\"en-text\">The \"Broken Windows\" theory comes from The Pragmatic Programmer: if one window in a building is left broken, others will be broken too. Bad code is the same - once it starts, it attracts more bad code. Always keep it clean!</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — \"Sonra düzeltirim\"</span><span class=\"en-text\">BAD — \"I'll fix it later\"</span></span>\n<pre><span class=\"kw\">def</span> <span class=\"method\">processData</span>(data):\n    <span class=\"comment\"># FIXME: Geçici çözüm, sonra düzelt</span>\n    <span class=\"kw\">if</span> data <span class=\"kw\">is</span> <span class=\"kw\">None</span>:\n        data = {}  <span class=\"comment\"># Kırık pencere!</span>\n    \n    <span class=\"comment\"># TODO: Refactor needed</span>\n    result = []\n    <span class=\"kw\">for</span> d <span class=\"kw\">in</span> data:  <span class=\"comment\"># Karmaşık iç içe döngüler</span>\n        <span class=\"kw\">for</span> x <span class=\"kw\">in</span> d:\n            <span class=\"kw\">for</span> y <span class=\"kw\">in</span> x:\n                result.<span class=\"method\">append</span>(y)\n    <span class=\"kw\">return</span> result</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Hemen düzelt</span><span class=\"en-text\">GOOD — Fix immediately</span></span>\n<pre><span class=\"kw\">def</span> <span class=\"method\">processData</span>(data):\n    <span class=\"kw\">if</span> <span class=\"kw\">not</span> data:\n        <span class=\"kw\">raise</span> <span class=\"type\">ValueError</span>(<span class=\"str\">\"Data required\"</span>)\n    \n    <span class=\"kw\">return</span> [<span class=\"method\">extractValues</span>(item) <span class=\"kw\">for</span> item <span class=\"kw\">in</span> data]\n\n<span class=\"kw\">def</span> <span class=\"method\">extractValues</span>(item):\n    <span class=\"comment\"># Her seviye için ayrı fonksiyon</span>\n    <span class=\"kw\">return</span> [y <span class=\"kw\">for</span> x <span class=\"kw\">in</span> item <span class=\"kw\">for</span> y <span class=\"kw\">in</span> x]</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">\"İzci Kuralı\"nı (Boy Scout Rule) uygulayın: kodu bulduğunuzdan daha temiz bırakın. Küçük düzeltmeler bile birikerek büyük fark yaratır.</span><span class=\"en-text\">Apply the \"Boy Scout Rule\": leave the code cleaner than you found it. Even small fixes accumulate to make a big difference.</span></div>"
    }
  ]
});
