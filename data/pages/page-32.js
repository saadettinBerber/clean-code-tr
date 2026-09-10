window.PAGE({
  "id": "page-32",
  "page": 32,
  "pdf_page": 63,
  "chapter": {
    "num": 3,
    "en": "Functions",
    "tr": "Fonksiyonlar"
  },
  "section": {
    "en": "Küçük Olmalı!",
    "tr": "Küçük Olmalı!"
  },
  "title": {
    "en": "Small!",
    "tr": "Küçük Olmalı!"
  },
  "blocks": [
    {
      "type": "heading",
      "level": 1,
      "en": "Small!",
      "tr": "Küçük Olmalı! / Small!",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "The first rule of functions is that they should be small. The second rule of functions is that they should be <em>smaller than that</em>. This is not an assertion that I can justify. I can't provide any references to research that shows that very small functions are better. What I can tell you is that for nearly four decades I have written functions of all different sizes. I've written several nasty 3,000-line abominations. I've written scads of functions in the 100 to 300 line range. And I've written functions that were 20 to 30 lines long. What this experience has taught me, through long trial and error, is that functions should be very small.",
          "tr": "Fonksiyonların ilk kuralı küçük olmalarıdır. Fonksiyonların ikinci kuralı ise bundan <em>daha</em> küçük olmalarıdır. Bu, gerekçelendirebileceğim bir iddia değil. Çok küçük fonksiyonların daha iyi olduğunu gösteren herhangi bir araştırma referansı sunamam. Size söyleyebileceğim şey, yaklaşık kırk yıldır her boyuttan fonksiyon yazmış olmamdır. 3.000 satırlık iğrenç şeyler yazdım. 100 ile 300 satır aralığında birçok fonksiyon yazdım. Ve 20 ile 30 satırlık fonksiyonlar yazdım. Bu deneyim bana uzun deneme yanılma yoluyla öğretti ki, fonksiyonlar çok küçük olmalıdır.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "In the eighties we used to say that a function should be no bigger than a screen-full. Of course we said that at a time when VT100 screens were 24 lines by 80 columns, and our editors used 4 lines for administrative purposes. Nowadays with a cranked-down font and a nice big monitor, you can fit 150 characters on a line and a 100 lines or more on a screen. Lines should not be 150 characters long. Functions should not be 100 lines long. Functions should hardly ever be 20 lines long.",
          "tr": "1980'lerde bir fonksiyonun bir ekran dolusu olmaması gerektiğini söylerdik. Elbette bunu, VT100 ekranlarının 24 satır 80 sütun olduğu ve editörlerimizin yönetimsel amaçlar için 4 satır kullandığı bir zamanda söylüyorduk. Günümüzde ise sıkıştırılmış bir font ve güzel bir büyük monitörle bir satırda 150 karakter ve bir ekranda 100 veya daha fazla satır sığdırabilirsiniz. Satırlar 150 karakter uzunluğunda olmamalıdır. Fonksiyonlar 100 satır uzunluğunda olmamalıdır. Fonksiyonlar nadiren 20 satır uzunluğunda olmalıdır.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "How short should a function be? In 1999 I went to visit Kent Beck at his home in Oregon. We sat down and did some programming together. At one point he showed me a cute little Java/Swing program that he called <em>Sparkle</em>. It produced a visual effect on the screen very similar to the magic wand of the fairy godmother in the movie Cinderella. As you moved the mouse, the sparkles would drip from the cursor with a satisfying scintillation, falling to the bottom of the window through a simulated gravitational field. When Kent showed me the code, I was struck by how small all the functions were. I was used to functions in Swing programs that took up miles of vertical space. Every function in this program was just two, or three, or four lines long. Each was transparently obvious. Each told a story. And each led you to the next in a compelling order. <em>That's</em> how short your functions should be!<sup>3</sup>",
          "tr": "Bir fonksiyon ne kadar kısa olmalıdır? 1999'da Kent Beck'i Oregon'daki evinde ziyaret ettim. Birlikte programlama yaptık. Bir noktada bana <em>Sparkle</em> adını verdiği sevimli küçük bir Java/Swing programı gösterdi. Cinderella filmindeki peri değneğinin büyüsüne çok benzer bir görsel efekt üretiyordu. Fareyi hareket ettirdiğinizde, parıltılar memnuniyet verici bir parıltıyla imleçten damlıyor, simüle edilmiş bir yerçekimi alanından pencerenin altına düşüyordu. Kent bana kodu gösterdiğinde, tüm fonksiyonların ne kadar küçük olduğuna dikkat çarptı. Swing programlarındaki fonksiyonların dikeyde milyonlarca satır kapladığına alışkındım. Bu programdaki her fonksiyon sadece iki, üç veya dört satırdı. Her biri açıkça ortadaydı. Her biri bir hikaye anlatıyordu. Ve her biri sizi ikna edici bir sırayla bir sonrakine götürüyordu. <em>İşte</em> fonksiyonlarınızın bu kadar kısa olması gerektiği budur!<sup>3</sup>",
          "html": true
        }
      ]
    },
    {
      "type": "footnote",
      "en": "3. I asked Kent whether he still had a copy, but he was unable to find one. I searched all my old computers too, but to no avail. All that is left now is my memory of that program.",
      "tr": "3. Kent'e hala bir kopyasının olup olmadığını sordum, ancak bulamadı. Tüm eski bilgisayarlarımı da aradım, ancak sonuçsuz kaldı. Şimdi geriye sadece o programın hafızam kaldı.",
      "html": true
    }
  ],
  "concepts": [
    {
      "id": "small-functions",
      "title": {
        "en": "Small Functions",
        "tr": "Küçük Fonksiyonlar (Small Functions)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Fonksiyon ne kadar küçükse, o kadar anlaşılır ve bakımı kolaydır. Martin, fonksiyonların bir ekran dolusu olmaması gerektiğini, hatta 20 satırı nadiren geçmesi gerektiğini söyler. Her fonksiyon tek bir şey yapmalı ve bunu iyi yapmalıdır. Robert C. Martin'in deneyimine göre en iyi fonksiyonlar 2-4 satırlık olanlardır.</span><span class=\"en-text\" style=\"display:none;\">The smaller a function is, the easier it is to understand and maintain. Martin says functions should not fill a screen and should rarely exceed 20 lines. Each function should do one thing and do it well. According to Robert C. Martin's experience, the best functions are 2-4 lines long.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — 25 satır, birden fazla sorumluluk</span><span class=\"en-text\" style=\"display:none;\">BAD — 25 lines, multiple responsibilities</span></span>\n<pre>def process_order(order):\n    # Validate order\n    if not order.get(\"items\"):\n        return None\n    total = 0\n    for item in order[\"items\"]:\n        total += item[\"price\"] * item[\"qty\"]\n    \n    # Apply discounts\n    if total &gt; 100:\n        total = total * 0.9\n    \n    # Calculate shipping\n    if total &gt; 50:\n        shipping = 0\n    else:\n        shipping = 5.99\n    \n    # Generate invoice\n    invoice = {\n        \"subtotal\": total,\n        \"shipping\": shipping,\n        \"total\": total + shipping\n    }\n    \n    # Save to database\n    db.orders.insert(invoice)\n    \n    return invoice</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Her fonksiyon 2-4 satır</span><span class=\"en-text\" style=\"display:none;\">GOOD — Each function 2-4 lines</span></span>\n<pre>def process_order(order):\n    if not is_valid(order):\n        return None\n    total = calculate_total(order)\n    total = apply_discount(total)\n    invoice = create_invoice(total)\n    save_order(invoice)\n    return invoice</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Bir fonksiyonun \"ne yaptığını\" anlatmak için \"ve\" kelimesini kullanıyorsanız, muhtemelen birden fazla şey yapıyordur. Ayrı fonksiyonlara bölme zamanı gelmiştir.</span><span class=\"en-text\" style=\"display:none;\">If you use the word \"and\" to describe what a function does, it's probably doing more than one thing. Time to split into separate functions.</span></div>"
    },
    {
      "id": "function-length",
      "title": {
        "en": "Function Length",
        "tr": "Fonksiyon Uzunluğu (Function Length)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Fonksiyon uzunluğu hakkında kesin bir kural olmamakla birlikte, deneyimli yazılımcılar şu prensiplere dikkat eder: 1980'lerde standart bir ekran 24 satırdı. Günümüzde ise fonksiyonlar 20 satırı geçmemelidir. Metot (method) başına ortalama 5-10 satır idealdir. Kodunuz ne kadar küçükse, hata yapma olasılığınız o kadar düşüktür.</span><span class=\"en-text\" style=\"display:none;\">While there's no hard rule about function length, experienced programmers follow these principles: In the 1980s, a standard screen was 24 lines. Today, functions should not exceed 20 lines. 5-10 lines per method is ideal. The smaller your code, the lower your chance of errors.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — 150 satırlık dev fonksiyon</span><span class=\"en-text\" style=\"display:none;\">BAD — 150-line giant function</span></span>\n<pre>function handleUserRegistration(data) {\n    // 150 satırlık dev fonksiyon...\n    // Validasyon, veritabanı işlemleri, email gönderimi,\n    // raporlama, loglama hepsi tek yerde\n}</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — 5-10 satırlık küçük fonksiyonlar</span><span class=\"en-text\" style=\"display:none;\">GOOD — 5-10 line small functions</span></span>\n<pre>function registerUser(data) {\n    validateInput(data);\n    user = createUser(data);\n    sendWelcomeEmail(user);\n    logRegistration(user);\n    return user;\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Ekrana sığdırmak yerine, fonksiyonun tek bir iş yaptığını düşünün. Eğer fonksiyonu \"ve\" kelimesiyle anlatabiliyorsanız, bölme zamanı gelmiştir.</span><span class=\"en-text\" style=\"display:none;\">Think about whether the function does one thing, not whether it fits on screen. If you can describe it with \"and,\" it's time to split.</span></div>"
    },
    {
      "id": "kent-beck-sparkle",
      "title": {
        "en": "Kent Beck and Sparkle Example",
        "tr": "Kent Beck ve Sparkle Örneği"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Robert C. Martin, 1999'da Kent Beck'i ziyaretinde Sparkle adlı küçük bir Java/Swing programı görmüştür. Bu programda tüm fonksiyonlar sadece 2-4 satırdı. Her fonksiyon açıkça anlaşılıyordu, bir hikaye anlatıyordu ve bir sonrakine mantıklı bir sırayla götürüyordu. Martin, bu deneyimden sonra fonksiyonların ne kadar küçük olabileceğini yeniden düşünmüştür.</span><span class=\"en-text\" style=\"display:none;\">Robert C. Martin visited Kent Beck in 1999 and saw a small Java/Swing program called Sparkle. All functions in this program were only 2-4 lines. Each function was transparently obvious, told a story, and led to the next in a logical order. After this experience, Martin reconsidered how small functions can be.</span></p>\n<h4><span class=\"tr-text\">Sparkle'dan İlham Alan Tasarım</span><span class=\"en-text\" style=\"display:none;\">Design Inspired by Sparkle</span></h4>\n<pre>// Geleneksel Swing kodu (kötü)\npublic void mouseMoved(MouseEvent e) {\n    // 50 satırlık setup\n    // Parçacık pozisyonlarını güncelle\n    // Çizim alanını temizle\n    // Her parçacığı çiz\n    // Yerçekimi hesapla\n    // Çarpışma kontrolü\n    // Ekranı yenile\n    // vs... vs...\n}\n\n// Sparkle tarzı (iyi)\npublic void mouseMoved(MouseEvent e) {\n    updateParticles(e.getPoint());\n    animateGravity();\n    render();\n}\n\nprivate void updateParticles(Point mousePos) {\n    particles.forEach(p -&gt; p.setPosition(mousePos));\n}\n\nprivate void animateGravity() {\n    particles.forEach(Particle::applyGravity);\n}</pre>\n<div class=\"explanation\"><span class=\"tr-text\">Her fonksiyon tek bir eylem yapar: fare pozisyonunu güncelle, yerçekimini uygula, çiz. Okuyucu fonksiyon isimlerini okuyarak programın hikayesini takip edebilir.</span><span class=\"en-text\" style=\"display:none;\">Each function performs a single action: update mouse position, apply gravity, render. The reader can follow the program's story by reading function names.</span></div>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Her fonksiyonu bir \"hikaye cümlesi\" olarak yazın. \"updateParticles\" -&gt; \"parçacıkları güncelle\" -&gt; anlaşılır ve net.</span><span class=\"en-text\" style=\"display:none;\">Write each function as a \"story sentence.\" \"updateParticles\" -&gt; update particles -&gt; clear and understandable.</span></div>"
    }
  ]
});
