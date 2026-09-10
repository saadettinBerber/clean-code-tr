window.PAGE({
  "id": "page-30",
  "page": 30,
  "pdf_page": 61,
  "chapter": {
    "num": 2,
    "en": "Meaningful Names",
    "tr": "Anlamlı İsimler"
  },
  "section": {
    "en": "Final Words",
    "tr": "Son Sözler"
  },
  "title": {
    "en": "Final Words",
    "tr": "Son Sözler"
  },
  "blocks": [
    {
      "type": "para",
      "sentences": [
        {
          "en": "Shorter names are generally better than longer ones, so long as they are clear. Add no more context to a name than is necessary.",
          "tr": "Kısa isimler uzunlardan genelde daha iyidir, yeter ki açık olsunlar. İsme gerekenden fazla bağlam (context) eklemeyin.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "The names <code>accountAddress</code> and <code>customerAddress</code> are fine names for instances of the class <code>Address</code> but could be poor names for classes. <code>Address</code> is a fine name for a class. If you need to differentiate between MAC addresses, port addresses, and Web addresses, you might consider <code>PostalAddress</code>, <code>MAC</code>, and <code>URI</code>. The resulting names are more precise.",
          "tr": "<code>accountAddress</code> ve <code>customerAddress</code>, <code>Address</code> sınıfı için iyi instance (örnek) isimleridir ama sınıf isimleri için kötü olabilir. <code>Address</code> sınıf için iyi bir isimdir. MAC adresi, port adresi ve Web adresi arasında ayrım yapmak gerekiyorsa <code>PostalAddress</code>, <code>MAC</code> ve <code>URI</code> kullanılabilir. Sonuçtaki isimler daha keskindir (precise).",
          "html": true
        }
      ]
    },
    {
      "type": "html",
      "html": "<div class=\"final-words-banner\">\n<div class=\"final-words-title\">\n<span class=\"tr-text\">Son Sözler / Final Words</span>\n<span class=\"en-text\" style=\"display:none;\">Final Words</span>\n</div>\n<div class=\"content-paragraph\">\n<span class=\"tr-text\">İyi isimler seçmenin en zor yanı, iyi betimleyici beceriler ve paylaşılan kültürel bir arka plan gerektirmesidir. Bu bir öğretme meselesidir, teknik, iş veya yönetim meselesi değil.</span>\n<span class=\"en-text\" style=\"display:none;\">The hardest thing about choosing good names is that it requires good descriptive skills and a shared cultural background. This is a teaching issue, not a technical, business, or management issue.</span>\n</div>\n<div class=\"content-paragraph\">\n<span class=\"tr-text\">İnsanlar başka geliştiricilerin itiraz edeceği korkusuyla isimleri değiştirmekten korkar. Biz bu korkuyu paylaşmıyoruz ve isimlerin (daha iyiye) değiştiğinde minnettar olduğumuzu buluyoruz.</span>\n<span class=\"en-text\" style=\"display:none;\">People are also afraid of renaming things for fear that some other developers will object. We do not share that fear and find that we are actually grateful when names change (for the better).</span>\n</div>\n<div class=\"content-paragraph\">\n<span class=\"tr-text\">Kodun paragraflar ve cümleler gibi okunup okunmadığına odaklanabilmek için modern araçları kullanırız. İsim değiştirirken birini şaşırtabilirsiniz, tıpkı diğer kod iyileştirmelerinde (improvements) olduğu gibi. Bunun sizi durdurmasına izin vermeyin.</span>\n<span class=\"en-text\" style=\"display:none;\">We use modern tools to help us, so we can focus on whether the code reads like paragraphs and sentences. You might surprise someone when you rename, just as you might with any other code improvement. Don’t let it stop you.</span>\n</div>\n<div class=\"content-paragraph\">\n<span class=\"tr-text\">Bu kurallardan bazılarını uygulayın ve kodunuzun okunabilirliğinin gelişip gelişmediğine bakın. Başkasının kodunu sürdürüyorsanız (maintaining), bu sorunları çözmeye yardımcı olmak için yeniden düzenleme (refactoring) araçlarını kullanın. Kısa vadede ve uzun vadede karşılığını verecektir.</span>\n<span class=\"en-text\" style=\"display:none;\">Follow some of these rules and see if you don’t improve the readability of your code. If you are maintaining someone else’s code, use refactoring tools to help resolve these problems. It will pay off in the short term and continue to pay off in the long term.</span>\n</div>\n</div>"
    }
  ],
  "concepts": [
    {
      "id": "short-names",
      "title": {
        "en": "Short Names",
        "tr": "Kısa ve Öz İsimler (Short Names)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">İsimler açık olduğu sürece kısa olmaları tercih edilir. Gereksiz kelimeler ekleyerek ismi kalabalıklaştırmak yerine, bağlamı (class/namespace) kullanarak anlamı koruyun.</span><span class=\"en-text\" style=\"display:none;\">Shorter names are preferred as long as they remain clear. Instead of cluttering a name with unnecessary words, maintain meaning using context (class/namespace).</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Gereksiz uzun isim</span><span class=\"en-text\" style=\"display:none;\">BAD — Unnecessarily long name</span></span>\n<pre>class Employee {\n    private String employeeName;\n    private String employeePrimaryPostalAddress;\n}</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Kısa ve bağlama uygun</span><span class=\"en-text\" style=\"display:none;\">GOOD — Short and context-aware</span></span>\n<pre>class Employee {\n    private String name;\n    private String address;\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Eğer isim sınıfın adını tekrarlıyorsa (Employee.employeeName), bu bir \"noise word\" (gürültü kelimesi) işaretidir. Sınıf zaten bağlamı sağlar.</span><span class=\"en-text\" style=\"display:none;\">If a name repeats the class name (Employee.employeeName), it's a sign of a \"noise word.\" The class already provides the context.</span></div>"
    },
    {
      "id": "precise-names",
      "title": {
        "en": "Precise Names",
        "tr": "Keskin İsimler (Precise Names)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Aynı genel kategoriye giren ama farklı türdeki verileri ayırmak için spesifik terimler kullanın. \"Address\" genel bir terimdir; eğer farklı türlerini saklıyorsanız bunları belirtin.</span><span class=\"en-text\" style=\"display:none;\">Use specific terms to differentiate between data that falls into the same general category but is of different types. \"Address\" is general; if you store different types, specify them.</span></p>\n<h4><span class=\"tr-text\">İyi Örnek</span><span class=\"en-text\" style=\"display:none;\">Good Example</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Keskin ayrım</span><span class=\"en-text\" style=\"display:none;\">GOOD — Precise distinction</span></span>\n<pre>class NetworkConfiguration {\n    String mac;        // Fiziksel adres\n    String uri;        // Web adresi\n    String ip;         // Protokol adresi\n    String postal;     // Posta adresi\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">İsimleriniz ne kadar keskinse, okuyucunun dökümantasyona bakma ihtiyacı o kadar azalır. <code>URI</code> ismi <code>webAddress</code> isminden daha teknik ve keskindir.</span><span class=\"en-text\" style=\"display:none;\">The more precise your names, the less the reader needs to consult documentation. <code>URI</code> is more technical and precise than <code>webAddress</code>.</span></div>"
    },
    {
      "id": "renaming-fear",
      "title": {
        "en": "Fear of Renaming",
        "tr": "Yeniden Adlandırma Korkusu (Fear of Renaming)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Bir ismin kötü olduğunu fark ettiğinizde onu değiştirmekten çekinmeyin. Modern IDE'ler (IntelliJ, VS Code, vb.) \"Rename\" (Yeniden Adlandır) özelliği ile tüm projede güvenle değişiklik yapmanızı sağlar.</span><span class=\"en-text\" style=\"display:none;\">Don't hesitate to rename a name when you realize it's poor. Modern IDEs (IntelliJ, VS Code, etc.) allow you to safely make changes across the entire project with the \"Rename\" feature.</span></p>\n<div class=\"explanation\"><span class=\"tr-text\">Yazılım geliştirmede tek sabit değişimdir. İyi bir isim bulduğunuzda eskiyi çöpe atmak projenin sağlığı için en iyisidir.</span><span class=\"en-text\" style=\"display:none;\">The only constant in software development is change. Discarding the old when you find a better name is best for the project's health.</span></div>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Bir değişkenin ismini her okuduğunuzda \"bu aslında X olmalıydı\" diye düşünüyorsanız, hemen <code>Shift+F6</code> (veya ilgili kısayol) ile değiştirin. O saniyeyi harcamak, gelecekteki saatleri kurtarır.</span><span class=\"en-text\" style=\"display:none;\">If every time you read a variable's name you think \"this should actually be X,\" change it immediately with <code>Shift+F6</code> (or the relevant shortcut). Spending that second saves hours in the future.</span></div>"
    }
  ]
});
