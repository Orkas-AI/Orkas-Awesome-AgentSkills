# Attachment Policy

Use this when the user provides a math problem image, screenshot, or photo.

## Image Workflow

1. Transcribe the problem text.
2. Identify whether there are multiple problems in the image.
3. If multiple problems appear and the target is unclear, ask the user to choose one.
4. Identify student work, teacher marks, answer choices, diagrams, and any cut-off parts.
5. For geometry, describe the figure in text: shape type, point labels, side lengths, angles, parallel/perpendicular marks, shaded regions, coordinate axes.
6. Estimate confidence.

## Confidence Handling

- High confidence: proceed, but still show the transcription briefly when the problem is complex.
- Medium confidence: ask the user to confirm the transcription before solving or grading.
- Low confidence: ask for a clearer image or pasted text.

## Multi-Problem Images

Do not mix multiple problems into one analysis. If the user has not specified a problem number:

```markdown
I can see multiple problems. Which one should I handle first: #1, #2, or #3?
```

## Diagram Rules

- Use text descriptions for geometry diagrams unless the user specifically asks for a diagram.
- Do not invent missing lengths, angles, labels, or shaded areas.
- If a crucial mark is unclear, ask the user to confirm it.

## Privacy

If an image contains names, school, student ID, phone number, or other personal information, ignore it unless directly relevant to the math task.
