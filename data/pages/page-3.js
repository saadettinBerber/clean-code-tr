window.PAGE({
  "id": "page-3",
  "page": 3,
  "pdf_page": 34,
  "chapter": {
    "num": 1,
    "en": "Clean Code",
    "tr": "Temiz Kod"
  },
  "section": {
    "en": "Bad Code",
    "tr": "Kötü Kod"
  },
  "title": {
    "en": "Bad Code",
    "tr": "Kötü Kod"
  },
  "blocks": [
    {
      "type": "heading",
      "level": 1,
      "en": "Bad Code",
      "tr": "Kötü Kod / Bad Code",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "I was recently reading the preface to Kent Beck's book <em>Implementation Patterns</em>.<sup>1</sup> He says, \". . . this book is based on a rather fragile premise: that good code matters. . . .\" A <em>fragile</em> premise? I disagree! I think that premise is one of the most robust, supported, and overloaded of all the premises in our craft (and I think Kent knows it). We know good code matters because we've had to deal for so long with its lack.",
          "tr": "Geçenlerde Kent Beck'in <em>Implementation Patterns</em><sup>1</sup> kitabının önsözünü okuyordum. Şöyle diyor: \"...bu kitap oldukça kırılgan (fragile) bir önermeye dayanıyor: iyi kodun önemli olduğu.\" <em>Kırılgan</em> bir önerme mi? Katılmıyorum! Bence bu önerme, zanaatımızdaki (Craftsmanship) tüm önermelerin en sağlam, en desteklenmiş ve en yüklü olanıdır (ve sanırım Kent de bunu biliyor). İyi kodun önemli olduğunu biliyoruz, çünkü onun yokluğuyla uzun süredir başa çıkmak zorunda kaldık.",
          "html": true
        }
      ]
    },
    {
      "type": "html",
      "html": "<div class=\"illustration-note\">\n<span class=\"tr-text\">[ Kitaptaki illüstrasyon: Kent Beck'in portresi ]</span>\n<span class=\"en-text\" style=\"display:none;\">[ Book illustration: Portrait of Kent Beck ]</span>\n</div>"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "I know of one company that, in the late 80s, wrote a <em>killer</em> app. It was very popular, and lots of professionals bought and used it. But then the release cycles began to stretch. Bugs were not repaired from one release to the next. Load times grew and crashes increased. I remember the day I shut the product down in frustration and never used it again. The company went out of business a short time after that.",
          "tr": "80'lerin sonlarında bir şirketin müthiş (<em>killer</em>) bir uygulama yazdığını biliyorum. Çok popülerdi ve birçok profesyonel onu satın alıp kullandı. Ama sonra sürüm döngüleri (release cycles) uzamaya başladı. Hatalar (Bug) bir sürümden diğerine düzeltilmiyordu. Yükleme süreleri uzadı, çökmeler arttı. Bir gün ürünü sinirle kapatıp bir daha hiç kullanmadığım günü hatırlıyorum. Şirket kısa süre sonra battı.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Two decades later I met one of the early employees of that company and asked him what had happened. The answer confirmed my fears. They had rushed the product to market and had made a huge mess in the code. As they added more and more features, the code got worse and worse until they simply could not manage it any longer. <em>It was the bad code that brought the company down.</em>",
          "tr": "Yirmi yıl sonra o şirketin ilk çalışanlarından biriyle tanıştım ve ona ne olduğunu sordum. Cevabı korkularımı doğruladı. Ürünü aceleyle piyasaya sürmüşler ve kodda büyük bir karmaşa (mess) oluşturmuşlardı. Yeni özellikler ekledikçe kod giderek kötüleşmiş, sonunda yönetilemez hale gelmişti. <em>Şirketi batıran kötü koddu.</em>",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Have <em>you</em> ever been significantly impeded by bad code? If you are a programmer of any experience then you've felt this impediment many times. Indeed, we have a name for it. We call it <em>wading</em>. We wade through bad code. We slog through a morass of tangled brambles and hidden pitfalls. We struggle to find our way, hoping for some hint, some clue, of what is going on; but all we see is more and more senseless code.",
          "tr": "Kötü kod yüzünden hiç ciddi şekilde engellendiniz mi? Eğer biraz deneyimi olan bir programcıysanız, bu engeli defalarca hissetmişsinizdir. Hatta bunun için bir ismimiz bile var. Buna <em>çamura batma</em> (wading) diyoruz. Kötü kodun içinden geçmeye çalışıyoruz. Dolanmış çalılıklar ve gizli tuzaklarla dolu bir bataklıkta ilerliyoruz. Bir ipucu, bir iz bulmaya çabalıyoruz; ama gördüğümüz tek şey daha fazla anlamsız kod.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Of course you have been impeded by bad code. So then—why did you write it?",
          "tr": "Elbette kötü kod yüzünden engellendiniz. Peki — neden yazdınız?",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Were you trying to go fast? Were you in a rush? Probably so. Perhaps you felt that you didn't have time to do a good job; that your boss would be angry with you if you took the time to clean up your code. Perhaps you were just tired of working on this program and wanted it to be over. Or maybe you looked at the backlog of other stuff that you had promised to get done and realized that you needed to slam this module together so you could move on to the next. We've all done it.",
          "tr": "Hızlı olmaya mı çalışıyordunuz? Aceleniz mi vardı? Muhtemelen evet. Belki işi düzgün yapmak için zamanınız olmadığını düşündünüz; kodunuzu temizlemeye vakit ayırsanız patronunuzun size kızacağını hissettiniz. Belki bu program üzerinde çalışmaktan bıkmıştınız ve bir an önce bitirmek istiyordunuz. Ya da teslim etmeniz gereken diğer işlerin yığıldığını gördünüz ve bir sonrakine geçebilmek için bu modülü aceleyle birleştirmeniz gerektiğini fark ettiniz. Hepimiz yaptık bunu.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "We've all looked at the mess we've just made and then have chosen to leave it for another day. We've all felt the relief of seeing our messy program work and deciding that a",
          "tr": "Hepimiz az önce yarattığımız karmaşaya baktık ve sonra başka bir güne bırakmayı seçtik. Hepimiz dağınık programımızın çalıştığını görmenin rahatlamasını hissettik ve",
          "html": true
        }
      ]
    },
    {
      "type": "html",
      "html": "<div style=\"font-size: 12px; color: #6c757d; margin-top: 32px; padding-top: 16px; border-top: 1px solid #dee2e6;\">\n<span class=\"tr-text\">1. [Beck07].</span>\n<span class=\"en-text\" style=\"display:none;\">1. [Beck07].</span>\n</div>"
    }
  ],
  "concepts": [
    {
      "id": "badcode",
      "title": {
        "en": "Bad Code",
        "tr": "Kötü Kod (Bad Code)"
      },
      "body_html": "<h4>\n<span class=\"tr-text\">Kavram Açıklaması</span>\n<span class=\"en-text\" style=\"display:none;\">Concept Explanation</span>\n</h4>\n<p>\n<span class=\"tr-text\">Kötü kod (Bad Code), okunması, anlaşılması ve bakımı zor olan koddur. Martin'in bu bölümde vurguladığı gibi, kötü kod sadece bireysel bir sorun değil — şirketleri batırabilecek kadar ciddi bir tehlikedir. Kod kalitesindeki düşüş zamanla katlanarak büyür ve sonunda projeyi yönetilemez hale getirir.</span>\n<span class=\"en-text\" style=\"display:none;\">Bad Code is code that is difficult to read, understand, and maintain. As Martin emphasizes in this section, bad code isn't just an individual problem — it's a threat serious enough to bring down companies. The decline in code quality compounds over time and eventually makes the project unmanageable.</span>\n</p>\n<h4>\n<span class=\"tr-text\">Kötü Örnek (Before)</span>\n<span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span>\n</h4>\n<span class=\"label-bad\">\n<span class=\"tr-text\">KÖTÜ</span>\n<span class=\"en-text\" style=\"display:none;\">BAD</span>\n</span>\n<pre>\ndef proc(d):\n    r = []\n    for i in d:\n        if i['s'] == 'A' and i['a'] &gt; 18:\n            x = i['n'].split(' ')\n            i['fn'] = x[0]\n            i['ln'] = x[-1] if len(x) &gt; 1 else ''\n            i['e'] = x[0].lower() + '@company.com'\n            r.append(i)\n        # TODO: handle other cases later\n    return r\n</pre>\n<div class=\"explanation\">\n<span class=\"tr-text\">Tek harfli değişkenler (<code>d</code>, <code>r</code>, <code>i</code>, <code>x</code>), sihirli string'ler (<code>'A'</code>, <code>18</code>), iç içe geçmiş mantık, eksik hata yönetimi ve ertelenmiş TODO. Bu kodu yazan kişi dışında kimse neyin ne olduğunu anlayamaz. Tam olarak Martin'in tarif ettiği \"çamura batma\" deneyimi.</span>\n<span class=\"en-text\" style=\"display:none;\">Single-letter variables (<code>d</code>, <code>r</code>, <code>i</code>, <code>x</code>), magic strings (<code>'A'</code>, <code>18</code>), tangled logic, missing error handling, and deferred TODOs. Nobody except the author can understand what's going on. Exactly the \"wading\" experience Martin describes.</span>\n</div>\n<h4>\n<span class=\"tr-text\">İyi Örnek (After)</span>\n<span class=\"en-text\" style=\"display:none;\">Good Example (After)</span>\n</h4>\n<span class=\"label-good\">\n<span class=\"tr-text\">İYİ</span>\n<span class=\"en-text\" style=\"display:none;\">GOOD</span>\n</span>\n<pre>\nACTIVE_STATUS = 'A'\nMINIMUM_AGE = 18\n\ndef find_eligible_employees(employees):\n    eligible = []\n    for employee in employees:\n        if is_eligible(employee):\n            enrich_with_contact_info(employee)\n            eligible.append(employee)\n    return eligible\n\ndef is_eligible(employee):\n    return (employee['status'] == ACTIVE_STATUS\n            and employee['age'] &gt; MINIMUM_AGE)\n\ndef enrich_with_contact_info(employee):\n    name_parts = employee['name'].split(' ')\n    employee['first_name'] = name_parts[0]\n    employee['last_name'] = name_parts[-1] if len(name_parts) &gt; 1 else ''\n    employee['email'] = f\"{name_parts[0].lower()}@company.com\"\n</pre>\n<div class=\"explanation\">\n<span class=\"tr-text\">Aynı iş mantığı, ama artık okunabilir. Fonksiyonlar tek sorumluluk taşıyor, sabitler anlamlı isimlerle tanımlanmış, değişken adları bağlamı açıklıyor. Kodu ilk kez gören biri bile \"uygun çalışanları bul ve iletişim bilgilerini ekle\" diye özetleyebilir.</span>\n<span class=\"en-text\" style=\"display:none;\">Same business logic, but now readable. Functions carry single responsibilities, constants have meaningful names, variable names explain context. Even a first-time reader can summarize it as \"find eligible employees and enrich with contact info.\"</span>\n</div>\n<div class=\"tip\">\n<strong>\n<span class=\"tr-text\">Pratik İpucu</span>\n<span class=\"en-text\" style=\"display:none;\">Practical Tip</span>\n</strong>\n<span class=\"tr-text\">Kendinizi \"bunu sonra düzeltirim\" derken yakalarsanız, durun. Martin'in bu bölümde anlattığı şirket tam da bu zihniyetle battı. \"Sonra\" hiçbir zaman gelmez. LeBlanc Yasası'nı (LeBlanc's Law) hatırlayın: <em>Sonra asla demektir</em> (Later equals never).</span>\n<span class=\"en-text\" style=\"display:none;\">When you catch yourself saying \"I'll fix this later,\" stop. The company Martin describes in this section failed with exactly this mentality. \"Later\" never comes. Remember LeBlanc's Law: <em>Later equals never</em>.</span>\n</div>"
    },
    {
      "id": "wading",
      "title": {
        "en": "Wading Through Code",
        "tr": "Çamura Batma (Wading)"
      },
      "body_html": "<h4>\n<span class=\"tr-text\">Kavram Açıklaması</span>\n<span class=\"en-text\" style=\"display:none;\">Concept Explanation</span>\n</h4>\n<p>\n<span class=\"tr-text\">Çamura batma (Wading), kötü kodun içinden geçmeye çalışırken yaşanan deneyimdir. Martin bu kavramı bir bataklıkta ilerlemeye benzetir: dolanmış çalılıklar, gizli tuzaklar ve anlam veremediğiniz kod yığınları arasında mücadele edersiniz. Bu deneyim, kötü kodun en belirgin belirtisidir.</span>\n<span class=\"en-text\" style=\"display:none;\">Wading is the experience of trying to navigate through bad code. Martin likens it to trudging through a swamp: tangled brambles, hidden pitfalls, and piles of senseless code you struggle to make sense of. This experience is the most telling symptom of bad code.</span>\n</p>\n<h4>\n<span class=\"tr-text\">Kötü Örnek (Before)</span>\n<span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span>\n</h4>\n<span class=\"label-bad\">\n<span class=\"tr-text\">KÖTÜ — Çamura batma deneyimi</span>\n<span class=\"en-text\" style=\"display:none;\">BAD — The wading experience</span>\n</span>\n<pre>\npublic class OrderService {\n    public double calc(List&lt;Map&lt;String, Object&gt;&gt; items, String t, boolean m, double d) {\n        double total = 0;\n        for (Map&lt;String, Object&gt; item : items) {\n            double p = (double) item.get(\"p\");\n            int q = (int) item.get(\"q\");\n            if (t.equals(\"B2B\")) {\n                total += p * q * 0.85;\n            } else if (t.equals(\"B2C\")) {\n                total += p * q;\n                if (m) total -= total * 0.1;  // member?\n            }\n        }\n        if (d &gt; 0) total -= d;  // what is d?\n        if (total &lt; 0) total = 0;\n        return total;  // tax not included? maybe?\n        // NOTE: john said we need to add shipping but idk where\n    }\n}\n</pre>\n<div class=\"explanation\">\n<span class=\"tr-text\">Bu kodu okuyan biri \"çamura batma\" deneyimi yaşar. <code>t</code>, <code>m</code>, <code>d</code> ne anlama geliyor? <code>\"B2B\"</code>, <code>\"B2C\"</code> sihirli string'ler neden sabit değil? Kaldırılan indirim (%10) neyin indirimi? Yorumlar belirsiz, <code>d</code> açıklanmamış, vergi ve kargo durumu muğlak. Kodu okumak bir bulmaca çözmek gibi.</span>\n<span class=\"en-text\" style=\"display:none;\">Reading this code is a \"wading\" experience. What do <code>t</code>, <code>m</code>, <code>d</code> mean? Why aren't <code>\"B2B\"</code>, <code>\"B2C\"</code> constants? What is the 10% discount for? Comments are vague, <code>d</code> is unexplained, tax and shipping status are ambiguous. Reading this code is like solving a puzzle.</span>\n</div>\n<h4>\n<span class=\"tr-text\">İyi Örnek (After)</span>\n<span class=\"en-text\" style=\"display:none;\">Good Example (After)</span>\n</h4>\n<span class=\"label-good\">\n<span class=\"tr-text\">İYİ — Akan su gibi okunabilir</span>\n<span class=\"en-text\" style=\"display:none;\">GOOD — Reads like flowing water</span>\n</span>\n<pre>\npublic class OrderService {\n    private static final double B2B_DISCOUNT_RATE = 0.15;\n    private static final double MEMBERSHIP_DISCOUNT_RATE = 0.10;\n\n    public double calculateTotal(List&lt;OrderItem&gt; items,\n                                 CustomerType customerType,\n                                 boolean isMember,\n                                 double couponDiscount) {\n        double subtotal = calculateSubtotal(items, customerType);\n\n        if (isMember) {\n            subtotal -= subtotal * MEMBERSHIP_DISCOUNT_RATE;\n        }\n\n        double total = subtotal - couponDiscount;\n        return Math.max(total, 0);\n    }\n\n    private double calculateSubtotal(List&lt;OrderItem&gt; items,\n                                     CustomerType customerType) {\n        double subtotal = 0;\n        for (OrderItem item : items) {\n            double lineTotal = item.getPrice() * item.getQuantity();\n            if (customerType == CustomerType.B2B) {\n                lineTotal *= (1 - B2B_DISCOUNT_RATE);\n            }\n            subtotal += lineTotal;\n        }\n        return subtotal;\n    }\n}\n</pre>\n<div class=\"explanation\">\n<span class=\"tr-text\">Artık çamura batma yok. Her parametre ne olduğunu söylüyor (<code>customerType</code>, <code>isMember</code>, <code>couponDiscount</code>). Sihirli sayılar anlamlı sabitlere dönüşmüş. <code>OrderItem</code> nesnesi (Object) <code>Map&lt;String, Object&gt;</code>'in yerini almış. Mantık küçük, odaklı metotlara bölünmüş. Bir nehir gibi akıyor.</span>\n<span class=\"en-text\" style=\"display:none;\">No more wading. Every parameter tells what it is (<code>customerType</code>, <code>isMember</code>, <code>couponDiscount</code>). Magic numbers became meaningful constants. <code>OrderItem</code> object replaced <code>Map&lt;String, Object&gt;</code>. Logic is split into small, focused methods. It flows like a river.</span>\n</div>\n<div class=\"tip\">\n<strong>\n<span class=\"tr-text\">Pratik İpucu</span>\n<span class=\"en-text\" style=\"display:none;\">Practical Tip</span>\n</strong>\n<span class=\"tr-text\">Bir kodu okurken kendinizi yavaşladığınızı, geri dönüp tekrar okuduğunuzu fark ediyorsanız, \"çamura batıyorsunuz\" demektir. Bu bir kod kokusu (Code Smell). O kodu yeniden düzenleyin — sonraki kişi (muhtemelen gelecekteki siz) size teşekkür edecektir.</span>\n<span class=\"en-text\" style=\"display:none;\">If you notice yourself slowing down while reading code, going back to re-read sections, you're \"wading.\" This is a code smell. Refactor that code — the next person (probably future you) will thank you.</span>\n</div>"
    },
    {
      "id": "technicaldebt",
      "title": {
        "en": "Technical Debt",
        "tr": "Teknik Borç (Technical Debt)"
      },
      "body_html": "<h4>\n<span class=\"tr-text\">Kavram Açıklaması</span>\n<span class=\"en-text\" style=\"display:none;\">Concept Explanation</span>\n</h4>\n<p>\n<span class=\"tr-text\">Martin'in bu bölümde anlattığı şirket hikayesi, teknik borcun (Technical Debt) somut bir örneğidir. Aceleyle yazılan kod, kısa vadede zaman kazandırır ama uzun vadede faiz biriktirir: her yeni özellik daha uzun sürer, her düzeltme yeni hatalar doğurur. Sonunda borç ödenemez hale gelir ve proje çöker.</span>\n<span class=\"en-text\" style=\"display:none;\">The company story Martin tells in this section is a concrete example of Technical Debt. Code written in haste saves time in the short term but accumulates interest: every new feature takes longer, every fix introduces new bugs. Eventually the debt becomes unpayable and the project collapses.</span>\n</p>\n<h4>\n<span class=\"tr-text\">Kötü Örnek (Before)</span>\n<span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span>\n</h4>\n<span class=\"label-bad\">\n<span class=\"tr-text\">KÖTÜ — Teknik borç biriktirme</span>\n<span class=\"en-text\" style=\"display:none;\">BAD — Accumulating technical debt</span>\n</span>\n<pre>\n# Sprint 1: \"Hızlıca yapalım\"\ndef get_users():\n    conn = sqlite3.connect('db.sqlite')\n    users = conn.execute('SELECT * FROM users').fetchall()\n    conn.close()\n    return users\n\n# Sprint 3: \"Bunu da ekle, acil\"\ndef get_users_v2():\n    conn = sqlite3.connect('db.sqlite')\n    users = conn.execute('SELECT * FROM users').fetchall()\n    conn.close()\n    # HACK: filter active users here because\n    # we can't change the query now\n    return [u for u in users if u[5] == 1]\n\n# Sprint 7: \"Neden bu kadar yavaş?!\"\ndef get_users_v3():\n    # TODO: this is getting out of hand\n    conn = sqlite3.connect('db.sqlite')\n    users = conn.execute('SELECT * FROM users').fetchall()\n    conn.close()\n    active = [u for u in users if u[5] == 1]\n    # HACK: deduplicate because of that join bug\n    seen = set()\n    result = []\n    for u in active:\n        if u[0] not in seen:\n            seen.add(u[0])\n            result.append(u)\n    return result\n</pre>\n<div class=\"explanation\">\n<span class=\"tr-text\">Her sprint'te bir önceki hack'in üzerine yeni hack'ler ekleniyor. Veritabanı bağlantısı her yerde tekrar ediliyor, <code>v2</code>, <code>v3</code> gibi versiyonlu fonksiyonlar türüyor, filtreleme mantığı SQL yerine Python'da yapılıyor, ve kimse eski kodu düzeltmeye cesaret edemiyor. Klasik teknik borç spirali.</span>\n<span class=\"en-text\" style=\"display:none;\">Each sprint piles new hacks on top of previous ones. Database connection is duplicated everywhere, versioned functions like <code>v2</code>, <code>v3</code> emerge, filtering logic moves from SQL to Python, and nobody dares fix the old code. A classic technical debt spiral.</span>\n</div>\n<h4>\n<span class=\"tr-text\">İyi Örnek (After)</span>\n<span class=\"en-text\" style=\"display:none;\">Good Example (After)</span>\n</h4>\n<span class=\"label-good\">\n<span class=\"tr-text\">İYİ — Borcu öde, temiz tut</span>\n<span class=\"en-text\" style=\"display:none;\">GOOD — Pay the debt, keep it clean</span>\n</span>\n<pre>\nclass UserRepository:\n    def __init__(self, db_path='db.sqlite'):\n        self.db_path = db_path\n\n    def find_active_users(self):\n        query = \"\"\"\n            SELECT DISTINCT id, name, email\n            FROM users\n            WHERE is_active = 1\n        \"\"\"\n        with sqlite3.connect(self.db_path) as conn:\n            return conn.execute(query).fetchall()\n</pre>\n<div class=\"explanation\">\n<span class=\"tr-text\">Tek bir sınıf (Class), tek bir sorumluluk. Veritabanı bağlantısı <code>with</code> ile güvenli şekilde yönetiliyor. Filtreleme ve tekilleştirme SQL seviyesinde yapılıyor (olması gerektiği gibi). Versiyonlu fonksiyonlar yerine tek, net bir metot. Teknik borç sıfır.</span>\n<span class=\"en-text\" style=\"display:none;\">One class, one responsibility. Database connection is safely managed with <code>with</code>. Filtering and deduplication are done at SQL level (where they belong). One clear method instead of versioned functions. Zero technical debt.</span>\n</div>\n<div class=\"tip\">\n<strong>\n<span class=\"tr-text\">Pratik İpucu</span>\n<span class=\"en-text\" style=\"display:none;\">Practical Tip</span>\n</strong>\n<span class=\"tr-text\">İzci Kuralı'nı (Boy Scout Rule) uygulayın: \"Kamp alanını bulduğunuzdan daha temiz bırakın.\" Her dosyaya dokunduğunuzda en az bir küçük iyileştirme yapın — bir değişkeni yeniden adlandırın, bir sihirli sayıyı sabite çevirin. Küçük ödemeler teknik borcun birikmesini engeller.</span>\n<span class=\"en-text\" style=\"display:none;\">Apply the Boy Scout Rule: \"Leave the campground cleaner than you found it.\" Every time you touch a file, make at least one small improvement — rename a variable, convert a magic number to a constant. Small payments prevent technical debt from accumulating.</span>\n</div>"
    }
  ]
});
