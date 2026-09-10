window.PAGE({
  "id": "page-56",
  "page": 56,
  "pdf_page": 87,
  "chapter": {
    "num": 4,
    "en": "Comments",
    "tr": "Yorumlar"
  },
  "section": {
    "en": "Bilgilendirici, Niyet Açıklaması, Netleştirme",
    "tr": "Bilgilendirici, Niyet Açıklaması, Netleştirme"
  },
  "title": {
    "en": "Good Comments",
    "tr": "İyi Yorumlar (Yasal & Bilgilendirici)"
  },
  "blocks": [
    {
      "type": "heading",
      "level": 1,
      "en": "Informative Comments",
      "tr": "Bilgilendirici Yorumlar / Informative Comments",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "It is sometimes useful to provide basic information with a comment. For example, consider this comment that explains the return value of an abstract method:",
          "tr": "Bazen bir yorumla temel bilgi vermek faydalı olabilir. Örneğin şu yorum, soyut bir metodun dönüş değerini açıklar:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "// Test edilen Responder örneğini döner.\nprotected abstract Responder responderInstance();",
      "caption": {
        "en": "Basic informative comment",
        "tr": "Temel bilgi yorumu"
      }
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "A comment like this can sometimes be useful, but it is better to use the name of the function to convey the information where possible. For example, in this case the comment could be made redundant by renaming the function: responderBeingTested.",
          "tr": "Bu tür bir yorum bazen yararlı olabilir; ancak mümkünse bilgiyi fonksiyon adına taşımak daha iyidir. Örneğin bu durumda yorum, metodun <code>responderBeingTested</code> olarak yeniden adlandırılmasıyla gereksiz hale gelirdi.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Here's a case that's a bit better:",
          "tr": "İşte biraz daha iyi bir örnek:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "// format matched kk:mm:ss EEE, MMM dd, yyyy\nPattern timeMatcher = Pattern.compile(\n       \"\\\\d*:\\\\d*:\\\\d* \\\\w*, \\\\w* \\\\d*, \\\\d*\");",
      "caption": {
        "en": "Comment explaining regex format",
        "tr": "Regex formatı açıklayan yorum"
      }
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "In this case the comment lets us know that the regular expression is intended to match a time and date that were formatted with the SimpleDateFormat.format function using the specified format string. Still, it might have been better, and clearer, if this code had been moved to a special class that converted the formats of dates and times. Then the comment would likely have been superfluous.",
          "tr": "Bu durumda yorum, regex ifadesinin <code>SimpleDateFormat.format</code> fonksiyonu ile belirtilen format dizgisi kullanılarak biçimlendirilmiş bir tarih ve saati eşleştirmeye yönelik olduğunu bize bildiriyor. Yine de bu kod, tarihleri ve saatleri dönüştüren özel bir sınıfa taşınsaydı hem daha iyi hem de daha açık olurdu — o zaman yorum da büyük olasılıkla gereksiz kalırdı.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Explanation of Intent",
      "tr": "Niyetin Açıklaması / Explanation of Intent",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Sometimes a comment goes beyond just useful information about the implementation and provides the intent behind a decision. In the following case we see an interesting decision documented by a comment. When comparing two objects, the author decided that he wanted to sort objects of his class higher than objects of any other.",
          "tr": "Bazen bir yorum, uygulamaya ilişkin yararlı bilgilerin ötesine geçerek bir kararın arkasındaki niyeti ortaya koyar. Aşağıdaki örnekte ilginç bir karar bir yorumla belgelenmiştir. İki nesneyi karşılaştırırken yazar, kendi sınıfından nesneleri sıralamada diğer her tür nesnenin önüne geçirmek istediğine karar vermiştir:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "public int compareTo(Object o)\n{\n  if(o instanceof WikiPagePath)\n  {\n    WikiPagePath p = (WikiPagePath) o;\n    String compressedName = StringUtil.join(names, \"\");\n    String compressedArgumentName = StringUtil.join(p.names, \"\");\n    return compressedName.compareTo(compressedArgumentName);\n  }\n  return 1; // doğru türden olduğumuz için daha büyüğüz.\n}",
      "caption": {
        "en": "Comment explaining intent",
        "tr": "Niyetin açıklandığı yorum"
      }
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Here's an even better example. You might not agree with the programmer's solution to the problem, but at least you know what he was trying to do.",
          "tr": "İşte daha da iyi bir örnek. Programcının probleme yaklaşımına katılmıyor olabilirsiniz; ama en azından ne yapmaya çalıştığını anlıyorsunuzdur:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "public void testConcurrentAddWidgets() throws Exception {\n  WidgetBuilder widgetBuilder =\n    new WidgetBuilder(new Class[]{BoldWidget.class});\n  String text = \"'''bold text'''\";\n  ParentWidget parent =\n    new BoldWidget(new MockWidgetRoot(), \"'''bold text'''\");\n  AtomicBoolean failFlag = new AtomicBoolean();\n  failFlag.set(false);\n  //Bu yarış koşulunu elde etmek için en iyi girişimimiz:\n  //çok sayıda thread oluşturuyoruz.\n  for (int i = 0; i < 25000; i++) {\n    WidgetBuilderThread widgetBuilderThread =\n      new WidgetBuilderThread(widgetBuilder, text, parent, failFlag);\n    Thread thread = new Thread(widgetBuilderThread);\n    thread.start();\n  }\n  assertEquals(false, failFlag.get());\n}",
      "caption": {
        "en": "Race condition test intent",
        "tr": "Yarış koşulunu test etme niyeti"
      }
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Clarification",
      "tr": "Netleştirme / Clarification",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Sometimes it is just helpful to translate the meaning of some obscure argument or return value into something that's readable. In general it is better to find a way to make that argument or return value clear in its own right; but when it's part of the standard library, or in code that you cannot alter, then a helpful clarifying comment can be useful.",
          "tr": "Bazen belirsiz bir argümanın ya da dönüş değerinin anlamını okunabilir bir şeye çevirmek faydalıdır. Genel olarak, o argümanı ya da dönüş değerini kendi başına açık hale getirmenin bir yolunu bulmak daha iyidir; ancak bu standart bir kütüphanenin parçasıysa ya da değiştiremediğiniz bir kodsa, yararlı bir netleştirme yorumu işe yarayabilir:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "assertTrue(a.compareTo(a) == 0);    // a == a\nassertTrue(a.compareTo(b) != 0);    // a != b\nassertTrue(ab.compareTo(ab) == 0);  // ab == ab\nassertTrue(a.compareTo(b) == -1);   // a < b\nassertTrue(aa.compareTo(ab) == -1); // aa < ab\nassertTrue(ba.compareTo(bb) == -1); // ba < bb\nassertTrue(b.compareTo(a) == 1);    // b > a\nassertTrue(ab.compareTo(aa) == 1);  // ab > aa\nassertTrue(bb.compareTo(ba) == 1);  // bb > ba",
      "caption": {
        "en": "Clarifying comment example",
        "tr": "Netleştirici yorumlar örneği"
      }
    },
    {
      "type": "html",
      "html": "<div class=\"note-box\">\n<span class=\"tr-text\">⚠️ <strong>Uyarı:</strong> Netleştirici bir yorumun yanlış olma riski ciddi biçimde\n                yüksektir. Önceki örneği inceleyin ve yorumların doğruluğunu doğrulamanın ne kadar zor olduğuna bakın.\n                Bu durum hem netleştirmenin neden gerekli olduğunu hem de neden riskli olduğunu açıklar. Bu tür\n                yorumları yazmadan önce daha iyi bir yol olmadığından emin olun; ardından doğrulukları konusunda çok\n                daha dikkatli olun.</span>\n<span class=\"en-text\">⚠️ <strong>Warning:</strong> There is a substantial risk that a\n                clarifying comment is incorrect. Go through the previous example and see how difficult it is to verify\n                that they are correct. This explains both why the clarification is necessary and why it's risky. So\n                before writing comments like this, take care that there is no better way, and then take even more care\n                that they are accurate.</span>\n</div>"
    }
  ],
  "concepts": [
    {
      "id": "informative-comment",
      "title": {
        "en": "Informative Comment",
        "tr": "Bilgilendirici Yorum (Informative Comment)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept\n                        Explanation</span></h4>\n<p><span class=\"tr-text\">Regex gibi karmaşık dönüş değerlerini veya soyut metot imzalarını açıklayan\n                        yorumlar zaman zaman gerçekten yardımcı olabilir. Ancak önce ismi daha açık hale getirip\n                        getiremeyeceğinizi deneyin.</span>\n<span class=\"en-text\">Comments explaining complex return values like regex or\n                        abstract method signatures can sometimes be genuinely helpful. But first try whether you can\n                        make the name more explicit.</span>\n</p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad\n                        Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — İsim belirsiz, yorum zorunlu</span><span class=\"en-text\">BAD — Vague name, comment required</span></span>\n<pre><span class=\"comment\">// e-posta regex'i</span>\nPattern p = Pattern.compile(<span class=\"str\">\"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\\\.[a-zA-Z]{2,}\"</span>);</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good\n                        Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — İsim açık, yorum gereksiz</span><span class=\"en-text\">GOOD — Clear name, no comment needed</span></span>\n<pre>Pattern emailAddressPattern = Pattern.compile(\n    <span class=\"str\">\"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\\\.[a-zA-Z]{2,}\"</span>);</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong>\n<span class=\"tr-text\">Bir yorumu sildiğinizde kodu hâlâ anlıyor musunuz? Evet ise yorum zaten\n                        gereksizdi. Hayır ise — ismi veya yapıyı iyileştirin.</span>\n<span class=\"en-text\">When you delete a comment, can you still understand the\n                        code? If yes, the comment was already unnecessary. If no — improve the name or structure.</span>\n</div>"
    },
    {
      "id": "explanation-of-intent",
      "title": {
        "en": "Explanation of Intent",
        "tr": "Niyetin Açıklaması (Explanation of Intent)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept\n                        Explanation</span></h4>\n<p><span class=\"tr-text\">Bazen bir karar neden alındığını koda yansıtmak olanaksızdır. \"Neden böyle\n                        yaptım?\" sorusunu yanıtlayan yorumlar, gelecekteki geliştiricilere o kodu değiştirmeden önce ne\n                        düşünmeleri gerektiğini söyler.</span>\n<span class=\"en-text\">Sometimes it is impossible to reflect why a decision was\n                        made in the code. Comments that answer \"why did I do this?\" tell future developers what they\n                        need to think about before changing that code.</span>\n</p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad\n                        Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Niyet belirsiz</span><span class=\"en-text\">BAD — Intent unclear</span></span>\n<pre>Collections.sort(items, (a, b) -&gt; b.priority - a.priority);</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good\n                        Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Neden bu sıralama? Yorum açıklıyor</span><span class=\"en-text\">GOOD — Why this sort? Comment explains</span></span>\n<pre><span class=\"comment\">// Yüksek öncelikli işler önce işlensin;\n// SLA gereksinimi: kritik görevler 5dk içinde başlamalı.</span>\nCollections.sort(items, (a, b) -&gt; b.priority - a.priority);</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong>\n<span class=\"tr-text\">\"Ne yapıyor?\" sorusu koda bırakılmalıdır. \"Neden böyle yapıyor?\" sorusu cevap\n                        bulunamamadıysa yoruma düşebilir.</span>\n<span class=\"en-text\">\"What does it do?\" should be left to the code. \"Why does\n                        it do it this way?\" can go into a comment if no better answer can be found.</span>\n</div>"
    },
    {
      "id": "clarification",
      "title": {
        "en": "Clarification Comment",
        "tr": "Netleştirme Yorumu (Clarification)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept\n                        Explanation</span></h4>\n<p><span class=\"tr-text\">Değiştiremedeğiniz kütüphane kodlarında, belirsiz argümanların veya dönüş\n                        değerlerinin anlamını netleştiren yorumlar yararlı olabilir. Ancak bu tür yorumlar kolayca\n                        eskiyip yanlış bilgi verebileceğinden çok dikkatli olunmalıdır.</span>\n<span class=\"en-text\">In library code you cannot change, comments that clarify\n                        the meaning of obscure arguments or return values can be useful. However, great care must be\n                        taken since such comments can easily become outdated and misinform.</span>\n</p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad\n                        Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Anlamsız argümanlar, yorum yok</span><span class=\"en-text\">BAD — Unclear args, no clarification</span></span>\n<pre>resize(image, 800, 600, <span class=\"kw\">true</span>, <span class=\"kw\">false</span>);</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good\n                        Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Netleştirici yorum veya isimli argüman</span><span class=\"en-text\">GOOD — Clarifying comment or named arg</span></span>\n<pre>resize(image,\n    800,           <span class=\"comment\">// maxWidth</span>\n    600,           <span class=\"comment\">// maxHeight</span>\n    <span class=\"kw\">true</span>,          <span class=\"comment\">// preserveAspectRatio</span>\n    <span class=\"kw\">false</span>);        <span class=\"comment\">// allowUpscaling</span></pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong>\n<span class=\"tr-text\">Kendi yazdığınız kodda netleştirici yorum yerine isimli sabitler veya Builder\n                        deseni kullanın. Üçüncü parti kütüphanelerde ise yorum kabul edilebilir.</span>\n<span class=\"en-text\">For your own code, use named constants or the Builder\n                        pattern instead of clarifying comments. For third-party libraries, a comment is\n                        acceptable.</span>\n</div>"
    }
  ]
});
