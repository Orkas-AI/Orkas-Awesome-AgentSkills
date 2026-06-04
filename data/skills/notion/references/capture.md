# Capture Mode

Use capture mode when the user wants to save the current conversation, a decision, a Q&A, a meeting summary, a process, or user-provided notes into Notion.

## Capture Scope

1. Identify what should be captured:
   - Current conversation segment.
   - User-provided notes or transcript.
   - Decision and rationale.
   - FAQ or troubleshooting answer.
   - Meeting summary.
   - How-to or process documentation.
   - Post-mortem, lesson learned, or reference note.

2. If the user only says "save this", infer the likely scope from recent context. Ask a short clarification only when multiple scopes are plausible or sensitive content is involved.

3. Preserve provenance:
   - Conversation date or source material.
   - Participants or owner if provided.
   - Related project, product, team, or topic.
   - Open questions and follow-up actions.

## Content Types

- Concept / definition: title, short definition, context, examples, related links.
- How-to: when to use, prerequisites, steps, verification, troubleshooting.
- Decision record: background, decision, rationale, alternatives, tradeoffs, impact, follow-up.
- FAQ: question, short answer, detailed answer, examples, related questions.
- Meeting summary: attendees if provided, agenda, decisions, action items, risks.
- Learning / post-mortem: what happened, what worked, what failed, root causes, lessons, actions.
- Reference documentation: stable facts, source notes, related pages, maintenance owner.

## Destination Selection

1. Search for an appropriate existing page, database, wiki hub, project page, or teamspace when a connector is available.
2. If multiple destinations are plausible, ask the user to choose.
3. If no destination is provided and no connector is available, prepare copy-ready content and suggest a destination pattern.
4. Do not write to a location with unclear permissions, audience, or ownership.

## Create Or Update

- Create a new page when the content is a standalone knowledge item.
- Update an existing page when the new content is clearly a section, follow-up, or correction to existing knowledge.
- For database records, set useful properties such as type, topic, tags, status, owner, date, source, and last updated.
- Before updates that affect shared pages, summarize the proposed change and confirm if the effect is broad or irreversible.

## Discoverability

- Use a clear, searchable title.
- Add consistent tags and categories.
- Link the page from a hub, index, project page, FAQ list, or related page when possible.
- Return the created/updated location and any index links.

## Capture Output

```markdown
# Notion Capture Result

## Summary
- Knowledge type:
- Page title:
- Destination:
- Status:

## Page Outline
- ...

## Properties
- Tags:
- Type:
- Owner:
- Source:

## Discovery
- Related pages:
- Linked from:

## Confirmation / Risks
- ...
```
