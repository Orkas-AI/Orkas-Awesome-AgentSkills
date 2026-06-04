---
name: "paper-research"
description_zh: "检索 ArXiv 论文或读取指定 arXiv ID/URL，输出论文列表、摘要、分类、贡献、方法、证据、局限和后续阅读建议；适合\"查一下今天 ArXiv 上关于多智能体的论文\"\"帮我读这篇 arXiv 论文\"\"总结最近 RAG 的新论文\"；触发词：ArXiv、arxiv id、论文搜索、最新论文、论文阅读、论文摘要、研究进展、paper"
description_en: "Search ArXiv papers or read a specified arXiv ID/URL, returning paper lists, summaries, classification, contributions, methods, evidence, limitations, and follow-up reading suggestions; For: \"find today's ArXiv papers on multi-agent systems\", \"read this arXiv paper for me\", \"summarize recent RAG papers\"; Triggers: ArXiv, arxiv id, paper search, latest papers, paper reading, paper summary, research updates, paper"
category: "education"
---

# paper-research

## When to use

- The user asks for recent or latest ArXiv papers by topic, author, category, keyword, or query phrase.
- The user provides an ArXiv ID, abs URL, or PDF URL and wants a structured summary, classification, deep reading, or follow-up reading suggestions.
- The user wants a short research scan: paper list, contribution summary, methods, evidence, limitations, and which papers deserve deeper reading.

Do not use for general web literature reviews outside ArXiv, thesis coaching, homework tutoring, or long-term research memory management. Do not save a research log unless the user explicitly asks to save one.

## How to call

Use the bundled script for ArXiv API metadata. Then synthesize the result with the reading workflow in `references/paper-reading-workflow.md`.

Search by keyword, author, category, or ArXiv query:

```bash
$ORKAS_NODE $ORKAS_PC_DIR/bin/run-skill.cjs paper-research arxiv_api -- search --query "multi-agent systems" --count 5
```

Read one paper by ArXiv ID or URL:

```bash
$ORKAS_NODE $ORKAS_PC_DIR/bin/run-skill.cjs paper-research arxiv_api -- read --id "2401.12345"
```

Parameters:

- `search --query`: ArXiv API search query. Plain text is treated as `all:<query>`. Native ArXiv prefixes such as `au:`, `cat:`, `ti:`, `abs:`, and `id:` are passed through.
- `search --count`: number of papers to return. Default `5`; maximum `50`.
- `search --sort-by`: `submittedDate`, `lastUpdatedDate`, or `relevance`. Default `submittedDate`.
- `search --sort-order`: `descending` or `ascending`. Default `descending`.
- `read --id`: ArXiv ID, abs URL, or PDF URL.

Workflow:

1. Run the script for metadata and abstracts.
2. For search results, rank papers by topic fit, novelty signal, method relevance, and whether the abstract supports the user's stated goal.
3. For a single paper, classify the paper with `references/category-reading-guides.md` when the topic matches one of the known AI research categories; otherwise use the general reading guide.
4. If the user asks for deep reading and the current environment can fetch the paper/PDF/source, inspect the paper body before making claims about methods, experiments, formulas, or limitations.
5. If only the abstract is available, label the output as abstract-based and avoid overclaiming.
6. If the user asks to save notes, first confirm the target file/path. Use `references/research-log-template.md` for the entry shape.

## Return format

For paper search:

```markdown
**Search scope**
- Query:
- Count:
- Basis: ArXiv API metadata / abstract-based

**Top papers**
1. Title
   - ArXiv:
   - Authors:
   - Published:
   - Categories:
   - Why it matters:
   - Abstract summary:
   - Next reading action:

**Pattern across results**
- ...
```

For single-paper reading:

```markdown
**Paper**
- Title:
- ArXiv:
- Authors:
- Published:
- Categories:
- Reading basis: abstract / PDF / source / user-provided text

**Classification**
- Category:
- Confidence:
- Reason:

**Structured notes**
- One-sentence summary:
- Research problem:
- Core contribution:
- Method:
- Evidence:
- Limitations:
- Useful follow-up questions:
- Recommended next papers or keywords:
```

Script success output is JSON:

```json
{
  "ok": true,
  "mode": "search",
  "query": "all:multi-agent systems",
  "count": 5,
  "papers": []
}
```

Script failure output is JSON with `ok: false` and an `error` string.

## External dependencies

- Network access to `https://export.arxiv.org/api/query`; without it the metadata script cannot fetch papers.
- Python 3 stdlib only; no `arxiv`, `requests`, `uv`, venv, API key, or LLM service is required by the script.
- Deep reading beyond abstracts depends on the current environment's ability to fetch and parse PDFs, source files, or user-provided paper text.

## Limits and known issues

- ArXiv API metadata usually contains abstracts, authors, dates, categories, and links, but not full paper text.
- "Latest" depends on ArXiv indexing and timezone; include returned `published` / `updated` dates when recency matters.
- Abstract-only summaries must not claim detailed method, proof, implementation, or appendix facts.
- The script does not cache, deduplicate across past sessions, or write `memory/RESEARCH_LOG.md` automatically.
- ArXiv API rate limits may slow repeated large searches. Keep `--count` modest unless the user asks for a broader scan.

## Full examples

Search:

```text
User: 查一下今天 ArXiv 上 multi-agent planning 的新论文，给我 5 篇。
Call: $ORKAS_NODE $ORKAS_PC_DIR/bin/run-skill.cjs paper-research arxiv_api -- search --query "multi-agent planning" --count 5
Return: ranked paper list with abstract-based summaries and next reading actions.
```

Single paper:

```text
User: 帮我读 https://arxiv.org/abs/2401.12345，重点看方法和局限。
Call: $ORKAS_NODE $ORKAS_PC_DIR/bin/run-skill.cjs paper-research arxiv_api -- read --id "https://arxiv.org/abs/2401.12345"
Return: paper metadata, classification, structured notes, limitations, and follow-up questions. If full text is unavailable, mark the notes as abstract-based.
```
