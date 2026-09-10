// Sayfa bloklarını (tools/FORMAT.md) HTML'e çevirir.
const Blocks = (function () {
  const escapeHtml = Highlight.escapeHtml;
  const LISTING_CAPTION = /^(Listing \d+-\d+(?: \(continued\))?)[:\s/]*(.*)$/;

  function inlineCode(text) {
    return escapeHtml(text).replace(/`([^`]+)`/g, "<code>$1</code>");
  }

  function unitHtml(unit, field) {
    const value = unit[field] || "";
    return unit.html ? value : inlineCode(value);
  }

  function pair(unit, extraClass) {
    const cls = extraClass ? ` ${extraClass}` : "";
    return `<span class="en-text${cls}">${unitHtml(unit, "en")}</span>` +
           `<span class="tr-text${cls}">${unitHtml(unit, "tr")}</span>`;
  }

  function wordSpan(word) {
    return `<span class="word" data-t="${escapeHtml(word.t)}">${escapeHtml(word.w)}</span>`;
  }

  function wordsHtml(sentence) {
    const text = sentence.en;
    let cursor = 0, html = "";
    sentence.words.forEach((word) => {
      const found = text.indexOf(word.w, cursor);
      if (found === -1) return;
      html += escapeHtml(text.slice(cursor, found)) + wordSpan(word);
      cursor = found + word.w.length;
    });
    return html + escapeHtml(text.slice(cursor));
  }

  function sentenceHtml(sentence) {
    const en = sentence.words && sentence.words.length ? wordsHtml(sentence) : unitHtml(sentence, "en");
    return `<span class="sentence"><span class="en-text">${en}</span>` +
           `<span class="tr-text counterpart-host">${unitHtml(sentence, "tr")}</span></span>`;
  }

  function paraClasses(block) {
    const classes = ["para"];
    if (block.style) classes.push(block.style);
    if (block.sentences.some((s) => s.html)) classes.push("legacy-para");
    return classes.join(" ");
  }

  function renderPara(block) {
    const body = block.sentences.map(sentenceHtml).join(" ");
    return `<p class="${paraClasses(block)}">${body}</p>`;
  }

  function renderChapter(block) {
    const num = block.num ? `<div class="chapter-num">${block.num}</div>` : "";
    const author = block.author ? `<div class="chapter-author">${escapeHtml(block.author)}</div>` : "";
    return `<header class="chapter-opener">${num}<h1 class="chapter-title">${pair(block)}</h1>${author}</header>`;
  }

  function renderHeading(block) {
    const level = Math.min(Math.max(block.level || 1, 1), 3);
    const tag = `h${level + 1}`;
    return `<${tag} class="heading level-${level}">${pair(block)}</${tag}>`;
  }

  function renderList(block) {
    const tag = block.ordered ? "ol" : "ul";
    const items = block.items.map((item) => `<li class="sentence">${pair(item)}</li>`).join("");
    return `<${tag} class="list">${items}</${tag}>`;
  }

  function captionInner(text) {
    const match = LISTING_CAPTION.exec(text || "");
    if (!match) return escapeHtml(text || "");
    return `<span class="listing-label">${escapeHtml(match[1])}</span> ` +
           `<span class="listing-file">${escapeHtml(match[2])}</span>`;
  }

  function listingCaption(caption) {
    if (!caption) return "";
    return `<figcaption class="listing-caption ui-pair"><span class="en-text">${captionInner(caption.en)}</span>` +
           `<span class="tr-text">${captionInner(caption.tr || caption.en)}</span></figcaption>`;
  }

  function renderCode(block, caption) {
    const code = Highlight.render(block.code || "", block.lang);
    return `<figure class="listing">${listingCaption(caption || block.caption)}` +
           `<pre class="code"><code>${code}</code></pre></figure>`;
  }

  function renderImage(block, pageId) {
    const src = `data/pages/${pageId}_images/${encodeURIComponent(block.src)}`;
    return `<figure class="figure"><img src="${src}" alt="" loading="lazy"></figure>`;
  }

  function renderCaption(block) {
    return `<p class="caption sentence">${pair(block)}</p>`;
  }

  function renderFootnote(block) {
    return `<div class="footnote sentence">${pair(block)}</div>`;
  }

  function renderTable(block) {
    const rows = block.rows.map((row) =>
      `<tr>${row.map((cell) => `<td class="sentence">${pair(cell)}</td>`).join("")}</tr>`).join("");
    return `<table class="book-table">${rows}</table>`;
  }

  function renderHtml(block) {
    return `<div class="legacy">${block.html}</div>`;
  }

  function renderOne(block, pageId, next) {
    switch (block.type) {
      case "chapter": return renderChapter(block);
      case "heading": return renderHeading(block);
      case "para": return renderPara(block);
      case "list": return renderList(block);
      case "code": return renderCode(block);
      case "caption": return next && next.type === "code" && block.kind === "listing" ? "" : renderCaption(block);
      case "image": return renderImage(block, pageId);
      case "footnote": return renderFootnote(block);
      case "table": return renderTable(block);
      case "html": return renderHtml(block);
      default: return "";
    }
  }

  function withListingCaptions(blocks, pageId) {
    const parts = [];
    blocks.forEach((block, index) => {
      const previous = blocks[index - 1];
      const hasCaption = previous && previous.type === "caption" && previous.kind === "listing";
      if (block.type === "code" && hasCaption) parts.push(renderCode(block, previous));
      else parts.push(renderOne(block, pageId, blocks[index + 1]));
    });
    return parts;
  }

  function groupFootnotes(html) {
    return html.replace(/(<div class="footnote sentence">[\s\S]*?<\/div>\s*)+/g, (group) =>
      `<aside class="footnotes">${group}</aside>`);
  }

  function markDropcap(html, blocks) {
    if (!blocks.length || blocks[0].type !== "chapter") return html;
    return html.replace('<p class="para">', '<p class="para dropcap">');
  }

  function render(page) {
    const html = withListingCaptions(page.blocks || [], page.id).join("\n");
    return markDropcap(groupFootnotes(html), page.blocks || []);
  }

  return { render, pair, inlineCode, escapeHtml };
})();
