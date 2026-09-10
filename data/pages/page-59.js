window.PAGE({
  "id": "page-59",
  "page": 59,
  "pdf_page": 90,
  "chapter": {
    "num": 4,
    "en": "Comments",
    "tr": "Yorumlar"
  },
  "section": {
    "en": "Gereksiz Javadoc, Yanıltıcı, Zorunlu, Günlük Yorumlar",
    "tr": "Gereksiz Javadoc, Yanıltıcı, Zorunlu, Günlük Yorumlar"
  },
  "title": {
    "en": "Warning of Consequences",
    "tr": "Sonuçlara Dair Uyarı"
  },
  "blocks": [
    {
      "type": "heading",
      "level": 1,
      "en": "Redundant Javadocs (Listing 4-2 Continued)",
      "tr": "Gereksiz Javadoc Yorumları (Listing 4-2 Devamı)",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Now consider the legion of useless and redundant javadocs in Listing 4-2 taken from Tomcat. These comments serve only to clutter and obscure the code. They serve no documentary purpose at all. To make matters worse, I only showed you the first few. There are many more in this module.",
          "tr": "Tomcat'ten alınan ve gereksiz Javadoc yorumlarla dolu Listing 4-2'ye bakalım. Bu yorumlar yalnızca kodu karıştırıp gizlemektedir. Hiçbir dokümantasyon amacına hizmet etmemektedir. Daha da kötüsü, yalnızca ilk birkaçını gösterdim — bu modülde çok daha fazlası var:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "public abstract class ContainerBase\n  implements Container, Lifecycle, Pipeline,\n  MBeanRegistration, Serializable {\n\n  /**\n   * Bu bileşen için işlemci gecikmesi.\n   */\n  protected int backgroundProcessorDelay = -1;\n\n  /**\n   * Bu bileşen için yaşam döngüsü olay desteği.\n   */\n  protected LifecycleSupport lifecycle =\n    new LifecycleSupport(this);\n\n  /**\n   * Bu Container için container olay dinleyicileri.\n   */\n  protected ArrayList listeners = new ArrayList();\n\n  /**\n   * Bu Container ile ilişkili Loader uygulaması.\n   */\n  protected Loader loader = null;\n\n  /**\n   * Bu Container ile ilişkili Log uygulaması.\n   */\n  protected Log logger = null;\n\n  /**\n   * İlişkili logger adı.\n   */\n  protected String logName = null;\n}",
      "caption": {
        "en": "Listing 4-2 — ContainerBase.java (Tomcat)",
        "tr": "Listing 4-2 — ContainerBase.java (Tomcat)"
      }
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Misleading Comments",
      "tr": "Yanıltıcı Yorum / Misleading Comments",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Sometimes, with best intentions, a programmer makes a statement in his comments that isn't precise enough to be accurate. Consider again the comment from Listing 4-1. The method does not return when this.closed becomes true. It returns if this.closed is true, and then waits for a thousand milliseconds, and then throws an exception if this.closed is still not true. This subtle bit of misinformation, couched in a comment that is harder to read than the code, could cause another programmer to blithely call this function in the expectation that it will return as soon as this.closed becomes true.",
          "tr": "Bazen iyi niyetle de olsa, bir programcı yeterince kesin olmayan yorumlar yazar. Yukarıdaki Listing 4-1'deki yorumu yeniden düşünün. Metot, <code>this.closed</code> değişkeni <code>true</code> olduğunda \"geri döner\" — bu doğру. Fakat belirtilen zaman aşımı süresi geçmeden <code>this.closed</code> true olmadığı durumda ne olur? Yorum sessizce geçiştiriyor. Bu küçük yanıltıcı bilgi, kendisine inanan bir programcının kodu o metodu çağırıp neden yavaş çalıştığını merak etmesine neden olabilir.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Mandated Comments",
      "tr": "Zorunlu Yorum / Mandated Comments",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "It is just plain silly to have a rule that says that every function must have a javadoc, or every variable must have a comment. Comments like this just clutter up the code, propagate lies, and lend to general confusion and disorganization. The following is an example of what can happen when a coding standard mandates that every function must have a javadoc:",
          "tr": "Her fonksiyonun bir Javadoc'a, her değişkenin bir yoruma sahip olmasını emreden kural tamamen saçmadır. Bu tür yorumlar kodu karmaşıklaştırır, yanlış anlaşılmalara zemin hazırlar ve genel bir düzensizliğe katkıda bulunur. Aşağıdaki Javadoc'u zorunlu kılan bir kuralın ürünü olmak dışında herhangi bir anlam ifade etmiyor:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "/**\n * @param title CD'nin başlığı\n * @param author CD'nin yaratıcısı\n * @param tracks CD'deki parça sayısı\n * @param durationInMinutes CD'nin dakika cinsinden süresi\n */\npublic void addCD(String title, String author,\n                  int tracks, int durationInMinutes) {\n  CD cd = new CD();\n  cd.title = title;\n  cd.author = author;\n  cd.tracks = tracks;\n  cd.duration = durationInMinutes;\n  cdList.add(cd);\n}",
      "caption": {
        "en": "Mandated meaningless Javadoc",
        "tr": "Zorunluluktan yazılan anlamsız Javadoc"
      }
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Journal Comments",
      "tr": "Günlük Yorumu / Journal Comments",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Sometimes people add a comment to the start of a module every time they edit it. These comments accumulate as a kind of journal, or log, of every change that has ever been made. I have seen some modules with dozens of pages of these run-on journal entries. The running log of changes used to be important when source code control systems didn't exist. Nowadays, however, these long journals are just more clutter to obfuscate the module. They should be completely removed.",
          "tr": "Bazen insanlar bir modülü her düzenlediklerinde başına değişiklik kaydı ekler. Bu davranış uzun yıllar geriye gider. Kaynak kodu kontrol sistemleri yokken bu bir ölçüde anlam taşıyordu. Ancak günümüzde bu günlük yorumları — uzun, karmaşık ve giderek büyüyen kayıtlar — kodu baştan kirletmektedir. Silinmelidirler.",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "* Değişiklikler (11-Oct-2001'den itibaren)\n* ----------------------------------------\n* 11-Oct-2001 : Sınıf yeniden düzenlendi ve com.jrefinery.date paketine taşındı (DG);\n* 05-Nov-2001 : getDescription() metodu eklendi (DG); getMonthNames() kaldırıldı (DG);\n* 12-Nov-2001 : IBD'nin talebi üzerine addDays() metoduna yorumlar eklendi (DG);\n*               stringToWeekdayCode() metodu düzeltildi (DG);\n* 05-Dec-2001 : Hatalar düzeltildi (DG);\n* 29-May-2002 : Ay sabitlerini bir arabirime taşıdım (DG);",
      "caption": {
        "en": "Journal comment example — should be deleted",
        "tr": "Silinmesi gereken günlük yorumu örneği"
      }
    }
  ],
  "concepts": [
    {
      "id": "misleading-comment",
      "title": {
        "en": "Misleading Comment",
        "tr": "Yanıltıcı Yorum (Misleading Comment)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept\n                        Explanation</span></h4>\n<p><span class=\"tr-text\">Yanıltıcı yorumlar iyi niyetle yazılabilir; ancak yeterince kesin değillerdir.\n                        Kodun gerçekte ne yaptığından farklı bir beklenti yaratırlar ve bu durum ince ve tehlikeli\n                        hatalara yol açar. Hiç yorum olmamaktan çok daha zararlıdırlar.</span>\n<span class=\"en-text\">Misleading comments can be written with good intent, but\n                        they are not precise enough. They create expectations that differ from what the code actually\n                        does, leading to subtle and dangerous bugs. They are far more harmful than having no comment at\n                        all.</span>\n</p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad\n                        Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Yorum tam doğru değil, yanıltıcı</span><span class=\"en-text\">BAD — Comment not quite accurate, misleading</span></span>\n<pre><span class=\"comment\">// items listesini sıralar ve döndürür</span>\n<span class=\"kw\">public</span> List&lt;Item&gt; getSortedItems() {\n    <span class=\"kw\">if</span> (items == <span class=\"kw\">null</span>) <span class=\"kw\">return null</span>; <span class=\"comment\">// yorum bunu söylemedi!</span>\n    Collections.sort(items);\n    <span class=\"kw\">return</span> items;\n}</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good\n                        Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Yorum yoksa kod doğrudan konuşuyor</span><span class=\"en-text\">GOOD — No comment, code speaks directly</span></span>\n<pre><span class=\"kw\">public</span> List&lt;Item&gt; getSortedItems() {\n    <span class=\"kw\">if</span> (items == <span class=\"kw\">null</span>) <span class=\"kw\">return</span> Collections.emptyList();\n    <span class=\"kw\">return</span> items.stream().sorted().collect(toList());\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong>\n<span class=\"tr-text\">Yorum yazmadan önce şunu sorun: \"Bu yorumun söylediği ile kodun yaptığı\n                        arasında hiçbir fark yok mu?\" En küçük belirsizlik bile yanıltıcı yoruma dönüşebilir.</span>\n<span class=\"en-text\">Before writing a comment, ask: \"Is there any discrepancy\n                        between what this comment says and what the code does?\" Even the smallest ambiguity can turn\n                        into a misleading comment.</span>\n</div>"
    },
    {
      "id": "mandated-comment",
      "title": {
        "en": "Mandated Comment",
        "tr": "Zorunlu Yorum (Mandated Comment)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept\n                        Explanation</span></h4>\n<p><span class=\"tr-text\">Kodlama standartlarının \"her fonksiyon Javadoc içermeli\" gibi katı kuralları,\n                        programcıları anlamsız yorumlar yazmaya zorlar. Bu yorumlar değer katmaz — sadece kod gürültüsü\n                        yaratır ve gerçek yorumları gizler.</span>\n<span class=\"en-text\">Coding standards with strict rules like \"every function\n                        must have a Javadoc\" force programmers to write meaningless comments. These comments add no\n                        value — they just create code noise and hide real comments.</span>\n</p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad\n                        Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Zoraki Javadoc, hiçbir şey eklemiyor</span><span class=\"en-text\">BAD — Forced Javadoc, adds nothing</span></span>\n<pre><span class=\"comment\">/**\n * @param name Kullanıcı adı\n * @param email Kullanıcı e-postası\n * @return Bir kullanıcı nesnesi döndürür\n */</span>\n<span class=\"kw\">public</span> User createUser(String name, String email) { ... }</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good\n                        Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Açık isim, yorum gereksiz</span><span class=\"en-text\">GOOD — Clear name, comment unnecessary</span></span>\n<pre><span class=\"kw\">public</span> User createUser(String name, String email) { ... }</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong>\n<span class=\"tr-text\">Ekip olarak \"her fonksiyon Javadoc içermeli\" kuralını \"herkese açık API\n                        metodları iyi belgelenmiş Javadoc içermeli\" kuralıyla değiştirin. İkincisi gerçekten değer\n                        yaratır.</span>\n<span class=\"en-text\">As a team, replace the \"every function must have\n                        Javadoc\" rule with \"public API methods must have well-documented Javadoc.\" The latter actually\n                        creates value.</span>\n</div>"
    },
    {
      "id": "journal-comment",
      "title": {
        "en": "Journal Comment",
        "tr": "Günlük Yorumu (Journal Comment)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept\n                        Explanation</span></h4>\n<p><span class=\"tr-text\">Dosyanın başına her değişiklikte eklenen tarihli kayıtlar, versiyon kontrol\n                        sistemlerinin olmadığı dönemde anlam taşırdı. Bugün Git gibi araçlar bu tarihi çok daha eksiksiz\n                        tutar. Bu yorumlar artık yalnızca kodu karıştırmaktadır — silinmelidirler.</span>\n<span class=\"en-text\">Dated entries added to the start of a file with each\n                        change made sense in the era before version control systems. Today tools like Git keep this\n                        history far more completely. These comments now only clutter code — they should be\n                        deleted.</span>\n</p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad\n                        Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Dosya başında değişiklik günlüğü</span><span class=\"en-text\">BAD — Change log at top of file</span></span>\n<pre><span class=\"comment\">// 12-Mar-2023: auth modülü eklendi (ali)\n// 15-Mar-2023: token süresi düzeltildi (ayse)\n// 20-Mar-2023: refresh token eklendi (ali)\n// 01-Apr-2023: rate limiting eklendi (mehmet)</span></pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good\n                        Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Git commit'leri tarihi tutar</span><span class=\"en-text\">GOOD — Git commits maintain history</span></span>\n<pre><span class=\"comment\">$ git log --oneline auth.service.ts\na1b2c3d feat: add rate limiting\nd4e5f6g feat: add refresh token support\n7h8i9j0 fix: correct token expiry\nk1l2m3n feat: add auth module</span></pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong>\n<span class=\"tr-text\">Ekibinizdeki günlük yorumları temizleyin ve anlamlı Git commit mesajları\n                        yazmayı bir kültür haline getirin. <code class=\"inline\">git blame</code> ve <code class=\"inline\">git log</code> zaten tüm tarihi saklıyor.</span>\n<span class=\"en-text\">Clean up journal comments in your team and make writing\n                        meaningful Git commit messages a culture. <code>git blame</code> and <code>git log</code>\n                        already store all the history.</span>\n</div>"
    }
  ]
});
