window.PAGE({
  "id": "page-46",
  "page": 46,
  "pdf_page": 77,
  "chapter": {
    "num": 3,
    "en": "Functions",
    "tr": "Fonksiyonlar"
  },
  "section": {
    "en": "Hata Kodları Yerine İstisnalar & Try/Catch Blokları",
    "tr": "Hata Kodları Yerine İstisnalar & Try/Catch Blokları"
  },
  "title": {
    "en": "Prefer Exceptions, Extract Try/Catch",
    "tr": "Hata Kodları Yerine İstisnalar, Try/Catch Blokları"
  },
  "blocks": [
    {
      "type": "para",
      "sentences": [
        {
          "en": "We could try to resolve this by renaming the <code>set</code> function to <code>setAndCheckIfExists</code>, but that doesn't much help the readability of the <code>if</code> statement. The real solution is to separate the command from the query so that the ambiguity cannot occur.",
          "tr": "Bu sorunu <code>set</code> fonksiyonunu <code>setAndCheckIfExists</code> olarak yeniden adlandırarak çözmeye çalışabiliriz, ancak bu <code>if</code> ifadesinin okunabilirliğine pek yardımcı olmaz. Gerçek çözüm, komutu (command) sorgudan (query) ayırarak belirsizliğin oluşmasını engellemektir.",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "if (attributeExists(\"username\")) {\n    setAttribute(\"username\", \"unclebob\");\n    ...\n}",
      "caption": {
        "en": "Komut-Sorgu Ayrımı Çözümü",
        "tr": "Komut-Sorgu Ayrımı Çözümü"
      }
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Prefer Exceptions to Returning Error Codes",
      "tr": "Hata Kodları Yerine İstisnaları Tercih Edin / Prefer Exceptions to Returning Error Codes",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Returning error codes from command functions is a subtle violation of command query separation. It promotes commands being used as expressions in the predicates of <code>if</code> statements.",
          "tr": "Komut fonksiyonlarından hata kodları (error codes) döndürmek, komut-sorgu ayrımının (Command Query Separation) ince bir ihlalidir. Komutların <code>if</code> ifadelerinin yüklemlerinde (predicates) birer ifade olarak kullanılmasını teşvik eder.",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "if (deletePage(page) == E_OK)",
      "caption": {
        "en": "Hata Kodu Kontrolü",
        "tr": "Hata Kodu Kontrolü"
      }
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "This does not suffer from verb/adjective confusion but does lead to deeply nested structures. When you return an error code, you create the problem that the caller must deal with the error immediately.",
          "tr": "Bu ifade fiil/sıfat karışıklığından mustarip değildir, ancak derinlemesine iç içe geçmiş yapılara (deeply nested structures) yol açar. Bir hata kodu döndürdüğünüzde, çağıranın hatayla hemen ilgilenmesi gereken bir sorun yaratırsınız.",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "if (deletePage(page) == E_OK) {\n    if (registry.deleteReference(page.name) == E_OK) {\n        if (configKeys.deleteKey(page.name.makeKey()) == E_OK){\n            logger.log(\"page deleted\");\n        } else {\n            logger.log(\"configKey not deleted\");\n        }\n    } else {\n        logger.log(\"deleteReference from registry failed\");\n    }\n} else {\n    logger.log(\"delete failed\");\n    return E_ERROR;\n}",
      "caption": {
        "en": "Deeply Nested Error Code Structure",
        "tr": "Hata Kodlarıyla İç İçe Geçmiş Yapı"
      }
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "On the other hand, if you use exceptions instead of returned error codes, then the error processing code can be separated from the happy path code and can be simplified:",
          "tr": "Öte yandan, döndürülen hata kodları yerine istisnalar (exceptions) kullanırsanız, hata işleme kodu mutlu yoldan (happy path) ayrılabilir ve sadeleştirilebilir:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "try {\n    deletePage(page);\n    registry.deleteReference(page.name);\n    configKeys.deleteKey(page.name.makeKey());\n}\ncatch (Exception e) {\n    logger.log(e.getMessage());\n}",
      "caption": {
        "en": "Simplified Code Using Exceptions",
        "tr": "İstisna Kullanımıyla Sadeleştirilmiş Kod"
      }
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Extract Try/Catch Blocks",
      "tr": "Try/Catch Bloklarını Ayırın / Extract Try/Catch Blocks",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "<code>Try/catch</code> blocks are ugly in their own right. They confuse the structure of the code and mix error processing with normal processing. So it is better to extract the bodies of the <code>try</code> and <code>catch</code> blocks out into functions of their own.",
          "tr": "<code>Try/catch</code> blokları kendi başlarına çirkindir. Kodun yapısını karıştırır ve hata işlemeyi normal işleme ile birbirine geçirir. Bu nedenle <code>try</code> ve <code>catch</code> bloklarının gövdelerini kendi fonksiyonlarına çıkarmak daha iyidir.",
          "html": true
        }
      ]
    }
  ],
  "concepts": [
    {
      "id": "error-codes-vs-exceptions",
      "title": {
        "en": "Error Codes vs Exceptions",
        "tr": "Hata Kodları vs İstisnalar (Error Codes vs Exceptions)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Hata kodları döndürmek, çağıranı hatayla hemen ilgilenmeye zorlar ve iç içe geçmiş if-else yapılarına yol açar. İstisnalar kullanmak, mutlu yolu hata yönetiminden ayırır ve kodu çok daha okunabilir kılar.</span><span class=\"en-text\" style=\"display:none;\">Returning error codes forces the caller to deal with the error immediately and leads to nested if-else structures. Using exceptions separates the happy path from error handling and makes the code much more readable.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Hata kodu döndürme</span><span class=\"en-text\" style=\"display:none;\">BAD — Returning error codes</span></span>\n<pre><span class=\"kw\">def</span> <span class=\"method\">process_order</span>(order):\n    result = <span class=\"method\">validate_order</span>(order)\n    <span class=\"kw\">if</span> result == <span class=\"field\">SUCCESS</span>:\n        result = <span class=\"method\">charge_payment</span>(order.payment)\n        <span class=\"kw\">if</span> result == <span class=\"field\">SUCCESS</span>:\n            result = <span class=\"method\">ship_order</span>(order)\n            <span class=\"kw\">if</span> result == <span class=\"field\">SUCCESS</span>:\n                <span class=\"method\">send_confirmation</span>(order)\n            <span class=\"kw\">else</span>:\n                <span class=\"method\">log_error</span>(<span class=\"str\">\"Shipping failed\"</span>)\n        <span class=\"kw\">else</span>:\n            <span class=\"method\">log_error</span>(<span class=\"str\">\"Payment failed\"</span>)\n    <span class=\"kw\">else</span>:\n        <span class=\"method\">log_error</span>(<span class=\"str\">\"Validation failed\"</span>)</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — İstisna kullanımı</span><span class=\"en-text\" style=\"display:none;\">GOOD — Using exceptions</span></span>\n<pre><span class=\"kw\">def</span> <span class=\"method\">process_order</span>(order):\n    <span class=\"kw\">try</span>:\n        <span class=\"method\">validate_order</span>(order)\n        <span class=\"method\">charge_payment</span>(order.payment)\n        <span class=\"method\">ship_order</span>(order)\n        <span class=\"method\">send_confirmation</span>(order)\n    <span class=\"kw\">except</span> <span class=\"type\">OrderError</span> <span class=\"kw\">as</span> e:\n        logger.<span class=\"method\">error</span>(e.message)</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Her iç içe geçmiş if-else gördüğünüzde kendinize sorun: \"Bu hata kodları yerine istisnalar kullansam nasıl görünürdü?\" Mutlu yol tek bir akış olarak okunabilmelidir.</span><span class=\"en-text\" style=\"display:none;\">Every time you see nested if-else, ask yourself: \"What would this look like with exceptions instead of error codes?\" The happy path should read as a single flow.</span></div>"
    },
    {
      "id": "extract-try-catch",
      "title": {
        "en": "Extract Try/Catch Blocks",
        "tr": "Try/Catch Bloklarını Ayırma (Extract Try/Catch)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Try/catch blokları hata yönetimini normal iş mantığıyla karıştırır. En iyi uygulama, try bloğunun gövdesini ayrı bir fonksiyona, catch bloğunun gövdesini de ayrı bir fonksiyona çıkarmaktır. Böylece her fonksiyon tek bir şey yapar.</span><span class=\"en-text\" style=\"display:none;\">Try/catch blocks mix error handling with normal business logic. The best practice is to extract the try body into a separate function and the catch body into another. This way each function does one thing.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Karışık hata yönetimi</span><span class=\"en-text\" style=\"display:none;\">BAD — Mixed error handling</span></span>\n<pre><span class=\"kw\">function</span> <span class=\"method\">updateUser</span>(userId, data) {\n    <span class=\"kw\">try</span> {\n        <span class=\"kw\">const</span> user = <span class=\"kw\">await</span> db.<span class=\"method\">findById</span>(userId);\n        user.name = data.name;\n        user.email = data.email;\n        <span class=\"kw\">await</span> user.<span class=\"method\">save</span>();\n        <span class=\"kw\">await</span> cache.<span class=\"method\">invalidate</span>(<span class=\"str\">`user:</span>${userId}<span class=\"str\">`</span>);\n        <span class=\"kw\">await</span> <span class=\"method\">sendNotification</span>(user, <span class=\"str\">\"Profile updated\"</span>);\n    } <span class=\"kw\">catch</span> (err) {\n        logger.<span class=\"method\">error</span>(<span class=\"str\">\"Update failed\"</span>, err);\n        metrics.<span class=\"method\">increment</span>(<span class=\"str\">\"user.update.failure\"</span>);\n        <span class=\"kw\">throw new</span> <span class=\"type\">ServiceError</span>(<span class=\"str\">\"Update failed\"</span>);\n    }\n}</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Ayrılmış sorumluluklar</span><span class=\"en-text\" style=\"display:none;\">GOOD — Separated responsibilities</span></span>\n<pre><span class=\"kw\">function</span> <span class=\"method\">updateUser</span>(userId, data) {\n    <span class=\"kw\">try</span> {\n        <span class=\"method\">performUserUpdate</span>(userId, data);\n    } <span class=\"kw\">catch</span> (err) {\n        <span class=\"method\">handleUpdateFailure</span>(err);\n    }\n}\n\n<span class=\"kw\">async function</span> <span class=\"method\">performUserUpdate</span>(userId, data) {\n    <span class=\"kw\">const</span> user = <span class=\"kw\">await</span> db.<span class=\"method\">findById</span>(userId);\n    user.name = data.name;\n    user.email = data.email;\n    <span class=\"kw\">await</span> user.<span class=\"method\">save</span>();\n    <span class=\"kw\">await</span> cache.<span class=\"method\">invalidate</span>(<span class=\"str\">`user:</span>${userId}<span class=\"str\">`</span>);\n    <span class=\"kw\">await</span> <span class=\"method\">sendNotification</span>(user, <span class=\"str\">\"Profile updated\"</span>);\n}\n\n<span class=\"kw\">function</span> <span class=\"method\">handleUpdateFailure</span>(err) {\n    logger.<span class=\"method\">error</span>(<span class=\"str\">\"Update failed\"</span>, err);\n    metrics.<span class=\"method\">increment</span>(<span class=\"str\">\"user.update.failure\"</span>);\n    <span class=\"kw\">throw new</span> <span class=\"type\">ServiceError</span>(<span class=\"str\">\"Update failed\"</span>);\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Try/catch gördüğünüzde \"Metot Çıkarma (Extract Method)\" refactoring tekniğini uygulayın. Try gövdesi ve catch gövdesi ayrı fonksiyonlar olmalıdır. Böylece ana fonksiyon sadece hata akışının koordinasyonunu yapar.</span><span class=\"en-text\" style=\"display:none;\">When you see try/catch, apply the \"Extract Method\" refactoring technique. The try body and catch body should be separate functions. The main function then only coordinates the error flow.</span></div>"
    },
    {
      "id": "nested-structures",
      "title": {
        "en": "Avoiding Nested Structures",
        "tr": "İç İçe Yapılardan Kaçınma (Avoiding Nested Structures)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Derinlemesine iç içe geçmiş yapılar (deeply nested structures) kodun okunabilirliğini ciddi şekilde düşürür. Her bir girinti seviyesi, okuyucunun zihninde tutması gereken bir bağlam ekler. \"Erken dönüş\" (early return) ve \"koruma cümleleri\" (guard clauses) bu sorunu çözer.</span><span class=\"en-text\" style=\"display:none;\">Deeply nested structures seriously reduce code readability. Each indentation level adds context the reader must keep in mind. \"Early return\" and \"guard clauses\" solve this problem.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Derin iç içe geçme</span><span class=\"en-text\" style=\"display:none;\">BAD — Deep nesting</span></span>\n<pre><span class=\"kw\">function</span> <span class=\"method\">processFile</span>(path) {\n    <span class=\"kw\">if</span> (fs.<span class=\"method\">existsSync</span>(path)) {\n        <span class=\"kw\">const</span> content = fs.<span class=\"method\">readFileSync</span>(path);\n        <span class=\"kw\">if</span> (content.length &gt; <span class=\"field\">0</span>) {\n            <span class=\"kw\">const</span> parsed = JSON.<span class=\"method\">parse</span>(content);\n            <span class=\"kw\">if</span> (parsed.data) {\n                <span class=\"kw\">return</span> parsed.data;\n            }\n        }\n    }\n    <span class=\"kw\">return null</span>;\n}</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Erken dönüş ile düz yapı</span><span class=\"en-text\" style=\"display:none;\">GOOD — Flat structure with early return</span></span>\n<pre><span class=\"kw\">function</span> <span class=\"method\">processFile</span>(path) {\n    <span class=\"kw\">if</span> (!fs.<span class=\"method\">existsSync</span>(path)) <span class=\"kw\">return null</span>;\n\n    <span class=\"kw\">const</span> content = fs.<span class=\"method\">readFileSync</span>(path);\n    <span class=\"kw\">if</span> (content.length === <span class=\"field\">0</span>) <span class=\"kw\">return null</span>;\n\n    <span class=\"kw\">const</span> parsed = JSON.<span class=\"method\">parse</span>(content);\n    <span class=\"kw\">return</span> parsed.data ?? <span class=\"kw\">null</span>;\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Kodunuzda 2'den fazla girinti seviyesi görüyorsanız alarm verin. Koruma cümleleriyle (guard clauses) olumsuz durumları erken eleyerek iç içe geçmeyi azaltın.</span><span class=\"en-text\" style=\"display:none;\">If you see more than 2 indentation levels in your code, raise an alarm. Use guard clauses to eliminate negative cases early and reduce nesting.</span></div>"
    }
  ]
});
