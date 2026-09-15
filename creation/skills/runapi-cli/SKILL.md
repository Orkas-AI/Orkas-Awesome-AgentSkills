---
name: runapi-cli
description: Install and use the RunAPI CLI for one-off artifacts and results from supported AI services. Use when the user asks an agent to discover available commands, submit JSON requests, wait for tasks, or automate a supported RunAPI workflow from the terminal. Use an SDK for application or production integration.
description_en: "Install and use the RunAPI CLI for one-off AI image, video, music, audio, and model API jobs, with command discovery, JSON input, task waiting, authentication checks, and output handling."
description_zh: "安装并使用 RunAPI CLI 执行一次性的 AI 图片、视频、音乐、音频和模型 API 任务，包含命令发现、JSON 输入、任务等待、认证检查和输出处理；适合\"用 RunAPI 生成图片\"\"调用 RunAPI CLI\"\"等待 RunAPI 任务完成\"；触发词：RunAPI、AI 图片、AI 视频、音乐生成、音频生成、模型 API、CLI"
category: creation
---

# RunAPI CLI

Use the `runapi` CLI for one-off artifacts or results. Use a RunAPI SDK for an
application, backend, worker, library, or other production integration.

## Install

```shell
brew install runapi-ai/tap/runapi
```

For headless Linux or macOS environments:

```shell
curl -fsSL https://runapi.ai/cli/install.sh | sh
```

The installer verifies a published SHA-256 checksum before writing the binary.

## Authenticate

Check the current state before submitting a paid task:

```shell
runapi auth status
```

Prefer `RUNAPI_API_KEY` in headless environments. For interactive use, run
`runapi login`. Never print, commit, or place an API key directly in a command
argument.

## Discover commands

The installed CLI is the source of truth for supported services, actions, and
request fields. Inspect its help before composing a request:

```shell
runapi --help
runapi suno --help
runapi suno text-to-music --help
```

Proceed only with a service and action listed by the installed CLI. Do not
invent command names, models, or fields.

## Run a task

Write valid JSON to a file and pass it with `--input-file`:

```shell
runapi suno text-to-music --input-file request.json
```

The default command waits until the task completes. Use asynchronous mode only
when the user explicitly requests background execution or separate polling:

```shell
runapi suno text-to-music --async --input-file request.json
runapi wait <task-id> --service suno --action text-to-music
```

Preserve the returned task ID and exact service/action pair. JSON results go to
stdout and progress goes to stderr, so results can be piped to `jq`.

## Files and outputs

Pass a local media path directly when the selected command documents a media
URL field; the CLI uploads it before submission. Use `runapi files create` only
when the workflow needs a reusable temporary URL.

Inspect returned JSON for output URLs. Download requested artifacts to explicit
paths and report those paths to the user. Do not overwrite existing files
without confirmation.

## Reference

- Documentation and command catalog: <https://runapi.ai/models.md>
- Canonical skill: <https://github.com/runapi-ai/cli-skill>
