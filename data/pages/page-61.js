window.PAGE({
  "id": "page-61",
  "page": 61,
  "pdf_page": 92,
  "chapter": {
    "num": 4,
    "en": "Comments",
    "tr": "Yorumlar"
  },
  "section": {
    "en": "Atıf ve Yazarlık, Yorum Satırındaki Kod",
    "tr": "Atıf ve Yazarlık, Yorum Satırındaki Kod"
  },
  "title": {
    "en": "Amplification & Javadoc",
    "tr": "Önem Belirtme & Javadoc"
  },
  "blocks": [
    {
      "type": "heading",
      "level": 1,
      "en": "Attributions and Bylines",
      "tr": "Atıf ve Yazarlık / Attributions and Bylines",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Source control systems are very good at remembering who added what, when. There is no need to pollute the code with little bylines such as:",
          "tr": "Kaynak koda şunun gibi şeyler eklenmesi yaygın bir uygulamadır:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "/* Rick tarafından eklendi */",
      "caption": {
        "en": "Byline comment — unnecessary",
        "tr": "Atıf yorumu — gereksiz"
      }
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Source control systems are very good at remembering who added what, when. There is no need to pollute the code with little bylines. You might think that such comments would be useful in order to help others know who to talk to about the code. But the reality is that they tend to stay around for years and years, getting less and less accurate, until they form a haze over the code. Again, source control is a better place for this kind of information.",
          "tr": "Kaynak kod kontrol sistemleri, kimin ne zaman ne eklediğini hatırlamakta son derece iyidir. Kodu böyle küçük atıf yorumlarıyla kirletmeye gerek yoktur. Bu tür yorumların zamanla eskidiğini ve yanlış bilgi içermeye başladığını düşünürseniz daha da anlamsızdırlar. Tekrar söyleyelim: kaynak kod kontrol sistemi daha iyi bir yer bunun için.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Commented-Out Code",
      "tr": "Yorum Satırındaki Kod / Commented-Out Code",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Few practices are as odious as commenting-out code. Don't do this!",
          "tr": "Kodu yorum satırına almak en kötü pratiklerden biridir. Bunu yapmayın!",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "InputStreamResponse response = new InputStreamResponse();\nresponse.setBody(formatter.getResultStream(), formatter.getByteCount());\n//  InputStream resultsStream = formatter.getResultStream();\n//  StreamReader reader = new StreamReader(resultsStream);\n//  response.setContent(reader.read(formatter.getByteCount()));",
      "caption": {
        "en": "Listing 4-4 (FitNesse'den)",
        "tr": "Listing 4-4 (FitNesse'den)"
      }
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Others who see that commented-out code won't have the courage to delete it. They'll think it is there for a reason and is too important to delete. So commented-out code gathers like dregs at the bottom of a bad bottle of wine.",
          "tr": "Bu yorum satırına alınmış kodu gören diğerleri onu silme cesaretini kendilerinde bulamayacaklar. Bunun bir nedeni olduğunu düşünecekler ve silinmesi için çok önemli olduğuna karar verecekler. Böylece yorum satırına alınmış kodlar, kötü bir şarabın dibindeki tortu gibi birikir.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Consider this from apache commons:",
          "tr": "Apache commons'tan şu örneğe bakın:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "this.bytePos = writeBytes(pngIdBytes, 0);\n//hdrPos = bytePos;\nwriteHeader();\nwriteResolution();\n//dataPos = bytePos;\nif (writeImageData()) {\n  writeEnd();\n  this.pngBytes = resizeByteArray(this.pngBytes, this.maxPos);\n}",
      "caption": {
        "en": "Commented-out code from apache commons",
        "tr": "Apache commons'tan yorum satırındaki kod"
      }
    },
    {
      "type": "html",
      "html": "<div class=\"highlight-box\">\n<span class=\"tr-text\">Altmışlı yıllarda, kaynak kodu kontrol sistemleri yokken kodu yorum satırına almak bu\n                kadar anlam taşıyordu. Ama uzun süredir iyi kaynak kodu kontrol sistemlerimiz var. O sistemler kodu\n                bizim için hatırlayacaklar. Artık kodu yorum satırına almamıza gerek yok. Kodu silin. Onu\n                kaybetmeyeceğiz. Söz.</span>\n<span class=\"en-text\" style=\"display:none;\">There was a time, back in the sixties, when commenting-out code\n                might have been useful. But we've had good source code control systems for a very long time now. Those\n                systems will remember the code for us. We don't have to comment it out any more. Just delete the code.\n                We won't lose it. Promise.</span>\n</div>"
    }
  ],
  "concepts": [
    {
      "id": "attributions",
      "title": {
        "en": "Attributions and Bylines",
        "tr": "Atıf ve Yazarlık (Attributions and Bylines)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept\n                        Explanation</span></h4>\n<p><span class=\"tr-text\">\"Bu kodu Ali yazdı\" gibi yorumlar gereksizdir çünkü kaynak kod kontrol\n                        sistemleri (Git, SVN) bunu çok daha eksiksiz bir biçimde kaydeder. Bu yorumlar zamanla eskir,\n                        yanlış bilgi içerir ve kodu kirletir.</span>\n<span class=\"en-text\" style=\"display:none;\">Comments like \"Ali wrote this code\" are unnecessary\n                        because source code control systems (Git, SVN) record this much more completely. These comments\n                        become outdated over time, contain incorrect information, and pollute the code.</span>\n</p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad\n                        Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Yazarlık koda gömülmüş</span><span class=\"en-text\" style=\"display:none;\">BAD — Authorship embedded in code</span></span>\n<pre><span class=\"comment\">// AuthService.java - Mehmet tarafından oluşturuldu - 15 Mart 2023\n// Son değişiklik: Ali - Token yenileme eklendi - 20 Nisan 2023</span>\n<span class=\"kw\">public class</span> AuthService { ... }</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good\n                        Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Git bu bilgiyi tutuyor</span><span class=\"en-text\" style=\"display:none;\">GOOD — Git keeps this information</span></span>\n<pre><span class=\"comment\">$ git log --oneline AuthService.java\na1b2c3d feat: add token refresh (Ali)\nd4e5f6g feat: create AuthService (Mehmet)</span></pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong>\n<span class=\"tr-text\">Bir kodla ilgili kimin ne zaman neyi değiştirdiğini merak ediyorsanız <code class=\"inline\">git blame</code> komutunu kullanın. Yorum yazmaktan çok daha güvenilir bir\n                        bilgi kaynağıdır.</span>\n<span class=\"en-text\" style=\"display:none;\">If you're curious about who changed what and when in a\n                        piece of code, use the <code>git blame</code> command. It's a far more reliable source of\n                        information than writing comments.</span>\n</div>"
    },
    {
      "id": "commented-out-code",
      "title": {
        "en": "Commented-Out Code",
        "tr": "Yorum Satırındaki Kod (Commented-Out Code)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept\n                        Explanation</span></h4>\n<p><span class=\"tr-text\">Kodu yorum satırına almak, onu \"güvenli bir yerde saklamak\" gibi görünebilir.\n                        Ama gerçekte başkalarının silemediği bir engele dönüşür — çünkü \"belki önemlidir\" diye\n                        düşünürler. Git tarihi bu kodu zaten saklıyor; dolayısıyla yorum satırına almak\n                        anlamsızdır.</span>\n<span class=\"en-text\" style=\"display:none;\">Commenting out code may seem like \"keeping it in a safe\n                        place.\" But in reality it becomes a barrier others can't delete — because they think \"maybe it's\n                        important.\" Git history already stores this code; therefore commenting it out is\n                        meaningless.</span>\n</p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad\n                        Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Yorum satırındaki ölü kod birikimi</span><span class=\"en-text\" style=\"display:none;\">BAD — Dead code accumulation in comments</span></span>\n<pre><span class=\"kw\">public</span> Order processOrder(Cart cart) {\n    <span class=\"comment\">// eskiden manuel doğrulama vardı:\n    // if (!isValidCart(cart)) throw new InvalidCartException();\n    // validateInventory(cart.items());</span>\n    <span class=\"kw\">return</span> orderService.create(cart);\n}</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good\n                        Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Temiz kod, Git tarih saklıyor</span><span class=\"en-text\" style=\"display:none;\">GOOD — Clean code, Git stores history</span></span>\n<pre><span class=\"kw\">public</span> Order processOrder(Cart cart) {\n    <span class=\"kw\">return</span> orderService.create(cart);\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong>\n<span class=\"tr-text\">Kodu yorum satırına almak yerine direkt silin. \"Ya geri gerekirse?\" endişeniz\n                        varsa: <code class=\"inline\">git revert</code> veya <code class=\"inline\">git checkout</code> ile\n                        her zaman geri alabilirsiniz. Git sizin güvenlik ağınızdır.</span>\n<span class=\"en-text\" style=\"display:none;\">Instead of commenting code out, delete it directly. If\n                        you're worried \"what if I need it back?\": you can always get it back with\n                        <code>git revert</code> or <code>git checkout</code>. Git is your safety net.</span>\n</div>"
    }
  ]
});
