// Kavram kartları: sayfa altındaki düğmeler ve modal.
const Concepts = (function () {
  const escapeHtml = Blocks.escapeHtml;
  let current = [];

  function chip(concept, index) {
    return `<button class="chip" data-concept="${index}">${Blocks.pair(concept.title)}</button>`;
  }

  function renderButtons(concepts) {
    current = concepts || [];
    const root = document.getElementById("concepts");
    if (!current.length) { root.innerHTML = ""; return; }
    root.innerHTML = `<h3 class="concepts-title"><span class="en-text">Concepts on this page</span>` +
      `<span class="tr-text">Bu sayfadaki kavramlar</span></h3>` +
      `<div class="chips">${current.map(chip).join("")}</div>`;
  }

  function label(en, tr) {
    return `<span class="en-text">${en}</span><span class="tr-text">${tr}</span>`;
  }

  function codeSample(sample, badge, badgeClass) {
    if (!sample || !sample.code) return "";
    const why = sample.why ? `<p class="why">${Blocks.pair(sample.why)}</p>` : "";
    return `<span class="${badgeClass}">${badge}</span>` +
      `<pre><code>${Highlight.render(sample.code, sample.lang)}</code></pre>${why}`;
  }

  function structuredBody(concept) {
    const summary = concept.summary ? `<h4>${label("Concept", "Kavram")}</h4><p>${Blocks.pair(concept.summary)}</p>` : "";
    const bad = concept.bad ? `<h4>${label("Bad example (before)", "Kötü örnek (Before)")}</h4>` +
      codeSample(concept.bad, label("BAD", "KÖTÜ"), "label-bad") : "";
    const good = concept.good ? `<h4>${label("Good example (after)", "İyi örnek (After)")}</h4>` +
      codeSample(concept.good, label("GOOD", "İYİ"), "label-good") : "";
    const tip = concept.tip ? `<div class="tip"><strong>${label("Practical tip", "Pratik ipucu")}</strong>${Blocks.pair(concept.tip)}</div>` : "";
    return summary + bad + good + tip;
  }

  function open(concept) {
    document.getElementById("modal-title").innerHTML = Blocks.pair(concept.title);
    document.getElementById("modal-body").innerHTML = concept.body_html || structuredBody(concept);
    document.getElementById("modal").classList.add("active");
    document.body.style.overflow = "hidden";
  }

  function close() {
    document.getElementById("modal").classList.remove("active");
    document.body.style.overflow = "";
  }

  function init() {
    document.getElementById("concepts").addEventListener("click", (event) => {
      const button = event.target.closest(".chip");
      if (button) open(current[Number(button.dataset.concept)]);
    });
    document.getElementById("modal-close").addEventListener("click", close);
    document.getElementById("modal").addEventListener("click", (event) => {
      if (event.target.id === "modal") close();
    });
    document.addEventListener("keydown", (event) => { if (event.key === "Escape") close(); });
  }

  return { init, renderButtons, close, escapeHtml };
})();
