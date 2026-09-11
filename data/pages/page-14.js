window.PAGE({
  "id": "page-14",
  "page": 14,
  "pdf_page": 45,
  "chapter": {
    "num": 1,
    "en": "Clean Code",
    "tr": "Temiz Kod"
  },
  "section": {
    "en": "We Are Authors / The Boy Scout Rule",
    "tr": "Biz Yazarlarız / İzci Kuralı"
  },
  "title": {
    "en": "Reading vs. Writing & The Boy Scout Rule",
    "tr": "Okuma vs Yazma & İzci Kuralı"
  },
  "blocks": [
    {
      "type": "para",
      "sentences": [
        {
          "en": "[ Continued from page 13 ]",
          "tr": "[ Sayfa 13'den devam ]",
          "html": true
        }
      ],
      "style": "continuation"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "*Ooops, he’s erasing what he typed!*",
          "tr": "<em>Hata, az önce yazdığını siliyor!</em>",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "*He types it again.*",
          "tr": "<em>Onu tekrar yazıyor.</em>",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "*He erases it again!*",
          "tr": "<em>Onu tekrar siliyor!</em>",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "*He types half of something else but then erases that!*",
          "tr": "<em>Başka bir şeyin yarısını yazıyor ama sonra onu da siliyor!</em>",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "*He scrolls down to another function that calls the function he’s changing to see how it is called.*",
          "tr": "<em>Değiştirdiği fonksiyonu çağıran başka bir fonksiyona, nasıl çağrıldığını görmek için aşağı kaydırıyor.</em>",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "*He scrolls back up and types the same code he just erased.*",
          "tr": "<em>Tekrar yukarı kaydırıyor ve az önce sildiği kodu tekrar yazıyor.</em>",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "*He pauses.*",
          "tr": "<em>Duraksıyor.</em>",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "*He erases that code again!*",
          "tr": "<em>O kodu tekrar siliyor!</em>",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "*He pops up another window and looks at a subclass. Is that function overridden?*",
          "tr": "<em>Başka bir pencere açıyor ve bir alt sınıfa bakıyor. Bu fonksiyon geçersiz kılındı mı (overridden)?</em>",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": ". . .",
          "tr": ". . .",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "You get the drift. Indeed, the ratio of time spent reading vs. writing is well over 10:1. We are constantly reading old code as part of the effort to write new code.",
          "tr": "Mesajı aldınız. Gerçekten de, okumaya harcanan zamanın yazmaya harcanan zamana oranı 10:1'in üzerindedir. Yeni kod yazma çabasının bir parçası olarak <em>sürekli</em> eski kodları okuyoruz.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Because this ratio is so high, we want the reading of code to be easy, even if it makes the writing harder. Of course there’s no way to write code without reading it, so making it easy to read actually makes it easier to write.",
          "tr": "Bu oran çok yüksek olduğu için, yazmayı zorlaştırsa bile kodun okunmasını kolaylaştırmak isteriz. Elbette kodu okumadan yazmanın bir yolu yoktur, bu nedenle <em>okunmasını kolaylaştırmak aslında yazılmasını da kolaylaştırır.</em>",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "There is no escape from this logic. You cannot write code if you cannot read the surrounding code. The code you are trying to write today will be hard or easy to write depending on how hard or easy the surrounding code is to read. So if you want to go fast, if you want to get done quickly, if you want your code to be easy to write, make it easy to read.",
          "tr": "Bu mantıktan kaçış yok. Etraftaki kodu okuyamıyorsanız kod yazamazsınız. Bugün yazmaya çalıştığınız kodun yazılmasının zor veya kolay olması, etraftaki kodun okunmasının ne kadar zor veya kolay olduğuna bağlıdır. Yani hızlı gitmek istiyorsanız, işinizi çabuk bitirmek istiyorsanız, kodunuzun yazılmasının kolay olmasını istiyorsanız, okunmasını kolaylaştırın.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "The Boy Scout Rule",
      "tr": "İzci Kuralı / The Boy Scout Rule",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "It’s not enough to write the code well. The code has to be kept clean over time. We’ve all seen code rot and degrade as time passes. So we must take an active role in preventing this degradation.",
          "tr": "Kodu iyi yazmak yeterli değildir. Kodun zaman içinde <em>temiz tutulması</em> gerekir. Hepimiz zaman geçtikçe kodun çürüdüğünü ve bozulduğunu gördük. Bu yüzden bu bozulmayı önlemede aktif bir rol almalıyız.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "The Boy Scouts of America have a simple rule that we can apply to our profession.",
          "tr": "Amerika İzci Birliği'nin (Boy Scouts of America) mesleğimize uygulayabileceğimiz basit bir kuralı vardır.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Leave the campground cleaner than you found it.",
          "tr": "Kamp alanını bulduğunuzdan daha temiz bırakın.",
          "html": true
        }
      ],
      "style": "quote"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "If we all checked-in our code a little cleaner than when we checked it out, the code simply could not rot. The cleanup doesn’t have to be something big. Change one variable name for the better, break up one function that’s a little too large, eliminate one small bit of duplication, clean up one composite if statement.",
          "tr": "Hepimiz kodumuzu teslim ederken (check-in), aldığımızdan (check-out) biraz daha temiz bıraksaydık, kod asla çürümezdi. Temizlik büyük bir şey olmak zorunda değildir. Bir değişken ismini daha iyi hale getirin, biraz fazla büyük olan bir fonksiyonu bölün, küçük bir tekrarı (duplication) ortadan kaldırın, karmaşık bir <code>if</code> ifadesini temizleyin.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Can you imagine working on a project where the code simply got better as time passed? Do you believe that any other option is professional? Indeed, isn’t continuous improvement an intrinsic part of professionalism?",
          "tr": "Zaman geçtikçe kodun <em>basitçe daha iyiye gittiği</em> bir proje üzerinde çalıştığınızı hayal edebiliyor musunuz? Başka bir seçeneğin profesyonel olduğuna inanıyor musunuz? Gerçekten de, sürekli iyileştirme (continuous improvement) profesyonelliğin ayrılmaz bir parçası değil mi?",
          "html": true
        }
      ]
    }
  ],
  "concepts": [
    {
      "id": "reading-ratio",
      "title": {
        "en": "10:1 Reading Ratio",
        "tr": "10:1 Okuma Oranı (10:1 Reading Ratio)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Yazılımcılar olarak vaktimizin büyük çoğunluğunu (oransal olarak 10'a 1) kod okuyarak geçiririz. Yeni bir kod eklemeden önce etrafındaki kodu anlamak zorundayız. Bu yüzden, kodun okunabilirliğini artırmak, aslında yazma hızımızı da artırır. Okunması zor kod, geliştirme sürecini yavaşlatır çünkü her değişiklik öncesi \"burada ne yapılmış?\" sorusuna harcanan zaman artar.</span><span class=\"en-text\">As developers, we spend the vast majority of our time (at a ratio of 10 to 1) reading code. Before adding new code, we must understand the code around it. Therefore, increasing the readability of code actually increases our writing speed. Hard-to-read code slows down the development process because the time spent on \"what was done here?\" before each change increases.</span></p>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">Kod yazarken harcadığınız ekstra 5 dakika (daha iyi bir isim bulmak, fonksiyonu bölmek), gelecekte o kodu okuyacak kişilere (ve size) saatler kazandırabilir. 10:1 kuralını unutmayın!</span><span class=\"en-text\">The extra 5 minutes you spend while writing code (finding a better name, splitting a function) can save hours for those who will read that code in the future (and you). Don't forget the 10:1 rule!</span></div>"
    },
    {
      "id": "boy-scout-rule",
      "title": {
        "en": "The Boy Scout Rule",
        "tr": "İzci Kuralı (The Boy Scout Rule)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">\"Kamp alanını bulduğundan daha temiz bırak.\" Bu basit kural, kod tabanının zamanla çürümesini (code rot) engellemenin en etkili yoludur. Her geliştirici, üzerinde çalıştığı dosyada küçük bir iyileştirme yaparsa (bir isimlendirmeyi düzeltmek, gereksiz bir yorumu silmek, bir metodu bölmek), kod tabanı giderek daha sağlıklı hale gelir.</span><span class=\"en-text\">\"Leave the campground cleaner than you found it.\" This simple rule is the most effective way to prevent code rot over time. If every developer makes a small improvement in the file they are working on (fixing a naming, deleting an unnecessary comment, splitting a method), the codebase becomes increasingly healthy.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — \"Dokunma, bozulmasın\" veya \"Benim işim değil\"</span><span class=\"en-text\">BAD — \"Don't touch, it might break\" or \"It's not my job\"</span></span>\n<pre>// Mevcut kirli kod\nfunction update(d) {\n    // ... iş mantığı\n}\n\n// Yeni özellik eklenmiş hali (hala kirli)\nfunction update(d) {\n    // ... eski kirli iş mantığı\n    if (d.flag) {\n        // Yeni eklenen ama eski kirliliği koruyan kod\n    }\n}</pre>\n<div class=\"explanation\"><span class=\"tr-text\">Geliştirici sadece kendi işini yapmış ama etraftaki kirliliğe dokunmamıştır. Bu yaklaşım kodun zamanla çürümesine neden olur.</span><span class=\"en-text\">The developer only did their own job but didn't touch the surrounding mess. This approach causes code to rot over time.</span></div>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — İzci kuralı uygulanmış hali</span><span class=\"en-text\">GOOD — Applying the Boy Scout rule</span></span>\n<pre>// İzci kuralı: İsmi düzelttim ve yeni özelliği ekledim\nfunction updateUserData(userData) {\n    // ... iyileştirilmiş iş mantığı\n    if (userData.isPremium) {\n        applyPremiumFeatures(userData);\n    }\n}\n\nfunction applyPremiumFeatures(userData) { ... }</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">Her commit'te şu soruyu sorun: \"Bu dosyayı aldığım halinden daha mı iyi bıraktım?\" Cevap evet ise, profesyonel bir yazılımcı gibi davranıyorsunuz demektir. İyileştirmenin büyük olmasına gerek yok, bir değişken adını düzeltmek bile yeterlidir.</span><span class=\"en-text\">Ask this question in every commit: \"Did I leave this file better than I found it?\" If the answer is yes, you are acting like a professional developer. The improvement doesn't have to be big; even fixing a variable name is enough.</span></div>"
    },
    {
      "id": "continuous-improvement",
      "title": {
        "en": "Continuous Improvement",
        "tr": "Sürekli İyileştirme (Continuous Improvement)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Sürekli iyileştirme, profesyonelliğin temel bir parçasıdır. Kodun \"bir kere yazılıp biten\" bir şey değil, sürekli evrilen ve gelişen bir canlı organizma olduğu bilincidir. Kalitenin korunması değil, her adımda artırılması hedeflenir.</span><span class=\"en-text\">Continuous improvement is a fundamental part of professionalism. It's the awareness that code is not something \"written once and done,\" but a constantly evolving and developing living organism. The goal is not just to maintain quality, but to increase it at every step.</span></p>"
    }
  ]
});
