window.PAGE({
  "id": "page-75",
  "page": 75,
  "pdf_page": 106,
  "chapter": {
    "num": 5,
    "en": "Formatting",
    "tr": "Biçimlendirme"
  },
  "section": {
    "en": "Introduction",
    "tr": "Giriş"
  },
  "title": {
    "en": "Formatting — Introduction",
    "tr": "Biçimlendirme — Giriş"
  },
  "blocks": [
    {
      "type": "chapter",
      "num": 5,
      "en": "Formatting",
      "tr": "Biçimlendirme (Formatting)"
    },
    {
      "type": "image",
      "src": "imageFile1.png"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "When people look under the hood, we want them to be impressed with the neatness, consistency, and attention to detail that they perceive.",
          "tr": "İnsanlar kaputun altına baktıklarında, gördükleri düzgünlük, tutarlılık ve detaylara dikkat (Attention to Detail) karşısında etkilenmelerini isteriz."
        },
        {
          "en": "We want them to be struck by the orderliness.",
          "tr": "Bu düzenlilik karşısında adeta çarpılmalarını isteriz."
        },
        {
          "en": "We want their eyebrows to rise as they scroll through the modules.",
          "tr": "Modüller arasında gezinirken kaşlarının havaya kalkmasını isteriz."
        },
        {
          "en": "We want them to perceive that professionals have been at work.",
          "tr": "Burada profesyonellerin çalışmış olduğunu fark etmelerini isteriz."
        },
        {
          "en": "If instead they see a scrambled mass of code that looks like it was written by a bevy of drunken sailors, then they are likely to conclude that the same inattention to detail pervades every other aspect of the project.",
          "tr": "Bunun yerine, bir sürü sarhoş denizci tarafından yazılmış izlenimi veren karmakarışık bir kod yığınıyla karşılaşırlarsa, aynı detay özensizliğinin projenin diğer her yönüne de sinmiş olduğu sonucuna varmaları çok muhtemeldir."
        }
      ]
    }
  ],
  "concepts": [
    {
      "id": "formatting-is-communication",
      "title": {
        "en": "Formatting Is Communication",
        "tr": "Biçimlendirme Bir İletişimdir (Formatting Is Communication)"
      },
      "summary": {
        "en": "Layout is the first thing a reader sees — before a single identifier is read. Code whose braces, indentation, and blank lines are scattered at random forces the reader to decode the shape of the code before they can even begin to follow its logic. Formatting is not decoration; it is the channel through which a professional developer communicates.",
        "tr": "Yerleşim, okuyucunun gördüğü ilk şeydir — daha tek bir tanımlayıcı bile okunmadan önce. Süslü parantezleri, girintileri ve boş satırları rastgele dağılmış bir kod, okuyucuyu mantığı izlemeye başlamadan önce kodun şeklini çözmeye zorlar. Biçimlendirme (Formatting) bir süsleme değildir; profesyonel bir geliştiricinin iletişim kurduğu kanaldır."
      },
      "bad": {
        "lang": "java",
        "code": "public class OrderService{\n  private Repo repo;public OrderService(Repo r){repo=r;}\n    public double total(List<Item> items){double sum=0;\n  for(Item i:items){sum+=i.price()*i.count();}\n        return sum;}\n}",
        "why": {
          "en": "The class compiles and behaves correctly, yet nothing about its layout helps. The constructor hides on the same line as a field, the indentation shifts on every line, and there is not a single blank line separating one responsibility from the next. The reader must first untangle the shape before they can read the meaning.",
          "tr": "Sınıf derlenir ve doğru çalışır, ama yerleşiminin hiçbir yanı yardımcı olmaz. Kurucu (constructor) bir alanla aynı satıra saklanmış, girinti her satırda kayıyor ve bir sorumluluğu diğerinden ayıran tek bir boş satır bile yok. Okuyucu, anlamı okuyabilmek için önce şekli çözmek zorunda kalıyor."
        }
      },
      "good": {
        "lang": "java",
        "code": "public class OrderService {\n\n  private final Repo repo;\n\n  public OrderService(Repo repo) {\n    this.repo = repo;\n  }\n\n  public double total(List<Item> items) {\n    double sum = 0;\n    for (Item item : items) {\n      sum += item.price() * item.count();\n    }\n    return sum;\n  }\n}",
        "why": {
          "en": "The same code and the same behavior — but now the structure is visible at a glance. Blank lines separate the field, the constructor, and the behavior into three thoughts, and a single indentation rule lets the eye travel down the page without stumbling.",
          "tr": "Aynı kod, aynı davranış — ama artık yapı bir bakışta görünüyor. Boş satırlar alanı, kurucuyu (constructor) ve davranışı üç ayrı düşünceye ayırıyor; tek bir girinti kuralı ise gözün sayfada takılmadan aşağı inmesini sağlıyor."
        }
      },
      "tip": {
        "en": "Before you claim a module is finished, look at it from a distance and squint. If its shape alone does not tell you where one idea ends and the next begins, the formatting is still doing no work for you.",
        "tr": "Bir modülü bitti saymadan önce ona uzaktan ve gözlerinizi kısarak bakın. Yalnızca şekli bile size bir fikrin nerede bitip diğerinin nerede başladığını söylemiyorsa, biçimlendirme sizin için hâlâ hiçbir iş yapmıyor demektir."
      }
    },
    {
      "id": "consistency-over-taste",
      "title": {
        "en": "Consistency Over Personal Taste",
        "tr": "Tutarlılık, Kişisel Zevkten Önce Gelir (Consistency Over Personal Taste)"
      },
      "summary": {
        "en": "Readers do not judge whether your style is the best one; they judge whether it is the same one everywhere. Every switch of quoting style, indentation width, or function form costs the reader a small moment of reorientation, and those moments add up across a file. A team's agreed style, applied without exception, beats every developer's favorite style applied selectively.",
        "tr": "Okuyucular stilinizin en iyisi olup olmadığını değil, her yerde aynı olup olmadığını değerlendirir. Tırnak stilindeki, girinti genişliğindeki ya da fonksiyon biçimindeki her değişiklik okuyucuya küçük bir yeniden yönelme anına mal olur ve bu anlar bir dosya boyunca birikir. Ekibin üzerinde anlaştığı ve istisnasız uygulanan bir stil, her geliştiricinin seçmeli olarak uyguladığı favori stilinden daha iyidir."
      },
      "bad": {
        "lang": "javascript",
        "code": "function loadUser(id){\n    return fetch(\"/api/users/\" + id)\n  .then(r => r.json())\n        .then(function (user) {\n      return user;\n        })\n}\n\nconst save = (u) => { return fetch('/api/users/'+u.id,{method:\"PUT\",body:JSON.stringify(u)}) }",
        "why": {
          "en": "Two functions, two different quoting styles, two different ways of writing a function, and an indentation that changes on nearly every line. Nothing here is wrong in itself, but together they tell the reader that no one is minding the shop.",
          "tr": "İki fonksiyon, iki farklı tırnak stili, fonksiyon yazmanın iki farklı yolu ve neredeyse her satırda değişen bir girinti. Bunların hiçbiri tek başına yanlış değil; ama bir arada okuyucuya kimsenin dükkânla ilgilenmediğini söylüyorlar."
        }
      },
      "good": {
        "lang": "javascript",
        "code": "function loadUser(id) {\n  return fetch(`/api/users/${id}`).then((response) => response.json());\n}\n\nfunction saveUser(user) {\n  return fetch(`/api/users/${user.id}`, {\n    method: \"PUT\",\n    body: JSON.stringify(user),\n  });\n}",
        "why": {
          "en": "One indentation width, one quoting convention, one way of declaring a function. The reader learns the rules once in the first three lines and then never has to think about them again for the rest of the file.",
          "tr": "Tek bir girinti genişliği, tek bir tırnak kuralı, fonksiyon tanımlamanın tek bir yolu. Okuyucu kuralları ilk üç satırda bir kez öğrenir ve dosyanın geri kalanında bir daha onları düşünmek zorunda kalmaz."
        }
      },
      "tip": {
        "en": "Do not argue about style in code review; argue about it once, write the decision into a formatter configuration, and let the tool apply it on every save. A rule that a machine enforces is the only rule a team never quietly abandons.",
        "tr": "Kod incelemesinde stil tartışmayın; bir kez tartışın, kararı bir biçimlendirici (formatter) yapılandırmasına yazın ve aracın her kayıtta uygulamasına izin verin. Bir makinenin dayattığı kural, bir ekibin sessizce terk etmediği tek kuraldır."
      }
    },
    {
      "id": "attention-to-detail",
      "title": {
        "en": "Attention to Detail",
        "tr": "Detaylara Dikkat (Attention to Detail)"
      },
      "summary": {
        "en": "Stray spaces, ragged operators, and orphaned blank lines break nothing at all. That is exactly why they are dangerous: they are the visible trace of a developer who stopped caring, and the reader assumes the same carelessness runs through the parts of the project they cannot see.",
        "tr": "Başıboş boşluklar, düzensiz operatörler ve öksüz kalmış boş satırlar hiçbir şeyi bozmaz. Tehlikeli olmalarının sebebi tam da budur: bunlar önemsemeyi bırakmış bir geliştiricinin görünür izidir ve okuyucu, aynı özensizliğin projenin göremediği kısımlarında da sürdüğünü varsayar."
      },
      "bad": {
        "lang": "python",
        "code": "def report( sales,taxes ):\n    net=sales-taxes\n\n\n    rate = taxes/sales if sales else 0 \n    print( \"net:\",net )\n\n    return net,rate",
        "why": {
          "en": "Spaces padded inside the parentheses but missing after the commas, no spaces around the assignment, a trailing space at the end of one line, and two stray blank lines in the middle of a five-line function. Every one of these is harmless; all of them together say that nobody was paying attention here.",
          "tr": "Parantezlerin içine boşluk konmuş ama virgüllerden sonra konmamış, atama operatörünün etrafında boşluk yok, bir satırın sonunda takılı kalmış bir boşluk var ve beş satırlık bir fonksiyonun ortasında iki başıboş boş satır duruyor. Bunların her biri tek başına zararsızdır; hepsi bir arada ise burada kimsenin dikkat etmediğini söyler."
        }
      },
      "good": {
        "lang": "python",
        "code": "def report(sales, taxes):\n    net = sales - taxes\n    rate = taxes / sales if sales else 0\n    print(\"net:\", net)\n    return net, rate",
        "why": {
          "en": "The same five lines, the same result, but a single spacing rule applied everywhere. The function now reads as one uninterrupted thought, and the reader has one less reason to distrust the code around it.",
          "tr": "Aynı beş satır, aynı sonuç; ama her yerde uygulanan tek bir boşluk kuralı var. Fonksiyon artık kesintisiz tek bir düşünce gibi okunuyor ve okuyucunun çevresindeki koda güvenmemek için bir nedeni daha eksiliyor."
        }
      },
      "tip": {
        "en": "Turn on your editor's \"show whitespace\" and \"trim trailing whitespace on save\" settings today. Details you cannot see are details you will never fix.",
        "tr": "Düzenleyicinizin \"boşlukları göster\" ve \"kaydederken satır sonu boşluklarını temizle\" ayarlarını bugün açın. Göremediğiniz detaylar, asla düzeltmeyeceğiniz detaylardır."
      }
    }
  ]
});
