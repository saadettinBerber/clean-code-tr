window.PAGE({
  "id": "page-10",
  "page": 10,
  "pdf_page": 41,
  "chapter": {
    "num": 1,
    "en": "Clean Code",
    "tr": "Temiz Kod"
  },
  "section": {
    "en": "What Is Clean Code?",
    "tr": "What Is Clean Code?"
  },
  "title": {
    "en": "Michael Feathers & Ron Jeffries — Beck'in Basit Kod Kuralları",
    "tr": "Michael Feathers & Ron Jeffries — Beck'in Basit Kod Kuralları"
  },
  "blocks": [
    {
      "type": "para",
      "sentences": [
        {
          "en": "[ Continued from page 9 ]",
          "tr": "[ Sayfa 9'dan devam ]",
          "html": true
        }
      ],
      "style": "continuation"
    },
    {
      "type": "html",
      "html": "<div class=\"author-intro\">\n<span class=\"tr-text\">Michael Feathers, <em>Working Effectively with Legacy Code</em> kitabının yazarı</span>\n<span class=\"en-text\" style=\"display:none;\">Michael Feathers, author of Working Effectively with Legacy Code</span>\n</div>"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "I could list all of the qualities that I notice in clean code, but there is one overarching quality that leads to all of them. Clean code always looks like it was written by someone who cares. There is nothing obvious that you can do to make it better. All of those things were thought about by the code's author, and if you try to imagine improvements, you're led back to where you are, sitting in appreciation of the code someone left for you—code left by someone who cares deeply about the craft.",
          "tr": "Temiz kodda fark ettiğim tüm nitelikleri listeleyebilirdim, ancak hepsine yol açan bir üstün nitelik vardır. Temiz kod her zaman <em>önemseyen birinin</em> yazdığı gibi görünür. Onu daha iyi hale getirmek için yapabileceğin bariz bir şey yoktur. Kodun yazarı tüm bu şeyleri düşünmüştür ve iyileştirmeler hayal etmeye çalışırsan, bulunduğun yere geri dönersin — senin için bırakılan kodun karşısında takdirle oturursun — zanaata derinlemesine önemseyen birinin bıraktığı kod.",
          "html": true
        }
      ],
      "style": "quote"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "One word: care. That's really the topic of this book. Perhaps an appropriate subtitle would be How to Care for Code.",
          "tr": "Tek kelime: <em>önemseme</em> (care). Bu, bu kitabın asıl konusu. Belki de uygun bir alt başlık <em>Koda Nasıl Önemseme Gösterilir</em> (How to Care for Code) olurdu.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Michael hit it on the head. Clean code is code that has been taken care of. Someone has taken the time to keep it simple and orderly. They have paid appropriate attention to details. They have cared.",
          "tr": "Michael tam isabet etti. Temiz kod, özenle ilgilenilen (taken care of) koddur. Birisi onu basit ve düzenli tutmak için zaman ayırmıştır. Detaylara uygun şekilde dikkat etmiştir. Önemsemiştir.",
          "html": true
        }
      ]
    },
    {
      "type": "html",
      "html": "<div class=\"author-intro\">\n<span class=\"tr-text\">Ron Jeffries, <em>Extreme Programming Installed</em> ve <em>Extreme Programming Adventures in C#</em> kitaplarının yazarı</span>\n<span class=\"en-text\" style=\"display:none;\">Ron Jeffries, author of Extreme Programming Installed and Extreme Programming Adventures in C#</span>\n</div>"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Ron began his career programming in Fortran at the Strategic Air Command and has written code in almost every language and on almost every machine. It pays to consider his words carefully.",
          "tr": "Ron kariyerine Stratejik Hava Komutanlığı'nda (Strategic Air Command) Fortran programlama yaparak başladı ve neredeyse her dilde ve neredeyse her makinede kod yazdı. Sözlerini dikkatle değerlendirmek faydalıdır.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "In recent years I begin, and nearly end, with Beck's rules of simple code. In priority order, simple code: <br/>* Runs all the tests; <br/>* Contains no duplication; <br/>* Expresses all the design ideas that are in the system; <br/>* Minimizes the number of entities such as classes, methods, functions, and the like.",
          "tr": "Son yıllarda, Beck'in basit kod kurallarıyla başlıyorum ve neredeyse bunlarla bitiriyorum. Öncelik sırasına göre, basit kod: <br/>* Tüm testleri çalıştırır; <br/>* Tekrar (duplication) içermez; <br/>* Sistemdeki tüm tasarım fikirlerini ifade eder; <br>Sınıf, metot, fonksiyon ve benzeri varlıkların (entities) sayısını minimize eder.</br>",
          "html": true
        }
      ],
      "style": "quote"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Of these, I focus mostly on duplication. When the same thing is done over and over, it's a sign that there is an idea in our mind that is not well represented in the code. I try to figure out what it is. Then I try to express that idea more clearly.",
          "tr": "Bunların arasından ben çoğunlukla tekrara (duplication) odaklanırım. Aynı şey tekrar tekrar yapıldığında, bu zihnimizdeki bir fikrin kodda iyi temsil edilmediğinin işaretidir. Bunun ne olduğunu anlamaya çalışırım. Sonra bu fikri daha açık bir şekilde ifade etmeye çalışırım.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Expressiveness to me includes meaningful names, and I am likely to change the names of things several times before I settle in. With modern coding tools such as Eclipse, renaming is quite inexpensive, so it doesn't trouble me to change. Expressiveness goes beyond names, however.",
          "tr": "Benim için ifade gücü (expressiveness), anlamlı isimleri (meaningful names) içerir ve yerleşmeden önce şeylerin isimlerini birkaç kez değiştirme ihtimalim yüksektir. Eclipse gibi modern kodlama araçlarıyla yeniden adlandırma (renaming) oldukça ucuzdur, bu yüzden değiştirmek beni rahatsız etmez. Ancak ifade gücü isimlerin ötesine gider.",
          "html": true
        }
      ]
    }
  ],
  "concepts": [
    {
      "id": "care",
      "title": {
        "en": "Code Written by Someone Who Cares",
        "tr": "Kodu Önemsemek (Code Written by Someone Who Cares)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Michael Feathers'e göre temiz kodun en önemli özelliği şudur: \"Temiz kod her zaman önemseyen birinin yazdığı gibi görünür.\" Bu, teknik beceriden daha derin bir felsefedir. \"Önemseme\" (care), detaylara dikkat etmek, başkaları için düşünmek, kodun gelecekteki bakımcısını (muhtemelen kendinizi) düşünmek demektir. Feathers: \"Onu daha iyi hale getirmek için yapabileceğin bariz bir şey yoktur\" der — çünkü yazarı zaten her şeyi düşünmüştür. Bu, \"yeterince iyi\" (good enough) değil, \"özenle işlenmiş\" (crafted) kod demektir.</span><span class=\"en-text\" style=\"display:none;\">According to Michael Feathers, the most important quality of clean code is this: \"Clean code always looks like it was written by someone who cares.\" This is a philosophy deeper than technical skill. \"Care\" means paying attention to details, thinking about others, considering the future maintainer of the code (probably yourself). Feathers says: \"There is nothing obvious that you can do to make it better\" — because the author has already thought of everything. This isn't \"good enough\" code, it's \"crafted\" code.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Önemsenmemiş: aceleyle, \"işi görsün\" mantığıyla yazılmış</span><span class=\"en-text\" style=\"display:none;\">BAD — Uncared for: rushed, \"just make it work\" mentality</span></span>\n<pre>// Hızlıca yaptım, deadline yaklaşıyordu\nfunction calc(a, b, c) {\n    var r = a * b;\n    if (c == 'd') {\n        r = r / 30;\n    } else if (c == 'm') {\n        r = r / 365 * 30;\n    }\n    // TODO: refactor later\n    return r.toFixed(2);\n}</pre>\n<div class=\"explanation\"><span class=\"tr-text\">Bu kod \"çalışıyor\" ama önemsememenin işaretleri her yerde: anlamsız değişken adları (<code>a</code>, <code>b</code>, <code>c</code>), sihirli sayılar (30, 365), yorumlanmış TODO, hata yönetimi yok. Yazar \"sonra düzeltirim\" demiş ama Martin'in de dediği gibi: \"Sonra asla demektir\" (Later equals never).</span><span class=\"en-text\" style=\"display:none;\">This code \"works\" but signs of not caring are everywhere: meaningless variable names (<code>a</code>, <code>b</code>, <code>c</code>), magic numbers (30, 365), commented-out TODO, no error handling. The author said \"will fix later\" but as Martin says: \"Later equals never.\"</span></div>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Özenle yazılmış: her detay düşünülmüş</span><span class=\"en-text\" style=\"display:none;\">GOOD — Carefully crafted: every detail considered</span></span>\n<pre>enum InterestPeriod {\n    DAILY,\n    MONTHLY\n}\n\nclass InterestCalculator {\n    private static readonly DAYS_IN_MONTH = 30;\n    private static readonly DAYS_IN_YEAR = 365;\n\n    calculateDailyInterest(\n        principal: number,\n        annualRate: number,\n        period: InterestPeriod\n    ): Money {\n        this.validateInputs(principal, annualRate);\n        \n        const dailyRate = this.calculateDailyRate(annualRate);\n        const interest = principal * dailyRate;\n        \n        return period === InterestPeriod.MONTHLY\n            ? this.scaleToMonth(interest)\n            : Money.of(interest);\n    }\n\n    private calculateDailyRate(annualRate: number): number {\n        return annualRate / InterestCalculator.DAYS_IN_YEAR;\n    }\n\n    private scaleToMonth(dailyInterest: number): Money {\n        return Money.of(dailyInterest * InterestCalculator.DAYS_IN_MONTH);\n    }\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Her kod parçasını göndermeden önce kendinize şunu sorun: \"Bu kodu başka biri okuduğunda (veya 6 ay sonra ben), 'bu kişi kodu önemsiyor' hissine kapılacak mı?\" Eğer cevap hayırsa, bir kez daha düşünün. Önemseme (care), kodu yeniden yazma sürecinde gösterilir — isimleri iyileştirmek, sihirli sayıları sabitlere çevirmek, edge case'leri ele almak.</span><span class=\"en-text\" style=\"display:none;\">Before submitting any code, ask yourself: \"Will someone else reading this (or me in 6 months) get the feeling that this person cares about code?\" If the answer is no, think again. Care is shown in the rewriting process — improving names, converting magic numbers to constants, handling edge cases.</span></div>"
    },
    {
      "id": "simplecode",
      "title": {
        "en": "Beck's Rules of Simple Code",
        "tr": "Beck'in Basit Kod Kuralları (Beck's Rules of Simple Code)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Ron Jeffries, Kent Beck'in \"basit kod\" (simple code) kurallarını sıralar. Bu kurallar öncelik sırasına göre dizilmiştir: (1) Tüm testleri çalıştırır — testleri olmayan kod basit değildir; (2) Tekrar (duplication) içermez — DRY (Don't Repeat Yourself) ilkesi; (3) Tüm tasarım fikirlerini ifade eder — kod kendi hikayesini anlatmalı; (4) Varlık sayısını minimize eder — sınıf, metot, fonksiyon sayısını azalt. Bu kurallar Extreme Programming (XP) ve TDD'nin temelini oluşturur.</span><span class=\"en-text\" style=\"display:none;\">Ron Jeffries lists Kent Beck's \"simple code\" rules. These are ordered by priority: (1) Runs all the tests — code without tests isn't simple; (2) Contains no duplication — DRY principle; (3) Expresses all design ideas — code should tell its own story; (4) Minimizes number of entities — reduce classes, methods, functions. These rules form the foundation of Extreme Programming (XP) and TDD.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Basit kod kurallarını ihlal ediyor: test yok, tekrar var, ifade gücü düşük, çok fazla varlık</span><span class=\"en-text\" style=\"display:none;\">BAD — Violates simple code rules: no tests, duplication, low expressiveness, too many entities</span></span>\n<pre>class OrderService {\n    processOrder(order) {\n        // Aynı hesaplama tekrar ediliyor (duplication)\n        let subtotal = order.items.reduce((s, i) =&gt; s + i.price * i.qty, 0);\n        let tax = subtotal * 0.18;\n        let total = subtotal + tax;\n        this.saveToDb(order, total);\n    }\n}\n\nclass InvoiceService {\n    createInvoice(order) {\n        // Aynı hesaplama burada da tekrar ediliyor!\n        let subtotal = order.items.reduce((s, i) =&gt; s + i.price * i.qty, 0);\n        let tax = subtotal * 0.18;\n        let total = subtotal + tax;\n        return { orderId: order.id, amount: total };\n    }\n}</pre>\n<div class=\"explanation\"><span class=\"tr-text\">Problemler: (1) Test yok, (2) Aynı hesaplama mantığı iki sınıfta tekrar ediyor (duplication), (3) 0.18 nedir? (sihirli sayı), (4) `s`, `i` gibi kısa isimler anlamı gizliyor. Kuralların hiçbirine uymuyor.</span><span class=\"en-text\" style=\"display:none;\">Problems: (1) No tests, (2) Same calculation logic repeated in two classes (duplication), (3) What is 0.18? (magic number), (4) Short names like <code>s</code>, <code>i</code> hide meaning. Violates all rules.</span></div>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Beck'in tüm kurallarına uyuyor</span><span class=\"en-text\" style=\"display:none;\">GOOD — Follows all of Beck's rules</span></span>\n<pre>// Test kapsamında (Rule 1: Runs all tests)\ndescribe('OrderPricing', () =&gt; {\n    it('calculates total with 18% VAT', () =&gt; {\n        const items = [new Item('Book', 100, 1)];\n        expect(new OrderPricing(items).total().amount).toBe(118);\n    });\n});\n\n// Tekrar kaldırıldı, tek bir varlık (Rule 2 &amp; 4: No duplication, minimize entities)\nclass OrderPricing {\n    private static readonly VAT_RATE = 0.18;\n\n    constructor(private items: Item[]) {}\n\n    total(): Money {\n        const subtotal = this.calculateSubtotal();\n        const tax = this.calculateTax(subtotal);\n        return new Money(subtotal + tax);\n    }\n\n    private calculateSubtotal(): number {\n        return this.items.reduce(\n            (sum, item) =&gt; sum + item.unitPrice * item.quantity,\n            0\n        );\n    }\n\n    private calculateTax(subtotal: number): number {\n        return subtotal * OrderPricing.VAT_RATE;\n    }\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Beck'in kurallarını ezberleyin ve kod yazarken sırayla kontrol edin: Önce test yaz (Red-Green-Refactor), sonra tekrarları kaldır (Extract Method/Class), sonra isimleri netleştir (Rename), sonra sadeleştir (Inline/Remove unnecessary entities). Bu dört adım \"basit kod\"a ulaştırır.</span><span class=\"en-text\" style=\"display:none;\">Memorize Beck's rules and check them in order while coding: First write tests (Red-Green-Refactor), then remove duplication (Extract Method/Class), then clarify names (Rename), then simplify (Inline/Remove unnecessary entities). These four steps lead to \"simple code.\"</span></div>"
    },
    {
      "id": "duplication",
      "title": {
        "en": "No Duplication (DRY)",
        "tr": "Tekrarsızlık / DRY İlkesi (No Duplication)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Ron Jeffries, Beck'in kuralları arasından \"çoğunlukla tekrara odaklanırım\" der. Tekrar (duplication), zihnimizdeki bir fikrin kodda iyi temsil edilmediğinin işaretidir. Aynı şeyi tekrar tekrar yaptığınızda, bu bilgi orada \"orada\" olmalıdır ama nerede? \"Tekrar Kötüdür\" (Duplication Is Evil) — Andy Hunt ve Dave Thomas'ın Pragmatic Programcılar kitabından. DRY (Don't Repeat Yourself) ilkesi: her bilgi parçasının sistemde tek, kesin ve güvenilir bir temsili olmalıdır.</span><span class=\"en-text\" style=\"display:none;\">Ron Jeffries says \"I focus mostly on duplication\" among Beck's rules. Duplication is a sign that an idea in our mind is not well represented in the code. When you do the same thing over and over, that knowledge should be \"there\" somewhere — but where? \"Duplication Is Evil\" — from Andy Hunt and Dave Thomas's Pragmatic Programmer. DRY (Don't Repeat Yourself) principle: every piece of knowledge should have a single, unambiguous, authoritative representation in the system.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><n=\"en-text\" style=\"display:none;\">Bad Example (Before)</n=\"en-text\"></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Aynı mantık her yerde tekrar ediliyor</span><span class=\"en-text\" style=\"display:none;\">BAD — Same logic repeated everywhere</span></span>\n<pre>// Kullanıcı kaydı controller'ında\nasync function registerUser(req, res) {\n    const email = req.body.email;\n    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n    if (!emailRegex.test(email)) {\n        return res.status(400).json({ error: 'Invalid email' });\n    }\n    // ... kayıt işlemi\n}\n\n// Şifre sıfırlama controller'ında\nasync function resetPassword(req, res) {\n    const email = req.body.email;\n    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n    if (!emailRegex.test(email)) {\n        return res.status(400).json({ error: 'Invalid email' });\n    }\n    // ... sıfırlama işlemi\n}\n\n// Admin panelinde\nasync function inviteAdmin(req, res) {\n    const email = req.body.email;\n    const emailRegex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n    if (!emailRegex.test(email)) {\n        return res.status(400).json({ error: 'Invalid email' });\n    }\n    // ... davet işlemi\n}</pre>\n<div class=\"explanation\"><span class=\"tr-text\">Aynı e-posta doğrulama mantığı 3 farklı yerde kopyalanmış! Regex değişirse? Hata mesajı değişirse? 3 yerde güncelleme yapmalısınız — birini unutursanız tutarsızlık oluşur. Bu \"bilgi parçası\" (e-posta formatı) tek bir yerde olmalıydı.</span><span class=\"en-text\" style=\"display:none;\">The same email validation logic copied in 3 different places! If the regex changes? If the error message changes? You must update in 3 places — miss one and you have inconsistency. This \"piece of knowledge\" (email format) should be in one place.</span></div>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Bilgi tek bir yerde, merkezi olarak yönetiliyor</span><span class=\"en-text\" style=\"display:none;\">GOOD — Knowledge in one place, centrally managed</span></span>\n<pre>// Tek doğruluk kaynağı (Single source of truth)\nclass EmailValidator {\n    private static readonly EMAIL_REGEX = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;\n    private static readonly ERROR_MESSAGE = 'Invalid email format';\n\n    static validate(email: string): ValidationResult {\n        if (!this.EMAIL_REGEX.test(email)) {\n            return ValidationResult.failure(this.ERROR_MESSAGE);\n        }\n        return ValidationResult.success();\n    }\n}\n\n// Tüm controller'larda kullanım\nasync function registerUser(req, res) {\n    const validation = EmailValidator.validate(req.body.email);\n    if (!validation.isValid) {\n        return res.status(400).json({ error: validation.message });\n    }\n    // ... kayıt işlemi\n}\n\nasync function resetPassword(req, res) {\n    const validation = EmailValidator.validate(req.body.email);\n    if (!validation.isValid) {\n        return res.status(400).json({ error: validation.message });\n    }\n    // ... sıfırlama işlemi\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">\"Üçüncü kural\" (Rule of Three): Aynı şeyi üçüncü kez yazmak üzereyseniz, soyutlayın! İki kopya kabul edilebilir olabilir ama üçüncü bir işaret — bu bilgi bir abstraction (sınıf, fonksiyon, sabit) olarak merkezileştirilmeli. Ron'un dediği gibi: \"Tekrar edildiğinde, zihnimizdeki bir fikir kodda iyi temsil edilmemiştir.\"</span><span class=\"en-text\" style=\"display:none;\">\"Rule of Three\": If you're about to write the same thing a third time, abstract it! Two copies might be acceptable, but a third is a signal — this knowledge should be centralized as an abstraction (class, function, constant). As Ron says: \"When it's repeated, an idea in our mind is not well represented in the code.\"</span></div>"
    },
    {
      "id": "expressiveness",
      "title": {
        "en": "Expressiveness",
        "tr": "İfade Gücü (Expressiveness)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Ron Jeffries için \"ifade gücü\" (expressiveness), Beck'in basit kod kurallarının üçüncüsüdür: \"Sistemdeki tüm tasarım fikirlerini ifade eder.\" İfade gücü sadece anlamlı isimleri değil, kodun yapısını da kapsar: bir nesne veya metot birden fazla şey mi yapıyor? Öyleyse bölünmelidir. Ron, modern IDE'lerin (Eclipse gibi) yeniden adlandırmayı ucuz hale getirdiğini vurgular — bu nedenle doğru ismi bulana kadar birkaç kez değiştirmekten çekinmeyin. İyi kod, yazarından bağımsız olarak kendi hikayesini anlatır.</span><span class=\"en-text\" style=\"display:none;\">For Ron Jeffries, \"expressiveness\" is the third of Beck's simple code rules: \"Expresses all the design ideas that are in the system.\" Expressiveness includes not just meaningful names but the structure of code: is an object or method doing more than one thing? Then it should be split. Ron emphasizes that modern IDEs (like Eclipse) make renaming inexpensive — so don't hesitate to change names several times until you find the right one. Good code tells its own story, independent of its author.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Düşük ifade gücü: isimler anlam vermiyor, birden fazla şey yapıyor</span><span class=\"en-text\" style=\"display:none;\">BAD — Low expressiveness: names don't convey meaning, doing multiple things</span></span>\n<pre>class DataMgr {\n    handleStuff(data) {\n        // Validation + Transformation + Persistence + Notification\n        if (!data || !data.id) return null;\n        \n        const transformed = {\n            uid: data.id.toUpperCase(),\n            ts: new Date().toISOString(),\n            ...data\n        };\n        \n        db.collection('items').insertOne(transformed);\n        \n        sendEmail('admin@company.com', 'New item added');\n        \n        return transformed;\n    }\n}</pre>\n<div class=\"explanation\"><span class=\"tr-text\">`DataMgr` ne yönetir? `handleStuff` ne yapar? \"Stuff\" kelimesi \"bir şeyler\" demek — bu ifade edici değil. Metot 4 farklı şey yapıyor: doğrulama, dönüşüm, kalıcılık, bildirim. Her biri ayrı bir fikir ama hepsi bir arada — ifade gücü düşük.</span><span class=\"en-text\" style=\"display:none;\">What does <code>DataMgr</code> manage? What does <code>handleStuff</code> do? \"Stuff\" means \"something\" — not expressive. The method does 4 different things: validation, transformation, persistence, notification. Each is a separate idea but all mixed together — low expressiveness.</span></div>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Yüksek ifade gücü: her varlık bir fikri temsil ediyor</span><span class=\"en-text\" style=\"display:none;\">GOOD — High expressiveness: each entity represents one idea</span></span>\n<pre>class ProductRegistrationService {\n    constructor(\n        private validator: ProductValidator,\n        private transformer: ProductTransformer,\n        private repository: ProductRepository,\n        private notifier: RegistrationNotifier\n    ) {}\n\n    async register(newProduct: NewProductDto): Promise<registeredproduct> {\n        this.validator.validate(newProduct);\n        \n        const product = this.transformer.toDomainModel(newProduct);\n        const saved = await this.repository.save(product);\n        \n        await this.notifier.notifyAdminOfNewProduct(saved);\n        \n        return saved;\n    }\n}</registeredproduct></pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">İfade gücünü artırmak için \"Extract Method\" refactoring'ini sık kullanın. Bir yorum yazmak istediğinizde (\"// şunu yapıyor\"), o kodu bir metota çıkarın ve yorum metodun adı olsun. Ron'un dediği gibi: \"İfade gücü bana anlamlı isimleri içerir ve yerleşmeden önce şeylerin isimlerini birkaç kez değiştirme ihtimalim yüksektir.\" IDE'nizin yeniden adlandırma (Refactor → Rename) özelliğini kullanın!</span><span class=\"en-text\" style=\"display:none;\">To increase expressiveness, use \"Extract Method\" refactoring frequently. When you want to write a comment (\"// does this\"), extract that code into a method and make the comment the method name. As Ron says: \"Expressiveness to me includes meaningful names, and I am likely to change the names of things several times before I settle in.\" Use your IDE's renaming (Refactor → Rename) feature!</span></div>"
    }
  ]
});
