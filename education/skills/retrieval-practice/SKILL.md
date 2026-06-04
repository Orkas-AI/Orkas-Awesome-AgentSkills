---
name: retrieval-practice
description_zh: "为课程主题生成主动回忆题、复习启动题、低风险课堂小测和答案讲评要点，区分自由回忆、线索回忆和识别题；适合\"给这个知识点设计 retrieval practice\"\"帮我出一组课堂复习启动题\"\"做一个低风险小测但不要变成正式考试\"；触发词：retrieval practice、主动回忆、提取练习、复习题、课堂小测、低风险测验、测试效应"
description_en: "Generate active-recall questions, revision starters, low-stakes classroom quizzes, and answer notes for a course topic, distinguishing free recall, cued recall, and recognition items; For: 'design retrieval practice for this topic', 'make revision starters for class', 'create a low-stakes quiz that is not a formal test'; Triggers: retrieval practice, active recall, recall questions, revision starters, classroom quiz, low-stakes testing, testing effect"
category: education
---

# retrieval-practice

Guide-type skill for generating retrieval practice materials that make learners reconstruct knowledge from memory. Use it to create teacher-facing or facilitator-facing active-recall questions, low-stakes quizzes, answer notes, misconception checks, and short implementation scripts.

This skill is not a homework tutor, exam writer, study planner, or grading engine. It creates practice materials; it does not run a live quiz one question at a time, manage learner progress, or produce high-stakes assessments.

## When to use

Use this skill when the user asks for:

- Retrieval practice questions for a topic, unit, lesson, or concept.
- Classroom starters, exit tickets, recap questions, or low-stakes quizzes.
- Active-recall prompts that avoid passive review and surface misconceptions.
- A mix of free recall, cued recall, recognition, error-correction, diagram, scenario, or explanation prompts.
- Answer notes and teacher implementation guidance.

Do not use this skill for:

- One-on-one homework help or answer checking. Use a homework/quiz tutoring workflow instead.
- Long-term study scheduling. Use a study-planning workflow instead.
- Formal exam papers, graded assessments, or official certification tests.
- Direct-submit assignments or academic dishonesty.
- Generic worksheet generation that only asks recognition or copy-from-notes questions.

## How to call

1. Collect the required inputs:
   - Topic or concept.
   - Learner level and prior knowledge.
   - Question count.
   - Context of use: starter, exit ticket, homework review, quiz, mixed-topic review, or spaced review.

2. Ask for missing inputs only when they materially affect the question design.
   If the user gives only a topic, assume a short mixed-ability set and state the assumption.

3. Collect optional inputs when available:
   - Time since learning.
   - Known misconceptions.
   - Curriculum standard or syllabus.
   - Allowed question formats.
   - Language support needs.
   - Whether the user wants answer notes, implementation script, or follow-up variants.

4. Design the question mix with `references/question-design.md`.
   Weight toward free recall and cued recall. Use recognition items only for warm-up, novice learners, diagnostic contrast, or confidence building.

5. Calibrate difficulty with `references/difficulty-calibration.md`.
   Adjust cues, item length, complexity, and spacing recommendation according to prior knowledge, time since learning, and language demands.

6. Add answer notes and misconception checks.
   For each question, provide key points, likely errors, and what the teacher should listen for.

7. Add a brief implementation script with `references/classroom-implementation.md`.
   Keep the activity low-stakes. State whether notes are allowed, suggested timing, how to review answers, and how to reuse the material later.

8. Run the self-check in `references/boundaries-and-quality.md`.
   Ensure the questions require reconstruction from memory, are not answerable from the wording alone, target meaningful knowledge, and are not presented as a high-stakes exam.

## Return format

Default output:

```markdown
## Retrieval Practice: [Topic]

**For:** [learner level]
**Use case:** [starter / exit ticket / low-stakes quiz / spaced review]
**Spacing recommendation:** [when to use and when to revisit]

### Questions

1. [question]
   - **Type:** [Free Recall / Cued Recall / Recognition / Error Correction / Scenario / Diagram]
   - **Targets:** [knowledge, relationship, process, misconception, or procedure]

### Answer Notes

1. [key points for a correct answer]
   - **Watch for:** [common error or misconception]

### Implementation Script

[3-5 sentences for how to run the activity]

### Quality Check

- Genuine retrieval:
- Appropriate cue level:
- Meaningful knowledge:
- Low-stakes framing:
```

If the user asks for a compact version, return only questions and answer notes.

If the user asks for variants, group them by use case:

```markdown
### Quick Starter
...

### Spaced Review
...

### Misconception Check
...
```

## External dependencies

- No fixed external dependencies.
- If the user requires alignment to a current syllabus, textbook edition, exam board, or institutional standard, verify or ask the user to provide the relevant material.
- No script is required for the core workflow.

## Limits and known issues

- Generated questions may not match a specific textbook or local curriculum unless the user provides that context.
- The skill cannot verify what was actually taught in class unless lesson notes, slides, or a syllabus are provided.
- It must not claim that retrieval practice alone guarantees learning outcomes.
- It must not generate high-stakes exam papers or official assessment materials without explicit grading criteria and review by a qualified educator.
- It must not collect student personal data beyond learning-relevant context.
- It should avoid overloading novice learners with too many uncued free-recall prompts.

## Full examples

### Example 1: Geography starter

User:

```text
Make 8 retrieval practice questions on river erosion for Year 7, mixed ability, taught 10 days ago.
```

Assistant should:

1. Generate a mix of free recall, cued recall, scenario, error-correction, and one recognition item.
2. Target erosion/weathering distinction, processes, sequence, diagrams, and rate factors.
3. Include answer notes and common misconceptions.
4. Add a no-notes, low-stakes 8-12 minute implementation script.

### Example 2: Biology misconception check

User:

```text
I need a quick active-recall exit ticket for photosynthesis. Students keep saying plants get food from soil.
```

Assistant should:

1. Use the misconception as a design anchor.
2. Create a short set of prompts that requires explaining inputs, outputs, energy transfer, and the incorrect soil-food idea.
3. Include teacher notes that distinguish partial understanding from the target misconception.

### Example 3: Adult learning review

User:

```text
Create retrieval prompts for a workshop on SQL joins. Learners are beginner analysts.
```

Assistant should:

1. Focus on reconstructing join purpose, table relationships, and result-set reasoning.
2. Use scenarios and small schema prompts rather than pure definitions.
3. Avoid turning the task into a full coding exam.
