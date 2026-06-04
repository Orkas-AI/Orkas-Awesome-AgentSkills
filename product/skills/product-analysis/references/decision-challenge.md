# Decision Challenge

Use this reference when the user asks to challenge a product idea, stress-test assumptions, or "grill me" before moving into PRD or build work.

This is adapted from the original `grill-me` method, but it is not a separate conversational mode. Use it as a focused product-demand review.

## Method

1. List 3-6 top-level decision branches.
2. Pick the most foundational branch first.
3. For each branch, provide a recommended answer or likely risk before asking.
4. Ask one question at a time when user input is required.
5. If the answer can be derived from supplied material, answer it yourself and cite the material.
6. Stop when the major assumptions have either evidence, a validation action, or an explicit owner.

## Product Analysis Branches

Use the relevant branches:

- Target user and buyer: who feels the pain, who pays, who blocks adoption?
- Problem severity: what breaks if this is not solved?
- Existing alternatives: what is the user doing now, and why is it insufficient?
- Timing: why now, and what changed?
- Differentiation: why this solution instead of a competitor or status quo?
- Evidence: what is observed, quoted, measured, or paid for?
- Distribution and adoption: how will the first users find and trust it?
- Scope: what should stay out until the problem is proven?

## Output

```markdown
## Assumption Challenge

### Decision Branches
1. [Branch]
2. [Branch]

### Resolved
- [Decision] - Evidence:

### Still Open
- [Question] - Recommended answer:
- [Question] - Validation action:

### Next Question
[Ask the single most important remaining question.]
```

## Stop Condition

Finish with a short summary once there are no major "it depends" answers left without a validation action.

