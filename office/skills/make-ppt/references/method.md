# PPT Agent Workflow Method

## Core Thesis
A strong PPT agent is not a one-shot page generator. It behaves more like a small expert team running a workflow:

**需求澄清 → 资料调研 → 大纲规划 → 策划稿 → 设计稿 → 复核**

The reusable value is not one magic prompt. The value is the staged method plus clear hand-offs between stages.

## Distilled Ideas

### 1. Start from questions, not from templates
Bad flows jump from topic to deck. Better flows first ask:
- 给谁看？
- 为什么做？
- 希望对方记住或接受什么？
- 有哪些不能说错的事实？
- 需要多新、多准的调研？

Changing the theme matters less than clarifying the brief.

### 2. Content leads, design follows
The strongest judgment from the source method is:
> PPT 的灵魂是内容，不是皮囊。

Therefore: delay polished visuals until the storyline is sound.

### 3. Add the missing middle layer: 策划稿
Typical tools go from outline straight to styled slides. This workflow inserts a middle artifact:
- each page’s purpose
- the key message
- what evidence supports it
- what visual form fits
- how the page hierarchy should work

This planning draft is one of the biggest practical quality gains.

### 4. Use a layout language the model can understand
The reusable insight is not just “use Bento Grid”. The deeper point is:
- define pages as cards, containers, hierarchy, and spacing
- let content drive layout choice
- give explicit size / spacing / emphasis rules
- avoid rigid template thinking

This works for HTML, SVG, and many slide-generation stacks.

### 5. Prefer structured outputs between stages
The outline should often be JSON. The planning draft may be markdown or JSON. Final pages may be HTML or SVG.

A good chain looks like:
- brief notes → research brief
- research brief → outline JSON
- outline JSON → planning draft
- planning draft → HTML/SVG sample pages
- approved sample direction → broader generation

## Agent Cooperation Principle
This skill should not assume one specific agent. It should cooperate with whatever the installing agent already has.

### If the agent has strong tools
Use them proactively:
- web search
- browser
- webpage fetch
- MCP research tools
- render/export tools

### If the agent lacks tools
Degrade gracefully:
- rely on user-supplied materials
- stop at outline or planning draft if needed
- explain what capability is missing
- suggest categories of tools/MCPs the user may install if they want deeper automation

## Why this belongs in a skill
This is procedural knowledge:
- when to ask questions
- when to research
- when to stop for review
- what each intermediate artifact should look like
- how to choose output layers based on capabilities

That is exactly what a reusable skill should encode.

## Suggested Deliverables
Depending on the task, stop at one of these layers:
1. **research brief**
2. **outline only**
3. **planning draft / 策划稿**
4. **sample slide visuals**
5. **full deck plan**
6. **review notes**

## Quality Bar
A good run of this skill should produce:
- a deck with a clear argument
- fewer decorative but empty slides
- better fact grounding when research exists
- better controllability through planning drafts
- mid-state artifacts that users can review before scaling up
- less generic “AI PPT” flavor from blind template stuffing
