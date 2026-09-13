// Çalışma notları görünümü: data/notes/chapter-N.js dosyasını yükler, her not setini bir yaprak olarak çizer.
const Notes = (function () {
  const LANG_KEY = "cleancode-lang";
  const LANGS = ["tr", "en", "both"];
  const DEFAULT_LANG = "tr";
  const DEFAULT_CHAPTER = 5;
  const ASSET_VERSION = 1;
  const escapeHtml = Highlight.escapeHtml;

  function chapterFromHash() {
    const match = /^#chapter-(\d+)$/.exec(window.location.hash);
    return match ? Number(match[1]) : DEFAULT_CHAPTER;
  }

  function storedLang() {
    try {
      const saved = localStorage.getItem(LANG_KEY);
      return LANGS.includes(saved) ? saved : DEFAULT_LANG;
    } catch (error) {
      console.warn("Dil tercihi okunamadı:", error);
      return DEFAULT_LANG;
    }
  }

  function setLang(lang) {
    document.documentElement.dataset.lang = lang;
    document.querySelectorAll(".lang-switch button").forEach((button) =>
      button.classList.toggle("active", button.dataset.lang === lang));
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (error) {
      console.warn("Dil tercihi kaydedilemedi:", error);
    }
  }

  function pairText(en, tr) {
    return `<span class="en-text">${escapeHtml(en)}</span><span class="tr-text">${escapeHtml(tr)}</span>`;
  }

  function chapterLabel(chapter) {
    return pairText(`Chapter ${chapter.num}: ${chapter.en}`, `Bölüm ${chapter.num}: ${chapter.tr}`);
  }

  function runningHead(set) {
    const [firstPage, lastPage] = set.pages;
    const text = pairText(`Study notes · pages ${firstPage}–${lastPage}`, `Çalışma notları · sayfa ${firstPage}–${lastPage}`);
    return `<div class="running-head ui-pair"><span class="head-text">${text}</span></div>`;
  }

  function sheetFor(set) {
    const sheet = document.createElement("article");
    sheet.className = "sheet";
    const title = `<header class="chapter-opener"><h1 class="chapter-title">${Blocks.pair(set.title)}</h1></header>`;
    const body = Blocks.render({ id: set.id, blocks: set.blocks });
    sheet.innerHTML = `${runningHead(set)}<div class="page-body">${title}${body}</div>` +
      `<section class="concepts ui-pair"></section>`;
    Concepts.renderButtons(sheet.querySelector(".concepts"), set.concepts, set.id);
    return sheet;
  }

  function render(notes) {
    const book = document.getElementById("book");
    book.innerHTML = "";
    notes.sets.forEach((set) => book.appendChild(sheetFor(set)));
    document.getElementById("crumb").innerHTML = chapterLabel(notes.chapter);
  }

  function showMissing(chapterNum) {
    document.getElementById("book").innerHTML = `<article class="sheet"><div class="page-body">` +
      `<p class="status">Bölüm ${chapterNum} için henüz çalışma notu yok.</p></div></article>`;
  }

  function load(chapterNum) {
    const script = document.createElement("script");
    script.src = `data/notes/chapter-${chapterNum}.js?v=${ASSET_VERSION}`;
    script.onerror = () => showMissing(chapterNum);
    document.body.appendChild(script);
  }

  function bindLangSwitch() {
    document.querySelectorAll(".lang-switch button").forEach((button) =>
      button.addEventListener("click", () => setLang(button.dataset.lang)));
  }

  function init() {
    window.NOTES = render;
    setLang(storedLang());
    bindLangSwitch();
    Concepts.init();
    load(chapterFromHash());
    window.addEventListener("hashchange", () => window.location.reload());
  }

  return { init };
})();

Notes.init();
