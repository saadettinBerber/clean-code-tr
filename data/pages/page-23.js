window.PAGE({
  "id": "page-23",
  "page": 23,
  "pdf_page": 54,
  "chapter": {
    "num": 2,
    "en": "Meaningful Names",
    "tr": "Anlamlı İsimler"
  },
  "section": {
    "en": "Searchable Names (cont.) / Avoid Encodings / Hungarian Notation",
    "tr": "Aranabilir İsimler (devam) / Kodlamalardan Kaçının / Macar Notasyonu"
  },
  "title": {
    "en": "Searchable Names (cont.), Avoid Encodings & Hungarian Notation",
    "tr": "Aranabilir İsimler (devam), Kodlamalardan Kaçının & Macar Notasyonu"
  },
  "blocks": [
    {
      "type": "para",
      "sentences": [
        {
          "en": "Heuristic [N5]. If a variable or constant might be seen or used in multiple places in a body of code, it is imperative to give it a search-friendly name. Once again compare",
          "tr": "Sezgisel (Heuristic) [N5]. Eğer bir değişken veya sabit, bir kod gövdesinin birden fazla yerinde görülüyor veya kullanılıyorsa, ona arama dostu bir isim (search-friendly name) vermek zorunludur. Bir kez daha şunları karşılaştırın:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "for (int j=0; j<34; j++) {\n  s += (t[j]*4)/5;\n}"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "to",
          "tr": "ve şunları:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "int realDaysPerIdealDay = 4;\nconst int WORK_DAYS_PER_WEEK = 5;\nint sum = 0;\nfor (int j=0; j < NUMBER_OF_TASKS; j++) {\n  int realTaskDays = taskEstimate[j] * realDaysPerIdealDay;\n  int realTaskWeeks = (realdays / WORK_DAYS_PER_WEEK);\n  sum += realTaskWeeks;\n}"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Note that <code>sum</code>, above, is not a particularly useful name but at least is searchable. The intentionally named code makes for a longer function, but consider how much easier it will be to find <code>WORK_DAYS_PER_WEEK</code> than to find all the places where 5 was used and filter the list down to just the instances with the intended meaning.",
          "tr": "Yukarıdaki <code>sum</code> isminin pek kullanışlı bir isim olmadığını, ancak en azından aranabilir (searchable) olduğunu unutmayın. Niyet belirtilerek isimlendirilmiş kod daha uzun bir fonksiyon oluşturur, ancak <code>WORK_DAYS_PER_WEEK</code> ismini bulmanın, 5 sayısının kullanıldığı tüm yerleri bulup listeyi sadece hedeflenen anlamdaki örneklerle sınırlamaktan ne kadar daha kolay olacağını düşünün.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Avoid Encodings",
      "tr": "Kodlamalardan Kaçının / Avoid Encodings",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "We have enough encodings to deal with without adding more to our burden. Encoding type or scope information into names simply adds an extra burden of deciphering. It hardly seems reasonable to require each new employee to learn yet another encoding “language” in addition to learning the (usually considerable) body of code that they’ll be working in. It is an unnecessary mental burden when trying to solve a problem. Encoded names are seldom pronounceable and are easy to mis-type.",
          "tr": "Yükümüze yenilerini eklemeden, uğraşmamız gereken yeterince kodlamamız (encoding) zaten var. İsimlerin içine tür (type) veya kapsam (scope) bilgisini kodlamak, deşifre etmek (deciphering) için ekstra bir yük ekler. Her yeni çalışanın, içinde çalışacağı (genellikle hatırı sayılır büyüklükteki) kod gövdesini öğrenmesine ek olarak bir de başka bir kodlama \"dilini\" öğrenmesini istemek pek makul görünmemektedir. Bir problemi çözmeye çalışırken bu, gereksiz bir zihinsel yüktür (mental burden). Kodlanmış isimler nadiren telaffuz edilebilir (pronounceable) ve yanlış yazılmaları (mis-type) kolaydır.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Hungarian Notation",
      "tr": "Macar Notasyonu / Hungarian Notation",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "In days of old, when we worked in name-length-challenged languages, we violated this rule out of necessity, and with regret. Fortran forced encodings by making the first letter a code for the type. Early versions of BASIC allowed only a letter plus one digit. Hungarian Notation (HN) took this to a whole new level.",
          "tr": "Eskiden, isim uzunluğu kısıtlı dillerle çalıştığımızda, bu kuralı zorunluluktan ve pişmanlıkla ihlal ederdik. Fortran, ilk harfi tür (type) için bir kod yaparak kodlamaları zorunlu kılıyordu. BASIC'in ilk sürümleri sadece bir harf artı bir rakama izin veriyordu. Macar Notasyonu (Hungarian Notation - HN), bunu bambaşka bir seviyeye taşıdı.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "HN was considered to be pretty important back in the Windows C API, when everything was an integer handle or a long pointer or a void pointer, or one of several implementations of “string” (with different uses and attributes). The compiler did not check types in those days, so the programmers needed a crutch to help them remember the types.",
          "tr": "Windows C API döneminde, her şey bir tamsayı tanıtıcısı (integer handle), uzun bir işaretçi (long pointer) veya boş bir işaretçi (void pointer) ya da \"metin dizisinin\" (string) (farklı kullanımları ve öznitelikleri olan) birkaç uygulamasından (implementation) biri olduğunda, HN oldukça önemli kabul edilirdi. O günlerde derleyici (compiler) türleri kontrol etmezdi, bu yüzden programcıların türleri hatırlamalarına yardımcı olacak bir dayanağa ihtiyaçları vardı.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "In modern languages we have much richer type systems, and the compilers remember and enforce the types. What’s more, there is a trend toward smaller classes and shorter functions so that people can usually see the point of declaration of each variable they’re using.",
          "tr": "Modern dillerde çok daha zengin tür sistemlerine (type systems) sahibiz ve derleyiciler türleri hatırlar ve zorunlu kılar (enforce). Dahası, küçük sınıflara (class) ve kısa fonksiyonlara (function) doğru bir eğilim var; böylece insanlar kullandıkları her değişkenin tanımlandığı noktayı (point of declaration) genellikle görebiliyorlar.",
          "html": true
        }
      ]
    }
  ],
  "concepts": [
    {
      "id": "searchable-names",
      "kind": "code",
      "title": {
        "en": "Searchable Names",
        "tr": "Aranabilir İsimler (Searchable Names)"
      },
      "summary": {
        "en": "\"Magic numbers\" or single-letter variables used in code make searching impossible. For example, searching for \"5\" yields hundreds of results, but searching for `WORK_DAYS_PER_WEEK` leads you directly to the relevant places. The length of a name should be proportional to its scope in the code.",
        "tr": "Kod içerisinde kullanılan \"sihirli sayılar\" (magic numbers) veya tek harfli değişkenler aramayı imkansız hale getirir. Örneğin \"5\" sayısını arattığınızda karşınıza yüzlerce sonuç çıkar ama `WORK_DAYS_PER_WEEK` arattığınızda doğrudan ilgili yerlere ulaşırsınız. İsmin uzunluğu, o ismin kod içerisindeki kapsamının (scope) büyüklüğüyle orantılı olmalıdır."
      },
      "bad": {
        "lang": "javascript",
        "code": "if (user.status == 4) {\n    // 4 ne anlama geliyor?\n    applyDiscount(0.15);\n}",
        "why": {
          "en": "Searching for \"4\" or \"0.15\" in the codebase results in many irrelevant hits. The meaning of these values is hidden from the reader.",
          "tr": "\"4\" veya \"0.15\" değerlerini kod tabanında arattığınızda birçok ilgisiz yerle karşılaşırsınız. Bu değerlerin anlamı kod okuyucusu için gizlidir."
        }
      },
      "good": {
        "lang": "javascript",
        "code": "const STATUS_GOLD_MEMBER = 4;\nconst GOLD_LOYALTY_DISCOUNT = 0.15;\n\nif (user.status == STATUS_GOLD_MEMBER) {\n    applyDiscount(GOLD_LOYALTY_DISCOUNT);\n}",
        "why": {
          "en": "Named constants make the values '4' and '0.15' findable and their intent explicit.",
          "tr": "Adlandırılmış sabitler '4' ve '0.15' değerlerini aranabilir, niyetlerini açık yapar."
        }
      },
      "tip": {
        "en": "If a number or character is used more than once in the code or is likely to be searched for in the future, always turn it into a named constant.",
        "tr": "Bir sayı veya karakter kod içerisinde birden fazla kez kullanılıyorsa veya gelecekte aranma ihtimali varsa, onu mutlaka isimlendirilmiş bir sabite dönüştürün."
      }
    },
    {
      "id": "avoid-encodings",
      "kind": "code",
      "title": {
        "en": "Avoid Encodings",
        "tr": "Kodlamalardan Kaçınmak (Avoid Encodings)"
      },
      "summary": {
        "en": "Including type or scope information in variable names requires the reader to perform a mental decoding task. Since modern IDEs already show type information instantly, such extra info only creates \"noise\" and makes it harder to change the code.",
        "tr": "Değişken isimlerine tür (type) veya kapsam (scope) bilgisini dahil etmek, okuyucunun ismi anlamak için zihinsel bir deşifre işlemi yapmasını gerektirir. Modern IDE'ler zaten tür bilgisini anlık olarak gösterdiği için bu tür ek bilgiler sadece \"gürültü\" (noise) yaratır ve kodun değiştirilmesini zorlaştırır."
      },
      "bad": {
        "lang": "javascript",
        "code": "let strCustomerName = \"Alice\";\nlet iUserAge = 25;\nlet listActiveOrders = [];",
        "why": {
          "en": "Prefixes like `str`, `i`, or `list` don't add meaning; they only state the type. If the variable's type changes, you have to update the name everywhere.",
          "tr": "`str`, `i` veya `list` gibi önekler (prefixes) değişkene anlam katmaz, sadece türünü söyler. Değişkenin türü değişirse ismi de her yerde güncellemeniz gerekir."
        }
      },
      "good": {
        "lang": "javascript",
        "code": "let customerName = \"Alice\";\nlet age = 25;\nlet activeOrders = [];",
        "why": {
          "en": "Without str/i/list prefixes the name carries only intent, and the type may change freely.",
          "tr": "str/i/list önekleri olmadan isim yalnızca niyeti taşır; tür serbestçe değişebilir."
        }
      },
      "tip": {
        "en": "Focus on the question \"What is this for?\" rather than \"What is this?\" when choosing names. Leave the type information to the compiler and the IDE.",
        "tr": "İsim seçerken \"Bu ne?\" sorusundan ziyade \"Bu ne için?\" sorusuna odaklanın. Tür bilgisini derleyiciye ve IDE'ye bırakın."
      }
    },
    {
      "id": "mental-burden",
      "kind": "code",
      "title": {
        "en": "Mental Burden",
        "tr": "Zihinsel Yük (Mental Burden)"
      },
      "summary": {
        "en": "When reading poorly named code, our brain constantly has to translate names into their real meanings. For instance, remembering that `r` means \"URL\" is a mental burden. In clean code, names are so clear that the reader doesn't need to rely on their memory.",
        "tr": "Kötü isimlendirilmiş bir kodu okurken, beynimiz sürekli olarak isimleri gerçek anlamlarına tercüme etmek zorunda kalır. Örneğin `r` isminin \"URL\" anlamına geldiğini hatırlamak bir zihinsel yüktür. Temiz kodda isimler o kadar açıktır ki, okuyucunun hafızasına güvenmesine gerek kalmaz."
      },
      "bad": {
        "lang": "javascript",
        "code": "for (let i = 0; i < u.length; i++) {\n    send(u[i], m);\n}",
        "why": {
          "en": "What is `u`? What is `m`? The reader has to find the meaning of these variables from the top and keep them in mind.",
          "tr": "`u` ne? `m` ne? Okuyucu bu değişkenlerin anlamını kodun üst kısımlarından bulup aklında tutmak zorundadır."
        }
      },
      "good": {
        "lang": "javascript",
        "code": "for (const recipient of recipients) {\n    sendMessage(recipient, welcomeTemplate);\n}",
        "why": {
          "en": "recipients and welcomeTemplate make the loop read without a translation dictionary.",
          "tr": "recipients ve welcomeTemplate döngüyü çeviri sözlüğü olmadan okunur kılar."
        }
      },
      "tip": {
        "en": "When naming a variable, think about what someone who has never seen that name before would understand. If a \"translation dictionary\" is needed, the name is bad.",
        "tr": "Bir değişkenin adını koyarken, o ismi daha önce hiç görmemiş birinin ne anlayacağını düşünün. Eğer bir \"çeviri sözlüğüne\" ihtiyaç duyuluyorsa, isim kötüdür."
      }
    },
    {
      "id": "hungarian-notation",
      "kind": "code",
      "title": {
        "en": "Hungarian Notation",
        "tr": "Macar Notasyonu (Hungarian Notation)"
      },
      "summary": {
        "en": "Hungarian Notation is the convention of adding abbreviations indicating the data type to the beginning of variable names. In the 1980s, when compilers didn't check types and IDEs were inadequate, it was vital for Windows programmers. Today, however, strong type systems and smart IDEs of modern languages have made this notation completely redundant and a burden that hampers readability.",
        "tr": "Macar Notasyonu, değişken isimlerinin başına veri türünü belirten kısaltmalar ekleme geleneğidir. 1980'lerde, derleyicilerin tür kontrolü yapmadığı ve IDE'lerin yetersiz olduğu dönemlerde Windows programcıları için hayati önem taşıyordu. Ancak günümüzde modern dillerin güçlü tür sistemleri ve akıllı IDE'leri bu notasyonu tamamen gereksiz ve okunabilirliği bozan bir yük haline getirmiştir."
      },
      "bad": {
        "lang": "c",
        "code": "char* lpszName; // Long Pointer to String Zero-terminated\nint iCount;     // Integer\nbool bIsEnabled; // Boolean",
        "why": {
          "en": "Back then, these names served as a \"crutch\" to remember the type. Today, they only cause confusion.",
          "tr": "Bu isimler o zamanlar türü hatırlamak için bir \"koltuk değneği\" görevi görüyordu. Günümüzde ise sadece kafa karıştırır."
        }
      },
      "good": {
        "lang": "java",
        "code": "String name;\nint count;\nboolean isEnabled;",
        "why": {
          "en": "name, count, isEnabled say what the value is, not what type it has.",
          "tr": "name, count, isEnabled değerin ne olduğunu söyler, hangi türde olduğunu değil."
        }
      },
      "tip": {
        "en": "If you need to read the type of a variable from its name, either your function is too long or your class is too complex. Derive names from intent, not from type.",
        "tr": "Eğer kodunuzda bir değişkenin türünü isminden okumaya ihtiyaç duyuyorsanız, ya fonksiyonunuz çok uzundur ya da sınıfınız çok karmaşıktır. İsimleri türden değil, niyetten türetin."
      }
    }
  ]
});
