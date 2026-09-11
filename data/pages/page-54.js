window.PAGE({
  "id": "page-54",
  "page": 54,
  "pdf_page": 85,
  "chapter": {
    "num": 4,
    "en": "Comments",
    "tr": "Yorumlar"
  },
  "section": {
    "en": "Introduction",
    "tr": "Giriş"
  },
  "title": {
    "en": "Not for Bad Code",
    "tr": "Kötü Kodun Telafisi Değildir"
  },
  "blocks": [
    {
      "type": "para",
      "sentences": [
        {
          "en": "The proper use of comments is to compensate for our failure to express ourself in code. Note that I used the word failure. I meant it. Comments are always failures. We must have them because we cannot always figure out how to express ourselves without them, but their use is not a cause for celebration.",
          "tr": "Yorumların doğru kullanımı, kendimizi kodla ifade etmedeki başarısızlığımızı telafi etmektir. \"Başarısızlık\" kelimesini bilinçli olarak kullandığıma dikkat edin. Gerçekten bunu kastediyorum. Yorumlar her zaman bir başarısızlıktır. Onlara ihtiyaç duyarız, çünkü kendimizi onlarsız nasıl ifade edeceğimizi her zaman bulamayız; ancak onların varlığı kutlanacak bir şey değildir.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "So when you find yourself in a position where you need to write a comment, think it through and see whether there isn't some way to turn the tables and express yourself in code. Every time you express yourself in code, you should pat yourself on the back. Every time you write a comment, you should grimace and feel the failure of your ability of expression.",
          "tr": "Öyleyse kendinizi yorum yazmak zorunda hissettiğinizde, duraksayın ve şunu düşünün: kendimi kodun içinde ifade etmenin bir yolu yok mu? Her seferinde kodu konuşturduğunuzda kendinizi tebrik edebilirsiniz. Her yorum yazdığınızda ise yüzünüzü ekşitip ifade yetersizliğinizi kabullenmek durumundasınız.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Why am I so down on comments? Because they lie. Not always, and not intentionally, but too often. The older a comment is, and the farther away it is from the code it describes, the more likely it is to be just plain wrong. The reason is simple. Programmers can't realistically maintain them.",
          "tr": "Peki neden yorumlara bu kadar karşıyım? Çünkü onlar yalan söyler. Her zaman değil, kasıtlı olarak da değil; ama çok sık yalan söylerler. Bir yorum ne kadar eskiyse ve açıkladığı koddan ne kadar uzaktaysa, yanlış olma ihtimali o kadar yüksektir. Sebep basittir: programcılar onları gerçekçi bir şekilde güncel tutamazlar.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Code changes and evolves. Chunks of it move from here to there. Those chunks bifurcate and reproduce and come together again to form chimeras. Unfortunately the comments don't always follow them—can't always follow them. And all too often the comments get separated from the code they describe and become orphaned blurbs of ever-decreasing accuracy. For example, look what has happened to this comment and the line it was intended to describe:",
          "tr": "Kod değişir ve evrim geçirir. Parçalar bir yerden başka bir yere taşınır. O parçalar ikiye bölünür, çoğalır ve tekrar bir araya gelerek melez yapılar oluşturur. Ne yazık ki yorumlar onlara her zaman eşlik etmez — her zaman edemez de. Çoğu zaman yorumlar, açıkladıkları koddan kopar ve doğruluğu giderek azalan, sahipsiz kalmış açıklamalar haline gelirler. Örneğin şu yoruma ve açıklaması amaçlanan satıra ne olduğuna bakın:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "  MockRequest request;\n  private final String HTTP_DATE_REGEXP =\n    \"[SMTWF][a-z]{2}\\\\,\\\\s[0-9]{2}\\\\s[JFMASOND][a-z]{2}\\\\s\"+\n    \"[0-9]{4}\\\\s[0-9]{2}\\\\:[0-9]{2}\\\\:[0-9]{2}\\\\sGMT\";\n  private Response response;\n  private FitNesseContext context;\n  private FileResponder responder;\n  private Locale saveLocale;\n  // Example: \"Tue, 02 Apr 2003 22:18:49 GMT\"",
      "caption": {
        "en": "Example of a Comment Drifting Away from the Code",
        "tr": "Yorum ile kodun birbirinden uzaklaşması örneği"
      }
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Other instance variables that were probably added later were interposed between the HTTP_DATE_REGEXP constant and its explanatory comment.",
          "tr": "Muhtemelen sonradan eklenen diğer örnek değişkenleri (instance variables), <code>HTTP_DATE_REGEXP</code> sabiti ile ona ait açıklayıcı yorumun arasına girmiştir.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "It is possible to make the point that programmers should be disciplined enough to keep the comments in a high state of repair, relevance, and accuracy. I agree, they should. But I would rather that energy go toward making the code so clear and expressive that it does not need the comments in the first place.",
          "tr": "Programcıların yorumları yüksek bir doğruluk ve alaka düzeyinde tutacak kadar disiplinli olması gerektiği söylenebilir. Buna katılıyorum — olmaları gerekir. Ama o enerjiyi yorumları güncel tutmak yerine, kodu baştan yoruma gerek duymayacak kadar açık ve ifade edici yazmaya harcamayı tercih ederim.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Inaccurate comments are far worse than no comments at all. They delude and mislead. They set expectations that will never be fulfilled. They lay down old rules that need not, or should not, be followed any longer.",
          "tr": "Hatalı yorumlar, hiç yorum olmamaktan çok daha kötüdür. Yanıltırlar ve aldatırlar. Hiçbir zaman karşılanmayacak beklentiler yaratırlar. Artık uyulması gerekmeyen, hatta uyulmaması gereken eski kuralları dayatırlar.",
          "html": true
        }
      ]
    },
    {
      "type": "html",
      "html": "<div class=\"highlight-box\">\n<p>\n<span class=\"tr-text\">Gerçek yalnızca tek bir yerde bulunabilir: <strong>kodun içinde</strong>. Yalnızca\n                    kod ne yaptığını gerçekten anlatır. Kod, gerçek anlamda doğru bilginin tek kaynağıdır. Bu yüzden,\n                    yorumlar zaman zaman zorunlu olsa da, onları en aza indirmek için önemli bir çaba\n                    harcamalıyız.</span>\n<span class=\"en-text\">Truth can only be found in one place: <strong>the\n                        code</strong>. Only the code can truly tell you what it does. It is the only source of truly\n                    accurate information. Therefore, though comments are sometimes necessary, we will expend significant\n                    energy to minimize them.</span>\n</p>\n</div>"
    }
  ],
  "concepts": [
    {
      "id": "comments-as-failure",
      "title": {
        "en": "Comments as Failure",
        "tr": "Yorumlar Bir Başarısızlıktır (Comments as Failure)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept\n                        Explanation</span></h4>\n<p><span class=\"tr-text\">Martin'e göre her yorum, programcının niyet ve mantığı kod aracılığıyla\n                        aktaramamasının bir itirafıdır. Bu bazen kaçınılmazdır, ama asla kutlanmamalıdır. \"Yorum\n                        ekledim, ne iyi!\" yerine \"Yoruma ihtiyaç duymamak için kodu nasıl düzeltebilirim?\" sorusu\n                        sorulmalıdır.</span>\n<span class=\"en-text\">According to Martin, every comment is an admission that\n                        the programmer could not express their intent and reasoning through code. This is sometimes\n                        unavoidable, but should never be celebrated. Instead of \"I added a comment, great!\" ask \"How can\n                        I fix the code so I don't need the comment?\"</span>\n</p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad\n                        Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Yorum kodu kurtarmaya çalışıyor</span><span class=\"en-text\">BAD — Comment trying to rescue code</span></span>\n<pre><span class=\"comment\">// d = geçen gün sayısı</span>\n<span class=\"kw\">int</span> d;\n\n<span class=\"comment\">// görev bitiş tarihinden bugüne kaç gün geçtiğini hesapla</span>\nd = (endDate - today) / 86400;</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good\n                        Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Kod kendini açıklıyor</span><span class=\"en-text\">GOOD — Code explains itself</span></span>\n<pre><span class=\"kw\">int</span> daysSinceTaskDeadline = (endDate - today) / SECONDS_PER_DAY;</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong>\n<span class=\"tr-text\">Bir yorum yazmak üzereyken şunu sorun: \"Bu yorumu bir değişken adı veya metot\n                        adıyla kodun içine gömebilir miyim?\" Çoğunlukla yanıt \"evet\"tir.</span>\n<span class=\"en-text\">Before writing a comment, ask: \"Can I embed this\n                        explanation into the code as a variable or method name?\" Most of the time, the answer is\n                        yes.</span>\n</div>"
    },
    {
      "id": "lying-comments",
      "title": {
        "en": "Lying Comments",
        "tr": "Yalan Söyleyen Yorumlar (Lying Comments)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept\n                        Explanation</span></h4>\n<p><span class=\"tr-text\">Yorumlar zamanla koddan kopar, güncel tutulmaz ve yanlış bilgi içermeye başlar.\n                        Kasıtlı olmasa da bu \"yalan söyleme\" durumu okuyucuyu yanıltır. Eski bir yorum, anlayan olmayan\n                        bir kodu anlatmak yerine tam tersi bir beklenti yaratabilir.</span>\n<span class=\"en-text\">Comments drift away from code over time, are not kept up\n                        to date, and begin to contain false information. Although unintentional, this \"lying\" misleads\n                        readers. An old comment can create the exact opposite expectation rather than clarifying unclear\n                        code.</span>\n</p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad\n                        Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Yorum artık doğru değil</span><span class=\"en-text\">BAD — Comment is no longer accurate</span></span>\n<pre><span class=\"comment\">// Kullanıcıyı e-posta ile bilgilendir ve kaydı sil</span>\n<span class=\"kw\">public void</span> deactivateUser(User user) {\n    <span class=\"comment\">// E-posta gönderimi kaldırıldı (artık webhook var)</span>\n    userRepository.delete(user); <span class=\"comment\">// ama yorum hâlâ e-posta diyor!</span>\n}</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good\n                        Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Yorum kaldırıldı, kod konuşuyor</span><span class=\"en-text\">GOOD — No comment, code speaks</span></span>\n<pre><span class=\"kw\">public void</span> deactivateUser(User user) {\n    webhookService.notifyDeactivation(user);\n    userRepository.delete(user);\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong>\n<span class=\"tr-text\">Kod incelemelerinde (code review) yorumları da gözden geçirin. Değişen kodla\n                        çelişen bir yorum görürseniz, önce yorumu silin — kodu düzeltmek ikinci adım.</span>\n<span class=\"en-text\">During code reviews, review comments too. If you see a\n                        comment that contradicts the changed code, delete the comment first — fixing the code is the\n                        second step.</span>\n</div>"
    },
    {
      "id": "truth-in-code",
      "title": {
        "en": "Truth in Code",
        "tr": "Gerçek Yalnızca Kodda (Truth in Code)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept\n                        Explanation</span></h4>\n<p><span class=\"tr-text\">Martin'in en güçlü tespitlerinden biri: sistemin o andaki gerçek davranışını\n                        yalnızca kaynak kodu yansıtır. Dokümanlar, yorumlar ve wiki sayfaları güncel olmayabilir. Ancak\n                        çalışan kod asla yalan söylemez — yaptığı şeyi yapar.</span>\n<span class=\"en-text\">One of Martin's most powerful observations: only the\n                        source code reflects the true current behavior of the system. Documentation, comments, and wiki\n                        pages may be outdated. But running code never lies — it does exactly what it does.</span>\n</p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad\n                        Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Dokümana güvenmek</span><span class=\"en-text\">BAD — Trusting documentation</span></span>\n<pre><span class=\"comment\">// Wiki: calculateTax() tüm ülkeleri destekler</span>\n<span class=\"comment\">// (ama gerçekte sadece TR ve US için yazılmış)</span>\n<span class=\"kw\">double</span> tax = calculateTax(order, <span class=\"str\">\"DE\"</span>); <span class=\"comment\">// sonuç yanlış!</span></pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good\n                        Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Kodu oku, kendini açıklasın</span><span class=\"en-text\">GOOD — Read the code, let it explain itself</span></span>\n<pre><span class=\"kw\">public double</span> calculateTax(Order order, String countryCode) {\n    <span class=\"kw\">if</span> (!SUPPORTED_COUNTRIES.contains(countryCode))\n        <span class=\"kw\">throw new</span> UnsupportedCountryException(countryCode);\n    <span class=\"comment\">// desteklenen ülkeler açıkça koda gömülü</span>\n    ...\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong>\n<span class=\"tr-text\">Bir davranışı anlamak istediğinizde her zaman önce kodu okuyun, sonra\n                        yorumları. Çelişki varsa koda inanın — o sistemi çalıştıran tek gerçektir.</span>\n<span class=\"en-text\">When you want to understand behavior, always read the\n                        code first, then the comments. If there is a conflict, believe the code — it is the only truth\n                        running the system.</span>\n</div>"
    }
  ]
});
