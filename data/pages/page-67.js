window.PAGE({
  "id": "page-67",
  "page": 67,
  "pdf_page": 98,
  "chapter": {
    "num": 4,
    "en": "Comments",
    "tr": "Yorumlar"
  },
  "section": {
    "en": "wc.java Listing Devamı, Atıf, Yorum Satırındaki Kod",
    "tr": "wc.java Listing Devamı, Atıf, Yorum Satırındaki Kod"
  },
  "title": {
    "en": "Konum İşaretçileri & Kapatma Parantezi",
    "tr": "Konum İşaretçileri & Kapatma Parantezi"
  },
  "blocks": [
    {
      "type": "heading",
      "level": 1,
      "en": "Listing 4-6 (Continued) — wc.java",
      "tr": "Listing 4-6 (Devam) — wc.java",
      "html": true
    },
    {
      "type": "code",
      "lang": "java",
      "code": "      System.out.println(\"wordCount = \" + wordCount);\n      System.out.println(\"lineCount = \" + lineCount);\n      System.out.println(\"charCount = \" + charCount);\n    } // try\n    catch (IOException e) {\n      System.err.println(\"Error:\" + e.getMessage());\n    } //catch\n  } //main\n}",
      "caption": {
        "en": "Listing 4-6 (devam) — wc.java",
        "tr": "Listing 4-6 (devam) — wc.java"
      }
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Attributions and Bylines",
      "tr": "Atıf ve Yazarlık / Attributions and Bylines",
      "html": true
    },
    {
      "type": "code",
      "lang": "java",
      "code": "/* Rick tarafından eklendi */",
      "caption": {
        "en": "Attribution comment — unnecessary",
        "tr": "Atıf yorumu — gereksiz"
      }
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Source code control systems are very good at remembering who added what, when. There is no need to pollute the code with little bylines. You might think that such comments would be useful in order to help others know who to talk to about the code. But the reality is that they tend to stay around for years and years, getting less and less accurate and relevant. Again, the source code control system is a better place for this kind of information.",
          "tr": "Kaynak kod kontrol sistemleri kimin ne zaman ne eklediğini hatırlamakta son derece iyidir. Kodu bu tür küçük atıf yorumlarıyla kirletmeye gerek yoktur. Bu tür yorumların, başkalarının kodla ilgili kime danışacağını bilmelerine yardımcı olmak açısından değerli olabileceğini düşünebilirsiniz. Ama gerçek şu ki yıllar içinde kalmaya devam ederler; giderek daha az doğru ve daha az alakalı hale gelirler. Kaynak kod kontrol sistemi bu tür bilgiler için çok daha iyi bir yerdir.",
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
      "type": "html",
      "html": "<div class=\"code-listing\">\n<div class=\"code-listing-header\"><span class=\"tr-text\">Yorum satırına alınmış kod</span><span class=\"en-text\" style=\"display:none;\">Commented-out code</span></div>\n<pre\">InputStreamResponse response = <span class=\"kw\">new</span> InputStreamResponse();\n                response.setBody(formatter.getResultStream(), formatter.getByteCount());\n                <span class=\"comment\">//</span>\n<span class=\"comment\">// InputStream resultsStream = formatter.getResultStream();</span>\n<span class=\"comment\">// StreamReader reader = new StreamReader(resultsStream);</span>\n<span class=\"comment\">// response.setContent(reader.read(formatter.getByteCount()));</span>\n</pre\"></div>"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Others who see that commented-out code won't have the courage to delete it. They'll think it is there for a reason and is too important to delete. So commented-out code gathers like dregs at the bottom of a bad bottle of wine.",
          "tr": "Bu yorum satırına alınmış kodu görenler onu silme cesaretini kendilerinde bulamayacaklar. Bunun bir nedeni olduğunu düşünecekler ve silinmesi için çok önemli olduğuna karar verecekler. Böylece yorum satırına alınmış kodlar, kötü bir şarabın dibindeki tortu gibi birikir.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Consider this from apache commons:",
          "tr": "Apache commons'tan şu koda bakın:",
          "html": true
        }
      ]
    },
    {
      "type": "html",
      "html": "<div class=\"code-listing\">\n<div class=\"code-listing-header\"><span class=\"tr-text\">Apache commons — yorum satırındaki kod</span><span class=\"en-text\" style=\"display:none;\">Apache commons — commented-out code</span></div>\n<pre\"><span class=\"kw\">this</span>.bytePos = writeBytes(pngIdBytes, 0);\n                <span class=\"comment\">//hdrPos = bytePos;</span>\n                writeHeader();\n                writeResolution();\n                <span class=\"comment\">//dataPos = bytePos;</span>\n<span class=\"kw\">if</span> (writeImageData()) {\n                writeEnd();\n                <span class=\"kw\">this</span>.pngBytes = resizeByteArray(<span class=\"kw\">this</span>.pngBytes, <span class=\"kw\">this</span>.maxPos);\n                }\n</pre\"></div>"
    },
    {
      "type": "html",
      "html": "<div class=\"highlight-box\">\n<strong><span class=\"tr-text\">Kural:</span><span class=\"en-text\" style=\"display:none;\">Rule:</span></strong>\n<span class=\"tr-text\"> Altmışlı yıllarda, kaynak kodu kontrol sistemleri yokken kodu yorum satırına almak bu\n                kadar anlam taşıyordu. Ama uzun süredir iyi kaynak kodu kontrol sistemlerimiz var. O sistemler kodu\n                bizim için hatırlayacaklar. Artık kodu yorum satırına almamıza gerek yok. Kodu silin. Onu\n                kaybetmeyeceğiz. Söz.</span>\n<span class=\"en-text\" style=\"display:none;\"> There was a time, back in the sixties, when commenting-out code\n                might have been useful. But we've had good source code control systems for a very long time now. Those\n                systems will remember the code for us. We don't have to comment it out any more. Just delete the code.\n                We won't lose it. Promise.</span>\n</div>"
    }
  ],
  "concepts": []
});
