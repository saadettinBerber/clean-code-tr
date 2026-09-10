window.PAGE({
  "id": "page-66",
  "page": 66,
  "pdf_page": 97,
  "chapter": {
    "num": 4,
    "en": "Comments",
    "tr": "Yorumlar"
  },
  "section": {
    "en": "Fonksiyon veya Değişken Kullanabilecekken Yorum Kullanma",
    "tr": "Fonksiyon veya Değişken Kullanabilecekken Yorum Kullanma"
  },
  "title": {
    "en": "Scary Noise & By-lines",
    "tr": "Korkunç Gürültü & İmzalar"
  },
  "blocks": [
    {
      "type": "heading",
      "level": 1,
      "en": "Don't Use a Comment When You Can Use a Function or a Variable",
      "tr": "Fonksiyon veya Değişken Kullanabilecekken Yorum Kullanma / Don't Use a Comment When You Can Use a Function or a Variable",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Consider the following stretch of code:",
          "tr": "Şu kod parçasını ele alalım:",
          "html": true
        }
      ]
    },
    {
      "type": "html",
      "html": "<div class=\"code-pair\">\n<div class=\"code-listing\">\n<div class=\"code-listing-header\">\n<span class=\"tr-text\">Yorum ile açıklama</span>\n<span class=\"listing-label-bad\">KÖTÜ</span>\n</div>\n<pre><span class=\"comment\">// global listenin &lt;mod&gt; modülü\n// içinde olduğumuz alt sisteme\n// bağımlı mı?</span>\n<span class=\"kw\">if</span> (smodule.getDependSubsystems()\n    .contains(subSysMod.getSubSystem()))</pre>\n</div>\n<div class=\"code-listing\">\n<div class=\"code-listing-header\">\n<span class=\"tr-text\">Değişkenlerle açıklama</span>\n<span class=\"listing-label-good\">İYİ</span>\n</div>\n<pre>ArrayList moduleDependees =\n  smodule.getDependSubsystems();\nString ourSubSystem =\n  subSysMod.getSubSystem();\n<span class=\"kw\">if</span> (moduleDependees\n    .contains(ourSubSystem))</pre>\n</div>\n</div>"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "The author of the original code may have written the comment first (unlikely) and then written the code to fulfill the comment. However, the author should then have refactored the code, as I did, so that the comment could be removed.",
          "tr": "Orijinal kodun yazarı muhtemelen önce yorumu yazmış (olası değil) ve ardından yorumu karşılamak için kodu yazmıştır. Ama yazar sonra kodu yeniden düzenlemeli ve yorumun kaldırılabilmesi için benim yaptığım gibi refactor etmeliydi.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Position Markers (Revisited)",
      "tr": "Konum İşaretçisi — Tekrar / Position Markers (Revisited)",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Sometimes programmers like to mark a particular position in a source file. For example:",
          "tr": "Bazen programcılar bir kaynak dosyada belirli bir konumu işaretlemek ister. Örneğin:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "// Actions //////////////////////////////////",
      "caption": {
        "en": "Position marker",
        "tr": "Konum işaretçisi"
      }
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "There are rare times when it makes sense to gather certain functions together beneath a banner like this. But in general they are clutter that should be eliminated—especially the noisy train of slashes at the end. Think of it this way: A banner is startling and obvious if you don't see banners very often. So use them very sparingly, and only when the benefit is significant. If you overuse banners, they'll fall into the background noise and be ignored.",
          "tr": "Belirli fonksiyonları bu tür bir banner altında gruplamak nadiren anlamlı olabilir. Ama genel olarak bunlar gereksiz gürültüdür ve kaldırılmalıdırlar — özellikle sonundaki gürültülü eğik çizgiler dizisi. Şöyle düşünün: Banner'ları sık görmüyorsanız onlar çarpıcı ve göze çarpar. Bu yüzden onları çok seyrek ve yalnızca faydası açıkça görülen yerlerde kullanın. Bannetr'ları fazla kullandığınızda arka plan gürültüsüne dönüşür ve görmezden gelinirler.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Closing Brace Comments — Listing 4-6",
      "tr": "Kapatma Parantezi Yorumları — Listing 4-6 / Closing Brace Comments — Listing 4-6",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Sometimes programmers will put special comments on closing braces, as in Listing 4-6. Although this might make sense for long functions with deeply nested structures, it serves only to clutter the kind of small and encapsulated functions that we prefer. So if you find yourself wanting to mark your closing braces, try to shorten your functions instead.",
          "tr": "Bazen programcılar kapanan parantezlerin yanına özel yorumlar ekler (Listing 4-6). Uzun ve derinlemesine iç içe geçmiş yapılar için anlam taşısa da, bizim tercih ettiğimiz küçük ve kapsüllenmiş fonksiyonları yalnızca karıştırır. Kapatma parantezlerini işaretleme ihtiyacı duyuyorsanız, fonksiyonlarınızı kısaltmayı deneyin:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "public class wc {\n  public static void main(String[] args) {\n    BufferedReader in = new BufferedReader(\n      new InputStreamReader(System.in));\n    String line;\n    int lineCount = 0;\n    int charCount = 0;\n    int wordCount = 0;\n    try {\n      while ((line = in.readLine()) != null) {\n        lineCount++;\n        charCount += line.length();\n        String words[] = line.split(\"\\\\W\");\n        wordCount += words.length;\n      } //while",
      "caption": {
        "en": "Listing 4-6 — wc.java (Bölüm 1) Java",
        "tr": "Listing 4-6 — wc.java (Bölüm 1) Java"
      }
    }
  ],
  "concepts": [
    {
      "id": "function-vs-comment",
      "title": {
        "en": "Use Function or Variable Instead of Comment",
        "tr": "Yorum Yerine Fonksiyon veya Değişken Kullan"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept\n                        Explanation</span></h4>\n<p><span class=\"tr-text\">Bir yorum yazmadan önce, iyi isimlendirilmiş bir değişken veya fonksiyon\n                        çıkarımıyla aynı anlatımı koda taşıyıp taşıyamayacağınızı sorun. Çoğu zaman yorum bir güçsüzlük\n                        isaretidir — kodun kendisi konuşamıyor demektir.</span>\n<span class=\"en-text\">Before writing a comment, ask yourself whether you could\n                        move the same expression into the code through a well-named variable or function extraction.\n                        Often a comment is a sign of weakness—the code itself can't speak.</span>\n</p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad\n                        Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Yorum gerekiyor</span><span class=\"en-text\">BAD — Comment needed</span></span>\n<pre><span class=\"comment\">// kullanıcı premium üye mi VE abonelik süresi dolmadı mı?</span>\n<span class=\"kw\">if</span> (user.tier == TIER_PREMIUM\n    &amp;&amp; user.subscriptionExpiry.isAfter(now()))</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good\n                        Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Yorum yok, kod zaten açık</span><span class=\"en-text\">GOOD — No comment, code is already clear</span></span>\n<pre><span class=\"kw\">boolean</span> isPremiumAndActive =\n                    user.tier == TIER_PREMIUM\n                    &amp;&amp; user.subscriptionExpiry.isAfter(now());\n                    <span class=\"kw\">if</span> (isPremiumAndActive)\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong>\n<span class=\"tr-text\">Bu teknik \"anlamlı değişken\" veya \"açıklayıcı değişken\" yöntemi olarak da\n                            bilinir. Karmaşık bir boolean ifadeyi veya uzun bir method chain'i okunabilir bir ada\n                            taşır.</span>\n<span class=\"en-text\">This technique is also known as \"meaningful\n                            variable\" or \"explainer variable\" method. It moves a complex boolean expression or long\n                            method chain to a readable name.</span>\n</div>\n</pre\">"
    }
  ]
});
