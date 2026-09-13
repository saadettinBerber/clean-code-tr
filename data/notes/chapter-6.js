window.NOTES({
  "chapter": { "num": 6, "en": "Objects and Data Structures", "tr": "Nesneler ve Veri Yapıları" },
  "sets": [
    {
      "id": "ch6-p93-97",
      "pages": [93, 97],
      "title": {
        "en": "Data Abstraction and the Object / Data Structure Split",
        "tr": "Veri Soyutlama ve Nesne / Veri Yapısı Ayrımı"
      },
      "blocks": [
        { "type": "heading", "level": 2, "en": "Private fields, public getters?", "tr": "Private alanlar, public getter'lar?" },
        { "type": "para", "sentences": [
          { "en": "The chapter opens with a puzzle: we make fields private so that nobody can depend on them, yet many programmers immediately generate a getter and a setter for every one of them.", "tr": "Bölüm bir çelişkiyle açılır: alanları kimse onlara bağımlı olmasın diye private yaparız, ama pek çok programcı hemen ardından her biri için bir getter ve bir setter üretir." },
          { "en": "A getter/setter pair per field hands the privacy straight back; the field is public in everything but name.", "tr": "Alan başına bir getter/setter çifti bu gizliliği hemen geri verir; alan, adı dışında her bakımdan public olur." }
        ]},

        { "type": "heading", "level": 2, "en": "Data Abstraction", "tr": "Veri Soyutlama (Data Abstraction)" },
        { "type": "list", "ordered": false, "items": [
          { "en": "The book compares two ways to model a point on a plane (Listings 6-1 and 6-2): a class with two public coordinate fields, and an interface that offers both Cartesian and polar reads and writes.", "tr": "Kitap düzlemdeki bir noktayı modellemenin iki yolunu karşılaştırır (Listing 6-1 ve 6-2): iki public koordinat alanı olan bir sınıf ve hem Kartezyen hem kutupsal okuma/yazma sunan bir arayüz (interface)." },
          { "en": "Looking only at the interface, you cannot tell how the point is stored — and that is exactly the benefit.", "tr": "Yalnızca arayüze bakarak noktanın nasıl saklandığını anlayamazsınız; kazanç da tam olarak budur." },
          { "en": "The interface also encodes a rule: coordinates can be read one at a time, but they must be written together in a single step, so a half-updated point can never exist.", "tr": "Arayüz ayrıca bir kural taşır: koordinatlar tek tek okunabilir, ama tek adımda birlikte yazılmalıdır; böylece yarı güncellenmiş bir nokta asla var olamaz." },
          { "en": "The public-field version ties every caller to one representation. Making those fields private and adding one getter and setter each would not change that at all.", "tr": "Public alanlı sürüm her çağıranı tek bir temsile bağlar. Bu alanları private yapıp her birine birer getter ve setter eklemek bunu hiç değiştirmez." }
        ]},
        { "type": "para", "sentences": [
          { "en": "So hiding implementation is not about putting a layer of methods in front of variables; it is about offering an abstraction that lets users work with what the data means.", "tr": "Yani uygulamayı gizlemek değişkenlerin önüne bir metot katmanı koymak değildir; kullanıcının verinin ne anlama geldiğiyle çalışmasını sağlayan bir soyutlama (abstraction) sunmaktır." },
          { "en": "The vehicle example (Listings 6-3 and 6-4) makes the same point: asking for tank capacity and gallons left leaks how the data is stored, while asking for the percentage of fuel remaining reveals nothing about it.", "tr": "Araç örneği (Listing 6-3 ve 6-4) aynı şeyi gösterir: depo kapasitesini ve kalan galonu sormak verinin nasıl saklandığını sızdırır; kalan yakıtın yüzdesini sormak ise bu konuda hiçbir şey açığa vurmaz." },
          { "en": "Finding the right representation takes real design thought; adding accessors out of habit is the weakest possible choice.", "tr": "Doğru temsili bulmak gerçek bir tasarım düşüncesi ister; alışkanlıkla erişimci (accessor) eklemek ise en zayıf seçenektir." }
        ]},

        { "type": "heading", "level": 2, "en": "Data/Object Anti-Symmetry", "tr": "Veri/Nesne Karşı Simetrisi (Data/Object Anti-Symmetry)" },
        { "type": "list", "ordered": false, "items": [
          { "en": "Objects keep their data hidden behind abstractions and offer behavior that works on that data.", "tr": "Nesneler (objects) verilerini soyutlamaların arkasında saklar ve o veri üzerinde çalışan davranışlar sunar." },
          { "en": "Data structures show their data openly and carry no meaningful behavior.", "tr": "Veri yapıları (data structures) verilerini açıkça gösterir ve anlamlı bir davranış taşımaz." },
          { "en": "The two definitions are nearly mirror images of each other, and that seemingly small difference has large consequences.", "tr": "İki tanım neredeyse birbirinin ayna görüntüsüdür ve küçük görünen bu farkın büyük sonuçları vardır." }
        ]},

        { "type": "heading", "level": 3, "en": "The shape example", "tr": "Şekil örneği" },
        { "type": "para", "sentences": [
          { "en": "Listing 6-5 models shapes procedurally: the square, rectangle and circle only hold data, and a separate Geometry class computes the area by checking which type it was given.", "tr": "Listing 6-5 şekilleri prosedürel biçimde modeller: kare, dikdörtgen ve daire yalnızca veri tutar; ayrı bir Geometry sınıfı, kendisine hangi türün verildiğine bakarak alanı hesaplar." },
          { "en": "Adding a new operation, such as a perimeter calculation, touches only Geometry; the shape classes and everything that depends on them stay as they are.", "tr": "Çevre hesabı gibi yeni bir işlem eklemek yalnızca Geometry'ye dokunur; şekil sınıfları ve onlara bağımlı her şey olduğu gibi kalır." },
          { "en": "Adding a new shape, on the other hand, forces a change in every function inside Geometry.", "tr": "Öte yandan yeni bir şekil eklemek, Geometry içindeki her fonksiyonun değişmesini zorunlu kılar." },
          { "en": "Listing 6-6 flips this around: each shape computes its own area polymorphically, so a new shape leaves existing code alone, but a new operation has to be added to every shape.", "tr": "Listing 6-6 bu durumu tersine çevirir: her şekil kendi alanını çok biçimli (polymorphic) olarak hesaplar; yeni bir şekil mevcut koda dokunmaz, ama yeni bir işlemin her şekle eklenmesi gerekir." },
          { "en": "A footnote notes that techniques such as Visitor or double dispatch can ease this, but they bring their own costs and tend to pull the design back toward a procedural shape.", "tr": "Bir dipnot, Ziyaretçi Deseni (Visitor Pattern) ya da çift gönderim gibi tekniklerin bunu hafifletebileceğini, ama kendi maliyetlerini getirdiklerini ve tasarımı yeniden prosedürel bir yapıya çekme eğiliminde olduklarını belirtir." }
        ]},

        { "type": "heading", "level": 3, "en": "The trade-off", "tr": "Ödünleşim" },
        { "type": "list", "ordered": false, "items": [
          { "en": "Procedural code (data structures + functions): new functions are cheap, new data types are expensive.", "tr": "Prosedürel kod (procedural code), yani veri yapıları + fonksiyonlar: yeni fonksiyon ucuzdur, yeni veri türü pahalıdır." },
          { "en": "Object-oriented code: new classes are cheap, new functions are expensive.", "tr": "Nesne yönelimli kod: yeni sınıf ucuzdur, yeni fonksiyon pahalıdır." },
          { "en": "What is hard for one style is easy for the other, so choose based on what you expect to add more often.", "tr": "Bir stil için zor olan, diğeri için kolaydır; bu yüzden neyi daha sık ekleyeceğinizi düşünerek seçin." },
          { "en": "Experienced developers don't buy the idea that everything must be an object; sometimes plain data with functions around it is simply the right design.", "tr": "Deneyimli geliştiriciler her şeyin nesne olması gerektiği fikrine kapılmaz; bazen etrafında fonksiyonlar bulunan düz veri, düpedüz doğru tasarımdır." }
        ]},

        { "type": "heading", "level": 2, "en": "The Law of Demeter (beginning)", "tr": "Demeter Yasası (Law of Demeter) — başlangıç" },
        { "type": "para", "sentences": [
          { "en": "The chapter then introduces a well-known heuristic: a module should not know the internals of the objects it works with.", "tr": "Bölüm ardından iyi bilinen bir sezgisel kuralı (heuristic) tanıtır: bir modül, üzerinde çalıştığı nesnelerin iç yapısını bilmemelidir." },
          { "en": "Since objects are supposed to hide their data, handing out their internal structure through accessors works against the very idea of an object.", "tr": "Nesnelerin verilerini gizlemesi beklendiğine göre, iç yapılarını erişimciler üzerinden dışarı vermek nesne fikrinin kendisine ters düşer." },
          { "en": "Stated precisely, a method may only call methods on a limited set of targets; page 97 names the first two — its own class and objects the method itself creates — and the list continues on the next page.", "tr": "Kesin biçimde ifade edilirse bir metot yalnızca sınırlı bir hedef kümesinin metotlarını çağırabilir; sayfa 97 bunların ilk ikisini sayar — metodun kendi sınıfı ve metodun kendi oluşturduğu nesneler — ve liste bir sonraki sayfada devam eder." }
        ]},

        { "type": "heading", "level": 2, "en": "Key takeaways", "tr": "Akılda kalsın" },
        { "type": "list", "ordered": true, "items": [
          { "en": "Getters and setters on every field are not encapsulation.", "tr": "Her alana getter ve setter koymak kapsülleme değildir." },
          { "en": "Expose what the data means, not how it is stored, and let the interface enforce the rules.", "tr": "Verinin nasıl saklandığını değil, ne anlama geldiğini dışarı açın; kuralları da arayüz uygulasın." },
          { "en": "Objects make new types easy; data structures make new operations easy. Pick deliberately.", "tr": "Nesneler yeni türleri kolaylaştırır; veri yapıları yeni işlemleri kolaylaştırır. Bilinçli seçin." },
          { "en": "Don't reach through an object into its internals.", "tr": "Bir nesnenin içinden geçip iç yapısına uzanmayın." }
        ]}
      ],
      "concepts": [
        {
          "id": "intent-not-fields",
          "title": { "en": "Expose Intent, Not Fields", "tr": "Alanları Değil Niyeti Açın (Data Abstraction)" },
          "summary": {
            "en": "Independent setters let callers put an object into an invalid state; one intent-revealing method changes related values together and checks them.",
            "tr": "Bağımsız setter'lar çağıranın nesneyi geçersiz bir duruma sokmasına izin verir; niyeti anlatan tek bir metot ise ilişkili değerleri birlikte değiştirir ve denetler."
          },
          "bad": {
            "lang": "java",
            "code": "public class Meeting {\n  private LocalDateTime start;\n  private LocalDateTime end;\n\n  public LocalDateTime getStart() { return start; }\n  public void setStart(LocalDateTime start) { this.start = start; }\n  public LocalDateTime getEnd() { return end; }\n  public void setEnd(LocalDateTime end) { this.end = end; }\n}\n\nmeeting.setStart(nextMondayAtTen);\nmeeting.setEnd(nextMondayAtNine);",
            "why": {
              "en": "The fields are private, but callers still manipulate them one by one; nothing stops a meeting that ends before it starts.",
              "tr": "Alanlar private, ama çağıranlar onları hâlâ tek tek değiştirir; başlamadan biten bir toplantıyı hiçbir şey engellemez."
            }
          },
          "good": {
            "lang": "java",
            "code": "public final class Meeting {\n  private LocalDateTime start;\n  private Duration length;\n\n  public Meeting(LocalDateTime start, Duration length) {\n    reschedule(start, length);\n  }\n\n  public void reschedule(LocalDateTime newStart, Duration newLength) {\n    if (newLength.isNegative() || newLength.isZero()) {\n      throw new IllegalArgumentException(\"length must be positive\");\n    }\n    this.start = newStart;\n    this.length = newLength;\n  }\n\n  public LocalDateTime startsAt() {\n    return start;\n  }\n\n  public LocalDateTime endsAt() {\n    return start.plus(length);\n  }\n}",
            "why": {
              "en": "Start and length change together in one validated step, and callers can't tell whether the end time is stored or computed.",
              "tr": "Başlangıç ve süre, doğrulanan tek bir adımda birlikte değişir; çağıranlar bitiş zamanının saklandığını mı yoksa hesaplandığını mı bilemez."
            }
          },
          "tip": {
            "en": "Before generating accessors, ask what callers actually want to do with the data and write that method instead.",
            "tr": "Erişimci üretmeden önce çağıranların veriyle gerçekte ne yapmak istediğini sorun ve onun yerine o metodu yazın."
          }
        },
        {
          "id": "abstract-the-meaning",
          "title": { "en": "Answer the Real Question", "tr": "Asıl Soruyu Yanıtlayın (Abstraction)" },
          "summary": {
            "en": "Returning raw storage values forces every caller to redo the same math; an abstract query hides the representation and keeps the rule in one place.",
            "tr": "Ham saklama değerlerini döndürmek her çağıranı aynı hesabı tekrarlamaya zorlar; soyut bir sorgu ise temsili gizler ve kuralı tek bir yerde tutar."
          },
          "bad": {
            "lang": "javascript",
            "code": "class StorageQuota {\n  constructor(bytesUsed, bytesAllowed) {\n    this.bytesUsed = bytesUsed;\n    this.bytesAllowed = bytesAllowed;\n  }\n\n  getBytesUsed() { return this.bytesUsed; }\n  getBytesAllowed() { return this.bytesAllowed; }\n}\n\nconst percent = (quota.getBytesUsed() / quota.getBytesAllowed()) * 100;\nif (percent > 90) {\n  showStorageWarning();\n}",
            "why": {
              "en": "Callers learn that the quota is kept in bytes and copy the percentage formula and the 90 threshold wherever they need it.",
              "tr": "Çağıranlar kotanın bayt olarak tutulduğunu öğrenir; yüzde formülünü ve 90 eşiğini ihtiyaç duydukları her yere kopyalar."
            }
          },
          "good": {
            "lang": "javascript",
            "code": "const WARNING_THRESHOLD_PERCENT = 90;\n\nclass StorageQuota {\n  #bytesUsed;\n  #bytesAllowed;\n\n  constructor(bytesUsed, bytesAllowed) {\n    this.#bytesUsed = bytesUsed;\n    this.#bytesAllowed = bytesAllowed;\n  }\n\n  percentUsed() {\n    return (this.#bytesUsed / this.#bytesAllowed) * 100;\n  }\n\n  isNearlyFull() {\n    return this.percentUsed() >= WARNING_THRESHOLD_PERCENT;\n  }\n}\n\nif (quota.isNearlyFull()) {\n  showStorageWarning();\n}",
            "why": {
              "en": "Callers ask the question they care about; switching to megabytes or a per-plan threshold changes only this class.",
              "tr": "Çağıranlar önemsedikleri soruyu sorar; megabayta ya da plana göre değişen bir eşiğe geçmek yalnızca bu sınıfı değiştirir."
            }
          },
          "tip": {
            "en": "If several callers perform the same calculation on an object's getters, that calculation is a missing method on the object.",
            "tr": "Birden fazla çağıran bir nesnenin getter'ları üzerinde aynı hesabı yapıyorsa, o hesap nesnede eksik olan bir metottur."
          }
        },
        {
          "id": "new-types-favor-objects",
          "title": { "en": "New Types Often? Use Objects", "tr": "Sık Yeni Tür mü Ekleniyor? Nesne Kullanın (Polymorphism)" },
          "summary": {
            "en": "When the list of variants keeps growing, type-checking functions must all be edited for each new variant; polymorphic classes absorb the change in one new class.",
            "tr": "Çeşitlerin listesi büyümeye devam ediyorsa, tür kontrolü yapan fonksiyonların her yeni çeşitte hepsi düzenlenmelidir; çok biçimli sınıflar ise değişikliği tek bir yeni sınıfta karşılar."
          },
          "bad": {
            "lang": "python",
            "code": "def send(channel, message):\n    if channel[\"kind\"] == \"email\":\n        smtp.send(channel[\"address\"], message)\n    elif channel[\"kind\"] == \"sms\":\n        sms_gateway.send(channel[\"phone\"], message[:SMS_LIMIT])\n    else:\n        raise UnknownChannelError(channel[\"kind\"])\n\n\ndef describe(channel):\n    if channel[\"kind\"] == \"email\":\n        return f\"Email to {channel['address']}\"\n    elif channel[\"kind\"] == \"sms\":\n        return f\"SMS to {channel['phone']}\"\n    raise UnknownChannelError(channel[\"kind\"])",
            "why": {
              "en": "Adding a Slack or push channel means finding and extending every if/elif chain in the codebase, and missing one fails only at runtime.",
              "tr": "Slack ya da push kanalı eklemek, kod tabanındaki her if/elif zincirini bulup genişletmek demektir; birini atlamak ancak çalışma zamanında hata verir."
            }
          },
          "good": {
            "lang": "python",
            "code": "class EmailChannel:\n    def __init__(self, address):\n        self._address = address\n\n    def send(self, message):\n        smtp.send(self._address, message)\n\n    def describe(self):\n        return f\"Email to {self._address}\"\n\n\nclass SmsChannel:\n    def __init__(self, phone):\n        self._phone = phone\n\n    def send(self, message):\n        sms_gateway.send(self._phone, message[:SMS_LIMIT])\n\n    def describe(self):\n        return f\"SMS to {self._phone}\"\n\n\ndef notify_all(channels, message):\n    for channel in channels:\n        channel.send(message)",
            "why": {
              "en": "A new channel is one new class; notify_all and the existing channels don't change.",
              "tr": "Yeni bir kanal tek bir yeni sınıftır; notify_all ve mevcut kanallar değişmez."
            }
          },
          "tip": {
            "en": "The price: adding a new operation such as estimate_cost now means editing every channel class. Accept it only if channels grow faster than operations.",
            "tr": "Bedeli şudur: estimate_cost gibi yeni bir işlem eklemek artık her kanal sınıfını düzenlemek demektir. Bunu yalnızca kanallar işlemlerden daha hızlı çoğalıyorsa kabul edin."
          }
        },
        {
          "id": "new-operations-favor-data",
          "title": { "en": "New Operations Often? Use Data Structures", "tr": "Sık Yeni İşlem mi Ekleniyor? Veri Yapısı Kullanın (Data Structure)" },
          "summary": {
            "en": "When the set of types is stable but reports and exports keep multiplying, simple records plus separate functions keep each new operation in one place.",
            "tr": "Tür kümesi sabit ama raporlar ve dışa aktarımlar çoğalmaya devam ediyorsa, basit kayıtlar artı ayrı fonksiyonlar her yeni işlemi tek bir yerde tutar."
          },
          "bad": {
            "lang": "python",
            "code": "class Deposit:\n    def __init__(self, account_id, amount_cents):\n        self.account_id = account_id\n        self.amount_cents = amount_cents\n\n    def to_csv_row(self):\n        return f\"{self.account_id},deposit,{self.amount_cents}\"\n\n    def fee_cents(self):\n        return 0\n\n\nclass Withdrawal:\n    def __init__(self, account_id, amount_cents, fee_cents):\n        self.account_id = account_id\n        self.amount_cents = amount_cents\n        self._fee_cents = fee_cents\n\n    def to_csv_row(self):\n        return f\"{self.account_id},withdrawal,{self.amount_cents}\"\n\n    def fee_cents(self):\n        return self._fee_cents",
            "why": {
              "en": "Deposits and withdrawals will not change, but every new report (JSON export, tax summary, audit line) must be added to both classes and drags formatting concerns into them.",
              "tr": "Mevduat ve para çekme türleri değişmeyecek, ama her yeni rapor (JSON dışa aktarımı, vergi özeti, denetim satırı) iki sınıfa da eklenmek zorunda ve biçimlendirme işlerini içlerine sürükler."
            }
          },
          "good": {
            "lang": "python",
            "code": "from dataclasses import dataclass\n\n\n@dataclass(frozen=True)\nclass Deposit:\n    account_id: str\n    amount_cents: int\n\n\n@dataclass(frozen=True)\nclass Withdrawal:\n    account_id: str\n    amount_cents: int\n    fee_cents: int\n\n\ndef to_csv_row(transaction):\n    match transaction:\n        case Deposit(account_id, amount):\n            return f\"{account_id},deposit,{amount}\"\n        case Withdrawal(account_id, amount, _fee):\n            return f\"{account_id},withdrawal,{amount}\"\n    raise UnknownTransactionError(transaction)\n\n\ndef total_fees_cents(transactions):\n    return sum(t.fee_cents for t in transactions if isinstance(t, Withdrawal))",
            "why": {
              "en": "The records are plain data; a new report is a new function in its own module, and the record classes are never reopened.",
              "tr": "Kayıtlar düz veridir; yeni bir rapor kendi modülünde yeni bir fonksiyondur ve kayıt sınıflarına bir daha dokunulmaz."
            }
          },
          "tip": {
            "en": "Don't mix the two: a class with public fields and business methods gets the costs of both styles and the benefits of neither.",
            "tr": "İkisini karıştırmayın: hem public alanları hem de iş metotları olan bir sınıf, iki stilin de maliyetini alır, hiçbirinin faydasını almaz."
          }
        }
      ]
    }
  ]
});
