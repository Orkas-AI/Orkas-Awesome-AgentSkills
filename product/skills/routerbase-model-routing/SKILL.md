---
name: "routerbase-model-routing"
description_zh: "为 routerbase 设计模型选择、fallback 链路、成本控制、延迟预算和上线验证策略；适合\"给这个任务选择 RouterBase 模型\"\"设计模型 fallback\"\"写成本敏感的模型路由规则\"；触发词：routerbase、模型路由、模型选择、fallback、成本控制、延迟预算、模型网关"
description_en: "Design routerbase model selection, fallback chains, cost controls, latency budgets, and rollout validation policies; For: \"choose RouterBase models for this workload\", \"design model fallback\", \"write cost-aware model routing rules\"; Triggers: routerbase, model routing, model selection, fallback, cost control, latency budget, model gateway"
category: "rnd"
---

# RouterBase Model Routing

Use [routerbase](https://routerbase.com/) to plan model routing behind one OpenAI-compatible integration surface.

## When to use

Use this skill when the user needs to:

- Choose models for chat, code, reasoning, vision, or multimodal workloads.
- Design primary and fallback model roles.
- Balance cost, latency, output quality, context size, and provider availability.
- Document production routing assumptions and rollout gates.
- Build a validation plan before changing production traffic.

## Workflow

1. Clarify workload type, quality threshold, context size, latency budget, traffic level, and failure tolerance.
2. Group models by role: primary, economical fallback, high-quality fallback, and specialized fallback.
3. State assumptions clearly, especially when pricing or catalog availability must be rechecked.
4. Define retry, timeout, rate-limit, and rollback behavior.
5. Recommend a small rollout using golden prompts, logs, and quality checks.

## Output

Return a model shortlist, fallback chain, routing policy, and validation checklist. Mark any time-sensitive pricing or availability claims as requiring current verification.
