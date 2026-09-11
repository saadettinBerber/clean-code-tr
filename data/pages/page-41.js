window.PAGE({
  "id": "page-41",
  "page": 41,
  "pdf_page": 72,
  "chapter": {
    "num": 3,
    "en": "Functions",
    "tr": "Fonksiyonlar"
  },
  "section": {
    "en": "Output Arguments, Common Monadic Forms & Flag Arguments",
    "tr": "Çıkış Argümanları, Tekli Formlar & Bayrak Argümanları"
  },
  "title": {
    "en": "Common Monadic Forms, Flag Arguments",
    "tr": "Sık Görülen Tekli Formlar, Bayrak Argümanları"
  },
  "blocks": [
    {
      "type": "heading",
      "level": 1,
      "en": "Function Arguments (continued)",
      "tr": "Fonksiyon Argümanları / Function Arguments (devam)",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Output arguments are harder to understand than input arguments. When we read a function, we are used to the idea of information going <em>in</em> to the function through arguments and <em>out</em> through the return value. We don't usually expect information to be going out through the arguments. So output arguments often cause us to do a double-take.",
          "tr": "Çıkış argümanları (output arguments), girdi argümanlarından (input arguments) daha zor anlaşılır. Bir fonksiyonu okuduğumuzda, bilginin argümanlar yoluyla fonksiyona <em>girdiğine</em> ve dönüş değeri yoluyla <em>çıktığına</em> alışkınızdır. Bilginin argümanlar yoluyla dışarı çıkmasını genellikle beklemeyiz. Bu yüzden çıkış argümanları sıklıkla bizi iki kez bakmaya zorlar.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "One input argument is the next best thing to no arguments. <code>SetupTeardownIncluder.render(pageData)</code> is pretty easy to understand. Clearly we are going to <em>render</em> the data in the <code>pageData</code> object.",
          "tr": "Tek bir girdi argümanı, hiç argüman olmamasından sonraki en iyi şeydir. <code>SetupTeardownIncluder.render(pageData)</code> anlaşılması oldukça kolaydır. Açıkça <code>pageData</code> nesnesindeki veriyi <em>render</em> edeceğiz.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Common Monadic Forms",
      "tr": "Sık Görülen Tekli Formlar / Common Monadic Forms",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "There are two very common reasons to pass a single argument into a function. You may be asking a question about that argument, as in <code>boolean fileExists(\"MyFile\")</code>. Or you may be operating on that argument, transforming it into something else and <em>returning it</em>. For example, <code>InputStream fileOpen(\"MyFile\")</code> transforms a file name <code>String</code> into an <code>InputStream</code> return value. These two uses are what readers expect when they see a function. You should choose names that make the distinction clear, and always use the two forms in a consistent context. (See Command Query Separation below.)",
          "tr": "Tek bir argümanı bir fonksiyona geçirmek için iki çok yaygın neden vardır. Argüman hakkında bir soru soruyor olabilirsiniz, örneğin: <code>boolean fileExists(\"MyFile\")</code>. Ya da argüman üzerinde bir işlem yapıp onu başka bir şeye dönüştürüp <em>geri döndürüyor</em> olabilirsiniz. Örneğin, <code>InputStream fileOpen(\"MyFile\")</code>, bir dosya adı olan <code>String</code>'i bir <code>InputStream</code> dönüş değerine dönüştürür. Bu iki kullanım, okuyucuların bir fonksiyon gördüklerinde beklediği şeylerdir. Ayrımı netleştiren isimler seçmeli ve iki formu her zaman tutarlı bir bağlamda kullanmalısınız. (Aşağıdaki Komut Sorgu Ayrımı bölümüne bakın.)",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "A somewhat less common, but still very useful form for a single argument function, is an <em>event</em>. In this form there is an input argument but no output argument. The overall program is meant to interpret the function call as an event and use the argument to alter the state of the system, for example, <code>void passwordAttemptFailedNtimes(int attempts)</code>. Use this form with care. It should be very clear to the reader that this is an event. Choose names and contexts carefully.",
          "tr": "Tek argümanlı bir fonksiyonun biraz daha az yaygın ama yine de çok kullanışlı bir formu daha vardır: olay (event) formu. Bu formda bir girdi argümanı vardır ama çıkış argümanı yoktur. Programın bütününün, fonksiyon çağrısını bir olay olarak yorumlaması ve argümanı sistemin durumunu değiştirmek için kullanması beklenir. Örneğin: <code>void passwordAttemptFailedNtimes(int attempts)</code>. Bu formu dikkatli kullanın. Okuyucuya bunun bir olay olduğu çok açık olmalıdır. İsimleri ve bağlamları dikkatli seçin.",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Try to avoid any monadic functions that don't follow these forms, for example, <code>void includeSetupPageInto(StringBuffer pageText)</code>. Using an output argument instead of a return value for a transformation is confusing. If a function is going to transform its input argument, the transformation should appear as the return value. Indeed, <code>StringBuffer transform(StringBuffer in)</code> is better than <code>void transform(StringBuffer out)</code>, even if the implementation in the first case simply returns the input argument. At least it still follows the form of a transformation.",
          "tr": "Bu formları takip etmeyen tekli (monadic) fonksiyonlardan kaçınmaya çalışın. Örneğin, <code>void includeSetupPageInto(StringBuffer pageText)</code>. Bir dönüşümün (transformation) dönüş değeri yerine çıkış argümanı (output argument) kullanması kafa karıştırıcıdır. Eğer bir fonksiyon girdi argümanını dönüştürecekse, dönüşüm dönüş değeri olarak görünmelidir. Aslında, <code>StringBuffer transform(StringBuffer in)</code> ifadesi, <code>void transform(StringBuffer out)</code> ifadesinden daha iyidir — uygulama ilk durumda girdi argümanını basitçe döndürse bile. En azından dönüşüm formunu takip eder.",
          "html": true
        }
      ]
    },
    {
      "type": "heading",
      "level": 1,
      "en": "Flag Arguments",
      "tr": "Bayrak Argümanları / Flag Arguments",
      "html": true
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "Flag arguments are ugly. Passing a boolean into a function is a truly terrible practice. It immediately complicates the signature of the method, loudly proclaiming that this function does more than one thing. It does one thing if the flag is true and another if the flag is false!",
          "tr": "Bayrak argümanları (flag arguments) çirkindir. Bir fonksiyona boolean değer geçirmek gerçekten korkunç bir pratiktir. Metodun imzasını hemen karmaşıklaştırır ve bu fonksiyonun birden fazla şey yaptığını yüksek sesle ilan eder. Bayrak true ise bir şey yapar, false ise başka bir şey!",
          "html": true
        }
      ]
    },
    {
      "type": "para",
      "sentences": [
        {
          "en": "In Listing 3-7 we had no choice because the callers were already passing that flag in, and I wanted to limit the scope of refactoring to the function and below. Still, the method call <code>render(true)</code> is just plain confusing to a poor reader. Mousing over the call and seeing <code>render(boolean isSuite)</code> helps a little, but not that much. We should have split the function into two: <code>renderForSuite()</code> and <code>renderForSingleTest()</code>.",
          "tr": "Listing 3-7'de çağıranlar zaten bu bayrağı geçiyordu ve ben yeniden düzenlemenin (refactoring) kapsamını fonksiyon ve altıyla sınırlı tutmak istedim, bu yüzden başka seçeneğimiz yoktu. Yine de, <code>render(true)</code> metot çağrısı sıradan bir okuyucu için son derece kafa karıştırıcıdır. Çağrının üzerine gelip <code>render(boolean isSuite)</code> ifadesini görmek biraz yardımcı olur, ama çok da fazla değil. Fonksiyonu ikiye bölmeliydik: <code>renderForSuite()</code> ve <code>renderForSingleTest()</code>.",
          "html": true
        }
      ]
    }
  ],
  "concepts": [
    {
      "id": "output-arguments",
      "title": {
        "en": "Output Arguments",
        "tr": "Çıkış Argümanları (Output Arguments)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Çıkış argümanları, fonksiyona geçirilen ama fonksiyon tarafından değiştirilen argümanlardır. Okuyucu bilginin argümanlar yoluyla \"girmesini\" bekler, \"çıkmasını\" değil. Bu beklenti ihlali kafa karıştırır.</span><span class=\"en-text\">Output arguments are arguments passed into a function that get modified by the function. Readers expect information to \"go in\" through arguments, not \"come out.\" Violating this expectation causes confusion.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Çıkış argümanı ile değiştirme</span><span class=\"en-text\">BAD — Modifying via output argument</span></span>\n<pre><span class=\"kw\">void</span> <span class=\"method\">populateUserList</span>(<span class=\"type\">List</span>&lt;<span class=\"type\">User</span>&gt; users) {\n    users.<span class=\"method\">add</span>(<span class=\"kw\">new</span> <span class=\"type\">User</span>(<span class=\"str\">\"Ali\"</span>));\n    users.<span class=\"method\">add</span>(<span class=\"kw\">new</span> <span class=\"type\">User</span>(<span class=\"str\">\"Veli\"</span>));\n}\n\n<span class=\"comment\">// Çağıran taraf: users listesi gizlice değişiyor</span>\n<span class=\"type\">List</span>&lt;<span class=\"type\">User</span>&gt; users = <span class=\"kw\">new</span> <span class=\"type\">ArrayList</span>&lt;&gt;();\n<span class=\"method\">populateUserList</span>(users); <span class=\"comment\">// users dışarıdan değişti!</span></pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Dönüş değeri kullanma</span><span class=\"en-text\">GOOD — Using return value</span></span>\n<pre><span class=\"type\">List</span>&lt;<span class=\"type\">User</span>&gt; <span class=\"method\">createDefaultUsers</span>() {\n    <span class=\"kw\">return</span> <span class=\"type\">List</span>.<span class=\"method\">of</span>(\n        <span class=\"kw\">new</span> <span class=\"type\">User</span>(<span class=\"str\">\"Ali\"</span>),\n        <span class=\"kw\">new</span> <span class=\"type\">User</span>(<span class=\"str\">\"Veli\"</span>)\n    );\n}\n\n<span class=\"comment\">// Çağıran taraf: açık ve tahmin edilebilir</span>\n<span class=\"type\">List</span>&lt;<span class=\"type\">User</span>&gt; users = <span class=\"method\">createDefaultUsers</span>();</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">Eğer bir fonksiyon bir şeyin durumunu değiştirmek zorundaysa, o şeyin kendi metodu olarak yazın. <code class=\"inline\">report.appendFooter()</code> ifadesi <code class=\"inline\">appendFooter(report)</code> ifadesinden çok daha açıktır.</span><span class=\"en-text\">If a function must change the state of something, make it a method of that something. <code class=\"inline\">report.appendFooter()</code> is much clearer than <code class=\"inline\">appendFooter(report)</code>.</span></div>"
    },
    {
      "id": "event-form",
      "title": {
        "en": "Event Form",
        "tr": "Olay Formu (Event Form)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Olay (event) formu, girdi argümanı olan ama çıktı döndürmeyen tekli fonksiyon formudur. Sistem durumunu değiştirmek için kullanılır. Fonksiyon adı, bunun bir olay olduğunu açıkça belirtmelidir.</span><span class=\"en-text\">The event form is a monadic function form that has an input argument but returns no output. It's used to alter system state. The function name must clearly indicate that this is an event.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Belirsiz olay ismi</span><span class=\"en-text\">BAD — Unclear event name</span></span>\n<pre><span class=\"kw\">void</span> <span class=\"method\">handle</span>(<span class=\"type\">int</span> code) {\n    <span class=\"comment\">// Ne olayı? Belirsiz!</span>\n    <span class=\"kw\">if</span> (code &gt; <span class=\"field\">3</span>) {\n        lockAccount();\n    }\n}</pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Açık olay ismi</span><span class=\"en-text\">GOOD — Clear event name</span></span>\n<pre><span class=\"kw\">void</span> <span class=\"method\">onLoginAttemptFailed</span>(<span class=\"type\">int</span> failedAttemptCount) {\n    <span class=\"kw\">if</span> (failedAttemptCount &gt; MAX_ALLOWED_ATTEMPTS) {\n        lockAccount();\n        notifySecurityTeam();\n    }\n}</pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">Olay fonksiyonları için \"on\" veya \"when\" ön ekini kullanın: <code class=\"inline\">onPaymentReceived</code>, <code class=\"inline\">whenSessionExpired</code>. Bu, okuyucuya yan etkinin kasıtlı olduğunu bildirir.</span><span class=\"en-text\">Use \"on\" or \"when\" prefixes for event functions: <code class=\"inline\">onPaymentReceived</code>, <code class=\"inline\">whenSessionExpired</code>. This tells the reader the side effect is intentional.</span></div>"
    },
    {
      "id": "transformation-pattern",
      "title": {
        "en": "Transformation Pattern",
        "tr": "Dönüşüm Kalıbı (Transformation Pattern)"
      },
      "body_html": "<h4><span class=\"tr-text\">Kavram Açıklaması</span><span class=\"en-text\">Concept Explanation</span></h4>\n<p><span class=\"tr-text\">Bir fonksiyon girdi argümanını dönüştürüyorsa, dönüştürülmüş değeri dönüş değeri olarak döndürmelidir. Çıkış argümanı yerine dönüş değeri kullanmak, fonksiyonun amacını açıkça belirtir.</span><span class=\"en-text\">If a function transforms its input argument, it should return the transformed value as its return value. Using a return value instead of an output argument clearly states the function's purpose.</span></p>\n<h4><span class=\"tr-text\">Kötü Örnek (Before)</span><span class=\"en-text\">Bad Example (Before)</span></h4>\n<span class=\"label-bad\"><span class=\"tr-text\">KÖTÜ — Çıkış argümanı ile dönüşüm</span><span class=\"en-text\">BAD — Transformation via output argument</span></span>\n<pre><span class=\"kw\">def</span> <span class=\"method\">normalize</span>(text_buffer):\n    <span class=\"str\">\"\"\"text_buffer yerinde değiştiriliyor - void döner\"\"\"</span>\n    text_buffer.content = text_buffer.content.strip().lower()\n\nbuffer = TextBuffer(<span class=\"str\">\"  HELLO WORLD  \"</span>)\n<span class=\"method\">normalize</span>(buffer)  <span class=\"comment\"># buffer gizlice değişti</span></pre>\n<h4><span class=\"tr-text\">İyi Örnek (After)</span><span class=\"en-text\">Good Example (After)</span></h4>\n<span class=\"label-good\"><span class=\"tr-text\">İYİ — Dönüş değeri ile dönüşüm</span><span class=\"en-text\">GOOD — Transformation via return value</span></span>\n<pre><span class=\"kw\">def</span> <span class=\"method\">normalize</span>(text):\n    <span class=\"str\">\"\"\"Girdiyi dönüştürüp yeni değer döndürür\"\"\"</span>\n    <span class=\"kw\">return</span> text.strip().lower()\n\noriginal = <span class=\"str\">\"  HELLO WORLD  \"</span>\nnormalized = <span class=\"method\">normalize</span>(original)  <span class=\"comment\"># Açık dönüşüm</span></pre>\n<div class=\"tip\"><strong><span class=\"tr-text\">Pratik İpucu</span><span class=\"en-text\">Practical Tip</span></strong><span class=\"tr-text\">Basit kural: Fonksiyon bir şeyi dönüştürüyorsa, dönüştürdüğü şeyi döndürsün. <code class=\"inline\">String normalize(String input)</code> her zaman <code class=\"inline\">void normalize(StringBuilder output)</code> ifadesinden daha iyidir.</span><span class=\"en-text\">Simple rule: If a function transforms something, return the transformed thing. <code class=\"inline\">String normalize(String input)</code> is always better than <code class=\"inline\">void normalize(StringBuilder output)</code>.</span></div>"
    }
  ]
});
