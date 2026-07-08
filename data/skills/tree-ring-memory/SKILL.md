---
name: tree-ring-memory
description_zh: "使用 Tree Ring Memory 做本地优先的 AI Agent 记忆生命周期管理：在高风险任务前检索项目记忆，记录有证据的经验，保留失败 scar，处理隐私安全的记录、脱敏、审计和遗忘；适合\"记住这个项目决策\"\"回忆之前怎么处理的\"\"删除或脱敏这条记忆\"；触发词：Tree Ring Memory、agent memory、项目记忆、记忆检索、证据记忆、脱敏、遗忘、审计"
description_en: "Use Tree Ring Memory for local-first AI agent memory lifecycle work: recall project memory before risky tasks, capture evidence-linked lessons, preserve scars, and manage privacy-safe remember, redact, audit, and forget workflows; For: \"remember this project decision\", \"recall what we learned\", \"redact or delete this memory\"; Triggers: Tree Ring Memory, agent memory, project memory, memory recall, evidence memory, redaction, forgetting, audit"
description: "Use Tree Ring Memory for local-first AI agent memory lifecycle work: recall before risky tasks, evidence-linked learning, privacy-safe capture, redaction, audit, and forgetting."
category: "data"
---

# tree-ring-memory

Use Tree Ring Memory when an agent needs durable project memory without turning
chat history into a transcript dump. The skill is a workflow guide for recall,
remembering, evidence capture, redaction, audit, consolidation, and forgetting.
The canonical project ships a Rust `tree-ring` CLI backed by local SQLite/FTS
storage.

## When To Use

- Before changing architecture, storage, security, privacy, release, or data behavior.
- When a user correction, project decision, or validated lesson should survive the current session.
- When a failed approach should stay visible as a reusable warning or scar.
- When an agent needs project-scoped recall with source references.
- When memory should be redacted, deleted, superseded, or audited instead of kept forever.

Do not use for:

- Storing secrets, credentials, tokens, raw chain-of-thought, or temporary scratchpad notes.
- Treating memory as more authoritative than source files, tests, PRs, issues, or docs.
- Writing unverifiable claims as durable project truth.
- Uploading private memory to a remote service without explicit user instruction.

## How To Call

1. Read source truth first:
   - Inspect the relevant repo files, docs, tests, issues, PRs, or run artifacts.
   - Treat recalled memory as a pointer back to source evidence, not as a replacement.

2. Recall narrowly:
   - Query with project scope when possible.
   - Prefer high-confidence, non-superseded results.
   - Surface scars and warnings before repeating a risky workflow.

3. Remember deliberately:
   - Store concise lessons, decisions, user preferences, warnings, and future seeds.
   - Use evidence-linked memory for tested outcomes, incidents, reviews, branches, and experiments.
   - Include source references such as file paths, issue IDs, PR IDs, run IDs, or docs paths.

4. Protect privacy:
   - Redact sensitive details when the durable lesson is useful but exact content is unsafe.
   - Delete memory when it should not be retained.
   - Supersede stale memory when a newer decision replaces it.

5. Close out meaningful work:
   - Ask what was decided, what was learned, what should be avoided, and whether any future seed is worth keeping.
   - Store only the parts that will materially improve future work.

## CLI Reference

Check the installed command surface before acting:

```bash
tree-ring --help
tree-ring init
tree-ring remember "Use project-scoped recall before changing release behavior." --event-type decision --scope project
tree-ring recall "release behavior" --project example-service
tree-ring evidence "Snapshot invalidation fixed stale unread chat state." --outcome promoted --evidence-ref evals/chat-state/run-042 --score 0.91
tree-ring audit --audit-type sensitive
tree-ring consolidate --period-type manual --dry-run
tree-ring maintain
```

Run broad workflows with dry-run modes first when available:

```bash
tree-ring import memories.jsonl --dry-run
tree-ring dox sync --source-root . --dry-run
tree-ring revolve sync --source-root revolve --dry-run
tree-ring integrations scan --source-root .
```

If the current project has `.tree-ring/SKILL.md` or `.tree-ring/CLI.md`, read
those files before issuing commands. A project-local install may require
`--root .tree-ring`.

## External Dependencies

- Tree Ring Memory project: <https://github.com/TerminallyLazy/Tree-Ring-Memory>
- Canonical skill package: <https://github.com/TerminallyLazy/Tree-Ring-Memory/tree/main/skills/tree-ring-memory>
- The `tree-ring` CLI must be installed or available through the current project.

## Limits And Known Issues

- Memory is not source control, documentation, or test evidence.
- Static recall cannot prove the remembered claim is still current; verify drift-prone facts.
- Sensitive content should fail closed: redact, delete, or decline to store.
- Dry-run audit and import outputs should be reviewed before applying changes.
