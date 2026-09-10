window.PAGE({
  "id": "page-60",
  "page": 60,
  "pdf_page": 91,
  "chapter": {
    "num": 4,
    "en": "Comments",
    "tr": "Yorumlar"
  },
  "section": {
    "en": "Gürültü, Konum İşaretçisi, Kapatma Parantezi Yorumları",
    "tr": "Gürültü, Konum İşaretçisi, Kapatma Parantezi Yorumları"
  },
  "title": {
    "en": "TODO Comments",
    "tr": "TODO Yorumları"
  },
  "blocks": [
    {
      "type": "heading",
      "level": 1,
      "en": "Noise Comments",
      "tr": "Gürültü Yorumu / Noise Comments",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Sometimes you see comments that are nothing but noise. They restate the obvious and provide no new information. These comments are so noisy that we learn to ignore them. The further we ignore them, the more likely we are to miss real information among them.",
          "tr": "Bazen yorumlar hiçbir şey söylememektedir. Yalnızca gürültüdürler. Aşağıdaki yorumlar o kadar aşikar ki hiç sorgulanmadan geçilirler. Ve geçilmeleri gerekir:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "/**\n * Varsayılan kurucu\n */\nprotected AnnualDateRule() {\n}\n\n/** Gün */\nprivate int dayOfMonth;\n\n/**\n * Gün içi ay değeri döndürür.\n * @return gün içi ay değeri\n */\npublic int getDayOfMonth() {\n  return dayOfMonth;\n}",
      "caption": {
        "en": "Noise comment examples",
        "tr": "Gürültü yorum örnekleri"
      }
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "These comments are so noisy that programmers learn to ignore them. As they learn to ignore irrelevant comments, they eventually ignore all comments—and there is real damage done. The following comment is so redundant it borders on absurdity:",
          "tr": "Bu tür yorumlar o kadar anlamsız ki programcılar onları okumayı öğrenir — tıpkı görmezden geldikleri reklamlar gibi. Sonunda gerçek yorumların da aynı şekilde görmezden gelinmesine yol açarlar. Aşağıdakine ne diyorsunuz:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "private void startSending()\n{\n  try\n  {\n    doSending();\n  }\n  catch(SocketException e)\n  {\n    // Gönderme iptal edildi. Bu normal.\n  }\n  catch(Exception e)\n  {\n    try\n    {\n      response.add(ErrorResponder.makeExceptionString(e));\n      response.closeAll();\n    }\n    catch(Exception e1)\n    {\n      //Artık ne yapabiliriz ki?\n    }\n  }\n}",
      "caption": {
        "en": "Most absurd noise comment",
        "tr": "En absürd gürültü yorumu"
      }
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "The second catch block was authored in a moment of frustration. The programmer was apparently displeased about leaving the catch block empty but didn't want to take the time to create an appropriate exception class. So he vented his frustration in a comment. Better to have replaced the catch block with a named function or handled the exception appropriately.",
          "tr": "İkinci catch bloğundaki yorum muhtemelen bir sinirlenme anında yazılmıştır. Programcı gerçekten o catch bloğunu boş bırakmaktan rahatsız olmuş; ama bir şeyler yazmak istememiş. Boş bir catch bloğunu anlamlı şekilde adlandırılmış bir metoda dönüştürmek yerine yorum bırakmıştır.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Position Markers",
      "tr": "Konum İşaretçisi / Position Markers",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Sometimes programmers like to mark a particular position in a source file. For example, I recently found this in a program I was browsing:",
          "tr": "Bazen programcılar bir kaynak dosyada belirli bir konumu işaretlemek ister. Şunun gibi:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "// Actions //////////////////////////////////",
      "caption": {
        "en": "Position marker example",
        "tr": "Konum işaretçisi örneği"
      }
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "There are rare times when it makes sense to gather certain functions together beneath a banner like this. But in general they are clutter that should be eliminated—especially the noisy train of slashes at the end. Think of it this way. A banner is startling and obvious if you don't see banners very often. So use them very sparingly, and only when the benefit is significant. If you overuse banners, they'll fall into the background noise and be ignored.",
          "tr": "Bazen belirli bir fonksiyonlar topluluğunu bu tür bir banner altında gruplamak anlamlı olabilir. Ama genellikle bunlar gereksiz gürültüdür ve görmezden gelinmelidir. Bunları nadiren ve yalnızca faydası açıkça görülen yerlerde kullanın. Bu tür banner'ları sık kullandığınızda arka plan gürültüsü haline gelirler ve görmezden gelinirler.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Closing Brace Comments",
      "tr": "Kapatma Parantezi Yorumu / Closing Brace Comments",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Sometimes programmers will put special comments on closing braces. Although this might make sense for long functions with deeply nested structures, it serves only to clutter the kind of small and encapsulated functions that we prefer. So if you find yourself wanting to mark your closing braces, try to shorten your functions instead.",
          "tr": "Bazen programcılar kapanan parantezlerin yanına özel yorumlar ekler. Bu, uzun ve derin iç içe geçmiş yapılarda anlam taşıyabilir; ancak yalnızca küçük ve kapsüllü fonksiyonlar yazdığımız için tercih ettiğimiz durumlarda bu yorumlar yalnızca dağınıklıktır. Kapatma parantezi yorumlarına ihtiyaç duyuyorsanız, bunu fonksiyonlarınızı kısaltmak için bir sinyal olarak değerlendirin:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "public class wc {\n  public static void main(String[] args) {\n    BufferedReader in = new BufferedReader(new InputStreamReader(System.in));\n    String line;\n    int lineCount = 0;\n    int charCount = 0;\n    int wordCount = 0;\n    try {\n      while ((line = in.readLine()) != null) {\n        lineCount++;\n        charCount += line.length();\n        String words[] = line.split(\"\\\\W\");\n        wordCount += words.length;\n      } //while\n      System.out.println(\"wordCount = \" + wordCount);\n      System.out.println(\"lineCount = \" + lineCount);\n      System.out.println(\"charCount = \" + charCount);\n    } // try\n    catch (IOException e) {\n      System.err.println(\"Error:\" + e.getMessage());\n    } //catch\n  } //main\n}",
      "caption": {
        "en": "Closing brace comments — bad example",
        "tr": "Kapatma parantezi yorumları — kötü örnek"
      }
    }
  ],
  "concepts": [
    {
      "id": "noise-comment",
      "title": {
        "en": "Noise Comment",
        "tr": "Gürültü Yorumu (Noise Comment)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept\n                        Explanation</span></h4>\n<p><span class=\"tr-text\">Gürültü yorumları apaçık olanı tekrarlar ve okuyucuya hiçbir yeni bilgi vermez.\n                        Zamanla görmezden gelinen bu yorumlar, aralarına sıkışmış gerçek ve önemli yorumların da\n                        görmezden gelmesine yol açar.</span>\n<span class=\"en-text\">Noise comments repeat the obvious and provide no new\n                        information to the reader. Over time these ignored comments lead to real and important comments\n                        interspersed among them also being ignored.</span>\n</p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad\n                        Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Her satır yorumlanmış, hiçbiri değer\n                        katmıyor</span><span class=\"en-text\">BAD — Every line commented, none\n                        adding value</span></span>\n<pre><span class=\"comment\">/** Kullanıcı adı */</span>\nString username;\n\n<span class=\"comment\">/** Yaş */</span>\n<span class=\"kw\">int</span> age;\n\n<span class=\"comment\">/** Kullanıcı adını döndürür */</span>\nString getUsername() { <span class=\"kw\">return</span> username; }</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good\n                        Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Yorum yok, isimler açık</span><span class=\"en-text\">GOOD — No comments, names are clear</span></span>\n<pre>String username;\n<span class=\"kw\">int</span> age;\nString getUsername() { <span class=\"kw\">return</span> username; }</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong>\n<span class=\"tr-text\">Bir yorum yazmadan önce kendinize \"Bu yorum olmasaydı kodu anlamak güçleşir\n                        miydi?\" sorusunu sorun. Hayırsa — silmeyin, yazmayın.</span>\n<span class=\"en-text\">Before writing a comment, ask yourself \"Would the code\n                        be harder to understand without this comment?\" If no — don't write it.</span>\n</div>"
    },
    {
      "id": "position-marker",
      "title": {
        "en": "Position Marker",
        "tr": "Konum İşaretçisi (Position Marker)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept\n                        Explanation</span></h4>\n<p><span class=\"tr-text\">Dosyada bölüm ayıracı olarak kullanılan <code style=\"background:#e9ecef;padding:2px 6px;border-radius:4px;font-family:monospace;\">// ======</code>\n                        benzeri satırlar başlangıçta dikkat çekiciyken, alışıla gelince arka plan gürültüsüne\n                        dönüşürler. İyi kod organizasyonu ve küçük fonksiyonlar bu işaretçilere olan ihtiyacı ortadan\n                        kaldırır.</span>\n<span class=\"en-text\">Lines like <code>// ======</code> used as section\n                        dividers in files are eye-catching at first but turn into background noise once they become\n                        commonplace. Good code organization and small functions eliminate the need for these\n                        markers.</span>\n</p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad\n                        Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Orman gibi bir dosyada işaretçiler</span><span class=\"en-text\">BAD — Markers in a forest-like file</span></span>\n<pre><span class=\"comment\">// ==================== INIT ====================</span>\n<span class=\"kw\">public void</span> init() { ... }\n\n<span class=\"comment\">// =================== ACTIONS ==================</span>\n<span class=\"kw\">public void</span> processOrder() { ... }\n<span class=\"kw\">public void</span> cancelOrder() { ... }\n\n<span class=\"comment\">// =================== HELPERS ==================</span>\n<span class=\"kw\">private void</span> validate() { ... }</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good\n                        Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Ayrı küçük sınıflar, işaretçi gereksiz</span><span class=\"en-text\">GOOD — Separate small classes, no markers\n                        needed</span></span>\n<pre><span class=\"kw\">class</span> OrderInitializer { <span class=\"kw\">public void</span> init() { ... } }\n<span class=\"kw\">class</span> OrderProcessor { <span class=\"kw\">public void</span> process() { ... } }\n<span class=\"kw\">class</span> OrderValidator { <span class=\"kw\">public void</span> validate() { ... } }</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong>\n<span class=\"tr-text\">Dosyanız konum işaretçisi olmadan okunamıyorsa, bu dosyanın çok büyük ve tek\n                        sorumluluk ilkesini ihlal ettiğinin işaretidir.</span>\n<span class=\"en-text\">If your file can't be read without position markers,\n                        it's a sign that the file is too large and violating the single responsibility principle.</span>\n</div>"
    },
    {
      "id": "closing-brace",
      "title": {
        "en": "Closing Brace Comment",
        "tr": "Kapatma Parantezi Yorumu (Closing Brace Comment)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept\n                        Explanation</span></h4>\n<p><span class=\"tr-text\">Kapanan süslü parantezlerin yanında <code style=\"background:#e9ecef;padding:2px 6px;border-radius:4px;font-family:monospace;\">// while</code>\n                        veya <code style=\"background:#e9ecef;padding:2px 6px;border-radius:4px;font-family:monospace;\">// try</code>\n                        gibi yorumlar yazmak, fonksiyonun çok uzun ve karmaşık olduğunun belirtisidir. Çözüm yorum\n                        değil, fonksiyonu küçültmektir.</span>\n<span class=\"en-text\">Writing comments like <code>// while</code> or\n                        <code>// try</code> next to closing braces is a sign that the function is too long and complex.\n                        The solution is not a comment, but shortening the function.</span>\n</p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad\n                        Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Kapatma parantezi yorumları</span><span class=\"en-text\">BAD — Closing brace comments</span></span>\n<pre><span class=\"kw\">while</span> (hasNext()) {\n                    <span class=\"kw\">if</span> (isValid()) {\n                    process();\n                    } <span class=\"comment\">// if isValid</span>\n                    } <span class=\"comment\">// while hasNext</span>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good\n                            Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Küçük fonksiyon, yorum gereksiz</span><span class=\"en-text\">GOOD — Small function, no comment needed</span></span>\n<pre><span class=\"kw\">while</span> (hasNext()) {\n                        processNextValidItem();\n                        }\n\n                        <span class=\"kw\">private void</span> processNextValidItem() {\n                        <span class=\"kw\">if</span> (isValid()) process();\n                        }\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong>\n<span class=\"tr-text\">Kapatma parantezine yorum ekleme ihtiyacı hissediyorsanız, durdurun ve\n                                o döngünün gövdesini ayrı bir metoda çıkarın. İsimleyin ve yorumdan daha iyi bir\n                                belgeleme sağlayın.</span>\n<span class=\"en-text\">If you feel the need to add a comment to a\n                                closing brace, stop and extract the loop body into a separate method. Name it and\n                                provide better documentation than a comment.</span>\n</div>\n</pre\"></pre\">"
    }
  ]
});
