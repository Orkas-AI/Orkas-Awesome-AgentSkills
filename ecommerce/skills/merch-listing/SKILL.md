---
name: merch-listing
description_zh: "为淘宝、拼多多、Amazon、Shopify、Shopee、AliExpress 等平台优化商品上架页面：标题、卖点、bullet、详情描述、SEO 关键词、FAQ、Amazon A+、竞品页面诊断和图片 brief；适合\"帮我写商品 listing\"\"优化这个商品标题\"\"规划 Amazon A+ 页面\"；触发词：商品上架、商品标题、listing、卖点、SEO关键词、Amazon Listing、A+ Content、页面优化"
description_en: "Optimize merchandise listings across Taobao, Pinduoduo, Amazon, Shopify, Shopee, and AliExpress, including titles, bullets, descriptions, SEO keywords, FAQs, Amazon A+ content, competitor page audits, and image briefs; For: \"write this product listing\", \"optimize this product title\", \"plan Amazon A+ content\"; Triggers: merch listing, product listing, title optimization, bullet points, SEO keywords, Amazon listing, A+ content, page optimization"
description: "Write and optimize e-commerce merchandise listing pages, titles, bullets, descriptions, SEO keywords, FAQs, Amazon A+ content, and competitor page diagnostics."
category: "ecommerce"
---

# 商品页面优化

用于商品上架文案和页面结构优化。核心任务是把商品信息、证据、平台限制和用户购买阻力组织成可发布前复核的页面方案。

## 何时使用

- 用户需要生成或优化商品标题、卖点、bullet、详情描述、SEO 关键词、FAQ、短视频口播草稿或套装文案。
- 用户要适配淘宝、拼多多、Amazon、Shopify、Shopee、AliExpress 等平台页面。
- 用户提供 Amazon listing、竞品 ASIN、页面材料、评价摘要、图片素材或品牌定位，希望做 listing/A+ 优化。
- 用户要诊断现有页面：关键词缺失、卖点不清、结构混乱、合规风险或竞品机会。

不用于选品市场研究、评论数据归因、商品图 prompt、视频广告分镜、图片生成或广告投放。

## 如何调用

1. 收集产品名称、类目、目标平台、目标市场、目标人群、价格/SKU、核心卖点、品牌调性、竞品信息、证据材料和合规限制。
2. 判断路径：
   - 跨平台标题、卖点、描述、FAQ：使用 `references/cross-platform-listing.md`。
   - Amazon listing、A+、图片顺序、竞品页面：使用 `references/amazon-listing-and-a-plus.md`。
3. 所有销量、排名、认证、功效、优惠、评价、对比结论都要标注来源；没有来源就写“需证据支持”或改为中性表达。
4. 输出前做合规检查：极限词、虚假稀缺、医疗功效、侵权品牌词、平台禁词、未证实数据、误导性对比。使用 `references/listing-compliance.md`。
5. 如果材料不足，先给可用草稿，并列出缺失信息和需要人工确认的证据。
6. 返回结构使用 `references/listing-output-templates.md`。

## 返回格式

- 输入摘要和缺失信息。
- 目标平台适配说明。
- 标题方案和关键词布局。
- 卖点 / bullet / 描述 / FAQ。
- Amazon A+ 或图片顺序建议，如适用。
- 竞品页面机会和待验证数据。
- 合规风险清单和人工确认项。

## 外部依赖

- 无必需外部依赖。
- 若要使用真实搜索量、排名、竞品销量、广告词数据，需要用户提供平台后台、合法导出或第三方数据结果。
- 若用户只提供 ASIN 或页面链接且无法联网访问，需要用户上传截图、文案或页面材料。

## 限制与已知问题

- 不保证曝光、排名、转化、销量或平台审核通过。
- 不编造“月销 10 万+”“全网第一”“医生推荐”等声明。
- 不生成侵权品牌词、竞品商标堆砌或误导性比较。
- 跨境文案需要用户确认目标国家、语言、单位、合规限制和禁售规则。
- 高风险类目必须保守表达并提示人工复核。
