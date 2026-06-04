---
name: merch-research
description_zh: "为 Amazon、淘宝、京东、拼多多、抖音、1688 等平台做商品选品、类目机会、价格带、竞品格局、利润测算、供应链风险和数据采集方案；适合\"分析这个商品能不能做\"\"帮我做电商选品调研\"\"评估 Amazon ASIN 或国内平台竞品\"；触发词：商品选品、类目研究、市场调研、Amazon选品、ASIN分析、国内电商调研、价格对比、利润测算"
description_en: "Research merchandise opportunities across Amazon and Chinese commerce platforms, including category viability, price bands, competitor landscape, profit assumptions, sourcing risk, and data-collection plans; For: \"analyze whether this item is viable\", \"research an e-commerce product opportunity\", \"evaluate an Amazon ASIN or China-platform competitors\"; Triggers: merch research, product selection, category research, Amazon research, ASIN analysis, China e-commerce research, price comparison, profit estimate"
description: "Research e-commerce merchandise opportunities, category viability, price bands, competitors, profit assumptions, sourcing risks, and evidence gaps across Amazon and Chinese commerce platforms."
category: "ecommerce"
---

# 商品选品研究

用于电商商品的前置研究和选品判断。核心任务是帮助用户判断“这个商品/类目是否值得继续验证”，并把数据来源、估算口径、风险和下一步验证说清楚。

## 何时使用

- 用户提供 Amazon keyword、category、ASIN、brand 或竞品材料，希望做类目机会、竞品、价格、评论痛点或选品可行性分析。
- 用户要研究淘宝、天猫、京东、拼多多、抖音、快手、1688、小红书等国内平台的商品机会。
- 用户要设计价格对比表、竞品字段、利润测算、采集计划或选品报告。
- 用户已有手动整理的数据、后台导出或合法 API 结果，希望形成经营判断。

不用于商品页面文案、主图/视频创意、评论 VOC 深度归因、下单采购、广告投放或自动平台抓取。

## 如何调用

1. 先确认研究对象：商品、关键词、类目、平台、站点、价格带、目标市场、卖家能力、预算、供应链条件和已有数据。
2. 判断路径：
   - Amazon 市场/ASIN/类目研究：使用 `references/amazon-market-research.md`。
   - 国内平台选品/价格/供应链研究：使用 `references/china-platform-research.md`。
3. 明确数据来源：用户上传、平台后台导出、手动摘录、公开页面、授权 API、第三方数据源。来源不足时标为待验证。
4. 不默认自动抓取平台；如用户要求采集，先说明平台条款、登录、频率、授权和反爬风险。
5. 若使用 APIClaw，必须检查 `APICLAW_API_KEY` 和额度；缺失时不请求数据，只说明需要凭证、用途和成本风险。
6. 进行需求、竞争、价格带、评价壁垒、差异化、利润、供应链、合规和售后风险分析。
7. 对每个结论标注证据类型：直接数据、推断、建议或待验证。使用 `references/data-provenance-and-confidence.md`。
8. 输出报告结构时使用 `references/product-research-output.md`。

## 返回格式

- 调研目标和数据来源。
- 市场需求与价格带。
- 竞争格局、评价壁垒和差异化机会。
- 利润测算框架和供应链风险。
- 平台/类目合规与售后风险。
- 数据来源、置信标签和待验证项。
- 结论：推荐 / 观察 / 暂缓。
- 下一步验证计划。

## 外部依赖

- 无必需外部依赖。
- Amazon APIClaw 数据研究需要 `APICLAW_API_KEY`、账户额度和网络访问。
- Excel、CSV 或表格文件分析需要当前会话具备文件读取能力。
- 自动采集平台页面必须另行确认授权、登录状态、平台条款、采集频率和依赖。

## 限制与已知问题

- 不承诺销量、利润、排名、广告 ROAS 或经营结果。
- 不把平台展示销量、BSR、热度、评论数或第三方估算当作绝对事实。
- 不绕过登录、验证码、反爬、权限或付费 API 限制。
- 不替用户做最终采购、备货、投放或定价决策。
- 高风险类目如食品、保健、美妆、儿童、医疗器械、宠物食品和电器，需要更严格证据和人工复核。
