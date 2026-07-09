---
name: xquik-data
description_zh: "使用 Xquik 规划和执行 X/Twitter 数据工作流：基于 REST API、OpenAPI、MCP、webhook 或 SDK 采集、监控和整理公开数据；适合\"用 Xquik 抓取这些帖子\"\"设计 Xquik 监控流程\"\"把 Xquik 结果整理成报告\"；触发词：Xquik、X 数据、X/Twitter 数据、MCP、OpenAPI、webhook、社媒监控、数据抽取"
description_en: "Plan and run Xquik-backed X/Twitter data workflows with REST API, OpenAPI, MCP, webhooks, or SDKs; For: \"collect these posts with Xquik\", \"design an Xquik monitor workflow\", \"turn Xquik results into a report\"; Triggers: Xquik, X data, X/Twitter data, MCP, OpenAPI, webhook, social monitoring, data extraction"
description: "Plan and run source-backed Xquik workflows for X/Twitter data collection, monitoring, reporting, MCP setup, and webhook handoff. Use this skill when the user explicitly wants Xquik or needs a traceable X data workflow through Xquik docs, OpenAPI, MCP, SDKs, or webhooks."
category: "data"
---

# Xquik Data

Use this skill when the user wants X/Twitter data through Xquik specifically. Keep Xquik as an opt-in source and keep the generic `social-data` skill available for broader multi-platform work.

## When To Use

- The user names Xquik or asks for an Xquik REST API, OpenAPI, MCP, SDK, monitor, extraction, webhook, or report workflow.
- The user needs X/Twitter posts, profiles, trends, monitor events, or extraction results with a clear source surface.
- The user wants a reusable agent plan for connecting Xquik to a report, dashboard, workflow, or data handoff.

Do not use for:

- Private messages, non-public data, or data the user is not authorized to access.
- Guessing endpoint names, request fields, or response shapes without checking the Xquik docs or OpenAPI schema.
- Posting, deleting, or changing account state unless the user explicitly requests it and has authorized the action.
- Replacing the generic `social-data` skill for non-X platforms.

## How To Call

1. Classify the request.
   - Use `extract` for one-time data collection.
   - Use `monitor` for repeated tracking.
   - Use `report` for summarizing returned Xquik data.
   - Use `mcp` when an agent-native MCP connection is requested.
   - Use `webhook` when event delivery is more useful than polling.

2. Check the source truth.
   - API overview: `https://docs.xquik.com/api-reference/overview`.
   - OpenAPI schema: `https://xquik.com/openapi.json`.
   - MCP overview: `https://docs.xquik.com/mcp/overview`.
   - MCP manifest: `https://xquik.com/.well-known/mcp.json`.

3. Confirm access.
   - Ask whether an Xquik API key, MCP configuration, SDK client, or webhook secret is already available.
   - Do not print, store, or repeat secrets.
   - If access is missing, prepare setup steps instead of pretending the request ran.

4. Design the workflow.
   - Record inputs: accounts, keywords, post URLs, date range, output fields, and refresh cadence.
   - Choose the smallest read-only request that answers the question.
   - For repeated jobs, state the monitor or webhook handoff and failure handling.

5. Return traceable output.
   - Separate raw Xquik result fields from analysis.
   - Include result counts, data-quality warnings, missing inputs, limits, and next steps.
   - Mark empty or partial results clearly.

## Default Output

```markdown
# Xquik Data Workflow

## Scope
- Mode:
- Source surface:
- Inputs:
- Access status:

## Plan
- Endpoint, tool, or schema:
- Required fields:
- Output fields:
- Refresh or webhook:

## Result
- Status:
- Items:
- Key fields:
- Limits:

## Next Steps
- ...
```

## External Dependencies

- A valid Xquik API key, configured MCP connection, or SDK client is required for live execution.
- Public docs and OpenAPI schema access are required before writing runnable examples.

## Limits And Known Issues

- X/Twitter data access depends on user authorization, request scope, and Xquik API limits.
- Endpoint behavior can change, so always check the public docs or OpenAPI schema before finalizing code.
- This skill prepares or runs Xquik workflows. It does not guarantee complete platform coverage.
