window.NOTES({
  "chapter": { "num": 5, "en": "Formatting", "tr": "Biçimlendirme" },
  "sets": [
    {
      "id": "ch5-p88-92",
      "pages": [88, 92],
      "title": {
        "en": "Indentation, Dummy Scopes and Team Rules",
        "tr": "Girinti, Sahte Kapsamlar ve Takım Kuralları"
      },
      "blocks": [
        { "type": "heading", "level": 2, "en": "Wrapping up horizontal alignment", "tr": "Yatay hizalamanın sonu" },
        { "type": "para", "sentences": [
          { "en": "Page 88 opens with the rest of the unaligned field list from the previous page's example.", "tr": "Sayfa 88, önceki sayfadaki örneğin hizalanmamış alan listesinin devamıyla açılır." },
          { "en": "The takeaway: leave declarations unaligned; if the list feels too long, the real problem is a class doing too much, not the missing columns.", "tr": "Çıkarılacak ders: tanımları sütun sütun hizalamayın; liste fazla uzun görünüyorsa asıl sorun eksik hizalama değil, çok fazla iş yapan bir sınıftır." }
        ]},

        { "type": "heading", "level": 2, "en": "Indentation", "tr": "Girinti (Indentation)" },
        { "type": "list", "ordered": false, "items": [
          { "en": "A source file is nested like an outline: file → class → method → block → inner block. Each level is its own scope where names live.", "tr": "Bir kaynak dosya iç içe bir taslak gibidir: dosya → sınıf → metot → blok → iç blok. Her seviye, isimlerin yaşadığı ayrı bir kapsamdır (scope)." },
          { "en": "Indentation makes that hierarchy of scopes visible: file-level declarations start at column zero, methods sit one step in, method bodies one step further.", "tr": "Girinti bu kapsam hiyerarşisini görünür kılar: dosya seviyesindeki tanımlar sıfırıncı sütundan başlar, metotlar bir adım, metot gövdeleri bir adım daha içeridedir." },
          { "en": "Programmers read the left edge: it tells them which scope they are in, lets them skip irrelevant if/while bodies, and helps them spot new methods and variables.", "tr": "Programcılar sol kenarı okur: hangi kapsamda olduklarını oradan anlar, ilgisiz if/while gövdelerinin üzerinden atlar, yeni metot ve değişkenleri oradan fark ederler." },
          { "en": "The book shows one small server class twice: crammed onto a few lines, then properly indented. The compiler sees no difference; a human can barely read the first but grasps the second in seconds.", "tr": "Kitap küçük bir sunucu sınıfını iki kez gösterir: önce birkaç satıra sıkıştırılmış, sonra düzgün girintilenmiş. Derleyici için fark yoktur; insan ilkini zor okur, ikincisini ise saniyeler içinde kavrar." }
        ]},

        { "type": "heading", "level": 3, "en": "Breaking indentation", "tr": "Girintiyi bozmak" },
        { "type": "para", "sentences": [
          { "en": "For a short if, a short loop or a one-line function it is tempting to skip indentation and write everything on one line.", "tr": "Kısa bir if, kısa bir döngü ya da tek satırlık bir fonksiyon için girintiyi atlayıp her şeyi tek satıra yazmak cazip gelir." },
          { "en": "The author admits that nearly every time he gave in, he later went back and restored the indentation.", "tr": "Yazar, bu cazibeye kapıldığı neredeyse her seferde sonradan geri dönüp girintiyi yeniden eklediğini söyler." },
          { "en": "His rule: don't collapse a scope into one line; expand it and indent it.", "tr": "Kuralı şu: bir kapsamı tek satıra çökertmeyin; açın ve girintileyin." }
        ]},

        { "type": "heading", "level": 2, "en": "Dummy Scopes", "tr": "Sahte Kapsamlar (Dummy Scopes)" },
        { "type": "para", "sentences": [
          { "en": "A while or for loop with an empty body is a structure the author dislikes and tries to avoid.", "tr": "Gövdesi boş bir while ya da for döngüsü, yazarın sevmediği ve kaçınmaya çalıştığı bir yapıdır." },
          { "en": "When it can't be avoided, make the empty body visible: put the semicolon on its own indented line (or use braces) instead of hiding it at the end of the loop line.", "tr": "Kaçınılamıyorsa boş gövdeyi görünür yapın: noktalı virgülü döngü satırının sonuna saklamak yerine kendi girintili satırına yazın (ya da süslü parantez kullanın)." },
          { "en": "A silent semicolon at the end of a loop line is a classic way to fool a reader, including the author himself.", "tr": "Döngü satırının sonundaki sessiz bir noktalı virgül, okuru (yazarın kendisini de) yanıltmanın klasik yoludur." }
        ]},

        { "type": "heading", "level": 2, "en": "Team Rules", "tr": "Takım Kuralları (Team Rules)" },
        { "type": "list", "ordered": false, "items": [
          { "en": "The title is a pun: everyone has favourite formatting habits, but on a team, the team rules.", "tr": "Başlık bir kelime oyunudur (\"team rules\" hem \"takım kuralları\" hem \"takım hükmeder\"): herkesin sevdiği bir biçim vardır, ama takımda karar takımındır." },
          { "en": "The team agrees on one style and every member follows it, so the code doesn't look like the work of people who disagree.", "tr": "Takım tek bir stil üzerinde anlaşır ve herkes ona uyar; böylece kod, birbiriyle anlaşamayan kişilerin elinden çıkmış gibi görünmez." },
          { "en": "On FitNesse this agreement took about ten minutes: brace placement, indent size, naming conventions. The rules went into the IDE's formatter and stayed there, even where they differed from the author's own taste.", "tr": "FitNesse projesinde bu anlaşma yaklaşık on dakika sürmüş: süslü parantezlerin yeri, girinti genişliği, isimlendirme kuralları. Kurallar IDE'nin biçimlendiricisine işlenmiş ve yazarın kendi zevkinden farklı olsa bile korunmuş." },
          { "en": "Why it matters: a reader must be able to trust that a formatting cue means the same thing in every file. A jumble of personal styles adds complexity for nothing.", "tr": "Neden önemli: okur, bir biçim ipucunun her dosyada aynı anlama geldiğine güvenebilmelidir. Kişisel stillerin karmaşası koda boşuna karmaşıklık ekler." }
        ]},

        { "type": "heading", "level": 2, "en": "Uncle Bob's Formatting Rules", "tr": "Uncle Bob'un Biçimlendirme Kuralları" },
        { "type": "para", "sentences": [
          { "en": "Instead of listing his personal rules, the author closes the chapter with a single example class (Listing 5-6, `CodeAnalyzer`).", "tr": "Yazar kişisel kurallarını madde madde saymak yerine bölümü tek bir örnek sınıfla kapatır (Listing 5-6, `CodeAnalyzer`)." },
          { "en": "The idea: the best coding-standard document is code that follows the standard.", "tr": "Fikir şu: en iyi kodlama standardı belgesi, o standarda uyan koddur." },
          { "en": "What to look for in that listing:", "tr": "O listede nelere bakmalı:" }
        ]},
        { "type": "list", "ordered": false, "items": [
          { "en": "Instance variables grouped at the top of the class.", "tr": "Örnek değişkenleri sınıfın en üstünde, bir arada." },
          { "en": "A public method followed right away by the private helper it calls, so the file reads top-down.", "tr": "Public bir metodun hemen altında çağırdığı private yardımcı metot; dosya yukarıdan aşağıya okunur." },
          { "en": "Small methods that each do one thing, with the simple getters kept together.", "tr": "Her biri tek bir iş yapan küçük metotlar; basit getter'lar bir arada." },
          { "en": "Consistent indentation and short lines throughout.", "tr": "Baştan sona tutarlı girinti ve kısa satırlar." }
        ]},

        { "type": "heading", "level": 2, "en": "Key takeaways", "tr": "Akılda kalsın" },
        { "type": "list", "ordered": true, "items": [
          { "en": "Indentation is not decoration; it is a map of scopes.", "tr": "Girinti süs değildir; kapsamların haritasıdır." },
          { "en": "Don't collapse a scope onto one line just because it is short.", "tr": "Kısa diye bir kapsamı tek satıra çökertmeyin." },
          { "en": "Make an empty loop body impossible to miss.", "tr": "Boş döngü gövdesini gözden kaçmayacak hâle getirin." },
          { "en": "Team style beats personal taste, and it belongs in the formatter, not in people's memory.", "tr": "Takım stili kişisel zevkin önündedir ve insanların hafızasında değil, biçimlendiricide yaşamalıdır." }
        ]}
      ],
      "concepts": [
        {
          "id": "indentation-maps-scope",
          "title": { "en": "Indentation Maps Scope", "tr": "Girinti Kapsamı Gösterir (Indentation)" },
          "summary": {
            "en": "Each nesting level gets one more step of indentation, so the shape of the code on the left edge mirrors its structure.",
            "tr": "Her iç içe geçme seviyesi bir adım daha girinti alır; böylece kodun sol kenardaki şekli yapısını yansıtır."
          },
          "bad": {
            "lang": "javascript",
            "code": "function applyDiscounts(cart) { let total = 0; for (const item of cart.items) { if (item.onSale) { total += item.price * 0.8; } else { total += item.price; } } return total; }",
            "why": {
              "en": "Valid code, but you have to count braces to find where the loop ends and which branch you are in.",
              "tr": "Geçerli bir kod, ama döngünün nerede bittiğini ve hangi dalda olduğunuzu bulmak için süslü parantez saymanız gerekir."
            }
          },
          "good": {
            "lang": "javascript",
            "code": "const SALE_RATE = 0.8;\n\nfunction applyDiscounts(cart) {\n  let total = 0;\n  for (const item of cart.items) {\n    if (item.onSale) {\n      total += item.price * SALE_RATE;\n    } else {\n      total += item.price;\n    }\n  }\n  return total;\n}",
            "why": {
              "en": "The loop, the branch and the return are visible at a glance from the left edge alone.",
              "tr": "Döngü, dallanma ve return yalnızca sol kenara bakarak bir bakışta görülür."
            }
          },
          "tip": {
            "en": "If indentation gets deeper than three or four levels, that is a hint to extract a function, not to shrink the indent size.",
            "tr": "Girinti üç dört seviyeden derine iniyorsa bu, girinti genişliğini küçültmek için değil, bir fonksiyon çıkarmak için bir işarettir."
          }
        },
        {
          "id": "dont-collapse-scopes",
          "title": { "en": "Don't Collapse Short Scopes", "tr": "Kısa Kapsamları Tek Satıra Çökertmeyin" },
          "summary": {
            "en": "Short methods and guards look tidy on one line, but they break the vertical rhythm and make later edits harder.",
            "tr": "Kısa metotlar ve koruma koşulları tek satırda derli toplu görünür, ama dikey ritmi bozar ve sonraki değişiklikleri zorlaştırır."
          },
          "bad": {
            "lang": "java",
            "code": "public class Inventory {\nprivate final Map<String, Integer> stock = new HashMap<>();\npublic int count(String sku){Integer n = stock.get(sku); return n == null ? 0 : n;}\npublic void add(String sku, int qty){if (qty <= 0) throw new IllegalArgumentException(\"qty\"); stock.merge(sku, qty, Integer::sum);}\n}",
            "why": {
              "en": "Guard, body and method boundaries run together; adding one logging line means rewriting the whole line.",
              "tr": "Koruma koşulu, gövde ve metot sınırları birbirine karışır; tek bir log satırı eklemek bütün satırı yeniden yazmak demektir."
            }
          },
          "good": {
            "lang": "java",
            "code": "public class Inventory {\n  private final Map<String, Integer> stock = new HashMap<>();\n\n  public int count(String sku) {\n    return stock.getOrDefault(sku, 0);\n  }\n\n  public void add(String sku, int quantity) {\n    if (quantity <= 0) {\n      throw new IllegalArgumentException(\"quantity must be positive\");\n    }\n    stock.merge(sku, quantity, Integer::sum);\n  }\n}",
            "why": {
              "en": "Each scope is expanded and indented, so the guard stands out and diffs stay line-sized.",
              "tr": "Her kapsam açılmış ve girintilenmiştir; koruma koşulu göze çarpar ve diff'ler satır boyutunda kalır."
            }
          },
          "tip": {
            "en": "Configure the formatter to always expand braces; then nobody has to resist the temptation by willpower.",
            "tr": "Biçimlendiriciyi süslü parantezleri her zaman açacak şekilde ayarlayın; böylece kimse bu cazibeye irade gücüyle direnmek zorunda kalmaz."
          }
        },
        {
          "id": "visible-empty-body",
          "title": { "en": "The Invisible Semicolon", "tr": "Görünmez Noktalı Virgül (Dummy Scope)" },
          "summary": {
            "en": "A loop whose body is a lone semicolon at the end of the line is easy to misread as a loop over the next statement.",
            "tr": "Gövdesi satır sonundaki tek bir noktalı virgülden oluşan döngü, kolayca bir sonraki ifadeyi tekrarlayan bir döngü sanılır."
          },
          "bad": {
            "lang": "java",
            "code": "int index = 0;\nwhile (index < tokens.length && tokens[index].isBlank()) index++;\nfor (int retry = 0; retry < MAX_RETRIES && !connect(); retry++);\n    logger.info(\"connected\");",
            "why": {
              "en": "The trailing semicolon on the for line makes the loop empty; the indented log call runs once, not on each retry, yet it looks like the loop body.",
              "tr": "for satırının sonundaki noktalı virgül döngüyü boşaltır; girintili log çağrısı her denemede değil bir kez çalışır, ama döngünün gövdesiymiş gibi görünür."
            }
          },
          "good": {
            "lang": "java",
            "code": "int index = skipBlankTokens(tokens);\nconnectWithRetries(MAX_RETRIES);\nlogger.info(\"connected\");\n\nprivate boolean connectWithRetries(int maxRetries) {\n  for (int retry = 0; retry < maxRetries; retry++) {\n    if (connect()) {\n      return true;\n    }\n  }\n  return false;\n}",
            "why": {
              "en": "The work moves into a named method with a real body, so there is no empty scope left to misread.",
              "tr": "İş, gerçek bir gövdesi olan isimli bir metoda taşınır; yanlış okunacak boş bir kapsam kalmaz."
            }
          },
          "tip": {
            "en": "If you must keep an empty body, write it as `{ }` or put the `;` alone on the next indented line, and turn on the compiler/linter warning for empty statements.",
            "tr": "Boş gövdeyi mutlaka tutmanız gerekiyorsa `{ }` olarak yazın ya da `;` işaretini bir sonraki girintili satıra tek başına koyun; derleyici/linter'ın boş ifade uyarısını da açın."
          }
        },
        {
          "id": "team-style-in-formatter",
          "title": { "en": "Encode Team Rules in the Formatter", "tr": "Takım Kurallarını Biçimlendiriciye İşleyin (Team Rules)" },
          "summary": {
            "en": "A style that lives only in a wiki drifts; a style checked by the formatter and CI stays consistent across every file.",
            "tr": "Yalnızca bir wiki sayfasında yaşayan stil zamanla dağılır; biçimlendirici ve CI tarafından denetlenen stil ise her dosyada tutarlı kalır."
          },
          "bad": {
            "lang": "python",
            "code": "# written by three people, three habits\ndef load_user(id):\n    return db.find('users', id)\n\ndef loadOrders( user_id ) :\n  return db.find(\"orders\",user_id)\n\ndef load_invoices(userId): return db.find( 'invoices', userId )",
            "why": {
              "en": "Quotes, spacing, indent size and naming change from function to function, so no formatting cue can be trusted.",
              "tr": "Tırnaklar, boşluklar, girinti genişliği ve isimlendirme fonksiyondan fonksiyona değişir; hiçbir biçim ipucuna güvenilemez."
            }
          },
          "good": {
            "lang": "python",
            "code": "# pyproject.toml holds the agreed rules:\n#   [tool.ruff]  line-length = 100\n#   [tool.ruff.format]  quote-style = \"double\"\n# CI runs: ruff format --check .\n\ndef load_user(user_id):\n    return db.find(\"users\", user_id)\n\n\ndef load_orders(user_id):\n    return db.find(\"orders\", user_id)\n\n\ndef load_invoices(user_id):\n    return db.find(\"invoices\", user_id)",
            "why": {
              "en": "The rules are written down once in version control and enforced automatically, so every file looks like it had one author.",
              "tr": "Kurallar sürüm kontrolüne bir kez yazılır ve otomatik uygulanır; her dosya tek bir yazarın elinden çıkmış gibi görünür."
            }
          },
          "tip": {
            "en": "Agree on the style in a short meeting, commit the formatter config, then reformat the whole codebase in one separate commit so real changes stay reviewable.",
            "tr": "Stili kısa bir toplantıda kararlaştırın, biçimlendirici ayarını commit edin, sonra tüm kod tabanını ayrı tek bir commit ile yeniden biçimlendirin; böylece gerçek değişiklikler incelenebilir kalır."
          }
        }
      ]
    }
  ]
});
