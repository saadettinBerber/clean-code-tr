window.PAGE({
  "id": "page-28",
  "page": 28,
  "pdf_page": 59,
  "chapter": {
    "num": 2,
    "en": "Meaningful Names",
    "tr": "Anlamlı İsimler"
  },
  "section": {
    "en": "Add Meaningful Context",
    "tr": "Anlamlı Bağlam Ekleme"
  },
  "title": {
    "en": "Anlamlı Bağlam Ekleme (devam)",
    "tr": "Anlamlı Bağlam Ekleme (devam)"
  },
  "blocks": [
    {
      "type": "para",
      "sentences": [
        {
          "en": "Imagine that you have variables named <code>firstName</code>, <code>lastName</code>, <code>street</code>, <code>houseNumber</code>, <code>city</code>, <code>state</code>, and <code>zipcode</code>. Taken together it’s pretty clear they form an address. But what if you just saw the <code>state</code> variable being used alone? Would you automatically assume it was part of an address?",
          "tr": "<code>firstName</code>, <code>lastName</code>, <code>street</code>, <code>houseNumber</code>, <code>city</code>, <code>state</code> ve <code>zipcode</code> değişkenlerini bir arada gördüğünüzde, bunların bir adresi oluşturduğunu anlarsınız. Ancak sadece <code>state</code> değişkenini tek başına görseydiniz, bunun bir adresin parçası olduğunu otomatik olarak varsayar mıydınız?",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "You can add context by using prefixes: <code>addrFirstName</code>, <code>addrLastName</code>, <code>addrState</code>, and so on. At least the reader will understand that these variables are part of a larger structure. Of course, a better solution is to create a class named <code>Address</code>. Then, even the compiler knows that the variables belong to a bigger concept.",
          "tr": "Önekler (prefixes) kullanarak bağlam ekleyebilirsiniz: <code>addrFirstName</code>, <code>addrLastName</code>, <code>addrState</code> vb. En azından okuyucu bu değişkenlerin daha büyük bir yapının parçası olduğunu anlar. Elbette daha iyi bir çözüm, <code>Address</code> adında bir sınıf (class) oluşturmaktır; böylece derleyici bile değişkenlerin daha büyük bir kavramın parçası olduğunu bilir.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Consider the function in Listing 2-1. Do the variables need a more meaningful context?",
          "tr": "Listing 2-1'deki fonksiyonu inceleyin. Değişkenlerin anlamlı bir bağlama ihtiyacı var mı?",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Listing 2-1: Variables with unclear context",
      "tr": "Listing 2-1: Net olmayan bağlama sahip değişkenler / Variables with unclear context",
      "html": true
    },
    {
      "type": "code",
      "lang": "java",
      "code": "private void printGuessStatistics(char candidate, int count) {\n    String number;\n    String verb;\n    String pluralModifier;\n    if (count == 0) {\n        number = \"no\";\n        verb = \"are\";\n        pluralModifier = \"s\";\n    } else if (count == 1) {\n        number = \"1\";\n        verb = \"is\";\n        pluralModifier = \"\";\n    } else {\n        number = Integer.toString(count);\n        verb = \"are\";\n        pluralModifier = \"s\";\n    }\n    String guessMessage = String.format(\n        \"There %s %s %s%s\", verb, number, candidate, pluralModifier\n    );\n    print(guessMessage);\n}"
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "The function is a bit overlong and the variables are used throughout. While the function name provides a context, you have to read the entire method to know that <code>number</code>, <code>verb</code>, and <code>pluralModifier</code> are part of the guess statistics message. The context is implicit; we must make it explicit.",
          "tr": "Fonksiyonun biraz uzun olduğu ve değişkenlerin en başta tanımlandığı görülüyor. Fonksiyonun ismi bir bağlam sağlasa da, kodu okurken <code>number</code>, <code>verb</code> ve <code>pluralModifier</code> değişkenlerinin \"tahmin istatistikleri\" (guess statistics) mesajının bir parçası olduğunu anlamak için tüm metodu analiz etmeniz gerekir. Bağlamın (context) örtük (implicit) olduğu ortadadır; onu açık (explicit) hale getirmeliyiz.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "One way to do this is to create a class named <code>GuessStatisticsMessage</code> and make the three variables fields of this class. This provides a clear context for the variables.",
          "tr": "Bunu yapmanın bir yolu, <code>GuessStatisticsMessage</code> adında bir sınıf oluşturmak ve bu üç değişkeni bu sınıfın alanları (fields) haline getirmektir. Bu sayede bağlamın parçası olan değişkenler net bir şekilde gruplanmış olur.",
          "html": true
        }
      ]
    }
  ],
  "concepts": [
    {
      "id": "meaningful-context",
      "title": {
        "en": "Meaningful Context",
        "tr": "Anlamlı Bağlam (Meaningful Context)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Değişkenler tek başlarına muğlak olabilir. <code>state</code> isminde bir değişken, bir adresin eyaletini mi, bir siparişin durumunu mu yoksa bir makinenin o anki halini mi temsil ediyor? Değişkeni anlamlı bir yapının (sınıf, fonksiyon) içine koyarak ona bir \"ev\" ve dolayısıyla net bir anlam kazandırırız.</span><span class=\"en-text\" style=\"display:none;\">Variables can be ambiguous on their own. Does a variable named <code>state</code> represent an address state, an order status, or a machine's current state? By putting the variable inside a meaningful structure (class, function), we give it a \"home\" and thus a clear meaning.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\" style=\"display:none;\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Bağlamı anlamak için kodun tamamını okumak gerekiyor</span><span class=\"en-text\" style=\"display:none;\">BAD — Must read entire code to understand context</span></span>\n<pre>public void logStatus(String msg, int code) {\n    // code burada ne kodu? HTTP mi? Hata mı?\n    System.out.println(\"Log: \" + msg + \" [\" + code + \"]\");\n}</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\" style=\"display:none;\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Açık bağlam (Explicit Context)</span><span class=\"en-text\" style=\"display:none;\">GOOD — Explicit Context</span></span>\n<pre>public class HttpResponse {\n    private String message;\n    private int statusCode; // Bağlam netleşti\n\n    public void log() {\n        System.out.println(\"Response: \" + message + \" (Status: \" + statusCode + \")\");\n    }\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Okuyucunun bağlamı (context) \"kazıyıp çıkarmasına\" (dig out) izin vermeyin. Bağlamı kodun yapısıyla (sınıf hiyerarşisi vb.) göz önüne serin.</span><span class=\"en-text\" style=\"display:none;\">Don't make the reader \"dig out\" the context. Lay it out through the structure of your code (class hierarchy, etc.).</span></div>"
    },
    {
      "id": "address-class",
      "title": {
        "en": "Address Class Solution",
        "tr": "Address Sınıfı Çözümü (Address Class Solution)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\" style=\"display:none;\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Birbirleriyle ilişkili değişkenler (street, city, zip) genellikle bir \"kavramsal bütün\" oluşturur. Bunları ayrı ayrı taşımak yerine bir sınıf altında toplamak (Data Clump refactoring), hem bağlamı güçlendirir hem de kodun taşınabilirliğini artırır.</span><span class=\"en-text\" style=\"display:none;\">Related variables (street, city, zip) often form a \"conceptual whole.\" Instead of carrying them separately, grouping them under a class (Data Clump refactoring) both strengthens context and increases code portability.</span></p>\n<h4><span class=\"tr-text\">İyi Örnek</span><span class=\"en-text\" style=\"display:none;\">Good Example</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Nesne tabanlı bağlam</span><span class=\"en-text\" style=\"display:none;\">GOOD — Object-oriented context</span></span>\n<pre>public class MailingAddress {\n    private String street;\n    private String city;\n    private String postalCode;\n\n    public String formatForLabel() {\n        return street + \", \" + city + \" \" + postalCode;\n    }\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\" style=\"display:none;\">Practical Tip</span></strong><span class=\"tr-text\">Eğer bir grup değişken sürekli birlikte metotlara parametre olarak gönderiliyorsa, bu bir \"Data Clump\" (Veri Kümesi) kokusudur. Bunları hemen bir sınıfa dönüştürün.</span><span class=\"en-text\" style=\"display:none;\">If a group of variables is constantly passed together as parameters to methods, it's a \"Data Clump\" smell. Convert them into a class immediately.</span></div>"
    }
  ]
});
