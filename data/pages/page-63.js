window.PAGE({
  "id": "page-63",
  "page": 63,
  "pdf_page": 94,
  "chapter": {
    "num": 4,
    "en": "Comments",
    "tr": "Yorumlar"
  },
  "section": {
    "en": "Çok Fazla Bilgi, Bağlantısız Yorum, Fonksiyon Başlığı, Yorum Satırındaki Kod devamı",
    "tr": "Çok Fazla Bilgi, Bağlantısız Yorum, Fonksiyon Başlığı, Yorum Satırındaki Kod devamı"
  },
  "title": {
    "en": "Redundant Comments",
    "tr": "Gereksiz Yorumlar"
  },
  "blocks": [
    {
      "type": "heading",
      "level": 1,
      "en": "Too Much Information",
      "tr": "Çok Fazla Bilgi / Too Much Information",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Don't put interesting historical discussions or irrelevant descriptions of details into your comments. The comment below was extracted from a module designed to test that a function could encode and decode base64. Other than the RFC number, someone reading this code has no need for the arcane information contained in the comment.",
          "tr": "İlginç tarihsel tartışmalar veya alakasız ayrıntılar yorumlarınıza eklemeyin. Aşağıdaki yorum, base64 kodlama ve kod çözme işlevini test etmek için tasarlanmış bir modülden alınmıştır. RFC numarası dışında bu kodu okuyan birinin yorumda yer alan anlaşılmaz bilgilere hiçbir ihtiyacı yoktur:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "/*\n  RFC 2045 - Multipurpose Internet Mail Extensions (MIME)\n  Part One: Format of Internet Message Bodies\n  section 6.8.  Base64 Content-Transfer-Encoding\n  The encoding process represents 24-bit groups of input bits as output\n  strings of 4 encoded characters. Proceeding from left to right, a\n  24-bit input group is formed by concatenating 3 8-bit input groups.\n  These 24 bits are then treated as 4 concatenated 6-bit groups, each\n  of which is translated into a single digit in the base64 alphabet.\n  When encoding a bit stream via the base64 encoding, the bit stream\n  must be presumed to be ordered with the most-significant-bit first.\n  ...\n*/",
      "caption": {
        "en": "Too much information in comment",
        "tr": "Çok fazla bilgi içeren yorum"
      }
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Inobvious Connection",
      "tr": "Bağlantısız Yorum / Inobvious Connection",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "The connection between a comment and the code it describes should be obvious. If you are going to the trouble to write a comment, then at least you'd like the reader to be able to look at the comment and the code and understand what the comment is talking about. Consider, for example, this comment drawn from apache commons:",
          "tr": "Bir yorum ile açıkladığı kod arasındaki bağlantı açık olmalıdır. Bir yorum yazma zahmetine katlanıyorsanız, en azından okuyucunun hem yoruma hem de koda bakıp yorumun ne hakkında olduğunu anlayabilmesini istersiniz. Apache commons'tan şu örneği ele alalım:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "         /*\n          * tüm pikselleri (ve filtre byte'larını) tutabilecek kadar büyük\n          * bir array'la başlayın ve başlık bilgisi için 200 byte fazladan ekleyin\n          */\n         this.pngBytes = new byte[(((this.width + 1) * this.height * 3) + 200)];",
      "caption": {
        "en": "Inobvious connection — what is a \"filter byte\"?",
        "tr": "Bağlantısız yorum — \"filtre byte\" nedir?"
      }
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "What is a filter byte? Does it relate to the +1? Or to the *3? Both? Is a pixel a byte? Why 200? The purpose of a comment is to explain code that does not explain itself. It is a pity when a comment needs its own explanation.",
          "tr": "Filtre byte nedir? <code>+1</code> ile mi ilgili? <code>*3</code> ile mi? İkisiyle birden mi? Bir piksel bir byte mıdır? Neden 200? Bir yorumun amacı, kendini açıklamayan kodu açıklamaktır. Bir yorumun kendi açıklamasına ihtiyaç duyması ne yazık ki gayet piyanktır.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Function Headers",
      "tr": "Fonksiyon Başlığı / Function Headers",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Short functions don't need much description. A well-chosen name for a small function that does one thing is usually better than a comment header.",
          "tr": "Kısa fonksiyonlar fazla açıklamaya ihtiyaç duymaz. Tek bir şey yapan küçük bir fonksiyon için iyi seçilmiş bir isim, genellikle bir yorum başlığından çok daha iyidir.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Javadocs in Nonpublic Code",
      "tr": "Herkese Açık Olmayan Kodlarda Javadoc / Javadocs in Nonpublic Code",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "As useful as javadocs are for public APIs, they are anathema to code that is not intended for public consumption. Generating javadoc pages for the classes and functions inside a system is not generally useful, and the extra formality of the javadoc comments amounts to little more than cruft and distraction.",
          "tr": "Javadoc'lar herkese açık API'lar için ne kadar yararlıysa, herkese sunulmayan kodlar için o kadar zararlıdır. Bir sistemdeki sınıflar ve fonksiyonlar için Javadoc sayfaları oluşturmak genellikle faydalı değildir; Javadoc yorumlarının eklediği ekstra biçimsellik ise çoğunlukla boş gürültüden ibaret kalır ve dikkati dağıtır.",
          "html": true
        }
      ]
    }
  ],
  "concepts": [
    {
      "id": "too-much-info",
      "title": {
        "en": "Too Much Information",
        "tr": "Çok Fazla Bilgi (Too Much Information)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept\n                        Explanation</span></h4>\n<p><span class=\"tr-text\">Yorumlar kısa ve amaca yönelik olmalıdır. Tarihsel arka plan, RFC veya standart\n                        detayları, matematiksel kanıtlar gibi bilgiler yoruma değil, ayrı bir dokümana aittir.</span>\n<span class=\"en-text\" style=\"display:none;\">Comments should be brief and purposeful. Historical\n                        background, RFC or standard details, mathematical proofs and similar information belong in\n                        separate documentation, not in comments.</span>\n</p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad\n                        Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Yorumda tam RFC metni</span><span class=\"en-text\" style=\"display:none;\">BAD — Full RFC text in comment</span></span>\n<pre><span class=\"comment\">// RFC 2045, Section 6.8: Base64 Content-Transfer-Encoding\n// The encoding process represents 24-bit groups...\n// (15 satır devam eder)</span>\n<span class=\"kw\">public</span> String encodeBase64(byte[] data) { ... }</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good\n                        Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Kısa yorum, referans dışarıda</span><span class=\"en-text\" style=\"display:none;\">GOOD — Short comment, reference external</span></span>\n<pre><span class=\"comment\">// Base64 kodlaması (RFC 2045 Section 6.8)</span>\n<span class=\"kw\">public</span> String encodeBase64(byte[] data) { ... }</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong>\n<span class=\"tr-text\">Bir yorumun iki satırdan uzun olması gerekiyorsa, önce bu bilgiyi kodda (iyi\n                        isimler, sabitler) veya harici dokümantasyonda ifade etmeye çalışın.</span>\n<span class=\"en-text\" style=\"display:none;\">If a comment needs to be more than two lines, first try\n                        to express this information in the code (good names, constants) or in external\n                        documentation.</span>\n</div>"
    },
    {
      "id": "inobvious-connection",
      "title": {
        "en": "Inobvious Connection",
        "tr": "Bağlantısız Yorum (Inobvious Connection)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept\n                        Explanation</span></h4>\n<p><span class=\"tr-text\">Bir yorum anlaşılması için ek açıklamaya ihtiyaç duyuyorsa, başarısız olmuş\n                        demektir. Okuyucu yorumu okuduktan sonra hâlâ \"filtre byte ne demek?\" diye soruyorsa, yorum\n                        değer katmaktan çok kafa karıştırıyor.</span>\n<span class=\"en-text\" style=\"display:none;\">If a comment requires additional explanation to be\n                        understood, it has failed. If after reading the comment the reader is still asking \"what does a\n                        filter byte mean?\", the comment is contributing confusion rather than value.</span>\n</p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad\n                        Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Kim anlar?</span><span class=\"en-text\" style=\"display:none;\">BAD — Who understands this?</span></span>\n<pre><span class=\"comment\">// 3 baytlık grupları 4 karakterlik sekizliğe dönüştürür</span>\n<span class=\"kw\">return</span> ((n &gt;&gt; 18) &amp; 0x3f) | (((n &gt;&gt; 12) &amp; 0x3f) &lt;&lt; 8)\n     | (((n &gt;&gt; 6) &amp; 0x3f) &lt;&lt; 16) | ((n &amp; 0x3f) &lt;&lt; 24);</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good\n                        Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — İsimlendirilmiş adımlar</span><span class=\"en-text\" style=\"display:none;\">GOOD — Named steps</span></span>\n<pre\"><span class=\"kw\">int</span> b0 = (n &gt;&gt; 18) &amp; 0x3f;\n                    <span class=\"kw\">int</span> b1 = (n &gt;&gt; 12) &amp; 0x3f;\n                    <span class=\"kw\">int</span> b2 = (n &gt;&gt; 6) &amp; 0x3f;\n                    <span class=\"kw\">int</span> b3 = n &amp; 0x3f;\n                    <span class=\"kw\">return</span> b0 | (b1 &lt;&lt; 8) | (b2 &lt;&lt; 16) | (b3 &lt;&lt; 24);\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong>\n<span class=\"tr-text\">Bir yorum okuyucunun kafasında soru işareti bırakıyorsa, o soruların\n                            cevabını koda taşıyın — yorum değil, adlandırma kullanın.</span>\n<span class=\"en-text\" style=\"display:none;\">If a comment leaves a question mark in the reader's\n                            mind, move the answer to those questions into the code — use naming, not comments.</span>\n</div>\n</pre\">"
    },
    {
      "id": "function-headers",
      "title": {
        "en": "Function Headers",
        "tr": "Fonksiyon Başlığı (Function Headers)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept\n                        Explanation</span></h4>\n<p><span class=\"tr-text\">Küçük ve tek amacı olan fonksiyonlar, yorum başlığına ihtiyaç duymaz.\n                        Fonksiyonun adı yeterince açıklayıcıysa yorum artık gereksizdir. İyi seçilmiş bir isim, her\n                        zaman yorumdan önce gelir.</span>\n<span class=\"en-text\" style=\"display:none;\">Small functions with a single purpose don't need a\n                        comment header. If the function name is sufficiently descriptive, the comment is already\n                        unnecessary. A well-chosen name always comes before comments.</span>\n</p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad\n                        Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Yorum gereksiz, fonksiyon adı yeterli</span><span class=\"en-text\" style=\"display:none;\">BAD — Comment unnecessary, function name is\n                        enough</span></span>\n<pre><span class=\"comment\">/**\n * Kullanıcıyı geçersiz kılar ve oturumu kapatır.\n */</span>\n<span class=\"kw\">public void</span> invalidateUserAndLogout(User user) { ... }</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good\n                        Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — İyi isimlendirilmiş, yorum yok</span><span class=\"en-text\" style=\"display:none;\">GOOD — Well named, no comment</span></span>\n<pre\"><span class=\"kw\">public void</span> invalidateUserAndLogout(User user) { ... }\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong>\n<span class=\"tr-text\">Bir fonksiyona Javadoc yazmak istediğinizde, önce şunu deneyin: fonksiyon\n                            adını ve parametrelerini o kadar açık yapın ki Javadoc gereksiz hale gelsin.</span>\n<span class=\"en-text\" style=\"display:none;\">When you want to write Javadoc for a function, first\n                            try this: make the function name and parameters so clear that the Javadoc becomes\n                            unnecessary.</span>\n</div>\n</pre\">"
    }
  ]
});
