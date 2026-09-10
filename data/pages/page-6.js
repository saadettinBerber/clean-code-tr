window.PAGE({
  "id": "page-6",
  "page": 6,
  "pdf_page": 37,
  "chapter": {
    "num": 1,
    "en": "Clean Code",
    "tr": "Temiz Kod"
  },
  "section": {
    "en": "Attitude, The Primal Conundrum, The Art of Clean Code?",
    "tr": "Attitude, The Primal Conundrum, The Art of Clean Code?"
  },
  "title": {
    "en": "The Primal Conundrum & The Art of Clean Code?",
    "tr": "Temel İkilem & Temiz Kod Sanatı"
  },
  "blocks": [
    {
      "type": "para",
      "sentences": [
        {
          "en": "[ Continued from page 5 ]",
          "tr": "[ Sayfa 5'ten devam ]",
          "html": true
        }
      ],
      "style": "continuation"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "are deeply complicit in the planning of the project and share a great deal of the responsibility for any failures; especially if those failures have to do with bad code!",
          "tr": "proje planlamasında derin bir şekilde suç ortağıyızdır ve başarısızlıkların büyük bir kısmının sorumluluğunu paylaşırız; özellikle de bu başarısızlıklar kötü kod (bad code) ile ilgiliyse!",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "\"But wait!\" you say. \"If I don't do what my manager says, I'll be fired.\" Probably not. Most managers want the truth, even when they don't act like it. Most managers want good code, even when they are obsessing about the schedule. They may defend the schedule and requirements with passion; but that's their job. It's <em>your</em> job to defend the code with equal passion.",
          "tr": "\"Ama bir dakika!\" diyorsunuz. \"Eğer yöneticimin (manager) dediğini yapmazsam, kovulurum.\" Muhtemelen hayır. Çoğu yönetici, öyle davranmasalar da gerçeği ister. Çoğu yönetici, takvime (schedule) takıntılı olsalar da iyi kod ister. Takvimi ve gereksinimleri (requirements) tutkuyla savunabilirler; ama bu onların işidir. <em>Kodu aynı tutkuyla savunmak sizin işinizdir.</em>",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "To drive this point home, what if you were a doctor and had a patient who demanded that you stop all the silly hand-washing in preparation for surgery because it was taking too much time?<sup>2</sup> Clearly the patient is the boss; and yet the doctor should absolutely refuse to comply. Why? Because the doctor knows more than the patient about the risks of disease and infection. It would be unprofessional (never mind criminal) for the doctor to comply with the patient.",
          "tr": "Bu noktayı pekiştirmek için şunu düşünün: Bir doktor olsaydınız ve hastanız ameliyat hazırlığındaki el yıkama işlemini durdumanızı isteseydi — çünkü çok fazla zaman alıyormuş<sup>2</sup> — ne yapardınız? Açıkça hasta patrondur; ama doktor kesinlikle bu isteğe uymamalıdır. Neden? Çünkü doktor, hasta hakkında hastalık ve enfeksiyon riskleri konusunda hastadan daha fazla şey bilir. Doktorun hastanın isteğine uyması profesyonel olmayan (unprofessional) bir davranış olurdu (cezai sorumluluğu bir yana).",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "So too it is unprofessional for programmers to bend to the will of managers who don't understand the risks of making messes.",
          "tr": "Aynı şekilde, karmaşa (mess) yaratmanın risklerini anlamayan yöneticilerin (managers) iradesine boyun eğmek programcılar için de profesyonel olmayan bir davranıştır.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "The Primal Conundrum",
      "tr": "Temel İkilem / The Primal Conundrum",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Programmers face a conundrum of basic values. All developers with more than a few years experience know that previous messes slow them down. And yet all developers feel the pressure to make messes in order to meet deadlines. In short, they don't take the time to go fast!",
          "tr": "Programcılar temel değerlerle ilgili bir ikilemle (conundrum) karşı karşıyadır. Birkaç yıldan fazla deneyime sahip tüm geliştiriciler, önceki karmaşaların (messes) kendilerini yavaşlattığını bilir. Ancak tüm geliştiriciler, son teslim tarihlerini (deadlines) karşılamak için karmaşa yaratma baskısını hisseder. Kısacası, <em>hızlı gitmek için zaman ayırmazlar!</em>",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "True professionals know that the second part of the conundrum is wrong. You will not make the deadline by making the mess. Indeed, the mess will slow you down instantly, and will force you to miss the deadline. The only way to make the deadline—the only way to go fast—is to keep the code as clean as possible at all times.",
          "tr": "Gerçek profesyoneller (professionals), ikilemin ikinci kısmının yanlış olduğunu bilir. Karmaşa yaparak son teslim tarihine yetişemezsiniz. Aslında karmaşa sizi anında yavaşlatır ve son teslim tarihini kaçırmanıza neden olur. Son teslim tarihine yetişmenin tek yolu — <em>hızlı gitmenin tek yolu</em> — kodu her zaman mümkün olduğunca temiz tutmaktır.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "The Art of Clean Code?",
      "tr": "Temiz Kod Sanatı mı? / The Art of Clean Code?",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Let's say you believe that messy code is a significant impediment. Let's say that you accept that the only way to go fast is to keep your code clean. Then you must ask yourself: \"How do I write clean code?\" It's no good trying to write clean code if you don't know what it means for code to be clean!",
          "tr": "Diyelim ki dağınık kodun (messy code) önemli bir engel olduğuna inandınız. Diyelim ki hızlı gitmenin tek yolunun kodunuzu temiz tutmak olduğunu kabul ettiniz. O zaman kendinize şunu sormalısınız: \"Temiz kodu nasıl yazarım?\" Eğer kodun temiz olmasının ne demek olduğunu bilmiyorsanız, temiz kod yazmaya çalışmanın bir anlamı yoktur!",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "The bad news is that writing clean code is a lot like painting a picture. Most of us know when a picture is painted well or badly. But being able to recognize good art from bad does not mean that we know how to paint. So too being able to recognize clean code from dirty code does not mean that we know how to write clean code!",
          "tr": "Kötü haber şu ki, temiz kod yazmak bir resim yapmaya çok benzer. Çoğumuz bir resmin iyi mi kötü mü yapıldığını biliriz. Ancak iyi sanatı kötüden ayırabilmek, resim yapmayı bildiğimiz anlamına gelmez. Aynı şekilde temiz kodu kirli koddan (dirty code) ayırabilmek, temiz kod <em>yazmayı</em> bildiğimiz anlamına gelmez!",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "[ Continued on page 7 ]",
          "tr": "[ Sayfa 7'ye devam edilecek ]",
          "html": true
        }
      ],
      "style": "continuation"
    },
    {
      "type": "footnote",
      "en": "<sup>2</sup> When hand-washing was first recommended to physicians by Ignaz Semmelweis in 1847, it was rejected on the basis that doctors were too busy and wouldn't have time to wash their hands between patient visits.",
      "tr": "<sup>2</sup> El yıkama ilk olarak 1847'de Ignaz Semmelweis tarafından doktorlara önerildiğinde, doktorların çok meşgul olduğu ve hasta ziyaretleri arasında ellerini yıkamaya vakit bulamayacakları gerekçesiyle reddedilmişti.",
      "html": true
    }
  ],
  "concepts": [
    {
      "id": "doctor",
      "title": {
        "en": "Doctor Analogy",
        "tr": "Doktor Benzetmesi (Doctor Analogy)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Martin, programcıların kodu savunma sorumluluğunu bir doktorun el yıkamayı savunmasına benzetir. Hasta (yönetici/müşteri) \"zaman kaybı\" diye şikâyet etse bile, doktor hijyen kurallarından ödün vermez — çünkü riskleri bilir. Aynı şekilde programcılar da \"hızlı teslim et\" baskısına rağmen kod kalitesinden ödün vermemelidir.</span><span class=\"en-text\">Martin compares programmers' responsibility to defend code quality with a doctor defending hand-washing. Even when the patient (manager/client) complains about \"wasting time,\" the doctor doesn't compromise on hygiene — because they know the risks. Similarly, programmers shouldn't compromise code quality despite \"deliver fast\" pressure.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Baskıya boyun eğmek</span><span class=\"en-text\">BAD — Bending to pressure</span></span>\n<pre>// Yönetici: \"Bu özellik yarına hazır olmalı!\"\n// Geliştirici: \"Tamam, hemen yaparım...\"\n\nfunction calculateDiscount(cart) {\n    // TODO: Validation eklenecek (sonra...)\n    // TODO: Edge case'ler handle edilecek (sonra...)\n    // TODO: Test yazılacak (sonra...)\n    let d = 0;\n    for (let i = 0; i &lt; cart.length; i++) {\n        if (cart[i].q &gt; 5) d += cart[i].p * 0.1;\n        if (cart[i].q &gt; 10) d += cart[i].p * 0.05;\n        if (cart[i].vip) d += cart[i].p * 0.15;\n    }\n    return d;\n}\n// 6 ay sonra: 47 bug raporu, kimse koda dokunamıyor</pre>\n<div class=\"explanation\"><span class=\"tr-text\">Geliştirici baskıya boyun eğip validasyon, test ve anlamlı isimlendirme gibi temel pratikleri atlamış. \"Sonra yaparız\" dediği her şey teknik borca (technical debt) dönüşmüş.</span><span class=\"en-text\">The developer bent to pressure and skipped validation, tests, and meaningful naming. Every \"we'll do it later\" turned into technical debt.</span></div>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Profesyonel duruş</span><span class=\"en-text\">GOOD — Professional stance</span></span>\n<pre>// Yönetici: \"Bu özellik yarına hazır olmalı!\"\n// Geliştirici: \"İndirim hesaplama kritik bir iş kuralı.\n//   Hatalı hesaplama gelir kaybına yol açar.\n//   2 günde testleriyle birlikte teslim edebilirim.\"\n\nfunction calculateDiscount(cart: CartItem[]): Money {\n    this.validateCart(cart);\n\n    const discountRules = [\n        new BulkDiscountRule(threshold: 5, rate: 0.10),\n        new VolumeBonusRule(threshold: 10, rate: 0.05),\n        new VipDiscountRule(rate: 0.15),\n    ];\n\n    return discountRules\n        .filter(rule =&gt; rule.appliesTo(cart))\n        .reduce((total, rule) =&gt; total.add(rule.calculate(cart)),\n                Money.zero());\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">Yöneticinize \"Hayır\" demek değil, \"Evet, ama...\" demek önemlidir. \"Bunu 1 günde yapabilirim ama 3 kritik riski var. 2 günde risksiz yapabilirim. Hangisini tercih edersiniz?\" Bu yaklaşım hem profesyonelliğinizi hem de çözüm odaklılığınızı gösterir.</span><span class=\"en-text\">It's not about saying \"No\" but \"Yes, but...\" to your manager. \"I can do this in 1 day but with 3 critical risks. In 2 days I can do it risk-free. Which do you prefer?\" This shows both professionalism and solution-oriented thinking.</span></div>"
    },
    {
      "id": "conundrum",
      "title": {
        "en": "The Primal Conundrum",
        "tr": "Temel İkilem (The Primal Conundrum)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Programcıların temel ikilemi şudur: Karmaşanın (mess) bizi yavaşlattığını <em>biliyoruz</em>, ama son teslim tarihlerine (deadlines) yetişmek için karmaşa yaratma baskısı hissediyoruz. Martin bu ikilemin çözümünü açıkça belirtir: Hızlı gitmenin tek yolu kodu temiz tutmaktır. Karmaşa yapmak sizi hızlandırmaz — anında yavaşlatır.</span><span class=\"en-text\">The fundamental conundrum: we <em>know</em> messes slow us down, yet we feel pressure to make messes to meet deadlines. Martin states the resolution clearly: the only way to go fast is to keep the code clean. Making a mess doesn't speed you up — it slows you down instantly.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — \"Hızlıca halledelim\" zihniyeti</span><span class=\"en-text\">BAD — \"Let's just get it done\" mentality</span></span>\n<pre># Sprint 1: \"Hızlıca halledelim\"\ndef send_notification(user_id, msg, type, urgent, channel):\n    if type == \"email\":\n        if urgent:\n            # acil email gönder\n            smtp = smtplib.SMTP('smtp.company.com')\n            smtp.sendmail('no-reply@co.com', get_email(user_id), msg)\n        else:\n            # normal email\n            smtp = smtplib.SMTP('smtp.company.com')\n            smtp.sendmail('no-reply@co.com', get_email(user_id), msg)\n    elif type == \"sms\":\n        if urgent:\n            # acil sms\n            requests.post('https://sms-api.com/send',\n                json={'to': get_phone(user_id), 'msg': msg, 'priority': 'high'})\n        else:\n            requests.post('https://sms-api.com/send',\n                json={'to': get_phone(user_id), 'msg': msg})\n    elif type == \"push\":\n        # ... 50 satır daha\n        pass\n\n# Sprint 3: \"Slack bildirimi de ekleyelim\" → 200 satırlık if/elif\n# Sprint 5: \"Neden bu kadar yavaş ilerliyoruz?!\"</pre>\n<div class=\"explanation\"><span class=\"tr-text\">Her sprint'te \"hızlıca ekleyelim\" diyerek büyüyen fonksiyon, birkaç sprint sonra değiştirilmesi imkânsız bir canavara dönüşür. Hız kazanmak için yapılan kestirmeler, çok geçmeden sizi yavaşlatan zincirlere dönüşür.</span><span class=\"en-text\">The function growing with \"let's add it quickly\" each sprint becomes an unmaintainable monster. Shortcuts taken to gain speed quickly turn into chains that slow you down.</span></div>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Temiz yapı = sürdürülebilir hız</span><span class=\"en-text\">GOOD — Clean structure = sustainable speed</span></span>\n<pre># Sprint 1: Biraz daha zaman alır ama sürdürülebilir\nclass NotificationService:\n    def __init__(self):\n        self._channels = {}\n\n    def register(self, channel_type, handler):\n        self._channels[channel_type] = handler\n\n    def send(self, user_id, message, channel_type, urgent=False):\n        handler = self._channels.get(channel_type)\n        if not handler:\n            raise UnsupportedChannel(channel_type)\n        handler.send(user_id, message, urgent)\n\nclass EmailChannel:\n    def send(self, user_id, message, urgent):\n        priority = Priority.HIGH if urgent else Priority.NORMAL\n        self.mailer.send(\n            to=self.user_repo.get_email(user_id),\n            body=message,\n            priority=priority\n        )\n\n# Sprint 3: \"Slack ekleyelim\" → sadece SlackChannel sınıfı yaz, register et. Bitti.\n# Sprint 5: \"Harika ilerliyoruz!\"</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">Bir görevi \"hızlıca halledelim\" diye başlamadan önce kendinize sorun: \"Bu kodu 3 ay sonra değiştirmem gerekirse, bugünkü 'hızlı' çözüm o zaman bana kaç saat kaybettirecek?\" Genellikle bugün 30 dakika fazla harcamak, gelecekte 3 gün kazandırır.</span><span class=\"en-text\">Before starting a task with \"let's just get it done,\" ask yourself: \"If I need to change this code in 3 months, how many hours will today's 'quick' solution cost me then?\" Usually spending 30 extra minutes today saves 3 days in the future.</span></div>"
    },
    {
      "id": "art",
      "title": {
        "en": "The Art of Clean Code",
        "tr": "Temiz Kod Sanatı (The Art of Clean Code)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Martin, temiz kod yazmayı resim yapmaya benzetir: İyi bir resmi kötüsünden ayırt edebilmek, resim yapmayı bildiğiniz anlamına gelmez. Aynı şekilde temiz kodu kirli koddan ayırt edebilmek, temiz kod <em>yazabildiğiniz</em> anlamına gelmez. Temiz kod yazmak bir zanaat (craftsmanship) becerisidir — öğrenilmesi zaman, pratik ve disiplin gerektirir.</span><span class=\"en-text\">Martin compares writing clean code to painting: being able to tell good art from bad doesn't mean you can paint. Similarly, recognizing clean code from dirty code doesn't mean you can <em>write</em> clean code. Writing clean code is a craftsmanship skill — it requires time, practice, and discipline to learn.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — \"Kötü olduğunu biliyorum ama nasıl düzelteceğimi bilmiyorum\"</span><span class=\"en-text\">BAD — \"I know it's bad but I don't know how to fix it\"</span></span>\n<pre>// Geliştirici biliyor ki bu kod kötü... ama alternatifi ne?\npublic class DataProcessor {\n    public Object process(Object data, int mode, boolean flag1,\n                          boolean flag2, String format, int retry) {\n        Object result = null;\n        if (mode == 1) {\n            if (flag1) {\n                if (format.equals(\"json\")) {\n                    // 30 satır iç içe mantık\n                    result = doSomething(data);\n                } else if (format.equals(\"xml\")) {\n                    result = doSomethingElse(data);\n                }\n            } else if (flag2) {\n                // 20 satır daha...\n                result = doAnotherThing(data);\n            }\n        } else if (mode == 2) {\n            // mode 1'in kopyası, küçük farkla...\n        }\n        return result;\n    }\n}</pre>\n<div class=\"explanation\"><span class=\"tr-text\">Geliştirici bu kodun kötü olduğunu hissedebilir ama \"kod duygusu\" (code-sense) gelişmediği için nasıl düzelteceğini bilemez. Sorunları tanımak ilk adımdır, ama yeterli değildir.</span><span class=\"en-text\">The developer can feel this code is bad but without developed \"code-sense,\" they don't know how to fix it. Recognizing problems is the first step, but it's not enough.</span></div>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Kod duygusu ile yeniden yapılandırılmış</span><span class=\"en-text\">GOOD — Restructured with code-sense</span></span>\n<pre>// Strateji deseni (Strategy Pattern) + açık arayüz\npublic interface DataFormatter {\n    FormattedData format(RawData data);\n}\n\npublic class JsonFormatter implements DataFormatter {\n    public FormattedData format(RawData data) {\n        return new FormattedData(toJson(data));\n    }\n}\n\npublic class DataPipeline {\n    private final DataFormatter formatter;\n    private final RetryPolicy retryPolicy;\n\n    public DataPipeline(DataFormatter formatter, RetryPolicy retryPolicy) {\n        this.formatter = formatter;\n        this.retryPolicy = retryPolicy;\n    }\n\n    public ProcessedData process(RawData data) {\n        RawData validated = validate(data);\n        FormattedData formatted = formatter.format(validated);\n        return retryPolicy.execute(() -&gt; save(formatted));\n    }\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">\"Kod duygusu\" geliştirmek için: Her gün 15 dakika açık kaynak kodlarını okuyun. Özellikle iyi bilinen projelerin (Spring, React, Django) çekirdek modüllerini inceleyin. \"Bu neden böyle yazılmış?\" diye sorun. Zamanla kalıpları tanımaya ve uygulamaya başlarsınız.</span><span class=\"en-text\">To develop \"code-sense\": spend 15 minutes daily reading open source code. Study core modules of well-known projects (Spring, React, Django). Ask \"Why is this written this way?\" Over time, you'll start recognizing and applying patterns.</span></div>"
    }
  ]
});
