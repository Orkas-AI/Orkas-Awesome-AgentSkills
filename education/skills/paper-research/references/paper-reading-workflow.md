# Paper Reading Workflow

Use this reference after fetching ArXiv metadata, or when the user provides paper text/PDF/source.

## Classification

Classify from title, abstract, categories, and the user's stated goal.

Return:

```json
{
  "category": "agent_systems | benchmark | inference_accelerate | llm_training | multimodal | rag_and_retrieval | technique_report | general",
  "confidence": 0.0,
  "reason": "short reason"
}
```

Use `general` when no category clearly fits or confidence is below `0.4`.

## Abstract-Based Reading

Use this when only metadata and abstract are available.

1. State that the notes are abstract-based.
2. Extract the research problem, proposed approach, claimed contribution, and claimed evidence.
3. Do not infer implementation details, exact metrics, theorem claims, or appendix findings unless present in the abstract.
4. End with concrete next-reading questions that require the full paper.

## Deep Reading

Use this when full paper text, PDF text, or source is available.

1. First pass: read abstract, introduction, background, contribution statement, and limitation section. Produce an initial map.
2. Second pass: read methods, experiments, analysis, formulas, algorithms, and implementation details. Correct or refine the initial map.
3. Appendix pass: inspect appendix only when the main paper depends on proofs, extra experiments, prompt details, data construction, or implementation specifics.
4. Evidence pass: separate author claims from directly observed evidence. Mark uncertain facts with `[to verify]`.
5. Synthesis: produce structured notes for the user's goal, not a section-by-section rewrite.

## Required Notes

Include:

- One-sentence summary.
- Problem and motivation.
- Core contribution.
- Method or system design.
- Experiments, benchmarks, datasets, and metrics.
- Main results and what they actually support.
- Limitations and likely failure modes.
- What to read next: related papers, keywords, datasets, or methods.

## Recency and Comparisons

When the user asks for latest work or research progress:

- Include absolute dates from ArXiv metadata.
- Distinguish new submissions from updates when the metadata shows it.
- Compare by problem framing, method family, evidence strength, and practical relevance.
- Do not claim a paper is state of the art unless the paper or external evidence supports it.
