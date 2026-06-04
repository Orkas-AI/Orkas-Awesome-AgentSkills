# Internal Research Mode

Use internal research mode when the user wants to search, read, compare, or synthesize existing Notion pages into a sourced internal document.

## Scope Setup

Clarify only the essentials:

- Research topic or decision to support.
- Target workspace area: teamspace, database, project, parent page, or known page list.
- Time range or freshness requirement.
- Output type: quick brief, research summary, comprehensive report, comparison, technical investigation, or market/competitor memo.
- Whether the result should be saved to Notion or returned as copy-ready content.

If the scope is too broad, propose search terms and filters before reading many pages.

## Search And Read

1. Search Notion with multiple query forms:
   - Exact product/project/topic name.
   - Synonyms, acronyms, legacy names, competitor names, or technical terms.
   - English and Chinese variants when relevant.

2. Record search details:
   - Query terms.
   - Scope filters.
   - Pages found.
   - Pages read.
   - Pages excluded and why.

3. For each useful page, capture:
   - Title and URL.
   - Location or database.
   - Last edited time.
   - Author/owner if available.
   - Relevant excerpts or facts.
   - Whether the content is a draft, decision, meeting note, source data, or opinion.

## Synthesis Rules

- Cite source pages for every important finding.
- Separate facts, opinions, historical decisions, assumptions, and open questions.
- Identify agreement, conflict, timeline changes, and gaps.
- Do not turn uncited internal claims into firm conclusions.
- If sources conflict, show the conflicting pages side by side and explain the current best reading.
- If all relevant sources are old, state the freshness risk.

## Save Or Return

- If the user specified a destination, create the document there after confirming permissions and duplicate risk.
- If the destination is unclear, suggest one or return copy-ready content.
- When writing to a database, set properties such as type, topic, status, source count, date, owner, and confidence.
- Return the final URL when creation or update succeeds.

## Internal Research Output

```markdown
# Notion Internal Research

## Executive Summary
- Research question:
- Current answer:
- Confidence:
- Source count:

## Scope And Method
- Queries:
- Scope:
- Pages read:
- Pages excluded:

## Findings
### Finding 1
- Claim:
- Evidence:
- Source pages:
- Confidence:

## Source List
| Page | Location | Last edited | Used for | URL |
|---|---|---|---|---|

## Conflicts And Gaps
| Issue | Source A | Source B | Current reading | Needed follow-up |
|---|---|---|---|---|

## Next Actions
- ...
```
