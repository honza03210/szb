// Converts Unicode math in Informatika.js into KaTeX \( ... \) fragments.
// Deterministic: always reads tools/Informatika.pristine.js, writes ../Informatika.js.
// Pipeline: (1) wrap math spans in delimiters, (2) translate Unicode->LaTeX inside spans.
// Run: node tools/mathify.js   (add "report" arg to print residual unconverted math)
const fs = require("fs");
const path = require("path");
const T = String.raw;

const pristine = path.join(__dirname, "Informatika.pristine.js");
const out = path.join(__dirname, "..", "Informatika.js");
let text = fs.readFileSync(pristine, "utf8");

// ----- delimiters (file-source text: two backslashes so JS runtime = \( \) ) -----
const L = T`\\(`, R = T`\\)`;

// ----- Unicode -> LaTeX symbol maps -----
const SUP = { "⁰":"0","¹":"1","²":"2","³":"3","⁴":"4","⁵":"5","⁶":"6","⁷":"7","⁸":"8","⁹":"9","ⁿ":"n","ⁱ":"i","ᵏ":"k","ʲ":"j","ᵀ":T`\\top`,"ᴿ":"R","⁻":"-","⁺":"+","⁼":"=","⁽":"(","⁾":")","ᵐ":"m","ᵖ":"p","ᵃ":"a","ᵇ":"b","ᵈ":"d","ᵉ":"e","ˣ":"x" };
const SUB = { "₀":"0","₁":"1","₂":"2","₃":"3","₄":"4","₅":"5","₆":"6","₇":"7","₈":"8","₉":"9","ᵢ":"i","ⱼ":"j","ₙ":"n","ₖ":"k","ₘ":"m","ₚ":"p","ᵣ":"r","ₐ":"a","ₑ":"e","ₒ":"o","ₓ":"x","ₜ":"t","ᵥ":"v","ᵤ":"u","ₕ":"h","ₗ":"l","ₛ":"s","₊":"+","₋":"-","₌":"=","₍":"(","₎":")" };
const GREEK = { "α":T`\\alpha`,"β":T`\\beta`,"γ":T`\\gamma`,"δ":T`\\delta`,"ε":T`\\varepsilon`,"ζ":T`\\zeta`,"η":T`\\eta`,"θ":T`\\theta`,"ι":T`\\iota`,"κ":T`\\kappa`,"λ":T`\\lambda`,"μ":T`\\mu`,"ν":T`\\nu`,"ξ":T`\\xi`,"π":T`\\pi`,"ρ":T`\\rho`,"σ":T`\\sigma`,"τ":T`\\tau`,"υ":T`\\upsilon`,"φ":T`\\varphi`,"χ":T`\\chi`,"ψ":T`\\psi`,"ω":T`\\omega`,"Γ":T`\\Gamma`,"Δ":T`\\Delta`,"Θ":T`\\Theta`,"Λ":T`\\Lambda`,"Π":T`\\Pi`,"Σ":T`\\Sigma`,"Φ":T`\\Phi`,"Ω":T`\\Omega`,"∇":T`\\nabla` };
const OPS = { "·":T`\\cdot `,"⋅":T`\\cdot `,"×":T`\\times `,"−":"-","≤":T`\\le `,"≥":T`\\ge `,"≠":T`\\ne `,"≈":T`\\approx `,"≡":T`\\equiv `,"⇒":T`\\Rightarrow `,"⟹":T`\\Longrightarrow `,"⟸":T`\\Longleftarrow `,"⟺":T`\\iff `,"↔":T`\\leftrightarrow `,"→":T`\\to `,"↦":T`\\mapsto `,"∈":T`\\in `,"∉":T`\\notin `,"⊆":T`\\subseteq `,"⊂":T`\\subset `,"⊇":T`\\supseteq `,"⊃":T`\\supset `,"∪":T`\\cup `,"∩":T`\\cap `,"∖":T`\\setminus `,"∅":T`\\emptyset `,"∀":T`\\forall `,"∃":T`\\exists `,"∞":T`\\infty `,"∑":T`\\sum `,"∏":T`\\prod `,"∫":T`\\int `,"∂":T`\\partial `,"∝":T`\\propto `,"⊕":T`\\oplus `,"¬":T`\\neg `,"∧":T`\\wedge `,"∨":T`\\vee `,"⊨":T`\\models `,"⊢":T`\\vdash `,"∘":T`\\circ `,"⋃":T`\\bigcup `,"⋂":T`\\bigcap `,"∣":T`\\mid `,"⊻":T`\\veebar `,"√":T`\\surd `,"⋈":T`\\bowtie `,"…":T`\\dots `,"⌊":T`\\lfloor `,"⌋":T`\\rfloor `,"⌈":T`\\lceil `,"⌉":T`\\rceil `,"°":T`^{\\circ}` };
const ACCENTS = "̂̄"; // combining circumflex (hat) and macron (bar)

const SUPSET = Object.keys(SUP).join("");
const SUBSET = Object.keys(SUB).join("");
const GREEKSET = Object.keys(GREEK).join("");
const OPSET = Object.keys(OPS).join("");
const STRONG = SUPSET + SUBSET + GREEKSET + OPSET + ACCENTS; // chars that mark a fragment as "math"
// chars allowed inside an auto-detected (space-free) math run
const MATHCHAR = "A-Za-z0-9" + escapeForClass(STRONG) + escapeForClass("()[]{},/=+\\-'|!:;∗*…⌊⌋⌈⌉^_");

function escapeForClass(s) { return s.replace(/[\]\\^-]/g, "\\$&"); }

// Spaced / word-bearing expressions that the space-free auto-wrapper can't catch.
// find (as it appears in the file) -> LaTeX body (file-source, double backslashes).
const CURATED = [
  ["O(n·log log n)", T`O(n\\log\\log n)`],
  ["O(n log n)", T`O(n\\log n)`],
  ["O(log n)", T`O(\\log n)`],
  ["O(n log log n)", T`O(n\\log\\log n)`],
  // nested-brace sets (the inner {a,b} defeats the simple set matcher)
  ["{wwᴿ | w ∈ {a,b}*}", T`\\{ww^{R} \\mid w \\in \\{a,b\\}^*\\}`],
  ["{ww | w ∈ {a,b}*}", T`\\{ww \\mid w \\in \\{a,b\\}^*\\}`],
  // relational-algebra grouping with a space inside the subscript
  ["γ_{G; F(A)}(R)", T`\\gamma_{G;\\,F(A)}(R)`],
  // master-theorem exponents (superscript "log_b a" with spaces) — longest first
  ["nˡᵒᵍ_ᵦ ᵃ ⁻ ᵉ", T`n^{\\log_b a - \\varepsilon}`],
  ["nˡᵒᵍ_ᵦ ᵃ", T`n^{\\log_b a}`],
  // identifier-heavy relational-algebra expressions in DB solutions
  ["⋈_{ZAMĚSTNANEC.id_odd = ODDĚLENÍ.id_odd}", T`\\bowtie_{\\text{ZAMĚSTNANEC.id\\_odd}=\\text{ODDĚLENÍ.id\\_odd}}`],
  ["π_{id,jméno,název}", T`\\pi_{\\text{id,jméno,název}}`]
];

function escapeRe(s) { return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); }
const spanRe = new RegExp(escapeRe(L) + "([\\s\\S]*?)" + escapeRe(R), "g");

// ----- (0) curated multi-word / spaced expressions (wrapped as one span) -----
for (const [find, body] of CURATED) text = text.split(find).join(L + body + R);

// ----- (1) wrap matrices [[...]] (distinctive, safe) -----
text = text.replace(/\[\[[^\[\]]*(?:\],\[[^\[\]]*)*\]\]/g, m => L + m + R);

// ----- (2) wrap set-builders {...} that carry math -----
text = text.replace(/\{[^{}]*\}/g, (seg, off, full) => {
  if (/[_^]$|\\[A-Za-z]*$/.test(full.slice(0, off))) return seg;        // script group / \command{…} arg, not a set
  const inner = seg.slice(1, -1);
  if (/["\n]/.test(inner)) return seg;                                  // JS object literal, not a math set
  if (inner.includes("\\")) return seg;                                 // already-LaTeX (e.g. \text{…}), leave it
  if (!([...inner].some(ch => STRONG.includes(ch)) || /[|:,]/.test(inner))) return seg;
  return L + T`\\{` + inner + T`\\}` + R;
});

// ----- (3) auto-wrap space-free runs with a strong math char (outside existing spans) -----
const masks = [];
text = text.replace(spanRe, m => { masks.push(m); return "\x00" + (masks.length - 1) + "\x00"; });
const runRe = new RegExp("[" + MATHCHAR + "]+", "g");
text = text.replace(runRe, run => {
  if (run.indexOf("\\") !== -1) return run;                            // contains a backslash already
  if (![...run].some(ch => STRONG.includes(ch))) return run;            // no math signal -> leave prose
  if (/^[A-Za-z]+$/.test(run)) return run;                              // pure word
  return L + run + R;
});
text = text.replace(/\x00(\d+)\x00/g, (_, i) => masks[+i]);

// ----- (3b) merge adjacent spans separated only by spaces / a math connector -----
let prev;
const mergeRe = new RegExp(escapeRe(R) + "( *[-+=,;·×∈−]? *)" + escapeRe(L), "g");
do { prev = text; text = text.replace(mergeRe, "$1"); } while (text !== prev);

// ----- (4) normalize Unicode -> LaTeX inside every \( ... \) span -----
text = text.replace(spanRe, (_, body) => L + normalize(body) + R);

function normalize(s) {
  // combining accents: x̄ -> \bar{x}, δ̂ -> \hat{δ} (greek converted later)
  s = s.replace(/(.)̂/g, (_, c) => T`\\hat{` + c + "}");
  s = s.replace(/(.)̄/g, (_, c) => T`\\bar{` + c + "}");
  // matrices [[a,b],[c,d]] -> pmatrix
  s = s.replace(/\[\[[^\[\]]*(?:\],\[[^\[\]]*)*\]\]/g, mat => {
    const rows = mat.slice(2, -2).split("],[").map(r => r.split(",").map(x => x.trim()).join(" & "));
    return T`\\begin{pmatrix}` + rows.join(T`\\\\`) + T`\\end{pmatrix}`;
  });
  // sqrt: √(...) or √token
  s = s.replace(/√\(([^()]*)\)/g, (_, a) => T`\\sqrt{` + a + "}");
  s = s.replace(/√([0-9A-Za-z]+)/g, (_, a) => T`\\sqrt{` + a + "}");
  // superscript runs
  s = s.replace(new RegExp("[" + escapeForClass(SUPSET) + "]+", "g"),
    r => "^{" + [...r].map(c => SUP[c]).join("") + "}");
  // subscript runs
  s = s.replace(new RegExp("[" + escapeForClass(SUBSET) + "]+", "g"),
    r => "_{" + [...r].map(c => SUB[c]).join("") + "}");
  // greek + operators (char by char)
  s = s.replace(new RegExp("[" + escapeForClass(GREEKSET) + "]", "g"), c => GREEK[c] + " ");
  s = s.replace(new RegExp("[" + escapeForClass(OPSET) + "]", "g"), c => OPS[c]);
  return s;
}

fs.writeFileSync(out, text, "utf8");

// ----- residual report: math-ish Unicode left OUTSIDE \( \) spans -----
const residual = text.replace(spanRe, "");
const counts = {};
for (const ch of residual) if (STRONG.includes(ch)) counts[ch] = (counts[ch] || 0) + 1;
const report = Object.entries(counts).sort((a, b) => b[1] - a[1]);
console.log("wrote " + out);
console.log("residual strong-math chars outside spans: " +
  report.reduce((n, e) => n + e[1], 0));
if (process.argv[2] === "report") {
  console.log(report.map(e => "  " + e[0] + " : " + e[1]).join("\n"));
}
