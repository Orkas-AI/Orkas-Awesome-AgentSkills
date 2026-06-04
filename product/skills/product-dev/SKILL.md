---
name: product-dev
description: Use for product development work from PRD to implementation: make technical decisions, stress-test plans, document ADRs or spike/POC findings, break down engineering work, plan files/modules, implement code changes, use TDD when practical, debug issues, review changes, and verify completion. Use when the user asks to build a product feature, turn requirements into development tasks, challenge a technical plan, choose an architecture or technology approach, summarize a technical spike, implement a change, fix a bug, or complete engineering verification.
description_zh: "用于产品研发从 PRD 到实现验证的完整流程：技术方案决策、方案追问审查、ADR/技术预研总结、研发拆解、文件/模块级实现计划、编码变更、TDD、系统化调试、代码评审和完成前验证；适合\"把 PRD 变成开发任务并实现\"\"拆解并开发这个功能\"\"挑战一下这个技术方案\"\"grill me 一下实现计划\"\"记录技术选型\"\"总结 POC/spike\"\"修 bug\"\"做开发收尾验证\"；触发词：产品研发、开发、研发计划、技术方案、方案审查、grill me、隐藏假设、架构决策、ADR、技术预研、spike、POC总结、编码、TDD、调试、代码评审、完成验证"
description_en: "Use for product development work from PRD to implementation, including technical decisions, plan stress-testing, ADRs, spike summaries, engineering breakdown, implementation, debugging, review, and verification."
category: rnd
---

# Product Dev

用于把“要做什么”拆成“研发如何决策、交付和实现”，并在需要时记录技术方案、总结 spike/POC、指导编码、调试和完成验证。这个 skill 不创建工单、不操作外部项目管理系统、不调度真实多 agent。

## 何时使用

- 已有 PRD、产品范围、技术约束、设计/测试输入或团队上下文。
- 需要把功能拆成阶段、角色、任务、依赖、交付物、实现要点和验证标准。
- 需要在研发方案设计时记录技术选型、ADR、spike/POC 结论、方案取舍和后果。
- 项目涉及前端、后端、数据、测试、运维、内容等多个研发工作域。
- 需要在编码前明确研发路径、文件/模块影响范围、测试方式和协作边界。
- 需要实际实现代码、修复 bug、按 TDD 推进、调试失败测试或完成前做新鲜验证。

不用于极小个人任务，也不用于替代项目管理系统。

## 执行方式

1. **盘点输入**：目标、范围、已有材料、技术约束、角色分工、时间要求、风险。
2. **判断是否需要技术决策记录**：存在关键技术选型、架构边界、不可逆方案、POC/spike 结论时，先使用 ADR、technical spike 或 decision review reference。
3. **识别工作域**：前端、后端、数据、测试、运维、内容等；只保留真实需要的研发角色。UI 界面实现可作为独立输入或并行工作流处理，不在这里展开视觉方案。
4. **拆阶段**：每个阶段交付一个清晰里程碑，避免人为制造过多阶段。
5. **拆任务**：每个任务必须有 Objective、Output、Validation、Guidance、Dependencies、Steps。
6. **建依赖**：只写直接依赖；可并行任务明确分组。
7. **标人工确认点**：范围确认、关键技术选择、设计确认、上线验收、外部凭据或发布动作。
8. **补实现要点**：对需要编码的任务，列出可能影响的文件/模块、接口、数据、测试方式和预期验证。
9. **执行编码任务**：需要实际改代码时，按实现、调试和完成验证 references 执行。
10. **收尾交接**：说明哪些任务已实现，哪些还缺输入或验证。

## 路由

| 场景 | 读取 |
|---|---|
| 技术选型、架构方案、ADR、关键决策记录 | `references/architecture-decision.md` |
| 技术预研、POC、spike 总结、可行性结论 | `references/technical-spike.md` |
| 方案上线前追问、隐藏假设、分支取舍审查 | `references/decision-review.md` |
| 研发拆解、阶段、任务、依赖、角色交接 | `references/product-dev-template.md` |
| 实际编码、变更实现、TDD、小步提交前检查 | `references/implementation.md` |
| Bug、失败测试、回归、异常行为 | `references/debugging.md` |
| 完成前评审、验证、交付说明 | `references/review-and-finish.md` |

## 输出格式

做研发计划时使用 `references/product-dev-template.md`。实际编码、调试或收尾时只读取对应 reference，不一次加载所有材料。

## 边界

- 不重写完整 PRD，只摘要影响研发拆解的目标、范围和约束。
- 不把 ADR 或 spike 写成冗长架构论文；只记录决策边界、证据、取舍、后果和下一步。
- 可以写文件/模块级实现要点和测试建议；实际改代码后，必须报告真实执行过的验证。
- 只有在用户任务明确要求实现或修复时才修改项目文件；不自动创建 issue、提交代码或操作外部系统。
- 不把所有传递依赖都写进依赖图，只标直接阻塞关系。
- 信息不足时，输出假设和待确认项，不编造技术事实、团队角色或时间承诺。

## 质量检查

- 阶段是否对应真实交付里程碑。
- 任务是否有清晰 Objective、Output、Validation、Guidance、Dependencies、Steps。
- 依赖是否只包含直接依赖。
- 可并行任务是否被明确标出。
- 验证标准是否任务级可判定。
- 人工确认点是否清楚。
- 关键技术选择是否记录了备选方案、证据、取舍和后果。
- 交接说明是否能支持下一步编码执行。
- 代码实现是否遵守现有项目模式。
- 完成声明是否有本轮新鲜验证证据。
