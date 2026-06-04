# Analytics JSON Shape

Use this lightweight JSON shape when the user asks for machine-readable analytics specs or wants validation with `scripts/validate-analytics-spec.js`.

```json
{
  "feature": "checkout_redesign",
  "analytics_platform": "Amplitude",
  "naming_convention": "snake_case object_action",
  "analytics_goals": [
    "Where do users abandon checkout?",
    "Do saved payment methods improve conversion?"
  ],
  "success_metrics": [
    {
      "name": "checkout_completion_rate",
      "definition": "completed checkouts / checkout starts",
      "target": "increase from 42% to 48%"
    }
  ],
  "events": [
    {
      "name": "checkout_started",
      "trigger": "When an authenticated user lands on the checkout page with at least one item in cart",
      "description": "Marks the beginning of checkout",
      "properties": [
        {
          "name": "cart_value",
          "type": "number",
          "required": true,
          "description": "Cart subtotal before tax and shipping",
          "example": 129.99,
          "pii": false
        }
      ]
    }
  ],
  "user_properties": [
    {
      "name": "subscription_tier",
      "type": "string",
      "description": "Current account tier",
      "set_when": "On login and plan change",
      "example": "pro",
      "pii": false
    }
  ],
  "privacy": {
    "consent_required": true,
    "pii_handling": [
      {
        "property": "email",
        "handling": "Do not send raw email; use internal user_id instead"
      }
    ],
    "retention": "24 months"
  },
  "qa": [
    "Verify checkout_started fires once per checkout session",
    "Verify cart_value is numeric and excludes tax"
  ]
}
```

## Validation Rules

- `feature` should be present.
- `analytics_goals` should contain at least one decision-relevant question.
- `events` should contain at least one event.
- Event names should be unique and snake_case.
- Each event should include `name`, `trigger`, `description`, and `properties`.
- Each property should include `name`, `type`, `required`, and `description`.
- Any property with `"pii": true` should have privacy handling documented.
- QA should include at least one event validation step.
