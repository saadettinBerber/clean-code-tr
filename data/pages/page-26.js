window.PAGE({
  "id": "page-26",
  "page": 26,
  "pdf_page": 57,
  "chapter": {
    "num": 2,
    "en": "Meaningful Names",
    "tr": "Anlamlı İsimler"
  },
  "section": {
    "en": "Don't Be Cute / Pick One Word per Concept / Don't Pun",
    "tr": "Şirinlik Yapmayın / Her Kavram İçin Tek Kelime Seçin / Kelime Oyunlarından Kaçının"
  },
  "title": {
    "en": "Don't Be Cute, Pick One Word per Concept, Don't Pun",
    "tr": "Şirinlik Yapmayın, Her Kavram İçin Tek Kelime Seçin, Kelime Oyunlarından Kaçının"
  },
  "blocks": [
    {
      "type": "heading",
      "level": 1,
      "en": "Don't Be Cute",
      "tr": "Şirinlik Yapmayın / Don't Be Cute",
      "html": true
    },
    {
      "type": "image",
      "src": "imageFile1.png"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "If names are too clever, they will be memorable only to people who share the author’s sense of humor, and only as long as these people remember the joke. Will they know that the function named <code>HolyHandGrenade</code> is supposed to be the one you call to delete items? Funny, maybe, but maybe <code>DeleteItems</code> is better. Choose clarity over cleverness.",
          "tr": "Eğer isimler çok zekiceyse, sadece yazarın mizah anlayışını paylaşanlar tarafından ve sadece mizahı hatırladıkları sürece hatırlanacaktır. <code>HolyHandGrenade</code> (Kutsal El Bombası) isminin bir öğeyi silmek için kullanıldığını kim bilebilir? Belki komiktir, ama belki <code>DeleteItems</code> daha iyidir. Mizah yerine açıklığı (clarity) tercih edin.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Cuteness in code often appears in the form of colloquialisms or slang. For example, don’t use <code>whack()</code> to mean <code>kill()</code>. Don’t tell little culture-dependent jokes like <code>eatMyShorts()</code> to mean <code>abort()</code>. Say what you mean. Mean what you say.",
          "tr": "Kodda şirinlik (cuteness) genellikle argo veya deyim kullanımı şeklinde karşımıza çıkar. Örneğin, <code>kill()</code> yerine <code>whack()</code> (tokatlamak/vurmak) veya <code>abort()</code> yerine <code>eatMyShorts()</code> (beni ye/boşver) gibi ifadeler kullanmayın. \"Ne demek istiyorsanız onu söyleyin. Ne söylüyorsanız onu kast edin.\" (Say what you mean. Mean what you say.)",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Pick One Word per Concept",
      "tr": "Her Kavram İçin Tek Kelime Seçin / Pick One Word per Concept",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Pick one word for one abstract concept and stick to it. For instance, it’s confusing to have <code>fetch</code>, <code>retrieve</code>, and <code>get</code> as equivalent methods of different classes. How do you remember which method name goes with which class?",
          "tr": "Soyut bir kavram için tek bir kelime seçin ve ona bağlı kalın. Örneğin, farklı sınıflarda eşdeğer metotlar için <code>fetch</code>, <code>retrieve</code> ve <code>get</code> kelimelerinin bir arada kullanılması kafa karıştırıcıdır. Hangi sınıfta hangi ismin kullanıldığını nasıl hatırlayacaksınız?",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "A consistent lexicon is a great boon to the programmers who must use your code. You might have a <code>DeviceManager</code>, a <code>ProtocolController</code>, and a <code>Driver</code> in the same project. Why not use the same word (e.g., Controller or Manager) for similar concepts?",
          "tr": "Tutarlı bir sözlük (consistent lexicon), o kodu kullanan programcılar için büyük bir nimettir. <code>DeviceManager</code>, <code>ProtocolController</code> ve <code>Driver</code> gibi isimleri aynı projede karmaşık bir şekilde kullanmak yerine, kavramsal olarak benzer yapılar için aynı kelime grubunu (örneğin hep Controller veya hep Manager) tercih etmelisiniz.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Don't Pun",
      "tr": "Kelime Oyunlarından Kaçının / Don't Pun",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Avoid using the same word for two different purposes. Using the same word for two different ideas is essentially a pun. If you follow the \"one word per concept\" rule, you could end up with many classes that have, for example, an <code>add</code> method. As long as those methods are consistent (e.g., they all perform math addition), there's no problem.",
          "tr": "Aynı kelimeyi iki farklı amaç için kullanmaktan kaçının. Aynı kelimeyi farklı iki fikir için kullanmak, esasen bir kelime oyunudur (pun). Eğer \"tek kelime, tek kavram\" kuralına uyarsanız, birçok sınıfta örneğin <code>add</code> metodu olabilir. Bu metotlar tutarlı olduğu sürece sorun yoktur (örneğin hepsi yeni bir değer oluşturmak için iki değeri topluyorsa).",
          "html": true
        }
      ]
    }
  ],
  "concepts": [
    {
      "id": "dont-be-cute",
      "kind": "code",
      "title": {
        "en": "Don't Be Cute",
        "tr": "Şirinlik Yapmayın (Don't Be Cute)"
      },
      "summary": {
        "en": "Using clever or humorous names while coding might be tempting, but these names don't clearly state your intent. Professional code should be understandable by everyone without depending on the author's sense of humor. Choose clarity and simplicity over cuteness and displays of cleverness.",
        "tr": "Kod yazarken zekice veya mizahi isimler kullanmak cazip gelebilir, ancak bu isimler niyetinizi açıkça belirtmez. Profesyonel kod, yazarın mizah anlayışına bağlı kalmadan herkes tarafından anlaşılabilmelidir. Şirinlik ve zeka gösterisi yerine netlik ve sadeliği tercih edin."
      },
      "bad": {
        "lang": "java",
        "code": "// Bir işlemi sonlandırmak için şirinlik yapılmış\npublic void whack() {\n    // ...\n}\n\n// Bir hata durumunda durdurmak için deyim kullanılmış\npublic void eatMyShorts() {\n    System.exit(1);\n}",
        "why": {
          "en": "To understand what names like `whack` or `eatMyShorts` do, one would need to dive into the code or ask the author. This reduces code readability.",
          "tr": "`whack` veya `eatMyShorts` gibi isimlerin ne işe yaradığını anlamak için kodun içine girmek veya yazara sormak gerekir. Bu, kodun okunabilirliğini düşürür."
        }
      },
      "good": {
        "lang": "java",
        "code": "public void kill() {\n    // ...\n}\n\npublic void abort() {\n    System.exit(1);\n}",
        "why": {
          "en": "kill and abort say exactly what they do, no jargon or punchline required.",
          "tr": "kill ve abort tam olarak ne yaptıklarını söyler; argo ya da espri gerekmez."
        }
      },
      "tip": {
        "en": "Don't forget the principle: \"Say what you mean. Mean what you say.\" Your code is not a literary work or a joke book; it is a communication tool.",
        "tr": "\"Say what you mean. Mean what you say.\" (Ne demek istiyorsan onu söyle. Ne söylüyorsan onu kast et.) İlkesini unutmayın. Kodunuz bir edebiyat eseri veya şaka defteri değil, bir iletişim aracıdır."
      }
    },
    {
      "id": "one-word-per-concept",
      "kind": "code",
      "title": {
        "en": "Pick One Word per Concept",
        "tr": "Her Kavram İçin Tek Kelime Seçin (Pick One Word per Concept)"
      },
      "summary": {
        "en": "Using different words for the same abstract operation in different classes (e.g., `fetch` in one place, `get` in another) is confusing. Create consistent terminology (lexicon) throughout the project. If you chose the word `get` to \"retrieve\" data, use it everywhere.",
        "tr": "Aynı soyut işlem için farklı sınıflarda farklı kelimeler kullanmak (örn: bir yerde `fetch`, diğerinde `get`) kafa karıştırıcıdır. Proje genelinde tutarlı bir terminoloji (lexicon) oluşturun. Eğer bir veriyi \"getirmek\" için `get` kelimesini seçtiyseniz, her yerde onu kullanın."
      },
      "bad": {
        "lang": "java",
        "code": "class UserStore {\n    public User fetchUser(int id) { ... }\n}\n\nclass ProductRepository {\n    public Product getProduct(int id) { ... }\n}\n\nclass OrderService {\n    public Order retrieveOrder(int id) { ... }\n}",
        "why": {
          "en": "When the user wants to call these methods, they have to memorize which class uses `fetch` and which uses `retrieve`. This increases the mental burden.",
          "tr": "Kullanıcı bu metotları çağırmak istediğinde, hangi sınıfın `fetch`, hangisinin `retrieve` kullandığını ezberlemek zorunda kalır. Bu durum zihinsel yükü artırır."
        }
      },
      "good": {
        "lang": "java",
        "code": "class UserStore {\n    public User getById(int id) { ... }\n}\n\nclass ProductRepository {\n    public Product getById(int id) { ... }\n}\n\nclass OrderService {\n    public Order getById(int id) { ... }\n}",
        "why": {
          "en": "Every store uses getById, so one mental rule covers the whole codebase.",
          "tr": "Her mağaza getById kullanır; tek bir zihinsel kural tüm kod tabanını kapsar."
        }
      },
      "tip": {
        "en": "It is helpful to create a glossary at the beginning of the project. Decisions like \"We will use 'get' to fetch data\" or \"We will use 'save' to save data\" increase predictability throughout the code.",
        "tr": "Projenin başında bir terim sözlüğü oluşturmak faydalıdır. \"Veri çekmek için 'get' kullanacağız\", \"Veriyi kaydetmek için 'save' kullanacağız\" gibi kararlar, kodun bütününde tahmin edilebilirliği artırır."
      }
    },
    {
      "id": "dont-pun",
      "kind": "code",
      "title": {
        "en": "Don't Pun",
        "tr": "Kelime Oyunlarından Kaçının (Don't Pun)"
      },
      "summary": {
        "en": "Using the same word for two different concepts is a \"pun\" and misleads the reader. For example, if you use the name `add` to insert an element into a list, but elsewhere you use the same word for \"mathematical addition\" (if the semantic difference is large), it creates confusion.",
        "tr": "Aynı kelimeyi iki farklı kavram için kullanmak bir \"kelime oyunu\"dur ve okuyucuyu yanıltır. Örneğin, bir listede eleman eklemek için `add` ismini kullanıyorsanız, ancak başka bir yerde bu kelimeyi \"iki sayıyı toplamak\" için kullanıyorsanız (anlamsal fark büyükse), bu bir karmaşadır."
      },
      "bad": {
        "lang": "java",
        "code": "// Senaryo 1: Koleksiyona eleman eklemek\npublic void add(Element e) {\n    list.add(e);\n}\n\n// Senaryo 2: İki değeri toplamak (Pun riski)\npublic int add(int a, int b) {\n    return a + b;\n}\n\n// Senaryo 3: Ekrana yazı yazdırmak için \"eklemek\" (Pun)\npublic void add(String message) {\n    console.println(message);\n}",
        "why": {
          "en": "Here, the word `add` is used for three different purposes. In Scenario 3, the intent is not to \"add something somewhere\" but actually to \"print\" it.",
          "tr": "Burada `add` kelimesi üç farklı amaçla kullanılmıştır. Senaryo 3'te bir şeyleri \"bir yere eklemek\" değil, aslında \"yazdırmak\" kastedilmektedir."
        }
      },
      "good": {
        "lang": "java",
        "code": "public void append(Element e) { ... }\npublic int calculateSum(int a, int b) { ... }\npublic void displayMessage(String message) { ... }",
        "why": {
          "en": "append, calculateSum, displayMessage each get one concept, so no pun remains.",
          "tr": "append, calculateSum, displayMessage her biri tek bir kavram alır; kelime oyunu kalmaz."
        }
      },
      "tip": {
        "en": "When choosing a name, ask \"Is this name used elsewhere for a completely different operation?\" If the reader looks at the name and wonders \"Which meaning is intended here?\", you've made a pun.",
        "tr": "Bir ismi seçerken \"Bu isim başka bir yerde tamamen farklı bir işlem için kullanılıyor mu?\" diye sorun. Eğer okuyucu isme bakıp \"Buradaki anlamı hangisi?\" diye düşünüyorsa, bir kelime oyunu yapmışsınız demektir."
      }
    }
  ]
});
