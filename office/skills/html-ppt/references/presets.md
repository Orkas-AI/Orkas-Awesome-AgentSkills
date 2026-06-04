# Presets

## v9-architecture

Source file used during prototyping:
- `outputs/gartner-practical-evaluation-slide-v1/slide-01-practical-evaluation-system-v9.html`

Semantic regions:
1. topbar
2. title
3. core summary box
4. left driver panel
5. center layered architecture stack
6. right judgement chain

Important styling choices captured in code:
- wide layout (13.33 x 7.5)
- analyst-style muted palette
- rounded cards and light borders
- native text boxes instead of rasterized text
- arrow bridge between major columns

## ai-runtime-page

Source file used during prototyping:
- `outputs/gartner-ai-runtime-slide-v1/slide-04a-ai-runtime-v1.html`

Semantic regions:
1. header
2. lead box
3. state input chips
4. runtime title
5. main process modules
6. support cards
7. judgement output chips
8. base layer
9. takeaway

Important styling choices captured in code:
- analyst-style wide layout
- 5 equal-width process modules with chevron flow
- chip bands above and below runtime
- native text boxes instead of rasterized text

## Future preset ideas

- three-column analyst page
- single-column infographic page
- timeline / roadmap page

## Template for new presets

When adding a brand-new preset, start from:
- `scripts/preset_template.js`
- `scripts/layout_template.js`
- `references/preset-template.md`