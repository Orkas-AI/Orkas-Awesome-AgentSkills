# Model And Tool Routing

Use routing when the user asks which model/tool to use or when execution requires choosing a provider.

## Decision Inputs

- Task type: text-to-image, reference image, edit, local processing, review.
- Quality target: draft, production, print, social, product, brand.
- Text rendering needs: none, short headline, long copy, layout-heavy.
- Consistency needs: character, product, brand style, series.
- Privacy: whether prompts or reference images may be sent to third parties.
- Cost and speed: number of variants, resolution, retry budget, deadline.
- Available tools in the current session.

## Routing Rules

- Use a built-in image tool when it is available and fits the task.
- Use provider adapters such as Dreamina or Nano Banana only when the user has credentials/session access and confirms cost/upload constraints.
- Use local processing when the task is deterministic file manipulation rather than semantic generation.
- Use review-only when the user asks for quality judgment or regeneration advice.
- If no executable tool is available, return a prompt and execution checklist only.

## Fallback Chain

1. Preferred provider/tool.
2. Same-provider lower-cost or lower-resolution option.
3. Equivalent provider with similar strengths.
4. Local/open-source workflow if privacy is more important than quality.
5. Prompt-only handoff if no execution path is available.

## Risk Notes

- Community names may not be valid model IDs.
- Prices, rate limits, model availability, and data-retention rules can change.
- Reference images and private materials require explicit upload consent.
- Long text inside generated images often needs post-production layout.
