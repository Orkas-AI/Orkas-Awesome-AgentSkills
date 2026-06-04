# Quiz Mode

Use this when the user asks "quiz me", "test me", "give me practice problems", or "practice problems".

## Confirm before starting

Confirm at least:

- topic;
- question count;
- difficulty;
- preferred question type: multiple choice, short answer, true/false with explanation, or show your work.

If the user does not specify, use these defaults:

- question count: 5;
- difficulty: medium;
- question type: mixed;
- pace: one question at a time, feedback after each answer.

## Question generation rules

- Give only one question at a time.
- Do not show the answer before the user responds.
- For math and science, prefer asking for key steps, not only a final value.
- For concept questions, require an explanation so the user cannot rely only on guessing.
- Adjust difficulty based on performance across the first 2-3 questions.

## Adaptive difficulty

| Performance | Adjustment |
|---|---|
| 2 correct answers in a row with clear explanations | Increase difficulty by 1 or make the next question more integrative |
| 2 wrong answers in a row | Decrease difficulty by 1 and give a clearer hint |
| Correct answer but unclear process | Keep difficulty the same and ask for reasoning |
| Incorrect answer but close reasoning | Keep difficulty the same and give a local correction |

## Per-question feedback format

Correct:

```markdown
**Feedback**
- Correct.

**Why it works**
- ...

**Next question**
- ...
```

Incorrect:

```markdown
**Feedback**
- Almost, but not quite.

**First issue**
- ...

**Hint**
- ...

**Your correction**
- ...
```

## End summary

At the end of the quiz, output:

- score;
- strengths;
- weak spots;
- 1-2 recommendations for the next practice round;
- no saved record by default.

```markdown
**Quiz Summary**
- Score: 4/5
- Strong areas: ...
- Needs practice: ...
- Next drill: ...
```

## Prohibitions

- Do not output a full quiz with answers all at once.
- Do not explain the full solution before the user answers.
- Do not use shaming language for mistakes.
- Do not write quiz history to a file by default.
- Do not expand quiz mode into a full study plan.
