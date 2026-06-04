# Spaced Practice

Use this reference to add spaced review into a study plan. This is a sub-capability of study planning, not a separate user-facing entry point.

## Source Scope

This reference preserves the useful scheduling logic from the former `spaced-practice-scheduler` capability:

- Design expanding retrieval intervals across topics.
- Respect teaching order, prerequisites, topic difficulty, and assessment dates.
- Produce week-by-week or session-by-session review slots.
- Suggest brief retrieval activities for each review slot.

Do not expose this as a standalone user-facing entry point when the user is asking for a broader study plan. Use it inside `study-planner`.

## Evidence Basis

Use the evidence as planning rationale, not as decorative citation:

- Forgetting begins quickly after first exposure, so early retrieval should happen soon after learning.
- Optimal spacing depends on the desired retention interval; a rough planning heuristic is to set review gaps at about 10-20% of the desired retention period when feasible.
- Spaced practice should feel harder than rereading or blocked practice, but that difficulty is part of the learning effect.
- Distributed practice is useful for factual knowledge, procedures, concepts, and problem solving, but the exact interval must still respect the user's real timetable.

## Inputs

- Topics or skills to review.
- Timeline and deadline.
- Lessons or study sessions per week.
- Assessment date, if any.
- Topic difficulty or weak areas, if known.
- Required sequence or prerequisites, if any.
- Class/learner retention data, if available.

## Core Principles

1. Use expanding intervals. Schedule early review 1-3 days after first learning, then again after roughly 1-2 weeks, then 3-4 weeks when the timeline allows.
2. Review through retrieval, not rereading. Use brain dumps, blank diagrams, short quizzes, error correction, self-explanation, or closed-book summaries.
3. Keep review short. In a daily plan, review slots can often be 10-20 minutes.
4. Interleave related topics after the learner has seen more than one topic.
5. Give harder or weaker topics more review slots.
6. Before an assessment, ensure every key topic appears at least once in the final review window, but do not cram all review into the final days.
7. If review reveals gaps, schedule a brief repair and another retrieval attempt. Do not replace the whole spacing plan with massed rereading.

## Scheduling Pattern

For a topic first learned on Day N:

- Day N: first learning.
- Day N+1 or N+2: first retrieval review.
- Day N+3 to N+7: second retrieval review.
- Day N+14: consolidation review.
- Day N+30: long-retention review, when timeline allows.

For short plans, compress the pattern:

- Same day: quick recall after first exposure.
- Next day: closed-book retrieval.
- 3-4 days later: mixed review.
- Final 1-2 days: targeted weak-area review.

## Teacher / Unit Schedule Shape

Use this shape when the user is planning a course unit, class sequence, or lesson timetable:

```markdown
**Spaced Practice Schedule**
- Subject/context:
- Timeline:
- Topics:
- Total lessons/sessions:

**Week-By-Week Schedule**
| Week | Session | New Content | Spaced Review Starter |
|---|---|---|---|
| 1 | 1 | ... | Baseline recall / none |
| 1 | 2 | ... | Retrieve: ... |

**Spacing Rationale**
- ...

**Review Activity Suggestions**
- ...

**Teacher Guidance**
- Review starters should usually take 10-15 minutes.
- Keep review low-stakes.
- If more than a large share of learners miss the same concept, briefly repair it and schedule another retrieval slot.
- Explain that spaced practice may feel less fluent than rereading, but that is expected.
```

## Personal Study Plan Shape

```markdown
**Spaced Review Plan**
- Topic:
- First learning:
- Review 1:
- Review 2:
- Review 3:
- Final consolidation:
- Retrieval activity:
```

## Review Activity Menu

- Brain dump: write everything remembered about a topic with no notes.
- Blank diagram: draw and label a process, structure, timeline, or system from memory.
- Free-recall questions: answer short questions without cues.
- Error correction: fix a worked example or paragraph containing deliberate mistakes.
- Interleaved mini-quiz: mix questions from several related topics.
- Teach-back: explain the concept in plain language without notes.
- Wrong-answer replay: redo missed items and write the mistake pattern.

## Self-Check

Before returning the plan:

- No important topic disappears for too long.
- Every review task requires recall from memory.
- Review load fits the daily time budget.
- Weak topics receive extra review.
- Review does not replace new learning entirely unless the plan is in the final sprint.
- When there is an assessment date, each key topic appears in the final review window without cramming all review there.
- When there are prerequisites, review never assumes a topic before it has been introduced.
