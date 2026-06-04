---
name: notion
description_zh: "管理 Notion 工作区知识：把对话、决策、FAQ、会议纪要和过程知识保存为 Notion 页面/数据库记录，或在 Notion 内搜索、读取并综合多页资料生成带来源引用的内部文档；适合\"保存到 Notion\"\"整理成 Notion 决策记录\"\"在 Notion 里查这个主题并生成报告\"；触发词：Notion、保存到 Notion、知识库、决策记录、FAQ、会议总结、内部资料、Notion 搜索、综合报告"
description_en: "Manage knowledge in a Notion workspace: capture conversations, decisions, FAQs, meeting notes, and process knowledge as Notion pages/database records, or search and synthesize multiple Notion pages into sourced internal documentation; For: \"save this to Notion\", \"turn this into a Notion decision record\", \"search Notion for this topic and create a report\"; Triggers: Notion, save to Notion, knowledge base, decision record, FAQ, meeting summary, internal docs, Notion search, synthesis report"
description: "Capture, organize, search, and synthesize knowledge inside a Notion workspace. Use this skill whenever the user wants to save content to Notion, update a Notion knowledge base, or research a topic from internal Notion pages."
category: "data"
---

# Notion

Use this skill for Notion workspace knowledge management. It has two modes:

- `capture`: turn current conversation content, decisions, FAQs, meeting notes, or process knowledge into a Notion page or database record.
- `internal_research`: search, read, and synthesize multiple Notion pages into a sourced internal brief, report, comparison, or investigation.

## When To Use

- The user asks to save, archive, document, or turn current context into a Notion page, wiki entry, FAQ, decision record, meeting summary, or database item.
- The user asks to search Notion, check internal docs, compare Notion pages, summarize internal materials, or produce a report from Notion workspace content.
- The user needs the result to be discoverable through titles, tags, source links, related pages, indexes, hubs, or database properties.

Do not use for:

- Public web research unless external sources are explicitly requested as a separately labeled supplement.
- Local file/folder organization, Obsidian vault edits, bibliography cleanup, or standalone writing polish.
- Reading or writing Notion content without user authorization or a clear permission boundary.
- Writing sensitive content into a shared workspace before confirming target location and visible audience.

## How To Call

1. Choose the mode.
   - Use `capture` when the source is the current conversation, user-provided notes, a decision, a meeting, a FAQ, or a process explanation.
   - Use `internal_research` when the source is existing Notion pages and the user wants search, comparison, synthesis, or sourced findings.

2. Check permissions and destination.
   - Confirm that a Notion connector or equivalent tool is available before claiming that content was read or saved.
   - For writing, confirm the target page, database, teamspace, hub, or parent page when it is not obvious.
   - For sensitive, personal, customer, legal, financial, HR, or internal-strategy content, confirm visible audience before writing.

3. Avoid duplicates.
   - Search for related pages or database items before creating a new page when a connector is available.
   - Prefer updating an existing relevant page when the new content clearly belongs there.
   - If duplicate risk is unclear, show candidate destinations and ask the user to choose.

4. Execute the selected mode.
   - For capture, follow `references/capture.md`.
   - For internal research, follow `references/internal-research.md`.
   - For page/report structures and failure formats, use `references/output-templates.md`.

5. Return a concise handoff.
   - State whether the content was created, updated, prepared for copy/paste, or blocked.
   - Include the page title, destination, URL if available, source pages used, tags/properties, warnings, and any user confirmation still needed.

## Default Output

When write access is available and the user has confirmed the destination:

```markdown
# Notion Knowledge Result

## Status
- Action:
- Page title:
- Destination:
- URL:

## Content Summary
- ...

## Source / Discovery
- Source pages:
- Related pages:
- Tags / properties:

## Warnings
- ...
```

When write access is unavailable or confirmation is missing:

```markdown
# Prepared Notion Content

## Status
- Action: pending confirmation / connector unavailable
- Missing:

## Suggested Destination
- ...

## Ready-To-Paste Content
...
```

## External Dependencies

- A Notion connector or equivalent tool is required for searching, reading, creating, or updating Notion pages/databases.
- User authorization is required and only authorized workspace content may be read or written.
- A target page or database is required for write operations unless the user explicitly asks only for copy-ready content.

## Limits And Known Issues

- If no Notion connector is available, prepare the content and explain that it has not been saved.
- Notion search can miss pages because of permissions, title mismatch, old content, or nested structure.
- Page last-edited time does not prove the facts are current.
- Internal pages may contain drafts, stale decisions, or individual opinions; label confidence and cite source pages.
- Do not claim a page was created, updated, indexed, or linked unless that action actually succeeded.
