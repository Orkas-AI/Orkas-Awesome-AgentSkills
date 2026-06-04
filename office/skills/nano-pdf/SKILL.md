---
name: nano-pdf
description_zh: 使用本机 nano-pdf CLI 对 PDF 做指定页局部编辑、文字修改、水印、删除或轻量改写，并要求先备份、验证页码和检查输出。适合“改 PDF 第 3 页标题”“给 PDF 加水印”“删除某页一段文字”；触发词：nano-pdf、pdf编辑、改pdf、修改pdf、pdf水印、pdf局部改写
description_en: Use the local nano-pdf CLI for page-targeted PDF edits such as changing text, adding watermarks, deleting text, or light rewrites. Requires CLI availability checks, source backup, page-number validation, and output review.
category: office
---

# Nano PDF

## When to Use

Use when the user asks to edit a PDF and the local `nano-pdf` CLI is available.

Good fits:

- change text on a specific page
- add a watermark
- remove or redact a small visible element
- apply a narrow natural-language edit to a page

Do not use when the task requires full document re-layout, legal-grade redaction guarantees, OCR-heavy reconstruction, form extraction, or arbitrary PDF generation.

## Preflight

Before editing:

```bash
command -v nano-pdf
nano-pdf --help
```

If the CLI is unavailable, do not claim the edit was completed. Return a fallback plan or ask whether the user wants to install/configure the tool.

## Workflow

1. Confirm the source PDF path and requested output behavior.
2. Create a backup or work on a copy. Never overwrite the only source PDF.
3. Confirm the intended page number with the user-facing page label if possible.
4. Run a small test or inspect output when page indexing may be ambiguous. Some versions/configurations may treat page numbers as 0-based while users expect 1-based.
5. Run the edit.
6. Open, render, or visually inspect the affected pages before delivery.
7. If the edit landed on the wrong page, restore from backup and retry with the corrected index.

## Command Pattern

```bash
nano-pdf edit <input.pdf> <page> "<natural language instruction>"
```

Example:

```bash
nano-pdf edit deck.pdf 3 "Change the title to Q3 Results and add a Confidential watermark"
```

Prefer working-copy names such as:

```text
source.pdf
source.working.pdf
source.edited.pdf
```

## Return Format

Return:

- output PDF path
- backup path
- affected pages
- command summary
- visual verification status
- known risks or manual checks

If the CLI is missing or the edit cannot be verified, return:

- `ok: false`
- reason
- suggested fallback
- any prepared but unexecuted instruction

## Limits and Known Issues

- Page numbering may be 0-based or 1-based depending on the installed CLI version/configuration. Verify before final delivery.
- Natural-language edits may not preserve exact typography or layout.
- PDF redaction is high risk. For sensitive redaction, require visual verification and consider a specialized redaction workflow.
- Scanned PDFs may require OCR and may not be editable as text.
- Always inspect output pages; a successful CLI exit is not enough.
