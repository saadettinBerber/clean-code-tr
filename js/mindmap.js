// Zihin haritası: tam ekran katman. İçerik data/mindmap.js'ten gelir (kaynağı ayrı depo:
// "clean code felsefesi/zihin-haritasi.md", aktar.py üretir). Kütüphaneler ilk açılışta
// yüklenir ki okuyucunun açılışı ağırlaşmasın.
const MindMap = (function () {
  // Sıra önemli: markmap-view d3'e, markmap-lib ikisine dayanır.
  const LIBRARIES = [
    "https://cdn.jsdelivr.net/npm/d3@7/dist/d3.min.js",
    "https://cdn.jsdelivr.net/npm/markmap-view@0.18/dist/browser/index.js",
    "https://cdn.jsdelivr.net/npm/markmap-lib@0.18/dist/browser/index.iife.js",
  ];
  let drawing = null;

  function panel() { return document.getElementById("mindmap-panel"); }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = resolve;
      script.onerror = () => reject(new Error(`${src} yüklenemedi`));
      document.head.appendChild(script);
    });
  }

  async function draw() {
    if (typeof window.MINDMAP_SOURCE !== "string") throw new Error("data/mindmap.js yok — 'python3 aktar.py' çalıştırın");
    for (const src of LIBRARIES) await loadScript(src);
    const { Transformer, Markmap, deriveOptions } = window.markmap;
    const { root, frontmatter } = new Transformer().transform(window.MINDMAP_SOURCE);
    return Markmap.create("#mindmap-svg", deriveOptions(frontmatter?.markmap), root);
  }

  function showError(error) {
    drawing = null;
    const note = document.getElementById("mindmap-note");
    note.textContent = `Harita çizilemedi: ${error.message}`;
    note.hidden = false;
  }

  function open() {
    Panels.close();
    panel().classList.add("open");
    document.getElementById("mindmap-note").hidden = true;
    if (!drawing) drawing = draw().catch(showError);
  }

  function close() { panel().classList.remove("open"); }

  function isOpen() { return panel().classList.contains("open"); }

  function fit() { if (drawing) drawing.then((map) => map && map.fit()); }

  function init() {
    document.getElementById("mindmap-btn").addEventListener("click", open);
    document.getElementById("mindmap-close").addEventListener("click", close);
    document.getElementById("mindmap-fit").addEventListener("click", fit);
    document.addEventListener("keydown", (event) => { if (event.key === "Escape" && isOpen()) close(); });
  }

  return { init, isOpen };
})();
