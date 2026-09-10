window.PAGE({
  "id": "page-62",
  "page": 62,
  "pdf_page": 93,
  "chapter": {
    "num": 4,
    "en": "Comments",
    "tr": "Yorumlar"
  },
  "section": {
    "en": "HTML Yorumu, Yerel Olmayan Bilgi, Çok Fazla Bilgi",
    "tr": "HTML Yorumu, Yerel Olmayan Bilgi, Çok Fazla Bilgi"
  },
  "title": {
    "en": "Bad Comments: Mumbling",
    "tr": "Kötü Yorumlar: Mırıldanma"
  },
  "blocks": [
    {
      "type": "heading",
      "level": 1,
      "en": "Listing 4-2 (Continued) — ContainerBase.java (Tomcat)",
      "tr": "Listing 4-2 (Devam) — ContainerBase.java (Tomcat)",
      "html": true
    },
    {
      "type": "code",
      "lang": "java",
      "code": "  /**\n   * Bu Container ile ilişkili Manager uygulaması.\n   */\n  protected Manager manager = null;\n\n  /**\n   * Bu Container ile ilişkili küme.\n   */\n  protected Cluster cluster = null;\n\n  /**\n   * Bu Container'ın insan tarafından okunabilir adı.\n   */\n  protected String name = null;\n\n  /**\n   * Bu Container'ın alt olduğu üst Container.\n   */\n  protected Container parent = null;\n\n  /**\n   * Bir Loader kurulduğunda yapılandırılacak üst sınıf yükleyici.\n   */\n  protected ClassLoader parentClassLoader = null;\n\n  /**\n   * Bu Container ile ilişkili Pipeline nesnesi.\n   */\n  protected Pipeline pipeline = new StandardPipeline(this);\n\n  /**\n   * Bu Container ile ilişkili Realm.\n   */\n  protected Realm realm = null;\n\n  /**\n   * Bu Container ile ilişkili resources DirContext nesnesi.\n   */\n  protected DirContext resources = null;",
      "caption": {
        "en": "Listing 4-2 (devam) — ContainerBase.java (Tomcat)",
        "tr": "Listing 4-2 (devam) — ContainerBase.java (Tomcat)"
      }
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
      "type": "code",
      "lang": "java",
      "code": "/**\n * FitNesse testlerini çalıştıran görev.\n * <p/>\n * <pre>\n * Kullanım:\n * &lt;taskdef name=&quot;execute-fitnesse-tests&quot;\n *     classname=&quot;fitnesse.ant.ExecuteFitnesseTestsTask&quot;\n *     classpathref=&quot;classpath&quot; /&gt;\n * VEYA\n * &lt;execute-fitnesse-tests\n *     suitepage=&quot;FitNesse.SuiteAcceptanceTests&quot;\n *     fitnesseport=&quot;8082&quot; /&gt;\n * </pre>\n */",
      "caption": {
        "en": "HTML comment — hard to read",
        "tr": "HTML yorumu — okunması güç"
      }
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
          "en": "If you must write a comment, then make sure it describes the code it appears near. Don't offer systemwide information in the context of a local comment. Consider, for example, the javadoc comment below. Aside from the fact that it is horribly redundant, it also offers information about the default port. And yet the function has absolutely no control over what that default is. The comment is not describing the function, but some other, far distant part of the system.",
          "tr": "Bir yorum yazacaksanız, yakınında bulunduğu kodu açıkladığından emin olun. Yerel bir yorumun içinde sistemin tamamına ait bilgi vermeyin. Örneğin aşağıdaki Javadoc yorumunu ele alalım. Yorumun aşırı gereksiz olması bir yana, varsayılan port hakkında da bilgi veriyor. Oysa fonksiyon bu varsayılan değer üzerinde hiçbir denetime sahip değil. Bu yorum fonksiyonu değil, sistemin çok uzaklarındaki başka bir parçayı anlatıyor:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "/**\n * fitnesse'in çalışacağı port. Varsayılan: <b>8082</b>.\n *\n * @param fitnessePort\n */\npublic void setFitnessePort(int fitnessePort)\n{\n  this.fitnessePort = fitnessePort;\n}",
      "caption": {
        "en": "Comment with nonlocal information",
        "tr": "Yerel olmayan bilgi içeren yorum"
      }
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Of course there is no guarantee that this comment will be changed when the code containing the default is changed. The nonlocal nature of the comment makes it both error-prone and hard to maintain.",
          "tr": "Bu yorum, varsayılan değeri içeren kod değiştiğinde yorumun da güncelleneceğini garanti etmiyor. Yorumun yerel olmayan bilgiye dayanması onu hem hatalı hem de bakımı güç kılıyor.",
          "html": true
        }
      ]
    }
  ],
  "concepts": [
    {
      "id": "html-comment",
      "title": {
        "en": "HTML Comment",
        "tr": "HTML Yorumu (HTML Comment)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept\n                        Explanation</span></h4>\n<p><span class=\"tr-text\">Kaynak kodu yorumlarına HTML etiketi gömmek, o yorumu IDE'de neredeyse okunamaz\n                        hale getirir. Javadoc gibi araçlar HTML çıktı üretiyorsa, HTML formatlama sorumluluğu araca\n                        aittir, programcıya değil.</span>\n<span class=\"en-text\" style=\"display:none;\">Embedding HTML tags in source code comments makes those\n                        comments nearly unreadable in the IDE. If tools like Javadoc generate HTML output, the\n                        responsibility for HTML formatting belongs to the tool, not the programmer.</span>\n</p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad\n                        Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — HTML etiketleri yorumda</span><span class=\"en-text\" style=\"display:none;\">BAD — HTML tags in comment</span></span>\n<pre><span class=\"comment\">/**\n * Kullanım:\n * &lt;pre&gt;\n * &amp;lt;task name=&amp;quot;myTask&amp;quot; /&amp;gt;\n * &lt;/pre&gt;\n */</span>\n<span class=\"kw\">public void</span> runTask() { ... }</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good\n                        Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Sade yorum, harici doküman referansı</span><span class=\"en-text\" style=\"display:none;\">GOOD — Plain comment, external doc reference</span></span>\n<pre><span class=\"comment\">/**\n * Görevi çalıştırır.\n * Kullanım detayları için: docs/tasks.md\n */</span>\n<span class=\"kw\">public void</span> runTask() { ... }</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong>\n<span class=\"tr-text\">Kullanım örnekleri ve uzun açıklamalar için harici dokümantasyon araçları\n                        (Docusaurus, MkDocs, Confluence) kullanın. Kaynak kodundaki yorumlar sade ve kısa\n                        olmalıdır.</span>\n<span class=\"en-text\" style=\"display:none;\">For usage examples and long explanations, use external\n                        documentation tools (Docusaurus, MkDocs, Confluence). Comments in source code should be plain\n                        and brief.</span>\n</div>"
    },
    {
      "id": "nonlocal-info",
      "title": {
        "en": "Nonlocal Information",
        "tr": "Yerel Olmayan Bilgi (Nonlocal Information)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept\n                        Explanation</span></h4>\n<p><span class=\"tr-text\">Bir yorum, sadece yakınındaki kodu açıklamalıdır. Başka bir sınıftaki bir\n                        sabitin değeri veya uzaktaki bir konfigürasyonun detayı gibi yerel olmayan bilgiler yorumda yer\n                        almamalıdır — çünkü bu bilgi değiştikçe yorum güncellenmez ve yanlış kalır.</span>\n<span class=\"en-text\" style=\"display:none;\">A comment should only explain the code near it. Nonlocal\n                        information such as the value of a constant in another class or details of a distant\n                        configuration should not be in comments — because as that information changes, the comment won't\n                        be updated and will remain wrong.</span>\n</p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad\n                        Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Uzak bir konfigürasyon bilgisi yorumda</span><span class=\"en-text\" style=\"display:none;\">BAD — Remote configuration info in comment</span></span>\n<pre><span class=\"comment\">// Varsayılan zaman aşımı 30 saniyedir (Config.TIMEOUT_SECONDS'da)</span>\n<span class=\"kw\">public void</span> setTimer(Timer t) {\n    <span class=\"kw\">this</span>.timer = t;\n}</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good\n                        Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Kod kendi varsayılanını içeriyor</span><span class=\"en-text\" style=\"display:none;\">GOOD — Code contains its own default</span></span>\n<pre\"><span class=\"kw\">public static final int</span> DEFAULT_TIMEOUT_SECONDS = 30;\n\n                    <span class=\"kw\">public void</span> setTimer(Timer t) {\n                    <span class=\"kw\">this</span>.timer = t;\n                    }\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong>\n<span class=\"tr-text\">Bir yorumda \"başka bir yerde tanımlanmış bir değer\" hakkında bilgi\n                            veriyorsanız, o değeri ya koda taşıyın ya da yorumu silin. Yorumun güncel kalmasını sağlamak\n                            pratik olarak olanaksızdır.</span>\n<span class=\"en-text\" style=\"display:none;\">If a comment provides information about \"a value\n                            defined elsewhere,\" either move that value into the code or delete the comment. Keeping such\n                            a comment up to date is practically impossible.</span>\n</div>\n</pre\">"
    }
  ]
});
