window.PAGE({
  "id": "page-55",
  "page": 55,
  "pdf_page": 86,
  "chapter": {
    "num": 4,
    "en": "Comments",
    "tr": "Yorumlar"
  },
  "section": {
    "en": "Yorumlar Kötü Kodu Telafi Etmez & İyi Yorumlar",
    "tr": "Yorumlar Kötü Kodu Telafi Etmez & İyi Yorumlar"
  },
  "title": {
    "en": "Explain Yourself in Code",
    "tr": "Kendinizi Kodla Açıklayın"
  },
  "blocks": [
    {
      "type": "heading",
      "level": 1,
      "en": "Comments Do Not Make Up for Bad Code",
      "tr": "Yorumlar Kötü Kodu Telafi Etmez / Comments Do Not Make Up for Bad Code",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "One of the more common motivations for writing comments is bad code. We write a module and we know it is confusing and disorganized. We know it's a mess. So we say to ourselves, \"Ooh, I'd better comment that!\" No! You'd better clean it!",
          "tr": "Yorum yazmak için en yaygın motivasyonlardan biri kötü koddur. Bir modül yazar ve onun kafa karıştırıcı ve düzensiz olduğunu biliriz. Bir karmaşa olduğunun farkındayızdır. Bunun üzerine kendi kendimize şunu söyleriz: \"Ah, buna bir yorum eklesem iyi olur!\" Hayır! Onu temizlesen daha iyi olur!",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Clear and expressive code with few comments is far superior to cluttered and complex code with lots of comments. Rather than spend your time writing the comments that explain the mess you've made, spend it cleaning that mess.",
          "tr": "Az yorumlu, net ve ifade gücü yüksek bir kod; çok yorumlu, karmaşık ve dağınık bir koddan çok daha üstündür. Yarattığın karmaşayı açıklamak için zaman harcamak yerine, o karmaşayı temizlemek için zaman harca.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Explain Yourself in Code",
      "tr": "Kendinizi Kodla Açıklayın / Explain Yourself in Code",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "There are certainly times when code makes a poor vehicle for explanation. Unfortunately, many programmers have taken this to mean that code is seldom, if ever, a good means for explanation. This is patently false. Which would you rather see? This:",
          "tr": "Elbette kodun açıklama için yetersiz kaldığı zamanlar olur. Ne yazık ki pek çok programcı bunu, kodun hiçbir zaman iyi bir açıklama aracı olmadığı anlamında yorumlamıştır. Bu açıkça yanlıştır. Hangisini görmek isterdiniz? Bunu mu:",
          "html": true
        }
      ]
    },
    {
      "type": "html",
      "html": "<div class=\"code-comparison\">\n<div class=\"code-block\">\n<div class=\"code-block-label bad\">\n<span class=\"tr-text\">❌ Yorumla ifade</span>\n<span class=\"en-text\" style=\"display:none;\">❌ Expressed with comment</span>\n</div>\n<pre><span class=\"comment\">// Çalışan tam zamanlı yardımlara\n// hak kazanıp kazanmadığını kontrol et</span>\n<span class=\"kw\">if</span> ((employee.flags &amp; HOURLY_FLAG)\n    &amp;&amp; (employee.age &gt; 65))</pre>\n</div>\n<div class=\"code-block\">\n<div class=\"code-block-label good\">\n<span class=\"tr-text\">✅ Kodla ifade</span>\n<span class=\"en-text\" style=\"display:none;\">✅ Expressed with code</span>\n</div>\n<pre><span class=\"kw\">if</span> (employee\n    .isEligibleForFullBenefits())</pre>\n</div>\n</div>"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "It takes only a few seconds of thought to explain most of your intent in code. In many cases it's simply a matter of creating a function that says the same thing as the comment you want to write.",
          "tr": "Niyetinizin büyük bölümünü kod aracılığıyla açıklamak yalnızca birkaç saniyelik düşünme gerektirir. Çoğu durumda yapılması gereken şey basitçe şudur: yazmak istediğiniz yorumla aynı şeyi söyleyen bir fonksiyon oluşturmak.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Good Comments",
      "tr": "İyi Yorumlar / Good Comments",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Some comments are necessary or beneficial. We'll look at a few that I consider worthy of the bits they consume. Keep in mind, however, that the only truly good comment is the comment you found a way not to write.",
          "tr": "Bazı yorumlar zorunlu ya da faydalıdır. Harcadıkları bit'leri hak ettiklerini düşündüğüm birkaçına bakacağız. Ancak şunu aklınızda tutun: gerçek anlamda iyi olan tek yorum, yazmamak için bir yol bulduğunuz yorumdur.",
          "html": true
        }
      ]
    },
    {
      "type": "html",
      "html": "<div class=\"subsection-title\">\n<span class=\"tr-text\">Yasal Yorumlar (Legal Comments)</span>\n<span class=\"en-text\" style=\"display:none;\">Legal Comments</span>\n</div>"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Sometimes our corporate coding standards force us to write certain comments for legal reasons. For example, copyright and authorship statements are necessary and reasonable things to put into a comment at the start of each source file.",
          "tr": "Zaman zaman kurumsal kodlama standartları, yasal nedenlerle belirli yorumlar yazmamızı zorunlu kılar. Örneğin, telif hakkı ve yazarlık bildirimleri her kaynak dosyasının başına eklenmesi gereken makul ve zorunlu şeylerdir.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Here, for example, is the standard comment header that we put at the beginning of every source file in FitNesse. I am happy to say that our IDE hides this comment from acting as clutter by automatically collapsing it.",
          "tr": "Örneğin FitNesse'de her kaynak dosyasının başına koyduğumuz standart yorum başlığı budur. IDE'mizin bu yorumu otomatik olarak daraltarak dağınıklık yaratmasını engellediğini söylemekten memnuniyet duyuyorum:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "// Copyright (C) 2003,2004,2005 by Object Mentor, Inc. All rights reserved.\n// Released under the terms of the GNU General Public License version 2 or later.",
      "caption": {
        "en": "Legal comment example",
        "tr": "Yasal yorum örneği"
      }
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Comments like this should not be contracts or legal tomes. Where possible, refer to a standard license or other external document rather than putting all the terms and conditions into the comment.",
          "tr": "Bu tür yorumlar birer sözleşme ya da hukuki metin olmamalıdır. Mümkün olduğunda, tüm şart ve koşulları yorumun içine yazmak yerine standart bir lisans veya başka bir harici belgeye referans verin.",
          "html": true
        }
      ]
    }
  ],
  "concepts": [
    {
      "id": "clean-instead-of-comment",
      "title": {
        "en": "Clean Instead of Comment",
        "tr": "Yorum Yerine Temizle"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept\n                        Explanation</span></h4>\n<p><span class=\"tr-text\">Kodu yorumla \"kurtarmaya\" çalışmak en sık yapılan hatalardan biridir. Yorum\n                        dağınık kodu temizlemez — sadece üzerine bir örtü çeker. Asıl çözüm temizlemektir.</span>\n<span class=\"en-text\" style=\"display:none;\">Trying to \"rescue\" code with a comment is one of the\n                        most common mistakes. A comment doesn't clean up messy code — it just puts a cover over it. The\n                        real solution is to clean it.</span>\n</p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad\n                        Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Yorumla kurtarılan karmaşa</span><span class=\"en-text\" style=\"display:none;\">BAD — Mess saved by comment</span></span>\n<pre><span class=\"comment\">// Kullanıcı rolü 1 (admin) veya 2 (editor) ise\n// ve durum 'aktif' ise panele erişim ver</span>\n<span class=\"kw\">if</span>((u.r==1||u.r==2)&amp;&amp;u.s.equals(<span class=\"str\">\"aktif\"</span>)) grantAccess();</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good\n                        Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Yorum kalktı, kod konuşuyor</span><span class=\"en-text\" style=\"display:none;\">GOOD — No comment, code speaks</span></span>\n<pre><span class=\"kw\">if</span> (user.hasEditorialAccess() &amp;&amp; user.isActive()) {\n    grantAccess();\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong>\n<span class=\"tr-text\">Bir yorum yazmak istediğinizde kendinize şunu sorun: \"Bu yorumun amacını bir\n                        metot ya da değişken adıyla ifade edebilir miyim?\" Evet ise — refactor edin, yorum\n                        yazmayın.</span>\n<span class=\"en-text\" style=\"display:none;\">When you want to write a comment, ask yourself: \"Can I\n                        express the purpose of this comment with a method or variable name?\" If yes — refactor, don't\n                        comment.</span>\n</div>"
    },
    {
      "id": "explain-in-code",
      "title": {
        "en": "Explain Yourself in Code",
        "tr": "Kendinizi Kodla Açıklayın (Explain Yourself in Code)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept\n                        Explanation</span></h4>\n<p><span class=\"tr-text\">Niyeti açıklamak için yorum satırı eklemek yerine, o niyeti doğrudan koda\n                        yansıtın. Bir koşulu açıklayan yorum, genellikle o koşulu sayan bir boolean metoduna\n                        dönüştürülebilir.</span>\n<span class=\"en-text\" style=\"display:none;\">Instead of adding a comment to explain intent, reflect\n                        that intent directly in the code. A comment explaining a condition can often be turned into a\n                        boolean method that expresses that condition.</span>\n</p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad\n                        Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Yorum açıklıyor</span><span class=\"en-text\" style=\"display:none;\">BAD — Comment explains</span></span>\n<pre><span class=\"comment\">// Sipariş ücretsiz kargo hakkına sahipse</span>\n<span class=\"kw\">if</span> (order.total &gt;= 150 &amp;&amp; order.isPremiumMember\n    &amp;&amp; !order.hasPhysicalItems()) {\n    addFreeShipping(order);\n}</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good\n                        Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Kod açıklıyor</span><span class=\"en-text\" style=\"display:none;\">GOOD — Code explains</span></span>\n<pre><span class=\"kw\">if</span> (order.isEligibleForFreeShipping()) {\n    addFreeShipping(order);\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong>\n<span class=\"tr-text\">\"Bu satırı anlamak için yoruma gerek var mı?\" sorusunu sık sık sorun. Cevap\n                        evetse, yorum eklemek yerine kodu daha açık hale getirin.</span>\n<span class=\"en-text\" style=\"display:none;\">Frequently ask \"Do I need a comment to understand this\n                        line?\" If yes, make the code clearer instead of adding a comment.</span>\n</div>"
    },
    {
      "id": "legal-comments",
      "title": {
        "en": "Legal Comments",
        "tr": "Yasal Yorumlar (Legal Comments)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept\n                        Explanation</span></h4>\n<p><span class=\"tr-text\">Telif hakkı ve lisans bildirimleri, yazılım projelerinde yasal zorunluluk\n                        nedeniyle eklenmesi gereken yorumlardır. Bu tür yorumlar \"iyi yorum\" kategorisine girer; ancak\n                        mümkün olduğunca kısa tutulmalı ve detaylar harici belgeye bırakılmalıdır.</span>\n<span class=\"en-text\" style=\"display:none;\">Copyright and license notices are comments that must be\n                        added to software projects due to legal requirements. These types of comments fall into the\n                        \"good comment\" category; however, they should be kept as short as possible and details should be\n                        left to an external document.</span>\n</p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad\n                        Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Tüm lisans metni yoruma gömülmüş</span><span class=\"en-text\" style=\"display:none;\">BAD — Full license text embedded in comment</span></span>\n<pre><span class=\"comment\">// BU YAZILIM ŞU KOŞULLAR ALTINDA... (50 satır devam eder)\n// 1. Yeniden dağıtım...\n// 2. İkili formda...\n// 3. Ne ABD hükümeti...\n// ...</span></pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good\n                        Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Kısa yorum, detay için referans</span><span class=\"en-text\" style=\"display:none;\">GOOD — Short comment, reference for details</span></span>\n<pre><span class=\"comment\">// Copyright (C) 2024 Acme Corp. All rights reserved.\n// Licensed under the MIT License. See LICENSE file for details.</span></pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong>\n<span class=\"tr-text\">Projenizdeki tüm yasal bildirimleri bir <code>LICENSE</code> dosyasında tutun\n                        ve kaynak dosyalarında sadece kısa bir referans satırı bırakın. Bu hem okunabilirliği artırır\n                        hem de güncellemeleri kolaylaştırır.</span>\n<span class=\"en-text\" style=\"display:none;\">Keep all legal notices in a LICENSE file in your project\n                        and leave only a short reference line in source files. This both improves readability and makes\n                        updates easier.</span>\n</div>"
    }
  ]
});
