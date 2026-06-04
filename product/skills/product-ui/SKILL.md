---
name: product-ui
description: Use to design and implement product UI from PRD, product goals, user flows, or existing app context. Use when the user asks to build or improve a UI, frontend screen, landing page, dashboard, component set, design-system-based interface, Figma-style brief plus implementation, brand-inspired UI, responsive layout, accessibility pass, or visual polish.
description_zh: "用于根据 PRD、产品目标、用户流程或现有应用上下文设计并实现产品 UI；适合\"做这个功能的界面\"\"实现一个前端页面\"\"把 PRD 转成 UI\"\"做一个像 Stripe/Linear/Vercel 的界面\"\"优化布局、组件、响应式和 A11y\"；触发词：产品UI、UI实现、前端界面、页面设计、组件设计、设计系统、品牌风格、响应式、A11y、视觉优化"
description_en: "Use to design and implement product UI from PRD, product goals, user flows, or existing app context."
category: rnd
---

# Product UI

Use this skill when UI design and UI implementation should happen together. It turns product context into usable frontend screens, components, layout decisions, design-system choices, accessibility rules, and visual polish.

This skill combines:

- Product design brief and handoff ideas: goal, audience, flows, component mapping, accessibility, JSON/Markdown summaries when helpful.
- UI style references: curated DESIGN.md files from known websites for color, typography, components, layout, and visual tone.
- Frontend implementation guidance: inspect existing patterns, implement in the app's framework, and verify the rendered UI.

Do not use this skill to write a PRD, create product test scenarios, split backend/infra work, write low-level engineering plans, or run broad engineering quality gates. Keep the center of gravity on UI.

## Route The Work

| Situation | Read |
|---|---|
| Need to build or improve UI in an app | `references/ui-implementation.md` |
| User asks for a known brand/style, DESIGN.md, or "make it look like X" | `references/design-style-index.md`, then one matching file under `references/design-styles/` |
| Need a design brief before coding, or the user asks for JSON/Markdown handoff | `references/ui-brief-template.md` |

Read only the relevant style reference. Do not load all design style files at once.

## Default Workflow

1. Identify the product goal, user flow, target users, platform, and existing app framework.
2. Inspect the current UI, design system, components, tokens, routes, and styling conventions.
3. Choose a UI direction: existing product style first; external style reference only when requested or useful.
4. Define the screen structure, states, interactions, responsive behavior, and accessibility requirements.
5. Implement using the app's existing framework and component patterns.
6. Verify rendered UI with screenshots or browser checks when a runnable app is available.
7. Summarize what changed, what visual behavior was verified, and any remaining design questions.

## UI Rules

- Prefer existing app components, tokens, icons, spacing, and interaction patterns.
- If using a brand-style reference, adapt the style; do not copy logos, trademarks, proprietary text, or protected assets.
- Do not invent existing design-system components. Mark missing components as proposed or implement local UI only where appropriate.
- Keep the UI usable, responsive, accessible, and aligned with the product task.
- Use familiar controls: icon buttons for tools, toggles for binary settings, sliders/inputs for numeric values, tabs for views, menus for option sets.
- Avoid decorative-only design that makes the workflow harder to scan or use.
- For production UI changes, verify that text fits, controls do not overlap, and major states are represented.

## Output Standard

When finishing, state:

- UI direction or style reference used.
- Files or screens changed.
- Verification performed, especially browser/screenshot checks when available.
- Remaining design or product questions.

