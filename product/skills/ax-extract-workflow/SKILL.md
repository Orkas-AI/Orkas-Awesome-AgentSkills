---
name: ax-extract-workflow
description: Reconstruct the workflow behind a shipped PR, feature, report, or other artifact from local ax session history.
description_zh: "从本地 ax 会话、提交记录、skill 使用和子代理活动中，还原 PR、功能、报告等交付物的产出流程；适合\"what made X work\"、\"how did we ship Y\"、\"extract workflow from <date|sha>\"等复盘请求；触发词：workflow reconstruction、工作流复盘、产出复盘、ax sessions、session history、skill usage"
description_en: "Reconstruct the workflow behind a PR, feature, report, or other artifact from local ax sessions, commits, skill usage, and subagent activity."
category: rnd
---

# ax-extract-workflow

从本地 ax 记录中复盘一个已经产出的交付物，说明它是怎样被做出来的：用了哪些会话、提交、skill、工具调用和子代理活动，关键决策按什么顺序发生。输出只写在当前回复里，不写文件，不修改仓库。

## 何时使用

- 用户问 “what made X work”、“how did we ship Y”、“show me how I built <feature>”。
- 用户要求 “extract workflow from <date|sha>” 或 “what was the workflow around <topic>”。
- 用户给出 PR、功能、报告、demo、发布物、commit sha、日期或主题，希望还原交付流程。
- 目标是复盘产出过程，而不是查看最近活动列表、做代码审查、重新实现功能或生成新计划。

## 前置条件

- 本机已安装 `ax`，且当前环境可以运行 ax CLI。
- ax 对应的 SurrealDB 已启动，历史会话和提交已完成 ingest。
- 如果任一 ax 查询因为连接 SurrealDB 或 ax 服务失败而报错，直接告诉用户先启动 ax/SurrealDB 后再试，并停止本次流程；不要继续猜测。

## 执行流程

1. **确认锚点**
   - 如果用户给出 commit sha，使用 sha 模式。
   - 如果用户给出 `YYYY-MM-DD` 日期，使用日期模式。
   - 如果用户给出主题、功能名或交付物名，先用 recall 查找相关提交和会话线索。
   - 如果用户只说最近这个仓库，使用当前仓库最近会话模式。
   - 如果 sha 或仓库上下文不明确，先询问用户 repo/path，再继续查询。

2. **查询候选会话**
   - sha 模式：`ax sessions near <sha> --json`
   - 日期模式：`ax sessions around <YYYY-MM-DD> --days=3 --json`
   - 当前仓库最近会话：`ax sessions here --days=14 --json`
   - 主题模式：`ax recall "<topic>" --sources=turn,commit --json`

3. **筛选核心会话**
   - 优先选择与交付物、相关提交、相关文件或用户问题直接匹配的会话。
   - 默认检查少量最相关会话即可；不要为了凑完整故事扩大到无关历史。
   - 如果候选结果明显歧义，先让用户选择锚点或范围。

4. **展开会话证据**
   - 对每个核心会话运行：`ax sessions show <id> --json`
   - 需要按角色理解工作流时运行：`ax sessions show <id> --by-role`
   - 如果某个子代理对交付物很关键，运行：`ax sessions show <id> --expand=<subagent-uuid>`
   - 只使用查询结果作为事实来源。角色分组可能因 skill 未分类而不完整，此时在输出中说明限制即可。

5. **整理流程**
   - 按时间和因果顺序排列：需求/目标澄清、研究或检索、计划、实现、验证、修复、交付。
   - 将 skill 使用、工具调用、提交、子代理活动放到同一条流程线上，避免只列命令清单。
   - 明确区分“查询结果直接显示的事实”和“基于事实推断的解释”。

## 输出格式

默认用以下结构，全部以内联文本输出：

1. **范围与数据源**：说明使用了哪些 ax 命令、会话 id、commit/date/topic 锚点。
2. **时间线**：按顺序列出关键阶段，每项包含事实证据和简短解释。
3. **工作流脉络**：概括从 framing、research/planning、implementation、verification 到 handoff 的工作流。
4. **关键决策**：列出 2-4 个影响结果的用户或 agent 决策，标注来自哪个会话或提交。
5. **可复用做法**：在用户需要时，用一小段话说明下次如何复现类似流程。
6. **限制与不确定性**：说明缺失会话、未分类 skill、无法关联的子代理或只有推断支撑的部分。

## 质量要求

- 先给证据，再给结论；不要把推断写成事实。
- 命令输出不够时，诚实说明缺口，不编造会话、提交、skill 或子代理。
- 复盘要关注“交付物为什么能产出”，不是流水账式转述所有 turn。
- 引用片段要短，只保留足以支撑判断的内容。
- 如果 `--by-role` 中很多 skill 未分类，可以说明角色分组不完整；不要要求用户在本流程中运行分类动作。

## 边界

- 只读。不要修改仓库，不创建 `.ax/tasks/`，不写报告文件，不提交，不推送。
- 不运行会改变项目状态的命令；只运行 ax 查询和必要的只读 shell 检查。
- 不使用不支持的 ax 参数或命令变体。
- 不把复盘扩展成新的实现计划，除非用户明确要求下一步规划。
