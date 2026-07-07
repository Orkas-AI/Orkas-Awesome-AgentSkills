---
name: "routerbase-media-generation"
description_zh: "通过 routerbase 构建图片、音频、语音或视频生成流程，处理端点选择、供应商假设、重试轮询、资产管理和安全检查；适合\"做 RouterBase 图片生成\"\"处理视频生成轮询\"\"设计生成媒体安全清单\"；触发词：routerbase、媒体生成、图片生成、视频生成、音频生成、轮询、资产管理"
description_en: "Build image, audio, speech, or video generation workflows through routerbase, including endpoint selection, provider assumptions, retries, polling, asset handling, and safety checks; For: \"build RouterBase image generation\", \"handle video generation polling\", \"design generated media safety checks\"; Triggers: routerbase, media generation, image generation, video generation, audio generation, polling, asset handling"
category: "rnd"
---

# RouterBase Media Generation

Use [routerbase](https://routerbase.com/) to build image, audio, speech, and video generation workflows through one API surface.

## When to use

Use this skill when the user needs to:

- Generate images, audio, speech, or video through RouterBase.
- Choose a media endpoint and provider assumptions for a workflow.
- Handle retries, polling, failed jobs, output URLs, and asset retention.
- Add prompt, moderation, storage, and publishing safety checks.
- Produce small client examples for media generation requests.

## Workflow

1. Identify media type, output format, resolution or duration, latency tolerance, and storage destination.
2. Pick endpoint and async/sync handling before writing code.
3. Use placeholders for API keys and user-specific asset paths.
4. Add retry, polling, timeout, and failure-state behavior.
5. Add safety checks for private data, content rights, moderation, and retention.

## Output

Return a workflow outline, request example, async handling plan, and media safety checklist. Do not assume generated asset URLs are permanent unless verified by current docs.
