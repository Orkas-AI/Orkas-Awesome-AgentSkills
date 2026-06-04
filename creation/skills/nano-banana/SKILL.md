---
name: nano-banana
description_zh: 通过 Nano Banana / Gemini / Imagen 相关 provider 执行图像生成或编辑，处理 provider 选择、API key 检查、参考图上传确认、成本提示、输出下载和失败回退；适合“用 Nano Banana 生成一张图”“用 Gemini 图像模型编辑这张图”“对比 Atlas 和 Google 的生成成本”；触发词：Nano Banana、Gemini 图像、Imagen、Google 图像生成、Atlas Cloud、参考图编辑、图像 API
description_en: Execute Nano Banana / Gemini / Imagen-style image generation or editing through available providers, with provider selection, API-key checks, reference-image upload consent, cost notes, output download, and failure fallback.
category: creation
---

# Nano Banana

## When to Use

Use this skill when the user explicitly wants to use Nano Banana, Gemini image models, Imagen-style generation/editing, Google AI Studio, or Atlas Cloud for image execution.

Use for:

- Text-to-image through a configured provider.
- Image editing with one or more local reference/source images.
- Comparing provider availability, privacy, and cost before execution.
- Running a generation/editing task after an image design brief is ready.

Do not use this skill as a generic prompt-writing guide. Use `image-design` for planning and route here only when execution through this provider is appropriate and available.

## Provider And Privacy Rules

1. Check which credentials are configured before choosing a provider.
2. If multiple providers are configured, ask the user which to use unless cost/privacy preference is already clear.
3. If no credentials are configured, provide setup guidance but do not ask the user to paste secrets into chat.
4. Before uploading any local image, ask for explicit confirmation and state the destination provider.
5. State that prompts and uploaded images may be sent to third-party services.
6. Ask for budget limits before batch generation or high-resolution runs.
7. Save outputs to a user-visible local directory and return output paths.

## First Checks

Check environment variables without printing secret values:

```bash
test -n "$ATLASCLOUD_API_KEY" && echo "ATLASCLOUD_API_KEY configured"
test -n "$GEMINI_API_KEY" && echo "GEMINI_API_KEY configured"
```

If the source skill's helper script is available in the local environment, prefer using it. Otherwise use the provider API documented for the user's configured provider.

## Workflow

1. Confirm task type: text-to-image or image edit.
2. Confirm prompt, source/reference image paths, aspect ratio, resolution, output directory, and count.
3. Choose provider:
   - Atlas Cloud when configured and acceptable to the user.
   - Google AI Studio / Gemini when configured and acceptable to the user.
   - no execution when credentials are missing; return setup guidance and prompt/brief instead.
4. Confirm cost, upload, and privacy before execution.
5. Submit the request.
6. Poll or wait for the result if asynchronous.
7. Download or save generated outputs.
8. Verify file existence and return paths plus provider/task metadata.

## Return Format

```markdown
## Nano Banana Result

- Provider:
- Task type:
- Output path(s):
- Task id / remote URL(s), if any:
- Cost / quota note:
- Uploads confirmed:
- Checks performed:
- Failures or fallback:
```

## Limits and Known Issues

- Provider names, model IDs, prices, and availability can change. For production work, verify current provider docs.
- Exact text, logos, faces, product geometry, and reference consistency are not guaranteed.
- Reference image limits depend on the provider and current model.
- This skill must not expose API keys or raw provider responses containing secrets.
- If execution is unavailable, return a prompt and execution plan; do not claim an image was generated.
