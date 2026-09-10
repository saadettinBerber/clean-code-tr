window.PAGE({
  "id": "page-11",
  "page": 11,
  "pdf_page": 42,
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
    "en": "Ron Jeffries (devam) & Ward Cunningham",
    "tr": "Ron Jeffries (devam) & Ward Cunningham"
  },
  "blocks": [
    {
      "type": "para",
      "sentences": [
        {
          "en": "[ Continued from page 10 ]",
          "tr": "[ Sayfa 10'dan devam ]",
          "html": true
        }
      ],
      "style": "continuation"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Expressiveness goes beyond names, however. I also look at whether an object or method is doing more than one thing. If it’s an object, it probably needs to be broken into two or more objects. If it’s a method, I will always use the Extract Method refactoring on it, resulting in one method that says more clearly what it does, and some submethods saying how it is done.",
          "tr": "Ancak ifade gücü (expressiveness) isimlerin ötesine geçer. Ayrıca bir nesnenin veya metodun birden fazla iş yapıp yapmadığına da bakarım. Eğer bu bir nesneyse, muhtemelen iki veya daha fazla nesneye bölünmesi gerekir. Eğer bir metotsa, üzerinde her zaman Metot Çıkarma (Extract Method) yeniden düzenlemesini (refactoring) uygularım; bu da ne yaptığını daha açıkça söyleyen bir metot ve nasıl yapıldığını söyleyen bazı alt metotlarla sonuçlanır.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Duplication and expressiveness take me a very long way into what I consider clean code, and improving dirty code with just these two things in mind can make a huge difference. There is, however, one other thing that I’m aware of doing, which is a bit harder to explain.",
          "tr": "Tekrarın olmaması (duplication) ve ifade gücü (expressiveness) beni temiz kod olarak kabul ettiğim şeye çok yaklaştırıyor ve kirli kodu sadece bu iki şeyi akılda tutarak iyileştirmek devasa bir fark yaratabilir. Yine de, yaptığımın farkında olduğum, açıklaması biraz daha zor olan bir şey daha var.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "After years of doing this work, it seems to me that all programs are made up of very similar elements. One example is “find things in a collection.” Whether we have a database of employee records, or a hash map of keys and values, or an array of items of some kind, we often find ourselves wanting a particular item from that collection. When I find that happening, I will often wrap the particular implementation in a more abstract method or class. That gives me a couple of interesting advantages.",
          "tr": "Yıllarca bu işi yaptıktan sonra, bana öyle geliyor ki tüm programlar birbirine çok benzer elemanlardan oluşuyor. Bir örnek \"bir koleksiyon içinde bir şeyler bulmak\"tır. İster çalışan kayıtlarından oluşan bir veri tabanımız, ister anahtar ve değerlerden oluşan bir hash map'imiz, isterse bir tür öğeden oluşan bir dizimiz olsun, kendimizi sık sık o koleksiyondan belirli bir öğeyi isterken buluruz. Bunun gerçekleştiğini gördüğümde, belirli uygulamayı genellikle daha soyut bir metot veya sınıf içine sarmalarım (wrap). Bu bana birkaç ilginç avantaj sağlar.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "I can implement the functionality now with something simple, say a hash map, but since now all the references to that search are covered by my little abstraction, I can change the implementation any time I want. I can go forward quickly while preserving my ability to change later.",
          "tr": "İşlevselliği şimdi basit bir şeyle, diyelim ki bir hash map ile uygulayabilirim, ancak artık bu aramaya yapılan tüm referanslar benim küçük soyutlamam (abstraction) tarafından kapsandığı için, uygulamayı istediğim zaman değiştirebilirim. Daha sonra değiştirme yeteneğimi korurken hızlıca ilerleyebilirim.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "In addition, the collection abstraction often calls my attention to what’s “really” going on, and keeps me from running down the path of implementing arbitrary collection behavior when all I really need is a few fairly simple ways of finding what I want.",
          "tr": "Ek olarak, koleksiyon soyutlaması (collection abstraction) genellikle dikkatimi \"gerçekte\" ne olup bittiğine çeker ve tek ihtiyacım olan istediğimi bulmanın birkaç oldukça basit yolu iken, beni gelişigüzel bir koleksiyon davranışı uygulama yoluna girmekten alıkoyar.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Reduced duplication, high expressiveness, and early building of simple abstractions. That’s what makes clean code for me.",
          "tr": "Azaltılmış tekrar (reduced duplication), yüksek ifade gücü (high expressiveness) ve basit soyutlamaların (simple abstractions) erkenden inşa edilmesi. Benim için temiz kodu oluşturan şey budur.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Here, in a few short paragraphs, Ron has summarized the contents of this book. No duplication, one thing, expressiveness, tiny abstractions. Everything is there.",
          "tr": "Burada, birkaç kısa paragrafta Ron bu kitabın içeriğini özetledi. Tekrar yok, tek bir iş, ifade gücü, minik soyutlamalar. Her şey orada.",
          "html": true
        }
      ]
    },
    {
      "type": "html",
      "html": "<div class=\"author-intro\">\n<span class=\"tr-text\">Ward Cunningham, Wiki'nin mucidi, Fit'in mucidi, eXtreme Programming'in kurucularından. Design Patterns'in arkasındaki itici güç. Smalltalk ve OO (Nesne Yönelimli) düşünce lideri. Kodu önemseyen herkesin vaftiz babası.</span>\n<span class=\"en-text\" style=\"display:none;\">Ward Cunningham, inventor of Wiki, inventor of Fit, coinventor of eXtreme Programming. Motive force behind Design Patterns. Smalltalk and OO thought leader. The godfather of all those who care about code.</span>\n</div>"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "You know you are working on clean code when each routine you read turns out to be pretty much what you expected. You can call it beautiful code when the code also makes it look like the language was made for the problem.",
          "tr": "Okuduğunuz her bir rutin tam da beklediğiniz (pretty much what you expected) gibi çıktığında temiz kod üzerinde çalıştığınızı anlarsınız. Kod aynı zamanda programlama dilinin o problem için yaratılmış gibi görünmesini sağladığında, buna güzel kod (beautiful code) diyebilirsiniz.",
          "html": true
        }
      ],
      "style": "quote"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Statements like this are characteristic of Ward. You read it, nod your head, and then go on to the next topic. It sounds so reasonable, so obvious, that it barely registers as something profound. You might think it was pretty much what you expected. But let’s take a closer look.",
          "tr": "Bunun gibi ifadeler Ward'ın karakteristiğidir. Okur, başınızı sallar ve sonra bir sonraki konuya geçersiniz. Kulağa o kadar makul, o kadar bariz gelir ki, derin bir şey olarak neredeyse algılanmaz. Tam da beklediğiniz gibi olduğunu düşünebilirsiniz. Ama hadi daha yakından bakalım.",
          "html": true
        }
      ]
    }
  ],
  "concepts": [
    {
      "id": "extract-method",
      "title": {
        "en": "Extract Method",
        "tr": "Metot Çıkarma (Extract Method)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Ron Jeffries, bir metodun birden fazla iş yapması durumunda her zaman \"Metot Çıkarma\" (Extract Method) refactoring'ini uyguladığını belirtir. Bu teknik, bir metodun içindeki mantıksal bir parçayı alıp yeni bir metot haline getirmektir. Sonuçta ana metot \"ne yapıldığını\" (üst düzey mantık) açıkça söylerken, alt metotlar \"nasıl yapıldığını\" (detaylar) saklar. Bu, \"Tek Sorumluluk İlkesi\"ni (Single Responsibility Principle) metot düzeyinde uygular.</span><span class=\"en-text\" style=\"display:none;\">Ron Jeffries states that if a method is doing more than one thing, he always uses the \"Extract Method\" refactoring. This technique involves taking a logical part of a method and making it into a new method. The result is one method that says clearly \"what it does\" (high-level logic), and submethods saying \"how it is done\" (implementation details). This applies the \"Single Responsibility Principle\" at the method level.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Çok iş yapan, okunması zor metot</span><span class=\"en-text\" style=\"display:none;\">BAD — Doing too much, hard to read method</span></span>\n<pre>function processUserReport(users) {\n    let report = \"User Report\\n----------\\n\";\n    for (let user of users) {\n        if (user.active &amp;&amp; user.age &gt; 18) {\n            let formattedName = user.firstName.toUpperCase() + \" \" + user.lastName.toUpperCase();\n            report += `ID: ${user.id} | Name: ${formattedName} | Status: Active\\n`;\n        }\n    }\n    fs.writeFileSync('report.txt', report);\n    console.log(\"Report generated successfully.\");\n}</pre>\n<div class=\"explanation\"><span class=\"tr-text\">Bu metot hem filtreleme yapıyor, hem isim formatlıyor, hem rapor metni oluşturuyor, hem de dosya sistemine yazıyor. Çok fazla sorumluluğu var ve \"nasıl\" yapıldığına dair detaylar (toUpperCase, template strings, fs) \"ne\" yapıldığını (rapor oluşturma) gölgeliyor.</span><span class=\"en-text\" style=\"display:none;\">This method does filtering, name formatting, report text generation, and writing to the file system. It has too many responsibilities, and the details of \"how\" (toUpperCase, template strings, fs) obscure \"what\" is being done (generating a report).</span></div>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Metot çıkarma ile basitleştirilmiş ve ifade gücü artırılmış</span><span class=\"en-text\" style=\"display:none;\">GOOD — Simplified and expressive via Extract Method</span></span>\n<pre>function generateActiveAdultReport(users) {\n    const activeAdults = users.filter(isAdultAndActive);\n    const reportContent = createReportContent(activeAdults);\n    \n    saveToFile('report.txt', reportContent);\n    notifySuccess();\n}\n\nfunction isAdultAndActive(user) {\n    return user.active &amp;&amp; user.age &gt; 18;\n}\n\nfunction createReportContent(users) {\n    const header = \"User Report\\n----------\\n\";\n    const body = users.map(formatUserLine).join(\"\\n\");\n    return header + body;\n}\n\nfunction formatUserLine(user) {\n    const name = `${user.firstName} ${user.lastName}`.toUpperCase();\n    return `ID: ${user.id} | Name: ${name} | Status: Active`;\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Eğer bir metot içinde bir blok kodu açıklamak için yorum satırı yazma gereği duyuyorsanız, o blok kod \"Metot Çıkarma\" için adaydır. Metot ismi, yazdığınız yorumun kendisi olmalıdır. Örneğin: <code>// Kullanıcı aktif mi kontrol et</code> yorumu yerine <code>isActive(user)</code> metodu oluşturun.</span><span class=\"en-text\" style=\"display:none;\">If you feel the need to write a comment to explain a block of code within a method, that block is a candidate for \"Extract Method\". The method name should be the comment itself. For example, instead of a comment <code>// check if user is active</code>, create an <code>isActive(user)</code> method.</span></div>"
    },
    {
      "id": "collection-abstraction",
      "title": {
        "en": "Collection Abstraction",
        "tr": "Koleksiyon Soyutlama (Collection Abstraction)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Ron Jeffries, koleksiyonlarda (dizi, liste, map vb.) arama yapma gibi tekrarlayan işleri daha soyut bir metot veya sınıf içine sarmalamayı (wrap) önerir. Bu soyutlama, uygulamanın detaylarını (örneğin bir veri yapısının iç işleyişini) gizleyerek, gelecekte bu yapının kolayca değiştirilmesine (örneğin diziden hash map'e geçiş) olanak tanır. Ayrıca, kodun ne yapmak istediğine (niyetine) odaklanmasını sağlar.</span><span class=\"en-text\" style=\"display:none;\">Ron Jeffries suggests wrapping repetitive tasks like searching in collections (arrays, lists, maps, etc.) in a more abstract method or class. This abstraction hides implementation details (like the internal workings of a data structure), allowing for easy changes in the future (e.g., switching from an array to a hash map). It also keeps the code focused on what it wants to achieve (intent).</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Ham veri yapısı her yerde kullanılıyor</span><span class=\"en-text\" style=\"display:none;\">BAD — Raw data structure used everywhere</span></span>\n<pre>// Ürün listesinde arama her yerde tekrarlanıyor\nconst products = [{id: 1, name: 'A'}, {id: 2, name: 'B'}];\n\n// Sipariş işlemede\nconst p1 = products.find(p =&gt; p.id === order.productId);\n\n// Sepet güncellemede\nconst p2 = products.find(p =&gt; p.id === cart.itemId);\n\n// Stok kontrolünde\nconst p3 = products.find(p =&gt; p.id === stockRequest.id);</pre>\n<div class=\"explanation\"><span class=\"tr-text\">Eğer <code>products</code> listesi çok büyürse ve bir <code>Map</code> yapısına geçmek isterseniz, <code>find</code> kullandığınız her yeri güncellemeniz gerekir. Ayrıca <code>p =&gt; p.id === ...</code> mantığı kodun her yerine yayılmıştır.</span><span class=\"en-text\" style=\"display:none;\">If the <code>products</code> list grows too large and you want to switch to a <code>Map</code>, you'd have to update everywhere you used <code>find</code>. Also, the <code>p =&gt; p.id === ...</code> logic is spread across the code.</span></div>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Koleksiyon bir soyutlama arkasına gizlenmiş</span><span class=\"en-text\" style=\"display:none;\">GOOD — Collection hidden behind an abstraction</span></span>\n<pre>class ProductCatalog {\n    private products = new Map<number, product=\"\">();\n\n    findById(id: number): Product | undefined {\n        return this.products.get(id);\n    }\n\n    // Gelecekte implementasyonu değiştirmek çok kolay!\n}\n\n// Kullanım\nconst catalog = new ProductCatalog();\nconst p1 = catalog.findById(order.productId);\nconst p2 = catalog.findById(cart.itemId);</number,></pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Ham koleksiyonları (naked collections) sınıflarınızın içinde doğrudan expose etmeyin. Onları bir sınıf (Domain Object veya Repository gibi) içine sarmalayarak, koleksiyon üzerinde yapılayabilecek işlemleri (ekleme, bulma, filtreleme) anlamlı metot isimleriyle sunun. Bu, kodun \"ne\" yaptığını bariz kılar.</span><span class=\"en-text\" style=\"display:none;\">Don't expose raw (naked) collections directly in your classes. Wrap them in a class (like a Domain Object or Repository) and provide operations (add, find, filter) with meaningful method names. This makes \"what\" the code does obvious.</span></div>"
    },
    {
      "id": "what-expected",
      "title": {
        "en": "Pretty Much What You Expected",
        "tr": "Bekleneni Karşılamak (Pretty Much What You Expected)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Ward Cunningham'ın temiz kod tanımı şöyledir: \"Okuduğunuz her bir rutin tam da beklediğiniz gibi çıktığında temiz kod üzerinde çalıştığınızı anlarsınız.\" Bu, \"En Az Şaşırtma İlkesi\"nin (Principle of Least Surprise) koda yansımasıdır. Eğer bir metot ismi <code>calculateTax</code> ise ve içinde gerçekten vergi hesaplanıyorsa (ve e-posta göndermek gibi sürpriz yan etkileri yoksa), o kod temizdir. Temiz kod, okuyucunun zihinsel modelini kırmaz.</span><span class=\"en-text\" style=\"display:none;\">Ward Cunningham defines clean code as: \"You know you are working on clean code when each routine you read turns out to be pretty much what you expected.\" This is the \"Principle of Least Surprise\" applied to code. If a method named <code>calculateTax</code> actually calculates tax (and has no surprise side effects like sending an email), it's clean. Clean code doesn't break the reader's mental model.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Şaşırtıcı ve beklenmedik davranışlar</span><span class=\"en-text\" style=\"display:none;\">BAD — Surprising and unexpected behavior</span></span>\n<pre>function getName(user) {\n    if (!user.name) {\n        user.name = \"Guest\"; // Beklenmedik yan etki: Mutasyon!\n        db.users.update(user); // Beklenmedik yan etki: DB Kaydı!\n    }\n    return user.name;\n}</pre>\n<div class=\"explanation\"><span class=\"tr-text\"><code>getName</code> isminde bir metodun sadece bir string dönmesi beklenir. Ancak bu metot hem nesneyi değiştiriyor hem de veritabanına kayıt yapıyor. Okuyucu bunu çağırdığında sistemin durumunun değişeceğini beklemez. Bu \"kirli\" bir koddur.</span><span class=\"en-text\" style=\"display:none;\">A method named <code>getName</code> is expected to just return a string. However, this method both mutates the object and writes to the database. The reader doesn't expect the system state to change when calling this. This is \"dirty\" code.</span></div>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Bariz ve beklenen davranış</span><span class=\"en-text\" style=\"display:none;\">GOOD — Obvious and expected behavior</span></span>\n<pre>function getDisplayName(user) {\n    return user.name || \"Guest\";\n}\n\n// Veya durumu değiştirmek gerekiyorsa ismi ona göre ver:\nasync function ensureUserHasName(user) {\n    if (user.name) return;\n    \n    user.name = \"Guest\";\n    await db.users.update(user);\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">\"Prensip: Şaşırtma!\" Kodunuzun bir polisiye romanı gibi sürpriz sonları olmamalıdır. Bir fonksiyonun ismi ne vaat ediyorsa, gövdesi sadece onu yapmalıdır. Eğer bir rutin okurken \"Ah, neden bunu burada yapmış?\" diyorsanız, o kod temiz değildir.</span><span class=\"en-text\" style=\"display:none;\">\"Principle: Don't surprise!\" Your code shouldn't have plot twists like a mystery novel. What a function name promises, its body should deliver — and nothing else. If you find yourself saying \"Ah, why did they do that here?\" while reading a routine, it's not clean.</span></div>"
    }
  ]
});
