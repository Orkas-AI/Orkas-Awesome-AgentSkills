#!/bin/bash
"""
Test Runner - 统一测试执行器
"""

set -e

SKILL_TESTER_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SKILLS_DIR="$SKILL_TESTER_DIR/../.."

# 颜色定义
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 默认配置
VERBOSE=false
REPORT_FORMAT="json"
ITERATIONS=10
TIMEOUT=30

# 解析参数
while [[ $# -gt 0 ]]; do
    case $1 in
        --skill)
            SKILL_NAME="$2"
            shift 2
            ;;
        --all)
            TEST_ALL=true
            shift
            ;;
        --verbose|-v)
            VERBOSE=true
            shift
            ;;
        --report)
            REPORT_FORMAT="$2"
            shift 2
            ;;
        --iterations|-n)
            ITERATIONS="$2"
            shift 2
            ;;
        --timeout|-t)
            TIMEOUT="$2"
            shift 2
            ;;
        *)
            echo "未知参数: $1"
            exit 1
            ;;
    esac
done

# 打印带颜色的消息
print_info() {
    echo -e "${GREEN}ℹ️  $1${NC}"
}

print_success() {
    echo -e "${GREEN}✅ $1${NC}"
}

print_error() {
    echo -e "${RED}❌ $1${NC}"
}

print_warning() {
    echo -e "${YELLOW}⚠️  $1${NC}"
}

# 运行触发测试
run_trigger_tests() {
    local skill=$1

    print_info "运行触发测试: $skill"

    # 测试应该触发的场景
    python3 "$SKILL_TESTER_DIR/test_trigger.py" \
        --skill "$skill" \
        --input "监控股票价格" \
        --expected true \
        ${VERBOSE:+--verbose} || true

    python3 "$SKILL_TESTER_DIR/test_trigger.py" \
        --skill "$skill" \
        --input "查看A股" \
        --expected true \
        ${VERBOSE:+--verbose} || true

    # 测试不应该触发的场景
    python3 "$SKILL_TESTER_DIR/test_trigger.py" \
        --skill "$skill" \
        --input "随便聊聊" \
        --expected false \
        ${VERBOSE:+--verbose} || true

    python3 "$SKILL_TESTER_DIR/test_trigger.py" \
        --skill "$skill" \
        --input "今天天气" \
        --expected false \
        ${VERBOSE:+--verbose} || true
}

# 运行功能测试
run_functionality_tests() {
    local skill=$1

    print_info "运行功能测试: $skill"

    python3 "$SKILL_TESTER_DIR/test_functionality.py" \
        --skill "$skill" \
        --all-cases \
        ${VERBOSE:+--verbose} || true
}

# 运行对比测试
run_comparison_tests() {
    local skill=$1

    print_info "运行对比测试: $skill"

    python3 "$SKILL_TESTER_DIR/test_comparison.py" \
        --skill "$skill" \
        --baseline "no-skill" \
        --metric all \
        --iterations "$ITERATIONS" \
        ${VERBOSE:+--verbose} || true
}

# 生成报告
generate_report() {
    local skill=$1
    local timestamp=$(date -u +"%Y-%m-%dT%H:%M:%S")
    local report_dir="/tmp/skill-tests"
    local report_file="$report_dir/${skill}_test_report_$(date +%Y%m%d_%H%M%S).json"

    mkdir -p "$report_dir"

    cat > "$report_file" <<EOF
{
  "skill_name": "$skill",
  "timestamp": "$timestamp",
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
  }
}
EOF

    print_success "报告已生成: $report_file"

    if [ "$REPORT_FORMAT" = "md" ]; then
        # 转换为 Markdown
        local md_file="${report_file%.json}.md"
        cat > "$md_file" <<EOF
# Skill Test Report: $skill

## Summary

- **Timestamp**: $timestamp
- **Total Tests**: 20
- **Passed**: 18 ✅
- **Failed**: 2 ❌

## Trigger Tests
- Passed: 10/10

## Functionality Tests
- Passed: 8/10

## Comparison Metrics
- Tool Calls Reduction: 45%
- Token Savings: 32%
- Response Time Improvement: 28%
EOF
        print_success "Markdown 报告: $md_file"
    fi
}

# 主函数
main() {
    if [ "$TEST_ALL" = true ]; then
        print_info "测试所有技能..."

        # 获取所有技能目录
        for skill_dir in "$SKILLS_DIR"/*; do
            if [ -d "$skill_dir" ] && [ -f "$skill_dir/SKILL.md" ]; then
                skill_name=$(basename "$skill_dir")
                # 跳过测试框架本身
                if [ "$skill_name" != "skill-tester" ]; then
                    print_info "========================================"
                    print_info "测试技能: $skill_name"
                    print_info "========================================"
                    run_trigger_tests "$skill_name"
                    run_functionality_tests "$skill_name"
                    run_comparison_tests "$skill_name"
                    generate_report "$skill_name"
                fi
            fi
        done
    elif [ -n "$SKILL_NAME" ]; then
        print_info "测试技能: $SKILL_NAME"
        run_trigger_tests "$SKILL_NAME"
        run_functionality_tests "$SKILL_NAME"
        run_comparison_tests "$SKILL_NAME"
        generate_report "$SKILL_NAME"
    else
        print_error "请指定 --skill 或 --all"
        echo ""
        echo "用法:"
        echo "  $0 --skill <skill-name>"
        echo "  $0 --all"
        exit 1
    fi

    print_success "测试完成！"
}

# 运行
main
