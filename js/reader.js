// Okuyucu motoru: sayfa yükleme, çizim ve gezinme.
// data/toc.js -> window.TOC, data/pages/page-N.js -> window.PAGE(...)
const Reader = (function () {
  const LAST_PAGE_KEY = "cleancode-last-page";
  const state = { page: null, pending: null, cache: {}, direction: "next" };

  function toc() { return window.TOC; }
  function pageInfo(num) { return toc().pages[num]; }
  function isTranslated(num) { return Boolean(pageInfo(num)) && !pageInfo(num).blank; }
  function isBlank(num) { return Boolean(pageInfo(num)) && pageInfo(num).blank; }
  function chapterOf(num) { return toc().chapters.find((c) => num >= c.start && num <= c.end); }
  function hashOf(num) { return num === "cover" ? "#cover" : `#page-${num}`; }

  function untranslatedMessage(num) {
    return `Sayfa ${num} henüz çevrilmedi. '/cevir ${num}' yazın veya 'sıradaki sayfa' deyin.`;
  }

  /* ---------- Sayfa yükleme ---------- */
  window.PAGE = function (page) {
    state.cache[page.page] = page;
    if (state.pending === page.page) { state.pending = null; renderPage(page); }
  };

  function loadPage(num) {
    if (state.cache[num]) { renderPage(state.cache[num]); return; }
    state.pending = num;
    document.getElementById("page-body").innerHTML = '<p class="status">Sayfa yükleniyor…</p>';
    const script = document.createElement("script");
    script.src = `data/pages/page-${num}.js`;
    script.onerror = () => Panels.toast(`Sayfa ${num} dosyası bulunamadı.`);
    document.body.appendChild(script);
  }

  /* ---------- Çizim ---------- */
  function pairText(unit) {
    return `<span class="en-text">${Blocks.escapeHtml(unit.en || unit.tr || "")}</span>` +
           `<span class="tr-text">${Blocks.escapeHtml(unit.tr || unit.en || "")}</span>`;
  }

  function chapterLabel(page) {
    const chapter = page.chapter || chapterOf(page.page) || {};
    return { num: chapter.num, en: `Chapter ${chapter.num}: ${chapter.en}`, tr: `Bölüm ${chapter.num}: ${chapter.tr}` };
  }

  function runningHead(page) {
    const chapterText = chapterLabel(page);
    const section = page.section && (page.section.en || page.section.tr) ? page.section : chapterText;
    const isEven = page.page % 2 === 0;
    const text = `<span class="head-text">${pairText(isEven ? chapterText : section)}</span>`;
    const num = `<span class="folio-num">${page.page}</span>`;
    return isEven ? num + text : text + num;
  }

  function breadcrumb(page) {
    const chapter = page.chapter || chapterOf(page.page) || {};
    const section = page.section || {};
    const tail = section.tr || section.en ? ` › ${pairText(section)}` : "";
    return `<span class="en-text">Chapter ${chapter.num} · ${Blocks.escapeHtml(chapter.en || "")}</span>` +
           `<span class="tr-text">Bölüm ${chapter.num} · ${Blocks.escapeHtml(chapter.tr || "")}</span>${tail}`;
  }

  function animateSheet() {
    const sheet = document.getElementById("sheet");
    sheet.classList.remove("turn-next", "turn-prev");
    void sheet.offsetWidth;
    sheet.classList.add(state.direction === "prev" ? "turn-prev" : "turn-next");
  }

  function renderPage(page) {
    state.page = page.page;
    document.getElementById("running-head").innerHTML = runningHead(page);
    document.getElementById("page-body").innerHTML = Blocks.render(page);
    document.getElementById("folio").innerHTML = `<b>${page.page}</b><small>PDF sayfa ${page.pdf_page}</small>`;
    document.getElementById("crumb").innerHTML = breadcrumb(page);
    Concepts.renderButtons(page.concepts);
    document.title = `Clean Code TR — Sayfa ${page.page}`;
    finishRender(page.page);
  }

  function renderCover() {
    state.page = "cover";
    const lastRead = Number(localStorage.getItem(LAST_PAGE_KEY)) || null;
    document.getElementById("running-head").innerHTML = "";
    document.getElementById("page-body").innerHTML = Cover.render(toc(), isTranslated(lastRead) ? lastRead : null);
    document.getElementById("folio").innerHTML = "";
    document.getElementById("crumb").innerHTML = "Robert C. Martin · İngilizce–Türkçe";
    Concepts.renderButtons([]);
    document.title = "Clean Code TR — Kapak";
    finishRender("cover");
  }

  function finishRender(num) {
    document.getElementById("page-input").value = num === "cover" ? "" : num;
    updateTurnButtons();
    Panels.buildToc(toc(), num);
    animateSheet();
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (num !== "cover") localStorage.setItem(LAST_PAGE_KEY, String(num));
    if (location.hash !== hashOf(num)) history.replaceState(null, "", hashOf(num));
  }

  /* ---------- Gezinme ---------- */
  function neighbour(from, step) {
    let num = from + step;
    while (isBlank(num)) num += step;
    return num;
  }

  function goTo(target, direction) {
    state.direction = direction || "next";
    if (target === "cover") { renderCover(); return true; }
    const num = Number(target);
    if (!Number.isInteger(num) || num < 1 || num > toc().bookTotalPages) { Panels.toast("Geçersiz sayfa numarası."); return false; }
    if (!isTranslated(num)) { Panels.toast(untranslatedMessage(num)); return false; }
    loadPage(num);
    return true;
  }

  function goNext() {
    const from = state.page === "cover" ? 0 : state.page;
    goTo(neighbour(from, 1), "next");
  }

  function goPrev() {
    if (state.page === "cover") return;
    const target = neighbour(state.page, -1);
    goTo(target < 1 ? "cover" : target, "prev");
  }

  function updateTurnButtons() {
    const atCover = state.page === "cover";
    const next = neighbour(atCover ? 0 : state.page, 1);
    document.querySelectorAll("[data-nav='prev']").forEach((b) => { b.disabled = atCover; });
    document.querySelectorAll("[data-nav='next']").forEach((b) => { b.disabled = !isTranslated(next); });
    const label = document.getElementById("pager-label");
    if (label) label.textContent = atCover ? "Kapak" : `Sayfa ${state.page} / ${toc().bookTotalPages}`;
  }

  function routeFromHash() {
    const match = /^#page-(\d+)$/.exec(location.hash);
    if (match) return goTo(Number(match[1]));
    if (location.hash === "#cover") return goTo("cover");
    const saved = Number(localStorage.getItem(LAST_PAGE_KEY));
    return isTranslated(saved) ? goTo(saved) : goTo("cover");
  }

  function main() {
    if (!window.TOC) { document.getElementById("page-body").textContent = "data/toc.js yüklenemedi."; return; }
    document.getElementById("page-total").textContent = `/ ${toc().bookTotalPages}`;
    Panels.init({ onSelectPage: (target) => goTo(target, "next") });
    Concepts.init();
    Controls.init({ goTo, goNext, goPrev, currentPage: () => state.page });
    window.addEventListener("hashchange", routeFromHash);
    routeFromHash();
  }

  document.addEventListener("DOMContentLoaded", main);
  return { goTo, goNext, goPrev, setLang: (lang) => Controls.setLang(lang) };
})();
