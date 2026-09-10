window.PAGE({
  "id": "page-70",
  "page": 70,
  "pdf_page": 101,
  "chapter": {
    "num": 4,
    "en": "Comments",
    "tr": "Yorumlar"
  },
  "section": {
    "en": "Yerel Olmayan Bilgi, Çok Fazla Bilgi, Bağlantısız Yorum, Fonksiyon Başlığı",
    "tr": "Yerel Olmayan Bilgi, Çok Fazla Bilgi, Bağlantısız Yorum, Fonksiyon Başlığı"
  },
  "title": {
    "en": "Çok Fazla Bilgi & Belirsiz Bağlantı",
    "tr": "Çok Fazla Bilgi & Belirsiz Bağlantı"
  },
  "blocks": [
    {
      "type": "heading",
      "level": 1,
      "en": "Nonlocal Information (Continued)",
      "tr": "Yerel Olmayan Bilgi — Devam / Nonlocal Information (Continued)",
      "html": true
    },
    {
      "type": "html",
      "html": "<div class=\"code-listing\">\n<div class=\"code-listing-header\"><span class=\"tr-text\">Yerel olmayan bilgi içeren Javadoc</span><span class=\"en-text\">Javadoc with nonlocal information</span></div>\n<pre\"><span class=\"comment\">/**\n                    * fitnesse'in çalışacağı port. Varsayılan &lt;b&gt;8082&lt;/b&gt;.\n                    *\n                    * @param fitnessePort\n                    */</span>\n<span class=\"kw\">public void</span> setFitnessePort(<span class=\"kw\">int</span> fitnessePort)\n                {\n                <span class=\"kw\">this</span>.fitnessePort = fitnessePort;\n                }\n</pre\"></div>"
    },
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
      "type": "html",
      "html": "<div class=\"code-listing\">\n<div class=\"code-listing-header\"><span class=\"tr-text\">Çok fazla bilgi içeren yorum (RFC metni)</span><span class=\"en-text\">Too much information (RFC text in comment)</span></div>\n<pre\"><span class=\"comment\">/*\n                    RFC 2045 - Multipurpose Internet Mail Extensions (MIME)\n                    Birinci Bölüm: İnternet Mesaj Gövdelerinin Biçimi\n                    Bölüm 6.8. Base64 İçerik-Transfer-Kodlama\n                    Kodlama işlemi, 24-bit giriş bit gruplarını 4 kodlanmış\n                    karakterden oluşan çıkış dizilerine dönüştürür. ...\n                    */</span>\n</pre\"></div>"
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
          "tr": "Bir yorum ile açıkladığı kod arasındaki bağlantı açık olmalıdır. Bir yorum yazma zahmetine katlanıyorsanız, en azından okuyucunun hem yoruma hem de koda bakıp yorumun ne hakkında olduğunu anlayabilmesini istersiniz. Örneğin apache commons'tan şu yoruma bakın:",
          "html": true
        }
      ]
    },
    {
      "type": "html",
      "html": "<div class=\"code-listing\">\n<div class=\"code-listing-header\"><span class=\"tr-text\">Bağlantısız yorum — filtre byte nedir?</span><span class=\"en-text\">Inobvious connection — what is a filter byte?</span></div>\n<pre\"> <span class=\"comment\">/*\n                    * tüm pikselleri (ve filtre byte'larını) tutabilecek kadar büyük\n                    * bir array'la başlayın ve başlık bilgisi için 200 byte fazladan\n                    */</span>\n<span class=\"kw\">this</span>.pngBytes = <span class=\"kw\">new byte</span>[(((<span class=\"kw\">this</span>.width + 1) * <span class=\"kw\">this</span>.height * 3) + 200)];\n</pre\"></div>"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "What is a filter byte? Does it relate to the +1? Or to the *3? Both? Is a pixel a byte? Why 200? The purpose of a comment is to explain code that does not explain itself. It is a pity when a comment needs its own explanation.",
          "tr": "Filtre byte nedir? <code>+1</code> ile mi ilgili? <code>*3</code> ile mi? İkisiyle birden mi? Bir piksel bir byte mıdır? Neden 200? Bir yorumun amacı kendini açıklamayan kodu açıklamaktır. Bir yorumun kendi açıklamasına ihtiyaç duyması ne yazık ki gayet üzücüdür.",
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
    }
  ],
  "concepts": []
});
