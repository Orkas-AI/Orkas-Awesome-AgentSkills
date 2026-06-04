---
name: content-writer
description_zh: 写作、改写和审核长文内容的统一入口：支持研究型文章、博客、newsletter、教程、观点文、提纲、引用整理、作者声音保留、去 AI 味润色和发布前事实/链接核验；适合“写一篇有引用的文章”“改得更自然”“发布前检查引用”；触发词：写文章、长文写作、研究写作、文章提纲、引用、改写、去 AI 味、润色、事实核查、发布前检查
description_en: Unified long-form content writing, rewriting, and audit skill for research-backed articles, blogs, newsletters, tutorials, opinion pieces, outlines, citation organization, voice preservation, natural rewrites, and pre-publish fact/link checks.
category: creation
---

# Content Writer

## When to Use

Use this skill when the user wants to write, improve, or audit long-form content.

Use for:

- writing articles, blogs, newsletters, tutorials, case studies, explainers, or opinion pieces.
- building outlines, hooks, section plans, titles, conclusions, and citation lists.
- improving an existing draft while preserving the author's voice.
- making text more natural and less AI-like.
- checking facts, statistics, citations, links, and company/product claims before publishing.

Do not use this skill for platform-native social posts, social calendars, browser-based draft publishing, or final professional legal/medical/financial advice.

## Choose The Mode

Pick one mode from the user's request. If the request spans multiple modes, handle them in order and say which mode is active.

| Mode | Use when | Output |
|---|---|---|
| `plan` | user needs topic clarification, angle, outline, or research plan | thesis, reader, outline, evidence gaps |
| `draft` | user wants a first complete article or section | full draft with assumptions and source gaps |
| `revise` | user has a draft and wants structure, clarity, or style edits | edited version plus change notes |
| `humanize` | user says it sounds AI-like, stiff, generic, or unnatural | natural rewrite preserving meaning |
| `audit` | user asks to verify facts, links, references, claims, or publish readiness | audit report with pass/issues |

## Workflow

1. Clarify only what matters:
   - topic, target reader, publishing context, purpose, tone, length, and deadline.
   - available materials: notes, draft, links, files, citations, brand voice, product docs, or style samples.
   - whether the user wants speed, depth, or strict verification.
2. For `plan`:
   - define thesis, reader promise, angle, hook options, section structure, and evidence needs.
   - mark weak claims and missing sources.
3. For `draft`:
   - write from the outline or available source material.
   - use clear labels for assumptions, placeholders, and claims needing verification.
   - avoid inventing statistics, experts, sources, case studies, customer quotes, or publication dates.
4. For `revise`:
   - improve clarity, logic, flow, evidence, section order, rhythm, and conclusion.
   - preserve the user's intended meaning and voice.
   - give optional alternatives when tone is subjective.
5. For `humanize`:
   - remove inflated significance, promotional phrasing, vague attribution, generic transitions, forced groups of three, excessive synonym cycling, and uniform sentence rhythm.
   - prefer concrete verbs, specific nouns, natural uncertainty, and human pacing.
   - do not make unsupported claims more confident.
6. For `audit`:
   - extract URLs, statistics, research citations, company claims, source attributions, and competitor claims.
   - verify links and exact claim support when tools/web access are available.
   - label findings: `PASS`, `BROKEN`, `FETCH_FAILED`, `ACCESS_BLOCKED`, `MISMATCH`, `UNSOURCED`, `UNVERIFIABLE`, or `UNVERIFIABLE_COMPANY_CLAIM`.
7. Finish with the most useful next action:
   - draft, revised text, checklist, verification gaps, or recommended publication hold.

## Return Formats

For planning:

```markdown
# Content Plan

## Thesis
- ...

## Reader
- ...

## Hook Options
1. ...
2. ...
3. ...

## Outline
### 1. [section]
- Point:
- Evidence needed:
- Example:

## Source Gaps
- ...
```

For revision or humanizing:

```markdown
## Rewritten Version
...

## What Changed
- ...

## Still Needs Verification
- ...
```

For audit:

```markdown
# Content Audit

## Summary
| Category | Total | Pass | Issues |
|---|---:|---:|---:|

## Must Fix Before Publishing
| Claim | Status | Issue | Suggested Fix |
|---|---|---|---|

## Warnings
- ...

## Passed / Limited
- ...
```

## Dependencies

- Web access is required for current research, source verification, and live URL checks.
- User-provided drafts, source files, brand claims, product docs, and style samples take priority over generic assumptions.
- Some sources may require login or manual access; mark them as access-limited.

## Limits

- Do not fabricate facts, data, citations, links, quotes, customer stories, or personal experience.
- Do not guarantee that text passes AI detection.
- Do not remove required disclosures, citations, compliance language, or safety warnings.
- Do not publish or operate external platforms.
