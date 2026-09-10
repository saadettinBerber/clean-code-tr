window.PAGE({
  "id": "page-57",
  "page": 57,
  "pdf_page": 88,
  "chapter": {
    "num": 4,
    "en": "Comments",
    "tr": "Yorumlar"
  },
  "section": {
    "en": "Sonuçlara Dair Uyarı, TODO, Önem Vurgulama, Herkese Açık API",
    "tr": "Sonuçlara Dair Uyarı, TODO, Önem Vurgulama, Herkese Açık API"
  },
  "title": {
    "en": "Explanation of Intent",
    "tr": "Niyetin Açıklanması"
  },
  "blocks": [
    {
      "type": "heading",
      "level": 1,
      "en": "Warning of Consequences",
      "tr": "Sonuçlara Dair Uyarı / Warning of Consequences",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Sometimes it is useful to warn other programmers about certain consequences. For example, here is a comment that explains why a particular test case is turned off:",
          "tr": "Bazen diğer programcıları belirli sonuçlar konusunda uyarmak faydalıdır. Örneğin şu yorum, belirli bir test durumunun neden devre dışı bırakıldığını açıklar:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "// Biraz zamanınız olmadıkça çalıştırmayın.\npublic void _testWithReallyBigFile()\n{\n  writeLinesToFile(10000000);\n  response.setBody(testFile);\n  response.readyToSend(this);\n  String responseString = output.toString();\n  assertSubString(\"Content-Length: 1000000000\", responseString);\n  assertTrue(bytesSent > 1000000000);\n}",
      "caption": {
        "en": "Disabled test — warning comment",
        "tr": "Devre dışı bırakılmış test — uyarı yorumu"
      }
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Nowadays, of course, we'd turn off the test case by using the @Ignore attribute with an appropriate explanatory string. @Ignore(\"Takes too long to run\"). But back in the days before JUnit 4, putting an underscore in front of the method name was a common convention. The comment, while flippant, makes the point pretty well.",
          "tr": "Bugün elbette <code>@Ignore</code> anotasyonunu uygun bir açıklama dizisiyle — <code>@Ignore(\"Çalışması çok uzun sürer\")</code> gibi — kullanarak test durumunu devre dışı bırakırdık. Ama JUnit 4 öncesi günlerde metot adının başına alt çizgi eklemek yaygın bir gelenekti. Yorum, biraz alaycı olsa da mesajı gayet iyi aktarıyor.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Here's another, more poignant example:",
          "tr": "İşte daha çarpıcı bir örnek:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "public static SimpleDateFormat makeStandardHttpDateFormat()\n{\n  //SimpleDateFormat thread-safe değildir,\n  //bu yüzden her örneği bağımsız oluşturmamız gerekir.\n  SimpleDateFormat df = new SimpleDateFormat(\"EEE, dd MMM  yyyy HH:mm:ss z\");\n  df.setTimeZone(TimeZone.getTimeZone(\"GMT\"));\n  return df;\n}",
      "caption": {
        "en": "Thread safety warning",
        "tr": "Thread güvenliği uyarısı"
      }
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "You might complain that there are better ways to solve this problem. I might agree with you. But the comment, as given here, is perfectly reasonable. It will prevent some overly eager programmer from using a static initializer in the name of efficiency.",
          "tr": "Bu problemi çözmenin daha iyi yolları olduğunu söyleyebilirsiniz. Belki haklısınız. Ama buradaki yorum son derece makuldür. Aşırı hevesli bir programcının verimliliği için statik bir başlatıcı kullanmasını önler.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "TODO Comments",
      "tr": "TODO Yorumları / TODO Comments",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "It is sometimes reasonable to leave \"To do\" notes in the form of //TODO comments. In the following case, the TODO comment explains why the function has a degenerate implementation and what that function's future should be.",
          "tr": "Zaman zaman <code>//TODO</code> biçiminde \"Yapılacaklar\" notları bırakmak makul olabilir. Aşağıdaki örnekte TODO yorumu, fonksiyonun neden çürük bir uygulamaya sahip olduğunu ve gelecekte ne olması gerektiğini açıklar:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "//TODO-MdM bunlara gerek yok\n// Ödeme modelini yaptığımızda bunun ortadan kalkmasını bekliyoruz\nprotected VersionInfo makeVersion() throws Exception\n{\n  return null;\n}",
      "caption": {
        "en": "TODO comment example",
        "tr": "TODO yorum örneği"
      }
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "TODOs are jobs that the programmer thinks should be done, but for some reason can't do at the moment. It might be a reminder to delete a deprecated feature or a plea for someone else to look at a problem. It might be a request for someone else to think of a better name or a reminder to make a change that is dependent on a planned event. Whatever else a TODO might be, it is not an excuse to leave bad code in the system.",
          "tr": "TODO'lar, programcının yapılması gerektiğini düşündüğü ama şu an yapamadığı işlerdir. Kullanımdan kaldırılmış bir özelliği silme hatırlatması, başkasının bir probleme bakmasını isteme talebi, birisinin daha iyi bir isim bulmasını isteme ricası ya da planlanan bir olaya bağlı olarak yapılacak değişiklik hatırlatıcısı olabilir. Ne olursa olsun, TODO sisteme kötü kod bırakmak için bir mazeret değildir.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Nowadays, most good IDEs provide special gestures and features to locate all the TODO comments, so it's not likely that they will get lost. Still, you don't want your code to be littered with TODOs. So scan through them regularly and eliminate the ones you can.",
          "tr": "Bugün çoğu iyi IDE, tüm TODO yorumlarını bulmak için özel hareketler ve özellikler sunar; bu yüzden kaybolma olasılıkları düşüktür. Yine de kodunuzun TODO ile dolu olmasını istemezsiniz. Bu yüzden düzenli aralıklarla TODO'ları tarayın ve kaldırabileceklerinizi temizleyin.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Amplification",
      "tr": "Önem Vurgulama / Amplification",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "A comment may be used to amplify the importance of something that may otherwise seem inconsequential.",
          "tr": "Bir yorum, başka türlü önemsiz görünebilecek bir şeyin önemini vurgulamak için kullanılabilir:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "String listItemContent = match.group(3).trim();\n// trim gerçekten önemli. Elemanın başındaki\n// boşlukları kaldırır; aksi halde öğe başka bir\n// liste olarak tanınabilir.\nnew ListItemWidget(this, listItemContent, this.level + 1);\nreturn buildList(text.substring(match.end()));",
      "caption": {
        "en": "Importance of trim() call amplified",
        "tr": "trim() çağrısının önemi vurgulanıyor"
      }
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Javadocs in Public APIs",
      "tr": "Herkese Açık API'lerde Javadoc / Javadocs in Public APIs",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "There is nothing quite so helpful and satisfying as a well-described public API. The javadocs for the standard Java library are a case in point. It would be difficult, at best, to write Java programs without them.",
          "tr": "İyi belgelenmiş herkese açık bir API kadar yararlı ve tatmin edici hiçbir şey yoktur. Standart Java kütüphanesinin javadoc'ları bunun en somut örneğidir. Onlarsız Java programları yazmak — en iyi ihtimalle — son derece güç olurdu.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "If you are writing a public API, then you should certainly write good javadocs for it. But keep in mind the rest of the advice in this chapter. Javadocs can be just as misleading, nonlocal, and dishonest as any other kind of comment.",
          "tr": "Herkese açık bir API yazıyorsanız, elbette bunun için iyi javadoc'lar yazmalısınız. Ancak bu bölümdeki tavsiyenin geri kalanını da aklınızda tutun. Javadoc'lar, diğer yorum türleri gibi yanıltıcı, yerel olmayan ve dürüst olmayan olabilir.",
          "html": true
        }
      ]
    }
  ],
  "concepts": [
    {
      "id": "warning-comment",
      "title": {
        "en": "Warning of Consequences",
        "tr": "Sonuç Uyarı Yorumu (Warning of Consequences)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept\n                        Explanation</span></h4>\n<p><span class=\"tr-text\">Bir kod bloğunun veya metodun beklenmedik yan etkileri varsa, diğer\n                        geliştiricileri uyarmak için yorum kullanılabilir. Bu, thread güvenliği sorunları veya uzun\n                        çalışma süreleri gibi durumlar için geçerlidir.</span>\n<span class=\"en-text\" style=\"display:none;\">If a code block or method has unexpected side effects,\n                        comments can be used to warn other developers. This applies to situations like thread safety\n                        issues or long execution times.</span>\n</p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad\n                        Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Gizli paylaşımlı durum, uyarı yok</span><span class=\"en-text\" style=\"display:none;\">BAD — Hidden shared state, no warning</span></span>\n<pre><span class=\"kw\">private static</span> DateFormat formatter = <span class=\"kw\">new</span> SimpleDateFormat(<span class=\"str\">\"yyyy-MM-dd\"</span>);\n\n<span class=\"kw\">public</span> String format(Date date) {\n    <span class=\"kw\">return</span> formatter.format(date); <span class=\"comment\">// race condition!</span>\n}</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good\n                        Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Uyarı yorumu veya thread-safe çözüm</span><span class=\"en-text\" style=\"display:none;\">GOOD — Warning comment or thread-safe\n                        solution</span></span>\n<pre><span class=\"comment\">// UYARI: SimpleDateFormat thread-safe değil.\n// Her thread kendi örneğini oluşturmalı.</span>\n<span class=\"kw\">public</span> String format(Date date) {\n    <span class=\"kw\">return new</span> SimpleDateFormat(<span class=\"str\">\"yyyy-MM-dd\"</span>).format(date);\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong>\n<span class=\"tr-text\">Uyarı yorumları yazdıktan sonra \"Bunu mimari düzeyde çözebilir miyim?\" diye\n                        sorun. Çoğu zaman thread-local, immutable nesne veya proper locking daha kalıcı çözümdür.</span>\n<span class=\"en-text\" style=\"display:none;\">After writing warning comments, ask \"Can I solve this at\n                        the architectural level?\" Often thread-local, immutable objects, or proper locking is a more\n                        permanent solution.</span>\n</div>"
    },
    {
      "id": "todo-comments",
      "title": {
        "en": "TODO Comments",
        "tr": "TODO Yorumları (TODO Comments)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept\n                        Explanation</span></h4>\n<p><span class=\"tr-text\">TODO yorumları, \"Şu an yapamıyorum ama yapılması gerekiyor\" anlamına gelir.\n                        Ancak bunlar kötü kodu meşrulaştırmaz ve birikmeye bırakılmamalıdır. Düzenli olarak\n                        temizlenmelidir.</span>\n<span class=\"en-text\" style=\"display:none;\">TODO comments mean \"I can't do this right now, but it\n                        needs to be done.\" However, they don't justify bad code and should not be left to accumulate.\n                        They should be cleaned up regularly.</span>\n</p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad\n                        Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — TODO birikmesi: kötü kod bahanesi</span><span class=\"en-text\" style=\"display:none;\">BAD — TODO pile-up: bad code excuse</span></span>\n<pre><span class=\"comment\">// TODO: hata yönetimi ekle</span>\n<span class=\"comment\">// TODO: null kontrolü yap</span>\n<span class=\"comment\">// TODO: bu metodu parçala</span>\n<span class=\"comment\">// TODO: performansı iyileştir</span>\n<span class=\"kw\">public</span> List&lt;Order&gt; processOrders(List&lt;Order&gt; orders) {\n    <span class=\"kw\">return</span> orders.stream().map(<span class=\"kw\">this</span>::process).collect(toList());\n}</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good\n                        Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Odaklı, gerekçeli tek TODO</span><span class=\"en-text\" style=\"display:none;\">GOOD — Focused, justified single TODO</span></span>\n<pre><span class=\"kw\">public</span> List&lt;Order&gt; processOrders(List&lt;Order&gt; orders) {\n    <span class=\"comment\">// TODO: #342 - paralel işleme eklenecek (yük testi sonrası)</span>\n    <span class=\"kw\">return</span> orders.stream().map(<span class=\"kw\">this</span>::process).collect(toList());\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong>\n<span class=\"tr-text\">Her TODO'ya bir issue/ticket numarası ekleyin. Böylece takip sisteminizde\n                        gerçekten kaydedilmiş olur ve \"asla\" yerine gerçekten \"sonra\" yapılır.</span>\n<span class=\"en-text\" style=\"display:none;\">Add an issue/ticket number to each TODO. This way it's\n                        actually recorded in your tracking system and \"later\" really means later instead of\n                        never.</span>\n</div>"
    },
    {
      "id": "amplification",
      "title": {
        "en": "Amplification",
        "tr": "Önem Vurgulama (Amplification)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept\n                        Explanation</span></h4>\n<p><span class=\"tr-text\">Bazen görünürde önemsiz görünen bir satır kritik bir rol oynar. Bu tür\n                        durumlarda, bir yorumla o satırın önemini vurgulamak meşrudur. Dikkat: bu gerçekten kritik\n                        olanlar için geçerlidir; her satırı önemli ilan eden bir yorum enflasyonu yaratmayın.</span>\n<span class=\"en-text\" style=\"display:none;\">Sometimes a seemingly trivial line plays a critical\n                        role. In such cases, it is legitimate to use a comment to amplify the importance of that line.\n                        Note: this applies to what is truly critical; don't create a comment inflation that declares\n                        every line important.</span>\n</p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad\n                        Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Kritik detay gözden kaçabilir</span><span class=\"en-text\" style=\"display:none;\">BAD — Critical detail can be missed</span></span>\n<pre>String csv = rawInput.trim();\nString[] fields = csv.split(<span class=\"str\">\",\"</span>);\nprocessFields(fields);</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good\n                        Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Önem vurgulandı</span><span class=\"en-text\" style=\"display:none;\">GOOD — Importance amplified</span></span>\n<pre><span class=\"comment\">// trim() kritik: baş/son boşluklar split(\",\")'e girseydi\n// boş field'lar oluşurdu ve parser çökerdi</span>\nString csv = rawInput.trim();\nString[] fields = csv.split(<span class=\"str\">\",\"</span>);\nprocessFields(fields);</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong>\n<span class=\"tr-text\">Önem vurgulayan yorumlar, aynı zamanda o satırı bir metoda veya iyi\n                        isimlendirilmiş bir değişkene çıkarmanız gerektiğinin sinyalini de verebilir.</span>\n<span class=\"en-text\" style=\"display:none;\">Amplification comments can also signal that you should\n                        extract that line into a method or a well-named variable.</span>\n</div>"
    }
  ]
});
