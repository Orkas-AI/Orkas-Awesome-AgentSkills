#!/usr/bin/env python3
"""
Trigger Testing Script - 验证技能触发时机
"""

import argparse
import json
import sys
from pathlib import Path

def load_trigger_patterns(skill_name):
    """加载技能的触发模式"""
    skill_path = Path(__file__).parent.parent.parent / skill_name
    skill_md = skill_path / "SKILL.md"

    if not skill_md.exists():
        print(f"❌ 技能 {skill_name} 不存在")
        return None

    with open(skill_md, 'r', encoding='utf-8') as f:
        content = f.read()

    # 简单解析触发词（实际应从技能配置中读取）
    # 这里只是一个示例
    patterns = {
        'stock-watcher': ['监控', '查看', 'A股', '股票'],
        'a-stock-monitor': ['市场情绪', '选股', '行情'],
    }

    return patterns.get(skill_name, [])

def test_trigger(input_text, expected, patterns):
    """测试触发逻辑"""
    should_trigger = any(pattern in input_text for pattern in patterns)
    passed = should_trigger == expected

    return {
        'input': input_text,
        'expected': expected,
        'actual': should_trigger,
        'passed': passed
    }

def main():
    parser = argparse.ArgumentParser(description='Test skill trigger patterns')
    parser.add_argument('--skill', required=True, help='Skill name')
    parser.add_argument('--input', required=True, help='Input text to test')
    parser.add_argument('--expected', type=lambda x: x.lower() == 'true', required=True,
                       help='Expected trigger (true/false)')
    parser.add_argument('--verbose', action='store_true', help='Verbose output')

    args = parser.parse_args()

    # 加载触发模式
    patterns = load_trigger_patterns(args.skill)
    if not patterns:
        sys.exit(1)

    if args.verbose:
        print(f"🔍 测试技能: {args.skill}")
        print(f"📊 触发模式: {patterns}")
        print(f"📝 输入文本: {args.input}")

    # 执行测试
    result = test_trigger(args.input, args.expected, patterns)

    # 输出结果
    status = "✅" if result['passed'] else "❌"
    expected_str = "触发" if result['expected'] else "不触发"
    actual_str = "触发" if result['actual'] else "不触发"

    print(f"{status} {result['input']}")
    print(f"   期望: {expected_str} | 实际: {actual_str}")

    if not result['passed']:
        sys.exit(1)

if __name__ == '__main__':
    main()
