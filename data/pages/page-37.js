window.PAGE({
  "id": "page-37",
  "page": 37,
  "pdf_page": 68,
  "chapter": {
    "num": 3,
    "en": "Functions",
    "tr": "Fonksiyonlar"
  },
  "section": {
    "en": "Switch İfadeleri",
    "tr": "Switch İfadeleri"
  },
  "title": {
    "en": "Switch Statements & Use Descriptive Names",
    "tr": "Switch İfadeleri & Açıklayıcı İsimler"
  },
  "blocks": [
    {
      "type": "para",
      "sentences": [
        {
          "en": "The <code>Employee</code> interface in Listing 3-4 defines the common properties for different employee types. <code>Money</code> is an abstract class and includes methods such as <code>calculatePay</code>, <code>calculateDeductions</code>, and <code>calculateBonus</code>.",
          "tr": "Liste 3-4'teki <code>Employee</code> arayüzü, farklı çalışan türlerinin ortak özelliklerini tanımlar. <code>Money</code> soyut bir sınıftır ve <code>calculatePay</code>, <code>calculateDeductions</code> ve <code>calculateBonus</code> gibi metotları içerir.",
          "html": true
        }
      ]
    },
    {
      "type": "code",
      "lang": "java",
      "code": "public abstract class Employee {\n    public abstract boolean isPayday();\n    public abstract Money calculatePay();\n    public abstract void deliverPay(Money pay);\n}\n\npublic interface EmployeeFactory {\n    public Employee makeEmployee(EmployeeRecord r) throws InvalidEmployeeType;\n}\n\npublic class EmployeeFactoryImpl implements EmployeeFactory {\n    public Employee makeEmployee(EmployeeRecord r) throws InvalidEmployeeType {\n        switch (r.type) {\n            case COMMISSIONED:\n                return new CommissionedEmployee(r);\n            case HOURLY:\n                return new HourlyEmployee(r);\n            case SALARIED:\n                return new SalariedEmployee(r);\n            default:\n                throw new InvalidEmployeeType(r.type);\n        }\n    }\n}",
      "caption": {
        "en": "Listing 3-4 / Employee.java",
        "tr": "Listing 3-4 / Employee.java"
      }
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "The important point about Listing 3-4 is that the <code>makeEmployee</code> function contains a switch statement, and this switch statement is only responsible for creating concrete <code>Employee</code> derivatives (HourlyEmployee, SalariedEmployee, etc.). In this case, it's possible to prevent the switch statement from doing more than one thing because each <code>case</code> block simply creates an object and they are all at the same level of abstraction.",
          "tr": "Liste 3-4'ün önemli noktası, <code>makeEmployee</code> fonksiyonunun bir switch ifadesi içermesi ve bu switch ifadesinin yalnızca somut <code>Employee</code> türevlerinin (HourlyEmployee, SalariedEmployee vb.) oluşturulmasından sorumlu olmasıdır. Bu durumda switch ifadesinin birden fazla şey yapmasını önlemek mümkündür çünkü her <code>case</code> bloğu basitçe bir nesne oluşturur ve hepsi aynı soyutlama seviyesindedir.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Switch statements naturally do N things. Unfortunately, we can't always avoid switch statements, but we can make sure that each switch statement appears in a low-level class and is never repeated. We use it to create a polymorphic object. We must especially not allow switch statements to be repeated in multiple places. Otherwise, when we add a new type, we would need to change every switch statement everywhere.",
          "tr": "Switch ifadeleri doğası gereği N şey yapar. Ne yazık ki, switch ifadelerini tamamen önleyemeyiz, ancak her switch ifadesinin düşük seviyeli bir sınıfta görünmesini ve asla tekrarlanmamasını sağlayabiliriz. Bunu bir polymorphic nesne oluşturmak için kullanırız. Özellikle switch ifadelerinin birden fazla yerde tekrarlanmasına izin vermemeliyiz. Aksi takdirde, yeni bir tür eklediğimizde her yerdeki switch'i değiştirmemiz gerekir.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Unfortunately switch statements are part of Java, so they can't be completely avoided. But we can make sure that each switch statement appears in the basement of an abstract factory, and users never need to see it. The factory uses the switch statement to create appropriate concrete derivatives and places them behind the <code>Employee</code> interface.",
          "tr": "Ne yazık ki switch ifadeleri Java'nın bir parçası olduğundan, tamamen kaçınılamazlar. Ancak her switch ifadesinin bir abstract factory'nin bodrum katında görünmesini sağlayabiliriz ve kullanıcıların bunu görmesine gerek kalmaz. Factory, switch ifadesini kullanarak uygun somut türevleri <code>Employee</code> arayüzünün arkasına yerleştirir.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "This technique hides the dependencies caused by the creation of the switch statement from the client code. Also, when we need to add a new employee type, the only place we need to change is the <code>EmployeeFactoryImpl</code> class. This is a great example of the <em>Open/Closed Principle</em>: we open the code for new types but don't change existing code.",
          "tr": "Bu teknik, switch ifadesinin oluşturulmasından kaynaklanan bağımlılıkları kullanıcı kodundan gizler. Ayrıca, yeni bir çalışan türü eklememiz gerektiğinde, değiştirmemiz gereken tek yer <code>EmployeeFactoryImpl</code> sınıfı olur. Bu, <em>Açık/Kapalı İlkesi</em>'nin (Open/Closed Principle) harika bir örneğidir: yeni türler eklemek için kodu açarız, ancak mevcut kodu değiştirmeyiz.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Use Descriptive Names",
      "tr": "Açıklayıcı İsimler Kullanın / Use Descriptive Names",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Don't be afraid to make a function name long. If a function does one thing, it's easy to choose a name that describes it. A long descriptive name is better than a short enigmatic name. A long descriptive name is better than a long descriptive comment. Don't be afraid to spend time choosing a name. Instead, try several different names and read the code with each in place. Thanks to modern code completion features in integrated development environments (IDEs), long names are no longer a problem.",
          "tr": "Fonksiyonun ne yaptığı konusunda net olmaktan korkmayın. Eğer fonksiyonunuz tek bir şey yapıyorsa, bunu açıklayan bir isim seçmek kolaydır. İsim uzunsa uzun olsun. Uzun, açıklayıcı bir isim, kısa, gizemli bir isimden çok daha iyidir. Uzun, açıklayıcı bir isim, uzun, açıklayıcı bir yorumdan çok daha iyidir. Bir isim seçmekten korkmayın. Bunun yerine, farklı isimler deneyin ve her birini yerinde okuyun. Entegre geliştirme ortamlarındaki (IDE) modern kod tamamlama özellikleri sayesinde, uzun isimler yazmak artık bir sorun değil.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Naming conventions for variables and classes also apply to functions. The same rule about length applies - a descriptive name, no matter how long, is always better than a short, ambiguous name or a long comment.",
          "tr": "İsim seçme kuralları, değişkenler ve sınıflar için de geçerlidir. İsimlerin uzunluğu konusunda aynı kural geçerlidir - ne kadar uzun olursa olsun, açıklayıcı bir isim her zaman kısa, belirsiz bir isimden veya uzun bir yorumdan iyidir.",
          "html": true
        }
      ]
    }
  ],
  "concepts": [
    {
      "id": "abstract-factory",
      "title": {
        "en": "Abstract Factory",
        "tr": "Abstract Factory (Soyut Fabrika)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Abstract Factory tasarım deseni, ilgili nesne ailelerini oluşturmak için bir arayüz sağlar. Switch ifadelerini gizlemek için mükemmel bir yoldur - switch mantığı sadece factory'nin içinde kalır ve kullanıcılar sadece arayüzü görür.</span><span class=\"en-text\">The Abstract Factory design pattern provides an interface for creating families of related objects. It's a perfect way to hide switch statements - the switch logic stays only inside the factory, and users see only the interface.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Her yerde switch</span><span class=\"en-text\">BAD — Switch everywhere</span></span>\n<pre><span class=\"kw\">def</span> <span class=\"method\">sendNotification</span>(user, type):\n    <span class=\"kw\">if</span> type == <span class=\"str\">\"email\"</span>:\n        <span class=\"method\">sendEmail</span>(user)\n    <span class=\"kw\">elif</span> type == <span class=\"str\">\"sms\"</span>:\n        <span class=\"method\">sendSMS</span>(user)\n\n<span class=\"kw\">def</span> <span class=\"method\">formatMessage</span>(type):\n    <span class=\"kw\">if</span> type == <span class=\"str\">\"email\"</span>:  <span class=\"comment\"># Tekrar!</span>\n        <span class=\"kw\">return</span> <span class=\"str\">\"HTML\"</span>\n    <span class=\"kw\">elif</span> type == <span class=\"str\">\"sms\"</span>:\n        <span class=\"kw\">return</span> <span class=\"str\">\"Text\"</span></pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Factory Pattern</span><span class=\"en-text\">GOOD — Factory Pattern</span></span>\n<pre><span class=\"kw\">interface</span> <span class=\"type\">NotificationChannel</span> {\n    <span class=\"kw\">void</span> <span class=\"method\">send</span>(User user);\n    <span class=\"type\">String</span> <span class=\"method\">format</span>();\n}\n\n<span class=\"kw\">class</span> <span class=\"type\">ChannelFactory</span> {\n    <span class=\"kw\">static</span> <span class=\"type\">NotificationChannel</span> <span class=\"method\">create</span>(String type) {\n        <span class=\"kw\">switch</span> (type) {  <span class=\"comment\">// Switch sadece burada!</span>\n            <span class=\"kw\">case</span> <span class=\"str\">\"email\"</span>: <span class=\"kw\">return new</span> <span class=\"type\">EmailChannel</span>();\n            <span class=\"kw\">case</span> <span class=\"str\">\"sms\"</span>: <span class=\"kw\">return new</span> <span class=\"type\">SMSChannel</span>();\n        }\n    }\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">Switch ifadelerini her zaman bir factory'nin içine gizleyin. Yeni tür eklemek gerektiğinde sadece bir yerde değişiklik yapın.</span><span class=\"en-text\">Always hide switch statements inside a factory. When you need to add a new type, change only one place.</span></div>"
    },
    {
      "id": "open-closed",
      "title": {
        "en": "Open/Closed Principle",
        "tr": "Açık/Kapalı İlkesi (Open/Closed Principle)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">SOLID prensiplerinden OCP: \"Yazılım varlıkları (sınıflar, modüller, fonksiyonlar vb.) genişletmeye açık, değişikliğe kapalı olmalıdır.\" Yeni davranış eklemek için mevcut kodu değiştirmek yerine yeni kod yazın.</span><span class=\"en-text\">OCP from SOLID principles: \"Software entities (classes, modules, functions, etc.) should be open for extension but closed for modification.\" Add new behavior by writing new code rather than changing existing code.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Her yeni türde değişiklik</span><span class=\"en-text\">BAD — Changes for every new type</span></span>\n<pre><span class=\"kw\">class</span> <span class=\"type\">ReportGenerator</span> {\n    <span class=\"kw\">def</span> <span class=\"method\">generate</span>(type):\n        <span class=\"kw\">if</span> type == <span class=\"str\">\"pdf\"</span>:\n            <span class=\"kw\">return</span> <span class=\"method\">generatePDF</span>()\n        <span class=\"kw\">elif</span> type == <span class=\"str\">\"excel\"</span>:\n            <span class=\"kw\">return</span> <span class=\"method\">generateExcel</span>()\n        <span class=\"comment\"># Yeni tür eklenince BURAYI değiştirmek zorundayız!</span>\n}</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Genişletmeye açık</span><span class=\"en-text\">GOOD — Open for extension</span></span>\n<pre><span class=\"kw\">interface</span> <span class=\"type\">ReportGenerator</span> {\n    <span class=\"type\">Report</span> <span class=\"method\">generate</span>();\n}\n\n<span class=\"kw\">class</span> <span class=\"type\">PDFGenerator</span> <span class=\"kw\">implements</span> <span class=\"type\">ReportGenerator</span> { ... }\n<span class=\"kw\">class</span> <span class=\"type\">ExcelGenerator</span> <span class=\"kw\">implements</span> <span class=\"type\">ReportGenerator</span> { ... }\n\n<span class=\"comment\"># Yeni tür: SADECE yeni sınıf ekle, mevcut kodu değiştirme</span>\n<span class=\"kw\">class</span> <span class=\"type\">CSVGenerator</span> <span class=\"kw\">implements</span> <span class=\"type\">ReportGenerator</span> { ... }</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">\"if/else zinciri\" gördüğünüzde, bu OCP ihlalinin işaretidir. Polymorphism kullanarak her durumu ayrı sınıfa taşıyın.</span><span class=\"en-text\">When you see an \"if/else chain\", it's a sign of OCP violation. Use polymorphism to move each case into a separate class.</span></div>"
    },
    {
      "id": "descriptive-names",
      "title": {
        "en": "Descriptive Names",
        "tr": "Açıklayıcı İsimler (Descriptive Names)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Fonksiyon isimleri ne yaptıklarını açıkça anlatmalıdır. Uzun ama açıklayıcı bir isim, kısa ama belirsiz bir isimden her zaman iyidir. Modern IDE'ler uzun isimleri tamamladığı için isim uzunluğu artık bir sorun değil.</span><span class=\"en-text\">Function names should clearly describe what they do. A long but descriptive name is always better than a short but ambiguous name. Modern IDEs autocomplete long names, so name length is no longer an issue.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Kısa ve belirsiz</span><span class=\"en-text\">BAD — Short and ambiguous</span></span>\n<pre><span class=\"kw\">def</span> <span class=\"method\">proc</span>(d):  <span class=\"comment\"># Ne işlemiyor? ne verisi?</span>\n    <span class=\"kw\">return</span> <span class=\"method\">calc</span>(d)  <span class=\"comment\"># Ne hesaplıyor?</span>\n\n<span class=\"kw\">def</span> <span class=\"method\">doIt</span>():  <span class=\"comment\"># Ne yapıyor?</span>\n    <span class=\"method\">x</span>()</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Açıklayıcı ve uzun</span><span class=\"en-text\">GOOD — Descriptive and long</span></span>\n<pre><span class=\"kw\">def</span> <span class=\"method\">calculateMonthlySalaryForEmployee</span>(employee):\n    <span class=\"kw\">return</span> <span class=\"method\">computeBasePay</span>(employee) + <span class=\"method\">computeOvertimePay</span>(employee)\n\n<span class=\"kw\">def</span> <span class=\"method\">generateQuarterlyReportForDepartment</span>(department):\n    <span class=\"method\">collectSalesData</span>(department)</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">Fonksiyon ismi bir yorum gibi okunabilmeli. \"Bu fonksiyon ne yapıyor?\" sorusunun cevabı ismin içinde olmalı. İsim seçmeye zaman ayırın - birkaç farklı isim deneyin.</span><span class=\"en-text\">A function name should read like a comment. The answer to \"What does this function do?\" should be in the name. Take time choosing names - try several different options.</span></div>"
    }
  ]
});
