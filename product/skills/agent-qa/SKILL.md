---
name: agent-qa
description: Use Agent QA to author, validate, run, debug, and triage natural-language web and mobile regression tests. Prefer its MCP tools, use the CLI as a fallback, generate canonical IDs with Agent QA, and inspect run evidence before deciding whether to change an application or test.
description_zh: "使用 Agent QA 编写、校验、运行、调试和分诊自然语言 Web 与移动端回归测试；优先使用 MCP 工具，必要时回退到 CLI；通过 Agent QA 生成规范 ID，并在决定修改应用或测试前审查运行证据。"
description_en: "Use Agent QA to author, validate, run, debug, and triage natural-language web and mobile regression tests."
category: rnd
---

# Agent QA

Use this skill when an application workflow must be exercised in a real browser or mobile environment. Agent QA stores natural-language tests as project files, retains scoped execution observations, and records evidence for each run. This skill coordinates the installed Agent QA tool; it does not replace product-level acceptance design or ordinary unit tests.

Agent QA is currently source-available under FSL-1.1-ALv2. Each release converts to Apache-2.0 after two years. Configured model, browser, and device providers may have separate costs.

## Prerequisites

Confirm the project has Agent QA installed and initialized. If it does not, use the documented setup:

```bash
npm install -D agent-qa
npx agent-qa init
npx agent-qa install-browsers --chromium
```

For mobile execution, install the required drivers with `npx agent-qa install-mobile-drivers --all`.

## Workflow

1. Discover the Agent QA workspace and inspect the active targets, devices, providers, and MCP configuration.
2. Read the existing test or suite before editing it. Keep paths inside the workspace patterns configured by the project.
3. Generate test, suite, hook, run, and observation IDs with Agent QA tooling. Do not hand-write IDs.
4. Validate every changed definition before saving or running it.
5. Prefer Agent QA MCP mutations and enqueue tools. If MCP is unavailable, use the corresponding CLI command.
6. Run only the requested test or suite. Do not broaden execution without a reason tied to the task.
7. Review step results, captured evidence, healing attempts, and retained observations before classifying a failure.
8. Separate application regressions from stale test instructions, provider failures, device failures, and environment problems.
9. When self-healing succeeds, verify that the recovered path still represents the intended user behavior before trusting it in later runs.

## CLI Fallback

After validation, run an individual test with:

```bash
npx agent-qa run path/to/test.yaml
```

Use the dashboard when visual inspection or authentication setup is needed:

```bash
npx agent-qa dashboard --open
```

## Required Boundaries

- Do not invent Agent QA configuration keys or YAML fields.
- Do not claim a test passed unless the recorded run state and evidence support it.
- Do not treat every healed interaction as an application defect.
- Do not expose provider credentials, authentication tokens, or sensitive captured data.
- Do not describe the current Agent QA release as OSI open source.

## References

- Source: https://github.com/vostride/agent-qa
- Quickstart: https://vostride.com/docs/agent-qa/quickstart
- CLI reference: https://vostride.com/docs/agent-qa/cli
