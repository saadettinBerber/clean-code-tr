window.PAGE({
  "id": "page-21",
  "page": 21,
  "pdf_page": 52,
  "chapter": {
    "num": 2,
    "en": "Meaningful Names",
    "tr": "Anlamlı İsimler"
  },
  "section": {
    "en": "Make Meaningful Distinctions (cont.) / Use Pronounceable Names",
    "tr": "Anlamlı Ayrımlar Yapın (devam) / Telaffuz Edilebilir İsimler Kullanın"
  },
  "title": {
    "en": "Meaningful Distinctions (cont.) & Use Pronounceable Names",
    "tr": "Anlamlı Ayrımlar (devam) & Telaffuz Edilebilir İsimler Kullanın"
  },
  "blocks": [
    {
      "type": "para",
      "sentences": [
        {
          "en": "Number-series naming (<code>a1</code>, <code>a2</code>, .. <code>aN</code>) is the opposite of intentional naming. Such names are not disinformative—they are noninformative; they provide no clue to the author's intention. Consider:",
          "tr": "Numara serili isimlendirme (Number-series naming) (<code>a1</code>, <code>a2</code>, .. <code>aN</code>) niyet belirten isimlendirmenin (intentional naming) tam tersidir. Bu tür isimler yanlış bilgilendirici (disinformative) değildir — bilgi vermezler (noninformative); yazarın niyeti hakkında hiçbir ipucu sağlamazlar. Şunu düşünün:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "public static void copyChars(char a1[], char a2[]) {\n  for (int i = 0; i < a1.length; i++) {\n    a2[i] = a1[i];\n  }\n}"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "This function reads much better when <code>source</code> and <code>destination</code> are used for the argument names.",
          "tr": "Bu fonksiyon, argüman isimleri olarak <code>source</code> ve <code>destination</code> kullanıldığında çok daha iyi okunur.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Noise words are another meaningless distinction. Imagine that you have a <code>Product</code> class. If you have another called <code>ProductInfo</code> or <code>ProductData</code>, you have made the names different without making them mean anything different. <code>Info</code> and <code>Data</code> are indistinct noise words like <code>a</code>, <code>an</code>, and <code>the</code>.",
          "tr": "Gürültü kelimeleri (Noise words) anlamsız ayrımların bir başka türüdür. Bir <code>Product</code> sınıfınız olduğunu düşünün. Bir de <code>ProductInfo</code> veya <code>ProductData</code> adında bir sınıf oluşturduysanız, isimleri farklı yapmışsınız ama anlamlarını farklılaştırmamışsınızdır. <code>Info</code> ve <code>Data</code>, tıpkı <code>a</code>, <code>an</code> ve <code>the</code> gibi, belirsiz gürültü kelimeleridir (noise words).",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Note that there is nothing wrong with using prefix conventions like <code>a</code> and <code>the</code> so long as they make a meaningful distinction. For example you might use <code>a</code> for all local variables and <code>the</code> for all function arguments.<sup>3</sup> The problem comes in when you decide to call a variable <code>theZork</code> because you already have another variable named <code>zork</code>.",
          "tr": "<code>a</code> ve <code>the</code> gibi önek kurallarını (prefix conventions) kullanmanın anlamlı bir ayrım yaptığı sürece yanlış bir tarafı olmadığını unutmayın. Örneğin, tüm yerel değişkenler için <code>a</code>, tüm fonksiyon argümanları için <code>the</code> kullanabilirsiniz.<sup>3</sup> Sorun, halihazırda <code>zork</code> adında bir değişkeniniz olduğu için <code>theZork</code> diye bir değişken oluşturmaya karar verdiğinizde ortaya çıkar.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Noise words are redundant. The word <code>variable</code> should never appear in a variable name. The word <code>table</code> should never appear in a table name. How is <code>NameString</code> better than <code>Name</code>? Would a <code>Name</code> ever be a floating point number? If so, it breaks an earlier rule about disinformation. Imagine finding one class named <code>Customer</code> and another named <code>CustomerObject</code>. What should you understand as the distinction? Which one will represent the best path to a customer's payment history?",
          "tr": "Gürültü kelimeleri (Noise words) gereksizdir. <code>variable</code> kelimesi asla bir değişken adında, <code>table</code> kelimesi asla bir tablo adında yer almamalıdır. <code>NameString</code>, <code>Name</code>'den nasıl daha iyidir? Bir <code>Name</code> hiç kayan noktalı sayı (floating point number) olabilir mi? Öyleyse, bu daha önceki yanlış bilgi (disinformation) kuralını da ihlal eder. Bir sınıfın <code>Customer</code>, diğerinin <code>CustomerObject</code> olarak adlandırıldığını düşünün. Ayrım olarak ne anlıyorsunuz? Hangisi müşterinin ödeme geçmişine giden en iyi yolu temsil eder?",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "There is an application we know of where this is illustrated. We've changed the names to protect the guilty, but here's the exact form of the error:",
          "tr": "Bu durumun yaşandığı bir uygulama biliyoruz. Suçluları korumak için isimleri değiştirdik, ama işte hatanın tam biçimi:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "getActiveAccount();\ngetActiveAccounts();\ngetActiveAccountInfo();"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "How are the programmers in this project supposed to know which of these functions to call?",
          "tr": "Bu projedeki programcılar, bu fonksiyonlardan hangisini çağırmaları gerektiğini nasıl bilecekler?",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "In the absence of specific conventions, the variable <code>moneyAmount</code> is indistinguishable from <code>money</code>, <code>customerInfo</code> is indistinguishable from <code>customer</code>, <code>accountData</code> is indistinguishable from <code>account</code>, and <code>theMessage</code> is indistinguishable from <code>message</code>. Distinguish names in such a way that the reader knows what the differences offer.",
          "tr": "Belirli kurallar olmadığında, <code>moneyAmount</code> değişkeni <code>money</code>'den, <code>customerInfo</code> ise <code>customer</code>'dan, <code>accountData</code> ise <code>account</code>'tan ve <code>theMessage</code> ise <code>message</code>'dan ayırt edilemez. İsimleri, okuyucunun farkların ne sunduğunu anlayacağı şekilde farklılaştırın.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Use Pronounceable Names",
      "tr": "Telaffuz Edilebilir İsimler Kullanın / Use Pronounceable Names",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Humans are good at words. A significant part of our brains is dedicated to the concept of words. And words are, by definition, pronounceable. It would be a shame not to take advantage of that huge portion of our brains that has evolved to deal with spoken language. So make your names pronounceable.",
          "tr": "İnsanlar kelimelerde iyidir. Beynimizin önemli bir bölümü kelime kavramına adanmıştır. Ve kelimeler, tanım gereği, telaffuz edilebilirdir. Konuşma diliyle başa çıkmak için evrimleşmiş beynimizin o devasa bölümünden yararlanmamak ayıp olur. Bu yüzden isimlerinizi telaffuz edilebilir yapın.",
          "html": true
        }
      ]
    },
    {
      "type": "footnote",
      "en": "<sup>3</sup> Uncle Bob used to do this in C++ but has given up the practice because modern IDEs make it unnecessary.",
      "tr": "<sup>3</sup> Uncle Bob bu uygulamayı eskiden C++'da kullanıyordu, ancak modern IDE'lerin bunu gereksiz kılması nedeniyle bu alışkanlıktan vazgeçti.",
      "html": true
    }
  ],
  "concepts": [
    {
      "id": "number-series",
      "kind": "code",
      "title": {
        "en": "Number-Series Naming",
        "tr": "Numara Serili İsimlendirme (Number-Series Naming)"
      },
      "summary": {
        "en": "Number-series naming means appending sequential numbers like `a1`, `a2`, `a3` to parameters or variables. These names are not disinformative—they're worse: they're noninformative. They completely hide the author's intent. Using numbers when clear roles like source and target exist forces the reader to guess what the code does.",
        "tr": "Numara serili isimlendirme (Number-series naming), parametrelere veya değişkenlere `a1`, `a2`, `a3` gibi ardışık numaralar eklemektir. Bu isimler yanlış bilgilendirici (disinformative) değildir — daha kötüsü, hiçbir bilgi vermezler (noninformative). Yazarın niyetini tamamen gizlerler. Kaynak ve hedef gibi açık roller varken numara kullanmak, okuyucuyu kodun amacını tahmin etmeye zorlar."
      },
      "bad": {
        "lang": "python",
        "code": "def merge_data(d1, d2, d3):\n    r1 = {}\n    for k1 in d1:\n        r1[k1] = d1[k1]\n    for k2 in d2:\n        if k2 not in r1:\n            r1[k2] = d2[k2]\n    for k3 in d3:\n        r1[k3] = d3[k3]\n    return r1",
        "why": {
          "en": "What data do `d1`, `d2`, `d3` represent? What is `r1`? Which dictionary has priority? You need to carefully read every line to understand any of this.",
          "tr": "`d1`, `d2`, `d3` hangi verileri temsil ediyor? `r1` ne? Hangi sözlüğün önceliği var? Tüm bunları anlamak için kodun her satırını dikkatle okumak gerekir."
        }
      },
      "good": {
        "lang": "python",
        "code": "def merge_data(defaults, user_preferences, overrides):\n    merged = {}\n    for key in defaults:\n        merged[key] = defaults[key]\n    for key in user_preferences:\n        if key not in merged:\n            merged[key] = user_preferences[key]\n    for key in overrides:\n        merged[key] = overrides[key]\n    return merged",
        "why": {
          "en": "defaults, user_preferences, overrides name each parameter's role, so the merge is self-explanatory.",
          "tr": "defaults, user_preferences, overrides her parametrenin rolünü adlandırır; böylece birleştirme kendini açıklar."
        }
      },
      "tip": {
        "en": "When you find yourself adding a number to a parameter, stop and ask: \"What role does this parameter play?\" The answer will always yield a better name than a number. Use `pattern, replacement` instead of `str1, str2`; `source, target` instead of `arr1, arr2`.",
        "tr": "Kendinizi bir fonksiyon parametresine numara eklerken bulduğunuzda durun ve sorun: \"Bu parametre ne rolü üstleniyor?\" Cevap her zaman numaradan daha iyi bir isim verecektir. `str1, str2` yerine `pattern, replacement`; `arr1, arr2` yerine `source, target` kullanın."
      }
    },
    {
      "id": "noise-words",
      "kind": "code",
      "title": {
        "en": "Noise Words",
        "tr": "Gürültü Kelimeleri (Noise Words)"
      },
      "summary": {
        "en": "Noise words are redundant suffixes that add length but not meaning: `Info`, `Data`, `Object`, `String`, `Manager`. They satisfy the compiler but tell the reader nothing. What's the difference between `CustomerInfo` and `Customer`? Between `getActiveAccount()` and `getActiveAccountInfo()`? Such names appear to make distinctions, but they actually only produce noise.",
        "tr": "Gürültü kelimeleri (Noise words), isimlere anlam katmadan uzunluk ekleyen gereksiz son eklerdir: `Info`, `Data`, `Object`, `String`, `Manager`. Bunlar derleyiciyi tatmin eder ama okuyucuya hiçbir şey söylemez. `CustomerInfo` ile `Customer` arasında ne fark var? `getActiveAccount()` ile `getActiveAccountInfo()` arasında? Bu tür isimler ayrım yapıyormuş gibi görünür, ama aslında yalnızca gürültü üretir."
      },
      "bad": {
        "lang": "javascript",
        "code": "// Bu sınıflardan hangisini kullanmalıyım?\nclass Order { ... }\nclass OrderData { ... }\nclass OrderInfo { ... }\nclass OrderObject { ... }\n\n// Bu fonksiyonlardan hangisini çağırmalıyım?\nfunction fetchUser(id) { ... }\nfunction fetchUserData(id) { ... }\nfunction fetchUserInfo(id) { ... }\n\n// Değişkenlerde de aynı sorun:\nconst nameString = \"Alice\";\nconst accountVariable = getAccount();",
        "why": {
          "en": "Four different `Order` classes exist but the difference is unclear. `nameString` is obviously a String — adding `String` is noise. `accountVariable` is obviously a variable — the word `Variable` is completely redundant.",
          "tr": "Dört farklı `Order` sınıfı var ama aralarındaki fark belli değil. `nameString` bir String olduğu zaten belli — `String` eklemek gürültüdür. `accountVariable` bir değişken olduğu aşikâr — `Variable` kelimesi tamamen gereksiz."
        }
      },
      "good": {
        "lang": "javascript",
        "code": "// Her sınıfın belirgin bir sorumluluğu var\nclass Order { ... }               // Sipariş domain modeli\nclass OrderSummary { ... }        // Özet görünüm (listeleme için)\nclass OrderShipmentDetails { ... } // Kargo bilgileri\n\n// Fonksiyonlar farklı şeyler döndürür\nfunction fetchUserProfile(id) { ... }    // İsim, avatar, bio\nfunction fetchUserPermissions(id) { ... } // Roller ve yetkiler\n\n// Değişkenler açık ve yalın\nconst customerName = \"Alice\";\nconst savingsAccount = getAccount();",
        "why": {
          "en": "Every class and function name states a distinct responsibility, so the difference is real and explainable.",
          "tr": "Her sınıf ve fonksiyon adı ayrı bir sorumluluk belirtir; fark gerçek ve açıklanabilirdir."
        }
      },
      "tip": {
        "en": "Remove the `Info`, `Data`, `Object`, or `String` suffix from a name. If the meaning doesn't change, that suffix is noise and should be removed. If it truly represents something different, then explicitly state \"what the difference is\" in the name: like `OrderSummary` vs `OrderShipmentDetails`.",
        "tr": "Bir isimden `Info`, `Data`, `Object` veya `String` son ekini çıkarın. Eğer anlam değişmiyorsa, o son ek gürültüdür ve kaldırılmalıdır. Eğer gerçekten farklı bir şeyi temsil ediyorsa, o zaman \"farklılığın ne olduğunu\" isimde açıkça belirtin: `OrderSummary` vs `OrderShipmentDetails` gibi."
      }
    },
    {
      "id": "pronounceable-names",
      "kind": "code",
      "title": {
        "en": "Use Pronounceable Names",
        "tr": "Telaffuz Edilebilir İsimler Kullanın (Use Pronounceable Names)"
      },
      "summary": {
        "en": "Programming is a social activity. When discussing code, you need to be able to say variable and function names out loud. A huge part of our brains is dedicated to processing spoken language — using unpronounceable names wastes that capacity. Abbreviations like `genymdhms` make team communication impossible.",
        "tr": "Programlama sosyal bir aktivitedir. Kod hakkında konuşurken, değişken ve fonksiyon isimlerini sesli olarak söyleyebilmeniz gerekir. Beynimizin büyük bir bölümü konuşma dilini işlemeye adanmıştır — telaffuz edilemeyen isimler kullanmak bu kapasiteyi boşa harcamaktır. `genymdhms` gibi kısaltmalar ekip içinde iletişimi imkânsız hale getirir."
      },
      "bad": {
        "lang": "java",
        "code": "class MktgCmpgn {\n    private String cmpgnNm;\n    private Date strtDt;\n    private Date endDt;\n    private int tgtAudSz;\n    private double bdgtAmt;\n\n    public double calcROI(double rvn) {\n        return (rvn - bdgtAmt) / bdgtAmt;\n    }\n}",
        "why": {
          "en": "\"Hey, can you check the see-em-pee-jee-en-en-em in the em-kay-tee-jee-see-em-pee-jee-en?\" — It's impossible to discuss these names in a team meeting. Every abbreviation becomes a puzzle.",
          "tr": "\"Hey, em-kay-tee-jee-see-em-pee-jee-en'daki see-em-pee-jee-en-en-em'i kontrol eder misin?\" — Ekip toplantısında bu isimleri konuşmak imkânsızdır. Her kısaltma bir bulmaca haline gelir."
        }
      },
      "good": {
        "lang": "java",
        "code": "class MarketingCampaign {\n    private String campaignName;\n    private Date startDate;\n    private Date endDate;\n    private int targetAudienceSize;\n    private double budgetAmount;\n\n    public double calculateROI(double revenue) {\n        return (revenue - budgetAmount) / budgetAmount;\n    }\n}",
        "why": {
          "en": "MarketingCampaign, campaignName, startDate — names you can say in a meeting without decoding.",
          "tr": "MarketingCampaign, campaignName, startDate — toplantıda deşifre etmeden söyleyebileceğiniz isimler."
        }
      },
      "tip": {
        "en": "Simple test: imagine saying the name out loud to a colleague. \"I updated the campaign name in marketing campaign\" sounds natural. Nobody wants to say \"I updated the see-em-pee-jee-en-en-em in em-kay-tee-jee.\" If you can't read the name aloud, rename it.",
        "tr": "Basit bir test: yazdığınız ismi bir iş arkadaşınıza sesli olarak söylemeyi hayal edin. \"Marketing campaign'daki campaign name'i güncelledim\" doğal gelir. \"Em-kay-tee-jee'deki see-em-pee-jee-en-en-em'i güncelledim\" diye kimse konuşmak istemez. Eğer ismi sesli okuyamıyorsanız, yeniden adlandırın."
      }
    }
  ]
});
