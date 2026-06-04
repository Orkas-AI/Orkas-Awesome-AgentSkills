---
name: product-analysis
description: Use for product requirement analysis before PRD writing: validate product or startup ideas, synthesize user research, compare competitors, score opportunity strength, surface hidden assumptions, and decide the next validation step. Use when the user asks whether an idea is worth doing, wants product demand analysis, needs interview/customer feedback synthesis, competitor analysis, opportunity assessment, or wants to challenge product assumptions.
description_zh: "用于 PRD 之前的产品需求分析：验证产品/创业想法，综合用户研究，分析竞品，评估机会强度，暴露隐藏假设，并给出下一步验证建议；适合\"这个产品方向值不值得做\"\"帮我做产品需求分析\"\"整理这些用户访谈\"\"分析竞品和机会点\"\"挑战一下这个产品假设\"；触发词：产品需求分析、想法验证、用户研究、访谈综合、竞品分析、机会评估、PCV、设计伙伴、隐藏假设"
description_en: "Use for product requirement analysis before PRD writing: validate product or startup ideas, synthesize user research, compare competitors, score opportunity strength, surface hidden assumptions, and decide the next validation step."
category: rnd
---

# Product Analysis

Use this skill before writing a PRD. Its job is to decide whether a product direction is worth further exploration, what evidence exists, what is still assumed, and what the next validation step should be.

Do not use this skill to write a full PRD, design handoff, acceptance criteria, engineering breakdown, or implementation plan. Hand those stages to the next skill after the product need is clearer.

## Route The Work

Choose the lightest useful path:

| User intent | Read |
|---|---|
| Early idea, startup direction, "worth doing?", problem-solution fit | `references/idea-validation.md` |
| Interview notes, customer calls, usability test records, feedback synthesis | `references/interview-synthesis.md` |
| Competitors, market alternatives, feature matrix, positioning, differentiation | `references/competitive-analysis.md` |
| Need a unified score across problem strength, evidence, PCV, and readiness | `references/opportunity-scoring.md` |
| User asks to challenge assumptions, stress-test the direction, or "grill me" | `references/decision-challenge.md` |

When the request combines multiple inputs, start with a short integrated summary, then expand only the relevant sections.

## Required Boundaries

- Separate **evidence**, **inference**, **assumption**, and **open question**.
- Do not invent users, quotes, competitors, market data, metrics, prices, technical evidence, or business conclusions.
- If the user provides no source material, ask for the minimum missing information or mark the output as low-confidence.
- If competitor facts, pricing, regulations, market news, or current public information matter, verify sources before relying on them.
- Protect participant identity. Do not include PII from interviews unless the user explicitly authorizes it and it is necessary.

## Default Output

Use Markdown. Keep the report compact unless the user asks for a full analysis.

```markdown
# Product Analysis: [Direction / Problem Name]

## Executive Summary
- One-line judgment:
- Recommendation: continue validation / pause / pivot / stop
- Confidence: high / medium / low
- Biggest uncertainty:

## Inputs And Evidence
| Type | Available Material | Reliability | Gap |
|---|---|---|---|
| Users / interviews | | | |
| Competitors / alternatives | | | |
| Problem strength | | | |
| Payment / budget | | | |

## Demand And Opportunity Judgment
- Target user / ICP:
- Core pain:
- Current alternatives:
- Why now:
- Opportunity:

## Key Findings
1. [Finding] - Evidence: [source or material location] - Confidence: [high/medium/low]
2. [Finding] - Evidence: [source or material location] - Confidence: [high/medium/low]

## Risks And Hidden Assumptions
- [Assumption/risk] - How to validate:

## Next Validation Steps
| Priority | Action | Goal | Success Criteria |
|---|---|---|---|
| P0 | | | |

## Handoff To Next Stage
- Recommended next stage:
- Missing before entering next stage:
```

## Quality Checklist

Before finalizing, verify:

- The recommendation is grounded in provided evidence or clearly labeled assumptions.
- User research claims cite participant IDs or source material.
- Competitive claims cite public sources or user-provided evidence.
- PCV/opportunity scores explain why each rating was chosen.
- The output does not drift into PRD, design, or engineering planning.
- The next step is concrete enough for the user to act on.
