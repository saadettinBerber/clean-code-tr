window.PAGE({
  "id": "page-65",
  "page": 65,
  "pdf_page": 96,
  "chapter": {
    "num": 4,
    "en": "Comments",
    "tr": "Yorumlar"
  },
  "section": {
    "en": "Gürültü Yorumu Devamı — Listing 4-4 ve Refactored 4-5",
    "tr": "Gürültü Yorumu Devamı — Listing 4-4 ve Refactored 4-5"
  },
  "title": {
    "en": "Journal & Noise",
    "tr": "Günlük & Gürültü Yorumları"
  },
  "blocks": [
    {
      "type": "heading",
      "level": 1,
      "en": "Noise Comments (Continued)",
      "tr": "Gürültü Yorumu — Devam / Noise Comments (Continued)",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "These comments are so noisy that we learn to ignore them. As we read through code, our eyes simply skip over them. Eventually the comments begin to lie as the code around them changes.",
          "tr": "Bu yorumlar o kadar gürültülüdür ki onları görmezden gelmeyi öğreniriz. Kodu okurken gözlerimiz onların üzerinden kayar. Sonunda yorumlar etraflarındaki kod değiştikçe yalan söylemeye başlarlar.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "The first comment in Listing 4-4 seems appropriate. It explains why the catch block is being ignored. But the second comment is pure noise. Apparently the programmer was just so frustrated with writing try/catch blocks in this function that he needed to vent. Rather than venting in a worthless and noisy comment, the programmer should have recognized that his frustration could be resolved by improving the structure of his code. He should have redirected his energy to extracting that last try/catch block into a separate function, as shown in Listing 4-5.",
          "tr": "Listing 4-4'teki ilk yorum uygun görünüyor — catch bloğunun neden görmezden gelindiğini açıklıyor. Ama ikinci yorum tamamen gürültüdür. Anlaşılan programcı bu fonksiyonda try/catch blokları yazmaktan o kadar bıkmış ki sinirini dökmek zorunda hissetmiş. Değersiz ve gürültülü bir yorumla sinirini dökmek yerine, bu sinirini kodunun yapısını iyileştirerek giderebileceğini fark etmeli ve son try/catch bloğunu Listing 4-5'te görüldüğü gibi ayrı bir fonksiyona çıkarmalıydı:",
          "html": true
        }
      ]
    },
    {
      "type": "html",
      "html": "<div class=\"code-pair\">\n<div class=\"code-listing\">\n<div class=\"code-listing-header\">\n<span>Listing 4-4 — startSending</span>\n<span class=\"listing-label-bad\">KÖTÜ</span>\n</div>\n<pre><span class=\"kw\">private void</span> startSending()\n{\n  <span class=\"kw\">try</span>\n  {\n    doSending();\n  }\n  <span class=\"kw\">catch</span>(SocketException e)\n  {\n    <span class=\"comment\">// normal. biri isteği iptal etti.</span>\n  }\n  <span class=\"kw\">catch</span>(Exception e)\n  {\n    <span class=\"kw\">try</span>\n    {\n      response.add(\n        ErrorResponder\n          .makeExceptionString(e));\n      response.closeAll();\n    }\n    <span class=\"kw\">catch</span>(Exception e1)\n    {\n      <span class=\"comment\">//Artık ne yapabiliriz ki!</span>\n    }\n  }\n}</pre>\n</div>\n<div class=\"code-listing\">\n<div class=\"code-listing-header\">\n<span>Listing 4-5 — startSending (refactored)</span>\n<span class=\"listing-label-good\">İYİ</span>\n</div>\n<pre><span class=\"kw\">private void</span> startSending()\n{\n  <span class=\"kw\">try</span>\n  {\n    doSending();\n  }\n  <span class=\"kw\">catch</span>(SocketException e)\n  {\n    <span class=\"comment\">// normal. biri isteği iptal etti.</span>\n  }\n  <span class=\"kw\">catch</span>(Exception e)\n  {\n    addExceptionAndCloseResponse(e);\n  }\n}\n\n<span class=\"kw\">private void</span> addExceptionAndCloseResponse(\n  Exception e)\n{\n  <span class=\"kw\">try</span>\n  {\n    response.add(\n      ErrorResponder\n        .makeExceptionString(e));\n    response.closeAll();\n  }\n  <span class=\"kw\">catch</span>(Exception e1)\n  {\n  }\n}</pre>\n</div>\n</div>"
    },
    {
      "type": "html",
      "html": "<div class=\"insight-box\">\n<strong><span class=\"tr-text\">Ders:</span><span class=\"en-text\" style=\"display:none;\">Lesson:</span></strong>\n<span class=\"tr-text\"> Gürültü yaratma dürtüsünü kodunuzu temizleme kararlılığıyla değiştirin. Sizi daha iyi\n                ve daha mutlu bir programcı yapacağını göreceksiniz.</span>\n<span class=\"en-text\" style=\"display:none;\"> Replace the temptation to create noise with the determination\n                to clean your code. You'll find it makes you a better and happier programmer.</span>\n</div>"
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Scary Noise",
      "tr": "Korkunç Gürültü / Scary Noise",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Javadocs can also be noisy. What purpose do the following Javadocs (from a well-known open-source library) serve? Answer: nothing. They are just redundant noisy comments written out of some misplaced desire to provide documentation. Read these comments again more carefully. Do you see the cut-paste error? If authors aren't paying attention when comments are written (or pasted), why should readers be expected to profit from them?",
          "tr": "Javadoc'lar da gürültülü olabilir. Tanınmış bir açık kaynak kütüphanesinden alınan aşağıdaki Javadoc'lar ne işe yarıyor? Yanıt: hiçbir şeye. Bunlar, belgeleme sağlama konusunda yanlış bir arzuyla yazılmış yalnızca gereksiz, gürültülü yorumlardır. Dikkatlice tekrar okuyun — yapıştırma-kesme hatasını görüyor musunuz? Yazarlar yorumları yazarken (veya yapıştırırken) dikkat etmiyorsa, okuyucuların neden bunlardan faydalanması beklensin ki?",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "/** İsim. */\nprivate String name;\n\n/** Sürüm. */\nprivate String version;\n\n/** licenceAdı. */\nprivate String licenceName;\n\n/** Sürüm. */  // ← HATA: \"info\" için \"Sürüm\" yazıyor!\nprivate String info;",
      "caption": {
        "en": "Scary noise — contains paste error",
        "tr": "Korkunç gürültü — yapıştırma hatası içeriyor"
      }
    }
  ],
  "concepts": [
    {
      "id": "scary-noise",
      "title": {
        "en": "Scary Noise",
        "tr": "Korkunç Gürültü (Scary Noise)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept\n                        Explanation</span></h4>\n<p><span class=\"tr-text\">Gürültülü yorumlar kopyala-yapıştır tekrarlama hatalarına zemin hazırlar. Bir\n                        programcı gerçek bilgi içermeyen Javadoc'ları kopyalayıp yapıştırdığında hatalı bilgi üretir. Bu\n                        durum \"korkunç gürültü\" olarak adlandırılır — aldatıcı görüntüsüyle yanlış güven verir.</span>\n<span class=\"en-text\" style=\"display:none;\">Noisy comments create a fertile ground for copy-paste\n                        repetition errors. When a programmer copies and pastes Javadocs containing no real information,\n                        they produce incorrect information. This situation is called \"scary noise\" — it gives false\n                        confidence with its deceptive appearance.</span>\n</p>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong>\n<span class=\"tr-text\">Bir ekip kuralı koyun: \"Yorum yazmadan önce, bu yorumun bir okuyucuya koda\n                        bakarak öğrenemeyeceği bir şey söyleyip söylemediğini kendinize sorun.\" Cevap hayırsa —\n                        yazmayin.</span>\n<span class=\"en-text\" style=\"display:none;\">Set a team rule: \"Before writing a comment, ask yourself\n                        whether this comment tells the reader something they couldn't learn by looking at the code.\" If\n                        the answer is no — don't write it.</span>\n</div>"
    },
    {
      "id": "noise-refactor",
      "title": {
        "en": "Refactoring Instead of Comments",
        "tr": "Yorum Yerine Refactoring"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept\n                        Explanation</span></h4>\n<p><span class=\"tr-text\">Bir yorum yazma ihtiyacı hissettiğinizde, önce \"Bu kodu yoruma gerek\n                        bırakmayacak şekilde yeniden yazabilir miyim?\" diye sorun. Çoğu zaman cevap evettir ve sonuç hem\n                        daha temiz hem de yorum yazmaya gerek bırakmayan kod olur.</span>\n<span class=\"en-text\" style=\"display:none;\">When you feel the need to write a comment, first ask\n                        \"Can I rewrite this code so that it doesn't need a comment?\" Often the answer is yes and the\n                        result is both cleaner code and no need to write a comment.</span>\n</p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad\n                        Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Yorum bir sinirlenmeyi gizliyor</span><span class=\"en-text\" style=\"display:none;\">BAD — Comment hides frustration</span></span>\n<pre\"><span class=\"kw\">catch</span>(Exception e1) {\n                    <span class=\"comment\">//Artık ne yapabiliriz ki!</span>\n                    }\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good\n                            Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Ayrı metot, anlamlı soyutlama</span><span class=\"en-text\" style=\"display:none;\">GOOD — Separate method, meaningful\n                            abstraction</span></span>\n<pre\"><span class=\"kw\">private void</span> addExceptionAndCloseResponse(Exception e) {\n                        <span class=\"kw\">try</span> {\n                        response.add(ErrorResponder.makeExceptionString(e));\n                        response.closeAll();\n                        } <span class=\"kw\">catch</span>(Exception ignored) {\n                        <span class=\"comment\">// Yanıt zaten kapatıldı; ek işlem yapılamaz</span>\n                        }\n                        }\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong>\n<span class=\"tr-text\">Bir yorum yazmak istediğinizde, bunun yerine şunlardan birini yapmayı\n                                deneyin: daha iyi bir isim seçin, kodunuzu küçük bir metoda çıkarın veya özel durumu\n                                kapsayan bir değişken adı kullanın.</span>\n<span class=\"en-text\" style=\"display:none;\">When you want to write a comment, instead try:\n                                choosing a better name, extracting your code into a small method, or using a variable\n                                name that captures the special case.</span>\n</div>\n</pre\"></pre\">"
    }
  ]
});
