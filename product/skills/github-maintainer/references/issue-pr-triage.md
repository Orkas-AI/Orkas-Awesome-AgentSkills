# Issue and PR Triage

Use maintainer-facing item cards. Never return only queue numbers or opaque references.

## Repository Discovery

Use the current repository by default:

```bash
gh repo view --json nameWithOwner,url,defaultBranchRef
```

If that fails, infer the repository from `origin`:

```bash
git remote get-url origin
```

For current-project triage:

```bash
gh issue list --repo owner/repo --state open --limit 50 \
  --json number,title,author,labels,createdAt,updatedAt,url
gh pr list --repo owner/repo --state open --limit 50 \
  --json number,title,author,isDraft,reviewDecision,mergeStateStatus,createdAt,updatedAt,url
```

For broad triage, use a repo indexer if one exists. If no repo indexer exists, use `gh` against user-named owners or organizations and state the scope limits clearly.

## Detail Pass

Inspect enough context to explain every item you surface:

```bash
gh issue view 123 --repo owner/repo \
  --json number,title,author,body,comments,labels,createdAt,updatedAt,url
gh pr view 55 --repo owner/repo \
  --json number,title,author,body,comments,files,commits,isDraft,reviewDecision,mergeStateStatus,statusCheckRollup,createdAt,updatedAt,url
gh pr diff 55 --repo owner/repo --patch
gh pr checks 55 --repo owner/repo
```

Read latest comments before recommending action. Maintainer comments can supersede the visible title, labels, or old discussion.

## Evaluation

Classify each item:

- `bug`: require reproduction, logs, failing test, or current-main evidence when feasible; identify likely root cause before recommending a fix or merge.
- `feature`: require product fit and an end-to-end test plan. If validation needs a key, account, device, paid API, or external provider, state the missing access.
- `dependency`: explain package group, major/minor risk, failing checks, runtime or engine changes, and whether the update should be split.
- `security`: treat as higher priority; require code-path proof, tests, and careful review.
- `docs/internal`: lower risk, but still check stale generated churn and user-visible relevance.

Judge:

- `Fit`: good, mixed, or poor, with one concrete reason.
- `Risk`: low, medium, or high, with blast radius.
- `Proof`: CI, local repro, failing test, live end-to-end check, diff inspection, or missing proof.
- `Blocker`: first-time contributor CI approval, failing check, missing key, unclear direction, stale branch, untrusted broad diff, no repro, conflicts, or none.
- `Next`: approve CI, run tests, request repro, split PR, patch locally, merge after green, close with proof, defer, or ask the maintainer.

## Trust Signals

Include author or opener trust for every non-maintainer item you recommend acting on. Keep it factual:

```text
Trust: @login; account created 2021-04-03; repo 2 PRs/1 issue/0 commits in 12mo; GitHub 9 PRs/3 issues/12 reviews; signal: known contributor / new drive-by / bot / unknown.
```

Do not treat trust as proof. It changes review depth, not correctness.

When available:

```bash
scripts/github-activity.sh --repo owner/repo --global login
```

If the helper cannot run, collect a minimal signal from the public profile, repository history, PR/issue history, or state that trust context was unavailable.

## Prioritization

Prioritize:

- PRs with green or nearly green CI.
- Recent maintainer activity.
- Low-risk dependency, docs, or test-only changes.
- Reproducible bugs and release blockers.
- Security, auth, install, CI, and data-loss reports.
- Bugs with current-main proof and narrow owner path.

Deprioritize:

- Archived repositories unless explicitly requested.
- Fork-only queues unless the fork is the maintained target.
- Old broad feature requests without owner signal.
- Provider work that needs unavailable credentials.
- Broad generated changes without a clear problem, tests, or trusted author signal.

## Acting On Items

If the user asks to act, process one item at a time:

1. Read issue or PR context, related code, docs, CI, and project guidance.
2. Decide whether the item is safe to handle.
3. Implement, comment, rerun, close, or merge only inside the approved scope.
4. Verify locally or through CI where possible.
5. Report proof and the remaining queue before moving to the next item.
