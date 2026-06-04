---
name: make-ppt
description_zh: 按阶段制作高质量 PPT / slide：需求澄清、资料整理、研究 brief、大纲、策划稿、中间审阅、完整 deck 计划和最终复核。适合“帮我做一个管理层汇报 PPT”“先出大纲和策划稿再做完整 PPT”“把主题变成可审阅演示方案”；触发词：做PPT、PPT工作流、演示文稿、slide、策划稿、大纲、review gate、汇报
description_en: Guide staged presentation creation: brief clarification, research brief, outline, planning draft, review gates, full deck plan, and final QA. Use for high-quality PPT workflows where the user needs structure and reviewable intermediate artifacts before final slide production.
category: office
---

# Make PPT

## When to Use

Use when the user wants to create or substantially improve a presentation from a topic, brief, source material, existing outline, or partial draft.

Use especially for management reports, customer decks, sales decks, board-style updates, technical explainers, and research-backed presentations where one-shot slide generation would be risky.

Do not use for small edits to an existing `.pptx`; use a PPT inspection/editing tool for that.

Do not assume a specific renderer, browser, research tool, or export path. This skill controls the workflow, not the implementation.

## Supported Inputs

- Topic only.
- Topic plus brief.
- Source-driven request with reports, URLs, PDFs, notes, transcripts, or existing materials.
- Existing outline, draft deck, or page ideas.

If the brief is too thin, ask only for the minimum missing fields: audience, purpose, page-count range, tone/style, must-have content, must-avoid claims, and whether the user wants review gates.

## Output Layers

Stop at the layer the user needs:

1. `research-brief`: facts, evidence, caveats, source notes, open questions.
2. `outline`: section logic, page titles, page goals.
3. `planning-draft`: page-by-page planning cards with message, evidence, hierarchy, and layout direction.
4. `sample-artifact`: one or more reviewable sample pages or intermediate artifacts, if the environment can produce them.
5. `full-deck-plan`: approved structure and page guidance ready for production.
6. `review-notes`: logic, evidence, density, consistency, and delivery risks.

## Default Workflow

1. Clarify the brief just enough to prevent avoidable misfires.
2. Decide whether research or source organization is needed before outlining.
3. Build a compact research brief when facts matter.
4. Produce an outline before design.
5. Produce a planning draft for non-trivial decks.
6. Pause for review on complex, external-facing, management, customer, or high-stakes decks.
7. Expand only after the direction is accepted.
8. Final-review logic, factual confidence, evidence coverage, information density, emphasis, hierarchy, and consistency.
9. State any capability limitation plainly, such as missing external research, missing source files, or inability to render/export slides.

## References

- `references/method.md`: staged PPT method.
- `references/agent-integration.md`: capability-aware coordination rules.
- `references/prompts.md`: reusable prompts for research, outlining, planning, review, and optional format-specific generation.

## Return Format

For early stages, return the requested layer with explicit open questions and recommended next step.

For review gates, return a concise artifact the user can approve, reject, or redirect.

For final delivery, return produced file/artifact paths when available, plus a QA summary and remaining manual checks.

## Limits and Known Issues

- This skill does not itself create editable PPTX files; it guides the staged work. Use a PPT file tool or renderer when an actual deck file is required.
- Do not invent current facts, market numbers, citations, or source-backed claims.
- If external research is unavailable, mark the result as source-limited.
