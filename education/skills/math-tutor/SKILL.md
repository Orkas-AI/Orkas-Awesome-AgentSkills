---
name: math-tutor
description_zh: "按 K12 年级和教材边界辅导数学讲解、出题、批改、错因分析、试卷草案和学情报告，要求先验算再反馈并避免超纲；适合\"用不超纲的方式讲这个概念\"\"帮我批改这道初中数学题\"\"按这个知识点出几道练习题\"；触发词：数学辅导、K12数学、教材同步、数学出题、数学批改、错因分析、试卷草案、学情报告"
description_en: "Tutor K12 math within grade and curriculum boundaries, including explanations, question generation, grading, error analysis, exam drafts, and learning reports, with verification before feedback and no beyond-grade concepts; For: \"explain this concept without going beyond the syllabus\", \"grade this middle-school math answer\", \"generate practice problems for this concept\"; Triggers: math tutoring, K12 math, curriculum aligned, math question generation, math grading, error analysis, exam draft, learning report"
category: education
---

# Math Tutor

## When To Use

- The user asks for K12 math explanation, concept clarification, worked examples, or step-by-step tutoring within a grade/curriculum boundary.
- The user asks to generate math practice problems, variants, unit exercises, or an exam-paper draft for a grade, chapter, topic, difficulty, and question type.
- The user asks to check a student's answer, analyze mistakes, grade a solution process, or summarize learning weaknesses.
- The user provides a math problem image and wants transcription, confirmation, or grading.

Do not use for open-ended mathematical modeling, Python/local expression calculation, Wolfram-style symbolic computation, university-level research math, or generic homework tutoring outside math. Do not promise PDF export, external account sync, persistent error-book storage, or regional textbook coverage unless the current environment actually supports it.

## How To Call

1. Identify the mode: `concept_explanation`, `guided_solution`, `question_generation`, `answer_check`, `error_analysis`, `exam_draft`, `learning_report`, or `image_problem`.
2. Determine grade/stage and topic. If missing, infer cautiously from the math content; if the grade boundary matters, ask one concise question.
3. Check curriculum boundaries with `references/curriculum-boundaries.md`. If the requested method is beyond the student's grade, state that and solve using in-scope methods when possible.
4. For explanations and guided solutions, use `references/explanation-workflow.md`.
5. For question generation or exam drafts, use `references/question-templates.md` and verify every generated answer before showing it.
6. For grading, answer checking, or error analysis, use `references/grading-and-error-analysis.md`. Always solve independently first, then compare with the student's work.
7. For images, use `references/attachment-policy.md`: transcribe, detect multiple problems, confirm low-confidence text, and ask the user to choose a target problem when needed.
8. For learning reports, use `references/report-templates.md`. Use only available data; if data is insufficient, say so.
9. Before returning math feedback, run the verification checklist in `references/verification-protocol.md`.

## Return Format

Concept explanation:

```markdown
**Topic**
- Grade/stage:
- Concept:

**Core idea**
- ...

**Key rule or formula**
- ...

**Example**
...

**Common mistake**
- ...

**Your turn**
- ...
```

Answer check / grading:

```markdown
**Check Result**
- Correct / partly correct / incorrect:
- Score, if grading:

**Step Review**
1. ...

**First Key Error**
- ...

**Correct Method**
- ...

**Next Practice**
- ...
```

Question generation:

```markdown
**Practice Set**
- Grade:
- Topic:
- Difficulty:
- Count:

**Questions**
1. ...

**Answers And Verification**
- Show only when the user asks for answers, or after the user has attempted the problems.
```

## External Dependencies

- No fixed external dependencies.
- Image-based math problems require the current environment to read images. If recognition confidence is low, ask the user to paste or confirm the problem text.
- Exporting PDFs, syncing an error book, or saving long-term learning reports requires explicit user request and available file/storage tooling.

## Limits And Known Issues

- Do not overclaim exact textbook alignment for a region/version unless the user provides the textbook or the current curriculum reference covers it.
- Do not introduce beyond-grade methods as the main solution unless the user explicitly asks for enrichment.
- Do not generate copyrighted exam papers from proprietary sources. Generate original practice based on topics and templates.
- Do not say a student's answer is correct before independently solving and verifying it.
- Do not collect unnecessary personal information from minors.

## Full Examples

User:

```text
帮我批改这道初中数学题：2x + 3 = 11，我算 x = 3。
```

Reply:

```markdown
**Check Result**
- Incorrect, but the equation-solving direction is right.

**Step Review**
1. Start from `2x + 3 = 11`.
2. Move `3` to the right side: `2x = 8`.
3. Divide by `2`: `x = 4`.

**First Key Error**
- The last division step should be `8 ÷ 2 = 4`, not `3`.

**Verification**
- Substitute `x = 4`: `2×4 + 3 = 8 + 3 = 11`, so it checks.

**Next Practice**
- Try one similar equation: `3x - 5 = 10`.
```

User:

```text
出 5 道八年级一次函数中等难度题，先别给答案。
```

Reply:

```markdown
**Practice Set**
- Grade: Grade 8
- Topic: Linear functions
- Difficulty: medium
- Count: 5
- Answers: hidden until you finish or ask for them

**Questions**
1. ...
```
