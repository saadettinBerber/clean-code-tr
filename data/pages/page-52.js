window.PAGE({
  "id": "page-52",
  "page": 52,
  "pdf_page": 83,
  "chapter": {
    "num": 3,
    "en": "Functions",
    "tr": "Fonksiyonlar"
  },
  "section": {
    "en": "Kaynakça (Bibliography)",
    "tr": "Kaynakça (Bibliography)"
  },
  "title": {
    "en": "Bibliography",
    "tr": "Kaynakça"
  },
  "blocks": [
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
          "en": "The following sources are referenced throughout Chapter 3: Functions. These works are foundational references in the fields of clean code, structured programming, and software design.",
          "tr": "Aşağıdaki kaynaklar, Bölüm 3: Fonksiyonlar boyunca referans verilmiştir. Bu eserler temiz kod, yapılandırılmış programlama ve yazılım tasarımı alanında temel kaynaklardır.",
          "html": true
        }
      ]
    },
    {
      "type": "list",
      "ordered": false,
      "items": [
        {
          "en": "[KP78] Kernighan, B. W. & Plaugher, P. J. The Elements of Programming Style , 2nd ed. McGraw-Hill, 1978.",
          "tr": "[KP78] Kernighan, B. W. & Plaugher, P. J. The Elements of Programming Style , 2nd ed. McGraw-Hill, 1978.",
          "html": true
        },
        {
          "en": "[PPP] Martin, Robert C. Agile Software Development: Principles, Patterns, and Practices Prentice Hall, 2002.",
          "tr": "[PPP] Martin, Robert C. Agile Software Development: Principles, Patterns, and Practices Prentice Hall, 2002.",
          "html": true
        },
        {
          "en": "[GOF] Gamma, E., Helm, R., Johnson, R. & Vlissides, J. Design Patterns: Elements of Reusable Object-Oriented Software Addison-Wesley, 1996.",
          "tr": "[GOF] Gamma, E., Helm, R., Johnson, R. & Vlissides, J. Design Patterns: Elements of Reusable Object-Oriented Software Addison-Wesley, 1996.",
          "html": true
        },
        {
          "en": "[PRAG] Hunt, A. & Thomas, D. The Pragmatic Programmer: From Journeyman to Master Addison-Wesley, 2000.",
          "tr": "[PRAG] Hunt, A. & Thomas, D. The Pragmatic Programmer: From Journeyman to Master Addison-Wesley, 2000.",
          "html": true
        },
        {
          "en": "[SP72] Dijkstra, E. W., Dahl, O.-J. & Hoare, C. A. R. Structured Programming Academic Press, 1972.",
          "tr": "[SP72] Dijkstra, E. W., Dahl, O.-J. & Hoare, C. A. R. Structured Programming Academic Press, 1972.",
          "html": true
        },
        {
          "en": "[Knuth92] Knuth, Donald E. Literate Programming Center for the Study of Language and Information, Leland Stanford Junior University, 1992.",
          "tr": "[Knuth92] Knuth, Donald E. Literate Programming Center for the Study of Language and Information, Leland Stanford Junior University, 1992.",
          "html": true
        }
      ]
    },
    {
      "type": "html",
      "html": "<div class=\"chapter-end-note\">\n<h3>\n<span class=\"tr-text\">Bölüm 3: Fonksiyonlar — Son</span>\n<span class=\"en-text\" style=\"display:none;\">Chapter 3: Functions — End</span>\n</h3>\n<p>\n<span class=\"tr-text\">Bu bölümde fonksiyonların küçük tutulması, tek iş yapması, anlamlı isimler taşıması, az argüman alması ve yan etkilerden kaçınması gibi temel ilkeleri inceledik. Bir sonraki bölümde yorumlar (Comments) konusunu ele alacağız.</span>\n<span class=\"en-text\" style=\"display:none;\">In this chapter, we examined the fundamental principles of keeping functions small, doing one thing, having meaningful names, taking few arguments, and avoiding side effects. In the next chapter, we will cover Comments.</span>\n</p>\n</div>"
    }
  ],
  "concepts": [
    {
      "id": "bibliography-importance",
      "title": {
        "en": "Reading Bibliography",
        "tr": "Kaynak Okuma Alışkanlığı (Reading Bibliography)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Bir teknik kitabın kaynakçası, yazarın fikirlerinin kökenlerini gösterir. Bu kaynakları takip etmek, konuyu daha derinlemesine anlamanızı sağlar. Örneğin, Dijkstra'nın yapılandırılmış programlama üzerine çalışmaları [SP72] fonksiyonların neden küçük olması gerektiğinin matematiksel temelini oluşturur.</span><span class=\"en-text\" style=\"display:none;\">A technical book's bibliography shows the origins of the author's ideas. Following these references allows you to understand the subject more deeply. For example, Dijkstra's work on structured programming [SP72] provides the mathematical foundation for why functions should be small.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Yüzeysel öğrenme</span><span class=\"en-text\" style=\"display:none;\">BAD — Superficial learning</span></span>\n<pre><span class=\"comment\">// Bir blog yazısından \"fonksiyonlar kısa olmalı\"</span>\n<span class=\"comment\">// diye okudum, neden olduğunu bilmiyorum.</span>\n<span class=\"comment\">// Kural olarak uyguluyorum ama</span>\n<span class=\"comment\">// istisnalarını bilmiyorum.</span></pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Derinlemesine anlama</span><span class=\"en-text\" style=\"display:none;\">GOOD — Deep understanding</span></span>\n<pre><span class=\"comment\">// Dijkstra'nın yapılandırılmış programlama</span>\n<span class=\"comment\">// teoreminden biliyorum: her program</span>\n<span class=\"comment\">// sequence, selection ve iteration ile</span>\n<span class=\"comment\">// ifade edilebilir. Küçük fonksiyonlar</span>\n<span class=\"comment\">// bu yapıları doğrulanabilir kılar.</span>\n<span class=\"comment\">// → Bu yüzden tek giriş/tek çıkış kuralı</span>\n<span class=\"comment\">//   büyük fonksiyonlarda önemlidir.</span></pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Her okuduğunuz teknik kitabın kaynakçasından en az 1-2 kaynak daha okuyun. Bu \"derinlik zinciri\" sizi gerçek bir uzman yapar. Özellikle [GOF], [PPP] ve [PRAG] her yazılımcının kütüphanesinde olması gereken kitaplardır.</span><span class=\"en-text\" style=\"display:none;\">Read at least 1-2 more references from the bibliography of every technical book you read. This \"depth chain\" makes you a true expert. In particular, [GOF], [PPP], and [PRAG] are books that should be in every programmer's library.</span></div>"
    },
    {
      "id": "standing-on-shoulders",
      "title": {
        "en": "Standing on Shoulders of Giants",
        "tr": "Devlerin Omuzlarında (Standing on Shoulders)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">\"Devlerin omuzlarında durmak\" — temiz kod ilkeleri bir gecede icat edilmedi. Dijkstra (1972), Kernighan &amp; Plaugher (1978), Gang of Four (1996), Hunt &amp; Thomas (2000) gibi öncülerin onlarca yıllık deneyimi ve araştırması bu ilkelerin temelini oluşturur. Martin bu mirası sentezleyerek pratik kurallar haline getirmiştir.</span><span class=\"en-text\" style=\"display:none;\">\"Standing on the shoulders of giants\" — clean code principles were not invented overnight. Decades of experience and research by pioneers like Dijkstra (1972), Kernighan &amp; Plaugher (1978), the Gang of Four (1996), and Hunt &amp; Thomas (2000) form the foundation of these principles. Martin synthesized this heritage into practical rules.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Tekerleği yeniden icat etme</span><span class=\"en-text\" style=\"display:none;\">BAD — Reinventing the wheel</span></span>\n<pre><span class=\"comment\">// Kendi \"benzersiz\" mimari desenimi</span>\n<span class=\"comment\">// icat ediyorum. Kim bilir belki</span>\n<span class=\"comment\">// daha önce hiç kimse düşünmemiştir.</span>\n<span class=\"kw\">class</span> <span class=\"type\">SuperManager</span> {\n    <span class=\"method\">doEverything</span>() { <span class=\"comment\">/* 500 satır */</span> }\n}</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Kanıtlanmış desenleri kullanma</span><span class=\"en-text\" style=\"display:none;\">GOOD — Using proven patterns</span></span>\n<pre><span class=\"comment\">// GOF Strategy deseni kullanarak</span>\n<span class=\"comment\">// davranışı enjekte ediyorum.</span>\n<span class=\"kw\">class</span> <span class=\"type\">OrderProcessor</span> {\n    <span class=\"method\">constructor</span>(pricingStrategy) {\n        <span class=\"kw\">this</span>.pricing = pricingStrategy;\n    }\n\n    <span class=\"method\">process</span>(order) {\n        <span class=\"kw\">return</span> <span class=\"kw\">this</span>.pricing.<span class=\"method\">calculate</span>(order);\n    }\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Bir tasarım problemine çözüm ararken önce mevcut desenleri (GOF, PRAG) araştırın. Büyük olasılıkla probleminiz daha önce çözülmüştür. Kendi \"icat\"ınızdan önce kanıtlanmış çözümleri değerlendirin.</span><span class=\"en-text\" style=\"display:none;\">When seeking a solution to a design problem, first research existing patterns (GOF, PRAG). Your problem has most likely been solved before. Evaluate proven solutions before your own \"invention.\"</span></div>"
    }
  ]
});
