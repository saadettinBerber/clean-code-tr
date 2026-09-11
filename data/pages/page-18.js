window.PAGE({
  "id": "page-18",
  "page": 18,
  "pdf_page": 49,
  "chapter": {
    "num": 2,
    "en": "Meaningful Names",
    "tr": "Anlamlı İsimler"
  },
  "section": {
    "en": "Use Intention-Revealing Names",
    "tr": "Niyet Belirten İsimler Kullanın"
  },
  "title": {
    "en": "Use Intention-Revealing Names",
    "tr": "Niyet Belirten İsimler Kullanın"
  },
  "blocks": [
    {
      "type": "heading",
      "level": 1,
      "en": "Use Intention-Revealing Names",
      "tr": "Niyet Belirten İsimler Kullanın / Use Intention-Revealing Names",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "It is easy to say that names should reveal intent. What we want to impress upon you is that we are <em>serious</em> about this. Choosing good names takes time but saves more than it takes. So take care with your names and change them when you find better ones. Everyone who reads your code (including you) will be happier if you do.",
          "tr": "İsimlerin niyeti açığa çıkarması gerektiğini söylemek kolaydır. Size vurgulamak istediğimiz şey, bu konuda <em>ciddi</em> olduğumuzdur. İyi isimler seçmek zaman alır ama kazandırdığı zaman harcananı fazlasıyla karşılar. Bu yüzden isimlerinize özen gösterin ve daha iyisini bulduğunuzda değiştirin. Kodunuzu okuyan herkes (siz dahil) daha mutlu olacaktır.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "The name of a variable, function, or class, should answer all the big questions. It should tell you why it exists, what it does, and how it is used. If a name requires a comment, then the name does not reveal its intent.",
          "tr": "Bir değişkenin (variable), fonksiyonun (function) veya sınıfın (class) adı, tüm büyük soruları cevaplamalıdır. Size neden var olduğunu, ne yaptığını ve nasıl kullanıldığını söylemelidir. Eğer bir isim yorum (comment) gerektiriyorsa, o isim niyetini açığa çıkarmıyor demektir.",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "int d; // elapsed time in days"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "The name <code>d</code> reveals nothing. It does not evoke a sense of elapsed time, nor of days. We should choose a name that specifies what is being measured and the unit of that measurement:",
          "tr": "<code>d</code> ismi hiçbir şey ifade etmez. Geçen zamanı, günleri ya da herhangi bir şeyi çağrıştırmaz. Neyin ölçüldüğünü ve ölçüm birimini belirten bir isim seçmeliyiz:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "int elapsedTimeInDays;\nint daysSinceCreation;\nint daysSinceModification;\nint fileAgeInDays;"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Choosing names that reveal intent can make it much easier to understand and change code. What is the purpose of this code?",
          "tr": "Niyeti açığa çıkaran isimler seçmek, kodu anlamayı ve değiştirmeyi çok daha kolay hale getirir. Bu kodun amacı nedir?",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "public List<int[]> getThem() {\n    List<int[]> list1 = new ArrayList<int[]>();\n    for (int[] x : theList)\n        if (x[0] == 4)\n            list1.add(x);\n    return list1;\n}"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Why is it hard to tell what this code is doing? There are no complex expressions. Spacing and indentation are reasonable. There are only three variables and two constants. There aren't even any fancy classes or polymorphic methods, just a list of arrays (or so it seems).",
          "tr": "Bu kodun ne yaptığını anlamak neden zor? Karmaşık ifadeler (complex expressions) yok. Boşluklar ve girinti (spacing and indentation) makul. Yalnızca üç değişken ve iki sabit var. Süslü sınıflar veya çok biçimli metotlar (polymorphic methods) bile yok — sadece bir dizi listesi (ya da öyle görünüyor).",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "The problem isn't the simplicity of the code but the <em>implicity</em> of the code (to coin a phrase): the degree to which the context is not explicit in the code itself. The code implicitly requires that we know the answers to questions such as:",
          "tr": "Sorun kodun basitliği (simplicity) değil, kodun <em>örtüklüğüdür</em> (implicity — bir ifade türetmek gerekirse): bağlamın (context) kodun içinde açıkça belirtilmemiş olma derecesidir. Kod, örtük olarak şu soruların yanıtlarını bilmemizi gerektirir:",
          "html": true
        }
      ]
    },
    {
      "type": "list",
      "ordered": true,
      "items": [
        {
          "en": "What kinds of things are in <code>theList</code>?",
          "tr": "<code>theList</code> içinde ne tür şeyler var?",
          "html": true
        },
        {
          "en": "What is the significance of the zeroth subscript of an item in <code>theList</code>?",
          "tr": "<code>theList</code> içindeki bir öğenin sıfırıncı alt indisinin (zeroth subscript) önemi nedir?",
          "html": true
        },
        {
          "en": "What is the significance of the value <code>4</code>?",
          "tr": "<code>4</code> değerinin önemi nedir?",
          "html": true
        },
        {
          "en": "How would I use the list being returned?",
          "tr": "Döndürülen listeyi nasıl kullanırım?",
          "html": true
        }
      ]
    }
  ],
  "concepts": [
    {
      "id": "intention-revealing",
      "title": {
        "en": "Intention-Revealing Names",
        "tr": "Niyet Belirten İsimler (Intention-Revealing Names)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Niyet belirten isimler (Intention-Revealing Names), bir değişkenin, fonksiyonun veya sınıfın adının yalnızca ona bakarak amacını anlamamızı sağlayan isimlerdir. İyi bir isim üç soruyu cevaplamalıdır: <strong>Neden var?</strong> <strong>Ne yapıyor?</strong> <strong>Nasıl kullanılıyor?</strong> Eğer bir ismin yanına yorum eklemeniz gerekiyorsa, isim yeterince iyi değildir.</span><span class=\"en-text\">Intention-Revealing Names are names that let us understand the purpose of a variable, function, or class just by looking at it. A good name should answer three questions: <strong>Why does it exist?</strong> <strong>What does it do?</strong> <strong>How is it used?</strong> If you need to add a comment next to a name, the name isn't good enough.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — İsimler niyeti gizliyor</span><span class=\"en-text\">BAD — Names hide intent</span></span>\n<pre>function process(arr) {\n    const res = [];\n    for (const item of arr) {\n        if (item.s === 1) {\n            res.push(item);\n        }\n    }\n    return res;\n}\n\nconst d = process(data);  // ???</pre>\n<div class=\"explanation\"><span class=\"tr-text\"><code>process</code> ne işler? <code>arr</code> neler içerir? <code>s === 1</code> ne anlama gelir? <code>d</code> ne tutacak? Her bir satır için zihinsel çözümleme yapmak gerekiyor.</span><span class=\"en-text\">What does <code>process</code> do? What does <code>arr</code> contain? What does <code>s === 1</code> mean? What will <code>d</code> hold? You need to mentally decode each line.</span></div>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — İsimler niyeti açıkça ortaya koyuyor</span><span class=\"en-text\">GOOD — Names clearly reveal intent</span></span>\n<pre>const TASK_STATUS_ACTIVE = 1;\n\nfunction getActiveTasks(allTasks) {\n    const activeTasks = [];\n    for (const task of allTasks) {\n        if (task.status === TASK_STATUS_ACTIVE) {\n            activeTasks.push(task);\n        }\n    }\n    return activeTasks;\n}\n\nconst activeTasks = getActiveTasks(projectTasks);</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">İsim seçerken \"Bu ismi 3 ay sonra tekrar gördüğümde hâlâ anlayacak mıyım?\" testini uygulayın. Yorum yazmayı düşündüğünüz her yerde, önce ismi iyileştirmeyi deneyin — yoruma gerek kalmamalı.</span><span class=\"en-text\">When choosing a name, apply the \"Will I still understand this name 3 months from now?\" test. Wherever you're tempted to write a comment, try improving the name first — no comment should be necessary.</span></div>"
    },
    {
      "id": "implicity",
      "title": {
        "en": "Implicity of Code",
        "tr": "Kodun Örtüklüğü (Implicity of Code)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Kodun örtüklüğü (implicity), kodun anlaşılması için gerekli bağlamın (context) kodun kendisinde açıkça yer almama derecesidir. Bir kod parçası teknik olarak basit olabilir — az değişken, az satır, karmaşık ifade yok — ama yine de anlaşılmaz olabilir çünkü okuyucunun bilmesi gereken bağlam kodda değil, yazarın kafasındadır.</span><span class=\"en-text\">Implicity of code is the degree to which the context needed to understand the code is not explicitly present in the code itself. A piece of code can be technically simple — few variables, few lines, no complex expressions — but still be incomprehensible because the context the reader needs is not in the code, but in the author's head.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Basit ama tamamen örtük</span><span class=\"en-text\">BAD — Simple but completely implicit</span></span>\n<pre>def check(items):\n    return [i for i in items if i[2] &gt; 30 and i[0] == 'X']</pre>\n<div class=\"explanation\"><span class=\"tr-text\">Kod bir satır ve \"basit\" görünüyor ama: <code>items</code> nedir? <code>i[2]</code> ne anlama gelir? <code>30</code> neyin sınırı? <code>'X'</code> ne durumu ifade eder? Tüm bağlam örtüktür.</span><span class=\"en-text\">The code is one line and looks \"simple\" but: What are <code>items</code>? What does <code>i[2]</code> mean? What's the threshold <code>30</code>? What does <code>'X'</code> represent? All context is implicit.</span></div>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Bağlam açıkça kodda yer alıyor</span><span class=\"en-text\">GOOD — Context is explicit in the code</span></span>\n<pre>MINIMUM_AGE_DAYS = 30\nSTATUS_EXPIRED = 'X'\n\ndef find_expired_old_records(records):\n    return [\n        record for record in records\n        if record.age_in_days &gt; MINIMUM_AGE_DAYS\n        and record.status == STATUS_EXPIRED\n    ]</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">Bir fonksiyon yazdıktan sonra, kodunuzu bir \"yabancı gözüyle\" okuyun. Eğer herhangi bir satırda \"Bu ne demek?\" sorusu akla geliyorsa, o bilgi açıkça (explicit) kodda yer almalıdır. Sihirli sayıları (magic numbers) adlandırılmış sabitlerle, indisleri anlamlı alanlarla (fields) değiştirin.</span><span class=\"en-text\">After writing a function, read your code with \"stranger's eyes.\" If the question \"What does this mean?\" comes to mind at any line, that information should be explicit in the code. Replace magic numbers with named constants, indices with meaningful fields.</span></div>"
    }
  ]
});
