---
name: merch-review
description_zh: "分析用户上传或合法导出的电商评论、评分、追评和竞品评价数据，输出情感分布、差评归因、痛点聚类、竞品评论对比、页面/客服/商品改进建议和优先级；适合\"分析这批商品评论\"\"找差评原因\"\"对比竞品用户反馈\"；触发词：商品评论、评论分析、差评归因、VOC、用户反馈、评价数据、竞品评论、口碑分析"
description_en: "Analyze user-uploaded or legally exported e-commerce reviews, ratings, follow-up reviews, and competitor feedback to produce sentiment distribution, negative-review root causes, pain-point clusters, competitor comparisons, improvement actions, and priorities; For: \"analyze these product reviews\", \"find why customers leave bad reviews\", \"compare competitor feedback\"; Triggers: merch review, review analysis, negative reviews, VOC, customer feedback, rating data, competitor reviews, reputation analysis"
description: "Analyze e-commerce product reviews, ratings, and competitor feedback with privacy handling, VOC taxonomy, root-cause classification, evidence snippets, and prioritized improvement actions."
category: "ecommerce"
---

# 商品评论分析

用于电商评论和用户反馈数据分析。核心任务是从用户提供或合法导出的评论中识别口碑结构、差评原因、痛点主题和可执行改进方向。

## 何时使用

- 用户上传淘宝、京东、拼多多、Amazon、Shopee、Shopify 等平台的评论表格、CSV、订单评价导出或授权 API 返回数据。
- 用户希望分析好评/中评/差评分布、情感、差评归因、产品痛点、物流客服问题、竞品评论差异。
- 用户要把评论分析结果转成商品优化、客服 FAQ、主图/详情页优化、listing 改写或新品迭代建议。

不用于默认抓取受限平台评论、不绕过登录/反爬、不输出未脱敏个人信息、不保证建议一定提升评分或销量。

## 如何调用

1. 先确认数据来源是否合法：用户上传、平台后台导出、授权 API 或公开可访问数据。来源不清时先要求说明。
2. 读取字段并识别商品、店铺、平台、评分、评论正文、时间、规格、用户标识、订单号、追评、图片/视频标记。
3. 对敏感字段脱敏：用户名、手机号、订单号、地址、昵称 ID 等只保留必要聚合信息。使用 `references/review-data-privacy.md`。
4. 统计评论量、平均评分、好评/中评/差评分布、时间趋势和平台/商品/店铺分组。
5. 按 `references/voc-taxonomy.md` 聚类主题，并识别样本偏差。
6. 按 `references/root-cause-and-actions.md` 做差评归因和改进行动映射。
7. 没有评分字段时，情感分类标为推断；样本过少或只包含差评时，不代表整体口碑。
8. 返回结构使用 `references/voc-output-templates.md`。

## 返回格式

- 数据来源和字段识别说明。
- 样本概览：评论量、时间范围、平台/商品/店铺分布。
- 评分和情感分布。
- 高频好评驱动和高频差评主题。
- 差评归因表：主题、证据片段、占比、影响、建议动作。
- 多商品/多店铺/多平台对比矩阵。
- 对 listing、主图、详情页、客服 FAQ、产品迭代的改进映射。
- 改进优先级和数据限制。

## 外部依赖

- 无必需外部依赖。
- Excel、CSV、JSON、DOCX 可由当前会话可用的文件读取能力处理。
- 自动采集评论需要用户确认平台授权、登录状态、平台条款和采集范围；默认不执行。

## 限制与已知问题

- 静态评论文本无法完全判断真实购买、刷评或恶意评价，只能给风险信号。
- 评论样本过少、时间跨度过短或只包含差评时，不能代表整体口碑。
- 百分比必须说明分母。
- 不展示完整个人信息，不把个体用户作为攻击对象。
- 不承诺改进建议一定提升评分、销量或转化。
