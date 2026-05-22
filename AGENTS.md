# Repository Guidelines

## Project Structure & Module Organization

This repository is a static browser app for drawing random bachelor state-exam topics.

- `index.html` contains the UI, styling, menu logic, filtering, random round handling, progress cookies, and rendering code.
- `Informatika.js`, `PVA.js`, and `CS.js` contain the current datasets. Each registers itself with `window.STUDY_DATASETS`.
- `README.md` gives user-facing usage notes.
- Future subject files should follow the same pattern as `Informatika.js`: one file per subject area, each pushing a dataset object with `id`, `name`, `categoryLabels`, `topics`, `detail`, and `solutions`.

There is currently no build pipeline, package manager config, test directory, or external asset folder.

## Build, Test, and Development Commands

No installation is required. Open `index.html` directly in a browser.

Useful local checks:

```bash
node -e 'new Function(require("fs").readFileSync("index.html","utf8").match(/<script(?: src="[^"]+")?>([\s\S]*?)<\/script>/)[1])'
```

Checks that the inline JavaScript parses.

```bash
node -e 'const fs=require("fs"),vm=require("vm"); const c={window:{}}; vm.runInNewContext(fs.readFileSync("Informatika.js","utf8"),c); console.log(c.window.STUDY_DATASETS[0].topics.length)'
```

Checks that the dataset file loads and reports topic count.

## Coding Style & Naming Conventions

Use plain HTML, CSS, and JavaScript. Keep the app dependency-free and usable from `file://`.

- Use two-space indentation in HTML/CSS/JS blocks.
- Keep dataset IDs lowercase ASCII, e.g. `informatika`.
- Name dataset files by subject, e.g. `Informatika.js`, `Matematika.js`.
- Preserve the dataset shape used in `Informatika.js`; avoid inventing parallel schemas.
- Keep UI text in Czech unless the whole app is deliberately localized.

## Testing Guidelines

There is no formal test framework. Before committing, verify:

- `index.html` opens in a browser without console errors.
- The hamburger dataset menu opens and closes.
- Category filters draw each topic once per shuffled round.
- Every topic subitem has `detail` prompts and `solutions` entries.

For new dataset files, run a small Node/VM load check similar to the command above.

## Commit & Pull Request Guidelines

Recent commits use short, imperative summaries such as `add solutions` and `Add better exercises and examples`. Follow that style: concise, present-tense, and focused.

Pull requests should include:

- A short description of changed UI or data.
- Any new dataset files added.
- Manual validation performed.
- Screenshots or screen recordings for visible UI changes, especially menu/filter behavior.

## Agent-Specific Instructions

Do not add a bundler or framework unless explicitly requested. Keep data separate from rendering logic. When adding future subject files, update `index.html` with an additional `<script src="..."></script>` before the main inline script.
