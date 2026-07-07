---
name: "routerbase-api-integration"
description_zh: "将应用接入 routerbase OpenAI 兼容模型网关，迁移 SDK 调用，配置 base URL、流式输出、tool calling、JSON mode 和安全 API Key；适合\"把 OpenAI SDK 迁移到 RouterBase\"\"写 RouterBase API 接入示例\"\"检查 API Key 是否会泄露\"；触发词：routerbase、RouterBase API、OpenAI兼容、模型网关、SDK迁移、API Key安全"
description_en: "Integrate applications with the routerbase OpenAI-compatible model gateway, migrate SDK calls, configure base URLs, streaming, tool calling, JSON mode, and safe API key handling; For: \"migrate OpenAI SDK to RouterBase\", \"write a RouterBase API integration example\", \"check API key leakage risks\"; Triggers: routerbase, RouterBase API, OpenAI-compatible, model gateway, SDK migration, API key safety"
category: "rnd"
---

# RouterBase API Integration

Use [routerbase](https://routerbase.com/) as an OpenAI-compatible model gateway for application integration work.

## When to use

Use this skill when the user needs to:

- Migrate existing OpenAI-compatible SDK code to RouterBase.
- Configure `https://routerbase.com/v1` as the base URL.
- Implement chat completions, streaming, tool calling, JSON mode, or vision inputs.
- Keep RouterBase API keys server-side and out of git.
- Produce small Python, JavaScript, curl, LangChain, LlamaIndex, Vercel AI SDK, Cursor, Continue, or OpenAI-compatible examples.

## Workflow

1. Identify the current client, language, model ID, runtime, and deployment boundary.
2. Keep the user's existing OpenAI-compatible client when possible.
3. Replace only the base URL, model ID, and local secret configuration.
4. Use placeholders such as `<ROUTERBASE_API_KEY>` in all examples.
5. Add a quick verification request and expected response shape.
6. Include a safety checklist for logs, environment files, client-side code, and CI output.

## Output

Return concise integration steps, a minimal example, and a verification checklist. Never include or request real API keys.
