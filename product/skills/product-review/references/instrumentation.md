# Instrumentation Template

Use this template when the user needs an analytics instrumentation spec for a feature, experiment, MVP, or release.

```markdown
---
artifact: instrumentation-spec
version: "1.0"
created: <YYYY-MM-DD>
status: draft
---

# Instrumentation Spec: [Feature Name]

## Inputs And Assumptions

- Source materials:
- Analytics platform:
- Product surface:
- Assumptions:
- Missing inputs:

## Overview

**Feature:** [Feature being instrumented]

**Analytics Goals:**

1. [Question this data must answer]
2. [Question this data must answer]
3. [Question this data must answer]

**Success Metrics:**

| Metric | Definition | Target / Baseline | Decision It Supports |
|---|---|---|---|
| [Metric] | [Definition] | [Value or unknown] | [Decision] |

**Guardrail Metrics:**

| Metric | Why It Matters | Threshold |
|---|---|---|
| [Metric] | [Reason] | [Threshold] |

**Naming Convention:** [e.g., snake_case, object_action]

## Event Inventory

### [event_name]

| Field | Value |
|---|---|
| Event Name | `[event_name]` |
| Trigger | [Exact condition when event fires] |
| Description | [What this event represents] |
| Owner | [Product / Engineering / Analytics owner if known] |

**Properties:**

| Property | Type | Required | Description | Example | PII |
|---|---|---:|---|---|---|
| [property_name] | string | Yes | [Description] | [Example] | No |
| [property_name] | number | No | [Description] | [Example] | No |

**Implementation Notes:**

- [SDK, timing, dedupe, client/server source, retry, or dashboard note]

## User Properties

| Property | Type | Description | Set When | Example | PII |
|---|---|---|---|---|---|
| [user_property] | string | [Description] | [When set/updated] | [Example] | No |

## PII And Privacy

### PII Properties

| Property | PII Type | Handling |
|---|---|---|
| [property] | [email/phone/name/etc.] | [Hash / exclude / encrypt / tokenize] |

### Consent Requirements

- [Consent requirement]
- [Opt-out behavior]

### Data Retention

- [Retention policy]

## Testing Checklist

### Event Validation

- [ ] **[event_name]:** Perform [action], verify event fires with [key properties].

### Property Validation

- [ ] Verify [property] has type [string/number/boolean/array/object].
- [ ] Verify [property] is present when [condition].

### Edge Cases

- [ ] Verify events do not duplicate on refresh/retry/back navigation.
- [ ] Verify failure, timeout, cancellation, and abandonment paths.
- [ ] Verify events respect analytics consent and opt-out state.

### Debug Tools

- [How to inspect event stream in debug mode]
- [How to validate in analytics dashboard]

## Open Questions

- [Question]

## Handoff To Next Stage

- Engineering:
- QA:
- Analytics:
- Decision checkpoint:
```

## Notes

- Track attempts, successes, failures, and abandonment separately when those states support different decisions.
- Prefer categorical or derived properties over raw user-entered text.
- Avoid event names tied to UI copy that may change.
