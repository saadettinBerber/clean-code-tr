window.PAGE({
  "id": "page-42",
  "page": 42,
  "pdf_page": 73,
  "chapter": {
    "num": 3,
    "en": "Functions",
    "tr": "Fonksiyonlar"
  },
  "section": {
    "en": "İkili Fonksiyonlar, Üçlüler & Argüman Nesneleri",
    "tr": "İkili Fonksiyonlar, Üçlüler & Argüman Nesneleri"
  },
  "title": {
    "en": "Dyadic Functions, Triads",
    "tr": "İkililer, Üçlüler"
  },
  "blocks": [
    {
      "type": "heading",
      "level": 1,
      "en": "Dyadic Functions",
      "tr": "İkili Fonksiyonlar / Dyadic Functions",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "A function with two arguments is harder to understand than a monadic function. For example, <code>writeField(name)</code> is easier to understand than <code>writeField(outputStream, name)</code>.<sup>10</sup> Though the meaning of both is clear, the first glides past the eye, easily depositing its meaning. The second requires a short pause until we learn to ignore the first parameter. And <em>that</em>, of course, eventually results in problems because we should never ignore any part of code. The parts we ignore are where the bugs will hide.",
          "tr": "İki argümanlı bir fonksiyon, tekli (monadic) bir fonksiyondan daha zor anlaşılır. Örneğin, <code>writeField(name)</code> ifadesini anlamak <code>writeField(outputStream, name)</code> ifadesinden daha kolaydır.<sup>10</sup> Her ikisinin anlamı açık olsa da, ilki gözün önünden kayarak kolayca anlamını bırakır. İkincisi ise ilk parametreyi görmezden gelmeyi öğrenene kadar kısa bir duraksama gerektirir. Ve bu da, elbette, sonunda sorunlara yol açar çünkü kodun hiçbir parçasını görmezden gelmemeliyiz. Görmezden geldiğimiz parçalar, hataların saklanacağı yerlerdir.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "There are times, of course, where two arguments are appropriate. For example, <code>Point p = new Point(0,0);</code> is perfectly reasonable. Cartesian points naturally take two arguments. Indeed, we'd be very surprised to see <code>new Point(0)</code>. However, the two arguments in this case <em>are ordered components of a single value!</em> Whereas <code>outputStream</code> and <code>name</code> have neither a natural cohesion, nor a natural ordering.",
          "tr": "Elbette, iki argümanın uygun olduğu durumlar vardır. Örneğin, <code>Point p = new Point(0,0);</code> son derece makuldür. Kartezyen noktalar doğal olarak iki argüman alır. Aslında, <code>new Point(0)</code> görsek çok şaşırırdık. Ancak bu durumda iki argüman, <em>tek bir değerin sıralı bileşenleridir</em>! Oysa <code>outputStream</code> ve <code>name</code>'in ne doğal bir bütünlüğü (cohesion) ne de doğal bir sıralaması vardır.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Even obvious dyadic functions like <code>assertEquals(expected, actual)</code> are problematic. How many times have you put the <code>actual</code> where the <code>expected</code> should be? The two arguments have no natural ordering. The <code>expected, actual</code> ordering is a convention that requires practice to learn.",
          "tr": "<code>assertEquals(expected, actual)</code> gibi açık ikili fonksiyonlar bile sorunludur. Kaç kez <code>actual</code>'ı <code>expected</code>'ın yerine koyduğunuz oldu? İki argümanın doğal bir sıralaması yoktur. <code>expected, actual</code> sıralaması, öğrenilmesi gereken bir gelenektir ve pratik gerektirir.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Dyads aren't evil, and you will certainly have to write them. However, you should be aware that they come at a cost and should take advantage of what mechanisms may be available to you to convert them into monads. For example, you might make the <code>writeField</code> method a member of <code>outputStream</code> so that you can say <code>outputStream.writeField(name)</code>. Or you might make the <code>outputStream</code> a member variable of the current class so that you don't have to pass it. Or you might extract a new class like <code>FieldWriter</code> that takes the <code>outputStream</code> in its constructor and has a <code>write</code> method.",
          "tr": "İkililer (dyads) kötü değildir ve kesinlikle yazmak zorunda kalacaksınız. Ancak, bunların bir maliyeti olduğunun farkında olmalı ve onları tekliye (monad) dönüştürmek için elinizde ne tür mekanizmalar olduğundan yararlanmalısınız. Örneğin, <code>writeField</code> metodunu <code>outputStream</code>'in bir üyesi yaparak <code>outputStream.writeField(name)</code> diyebilirsiniz. Ya da <code>outputStream</code>'i mevcut sınıfın bir üye değişkeni yaparak geçirmek zorunda kalmayabilirsiniz. Ya da yapıcısında (constructor) <code>outputStream</code> alan ve bir <code>write</code> metodu olan <code>FieldWriter</code> gibi yeni bir sınıf çıkarabilirsiniz.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Triads",
      "tr": "Üçlüler / Triads",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Functions that take three arguments are significantly harder to understand than dyads. The issues of ordering, pausing, and ignoring are more than doubled. I suggest you think very carefully before creating a triad.",
          "tr": "Üç argüman alan fonksiyonlar, ikililere göre önemli ölçüde daha zor anlaşılır. Sıralama, duraklatma ve görmezden gelme sorunları ikiye katlanmanın ötesindedir. Bir üçlü (triad) oluşturmadan önce çok dikkatli düşünmenizi öneririm.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "For example, consider the common overload of <code>assertEquals</code> that takes three arguments: <code>assertEquals(message, expected, actual)</code>. How many times have you read the <code>message</code> and thought it was the <code>expected</code>? I have stumbled and paused over that particular triad many times. In fact, <em>every time I see it</em>, I do a double-take and then learn to ignore the message.",
          "tr": "Örneğin, üç argüman alan yaygın <code>assertEquals</code> aşırı yüklemesini (overload) ele alalım: <code>assertEquals(message, expected, actual)</code>. Kaç kez <code>message</code>'ı okuyup <code>expected</code> sandığınız oldu? Bu özel üçlüde tökezleyip duraksadım defalarca. Aslında, <em>her gördüğümde</em> iki kez bakıp sonra mesajı görmezden gelmeyi öğreniyorum.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "On the other hand, here is a triad that is not quite so insidious: <code>assertEquals(1.0, amount, .001)</code>. Although this still requires a double-take, it's one that's worth taking. It's always good to be reminded that equality of floating point values is a relative thing.",
          "tr": "Öte yandan, o kadar da sinsi olmayan bir üçlü (triad) örneği var: <code>assertEquals(1.0, amount, .001)</code>. Bu yine bir iki kez bakmayı gerektirse de, buna değer. Kayan noktalı (floating point) değerlerin eşitliğinin göreceli bir şey olduğunu hatırlatması her zaman iyidir.",
          "html": true
        }
      ]
    },
    {
      "type": "footnote",
      "en": "10. I just finished refactoring a module that used the dyadic form. I was able to make the <code>outputStream</code> a field of the class and convert all the <code>writeField</code> calls to the monadic form. The result was much cleaner.",
      "tr": "10. İkili formu kullanan bir modülü yeniden düzenlemeyi (refactoring) yeni bitirdim. <code>outputStream</code>'i sınıfın bir alanı yaparak tüm <code>writeField</code> çağrılarını tekli forma dönüştürebildim. Sonuç çok daha temizdi.",
      "html": true
    }
  ],
  "concepts": [
    {
      "id": "dyad-to-monad",
      "title": {
        "en": "Dyad to Monad Conversion",
        "tr": "İkiliden Tekliye Dönüşüm (Dyad to Monad)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">İki argümanlı fonksiyonları tek argümanlı hale getirmenin üç yolu vardır: (1) Argümanlardan birini sınıf üyesi yapmak, (2) argümanı nesnenin metodu olarak çağırmak, (3) yeni bir sınıf oluşturmak.</span><span class=\"en-text\">There are three ways to convert dyadic functions to monadic: (1) Make one argument a class member, (2) call it as a method of the argument object, (3) create a new class.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — İkili fonksiyon</span><span class=\"en-text\">BAD — Dyadic function</span></span>\n<pre><span class=\"kw\">function</span> <span class=\"method\">sendEmail</span>(smtpClient, message) {\n    smtpClient.<span class=\"method\">connect</span>();\n    smtpClient.<span class=\"method\">send</span>(message);\n    smtpClient.<span class=\"method\">disconnect</span>();\n}</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Sınıf üyesi olarak dönüştürme</span><span class=\"en-text\">GOOD — Convert to class member</span></span>\n<pre><span class=\"kw\">class</span> <span class=\"type\">EmailSender</span> {\n    <span class=\"method\">constructor</span>(smtpClient) {\n        <span class=\"kw\">this</span>.smtpClient = smtpClient;\n    }\n\n    <span class=\"method\">send</span>(message) {\n        <span class=\"kw\">this</span>.smtpClient.<span class=\"method\">connect</span>();\n        <span class=\"kw\">this</span>.smtpClient.<span class=\"method\">send</span>(message);\n        <span class=\"kw\">this</span>.smtpClient.<span class=\"method\">disconnect</span>();\n    }\n}\n\n<span class=\"comment\">// Kullanım: tekli forma dönüştü</span>\n<span class=\"kw\">const</span> sender = <span class=\"kw\">new</span> <span class=\"type\">EmailSender</span>(smtpClient);\nsender.<span class=\"method\">send</span>(message);</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">İki argüman gördüğünüzde kendinize sorun: \"Bu argümanlardan biri her zaman aynı mı?\" Eğer öyleyse, onu sınıfın yapıcısına taşıyın ve fonksiyonu tekliye dönüştürün.</span><span class=\"en-text\">When you see two arguments, ask yourself: \"Is one of these arguments always the same?\" If so, move it to the class constructor and convert the function to monadic.</span></div>"
    },
    {
      "id": "natural-cohesion",
      "title": {
        "en": "Natural Cohesion",
        "tr": "Doğal Bütünlük (Natural Cohesion)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">İki argüman yalnızca tek bir değerin sıralı bileşenleri olduğunda doğal bir bütünlüğe sahiptir. Point(x, y) doğaldır çünkü x ve y birlikte bir kavramı temsil eder. Ancak rastgele iki argümanın doğal bir bütünlüğü yoktur.</span><span class=\"en-text\">Two arguments have natural cohesion only when they are ordered components of a single value. Point(x, y) is natural because x and y together represent a concept. But arbitrary two arguments have no natural cohesion.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Doğal bütünlüğü olmayan argümanlar</span><span class=\"en-text\">BAD — Arguments without natural cohesion</span></span>\n<pre><span class=\"kw\">def</span> <span class=\"method\">create_rectangle</span>(x1, y1, x2, y2, color, border_width):\n    <span class=\"comment\"># 6 ayrı argüman - hangileri birlikte?</span>\n    ...</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Doğal bütünlükle gruplandırılmış</span><span class=\"en-text\">GOOD — Grouped by natural cohesion</span></span>\n<pre><span class=\"kw\">def</span> <span class=\"method\">create_rectangle</span>(top_left, bottom_right, style):\n    <span class=\"comment\"># 3 argüman, her biri doğal bir kavramı temsil ediyor</span>\n    ...\n\ntop_left = <span class=\"type\">Point</span>(<span class=\"field\">10</span>, <span class=\"field\">20</span>)\nbottom_right = <span class=\"type\">Point</span>(<span class=\"field\">100</span>, <span class=\"field\">200</span>)\nstyle = <span class=\"type\">RectStyle</span>(color=<span class=\"str\">\"blue\"</span>, border_width=<span class=\"field\">2</span>)\n<span class=\"method\">create_rectangle</span>(top_left, bottom_right, style)</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">\"Bu argümanlar birlikte bir kavram oluşturuyor mu?\" diye sorun. Eğer x ve y gibi her zaman birlikte kullanılıyorlarsa, bir Point nesnesi oluşturun. Eğer bağımsız kavramlarsa, farklı fonksiyonlara bölün.</span><span class=\"en-text\">Ask: \"Do these arguments form a concept together?\" If they are always used together like x and y, create a Point object. If they are independent concepts, split into different functions.</span></div>"
    },
    {
      "id": "argument-ordering",
      "title": {
        "en": "Argument Ordering Problem",
        "tr": "Argüman Sıralama Problemi (Argument Ordering)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Doğal sıralaması olmayan argümanlar, yanlış sırada geçirilmeye son derece açıktır. assertEquals(expected, actual) gibi fonksiyonlarda hangi argümanın hangisi olduğunu hatırlamak bir gelenektir ve hataya davetiye çıkarır.</span><span class=\"en-text\">Arguments without a natural ordering are prone to being passed in the wrong order. In functions like assertEquals(expected, actual), remembering which argument is which is a convention and invites errors.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Sıralama belirsiz</span><span class=\"en-text\">BAD — Ambiguous ordering</span></span>\n<pre><span class=\"kw\">function</span> <span class=\"method\">copyFile</span>(path1, path2) {\n    <span class=\"comment\">// path1 kaynak mı hedef mi? path2?</span>\n    ...\n}\n\n<span class=\"method\">copyFile</span>(<span class=\"str\">\"/tmp/backup.sql\"</span>, <span class=\"str\">\"/var/data/db.sql\"</span>);\n<span class=\"comment\">// Hangi yöne kopyalanıyor?</span></pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — İsimde sıralama kodlanmış</span><span class=\"en-text\">GOOD — Ordering encoded in name</span></span>\n<pre><span class=\"kw\">function</span> <span class=\"method\">copyFileFromSourceToDestination</span>(source, destination) {\n    ...\n}\n\n<span class=\"comment\">// Veya daha kısa: nesne yaklaşımı</span>\n<span class=\"kw\">class</span> <span class=\"type\">FileCopier</span> {\n    <span class=\"method\">constructor</span>(source) { <span class=\"kw\">this</span>.source = source; }\n    <span class=\"method\">copyTo</span>(destination) { ... }\n}\n\n<span class=\"kw\">new</span> <span class=\"type\">FileCopier</span>(<span class=\"str\">\"/var/data/db.sql\"</span>).<span class=\"method\">copyTo</span>(<span class=\"str\">\"/tmp/backup.sql\"</span>);</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">Argüman sıralaması belirsizse iki çözüm var: (1) Argüman isimlerini fonksiyon adına kodlayın: <code class=\"inline\">assertExpectedEqualsActual</code>, (2) argümanlardan birini nesnenin kendisi yapın.</span><span class=\"en-text\">If argument ordering is ambiguous, two solutions: (1) Encode argument names into the function name: <code class=\"inline\">assertExpectedEqualsActual</code>, (2) make one argument the object itself.</span></div>"
    }
  ]
});
