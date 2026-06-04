# Preset decision rules

Use this file to decide whether an incoming HTML slide should:

1. reuse an existing preset,
2. extend an existing preset as a close variant, or
3. become a brand-new preset.

This decision matters more than small rendering details. A wrong preset choice creates brittle extraction, ugly layout hacks, and noisy QA.

## Core rule

Reuse an existing preset only when the incoming HTML belongs to the **same page family**.

Page family means the same underlying information architecture, not just a vaguely similar visual style.

## The 3 decision outcomes

### Outcome A — Reuse existing preset directly

Choose this when all of the following are true:

- The same major semantic regions exist in the same order.
- The same major columns/bands/layers exist.
- The same content roles exist.
- The same rendering strategy still makes sense.
- Differences are mostly text length, minor labels, colors, or small count variations.

Examples:
- same AI runtime page, but module text changed
- same architecture page, but some bullet items changed
- same chip/badge structure, but wording is different

### Outcome B — Extend an existing preset as a close variant

Choose this when the page is still the same family, but one or two local structures differ enough that extraction or layout logic needs a bounded extension.

Typical cases:
- one extra support card
- 4 modules instead of 5, but the rest of the runtime structure is the same
- same three-column architecture page, but one panel has an extra subtitle block
- same page family, but chip count or card grouping differs in a predictable way

Do this only when the extension remains understandable and does not distort the preset's identity.

### Outcome C — Create a brand-new preset

Choose this when the page family is genuinely different.

Typical signals:
- region order changes in a meaningful way
- left/center/right architecture becomes top-down process flow
- card grid becomes timeline / roadmap / matrix
- the key story is different enough that old DOM selectors become fake matches
- the old layout would require many conditional branches to survive
- QA rules would need a substantially different checklist

## Practical decision checklist

Ask these questions in order.

### 1. Does the page tell the same kind of story?

- architecture stack / judgement chain?
- runtime process / support / outputs?
- comparison matrix?
- roadmap / timeline?
- infographic narrative?

If the story type changed, prefer a new preset.

### 2. Are the major semantic regions the same?

Look for stable blocks such as:
- header / eyebrow / brand
- title / subtitle / lead
- left panel / center stack / right panel
- input band / runtime modules / support cards / output band
- takeaway / footer summary

If several major regions are missing, merged, reordered, or replaced, prefer a new preset.

### 3. Is the object grammar the same?

Object grammar means the recurring building blocks:
- chips
- layered bands
- stacked cards
- chevron flow
- judgement items
- framework/product cards
- timeline nodes

If the building blocks changed, a new preset is usually cleaner.

### 4. Can the existing layout absorb the differences without ugly branching?

Bad signs:
- many `if presetVariantX` branches
- hard-coded exceptions for one customer/page
- conditional coordinates everywhere
- selectors that only work for one specific HTML revision

If adaptation feels like patching around structural mismatch, create a new preset.

### 5. Would QA stay mostly the same?

If the same failure modes still matter, reuse/extend may be okay.

If QA would need a new logic family, create a new preset.

## Red flags that mean “new preset”

Create a new preset when you see any of these patterns:

- “It kind of looks similar, but the content logic is different.”
- “We can force it if we special-case three more blocks.”
- “Selectors would target visual classes rather than semantic regions.”
- “The old preset would keep working only through page-specific hacks.”
- “The layout would become harder to explain than a fresh preset.”

## Green flags that mean “reuse existing preset”

Reuse when you see these patterns:

- “The same slide skeleton is still there.”
- “Only copy length, labels, or card counts changed slightly.”
- “The same semantic model still describes the page honestly.”
- “The same QA checks still cover the main risks.”

## Heuristic by change scope

### Safe to reuse

- wording changes
- title/subtitle length changes
- bullet count changes within normal range
- color/theme changes
- small icon/decor changes

### Usually okay to extend

- one local panel grows modestly
- one repeated group count changes predictably
- one extra field appears in a known block
- one band has minor optional content

### Usually requires new preset

- new column structure
- new top-level reading order
- new narrative type
- new repeated-object family
- major panel role changes
- layout depends on fundamentally different spacing logic

## Decision output format

When making the call, state it explicitly in one sentence:

- `Decision: reuse existing preset <name>.`
- `Decision: extend existing preset <name> as a bounded variant.`
- `Decision: create a new preset for this slide family.`

Then justify with 2-4 bullets referencing:
- story type
- semantic regions
- object grammar
- QA impact

## Examples

### Example 1 — Reuse

Incoming page:
- same runtime title
- same input band
- same 5 modules
- same support cards
- same output chips
- only text and labels changed

Decision:
- reuse `ai-runtime-page`

### Example 2 — Extend

Incoming page:
- same runtime family
- support section grows from 3 cards to 4
- output chips count changes slightly
- rest of structure remains the same

Decision:
- extend `ai-runtime-page` as a bounded variant

### Example 3 — New preset

Incoming page:
- still analyst-style visually
- but content is now a timeline with milestones and dependency arrows
- no runtime bands or architecture stack

Decision:
- create a new preset

## Final principle

Prefer a small honest preset over a clever dishonest reuse.

If you have to argue hard that a page is “basically the same,” it probably is not.