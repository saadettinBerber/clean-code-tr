window.PAGE({
  "id": "page-71",
  "page": 71,
  "pdf_page": 102,
  "chapter": {
    "num": 4,
    "en": "Comments",
    "tr": "Yorumlar"
  },
  "section": {
    "en": "Herkese Açık Olmayan Javadoc, Listing 4-7 Devamı — Bölüm 4 Sonu",
    "tr": "Herkese Açık Olmayan Javadoc, Listing 4-7 Devamı — Bölüm 4 Sonu"
  },
  "title": {
    "en": "Function Headers",
    "tr": "Fonksiyon Başlıkları"
  },
  "blocks": [
    {
      "type": "heading",
      "level": 1,
      "en": "Javadocs in Nonpublic Code",
      "tr": "Herkese Açık Olmayan Kodlarda Javadoc / Javadocs in Nonpublic Code",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "As useful as javadocs are for public APIs, they are anathema to code that is not intended for public consumption. Generating javadoc pages for the classes and functions inside a system is not generally useful, and the extra formality of the javadoc comments amounts to little more than cruft and distraction.",
          "tr": "Javadoc'lar herkese açık API'lar için ne kadar yararlıysa, herkese sunulmayan kodlar için o kadar zararlıdır. Bir sistemdeki sınıflar ve fonksiyonlar için Javadoc sayfaları oluşturmak genellikle faydalı değildir; Javadoc yorumlarının eklediği ekstra biçimsellik ise çoğunlukla boş gürültüden ibaret kalır ve dikkati dağıtır.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Example — Listing 4-7 (Continued)",
      "tr": "Örnek — Listing 4-7 (devam) / Example — Listing 4-7 (Continued)",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "I wrote the module in Listing 4-7 for the first XP Immersion. It was intended to be an example of bad coding and commenting style. Kent Beck then refactored this code into a much more pleasant form in front of several dozen enthusiastic students. Later I adapted the example for my book Agile Software Development, Principles, Patterns, and Practices and the first of my Craftsman articles published in Software Development magazine.",
          "tr": "Listing 4-7'yi ilk XP Immersion için yazdım. Kötü kodlama ve yorum yazma tarzına örnek olması amacıyla hazırlandı. Kent Beck ardından bu kodu birkaç düzine hevesli öğrencinin önünde çok daha hoş bir forma dönüştürdü. Daha sonra bu örneği \"Agile Software Development, Principles, Patterns, and Practices\" kitabım ve Software Development dergisindeki ilk Craftsman makalem için uyarladım.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "What I find fascinating about this module is that there was a time when many of us would have considered it \"well documented.\" Now we see it as a small mess. See how many different comment problems you can find.",
          "tr": "Bu modülde beni büyüleyen şey, bir zamanlar pek çoğumuzun onu \"iyi belgelenmiş\" saydığıdır. Şimdi ise küçük bir karmaşa olarak görüyoruz. Ne kadar farklı yorum sorununu bulabildiğinize bakın:",
          "html": true
        }
      ]
    },
    {
      "type": "html",
      "html": "<div class=\"code-listing\">\n<div class=\"code-listing-header\">Listing 4-7 (devam) — GeneratePrimes.java</div>\n<pre\"> <span class=\"comment\">// diziyi true'ya başlat</span>\n<span class=\"kw\">for</span> (i = 0; i &lt; s; i++)\n                f[i] = <span class=\"kw\">true</span>;\n\n                <span class=\"comment\">// 0 ve 1 asal değildir</span>\n                f[0] = f[1] = <span class=\"kw\">false</span>;\n\n                <span class=\"comment\">// kalbur</span>\n<span class=\"kw\">int</span> j;\n                <span class=\"kw\">for</span> (i = 2; i &lt; Math.sqrt(s) + 1; i++)\n                {\n                <span class=\"kw\">if</span> (f[i]) <span class=\"comment\">// eğer i çizilmemişse,</span>\n                { <span class=\"comment\">// katlarını çiz</span>\n<span class=\"kw\">for</span> (j = 2 * i; j &lt; s; j += i)\n                f[j] = <span class=\"kw\">false</span>; <span class=\"comment\">// birden fazla i katı asal değil</span>\n                }\n                }\n                <span class=\"comment\">// kaç tane asal var?</span>\n<span class=\"kw\">int</span> count = 0;\n                <span class=\"kw\">for</span> (i = 0; i &lt; s; i++)\n                {\n                <span class=\"kw\">if</span> (f[i])\n                count++; <span class=\"comment\">// sayacı artır</span>\n                }\n                <span class=\"kw\">int</span>[] primes = <span class=\"kw\">new int</span>[count];\n                <span class=\"comment\">// asalları sonuç dizisine taşı</span>\n<span class=\"kw\">for</span> (i = 0, j = 0; i &lt; s; i++)\n                {\n                <span class=\"kw\">if</span> (f[i]) <span class=\"comment\">// eğer asal ise...</span>\n                primes[j++] = i;\n                }\n                <span class=\"kw\">return</span> primes; <span class=\"comment\">// asalları döndür</span>\n                }\n                <span class=\"kw\">else</span> <span class=\"comment\">// maxValue &lt; 2</span>\n<span class=\"kw\">return new int</span>[0]; <span class=\"comment\">// girdi hatası; boş dizi döndür</span>\n\n</pre\"></div>"
    },
    {
      "type": "html",
      "html": "<div class=\"chapter-complete-box\">\n<h3>✓ <span class=\"tr-text\">Bölüm 4 Tamamlandı — Yorumlar</span><span class=\"en-text\">Chapter 4 Complete — Comments</span></h3>\n<p><span class=\"tr-text\">İyi yorumlar, kötü yorumlar ve GeneratePrimes örneği. Bölüm 5'te biçimlendirme ele\n                    alınıyor.</span>\n<span class=\"en-text\">Good comments, bad comments, and the GeneratePrimes example.\n                    Chapter 5 covers formatting.</span>\n</p>\n</div>"
    }
  ],
  "concepts": []
});
