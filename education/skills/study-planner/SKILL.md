---
name: study-planner
description_zh: "根据学习目标、截止日、当前水平、每日可用时长和薄弱项安排学习节奏、复习间隔、检查点、打卡反馈、周报和计划调整；适合\"帮我制定雅思30天计划\"\"给我排一个考研复习计划\"\"期末还有14天怎么复习\"；触发词：学习计划、备考计划、复习计划、雅思计划、考研计划、期末复习、打卡、间隔复习"
description_en: "Plan study pacing, spaced review, checkpoints, check-ins, weekly reports, and adjustments from a learning goal, deadline, current level, daily time budget, and weak areas; For: \"make me a 30-day IELTS plan\", \"plan my postgraduate entrance exam prep\", \"help me review for finals in 14 days\"; Triggers: study plan, exam prep, revision plan, IELTS plan, daily schedule, check-in, weekly report, spaced review"
category: education
---

# Study Planner

## When To Use

- The user wants a concrete study or exam-prep schedule from a goal, deadline, current level, available time, and weak areas.
- The user wants to revise an existing plan after falling behind, changing the deadline, adding tasks, blocking weekdays, or reducing the daily budget.
- The user asks for check-ins, weekly reports, spaced review, revision checkpoints, or a plan that keeps them accountable.

Do not use for homework tutoring, solving practice problems, generating full course content, generating a full question bank, thesis coaching, material organization, medical/fitness/mental-health plans, or legal/business advice. If the user asks for practice tasks, keep them at the schedule level and use `references/retrieval-task-patterns.md`; do not author an entire worksheet or quiz set.

## How To Call

1. Collect the required planning fields: measurable goal, deadline, current level, weekday/weekend time budget, and weak areas. If any required field is missing, ask only for the missing fields before drafting the plan.
2. Confirm optional fields when relevant: existing materials/resources, preferred time granularity, report format, fixed unavailable days, reminder preference, and whether the user wants files saved.
3. Select the plan shape with `references/planning-workflow.md`: short sprint, exam prep, long-term learning, skill acquisition, or revision recovery.
4. Select methodology rules with `references/methodology.md`: spaced review, Pareto prioritization, Pomodoro task sizing, and Feynman-style output.
5. Add spaced review slots with `references/spaced-practice.md` whenever the plan involves memorization, exams, concepts, formulas, vocabulary, procedures, or long-term retention.
6. If the plan includes review starters or active recall work, use `references/retrieval-task-patterns.md` to schedule task types only. Do not generate a full set of questions unless the user explicitly asks for practice materials.
7. Generate the plan progressively:
   - For plans longer than 4 weeks, first show phases, weekly/monthly goals, milestones, and workload fit. Ask whether to expand weekly details.
   - For plans of 4 weeks or less, it is acceptable to show all daily tasks if the workload is manageable.
8. Before presenting a final daily schedule, run the workload self-check in `references/plan-quality-rules.md`: daily task time must leave buffer, each task must be checkable, single tasks must be short enough, and weak areas must be weighted.
9. When the user changes an existing plan, preserve prior progress by default. Ask whether they want to adjust the current plan or start a new plan if the wording is ambiguous.
10. For reminders, check-ins, and weekly reports, use `references/checkins-and-adjustments.md`. Create or update reminders only when the user confirms the plan and wants reminder support.

## Return Format

Plan outline:

```markdown
**Planning Inputs**
- Goal:
- Deadline:
- Current level:
- Time budget:
- Weak areas:
- Granularity:

**Workload Fit**
- Available time:
- Planned task time:
- Buffer:
- Pace:

**Phases**
1. Foundation:
2. Strengthening:
3. Sprint / consolidation:

**Weekly Or Daily Plan**
...

**Spaced Review**
...

**Checkpoints**
...

**Next Step**
...
```

Check-in response:

```markdown
**Check-In**
- Date:
- Completed:
- Missed:
- Streak:
- Adjustment needed:

**Tomorrow**
- ...
```

Weekly report:

```markdown
**Weekly Report**
- Completion rate:
- Strongest area:
- Weakest area:
- Streak:
- Suggested adjustment:
```

## External Dependencies

- No fixed external dependencies.
- If current exam dates, registration rules, textbook editions, or latest exam policy matter, verify current information before using it.
- If reminders are requested, the current environment must have an automation/reminder capability.
- If the user wants saved reports, the current environment must be able to write files in the selected workspace path.

## Limits And Known Issues

- Do not create direct-submit homework answers, full worksheets, full question banks, or course content.
- Do not promise a score, exam result, admissions outcome, or guaranteed habit formation.
- Do not schedule every available minute. Keep a buffer for delays, fatigue, and task overruns.
- Do not overwrite, delete, or reset an existing plan or progress record without explicit confirmation.
- Do not shame users who fall behind. Use recovery-first language and reduce the next action to a small restart.
- For likely minors, collect only learning-relevant information. Do not ask for real name, school, address, contact details, or private identifiers.

## Full Examples

User:

```text
Help me make a 30-day IELTS plan. I am around 5.5 now, want 6.5, weekdays 90 minutes and weekends 3 hours. Weakest areas are listening and writing.
```

Reply:

```markdown
**Planning Inputs**
- Goal: IELTS 6.5 overall, with weak areas in listening and writing
- Deadline: 30 days from now
- Current level: about 5.5
- Time budget: weekdays 90 min, weekends 180 min
- Granularity: daily

**Workload Fit**
- Available time: ...
- Planned task time: ...
- Buffer: ...

**Phases**
1. Foundation: diagnostic + high-frequency skills
2. Strengthening: timed practice + spaced error review
3. Sprint: mock tests + targeted weak-area repair

**Next Step**
- Confirm this outline, then I can expand Week 1 into daily tasks.
```

User:

```text
I missed the last 4 days. Can you fix the plan?
```

Reply:

```markdown
**Recovery First**
- Missing 4 days does not mean the plan failed. We should reduce today's restart step and redistribute the missed work.

**Adjustment Options**
1. Keep the deadline and drop low-priority tasks.
2. Extend the deadline by a few days.
3. Keep the content but reduce daily scope for one week.

**My recommendation**
- Keep high-priority weak-area tasks, drop low-frequency extras, and restart today with one 25-minute task.
```
