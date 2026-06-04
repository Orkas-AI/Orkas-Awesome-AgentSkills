# Question Templates

## Required Inputs

For question generation, collect or infer:

- Grade/stage.
- Topic/knowledge point.
- Question type: multiple choice, fill-in-the-blank, calculation, proof, application, mixed.
- Count. Default to 5 when unspecified.
- Difficulty: basic, medium, advanced. Default to medium.
- Whether to show answers now or hide them until the student attempts.

## Multiple Choice

```markdown
[Question N] Multiple choice
Question stem.

A. ...
B. ...
C. ...
D. ...
```

Rules:

- Exactly one correct answer.
- Distractors should reflect common errors.
- Options should be comparable in length when possible.

## Fill-In-The-Blank

```markdown
[Question N] Fill in the blank
Question stem with ____.
```

Rules:

- The answer should be uniquely determined.
- Avoid ambiguous open-ended blanks.

## Calculation / Solution

```markdown
[Question N] Solution problem
Question stem.

Requirement: write the full process.
```

Rules:

- Conditions must be complete and non-contradictory.
- If grading is implied, include point allocation.

## Application Problem

```markdown
[Question N] Application problem
Short real-life scenario.
Clear question.

Requirement: define unknowns, build equation/relationship, solve, and write the answer sentence.
```

Rules:

- Scenario should be realistic.
- Data should be reasonable.
- Avoid unnecessary wordiness.

## Difficulty Levels

- Basic: direct formula/definition use, one knowledge point, no more than 3 steps.
- Medium: 1-2 transformations, 1-2 related knowledge points, moderate calculation.
- Advanced: multi-step reasoning, combined methods, or strategic insight.

## Verification Checklist

Before showing generated questions:

- Topic is within grade boundary.
- Conditions are complete.
- Answer is unique.
- Distractors are plausible.
- Data is realistic.
- Wording is clear.
- Every answer has been independently solved and checked.

## Exam Draft Structure

Use this for draft structure only, not as a PDF export promise.

Primary school practice paper:

- Multiple choice: 5 x 2 points.
- True/false: 5 x 2 points.
- Fill-in-the-blank: 10 x 3 points.
- Calculation: 5 x 4 points.
- Application: 5 x 6 points.

Middle school unit test:

- Multiple choice: 8 x 3 points.
- Fill-in-the-blank: 6 x 4 points.
- Solution problems: 6 x 8-10 points.

High school chapter test:

- Multiple choice: 10 x 5 points.
- Fill-in-the-blank: 4 x 5 points.
- Solution problems: 6 questions with varied point values.
