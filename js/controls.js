// Kullanıcı denetimleri: dil modu, yazı boyutu, sayfa girişi, klavye, kaydırma, kelime baloncuğu.
const Controls = (function () {
  const LANG_KEY = "cleancode-lang";
  const FONT_KEY = "cleancode-font-scale";
  const FONT_STEP = 0.1, FONT_MIN = 0.8, FONT_MAX = 1.6, BASE_FONT_REM = 1.05;
  const SWIPE_MIN_PX = 60;
  const LANGS = ["tr", "en", "both"];
  const state = { lang: "tr", scale: 1 };
  let nav = null;

  function setLang(lang) {
    state.lang = LANGS.includes(lang) ? lang : "tr";
    document.documentElement.dataset.lang = state.lang;
    document.querySelectorAll(".lang-switch button").forEach((b) => b.classList.toggle("active", b.dataset.lang === state.lang));
    localStorage.setItem(LANG_KEY, state.lang);
  }

  function setScale(scale) {
    state.scale = Math.min(FONT_MAX, Math.max(FONT_MIN, scale));
    document.getElementById("page-body").style.fontSize = `${(BASE_FONT_REM * state.scale).toFixed(3)}rem`;
    localStorage.setItem(FONT_KEY, String(state.scale));
  }

  function restorePreferences() {
    setLang(localStorage.getItem(LANG_KEY) || "tr");
    setScale(Number(localStorage.getItem(FONT_KEY)) || 1);
  }

  function showWordTip(word) {
    hideWordTip();
    word.classList.add("active");
    const tip = document.getElementById("word-tip");
    tip.textContent = word.dataset.t;
    tip.style.display = "block";
    const rect = word.getBoundingClientRect();
    tip.style.top = `${Math.max(rect.top + window.scrollY - tip.offsetHeight - 8, window.scrollY + 4)}px`;
    tip.style.left = `${Math.max(rect.left + window.scrollX + rect.width / 2 - tip.offsetWidth / 2, 4)}px`;
  }

  function hideWordTip() {
    document.getElementById("word-tip").style.display = "none";
    document.querySelectorAll(".word.active").forEach((el) => el.classList.remove("active"));
  }

  function bindSentenceClicks() {
    document.getElementById("page-body").addEventListener("click", (event) => {
      const word = event.target.closest(".word");
      if (word) { showWordTip(word); event.stopPropagation(); return; }
      const sentence = event.target.closest(".sentence");
      if (sentence && !event.target.closest("a, button")) sentence.classList.toggle("revealed");
      const coverButton = event.target.closest(".cover [data-page]");
      if (coverButton) nav.goTo(coverButton.dataset.page, "next");
    });
    document.addEventListener("click", (event) => { if (!event.target.closest(".word")) hideWordTip(); });
  }

  function flashError(input) {
    input.classList.add("error");
    setTimeout(() => input.classList.remove("error"), 400);
  }

  function bindPageInput() {
    const input = document.getElementById("page-input");
    input.addEventListener("input", () => { input.value = input.value.replace(/[^0-9]/g, ""); });
    input.addEventListener("keydown", (event) => {
      if (event.key !== "Enter") return;
      if (nav.goTo(Number(input.value), "next") === false) flashError(input); else input.blur();
    });
    input.addEventListener("blur", () => { input.value = nav.currentPage() === "cover" ? "" : nav.currentPage(); });
    input.addEventListener("focus", () => input.select());
  }

  function bindKeyboard() {
    document.addEventListener("keydown", (event) => {
      const typing = ["INPUT", "TEXTAREA"].includes(document.activeElement.tagName);
      if (typing || document.getElementById("modal").classList.contains("active")) return;
      if (event.key === "ArrowRight") nav.goNext();
      if (event.key === "ArrowLeft") nav.goPrev();
    });
  }

  function bindSwipe() {
    let startX = null;
    const sheet = document.getElementById("sheet");
    sheet.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; }, { passive: true });
    sheet.addEventListener("touchend", (e) => {
      if (startX === null) return;
      const delta = e.changedTouches[0].clientX - startX;
      if (delta < -SWIPE_MIN_PX) nav.goNext();
      if (delta > SWIPE_MIN_PX) nav.goPrev();
      startX = null;
    });
  }

  function bindToolbar() {
    document.querySelectorAll("[data-nav='next']").forEach((b) => b.addEventListener("click", nav.goNext));
    document.querySelectorAll("[data-nav='prev']").forEach((b) => b.addEventListener("click", nav.goPrev));
    document.querySelectorAll(".lang-switch button").forEach((b) => b.addEventListener("click", () => setLang(b.dataset.lang)));
    document.getElementById("font-up").addEventListener("click", () => setScale(state.scale + FONT_STEP));
    document.getElementById("font-down").addEventListener("click", () => setScale(state.scale - FONT_STEP));
  }

  function init(navigation) {
    nav = navigation;
    restorePreferences();
    bindSentenceClicks(); bindPageInput(); bindKeyboard(); bindSwipe(); bindToolbar();
  }

  return { init, setLang, setScale };
})();
