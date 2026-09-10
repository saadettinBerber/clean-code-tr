window.PAGE({
  "id": "page-17",
  "page": 17,
  "pdf_page": 48,
  "chapter": {
    "num": 2,
    "en": "Meaningful Names",
    "tr": "Anlamlı İsimler"
  },
  "section": {
    "en": "Introduction",
    "tr": "Giriş"
  },
  "title": {
    "en": "Meaningful Names — Introduction",
    "tr": "Anlamlı İsimler — Giriş"
  },
  "blocks": [
    {
      "type": "html",
      "html": "<div class=\"chapter-header\">\n<div class=\"chapter-number\">2</div>\n<div class=\"chapter-main-title\">\n<span class=\"tr-text\">Anlamlı İsimler / Meaningful Names</span>\n<span class=\"en-text\" style=\"display:none;\">Meaningful Names</span>\n</div>\n<div class=\"chapter-author\">by Tim Ottinger</div>\n</div>"
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Introduction",
      "tr": "Giriş / Introduction",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Names are everywhere in software. We name our variables, our functions, our arguments, classes, and packages. We name our source files and the directories that contain them. We name our jar files and war files and ear files. We name and name and name. Because we do so much of it, we'd better do it well. What follows are some simple rules for creating good names.",
          "tr": "İsimler yazılımın her yerindedir. Değişkenlerimizi (variables), fonksiyonlarımızı (functions), argümanlarımızı (arguments), sınıflarımızı (classes) ve paketlerimizi (packages) isimlendiririz. Kaynak dosyalarımızı (source files) ve onları içeren dizinleri (directories) isimlendiririz. jar dosyalarımızı, war dosyalarımızı ve ear dosyalarımızı isimlendiririz. İsimlendiririz, isimlendiririz, isimlendiririz. Bunu bu kadar çok yaptığımız için, iyi yapmamız gerekir. Aşağıda iyi isimler oluşturmak için bazı basit kurallar verilmektedir.",
          "html": true
        }
      ]
    }
  ],
  "concepts": [
    {
      "id": "meaningful-names",
      "title": {
        "en": "Meaningful Naming",
        "tr": "Anlamlı İsimlendirme (Meaningful Naming)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">İsimlendirme, yazılım geliştirmenin en temel ve en sık yapılan faaliyetlerinden biridir. İyi isimler, kodun okunabilirliğini (readability) dramatik şekilde artırır. Kötü isimler ise kodun anlaşılmasını neredeyse imkânsız kılar. İyi bir isim; değişkenin, fonksiyonun veya sınıfın neden var olduğunu, ne yaptığını ve nasıl kullanıldığını anlatmalıdır.</span><span class=\"en-text\" style=\"display:none;\">Naming is one of the most fundamental and frequent activities in software development. Good names dramatically increase code readability. Bad names make code nearly impossible to understand. A good name should tell you why a variable, function, or class exists, what it does, and how it is used.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — İsimler hiçbir şey ifade etmiyor</span><span class=\"en-text\" style=\"display:none;\">BAD — Names reveal nothing</span></span>\n<pre>def calc(a, b, c):\n    t = a * b\n    if c:\n        t = t * 0.85\n    return t\n\nx = calc(5, 100, True)\nprint(x)</pre>\n<div class=\"explanation\"><span class=\"tr-text\"><code>calc</code>, <code>a</code>, <code>b</code>, <code>c</code>, <code>t</code>, <code>x</code> — hiçbir isim ne yapıldığını anlatmıyor. 0.85 sihirli sayısı (magic number) da açıklanmamış. Kodu okuyan biri bunun ne hesapladığını bilemez.</span><span class=\"en-text\" style=\"display:none;\"><code>calc</code>, <code>a</code>, <code>b</code>, <code>c</code>, <code>t</code>, <code>x</code> — no name reveals what's happening. The magic number 0.85 is also unexplained. A reader cannot know what this calculates.</span></div>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — İsimler niyeti açıkça ortaya koyuyor</span><span class=\"en-text\" style=\"display:none;\">GOOD — Names clearly reveal intent</span></span>\n<pre>DISCOUNT_RATE = 0.85\n\ndef calculate_order_total(quantity, unit_price, has_discount):\n    total = quantity * unit_price\n    if has_discount:\n        total = total * DISCOUNT_RATE\n    return total\n\norder_total = calculate_order_total(\n    quantity=5,\n    unit_price=100,\n    has_discount=True\n)\nprint(order_total)</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Bir değişken veya fonksiyon adlandırırken kendinize şu soruyu sorun: \"Bu kodu ilk kez gören biri, sadece isimlere bakarak ne yapıldığını anlayabilir mi?\" Cevap hayırsa, ismi değiştirin.</span><span class=\"en-text\" style=\"display:none;\">When naming a variable or function, ask yourself: \"Can someone seeing this code for the first time understand what it does just by reading the names?\" If not, change the name.</span></div>"
    },
    {
      "id": "naming-ubiquity",
      "title": {
        "en": "Ubiquity of Names",
        "tr": "İsimlerin Her Yerde Olması (Ubiquity of Names)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Yazılımda isimlendirme sadece değişkenlerle sınırlı değildir. Dosyalar, dizinler, paketler, modüller, veritabanı tabloları, API endpoint'leri, Docker container'ları — her şeyi isimlendiririz. İsimlendirme bu kadar yaygın olduğu için, küçük bir iyileştirme bile tüm kod tabanında büyük bir fark yaratır.</span><span class=\"en-text\" style=\"display:none;\">Naming in software is not limited to variables. Files, directories, packages, modules, database tables, API endpoints, Docker containers — we name everything. Because naming is so ubiquitous, even a small improvement creates a huge difference across the entire codebase.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Dosya ve dizin yapısı anlamsız</span><span class=\"en-text\" style=\"display:none;\">BAD — File and directory structure is meaningless</span></span>\n<pre>project/\n├── src/\n│   ├── utils.js\n│   ├── helpers.js\n│   ├── stuff.js\n│   ├── data.js\n│   └── misc.js\n├── temp/\n│   └── test1.js\n└── old/\n    └── backup2.js</pre>\n<div class=\"explanation\"><span class=\"tr-text\"><code>utils</code>, <code>helpers</code>, <code>stuff</code>, <code>misc</code> — bu dosya isimleri neyin nerede olduğunu bulmayı imkânsız kılar. <code>old</code> ve <code>temp</code> dizinleri de belirsizdir.</span><span class=\"en-text\" style=\"display:none;\"><code>utils</code>, <code>helpers</code>, <code>stuff</code>, <code>misc</code> — these file names make it impossible to find where anything is. <code>old</code> and <code>temp</code> directories are also vague.</span></div>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Her isim içeriğini yansıtıyor</span><span class=\"en-text\" style=\"display:none;\">GOOD — Every name reflects its content</span></span>\n<pre>project/\n├── src/\n│   ├── authentication/\n│   │   └── tokenValidator.js\n│   ├── orders/\n│   │   ├── orderCalculator.js\n│   │   └── orderRepository.js\n│   ├── notifications/\n│   │   └── emailSender.js\n│   └── shared/\n│       └── dateFormatter.js\n└── tests/\n    ├── authentication/\n    │   └── tokenValidator.test.js\n    └── orders/\n        └── orderCalculator.test.js</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Projenizde <code>utils</code>, <code>helpers</code>, <code>misc</code>, <code>common</code> gibi dosyalar varsa, bunlar muhtemelen çok fazla sorumluluk taşıyan \"çöp kutusu\" dosyalardır. Her fonksiyonu ait olduğu modüle taşıyın.</span><span class=\"en-text\" style=\"display:none;\">If your project has files named <code>utils</code>, <code>helpers</code>, <code>misc</code>, <code>common</code>, they are probably \"junk drawer\" files carrying too many responsibilities. Move each function to the module where it belongs.</span></div>"
    }
  ]
});
