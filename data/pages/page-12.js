window.PAGE({
  "id": "page-12",
  "page": 12,
  "pdf_page": 43,
  "chapter": {
    "num": 1,
    "en": "Clean Code",
    "tr": "Temiz Kod"
  },
  "section": {
    "en": "What Is Clean Code? / Schools of Thought",
    "tr": "What Is Clean Code? / Schools of Thought"
  },
  "title": {
    "en": "Ward Cunningham (devam) & Düşünce Okulları",
    "tr": "Ward Cunningham (devam) & Düşünce Okulları"
  },
  "blocks": [
    {
      "type": "para",
      "sentences": [
        {
          "en": "[ Continued from page 11 ]",
          "tr": "[ Sayfa 11'den devam ]",
          "html": true
        }
      ],
      "style": "continuation"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "“. . . pretty much what you expected.” When was the last time you saw a module that was pretty much what you expected? Isn’t it more likely that the modules you look at will be puzzling, complicated, tangled? Isn’t misdirection the rule? Aren’t you used to flailing about trying to grab and hold the threads of reasoning that spew forth from the whole system and weave their way through the module you are reading? When was the last time you read through some code and nodded your head the way you might have nodded your head at Ward’s statement?",
          "tr": "“. . . tam da beklediğiniz gibi.” En son ne zaman tam da beklediğiniz gibi olan bir modül gördünüz? Baktığınız modüllerin şaşırtıcı, karmaşık, birbirine dolanmış olması daha olası değil mi? Yanıltma (misdirection) kural değil mi? Tüm sistemden fışkıran ve okuduğunuz modülün içinden geçen akıl yürütme ipliklerini yakalamaya ve tutmaya çalışarak çabalamaya alışık değil misiniz? En son ne zaman bir kodu okudunuz ve Ward'ın ifadesine kafa sallayabileceğiniz şekilde kafa salladınız?",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Ward expects that when you read clean code you won’t be surprised at all. Indeed, you won’t even expend much effort. You will read it, and it will be pretty much what you expected. It will be obvious, simple, and compelling. Each module will set the stage for the next. Each tells you how the next will be written. Programs that are that clean are so profoundly well written that you don’t even notice it. The designer makes it look ridiculously simple like all exceptional designs.",
          "tr": "Ward, temiz kodu okuduğunuzda hiç şaşırmamanızı bekler. Gerçekten de, fazla çaba bile sarf etmezsiniz. Onu okursunuz ve tam da beklediğiniz gibi olur. Bariz, basit ve ikna edicidir. Her modül bir sonrakine zemin hazırlar. Her biri size bir sonrakinin nasıl yazılacağını anlatır. Bu kadar temiz olan programlar o kadar derinlemesine iyi yazılmıştır ki bunu fark etmezsiniz bile. Tasarımcı, tüm istisnai tasarımlar gibi onu gülünç derecede basit gösterir.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "And what about Ward’s notion of beauty? We’ve all railed against the fact that our languages weren’t designed for our problems. But Ward’s statement puts the onus back on us. He says that beautiful code makes the language look like it was made for the problem! So it’s our responsibility to make the language look simple! Language bigots everywhere, beware! It is not the language that makes programs appear simple. It is the programmer that make the language appear simple!",
          "tr": "Peki ya Ward'ın güzellik (beauty) kavramı? Dillerimizin problemlerimiz için tasarlanmadığı gerçeğine hepimiz isyan ettik. Ancak Ward'ın ifadesi sorumluluğu tekrar bize yüklüyor. Güzel kodun <em>dili o problem için yaratılmış gibi gösterdiğini</em> söylüyor! Yani dili basit göstermek <em>bizim</em> sorumluluğumuzdur! Her yerdeki dil bağnazları (language bigots), dikkat edin! Programların basit görünmesini sağlayan dil değildir. Dili basit gösteren programcıdır!",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Schools of Thought",
      "tr": "Düşünce Okulları / Schools of Thought",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "What about me (Uncle Bob)? What do I think clean code is? This book will tell you, in hideous detail, what I and my compatriots think about clean code. We will tell you what we think makes a clean variable name, a clean function, a clean class, etc. We will present these opinions as absolutes, and we will not apologize for our stridence. To us, at this point in our careers, they are absolutes. They are our school of thought about clean code.",
          "tr": "Peki ya ben (Bob Amca)? Temiz kodun ne olduğunu düşünüyorum? Bu kitap size, iğrenç detaylarıyla, benim ve dostlarımın temiz kod hakkında ne düşündüğünü anlatacak. Size temiz bir değişken isminin, temiz bir fonksiyonun, temiz bir sınıfın vb. ne olduğunu düşündüğümüzü söyleyeceğiz. Bu görüşleri mutlak doğrular olarak sunacağız ve sertliğimiz (stridence) için özür dilemeyeceğiz. Bizim için, kariyerimizin bu noktasında, bunlar mutlak doğrulardır. Onlar temiz kod hakkındaki <em>bizim düşünce okulumuzdur</em> (school of thought).",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Martial artists do not all agree about the best martial art, or the best technique within a martial art. Often master martial artists will form their own schools of thought and gather students to learn from them. So we see Gracie Jiu Jistu, founded and taught by the Gracie family in Brazil. We see Hakkoryu Jiu Jistu, founded and taught by Okuyama Ryuho in Tokyo. We see Jeet Kune Do, founded and taught by Bruce Lee in the United States.",
          "tr": "Dövüş sanatçılarının hepsi en iyi dövüş sanatı veya bir dövüş sanatı içindeki en iyi teknik konusunda hemfikir değildir. Genellikle usta dövüş sanatçıları kendi düşünce okullarını kurarlar ve onlardan bir şeyler öğrenmek için öğrencileri etraflarına toplarlar. Böylece Brezilya'da Gracie ailesi tarafından kurulan ve öğretilen <em>Gracie Jiu Jitsu</em>'yu görüyoruz. Tokyo'da Okuyama Ryuho tarafından kurulan ve öğretilen <em>Hakkoryu Jiu Jitsu</em>'yu görüyoruz. Amerika Birleşik Devletleri'nde Bruce Lee tarafından kurulan ve öğretilen <em>Jeet Kune Do</em>'yu görüyoruz.",
          "html": true
        }
      ]
    }
  ],
  "concepts": [
    {
      "id": "least-surprise",
      "title": {
        "en": "Principle of Least Surprise",
        "tr": "En Az Şaşırtma İlkesi (Principle of Least Surprise)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Ward Cunningham, temiz kodun \"tam da beklediğiniz gibi\" olması gerektiğini söyler. Bu, En Az Şaşırtma İlkesi (POLS) olarak bilinir. Kod, okuyucunun beklentileriyle uyumlu olmalı, gizli yan etkiler veya kafa karıştırıcı isimlendirmeler içermemelidir. Kodun akışı o kadar doğal olmalıdır ki, okuyucu bir sonraki satırın ne olacağını tahmin edebilmelidir.</span><span class=\"en-text\" style=\"display:none;\">Ward Cunningham says clean code should be \"pretty much what you expected.\" This is known as the Principle of Least Surprise (POLS). Code should align with the reader's expectations, containing no hidden side effects or confusing naming. The flow of code should be so natural that the reader can predict what the next line will be.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Şaşırtıcı: `isValid` kontrolü yaparken veritabanına log atıyor</span><span class=\"en-text\" style=\"display:none;\">BAD — Surprising: logs to database while doing an `isValid` check</span></span>\n<pre>function isValidSession(session) {\n    if (session.expiry &lt; Date.now()) {\n        db.logs.insert({ event: 'expired_access_attempt', time: Date.now() }); // Sürpriz!\n        return false;\n    }\n    return true;\n}</pre>\n<div class=\"explanation\"><span class=\"tr-text\">Sadece bir kontrol yapması beklenen <code>isValid...</code> fonksiyonunun bir veritabanı yazma işlemi (yan etki) yapması beklenmez. Bu, test yazmayı zorlaştırır ve kodu şaşırtıcı kılar.</span><span class=\"en-text\" style=\"display:none;\">An <code>isValid...</code> function, expected only to perform a check, should not perform a database write (side effect). This makes testing difficult and the code surprising.</span></div>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Bariz ve ayrıştırılmış sorumluluk</span><span class=\"en-text\" style=\"display:none;\">GOOD — Obvious and separated responsibility</span></span>\n<pre>function isSessionExpired(session) {\n    return session.expiry &lt; Date.now();\n}\n\n// Loglama ihtiyacı varsa bunu çağıran yerde yap veya ismini netleştir:\nfunction validateAndLogSession(session) {\n    if (isSessionExpired(session)) {\n        logger.logExpiredAccess(session);\n        return false;\n    }\n    return true;\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Kodunuzu bir başkasına okutun. Eğer okurken \"Neden?\" veya \"Bunu beklemiyordum\" diyorsa, orada bir \"şaşırtma\" vardır. Temiz kod, zihinsel yükü azaltan kodur.</span><span class=\"en-text\" style=\"display:none;\">Have someone else read your code. If they say \"Why?\" or \"I didn't expect this,\" there's a \"surprise\" there. Clean code is code that reduces mental load.</span></div>"
    },
    {
      "id": "beautiful-code",
      "title": {
        "en": "Beautiful Code",
        "tr": "Güzel Kod (Beautiful Code)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Ward Cunningham'a göre güzel kod, programlama dilinin sanki o problem için özel olarak yaratılmış gibi görünmesini sağlar. Bu, dile olan hakimiyetinizi ve problemi dile nasıl adapte ettiğinizi gösterir. Dile zorla bir şeyler yaptırmak yerine, dilin doğal yeteneklerini problemi çözmek için en şık şekilde kullanmaktır.</span><span class=\"en-text\" style=\"display:none;\">According to Ward Cunningham, beautiful code makes the programming language look like it was made for the problem. This shows your mastery of the language and how you adapted the problem to the language. Instead of forcing the language to do things, it's using the language's natural capabilities to solve the problem in the most elegant way.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Dili zorlayan, karmaşık ve hantal yapı</span><span class=\"en-text\" style=\"display:none;\">BAD — Forcing the language, complex and clunky structure</span></span>\n<pre>// Bir listedeki çift sayıların karesini almak (JavaScript)\nlet result = [];\nlet numbers = [1, 2, 3, 4, 5, 6];\nfor (let i = 0; i &lt; numbers.length; i++) {\n    if (numbers[i] % 2 === 0) {\n        let square = numbers[i] * numbers[i];\n        result.push(square);\n    }\n}</pre>\n<div class=\"explanation\"><span class=\"tr-text\">Bu kod çalışır ama JavaScript'in modern ve fonksiyonel yeteneklerini kullanmaz. Dili \"ham\" bir şekilde kullanarak problemi çözmeye çalışır.</span><span class=\"en-text\" style=\"display:none;\">This code works but doesn't use JavaScript's modern functional capabilities. It tries to solve the problem by using the language in a \"raw\" way.</span></div>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Dilin (JS) bu iş için yaratıldığını hissettiren akıcı kod</span><span class=\"en-text\" style=\"display:none;\">GOOD — Fluent code that feels like the language (JS) was made for this</span></span>\n<pre>const squaresOfEvens = [1, 2, 3, 4, 5, 6]\n    .filter(n =&gt; n % 2 === 0)\n    .map(n =&gt; n * n);</pre>\n<div class=\"explanation\"><span class=\"tr-text\">Burada dilin (JavaScript) dizi işleme yetenekleri problemle tam uyum içindedir. Okuması bir cümle gibidir: \"Filtrele çift olanları, eşle karelerine.\"</span><span class=\"en-text\" style=\"display:none;\">Here, the language's (JavaScript) array processing capabilities are in full harmony with the problem. Reading it is like a sentence: \"Filter the evens, map to their squares.\"</span></div>"
    },
    {
      "id": "language-bigotry",
      "title": {
        "en": "Language Bigotry",
        "tr": "Dil Bağnazlığı (Language Bigotry)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Uncle Bob, \"Dili basit gösteren dildir\" diyenlere karşı çıkar. Ona göre suç veya başarı dilde değil, programcıdadır. Dil bağnazlığı, bir dilin her şeyi kendiliğinden temiz yapacağını sanmak veya bir dilin kısıtlamalarını kötü kod için bahane etmektir. Programcı, hangi dili kullanırsa kullansın, o dili problem için basit ve zarif gösterme sorumluluğuna sahiptir.</span><span class=\"en-text\" style=\"display:none;\">Uncle Bob argues against those who say \"the language makes it simple.\" For him, the fault or success lies not with the language but with the programmer. Language bigotry is assuming a language will inherently make everything clean, or using a language's constraints as an excuse for bad code. Regardless of the language used, the programmer has the responsibility to make that language appear simple and elegant for the problem.</span></p>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">\"Bu dilde bu iş ancak böyle yapılıyor, dil çok karmaşık\" demek yerine, o dilin içinde nasıl daha temiz bir soyutlama kurabileceğinize odaklanın. Kötü kodun bahanesi dil olamaz.</span><span class=\"en-text\" style=\"display:none;\">Instead of saying \"This is just how it's done in this language, the language is too complex,\" focus on how you can build a cleaner abstraction within that language. The language cannot be an excuse for bad code.</span></div>"
    },
    {
      "id": "schools-of-thought",
      "title": {
        "en": "Schools of Thought",
        "tr": "Düşünce Okulları (Schools of Thought)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Yazılım dünyasında \"tek bir doğru yol\" yoktur. Tıpkı dövüş sanatlarında (Jiu Jitsu, Jeet Kune Do vb.) olduğu gibi, temiz kod konusunda da farklı \"okullar\" veya yaklaşımlar vardır. Bir okulun teknikleri o okulun içinde \"mutlak doğru\" olarak kabul edilir. Bu, diğer okulların yanlış olduğu anlamına gelmez. Önemli olan bir disiplini derinlemesine öğrenmek, ancak diğer yaklaşımlara da saygı duyup onlardan bir şeyler öğrenmektir.</span><span class=\"en-text\" style=\"display:none;\">In the software world, there is no \"one right way.\" Just like in martial arts (Jiu Jitsu, Jeet Kune Do, etc.), there are different \"schools\" or approaches to clean code. The techniques of a school are considered \"absolute right\" within that school. This doesn't mean other schools are wrong. The important thing is to learn one discipline deeply but also respect and learn from other approaches.</span></p>\n<div class=\"explanation\"><span class=\"tr-text\">Bu kitap <strong>Object Mentor</strong> okulunun temiz kod anlayışını temsil eder. Yazarlar kendi tecrübelerini \"mutlak\" gibi sunarlar çünkü bu disiplin onlara on yıllardır başarı getirmiştir.</span><span class=\"en-text\" style=\"display:none;\">This book represents the <strong>Object Mentor</strong> school's understanding of clean code. The authors present their experiences as \"absolute\" because this discipline has brought them success for decades.</span></div>"
    }
  ]
});
