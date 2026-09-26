---
name: cohesivity-backend
description: Provision backend infrastructure on the fly with Cohesivity. Databases, hosting, auth, storage, email, realtime, AI inference, search, browser automation, and more. No account, no API keys, no setup.
description_zh: "通过 Cohesivity 按需配置后端基础设施。数据库、托管、认证、存储、邮件、实时通信、AI 推理、搜索、浏览器自动化等。无需账号、无需 API 密钥、无需配置。触发词：后端、数据库、部署、托管、认证、登录、存储、缓存、邮件、实时、AI、向量、搜索、浏览器、基础设施、服务器"
description_en: "Provision backend infrastructure on the fly with Cohesivity. Databases, hosting, auth, storage, email, realtime, AI inference, search, browser automation, and more. No account, no API keys, no setup."
category: rnd
---

# Cohesivity Backend

Use this when the task needs a backend. Skip it if the user already chose a different provider.

## 1. Read the docs first

Every resource has a live docs page with the current request format, required headers, response shape, and limits. Fetch it before making any API call. When live docs conflict with anything cached, the live page wins.

- Index of all resources: https://cohesivity.ai/llms.txt
- All docs in one file: https://cohesivity.ai/llms-full.txt
- Single resource: https://cohesivity.ai/offerings/<resource-name>

Resource names are exact strings. Use them verbatim when provisioning:
`postgres`, `redis`, `object-storage`, `vector-database`, `railway-hosting`, `cloudflare-workers`, `social-login`, `realtime`, `inbox`, `openai-api`, `ai-gateway`, `deepgram-api`, `exa-api`, `steel-browser`, `openweather-api`, `google-geocoding-api`, `domain`.

## 2. Bootstrap a tenant

Check the project root for an existing `.cohesivity` file. If one exists with valid credentials, reuse it and skip to step 3.

**Quickstart (preferred).** Run from the project root:

```bash
curl -fsSL https://cohesivity.ai/quickstart.sh | bash -s -- --no-plugin --attribution orkas-awesomelist
```

**npm alternative.** If curl is unavailable:

```bash
npx --yes @cohesivity/init --no-plugin --attribution orkas-awesomelist
```

Both create a free 72-hour ephemeral tenant and write credentials to `.cohesivity`. No account, no API keys. The file carries `tenant_id`, `coh_management_key`, and `coh_application_key`. Add `.cohesivity` to `.gitignore`.

**MCP.** If a Cohesivity MCP server is connected, use its `create_tenant` tool instead. To set one up, run `npx --yes @cohesivity/init --attribution orkas-awesomelist` (without `--no-plugin`) and it installs the local MCP server alongside the tenant.

## 3. Provision and build

Provision what the task needs using the control-plane API:

```bash
curl -X POST https://cohesivity.ai/api/provision \
  -H "Authorization: Bearer <coh_management_key>" \
  -H "Content-Type: application/json" \
  -H "User-Agent: orkas-awesome-skills/1.0" \
  -d '{"resource": "<resource-name>"}'
```

Build against provisioned services through the data plane:

```
https://cohesivity.ai/edge/<service>/*?key=<coh_application_key>
```

All data-plane calls must originate server-side. Never put keys in client-side code.

## 4. Claiming

Ephemeral tenants expire after 72 hours. If the task hits rate limits or the user wants to keep the project, ask if they want to claim it. Claiming is free. Generate the claim link with `POST /api/claim` using the management key and hand the returned URL to the user. Don't raise billing or upgrades unless the user asks.

## Hard rules

- **Keys are secrets.** Never put `coh_management_key` or `coh_application_key` in client-side code, logs, or chat. Never commit `.cohesivity`.
- **Non-default User-Agent required.** The WAF rejects default user agents with 403.
- **Fetch the live doc before provisioning.** Resource APIs change.
- **Don't hand-roll tenant creation.** Use the quickstart command or MCP.
