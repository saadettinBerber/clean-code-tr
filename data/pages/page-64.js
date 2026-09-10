window.PAGE({
  "id": "page-64",
  "page": 64,
  "pdf_page": 95,
  "chapter": {
    "num": 4,
    "en": "Comments",
    "tr": "Yorumlar"
  },
  "section": {
    "en": "Örnek — GeneratePrimes.java (Listing 4-7)",
    "tr": "Örnek — GeneratePrimes.java (Listing 4-7)"
  },
  "title": {
    "en": "Misleading & Mandated",
    "tr": "Yanıltıcı & Zorunlu"
  },
  "blocks": [
    {
      "type": "heading",
      "level": 1,
      "en": "Example",
      "tr": "Örnek / Example",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "I wrote the module in Listing 4-7 for the first XP Immersion. It was intended to be an example of bad coding and commenting style. Kent Beck then refactored this code into a much more pleasant form in front of several dozen enthusiastic students. Later I adapted the example for my book Agile Software Development, Principles, Patterns, and Practices and the first of my Craftsman articles published in Software Development magazine.",
          "tr": "Listing 4-7'deki modülü ilk XP Immersion için yazdım. Amacı kötü kodlama ve yorum yazma tarzına bir örnek teşkil etmekti. Kent Beck ardından bu kodu birkaç düzine hevesli öğrencinin önünde çok daha hoş bir forma geri dönüştürdü. Daha sonra bu örneği \"Agile Software Development, Principles, Patterns, and Practices\" kitabım ve Software Development dergisinde yayımlanan ilk Craftsman makalem için uyarladım.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "What I find fascinating about this module is that there was a time when many of us would have considered it \"well documented.\" Now we see it as a small mess. See how many different comment problems you can find.",
          "tr": "Bu modülde beni büyüleyен şey, bir zamanlar pek çoğumuzun onu \"iyi belgelenmiş\" saydığıdır. Şimdi ise küçük bir karmaşa olarak görüyoruz. Ne kadar farklı yorum sorununu bulabildiğinize bakın:",
          "html": true
        }
      ]
    },
    {
      "type": "html",
      "html": "<div class=\"challenge-box\">\n<strong><span class=\"tr-text\">Kendinize meydan okuyun:</span><span class=\"en-text\">Challenge yourself:</span></strong>\n<span class=\"tr-text\"> Aşağıdaki kodda kaç farklı yorum sorununu tespit edebilirsiniz? Tüm sorun\n                kategorilerini (mırıldanma, gereksiz, yanıltıcı, zorunlu, günlük, gürültü, HTML, yerel olmayan, çok\n                fazla bilgi, bağlantısız bağlam, fonksiyon başlığı, herkese açık olmayan Javadoc) listeleyin.</span>\n<span class=\"en-text\"> How many different comment problems can you identify in the\n                code below? Try to list all problem categories (mumbling, redundant, misleading, mandated, journal,\n                noise, HTML, nonlocal, too much info, inobvious connection, function header, Javadoc in nonpublic\n                code).</span>\n</div>"
    },
    {
      "type": "code",
      "lang": "java",
      "code": "/**\n * Bu sınıf, kullanıcı tarafından belirtilen bir üst sınıra kadar\n * asal sayılar üretir. Kullanılan algoritma Eratosthenes Kalburu'dur.\n * <p>\n * Kireneli Eratosthenes, MÖ 276 civarı, Kirene, Libya --\n * MS 194, İskenderiye. Dünya çevresini hesaplayan ilk insan.\n * Artık yıllı takvimler üzerinde çalışması ve İskenderiye\n * Kütüphanesi'ni yönetmesiyle de tanınır.\n * <p>\n * Algoritma oldukça basittir. 2'den başlayan bir tam sayı dizisi verilmiş.\n * 2'nin tüm katlarını çizin. Çizilmemiş bir sonraki tam sayıyı bulun ve\n * onun tüm katlarını çizin. En büyük değerin karekökünü geçene kadar\n * tekrarlayın.\n *\n * @author Alphonse\n * @version 13 Feb 2002 atp\n */\nimport java.util.*;\npublic class GeneratePrimes\n{\n  /**\n   * @param maxValue üretim limitidir.\n   */\n  public static int[] generatePrimes(int maxValue)\n  {\n    if (maxValue >= 2) // tek geçerli durum\n    {\n      // bildirimler\n      int s = maxValue + 1; // dizi boyutu\n      boolean[] f = new boolean[s];\n      int i;\n      // diziyi doğruya başlat\n      for (i = 0; i < s; i++)\n        f[i] = true;\n\n      // 0 ve 1 asal değildir\n      f[0] = f[1] = false;\n\n      // kalbur\n      int j;\n      for (i = 2; i < Math.sqrt(s) + 1; i++)\n      {\n        if (f[i]) // eğer i çizilmemişse,\n        {  // katlarını çiz\n          for (j = 2 * i; j < s; j += i)\n            f[j] = false; // birden fazla i katı asal değildir\n        }\n      }\n      // kaç tane asal sayı var?\n      int count = 0;\n      for (i = 0; i < s; i++)\n      {\n        if (f[i])\n          count++; // sayacı artır\n      }\n      int[] primes = new int[count];\n      // asalları sonuç dizisine taşı\n      for (i = 0, j = 0; i < s; i++)\n      {\n        if (f[i])        // eğer asal ise...\n          primes[j++] = i;\n      }\n      return primes; // asalları döndür\n    }\n    else // maxValue < 2\n      return new int[0]; // girdi hatalı; boş dizi döndür\n  }\n}",
      "caption": {
        "en": "Listing 4-7 — GeneratePrimes.java",
        "tr": "Listing 4-7 — GeneratePrimes.java"
      }
    }
  ],
  "concepts": []
});
