---
name: html-ppt
description_zh: 将受支持结构的 HTML 幻灯片按 preset 转换为可编辑 PPTX，保留原生文本框、形状、芯片、箭头和面板。适合“把这个 HTML slide 转成可编辑 PPT”“不要截图，要 PowerPoint 对象”“为新 HTML 页面族新增 preset 后转换”；触发词：HTML转PPT、HTML转PPTX、可编辑PPT、preset、架构页、PPTX导出
description_en: Convert supported structured HTML slides into editable PPTX files through preset-driven semantic mapping. Use when the user needs native PowerPoint text boxes, shapes, chips, arrows, and panels instead of screenshot export. Not a general arbitrary HTML/CSS renderer.
category: office
---

# HTML PPT

## When to Use

Use when the user has a structured single-slide HTML file or small HTML slide family and wants an editable `.pptx` made of native PowerPoint objects.

Use only when the HTML matches an existing preset or when the user accepts adding a new preset first.

Do not promise arbitrary HTML/CSS fidelity. Do not use this as a screenshot exporter.

## Current Presets

- `v9-architecture`: header, title, summary box, driver panel, architecture stack, judgement chain.
- `ai-runtime-page`: header, title, lead box, input/output chips, runtime modules, support layers, base layer.

## First-Run Setup

From the skill directory:

```bash
npm ci
npm run check-env
```

If `npm ci` fails because the lockfile is stale or unavailable, use `npm install`, then rerun `npm run check-env`.

Read `references/setup.md` when using the skill on a new machine or dependency state is unclear.

## Workflow

1. Inspect the HTML and identify the slide family.
2. Read `references/preset-decision-rules.md` if preset fit is uncertain.
3. Reuse an existing preset only when the page family is genuinely close.
4. If no preset fits, add a new preset instead of forcing a bad conversion:
   - DOM extraction rules
   - layout/render mapping rules
   - QA/preflight rules
5. Convert with the bundled Node script.
6. Run preflight QA on the generated model.
7. Open or preview the PPTX when visual fidelity matters. Check spacing, overflow, arrow direction, text wrapping, and object editability.

## Commands

```bash
npm run check-env
node scripts/html_to_pptx.js <input.html> <output.pptx> [--preset=v9-architecture|ai-runtime-page] [--dump-model <file.json>]
node scripts/preflight_qa.js <model.json> [--preset=v9-architecture|ai-runtime-page] [--report <report.json>]
```

## Return Format

For a successful conversion, return:

- generated `.pptx` path
- preset used
- whether dependencies and QA passed
- visual review status
- known fidelity limitations

For unsupported HTML, return:

- why no preset fits
- whether a new preset is recommended
- the minimum extraction/layout/QA work needed before conversion

## External Dependencies

- Node.js 18+ recommended.
- npm.
- Bundled dependencies from `package.json` / `package-lock.json`.
- A PowerPoint-compatible viewer is recommended for final visual QA.

## References

- `references/setup.md`: dependency setup and portability.
- `references/preset-decision-rules.md`: decide reuse vs new preset.
- `references/presets.md`: current preset details.
- `references/preset-template.md`: how to add a new preset.
- `references/qa-heuristics.md`: preflight and visual QA rules.
- `references/usage-principles.md`: usage principles.
- `references/roadmap.md`: future high-fidelity measurement ideas.

## Limits and Known Issues

- This skill parses semantic blocks and maps them to PPTX objects. It does not render arbitrary browser layout.
- CSS effects, fonts, gradients, SVGs, responsive behavior, and canvas content may not translate.
- Fidelity depends on preset quality and QA iteration.
- Keep generated PPTX editable; do not silently fall back to one flattened screenshot.
