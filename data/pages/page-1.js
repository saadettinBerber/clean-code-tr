window.PAGE({
  "id": "page-1",
  "page": 1,
  "pdf_page": 32,
  "chapter": {
    "num": 1,
    "en": "Clean Code",
    "tr": "Temiz Kod"
  },
  "section": {
    "en": "Clean Code",
    "tr": "Temiz Kod"
  },
  "title": {
    "en": "Clean Code",
    "tr": "Temiz Kod"
  },
  "blocks": [
    {
      "type": "html",
      "html": "<div class=\"chapter-header\">\n<div class=\"chapter-number\">1</div>\n<div class=\"chapter-title-group\">\n<div class=\"chapter-title-tr\">Temiz Kod</div>\n<div class=\"chapter-title-en\">Clean Code</div>\n</div>\n</div>"
    },
    {
      "type": "html",
      "html": "<div class=\"illustration-note\">\n<span class=\"tr-text\">[ Kitaptaki illustrasyon: Antik Yunan tapinaginin onunde oturan, elinde parsomen tutan bir dusunur figuru ]</span>\n<span class=\"en-text\" style=\"display:none;\">[ Book illustration: A thinker figure sitting in front of an ancient Greek temple, holding a scroll ]</span>\n</div>"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "You are reading this book for two reasons. First, you are a programmer. Second, you want to be a better programmer. Good. We need better programmers.",
          "tr": "Bu kitabi iki nedenden dolayi okuyorsunuz. Birincisi, bir programcisiniz. Ikincisi, daha iyi bir programci olmak istiyorsunuz. Guzel. Daha iyi programcilara ihtiyacimiz var.",
          "html": true
        }
      ]
    }
  ],
  "concepts": [
    {
      "id": "cleancode",
      "title": {
        "en": "Clean Code",
        "tr": "Temiz Kod (Clean Code)"
      },
      "body_html": "<h4>\n<span class=\"tr-text\">Kavram Aciklamasi</span>\n<span class=\"en-text\" style=\"display:none;\">Concept Explanation</span>\n</h4>\n<p>\n<span class=\"tr-text\">Temiz Kod (Clean Code), okunabilir, anlasilabilir ve bakimi kolay kod yazma disiplinidir. Degisken, fonksiyon ve sinif isimlendirmesi bu disiplinin en temel yapitasidir. Iyi isimlendirilmis kod, yorum satirlarina ihtiyac duymadan kendini aciklar.</span>\n<span class=\"en-text\" style=\"display:none;\">Clean Code is the discipline of writing readable, understandable, and maintainable code. Naming of variables, functions, and classes is the most fundamental building block of this discipline. Well-named code explains itself without needing comments.</span>\n</p>\n<h4>\n<span class=\"tr-text\">Kotu Ornek (Before)</span>\n<span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span>\n</h4>\n<span class=\"label-bad\">\n<span class=\"tr-text\">KOTU</span>\n<span class=\"en-text\" style=\"display:none;\">BAD</span>\n</span>\n<pre>def p(l):\n    t = 0\n    for i in l:\n        if i &gt; 0:\n            t = t + i\n    return t</pre>\n<div class=\"explanation\">\n<span class=\"tr-text\">Fonksiyon ve degisken isimleri tamamen anlamsiz. <code>p</code>, <code>l</code>, <code>t</code>, <code>i</code> gibi tek harfli isimler kodun ne yaptigini gizliyor.</span>\n<span class=\"en-text\" style=\"display:none;\">Function and variable names are completely meaningless. Single-letter names like <code>p</code>, <code>l</code>, <code>t</code>, <code>i</code> hide what the code does.</span>\n</div>\n<h4>\n<span class=\"tr-text\">Iyi Ornek (After)</span>\n<span class=\"en-text\" style=\"display:none;\">Good Example (After)</span>\n</h4>\n<span class=\"label-good\">\n<span class=\"tr-text\">IYI</span>\n<span class=\"en-text\" style=\"display:none;\">GOOD</span>\n</span>\n<pre>def sum_positive_numbers(numbers):\n    total = 0\n    for number in numbers:\n        if number &gt; 0:\n            total += number\n    return total</pre>\n<div class=\"explanation\">\n<span class=\"tr-text\">Fonksiyon adi (<code>sum_positive_numbers</code>) tam olarak ne yaptigini soyluyor. Degisken adlari (<code>numbers</code>, <code>total</code>, <code>number</code>) baglami acikca ortaya koyuyor.</span>\n<span class=\"en-text\" style=\"display:none;\">The function name (<code>sum_positive_numbers</code>) tells exactly what it does. Variable names (<code>numbers</code>, <code>total</code>, <code>number</code>) clearly convey context.</span>\n</div>\n<div class=\"tip\">\n<strong>\n<span class=\"tr-text\">Pratik Ipucu</span>\n<span class=\"en-text\" style=\"display:none;\">Practical Tip</span>\n</strong>\n<span class=\"tr-text\">Bir fonksiyon veya degisken adlandirirken kendinize sunu sorun: \"Bu kodu 6 ay sonra okudugumda ne yaptigini anlayabilir miyim?\" Eger cevap hayirsa, ismi degistirin.</span>\n<span class=\"en-text\" style=\"display:none;\">When naming a function or variable, ask yourself: \"Will I understand what this does 6 months from now?\" If the answer is no, rename it.</span>\n</div>"
    },
    {
      "id": "craftsmanship",
      "title": {
        "en": "Software Craftsmanship",
        "tr": "Yazilim Zanaati (Software Craftsmanship)"
      },
      "body_html": "<h4>\n<span class=\"tr-text\">Kavram Aciklamasi</span>\n<span class=\"en-text\" style=\"display:none;\">Concept Explanation</span>\n</h4>\n<p>\n<span class=\"tr-text\">Yazilim Zanaati (Software Craftsmanship), yazilim gelistirmeyi sadece bir muhendislik dalasi degil, ayni zamanda bir zanaat olarak goren yaklasimdir. \"Calisiyor\" demek yeterli degildir; kodun ayni zamanda ozenle, dikkatle ve guzellikle yazilmis olmasi gerekir. Bu, profesyonellik ve sorumluluk bilinciyle kod yazmak demektir.</span>\n<span class=\"en-text\" style=\"display:none;\">Software Craftsmanship is an approach that views software development not just as an engineering discipline, but also as a craft. \"It works\" is not enough; code must also be written with care, attention, and elegance. This means writing code with professionalism and a sense of responsibility.</span>\n</p>\n<h4>\n<span class=\"tr-text\">Kotu Ornek (Before)</span>\n<span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span>\n</h4>\n<span class=\"label-bad\">\n<span class=\"tr-text\">KOTU</span>\n<span class=\"en-text\" style=\"display:none;\">BAD</span>\n</span>\n<pre>// TODO: fix this later\n// HACK: don't know why this works\nfunction calcPrice(x, y, z) {\n    var r = x * y;\n    if (z) r = r - (r * 0.1); // 10% discount maybe?\n    return r;\n}</pre>\n<div class=\"explanation\">\n<span class=\"tr-text\">Bu kod \"isini olsun bitsin\" zihniyetiyle yazilmis. Gecici cozumler (hack), belirsiz TODO'lar, anlamsiz degisken adlari ve sihirli sayilar (magic numbers) iceriyor.</span>\n<span class=\"en-text\" style=\"display:none;\">This code was written with a \"just get it done\" mentality. It contains hacks, vague TODOs, meaningless variable names, and magic numbers.</span>\n</div>\n<h4>\n<span class=\"tr-text\">Iyi Ornek (After)</span>\n<span class=\"en-text\" style=\"display:none;\">Good Example (After)</span>\n</h4>\n<span class=\"label-good\">\n<span class=\"tr-text\">IYI</span>\n<span class=\"en-text\" style=\"display:none;\">GOOD</span>\n</span>\n<pre>const LOYALTY_DISCOUNT_RATE = 0.10;\n\nfunction calculateTotalPrice(unitPrice, quantity, isLoyalCustomer) {\n    const subtotal = unitPrice * quantity;\n\n    if (isLoyalCustomer) {\n        return subtotal - (subtotal * LOYALTY_DISCOUNT_RATE);\n    }\n\n    return subtotal;\n}</pre>\n<div class=\"explanation\">\n<span class=\"tr-text\">Bu kod ozenle yazilmis. Sabitler anlamli isimlerle tanimlanmis (<code>LOYALTY_DISCOUNT_RATE</code>), fonksiyon ve parametre adlari kendi kendini acikliyor.</span>\n<span class=\"en-text\" style=\"display:none;\">This code was written with care. Constants have meaningful names (<code>LOYALTY_DISCOUNT_RATE</code>), function and parameter names are self-documenting.</span>\n</div>\n<div class=\"tip\">\n<strong>\n<span class=\"tr-text\">Pratik Ipucu</span>\n<span class=\"en-text\" style=\"display:none;\">Practical Tip</span>\n</strong>\n<span class=\"tr-text\">Her commit yapmadan once kodunuza bir adim geriden bakin. \"Bu kodu bir is arkadasima gostermekten gurur duyar miyim?\" diye sorun.</span>\n<span class=\"en-text\" style=\"display:none;\">Before every commit, step back and look at your code. Ask yourself: \"Would I be proud to show this to a colleague?\"</span>\n</div>"
    }
  ]
});
