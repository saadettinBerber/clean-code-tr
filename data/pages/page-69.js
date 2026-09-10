window.PAGE({
  "id": "page-69",
  "page": 69,
  "pdf_page": 100,
  "chapter": {
    "num": 4,
    "en": "Comments",
    "tr": "Yorumlar"
  },
  "section": {
    "en": "HTML Yorumu, Yerel Olmayan Bilgi devamı",
    "tr": "HTML Yorumu, Yerel Olmayan Bilgi devamı"
  },
  "title": {
    "en": "HTML Javadoc & Yerel Olmayan Bilgi",
    "tr": "HTML Javadoc & Yerel Olmayan Bilgi"
  },
  "blocks": [
    {
      "type": "heading",
      "level": 1,
      "en": "Commented-Out Code — Apache Commons Continued",
      "tr": "Yorum Satırındaki Kod — Apache Commons Devamı",
      "html": true
    },
    {
      "type": "html",
      "html": "<div class=\"code-listing\">\n<div class=\"code-listing-header\"><span class=\"tr-text\">Apache commons — neden yorum satırı?</span><span class=\"en-text\">Apache commons — why commented?</span></div>\n<pre\"><span class=\"kw\">else</span> {\n                <span class=\"kw\">this</span>.pngBytes = <span class=\"kw\">null</span>;\n                }\n                <span class=\"kw\">return this</span>.pngBytes;\n</pre\"></div>"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Why are those two lines of code commented? Are they important? Were they left as reminders for some imminent change? Or are they just cruft that someone commented-out years ago and has simply not bothered to clean up. There was a time, back in the sixties, when commenting-out code might have been useful. But we've had good source code control systems for a very long time now. Those systems will remember the code for us. We don't have to comment it out any more. Just delete the code. We won't lose it. Promise.",
          "tr": "Bu iki satır neden yorum satırına alınmış? Önemli midirler? Yakında gelecek bir değişiklik için hatırlatıcı olarak mı bırakıldılar? Yoksa yıllar önce biri tarafından yorum satırına alınan ve temizleme zahmetine katlanılmayan birer tortu mudurlar? Altmışlı yıllarda kodu yorum satırına almak anlam taşıyordu, ama artık iyi kaynak kodu kontrol sistemlerimiz var. Kodu silmeniz yeterli. Onu kaybetmeyeceksiniz. Söz.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "HTML Comments",
      "tr": "HTML Yorumu / HTML Comments",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "HTML in source code comments is an abomination, as you can tell by reading the code below. It makes the comments hard to read in the one place where they should be easy to read—the editor/IDE. If comments are going to be extracted by some tool (like Javadoc) to appear in a Web page, then it should be the responsibility of that tool, and not the programmer, to adorn the comments with appropriate HTML.",
          "tr": "Kaynak kodu yorumlarında HTML bir iğrençliktir. Aşağıdaki kodu okuyunca göreceğiniz gibi, yorumların okunmasını en kolay olması gereken yerde — editörde/IDE'de — zorlaştırır. Yorumlar bir araç (Javadoc gibi) tarafından çıkarılıp bir web sayfasında gösterilecekse, uygun HTML etiketleriyle donatmak programcının değil, o aracın sorumluluğu olmalıdır:",
          "html": true
        }
      ]
    },
    {
      "type": "html",
      "html": "<div class=\"code-listing\">\n<div class=\"code-listing-header\"><span class=\"tr-text\">HTML etiketli Javadoc — okunması güç</span><span class=\"en-text\">Javadoc with HTML tags — hard to read</span></div>\n<pre\"><span class=\"comment\">/**\n                    * FitNesse testlerini çalıştıran görev.\n                    * Bu görev fitnesse testlerini çalıştırır ve sonuçları yayınlar.\n                    * &lt;p/&gt;\n                    * &lt;pre&gt;\n                    * Kullanım:\n                    * &amp;lt;taskdef name=&amp;quot;execute-fitnesse-tests&amp;quot;\n                    * classname=&amp;quot;fitnesse.ant.ExecuteFitnesseTestsTask&amp;quot;\n                    * classpathref=&amp;quot;classpath&amp;quot; /&amp;gt;\n                    * VEYA\n                    * &amp;lt;taskdef classpathref=&amp;quot;classpath&amp;quot;\n                    * resource=&amp;quot;tasks.properties&amp;quot; /&amp;gt;\n                    * &lt;p/&gt;\n                    * &amp;lt;execute-fitnesse-tests\n                    * suitepage=&amp;quot;FitNesse.SuiteAcceptanceTests&amp;quot;\n                    * fitnesseport=&amp;quot;8082&amp;quot;\n                    * resultsdir=&amp;quot;${results.dir}&amp;quot;\n                    * resultshtmlpage=&amp;quot;fit-results.html&amp;quot;\n                    * classpathref=&amp;quot;classpath&amp;quot; /&amp;gt;\n                    * &lt;/pre&gt;\n                    */</span>\n</pre\"></div>"
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Nonlocal Information",
      "tr": "Yerel Olmayan Bilgi / Nonlocal Information",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "If you must write a comment, then make sure it describes the code it appears near. Don't offer systemwide information in the context of a local comment. Consider, for example, the javadoc comment below. Aside from the fact that it is horribly redundant, it also offers information about the default port. And yet the function has absolutely no control over what that default is. The comment is not describing the function, but some other, far distant part of the system. Of course there is no guarantee that this comment will be changed when the code containing the default is changed.",
          "tr": "Bir yorum yazacaksanız, yakınında bulunduğu kodu açıkladığından emin olun. Yerel bir yorumun içinde sistemin tamamına ait bilgi vermeyin. Örneğin aşağıdaki Javadoc yorumunu ele alalım. Yorumun aşırı gereksiz olması bir yana, varsayılan port hakkında da bilgi veriyor. Oysa fonksiyon bu varsayılan değer üzerinde hiçbir denetime sahip değil. Bu yorum fonksiyonu değil, sistemin çok uzaklarındaki başka bir parçayı anlatıyor. Elbette bu yorum, varsayılanı içeren kod değiştiğinde yorumun da güncelleneceğini garanti etmiyor:",
          "html": true
        }
      ]
    }
  ],
  "concepts": []
});
