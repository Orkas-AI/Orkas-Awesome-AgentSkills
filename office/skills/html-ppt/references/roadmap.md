# Roadmap

## Current stage

Use semantic HTML parsing + fixed coordinate mapping for stable editable PPTX output.

## Next likely upgrades

1. Add browser-assisted measurement for bounding boxes.
2. Support richer text run extraction from inline spans.
3. Add reusable theme/master definitions.
4. Add a hybrid mode:
   - keep difficult background visuals as image
   - overlay editable text/shapes for key regions
5. Add PowerPoint QA hooks for overflow and alignment checks.

## Non-goals for now

- Full arbitrary HTML/CSS rendering engine
- Responsive web layout support
- Pixel-perfect conversion for any webpage