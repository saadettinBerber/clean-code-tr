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
      "type": "heading",
      "level": 1,
      "tr": "Son Sözler / Final Words",
      "en": "Final Words"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "The hardest thing about choosing good names is that it requires good descriptive skills and a shared cultural background. This is a teaching issue, not a technical, business, or management issue.",
          "tr": "İyi isimler seçmenin en zor yanı, iyi betimleyici beceriler ve paylaşılan kültürel bir arka plan gerektirmesidir. Bu bir öğretme meselesidir, teknik, iş veya yönetim meselesi değil."
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "People are also afraid of renaming things for fear that some other developers will object. We do not share that fear and find that we are actually grateful when names change (for the better).",
          "tr": "İnsanlar başka geliştiricilerin itiraz edeceği korkusuyla isimleri değiştirmekten korkar. Biz bu korkuyu paylaşmıyoruz ve isimlerin (daha iyiye) değiştiğinde minnettar olduğumuzu buluyoruz."
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "We use modern tools to help us, so we can focus on whether the code reads like paragraphs and sentences. You might surprise someone when you rename, just as you might with any other code improvement. Don’t let it stop you.",
          "tr": "Kodun paragraflar ve cümleler gibi okunup okunmadığına odaklanabilmek için modern araçları kullanırız. İsim değiştirirken birini şaşırtabilirsiniz, tıpkı diğer kod iyileştirmelerinde (improvements) olduğu gibi. Bunun sizi durdurmasına izin vermeyin."
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Follow some of these rules and see if you don’t improve the readability of your code. If you are maintaining someone else’s code, use refactoring tools to help resolve these problems. It will pay off in the short term and continue to pay off in the long term.",
          "tr": "Bu kurallardan bazılarını uygulayın ve kodunuzun okunabilirliğinin gelişip gelişmediğine bakın. Başkasının kodunu sürdürüyorsanız (maintaining), bu sorunları çözmeye yardımcı olmak için yeniden düzenleme (refactoring) araçlarını kullanın. Kısa vadede ve uzun vadede karşılığını verecektir."
        }
      ]
    }
  ],
  "concepts": [
    {
      "id": "short-names",
      "kind": "code",
      "title": {
        "en": "Short Names",
        "tr": "Kısa ve Öz İsimler (Short Names)"
      },
      "summary": {
        "en": "Shorter names are preferred as long as they remain clear. Instead of cluttering a name with unnecessary words, maintain meaning using context (class/namespace).",
        "tr": "İsimler açık olduğu sürece kısa olmaları tercih edilir. Gereksiz kelimeler ekleyerek ismi kalabalıklaştırmak yerine, bağlamı (class/namespace) kullanarak anlamı koruyun."
      },
      "bad": {
        "lang": "java",
        "code": "class Employee {\n    private String employeeName;\n    private String employeePrimaryPostalAddress;\n}",
        "why": {
          "en": "employeeName inside Employee repeats context that the class already provides.",
          "tr": "Employee içinde employeeName, sınıfın zaten sağladığı bağlamı tekrarlar."
        }
      },
      "good": {
        "lang": "java",
        "code": "class Employee {\n    private String name;\n    private String address;\n}",
        "why": {
          "en": "name and address are short precisely because the class carries the context.",
          "tr": "name ve address, bağlamı sınıf taşıdığı için kısadır."
        }
      },
      "tip": {
        "en": "If a name repeats the class name (Employee.employeeName), it's a sign of a \"noise word.\" The class already provides the context.",
        "tr": "Eğer isim sınıfın adını tekrarlıyorsa (Employee.employeeName), bu bir \"noise word\" (gürültü kelimesi) işaretidir. Sınıf zaten bağlamı sağlar."
      }
    },
    {
      "id": "precise-names",
      "kind": "code",
      "title": {
        "en": "Precise Names",
        "tr": "Keskin İsimler (Precise Names)"
      },
      "summary": {
        "en": "Use specific terms to differentiate between data that falls into the same general category but is of different types. \"Address\" is general; if you store different types, specify them.",
        "tr": "Aynı genel kategoriye giren ama farklı türdeki verileri ayırmak için spesifik terimler kullanın. \"Address\" genel bir terimdir; eğer farklı türlerini saklıyorsanız bunları belirtin."
      },
      "bad": {
        "lang": "java",
        "code": "class NetworkConfiguration {\n    String address1;\n    String address2;\n    String address3;\n}",
        "why": {
          "en": "Generic address1/2/3 do not say which kind of address each field holds.",
          "tr": "Genel address1/2/3 her alanın hangi tür adres tuttuğunu söylemez."
        }
      },
      "good": {
        "lang": "java",
        "code": "class NetworkConfiguration {\n    String mac;        // Fiziksel adres\n    String uri;        // Web adresi\n    String ip;         // Protokol adresi\n    String postal;     // Posta adresi\n}",
        "why": {
          "en": "mac, uri, ip, postal name each address type precisely, so no documentation is needed.",
          "tr": "mac, uri, ip, postal her adres türünü kesin adlandırır; belgeye gerek kalmaz."
        }
      },
      "tip": {
        "en": "The more precise your names, the less the reader needs to consult documentation. `URI` is more technical and precise than `webAddress`.",
        "tr": "İsimleriniz ne kadar keskinse, okuyucunun dökümantasyona bakma ihtiyacı o kadar azalır. `URI` ismi `webAddress` isminden daha teknik ve keskindir."
      }
    },
    {
      "id": "renaming-fear",
      "kind": "explain",
      "title": {
        "en": "Fear of Renaming",
        "tr": "Yeniden Adlandırma Korkusu (Fear of Renaming)"
      },
      "summary": {
        "en": "Don't hesitate to rename a name when you realize it's poor. Modern IDEs (IntelliJ, VS Code, etc.) allow you to safely make changes across the entire project with the \"Rename\" feature. The only constant in software development is change. Discarding the old when you find a better name is best for the project's health.",
        "tr": "Bir ismin kötü olduğunu fark ettiğinizde onu değiştirmekten çekinmeyin. Modern IDE'ler (IntelliJ, VS Code, vb.) \"Rename\" (Yeniden Adlandır) özelliği ile tüm projede güvenle değişiklik yapmanızı sağlar. Yazılım geliştirmede tek sabit değişimdir. İyi bir isim bulduğunuzda eskiyi çöpe atmak projenin sağlığı için en iyisidir."
      },
      "tip": {
        "en": "If every time you read a variable's name you think \"this should actually be X,\" change it immediately with `Shift+F6` (or the relevant shortcut). Spending that second saves hours in the future.",
        "tr": "Bir değişkenin ismini her okuduğunuzda \"bu aslında X olmalıydı\" diye düşünüyorsanız, hemen `Shift+F6` (veya ilgili kısayol) ile değiştirin. O saniyeyi harcamak, gelecekteki saatleri kurtarır."
      }
    }
  ]
});
