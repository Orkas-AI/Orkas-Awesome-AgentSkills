---
name: office-word
description_zh: 创建、检查和编辑 Word / DOCX 文档，可靠处理样式、编号、修订、批注、字段、表格、分节、页眉页脚和版式兼容。适合“做一份 Word 报告”“修改这份 .docx 并保留修订”“统一长文档格式和编号”；触发词：word、docx、文档、修订、批注、字段、模板、排版、编号、页眉页脚
description_en: Create, inspect, and edit Word / DOCX documents while preserving styles, numbering, tracked changes, comments, fields, tables, sections, headers, footers, and layout compatibility. Use for Word reports, DOCX edits, redlines, comments, templates, numbering cleanup, and layout-safe document updates.
category: office
---

# Office Word

## When to Use

Use when the main artifact is a Microsoft Word document, `.docx` file, template, report, contract, policy, proposal, or review draft.

Also use when the user cares about styles, numbering, tables, headers, footers, sections, fields, comments, tracked changes, or cross-editor compatibility.

Do not use for spreadsheet logic, slide decks, PDF-only edits, or Notion/wiki capture unless a Word/DOCX artifact is part of the requested deliverable.

## Workflow

1. Classify the job: create, inspect, summarize, local edit, tracked-change edit, table/layout adjustment, template cleanup, or compatibility check.
2. For an existing `.docx`, inspect the package structure when needed: `word/document.xml`, `styles.xml`, `numbering.xml`, headers, footers, comments, relationships, and section properties.
3. Make a backup copy before editing an existing file. Never overwrite the only user-provided source file.
4. Preserve the existing style system, numbering definitions, fields, bookmarks, comment anchors, revision blocks, section settings, and relationship files unless the user explicitly asks to change them.
5. Edit the smallest safe span. This is especially important for legal, academic, business review, and tracked-change workflows.
6. For new documents, use named styles and explicit page size, margins, table widths, section settings, and heading hierarchy.
7. Before delivery, check text correctness, stale fields, table overflow, broken header/footer relationships, numbering stability, comments/revisions integrity, and compatibility risks.

## Return Format

For a new document, return the generated `.docx` path and summarize the structure, styles, and main sections.

For inspection, return a short report with detected issues, risk level, and recommended fixes.

For edits, return the modified `.docx` path, the backup path if created, and a change summary. State whether tracked changes, comments, fields, numbering, headers/footers, and sections were preserved.

For failure, state the reason, affected document parts, and the safest fallback.

## External Dependencies

- Microsoft Word is recommended for final human review of complex layout, field refresh, tracked changes, and compatibility.
- LibreOffice can provide rough conversion or preview checks when available.
- Python or Node.js document libraries may be used for automated generation or OOXML edits; ask before installing missing packages.

## Limits and Known Issues

- Visible text can be split across runs, fields, bookmarks, comments, or revision blocks; plain-text replacement can corrupt structure.
- Tables, numbering, fields, headers, footers, comments, and section settings are common sources of layout drift.
- `.docm` files may contain macros. Do not execute or modify macros unless the user explicitly asks and confirms the risk.
- Legacy `.doc` files usually need conversion to `.docx`, and the converted result still needs visual review.
- Automated checks cannot fully replace opening the final document in the target application when layout matters.

## Examples

User: "Update the payment clause in this contract and preserve tracked changes and comments."

Handling: inspect revisions, comments, and nearby paragraph structure; create a backup; replace only the necessary text span; verify anchors and numbering after the edit.

User: "Make a weekly report Word document with summary, progress, risks, and next-week plan."

Handling: create a `.docx` with named styles, explicit margins, heading hierarchy, and tables for status/risk sections.
