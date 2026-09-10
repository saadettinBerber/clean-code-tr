window.PAGE({
  "id": "page-68",
  "page": 68,
  "pdf_page": 99,
  "chapter": {
    "num": 4,
    "en": "Comments",
    "tr": "Yorumlar"
  },
  "section": {
    "en": "Listing 4-6 devamı (wc.java) ve Yorum Satırındaki Kod devamı",
    "tr": "Listing 4-6 devamı (wc.java) ve Yorum Satırındaki Kod devamı"
  },
  "title": {
    "en": "Commented-out Code",
    "tr": "Yorum Satırına Alınmış Kod"
  },
  "blocks": [
    {
      "type": "heading",
      "level": 1,
      "en": "Listing 4-6 (Continued) and Commented-Out Code Continued",
      "tr": "Listing 4-6 (Devam) ve Yorum Satırındaki Kod Devamı",
      "html": true
    },
    {
      "type": "html",
      "html": "<div class=\"code-listing\">\n<div class=\"code-listing-header\">Listing 4-6 (devam) — wc.java</div>\n<pre> <span class=\"kw\">while</span> ((line = in.readLine()) != <span class=\"kw\">null</span>) {\n                lineCount++;\n                charCount += line.length();\n                String words[] = line.split(<span class=\"str\">\"\\\\W\"</span>);\n                wordCount += words.length;\n                } <span class=\"comment\">//while</span>\n                System.out.println(<span class=\"str\">\"wordCount = \"</span> + wordCount);\n                System.out.println(<span class=\"str\">\"lineCount = \"</span> + lineCount);\n                System.out.println(<span class=\"str\">\"charCount = \"</span> + charCount);\n                } <span class=\"comment\">// try</span>\n<span class=\"kw\">catch</span> (IOException e) {\n                System.err.println(<span class=\"str\">\"Error:\"</span> + e.getMessage());\n                } <span class=\"comment\">//catch</span>\n                } <span class=\"comment\">//main</span>\n                }\n</pre\"></div>"
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Attributions and Bylines",
      "tr": "Atıf ve Yazarlık / Attributions and Bylines",
      "html": true
    },
    {
      "type": "html",
      "html": "<div class=\"code-listing\">\n<div class=\"code-listing-header\"><span class=\"tr-text\">Gereksiz atıf yorumu</span><span class=\"en-text\">Unnecessary attribution comment</span></div>\n<pre><span class=\"comment\">/* Rick tarafından eklendi */</span>\n</pre\"></div>"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Source code control systems are very good at remembering who added what, when. There is no need to pollute the code with little bylines. These comments tend to stay around for years, getting less accurate and relevant. The source code control system is a better place for this kind of information.",
          "tr": "Kaynak kod kontrol sistemleri kimin ne zaman ne eklediğini hatırlamakta son derece iyidir. Kodu bu tür küçük atıf yorumlarıyla kirletmeye gerek yoktur. Bu tür yorumlar yıllar içinde kalmaya devam eder; giderek daha az doğru ve alakalı hale gelirler. Kaynak kod kontrol sistemi bu tür bilgiler için çok daha iyi bir yerdir.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Commented-Out Code (Apache Commons Example Continued)",
      "tr": "Yorum Satırındaki Kod (Apache commons örneği devamı)",
      "html": true
    },
    {
      "type": "html",
      "html": "<div class=\"code-listing\">\n<div class=\"code-listing-header\"><span class=\"tr-text\">Apache commons'tan — iki satır neden yorum\n                    satırı?</span><span class=\"en-text\">From apache commons — why are two lines\n                    commented?</span></div>\n<pre><span class=\"kw\">this</span>.bytePos = writeBytes(pngIdBytes, 0);\n                <span class=\"comment\">//hdrPos = bytePos;</span>\n                writeHeader();\n                writeResolution();\n                <span class=\"comment\">//dataPos = bytePos;</span>\n<span class=\"kw\">if</span> (writeImageData()) {\n                writeEnd();\n                <span class=\"kw\">this</span>.pngBytes = resizeByteArray(<span class=\"kw\">this</span>.pngBytes, <span class=\"kw\">this</span>.maxPos);\n                }\n                <span class=\"kw\">else</span> {\n                <span class=\"kw\">this</span>.pngBytes = <span class=\"kw\">null</span>;\n                }\n                <span class=\"kw\">return this</span>.pngBytes;\n</pre\"></div>"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Why are those two lines of code commented? Are they important? Were they left as reminders for some imminent change? Or are they just cruft that someone commented-out years ago and has simply not bothered to clean up.",
          "tr": "Bu iki satır neden yorum satırına alınmış? Önemli midirler? Yakında gelecek bir değişiklik için hatırlatıcı olarak mı bırakıldılar? Yoksa yıllar önce biri tarafından yorum satırına alınan ve temizleme zahmetine katlanılmayan birer tortu mudurlar?",
          "html": true
        }
      ]
    },
    {
      "type": "html",
      "html": "<div class=\"page-note\">\n<strong><span class=\"tr-text\">Temel Kural:</span><span class=\"en-text\">Core\n                    Rule:</span></strong>\n<span class=\"tr-text\"> Altmışlı yıllarda, kaynak kodu kontrol sistemleri yokken kodu yorum satırına almak bu\n                kadar anlam taşıyordu. Ama uzun süredir iyi kaynak kodu kontrol sistemlerimiz var. O sistemler kodu\n                bizim için hatırlayacaklar. Artık kodu yorum satırına almamıza gerek yok. Kodu silin. Onu\n                kaybetmeyeceğiz. Söz.</span>\n<span class=\"en-text\"> There was a time, back in the sixties, when commenting-out code\n                might have been useful. But we've had good source code control systems for a very long time now. Those\n                systems will remember the code for us. We don't have to comment it out any more. Just delete the code.\n                We won't lose it. Promise.</span>\n</div>"
    }
  ],
  "concepts": []
});
