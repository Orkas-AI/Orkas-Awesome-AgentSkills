# Permissions and Safety

GitHub maintenance can affect public project state. Treat write actions as explicit decisions.

## Required Checks

Before live GitHub work:

```bash
gh auth status
gh repo view --json nameWithOwner,url
```

Before local project changes:

```bash
git status --short --branch
git branch --show-current
```

Do not switch branches, stash, commit, reset, restore, clean, push, or delete branches unless the user asks.

## Write Actions

Require explicit approval before:

- Commenting on issues or pull requests
- Closing or reopening issues
- Approving, requesting changes, closing, or merging pull requests
- Rerunning or cancelling CI
- Creating, editing, publishing, or deleting releases
- Changing labels, milestones, assignees, repository settings, secrets, environments, or branch protections

When approval is missing, provide a preview:

```text
Proposed action: close issue #123
Reason: fixed by commit/PR, verified by ...
Command:
gh issue close 123 --repo owner/repo --comment "..."
```

## Autonomous Maintenance

If the user asks to keep going autonomously, autonomy is still bounded:

- Stay in the current repository unless broader scope was requested.
- Work one issue or pull request at a time.
- Prefer low-risk, testable, reversible items.
- Stop for missing credentials, unclear product direction, broad behavior changes, risky dependencies, security-sensitive uncertainty, or unavailable end-to-end validation.
- Do not end with dirty files, an unpushed local fix, or a half-applied repository action unless blocked; if blocked, state the exact blocker and current state.

## Evidence Standard

Do not recommend a merge or closure on vibes alone. Use at least one relevant proof source:

- Green CI or specific failing checks explained
- Local reproduction or failing test
- Diff inspection tied to the reported behavior
- Live end-to-end validation
- Maintainer comment or project guidance
- Clear duplicate, stale, or already-fixed evidence

If proof is missing, the next action should request proof, reproduce, run tests, or defer.
