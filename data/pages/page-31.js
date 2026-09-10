window.PAGE({
  "id": "page-31",
  "page": 31,
  "pdf_page": 62,
  "chapter": {
    "num": 3,
    "en": "Functions",
    "tr": "Fonksiyonlar"
  },
  "section": {
    "en": "Giriş",
    "tr": "Giriş"
  },
  "title": {
    "en": "Functions — Introduction",
    "tr": "Fonksiyonlar — Giriş"
  },
  "blocks": [
    {
      "type": "html",
      "html": "<div class=\"chapter-banner\">\n<div class=\"chapter-number\">3</div>\n<div class=\"chapter-title\">\n<span class=\"tr-text\">Fonksiyonlar</span>\n<span class=\"en-text\" style=\"display:none;\">Functions</span>\n</div>\n<div class=\"chapter-subtitle\">\n<span class=\"tr-text\">Chapter 3: Functions / Fonksiyonlar</span>\n<span class=\"en-text\" style=\"display:none;\">Chapter 3: Functions</span>\n</div>\n</div>"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "In the early days of programming we composed our systems of routines and subroutines. Then, in the era of Fortran and PL/1 we composed our systems of programs, subprograms, and functions. Nowadays only the function survives from those early days. Functions are the first line of organization in any program. Writing them well is the topic of this chapter.",
          "tr": "Programlamanın ilk günlerinde sistemlerimizi rutinlerden (routines) ve alt rutinlerden (subroutines) oluştururduk. Sonra, Fortran ve PL/1 döneminde sistemlerimizi programlardan (programs), alt programlardan (subprograms) ve fonksiyonlardan (functions) oluşturduk. Günümüzde o ilk günlerden sadece fonksiyon (function) hayatta kaldı. Fonksiyonlar herhangi bir programdaki ilk organizasyon hattıdır. Onları iyi yazmak bu bölümün konusudur.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Consider the code in Listing 3-1. It's hard to find a long function in FitNesse,<sup>1</sup> but after a bit of searching I came across this one. Not only is it long, but it's got duplicated code, lots of odd strings, and many strange and inobvious data types and APIs. See how much sense you can make of it in the next three minutes.",
          "tr": "Listing 3-1'deki koda bir göz atın. FitNesse<sup>1</sup>'de uzun bir fonksiyon (function) bulmak zordur, ama biraz araştırınca bunu buldum. Sadece uzun olması değil, tekrarlanan kod (duplicated code), garip dizgiler (strings) ve birçok tuhaf ve anlaşılması güç veri tipleri (data types) ile API'ler içeriyor. Önümüzdeki üç dakikada bundan ne anlam çıkarabileceğinize bakın.",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "public static String testableHtml(\n    PageData pageData,\n    boolean includeSuiteSetup\n) throws Exception {\n    WikiPage wikiPage = pageData.getWikiPage();\n    StringBuffer buffer = new StringBuffer();\n    if (pageData.hasAttribute(\"Test\")) {\n        if (includeSuiteSetup) {\n            WikiPage suiteSetup =\n                PageCrawlerImpl.getInheritedPage(\n                    SuiteResponder.SUITE_SETUP_NAME, wikiPage\n                );\n            if (suiteSetup != null) {\n                WikiPagePath pagePath =\n                    suiteSetup.getPageCrawler().getFullPath(suiteSetup);\n                String pagePathName = PathParser.render(pagePath);\n                buffer.append(\"!include -setup .\")\n                    .append(pagePathName)\n                    .append(\"\\n\");\n            }\n        }\n        WikiPage setup =\n            PageCrawlerImpl.getInheritedPage(\"SetUp\", wikiPage);\n        if (setup != null) {\n            WikiPagePath setupPath =\n                wikiPage.getPageCrawler().getFullPath(setup);\n            String setupPathName = PathParser.render(setupPath);\n            buffer.append(\"!include -setup .\")\n                .append(setupPathName)\n                .append(\"\\n\");\n        }\n    }\n    buffer.append(pageData.getContent());\n    if (pageData.hasAttribute(\"Test\")) {\n        WikiPage teardown =\n            PageCrawlerImpl.getInheritedPage(\"TearDown\", wikiPage);\n        if (teardown != null) {\n            WikiPagePath tearDownPath =\n                wikiPage.getPageCrawler().getFullPath(teardown);\n            String tearDownPathName = PathParser.render(tearDownPath);\n            buffer.append(\"\\n\")\n                .append(\"!include -teardown .\")\n                .append(tearDownPathName)\n                .append(\"\\n\");\n        }\n    }",
      "caption": {
        "en": "Listing 3-1 / HtmlUtil.java (FitNesse 20070619)",
        "tr": "Listing 3-1 / HtmlUtil.java (FitNesse 20070619)"
      }
    },
    {
      "type": "footnote",
      "en": "1. An open-source testing tool. www.fitnesse.org",
      "tr": "1. Açık kaynaklı bir test aracı (open-source testing tool). www.fitnesse.org",
      "html": true
    }
  ],
  "concepts": [
    {
      "id": "long-functions",
      "title": {
        "en": "Long Functions",
        "tr": "Uzun Fonksiyonlar (Long Functions)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Uzun fonksiyonlar birden fazla sorumluluk taşır, okunması ve bakımı zordur. Bir fonksiyon ne kadar uzunsa, o kadar çok şey yapmaya çalışıyor demektir. Listing 3-1'deki gibi fonksiyonlar, setup, teardown ve içerik oluşturma gibi birçok işi tek seferde yaparak Tek Sorumluluk İlkesi'ni (SRP) ihlal eder.</span><span class=\"en-text\" style=\"display:none;\">Long functions carry multiple responsibilities, making them hard to read and maintain. The longer a function is, the more it's trying to do. Functions like Listing 3-1 violate the Single Responsibility Principle (SRP) by doing setup, teardown, and content generation all at once.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Çok uzun, çok sorumluluk</span><span class=\"en-text\" style=\"display:none;\">BAD — Too long, too many responsibilities</span></span>\n<pre>def generate_report(data, format_type, send_email):\n    # Verileri doğrula\n    if not data:\n        raise ValueError(\"No data\")\n    cleaned = []\n    for item in data:\n        if item.get(\"value\") is not None:\n            cleaned.append(item)\n    # Formatla\n    if format_type == \"csv\":\n        output = \"header1,header2\\n\"\n        for item in cleaned:\n            output += f\"{item['name']},{item['value']}\\n\"\n    elif format_type == \"json\":\n        import json\n        output = json.dumps(cleaned)\n    else:\n        output = str(cleaned)\n    # Email gönder\n    if send_email:\n        import smtplib\n        server = smtplib.SMTP(\"smtp.example.com\")\n        server.send_message(output)\n        server.quit()\n    return output</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Her fonksiyon tek iş yapıyor</span><span class=\"en-text\" style=\"display:none;\">GOOD — Each function does one thing</span></span>\n<pre>def generate_report(data, format_type):\n    cleaned = validate_and_clean(data)\n    return format_output(cleaned, format_type)\n\ndef validate_and_clean(data):\n    if not data:\n        raise ValueError(\"No data\")\n    return [item for item in data\n            if item.get(\"value\") is not None]\n\ndef format_output(data, format_type):\n    formatters = {\n        \"csv\": format_as_csv,\n        \"json\": format_as_json,\n    }\n    formatter = formatters.get(format_type, str)\n    return formatter(data)</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Bir fonksiyon 20 satırı geçiyorsa, sorumluluklarını analiz edin. Her \"yorum bloğu\" genellikle ayrı bir fonksiyon olabilecek bir bölümü işaret eder.</span><span class=\"en-text\" style=\"display:none;\">If a function exceeds 20 lines, analyze its responsibilities. Each \"comment block\" usually signals a section that could be a separate function.</span></div>"
    },
    {
      "id": "code-duplication",
      "title": {
        "en": "Code Duplication",
        "tr": "Kod Tekrarı (Code Duplication)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Kod tekrarı (duplication) yazılımın en büyük düşmanlarından biridir. Listing 3-1'de <code class=\"inline\">getInheritedPage</code> çağrısı, <code class=\"inline\">getFullPath</code> ve <code class=\"inline\">render</code> zincirleri neredeyse aynı kalıpla üç kez tekrarlanır. Tekrarlanan kod, bir değişiklik gerektiğinde birden fazla yerde güncelleme yapmayı zorunlu kılar.</span><span class=\"en-text\" style=\"display:none;\">Code duplication is one of software's greatest enemies. In Listing 3-1, the <code class=\"inline\">getInheritedPage</code> call, <code class=\"inline\">getFullPath</code> and <code class=\"inline\">render</code> chains are repeated nearly identically three times. Duplicated code forces updates in multiple places when a change is needed.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Aynı kalıp üç kez tekrarlanıyor</span><span class=\"en-text\" style=\"display:none;\">BAD — Same pattern repeated three times</span></span>\n<pre>function saveUser(user) {\n    const timestamp = new Date().toISOString();\n    console.log(`[${timestamp}] Saving user: ${user.name}`);\n    db.users.save(user);\n}\n\nfunction saveOrder(order) {\n    const timestamp = new Date().toISOString();\n    console.log(`[${timestamp}] Saving order: ${order.id}`);\n    db.orders.save(order);\n}\n\nfunction saveProduct(product) {\n    const timestamp = new Date().toISOString();\n    console.log(`[${timestamp}] Saving product: ${product.title}`);\n    db.products.save(product);\n}</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Ortak kalıp tek yere çekilmiş</span><span class=\"en-text\" style=\"display:none;\">GOOD — Common pattern extracted</span></span>\n<pre>function saveEntity(collection, entity, label) {\n    logAction(`Saving ${label}`);\n    db[collection].save(entity);\n}\n\nfunction logAction(message) {\n    const timestamp = new Date().toISOString();\n    console.log(`[${timestamp}] ${message}`);\n}\n\n// Kullanım:\nsaveEntity(\"users\", user, `user: ${user.name}`);\nsaveEntity(\"orders\", order, `order: ${order.id}`);</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Kodda \"kopyala-yapıştır\" yaptığınızı fark ettiğiniz an durun. Bu, bir fonksiyon veya soyutlama (abstraction) çıkarma sinyalidir. DRY ilkesini hatırlayın: Don't Repeat Yourself.</span><span class=\"en-text\" style=\"display:none;\">The moment you catch yourself copy-pasting, stop. It's a signal to extract a function or abstraction. Remember the DRY principle: Don't Repeat Yourself.</span></div>"
    },
    {
      "id": "function-organization",
      "title": {
        "en": "Function Organization",
        "tr": "Fonksiyon Organizasyonu (Function Organization)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Fonksiyonlar bir programdaki ilk organizasyon hattıdır (first line of organization). Tıpkı bir kitabın bölümlerden, bölümlerin paragraflardan ve paragrafların cümlelerden oluşması gibi, bir program da iyi organize edilmiş fonksiyonlardan oluşmalıdır. Her fonksiyon, okuyucunun hikayeyi takip edebilmesi için tek ve net bir amaca sahip olmalıdır.</span><span class=\"en-text\" style=\"display:none;\">Functions are the first line of organization in any program. Just as a book is made of chapters, chapters of paragraphs, and paragraphs of sentences, a program should be composed of well-organized functions. Each function should have a single, clear purpose so the reader can follow the story.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Tek bir dev dosyada her şey</span><span class=\"en-text\" style=\"display:none;\">BAD — Everything in one giant file</span></span>\n<pre>class App {\n    public void run() {\n        // 1. Veritabanı bağlantısı (50 satır)\n        // 2. Kullanıcı doğrulama (80 satır)\n        // 3. Veri işleme (120 satır)\n        // 4. Rapor oluşturma (90 satır)\n        // 5. Email gönderme (40 satır)\n        // Toplam: 380+ satır tek metotta!\n    }\n}</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Her adım kendi fonksiyonunda</span><span class=\"en-text\" style=\"display:none;\">GOOD — Each step in its own function</span></span>\n<pre>class App {\n    public void run() {\n        Connection db = connectToDatabase();\n        User user = authenticateUser(db);\n        Report report = processData(db, user);\n        sendReport(report, user.getEmail());\n    }\n}</pre>\n<div class=\"explanation\"><span class=\"tr-text\">Ana fonksiyon bir \"içindekiler\" sayfası gibi okunur. Her satır ne yapıldığını anlatır, nasıl yapıldığını değil.</span><span class=\"en-text\" style=\"display:none;\">The main function reads like a table of contents. Each line tells what is being done, not how.</span></div>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Fonksiyonlarınızı bir gazete makalesi gibi düzenleyin: en üstte özet (yüksek seviye fonksiyon), aşağıya doğru detaylar (yardımcı fonksiyonlar). Buna \"Stepdown Rule\" (Aşağı İnme Kuralı) denir.</span><span class=\"en-text\" style=\"display:none;\">Organize your functions like a newspaper article: summary at the top (high-level function), details below (helper functions). This is called the \"Stepdown Rule.\"</span></div>"
    }
  ]
});
