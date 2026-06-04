---
name: office-ppt
description_zh: 检查和轻量编辑 PowerPoint / PPTX 演示文稿，包括结构导出、模板残留检测、全局文本替换、备注编辑和新增幻灯片。适合“检查 PPT 是否还有模板文字”“导出 deck 结构”“替换公司名”“修改第 3 页备注”；触发词：PPT、PPTX、PowerPoint、幻灯片、占位符、模板、备注、deck、演示文稿
description_en: Inspect and lightly edit PowerPoint / PPTX decks, including structural reports, leftover template checks, global text replacement, speaker notes edits, slide-layout listing, and simple slide insertion. Use for existing deck QA and small safe edits, not full presentation production.
category: office
---

# Office PPT

## When to Use

Use when the user provides or asks about an existing `.pptx` presentation and wants inspection, QA, text extraction, template residue detection, global wording changes, notes edits, or simple slide insertion.

Do not use as the main workflow for creating a complete new presentation from a topic. Use a presentation-making workflow for brief, research, outline, and planning first.

Do not use for HTML-to-PPTX conversion; that is a separate preset-driven conversion task.

## Script

Run:

```bash
python3 <skill_dir>/scripts/pptx_tool.py <subcommand> <path> [args...]
```

Subcommands:

| Subcommand | Arguments | Purpose |
|---|---|---|
| `inspect` | `<path>` | Full structural report: slides, layouts, shapes, text, placeholders, notes. |
| `check` | `<path>` | Detect template text, empty placeholders, and notes issues. |
| `list-layouts` | `<path>` | List available layouts and placeholders. |
| `set-text` | `<path> <slide_idx> <shape_name_substr> <text>` | Replace text in the first matching text-enabled shape. |
| `replace-text` | `<path> <old_text> <new_text>` | Replace exact text occurrences across the deck. |
| `add-slide` | `<path> <layout_name_substr>` | Add a blank slide using a matching existing layout. |
| `set-notes` | `<path> <slide_idx> <text>` | Replace speaker notes on a slide. |
| `export-text` | `<path>` | Extract slide text and notes as JSON. |

`slide_idx` is 1-based.

Write commands automatically create a sibling backup named `<file>.bak-<timestamp>` before saving and return `backup_path` in JSON. Still create a working copy first for important files.

## Workflow

1. Run `inspect` or `export-text` before edits to understand the deck structure.
2. For QA, run `check` and summarize issues by slide.
3. For write operations, prefer editing a copy of the deck. The script creates a backup, but a working copy keeps the user's original source clean.
4. After any edit, rerun `check` or `inspect` to verify the change landed on the intended slide/shape.
5. If layout, fonts, overflow, animation, media, or visual fidelity matter, open/render the deck in a presentation viewer before final delivery.

## Return Format

Every script invocation returns JSON.

Success:

```json
{"ok": true, "data": {"path": "/absolute/path/to/deck.pptx"}}
```

Write success includes:

```json
{"ok": true, "data": {"path": "/absolute/path/to/deck.pptx", "backup_path": "/absolute/path/to/deck.pptx.bak-20260604T123456"}}
```

Failure:

```json
{"ok": false, "error": "human-readable message"}
```

## External Dependencies

- Python 3.
- `python-pptx`.
- A valid source `.pptx` file.
- A presentation viewer is recommended for visual QA.

## Limits and Known Issues

- This is a structure/text tool. It does not deeply analyze z-order, animations, transitions, embedded media, charts, theme fonts, or exact visual overflow.
- Notes editing may fail if the deck lacks a notes slide in a shape that `python-pptx` can update.
- Shape matching uses case-insensitive substring matching, so inspect shape names before `set-text`.
- Global text replacement may change more places than intended. Use exact strings and inspect output.
- Chart data and embedded workbook data are not edited.

## Examples

```bash
python3 <skill_dir>/scripts/pptx_tool.py check /path/to/deck.pptx
python3 <skill_dir>/scripts/pptx_tool.py replace-text /path/to/deck.pptx "Old Company" "New Company"
python3 <skill_dir>/scripts/pptx_tool.py set-notes /path/to/deck.pptx 3 "Speaker notes for slide 3"
```
