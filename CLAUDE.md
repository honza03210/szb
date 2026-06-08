# CLAUDE.md

Guidance for AI agents working in this repository. See `AGENTS.md` for the
human-facing contributor guide; this file highlights what matters most when
editing programmatically.

## What this is

A single-page, dependency-free browser app for drilling Czech bachelor
state-exam topics ("losovač okruhů ke státnicím"). It draws a random topic,
shows a summary definition plus a per-concept breakdown, an example, and an
exercise with hideable solutions. It runs from `file://` — no build step, no
package manager, no network, no framework.

## Architecture

- `index.html` — the entire UI: styling, hamburger dataset menu, category
  filters, the shuffle-bag random draw (each topic appears once per round),
  rendering, and `localStorage`/cookie progress tracking. All logic lives in
  one inline `<script>` after the dataset `<script src>` tags.
- `reels.html` — a standalone TikTok/Reels-style vertical snap-scroll feed
  of random **subtopics** (one concept per full-screen card, shuffle-bag order,
  infinite append on scroll, KaTeX-rendered). A top switcher picks the subject —
  `Vše` (all datasets mixed) / `Informatika` / `PVA` / `Kyber` — deep-linkable
  via hash (`/reels#pva`); each card carries a subject tag in mixed mode.
  Served at the pretty URL `/reels` (see `tools/serve.js`; GitHub Pages
  resolves it too). Loads all three datasets + KaTeX.
- `Informatika.js`, `PVA.js`, `CS.js` — datasets. Each does
  `window.STUDY_DATASETS = window.STUDY_DATASETS || []` then `.push({...})`.
  `index.html` flattens all datasets into `TOPICS`, `DETAIL`, and `SOLUTIONS`
  maps at load time.
- Datasets are registered by the `<script src="...">` order in `index.html`.
  A new subject file must be added there (before the main inline script).

## Dataset shape

Each dataset object has:

- `id` — lowercase ASCII, e.g. `"informatika"`.
- `name` — display name in the menu.
- `categoryLabels` — maps long `cat` names to short filter-chip labels.
- `topics: [...]` — each topic: `{ cat, title, codes: [...], def, scope: [...] }`,
  where `def` is the ~2-minute summary and each `scope` entry is
  `{ t: "<concept name>", d: "<definition>" }`.
- `detail: { "<topic title>": { "<scope t>": { ex, cv } } }` — `ex` is the
  practical example prompt, `cv` the exercise prompt.
- `solutions: { "<topic title>": { "<scope t>": { ex, cv } } }` — worked
  solutions matching the `detail` prompts.

`detail`/`solutions` are keyed by the **exact** `topic.title` and `scope[].t`
strings (see `dataKey` in `index.html`). If those strings don't match
character-for-character, the example/exercise silently falls back to a generic
prompt. When editing a `scope[].t` label, update the matching `detail` and
`solutions` keys too.

## Content conventions

- All user-facing text is Czech. Keep it Czech.
- Definitions favor precise, exam-ready phrasing: a formal definition, the key
  formula, and a one-line intuition or application.
- Keep data (`*.js`) separate from rendering logic (`index.html`).

## Math rendering (KaTeX)

`index.html` bundles KaTeX **locally** under `vendor/katex/` (CSS, JS, the
`contrib/auto-render.min.js` extension, and `fonts/`) so math renders offline
from `file://`. After each card is built, `typesetMath()` runs
`renderMathInElement` over it with delimiters `\( … \)` (inline) and `$$ … $$`
(display).

- **All three datasets write math as LaTeX inside `\( … \)`**, e.g.
  `\\(A^{\\top}\\)`, `\\(\\lambda\\)`, `\\(\\frac{...}{...}\\)`. Backslashes are
  **doubled** in the JS source so the runtime string is a single backslash.
  Fractions are currently left as inline slashes (`a/b`); everything else
  (matrices → `pmatrix`, sums, roots, sub/superscripts, Greek, set-builders,
  accents) is real LaTeX.
- When KaTeX (`renderMathInElement`) is absent, `typesetMath()` no-ops, so the
  page degrades to showing the raw `\( … \)` source rather than breaking.

### Converting / validating math

`tools/` holds the migration + check scripts (not loaded by the app):

- `tools/mathify.js [File.js] [report]` — one-shot converter: reads the pristine
  snapshot `tools/<base>.pristine.js`, wraps Unicode math spans in `\( … \)`,
  and translates the contents to LaTeX, writing `<File.js>`. Defaults to
  `Informatika.js`; pristine snapshots exist for all three datasets. Re-runnable
  and deterministic. Add `report` to list any math left outside spans.
- `tools/check-katex.js <file>` — compiles every `\( … \)` / `$$ … $$` fragment
  with the bundled KaTeX and reports any that fail. **Run this after editing
  math** in a dataset: `node tools/check-katex.js Informatika.js` (expect
  `0 error(s)`).
- `tools/serve.js` + `.claude/launch.json` — a dependency-free static server
  for previewing (`node tools/serve.js`, then open `http://localhost:5577`).

## Diagrams (inline SVG)

`figures.js` is a tiny dependency-free helper exposing `window.renderFigure(spec)`
→ an HTML string for a `<figure>` with a themed inline SVG (colours come from the
page CSS vars, so figures match the dark cards). Loaded by both `index.html` and
`reels.html`; figures render right after a subtopic's definition.

- A scope item may carry an optional `fig` spec:
  `{ t, d, fig: { type, ...} }`. Supported `type`s: `graph` (nodes+edges, also
  used for trees / heaps / parse-trees / neural nets via explicit coords),
  `automaton` (DFA — start arrow, double-ring accept, self-loops, curved
  reciprocal edges), `curve` (`kind: "normal"` bell curve or `kind: "tangent"`),
  `nested` (concentric class boxes, e.g. Chomsky hierarchy), `layers` (stacked
  bars). Node/edge coords are authored in the spec's viewBox space.
- Only `Informatika.js` has figures so far (12, on high-value topics: graphs,
  BST, heap, MST, BFS layers, DFA, MLP, mergesort tree, Chomsky hierarchy,
  normal curve, derivative tangent, parse tree). Adding one is additive and
  safe — it doesn't touch `detail`/`solutions` keys.
- SVG is generated by us (no user input), inserted via `innerHTML`; keep figure
  labels plain Unicode (KaTeX is not run inside figures).

## Validation (no test framework)

Parse-check the inline script:

```bash
node -e 'new Function(require("fs").readFileSync("index.html","utf8").match(/<script(?: src="[^"]+")?>([\s\S]*?)<\/script>/)[1])'
```

Load a dataset file and report its topic count:

```bash
node -e 'const fs=require("fs"),vm=require("vm");const c={window:{}};vm.runInNewContext(fs.readFileSync("Informatika.js","utf8"),c);console.log(c.window.STUDY_DATASETS[0].topics.length)'
```

These files use non-ASCII characters heavily — keep UTF-8 encoding. After any
data edit, also open `index.html` in a browser and confirm no console errors,
the menu opens/closes, and each topic draws once per shuffled round.

## Guardrails

- Do not add a bundler, framework, or dependency unless explicitly asked.
- Do not invent a parallel dataset schema; mirror `Informatika.js`.
- Keep the app usable offline from `file://`.
