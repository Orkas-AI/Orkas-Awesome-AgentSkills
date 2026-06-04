---
name: office-excel
description_zh: 创建、检查和编辑 Excel / XLSX 工作簿，可靠处理公式、日期、类型、格式、数据验证、透视表、图表、模板和重算。适合“做一个 Excel 财务报表”“把 CSV 整理成带公式的 xlsx”“修改工作簿并保留格式”；触发词：excel、xlsx、xls、csv、tsv、表格、工作簿、公式、电子表格、透视表
description_en: Create, inspect, and edit Excel / XLSX workbooks with reliable formulas, dates, data types, formatting, validations, pivots, charts, templates, and recalculation. Use for spreadsheet deliverables, workbook cleanup, CSV-to-XLSX conversion, formula models, and Excel-compatible reporting.
category: office
---

# Office Excel

## When to Use

Use when the main artifact is an Excel workbook, `.xlsx`, `.xlsm`, `.xls`, `.csv`, `.tsv`, or spreadsheet-like deliverable.

Use especially when formulas, dates, number formats, merged cells, workbook structure, validation rules, print settings, or cross-platform behavior matter.

Do not use for general data analysis unless the output must be a spreadsheet artifact.

## Workflow

1. Classify the job: inspect, clean data, create workbook, edit template, add formulas, preserve formatting, export CSV, or prepare delivery.
2. Choose the tool by job:
   - Use `pandas` for tabular analysis, reshaping, joins, aggregation, and CSV-like tasks.
   - Use `openpyxl` or workbook-native tooling when formulas, styles, sheets, comments, merged cells, validations, or template preservation matter.
3. Back up existing workbooks before editing. Avoid flattening formulas by accidentally saving value-only reads.
4. Preserve workbook structure: sheet order, widths, hidden rows/columns, merged areas, freezes, filters, named ranges, validations, conditional formatting, print settings, comments, and visual conventions.
5. Protect data types before Excel changes them. Store long identifiers, phone numbers, ZIP codes, and leading-zero values as text when appropriate.
6. Keep live calculations in formulas when the recipient should be able to audit or update the workbook.
7. Before delivery, check representative formulas, copied ranges, denominators, named ranges, `#REF!`, `#DIV/0!`, `#VALUE!`, `#NAME?`, stale cached values, clipped labels, wrapped text, and print layout.

## Return Format

For a new workbook, return the `.xlsx` path and summarize sheets, formulas, assumptions, and formatting.

For edits, return the modified workbook path, backup path if created, and a change summary. Mention whether formulas, styles, validations, and print settings were preserved.

For inspections, return key sheets, detected risks, formula/status issues, and recommended fixes.

For failures, state the workbook feature that blocked automation and the safest fallback.

## External Dependencies

- Excel, LibreOffice, or another spreadsheet viewer is recommended for final visual and recalculation checks.
- Python libraries such as `pandas` and `openpyxl` may be used when available.
- `openpyxl` preserves formulas but does not calculate them. Use a spreadsheet engine for current calculated values when needed.

## Limits and Known Issues

- Excel stores dates as serial numbers and has 1900/1904 date-system quirks.
- Excel truncates numeric precision after 15 digits.
- Mixed text-number columns, scientific notation, automatic date parsing, and stripped leading zeros are common data corruption risks.
- Dynamic array functions and newer functions such as `FILTER`, `XLOOKUP`, `SORT`, and `SEQUENCE` may fail in older viewers.
- Hidden sheets, named ranges, validations, and conditional formatting can carry business logic invisible in a quick skim.

## Examples

User: "Turn this CSV into an Excel workbook with formulas and a summary sheet."

Handling: read with explicit dtypes, create sheets, write formulas instead of hardcoded derived results, format inputs/outputs distinctly, and check formulas before delivery.

User: "Update this budget workbook but keep the template formatting."

Handling: create a backup, inspect sheets and styles, edit only requested cells/ranges, preserve formulas and validations, then verify copied formulas and visible layout.
