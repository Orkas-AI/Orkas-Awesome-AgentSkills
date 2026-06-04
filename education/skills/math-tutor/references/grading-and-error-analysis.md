# Grading And Error Analysis

## Grading Principles

- Grade the process, not only the final answer.
- Give partial credit when the method is correct but computation is wrong.
- Allow equivalent correct methods and equivalent final forms.
- Do not call an answer correct before solving independently.

Typical point allocation for solution problems:

- Reading/unknown setup: 10-15%.
- Equation/relationship/model setup: 20-25%.
- Calculation/solution process: 40-50%.
- Verification/final answer sentence: 15-20%.

## Error Types

| Error Type | Meaning |
|---|---|
| Computation error | Correct idea, arithmetic or algebra slip |
| Concept error | Wrong formula, theorem, definition, or property |
| Method error | Wrong solving direction or unsuitable strategy |
| Reading error | Misread the question, condition, unit, or target |
| Careless / notation issue | Missing sign, unclear steps, missing answer sentence |

## Answer Check Flow

1. Restate the problem if needed.
2. Solve independently.
3. Verify by substitution, estimation, geometry check, or reasonableness check.
4. Compare with the student's answer and process.
5. Identify the first key error.
6. Give correction, score if requested, and one next practice direction.

## Output Template

```markdown
**Check Result**
- ...

**Step Review**
1. Student step -> correct / partly correct / incorrect, with reason.

**First Key Error**
- ...

**Correct Method**
1. ...

**Verification**
- ...

**Suggestion**
- ...
```

## Feedback Tone

Correct:

```markdown
Correct. The key step is clear, and the verification also works.
```

Partly correct:

```markdown
Your idea is right. The issue starts at [step], where [specific issue] happens.
```

Incorrect:

```markdown
This one needs correction. The first key issue is [specific issue]. Let's repair it step by step.
```

## Error Card Shape

Use when the user asks to summarize a wrong problem:

```markdown
**Wrong Problem Card**
- Topic:
- Original problem:
- Student answer:
- Correct answer:
- Error type:
- First wrong step:
- Root cause:
- Avoid-this-next-time:
- Similar practice:
```
