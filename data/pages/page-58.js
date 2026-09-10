window.PAGE({
  "id": "page-58",
  "page": 58,
  "pdf_page": 89,
  "chapter": {
    "num": 4,
    "en": "Comments",
    "tr": "Yorumlar"
  },
  "section": {
    "en": "Kötü Yorumlar: Mırıldanma, Gereksiz Yorum",
    "tr": "Kötü Yorumlar: Mırıldanma, Gereksiz Yorum"
  },
  "title": {
    "en": "Clarification",
    "tr": "Netleştirme"
  },
  "blocks": [
    {
      "type": "html",
      "html": "<div class=\"bad-badge\">\n<span class=\"tr-text\">⚠ Kötü Yorumlar</span>\n<span class=\"en-text\" style=\"display:none;\">⚠ Bad Comments</span>\n</div>"
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Bad Comments",
      "tr": "Kötü Yorumlar / Bad Comments",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Most comments fall into this category. Usually they are crutches or excuses for poor code or justifications for insufficient decisions, amounting to little more than the programmer talking to himself.",
          "tr": "Yorumların büyük çoğunluğu bu kategoriye girer. Genellikle kötü kodun koltuk değnekleri ya da bahaneleridir; yetersiz kararların meşrulaştırılma çabasıdır. Özetle, programcının kendi kendine bağıra bağıra konuşmasıdır.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Mumbling",
      "tr": "Mırıldanma / Mumbling",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Plopping in a comment just because you feel you should or because the process requires it, is a hack. If you decide to write a comment, then spend the time necessary to make sure it is the best comment you can write.",
          "tr": "Sırf \"yapmalıyım\" hissiyle ya da süreç gerektirdiği için bir yorum eklemek, yamaya çekmektir. Bir yorum yazmaya karar verdikten sonra, onu yazabileceğiniz en iyi yorum haline getirmek için gereken zamanı harcayın.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Here, for example, is a case I found in FitNesse, where a comment might indeed have been useful. But the author was in a hurry or just not paying much attention. His mumbling left behind an enigma:",
          "tr": "Örneğin FitNesse'de bulduğum şu duruma bakın; bir yorum gerçekten faydalı olabilirdi. Ama yazar acelede ya da yeterince dikkatli değildi. Bu mırıldanması geride bir bulmaca bıraktı:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "public void loadProperties()\n{\n  try\n  {\n    String propertiesPath = propertiesLocation + \"/\" + PROPERTIES_FILE;\n    FileInputStream propertiesStream = new FileInputStream(propertiesPath);\n    loadedProperties.load(propertiesStream);\n  }\n  catch(IOException e)\n  {\n    // Properties dosyası yoksa tüm varsayılanlar yüklenir\n  }\n}",
      "caption": {
        "en": "Mumbling comment example",
        "tr": "Mırıldanan yorum örneği"
      }
    },
    {
      "type": "html",
      "html": "<div class=\"question-list\">\n<p><span class=\"tr-text\">Bu catch bloğundaki yorum ne anlama gelir? Yazar için bir anlam ifade etmiş\n                    olabilir; ancak o anlam bize yeterince aktarılmıyor. Aklımıza pek çok soru geliyor:</span>\n<span class=\"en-text\" style=\"display:none;\">What does that comment in the catch block mean? Clearly it\n                    meant something to the author, but the meaning does not come through all that well. Many questions\n                    arise:</span>\n</p>\n<ul>\n<li><span class=\"tr-text\">Tüm varsayılanları kim yüklüyor? <code class=\"inline\">loadProperties.load</code> çağrısından önce mi yüklendi?</span><span class=\"en-text\" style=\"display:none;\">Who loads all the defaults? Were they loaded before the\n                        call to loadProperties.load?</span></li>\n<li><span class=\"tr-text\">Yoksa <code class=\"inline\">loadProperties.load</code> istisnayı yakalayıp\n                        varsayılanları yükleyip ardından istisnayı mı iletdi?</span><span class=\"en-text\" style=\"display:none;\">Or did loadProperties.load catch the exception, load the defaults, and\n                        then pass the exception on for us to ignore?</span></li>\n<li><span class=\"tr-text\">Yazar boş catch bloğu bırakmaktan vicdan rahatlatmak için mi\n                        yazdı?</span><span class=\"en-text\" style=\"display:none;\">Was the author trying to comfort\n                        himself about the fact that he was leaving the catch block empty?</span></li>\n<li><span class=\"tr-text\">Ya da en ürkütücü ihtimal: varsayılanları yükleyecek kodu daha sonra yazmak\n                        için kendine hatırlatma mıydı bu?</span><span class=\"en-text\" style=\"display:none;\">Or was the\n                        author trying to tell himself to come back here later and write the code that would load the\n                        defaults?</span></li>\n</ul>\n</div>"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Our only recourse is to examine the code in other parts of the system to find out what's going on. Any comment that forces you to look in another module for the meaning of that comment has failed to communicate to you and is not worth the bits it consumes.",
          "tr": "Tek çözüm, ne olduğunu anlamak için sistemin diğer bölümlerindeki kodu incelemektir. Sizi başka bir modüle bakmaya zorlayan her yorum, size iletişim kuramadığı için başarısız olmuştur ve harcadığı bitleri hak etmez.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Redundant Comments",
      "tr": "Gereksiz Yorum / Redundant Comments",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Listing 4-1 shows a simple function with a header comment that is completely redundant. The comment probably takes longer to read than the code itself.",
          "tr": "Listing 4-1, tamamen gereksiz bir başlık yorumuna sahip basit bir işlev gösteriyor. Yorum muhtemelen kodun kendisinden daha uzun süre okunuyor.",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "// this.closed true olduğunda dönen yardımcı metot.\n// Zaman aşımına ulaşılırsa istisna fırlatır.\npublic synchronized void waitForClose(final long timeoutMillis)\n  throws Exception\n{\n  if(!closed)\n  {\n    wait(timeoutMillis);\n    if(!closed)\n      throw new Exception(\"MockResponseSender could not be closed\");\n  }\n}",
      "caption": {
        "en": "Listing 4-1 — waitForClose",
        "tr": "Listing 4-1 — waitForClose"
      }
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "What purpose does this comment serve? It's certainly not more informative than the code. It does not justify the code, or provide intent or rationale. It is not easier to read than the code. Indeed, it is less precise than the code and entices the reader to accept that lack of precision in lieu of true understanding. It is rather like a gladhanding used-car salesman assuring you that you don't need to look under the hood.",
          "tr": "Bu yorumun ne işlevi var? Kesinlikle koddan daha bilgilendirici değil. Kodu ne meşrulaştırıyor ne de niyet ya da gerekçe sunuyor. Koddan daha kolay okunmuyor. Tam tersine, koddan daha az kesin ve okuyucuyu gerçek anlamayı bırakıp bu belirsizliği kabullenmesine davet ediyor. Sizi arabaya gülen, \"kaputun altına bakmanıza gerek yok\" diyen bir ikinci el araba satıcısına benziyor.",
          "html": true
        }
      ]
    }
  ],
  "concepts": [
    {
      "id": "mumbling",
      "title": {
        "en": "Mumbling Comment",
        "tr": "Mırıldanma Yorumu (Mumbling)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept\n                        Explanation</span></h4>\n<p><span class=\"tr-text\">Mırıldanma, yazarın kendine yönelik yazdığı, okuyana hiçbir şey aktarmayan,\n                        birden fazla soruya yol açan yorumdur. Yazar için anlamlıyken okuyucu için bulmacaya\n                        dönüşür.</span>\n<span class=\"en-text\" style=\"display:none;\">Mumbling is a comment written for the author,\n                        communicating nothing to the reader, leading to multiple questions. While meaningful to the\n                        author, it becomes a puzzle for the reader.</span>\n</p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad\n                        Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Mırıldanan yorum</span><span class=\"en-text\" style=\"display:none;\">BAD — Mumbling comment</span></span>\n<pre><span class=\"kw\">catch</span>(FileNotFoundException e) {\n    <span class=\"comment\">// config yoksa varsayılanlar kullanılır</span>\n    <span class=\"comment\">// (kim yükler? ne zaman? bilinmiyor)</span>\n}</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good\n                        Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — İşlem açık, yorum gereksiz</span><span class=\"en-text\" style=\"display:none;\">GOOD — Action clear, comment unnecessary</span></span>\n<pre><span class=\"kw\">catch</span>(FileNotFoundException e) {\n    config = ConfigFactory.loadDefaults();\n    logger.info(<span class=\"str\">\"Config bulunamadı, varsayılanlar yüklendi\"</span>);\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong>\n<span class=\"tr-text\">Yazdığınız yorumu bir meslektaşınıza okuyun. \"Peki kim bunu yapıyor?\" sorusu\n                        gelirse, yorum mırıldanmaya dönmüştür — kodu konuşturun.</span>\n<span class=\"en-text\" style=\"display:none;\">Read your comment to a colleague. If they say \"OK, but\n                        who does that?\", the comment has become a mumble — let the code speak.</span>\n</div>"
    },
    {
      "id": "redundant-comment",
      "title": {
        "en": "Redundant Comment",
        "tr": "Gereksiz Yorum (Redundant Comment)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept\n                        Explanation</span></h4>\n<p><span class=\"tr-text\">Gereksiz yorum, kodun yaptığını kelimesi kelimesine tekrar eden yorumdur.\n                        Okuyucuya hiçbir ek değer katmaz, aksine zihinsel yükü artırır. Bazen yorumu okumak koddan daha\n                        uzun sürer.</span>\n<span class=\"en-text\" style=\"display:none;\">A redundant comment repeats word for word what the code\n                        does. It adds no value to the reader, in fact it increases cognitive load. Sometimes reading the\n                        comment takes longer than reading the code.</span>\n</p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad\n                        Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Yorum kodu tekrar söylüyor</span><span class=\"en-text\" style=\"display:none;\">BAD — Comment repeats the code</span></span>\n<pre><span class=\"comment\">// Kullanıcı listesi boşsa boş liste döndür</span>\n<span class=\"kw\">if</span> (users.isEmpty()) <span class=\"kw\">return</span> Collections.emptyList();\n\n<span class=\"comment\">// kullanıcı sayısını döndür</span>\n<span class=\"kw\">return</span> users.size();</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good\n                        Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Yorum yok, kod zaten açık</span><span class=\"en-text\" style=\"display:none;\">GOOD — No comment, code already clear</span></span>\n<pre><span class=\"kw\">if</span> (users.isEmpty()) <span class=\"kw\">return</span> Collections.emptyList();\n<span class=\"kw\">return</span> users.size();</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong>\n<span class=\"tr-text\">Bir yorumu okuduktan sonra kendinize sorun: \"Yorumu okumadan önce kodu\n                        anlamıyor muyduk?\" Eğer kod zaten açıksa, yorum gereksizdir — silin.</span>\n<span class=\"en-text\" style=\"display:none;\">After reading a comment ask yourself: \"Didn't we already\n                        understand the code without reading the comment?\" If the code is already clear, the comment is\n                        redundant — delete it.</span>\n</div>"
    }
  ]
});
