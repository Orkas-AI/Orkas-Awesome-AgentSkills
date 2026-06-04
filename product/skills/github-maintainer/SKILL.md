---
name: github-maintainer
description_zh: "从维护者视角处理 GitHub 项目队列：分诊 issue/PR、判断适配度与风险、核对 CI/证据/信任信号，并给出下一步维护动作；适合 GitHub 项目维护、triage、PR 队列、issue 队列、贡献者处理和可安全推进项筛选。"
description_en: "Handle GitHub project queues from a maintainer perspective: triage issues and pull requests, judge fit and risk, check CI/proof/trust signals, and recommend next maintainer actions. Use for GitHub project maintenance, triage, PR queues, issue queues, contributor handling, and selecting safe next work."
category: "rnd"
---

# GitHub Maintainer

Use this when the user wants maintainer-grade judgment over a GitHub project queue. The goal is not just to list issues or pull requests; it is to decide what each item means, what evidence exists, what is risky, and what should happen next.

## Scope

- Default to the current repository when the working directory is a GitHub checkout.
- Broaden to multiple repositories only when the user asks for broad, all, everything, a named owner, or a named organization.
- Read local project guidance first when available: `CONTRIBUTING.md`, `README.md`, maintainer notes, roadmap, project policy files, or equivalent docs.
- Use live GitHub data through `gh` when queue state matters.
- Only comment, close, merge, rerun CI, or push changes after explicit user approval.

## Workflow

1. Identify the repository and confirm access.
2. Collect open issues and pull requests.
3. Inspect enough detail to explain each surfaced item.
4. Classify each item by type, fit, risk, proof, blocker, and next action.
5. Include trust signals for non-maintainer contributors when recommending action.
6. If the user asks to act, work one item at a time and verify before moving on.

## References

- Read `references/issue-pr-triage.md` for queue discovery, item evaluation, trust signals, and output structure.
- Read `references/permissions-and-safety.md` before any write action or autonomous project-maintenance work.
- Use `scripts/github-activity.sh` when `gh` and `jq` are available and contributor trust history is useful.

## Default Output

For current-repository triage:

```text
Repo: owner/name
Source: gh commands and local files inspected

Immediate:
- #123 PR: title
  What: one-line plain-language summary.
  Type/Fit/Risk: bug|feature|dependency|docs|internal; good|mixed|poor; low|medium|high because ...
  Trust: factual contributor signal, or unavailable.
  Proof: CI, tests, reproduction, diff review, or missing proof.
  Blocker: none, missing access, failing check, unclear product direction, stale branch, no repro, etc.
  Next: exact maintainer action.

Needs judgment:
- #124 issue: ...

Defer/close:
- #125 issue: ...

Skipped:
- Reason and scope limitation.
```

For broad scans:

```text
Owners scanned: owner/org list
Source: repo discovery method and selected gh inspections

Top queues:
- owner/repo: issue count, PR count, why it matters, next action

Immediate actions:
- Specific low-risk item with evidence.

Needs judgment:
- Ambiguous or high-risk item with decision needed.

Skipped:
- Archived, forks, missing access, or out-of-scope repositories.
```
