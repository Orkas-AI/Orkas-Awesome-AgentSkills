# New preset template checklist

Use this file when an incoming HTML slide does not fit `v9-architecture` or `ai-runtime-page`.

## Goal

Add a new preset as a small, explicit page-family implementation.
Do not force structurally different HTML through an old preset.

## Files to copy first

Start from these bundled templates:

- `scripts/preset_template.js`
- `scripts/layout_template.js`

Copy them to new files with the real preset name, for example:

- `scripts/three_column_analyst_preset.js`
- `scripts/layout_three_column_analyst.js`

Then rename symbols accordingly.

## Minimum implementation work

### 1. Define the preset name

In the preset file, replace:

- `replace-me-preset`
- `extractTemplatePage`
- `renderTemplatePage`

with real names that match the slide family.

### 2. Implement DOM extraction

Extract semantic content from the HTML into a compact model.
Prefer selectors that reflect page meaning, not fragile visual styling.

Typical fields:
- header / eyebrow / brand
- title / subtitle / lead
- sections / cards / chips / layers
- arrows / flow labels
- takeaway / footer summary

### 3. Implement layout mapping

In the layout file:
- define a `MAIN` coordinate map
- compute font sizes or box sizes where text length varies
- keep coordinates stable and explicit

### 4. Implement rendering

Render native PowerPoint objects:
- text boxes
- rounded rectangles
- lines
- arrows / chevrons
- chips / labels

Prefer editability over browser-level visual fidelity.

### 5. Register the preset in the entry script

Update `scripts/html_to_pptx.js` so it can:
- detect the new preset, or
- accept `--preset=<your-preset>` and dispatch to the new renderer

### 6. Add QA support

Update `scripts/preflight_qa.js` so the new preset has its own checks.
At minimum, cover:
- title overflow
- subtitle overflow
- card/chip/body overflow
- stacked column height pressure
- insufficient vertical gaps

### 7. Document the new preset

Update `references/presets.md` with:
- preset name
- source prototype HTML
- semantic regions
- important styling choices

## Suggested development order

1. Hard-code the coordinate system.
2. Make extraction stable.
3. Make rendering visually correct enough.
4. Add font-fitting and spacing heuristics.
5. Add QA checks.
6. Test with at least one real HTML source.

## Sanity checklist before calling it done

- preset name is unique and consistent
- extraction returns meaningful structured data
- render output is editable, not screenshot-based
- `html_to_pptx.js` can call the preset
- `preflight_qa.js` can validate the preset
- `references/presets.md` is updated
- example command works on a real HTML file

## Principle

A new preset is cheaper than abusing an old one.
Keep presets small, explicit, and page-family specific.