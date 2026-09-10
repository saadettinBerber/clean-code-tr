window.PAGE({
  "id": "page-20",
  "page": 20,
  "pdf_page": 51,
  "chapter": {
    "num": 2,
    "en": "Meaningful Names",
    "tr": "Anlamlı İsimler"
  },
  "section": {
    "en": "Avoid Disinformation (devam) / Make Meaningful Distinctions",
    "tr": "Avoid Disinformation (devam) / Make Meaningful Distinctions"
  },
  "title": {
    "en": "Yanlış Bilgi Vermekten Kaçının (devam) & Anlamlı Ayrımlar Yapın",
    "tr": "Yanlış Bilgi Vermekten Kaçının (devam) & Anlamlı Ayrımlar Yapın"
  },
  "blocks": [
    {
      "type": "para",
      "sentences": [
        {
          "en": "Beware of using names which vary in small ways. How long does it take to spot the subtle difference between a <code>XYZControllerForEfficientHandlingOfStrings</code> in one module and, somewhere a little more distant, <code>XYZControllerForEfficientStorageOfStrings</code>? The words have frightfully similar shapes.",
          "tr": "Küçük farklarla değişen isimler kullanmaktan sakının. Bir modüldeki <code>XYZControllerForEfficientHandlingOfStrings</code> ile biraz daha uzaktaki <code>XYZControllerForEfficientStorageOfStrings</code> arasındaki ince farkı fark etmek ne kadar sürer? Bu kelimeler korkutucu derecede benzer şekillere sahiptir.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Spelling similar concepts similarly is <em>information</em>. Using inconsistent spellings is <em>disinformation</em>. With modern Java environments we enjoy automatic code completion. We write a few characters of a name and press some hotkey combination (if that) and are rewarded with a list of possible completions for that name. It is very helpful if names for very similar things sort together alphabetically and if the differences are very obvious, because the developer is likely to pick an object by name without seeing your copious comments or even the list of methods supplied by that class.",
          "tr": "Benzer kavramları benzer şekilde yazmak <em>bilgi</em>dir (information). Tutarsız yazımlar kullanmak ise <em>yanlış bilgidir</em> (disinformation). Modern Java ortamlarında otomatik kod tamamlama (automatic code completion) özelliğinin keyfini çıkarırız. Bir ismin birkaç karakterini yazıp bir kısayol tuşuna basarız ve o isim için olası tamamlamalar listesiyle ödüllendiriliriz. İsimlerin alfabetik olarak bir arada sıralanması ve farkların çok belirgin olması çok faydalıdır, çünkü geliştirici muhtemelen ayrıntılı yorumlarınızı ve hatta o sınıfın sunduğu metot listesini görmeden bir nesneyi ismiyle seçecektir.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "A truly awful example of disinformative names would be the use of lower-case <code>l</code> or uppercase <code>O</code> as variable names, especially in combination. The problem, of course, is that they look almost entirely like the constants one and zero, respectively.",
          "tr": "Gerçekten korkunç bir yanlış bilgilendirme örneği, özellikle birlikte kullanıldığında küçük harf <code>l</code> veya büyük harf <code>O</code>'nun değişken adı olarak kullanılması olurdu. Sorun, elbette, bunların neredeyse tamamen <code>1</code> (bir) ve <code>0</code> (sıfır) sabitleriymiş gibi görünmesidir.",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "int a = l;\nif ( O == l )\n  a = O1;\nelse\n  l = 01;"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "The reader may think this a contrivance, but we have examined code where such things were abundant. In one case the author of the code suggested using a different font so that the differences were more obvious, a solution that would have to be passed down to all future developers as oral tradition or in a written document. The problem is conquered with finality and without creating new work products by a simple renaming.",
          "tr": "Okuyucu bunun uydurma olduğunu düşünebilir, ama bu tür şeylerin bol miktarda bulunduğu kodları inceledik. Bir vakada kodun yazarı farklı bir yazı tipi (font) kullanarak farkların daha belirgin olmasını önermiştir — gelecekteki tüm geliştiricilere sözlü gelenek veya yazılı belge olarak aktarılması gereken bir çözüm. Sorun, basit bir yeniden adlandırma (renaming) ile kesinlikle ve yeni iş ürünleri oluşturmaya gerek kalmadan çözülür.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Make Meaningful Distinctions",
      "tr": "Anlamlı Ayrımlar Yapın / Make Meaningful Distinctions",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Programmers create problems for themselves when they write code solely to satisfy a compiler or interpreter. For example, because you can't use the same name to refer to two different things in the same scope, you might be tempted to change one name in an arbitrary way. Sometimes this is done by misspelling one, leading to the surprising situation where correcting spelling errors leads to an inability to compile.<sup>2</sup>",
          "tr": "Programcılar, yalnızca bir derleyiciyi (compiler) veya yorumlayıcıyı (interpreter) tatmin etmek için kod yazdıklarında kendi kendilerine sorun yaratırlar. Örneğin, aynı kapsamda (scope) iki farklı şeye aynı ismi veremeyeceğiniz için, bir ismi rastgele değiştirmek isteyebilirsiniz. Bazen bu, birini yanlış yazarak (misspelling) yapılır ve bu da yazım hatalarını düzeltmenin derleme hatasına yol açtığı şaşırtıcı duruma neden olur.<sup>2</sup>",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "It is not sufficient to add number series or noise words, even though the compiler is satisfied. If names must be different, then they should also mean something different.",
          "tr": "Derleyici tatmin olsa bile, numara serileri (number-series) veya gürültü kelimeleri (noise words) eklemek yeterli değildir. Eğer isimlerin farklı olması gerekiyorsa, farklı bir anlam da taşımalıdırlar.",
          "html": true
        }
      ]
    },
    {
      "type": "footnote",
      "en": "<sup>2</sup> Consider, for example, the truly hideous practice of creating a variable named <code>klass</code> just because the name <code>class</code> was used for something else.",
      "tr": "<sup>2</sup> Örneğin, sırf <code>class</code> ismi başka bir şey için kullanıldığı için <code>klass</code> adında bir değişken oluşturmanın gerçekten iğrenç bir uygulama olduğunu düşünün.",
      "html": true
    }
  ],
  "concepts": [
    {
      "id": "similar-names",
      "title": {
        "en": "Avoiding Similar Names",
        "tr": "Benzer İsimlerden Kaçınma (Avoiding Similar Names)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Çok benzer isimlere sahip değişkenler, fonksiyonlar veya sınıflar okuyucunun dikkatini dağıtır ve hatalara zemin hazırlar. Özellikle IDE'lerin otomatik tamamlama (autocomplete) özelliğiyle çalışırken, yanlış ismi seçmek çok kolaydır. İsimler arasındaki fark açık ve belirgin olmalıdır. Ayrıca <code>l</code> (küçük L) ve <code>O</code> (büyük O) gibi <code>1</code> ve <code>0</code> ile karıştırılabilecek tek karakterli isimlerden mutlaka kaçınılmalıdır.</span><span class=\"en-text\" style=\"display:none;\">Variables, functions, or classes with very similar names distract the reader and create opportunities for bugs. Especially when working with IDE autocomplete, it's very easy to pick the wrong name. The difference between names should be clear and obvious. Also, single-character names like <code>l</code> (lowercase L) and <code>O</code> (uppercase O) that can be confused with <code>1</code> and <code>0</code> must always be avoided.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — İsimler korkutucu derecede benzer</span><span class=\"en-text\" style=\"display:none;\">BAD — Names are frighteningly similar</span></span>\n<pre>class UserAuthenticationManager { ... }\nclass UserAuthorizationManager { ... }\nclass UserAccountManager { ... }\n\n// Hangisini çağırmalıyım?\nconst mgr1 = new UserAuthenticationManager();\nconst mgr2 = new UserAuthorizationManager();\nconst mgr3 = new UserAccountManager();\n\n// Bir de şu var:\nlet l = 1;   // l mi 1 mi?\nlet O = 0;   // O mu 0 mı?</pre>\n<div class=\"explanation\"><span class=\"tr-text\">Üç sınıf adı da \"User...Manager\" ile başlayıp bitiyor. Otomatik tamamlama açılır menüsünde bunları ayırt etmek çok zor. <code>l</code> ve <code>O</code> değişkenleri ise <code>1</code> ve <code>0</code> ile neredeyse özdeş görünür.</span><span class=\"en-text\" style=\"display:none;\">All three class names start and end with \"User...Manager\". Distinguishing them in an autocomplete dropdown is very hard. The <code>l</code> and <code>O</code> variables look nearly identical to <code>1</code> and <code>0</code>.</span></div>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Farklar belirgin ve anlamlı</span><span class=\"en-text\" style=\"display:none;\">GOOD — Differences are obvious and meaningful</span></span>\n<pre>class PasswordVerifier { ... }\nclass RoleBasedAccessControl { ... }\nclass AccountProfileService { ... }\n\nconst passwordVerifier = new PasswordVerifier();\nconst accessControl = new RoleBasedAccessControl();\nconst profileService = new AccountProfileService();\n\n// Değişkenler açık:\nlet lineCount = 1;\nlet outputBuffer = 0;</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">IDE'nizin otomatik tamamlama listesinde sınıflarınızı arayın. Eğer ilk 3-4 harf aynıysa ve fark yalnızca ortadaki bir kelimede ise, isimlerinizi yeniden yapılandırın. İdeal olan: her isim farklı bir harfle başlar veya en azından ilk kelime belirgin şekilde farklıdır.</span><span class=\"en-text\" style=\"display:none;\">Search for your classes in your IDE's autocomplete list. If the first 3-4 letters are the same and the difference is only in a middle word, restructure your names. Ideally, each name starts with a different letter or at least the first word is distinctly different.</span></div>"
    },
    {
      "id": "meaningful-distinctions",
      "title": {
        "en": "Make Meaningful Distinctions",
        "tr": "Anlamlı Ayrımlar Yapın (Make Meaningful Distinctions)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Anlamlı ayrımlar (Meaningful Distinctions), isimlerin sadece derleyiciyi tatmin etmek için değil, gerçekten farklı bir anlam ifade etmek için farklılaştırılmasını gerektirir. Numara serileri (<code>a1</code>, <code>a2</code>), gürültü kelimeleri (<code>Info</code>, <code>Data</code>, <code>the</code>) veya kasıtlı yazım hataları (<code>klass</code>) gibi yaklaşımlar, isimlerin hiçbir şey ifade etmeden farklılaşmasına neden olur.</span><span class=\"en-text\" style=\"display:none;\">Meaningful Distinctions requires that names be differentiated not just to satisfy the compiler, but to actually convey different meanings. Approaches like number series (<code>a1</code>, <code>a2</code>), noise words (<code>Info</code>, <code>Data</code>, <code>the</code>), or intentional misspellings (<code>klass</code>) cause names to differ without meaning anything.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Numara serileri ve gürültü kelimeleri</span><span class=\"en-text\" style=\"display:none;\">BAD — Number series and noise words</span></span>\n<pre>// Numara serileri: a1, a2 hiçbir şey söylemez\nfunction copyArray(a1, a2) {\n    for (let i = 0; i &lt; a1.length; i++) {\n        a2[i] = a1[i];\n    }\n}\n\n// Gürültü kelimeleri: Info, Data anlamsız ayrımlar\nclass ProductInfo { ... }\nclass ProductData { ... }\n\n// Kasıtlı yazım hatası\nconst klass = \"Math101\";  // \"class\" ayrılmış kelime diye</pre>\n<div class=\"explanation\"><span class=\"tr-text\"><code>a1</code> ve <code>a2</code> hiçbir niyet ifade etmez. <code>ProductInfo</code> ve <code>ProductData</code> arasındaki fark nedir? <code>klass</code> ise <code>class</code> ayrılmış kelimesinden kaçınmak için yapılan çirkin bir hile.</span><span class=\"en-text\" style=\"display:none;\"><code>a1</code> and <code>a2</code> express no intent. What's the difference between <code>ProductInfo</code> and <code>ProductData</code>? <code>klass</code> is an ugly hack to avoid the reserved keyword <code>class</code>.</span></div>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Her isim farklı bir anlam taşıyor</span><span class=\"en-text\" style=\"display:none;\">GOOD — Each name carries a different meaning</span></span>\n<pre>// Kaynak ve hedef açıkça belirtilmiş\nfunction copyArray(source, destination) {\n    for (let i = 0; i &lt; source.length; i++) {\n        destination[i] = source[i];\n    }\n}\n\n// Anlamlı ayrımlar: farklı sorumluluklar\nclass ProductCatalog { ... }   // Ürün listesi ve arama\nclass ProductPricing { ... }   // Fiyatlandırma kuralları\n\n// Ayrılmış kelimeden anlamlı şekilde kaçınma\nconst courseName = \"Math101\";</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">İki ismin arasındaki farkı tek bir cümleyle açıklayamıyorsanız, isimler anlamlı şekilde farklılaşmamıştır. \"ProductInfo ürün bilgilerini tutar, ProductData ürün verilerini tutar\" diye açıklıyorsanız — aslında hiçbir şey açıklamamışsınızdır. <code>Info</code>, <code>Data</code>, <code>Object</code>, <code>Manager</code>, <code>Handler</code> gibi gürültü sonekleri tehlike işaretidir.</span><span class=\"en-text\" style=\"display:none;\">If you can't explain the difference between two names in a single sentence, the names aren't meaningfully different. If you explain \"ProductInfo holds product info, ProductData holds product data\" — you've actually explained nothing. Noise suffixes like <code>Info</code>, <code>Data</code>, <code>Object</code>, <code>Manager</code>, <code>Handler</code> are danger signs.</span></div>"
    }
  ]
});
