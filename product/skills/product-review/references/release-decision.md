# Release Decision Template

Use this template when the user needs a post-release, MVP, or experiment retro that ends in a continue, pivot, stop, or restructure recommendation.

```markdown
---
artifact: release-decision
version: "1.0"
created: <YYYY-MM-DD>
status: draft
---

# Release Decision: [Product / Initiative Name]

## Inputs And Assumptions

- Source materials:
- Data window:
- Data quality notes:
- Assumptions:
- Missing inputs:

## Overview

| Attribute | Value |
|---|---|
| Decision Date | [Date] |
| Decision Maker(s) | [Names and roles, or unknown] |
| Product / Initiative | [Name] |
| Time In Market | [Duration since launch] |
| Investment To Date | [Time, budget, people, opportunity cost] |

## Executive Summary

**Recommended Decision:** [Continue / Pivot / Stop / Restructure / Defer]

[2-3 sentence summary of the decision and primary rationale.]

## Current State

### What Shipped

[Description of current product, feature, experiment, or launch.]

### Key Metrics

| Metric | Current | Target / Baseline | Gap | Confidence |
|---|---:|---:|---:|---|
| [Metric] | [Value] | [Value] | [Gap] | [High/Med/Low] |

### Timeline

| Date | Milestone | Outcome |
|---|---|---|
| [Date] | [Event] | [Result] |

### Resources Invested

| Resource | Amount |
|---|---|
| Time | [Duration] |
| Budget | [Amount] |
| Team | [People/time] |
| Opportunity Cost | [Alternative investment] |

## Evidence Summary

### Data That Triggered This Evaluation

1. [Evidence point]
2. [Evidence point]
3. [Evidence point]

### User Feedback

- "[Quote or paraphrase]" - [Source]
- [Behavior pattern]

### Market Or Operational Signals

- [Signal]
- [Constraint]

### Data Limitations

- [Instrumentation gap, sample size issue, bias, missing segment, or time-window limitation]

## Hypothesis Review

| Hypothesis | Status | Evidence | Confidence |
|---|---|---|---|
| [Hypothesis] | Validated / Invalidated / Partial / Untested | [Evidence] | [High/Med/Low] |

## Options Considered

### Option 1: Continue

**Description:** [What staying the course means]

**What Changes:** [Adjustments if any]

**Reasons To Consider:**

- [Reason]

**Risks:**

- [Risk]

**Resource Requirements:** [What it takes]

### Option 2: [Pivot / Restructure Option]

**Description:** [What changes]

**Reasons To Consider:**

- [Reason]

**Risks:**

- [Risk]

**Resource Requirements:** [What it takes]

### Option 3: [Stop / Alternative Option]

**Description:** [What changes]

**Reasons To Consider:**

- [Reason]

**Risks:**

- [Risk]

**Resource Requirements:** [What it takes]

## Analysis

| Criterion | Continue | Option 2 | Option 3 |
|---|---|---|---|
| User Value | [Score + reason] | [Score + reason] | [Score + reason] |
| Business Impact | [Score + reason] | [Score + reason] | [Score + reason] |
| Market Opportunity | [Score + reason] | [Score + reason] | [Score + reason] |
| Team Capability | [Score + reason] | [Score + reason] | [Score + reason] |
| Resource Requirements | [Score + reason] | [Score + reason] | [Score + reason] |
| Risk Level | [Score + reason] | [Score + reason] | [Score + reason] |
| Overall Confidence | [High/Med/Low] | [High/Med/Low] | [High/Med/Low] |

## Decision

### Chosen Direction

[Clear statement of what to do.]

### Rationale

[Why this option wins, including trade-offs.]

### Trade-offs Accepted

| Trade-off | Impact | Why Acceptable |
|---|---|---|
| [Trade-off] | [Impact] | [Reason] |

### Dissenting Views

[Who disagreed and why, or "none provided."]

## Implementation Plan

### Immediate Actions

| Action | Owner | Due Date |
|---|---|---|
| [Action] | [Owner] | [Date] |

### Success Criteria

| Metric | 30-Day Target | 90-Day Target |
|---|---:|---:|
| [Metric] | [Value] | [Value] |

### Checkpoint Schedule

| Date | Checkpoint | Decision Point |
|---|---|---|
| [Date] | [Review] | [What to evaluate] |

## Communication Plan

| Audience | Message | Channel | When |
|---|---|---|---|
| [Audience] | [Message] | [Channel] | [When] |

## Open Questions

- [Question]

## Handoff To Next Stage

- Product:
- Engineering:
- Analytics:
- Go-to-market / Support:
```

## Notes

- If evidence is weak, recommend a reversible decision or a short validation checkpoint instead of false certainty.
- Capture dissent when there are meaningful disagreements; it helps future retrospectives.
