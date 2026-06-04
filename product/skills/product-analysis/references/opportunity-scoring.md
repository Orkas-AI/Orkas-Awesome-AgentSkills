# Opportunity Scoring

Use this reference when the output needs a compact judgment across problem strength, evidence quality, PCV, competition, and readiness.

## Scorecard

Score each dimension from 0 to 3.

| Dimension | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| Problem frequency | Rare | Occasional | Regular | Frequent / workflow-critical |
| Problem severity | Nice-to-have | Annoying | Meaningful cost | Urgent business/user pain |
| User awareness | Unaware | Aware only when prompted | Aware | Actively seeking solutions |
| Budget / willingness | No payer | Unclear payer | Possible budget | Existing budget or strong willingness |
| Current alternatives pain | Alternatives work well | Mild dissatisfaction | Clear gaps | Serious pain with current options |
| Proposed value improvement | Weak | Some improvement | Strong improvement | Step-change improvement |
| Evidence quality | None | Anecdotal | Multiple signals | Direct user/customer evidence |
| Design partner readiness | None | Leads identified | 1-2 committed | 3-5 committed to test/feedback/pay |

## PCV Lens

Use PCV to compare current alternatives with the proposed solution.

| Dimension | Current Alternative Pain | Proposed Improvement | Notes |
|---|---|---|---|
| Price | None / Some / Serious | None / Some / Serious | |
| Quality | None / Some / Serious | None / Some / Serious | |
| Performance | None / Some / Serious | None / Some / Serious | |
| Convenience | None / Some / Serious | None / Some / Serious | |

## Interpretation

| Total | Meaning | Recommendation |
|---|---|---|
| 0-7 | Weak evidence or weak need | Do not build yet; clarify problem |
| 8-13 | Possible opportunity | Run focused validation |
| 14-19 | Promising opportunity | Continue with design partners |
| 20-24 | Strong opportunity | Prepare PRD once gaps are closed |

## Output

```markdown
## Opportunity Score

| Dimension | Score | Evidence | Confidence |
|---|---:|---|---|
| Problem frequency | 0-3 | | |
| Problem severity | 0-3 | | |
| User awareness | 0-3 | | |
| Budget / willingness | 0-3 | | |
| Current alternatives pain | 0-3 | | |
| Proposed value improvement | 0-3 | | |
| Evidence quality | 0-3 | | |
| Design partner readiness | 0-3 | | |

**Total:** [X]/24
**Recommendation:** [Do not build yet / Validate / Continue with design partners / Prepare PRD]
```

## Scoring Discipline

- Scores are decision aids, not truth.
- Penalize missing evidence. Do not fill gaps with optimism.
- Explain any score of 3 with concrete evidence.
- If evidence is weak but the idea is plausible, recommend validation rather than building.

