---
name: deep-research
description_zh: "执行可复核的深度研究流程，产出研究计划、证据链、论文证据检索、引用核验、矛盾分析、可信度标注和 APA 7 引用报告；适合\"帮我深度研究这个主题\"\"做一份有引用和方法说明的文献综述\"\"系统分析这个行业/问题的证据\"；触发词：深度研究、文献综述、论文证据、引用核验、证据分析、APA 引用、研究计划、竞品研究、趋势报告"
description_en: "Run a reproducible deep-research workflow that produces a research plan, evidence trail, scholarly evidence lookup, citation checks, contradiction analysis, confidence annotations, and APA 7 cited reports; For: 'deeply research this topic', 'prepare a cited literature review with methodology', 'systematically analyze the evidence for this issue'; Triggers: deep research, literature review, scholarly evidence, citation verification, evidence analysis, APA citations, research plan, competitive research, trend report"
category: "data"
---

# deep-research

Guide-type skill for rigorous, transparent research. Use it to investigate a complex topic, collect and evaluate evidence, resolve contradictions when possible, and produce a cited research report.

This skill is not a tutoring skill. It does not teach step by step, grade homework, organize local files, or manage a thesis project. It focuses on evidence collection, source evaluation, synthesis, and research reporting.

## When to use

Use this skill when the user asks for:

- Deep research, systematic investigation, literature review, competitive research, market/industry research, or trend analysis.
- A report with citations, source-quality discussion, methodology notes, confidence levels, and limitations.
- Scholarly evidence gathering as part of a broader research question: paper database searches, DOI / PMID / arXiv metadata checks, open-access clues, and bibliography validation.
- Verification of claims across multiple sources.
- A research plan before execution.
- A synthesis that distinguishes strong evidence, weak evidence, unresolved contradictions, and open questions.

Do not use this skill for:

- Quick factual lookup or a single-source summary.
- Lightweight single-paper lookup, pure arXiv reading, or bibliography cleanup without a broader research synthesis.
- Homework coaching, Socratic tutoring, quiz sessions, or thesis supervision.
- Local document cleanup, bibliography-file management, or bulk folder organization.
- Ghostwritten academic submissions where the user intends to submit the report as their own work without attribution.

## How to call

Follow the workflow in `references/research-workflow.md`.

1. Clarify the research task before collecting evidence.
   Ask two or three essential questions about the decision, depth, scope, timeframe, geography, audience, and source preferences.

2. Restate the research objective.
   Confirm the interpreted question, intended output, and known constraints. Wait for the user's correction or confirmation when the scope is ambiguous.

3. Present a research plan and wait for explicit approval.
   Include three to five themes, key questions per theme, source strategy, expected deliverables, citation style, and depth.

4. Run at least two research cycles for each approved theme.
   Cycle 1 maps the landscape and identifies gaps. Cycle 2 targets those gaps, checks primary sources when available, challenges early assumptions, and updates confidence.

5. Analyze between evidence-gathering steps.
   After each meaningful batch of sources, connect new findings to earlier findings, note contradictions, update assumptions, and identify remaining gaps.

6. Evaluate source quality.
   Use `references/source-quality.md` and `references/evidence-standards.md` to rank evidence, flag bias, check dates, and distinguish primary, secondary, and weak sources.

7. Handle scholarly evidence when the research depends on papers.
   Use `references/scholarly-evidence.md` to select paper databases, verify identifiers, record open-access status, and prepare citation metadata. Treat paper metadata as a lead until the relevant abstract, full text, or quoted passage has been checked.

8. Synthesize across themes.
   Identify patterns, conflicts, dependencies, and conclusions that only become visible after comparing multiple themes.

9. Produce the final report.
   Use `references/report-structure.md` and `references/citation-style.md`. Include methodology, findings, contradictions, limitations, confidence levels, practical implications, and full references.

10. For current or high-stakes topics, verify recency.
   State the date of research and avoid presenting stale information as current.

## Return format

When clarification is still needed:

```markdown
Research scope check:
[plain-language restatement of the user's request]

Clarifying questions:
1. [question]
2. [question]
3. [question]
```

When requesting plan approval:

```markdown
Research plan:

Objective:
[confirmed research objective]

Themes:
1. [theme]: [key questions and source strategy]
2. [theme]: [key questions and source strategy]
3. [theme]: [key questions and source strategy]

Deliverables:
[report length, citation style, tables/appendices if useful]

Approval needed:
[ask the user to approve or adjust the plan]
```

For the final report:

```markdown
# Research Report: [Topic]

## Executive Summary
[2-3 paragraphs]

## Methodology and Search Strategy
[scope, dates, source types, inclusion/exclusion criteria]

## Knowledge Development
[how understanding changed across research cycles]

## Comprehensive Analysis
[major findings with citations, evidence strength, contradictions, and limitations]

## Practical Implications
[applications, risks, implementation considerations, future research]

## Confidence and Limitations
[confidence levels by major conclusion and unresolved gaps]

## References
[APA 7 references]

## Appendices
[optional search log, source reliability notes, excluded sources]
```

## External dependencies

- Access to current web/search tools, databases, local files, or user-provided sources when the topic requires external evidence.
- Access to primary literature databases when the user expects a formal academic literature review.
- Access to public paper metadata APIs such as Crossref, DataCite, PubMed / PMC, arXiv, OpenAlex, Semantic Scholar, CORE, or Unpaywall when scholarly evidence, identifiers, open-access status, or citation metadata are required.
- No dedicated script is required for the core workflow.

## Limits and known issues

- The skill cannot guarantee exhaustive coverage of all sources.
- It must not fabricate sources, DOIs, page numbers, statistics, quotes, datasets, interviews, or study results.
- It must not treat paper metadata, citation counts, abstracts, or open-access links as proof of a claim until the relevant evidence has been read and connected to the research question.
- It must not silently delete or rewrite bibliography entries; suspected duplicates and uncertain metadata matches require a short explanation or human review note.
- It must distinguish verified findings from inference.
- It must disclose when sources are inaccessible, outdated, low quality, contradictory, or insufficient.
- It must not provide legal, medical, or financial decisions as authoritative professional advice.
- It must not hide uncertainty to make the report appear stronger.
- It must not promise acceptance, publication, grades, investment outcomes, clinical outcomes, or policy success.

## Full examples

### Example 1: Literature review

User asks: "Do a deep literature review on whether retrieval practice improves long-term retention in college students."

Assistant should:

1. Ask about date range, target discipline, and whether meta-analyses should be prioritized.
2. Propose themes such as cognitive mechanism, effect sizes, classroom implementation, limitations, and transfer effects.
3. Wait for approval.
4. Run two research cycles per theme.
5. Produce a cited report with confidence levels, contradictions, and APA 7 references.

### Example 2: Market research

User asks: "Deeply research AI note-taking tools for enterprise knowledge work."

Assistant should:

1. Clarify target market, regions, buyer profile, and whether pricing/security/compliance matter.
2. Propose themes such as vendor landscape, product capabilities, enterprise adoption, security posture, pricing, and risks.
3. Compare vendor claims against independent sources when possible.
4. Flag outdated or unverifiable market-size claims.
5. Produce a research report with an evidence trail and limitations.

### Example 3: Evidence check

User asks: "Systematically analyze whether four-day workweeks improve productivity."

Assistant should:

1. Clarify sector, country, date range, and whether the user wants policy, HR, or academic framing.
2. Separate trial evidence, company case studies, survey data, and critiques.
3. Assess contradictions caused by selection bias, industry differences, and measurement choices.
4. State which conclusions are high, medium, low, or speculative confidence.
