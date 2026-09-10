window.PAGE({
  "id": "page-51",
  "page": 51,
  "pdf_page": 82,
  "chapter": {
    "num": 3,
    "en": "Functions",
    "tr": "Fonksiyonlar"
  },
  "section": {
    "en": "SetupTeardownIncluder (son) & Kaynakça",
    "tr": "SetupTeardownIncluder (son) & Kaynakça"
  },
  "title": {
    "en": "SetupTeardownIncluder (son) & Kaynakça",
    "tr": "SetupTeardownIncluder (son) & Kaynakça"
  },
  "blocks": [
    {
      "type": "heading",
      "level": 1,
      "en": "SetupTeardownIncluder (end)",
      "tr": "SetupTeardownIncluder (son) / SetupTeardownIncluder (end)",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "The final part of the code contains helper methods for updating page content and finding pages through inheritance. Each method consists of a few lines and focuses on a single responsibility.",
          "tr": "Kodun son kısmında, sayfanın içeriğini güncelleme ve kalıtım yoluyla sayfa bulma gibi yardımcı metotlar bulunmaktadır. Her metot birkaç satırdan oluşur ve tek bir sorumluluğa odaklanır.",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "private void updatePageContent() throws Exception {\n    pageData.setContent(newPageContent.toString());\n}\n\nprivate void include(String pageName, String arg)\n        throws Exception {\n    WikiPage inheritedPage = findInheritedPage(pageName);\n    if (inheritedPage != null) {\n        String pagePathName =\n            getPathNameForPage(inheritedPage);\n        buildIncludeDirective(pagePathName, arg);\n    }\n}\n\nprivate WikiPage findInheritedPage(String pageName)\n        throws Exception {\n    return PageCrawlerImpl.getInheritedPage(\n        pageName, testPage);\n}\n\nprivate String getPathNameForPage(WikiPage page)\n        throws Exception {\n    WikiPagePath pagePath =\n        pageCrawler.getFullPath(page);\n    return PathParser.render(pagePath);\n}\n\nprivate void buildIncludeDirective(\n        String pagePathName, String arg) {\n    newPageContent\n        .append(\"\\n!include \")\n        .append(arg)\n        .append(\" .\")\n        .append(pagePathName)\n        .append(\"\\n\");\n}\n}",
      "caption": {
        "en": "Listing 3-7 (son) / SetupTeardownIncluder.java (son)",
        "tr": "Listing 3-7 (son) / SetupTeardownIncluder.java (son)"
      }
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "The <code>include</code> method is the class's most critical helper method. It takes a page name and an argument, finds the page through inheritance, and if it exists, builds an include directive. The <code>null</code> check here safely verifies whether the page exists.",
          "tr": "<code>include</code> metodu, sınıfın en kritik yardımcı metodudur. Bir sayfa adı ve argüman alır, kalıtım yoluyla sayfayı bulur ve eğer varsa bir dahil etme yönergesi (include directive) oluşturur. Buradaki <code>null</code> kontrolü, sayfanın mevcut olup olmadığını güvenli bir şekilde kontrol eder.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "The <code>buildIncludeDirective</code> method appends a FitNesse include directive to the new page content. The chained <code>append</code> calls are acceptable in this context because they all operate on the same <code>StringBuffer</code> object and serve a single purpose: building the directive string.",
          "tr": "<code>buildIncludeDirective</code> metodu, yeni sayfa içeriğine bir FitNesse dahil etme yönergesi ekler. Zincirleme <code>append</code> çağrıları bu bağlamda kabul edilebilir bir kullanımdır çünkü hepsi aynı <code>StringBuffer</code> nesnesi üzerinde çalışır ve tek bir amaca hizmet eder: yönerge dizgesini (directive string) oluşturmak.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Bibliography",
      "tr": "Kaynakça / Bibliography",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "The references cited in this chapter are listed below. The full bibliography continues on the next page.",
          "tr": "Bu bölümde referans verilen kaynaklar aşağıda listelenmiştir. Tam kaynakça sonraki sayfada devam etmektedir.",
          "html": true
        }
      ]
    }
  ],
  "concepts": [
    {
      "id": "delegation",
      "title": {
        "en": "Delegation",
        "tr": "Delege Etme (Delegation)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Delege etme (Delegation), bir nesnenin kendisi yerine işi başka bir nesneye ya da metoda yaptırması prensibidir. <code class=\"inline\">findInheritedPage</code> metodu, asıl sayfa arama işini <code class=\"inline\">PageCrawlerImpl</code> sınıfına delege eder. Bu sayede her katman kendi sorumluluğuna odaklanır.</span><span class=\"en-text\" style=\"display:none;\">Delegation is the principle of having an object pass work to another object or method instead of doing it itself. The <code class=\"inline\">findInheritedPage</code> method delegates the actual page search to <code class=\"inline\">PageCrawlerImpl</code>. This way each layer focuses on its own responsibility.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Her şeyi kendisi yapar</span><span class=\"en-text\" style=\"display:none;\">BAD — Does everything itself</span></span>\n<pre><span class=\"kw\">class</span> <span class=\"type\">OrderService</span> {\n    <span class=\"method\">placeOrder</span>(order) {\n        <span class=\"comment\">// Stok kontrolü burada</span>\n        <span class=\"kw\">const</span> stock = db.<span class=\"method\">query</span>(\n            <span class=\"str\">`SELECT qty FROM inventory\n             WHERE id = ${order.productId}`</span>);\n        <span class=\"kw\">if</span> (stock &lt; order.qty) <span class=\"kw\">throw</span> ...;\n        <span class=\"comment\">// Ödeme burada</span>\n        stripe.<span class=\"method\">charges</span>.<span class=\"method\">create</span>({...});\n        <span class=\"comment\">// Kargo burada</span>\n        ups.<span class=\"method\">createShipment</span>({...});\n    }\n}</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Sorumluluklar delege edilmiş</span><span class=\"en-text\" style=\"display:none;\">GOOD — Responsibilities delegated</span></span>\n<pre><span class=\"kw\">class</span> <span class=\"type\">OrderService</span> {\n    <span class=\"method\">constructor</span>(inventory, payment, shipping) {\n        <span class=\"kw\">this</span>.inventory = inventory;\n        <span class=\"kw\">this</span>.payment = payment;\n        <span class=\"kw\">this</span>.shipping = shipping;\n    }\n\n    <span class=\"method\">placeOrder</span>(order) {\n        <span class=\"kw\">this</span>.inventory.<span class=\"method\">reserve</span>(order);\n        <span class=\"kw\">this</span>.payment.<span class=\"method\">charge</span>(order);\n        <span class=\"kw\">this</span>.shipping.<span class=\"method\">dispatch</span>(order);\n    }\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Bir metot farklı bir alanın detaylarına dalıyorsa (veritabanı sorgusu, API çağrısı, dosya işlemi), bu işi o alandan sorumlu bir sınıfa delege edin. Metot yalnızca \"ne yapılacağını\" bilmeli, \"nasıl yapılacağını\" değil.</span><span class=\"en-text\" style=\"display:none;\">If a method dives into details of a different domain (database queries, API calls, file operations), delegate that work to a class responsible for that domain. The method should only know \"what\" to do, not \"how\" to do it.</span></div>"
    },
    {
      "id": "method-chaining",
      "title": {
        "en": "Method Chaining",
        "tr": "Metot Zincirleme (Method Chaining)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Metot Zincirleme (Method Chaining), birden fazla metot çağrısını ardışık olarak bağlama tekniğidir. <code class=\"inline\">StringBuffer.append()</code> zincirleri bu tekniğin güvenli kullanımına örnektir çünkü hepsi aynı nesne üzerinde çalışır. Ancak farklı nesneler arasındaki uzun zincirler (<code class=\"inline\">a.b().c().d()</code>) \"Tren Kazası\" (Train Wreck) olarak adlandırılır ve kaçınılması gereken bir kalıptır.</span><span class=\"en-text\" style=\"display:none;\">Method Chaining is the technique of linking multiple method calls sequentially. <code class=\"inline\">StringBuffer.append()</code> chains are an example of safe usage because they all operate on the same object. However, long chains across different objects (<code class=\"inline\">a.b().c().d()</code>) are called \"Train Wrecks\" and should be avoided.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Farklı nesneler arası zincir (Tren Kazası)</span><span class=\"en-text\" style=\"display:none;\">BAD — Cross-object chain (Train Wreck)</span></span>\n<pre><span class=\"comment\"># Demeter Yasasını ihlal eder</span>\ncity = employee.<span class=\"method\">getDepartment</span>()\n    .<span class=\"method\">getManager</span>()\n    .<span class=\"method\">getAddress</span>()\n    .<span class=\"method\">getCity</span>()</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Aynı nesne üzerinde zincir (Kabul edilebilir)</span><span class=\"en-text\" style=\"display:none;\">GOOD — Same-object chain (Acceptable)</span></span>\n<pre><span class=\"comment\"># StringBuilder zincirleri kabul edilebilir</span>\nquery = (<span class=\"type\">StringBuilder</span>()\n    .<span class=\"method\">append</span>(<span class=\"str\">\"SELECT * \"</span>)\n    .<span class=\"method\">append</span>(<span class=\"str\">\"FROM users \"</span>)\n    .<span class=\"method\">append</span>(<span class=\"str\">\"WHERE active = true\"</span>)\n    .<span class=\"method\">toString</span>())\n\n<span class=\"comment\"># Farklı nesneler arası: delege et</span>\ncity = employee.<span class=\"method\">getManagerCity</span>()</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Zincirleme yaparken bir kural uygulayın: zincirdeki her çağrı aynı nesneyi mi döndürüyor? Evetse (builder, buffer), sorun yok. Hayırsa (farklı nesnelere dalıyorsa), bu bir tren kazası — delege metotlarla çözün.</span><span class=\"en-text\" style=\"display:none;\">Apply a rule when chaining: does each call in the chain return the same object? If yes (builder, buffer), it's fine. If no (reaching into different objects), it's a train wreck — resolve it with delegation methods.</span></div>"
    }
  ]
});
