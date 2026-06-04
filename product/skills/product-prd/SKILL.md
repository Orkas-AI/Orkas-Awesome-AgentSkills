---
name: product-prd
description: Use to write or refine a PRD after product demand is reasonably understood and before acceptance criteria, design handoff, engineering breakdown, or implementation planning. Use when the user asks for a PRD, product requirements document, scope definition, engineering-ready requirements, requirements handoff, goals and success metrics, functional requirements, non-functional needs, dependencies, risks, milestones, or open questions.
description_zh: "用于在产品需求已基本明确后编写或优化 PRD / 产品需求文档，并在验收标准、设计交接、研发拆解和实施计划之前形成清晰交接；适合\"帮我写 PRD\"\"整理产品需求文档\"\"把这个功能写成研发可读的需求\"\"定义范围边界、目标指标、功能需求、非功能要求、依赖风险和里程碑\"；触发词：PRD、产品需求、需求文档、范围边界、研发交接、成功指标、非功能需求、开放问题"
description_en: "Use to write or refine a PRD after product demand is reasonably understood and before acceptance criteria, design handoff, engineering breakdown, or implementation planning."
category: rnd
---

# Product PRD

Use this skill to turn product ideas, research, and solution context into an engineering-readable PRD. A good PRD explains what to build and why, defines success, sets scope boundaries, and gives downstream teams enough context without over-defining implementation.

Do not use this skill for early opportunity validation, detailed Given/When/Then acceptance criteria, design briefs, engineering task breakdowns, code plans, or implementation. Hand those to adjacent skills.

## When To Use

- Problem and solution direction are already roughly aligned.
- A feature, epic, or product initiative needs stakeholder review.
- Engineering, design, QA, or leadership need a shared PRD.
- Scope, goals, metrics, risks, and open questions need to be made explicit before build work.

If the user is still asking whether the product direction is worth pursuing, stay at the product analysis stage instead of writing a PRD.

## Instructions

1. **Capture inputs and assumptions**: list source materials, missing context, and assumptions before writing requirements.
2. **Summarize the problem**: explain the user/business problem and why now.
3. **Define goals and success metrics**: connect each metric to the problem being solved.
4. **Outline the solution**: focus on user-facing behavior and key capabilities.
5. **Write testable requirements**: group functional requirements and include non-functional needs when relevant.
6. **Define scope boundaries**: explicitly state in scope, out of scope, and future considerations.
7. **Surface technical considerations**: constraints, integrations, data, privacy, performance, reliability, or migration concerns; do not design the system.
8. **Identify dependencies and risks**: include owners, impact, and mitigation where known.
9. **End with handoff**: point to the next stage and state what is still missing.

## Output Format

Use `references/prd-template.md` as the default structure. Keep the PRD concise enough to read in about 15 minutes unless the user asks for a deeper PRD.

If the user asks for a "complete handoff package", produce only the PRD portion here, then recommend continuing with:

- Acceptance criteria for detailed acceptance scenarios.
- Design handoff for design brief, UX, components, and accessibility.
- Engineering breakdown for delivery phases, dependencies, and technical task planning.
- Implementation planning for file-level code planning.

## Required Boundaries

- Do not invent users, competitors, metrics, technical evidence, dates, owners, or business conclusions.
- Separate evidence, inference, assumption, and open question.
- If facts depend on current pricing, regulation, market state, competitor behavior, or real system data, verify sources before relying on them.
- Do not turn acceptance leads into full Given/When/Then scenarios; leave that to the acceptance criteria stage.
- Do not write implementation steps, file lists, test commands, or code-level plans.

## Quality Checklist

Before finalizing, verify:

- Problem and "why now" are clearly articulated.
- Success metrics are specific, measurable, and tied to goals.
- Scope boundaries are explicit: in scope, out of scope, future.
- Requirements are testable and unambiguous.
- Technical considerations are surfaced without over-defining implementation.
- Dependencies and risks are documented with owners when known.
- Assumptions and open questions are visible.
- Handoff to the next stage is clear.
