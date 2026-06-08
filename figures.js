// Tiny dependency-free SVG diagram helper for the study app.
// window.renderFigure(spec) -> HTML string for a <figure> with an inline SVG.
// Spec types: graph, automaton, curve, nested, layers.
// Colours come from the page theme via CSS vars (with fallbacks), so the same
// figure looks right on the dark cards in index.html and reels.html.
(function () {
  "use strict";
  const STYLE = `
  .fig { margin: 14px 0 2px; }
  .figsvg { width: 100%; height: auto; display: block;
    background: rgba(255,255,255,.025); border: 1px solid var(--line,#2c3556);
    border-radius: 12px; padding: 10px; }
  .figcap { margin: 6px 4px 0; color: var(--muted,#9aa4c4); font-size: .82rem; line-height: 1.4; }
  .fig-edge { stroke: var(--muted,#9aa4c4); stroke-width: 1.6; fill: none; }
  .fig-edge.dash { stroke-dasharray: 4 3; }
  .fig-edge.hot { stroke: var(--accent-2,#45d0a8); stroke-width: 2.6; }
  .fig-ah { fill: var(--muted,#9aa4c4); }
  .fig-ah-hot { fill: var(--accent-2,#45d0a8); }
  .fig-node { fill: var(--card-2,#232c49); stroke: var(--accent,#6c8cff); stroke-width: 1.8; }
  .fig-node.hot { stroke: var(--accent-2,#45d0a8); }
  .fig-node.plain { stroke: var(--muted,#9aa4c4); }
  .fig-nlabel { fill: var(--ink,#eef1f8); font: 600 13px system-ui, sans-serif;
    text-anchor: middle; dominant-baseline: central; }
  .fig-sub { fill: var(--muted,#9aa4c4); font: 600 10.5px system-ui, sans-serif;
    text-anchor: middle; dominant-baseline: central; }
  .fig-elabel { fill: var(--ink,#eef1f8); font: 600 11px system-ui, sans-serif;
    text-anchor: middle; dominant-baseline: central; }
  .fig-elabel-bg { fill: var(--card,#1a2138); }
  .fig-axis { stroke: var(--muted,#9aa4c4); stroke-width: 1.2; }
  .fig-curve { stroke: var(--accent,#6c8cff); stroke-width: 2.2; fill: none; }
  .fig-area { fill: var(--accent,#6c8cff); opacity: .16; }
  .fig-tangent { stroke: var(--accent-2,#45d0a8); stroke-width: 1.8; fill: none; }
  .fig-pt { fill: var(--accent-2,#45d0a8); }
  .fig-box { fill: rgba(108,140,255,.06); stroke: var(--accent,#6c8cff); stroke-width: 1.5; }
  .fig-box2 { fill: rgba(69,208,168,.05); stroke: var(--muted,#9aa4c4); stroke-width: 1.4; }
  .fig-boxlabel { fill: var(--ink,#eef1f8); font: 700 11.5px system-ui, sans-serif; text-anchor: middle; }
  .fig-dim { fill: var(--muted,#9aa4c4); font: 600 11px system-ui, sans-serif; text-anchor: middle; }`;

  function inject() {
    if (document.getElementById("fig-defs")) return;
    const style = document.createElement("style");
    style.id = "fig-styles";
    style.textContent = STYLE;
    document.head.appendChild(style);
    // shared arrowhead markers, referenced by all figures via url(#...)
    const defs = document.createElement("div");
    defs.innerHTML =
      '<svg id="fig-defs" width="0" height="0" style="position:absolute" aria-hidden="true">' +
      '<defs>' +
      '<marker id="figarrow" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="fig-ah"/></marker>' +
      '<marker id="figarrowhot" viewBox="0 0 10 10" refX="8.5" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" class="fig-ah-hot"/></marker>' +
      '</defs></svg>';
    document.body.appendChild(defs.firstChild);
  }

  const esc = s => String(s).replace(/[&<>]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;" }[c]));
  const n1 = v => (Math.round(v * 10) / 10);

  function svg(w, h, inner) {
    return `<svg class="figsvg" viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid meet" role="img">${inner}</svg>`;
  }
  function edgeLabel(x, y, text) {
    if (text == null) return "";
    const wid = String(text).length * 6.5 + 8;
    return `<rect class="fig-elabel-bg" x="${n1(x - wid / 2)}" y="${n1(y - 8)}" width="${n1(wid)}" height="15" rx="4"/>` +
      `<text class="fig-elabel" x="${n1(x)}" y="${n1(y + 0.5)}">${esc(text)}</text>`;
  }

  // ---- graph / tree / heap / parse-tree / neural-net (nodes + edges) ----
  function graph(s) {
    const w = s.w || 320, h = s.h || 200, R = s.r || 15;
    const by = {};
    s.nodes.forEach(nd => { by[nd.id] = nd; });
    let edges = "", labels = "";
    (s.edges || []).forEach(e => {
      const a = by[e.from], b = by[e.to];
      const r1 = a.r || R, r2 = b.r || R;
      const dx = b.x - a.x, dy = b.y - a.y, L = Math.hypot(dx, dy) || 1, ux = dx / L, uy = dy / L;
      const dir = s.directed || e.directed;
      const x1 = a.x + ux * r1, y1 = a.y + uy * r1;
      const x2 = b.x - ux * (r2 + (dir ? 3 : 0)), y2 = b.y - uy * (r2 + (dir ? 3 : 0));
      const cls = "fig-edge" + (e.dashed ? " dash" : "") + (e.hot ? " hot" : "");
      const mk = dir ? ` marker-end="url(#${e.hot ? "figarrowhot" : "figarrow"})"` : "";
      edges += `<line class="${cls}" x1="${n1(x1)}" y1="${n1(y1)}" x2="${n1(x2)}" y2="${n1(y2)}"${mk}/>`;
      if (e.label != null) labels += edgeLabel((x1 + x2) / 2, (y1 + y2) / 2, e.label);
    });
    let nodes = "";
    s.nodes.forEach(nd => {
      const cls = "fig-node" + (nd.accent ? " hot" : "") + (nd.plain ? " plain" : "");
      const rr = nd.r || R;
      if (nd.box) {
        nodes += `<rect class="${cls}" x="${nd.x - rr}" y="${n1(nd.y - 13)}" width="${rr * 2}" height="26" rx="6"/>`;
      } else {
        nodes += `<circle class="${cls}" cx="${nd.x}" cy="${nd.y}" r="${rr}"/>`;
      }
      if (nd.label != null) nodes += `<text class="fig-nlabel" x="${nd.x}" y="${nd.sub != null ? nd.y - 4 : nd.y}">${esc(nd.label)}</text>`;
      if (nd.sub != null) nodes += `<text class="fig-sub" x="${nd.x}" y="${nd.y + 8}">${esc(nd.sub)}</text>`;
    });
    return svg(w, h, edges + labels + nodes);
  }

  // ---- finite automaton (states + transitions, start arrow, accept = double ring) ----
  function automaton(s) {
    const w = s.w || 340, h = s.h || 170, R = s.r || 16;
    const by = {};
    s.nodes.forEach(nd => { by[nd.id] = nd; });
    let out = "";
    s.nodes.forEach(nd => {
      if (nd.start) out += `<line class="fig-edge" x1="${nd.x - R - 24}" y1="${nd.y}" x2="${nd.x - R - 3}" y2="${nd.y}" marker-end="url(#figarrow)"/>`;
    });
    (s.edges || []).forEach(e => {
      const a = by[e.from], b = by[e.to];
      if (e.from === e.to) {
        const x = a.x, y = a.y - R;
        out += `<path class="fig-edge" d="M ${x - 7} ${y} C ${x - 17} ${y - 27}, ${x + 17} ${y - 27}, ${x + 7} ${y}" marker-end="url(#figarrow)"/>`;
        out += edgeLabel(x, y - 26, e.label);
      } else {
        const dx = b.x - a.x, dy = b.y - a.y, L = Math.hypot(dx, dy) || 1, ux = dx / L, uy = dy / L;
        const x1 = a.x + ux * R, y1 = a.y + uy * R, x2 = b.x - ux * (R + 3), y2 = b.y - uy * (R + 3);
        if (e.curve) {
          const mx = (x1 + x2) / 2 - uy * e.curve, my = (y1 + y2) / 2 + ux * e.curve;
          const cx = (x1 + x2) / 2 - uy * e.curve * 2, cy = (y1 + y2) / 2 + ux * e.curve * 2;
          out += `<path class="fig-edge" d="M ${n1(x1)} ${n1(y1)} Q ${n1(cx)} ${n1(cy)} ${n1(x2)} ${n1(y2)}" marker-end="url(#figarrow)"/>`;
          out += edgeLabel(mx, my, e.label);
        } else {
          out += `<line class="fig-edge" x1="${n1(x1)}" y1="${n1(y1)}" x2="${n1(x2)}" y2="${n1(y2)}" marker-end="url(#figarrow)"/>`;
          out += edgeLabel((x1 + x2) / 2, (y1 + y2) / 2, e.label);
        }
      }
    });
    s.nodes.forEach(nd => {
      if (nd.accept) out += `<circle class="fig-node" style="fill:none" cx="${nd.x}" cy="${nd.y}" r="${R + 4}"/>`;
      out += `<circle class="fig-node" cx="${nd.x}" cy="${nd.y}" r="${R}"/>`;
      out += `<text class="fig-nlabel" x="${nd.x}" y="${nd.y}">${esc(nd.label)}</text>`;
    });
    return svg(w, h, out);
  }

  // ---- function curve (normal bell, or parabola + tangent) ----
  function curve(s) {
    const w = 300, h = 156, x0 = 20, x1 = 282, base = 122, top = 16;
    if (s.kind === "normal") {
      const X = x => x0 + (x + 3.4) / 6.8 * (x1 - x0);
      const Y = f => base - f * (base - top);
      const f = x => Math.exp(-x * x / 2);
      let d = "", area = "";
      for (let i = 0; i <= 96; i++) { const x = -3.4 + 6.8 * i / 96; d += (i ? "L" : "M") + n1(X(x)) + " " + n1(Y(f(x))) + " "; }
      area = `M ${n1(X(-1))} ${base} `;
      for (let i = 0; i <= 40; i++) { const x = -1 + 2 * i / 40; area += "L" + n1(X(x)) + " " + n1(Y(f(x))) + " "; }
      area += `L ${n1(X(1))} ${base} Z`;
      let out = `<line class="fig-axis" x1="${x0}" y1="${base}" x2="${x1}" y2="${base}"/>`;
      out += `<path class="fig-area" d="${area}"/>`;
      out += `<path class="fig-curve" d="${d}"/>`;
      out += `<line class="fig-axis dash" stroke-dasharray="3 3" x1="${n1(X(0))}" y1="${top - 2}" x2="${n1(X(0))}" y2="${base}"/>`;
      out += `<text class="fig-dim" x="${n1(X(0))}" y="${base + 14}">μ</text>`;
      out += `<text class="fig-dim" x="${n1(X(-1))}" y="${base + 14}">μ−σ</text>`;
      out += `<text class="fig-dim" x="${n1(X(1))}" y="${base + 14}">μ+σ</text>`;
      return svg(w, h, out);
    }
    if (s.kind === "tangent") {
      // f(x)=x^2 on [-?], tangent at a=1 ; axes
      const ax0 = 30, ax1 = 285, ay = base, oy = top;
      const X = x => 150 + x * 52;          // x in ~[-2.3,2.5]
      const Y = y => base - y * 24;          // y up
      const f = x => x * x;
      let d = "";
      for (let i = 0; i <= 80; i++) { const x = -2.1 + 4.4 * i / 80; const yy = f(x); if (yy <= 4.3) d += (d ? "L" : "M") + n1(X(x)) + " " + n1(Y(yy)) + " "; }
      const a = 1, fa = f(a), slope = 2 * a;        // tangent y = fa + slope*(x-a)
      const tx0 = -0.2, tx1 = 2.2;
      const T = x => fa + slope * (x - a);
      let out = `<line class="fig-axis" x1="${ax0}" y1="${ay}" x2="${ax1}" y2="${ay}"/>`;
      out += `<line class="fig-axis" x1="${n1(X(0))}" y1="${oy}" x2="${n1(X(0))}" y2="${ay + 2}"/>`;
      out += `<line class="fig-tangent" x1="${n1(X(tx0))}" y1="${n1(Y(T(tx0)))}" x2="${n1(X(tx1))}" y2="${n1(Y(T(tx1)))}"/>`;
      out += `<path class="fig-curve" d="${d}"/>`;
      out += `<circle class="fig-pt" cx="${n1(X(a))}" cy="${n1(Y(fa))}" r="3.6"/>`;
      out += `<text class="fig-dim" x="${n1(X(a) + 30)}" y="${n1(Y(fa) - 6)}">tečna, směrnice f′(a)</text>`;
      out += `<text class="fig-dim" x="${n1(X(-1.4))}" y="${n1(Y(3.4))}">f(x)</text>`;
      return svg(w, h, out);
    }
    return "";
  }

  // ---- nested classes (Chomsky hierarchy) ----
  function nested(s) {
    const w = 320, h = 196, lay = s.layers, n = lay.length;
    let out = "";
    for (let i = 0; i < n; i++) {
      const x = 8 + i * 30, y = 8 + i * 24;
      const bw = w - 2 * x, bh = h - 2 * y;
      out += `<rect class="${i % 2 ? "fig-box2" : "fig-box"}" x="${x}" y="${y}" width="${bw}" height="${bh}" rx="10"/>`;
      out += `<text class="fig-boxlabel" x="${w / 2}" y="${y + 15}">${esc(lay[i])}</text>`;
    }
    return svg(w, h, out);
  }

  // ---- stacked layers (network models etc.) ----
  function layers(s) {
    const w = 300, rowH = 26, gap = 7, pad = 6;
    const items = s.items, n = items.length, h = pad * 2 + n * rowH + (n - 1) * gap;
    let out = "";
    items.forEach((it, i) => {
      const y = pad + i * (rowH + gap);
      out += `<rect class="${i % 2 ? "fig-box2" : "fig-box"}" x="8" y="${y}" width="${w - 16}" height="${rowH}" rx="7"/>`;
      out += `<text class="fig-boxlabel" style="text-anchor:start" x="18" y="${y + rowH / 2 + 4}">${esc(it.label)}</text>`;
      if (it.sub != null) out += `<text class="fig-dim" style="text-anchor:end" x="${w - 18}" y="${y + rowH / 2 + 4}">${esc(it.sub)}</text>`;
    });
    return svg(w, h, out);
  }

  const RENDERERS = { graph, tree: graph, automaton, curve, nested, layers };

  window.renderFigure = function (spec) {
    if (!spec || !RENDERERS[spec.type]) return "";
    inject();
    const body = RENDERERS[spec.type](spec);
    const cap = spec.caption ? `<figcaption class="figcap">${esc(spec.caption)}</figcaption>` : "";
    return `<figure class="fig">${body}${cap}</figure>`;
  };
})();
