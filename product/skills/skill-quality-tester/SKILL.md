---
name: "skill-quality-tester"
description_zh: "对平台技能做触发、功能、负样本和对比质量测试，输出可修复的质量报告；适合\"帮我 review 这个 skill 质量\"\"测试这个 skill 会不会误触发\"\"给这些 skill 做上线前质检\"；触发词：skill质检、质量review、触发测试、负样本、功能测试、上线前检查、测试报告、误触发"
description_en: "Test platform skills for trigger fit, functionality, negative samples, and comparative quality, then produce actionable QA reports; For: \"review this skill quality\", \"test whether this skill triggers incorrectly\", \"QA these skills before publishing\"; Triggers: skill QA, quality review, trigger test, negative samples, functionality test, publish check, test report, false trigger"
category: "rnd"
---

# OpenClaw Skill Testing Framework

自动化测试框架，确保技能质量与性能。

**作者**: Cao Xiaosi (曹小四)  
**版本**: 1.0.0  
**许可证**: MIT

## 🎯 测试目标

### 1. 触发测试 (Trigger Testing)
验证技能在正确时机加载，测试应该触发和不应该触发的场景。

**测试内容**:
- ✅ 验证触发词匹配
- ✅ 测试边界条件
- ✅ 验证不应触发的场景

**测试方法**:
```bash
python3 scripts/test_trigger.py --skill stock-watcher --input "监控股票价格" --expected true
python3 scripts/test_trigger.py --skill stock-watcher --input "随便聊聊" --expected false
```

### 2. 功能测试 (Functionality Testing)
验证技能输出是否正确，测试各种输入场景。

**测试内容**:
- ✅ 正常输入场景
- ✅ 边界值测试
- ✅ 异常输入处理
- ✅ 输出格式验证

**测试方法**:
```bash
python3 scripts/test_functionality.py --skill a-stock-monitor --test-case "market_sentiment"
python3 scripts/test_functionality.py --skill a-stock-monitor --test-case "stock_price_query"
```

### 3. 对比测试 (Comparison Testing)
证明技能比没有技能时更好，对比工具调用次数、token 消耗等。

**测试内容**:
- ✅ 工具调用次数对比
- ✅ Token 消耗对比
- ✅ 响应时间对比
- ✅ 准确率对比

**测试方法**:
```bash
python3 scripts/test_comparison.py --skill stock-watcher --baseline "no-skill" --metric "tool_calls"
python3 scripts/test_comparison.py --skill stock-watcher --baseline "no-skill" --metric "tokens"
```

## 📁 目录结构

```
skills/skill-tester/
├── SKILL.md                           # 本文件
├── scripts/
│   ├── test_trigger.py                # 触发测试脚本
│   ├── test_functionality.py          # 功能测试脚本
│   ├── test_comparison.py             # 对比测试脚本
│   ├── test_runner.sh                 # 测试执行器
│   ├── utils/
│   │   ├── trigger_validator.py       # 触发验证工具
│   │   ├── output_validator.py        # 输出验证工具
│   │   └── metrics_collector.py       # 性能指标收集器
│   └── fixtures/
│       └── sample_inputs.json         # 测试用例数据
└── references/
    ├── TEST_GUIDELINES.md             # 测试指南
    └── METRICS_DEFINITION.md          # 指标定义
```

## 🚀 使用方式

### 快速测试

```bash
# 测试单个技能
python3 scripts/test_runner.sh --skill stock-watcher

# 测试所有技能
python3 scripts/test_runner.sh --all

# 详细模式
python3 scripts/test_runner.sh --skill stock-watcher --verbose
```

### 触发测试

```bash
# 测试应该触发的场景
python3 scripts/test_trigger.py --skill "stock-watcher" \
  --inputs "监控股票价格" "查看A股" "实时行情" \
  --expected true

# 测试不应该触发的场景
python3 scripts/test_trigger.py --skill "stock-watcher" \
  --inputs "随便聊聊" "今天天气" "帮我写代码" \
  --expected false
```

### 功能测试

```bash
# 运行特定测试用例
python3 scripts/test_functionality.py --skill "a-stock-monitor" \
  --test-case "market_sentiment_calculation"

# 运行所有测试用例
python3 scripts/test_functionality.py --skill "a-stock-monitor" \
  --all-cases
```

### 对比测试

```bash
# 对比工具调用次数
python3 scripts/test_comparison.py --skill "stock-watcher" \
  --baseline "no-skill" \
  --metric "tool_calls" \
  --iterations 10

# 对比 Token 消耗
python3 scripts/test_comparison.py --skill "stock-watcher" \
  --baseline "no-skill" \
  --metric "tokens" \
  --iterations 10
```

## 📊 测试报告

### 输出格式

```json
{
  "skill_name": "stock-watcher",
  "timestamp": "2026-04-03T12:00:00",
  "test_summary": {
    "total": 20,
    "passed": 18,
    "failed": 2,
    "skipped": 0
  },
  "trigger_tests": {
    "passed": 10,
    "failed": 0
  },
  "functionality_tests": {
    "passed": 8,
    "failed": 2
  },
  "comparison_metrics": {
    "tool_calls_reduction": "45%",
    "token_savings": "32%",
    "response_time_improvement": "28%"
  },
  "failed_tests": [
    {
      "test_name": "test_stock_price_accuracy",
      "error": "Expected price 10.50, got 10.45",
      "input": "600000"
    }
  ]
}
```

### 报告生成

```bash
# 生成 JSON 报告
python3 scripts/test_runner.sh --skill stock-watcher --report json

# 生成 HTML 报告
python3 scripts/test_runner.sh --skill stock-watcher --report html

# 生成 Markdown 报告
python3 scripts/test_runner.sh --skill stock-watcher --report md
```

## 🔧 配置说明

### 测试配置文件

创建 `test_config.json`:

```json
{
  "skills_path": "/Users/mars/.openclaw/workspace/skills",
  "test_iterations": 10,
  "timeout_seconds": 30,
  "verbose": false,
  "save_reports": true,
  "report_format": ["json", "md"],
  "exclude_skills": ["skill-tester", "self-improving"]
}
```

### 环境变量

```bash
export SKILL_TESTER_VERBOSE=true
export SKILL_TESTER_TIMEOUT=60
export SKILL_TESTER_REPORT_DIR="/tmp/skill-tests"
```

## 🧪 测试用例示例

### 触发测试用例

```json
{
  "skill": "stock-watcher",
  "trigger_tests": {
    "should_trigger": [
      "监控股票价格",
      "查看A股实时行情",
      "A股今日走势"
    ],
    "should_not_trigger": [
      "帮我写代码",
      "今天天气如何",
      "随便聊聊"
    ]
  }
}
```

### 功能测试用例

```json
{
  "skill": "a-stock-monitor",
  "functionality_tests": [
    {
      "name": "market_sentiment",
      "input": {"action": "calculate_sentiment"},
      "expected_output": {
        "type": "json",
        "fields": ["score", "level", "stats"]
      }
    },
    {
      "name": "stock_price_query",
      "input": {"stock_code": "600000"},
      "expected_output": {
        "type": "json",
        "fields": ["price", "change_pct", "volume"]
      }
    }
  ]
}
```

## 📈 性能指标定义

### 1. 工具调用次数 (Tool Calls)
- **定义**: 技能执行所需的工具调用总数
- **目标**: 减少不必要的工具调用
- **对比基准**: 无技能时的手动操作

### 2. Token 消耗 (Token Usage)
- **定义**: LLM 调用消耗的 Token 总数
- **目标**: 降低 Token 消耗，节省成本
- **对比基准**: 无技能时的原始对话

### 3. 响应时间 (Response Time)
- **定义**: 从请求到响应的总耗时（秒）
- **目标**: 提升响应速度
- **对比基准**: 无技能时的响应时间

### 4. 准确率 (Accuracy)
- **定义**: 输出结果的正确率
- **目标**: 100% 准确
- **评估方法**: 人工验证 + 自动化检查

## 🛠️ 开发指南

### 添加新技能测试

1. 在 `scripts/fixtures/sample_inputs.json` 中添加测试用例
2. 创建技能特定的测试脚本（可选）
3. 运行测试验证

### 扩展测试类型

创建新的测试模块：

```python
# scripts/test_custom.py
from utils.metrics_collector import MetricsCollector

def test_custom_metric(skill_name):
    collector = MetricsCollector()
    # 自定义测试逻辑
    results = collector.collect_custom_metrics(skill_name)
    return results
```

## 🔍 故障排查

### 问题1: 测试超时
**原因**: 技能执行时间过长  
**解决**: 增加超时配置 `--timeout 60`

### 问题2: 报告生成失败
**原因**: 报告目录不存在  
**解决**: 创建目录 `mkdir -p /tmp/skill-tests`

### 问题3: 测试用例缺失
**原因**: 未定义测试用例  
**解决**: 在 `fixtures/sample_inputs.json` 中添加

## 📝 最佳实践

1. **定期运行测试**: 每次技能更新后运行完整测试
2. **保持测试用例更新**: 随技能功能同步更新测试用例
3. **监控性能指标**: 定期对比性能指标，优化技能
4. **自动化集成**: 将测试集成到 CI/CD 流程中
5. **文档化测试结果**: 保存测试报告，便于追溯

## 📄 许可证

MIT License

## 🤝 贡献

欢迎提交问题、建议和改进意见！

## 📞 联系作者

- **邮箱**: mars@caofu.org
- **系统**: OpenClaw Agent System


