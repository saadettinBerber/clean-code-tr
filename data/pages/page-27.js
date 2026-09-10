window.PAGE({
  "id": "page-27",
  "page": 27,
  "pdf_page": 58,
  "chapter": {
    "num": 2,
    "en": "Meaningful Names",
    "tr": "Anlamlı İsimler"
  },
  "section": {
    "en": "Solution and Problem Domain Names / Meaningful Context",
    "tr": "Solution and Problem Domain Names / Meaningful Context"
  },
  "title": {
    "en": "Çözüm ve Problem Alanı İsimlerini Kullanma, Anlamlı Bağlam Ekleme",
    "tr": "Çözüm ve Problem Alanı İsimlerini Kullanma, Anlamlı Bağlam Ekleme"
  },
  "blocks": [
    {
      "type": "para",
      "sentences": [
        {
          "en": "If you follow the “one word per concept” rule, you could end up with many classes that have, for example, an <code>add</code> method. As long as the parameter lists and return values of the various <code>add</code> methods are semantically equivalent, all is well.",
          "tr": "Eğer \"her kavram için tek kelime\" kuralına uyarsanız, örneğin <code>add</code> metoduna sahip birçok sınıfınız olabilir. Farklı <code>add</code> metotlarının parametre listeleri ve dönüş değerleri anlamsal olarak eşdeğer olduğu sürece her şey yolundadır.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "However one might decide to use the word <code>add</code> for “consistency” when he or she is not in fact adding in the same sense. Let’s say we have many classes where <code>add</code> will create a new value by adding or concatenating two existing values. Now let’s say we are writing a new class that has a method that puts its single parameter into a collection. Should we call this method <code>add</code>? It might seem consistent because we have so many other <code>add</code> methods, but in this case, the semantics are different, so we should use a name like <code>insert</code> or <code>append</code> instead. To call the new method <code>add</code> would be a pun.",
          "tr": "Ancak birisi, aslında aynı anlamda ekleme yapmadığı halde \"tutarlılık\" adına <code>add</code> kelimesini kullanmaya karar verebilir. Diyelim ki mevcut iki değeri toplayarak veya birbirine bağlayarak yeni bir değer oluşturan birçok sınıfımızda <code>add</code> metodu var. Şimdi tek bir parametreyi bir koleksiyona (collection) yerleştiren bir metoda sahip yeni bir sınıf yazdığımızı varsayalım. Bu metoda <code>add</code> demeli miyiz? Diğer pek çok <code>add</code> metodumuz olduğu için tutarlı görünebilir, ancak bu durumda semantik (anlamsal yapı) farklıdır; bu yüzden <code>insert</code> veya <code>append</code> gibi bir isim kullanmalıyız. Yeni metoda <code>add</code> demek bir kelime oyunu (pun) olurdu.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Our goal, as authors, is to make our code as easy as possible to understand. We want our code to be a quick skim, not an intense study. We want to use the popular paperback model whereby the author is responsible for making himself clear and not the academic model where it is the scholar’s job to dig the meaning out of the paper.",
          "tr": "Yazarlar olarak amacımız, kodumuzu anlaşılması mümkün olduğunca kolay hale getirmektir. Kodumuzun yoğun bir çalışma değil, hızlı bir göz gezdirme (skim) olmasını isteriz. Yazarın kendini açıkça ifade etmekten sorumlu olduğu popüler karton kapaklı kitap modelini (popular paperback model) kullanmak isteriz; okuyucunun anlamı kağıttan kazıyıp çıkarmak zorunda olduğu akademik modeli değil.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Use Solution Domain Names",
      "tr": "Çözüm Alanı İsimlerini Kullanma / Use Solution Domain Names",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Remember that the people who read your code will be programmers. So go ahead and use computer science (CS) terms, algorithm names, pattern names, math terms, and so forth. It is not wise to draw every name from the problem domain because we don’t want our coworkers to have to run back and forth to the customer asking what every name means when they already know the concept by a different name.",
          "tr": "Kodunuzu okuyacak kişilerin programcılar olacağını unutmayın. Bu yüzden bilgisayar bilimleri (CS) terimlerini, algoritma isimlerini, desen (pattern) isimlerini, matematik terimlerini ve benzerlerini kullanmaktan çekinmeyin. Her ismi problem alanından (problem domain) çekip çıkarmak akıllıca değildir; çünkü iş arkadaşlarımızın zaten farklı bir isimle bildikleri bir kavramın ne anlama geldiğini sormak için sürekli müşteriye koşmalarını istemeyiz.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "The name <code>AccountVisitor</code> means a great deal to a programmer who is familiar with the VISITOR pattern. What programmer would not know what a <code>JobQueue</code> was? There are lots of very technical things that programmers have to do. Choosing technical names for those things is usually the most appropriate course.",
          "tr": "<code>AccountVisitor</code> ismi, ZİYARETÇİ desenine (VISITOR pattern) aşina olan bir programcı için çok şey ifade eder. Hangi programcı bir İş Kuyruğu'nun (JobQueue) ne olduğunu bilmez? Programcıların yapmak zorunda olduğu pek çok teknik şey vardır. Bunlar için teknik isimler seçmek genellikle en uygun yoldur.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Use Problem Domain Names",
      "tr": "Problem Alanı İsimlerini Kullanma / Use Problem Domain Names",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "When there is no “programmer-eese” for what you’re doing, use the name from the problem domain. At least the programmer who maintains your code can ask a domain expert what it means.",
          "tr": "Yaptığınız iş için bir \"programcı dili\" (programmer-eese) yoksa, problem alanından (problem domain) bir isim kullanın. En azından kodu koruyan programcı, bir alan uzmanına (domain expert) bunun ne anlama geldiğini sorabilir.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Separating solution and problem domain concepts is part of the job of a good programmer and designer. The code that has more to do with problem domain concepts should have names drawn from the problem domain.",
          "tr": "Çözüm ve problem alanı kavramlarını birbirinden ayırmak, iyi bir programcı ve tasarımcının görevinin bir parçasıdır. Problem alanı kavramlarıyla daha çok ilgili olan kodlar, problem alanından seçilmiş isimlere sahip olmalıdır.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Add Meaningful Context",
      "tr": "Anlamlı Bağlam Ekleme / Add Meaningful Context",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "There are a few names which are meaningful in and of themselves—most are not. Instead, you need to place names in context for your reader by enclosing them in well-named classes, functions, or namespaces. When all else fails, then prefixing the name may be necessary as a last resort.",
          "tr": "Kendi başlarına anlamlı olan çok az isim vardır; çoğu değildir. Bunun yerine, isimleri iyi adlandırılmış sınıflar, fonksiyonlar veya ad alanları (namespaces) içine yerleştirerek okuyucu için bir bağlam (context) oluşturmanız gerekir. Her şey başarısız olduğunda, ismin önüne bir önek (prefix) eklemek son çare olarak gerekli olabilir.",
          "html": true
        }
      ]
    }
  ],
  "concepts": [
    {
      "id": "pun",
      "title": {
        "en": "Avoid Punning",
        "tr": "Kelime Oyunlarından Kaçınma (Avoid Punning)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Aynı kelimeyi iki farklı amaç için kullanmak bir kelime oyunudur. \"Tutarlılık\" adına farklı anlamlara gelen eylemler için aynı kelimeyi seçmek okuyucuyu yanıltır. Örneğin, iki sayıyı toplamak ile bir öğeyi listeye eklemek farklı anlamsal eylemlerdir.</span><span class=\"en-text\">Using the same word for two different purposes is punning. Choosing the same word for actions with different meanings for the sake of \"consistency\" misleads the reader. For example, adding two numbers and inserting an item into a list are different semantic actions.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — \"add\" kelimesinin aşırı yüklenmesi</span><span class=\"en-text\">BAD — Overloading the word \"add\"</span></span>\n<pre>public class Calculator {\n    public int add(int a, int b) { return a + b; }\n}\n\npublic class UserList {\n    // Koleksiyona ekleme yaparken de 'add' kullanılmış\n    public void add(User user) { users.add(user); }\n}</pre>\n<div class=\"explanation\"><span class=\"tr-text\">Burada <code>UserList.add</code> metodu matematiksel bir toplama yapmıyor, sadece koleksiyona bir öğe yerleştiriyor. Diğer sınıflardaki <code>add</code> metotlarıyla \"benzer\" görünse de işlevi farklıdır.</span><span class=\"en-text\">Here, <code>UserList.add</code> doesn't perform a mathematical addition; it just inserts an item into a collection. Even if it looks \"consistent\" with other <code>add</code> methods, its function is different.</span></div>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Anlamsal olarak doğru terimler</span><span class=\"en-text\">GOOD — Semantically correct terms</span></span>\n<pre>public class Calculator {\n    public int add(int a, int b) { return a + b; }\n}\n\npublic class UserList {\n    public void insert(User user) { users.add(user); }\n    // veya\n    public void append(User user) { users.add(user); }\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">Kodunuzu bir \"paperback\" (karton kapaklı popüler roman) gibi yazın. Okuyucunun anlamı çözmek için dedektiflik yapmasına gerek kalmamalı. Kelimelerin yaygın teknik anlamlarına sadık kalın.</span><span class=\"en-text\">Write your code like a \"paperback\" novel. The reader shouldn't have to play detective to figure out the meaning. Stick to common technical meanings of words.</span></div>"
    },
    {
      "id": "solution-domain",
      "title": {
        "en": "Solution Domain Names",
        "tr": "Çözüm Alanı İsimleri (Solution Domain Names)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Kodunuzu programcılar okur. Bu yüzden teknik terimleri (algoritmalar, desenler, veri yapıları) kullanmaktan çekinmeyin. Bir programcıya \"Müşteri Hesabı Veri Erişim Nesnesi\" demek yerine \"AccountDAO\" demek çok daha hızlı ve net bir iletişim sağlar.</span><span class=\"en-text\">Programmers read your code. So don't hesitate to use technical terms (algorithms, patterns, data structures). Saying \"AccountDAO\" to a programmer is much faster and clearer than saying \"Customer Account Data Access Object.\"</span></p>\n<h4><span class=\"tr-text\">İyi Örnekler</span><span class=\"en-text\">Good Examples</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Teknik terimlerin kullanımı</span><span class=\"en-text\">GOOD — Use of technical terms</span></span>\n<pre>// Programcılar bu isimlerin ne anlama geldiğini hemen anlar:\nclass AccountObserver { ... }\nclass EmailPriorityQueue { ... }\npublic void sortWithQuickSort() { ... }\npublic UserFactory userFactory; </pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">Eğer bir tasarım deseni (design pattern) kullanıyorsanız, o desenin adını sınıf ismine dahil edin. Örneğin, <code>Account</code> yerine <code>AccountProxy</code> veya <code>AccountDecorator</code> kullanmak, kodun mimari rolünü anında açıklar.</span><span class=\"en-text\">If you are using a design pattern, include its name in the class name. For example, using <code>AccountProxy</code> or <code>AccountDecorator</code> instead of just <code>Account</code> immediately clarifies the code's architectural role.</span></div>"
    },
    {
      "id": "problem-domain",
      "title": {
        "en": "Problem Domain Names",
        "tr": "Problem Alanı İsimleri (Problem Domain Names)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Yaptığınız işin teknik bir karşılığı yoksa, o işin yapıldığı alanın (finans, sağlık, oyun vb.) terminolojisini kullanın. Bu, teknik olmayan ekip üyeleri ve alan uzmanlarıyla aynı dili konuşmanızı sağlar ve bakım aşamasında anlam karmaşasını önler.</span><span class=\"en-text\">If there is no technical equivalent for what you're doing, use the terminology of the domain (finance, health, gaming, etc.) where the work is done. This allows you to speak the same language as non-technical team members and domain experts, preventing confusion during maintenance.</span></p>\n<h4><span class=\"tr-text\">Örnek</span><span class=\"en-text\">Example</span></h4>\n<div class=\"explanation\"><span class=\"tr-text\">Bir bankacılık uygulamasında teknik bir kuyruk yapısı kurmuyorsanız, \"bekleyen işlemler\" için <code>PendingTransactions</code> demek, <code>OperationBuffer</code> demekten daha anlamlıdır.</span><span class=\"en-text\">In a banking application, unless you are building a technical queue structure, saying <code>PendingTransactions</code> for \"waiting operations\" is more meaningful than saying <code>OperationBuffer</code>.</span></div>\n<pre>// Problem alanından isimler:\nclass InsurancePolicy { ... }\nclass ClaimAdjustment { ... }\npublic void applyDiscount(Voucher voucher) { ... }</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">İyi bir tasarımcı, çözüm alanı (teknik) ve problem alanı (iş) kavramlarını nerede ayıracağını bilir. Kullanıcı arayüzüne ve iş kurallarına yakın kodlar problem alanı isimlerini kullanmalıdır.</span><span class=\"en-text\">A good designer knows where to separate solution domain (technical) and problem domain (business) concepts. Code close to the UI and business rules should use problem domain names.</span></div>"
    },
    {
      "id": "context",
      "title": {
        "en": "Meaningful Context",
        "tr": "Anlamlı Bağlam (Meaningful Context)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Değişken isimleri tek başlarına yetersiz kalabilir. Örneğin <code>state</code> değişkeni bir adresin eyaletini mi, yoksa bir nesnenin durumunu mu temsil ediyor? İsmi bir sınıfın veya fonksiyonun içine yerleştirerek ona bir bağlam kazandırın.</span><span class=\"en-text\">Variable names alone can be insufficient. For example, does the <code>state</code> variable represent an address's state or an object's status? Give it context by placing the name inside a class or function.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Bağlamdan kopuk değişkenler</span><span class=\"en-text\">BAD — Variables disconnected from context</span></span>\n<pre>public void process(String firstName, String lastName, String state) {\n    // 'state' burada ne anlama geliyor? \n    // Sipariş durumu mu? Eyalet mi?\n}</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Sınıf ile sağlanan bağlam</span><span class=\"en-text\">GOOD — Context provided by class</span></span>\n<pre>public class Address {\n    private String firstName;\n    private String lastName;\n    private String state; // Artık eyalet olduğu açık.\n}\n\npublic void process(Address address) { ... }</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">Eğer değişkenlerin önüne sürekli aynı öneki (örn: <code>addrState</code>, <code>addrZip</code>) ekleme ihtiyacı duyuyorsanız, bu değişkenleri kendi sınıflarına taşımanın zamanı gelmiş demektir.</span><span class=\"en-text\">If you feel the need to constantly add the same prefix to variables (e.g., <code>addrState</code>, <code>addrZip</code>), it's time to move these variables into their own class.</span></div>"
    }
  ]
});
