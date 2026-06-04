# Output Templates

## Result Status

Use one of these statuses:

- `created`: a new Notion page or database record was created.
- `updated`: an existing Notion page or database record was updated.
- `prepared`: content was prepared but not saved.
- `needs_confirmation`: destination, permissions, or duplicate handling needs user confirmation.
- `blocked`: connector, authorization, or source access is missing.
- `failed`: an attempted operation failed.

## Failure Format

```json
{
  "ok": false,
  "reason": "missing_notion_connector | permission_denied | destination_unclear | duplicate_unclear | no_search_results | write_not_confirmed | operation_failed",
  "prepared_content": "copy-ready content or summary when available",
  "missing_inputs": ["target page", "database", "authorization", "write confirmation"],
  "suggested_next_step": "..."
}
```

## Capture Page Templates

### Decision Record

```markdown
# [Decision Title]

## Context

## Decision

## Rationale

## Alternatives Considered

## Impact

## Follow-Up Actions

## Metadata
- Date:
- Owner:
- Source:
- Tags:
```

### FAQ

```markdown
# [Question]

## Short Answer

## Details

## Example

## Related Questions

## Metadata
- Topic:
- Tags:
- Source:
```

### How-To

```markdown
# [How-To Title]

## When To Use

## Prerequisites

## Steps

## Verification

## Troubleshooting

## Related Pages
```

## Internal Report Templates

### Quick Brief

```markdown
# [Topic] Quick Brief

## Bottom Line

## What We Know

## Evidence

## Risks / Uncertainty

## Recommended Next Step

## Sources
```

### Comparison

```markdown
# [Topic] Comparison

## Decision Context

## Options

| Option | Evidence | Strengths | Weaknesses | Source Pages |
|---|---|---|---|---|

## Current Recommendation

## Open Questions

## Sources
```
