# UI Implementation

Use this reference when creating or improving UI inside an existing app.

## Intake

Capture only what is needed:

- Product goal or user story.
- Target screen, route, component, or workflow.
- Existing app framework and styling system.
- Required states: default, empty, loading, error, success, disabled, selected.
- Responsive targets and accessibility constraints.
- Any requested visual style or brand reference.

## Implementation Steps

1. Inspect nearby screens/components before designing.
2. Reuse the app's component system, icons, tokens, utility classes, and layout patterns.
3. Define the UI structure before coding: navigation, primary content, actions, feedback, and edge states.
4. Implement in small changes.
5. Check responsive behavior and text fit.
6. Verify with a running app when possible.
7. Iterate on screenshot findings instead of trusting the code alone.

## Design Decisions To Make Explicit

| Area | Decision |
|---|---|
| Layout | Page structure, grid/flex behavior, density |
| Components | Existing components reused, new components needed |
| States | Empty/loading/error/success/disabled/selected |
| Interaction | Click, keyboard, focus, hover, validation |
| Responsive | Mobile/tablet/desktop behavior |
| Accessibility | Labels, focus, contrast, keyboard, touch target |
| Visual style | Existing app style or selected reference |

## Frontend Quality Gate

- Text does not overlap or overflow important containers.
- Buttons and controls have stable dimensions.
- Primary action is clear.
- Empty/error/loading states are useful.
- Keyboard focus and accessible names are present where needed.
- UI remains usable on mobile and desktop.
- External style references are adapted, not copied wholesale.

## Handoff Note

If implementation cannot be completed because the app or files are unavailable, produce a compact UI plan with:

- Screen layout.
- Component list.
- State list.
- Visual style direction.
- Acceptance notes for the implementer.

