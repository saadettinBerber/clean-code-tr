// Kapak görünümü: kitap bilgisi, çeviri ilerlemesi ve bölüm listesi.
const Cover = (function () {
  const escapeHtml = Highlight.escapeHtml;

  function translatedCount(toc, chapter) {
    return Object.keys(toc.pages).map(Number)
      .filter((n) => n >= chapter.start && n <= chapter.end && !toc.pages[n].blank).length;
  }

  function firstTranslated(toc, chapter) {
    const pages = Object.keys(toc.pages).map(Number)
      .filter((n) => n >= chapter.start && n <= chapter.end && !toc.pages[n].blank);
    return pages.length ? Math.min(...pages) : null;
  }

  function chapterRow(toc, chapter) {
    const count = translatedCount(toc, chapter);
    const first = firstTranslated(toc, chapter);
    const status = count ? `${count} sayfa çevrildi` : "henüz çevrilmedi";
    return `<button class="cover-ch${count ? "" : " empty"}" ${first ? `data-page="${first}"` : "disabled"}>` +
      `<span class="n">${chapter.num}</span><span>${escapeHtml(chapter.tr)}<small>${escapeHtml(chapter.en)} · s. ${chapter.start} · ${status}</small></span></button>`;
  }

  function progressHtml(toc) {
    const done = Object.values(toc.pages).filter((p) => !p.blank).length;
    const percent = Math.round((done / toc.bookTotalPages) * 100);
    return `<div class="cover-progress"><div class="cover-bar"><span style="width:${percent}%"></span></div>` +
      `${done} / ${toc.bookTotalPages} sayfa çevrildi (%${percent})</div>`;
  }

  function actions(lastRead) {
    const resume = lastRead ? `<button class="ui-btn primary" data-page="${lastRead}">Kaldığım yerden devam et · Sayfa ${lastRead}</button>` : "";
    return `<div class="cover-actions">${resume}<button class="ui-btn" data-page="1">Baştan başla</button></div>`;
  }

  function render(toc, lastRead) {
    return `<div class="cover"><div class="cover-series">Robert C. Martin Series</div>` +
      `<h1 class="cover-title">Clean Code</h1>` +
      `<div class="cover-sub">A Handbook of Agile Software Craftsmanship</div>` +
      `<div class="cover-sub-tr">Çevik Yazılım Zanaatkârlığı El Kitabı — İngilizce/Türkçe interaktif okuma</div>` +
      `<div class="cover-author">Robert C. Martin</div><div class="cover-rule"></div>` +
      progressHtml(toc) + actions(lastRead) +
      `<div class="cover-chapters">${toc.chapters.map((ch) => chapterRow(toc, ch)).join("")}</div></div>`;
  }

  return { render };
})();
