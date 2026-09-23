// Kavram kartları: her yaprağın altındaki düğmeler ve ortak modal.
const Concepts = (function () {
  const byPage = {};

  function chip(pageNum, concept, index) {
    return `<button class="chip" data-page="${pageNum}" data-concept="${index}">${Blocks.pair(concept.title)}</button>`;
  }

  function renderButtons(root, concepts, pageNum) {
    const list = concepts || [];
    if (pageNum !== null) byPage[pageNum] = list;
    if (!list.length) { root.innerHTML = ""; return; }
    root.innerHTML = `<h3 class="concepts-title">${label("Concepts on this page", "Bu sayfadaki kavramlar")}</h3>` +
      `<div class="chips">${list.map((c, i) => chip(pageNum, c, i)).join("")}</div>`;
  }

  // Etiketler arayüz metnidir: iki dil kiplerinde yalnız Türkçesi görünür (ui-pair).
  // lang="en": büyük harfe çevrilince "i" Türkçe kurala göre "İ" olmasın.
  function label(en, tr) {
    return `<span class="ui-pair"><span class="en-text" lang="en">${en}</span><span class="tr-text">${tr}</span></span>`;
  }

  // İçerik metni: iki dil kiplerinde İngilizcesinin altında Türkçesi ayrı blok olur.
  function cardText(unit) {
    return `<span class="card-text">${Blocks.pair(unit)}</span>`;
  }

  function codeSample(sample, badge, badgeClass) {
    if (!sample || !sample.code) return "";
    const why = sample.why ? `<p class="why">${cardText(sample.why)}</p>` : "";
    return `<span class="${badgeClass}">${badge}</span>` +
      `<pre><code>${Highlight.render(sample.code, sample.lang)}</code></pre>${why}`;
  }

  function relatedLink(link) {
    return `<button class="related-page" data-page="${link.page}">${Blocks.pair(link)} · ${label("p.", "s.")} ${link.page}</button>`;
  }

  // Kitap dışı kartlar (◇): kaynak ve kitaptaki ilgili sayfalar kartın başında durur.
  function offbookNote(concept) {
    if (!concept.offbook) return "";
    const related = (concept.related || []).map(relatedLink).join("");
    const links = related ? `<div class="related-pages">${label("Related in the book", "Kitapta ilgili")} ${related}</div>` : "";
    return `<div class="offbook-note"><strong>${label("◇ Not in Clean Code", "◇ Clean Code'da geçmez")}</strong>` +
      `<span class="offbook-source">${Blocks.pair(concept.source)}</span>${links}</div>`;
  }

  function structuredBody(concept) {
    const note = offbookNote(concept);
    const summary = concept.summary ? `<h4>${label("Concept", "Kavram")}</h4><p>${cardText(concept.summary)}</p>` : "";
    const bad = concept.bad ? `<h4>${label("Bad example (before)", "Kötü örnek (Before)")}</h4>` +
      codeSample(concept.bad, label("BAD", "KÖTÜ"), "label-bad") : "";
    const good = concept.good ? `<h4>${label("Good example (after)", "İyi örnek (After)")}</h4>` +
      codeSample(concept.good, label("GOOD", "İYİ"), "label-good") : "";
    const tip = concept.tip ? `<div class="tip"><strong>${label("Practical tip", "Pratik ipucu")}</strong>${cardText(concept.tip)}</div>` : "";
    return note + summary + bad + good + tip;
  }

  // Eski kartların (body_html) hazır HTML'inde lang yok; büyük harfli İngilizce etiket "İ" almasın.
  function legacyBody(html) {
    const body = document.createElement("div");
    body.innerHTML = html;
    body.querySelectorAll(".en-text").forEach((span) => { span.lang = "en"; });
    return body.innerHTML;
  }

  function open(concept) {
    document.getElementById("modal-title").innerHTML = Blocks.pair(concept.title);
    document.getElementById("modal-body").innerHTML = concept.body_html ? legacyBody(concept.body_html) : structuredBody(concept);
    document.getElementById("modal").classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function close() {
    document.getElementById("modal").classList.remove("active");
    document.body.style.overflow = "";
  }

  function onChipClick(event) {
    const button = event.target.closest(".chip");
    if (!button) return;
    const concepts = byPage[button.dataset.page] || [];
    if (concepts[Number(button.dataset.concept)]) open(concepts[Number(button.dataset.concept)]);
  }

  function init() {
    document.getElementById("book").addEventListener("click", onChipClick);
    document.getElementById("modal-close").addEventListener("click", close);
    document.getElementById("modal").addEventListener("click", (event) => {
      if (event.target.id === "modal") close();
    });
    document.addEventListener("keydown", (event) => { if (event.key === "Escape") close(); });
  }

  return { init, renderButtons, open, close };
})();
