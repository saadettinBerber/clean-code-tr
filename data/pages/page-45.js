window.PAGE({
  "id": "page-45",
  "page": 45,
  "pdf_page": 76,
  "chapter": {
    "num": 3,
    "en": "Functions",
    "tr": "Fonksiyonlar"
  },
  "section": {
    "en": "Output Arguments / Command Query Separation",
    "tr": "Çıkış Argümanları / Komut Sorgu Ayrımı"
  },
  "title": {
    "en": "Output Arguments, Command Query Separation",
    "tr": "Çıkış Argümanları, Komut Sorgu Ayrımı"
  },
  "blocks": [
    {
      "type": "heading",
      "level": 1,
      "en": "Output Arguments",
      "tr": "Çıkış Argümanları / Output Arguments",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Arguments are most naturally interpreted as <em>inputs</em> to a function. If you have been programming for more than a few years, I'm sure you've done a double-take on an argument that was actually an <em>output</em> rather than an input. For example:",
          "tr": "Argümanlar en doğal olarak bir fonksiyona <em>girdi</em> (input) olarak yorumlanır. Birkaç yıldan fazla programlama deneyiminiz varsa, eminim girdi değil aslında <em>çıktı</em> (output) olan bir argüman karşısında bir an duraksadığınız olmuştur. Örneğin:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "appendFooter(s);",
      "caption": {
        "en": "appendFooter Ambiguity",
        "tr": "appendFooter Belirsizliği"
      }
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Does this function append <code>s</code> as the footer to something? Or does it append some footer to <code>s</code>? Is <code>s</code> an input or an output? It doesn't take long to look at the function signature and see:",
          "tr": "Bu fonksiyon <code>s</code>'yi bir şeye footer olarak mı ekliyor? Yoksa <code>s</code>'ye bir footer mı ekliyor? <code>s</code> bir girdi mi yoksa çıktı mı? Fonksiyon imzasına bakmak uzun sürmez:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "public void appendFooter(StringBuffer report)",
      "caption": {
        "en": "Function Signature",
        "tr": "Fonksiyon İmzası"
      }
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "This clarifies the issue, but only at the expense of checking the declaration of the function. Anything that forces you to check the function signature is equivalent to a double-take. It's a cognitive break and should be avoided.",
          "tr": "Bu, konuyu açıklığa kavuşturur, ama yalnızca fonksiyonun bildirimini kontrol etmek pahasına. Sizi fonksiyon imzasını kontrol etmeye zorlayan her şey, bir an duraksamaya eşdeğerdir. Bu bilişsel bir kesintidir (cognitive break) ve bundan kaçınılmalıdır.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "In the days before object oriented programming it was sometimes necessary to have output arguments. However, much of the need for output arguments disappears in OO languages because <code>this</code> is <em>intended</em> to act as an output argument. In other words, it would be better for <code>appendFooter</code> to be invoked as:",
          "tr": "Nesne yönelimli programlama öncesi dönemde bazen çıkış argümanlarına ihtiyaç duyuluyordu. Ancak nesne yönelimli dillerde çıkış argümanlarına olan ihtiyacın büyük kısmı ortadan kalkmıştır çünkü <code>this</code> bir çıkış argümanı olarak hareket etmek üzere <em>tasarlanmıştır</em>. Başka bir deyişle, <code>appendFooter</code>'ın şu şekilde çağrılması daha iyi olurdu:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "report.appendFooter();",
      "caption": {
        "en": "Object-Oriented Approach",
        "tr": "Nesne Yönelimli Yaklaşım"
      }
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "In general output arguments should be avoided. If your function must change the state of something, have it change the state of its owning object.",
          "tr": "Genel olarak çıkış argümanlarından (output arguments) kaçınılmalıdır. Fonksiyonunuz bir şeyin durumunu değiştirmek zorundaysa, ait olduğu nesnenin durumunu değiştirsin.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Command Query Separation",
      "tr": "Komut Sorgu Ayrımı / Command Query Separation",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Functions should either do something or answer something, but not both. Either your function should change the state of an object, or it should return some information about that object. Doing both often leads to confusion. Consider, for example, the following function:",
          "tr": "Fonksiyonlar ya bir şey yapmalı ya da bir şeye cevap vermeli, ama ikisini birden yapmamalıdır. Ya fonksiyonunuz bir nesnenin durumunu değiştirmeli ya da o nesne hakkında bilgi döndürmelidir. İkisini birden yapmak genellikle kafa karışıklığına yol açar. Örneğin, şu fonksiyonu ele alalım:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "public boolean set(String attribute, String value);",
      "caption": {
        "en": "Ambiguous set Function",
        "tr": "Belirsiz set Fonksiyonu"
      }
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "This function sets the value of a named attribute and returns <code>true</code> if it is successful and <code>false</code> if no such attribute exists. This leads to odd statements like this:",
          "tr": "Bu fonksiyon, adı verilen bir niteliğin (attribute) değerini ayarlar ve başarılıysa <code>true</code>, böyle bir nitelik yoksa <code>false</code> döndürür. Bu, şöyle garip ifadelere yol açar:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "if (set(\"username\", \"unclebob\"))...",
      "caption": {
        "en": "Confusing Usage",
        "tr": "Kafa Karıştırıcı Kullanım"
      }
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Imagine this from the point of view of the reader. What does it mean? Is it asking whether the <code>\"username\"</code> attribute was previously set to <code>\"unclebob\"</code>? Or is it asking whether the <code>\"username\"</code> attribute was successfully set to <code>\"unclebob\"</code>? It's hard to infer the meaning from the call because it's not clear whether the word <code>\"set\"</code> is a verb or an adjective.",
          "tr": "Bunu okuyucunun bakış açısından düşünün. Ne anlama geliyor? <code>\"username\"</code> niteliği daha önce <code>\"unclebob\"</code> olarak ayarlanmış mı diye mi soruyor? Yoksa <code>\"username\"</code> niteliği başarıyla <code>\"unclebob\"</code> olarak ayarlandı mı diye mi soruyor? Çağrıdan anlamı çıkarmak zordur çünkü <code>\"set\"</code> kelimesinin fiil mi yoksa sıfat mı olduğu belli değildir.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "The real solution is to separate the command from the query so that the ambiguity cannot occur:",
          "tr": "Gerçek çözüm, komutu sorgudan ayırarak belirsizliğin oluşmasını engellemektir:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "if (attributeExists(\"username\")) {\n    setAttribute(\"username\", \"unclebob\");\n    ...\n}",
      "caption": {
        "en": "Command and Query Separated",
        "tr": "Komut ve Sorgu Ayrılmış"
      }
    }
  ],
  "concepts": [
    {
      "id": "output-arguments",
      "title": {
        "en": "Output Arguments",
        "tr": "Çıkış Argümanları (Output Arguments)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Çıkış argümanları, fonksiyonun girdi yerine çıktı olarak kullandığı argümanlardır. Nesne yönelimli programlamada <code class=\"inline\">this</code> zaten bu amaca hizmet ettiği için çıkış argümanlarına gerek kalmaz.</span><span class=\"en-text\">Output arguments are arguments that a function uses as output rather than input. In OOP, <code class=\"inline\">this</code> already serves this purpose, so output arguments are unnecessary.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Çıkış argümanı</span><span class=\"en-text\">BAD — Output argument</span></span>\n<pre><span class=\"kw\">function</span> <span class=\"method\">addItemsToList</span>(items, targetList) {\n    <span class=\"comment\">// targetList girdi mi çıktı mı?</span>\n    <span class=\"kw\">for</span> (<span class=\"kw\">const</span> item <span class=\"kw\">of</span> items) {\n        targetList.<span class=\"method\">push</span>(<span class=\"method\">transform</span>(item));\n    }\n}\n\n<span class=\"kw\">const</span> result = [];\n<span class=\"method\">addItemsToList</span>(rawData, result);  <span class=\"comment\">// result değiştiriliyor</span></pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Dönüş değeri ile</span><span class=\"en-text\">GOOD — Using return value</span></span>\n<pre><span class=\"kw\">function</span> <span class=\"method\">transformItems</span>(items) {\n    <span class=\"kw\">return</span> items.<span class=\"method\">map</span>(item =&gt; <span class=\"method\">transform</span>(item));\n}\n\n<span class=\"kw\">const</span> result = <span class=\"method\">transformItems</span>(rawData);  <span class=\"comment\">// Açık ve temiz</span></pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">Bir fonksiyonun bir şeyin durumunu değiştirmesi gerekiyorsa, ait olduğu nesnenin metodunu kullanın: <code class=\"inline\">report.appendFooter()</code> daha iyidir <code class=\"inline\">appendFooter(report)</code>'dan.</span><span class=\"en-text\">If a function needs to change something's state, use a method on the owning object: <code class=\"inline\">report.appendFooter()</code> is better than <code class=\"inline\">appendFooter(report)</code>.</span></div>"
    },
    {
      "id": "command-query-separation",
      "title": {
        "en": "Command Query Separation",
        "tr": "Komut Sorgu Ayrımı (Command Query Separation)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Komut Sorgu Ayrımı (CQS) ilkesine göre fonksiyonlar ya bir eylem gerçekleştirmeli (komut) ya da bilgi döndürmeli (sorgu) ama ikisini birden yapmamalıdır. Bu ilke, kodun okunabilirliğini ve öngörülebilirliğini artırır.</span><span class=\"en-text\">According to Command Query Separation (CQS), functions should either perform an action (command) or return information (query), but not both. This principle increases code readability and predictability.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Hem komut hem sorgu</span><span class=\"en-text\">BAD — Both command and query</span></span>\n<pre><span class=\"kw\">class</span> <span class=\"type\">Stack</span>:\n    <span class=\"kw\">def</span> <span class=\"method\">pop</span>(self):\n        <span class=\"comment\"># Hem değeri döndürür hem de durumu değiştirir</span>\n        item = self.items[-<span class=\"field\">1</span>]\n        self.items = self.items[:-<span class=\"field\">1</span>]\n        <span class=\"kw\">return</span> item\n\n<span class=\"comment\"># \"pop\" bir eylem mi yoksa bir soru mu?</span>\n<span class=\"kw\">if</span> stack.<span class=\"method\">pop</span>() == <span class=\"str\">\"target\"</span>:\n    <span class=\"comment\"># Eşleşmezse eleman geri gelmez!</span>\n    ...</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Ayrılmış komut ve sorgu</span><span class=\"en-text\">GOOD — Separated command and query</span></span>\n<pre><span class=\"kw\">class</span> <span class=\"type\">Stack</span>:\n    <span class=\"kw\">def</span> <span class=\"method\">peek</span>(self):\n        <span class=\"comment\"># Sorgu: sadece bakar, değiştirmez</span>\n        <span class=\"kw\">return</span> self.items[-<span class=\"field\">1</span>]\n\n    <span class=\"kw\">def</span> <span class=\"method\">remove_top</span>(self):\n        <span class=\"comment\"># Komut: sadece siler, döndürmez</span>\n        self.items.<span class=\"method\">pop</span>()\n\n<span class=\"kw\">if</span> stack.<span class=\"method\">peek</span>() == <span class=\"str\">\"target\"</span>:\n    stack.<span class=\"method\">remove_top</span>()  <span class=\"comment\"># Güvenli ve açık</span></pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">Bir fonksiyon yazarken kendinize sorun: \"Bu bir soru mu yoksa bir eylem mi?\" Eğer ikisi de ise, ikiye bölün. Sorgular yan etkisiz (side-effect-free) olmalı, komutlar ise hiçbir şey döndürmemelidir.</span><span class=\"en-text\">When writing a function, ask: \"Is this a question or an action?\" If it's both, split it. Queries should be side-effect-free, commands should return nothing.</span></div>"
    },
    {
      "id": "cognitive-break",
      "title": {
        "en": "Cognitive Break",
        "tr": "Bilişsel Kesinti (Cognitive Break)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Bilişsel kesinti, bir kod satırını anlamak için okuyucunun başka bir yere bakması gerektiğinde oluşan akış bozulmasıdır. Fonksiyon imzalarını kontrol etmeye zorlamak, belgelere başvurmak veya başka dosyalara atlamak gibi durumlar bilişsel kesintilere neden olur.</span><span class=\"en-text\">A cognitive break occurs when understanding a line of code requires the reader to look elsewhere. Checking function signatures, consulting documentation, or jumping to other files all cause cognitive breaks.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Anlam için imza gerekli</span><span class=\"en-text\">BAD — Signature needed for meaning</span></span>\n<pre><span class=\"comment\">// Bu ne yapıyor? Belgeyi mi formatlar, formatı mı belgeler?</span>\n<span class=\"method\">format</span>(document);\n\n<span class=\"comment\">// Diske mi yazıyor, listeye mi ekliyor?</span>\n<span class=\"method\">save</span>(users, file);\n\n<span class=\"comment\">// Sonucu döndürür mü, yerinde mi değiştirir?</span>\n<span class=\"method\">sort</span>(data);</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — İmza gerektirmeyen açıklık</span><span class=\"en-text\">GOOD — Self-evident without signatures</span></span>\n<pre>document.<span class=\"method\">formatAsMarkdown</span>();\n\n<span class=\"method\">saveUsersToFile</span>(users, filePath);\n\n<span class=\"kw\">const</span> sortedData = <span class=\"method\">sortByDate</span>(data);</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">Kodunuzu okuyucunun gözüyle inceleyin. Eğer bir satırı anlamak için başka bir yere bakmanız gerekiyorsa, isim seçimi veya yapı yeterince açık değildir. Amacınız \"sıfır atlama\" (zero-jump) okunabilirlik olmalıdır.</span><span class=\"en-text\">Review your code through the reader's eyes. If understanding a line requires looking elsewhere, the naming or structure isn't clear enough. Aim for \"zero-jump\" readability.</span></div>"
    }
  ]
});
