# Orkas Awesome AgentSkills

[简体中文](README.zh-CN.md)

This project is a collection of high-quality Orkas agents and skills, continuously being improved.

**Note:** Skills can be used both inside and outside Orkas. Agents can run directly in Orkas with their intended runtime, tools, and routing behavior; outside Orkas, their definitions can still be used as prompt references or adapted to other agent frameworks.

Orkas homepage: https://orkas.ai?source=github<br>
Orkas open-source version: https://github.com/Orkas-AI/Orkas

Current catalog: 26 agents and 48 skills.

## Category Overview

| Category | Directory | Agents | Skills | Scope |
| --- | --- | ---: | ---: | --- |
| [Education](#education) | `education/` | 6 | 8 | Teaching, tutoring, lesson planning, quizzes, and learning materials. |
| [E-commerce](#e-commerce) | `ecommerce/` | 3 | 4 | Product listings, customer support, campaign planning, and store operations. |
| [Product and Engineering](#product-and-engineering) | `product/` | 6 | 15 | PRDs, technical specs, user stories, release notes, and research workflows. |
| [Creation](#creation) | `creation/` | 3 | 8 | Creative direction, drafting, editing, rewriting, visual concepting, and publishing workflows. |
| [Data](#data) | `data/` | 4 | 6 | Data cleaning, spreadsheet analysis, SQL reasoning, metrics, and reports. |
| [Office](#office) | `office/` | 4 | 7 | Documents, slides, meeting notes, email drafts, and daily productivity. |
| [General](#general) | `general/` | 0 | 0 | Research, translation, planning, summarization, and general assistance. |

## Education

### Agents

<table>
  <colgroup>
    <col width="220">
    <col>
  </colgroup>
  <thead>
    <tr>
      <th align="left" width="220">Name</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="220" nowrap><a href="education/agents/FamilyTutor/"><strong>FamilyTutor</strong></a></td>
      <td>A family learning tutor for students, parents, teachers, and family members learning together, covering learning-task routing, parent-child or family communication, homework support boundaries, review planning, habit building, and family reflection; For: &quot;how do I talk to my child about homework procrastination&quot;, &quot;how should our family plan exam review together&quot;, &quot;how can I guide my child through this problem without doing it for them&quot;; Triggers: family learning, parent communication, parent-child communication, family communication, homework support, study habits, review planning, learning report</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="education/agents/LearningTutor/"><strong>LearningTutor</strong></a></td>
      <td>A general interactive learning tutor for concepts, reading materials, ordinary problems, reasoning, and knowledge structure. Use it when the user asks to understand a concept, study a material, work through a problem without direct answers, or organize a topic. Triggers: learning tutoring, concept explanation, Socratic tutoring, help me understand, guided reading, whiteboard explanation, mind map, ordinary problem.</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="education/agents/MathTutor/"><strong>MathTutor</strong></a></td>
      <td>A math learning tutor for K12 and foundational university math, covering explanations, solution checking, process feedback, error analysis, calculation verification, and small targeted practice; For: &quot;help me with this math problem without giving the answer directly&quot;, &quot;check my solution process&quot;, &quot;find my mistake and give me two similar problems&quot;; Triggers: math tutor, math tutoring, worked explanation, math checking, process feedback, error analysis, verification, math practice</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="education/agents/ResearchTutor/"><strong>ResearchTutor</strong></a></td>
      <td>An academic research and thesis tutor for paper discovery, literature reading, evidence research, material organization, research-question focus, paper-structure feedback, and defense preparation; For: &quot;find recent arXiv papers on RAG and tell me what to read&quot;, &quot;my supervisor says my argument is weak; help me unpack it&quot;, &quot;organize these materials into a research thread&quot;; Triggers: research tutor, academic research, paper reading, arXiv, literature review, evidence research, thesis feedback, defense prep</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="education/agents/StudyTutor/"><strong>StudyTutor</strong></a></td>
      <td>Turn a learning goal and key context into a knowledge map, staged plan, review rhythm, practice schedule, and reflection checkpoints; For: &quot;help me learn this field systematically&quot;, &quot;plan my three-month exam prep&quot;, &quot;build a learning path from zero&quot;; Triggers: learning path, study plan, skill tree, exam prep, review rhythm, staged plan, start from zero, learning methods</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="education/agents/TeacherToolkit/"><strong>TeacherToolkit</strong></a></td>
      <td>Generate classroom knowledge structures, retrieval-practice materials, low-stakes quizzes, review notes, and instructional scaffolds for teachers, teaching assistants, and course designers; For: &quot;design a starter and exit ticket for this unit&quot;, &quot;turn this lesson into a knowledge map and teaching script&quot;, &quot;make low-stakes retrieval practice for this topic&quot;; Triggers: teacher toolkit, lesson prep, classroom quiz, exit ticket, starter, retrieval practice, instructional scaffold, review notes</td>
    </tr>
  </tbody>
</table>

### Skills

<table>
  <colgroup>
    <col width="220">
    <col>
  </colgroup>
  <thead>
    <tr>
      <th align="left" width="220">Name</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="220" nowrap><a href="education/skills/homework-quiz-tutor/"><strong>homework-quiz-tutor</strong></a></td>
      <td>Tutor homework problems and run quiz sessions with problem/photo confirmation, progressive hints, answer checking, and session summaries; For: &quot;help me with this homework problem but don&#x27;t just give the answer&quot;, &quot;quiz me on algebra&quot;, &quot;check my work after I finish&quot;; Triggers: homework help, photo problem, problem walkthrough, grading, quiz, practice problems, error diagnosis, hint ladder</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="education/skills/knowledge-map/"><strong>knowledge-map</strong></a></td>
      <td>Turn a course topic, syllabus, lecture notes, or learning materials into a course knowledge map with concept dependencies, key-node explanations, and a learning path; For: &#x27;map this calculus course into a knowledge framework&#x27;, &#x27;build a mind map from this syllabus&#x27;, &#x27;show what to learn first in this course&#x27;; Triggers: knowledge framework, knowledge map, course outline, syllabus map, mind map, key concepts, concept dependency, learning path</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="education/skills/math-tutor/"><strong>math-tutor</strong></a></td>
      <td>Tutor K12 math within grade and curriculum boundaries, including explanations, question generation, grading, error analysis, exam drafts, and learning reports, with verification before feedback and no beyond-grade concepts; For: &quot;explain this concept without going beyond the syllabus&quot;, &quot;grade this middle-school math answer&quot;, &quot;generate practice problems for this concept&quot;; Triggers: math tutoring, K12 math, curriculum aligned, math question generation, math grading, error analysis, exam draft, learning report</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="education/skills/paper-research/"><strong>paper-research</strong></a></td>
      <td>Search ArXiv papers or read a specified arXiv ID/URL, returning paper lists, summaries, classification, contributions, methods, evidence, limitations, and follow-up reading suggestions; For: &quot;find today&#x27;s ArXiv papers on multi-agent systems&quot;, &quot;read this arXiv paper for me&quot;, &quot;summarize recent RAG papers&quot;; Triggers: ArXiv, arxiv id, paper search, latest papers, paper reading, paper summary, research updates, paper</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="education/skills/retrieval-practice/"><strong>retrieval-practice</strong></a></td>
      <td>Generate active-recall questions, revision starters, low-stakes classroom quizzes, and answer notes for a course topic, distinguishing free recall, cued recall, and recognition items; For: &#x27;design retrieval practice for this topic&#x27;, &#x27;make revision starters for class&#x27;, &#x27;create a low-stakes quiz that is not a formal test&#x27;; Triggers: retrieval practice, active recall, recall questions, revision starters, classroom quiz, low-stakes testing, testing effect</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="education/skills/socratic-tutor/"><strong>socratic-tutor</strong></a></td>
      <td>Tutor cross-subject problems, concepts, proofs, and arguments through Socratic questions, targeted hints, and the learner&#x27;s next action; For: &quot;I have no idea how to start this calculus problem&quot;, &quot;help me understand this physics concept&quot;, &quot;do not give the answer, guide me through it&quot;; Triggers: Socratic tutor, subject tutoring, problem explanation, concept learning, proof guidance, hints, no direct answer, step by step</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="education/skills/study-planner/"><strong>study-planner</strong></a></td>
      <td>Plan study pacing, spaced review, checkpoints, check-ins, weekly reports, and adjustments from a learning goal, deadline, current level, daily time budget, and weak areas; For: &quot;make me a 30-day IELTS plan&quot;, &quot;plan my postgraduate entrance exam prep&quot;, &quot;help me review for finals in 14 days&quot;; Triggers: study plan, exam prep, revision plan, IELTS plan, daily schedule, check-in, weekly report, spaced review</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="education/skills/thesis-tutor/"><strong>thesis-tutor</strong></a></td>
      <td>Provide mentor-style thesis and academic paper guidance for topic focus, proposal structure, outline design, supervisor-feedback interpretation, chapter logic diagnosis, research-method framing, and defense preparation; For: &quot;I don&#x27;t know where to start my thesis&quot;, &quot;my supervisor said the argument is weak; help me unpack it&quot;, &quot;prepare defense questions without ghostwriting&quot;; Triggers: thesis tutor, dissertation, proposal, outline, literature review, supervisor feedback, chapter revision, defense prep, research methods</td>
    </tr>
  </tbody>
</table>

## E-commerce

### Agents

<table>
  <colgroup>
    <col width="220">
    <col>
  </colgroup>
  <thead>
    <tr>
      <th align="left" width="220">Name</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="220" nowrap><a href="ecommerce/agents/MerchPageOptimizer/"><strong>MerchPageOptimizer</strong></a></td>
      <td>Optimize e-commerce product pages and conversion assets, including titles, bullets, detail pages, Amazon A+ content, FAQs, hero-image copy, product image prompts, and short-video hooks; useful for listing copy, detail-page improvements, and product creative planning.</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="ecommerce/agents/MerchResearcher/"><strong>MerchResearcher</strong></a></td>
      <td>Evaluate e-commerce product and category opportunities across ASINs, competitors, price bands, profit assumptions, sourcing risks, social buzz, and off-site reputation; useful for product selection, category research, and trend validation.</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="ecommerce/agents/MerchReviewer/"><strong>MerchReviewer</strong></a></td>
      <td>Analyze product reviews, ratings, follow-up reviews, competitor feedback, support feedback, and public social reputation to produce VOC insights, negative-review root causes, pain clusters, evidence snippets, priorities, and page/support/creative improvements.</td>
    </tr>
  </tbody>
</table>

### Skills

<table>
  <colgroup>
    <col width="220">
    <col>
  </colgroup>
  <thead>
    <tr>
      <th align="left" width="220">Name</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="220" nowrap><a href="ecommerce/skills/merch-creative/"><strong>merch-creative</strong></a></td>
      <td>Plan e-commerce merchandise creatives, including main-image and detail-page copy, selling-reason cards, product image prompts, showcase video prompts, video ad scripts, storyboards, CTAs, and A/B tests; For: &quot;write product image copy&quot;, &quot;create image prompts for this item&quot;, &quot;plan a product video ad script&quot;; Triggers: merch creative, product image copy, detail page, product image prompt, product video prompt, video ad, storyboard, ad hook</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="ecommerce/skills/merch-listing/"><strong>merch-listing</strong></a></td>
      <td>Optimize merchandise listings across Taobao, Pinduoduo, Amazon, Shopify, Shopee, and AliExpress, including titles, bullets, descriptions, SEO keywords, FAQs, Amazon A+ content, competitor page audits, and image briefs; For: &quot;write this product listing&quot;, &quot;optimize this product title&quot;, &quot;plan Amazon A+ content&quot;; Triggers: merch listing, product listing, title optimization, bullet points, SEO keywords, Amazon listing, A+ content, page optimization</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="ecommerce/skills/merch-research/"><strong>merch-research</strong></a></td>
      <td>Research merchandise opportunities across Amazon and Chinese commerce platforms, including category viability, price bands, competitor landscape, profit assumptions, sourcing risk, and data-collection plans; For: &quot;analyze whether this item is viable&quot;, &quot;research an e-commerce product opportunity&quot;, &quot;evaluate an Amazon ASIN or China-platform competitors&quot;; Triggers: merch research, product selection, category research, Amazon research, ASIN analysis, China e-commerce research, price comparison, profit estimate</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="ecommerce/skills/merch-review/"><strong>merch-review</strong></a></td>
      <td>Analyze user-uploaded or legally exported e-commerce reviews, ratings, follow-up reviews, and competitor feedback to produce sentiment distribution, negative-review root causes, pain-point clusters, competitor comparisons, improvement actions, and priorities; For: &quot;analyze these product reviews&quot;, &quot;find why customers leave bad reviews&quot;, &quot;compare competitor feedback&quot;; Triggers: merch review, review analysis, negative reviews, VOC, customer feedback, rating data, competitor reviews, reputation analysis</td>
    </tr>
  </tbody>
</table>

## Product and Engineering

### Agents

<table>
  <colgroup>
    <col width="220">
    <col>
  </colgroup>
  <thead>
    <tr>
      <th align="left" width="220">Name</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="220" nowrap><a href="product/agents/GithubMaintainer/"><strong>GithubMaintainer</strong></a></td>
      <td>GitHub project maintenance entry point: triage issues, pull requests, CI, releases, and contributor queues from a maintainer perspective; judge fit, risk, evidence, and next actions. For: &quot;review this PR queue&quot;, &quot;which issues should this repo handle first&quot;, &quot;check release readiness&quot;; Triggers: GitHub maintenance, project maintenance, issue triage, PR triage, CI queue, release readiness, contributor handling, maintainer</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="product/agents/GrowthAdvisor/"><strong>GrowthAdvisor</strong></a></td>
      <td>Product growth strategy entry point: create actionable plans for positioning, CRO, SEO, copy, pricing, launches, ads, email, social, and growth experiments. For: &quot;optimize landing-page conversion&quot;, &quot;design growth experiments&quot;, &quot;plan launch and pricing&quot;, &quot;create SEO/ads/email marketing plans&quot;; Triggers: growth, marketing, CRO, SEO, pricing, launch, ads, copywriting, email marketing, social, growth experiments</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="product/agents/ProductAnalyst/"><strong>ProductAnalyst</strong></a></td>
      <td>Product requirements analysis entry point: turn fuzzy product ideas, user scenarios, business asks, or source materials into requirements ready for PRD and acceptance stages; For: &quot;help me clarify this product idea&quot;, &quot;turn this request into a PRD&quot;, &quot;find the real pain points and acceptance criteria&quot;; Triggers: requirements analysis, product requirements, PRD, idea validation, pain points, user scenarios, acceptance criteria, requirements doc</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="product/agents/ProductDemoBuilder/"><strong>ProductDemoBuilder</strong></a></td>
      <td>Product demo and prototype-validation entry point: quickly turn a product idea into a runnable demo, small tool, single-page app, or MVP validation prototype with minimal acceptance checks and next-step guidance; For: &quot;make a quick demo&quot;, &quot;build a product validation prototype&quot;, &quot;ship a small runnable app&quot;; Triggers: demo, prototype validation, MVP, mini app, quick build, runnable version, vibe coding</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="product/agents/ProductDeveloper/"><strong>ProductDeveloper</strong></a></td>
      <td>Product development entry point: turn clear PRDs, requirements, issues, or designs into technical design, code implementation, tests, and completion verification; For: &quot;implement this PRD&quot;, &quot;turn requirements.md into a runnable system&quot;, &quot;design and build this feature&quot;; Triggers: implement, develop, code, technical design, architecture decision, build from PRD, test verification, engineering delivery</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="product/agents/ProductReviewer/"><strong>ProductReviewer</strong></a></td>
      <td>Product review and retrospective entry point: review an existing feature, MVP, release, experiment, or pre-launch instrumentation plan through metrics, feedback, data quality, and decision framing. For: &quot;write an analytics plan&quot;, &quot;review why this release underperformed&quot;, &quot;decide whether to continue based on experiment results&quot;; Triggers: product review, release retro, instrumentation, event tracking, analytics, data QA, MVP review, experiment results, product metrics, continue or pivot</td>
    </tr>
  </tbody>
</table>

### Skills

<table>
  <colgroup>
    <col width="220">
    <col>
  </colgroup>
  <thead>
    <tr>
      <th align="left" width="220">Name</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="220" nowrap><a href="product/skills/github/"><strong>github</strong></a></td>
      <td>Use GitHub CLI for basic GitHub operations: inspect issues, pull requests, CI runs, releases, and GitHub API data. Use this whenever the user asks to list, view, create, update, or check GitHub repository data.</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="product/skills/github-maintainer/"><strong>github-maintainer</strong></a></td>
      <td>Handle GitHub project queues from a maintainer perspective: triage issues and pull requests, judge fit and risk, check CI/proof/trust signals, and recommend next maintainer actions. Use for GitHub project maintenance, triage, PR queues, issue queues, contributor handling, and selecting safe next work.</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="product/skills/marketing-skills/"><strong>marketing-skills</strong></a></td>
      <td>Load 23 marketing playbooks by scenario and deliver CRO, SEO, copy, ads, pricing, social, and growth checklists plus copy-ready outputs; For: &quot;optimize this landing page conversion&quot;, &quot;build an email sequence&quot;, &quot;plan pricing and paid ads&quot;; Triggers: marketing, CRO, SEO, copywriting, ads, pricing, social</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="product/skills/product-analysis/"><strong>product-analysis</strong></a></td>
      <td>Use for product requirement analysis before PRD writing: validate product or startup ideas, synthesize user research, compare competitors, score opportunity strength, surface hidden assumptions, and decide the next validation step.</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="product/skills/product-dev/"><strong>product-dev</strong></a></td>
      <td>Use for product development work from PRD to implementation, including technical decisions, plan stress-testing, ADRs, spike summaries, engineering breakdown, implementation, debugging, review, and verification.</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="product/skills/product-prd/"><strong>product-prd</strong></a></td>
      <td>Use to write or refine a PRD after product demand is reasonably understood and before acceptance criteria, design handoff, engineering breakdown, or implementation planning.</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="product/skills/product-review/"><strong>product-review</strong></a></td>
      <td>Use for product measurement and evidence-based review after a feature, MVP, release, or experiment exists.</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="product/skills/product-test/"><strong>product-test</strong></a></td>
      <td>Use to turn a PRD section, user story, feature slice, or behavior description into product test scenarios and pass/fail conditions.</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="product/skills/product-ui/"><strong>product-ui</strong></a></td>
      <td>Use to design and implement product UI from PRD, product goals, user flows, or existing app context.</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="product/skills/routerbase-api-integration/"><strong>routerbase-api-integration</strong></a></td>
      <td>Integrate applications with <a href="https://routerbase.com/">routerbase</a> as an OpenAI-compatible model gateway, including SDK migration, base URL setup, streaming, tool calling, JSON mode, and safe API key handling.</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="product/skills/routerbase-model-routing/"><strong>routerbase-model-routing</strong></a></td>
      <td>Plan <a href="https://routerbase.com/">routerbase</a> model selection, fallback chains, cost-aware policies, latency budgets, and rollout validation for AI agent workflows.</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="product/skills/routerbase-media-generation/"><strong>routerbase-media-generation</strong></a></td>
      <td>Build <a href="https://routerbase.com/">routerbase</a> image, audio, speech, and video generation workflows with endpoint selection, retries, polling, asset handling, and safety checks.</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="product/skills/skill-quality-tester/"><strong>skill-quality-tester</strong></a></td>
      <td>Test platform skills for trigger fit, functionality, negative samples, and comparative quality, then produce actionable QA reports; For: &quot;review this skill quality&quot;, &quot;test whether this skill triggers incorrectly&quot;, &quot;QA these skills before publishing&quot;; Triggers: skill QA, quality review, trigger test, negative samples, functionality test, publish check, test report, false trigger</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="product/skills/skill-static-review/"><strong>skill-static-review</strong></a></td>
      <td>Statically review a skill package for structure, coverage, procedural quality, verifier alignment, credibility, and agent compatibility, then produce issues and improvement suggestions; For: &quot;review this skill quality&quot;, &quot;check whether this skill meets release standards&quot;, &quot;audit this skill package against static criteria&quot;; Triggers: skill review, static evaluation, quality audit, release standard, verifier, compatibility, improvement suggestions</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="product/skills/swiftui-dev/"><strong>swiftui-dev</strong></a></td>
      <td>Use for SwiftUI development work, including SwiftUI architecture/refactor, Observation and MV patterns, SwiftUI performance audit, Instruments evidence, and xctrace/Time Profiler hotspot analysis.</td>
    </tr>
  </tbody>
</table>

## Creation

### Agents

<table>
  <colgroup>
    <col width="220">
    <col>
  </colgroup>
  <thead>
    <tr>
      <th align="left" width="220">Name</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="220" nowrap><a href="creation/agents/ContentWriter/"><strong>ContentWriter</strong></a></td>
      <td>Long-form writing and rewriting entrypoint for planning, drafting, revising, humanizing, fact/source auditing, and final content handoff.</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="creation/agents/ImageCreator/"><strong>ImageCreator</strong></a></td>
      <td>Image creation and delivery entrypoint for posters, covers, product visuals, reference-based image design, image editing plans, deterministic local post-processing, review, and final asset handoff.</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="creation/agents/SocialWriter/"><strong>SocialWriter</strong></a></td>
      <td>Social content and publish-prep entrypoint for native posts, optimization, content calendars, response drafts, and visible-browser draft preparation that stops before final publishing.</td>
    </tr>
  </tbody>
</table>

### Skills

<table>
  <colgroup>
    <col width="220">
    <col>
  </colgroup>
  <thead>
    <tr>
      <th align="left" width="220">Name</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="220" nowrap><a href="creation/skills/content-writer/"><strong>content-writer</strong></a></td>
      <td>Unified long-form content writing, rewriting, and audit skill for research-backed articles, blogs, newsletters, tutorials, opinion pieces, outlines, citation organization, voice preservation, natural rewrites, and pre-publish fact/link checks.</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="creation/skills/dreamina/"><strong>dreamina</strong></a></td>
      <td>Execute image or video generation through an already logged-in Jimeng / Dreamina CLI account, including credit checks, async submit/query, task history, text-to-image, image-to-image, text-to-video, image-to-video, multi-frame or multimodal video, and first/last-frame video workflows.</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="creation/skills/image-design/"><strong>image-design</strong></a></td>
      <td>Plan image generation and editing work: creative brief, structured prompts, aspect ratio, style, reference-image strategy, model/tool routing, edit workflow, and acceptance criteria. Use when the user needs an image plan, prompt, provider choice, reference consistency, or edit plan before execution.</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="creation/skills/image-process/"><strong>image-process</strong></a></td>
      <td>Deterministically process local image files: resize, crop, convert format, compress, set quality, strip EXIF, batch-normalize, and preserve originals. Use for existing image files when no semantic AI generation/editing is needed.</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="creation/skills/image-review/"><strong>image-review</strong></a></td>
      <td>Review generated or edited images against the original request: prompt adherence, technical quality, composition, fitness for purpose, text, reference consistency, safety, and copyright risks, with regeneration or edit recommendations.</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="creation/skills/nano-banana/"><strong>nano-banana</strong></a></td>
      <td>Execute Nano Banana / Gemini / Imagen-style image generation or editing through available providers, with provider selection, API-key checks, reference-image upload consent, cost notes, output download, and failure fallback.</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="creation/skills/social-publish/"><strong>social-publish</strong></a></td>
      <td>Use a visible browser to place prepared content into a social platform editor, save a draft, or stop at the pre-publish confirmation page. Supports title, body, tags, topics, images, videos, cover, category, and similar fields. Never clicks final publish automatically.</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="creation/skills/social-writer/"><strong>social-writer</strong></a></td>
      <td>Unified social content skill for Chinese platform drafts, global single posts, existing-draft optimization, content calendars, and comment/complaint/crisis response drafts across Xiaohongshu, WeChat, Zhihu, Douyin/Kuaishou, Weibo, X, LinkedIn, Instagram, and TikTok.</td>
    </tr>
  </tbody>
</table>

## Data

### Agents

<table>
  <colgroup>
    <col width="220">
    <col>
  </colgroup>
  <thead>
    <tr>
      <th align="left" width="220">Name</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="220" nowrap><a href="data/agents/BrandResearcher/"><strong>BrandResearcher</strong></a></td>
      <td>Brand research entry point: use public information about a company, product, or brand to produce Brand DNA covering positioning, target customers, competitors, pricing, brand voice, social proof, online presence, and content gaps; For: &quot;research this brand&quot;, &quot;generate Brand DNA&quot;, &quot;map competitors and brand voice&quot;; Triggers: brand research, Brand DNA, company research, competitors, positioning, brand voice, content gaps, GTM context</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="data/agents/GeneralResearcher/"><strong>GeneralResearcher</strong></a></td>
      <td>General research entry point: plan and execute evidence-based research for complex questions, industries, trends, literature reviews, source verification, and cited reports; For: &quot;deeply research this topic&quot;, &quot;prepare a cited industry research brief&quot;, &quot;systematically analyze the evidence in these materials&quot;; Triggers: deep research, evidence analysis, literature review, trend report, industry research, source verification, research plan</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="data/agents/KnowledgeManager/"><strong>KnowledgeManager</strong></a></td>
      <td>Knowledge-base and material organization entry point: organize links, files, local folders, and scattered materials into knowledge cards, entity links, source records, verification gaps, and optionally save/search Notion or Obsidian; For: &quot;organize these materials&quot;, &quot;save this discussion to Notion&quot;, &quot;extract knowledge cards from this&quot;, &quot;search my Obsidian notes&quot;, &quot;scan this folder and suggest cleanup&quot;; Triggers: material organization, directory organizing, knowledge base, personal knowledge flow, knowledge cards, entity links, save to Notion, Obsidian, note organization, archiving</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="data/agents/SocialResearcher/"><strong>SocialResearcher</strong></a></td>
      <td>Social research entry point: fetch public social discussion, analyze sentiment/reputation samples, calculate social campaign metrics, CTR, ROI, and content performance, then produce traceable next-experiment recommendations; For: &quot;check Reddit reputation for this product&quot;, &quot;analyze recent Xiaohongshu discussion&quot;, &quot;calculate this campaign ROI&quot;; Triggers: social research, social data, sentiment, reputation, buzz, public posts, engagement rate, CTR, ROI, campaign</td>
    </tr>
  </tbody>
</table>

### Skills

<table>
  <colgroup>
    <col width="220">
    <col>
  </colgroup>
  <thead>
    <tr>
      <th align="left" width="220">Name</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="220" nowrap><a href="data/skills/brand-research/"><strong>brand-research</strong></a></td>
      <td>Research public information about a company, product, or brand and produce Brand DNA: positioning, audience, competitors, voice, pricing, social proof, source links, and content gaps; For: &quot;research this brand website&quot;, &quot;generate Brand DNA&quot;, &quot;prepare company brand context&quot;; Triggers: brand research, Brand DNA, company research, competitors, positioning, brand voice, GTM context, content gaps</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="data/skills/deep-research/"><strong>deep-research</strong></a></td>
      <td>Run a reproducible deep-research workflow that produces a research plan, evidence trail, scholarly evidence lookup, citation checks, contradiction analysis, confidence annotations, and APA 7 cited reports; For: &#x27;deeply research this topic&#x27;, &#x27;prepare a cited literature review with methodology&#x27;, &#x27;systematically analyze the evidence for this issue&#x27;; Triggers: deep research, literature review, scholarly evidence, citation verification, evidence analysis, APA citations, research plan, competitive research, trend report</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="data/skills/material-organizer/"><strong>material-organizer</strong></a></td>
      <td>Organize user-provided URLs, PDFs, Word documents, images, text snippets, or local folders with extraction, source tracing, knowledge cards, entity links, deduplication, classification, exception logs, and keyword indexes; For: &quot;organize these links&quot;, &quot;turn these materials into research notes&quot;, &quot;extract knowledge cards from this&quot;, &quot;organize my Downloads folder&quot;; Triggers: material organization, research notes, knowledge cards, personal knowledge flow, entity links, keyword index, folder cleanup</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="data/skills/notion/"><strong>notion</strong></a></td>
      <td>Manage knowledge in a Notion workspace: capture conversations, decisions, FAQs, meeting notes, and process knowledge as Notion pages/database records, or search and synthesize multiple Notion pages into sourced internal documentation; For: &quot;save this to Notion&quot;, &quot;turn this into a Notion decision record&quot;, &quot;search Notion for this topic and create a report&quot;; Triggers: Notion, save to Notion, knowledge base, decision record, FAQ, meeting summary, internal docs, Notion search, synthesis report</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="data/skills/obsidian/"><strong>obsidian</strong></a></td>
      <td>Manage Obsidian knowledge bases: discover vaults, search notes, create/edit Markdown, move/rename notes with wikilink safety, and create Obsidian Web Clipper JSON templates; For: &quot;search my Obsidian notes&quot;, &quot;create an Obsidian note&quot;, &quot;move this note and update links&quot;, &quot;make an Obsidian clipping template&quot;; Triggers: Obsidian, vault, notes, wikilink, Markdown knowledge base, Web Clipper, clipping template, Base</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="data/skills/social-data/"><strong>social-data</strong></a></td>
      <td>Fetch and analyze social media data: collect public posts from Xiaohongshu, X/Twitter, Reddit, YouTube, and Bilibili, or analyze user-provided social/campaign data to calculate engagement rate, CTR, ROI, cost metrics, top/bottom content, and next experiment recommendations; For: &quot;fetch Reddit reputation&quot;, &quot;analyze these Xiaohongshu discussions&quot;, &quot;calculate campaign ROI&quot;; Triggers: social data, sentiment, reputation, buzz, public posts, social analytics, engagement rate, CTR, ROI, campaign performance</td>
    </tr>
  </tbody>
</table>

## Office

### Agents

<table>
  <colgroup>
    <col width="220">
    <col>
  </colgroup>
  <thead>
    <tr>
      <th align="left" width="220">Name</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="220" nowrap><a href="office/agents/DocWriter/"><strong>DocWriter</strong></a></td>
      <td>Document writing and editing entry point: draft, rewrite, review, format, inspect, and prepare Word/DOCX/WPS documents, reports, policies, contract collaboration drafts, and long documents for delivery, with narrow PDF cleanup when needed; For: &quot;write a formal report&quot;, &quot;turn this Word document into a delivery version&quot;, &quot;normalize this WPS document&quot;; Triggers: Word, DOCX, WPS, document, report, policy, contract draft, tracked changes, comments, formatting, table of contents, numbering, PDF export</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="office/agents/ExcelWriter/"><strong>ExcelWriter</strong></a></td>
      <td>Excel writing and workbook delivery entry point: create, organize, edit, formula-build, format, inspect, and prepare Excel/XLSX/CSV/TSV workbooks, reports, budgets, metric tables, trackers, and templates for delivery; For: &quot;make an Excel report&quot;, &quot;turn CSV files into a formula-driven XLSX&quot;, &quot;check this budget workbook&#x27;s formulas and print areas&quot;; Triggers: Excel, XLSX, CSV, TSV, spreadsheet, workbook, formulas, report, budget, metrics, tracker, template</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="office/agents/OfficeWriter/"><strong>OfficeWriter</strong></a></td>
      <td>Office writing and delivery entry point: turn what the user wants to write, edit, organize, or deliver into office-ready documents, spreadsheets, presentations, or PDFs; For: &quot;write an office report&quot;, &quot;turn these materials into Word and PPT&quot;, &quot;edit this office document and check formatting&quot;; Triggers: office materials, write document, edit document, report, Word, Excel, PPT, WPS, PDF, deliverable</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="office/agents/PptMaker/"><strong>PptMaker</strong></a></td>
      <td>PPT creation entry point: create, plan, inspect, and lightly edit presentations from a topic, source materials, drafts, HTML slides, or existing PPTX files; For: &quot;make a PPT&quot;, &quot;start with outline and planning draft&quot;, &quot;convert this HTML slide to editable PPT&quot;, &quot;check this deck for template residue and notes&quot;; Triggers: PPT, PowerPoint, slide, deck, presentation, outline, planning draft, notes, HTML to PPT</td>
    </tr>
  </tbody>
</table>

### Skills

<table>
  <colgroup>
    <col width="220">
    <col>
  </colgroup>
  <thead>
    <tr>
      <th align="left" width="220">Name</th>
      <th align="left">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="220" nowrap><a href="office/skills/html-ppt/"><strong>html-ppt</strong></a></td>
      <td>Convert supported structured HTML slides into editable PPTX files through preset-driven semantic mapping. Use when the user needs native PowerPoint text boxes, shapes, chips, arrows, and panels instead of screenshot export. Not a general arbitrary HTML/CSS renderer.</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="office/skills/make-ppt/"><strong>make-ppt</strong></a></td>
      <td>Guide staged presentation creation: brief clarification, research brief, outline, planning draft, review gates, full deck plan, and final QA. Use for high-quality PPT workflows where the user needs structure and reviewable intermediate artifacts before final slide production.</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="office/skills/nano-pdf/"><strong>nano-pdf</strong></a></td>
      <td>Use the local nano-pdf CLI for page-targeted PDF edits such as changing text, adding watermarks, deleting text, or light rewrites. Requires CLI availability checks, source backup, page-number validation, and output review.</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="office/skills/office-excel/"><strong>office-excel</strong></a></td>
      <td>Create, inspect, and edit Excel / XLSX workbooks with reliable formulas, dates, data types, formatting, validations, pivots, charts, templates, and recalculation. Use for spreadsheet deliverables, workbook cleanup, CSV-to-XLSX conversion, formula models, and Excel-compatible reporting.</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="office/skills/office-ppt/"><strong>office-ppt</strong></a></td>
      <td>Inspect and lightly edit PowerPoint / PPTX decks, including structural reports, leftover template checks, global text replacement, speaker notes edits, slide-layout listing, and simple slide insertion. Use for existing deck QA and small safe edits, not full presentation production.</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="office/skills/office-word/"><strong>office-word</strong></a></td>
      <td>Create, inspect, and edit Word / DOCX documents while preserving styles, numbering, tracked changes, comments, fields, tables, sections, headers, footers, and layout compatibility. Use for Word reports, DOCX edits, redlines, comments, templates, numbering cleanup, and layout-safe document updates.</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="office/skills/wps/"><strong>wps</strong></a></td>
      <td>Handle WPS Office Writer, Spreadsheets, and Presentation workflows for Chinese office users, including creation, editing, review, conversion, compatibility troubleshooting, print setup, and PDF export.</td>
    </tr>
  </tbody>
</table>
