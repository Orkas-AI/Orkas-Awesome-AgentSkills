# Orkas Awesome AgentSkills

[English](README.md)

本项目是 Orkas 优质 agent 与 skill 的集合，在持续完善中。

**注意：** Skill 在 Orkas 内外均可使用。Agent 在 Orkas 中可以直接运行，并获得对应的运行时、工具能力和路由行为；在 Orkas 外也可以作为提示词参考，或按需改造成其他 agent 框架的配置。

Orkas 主页：https://orkas.ai?source=github<br>
Orkas 开源版本：https://github.com/Orkas-AI/Orkas

## 分类总览

| 分类 | 目录 | 适用范围 |
| --- | --- | --- |
| [教育](#教育) | `education/` | 教学、辅导、教案、题目生成、学习材料等。 |
| [电商](#电商) | `ecommerce/` | 商品详情、客服话术、活动策划、店铺运营等。 |
| [产研](#产研) | `product/` | PRD、技术方案、用户故事、发布说明、需求研究等。 |
| [创作](#创作) | `creation/` | 创意策划、起草、润色、改写、视觉构思、发布流程等。 |
| [数据](#数据) | `data/` | 数据清洗、表格分析、SQL 推理、指标解读、数据报告等。 |
| [办公](#办公) | `office/` | 文档、幻灯片、会议纪要、邮件草稿、日常效率等。 |
| [通用](#通用) | `general/` | 检索、翻译、规划、总结、决策辅助等通用任务。 |

## 教育

### Agents

<table>
  <colgroup>
    <col width="220">
    <col>
  </colgroup>
  <thead>
    <tr>
      <th align="left" width="220">名称</th>
      <th align="left">简介</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="220" nowrap><a href="education/agents/FamilyTutor/"><strong>FamilyTutor</strong></a></td>
      <td>家庭学习导师，面向学生、家长、教师和共同学习的家庭成员，负责学习场景路由、亲子/家庭沟通、作业辅导边界、复习规划、习惯建设和家庭复盘；适合&quot;孩子写作业总拖延怎么沟通&quot;&quot;家里一起备考怎么安排&quot;&quot;这道题孩子不会，怎么引导他自己做&quot;；触发词：家庭学习、家长沟通、亲子沟通、家庭沟通、作业辅导、学习习惯、复习规划、学习报告</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="education/agents/LearningTutor/"><strong>LearningTutor</strong></a></td>
      <td>通用学习互动辅导入口，围绕概念理解、材料研读、普通题目、论证推理和知识结构进行苏格拉底式引导；适合&quot;教我理解这个概念&quot;&quot;带我读懂这份材料&quot;&quot;这道题我卡住了，别直接给答案&quot;&quot;帮我梳理这个知识点&quot;；触发词：学习辅导、概念讲解、苏格拉底、带我理解、材料研读、白板讲解、思维导图、普通题目</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="education/agents/MathTutor/"><strong>MathTutor</strong></a></td>
      <td>数学学习导师，面向 K12 和基础大学数学，负责讲题、检查解答、过程评分、错因分析、验算和少量针对性练习；适合&quot;这道数学题我不会，别直接给答案&quot;&quot;帮我批改这份解题过程&quot;&quot;给我找出错因并出两道类似题&quot;；触发词：数学导师、数学辅导、讲题、数学批改、过程评分、错因分析、验算、数学练习</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="education/agents/ResearchTutor/"><strong>ResearchTutor</strong></a></td>
      <td>研究与论文流程导师，帮助论文发现、文献阅读、证据研究、资料整理、研究问题聚焦、论文结构反馈和答辩准备；适合&quot;查一下最近 RAG 的 arXiv 论文并告诉我该读哪些&quot;&quot;导师说我的论文论证不够，帮我拆解&quot;&quot;帮我整理这些资料形成研究脉络&quot;；触发词：研究导师、论文研究、文献阅读、arXiv、文献综述、证据研究、论文反馈、答辩准备</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="education/agents/StudyTutor/"><strong>StudyTutor</strong></a></td>
      <td>把学习目标和关键上下文整理成知识地图、阶段计划、复习节奏、练习安排和复盘检查点；适合&quot;我想系统学习一个领域&quot;&quot;三个月备考怎么安排&quot;&quot;从零开始帮我搭学习路径&quot;；触发词：学习路径、学习计划、技能树、备考规划、复习节奏、阶段计划、从零学习、学习方法</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="education/agents/TeacherToolkit/"><strong>TeacherToolkit</strong></a></td>
      <td>面向教师、助教和课程设计者生成课堂知识结构、主动回忆材料、低风险小测、讲评要点和教学支架；适合&quot;给这个单元设计课堂 starter 和 exit ticket&quot;&quot;把这节课整理成知识地图和讲评脚本&quot;&quot;为这个知识点做一组低风险 retrieval practice&quot;；触发词：教师工具箱、备课、课堂小测、exit ticket、starter、主动回忆、教学支架、讲评要点</td>
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
      <th align="left" width="220">名称</th>
      <th align="left">简介</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="220" nowrap><a href="education/skills/homework-quiz-tutor/"><strong>homework-quiz-tutor</strong></a></td>
      <td>提供作业题引导辅导、拍照/贴题确认、逐级提示、答题验算和测验模式，输出分步引导、即时反馈、错因诊断和本轮测验总结；适合&quot;帮我讲这道作业题但别直接给答案&quot;&quot;quiz me on algebra&quot;&quot;我做完了帮我批改一下&quot;；触发词：作业辅导、拍照题、讲题、批改、quiz、测验、practice problems、错因诊断、逐级提示</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="education/skills/knowledge-map/"><strong>knowledge-map</strong></a></td>
      <td>把课程主题、教材目录、讲义或学习材料整理成课程知识地图、概念依赖关系、重点节点讲解和学习路线；适合&quot;帮我把高数梳理成知识框架&quot;&quot;根据教材目录生成思维导图&quot;&quot;这门课先学什么再学什么&quot;；触发词：知识框架、知识地图、课程脉络、教材目录、思维导图、核心知识点、概念依赖、学习路线</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="education/skills/math-tutor/"><strong>math-tutor</strong></a></td>
      <td>按 K12 年级和教材边界辅导数学讲解、出题、批改、错因分析、试卷草案和学情报告，要求先验算再反馈并避免超纲；适合&quot;用不超纲的方式讲这个概念&quot;&quot;帮我批改这道初中数学题&quot;&quot;按这个知识点出几道练习题&quot;；触发词：数学辅导、K12数学、教材同步、数学出题、数学批改、错因分析、试卷草案、学情报告</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="education/skills/paper-research/"><strong>paper-research</strong></a></td>
      <td>检索 ArXiv 论文或读取指定 arXiv ID/URL，输出论文列表、摘要、分类、贡献、方法、证据、局限和后续阅读建议；适合&quot;查一下今天 ArXiv 上关于多智能体的论文&quot;&quot;帮我读这篇 arXiv 论文&quot;&quot;总结最近 RAG 的新论文&quot;；触发词：ArXiv、arxiv id、论文搜索、最新论文、论文阅读、论文摘要、研究进展、paper</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="education/skills/retrieval-practice/"><strong>retrieval-practice</strong></a></td>
      <td>为课程主题生成主动回忆题、复习启动题、低风险课堂小测和答案讲评要点，区分自由回忆、线索回忆和识别题；适合&quot;给这个知识点设计 retrieval practice&quot;&quot;帮我出一组课堂复习启动题&quot;&quot;做一个低风险小测但不要变成正式考试&quot;；触发词：retrieval practice、主动回忆、提取练习、复习题、课堂小测、低风险测验、测试效应</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="education/skills/socratic-tutor/"><strong>socratic-tutor</strong></a></td>
      <td>用苏格拉底式提问辅导通用学科题目、概念、证明和论证，输出引导问题、关键提示和下一步动作；适合&quot;这道高数题我没思路&quot;&quot;帮我理解这个物理概念&quot;&quot;不要直接给答案，带我推一下&quot;；触发词：苏格拉底、学科辅导、题目讲解、概念理解、证明拆解、引导提示、不要直接给答案、一步步推</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="education/skills/study-planner/"><strong>study-planner</strong></a></td>
      <td>根据学习目标、截止日、当前水平、每日可用时长和薄弱项安排学习节奏、复习间隔、检查点、打卡反馈、周报和计划调整；适合&quot;帮我制定雅思30天计划&quot;&quot;给我排一个考研复习计划&quot;&quot;期末还有14天怎么复习&quot;；触发词：学习计划、备考计划、复习计划、雅思计划、考研计划、期末复习、打卡、间隔复习</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="education/skills/thesis-tutor/"><strong>thesis-tutor</strong></a></td>
      <td>提供毕业论文与学术论文的导师式辅导，帮助选题聚焦、开题结构、大纲搭建、导师反馈拆解、章节逻辑诊断、研究方法梳理和答辩准备；适合&quot;论文不会写从哪开始&quot;&quot;导师反馈说论证不够帮我拆解&quot;&quot;帮我准备答辩问题但不要代写&quot;；触发词：论文导师、毕业论文、开题报告、论文大纲、文献综述、导师反馈、章节修改、答辩准备、研究方法</td>
    </tr>
  </tbody>
</table>

## 电商

### Agents

<table>
  <colgroup>
    <col width="220">
    <col>
  </colgroup>
  <thead>
    <tr>
      <th align="left" width="220">名称</th>
      <th align="left">简介</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="220" nowrap><a href="ecommerce/agents/MerchPageOptimizer/"><strong>MerchPageOptimizer</strong></a></td>
      <td>优化电商商品页和转化素材，包括标题、卖点、bullet、详情页、Amazon A+、FAQ、主图文案、商品图 prompt 和短视频 hook；适合写 listing、优化详情页、规划主图文案或商品短视频方向。</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="ecommerce/agents/MerchResearcher/"><strong>MerchResearcher</strong></a></td>
      <td>评估电商商品和类目机会，梳理 ASIN、竞品、价格带、利润假设、供应链风险、社媒热度和站外口碑；适合判断商品能不能做、分析类目机会或验证小红书/TikTok 热门品。</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="ecommerce/agents/MerchReviewer/"><strong>MerchReviewer</strong></a></td>
      <td>分析商品评论、评分、追评、竞品评价、客服反馈和公开社媒口碑，输出 VOC、差评归因、痛点聚类、证据片段、改进优先级以及页面/客服/创意优化建议。</td>
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
      <th align="left" width="220">名称</th>
      <th align="left">简介</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="220" nowrap><a href="ecommerce/skills/merch-creative/"><strong>merch-creative</strong></a></td>
      <td>为电商商品规划主图/详情页视觉文案、必卖理由、商品广告图 prompt、产品展示视频 prompt、视频广告脚本、分镜、CTA 和 A/B 测试方案；适合&quot;做商品主图文案&quot;&quot;写产品图生图 prompt&quot;&quot;规划商品短视频广告脚本&quot;；触发词：商品创意、主图文案、详情页、商品图prompt、产品视频prompt、视频广告、分镜脚本、广告hook</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="ecommerce/skills/merch-listing/"><strong>merch-listing</strong></a></td>
      <td>为淘宝、拼多多、Amazon、Shopify、Shopee、AliExpress 等平台优化商品上架页面：标题、卖点、bullet、详情描述、SEO 关键词、FAQ、Amazon A+、竞品页面诊断和图片 brief；适合&quot;帮我写商品 listing&quot;&quot;优化这个商品标题&quot;&quot;规划 Amazon A+ 页面&quot;；触发词：商品上架、商品标题、listing、卖点、SEO关键词、Amazon Listing、A+ Content、页面优化</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="ecommerce/skills/merch-research/"><strong>merch-research</strong></a></td>
      <td>为 Amazon、淘宝、京东、拼多多、抖音、1688 等平台做商品选品、类目机会、价格带、竞品格局、利润测算、供应链风险和数据采集方案；适合&quot;分析这个商品能不能做&quot;&quot;帮我做电商选品调研&quot;&quot;评估 Amazon ASIN 或国内平台竞品&quot;；触发词：商品选品、类目研究、市场调研、Amazon选品、ASIN分析、国内电商调研、价格对比、利润测算</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="ecommerce/skills/merch-review/"><strong>merch-review</strong></a></td>
      <td>分析用户上传或合法导出的电商评论、评分、追评和竞品评价数据，输出情感分布、差评归因、痛点聚类、竞品评论对比、页面/客服/商品改进建议和优先级；适合&quot;分析这批商品评论&quot;&quot;找差评原因&quot;&quot;对比竞品用户反馈&quot;；触发词：商品评论、评论分析、差评归因、VOC、用户反馈、评价数据、竞品评论、口碑分析</td>
    </tr>
  </tbody>
</table>

## 产研

### Agents

<table>
  <colgroup>
    <col width="220">
    <col>
  </colgroup>
  <thead>
    <tr>
      <th align="left" width="220">名称</th>
      <th align="left">简介</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="220" nowrap><a href="product/agents/GithubMaintainer/"><strong>GithubMaintainer</strong></a></td>
      <td>GitHub 项目维护入口：从维护者视角分诊 issue、PR、CI、release 和贡献者队列，判断适配度、风险、证据和下一步动作；适合&quot;帮我看这个 PR 队列&quot;&quot;这个仓库有哪些 issue 该先处理&quot;&quot;准备 release 前帮我检查&quot;；触发词：GitHub维护、项目维护、issue分诊、PR分诊、CI队列、release准备、贡献者处理、maintainer</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="product/agents/GrowthAdvisor/"><strong>GrowthAdvisor</strong></a></td>
      <td>产品增长策略入口：围绕定位、CRO、SEO、文案、定价、发布、投放、邮件、社媒和增长实验制定可执行方案；适合&quot;帮我优化落地页转化&quot;&quot;设计增长实验&quot;&quot;规划产品发布和定价&quot;&quot;做 SEO/投放/邮件营销方案&quot;；触发词：增长、营销、CRO、SEO、定价、发布、投放、文案、邮件营销、社媒、增长实验</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="product/agents/ProductAnalyst/"><strong>ProductAnalyst</strong></a></td>
      <td>产品需求分析入口：把模糊产品想法、用户场景、业务诉求或已有材料梳理成可进入 PRD 和验收阶段的需求文档；适合&quot;我有个产品想法帮我想清楚&quot;&quot;把这个需求整理成 PRD&quot;&quot;帮我挖一下真实痛点和验收标准&quot;；触发词：需求分析、产品需求、PRD、想法验证、痛点、用户场景、验收标准、需求文档</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="product/agents/ProductDemoBuilder/"><strong>ProductDemoBuilder</strong></a></td>
      <td>产品 demo 和原型验证入口：把产品想法做成可运行 demo、小工具、单页应用或 MVP 验证原型，并保留最小验收和后续扩展建议；适合&quot;先做个 demo 跑通&quot;&quot;快速搭个产品原型验证&quot;&quot;做一个能试用的小应用&quot;；触发词：demo、原型验证、MVP、小应用、快速试做、跑通、vibe coding、可运行版本</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="product/agents/ProductDeveloper/"><strong>ProductDeveloper</strong></a></td>
      <td>产品正式开发入口：把明确 PRD、requirements、issue 或设计稿落成技术方案、代码实现、测试和完成验证；适合&quot;按这份 PRD 实现&quot;&quot;把 requirements.md 做成可跑系统&quot;&quot;帮我设计并开发这个功能&quot;；触发词：实现、开发、编码、技术方案、架构决策、按 PRD 开发、测试验证、工程落地</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="product/agents/ProductReviewer/"><strong>ProductReviewer</strong></a></td>
      <td>产品评审与复盘入口：对已有功能、MVP、版本、实验或上线前埋点方案做指标、反馈、数据质量和决策复盘；适合&quot;帮我写埋点方案&quot;&quot;这个版本上线后数据不好帮我复盘&quot;&quot;根据实验结果判断要不要继续&quot;；触发词：产品复盘、产品评审、埋点、事件追踪、analytics、数据验收、发布复盘、MVP复盘、实验结果、产品指标、继续转向</td>
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
      <th align="left" width="220">名称</th>
      <th align="left">简介</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="220" nowrap><a href="product/skills/github/"><strong>github</strong></a></td>
      <td>使用 GitHub CLI 进行基础 GitHub 操作：查询 issue、PR、CI run、release 和 GitHub API；适合用户要求列出、查看、创建、更新或检查 GitHub 仓库数据时使用。</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="product/skills/github-maintainer/"><strong>github-maintainer</strong></a></td>
      <td>从维护者视角处理 GitHub 项目队列：分诊 issue/PR、判断适配度与风险、核对 CI/证据/信任信号，并给出下一步维护动作；适合 GitHub 项目维护、triage、PR 队列、issue 队列、贡献者处理和可安全推进项筛选。</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="product/skills/marketing-skills/"><strong>marketing-skills</strong></a></td>
      <td>按营销场景读取 23 个营销实战模块，输出 CRO、SEO、文案、投放、定价、社交等清单与可复制交付物；适合&quot;帮我优化落地页转化&quot;&quot;给我做一套邮件营销序列&quot;&quot;规划一下产品定价和投放策略&quot;；触发词：营销、CRO、SEO、文案、投放、定价、社交</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="product/skills/product-analysis/"><strong>product-analysis</strong></a></td>
      <td>用于 PRD 之前的产品需求分析：验证产品/创业想法，综合用户研究，分析竞品，评估机会强度，暴露隐藏假设，并给出下一步验证建议；适合&quot;这个产品方向值不值得做&quot;&quot;帮我做产品需求分析&quot;&quot;整理这些用户访谈&quot;&quot;分析竞品和机会点&quot;&quot;挑战一下这个产品假设&quot;；触发词：产品需求分析、想法验证、用户研究、访谈综合、竞品分析、机会评估、PCV、设计伙伴、隐藏假设</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="product/skills/product-dev/"><strong>product-dev</strong></a></td>
      <td>用于产品研发从 PRD 到实现验证的完整流程：技术方案决策、方案追问审查、ADR/技术预研总结、研发拆解、文件/模块级实现计划、编码变更、TDD、系统化调试、代码评审和完成前验证；适合&quot;把 PRD 变成开发任务并实现&quot;&quot;拆解并开发这个功能&quot;&quot;挑战一下这个技术方案&quot;&quot;grill me 一下实现计划&quot;&quot;记录技术选型&quot;&quot;总结 POC/spike&quot;&quot;修 bug&quot;&quot;做开发收尾验证&quot;；触发词：产品研发、开发、研发计划、技术方案、方案审查、grill me、隐藏假设、架构决策、ADR、技术预研、spike、POC总结、编码、TDD、调试、代码评审、完成验证</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="product/skills/product-prd/"><strong>product-prd</strong></a></td>
      <td>用于在产品需求已基本明确后编写或优化 PRD / 产品需求文档，并在验收标准、设计交接、研发拆解和实施计划之前形成清晰交接；适合&quot;帮我写 PRD&quot;&quot;整理产品需求文档&quot;&quot;把这个功能写成研发可读的需求&quot;&quot;定义范围边界、目标指标、功能需求、非功能要求、依赖风险和里程碑&quot;；触发词：PRD、产品需求、需求文档、范围边界、研发交接、成功指标、非功能需求、开放问题</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="product/skills/product-review/"><strong>product-review</strong></a></td>
      <td>用于已有产品方向、功能、MVP、版本或实验后的产品评审与数据决策：上线前制定埋点和数据验收方案，上线后复盘指标、反馈和实验结果，并给出继续、转向、停止或重构建议；适合&quot;帮我写埋点方案&quot;&quot;设计事件追踪&quot;&quot;做数据验收清单&quot;&quot;做发布复盘&quot;&quot;复盘 MVP&quot;&quot;根据实验结果判断要不要继续&quot;；触发词：产品评审、埋点、事件追踪、analytics、数据验收、发布复盘、MVP复盘、实验结果、产品指标、继续转向</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="product/skills/product-test/"><strong>product-test</strong></a></td>
      <td>用于将 PRD 片段、用户故事、功能切片或行为描述转成产品测试场景和通过/失败条件；适合&quot;给这个需求写产品测试&quot;&quot;给这个需求写验收标准&quot;&quot;把这个 story 转成 Given/When/Then&quot;&quot;补齐 QA 可测场景、边界条件、错误状态和非功能验收&quot;；触发词：产品测试、验收测试、验收标准、Given When Then、QA交接、测试场景、用户故事、边界条件、错误状态、通过条件</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="product/skills/product-ui/"><strong>product-ui</strong></a></td>
      <td>用于根据 PRD、产品目标、用户流程或现有应用上下文设计并实现产品 UI；适合&quot;做这个功能的界面&quot;&quot;实现一个前端页面&quot;&quot;把 PRD 转成 UI&quot;&quot;做一个像 Stripe/Linear/Vercel 的界面&quot;&quot;优化布局、组件、响应式和 A11y&quot;；触发词：产品UI、UI实现、前端界面、页面设计、组件设计、设计系统、品牌风格、响应式、A11y、视觉优化</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="product/skills/skill-quality-tester/"><strong>skill-quality-tester</strong></a></td>
      <td>对平台技能做触发、功能、负样本和对比质量测试，输出可修复的质量报告；适合&quot;帮我 review 这个 skill 质量&quot;&quot;测试这个 skill 会不会误触发&quot;&quot;给这些 skill 做上线前质检&quot;；触发词：skill质检、质量review、触发测试、负样本、功能测试、上线前检查、测试报告、误触发</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="product/skills/skill-static-review/"><strong>skill-static-review</strong></a></td>
      <td>静态审核 skill 包的结构、覆盖度、过程质量、验证器对齐、可信度和 Agent 兼容性，并输出问题清单与改进建议；适合&quot;帮我评审这个 skill 质量&quot;&quot;检查这个 skill 是否达到发布标准&quot;&quot;根据静态标准审核 skill 包&quot;；触发词：skill评审、静态评估、质量审核、发布标准、verifier、兼容性、改进建议</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="product/skills/swiftui-dev/"><strong>swiftui-dev</strong></a></td>
      <td>用于 SwiftUI 开发专项：审查和重构 SwiftUI View 结构、Observation、MV 模式、依赖边界和 ViewModel 选择；审计 SwiftUI 渲染、状态更新、滚动、布局和 Instruments 证据；或用 xctrace / Time Profiler CLI 脚本采样、导出、符号化并排序 macOS/iOS 原生热点；适合&quot;重构这个 SwiftUI View&quot;&quot;检查 SwiftUI 架构&quot;&quot;SwiftUI 页面为什么卡&quot;&quot;根据 Instruments trace 找热点&quot;&quot;用 xctrace 分析原生 App 性能&quot;；触发词：SwiftUI 开发、SwiftUI 架构、View 重构、Observation、MV、ViewModel、SwiftUI 性能、Instruments、Time Profiler、xctrace、卡顿、掉帧、hang、hitch、body 更新</td>
    </tr>
  </tbody>
</table>

## 创作

### Agents

<table>
  <colgroup>
    <col width="220">
    <col>
  </colgroup>
  <thead>
    <tr>
      <th align="left" width="220">名称</th>
      <th align="left">简介</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="220" nowrap><a href="creation/agents/ContentWriter/"><strong>ContentWriter</strong></a></td>
      <td>长文内容写作与改写入口：处理选题规划、资料型文章、初稿、结构重写、文风自然化、发布前事实/来源核验和交付整理。适合“写一篇文章”“把这段改自然”“检查这篇稿子有没有事实问题”。触发词：写文章、改写、润色、去 AI 味、内容核验、长文、公众号稿、博客。</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="creation/agents/ImageCreator/"><strong>ImageCreator</strong></a></td>
      <td>图像创作与交付入口：把海报、封面、产品图、角色/风格参考、图片编辑和本地后处理需求转成可执行方案、生成/编辑任务、结果评审和交付文件。适合“帮我生成一组产品海报”“根据参考图做同风格图片”“这张图去背景并转 webp”。触发词：生图、图片设计、海报、参考图、同风格、图片编辑、去背景、转格式。</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="creation/agents/SocialWriter/"><strong>SocialWriter</strong></a></td>
      <td>社媒内容生产与发布准备入口：处理平台原生成稿、已有稿优化、内容日历、评论/危机回应草案，以及把已确认内容填入平台草稿或停在发布前确认页。适合“小红书写一篇”“优化这条 LinkedIn”“做一周内容日历”“帮我填到公众号草稿”。触发词：社媒、小红书、微博、公众号、X、LinkedIn、Instagram、TikTok、内容日历、评论回复、发布草稿。</td>
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
      <th align="left" width="220">名称</th>
      <th align="left">简介</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="220" nowrap><a href="creation/skills/content-writer/"><strong>content-writer</strong></a></td>
      <td>写作、改写和审核长文内容的统一入口：支持研究型文章、博客、newsletter、教程、观点文、提纲、引用整理、作者声音保留、去 AI 味润色和发布前事实/链接核验；适合“写一篇有引用的文章”“改得更自然”“发布前检查引用”；触发词：写文章、长文写作、研究写作、文章提纲、引用、改写、去 AI 味、润色、事实核查、发布前检查</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="creation/skills/dreamina/"><strong>dreamina</strong></a></td>
      <td>通过已登录的即梦 / Dreamina CLI 执行图片或视频生成、查询积分、提交/查询异步任务和查看任务历史，处理文生图、图生图、文生视频、图生视频、多帧/多模态视频和首尾帧视频；适合“用即梦生成图片/视频”“调用 Dreamina CLI”“查询即梦积分”“用多张图生成故事视频”；触发词：即梦、Jimeng、Dreamina、生图、生视频、文生图、文生视频、图生视频、多帧视频、多模态视频、Seedance、Seedream</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="creation/skills/image-design/"><strong>image-design</strong></a></td>
      <td>将图像生成或编辑需求转成创意 brief、结构化 prompt、画幅/风格/参考图方案、模型或工具选择、编辑步骤和验收标准；适合“帮我设计一张海报怎么生成”“给这组产品图写 prompt”“保持参考图风格做系列图”“这张图该生成还是编辑”；触发词：生图方案、图片设计、图像 prompt、参考图、同风格、角色一致、模型选择、编辑方案</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="creation/skills/image-process/"><strong>image-process</strong></a></td>
      <td>对已有本地图像做确定性处理：改尺寸、裁剪、转格式、压缩、设置质量、去 EXIF、批量规范化，并保留原图；适合“把这些图转成 webp 并压缩”“裁成 1080x1080”“批量去掉图片元数据”；触发词：改尺寸、裁剪、转格式、webp、压缩、去 EXIF、批量处理、图片后处理</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="creation/skills/image-review/"><strong>image-review</strong></a></td>
      <td>评审生成图或编辑图是否符合原需求，检查 prompt 一致性、技术质量、构图、用途适配、文字、参考图一致性、安全和版权风险，并给出重生成或局部编辑建议；适合“帮我看看这张图能不能发”“这张图和 prompt 匹配吗”“哪里需要重做”；触发词：图片评审、质量分析、图像 review、提示词一致性、构图、技术瑕疵、重生成、改进建议</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="creation/skills/nano-banana/"><strong>nano-banana</strong></a></td>
      <td>通过 Nano Banana / Gemini / Imagen 相关 provider 执行图像生成或编辑，处理 provider 选择、API key 检查、参考图上传确认、成本提示、输出下载和失败回退；适合“用 Nano Banana 生成一张图”“用 Gemini 图像模型编辑这张图”“对比 Atlas 和 Google 的生成成本”；触发词：Nano Banana、Gemini 图像、Imagen、Google 图像生成、Atlas Cloud、参考图编辑、图像 API</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="creation/skills/social-publish/"><strong>social-publish</strong></a></td>
      <td>使用可见浏览器把已准备好的内容填入社媒平台后台，保存草稿或停在发布前确认页；支持标题、正文、标签、话题、图片、视频、封面、分类等字段；禁止自动点击最终发布；适合“保存成公众号草稿”“填到小红书草稿”“放进 X 发帖框但不要发布”；触发词：保存草稿、发稿、社媒发布、准备发布、公众号草稿、小红书草稿、发帖框、不要发布、agent-browser</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="creation/skills/social-writer/"><strong>social-writer</strong></a></td>
      <td>社媒内容创作的统一入口：支持中文平台成稿、国际平台单帖、已有稿优化、内容日历、评论/差评/危机回应草案；覆盖小红书、公众号、知乎、抖音/快手、微博、X、LinkedIn、Instagram、TikTok；适合“写小红书”“优化公众号”“排内容日历”“这条差评怎么回”；触发词：社媒写作、小红书文案、公众号文章、知乎回答、抖音脚本、X 帖子、LinkedIn post、内容日历、社媒优化、危机回应</td>
    </tr>
  </tbody>
</table>

## 数据

### Agents

<table>
  <colgroup>
    <col width="220">
    <col>
  </colgroup>
  <thead>
    <tr>
      <th align="left" width="220">名称</th>
      <th align="left">简介</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="220" nowrap><a href="data/agents/BrandResearcher/"><strong>BrandResearcher</strong></a></td>
      <td>品牌研究入口：基于公司、产品或品牌的公开资料生成 Brand DNA，覆盖定位、目标客户、竞品、定价、品牌语气、社交证明、在线存在和内容缺口；适合&quot;研究这个品牌&quot;&quot;生成 Brand DNA&quot;&quot;梳理竞品和品牌语气&quot;；触发词：品牌研究、Brand DNA、公司研究、竞品、定位、品牌语气、内容缺口、GTM 基础</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="data/agents/GeneralResearcher/"><strong>GeneralResearcher</strong></a></td>
      <td>通用研究入口：围绕复杂问题、行业/趋势、文献综述、证据核验和资料来源分析，制定研究计划、收集证据、评估来源质量并输出可复核报告；适合&quot;帮我深度研究这个主题&quot;&quot;做一份有引用的行业研究&quot;&quot;系统分析这些资料的证据&quot;；触发词：深度研究、证据分析、文献综述、趋势报告、行业研究、资料核验、研究计划</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="data/agents/KnowledgeManager/"><strong>KnowledgeManager</strong></a></td>
      <td>知识库与资料整理入口：整理链接、文件、本地目录和零散材料，沉淀知识卡、实体关系、来源记录和待验证点，并按需保存或查询 Notion、Obsidian；适合&quot;整理这些资料&quot;&quot;把这段讨论保存到 Notion&quot;&quot;从这段内容提取知识卡&quot;&quot;查一下 Obsidian 笔记&quot;&quot;扫描这个目录并给整理建议&quot;；触发词：资料整理、目录整理、知识库、个人知识流、知识卡、实体关系、保存到 Notion、Obsidian、笔记整理、归档</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="data/agents/SocialResearcher/"><strong>SocialResearcher</strong></a></td>
      <td>社媒研究入口：抓取公开社媒讨论、分析舆情/口碑样本、计算社媒活动指标、CTR、ROI 和内容表现，并给出可追溯的下一轮实验建议；适合&quot;看看 Reddit 上对这个产品的口碑&quot;&quot;分析小红书最近这个话题&quot;&quot;算一下这次 campaign ROI&quot;；触发词：社媒研究、社媒数据、舆情、口碑、热度、公开帖子、参与率、CTR、ROI、campaign</td>
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
      <th align="left" width="220">名称</th>
      <th align="left">简介</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="220" nowrap><a href="data/skills/brand-research/"><strong>brand-research</strong></a></td>
      <td>研究公司、产品或品牌的公开资料，整理 Brand DNA：定位、受众、竞品、语气、定价、社交证明、来源链接和内容缺口；适合&quot;研究这个品牌网站&quot;&quot;生成 Brand DNA&quot;&quot;先梳理公司品牌基础&quot;；触发词：品牌研究、Brand DNA、公司研究、竞品、定位、品牌语气、GTM 基础、内容缺口</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="data/skills/deep-research/"><strong>deep-research</strong></a></td>
      <td>执行可复核的深度研究流程，产出研究计划、证据链、论文证据检索、引用核验、矛盾分析、可信度标注和 APA 7 引用报告；适合&quot;帮我深度研究这个主题&quot;&quot;做一份有引用和方法说明的文献综述&quot;&quot;系统分析这个行业/问题的证据&quot;；触发词：深度研究、文献综述、论文证据、引用核验、证据分析、APA 引用、研究计划、竞品研究、趋势报告</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="data/skills/material-organizer/"><strong>material-organizer</strong></a></td>
      <td>整理用户已提供的链接、PDF、Word、图片、文本片段或本地目录，做要点提取、来源溯源、知识卡沉淀、实体关系、去重归类、异常记录和关键词索引；适合&quot;整理这些链接&quot;&quot;把这些资料整理成研究笔记&quot;&quot;从这段内容提取知识卡&quot;&quot;帮我整理下载目录&quot;；触发词：资料整理、批量整理、研究笔记、知识卡、个人知识流、实体关系、关键词索引、目录整理</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="data/skills/notion/"><strong>notion</strong></a></td>
      <td>管理 Notion 工作区知识：把对话、决策、FAQ、会议纪要和过程知识保存为 Notion 页面/数据库记录，或在 Notion 内搜索、读取并综合多页资料生成带来源引用的内部文档；适合&quot;保存到 Notion&quot;&quot;整理成 Notion 决策记录&quot;&quot;在 Notion 里查这个主题并生成报告&quot;；触发词：Notion、保存到 Notion、知识库、决策记录、FAQ、会议总结、内部资料、Notion 搜索、综合报告</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="data/skills/obsidian/"><strong>obsidian</strong></a></td>
      <td>管理 Obsidian 知识库：发现 vault、搜索笔记、创建/编辑 Markdown、移动/重命名并维护 wikilink、生成 Web Clipper JSON 剪藏模板；适合&quot;查一下 Obsidian 笔记&quot;&quot;新建一篇 Obsidian 笔记&quot;&quot;移动这条笔记并更新链接&quot;&quot;做一个 Obsidian 剪藏模板&quot;；触发词：Obsidian、vault、笔记、wikilink、Markdown 知识库、Web Clipper、剪藏模板、Base</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="data/skills/social-data/"><strong>social-data</strong></a></td>
      <td>采集和分析社媒数据：抓取小红书、X/Twitter、Reddit、YouTube、Bilibili 的公开帖子，或分析用户提供的社媒/活动数据，计算参与率、CTR、ROI、成本指标、Top/Bottom 内容和下一轮实验建议；适合&quot;抓一下 Reddit 上的口碑&quot;&quot;分析这批小红书讨论&quot;&quot;算一下这次活动 ROI&quot;；触发词：社媒数据、舆情、口碑、热度、公开帖子、社媒分析、参与率、CTR、ROI、campaign performance</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="data/skills/xquik-data/"><strong>xquik-data</strong></a></td>
      <td>使用 Xquik 规划和执行 X/Twitter 数据工作流：基于 REST API、OpenAPI、MCP、webhook 或 SDK 采集、监控和整理公开数据；适合&quot;用 Xquik 抓取这些帖子&quot;&quot;设计 Xquik 监控流程&quot;&quot;把 Xquik 结果整理成报告&quot;；触发词：Xquik、X 数据、X/Twitter 数据、MCP、OpenAPI、webhook、社媒监控、数据抽取</td>
    </tr>
  </tbody>
</table>

## 办公

### Agents

<table>
  <colgroup>
    <col width="220">
    <col>
  </colgroup>
  <thead>
    <tr>
      <th align="left" width="220">名称</th>
      <th align="left">简介</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="220" nowrap><a href="office/agents/DocWriter/"><strong>DocWriter</strong></a></td>
      <td>文档写作与编辑入口：围绕 Word、DOCX、WPS 文档、报告、制度、合同协作稿和长文档，进行起草、改写、审阅、格式统一、批注修订处理、兼容检查和 PDF 交付前后的小修补；适合&quot;帮我写一份正式报告&quot;&quot;把这份 Word 整理成交付版&quot;&quot;统一这份 WPS 文档格式&quot;；触发词：Word、DOCX、WPS、文档、报告、制度、合同稿、修订、批注、格式、目录、编号、PDF导出</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="office/agents/ExcelWriter/"><strong>ExcelWriter</strong></a></td>
      <td>Excel 写作与表格交付入口：围绕 Excel、XLSX、CSV、TSV、workbook、报表、预算表、指标表、台账和模板，创建、整理、编辑、加公式、统一格式、检查数据类型和交付质量；适合&quot;帮我做一个 Excel 报表&quot;&quot;把 CSV 整理成带公式的 xlsx&quot;&quot;检查预算表公式和打印区域&quot;；触发词：Excel、XLSX、CSV、TSV、表格、工作簿、公式、报表、预算表、指标表、台账、模板</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="office/agents/OfficeWriter/"><strong>OfficeWriter</strong></a></td>
      <td>办公写作与交付入口：把用户想做、想改、想整理的办公材料落成可交付文档、表格、演示或 PDF；适合&quot;帮我写一份汇报材料&quot;&quot;把这些资料整理成 Word 和 PPT&quot;&quot;修改这份办公文档并检查格式&quot;；触发词：办公材料、写文档、改文档、汇报材料、Word、Excel、PPT、WPS、PDF、交付版</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="office/agents/PptMaker/"><strong>PptMaker</strong></a></td>
      <td>PPT 制作入口：围绕主题、材料、草稿、HTML slide 或已有 PPT，制作、规划、检查和轻编辑演示文稿；适合&quot;帮我做一个 PPT&quot;&quot;先出大纲和策划稿&quot;&quot;把这个 HTML slide 转成可编辑 PPT&quot;&quot;检查这份 PPT 的模板残留和备注&quot;；触发词：PPT、幻灯片、演示文稿、deck、slide、大纲、策划稿、备注、HTML转PPT</td>
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
      <th align="left" width="220">名称</th>
      <th align="left">简介</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td width="220" nowrap><a href="office/skills/html-ppt/"><strong>html-ppt</strong></a></td>
      <td>将受支持结构的 HTML 幻灯片按 preset 转换为可编辑 PPTX，保留原生文本框、形状、芯片、箭头和面板。适合“把这个 HTML slide 转成可编辑 PPT”“不要截图，要 PowerPoint 对象”“为新 HTML 页面族新增 preset 后转换”；触发词：HTML转PPT、HTML转PPTX、可编辑PPT、preset、架构页、PPTX导出</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="office/skills/make-ppt/"><strong>make-ppt</strong></a></td>
      <td>按阶段制作高质量 PPT / slide：需求澄清、资料整理、研究 brief、大纲、策划稿、中间审阅、完整 deck 计划和最终复核。适合“帮我做一个管理层汇报 PPT”“先出大纲和策划稿再做完整 PPT”“把主题变成可审阅演示方案”；触发词：做PPT、PPT工作流、演示文稿、slide、策划稿、大纲、review gate、汇报</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="office/skills/nano-pdf/"><strong>nano-pdf</strong></a></td>
      <td>使用本机 nano-pdf CLI 对 PDF 做指定页局部编辑、文字修改、水印、删除或轻量改写，并要求先备份、验证页码和检查输出。适合“改 PDF 第 3 页标题”“给 PDF 加水印”“删除某页一段文字”；触发词：nano-pdf、pdf编辑、改pdf、修改pdf、pdf水印、pdf局部改写</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="office/skills/office-excel/"><strong>office-excel</strong></a></td>
      <td>创建、检查和编辑 Excel / XLSX 工作簿，可靠处理公式、日期、类型、格式、数据验证、透视表、图表、模板和重算。适合“做一个 Excel 财务报表”“把 CSV 整理成带公式的 xlsx”“修改工作簿并保留格式”；触发词：excel、xlsx、xls、csv、tsv、表格、工作簿、公式、电子表格、透视表</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="office/skills/office-ppt/"><strong>office-ppt</strong></a></td>
      <td>检查和轻量编辑 PowerPoint / PPTX 演示文稿，包括结构导出、模板残留检测、全局文本替换、备注编辑和新增幻灯片。适合“检查 PPT 是否还有模板文字”“导出 deck 结构”“替换公司名”“修改第 3 页备注”；触发词：PPT、PPTX、PowerPoint、幻灯片、占位符、模板、备注、deck、演示文稿</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="office/skills/office-word/"><strong>office-word</strong></a></td>
      <td>创建、检查和编辑 Word / DOCX 文档，可靠处理样式、编号、修订、批注、字段、表格、分节、页眉页脚和版式兼容。适合“做一份 Word 报告”“修改这份 .docx 并保留修订”“统一长文档格式和编号”；触发词：word、docx、文档、修订、批注、字段、模板、排版、编号、页眉页脚</td>
    </tr>
    <tr>
      <td width="220" nowrap><a href="office/skills/wps/"><strong>wps</strong></a></td>
      <td>面向中文办公场景处理 WPS 文字、表格、演示的创建、编辑、审阅、转换、兼容排查和 PDF 导出。适合“WPS 文档格式乱了帮我排查”“WPS 表格整理数据并设置打印区域”“WPS 演示导出交付 PDF”；触发词：WPS、WPS文字、WPS表格、WPS演示、格式兼容、批注修订、导出PDF、中文办公</td>
    </tr>
  </tbody>
</table>
