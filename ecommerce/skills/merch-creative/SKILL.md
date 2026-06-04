---
name: merch-creative
description_zh: "为电商商品规划主图/详情页视觉文案、必卖理由、商品广告图 prompt、产品展示视频 prompt、视频广告脚本、分镜、CTA 和 A/B 测试方案；适合\"做商品主图文案\"\"写产品图生图 prompt\"\"规划商品短视频广告脚本\"；触发词：商品创意、主图文案、详情页、商品图prompt、产品视频prompt、视频广告、分镜脚本、广告hook"
description_en: "Plan e-commerce merchandise creatives, including main-image and detail-page copy, selling-reason cards, product image prompts, showcase video prompts, video ad scripts, storyboards, CTAs, and A/B tests; For: \"write product image copy\", \"create image prompts for this item\", \"plan a product video ad script\"; Triggers: merch creative, product image copy, detail page, product image prompt, product video prompt, video ad, storyboard, ad hook"
description: "Plan e-commerce merchandise creatives: visual copy, product image prompts, product video prompts, ad scripts, storyboards, CTAs, compliance gates, and creative tests."
category: "ecommerce"
---

# 商品创意策划

用于电商商品的视觉表达和广告创意策划。核心任务是把商品卖点、证据、素材边界和平台要求转成可交给设计师、视频团队或生成工具执行的创意方案。

## 何时使用

- 用户要做淘宝、天猫、京东、拼多多、抖音小店、Amazon、Shopify 等平台的主图文案、详情页视觉文案或商品图执行方案。
- 用户上传商品图，希望生成广告主视觉、商品展示图、hero frame 或图生视频提示词。
- 用户要做 TikTok、Reels、YouTube Shorts、Meta、抖音、小红书等商品视频广告脚本、hook、分镜和 CTA。
- 用户要先低成本探索多个视觉方向，再确认一个方向进入精修、生成或拍摄。

不用于商品选品市场研究、listing 页面文案主流程、评论数据归因、实际图片/视频生成、广告发布或预算设置。

## 如何调用

1. 收集产品、品牌、SKU/价格、目标平台、目标人群、核心卖点、证据材料、素材/授权、比例、时长、风格、CTA、必须包含和必须避免。
2. 判断路径：
   - 主图/详情页视觉文案：使用 `references/visual-copywriting.md`。
   - 商品广告图或产品展示视频 prompt：使用 `references/product-visual-prompts.md`。
   - 视频广告脚本、hook、分镜、A/B 测试：使用 `references/video-ad-storyboard.md`。
3. 先做素材和合规检查：商标、包装文字、肖像、竞品素材、音乐、平台禁用元素、功效暗示和商用授权。
4. 高风险类目先读 `references/creative-compliance.md`，输出“能写 / 不能写 / 需证据”的边界。
5. 保留用户确认门禁：
   - 视觉文案：先确认必卖理由卡片，再展开主图和详情页。
   - 生成图/视频：先确认 hero frame 方向，再写高成本 prompt 或执行计划。
   - 视频广告：先确认 creative brief/hook 方向，再展开长脚本或测试方案。
6. 默认只输出策划、prompt、脚本和分镜；不直接调用外部生成服务。若用户明确授权外部 API，先说明成本、失败率、隐私和降级方案。
7. 返回结构使用 `references/creative-output-templates.md`。

## 返回格式

- 输入材料检查和授权风险。
- 平台视觉/视频策略判断。
- 方向方案和用户确认门禁。
- 主图/详情页视觉文案，或图片/video prompt，或视频广告脚本分镜。
- 负面提示词、避免项、合规风险。
- A/B 测试方案或执行计划。
- 人工确认和验收标准。

## 外部依赖

- 无必需外部依赖。
- 实际调用图片/视频生成服务需要对应 API Key、账户额度、模型权限和网络访问。
- 使用 Creatify、CapCut、剪映、Runway、Kling、Pika 等外部服务需要用户授权并确认费用。

## 限制与已知问题

- 不保证生成图片/视频中的商品几何、包装文字、logo 完全一致。
- 不使用未授权人物肖像、竞品素材、音乐、IP 或商标。
- 不编造用户评价、销量、获奖、临床或功效数据。
- 不自动发布广告、不创建广告组、不设置预算。
- 高成本生成、批量生成或对外发布前必须用户确认。
