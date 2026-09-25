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
    "en": "Use Intention-Revealing Names (cont.) / Avoid Disinformation",
    "tr": "Niyet Belirten İsimler Kullanın (devam) / Yanlış Bilgi Vermekten Kaçının"
  },
  "title": {
    "en": "Use Intention-Revealing Names (cont.) & Avoid Disinformation",
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
      "type": "heading",
      "level": 3,
      "tr": "Adım 1 — Sabitler ve anlamlı isimler ile iyileştirme",
      "en": "Step 1 — Improvement with constants and meaningful names"
    },
    {
      "type": "code",
      "lang": "java",
      "code": "public List<int[]> getFlaggedCells() {\n    List<int[]> flaggedCells = new ArrayList<int[]>();\n    for (int[] cell : gameBoard)\n        if (cell[STATUS_VALUE] == FLAGGED)\n            flaggedCells.add(cell);\n    return flaggedCells;\n}"
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
      "type": "heading",
      "level": 3,
      "tr": "Adım 2 — Sınıf ve niyet açıklayıcı metot ile iyileştirme",
      "en": "Step 2 — Improvement with class and intention-revealing method"
    },
    {
      "type": "code",
      "lang": "java",
      "code": "public List<Cell> getFlaggedCells() {\n    List<Cell> flaggedCells = new ArrayList<Cell>();\n    for (Cell cell : gameBoard)\n        if (cell.isFlagged())\n            flaggedCells.add(cell);\n    return flaggedCells;\n}"
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
      "kind": "code",
      "title": {
        "en": "Refactoring Through Naming",
        "tr": "İsimlendirme ile Yeniden Düzenleme (Refactoring Through Naming)"
      },
      "summary": {
        "en": "The mine sweeper example on this page demonstrates that it's possible to dramatically improve code readability by only changing names. The three-step evolution (`getThem` → `getFlaggedCells` with constants → `getFlaggedCells` with Cell class) reduces comprehension time from seconds to milliseconds — without changing the structure: same number of lines, same logic.",
        "tr": "Bu sayfadaki mayın tarlası örneği, yalnızca isimleri değiştirerek kodun okunabilirliğini (readability) dramatik şekilde artırmanın mümkün olduğunu gösterir. Üç adımlı evrim (`getThem` → `getFlaggedCells` with constants → `getFlaggedCells` with Cell class) kodun yapısını hiç değiştirmeden — aynı sayıda satır, aynı mantık — anlama süresini saniyelerden milisaniyelere düşürür."
      },
      "bad": {
        "lang": "javascript",
        "code": "function getItems(data) {\n    const result = [];\n    for (const row of data) {\n        if (row[3] === 2) {\n            result.push(row);\n        }\n    }\n    return result;\n}",
        "why": {
          "en": "What is `data`? What is `row[3]` the index of? What does `2` represent? Everything is implicit. You need prior knowledge about the software to understand this code.",
          "tr": "`data` ne? `row[3]` neyin indeksi? `2` ne durumu temsil ediyor? Her şey örtük. Kodu anlayabilmek için yazılım hakkında önceden bilgi sahibi olmanız gerekiyor."
        }
      },
      "good": {
        "lang": "javascript",
        "code": "const ORDER_STATUS_SHIPPED = 2;\n\nfunction getShippedOrders(allOrders) {\n    return allOrders.filter(\n        order => order.status === ORDER_STATUS_SHIPPED\n    );\n}",
        "why": {
          "en": "The same logic reads as a statement of intent: filter orders whose status is SHIPPED.",
          "tr": "Aynı mantık bir niyet cümlesi gibi okunur: durumu SHIPPED olan siparişleri filtrele."
        }
      },
      "tip": {
        "en": "If you see magic numbers or index-based array access in your code, that's a refactoring opportunity. Step one: name the constants. Step two: convert arrays to objects with meaningful fields. Without changing the structure, naming alone can multiply readability.",
        "tr": "Kodunuzda sihirli sayılar (magic numbers) veya indekslerle erişilen diziler görüyorsanız, bu bir refactoring fırsatıdır. İlk adım: sabitleri adlandırın. İkinci adım: dizileri anlamlı alanları olan nesnelere (objects) dönüştürün. Kodun yapısını değiştirmeden, sadece isimlendirmeyle okunabilirliği katlayabilirsiniz."
      }
    },
    {
      "id": "avoid-disinformation",
      "kind": "code",
      "title": {
        "en": "Avoid Disinformation",
        "tr": "Yanlış Bilgi Vermekten Kaçınma (Avoid Disinformation)"
      },
      "summary": {
        "en": "Avoid Disinformation is a principle stating that variable or function names should not mislead the reader. A name's established technical meaning should not conflict with your intended use. For example, appending `list` to a variable name implies it's actually a `List` data structure. Similarly, abbreviations like `hp` evoke Unix platforms.",
        "tr": "Yanlış bilgi vermekten kaçınma (Avoid Disinformation), değişken veya fonksiyon isimlerinin okuyucuyu yanlış yönlendirmemesi gerektiğini söyleyen bir ilkedir. Bir ismin yerleşik teknik anlamı, kendi kullanım amacınızla çelişmemelidir. Örneğin, bir değişkene `list` kelimesini eklemek, onu gerçekten bir `List` veri yapısı sanmaya yol açar. Aynı şekilde, `hp` gibi bir kısaltma Unix platformu çağrışımı yapar."
      },
      "bad": {
        "lang": "typescript",
        "code": "// TypeScript\ninterface UserData {\n    userList: Set<User>;        // Set ama adı \"List\"!\n    hp: number;                  // hit points? horsepower? homepage?\n    accountArray: Map<string, Account>;  // Map ama adı \"Array\"!\n}\n\nfunction controllerList(req: Request) {  // Bu bir liste değil, bir handler!\n    // ...\n}",
        "why": {
          "en": "`userList` is actually a `Set`, `accountArray` is actually a `Map`. `hp` is an ambiguous abbreviation. `controllerList` is not a list, it's a handler function. Every name misleads the reader.",
          "tr": "`userList` aslında bir `Set`, `accountArray` aslında bir `Map`. `hp` belirsiz bir kısaltma. `controllerList` bir liste değil, bir handler fonksiyonu. Her isim okuyucuyu yanlış yönlendiriyor."
        }
      },
      "good": {
        "lang": "typescript",
        "code": "// TypeScript\ninterface UserData {\n    uniqueUsers: Set<User>;\n    hitPoints: number;\n    accountsByCode: Map<string, Account>;\n}\n\nfunction handleUserRequest(req: Request) {\n    // ...\n}",
        "why": {
          "en": "Each name states the true kind (Set, Map, number) and the real role, so nothing misleads the reader.",
          "tr": "Her isim gerçek türü (Set, Map, sayı) ve gerçek rolü belirtir; böylece hiçbir şey okuyucuyu yanıltmaz."
        }
      },
      "tip": {
        "en": "Apply these two rules when naming: (1) Don't embed a data structure type in the name — when the actual type changes, the name becomes misleading. `accounts` is always safer than `accountList`. (2) Only use abbreviations after verifying they don't have established meanings in the industry.",
        "tr": "İsimlendirirken şu iki kuralı uygulayın: (1) İsme bir veri yapısı tipi eklemeyin — gerçek tip değiştiğinde isim yanıltıcı olur. `accounts` demek, `accountList` demekten her zaman daha güvenlidir. (2) Kısaltmaları, sektörde yerleşik anlamları olmadığından emin olduktan sonra kullanın."
      }
    }
  ]
});
