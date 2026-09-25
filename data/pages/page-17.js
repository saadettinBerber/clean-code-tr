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
      "type": "chapter",
      "num": 2,
      "tr": "Anlamlı İsimler",
      "en": "Meaningful Names",
      "author": "by Tim Ottinger"
    },
    {
      "type": "image",
      "src": "imageFile1.png"
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
      "kind": "code",
      "title": {
        "en": "Meaningful Naming",
        "tr": "Anlamlı İsimlendirme (Meaningful Naming)"
      },
      "summary": {
        "en": "Naming is one of the most fundamental and frequent activities in software development. Good names dramatically increase code readability. Bad names make code nearly impossible to understand. A good name should tell you why a variable, function, or class exists, what it does, and how it is used.",
        "tr": "İsimlendirme, yazılım geliştirmenin en temel ve en sık yapılan faaliyetlerinden biridir. İyi isimler, kodun okunabilirliğini (readability) dramatik şekilde artırır. Kötü isimler ise kodun anlaşılmasını neredeyse imkânsız kılar. İyi bir isim; değişkenin, fonksiyonun veya sınıfın neden var olduğunu, ne yaptığını ve nasıl kullanıldığını anlatmalıdır."
      },
      "bad": {
        "lang": "python",
        "code": "def calc(a, b, c):\n    t = a * b\n    if c:\n        t = t * 0.85\n    return t\n\nx = calc(5, 100, True)\nprint(x)",
        "why": {
          "en": "`calc`, `a`, `b`, `c`, `t`, `x` — no name reveals what's happening. The magic number 0.85 is also unexplained. A reader cannot know what this calculates.",
          "tr": "`calc`, `a`, `b`, `c`, `t`, `x` — hiçbir isim ne yapıldığını anlatmıyor. 0.85 sihirli sayısı (magic number) da açıklanmamış. Kodu okuyan biri bunun ne hesapladığını bilemez."
        }
      },
      "good": {
        "lang": "python",
        "code": "DISCOUNT_RATE = 0.85\n\ndef calculate_order_total(quantity, unit_price, has_discount):\n    total = quantity * unit_price\n    if has_discount:\n        total = total * DISCOUNT_RATE\n    return total\n\norder_total = calculate_order_total(\n    quantity=5,\n    unit_price=100,\n    has_discount=True\n)\nprint(order_total)",
        "why": {
          "en": "A constant and self-describing names make the calculation read like a sentence: the intent is visible at a glance.",
          "tr": "Bir sabit ve kendini açıklayan isimler hesaplamayı bir cümle gibi okutur: niyet ilk bakışta görünür."
        }
      },
      "tip": {
        "en": "When naming a variable or function, ask yourself: \"Can someone seeing this code for the first time understand what it does just by reading the names?\" If not, change the name.",
        "tr": "Bir değişken veya fonksiyon adlandırırken kendinize şu soruyu sorun: \"Bu kodu ilk kez gören biri, sadece isimlere bakarak ne yapıldığını anlayabilir mi?\" Cevap hayırsa, ismi değiştirin."
      }
    },
    {
      "id": "naming-ubiquity",
      "kind": "code",
      "title": {
        "en": "Ubiquity of Names",
        "tr": "İsimlerin Her Yerde Olması (Ubiquity of Names)"
      },
      "summary": {
        "en": "Naming in software is not limited to variables. Files, directories, packages, modules, database tables, API endpoints, Docker containers — we name everything. Because naming is so ubiquitous, even a small improvement creates a huge difference across the entire codebase.",
        "tr": "Yazılımda isimlendirme sadece değişkenlerle sınırlı değildir. Dosyalar, dizinler, paketler, modüller, veritabanı tabloları, API endpoint'leri, Docker container'ları — her şeyi isimlendiririz. İsimlendirme bu kadar yaygın olduğu için, küçük bir iyileştirme bile tüm kod tabanında büyük bir fark yaratır."
      },
      "bad": {
        "lang": "javascript",
        "code": "project/\n├── src/\n│   ├── utils.js\n│   ├── helpers.js\n│   ├── stuff.js\n│   ├── data.js\n│   └── misc.js\n├── temp/\n│   └── test1.js\n└── old/\n    └── backup2.js",
        "why": {
          "en": "`utils`, `helpers`, `stuff`, `misc` — these file names make it impossible to find where anything is. `old` and `temp` directories are also vague.",
          "tr": "`utils`, `helpers`, `stuff`, `misc` — bu dosya isimleri neyin nerede olduğunu bulmayı imkânsız kılar. `old` ve `temp` dizinleri de belirsizdir."
        }
      },
      "good": {
        "lang": "javascript",
        "code": "project/\n├── src/\n│   ├── authentication/\n│   │   └── tokenValidator.js\n│   ├── orders/\n│   │   ├── orderCalculator.js\n│   │   └── orderRepository.js\n│   ├── notifications/\n│   │   └── emailSender.js\n│   └── shared/\n│       └── dateFormatter.js\n└── tests/\n    ├── authentication/\n    │   └── tokenValidator.test.js\n    └── orders/\n        └── orderCalculator.test.js",
        "why": {
          "en": "Directory and file names name their content, so the structure itself answers where each responsibility lives.",
          "tr": "Dizin ve dosya adları içeriklerini adlandırır; böylece yapının kendisi her sorumluluğun nerede yaşadığını yanıtlar."
        }
      },
      "tip": {
        "en": "If your project has files named `utils`, `helpers`, `misc`, `common`, they are probably \"junk drawer\" files carrying too many responsibilities. Move each function to the module where it belongs.",
        "tr": "Projenizde `utils`, `helpers`, `misc`, `common` gibi dosyalar varsa, bunlar muhtemelen çok fazla sorumluluk taşıyan \"çöp kutusu\" dosyalardır. Her fonksiyonu ait olduğu modüle taşıyın."
      }
    }
  ]
});
