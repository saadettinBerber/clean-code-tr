// Kitap dışı kalıplar (◇): Clean Code'da geçmeyen kalıpların kartları, sağ çekmecede.
// İçerik data/offbook.js'ten gelir (kaynağı ayrı depo: "clean code felsefesi/kitap-disi-kartlar.json",
// kartlari-aktar.py üretir). Kartlar sayfa kartlarıyla aynı modalde açılır.
const OffBook = (function () {
  let onSelectPage = () => {};

  function groups() { return (window.OFFBOOK && window.OFFBOOK.groups) || []; }

  function cardButton(card, groupIndex, cardIndex) {
    return `<button class="chip offbook-chip" data-group="${groupIndex}" data-card="${cardIndex}">${Blocks.pair(card.title)}</button>`;
  }

  function groupSection(group, groupIndex) {
    const buttons = group.cards.map((card, cardIndex) => cardButton(card, groupIndex, cardIndex)).join("");
    return `<section class="offbook-group"><h4 class="offbook-group-title">${Blocks.pair(group.title)}</h4>` +
      `<div class="chips">${buttons}</div></section>`;
  }

  function intro() {
    return `<p class="offbook-intro"><span class="en-text">These patterns do not appear in Clean Code. The book's own patterns are on the page cards.</span>` +
      `<span class="tr-text">Bu kalıplar Clean Code'da geçmez. Kitabın kendi kalıpları sayfa kartlarındadır.</span></p>`;
  }

  function render() {
    document.getElementById("offbook-body").innerHTML = intro() + groups().map(groupSection).join("");
  }

  function onCardClick(event) {
    const button = event.target.closest(".offbook-chip");
    if (!button) return;
    const card = groups()[Number(button.dataset.group)].cards[Number(button.dataset.card)];
    if (card) Concepts.open(card);
  }

  function onRelatedClick(event) {
    const link = event.target.closest(".related-page");
    if (!link) return;
    Concepts.close();
    Panels.close();
    onSelectPage(link.dataset.page);
  }

  function init(handlers) {
    const button = document.getElementById("offbook-btn");
    if (!groups().length) { button.hidden = true; return; }
    onSelectPage = handlers.onSelectPage;
    render();
    button.addEventListener("click", () => Panels.open("offbook-panel"));
    document.getElementById("offbook-body").addEventListener("click", onCardClick);
    document.getElementById("modal-body").addEventListener("click", onRelatedClick);
  }

  return { init };
})();
