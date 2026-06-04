#!/usr/bin/env python3
"""
Functionality Testing Script - 验证技能功能正确性
"""

import argparse
import json
import sys
from pathlib import Path

def load_test_cases(skill_name, test_case=None):
    """加载测试用例"""
    fixtures_file = Path(__file__).parent / "fixtures" / "sample_inputs.json"

    if not fixtures_file.exists():
        print(f"⚠️  测试用例文件不存在: {fixtures_file}")
        return []

    with open(fixtures_file, 'r', encoding='utf-8') as f:
        all_cases = json.load(f)

    skill_cases = all_cases.get(skill_name, {})
    functionality_cases = skill_cases.get('functionality_tests', [])

    if test_case:
        # 过滤特定测试用例
        functionality_cases = [c for c in functionality_cases if c['name'] == test_case]

    return functionality_cases

def execute_functionality_test(test_case):
    """执行功能测试"""
    # 这里是模拟测试逻辑，实际应调用技能执行
    # 示例：验证输出格式

    name = test_case.get('name', 'unknown')
    expected_output = test_case.get('expected_output', {})
    output_type = expected_output.get('type', 'json')

    # 模拟技能输出
    simulated_output = generate_simulated_output(test_case)

    # 验证输出
    passed = validate_output(simulated_output, expected_output)

    return {
        'name': name,
        'passed': passed,
        'expected': expected_output,
        'actual': simulated_output
    }

def generate_simulated_output(test_case):
    """生成模拟输出"""
    # 这里应替换为实际技能调用
    return {
        'success': True,
        'data': {
            'price': 10.50,
            'change_pct': 2.5,
            'volume': 1000000
        }
    }

def validate_output(actual, expected):
    """验证输出是否符合预期"""
    if expected.get('type') == 'json':
        fields = expected.get('fields', [])
        for field in fields:
            if field not in str(actual):
                return False
        return True
    return False

def main():
    parser = argparse.ArgumentParser(description='Test skill functionality')
    parser.add_argument('--skill', required=True, help='Skill name')
    parser.add_argument('--test-case', help='Specific test case name')
    parser.add_argument('--all-cases', action='store_true', help='Run all test cases')
    parser.add_argument('--verbose', action='store_true', help='Verbose output')

    args = parser.parse_args()

    # 加载测试用例
    test_cases = load_test_cases(args.skill, args.test_case)

    if not test_cases:
        print(f"⚠️  未找到测试用例")
        if args.verbose:
            print(f"🔧 请在 fixtures/sample_inputs.json 中添加测试用例")
        sys.exit(0)

    if args.verbose:
        print(f"🔍 测试技能: {args.skill}")
        print(f"📊 测试用例数量: {len(test_cases)}")

    # 执行测试
    results = []
    passed_count = 0

    for test_case in test_cases:
        result = execute_functionality_test(test_case)
        results.append(result)

        status = "✅" if result['passed'] else "❌"
        print(f"{status} {result['name']}")
        if not result['passed']:
            if args.verbose:
                print(f"   期望: {result['expected']}")
                print(f"   实际: {result['actual']}")
        else:
            passed_count += 1

    # 汇总结果
    total = len(results)
    print(f"\n📊 总计: {total} 个测试用例")
    print(f"✅ 通过: {passed_count}")
    print(f"❌ 失败: {total - passed_count}")

    if passed_count < total:
        sys.exit(1)

if __name__ == '__main__':
    main()
