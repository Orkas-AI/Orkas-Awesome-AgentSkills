---
name: wps
description_zh: 面向中文办公场景处理 WPS 文字、表格、演示的创建、编辑、审阅、转换、兼容排查和 PDF 导出。适合“WPS 文档格式乱了帮我排查”“WPS 表格整理数据并设置打印区域”“WPS 演示导出交付 PDF”；触发词：WPS、WPS文字、WPS表格、WPS演示、格式兼容、批注修订、导出PDF、中文办公
description_en: Handle WPS Office Writer, Spreadsheets, and Presentation workflows for Chinese office users, including creation, editing, review, conversion, compatibility troubleshooting, print setup, and PDF export.
category: office
---

# WPS

## When to Use

Use when the user explicitly mentions WPS, WPS Office, WPS Writer, WPS Spreadsheets, WPS Presentation, Chinese office formatting, WPS-to-Office compatibility, print setup, or PDF export from WPS.

Use for Chinese document conventions such as A4 layout, Chinese fonts, paragraph spacing, heading levels, page breaks, numbering, tables, signatures, seals, and PDF delivery.

Do not use for pure Microsoft Office workflows unless the user cares about WPS compatibility.

## Workflow

1. Confirm artifact type: WPS Writer, Spreadsheet, Presentation, or mixed office package.
2. Confirm delivery target: editable source file, review copy, print version, or PDF.
3. Preserve the user's original file by working on a copy.
4. Check compatibility-sensitive areas:
   - fonts and font fallback
   - paragraph spacing and pagination
   - numbering and heading styles
   - formulas, charts, and print areas
   - images, seals, and tables
   - comments, revisions, and export settings
5. Prefer reproducible steps and clear change logs over hidden GUI-only operations.
6. Before delivery, verify visible layout or ask the user to open the result in the target WPS version when local rendering is unavailable.

## Common Tasks

### WPS Writer

- Normalize heading/body styles before inserting a table of contents.
- For contracts or official documents, lock page setup, headers/footers, paragraph grid, numbering, and signature/seal positions before final cleanup.
- For review workflows, prefer revisions and comments over silent overwrites.

### WPS Spreadsheets

- Back up the workbook before cleaning data.
- Check formulas, number formats, filters, frozen panes, validation, chart ranges, print area, and page breaks.
- Treat long IDs, phone numbers, and leading-zero values as text when needed.

### WPS Presentation

- Stabilize master, fonts, and theme before page-by-page cleanup.
- Check alignment, font replacement, image sharpness, animations, and export-to-PDF fidelity.
- Use PDF export as a delivery fallback when editability is less important than visual stability.

## References

Read `references/wps-reference.md` for compatibility checks, troubleshooting order, and delivery QA.

## Return Format

Return:

- artifact type
- completed changes
- backup or working-copy path if a file was edited
- compatibility checks performed
- export status
- items requiring manual confirmation in WPS

## Limits and Known Issues

- GUI-only WPS operations may not be executable in the current environment.
- Exact layout can differ by WPS version, installed fonts, operating system, and printer settings.
- Do not install macros, plugins, or templates from untrusted sources.
- Do not expose sensitive content in examples; use placeholders for personal, contract, client, or financial data.
