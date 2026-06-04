# Agent Integration Guide

## Goal
Help this skill cooperate with whatever agent installs it, without telling that agent which specific tools or routes it must use.

This file should define obligations and fallback behavior, not implementation choices.

## 1. Determine What Is Reachable
At a high level, determine whether the current environment can:
- obtain or verify external facts
- work from user-supplied materials
- create structured intermediate outputs
- create reviewable artifacts
- deliver files or artifacts back to the user

The purpose is to know what layer is realistic, not to lock the agent into one method.

## 2. Research Principle
If the topic depends on current, uncertain, or evidence-sensitive information, the agent should gather or verify supporting material before outlining.

If that is not possible, the agent should:
- say the work is source-limited
- rely on user-supplied materials
- avoid overstating certainty
- invite the user to provide additional sources if needed

## 3. Intermediate Artifact Principle
Do not wait until the entire deck is fully expanded before showing work.

Good review points include:
- the research brief
- the outline
- the planning draft
- a small sample of how pages or sections may be expressed

The exact artifact form is intentionally left open. The agent should choose a form that is both useful to the user and realistically supported by the environment.

## 4. Review-Gate Principle
Use explicit confirmation gates when the cost of going in the wrong direction is high.

Examples of high-risk situations:
- external-facing presentations
- management or board communication
- customer or sales decks
- technically dense subjects
- work that depends on live or potentially conflicting facts

In such cases, it is better to pause after structure or sample-level work than to overproduce the wrong deck.

## 5. Fallback Principle
If the environment cannot support the ideal workflow, degrade gracefully.

### When external fact-finding is weak or unavailable
- use the user’s materials as the primary source base
- label assumptions clearly
- do not claim broad research coverage

### When reviewable artifacts are hard to produce
- return the best available structured intermediate output
- explain what could not be previewed or demonstrated

### When file delivery or packaging is limited
- return the most useful achievable form
- make the handoff clear instead of pretending the final packaging exists

## 6. Separation Of Concerns
This skill should guide the agent on:
- when to research
- when to outline
- when to create planning drafts
- when to stop for review
- when to disclose limitations

It should not try to micromanage:
- which tool to call
- which protocol to prefer
- which renderer to use
- which extension or server is “the right one”

Those decisions belong to the agent operating in its real environment.

## 7. Output-Layer Thinking
Think in semantic layers, not implementation details.

Useful layers are:
- research brief
- outline
- planning draft
- sample artifact
- full deck plan
- review notes

An agent may realize these layers in different ways. That is acceptable as long as the user gets the intended value.

## 8. Design Principle
Make the agent behave more like a small presentation team:
- first understand the task
- then ground the content
- then shape the logic
- then plan the pages
- then show a checkpoint
- then expand further if approved

Define the work. Do not overdefine the means.
