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
    },
    {
      "id": "ch6-p98-99",
      "pages": [98, 99],
      "title": {
        "en": "Law of Demeter: Train Wrecks, Hybrids and Hiding Structure",
        "tr": "Demeter Yasası: Tren Kazaları, Melez Yapılar ve Yapıyı Gizleme"
      },
      "blocks": [
        { "type": "heading", "level": 2, "en": "The Law of Demeter (continued)", "tr": "Demeter Yasası (Law of Demeter) — devam" },
        { "type": "para", "sentences": [
          { "en": "The list of allowed call targets is completed: besides its own class and objects it creates, a method may also use objects it receives as arguments and objects stored in its class's instance variables.", "tr": "İzin verilen çağrı hedeflerinin listesi tamamlanır: bir metot kendi sınıfı ve kendi oluşturduğu nesnelerin yanı sıra, argüman olarak aldığı nesneleri ve sınıfının örnek değişkenlerinde (instance variables) tutulan nesneleri de kullanabilir." },
          { "en": "What it should not do is call methods on something one of those targets hands back.", "tr": "Yapmaması gereken şey ise bu hedeflerden birinin geri verdiği bir şeyin metotlarını çağırmaktır." },
          { "en": "The book's short slogan for this: deal with your friends, not with the strangers your friends introduce you to.", "tr": "Kitap bunu kısaca şöyle özetler: arkadaşlarınızla konuşun, arkadaşlarınızın size tanıttığı yabancılarla değil." }
        ]},

        { "type": "heading", "level": 2, "en": "Train Wrecks", "tr": "Tren Kazaları (Train Wrecks)" },
        { "type": "list", "ordered": false, "items": [
          { "en": "The example, taken from an Apache project, is a single line that asks a context object for its options, asks those options for a scratch directory, and asks that directory for its absolute path.", "tr": "Bir Apache projesinden alınan örnek tek bir satırdır: bir bağlam nesnesinden seçeneklerini, bu seçeneklerden bir geçici çalışma dizinini (scratch directory), o dizinden de mutlak yolunu ister." },
          { "en": "Such chains of dotted calls look like coupled railway cars, hence the name; they are generally seen as careless style.", "tr": "Böyle noktalarla bağlanmış çağrı zincirleri birbirine takılı vagonlara benzer, adı da buradan gelir; genellikle özensiz bir stil olarak görülür." },
          { "en": "Splitting the chain into one local variable per step reads better, but it does not remove the underlying problem: the function still knows how three different objects are nested inside each other.", "tr": "Zinciri her adım için bir yerel değişkene bölmek okunabilirliği artırır, ama asıl sorunu ortadan kaldırmaz: fonksiyon hâlâ üç farklı nesnenin birbirinin içine nasıl yerleştiğini bilir." }
        ]},

        { "type": "heading", "level": 3, "en": "Objects or data structures?", "tr": "Nesne mi, veri yapısı mı?" },
        { "type": "para", "sentences": [
          { "en": "Whether this knowledge is a violation depends on what those three types really are.", "tr": "Bu bilginin bir ihlal olup olmadığı, bu üç türün gerçekte ne olduğuna bağlıdır." },
          { "en": "If they are objects, their inner structure is supposed to be hidden, so navigating through it clearly breaks the law.", "tr": "Nesnelerse iç yapılarının gizli olması beklenir; bu yüzden içlerinde gezinmek yasayı açıkça çiğner." },
          { "en": "If they are plain data structures without behavior, exposing their structure is their whole purpose, and Demeter simply does not apply.", "tr": "Davranışı olmayan düz veri yapılarıysa yapılarını açığa koymak zaten varlık nedenleridir ve Demeter Yasası bu durumda geçerli değildir." },
          { "en": "Accessor methods blur the picture: the same navigation written with public fields instead of getters would hardly raise the question.", "tr": "Erişimci (accessor) metotlar tabloyu bulanıklaştırır: aynı gezinme getter yerine public alanlarla yazılsaydı bu soru neredeyse hiç akla gelmezdi." },
          { "en": "Things would be clearer if data structures had only public fields and objects had only private fields with public behavior, but conventions such as JavaBeans require accessors even on simple data holders.", "tr": "Veri yapıları yalnızca public alanlara, nesneler de yalnızca private alanlara ve public davranışlara sahip olsaydı her şey daha net olurdu; ama JavaBeans gibi kurallar basit veri taşıyıcılarında bile erişimci ister." }
        ]},

        { "type": "heading", "level": 2, "en": "Hybrids", "tr": "Melez Yapılar (Hybrids)" },
        { "type": "list", "ordered": false, "items": [
          { "en": "The confusion produces classes that are half object, half data structure: they contain meaningful behavior but also expose their state through public fields or accessors and mutators.", "tr": "Bu karışıklık yarı nesne, yarı veri yapısı olan sınıflar doğurur: anlamlı davranışlar içerirler, ama durumlarını public alanlar ya da erişimciler ve değiştiriciler (mutators) üzerinden de açığa koyarlar." },
          { "en": "That exposed state invites outside functions to operate on the data procedurally — a smell the book links to Feature Envy.", "tr": "Açıkta kalan bu durum, dışarıdaki fonksiyonları veri üzerinde prosedürel biçimde çalışmaya davet eder; kitap bu kokuyu Özellik Kıskançlığı (Feature Envy) ile ilişkilendirir." },
          { "en": "Hybrids make both new functions and new data types hard to add, so they get the worst of both styles.", "tr": "Melez yapılar hem yeni fonksiyon hem de yeni veri türü eklemeyi zorlaştırır; yani iki stilin de en kötü yanını alırlar." },
          { "en": "They signal a design whose authors never decided whether they needed protection against new functions or against new types.", "tr": "Tasarımcılarının yeni fonksiyonlara karşı mı yoksa yeni türlere karşı mı korunmaya ihtiyaç duyduklarına hiç karar vermediği bir tasarımın işaretidir." }
        ]},

        { "type": "heading", "level": 2, "en": "Hiding Structure", "tr": "Yapıyı Gizleme (Hiding Structure)" },
        { "type": "para", "sentences": [
          { "en": "Now assume the context, options and directory are real objects. Then we must not walk through them — so how do we get the path?", "tr": "Şimdi bağlamın, seçeneklerin ve dizinin gerçek nesneler olduğunu varsayalım. O zaman içlerinde gezinmemeliyiz; peki yola nasıl ulaşacağız?" },
          { "en": "Two obvious fixes both disappoint: one very specific method on the context for every such request would bloat its interface, and a shorter chain only works if the intermediate result is a data structure.", "tr": "Akla gelen iki çözüm de tatmin etmez: bu tür her istek için bağlama çok özel bir metot eklemek arayüzünü şişirir; zinciri kısaltmak ise ancak ara sonuç bir veri yapısıysa işe yarar." },
          { "en": "The better move is to stop asking an object about its internals and instead tell it what we want done, which starts with asking why we needed the path at all.", "tr": "Daha iyi yol, nesneye iç yapısını sormayı bırakıp ondan ne yapılmasını istediğimizi söylemektir; bu da önce o yola neden ihtiyaç duyduğumuzu sormakla başlar." },
          { "en": "Further down in the same module the path is glued together with slashes, a class name and a file extension, then wrapped in output streams — mixing several levels of detail in one place.", "tr": "Aynı modülün daha aşağısında bu yol eğik çizgiler, bir sınıf adı ve bir dosya uzantısıyla birleştirilir, sonra çıkış akışlarına sarılır; böylece birkaç ayrıntı düzeyi tek bir yerde karışır." },
          { "en": "Setting that mess aside, the real intent was to create a scratch file with a given name; page 100 shows how handing that job to the context object resolves the problem.", "tr": "Bu karışıklık bir yana, asıl amaç belirli bir adla geçici bir dosya oluşturmaktı; sayfa 100 bu işi bağlam nesnesine devretmenin sorunu nasıl çözdüğünü gösterir." }
        ]},

        { "type": "heading", "level": 2, "en": "Key takeaways", "tr": "Akılda kalsın" },
        { "type": "list", "ordered": true, "items": [
          { "en": "Call methods on your own class, on objects you create, receive or hold — not on what they return.", "tr": "Kendi sınıfınızın, oluşturduğunuz, aldığınız ya da tuttuğunuz nesnelerin metotlarını çağırın; onların döndürdüklerinin değil." },
          { "en": "Breaking a train wreck into variables improves reading, not design.", "tr": "Tren kazasını değişkenlere bölmek okunabilirliği iyileştirir, tasarımı değil." },
          { "en": "Demeter governs objects; plain data structures may be navigated freely.", "tr": "Demeter Yasası nesneler için geçerlidir; düz veri yapılarında serbestçe gezinilebilir." },
          { "en": "Don't build half-object, half-data classes.", "tr": "Yarı nesne, yarı veri olan sınıflar yazmayın." },
          { "en": "When you catch yourself digging for data, ask what you wanted it for and tell the object to do that.", "tr": "Kendinizi veri ararken yakaladığınızda onu ne için istediğinizi sorun ve bunu yapmasını nesneye söyleyin." }
        ]}
      ],
      "concepts": [
        {
          "id": "stop-the-train-wreck",
          "title": { "en": "Stop the Train Wreck", "tr": "Tren Kazasını Durdurun (Law of Demeter)" },
          "summary": {
            "en": "A chain of getters couples the caller to every object along the path; asking the first object for the answer keeps that knowledge where it belongs.",
            "tr": "Getter zinciri çağıranı yol üzerindeki her nesneye bağlar; cevabı ilk nesneden istemek bu bilgiyi ait olduğu yerde tutar."
          },
          "bad": {
            "lang": "javascript",
            "code": "function shippingCost(order) {\n  const country = order.getCustomer().getAddress().getCountry();\n  if (country.getCode() === HOME_COUNTRY_CODE) {\n    return DOMESTIC_RATE;\n  }\n  return INTERNATIONAL_RATE;\n}",
            "why": {
              "en": "shippingCost now depends on Order, Customer, Address and Country; moving the country onto the order's delivery details breaks it.",
              "tr": "shippingCost artık Order, Customer, Address ve Country'ye bağımlıdır; ülke bilgisini siparişin teslimat ayrıntılarına taşımak onu bozar."
            }
          },
          "good": {
            "lang": "javascript",
            "code": "class Order {\n  #customer;\n\n  constructor(customer) {\n    this.#customer = customer;\n  }\n\n  isDomestic() {\n    return this.#customer.livesIn(HOME_COUNTRY_CODE);\n  }\n}\n\nfunction shippingCost(order) {\n  return order.isDomestic() ? DOMESTIC_RATE : INTERNATIONAL_RATE;\n}",
            "why": {
              "en": "shippingCost talks only to the order; each class passes the question one step inward to its own direct collaborator.",
              "tr": "shippingCost yalnızca siparişle konuşur; her sınıf soruyu yalnızca bir adım içeriye, kendi doğrudan iş birlikçisine iletir."
            }
          },
          "tip": {
            "en": "Chains over plain records (config.database.host) are fine; the rule targets objects that are supposed to hide their structure.",
            "tr": "Düz kayıtlar üzerindeki zincirler (config.database.host) sorun değildir; kural, yapısını gizlemesi beklenen nesneleri hedefler."
          }
        },
        {
          "id": "no-hybrids",
          "title": { "en": "Pick a Side: No Hybrids", "tr": "Taraf Seçin: Melez Yapı Yok (Hybrid)" },
          "summary": {
            "en": "A class that has business rules but also lets anyone edit its fields cannot guarantee those rules; make it either a real object or a plain record.",
            "tr": "İş kuralları olan ama alanlarını herkesin değiştirmesine de izin veren bir sınıf bu kuralları güvence altına alamaz; onu ya gerçek bir nesne ya da düz bir kayıt yapın."
          },
          "bad": {
            "lang": "python",
            "code": "class ShoppingCart:\n    def __init__(self):\n        self.items = []\n        self.discount_percent = 0\n\n    def total_cents(self):\n        subtotal = sum(item.price_cents for item in self.items)\n        return subtotal * (100 - self.discount_percent) // 100\n\n\ncart.discount_percent = 150\ncart.items.append(free_gift)",
            "why": {
              "en": "total_cents looks like behavior, but callers bypass it and edit items and discount directly, so an invalid discount slips in and rules end up scattered.",
              "tr": "total_cents bir davranış gibi görünür, ama çağıranlar onu atlayıp items ve discount alanlarını doğrudan değiştirir; geçersiz bir indirim içeri sızar ve kurallar dağılır."
            }
          },
          "good": {
            "lang": "python",
            "code": "MAX_DISCOUNT_PERCENT = 50\n\n\nclass ShoppingCart:\n    def __init__(self):\n        self._items = []\n        self._discount_percent = 0\n\n    def add(self, item):\n        self._items.append(item)\n\n    def apply_discount(self, percent):\n        if not 0 <= percent <= MAX_DISCOUNT_PERCENT:\n            raise InvalidDiscountError(percent)\n        self._discount_percent = percent\n\n    def total_cents(self):\n        subtotal = sum(item.price_cents for item in self._items)\n        return subtotal * (100 - self._discount_percent) // 100",
            "why": {
              "en": "All changes go through methods that enforce the rules; the cart is now clearly an object, not a bag of data.",
              "tr": "Tüm değişiklikler kuralları uygulayan metotlardan geçer; sepet artık açıkça bir nesnedir, veri torbası değil."
            }
          },
          "tip": {
            "en": "If a class truly has no rules, go the other way: a frozen dataclass with no methods is an honest data structure.",
            "tr": "Sınıfın gerçekten hiçbir kuralı yoksa ters yöne gidin: metotsuz, dondurulmuş (frozen) bir dataclass dürüst bir veri yapısıdır."
          }
        },
        {
          "id": "tell-what-you-need",
          "title": { "en": "Tell the Object What You Need", "tr": "Nesneye Ne İstediğinizi Söyleyin (Hiding Structure)" },
          "summary": {
            "en": "Pulling internals out of an object to finish its job elsewhere spreads its details around; ask why you wanted the data and move that work into the object.",
            "tr": "Bir nesnenin iç ayrıntılarını çekip işini başka yerde bitirmek o ayrıntıları etrafa yayar; veriyi neden istediğinizi sorun ve o işi nesnenin içine taşıyın."
          },
          "bad": {
            "lang": "java",
            "code": "public void saveReport(Workspace workspace, Report report) throws IOException {\n  Path root = workspace.getSettings().getExportFolder().toPath();\n  Path target = root.resolve(report.name().replace(' ', '_') + \".pdf\");\n  try (OutputStream out = Files.newOutputStream(target)) {\n    report.writePdf(out);\n  }\n}",
            "why": {
              "en": "The caller knows how Workspace stores its settings, where exports live, and how file names are built — mixing high-level intent with path details.",
              "tr": "Çağıran, Workspace'in ayarlarını nasıl sakladığını, dışa aktarımların nerede durduğunu ve dosya adlarının nasıl kurulduğunu bilir; üst düzey niyet yol ayrıntılarıyla karışır."
            }
          },
          "good": {
            "lang": "java",
            "code": "public void saveReport(Workspace workspace, Report report) throws IOException {\n  try (OutputStream out = workspace.openExportStream(report.name())) {\n    report.writePdf(out);\n  }\n}\n\npublic final class Workspace {\n  private static final String EXPORT_EXTENSION = \".pdf\";\n  private final Path exportFolder;\n\n  public Workspace(Path exportFolder) {\n    this.exportFolder = exportFolder;\n  }\n\n  public OutputStream openExportStream(String reportName) throws IOException {\n    String fileName = reportName.replace(' ', '_') + EXPORT_EXTENSION;\n    return Files.newOutputStream(exportFolder.resolve(fileName));\n  }\n}",
            "why": {
              "en": "saveReport states its intent in one call; Workspace can change where and how exports are stored without touching any caller.",
              "tr": "saveReport niyetini tek bir çağrıyla ifade eder; Workspace dışa aktarımların nerede ve nasıl saklandığını hiçbir çağırana dokunmadan değiştirebilir."
            }
          },
          "tip": {
            "en": "Name the new method after the caller's goal (openExportStream), not after the data you used to fetch (getExportFolderPath).",
            "tr": "Yeni metodu eskiden çektiğiniz veriye göre (getExportFolderPath) değil, çağıranın amacına göre (openExportStream) adlandırın."
          }
        }
      ]
    }
  ]
});
