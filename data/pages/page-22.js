window.PAGE({
  "id": "page-22",
  "page": 22,
  "pdf_page": 53,
  "chapter": {
    "num": 2,
    "en": "Meaningful Names",
    "tr": "Anlamlı İsimler"
  },
  "section": {
    "en": "Use Pronounceable Names (cont.) / Use Searchable Names",
    "tr": "Telaffuz Edilebilir İsimler Kullanın (devam) / Aranabilir İsimler Kullanın"
  },
  "title": {
    "en": "Pronounceable Names (cont.) & Use Searchable Names",
    "tr": "Telaffuz Edilebilir İsimler (devam) & Aranabilir İsimler Kullanın"
  },
  "blocks": [
    {
      "type": "para",
      "sentences": [
        {
          "en": "If you can’t pronounce it, you can’t discuss it without sounding like an idiot. “Well, over here on the <code>bee-zee-six-tee-four-aitch-tee-em-ell</code> we have a <code>see-gee-tee-eye-en-gee-ess-tee-em-pee</code>...” This matters because programming is a social activity.",
          "tr": "Eğer bir ismi telaffuz edemiyorsanız, bir aptal gibi görünmeden onun hakkında tartışamazsınız. \"Şey, buradaki <code>bee-zee-six-tee-four-aitch-tee-em-ell</code> üzerinde bir <code>see-gee-tee-eye-en-gee-ess-tee-em-pee</code>'miz var...\" Bu önemlidir çünkü programlama sosyal bir aktivitedir.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "There is a company I know that has <code>genymdhms</code> (generation date, year, month, day, hour, minute, second) so they walked around saying “jen-y-mudd-hums.” They had an annoying habit of creating and using nonpronounceable names. When new developers came in, they had to be taught these “nonsense words,” and then they would use them in discussions. This felt silly. We were using words to explain the meaning of the words that were supposed to be the explanation.",
          "tr": "Bildiğim bir şirkette <code>genymdhms</code> (üretim tarihi, yıl, ay, gün, saat, dakika, saniye - generation date, year, month, day, hour, minute, second) isimlendirmesi vardı ve ortalıkta \"jen-y-mudd-hums\" diyerek dolaşıyorlardı. Telaffuz edilemeyen isimler yaratma ve kullanma gibi sinir bozucu bir alışkanlıkları vardı. Yeni geliştiriciler geldiğinde, onlara bu \"saçma kelimeler\" (nonsense words) öğretilmek zorundaydı ve sonra tartışmalarda bunları kullanıyorlardı. Bu saçmaydı. Açıklama olması beklenen kelimelerin anlamını açıklamak için başka kelimeler kullanıyorduk.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Compare:",
          "tr": "Şu iki örneği karşılaştırın:",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "// KÖTÜ / BAD\nclass DtaRcrd102 {\n    private Date genymdhms;\n    private Date modymdhms;\n    private final String pszqint = \"102\";\n    /* ... */\n};\n\n// İYİ / GOOD\nclass Customer {\n    private Date generationTimestamp;\n    private Date modificationTimestamp;\n    private final String recordId = \"102\";\n    /* ... */\n};"
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Use Searchable Names",
      "tr": "Aranabilir İsimler Kullanın / Use Searchable Names",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Single-letter names and numeric constants have a particular problem in that they are not easy to locate across a body of text.",
          "tr": "Tek harfli isimler ve sayısal sabitler (numeric constants), bir metin bloğu içinde kolayca bulunamadıkları için özel bir sorun teşkil ederler.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "One might easily grep for <code>MAX_CLASSES_PER_STUDENT</code>, but the number <code>7</code> could be more troublesome. Searches may turn up the digit as part of file names, other constant definitions, and in various expressions where the value is used with different intent. It is even worse when a constant is a long number and someone might have miscopied it, creating a bug while simultaneously evading the programmer’s search.",
          "tr": "<code>MAX_CLASSES_PER_STUDENT</code> ismi kolayca aranabilir (grep), ancak <code>7</code> rakamı çok daha zahmetli olabilir. Aramalar, rakamı dosya adlarının bir parçası olarak, diğer sabit tanımlarında ve değerin farklı bir amaçla kullanıldığı çeşitli ifadelerde karşınıza çıkarabilir. Sabit (constant) uzun bir sayı olduğunda ve birisi onu yanlış kopyaladığında, hem bir hata (bug) yaratıp hem de programcının aramasından kaçtığında durum daha da kötüleşir.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Likewise, the name <code>e</code> is a poor choice for any variable for which a programmer might need to search. It is the most common letter in the English language and likely to show up in every passage of text in every program. In this regard, longer names trump shorter names, and any searchable name trumps a constant in code.",
          "tr": "Aynı şekilde, <code>e</code> ismi, bir programcının araması gerekebilecek herhangi bir değişken için kötü bir seçimdir. İngilizce dilindeki en yaygın harftir ve her programın neredeyse her metin pasajında görünmesi muhtemeldir. Bu bakımdan, uzun isimler kısa isimlerden üstündür ve herhangi bir aranabilir isim (searchable name), koddaki bir sabite (constant) üstün gelir.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "My personal preference is that single-letter names can ONLY be used as local variables inside short methods. <em>The length of a name should correspond to its scope</em> [N5]. If a variable or constant is used in many places in a code base, it is imperative to give it a search-friendly name.",
          "tr": "Benim kişisel tercihim, tek harfli isimlerin YALNIZCA kısa metotlar içindeki yerel değişkenler için kullanılmasıdır. <em>Bir ismin uzunluğu kapsamıyla (scope) orantılı olmalıdır</em> [N5]. Bir değişken veya sabit kod tabanının birçok yerinde kullanılıyorsa, ona arama dostu bir isim vermek zorunludur.",
          "html": true
        }
      ]
    }
  ],
  "concepts": [
    {
      "id": "pronounceable",
      "kind": "code",
      "title": {
        "en": "Pronounceable Names",
        "tr": "Telaffuz Edilebilir İsimler (Pronounceable Names)"
      },
      "summary": {
        "en": "Names should be pronounceable in team communication. Unpronounceable abbreviations turn code comprehension into a puzzle and make discussions difficult.",
        "tr": "İsimler, ekip içi iletişimde sesli olarak söylenebilir olmalıdır. Telaffuz edilemeyen kısaltmalar, kodun anlaşılmasını bir bulmacaya dönüştürür ve tartışmaları zorlaştırır."
      },
      "bad": {
        "lang": "java",
        "code": "class UsrLgnInf {\n    private String loginId;\n    private long tmstmp;\n    // \"Yuser-ligin-inf'teki tim-stimp'i kontrol et\"\n}",
        "why": {
          "en": "Every name is an abbreviation puzzle (UsrLgnInf, tmstmp), so even reading it aloud requires decoding.",
          "tr": "Her isim bir kısaltma bulmacası (UsrLgnInf, tmstmp); sesli okumak bile deşifre gerektirir."
        }
      },
      "good": {
        "lang": "java",
        "code": "class UserLogin {\n    private String userId;\n    private long loginTimestamp;\n    // \"User login'deki login timestamp'i kontrol et\"\n}",
        "why": {
          "en": "UserLogin and loginTimestamp read as natural language, so talking about the code is easy.",
          "tr": "UserLogin ve loginTimestamp doğal dil gibi okunur; kod hakkında konuşmak kolaylaşır."
        }
      },
      "tip": {
        "en": "If a name sounds silly when read aloud or if you have to spell it out, fix that name.",
        "tr": "Eğer bir ismi sesli okuduğunuzda kulağa saçma geliyorsa veya hecelemek zorunda kalıyorsanız, o ismi düzeltin."
      }
    },
    {
      "id": "searchable",
      "kind": "code",
      "title": {
        "en": "Searchable Names",
        "tr": "Aranabilir İsimler (Searchable Names)"
      },
      "summary": {
        "en": "Numeric constants and single-letter names are difficult to search for in a codebase. Giving constants meaningful names both expresses your intent and allows you to find that value throughout the project when needed.",
        "tr": "Sayısal sabitler ve tek harfli isimler kod tabanında aranması (search) zor olan yapılardır. Sabitlere anlamlı isimler vermek, hem niyetinizi belirtir hem de gerektiğinde o değeri tüm projede bulmanızı sağlar."
      },
      "bad": {
        "lang": "java",
        "code": "if (userStatus == 1) {\n    // 1 ne anlama geliyor? \n    // Projede \"1\" aratırsanız binlerce sonuç çıkar.\n}",
        "why": {
          "en": "`1` reveals nothing and cannot be searched — thousands of hits, no meaning.",
          "tr": "`1` hiçbir şey anlatmaz ve aranamaz — binlerce sonuç, hiçbir anlam."
        }
      },
      "good": {
        "lang": "java",
        "code": "const int STATUS_ACTIVE = 1;\n\nif (userStatus == STATUS_ACTIVE) {\n    // Niyet belli, \"STATUS_ACTIVE\" aranabilir.\n}",
        "why": {
          "en": "STATUS_ACTIVE both states its meaning and is findable across the project.",
          "tr": "STATUS_ACTIVE hem anlamını söyler hem proje genelinde aranabilir."
        }
      },
      "tip": {
        "en": "Make it a habit to convert any number in your code (including those other than 0 and 1) into a named constant.",
        "tr": "Kodunuzdaki herhangi bir sayıyı (0 ve 1 dışındakiler dahil) isimlendirilmiş bir sabite dönüştürmeyi alışkanlık haline getirin."
      }
    },
    {
      "id": "scope-rule",
      "kind": "tradeoff",
      "title": {
        "en": "Scope Rule",
        "tr": "Kapsam İlkesi (Scope Rule)"
      },
      "summary": {
        "en": "The length of a name should correspond to the size of its scope. Local variables with a short lifespan and small scope can be short, but global or wide-scope elements must be descriptive and searchable.",
        "tr": "Bir ismin uzunluğu, o ismin geçerli olduğu kapsamın (scope) boyutuyla doğru orantılı olmalıdır. Kısa ömürlü ve küçük kapsamlı yerel değişkenler kısa olabilir, ancak küresel veya geniş kapsamlı öğeler mutlaka açıklayıcı ve aranabilir olmalıdır."
      },
      "options": [
        {
          "name": {
            "en": "Short name — narrow scope",
            "tr": "Kısa isim — dar kapsam"
          },
          "gains": {
            "en": "Concise and quick to read where the scope is small (e.g. a loop counter living a few lines).",
            "tr": "Kapsam küçükken (ör. birkaç satırda yaşayan döngü sayacı) kısa ve çabuk okunur."
          },
          "costs": {
            "en": "Useless when the scope is wide: it cannot be searched and communicates nothing.",
            "tr": "Kapsam genişken işe yaramaz: aranamaz ve hiçbir şey anlatmaz."
          }
        },
        {
          "name": {
            "en": "Descriptive name — wide scope",
            "tr": "Açıklayıcı isim — geniş kapsam"
          },
          "gains": {
            "en": "Searchable and self-explanatory for members used across a class.",
            "tr": "Sınıf genelinde kullanılan üyeler için aranabilir ve kendini açıklar."
          },
          "costs": {
            "en": "Longer to type and read; overkill for a three-line local scope.",
            "tr": "Yazması ve okuması uzun; üç satırlık yerel bir kapsam için fazladır."
          }
        }
      ],
      "tip": {
        "en": "If a variable is used in an area of more than 50 lines, do not give it a single-letter or 3-letter name.",
        "tr": "Eğer bir değişken 50 satırdan fazla bir alanda kullanılıyorsa, ona tek harfli veya 3 harfli bir isim vermeyin."
      }
    }
  ]
});
