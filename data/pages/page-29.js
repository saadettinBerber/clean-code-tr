window.PAGE({
  "id": "page-29",
  "page": 29,
  "pdf_page": 60,
  "chapter": {
    "num": 2,
    "en": "Meaningful Names",
    "tr": "Anlamlı İsimler"
  },
  "section": {
    "en": "Don't Add Gratuitous Context",
    "tr": "Gereksiz Bağlam Eklemeyin"
  },
  "title": {
    "en": "Don't Add Gratuitous Context",
    "tr": "Gereksiz Bağlam Eklemeyin"
  },
  "blocks": [
    {
      "type": "code",
      "lang": "java",
      "code": "public class GuessStatisticsMessage {\n  private String number;\n  private String verb;\n  private String pluralModifier;\n\n  public String make(char candidate, int count) {\n    createPluralDependentMessageParts(count);\n    return String.format(\n      \"There %s %s %s%s\", \n      verb, number, candidate, pluralModifier );\n  }\n\n  private void createPluralDependentMessageParts(int count) {\n    if (count == 0) {\n      thereAreNoLetters();\n    } else if (count == 1) {\n      thereIsOneLetter();\n    } else {\n      thereAreManyLetters(count);\n    }\n  }\n\n  private void thereAreManyLetters(int count) {\n    number = Integer.toString(count);\n    verb = \"are\";\n    pluralModifier = \"s\";\n  }\n\n  private void thereIsOneLetter() {\n    number = \"1\";\n    verb = \"is\";\n    pluralModifier = \"\";\n  }\n\n  private void thereAreNoLetters() {\n    number = \"no\";\n    verb = \"are\";\n    pluralModifier = \"s\";\n  }\n}"
    },
    {
      "type": "caption",
      "kind": "listing",
      "tr": "Listing 2-2 - Değişkenlerin bir bağlamı vardır.",
      "en": "Listing 2-2 - Variables have a context."
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Don't Add Gratuitous Context",
      "tr": "Gereksiz Bağlam Eklemeyin / Don't Add Gratuitous Context",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "In an application called “Gas Station Deluxe,” it is a bad idea to prefix every class with <code>GSD</code>. Honestly, you are working against yourself. You type <code>G</code> and the autocomplete gives you a list of every class in the system. Is that helpful? Why make it hard for the IDE to help you?",
          "tr": "\"Gas Station Deluxe\" (Lüks Benzin İstasyonu) adlı bir uygulama için her sınıfa <code>GSD</code> öneki eklemek kötü bir fikirdir. Dürüst olmak gerekirse, kendinize karşı çalışıyorsunuz demektir. <code>G</code> yazarsınız ve otomatik tamamlama (autocomplete) size sistemdeki her sınıfın bir listesini verir. Bu yardımsever midir? Neden IDE'nin size yardım etmesini zorlaştırıyorsunuz?",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Similarly, say you used the name <code>Address</code> in the <code>GSDAccountAddress</code> class. That's a fine name for a mailing address. But if you wanted an address for customer accounts, you could call it <code>AccountAddress</code> or just <code>Address</code>. Smearing the application prefix GSD everywhere doesn't clarify context, it just creates noise.",
          "tr": "Benzer şekilde, <code>GSDAccountAddress</code> sınıfında <code>Address</code> ismini kullandığınızı varsayalım. Bu isim bir posta adresi için iyidir. Ancak müşteri hesapları için bir adres istiyorsanız, buna <code>AccountAddress</code> veya sadece <code>Address</code> diyebilirsiniz. Uygulamanın öneki olan GSD'yi her yere bulaştırmak bağlamı netleştirmez, sadece gürültü yaratır.",
          "html": true
        }
      ]
    }
  ],
  "concepts": [
    {
      "id": "gratuitous-context",
      "kind": "code",
      "title": {
        "en": "Gratuitous Context",
        "tr": "Gereksiz Bağlam (Gratuitous Context)"
      },
      "summary": {
        "en": "It is unnecessary to add context to a name that is already provided by the class or package it resides in. This only lengthens names and reduces readability. Especially adding project abbreviations to the beginning of every class makes the IDE's autocomplete features useless.",
        "tr": "Bir ismin zaten içinde bulunduğu sınıf veya paket tarafından sağlanan bağlamı isme tekrar eklemek gereksizdir. Bu sadece isimleri uzatır ve okunabilirliği azaltır. Özellikle proje kısaltmalarını her sınıfın başına eklemek, IDE'lerin otomatik kod tamamlama özelliklerini kullanışsız hale getirir."
      },
      "bad": {
        "lang": "java",
        "code": "// Proje adı: Mail System (MS)\npublic class MSUser {\n    private String msUserEmail;\n    private String msUserPassword;\n}",
        "why": {
          "en": "Here, the `MS` prefix at the beginning of both the class and variables adds no value. We already know we are working on the Mail System project.",
          "tr": "Burada hem sınıfın hem de değişkenlerin başındaki `MS` öneki hiçbir değer katmaz. Zaten Mail System projesinde çalıştığımızı biliyoruz."
        }
      },
      "good": {
        "lang": "java",
        "code": "public class User {\n    private String email;\n    private String password;\n}",
        "why": {
          "en": "User/email/password rely on the mail-system context already given by the class or package.",
          "tr": "User/email/password, sınıf ya da paketin zaten verdiği mail sistemi bağlamına güvenir."
        }
      },
      "tip": {
        "en": "Shorter names are generally better than longer ones, but only when sufficient context is provided. Instead of adding gratuitous context, check if the class or module containing the name provides that context.",
        "tr": "Kısa isimler genellikle uzun isimlerden daha iyidir, ancak sadece yeterli bağlam sağlandığında. Gereksiz bağlam eklemek yerine, ismin bulunduğu sınıfın veya modülün bu bağlamı sağlayıp sağlamadığını kontrol edin."
      }
    },
    {
      "id": "guess-stats",
      "kind": "explain",
      "title": {
        "en": "GuessStatisticsMessage Analysis",
        "tr": "GuessStatisticsMessage Analizi"
      },
      "summary": {
        "en": "The `GuessStatisticsMessage` class in Listing 2-2 knows how to put together the parts of a message (number, verb, suffix). The variables (number, verb, pluralModifier) have gained clear context by being defined at the class level. In this design, readability is improved by splitting each case (none, one, many) into separate methods. What the variables represent is clearly understood from the class name and where they are used.",
        "tr": "Listing 2-2'deki `GuessStatisticsMessage` sınıfı, bir mesajın parçalarını (sayı, fiil, ek) nasıl bir araya getireceğini bilir. Değişkenler (number, verb, pluralModifier) sınıf düzeyinde tanımlanarak net bir bağlam kazanmıştır. Bu tasarımda, her bir durum (hiç yok, bir tane, çok tane) ayrı metotlara bölünerek kodun okunabilirliği artırılmıştır. Değişkenlerin neyi temsil ettiği, sınıfın adından ve kullanım yerinden açıkça anlaşılmaktadır."
      },
      "tip": {
        "en": "If a group of variables is constantly used together and needs context, gathering them inside a class (encapsulation) is the cleanest solution.",
        "tr": "Eğer bir grup değişken sürekli birlikte kullanılıyorsa ve bir bağlama ihtiyaç duyuyorsa, bu değişkenleri bir sınıf içinde toplamak (encapsulation) en temiz çözümdür."
      }
    }
  ]
});
