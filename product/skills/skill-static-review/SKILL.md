---
name: skill-static-review
description_zh: 静态审核 skill 包的结构、覆盖度、过程质量、验证器对齐、可信度和 Agent 兼容性，并输出问题清单与改进建议；适合"帮我评审这个 skill 质量""检查这个 skill 是否达到发布标准""根据静态标准审核 skill 包"；触发词：skill评审、静态评估、质量审核、发布标准、verifier、兼容性、改进建议
description_en: Statically review a skill package for structure, coverage, procedural quality, verifier alignment, credibility, and agent compatibility, then produce issues and improvement suggestions; For: "review this skill quality", "check whether this skill meets release standards", "audit this skill package against static criteria"; Triggers: skill review, static evaluation, quality audit, release standard, verifier, compatibility, improvement suggestions
category: "rnd"
---

# skill-static-review

## 何时使用

- 用户提供一个 skill 的说明文件、目录结构、脚本清单或完整包内容，希望判断它是否适合发布或进入动态评估。
- 用户要求检查 skill 是否存在结构混乱、边界不清、步骤不可执行、依赖不明、输出不可验证等问题。
- 用户希望得到一份可操作的质量评审报告，而不是泛泛评价。

不要用于：
- 实际运行 skill、执行动态 benchmark 或调用外部 verifier。
- 评审普通提示词、Agent 工作流或产品 PRD，除非用户明确要求按 skill 包标准做静态检查。
- 替用户直接重写整个 skill；本技能只输出审核结论和修改建议。

## 如何调用

1. 收集待评审材料：至少需要 skill 的主说明文件；若有脚本、资源文件、目录树、示例输入输出，也一并读取。
2. 识别 skill 的单一职责：判断它的目标领域、任务族、适用边界和反例边界是否清楚。
3. 检查结构与规模：统计模块 / 文件数量，判断是否过度集中或过度拆分；确认是否包含使用条件、操作步骤、边界、示例、依赖说明。
4. 检查程序化质量：逐步判断每个步骤是否原子化、可执行、具备前置 / 后置条件、失败路径和观察 → 决策准则；标记退化为事实性知识或宣传文案的部分。
5. 检查验证器对齐：确认是否声明面向的 verifier 类型、输出格式是否能被稳定比对、是否暴露中间检查点。
6. 检查来源与可信度：确认来源标签、版本 / 作者 / 更新时间、底层工具或 API 兼容说明是否存在；对 self-generated 或来源不明的内容提高风险等级。
7. 检查 Agent 兼容性：按常见调用风格评估兼容性，例如 ReAct、代码生成型 Agent、CLI 型 Agent；说明最小模型能力和运行时依赖。
8. 输出分级结论：给出通过 / 有条件通过 / 不建议发布，并按严重程度列出问题和改进动作。

## 返回格式

向用户返回一份结构化评审报告，包含：

```json
{
  "overall_result": "通过 | 有条件通过 | 不建议发布",
  "score": {
    "structure_and_size": "0-5",
    "coverage_boundary": "0-5",
    "procedural_quality": "0-5",
    "verifier_alignment": "0-5",
    "source_credibility": "0-5",
    "agent_compatibility": "0-5"
  },
  "summary": "一句话总结主要质量状态",
  "blocking_issues": [
    {
      "area": "问题所属维度",
      "evidence": "来自材料的证据",
      "impact": "为什么会影响使用或动态评估",
      "fix": "必须修改的动作"
    }
  ],
  "improvement_suggestions": [
    {
      "priority": "高 | 中 | 低",
      "suggestion": "具体建议",
      "expected_effect": "修改后的收益"
    }
  ],
  "compatibility_matrix": [
    {
      "agent_type": "ReAct | code-gen | CLI | other",
      "compatibility": "兼容 | 需改写 | 不兼容",
      "notes": "原因"
    }
  ],
  "release_gate": {
    "can_enter_dynamic_eval": true,
    "required_before_release": ["发布前必须补齐的事项"]
  }
}
```

如果材料不足，应明确列出缺失项，并只基于已提供材料给出临时结论。

## 外部依赖

- 无必需外部依赖。
- 若用户提供的是文件路径或目录，需要当前会话具备读取这些文件的权限。
- 若用户要求核查远程仓库、论文或网页来源，需要网络访问；网络不可用时只做本地材料评审。

## 限制与已知问题

- 静态评审不能证明 skill 真实有效，只能判断其是否具备进入动态测试的基本质量。
- 无法替代 deterministic verifier、单元测试、状态差异测试或真实任务轨迹评估。
- 对脚本正确性只能做结构与接口层面的审查；除非用户另行要求运行测试，否则不执行代码。
- 当材料只有摘要、截图或片段时，结论必须标注为低置信度。
- 对来源不明或自生成的 skill，应默认提示需要更强的测试证据。

## 完整示例

### 示例 1：评审一个待发布 skill

输入：

```text
请评审这个 skill 是否达到发布标准。材料包括 SKILL.md、scripts/run.py 和 examples/。
```

输出要点：

```text
结论：有条件通过。

主要问题：
1. 输出格式没有稳定 schema，动态评估时难以自动比对。
2. 依赖中使用了第三方 API，但没有说明 API key 获取方式和失败行为。
3. 步骤 3 同时包含抓取、清洗和总结，粒度过粗。

建议：
- 增加固定 JSON 输出格式，并保持成功 / 失败字段一致。
- 补充依赖说明和缺失凭据时的返回格式。
- 将步骤拆成抓取、解析、校验、汇总四个动作。
```

### 示例 2：材料不足时

输入：

```text
这是一个 skill 的简介，帮我看质量。
```

输出要点：

```text
临时结论：无法完整判断，不建议直接发布。

缺失材料：
- 主说明文件全文
- 文件 / 模块清单
- 输入输出示例
- 依赖说明
- verifier 对齐说明

基于现有简介可见的风险：
- 适用边界不清，可能被错误调用。
- 没有看到可执行步骤，可能只是普通提示词说明。
```