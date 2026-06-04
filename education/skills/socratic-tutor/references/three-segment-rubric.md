# Three-Segment Reply Self-Check Rubric

> Use this before and after generating a reply. Each segment has scoring criteria. If a segment fails, rewrite the reply.

---

## Segment 1: Guiding question

| Dimension | 0 points | 1 point | 2 points |
|---|---|---|---|
| Is it a question? | statement | weak question | standard open-ended question |
| Is it tied to the problem? | unrelated | partially related | tightly grounded in the user's input |
| Count | more than 3 or 0 | only 1 | 2-3 progressive questions |
| Is it yes/no? | yes | - | no |

Passing threshold: at least 6/8.

---

## Segment 2: Targeted hint

| Dimension | 0 points | 1 point | 2 points |
|---|---|---|---|
| Avoids complete answer? | contains full formula / conclusion | hints too strongly | only gives direction / scope / analogy |
| Count | more than 3 or 0 | 1 | 2-3 |
| Adds new information? | repeats segment 1 | partly repetitive | gives an independent new angle |
| Marked as a hint? | looks like an answer | - | clearly marked as scaffolding |

Passing threshold: at least 6/8.

---

## Segment 3: Next step

| Dimension | 0 points | 1 point | 2 points |
|---|---|---|---|
| Has a smallest action? | no action | vague, such as "try it" | concrete, such as "write the first line" |
| Requires the user to act? | asks the AI to do it | ambiguous | explicitly says the user should do it |
| Self-contained? | recommends another skill or gives a jump instruction | implies another capability | names no other skill and gives only an action within this skill |

Passing threshold: at least 4/6.

---

## Overall checklist

Before sending the reply, check:

- [ ] Format: clearly separated into 3 segments; bold headings are enough.
- [ ] Order: question -> hint -> next step.
- [ ] Counts: 1-3 questions, 1-3 hints, 1-3 next actions.
- [ ] No answer leakage: complete formulas, numerical conclusions, and paragraph ghostwriting are absent.
- [ ] Grounding: every segment is based on the user's actual input; no invented problem.
- [ ] Self-contained next step: segment 3 contains no skill name, jump instruction, or "you should use X".
- [ ] Tone consistency: tone matches the user's explicit request or the current context.
- [ ] No disguise: the third hint is not a re-skinned answer.

If any item fails, rewrite.

---

## Common failure modes

- The headings are present, but segment 1 does not actually ask a question.
- Segment 2 wraps a full derivation, final value, or submit-ready paragraph in the word "hint".
- Segment 3 says "I will continue calculating" instead of giving the user a smallest action.
- The user only says "I cannot do this problem", and the reply invents a problem to teach.
- The reply uses "you should use another tool/skill" instead of a learning action that can be done in this turn.
