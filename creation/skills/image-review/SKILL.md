---
name: image-review
description_zh: 评审生成图或编辑图是否符合原需求，检查 prompt 一致性、技术质量、构图、用途适配、文字、参考图一致性、安全和版权风险，并给出重生成或局部编辑建议；适合“帮我看看这张图能不能发”“这张图和 prompt 匹配吗”“哪里需要重做”；触发词：图片评审、质量分析、图像 review、提示词一致性、构图、技术瑕疵、重生成、改进建议
description_en: Review generated or edited images against the original request: prompt adherence, technical quality, composition, fitness for purpose, text, reference consistency, safety, and copyright risks, with regeneration or edit recommendations.
category: creation
---

# Image Review

## When to Use

Use this skill when the user provides an image or image path and asks whether it is good enough, matches the prompt, or needs regeneration/editing.

Use especially when the image includes:

- text, logo-like elements, product details, people, hands, faces, or complex layouts.
- commercial, brand, social, presentation, ad, ecommerce, or print use.
- reference-image consistency requirements.
- safety, copyright, privacy, or misleading-content risks.

Do not invent an image review if the image cannot be viewed or read. Ask for an upload/path or state that only a generic checklist can be provided.

## Workflow

1. Gather context:
   - original user request, prompt, target use, platform/format, reference images, and output image.
2. Inspect what is visible:
   - subject, composition, text, lighting, colors, artifacts, crop, resolution, and file constraints.
3. Score the image:
   - Prompt adherence.
   - Technical quality.
   - Composition and aesthetics.
   - Fitness for target use.
   - Text and detail reliability.
   - Reference consistency.
   - Safety, copyright, privacy, and brand risk.
4. Separate objective issues from subjective preferences.
5. Preserve successful elements in any revision advice.
6. Recommend the smallest next action:
   - accept as-is.
   - local post-process.
   - local/AI edit.
   - regenerate with revised prompt.
   - ask for missing source/reference material.

## Return Format

```markdown
## Image Review

### Verdict
Accept / Minor post-process / Local edit / Regenerate / Need more context

### Scores
- Prompt adherence:
- Technical quality:
- Composition:
- Target-use fit:
- Text/detail reliability:
- Reference consistency:
- Safety/copyright/privacy:

### Issues
1. Issue:
   Evidence:
   Fix:

### Revised Prompt Or Edit Brief
...

### Keep
- Elements that already work:

### Next Step
...
```

## Dependencies

- The image must be visible or readable.
- Prompt/source brief is needed for prompt adherence review.
- Reference images are needed for consistency review.

## Limits and Known Issues

- Aesthetic judgment is partly subjective; do not present taste preferences as hard failures.
- Do not give legal clearance for copyright, trademark, publicity rights, or advertising claims.
- Do not provide instructions to bypass model safety systems.
- Do not claim exact generation causes unless they are visible from the image or provided by the user/tool logs.

## Examples

User: "这是刚生成的产品海报，能不能发？"

Handling: review title readability, product prominence, crop, artifacts, platform fit, brand risk, and whether local post-process or regeneration is the right next step.

User: "这张图和 prompt 匹配吗？"

Handling: compare subject, style, composition, colors, text, and constraints against the prompt; return mismatches and a revised prompt that keeps the successful elements.
