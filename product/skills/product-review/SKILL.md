---
name: product-review
description: Use after a product direction, feature, MVP, release, or experiment exists and the user needs measurement or evidence-based review: plan analytics instrumentation before launch, create data QA checks, review post-release metrics and feedback, and recommend continue, pivot, stop, or restructure decisions. Use when the user asks for event tracking, analytics specs, data acceptance, launch measurement, release retro, MVP review, experiment results, product metrics, or product decision review.
description_zh: "用于已有产品方向、功能、MVP、版本或实验后的产品评审与数据决策：上线前制定埋点和数据验收方案，上线后复盘指标、反馈和实验结果，并给出继续、转向、停止或重构建议；适合\"帮我写埋点方案\"\"设计事件追踪\"\"做数据验收清单\"\"做发布复盘\"\"复盘 MVP\"\"根据实验结果判断要不要继续\"；触发词：产品评审、埋点、事件追踪、analytics、数据验收、发布复盘、MVP复盘、实验结果、产品指标、继续转向"
description_en: "Use for product measurement and evidence-based review after a feature, MVP, release, or experiment exists."
category: rnd
---

# Product Review

Use this skill when a product idea has moved beyond early discovery and needs measurable review. It covers two connected moments:

- **Before launch**: define analytics instrumentation, event tracking, success metrics, guardrails, privacy handling, and data QA.
- **After launch**: review metrics, feedback, experiments, and market signals to decide whether to continue, pivot, stop, or restructure.

Do not use this skill for early product demand analysis, user research synthesis, competitor analysis, PRD writing, acceptance criteria, UI handoff, or engineering breakdown. Use this skill only when there is a concrete feature, MVP, release, experiment, funnel, or shipped product behavior to measure or review.

## Route The Work

Choose the lightest useful path:

| User intent | Read |
|---|---|
| Feature, experiment, MVP, or release needs event tracking, metrics, data QA, or analytics spec | `references/instrumentation.md` |
| Post-release, MVP, or experiment evidence needs continue, pivot, stop, or restructure decision | `references/release-decision.md` |
| User asks for both launch measurement and later decision checkpoint | Read both references in sequence |
| User provides machine-readable analytics JSON and wants structure validation | `references/analytics-json-schema.md` and optionally `scripts/validate-analytics-spec.js` |

## Required Inputs

Start by listing what the user provided and what is missing:

- Product, feature, MVP, release, or experiment name.
- Product goal and behavior to understand.
- Available metrics, data sources, analytics platform, or event logs.
- User feedback, customer quotes, sales/support notes, experiment results, or market signals.
- Constraints: privacy, consent, retention, platform, engineering ownership, launch date.

Ask only for missing inputs that materially change the review. If the user wants a first draft, proceed with explicit assumptions.

## Instrumentation Instructions

1. **Start from decisions, not data volume**: name the product questions this data must answer.
2. **Define success and guardrail metrics**: include activation, conversion, retention, quality, latency, privacy, or revenue metrics when relevant.
3. **Create event inventory**: specify event name, trigger, description, properties, required flags, examples, and owner notes.
4. **Use precise triggers**: distinguish click, submit attempt, successful completion, failure, timeout, abandonment, and retry.
5. **Define user properties carefully**: include only persistent segmentation attributes that are needed for analysis.
6. **Address privacy**: flag PII, consent requirements, hashing/exclusion, retention, and regional constraints.
7. **Add QA checks**: list how engineering/QA will verify events, properties, edge cases, and dashboards before launch.

Use `references/instrumentation.md` as the default output structure. If the user asks for machine-readable output, use the JSON shape in `references/analytics-json-schema.md`.

## Release Review Instructions

1. **Summarize current state**: what shipped, when, investment to date, and what result was expected.
2. **Present evidence without cherry-picking**: include metrics, qualitative feedback, experiment results, market signals, and data limitations.
3. **Review hypotheses**: mark each as validated, invalidated, partially validated, or untested.
4. **Define options**: include continue/persevere plus at least two concrete alternatives when the decision is strategic.
5. **Compare options**: evaluate market opportunity, user value, business impact, team capability, resource needs, risk, and confidence.
6. **Make or frame the decision**: state the recommended direction, rationale, trade-offs, dissent, and confidence.
7. **Plan next checkpoints**: include immediate actions, owners if known, success criteria, and the next decision date.

Use `references/release-decision.md` as the default output structure.

## Default Output

Use these sections unless the user asks for a specific format:

1. **Inputs And Assumptions**
2. **Review Question**
3. **Evidence Or Measurement Plan**
4. **Risks And Privacy Notes**
5. **Decision Or Launch QA Checklist**
6. **Open Questions**
7. **Handoff To Next Stage**

For instrumentation, section 5 should be a QA checklist. For release retros and MVP decisions, section 5 should be the decision, next actions, and checkpoint schedule.

## Boundaries

- Do not invent metrics, event logs, user quotes, sample sizes, conversion rates, market facts, or competitor claims.
- Separate facts, assumptions, inferences, recommendations, and open questions.
- If a decision depends on live market data, current pricing, regulation, competitor behavior, or production analytics, verify sources or ask the user to provide exported data.
- Do not include raw PII in analytics event examples. Use redacted, hashed, synthetic, or categorical examples.
- Do not implement tracking code unless the user explicitly asks for code changes.
- Do not over-instrument. Every event should answer a decision-relevant question.

## Optional Validation Script

If the user provides an analytics spec as JSON, run:

```bash
node scripts/validate-analytics-spec.js path/to/spec.json
```

The script checks basic structure, duplicate event names, snake_case event names, missing triggers, property fields, and PII handling notes. Treat script output as a checklist, not as proof that the analytics strategy is correct.

## Quality Checklist

Before finalizing, verify:

- The review is tied to a concrete feature, MVP, release, experiment, or product behavior.
- Analytics questions map to product decisions.
- Event names and triggers are unambiguous.
- Properties have type, required flag, description, and example where useful.
- PII and consent handling are explicit.
- Evidence is balanced, not cherry-picked.
- Decision options are concrete and comparable.
- Next checkpoint and success criteria are clear.
