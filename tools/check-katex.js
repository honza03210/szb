// Validates every \( ... \) and $$ ... $$ fragment in a dataset file by
// compiling it with the bundled KaTeX. Run: node tools/check-katex.js Informatika.js
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const katex = require(path.join(__dirname, "..", "vendor", "katex", "katex.js"));

const file = process.argv[2] || "Informatika.js";
const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(__dirname, "..", file), "utf8"), ctx);
const dataset = ctx.window.STUDY_DATASETS[ctx.window.STUDY_DATASETS.length - 1];

const fragments = []; // { tex, display, where }
function scan(str, where) {
  if (typeof str !== "string") return;
  const re = /\$\$([\s\S]+?)\$\$|\\\(([\s\S]+?)\\\)/g;
  let m;
  while ((m = re.exec(str)) !== null) {
    if (m[1] != null) fragments.push({ tex: m[1], display: true, where });
    else fragments.push({ tex: m[2], display: false, where });
  }
}

function walk(obj, where) {
  if (typeof obj === "string") scan(obj, where);
  else if (Array.isArray(obj)) obj.forEach((v, i) => walk(v, where + "[" + i + "]"));
  else if (obj && typeof obj === "object")
    for (const k of Object.keys(obj)) walk(obj[k], where + "." + k);
}

walk(dataset, dataset.id);

let errors = 0;
for (const f of fragments) {
  try {
    katex.renderToString(f.tex, { displayMode: f.display, throwOnError: true, strict: false });
  } catch (e) {
    errors++;
    console.error("FAIL @ " + f.where + "\n  tex: " + f.tex + "\n  err: " + e.message + "\n");
  }
}
console.log("checked " + fragments.length + " math fragments, " + errors + " error(s)");
process.exit(errors ? 1 : 0);
