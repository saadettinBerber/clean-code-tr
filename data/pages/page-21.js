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
    "en": "Make Meaningful Distinctions (devam) / Use Pronounceable Names",
    "tr": "Make Meaningful Distinctions (devam) / Use Pronounceable Names"
  },
  "title": {
    "en": "Anlamlı Ayrımlar (devam) & Telaffuz Edilebilir İsimler Kullanın",
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
      "title": {
        "en": "Number-Series Naming",
        "tr": "Numara Serili İsimlendirme (Number-Series Naming)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Numara serili isimlendirme (Number-series naming), parametrelere veya değişkenlere <code>a1</code>, <code>a2</code>, <code>a3</code> gibi ardışık numaralar eklemektir. Bu isimler yanlış bilgilendirici (disinformative) değildir — daha kötüsü, hiçbir bilgi vermezler (noninformative). Yazarın niyetini tamamen gizlerler. Kaynak ve hedef gibi açık roller varken numara kullanmak, okuyucuyu kodun amacını tahmin etmeye zorlar.</span><span class=\"en-text\" style=\"display:none;\">Number-series naming means appending sequential numbers like <code>a1</code>, <code>a2</code>, <code>a3</code> to parameters or variables. These names are not disinformative—they're worse: they're noninformative. They completely hide the author's intent. Using numbers when clear roles like source and target exist forces the reader to guess what the code does.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Numaralar niyet ifade etmez</span><span class=\"en-text\" style=\"display:none;\">BAD — Numbers express no intent</span></span>\n<pre>def merge_data(d1, d2, d3):\n    r1 = {}\n    for k1 in d1:\n        r1[k1] = d1[k1]\n    for k2 in d2:\n        if k2 not in r1:\n            r1[k2] = d2[k2]\n    for k3 in d3:\n        r1[k3] = d3[k3]\n    return r1</pre>\n<div class=\"explanation\"><span class=\"tr-text\"><code>d1</code>, <code>d2</code>, <code>d3</code> hangi verileri temsil ediyor? <code>r1</code> ne? Hangi sözlüğün önceliği var? Tüm bunları anlamak için kodun her satırını dikkatle okumak gerekir.</span><span class=\"en-text\" style=\"display:none;\">What data do <code>d1</code>, <code>d2</code>, <code>d3</code> represent? What is <code>r1</code>? Which dictionary has priority? You need to carefully read every line to understand any of this.</span></div>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Her parametre rolünü açıkça belirtir</span><span class=\"en-text\" style=\"display:none;\">GOOD — Each parameter clearly states its role</span></span>\n<pre>def merge_data(defaults, user_preferences, overrides):\n    merged = {}\n    for key in defaults:\n        merged[key] = defaults[key]\n    for key in user_preferences:\n        if key not in merged:\n            merged[key] = user_preferences[key]\n    for key in overrides:\n        merged[key] = overrides[key]\n    return merged</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Kendinizi bir fonksiyon parametresine numara eklerken bulduğunuzda durun ve sorun: \"Bu parametre ne rolü üstleniyor?\" Cevap her zaman numaradan daha iyi bir isim verecektir. <code>str1, str2</code> yerine <code>pattern, replacement</code>; <code>arr1, arr2</code> yerine <code>source, target</code> kullanın.</span><span class=\"en-text\" style=\"display:none;\">When you find yourself adding a number to a parameter, stop and ask: \"What role does this parameter play?\" The answer will always yield a better name than a number. Use <code>pattern, replacement</code> instead of <code>str1, str2</code>; <code>source, target</code> instead of <code>arr1, arr2</code>.</span></div>"
    },
    {
      "id": "noise-words",
      "title": {
        "en": "Noise Words",
        "tr": "Gürültü Kelimeleri (Noise Words)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Gürültü kelimeleri (Noise words), isimlere anlam katmadan uzunluk ekleyen gereksiz son eklerdir: <code>Info</code>, <code>Data</code>, <code>Object</code>, <code>String</code>, <code>Manager</code>. Bunlar derleyiciyi tatmin eder ama okuyucuya hiçbir şey söylemez. <code>CustomerInfo</code> ile <code>Customer</code> arasında ne fark var? <code>getActiveAccount()</code> ile <code>getActiveAccountInfo()</code> arasında? Bu tür isimler ayrım yapıyormuş gibi görünür, ama aslında yalnızca gürültü üretir.</span><span class=\"en-text\" style=\"display:none;\">Noise words are redundant suffixes that add length but not meaning: <code>Info</code>, <code>Data</code>, <code>Object</code>, <code>String</code>, <code>Manager</code>. They satisfy the compiler but tell the reader nothing. What's the difference between <code>CustomerInfo</code> and <code>Customer</code>? Between <code>getActiveAccount()</code> and <code>getActiveAccountInfo()</code>? Such names appear to make distinctions, but they actually only produce noise.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Gürültü kelimeleri sahte ayrımlar yaratıyor</span><span class=\"en-text\" style=\"display:none;\">BAD — Noise words create fake distinctions</span></span>\n<pre>// Bu sınıflardan hangisini kullanmalıyım?\nclass Order { ... }\nclass OrderData { ... }\nclass OrderInfo { ... }\nclass OrderObject { ... }\n\n// Bu fonksiyonlardan hangisini çağırmalıyım?\nfunction fetchUser(id) { ... }\nfunction fetchUserData(id) { ... }\nfunction fetchUserInfo(id) { ... }\n\n// Değişkenlerde de aynı sorun:\nconst nameString = \"Alice\";\nconst accountVariable = getAccount();</pre>\n<div class=\"explanation\"><span class=\"tr-text\">Dört farklı <code>Order</code> sınıfı var ama aralarındaki fark belli değil. <code>nameString</code> bir String olduğu zaten belli — <code>String</code> eklemek gürültüdür. <code>accountVariable</code> bir değişken olduğu aşikâr — <code>Variable</code> kelimesi tamamen gereksiz.</span><span class=\"en-text\" style=\"display:none;\">Four different <code>Order</code> classes exist but the difference is unclear. <code>nameString</code> is obviously a String — adding <code>String</code> is noise. <code>accountVariable</code> is obviously a variable — the word <code>Variable</code> is completely redundant.</span></div>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Her isim gerçek bir sorumluluk farkı taşıyor</span><span class=\"en-text\" style=\"display:none;\">GOOD — Each name carries a real responsibility difference</span></span>\n<pre>// Her sınıfın belirgin bir sorumluluğu var\nclass Order { ... }               // Sipariş domain modeli\nclass OrderSummary { ... }        // Özet görünüm (listeleme için)\nclass OrderShipmentDetails { ... } // Kargo bilgileri\n\n// Fonksiyonlar farklı şeyler döndürür\nfunction fetchUserProfile(id) { ... }    // İsim, avatar, bio\nfunction fetchUserPermissions(id) { ... } // Roller ve yetkiler\n\n// Değişkenler açık ve yalın\nconst customerName = \"Alice\";\nconst savingsAccount = getAccount();</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Bir isimden <code>Info</code>, <code>Data</code>, <code>Object</code> veya <code>String</code> son ekini çıkarın. Eğer anlam değişmiyorsa, o son ek gürültüdür ve kaldırılmalıdır. Eğer gerçekten farklı bir şeyi temsil ediyorsa, o zaman \"farklılığın ne olduğunu\" isimde açıkça belirtin: <code>OrderSummary</code> vs <code>OrderShipmentDetails</code> gibi.</span><span class=\"en-text\" style=\"display:none;\">Remove the <code>Info</code>, <code>Data</code>, <code>Object</code>, or <code>String</code> suffix from a name. If the meaning doesn't change, that suffix is noise and should be removed. If it truly represents something different, then explicitly state \"what the difference is\" in the name: like <code>OrderSummary</code> vs <code>OrderShipmentDetails</code>.</span></div>"
    },
    {
      "id": "pronounceable-names",
      "title": {
        "en": "Use Pronounceable Names",
        "tr": "Telaffuz Edilebilir İsimler Kullanın (Use Pronounceable Names)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Programlama sosyal bir aktivitedir. Kod hakkında konuşurken, değişken ve fonksiyon isimlerini sesli olarak söyleyebilmeniz gerekir. Beynimizin büyük bir bölümü konuşma dilini işlemeye adanmıştır — telaffuz edilemeyen isimler kullanmak bu kapasiteyi boşa harcamaktır. <code>genymdhms</code> gibi kısaltmalar ekip içinde iletişimi imkânsız hale getirir.</span><span class=\"en-text\" style=\"display:none;\">Programming is a social activity. When discussing code, you need to be able to say variable and function names out loud. A huge part of our brains is dedicated to processing spoken language — using unpronounceable names wastes that capacity. Abbreviations like <code>genymdhms</code> make team communication impossible.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Telaffuz edilemeyen kısaltmalar</span><span class=\"en-text\" style=\"display:none;\">BAD — Unpronounceable abbreviations</span></span>\n<pre>class MktgCmpgn {\n    private String cmpgnNm;\n    private Date strtDt;\n    private Date endDt;\n    private int tgtAudSz;\n    private double bdgtAmt;\n\n    public double calcROI(double rvn) {\n        return (rvn - bdgtAmt) / bdgtAmt;\n    }\n}</pre>\n<div class=\"explanation\"><span class=\"tr-text\">\"Hey, em-kay-tee-jee-see-em-pee-jee-en'daki see-em-pee-jee-en-en-em'i kontrol eder misin?\" — Ekip toplantısında bu isimleri konuşmak imkânsızdır. Her kısaltma bir bulmaca haline gelir.</span><span class=\"en-text\" style=\"display:none;\">\"Hey, can you check the see-em-pee-jee-en-en-em in the em-kay-tee-jee-see-em-pee-jee-en?\" — It's impossible to discuss these names in a team meeting. Every abbreviation becomes a puzzle.</span></div>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Doğal dilde konuşulabilir isimler</span><span class=\"en-text\" style=\"display:none;\">GOOD — Names you can say in natural language</span></span>\n<pre>class MarketingCampaign {\n    private String campaignName;\n    private Date startDate;\n    private Date endDate;\n    private int targetAudienceSize;\n    private double budgetAmount;\n\n    public double calculateROI(double revenue) {\n        return (revenue - budgetAmount) / budgetAmount;\n    }\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Basit bir test: yazdığınız ismi bir iş arkadaşınıza sesli olarak söylemeyi hayal edin. \"Marketing campaign'daki campaign name'i güncelledim\" doğal gelir. \"Em-kay-tee-jee'deki see-em-pee-jee-en-en-em'i güncelledim\" diye kimse konuşmak istemez. Eğer ismi sesli okuyamıyorsanız, yeniden adlandırın.</span><span class=\"en-text\" style=\"display:none;\">Simple test: imagine saying the name out loud to a colleague. \"I updated the campaign name in marketing campaign\" sounds natural. Nobody wants to say \"I updated the see-em-pee-jee-en-en-em in em-kay-tee-jee.\" If you can't read the name aloud, rename it.</span></div>"
    }
  ]
});
