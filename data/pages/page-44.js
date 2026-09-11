window.PAGE({
  "id": "page-44",
  "page": 44,
  "pdf_page": 75,
  "chapter": {
    "num": 3,
    "en": "Functions",
    "tr": "Fonksiyonlar"
  },
  "section": {
    "en": "Have No Side Effects",
    "tr": "Yan Etkilere Dikkat"
  },
  "title": {
    "en": "Have No Side Effects",
    "tr": "Yan Etkilere Dikkat"
  },
  "blocks": [
    {
      "type": "heading",
      "level": 1,
      "en": "Have No Side Effects",
      "tr": "Yan Etkilere Dikkat / Have No Side Effects",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Side effects are lies. Your function promises to do one thing, but it also does other <em>hidden</em> things. Sometimes it will make unexpected changes to the variables of its own class. Sometimes it will make them to the parameters passed into the function or to system globals. In either case they are devious and damaging mistruths that often result in strange temporal couplings and order dependencies.",
          "tr": "Yan etkiler (side effects) yalandır. Fonksiyonunuz tek bir şey yapma sözü verir, ama aynı zamanda başka <em>gizli</em> şeyler de yapar. Bazen kendi sınıfının değişkenlerinde beklenmedik değişiklikler yapabilir. Bazen fonksiyona geçirilen parametrelerde veya sistem genelindeki değişkenlerde (system globals) değişiklik yapabilir. Her iki durumda da bunlar sinsi ve zarar verici, çoğu zaman garip zamansal bağımlılıklara (temporal couplings) ve sıra bağımlılıklarına (order dependencies) yol açan yalanlardır.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Consider, for example, the seemingly innocuous function in Listing 3-6. This function uses a standard algorithm to match a <code>userName</code> to a <code>password</code>. It returns <code>true</code> if they match and <code>false</code> if anything goes wrong. But it also has a side effect. Can you spot it?",
          "tr": "Örneğin, Liste 3-6'daki görünüşte zararsız fonksiyonu ele alalım. Bu fonksiyon bir <code>userName</code>'i bir <code>password</code> ile eşleştirmek için standart bir algoritma kullanır. Eşleşirlerse <code>true</code>, bir şey yanlış giderse <code>false</code> döndürür. Ama aynı zamanda bir yan etkisi de vardır. Görebilir misiniz?",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "public class UserValidator {\n    private Cryptographer cryptographer;\n\n    public boolean checkPassword(String userName, String password) {\n        User user = UserGateway.findByName(userName);\n        if (user != User.NULL) {\n            String codedPhrase = user.getPhraseEncodedByPassword();\n            String phrase = cryptographer.decrypt(codedPhrase, password);\n            if (\"Valid Password\".equals(phrase)) {\n                Session.initialize();\n                return true;\n            }\n        }\n        return false;\n    }\n}",
      "caption": {
        "en": "Listing 3-6: UserValidator.java",
        "tr": "Listing 3-6: UserValidator.java"
      }
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "The side effect is the call to <code>Session.initialize()</code>, of course. The <code>checkPassword</code> function, by its name, says that it checks the password. The name does not imply that it initializes the session. So a caller who believes what the name of the function says runs the risk of erasing the existing session data when he or she decides to check the validity of the user.",
          "tr": "Yan etki elbette <code>Session.initialize()</code> çağrısıdır. <code>checkPassword</code> fonksiyonu, adından da anlaşılacağı gibi, şifreyi kontrol ettiğini söyler. Adı, oturumu başlattığını ima etmez. Bu yüzden fonksiyon adına güvenen bir çağırıcı, kullanıcının geçerliliğini kontrol etmeye karar verdiğinde mevcut oturum verilerini silme riskiyle karşılaşır.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "This side effect creates a temporal coupling. That is, <code>checkPassword</code> can only be called at certain times (in other words, when it is safe to initialize the session). If it is called out of order, session data may be inadvertently lost. Temporal couplings are confusing, especially when hidden as a side effect. If you must have a temporal coupling, you should make it clear in the name of the function. In this case we might rename the function <code>checkPasswordAndInitializeSession</code>, though that certainly violates \"Do one thing.\"",
          "tr": "Bu yan etki bir zamansal bağımlılık (temporal coupling) yaratır. Yani <code>checkPassword</code> yalnızca belirli zamanlarda (başka bir deyişle, oturumu başlatmanın güvenli olduğu zamanlarda) çağrılabilir. Yanlış sırada çağrılırsa oturum verileri istemeden kaybolabilir. Zamansal bağımlılıklar kafa karıştırıcıdır, özellikle yan etki olarak gizlendiğinde. Eğer zamansal bir bağımlılığınız olması gerekiyorsa, bunu fonksiyonun adında açıkça belirtmelisiniz. Bu durumda fonksiyonu <code>checkPasswordAndInitializeSession</code> olarak yeniden adlandırabilirdik, ancak bu da \"Tek Bir Şey Yap\" kuralını kesinlikle ihlal eder.",
          "html": true
        }
      ]
    }
  ],
  "concepts": [
    {
      "id": "side-effects",
      "title": {
        "en": "Side Effects",
        "tr": "Yan Etkiler (Side Effects)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Yan etki, bir fonksiyonun adının vaat ettiğinin ötesinde yaptığı gizli işlemlerdir. Bu, sınıf değişkenlerini değiştirmek, global durumu etkilemek veya geçirilen parametreleri bozmak olabilir.</span><span class=\"en-text\">A side effect is a hidden operation that a function performs beyond what its name promises. This could be modifying class variables, affecting global state, or corrupting passed parameters.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Gizli yan etki</span><span class=\"en-text\">BAD — Hidden side effect</span></span>\n<pre><span class=\"kw\">class</span> <span class=\"type\">ShoppingCart</span>:\n    <span class=\"kw\">def</span> <span class=\"method\">calculateTotal</span>(self):\n        total = <span class=\"method\">sum</span>(item.price <span class=\"kw\">for</span> item <span class=\"kw\">in</span> self.items)\n        self.lastCalculated = datetime.<span class=\"method\">now</span>()  <span class=\"comment\"># Gizli!</span>\n        self.<span class=\"method\">sendAnalytics</span>(total)              <span class=\"comment\"># Gizli!</span>\n        <span class=\"kw\">return</span> total</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Şeffaf fonksiyonlar</span><span class=\"en-text\">GOOD — Transparent functions</span></span>\n<pre><span class=\"kw\">class</span> <span class=\"type\">ShoppingCart</span>:\n    <span class=\"kw\">def</span> <span class=\"method\">calculateTotal</span>(self):\n        <span class=\"kw\">return</span> <span class=\"method\">sum</span>(item.price <span class=\"kw\">for</span> item <span class=\"kw\">in</span> self.items)\n\n    <span class=\"kw\">def</span> <span class=\"method\">calculateAndTrack</span>(self):\n        total = self.<span class=\"method\">calculateTotal</span>()\n        self.lastCalculated = datetime.<span class=\"method\">now</span>()\n        self.<span class=\"method\">sendAnalytics</span>(total)\n        <span class=\"kw\">return</span> total</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">Fonksiyonun adını okuyun ve kendinize sorun: \"Bu isim, fonksiyonun yaptığı HER ŞEYİ açıklıyor mu?\" Eğer hayırsa, ya yan etkiyi kaldırın ya da ismi güncelleyin.</span><span class=\"en-text\">Read the function name and ask yourself: \"Does this name explain EVERYTHING the function does?\" If not, either remove the side effect or update the name.</span></div>"
    },
    {
      "id": "temporal-coupling",
      "title": {
        "en": "Temporal Coupling",
        "tr": "Zamansal Bağımlılık (Temporal Coupling)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Zamansal bağımlılık, bir fonksiyonun yalnızca belirli bir zamanda veya belirli bir sırayla çağrılabilmesini ifade eder. Yan etki olarak gizlendiğinde tehlikeli olur çünkü çağırıcı bu kısıtlamadan haberdar değildir.</span><span class=\"en-text\">Temporal coupling means a function can only be called at certain times or in a certain order. When hidden as a side effect, it's dangerous because the caller is unaware of this constraint.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Gizli sıra bağımlılığı</span><span class=\"en-text\">BAD — Hidden order dependency</span></span>\n<pre><span class=\"kw\">class</span> <span class=\"type\">ReportGenerator</span> {\n    <span class=\"kw\">public</span> <span class=\"type\">Report</span> <span class=\"method\">generate</span>() {\n        <span class=\"comment\">// Gizli: veri kaynağına bağlanır!</span>\n        this.connection = <span class=\"type\">Database</span>.<span class=\"method\">connect</span>();\n        <span class=\"kw\">return</span> <span class=\"kw\">new</span> <span class=\"type\">Report</span>(this.connection.<span class=\"method\">query</span>(<span class=\"str\">\"SELECT...\"</span>));\n    }\n\n    <span class=\"kw\">public void</span> <span class=\"method\">cleanup</span>() {\n        <span class=\"comment\">// generate() çağrılmadan cleanup() çağrılamaz!</span>\n        this.connection.<span class=\"method\">close</span>();\n    }\n}</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Bağımlılık açıkça belirtilmiş</span><span class=\"en-text\">GOOD — Dependency made explicit</span></span>\n<pre><span class=\"kw\">class</span> <span class=\"type\">ReportGenerator</span> {\n    <span class=\"kw\">public</span> <span class=\"type\">Report</span> <span class=\"method\">connectAndGenerate</span>() {\n        <span class=\"kw\">try</span> (<span class=\"type\">Connection</span> conn = <span class=\"type\">Database</span>.<span class=\"method\">connect</span>()) {\n            <span class=\"kw\">return</span> <span class=\"kw\">new</span> <span class=\"type\">Report</span>(conn.<span class=\"method\">query</span>(<span class=\"str\">\"SELECT...\"</span>));\n        }\n    }\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">Eğer fonksiyonlarınızın belirli bir sırayla çağrılması gerekiyorsa, ya isimlerinde bunu açıkça belirtin ya da bu sırayı ortadan kaldıracak şekilde yeniden tasarlayın (try-with-resources gibi).</span><span class=\"en-text\">If your functions need to be called in a specific order, either make this explicit in their names or redesign to eliminate the ordering requirement (like try-with-resources).</span></div>"
    },
    {
      "id": "honest-naming",
      "title": {
        "en": "Honest Naming",
        "tr": "Dürüst İsimlendirme (Honest Naming)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Bir fonksiyonun adı, o fonksiyonun yaptığı her şeyi dürüstçe yansıtmalıdır. Eğer ad ile davranış uyumsuzsa, bu bir yalandır ve kodunuzu okuyan herkes için tuzak oluşturur.</span><span class=\"en-text\">A function's name should honestly reflect everything that function does. If the name and behavior are inconsistent, that's a lie and creates traps for everyone reading your code.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — İsim ile davranış uyumsuz</span><span class=\"en-text\">BAD — Name doesn't match behavior</span></span>\n<pre><span class=\"kw\">function</span> <span class=\"method\">validateEmail</span>(email) {\n    <span class=\"kw\">const</span> isValid = <span class=\"field\">EMAIL_REGEX</span>.<span class=\"method\">test</span>(email);\n    <span class=\"kw\">if</span> (isValid) {\n        <span class=\"method\">sendWelcomeEmail</span>(email);  <span class=\"comment\">// Doğrulama mı, e-posta gönderme mi?</span>\n        <span class=\"method\">incrementSignupCount</span>();   <span class=\"comment\">// Sayaç artırma?!</span>\n    }\n    <span class=\"kw\">return</span> isValid;\n}</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Her fonksiyon adına sadık</span><span class=\"en-text\">GOOD — Each function true to its name</span></span>\n<pre><span class=\"kw\">function</span> <span class=\"method\">isValidEmail</span>(email) {\n    <span class=\"kw\">return</span> <span class=\"field\">EMAIL_REGEX</span>.<span class=\"method\">test</span>(email);\n}\n\n<span class=\"kw\">function</span> <span class=\"method\">registerNewUser</span>(email) {\n    <span class=\"kw\">if</span> (!<span class=\"method\">isValidEmail</span>(email)) <span class=\"kw\">throw new</span> <span class=\"type\">Error</span>(<span class=\"str\">\"Geçersiz e-posta\"</span>);\n    <span class=\"method\">sendWelcomeEmail</span>(email);\n    <span class=\"method\">incrementSignupCount</span>();\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">\"En Az Şaşırtma İlkesi\"ni (Principle of Least Surprise) hatırlayın: Fonksiyonun adını okuyan biri ne bekliyorsa, fonksiyon TAM da onu yapmalıdır. Ne eksik, ne fazla.</span><span class=\"en-text\">Remember the \"Principle of Least Surprise\": Whatever someone expects from reading the function name, the function should do EXACTLY that. No less, no more.</span></div>"
    }
  ]
});
