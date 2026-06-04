---
name: image-design
description_zh: 将图像生成或编辑需求转成创意 brief、结构化 prompt、画幅/风格/参考图方案、模型或工具选择、编辑步骤和验收标准；适合“帮我设计一张海报怎么生成”“给这组产品图写 prompt”“保持参考图风格做系列图”“这张图该生成还是编辑”；触发词：生图方案、图片设计、图像 prompt、参考图、同风格、角色一致、模型选择、编辑方案
description_en: Plan image generation and editing work: creative brief, structured prompts, aspect ratio, style, reference-image strategy, model/tool routing, edit workflow, and acceptance criteria. Use when the user needs an image plan, prompt, provider choice, reference consistency, or edit plan before execution.
category: creation
---

# Image Design

## When to Use

Use this skill when the user wants to create or edit visual assets and needs a clear plan before execution:

- Posters, covers, banners, avatars, product images, social cards, icons, visual concepts, or image series.
- Prompt writing, style exploration, aspect-ratio selection, composition planning, and visual acceptance criteria.
- Model or tool selection across built-in image tools, Dreamina, Nano Banana / Gemini, ComfyUI, or other providers.
- Reference-image planning for style transfer, character consistency, product consistency, multi-image fusion, or series generation.
- Edit planning for inpainting, outpainting, background removal, restoration, relighting, upscaling, style transfer, or local post-processing.

Do not use this skill to claim that an image was actually generated or edited. If no executable image tool/provider is available, return only the brief, prompt, workflow, and acceptance checklist.

## Workflow

1. Clarify the visual job:
   - final use case, audience, platform, required format, aspect ratio, brand constraints, text needs, source/reference images, and deadline.
   - whether the user expects execution now or only a prompt/design plan.
2. Convert the request into a creative brief:
   - purpose, target viewer, subject, visual hierarchy, mood, style, composition, color, lighting, materials, and constraints.
3. Choose the path:
   - generate from text when the desired image does not exist yet.
   - edit from an existing image when preserving identity, product, layout, or reference detail matters.
   - use local deterministic processing for resize, crop, format conversion, compression, EXIF stripping, DPI, or watermarking.
   - use review-only when the user asks whether an existing result is good enough.
4. Route to an executable provider only when available:
   - built-in image generation/editing tool when available in the current session.
   - `dreamina` for Jimeng/Dreamina image or video generation through an already logged-in CLI.
   - `nano-banana` for Gemini / Imagen-style generation or editing when credentials and upload consent are available.
   - `comfyui` only after its local install/model/workflow safety has been reviewed.
5. Write structured prompts:
   - SUBJECT, CONTEXT, COMPOSITION, STYLE, LIGHTING, TEXT, TECHNICAL, CONSTRAINTS.
   - Keep text inside generated images short. For long text, recommend post-production layout.
6. For reference images:
   - confirm usage rights and privacy.
   - state what each reference should preserve and what may change.
   - warn when provider reference-image count, upload policy, or consistency limits are unknown.
7. For editing:
   - choose the edit type, identify the protected area and edit area, define mask/selection needs, and preserve the original file.
   - use non-destructive output paths and stepwise intermediate outputs for multi-step edits.
8. End with a review plan:
   - prompt adherence, technical quality, composition, target-platform fit, text correctness, safety/copyright/privacy risks, and next iteration.

## Return Format

Return a concise plan:

```markdown
## Visual Task
...

## Creative Brief
- Use case:
- Audience:
- Subject:
- Style:
- Composition:
- Aspect ratio / size:
- Constraints:

## Prompt
...

## Execution Path
- Recommended tool/provider:
- Why:
- Fallback:
- Requires user confirmation:

## Acceptance Checklist
- 

## Limits
- 
```

If execution happened through another tool, include output paths and what was actually verified. If execution did not happen, say so explicitly.

## References

- `references/model-routing.md`: provider and fallback decision rules.
- `references/prompt-style-library.md`: prompt structure, style patterns, and use-case templates.
- `references/reference-edit-planning.md`: reference-image consistency and edit workflow patterns.

## External Dependencies

- Image generation or editing requires an available executable tool/provider. This skill alone is planning-only.
- Provider names, model IDs, prices, and availability change over time; important production work needs current provider documentation checked before execution.
- Reference images may be uploaded to third-party providers only after user consent.

## Limits and Known Issues

- Do not guarantee exact text rendering, logo fidelity, face identity, product geometry, or character consistency.
- Do not bypass provider safety rules.
- Do not use private, copyrighted, branded, or personal reference images without user authorization.
- Do not promise commercial rights; identify licensing or review needs.

## Examples

User: "帮我做一张小红书封面，主题是 AI 写作效率。"

Handling: create a 3:4 social cover brief, propose 2-3 styles, write a short-text prompt with title area and visual hierarchy, choose an available provider, and include a checklist for text readability and platform fit.

User: "按这张角色图做三张不同场景的系列图。"

Handling: identify the reference image as the character anchor, define fixed visual rules, write scene-specific prompts, warn about face drift, and require review after each generated result.
