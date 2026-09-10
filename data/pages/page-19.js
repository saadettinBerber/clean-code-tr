window.PAGE({
  "id": "page-19",
  "page": 19,
  "pdf_page": 50,
  "chapter": {
    "num": 2,
    "en": "Meaningful Names",
    "tr": "Anlamlı İsimler"
  },
  "section": {
    "en": "Use Intention-Revealing Names (devam) / Avoid Disinformation",
    "tr": "Use Intention-Revealing Names (devam) / Avoid Disinformation"
  },
  "title": {
    "en": "Niyet Belirten İsimler (devam) & Yanlış Bilgi Vermekten Kaçının",
    "tr": "Niyet Belirten İsimler (devam) & Yanlış Bilgi Vermekten Kaçının"
  },
  "blocks": [
    {
      "type": "para",
      "sentences": [
        {
          "en": "The answers to these questions are not present in the code sample, <em>but they could have been</em>. Say that we're working in a mine sweeper game. We find that the board is a list of cells called <code>theList</code>. Let's rename that to <code>gameBoard</code>.",
          "tr": "Bu soruların yanıtları kod örneğinde yer almıyor, <em>ama yer alabilirdi</em>. Diyelim ki bir mayın tarlası oyununda (mine sweeper game) çalışıyoruz. Tahtanın (board), <code>theList</code> adlı bir hücre listesi (list of cells) olduğunu fark ediyoruz. İsmini <code>gameBoard</code> olarak değiştirelim.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Each cell on the board is represented by a simple array. We further find that the zeroth subscript is the location of a status value and that a status value of 4 means \"flagged.\" Just by giving these concepts names we can improve the code considerably:",
          "tr": "Tahtadaki her hücre basit bir dizi (simple array) ile temsil edilmektedir. Sıfırıncı alt indis (zeroth subscript) bir durum değerinin (status value) konumunu belirttiğini ve <code>4</code> durum değerinin \"işaretli\" (flagged) anlamına geldiğini de fark ediyoruz. Bu kavramlara isim vererek kodu önemli ölçüde iyileştirebiliriz:",
          "html": true
        }
      ]
    },
    {
      "type": "html",
      "html": "<div class=\"code-evolution\">\n<div class=\"code-evolution-title\">\n<span class=\"evolution-step\">\n<span class=\"tr-text\">Adım 1</span>\n<span class=\"en-text\">Step 1</span>\n</span>\n<span class=\"tr-text\">Sabitler ve anlamlı isimler ile iyileştirme</span>\n<span class=\"en-text\">Improvement with constants and meaningful names</span>\n</div>\n<pre class=\"code-block\" style=\"margin: 0;\">public List&lt;int[]&gt; getFlaggedCells() {\n    List&lt;int[]&gt; flaggedCells = new ArrayList&lt;int[]&gt;();\n    for (int[] cell : gameBoard)\n        if (cell[STATUS_VALUE] == FLAGGED)\n            flaggedCells.add(cell);\n    return flaggedCells;\n}</pre>\n</div>"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Notice that the simplicity of the code has not changed. It still has exactly the same number of operators and constants, with exactly the same number of nesting levels. But the code has become much more explicit.",
          "tr": "Kodun basitliğinin değişmediğine dikkat edin. Hâlâ aynı sayıda operatör ve sabit var, aynı sayıda iç içe geçme seviyesi (nesting levels) var. Ama kod çok daha açık (explicit) hale geldi.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "We can go further and write a simple class for cells instead of using an array of <code>int</code>s. It can include an intention-revealing function (call it <code>isFlagged</code>) to hide the magic numbers. It results in a new version of the function:",
          "tr": "Daha da ileri gidebilir ve <code>int</code> dizileri yerine hücreler için basit bir sınıf (simple class) yazabiliriz. Sihirli sayıları (magic numbers) gizlemek için niyet açıklayıcı bir fonksiyon (intention-revealing function) — adını <code>isFlagged</code> koyalım — ekleyebiliriz. Bu, fonksiyonun yeni bir sürümüyle sonuçlanır:",
          "html": true
        }
      ]
    },
    {
      "type": "html",
      "html": "<div class=\"code-evolution\">\n<div class=\"code-evolution-title\">\n<span class=\"evolution-step\">\n<span class=\"tr-text\">Adım 2</span>\n<span class=\"en-text\">Step 2</span>\n</span>\n<span class=\"tr-text\">Sınıf ve niyet açıklayıcı metot ile iyileştirme</span>\n<span class=\"en-text\">Improvement with class and intention-revealing method</span>\n</div>\n<pre class=\"code-block\" style=\"margin: 0;\">public List&lt;Cell&gt; getFlaggedCells() {\n    List&lt;Cell&gt; flaggedCells = new ArrayList&lt;Cell&gt;();\n    for (Cell cell : gameBoard)\n        if (cell.isFlagged())\n            flaggedCells.add(cell);\n    return flaggedCells;\n}</pre>\n</div>"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "With these simple name changes, it's not difficult to understand what's going on. This is the power of choosing good names.",
          "tr": "Bu basit isim değişiklikleriyle, neler olduğunu anlamak hiç zor değil. İşte iyi isimler seçmenin gücü budur.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Avoid Disinformation",
      "tr": "Yanlış Bilgi Vermekten Kaçının / Avoid Disinformation",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Programmers must avoid leaving false clues that obscure the meaning of code. We should avoid words whose entrenched meanings vary from our intended meaning. For example, <code>hp</code>, <code>aix</code>, and <code>sco</code> would be poor variable names because they are the names of Unix platforms or variants. Even if you are coding a hypotenuse and <code>hp</code> looks like a good abbreviation, it could be disinformative.",
          "tr": "Programcılar, kodun anlamını bulanıklaştıran yanlış ipuçları (false clues) bırakmaktan kaçınmalıdır. Yerleşik anlamları (entrenched meanings) kendi kastettiğimiz anlamdan farklı olan kelimelerden kaçınmalıyız. Örneğin, <code>hp</code>, <code>aix</code> ve <code>sco</code> değişken adları olarak kötü seçimler olurdu çünkü bunlar Unix platformlarının isimleridir. Hipotenüs kodluyorsanız ve <code>hp</code> iyi bir kısaltma gibi görünse bile, bu yanıltıcı (disinformative) olabilir.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Do not refer to a grouping of accounts as an <code>accountList</code> unless it's actually a <code>List</code>. The word list means something specific to programmers. If the container holding the accounts is not actually a <code>List</code>, it may lead to false conclusions.<sup>1</sup> So <code>accountGroup</code> or just plain <code>accounts</code> would be better.",
          "tr": "Bir hesap grubuna (grouping of accounts) gerçekten bir <code>List</code> olmadıkça <code>accountList</code> olarak atıfta bulunmayın. <code>List</code> kelimesi programcılar için özel bir anlam taşır. Hesapları tutan kap (container) gerçekte bir <code>List</code> değilse, yanlış sonuçlara yol açabilir.<sup>1</sup> Bu yüzden <code>accountGroup</code> veya sadece <code>accounts</code> daha iyi olurdu.",
          "html": true
        }
      ]
    },
    {
      "type": "footnote",
      "en": "<sup>1</sup> As we'll see later on, even if the container <em>is</em> a <code>List</code>, it's probably better not to encode the container type into the name.",
      "tr": "<sup>1</sup> İleride göreceğimiz gibi, kap (container) gerçekten bir <code>List</code> <em>olsa bile</em>, kap türünü (container type) isme kodlamak muhtemelen iyi bir fikir değildir.",
      "html": true
    }
  ],
  "concepts": [
    {
      "id": "naming-refactoring",
      "title": {
        "en": "Refactoring Through Naming",
        "tr": "İsimlendirme ile Yeniden Düzenleme (Refactoring Through Naming)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Bu sayfadaki mayın tarlası örneği, yalnızca isimleri değiştirerek kodun okunabilirliğini (readability) dramatik şekilde artırmanın mümkün olduğunu gösterir. Üç adımlı evrim (<code>getThem</code> → <code>getFlaggedCells</code> with constants → <code>getFlaggedCells</code> with Cell class) kodun yapısını hiç değiştirmeden — aynı sayıda satır, aynı mantık — anlama süresini saniyelerden milisaniyelere düşürür.</span><span class=\"en-text\">The mine sweeper example on this page demonstrates that it's possible to dramatically improve code readability by only changing names. The three-step evolution (<code>getThem</code> → <code>getFlaggedCells</code> with constants → <code>getFlaggedCells</code> with Cell class) reduces comprehension time from seconds to milliseconds — without changing the structure: same number of lines, same logic.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — İsimler hiçbir bağlam sunmuyor</span><span class=\"en-text\">BAD — Names provide no context</span></span>\n<pre>function getItems(data) {\n    const result = [];\n    for (const row of data) {\n        if (row[3] === 2) {\n            result.push(row);\n        }\n    }\n    return result;\n}</pre>\n<div class=\"explanation\"><span class=\"tr-text\"><code>data</code> ne? <code>row[3]</code> neyin indeksi? <code>2</code> ne durumu temsil ediyor? Her şey örtük. Kodu anlayabilmek için yazılım hakkında önceden bilgi sahibi olmanız gerekiyor.</span><span class=\"en-text\">What is <code>data</code>? What is <code>row[3]</code> the index of? What does <code>2</code> represent? Everything is implicit. You need prior knowledge about the software to understand this code.</span></div>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Aynı mantık, ama isimler her şeyi anlatıyor</span><span class=\"en-text\">GOOD — Same logic, but names tell the whole story</span></span>\n<pre>const ORDER_STATUS_SHIPPED = 2;\n\nfunction getShippedOrders(allOrders) {\n    return allOrders.filter(\n        order =&gt; order.status === ORDER_STATUS_SHIPPED\n    );\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">Kodunuzda sihirli sayılar (magic numbers) veya indekslerle erişilen diziler görüyorsanız, bu bir refactoring fırsatıdır. İlk adım: sabitleri adlandırın. İkinci adım: dizileri anlamlı alanları olan nesnelere (objects) dönüştürün. Kodun yapısını değiştirmeden, sadece isimlendirmeyle okunabilirliği katlayabilirsiniz.</span><span class=\"en-text\">If you see magic numbers or index-based array access in your code, that's a refactoring opportunity. Step one: name the constants. Step two: convert arrays to objects with meaningful fields. Without changing the structure, naming alone can multiply readability.</span></div>"
    },
    {
      "id": "avoid-disinformation",
      "title": {
        "en": "Avoid Disinformation",
        "tr": "Yanlış Bilgi Vermekten Kaçınma (Avoid Disinformation)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Yanlış bilgi vermekten kaçınma (Avoid Disinformation), değişken veya fonksiyon isimlerinin okuyucuyu yanlış yönlendirmemesi gerektiğini söyleyen bir ilkedir. Bir ismin yerleşik teknik anlamı, kendi kullanım amacınızla çelişmemelidir. Örneğin, bir değişkene <code>list</code> kelimesini eklemek, onu gerçekten bir <code>List</code> veri yapısı sanmaya yol açar. Aynı şekilde, <code>hp</code> gibi bir kısaltma Unix platformu çağrışımı yapar.</span><span class=\"en-text\">Avoid Disinformation is a principle stating that variable or function names should not mislead the reader. A name's established technical meaning should not conflict with your intended use. For example, appending <code>list</code> to a variable name implies it's actually a <code>List</code> data structure. Similarly, abbreviations like <code>hp</code> evoke Unix platforms.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — İsimler yanlış yönlendiriyor</span><span class=\"en-text\">BAD — Names are misleading</span></span>\n<pre>// TypeScript\ninterface UserData {\n    userList: Set&lt;User&gt;;        // Set ama adı \"List\"!\n    hp: number;                  // hit points? horsepower? homepage?\n    accountArray: Map&lt;string, Account&gt;;  // Map ama adı \"Array\"!\n}\n\nfunction controllerList(req: Request) {  // Bu bir liste değil, bir handler!\n    // ...\n}</pre>\n<div class=\"explanation\"><span class=\"tr-text\"><code>userList</code> aslında bir <code>Set</code>, <code>accountArray</code> aslında bir <code>Map</code>. <code>hp</code> belirsiz bir kısaltma. <code>controllerList</code> bir liste değil, bir handler fonksiyonu. Her isim okuyucuyu yanlış yönlendiriyor.</span><span class=\"en-text\"><code>userList</code> is actually a <code>Set</code>, <code>accountArray</code> is actually a <code>Map</code>. <code>hp</code> is an ambiguous abbreviation. <code>controllerList</code> is not a list, it's a handler function. Every name misleads the reader.</span></div>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — İsimler gerçeği yansıtıyor</span><span class=\"en-text\">GOOD — Names reflect reality</span></span>\n<pre>// TypeScript\ninterface UserData {\n    uniqueUsers: Set&lt;User&gt;;\n    hitPoints: number;\n    accountsByCode: Map&lt;string, Account&gt;;\n}\n\nfunction handleUserRequest(req: Request) {\n    // ...\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">İsimlendirirken şu iki kuralı uygulayın: (1) İsme bir veri yapısı tipi eklemeyin — gerçek tip değiştiğinde isim yanıltıcı olur. <code>accounts</code> demek, <code>accountList</code> demekten her zaman daha güvenlidir. (2) Kısaltmaları, sektörde yerleşik anlamları olmadığından emin olduktan sonra kullanın.</span><span class=\"en-text\">Apply these two rules when naming: (1) Don't embed a data structure type in the name — when the actual type changes, the name becomes misleading. <code>accounts</code> is always safer than <code>accountList</code>. (2) Only use abbreviations after verifying they don't have established meanings in the industry.</span></div>"
    }
  ]
});
