window.PAGE({
  "id": "page-47",
  "page": 47,
  "pdf_page": 78,
  "chapter": {
    "num": 3,
    "en": "Functions",
    "tr": "Fonksiyonlar"
  },
  "section": {
    "en": "Hata Yönetimi & Error.java Bağımlılık Mıknatısı",
    "tr": "Hata Yönetimi & Error.java Bağımlılık Mıknatısı"
  },
  "title": {
    "en": "Dependency Magnet, DRY",
    "tr": "Error.java Bağımlılık Mıknatısı, Kendini Tekrar Etme"
  },
  "blocks": [
    {
      "type": "para",
      "sentences": [
        {
          "en": "(Continued from page 46) In the above, the <code>delete</code> function is all about error processing. It is easy to understand and then ignore. The <code>deletePageAndAllReferences</code> function is all about the processes of fully deleting a page. Error handling can be ignored. This provides a nice separation that makes the code easier to understand and modify.",
          "tr": "(Sayfa 46'dan devam) Aşağıdaki örnekte <code>delete</code> fonksiyonu tamamen hata işlemeyle (error processing) ilgilidir. Anlaması kolaydır ve görmezden gelebilirsiniz. <code>deletePageAndAllReferences</code> fonksiyonu ise tamamen bir sayfayı silme süreçleriyle ilgilidir. Hata yönetimi görmezden gelinebilir. Bu güzel bir ayrım sağlar ve kodun anlaşılmasını ve değiştirilmesini kolaylaştırır.",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "public void delete(Page page) {\n    try {\n        deletePageAndAllReferences(page);\n    }\n    catch (Exception e) {\n        logError(e);\n    }\n}\n\nprivate void deletePageAndAllReferences(Page page) throws Exception {\n    deletePage(page);\n    registry.deleteReference(page.name);\n    configKeys.deleteKey(page.name.makeKey());\n}\n\nprivate void logError(Exception e) {\n    logger.log(e.getMessage());\n}",
      "caption": {
        "en": "Extracted Try/Catch Structure",
        "tr": "Try/Catch Ayrılmış Yapı"
      }
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Error Handling Is One Thing",
      "tr": "Hata Yönetimi Tek Bir Şeydir / Error Handling Is One Thing",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Functions should do one thing. Error handing is one thing. Thus, a function that handles errors should do nothing else. This implies that if the keyword <code>try</code> exists in a function, it should be the very first word in the function and that there should be nothing after the <code>catch/finally</code> blocks.",
          "tr": "Fonksiyonlar tek bir şey yapmalıdır. Hata yönetimi (error handling) de tek bir şeydir. Bu nedenle, hataları yöneten bir fonksiyon başka bir şey yapmamalıdır. Bu da şu anlama gelir: Eğer <code>try</code> anahtar kelimesi bir fonksiyonda varsa, fonksiyondaki ilk kelime olmalıdır ve <code>catch/finally</code> bloklarından sonra hiçbir şey olmamalıdır.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "The Error.java Dependency Magnet",
      "tr": "Error.java Bağımlılık Mıknatısı / The Error.java Dependency Magnet",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Returning error codes usually implies that there is some class or enum in which all the error codes are defined.",
          "tr": "Hata kodları döndürmek genellikle tüm hata kodlarının tanımlandığı bir sınıf veya enum olduğunu ima eder.",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "public enum Error {\n    OK,\n    INVALID,\n    NO_SUCH,\n    LOCKED,\n    OUT_OF_RESOURCES,\n    WAITING_FOR_EVENT;\n}",
      "caption": {
        "en": "Error Enum",
        "tr": "Error Enum"
      }
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Classes like this are a <em>dependency magnet</em>; many other classes must import and use them. Thus, when the <code>Error</code> enum changes, all those other classes need to be recompiled and redeployed.<sup>11</sup> This puts a negative pressure on the <code>Error</code> class. Programmers don't want to add new errors because then they have to rebuild and redeploy everything. So they reuse old error codes instead of adding new ones.",
          "tr": "Bu tür sınıflar bir bağımlılık mıknatısıdır (dependency magnet); birçok başka sınıf bunları import etmek ve kullanmak zorundadır. Dolayısıyla <code>Error</code> enum'u değiştiğinde, onu kullanan diğer tüm sınıfların yeniden derlenmesi (recompilation) ve yeniden dağıtılması (redeployment) gerekir.<sup>11</sup> Bu durum <code>Error</code> sınıfı üzerinde olumsuz bir baskı yaratır. Programcılar yeni hatalar eklemek istemezler çünkü bu durumda her şeyi yeniden derleyip dağıtmaları gerekir. Bu yüzden yeni hata kodları eklemek yerine eski kodları yeniden kullanırlar.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "When you use exceptions rather than error codes, then new exceptions are <em>derivatives</em> of the exception class. They can be added without forcing any recompilation or redeployment.<sup>12</sup>",
          "tr": "Hata kodları yerine istisnalar (exceptions) kullandığınızda, yeni istisnalar istisna sınıfının türevleridir (derivatives). Herhangi bir yeniden derleme veya yeniden dağıtım gerektirmeden eklenebilirler.<sup>12</sup>",
          "html": true
        }
      ]
    },
    {
      "type": "footnote",
      "en": "11. Yeniden derleme ve yeniden dağıtım yapmadan idare edebileceklerini düşünenler bulunmuş — ve cezalandırılmıştır.Those who felt that they could get away without recompiling and redeploying have been found — and dealt with. 12. Bu, Açık/Kapalı İlkesinin (OCP) [PPP02] bir örneğidir.This is an example of the Open Closed Principle (OCP) [PPP02]. Those who felt that they could get away without recompiling and redeploying have been found — and dealt with.",
      "tr": "11. Yeniden derleme ve yeniden dağıtım yapmadan idare edebileceklerini düşünenler bulunmuş — ve cezalandırılmıştır.Those who felt that they could get away without recompiling and redeploying have been found — and dealt with. 12. Bu, Açık/Kapalı İlkesinin (OCP) [PPP02] bir örneğidir.This is an example of the Open Closed Principle (OCP) [PPP02]. Yeniden derleme ve yeniden dağıtım yapmadan idare edebileceklerini düşünenler bulunmuş — ve cezalandırılmıştır.",
      "html": true
    }
  ],
  "concepts": [
    {
      "id": "dependency-magnet",
      "title": {
        "en": "Dependency Magnet",
        "tr": "Bağımlılık Mıknatısı (Dependency Magnet)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Bağımlılık mıknatısı (dependency magnet), birçok başka sınıfın bağımlı olduğu merkezi bir yapıdır. Bu yapı değiştiğinde, ona bağımlı olan her şey etkilenir. Hata kodu enum'ları buna klasik bir örnektir: değişiklik yaptığınızda tüm bağımlılar yeniden derlenmelidir.</span><span class=\"en-text\" style=\"display:none;\">A dependency magnet is a central structure that many other classes depend on. When this structure changes, everything depending on it is affected. Error code enums are a classic example: when you make a change, all dependents must be recompiled.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Merkezi hata kodu enum'u</span><span class=\"en-text\" style=\"display:none;\">BAD — Central error code enum</span></span>\n<pre><span class=\"comment\">// StatusCode.java — her yerde import edilir</span>\n<span class=\"kw\">public enum</span> <span class=\"type\">StatusCode</span> {\n    SUCCESS, NOT_FOUND, UNAUTHORIZED,\n    TIMEOUT, INTERNAL_ERROR;\n}\n\n<span class=\"comment\">// UserService.java</span>\n<span class=\"kw\">public</span> <span class=\"type\">StatusCode</span> <span class=\"method\">createUser</span>(<span class=\"type\">User</span> user) {\n    <span class=\"kw\">if</span> (user == <span class=\"kw\">null</span>) <span class=\"kw\">return</span> <span class=\"type\">StatusCode</span>.INTERNAL_ERROR;\n    <span class=\"comment\">// ... iş mantığı</span>\n    <span class=\"kw\">return</span> <span class=\"type\">StatusCode</span>.SUCCESS;\n}\n\n<span class=\"comment\">// OrderService.java — aynı enum'a bağımlı</span>\n<span class=\"kw\">public</span> <span class=\"type\">StatusCode</span> <span class=\"method\">placeOrder</span>(<span class=\"type\">Order</span> order) {\n    <span class=\"comment\">// StatusCode değişirse bu da yeniden derlenmeli</span>\n    <span class=\"kw\">return</span> <span class=\"type\">StatusCode</span>.SUCCESS;\n}</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — İstisna hiyerarşisi</span><span class=\"en-text\" style=\"display:none;\">GOOD — Exception hierarchy</span></span>\n<pre><span class=\"comment\">// Her modül kendi istisnasını tanımlar</span>\n<span class=\"kw\">public class</span> <span class=\"type\">UserNotFoundException</span>\n    <span class=\"kw\">extends</span> <span class=\"type\">ServiceException</span> { }\n\n<span class=\"kw\">public class</span> <span class=\"type\">OrderTimeoutException</span>\n    <span class=\"kw\">extends</span> <span class=\"type\">ServiceException</span> { }\n\n<span class=\"comment\">// Yeni istisna eklemek hiçbir mevcut kodu bozmaz</span>\n<span class=\"kw\">public class</span> <span class=\"type\">PaymentDeclinedException</span>\n    <span class=\"kw\">extends</span> <span class=\"type\">ServiceException</span> { }</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Projenizdeki merkezi enum veya sabit sınıflarını inceleyin. Eğer bir dosya değiştiğinde düzinelerce dosyanın yeniden derlenmesi gerekiyorsa, bu bir bağımlılık mıknatısıdır. İstisna hiyerarşileri veya polimorfizm (polymorphism) kullanarak bağımlılığı kırın.</span><span class=\"en-text\" style=\"display:none;\">Review central enums or constant classes in your project. If changing one file requires recompilation of dozens of files, it's a dependency magnet. Break the dependency using exception hierarchies or polymorphism.</span></div>"
    },
    {
      "id": "error-handling-one-thing",
      "title": {
        "en": "Error Handling Is One Thing",
        "tr": "Hata Yönetimi Tek Bir Şeydir (Error Handling Is One Thing)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Fonksiyonlar tek bir şey yapmalıdır ve hata yönetimi de tek bir şeydir. Eğer bir fonksiyonda <code class=\"inline\">try</code> anahtar kelimesi varsa, fonksiyonun ilk kelimesi olmalıdır. <code class=\"inline\">catch/finally</code> bloklarından sonra hiçbir şey bulunmamalıdır. Böylece fonksiyon ya iş mantığı yapar, ya da hata yönetimi yapar — ikisini birden değil.</span><span class=\"en-text\" style=\"display:none;\">Functions should do one thing, and error handling is one thing. If a function has a <code class=\"inline\">try</code> keyword, it should be the first word in the function. Nothing should come after the <code class=\"inline\">catch/finally</code> blocks. This way a function either does business logic or handles errors — not both.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — İş mantığı ve hata yönetimi karışık</span><span class=\"en-text\" style=\"display:none;\">BAD — Business logic and error handling mixed</span></span>\n<pre><span class=\"kw\">def</span> <span class=\"method\">send_report</span>(report):\n    validated = <span class=\"method\">validate</span>(report)\n    <span class=\"kw\">try</span>:\n        <span class=\"method\">send_email</span>(report.recipient, validated)\n    <span class=\"kw\">except</span> <span class=\"type\">SMTPError</span> <span class=\"kw\">as</span> e:\n        logger.<span class=\"method\">error</span>(e)\n    <span class=\"method\">archive_report</span>(report)  <span class=\"comment\"># try'dan sonra kod!</span></pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Ayrılmış sorumluluklar</span><span class=\"en-text\" style=\"display:none;\">GOOD — Separated responsibilities</span></span>\n<pre><span class=\"kw\">def</span> <span class=\"method\">send_report</span>(report):\n    <span class=\"kw\">try</span>:\n        <span class=\"method\">process_and_send_report</span>(report)\n    <span class=\"kw\">except</span> <span class=\"type\">ReportError</span> <span class=\"kw\">as</span> e:\n        logger.<span class=\"method\">error</span>(e)\n\n<span class=\"kw\">def</span> <span class=\"method\">process_and_send_report</span>(report):\n    validated = <span class=\"method\">validate</span>(report)\n    <span class=\"method\">send_email</span>(report.recipient, validated)\n    <span class=\"method\">archive_report</span>(report)</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Şu kuralı hatırlayın: <code class=\"inline\">try</code> ile başlayan bir fonksiyonda <code class=\"inline\">catch/finally</code> bloklarından sonra hiçbir kod satırı olmamalıdır. Eğer varsa, o fonksiyon birden fazla şey yapıyordur.</span><span class=\"en-text\" style=\"display:none;\">Remember the rule: in a function that starts with <code class=\"inline\">try</code>, there should be no lines of code after the <code class=\"inline\">catch/finally</code> blocks. If there are, that function is doing more than one thing.</span></div>"
    },
    {
      "id": "ocp-exceptions",
      "title": {
        "en": "OCP and Exceptions",
        "tr": "OCP ve İstisnalar (Open/Closed Principle &amp; Exceptions)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Açık/Kapalı İlkesi (Open/Closed Principle — OCP), sınıfların genişletmeye açık ama değişikliğe kapalı olması gerektiğini söyler. İstisna hiyerarşileri bu ilkeyi mükemmel şekilde destekler: yeni bir istisna türü eklemek, mevcut kodu değiştirmez; sadece yeni bir türetilmiş sınıf (derived class) eklenir.</span><span class=\"en-text\" style=\"display:none;\">The Open/Closed Principle (OCP) states that classes should be open for extension but closed for modification. Exception hierarchies perfectly support this principle: adding a new exception type doesn't modify existing code; it just adds a new derived class.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Yeni durum eklemek mevcut kodu değiştirir</span><span class=\"en-text\" style=\"display:none;\">BAD — Adding new case modifies existing code</span></span>\n<pre><span class=\"kw\">enum</span> <span class=\"type\">Shape</span> { CIRCLE, SQUARE, TRIANGLE }\n\n<span class=\"kw\">double</span> <span class=\"method\">area</span>(<span class=\"type\">Shape</span> shape, <span class=\"kw\">double</span>... args) {\n    <span class=\"kw\">switch</span> (shape) {\n        <span class=\"kw\">case</span> CIRCLE:  <span class=\"kw\">return</span> Math.PI * args[<span class=\"field\">0</span>] * args[<span class=\"field\">0</span>];\n        <span class=\"kw\">case</span> SQUARE:  <span class=\"kw\">return</span> args[<span class=\"field\">0</span>] * args[<span class=\"field\">0</span>];\n        <span class=\"comment\">// TRIANGLE eklemek = bu dosyayı DEĞİŞTİRMEK</span>\n    }\n}</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Yeni tür eklemek mevcut kodu değiştirmez</span><span class=\"en-text\" style=\"display:none;\">GOOD — Adding new type doesn't modify existing code</span></span>\n<pre><span class=\"kw\">interface</span> <span class=\"type\">Shape</span> {\n    <span class=\"kw\">double</span> <span class=\"method\">area</span>();\n}\n\n<span class=\"kw\">class</span> <span class=\"type\">Circle</span> <span class=\"kw\">implements</span> <span class=\"type\">Shape</span> {\n    <span class=\"kw\">double</span> <span class=\"method\">area</span>() { <span class=\"kw\">return</span> Math.PI * radius * radius; }\n}\n\n<span class=\"comment\">// Yeni şekil eklemek = SADECE yeni dosya eklemek</span>\n<span class=\"kw\">class</span> <span class=\"type\">Triangle</span> <span class=\"kw\">implements</span> <span class=\"type\">Shape</span> {\n    <span class=\"kw\">double</span> <span class=\"method\">area</span>() { <span class=\"kw\">return</span> base * height / <span class=\"field\">2</span>; }\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Bir enum'a veya switch/case yapısına sık sık yeni değer eklemeniz gerekiyorsa, bu OCP'nin ihlal edildiğinin bir işaretidir. Polimorfizm (polymorphism) veya kalıtım (inheritance) kullanarak genişletilebilir bir yapıya geçin.</span><span class=\"en-text\" style=\"display:none;\">If you frequently need to add new values to an enum or switch/case, this is a sign that OCP is being violated. Switch to an extensible structure using polymorphism or inheritance.</span></div>"
    }
  ]
});
