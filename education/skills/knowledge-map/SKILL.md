---
name: knowledge-map
description_zh: "把课程主题、教材目录、讲义或学习材料整理成课程知识地图、概念依赖关系、重点节点讲解和学习路线；适合\"帮我把高数梳理成知识框架\"\"根据教材目录生成思维导图\"\"这门课先学什么再学什么\"；触发词：知识框架、知识地图、课程脉络、教材目录、思维导图、核心知识点、概念依赖、学习路线"
description_en: "Turn a course topic, syllabus, lecture notes, or learning materials into a course knowledge map with concept dependencies, key-node explanations, and a learning path; For: 'map this calculus course into a knowledge framework', 'build a mind map from this syllabus', 'show what to learn first in this course'; Triggers: knowledge framework, knowledge map, course outline, syllabus map, mind map, key concepts, concept dependency, learning path"
category: "education"
---

# knowledge-map

Guide-and-script skill for building course knowledge maps. Use it to turn a course topic, syllabus, textbook outline, notes, or teaching materials into a structured framework, key concept explanations, concept dependencies, and optional Markdown / Markmap / Mermaid / OPML / HTML outputs.

This skill is not a tutor, homework helper, practice-question generator, or long-term study planner. It organizes what a course contains and how concepts relate; it does not teach a live lesson, solve exercises, generate full quizzes, or schedule a study calendar.

## When to use

Use this skill when the user asks for:

- A course knowledge framework, knowledge map, concept map, syllabus map, or mind map.
- A structured outline from a textbook table of contents, course notes, lecture slides, Markdown, DOCX, or pasted text.
- Key concepts, prerequisite relationships, course learning order, or "what should I learn first?"
- A compact framework plus deeper explanations of selected nodes.
- Exportable course maps in Markdown, Markmap, Mermaid, OPML, or an HTML report.

Do not use this skill for:

- One-off concept tutoring or Socratic explanation.
- Homework solving, answer checking, or quiz sessions.
- Creating retrieval-practice question sets.
- Full study schedules, reminders, check-ins, or weekly plans.
- Multi-course comparison in one pass. Ask the user to split by course.
- Video/audio processing. Ask the user to provide text, transcript, outline, or notes first.

## How to call

1. Identify the input mode:
   - `topic_only`: the user provides only a course topic.
   - `material_first`: the user provides syllabus/notes/materials but no strong topic.
   - `hybrid`: the user provides both topic and materials.

2. If the request is `topic_only` for a broad common course, warn that the map will be AI-inferred and ask whether the user wants to continue, provide materials, or cancel.

3. Ask whether the user wants a compact map, key-node explanations, or deeper node explanations when the requested depth is unclear.
   Default to compact map plus key-node explanations when materials are available.

4. For structured file/material input, create an `input.json` matching `references/input-schema.md`.
   Use `scripts/validate_input.py` to validate mode, depth, preferences, and warnings.

5. When materials are Markdown, TXT, pasted text, or DOCX, use `scripts/parse_outline.py` to extract the heading stream before building the map.
   If the parser rejects the material type or finds no headings, ask for cleaner text or continue in topic-only mode only after user confirmation.

6. Generate the knowledge tree with `references/framework-rubric.md` and `references/prompt-templates.md`.
   Keep total nodes at or below 100 and levels at or below 5. Use one root node and stable node ids such as `n0`, `n1`, `n1.1`, and `n1.1.1`.

7. For guided/deep outputs, choose 5-10 high-value nodes unless the user requested a specific focus.
   Write useful explanations, examples, core points, and common confusions. Do not add explanations when the user asked for a map only.

8. For concept dependencies, use `references/concept-dependency-taxonomy.md`.
   Output only concrete, useful relations. Avoid vague links such as "A and B are related." Keep relation count within the configured budget.

9. Assemble and validate structured output with `scripts/assemble_result.py`.
   Use `references/output-schema.md` as the contract.

10. When user materials are available, run `scripts/verify_provenance.py`.
    If many user-material nodes fail provenance matching, pause and ask whether to provide better materials, accept AI-inferred labels, or narrow the material range.

11. Render requested formats with `scripts/render_outputs.py`.
    Default to Markdown plus Markmap when the user does not specify a format. Offer HTML only when useful for browsing or sharing.

## Return format

For a clarification or safety checkpoint:

```markdown
**Knowledge Map Scope**
- Course/topic:
- Input mode:
- Depth:
- Output formats:
- Risk/limit:

**Please choose**
1. Continue with AI-inferred map
2. Provide syllabus/notes first
3. Narrow the course scope
```

For a normal response:

```markdown
**Knowledge Map**
- Course:
- Source mode:
- Depth:
- Nodes:
- Outputs:

**Framework overview**
[course tree]

**Key nodes**
[guided explanations when requested]

**Concept dependencies**
[typed dependency table when requested]

**Learning route**
[what to learn first, what depends on what, and where to review]

**Files**
- [generated files, if rendered]
```

For script-backed workflows, include the generated output directory and the key files:

```markdown
**Generated files**
- `result.json`
- `framework.md`
- `framework.markmap.html`
- `framework.mermaid.md`
- `framework.opml`
- `concept-dependencies.md`
- `provenance-audit.json`
- `report.html` when requested
```

## External dependencies

- Python 3 standard library for included scripts.
- No fixed third-party Python packages are required by the included scripts.
- Markmap HTML uses CDN loading when rendered by `scripts/render_outputs.py`; if CDN is unavailable, provide Markdown or Mermaid as the stable fallback.
- The current environment must be able to read user-provided local files before file-backed parsing can run.

## Limits and known issues

- Topic-only maps are AI-inferred and may omit or mis-order course content. Always label this clearly.
- The skill handles one course per run. Split multiple courses into separate maps.
- Keep generated maps at or below 100 nodes and 5 levels unless the user explicitly agrees to split the course.
- PDF/image/webpage/audio/video inputs require preprocessed text or a reliable extractor outside the core script set.
- Do not silently continue when OCR or parsed outline quality is poor.
- Do not promise that the map matches a specific curriculum unless the user supplies that syllabus or textbook outline.
- Do not expose internal audit terms such as n-gram match or provenance failure in user-facing reports unless the user asks for the audit details.

## Full examples

### Example 1: Topic-only framework

User:

```text
Help me make a knowledge framework for linear algebra.
```

Assistant should:

1. Warn that no syllabus was provided, so the map will be AI-inferred.
2. Ask whether to continue, provide materials, or narrow the topic.
3. If the user continues, produce a compact framework and clearly label it as inferred.

### Example 2: Syllabus to map

User:

```text
Here is my machine learning syllabus. Turn it into a mind map and tell me what to learn first.
```

Assistant should:

1. Parse the syllabus headings.
2. Build a material-first course tree.
3. Add key-node explanations for high-value concepts.
4. Add prerequisite dependencies if useful.
5. Render Markdown and Markmap outputs.

### Example 3: Focused concept dependencies

User:

```text
Map the dependencies among calculus limits, derivatives, integrals, series, and differential equations.
```

Assistant should:

1. Treat this as a focused topic-only map.
2. Keep node count small.
3. Emphasize prerequisite and application relations.
4. Explain why each dependency matters for learning order.
