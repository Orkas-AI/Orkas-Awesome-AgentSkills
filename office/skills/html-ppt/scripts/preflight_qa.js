#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { computeV9Layout, bulletBlock, estimateLines, MAIN: V9_MAIN } = require('./layout_v9');
const { computeAiRuntimeLayout, MAIN: AI_MAIN } = require('./layout_ai_runtime');

const V9_PRESET = 'v9-architecture';
const AI_RUNTIME_PRESET = 'ai-runtime-page';

function usage() {
  console.error(`Usage: node scripts/preflight_qa.js <model.json> [--preset=${V9_PRESET}|${AI_RUNTIME_PRESET}] [--report <report.json>]`);
}

function readArgs(argv) {
  const args = argv.slice(2);
  if (args.includes('--help') || args.includes('-h')) return { help: true };
  if (args.length < 1) return null;
  const opts = { model: args[0], preset: null, report: null, help: false };
  for (let i = 1; i < args.length; i++) {
    const arg = args[i];
    if (arg.startsWith('--preset=')) opts.preset = arg.split('=')[1];
    else if (arg === '--report') { opts.report = args[i + 1]; i += 1; }
  }
  return opts;
}

function detectPreset(model, forcedPreset) {
  if (forcedPreset) return forcedPreset;
  if (model && model.preset) return model.preset;
  return V9_PRESET;
}

function assessBlock({ name, text, widthIn, heightIn, fontSizePt, lineSpacing = 1.08, marginsPt = 0, charFactor = 1.0, severityIfFail = 'medium', note = '' }) {
  const est = estimateLines(text, widthIn, fontSizePt, { lineSpacing, charFactor });
  const usableHeightPt = heightIn * 72 - marginsPt;
  const neededHeightPt = est.lines * est.lineHeightPt;
  const ratio = usableHeightPt / neededHeightPt;
  let status = 'ok';
  let severity = 'info';
  if (ratio < 1.0) { status = 'fail'; severity = severityIfFail; }
  else if (ratio < 1.12) { status = 'warn'; severity = severityIfFail === 'high' ? 'high' : 'medium'; }
  else if (ratio < 1.25) { status = 'warn'; severity = 'low'; }
  return {
    name,
    status,
    severity,
    ratio: Number(ratio.toFixed(2)),
    usableHeightPt: Number(usableHeightPt.toFixed(1)),
    neededHeightPt: Number(neededHeightPt.toFixed(1)),
    estimatedLines: est.lines,
    note,
  };
}

function assessSpacing({ name, availableIn, neededIn, severityIfFail = 'medium', note = '' }) {
  const ratio = availableIn / Math.max(neededIn, 0.0001);
  let status = 'ok';
  let severity = 'info';
  if (ratio < 1.0) { status = 'fail'; severity = severityIfFail; }
  else if (ratio < 1.10) { status = 'warn'; severity = severityIfFail === 'high' ? 'high' : 'medium'; }
  return {
    name,
    status,
    severity,
    ratio: Number(ratio.toFixed(2)),
    usableHeightPt: Number((availableIn * 72).toFixed(1)),
    neededHeightPt: Number((neededIn * 72).toFixed(1)),
    estimatedLines: null,
    note,
  };
}

function v9ArchitectureChecks(model) {
  const layout = computeV9Layout(model);
  const results = [];

  results.push(assessBlock({
    name: 'left.bridgeText',
    text: model.left.bridgeText,
    widthIn: V9_MAIN.leftW - 0.48,
    heightIn: layout.left.bridgeText.h,
    fontSizePt: layout.left.bridgeText.font,
    lineSpacing: 1.04,
    charFactor: 1.02,
    severityIfFail: 'high',
    note: '共同指向文案是固定小框，高风险溢出点。'
  }));

  results.push(assessBlock({
    name: 'right.title',
    text: model.right.title,
    widthIn: V9_MAIN.rightW - 0.40,
    heightIn: layout.right.title.h,
    fontSizePt: layout.right.title.font,
    lineSpacing: 1.0,
    charFactor: 1.04,
    severityIfFail: 'high',
    note: '右侧大标题过高会直接压住下面副标题。'
  }));

  results.push(assessBlock({
    name: 'right.subtitle',
    text: model.right.subtitle,
    widthIn: V9_MAIN.rightW - 0.40,
    heightIn: layout.right.subtitle.h,
    fontSizePt: layout.right.subtitle.font,
    lineSpacing: 1.04,
    charFactor: 0.98,
    severityIfFail: 'medium',
    note: '副标题过长会挤压下方 judgement items 起始位置。'
  }));

  results.push(assessSpacing({
    name: 'right.titleSubtitleGap',
    availableIn: layout.right.subtitle.y - (layout.right.title.y + layout.right.title.h),
    neededIn: 0.05,
    severityIfFail: 'high',
    note: '右侧标题与副标题之间至少应保留基础垂直间距。'
  }));

  results.push(assessSpacing({
    name: 'right.subtitleToItemsGap',
    availableIn: layout.right.itemStartY - (layout.right.subtitle.y + layout.right.subtitle.h),
    neededIn: 0.06,
    severityIfFail: 'high',
    note: '右侧副标题与第一个 judgement item 之间应留白。'
  }));

  results.push(assessBlock({
    name: 'left.externalItems',
    text: bulletBlock(model.left.externalItems),
    widthIn: V9_MAIN.leftW - 0.48,
    heightIn: layout.left.externalText.h,
    fontSizePt: layout.left.externalText.font,
    lineSpacing: 1.08,
    charFactor: 1.02,
    severityIfFail: 'medium',
    note: '外部驱动列表固定框高。'
  }));

  results.push(assessBlock({
    name: 'left.internalItems',
    text: bulletBlock(model.left.internalItems),
    widthIn: V9_MAIN.leftW - 0.48,
    heightIn: layout.left.internalText.h,
    fontSizePt: layout.left.internalText.font,
    lineSpacing: 1.08,
    charFactor: 1.02,
    severityIfFail: 'high',
    note: '内部驱动项数多时很容易底部溢出。'
  }));

  const frameworks = model.center.layers[1]?.frameworks || [];
  frameworks.forEach((card, idx) => {
    const cardLayout = layout.center.frameworkCard.cards[idx] || { titleFont: 8.2, bodyFont: 7.0 };
    results.push(assessBlock({
      name: `center.framework.${card.title}.title`,
      text: card.title,
      widthIn: layout.center.frameworkCard.w - 0.12,
      heightIn: layout.center.frameworkCard.titleH,
      fontSizePt: cardLayout.titleFont,
      lineSpacing: 1.0,
      charFactor: 1.0,
      severityIfFail: 'medium',
      note: '框架卡片标题空间小。'
    }));
    results.push(assessBlock({
      name: `center.framework.${card.title}.body`,
      text: card.body,
      widthIn: layout.center.frameworkCard.w - 0.12,
      heightIn: layout.center.frameworkCard.bodyH,
      fontSizePt: cardLayout.bodyFont,
      lineSpacing: 1.0,
      charFactor: 0.96,
      severityIfFail: 'medium',
      note: '框架卡片正文空间小。'
    }));
  });

  const productCards = model.center.layers[2]?.products || [];
  productCards.forEach((card, idx) => {
    const cardLayout = layout.center.productCard.cards[idx] || { titleFont: 8.0, bodyFont: 6.8 };
    results.push(assessBlock({
      name: `center.product.${card.title}.title`,
      text: card.title,
      widthIn: layout.center.productCard.w - 0.12,
      heightIn: layout.center.productCard.titleH,
      fontSizePt: cardLayout.titleFont,
      lineSpacing: 1.0,
      charFactor: 1.0,
      severityIfFail: 'medium',
      note: '产品承载层小卡片标题。'
    }));
    results.push(assessBlock({
      name: `center.product.${card.title}.body`,
      text: card.body,
      widthIn: layout.center.productCard.w - 0.12,
      heightIn: layout.center.productCard.bodyH,
      fontSizePt: cardLayout.bodyFont,
      lineSpacing: 1.0,
      charFactor: 0.96,
      severityIfFail: 'medium',
      note: '产品承载层小卡片正文。'
    }));
  });

  const chipWidths = [1.20, 1.14, 1.58, 1.56, 1.24, 1.40];
  const chips = model.center.layers[3]?.chips || [];
  chips.forEach((chip, idx) => {
    results.push(assessBlock({
      name: `center.foundationChip.${idx + 1}`,
      text: chip,
      widthIn: (chipWidths[idx] || 1.20) - 0.04,
      heightIn: 0.12,
      fontSizePt: layout.center.foundationChip.chips[idx]?.font || 6.7,
      lineSpacing: 1.0,
      charFactor: 0.98,
      severityIfFail: 'low',
      note: 'chip 太长会裁切或显得贴边。'
    }));
  });

  (model.right.items || []).forEach((item, idx) => {
    const itemLayout = layout.right.items[idx] || { titleFont: 8.6, mechanismFont: 6.9, outputFont: 6.9, titleH: 0.11, mechanismH: 0.22, outputH: 0.16 };
    results.push(assessBlock({
      name: `right.item.${item.title}.title`,
      text: item.title,
      widthIn: V9_MAIN.rightW - 0.40,
      heightIn: itemLayout.titleH,
      fontSizePt: itemLayout.titleFont,
      lineSpacing: 1.0,
      charFactor: 1.0,
      severityIfFail: 'medium',
      note: '右侧 judgement 卡片标题。'
    }));
    results.push(assessBlock({
      name: `right.item.${item.title}.mechanism`,
      text: `核心机制：${item.mechanism}`,
      widthIn: V9_MAIN.rightW - 0.40,
      heightIn: itemLayout.mechanismH,
      fontSizePt: itemLayout.mechanismFont,
      lineSpacing: 1.0,
      charFactor: 0.98,
      severityIfFail: 'medium',
      note: '右侧 judgement 卡片机制说明。'
    }));
    results.push(assessBlock({
      name: `right.item.${item.title}.output`,
      text: `判断产出：${item.output}`,
      widthIn: V9_MAIN.rightW - 0.40,
      heightIn: itemLayout.outputH,
      fontSizePt: itemLayout.outputFont,
      lineSpacing: 1.0,
      charFactor: 0.98,
      severityIfFail: 'medium',
      note: '右侧 judgement 卡片输出说明。'
    }));
  });

  const totalRightStack = (layout.right.itemStartY - V9_MAIN.mainY) + layout.right.totalH + layout.right.bottomPad;
  results.push({
    name: 'right.stackTotalHeight',
    status: totalRightStack > V9_MAIN.mainH ? 'fail' : totalRightStack > V9_MAIN.mainH - 0.10 ? 'warn' : 'ok',
    severity: totalRightStack > V9_MAIN.mainH ? 'high' : totalRightStack > V9_MAIN.mainH - 0.10 ? 'medium' : 'info',
    ratio: Number((V9_MAIN.mainH / totalRightStack).toFixed(2)),
    usableHeightPt: Number((V9_MAIN.mainH * 72).toFixed(1)),
    neededHeightPt: Number((totalRightStack * 72).toFixed(1)),
    estimatedLines: null,
    note: '右侧总堆叠高度是否已经接近面板极限。'
  });

  return { results, layout };
}

function aiRuntimeChecks(model) {
  const layout = computeAiRuntimeLayout(model);
  const results = [];

  results.push(assessBlock({
    name: 'lead',
    text: model.lead,
    widthIn: 11.30,
    heightIn: 0.32,
    fontSizePt: layout.leadFont,
    lineSpacing: 1.12,
    charFactor: 0.98,
    severityIfFail: 'high',
    note: '导语框是开场第一视觉层，文本不应触底或挤压。'
  }));

  (model.inputs || []).forEach((chip, idx) => {
    results.push(assessBlock({
      name: `inputs.${idx + 1}`,
      text: chip,
      widthIn: AI_MAIN.inputChipW - 0.06,
      heightIn: 0.12,
      fontSizePt: layout.inputChipFonts[idx] || 10.6,
      lineSpacing: 1.0,
      charFactor: 0.96,
      severityIfFail: 'low',
      note: '输入上下文 chip 太长会裁切。'
    }));
  });

  (model.modules || []).forEach((m, idx) => {
    const mod = layout.modules[idx] || { titleFont: 12, enFont: 7.8, bodyFont: 8.4 };
    results.push(assessBlock({
      name: `module.${m.num}.title`,
      text: m.title,
      widthIn: 1.42,
      heightIn: 0.18,
      fontSizePt: mod.titleFont,
      lineSpacing: 1.0,
      charFactor: 0.96,
      severityIfFail: 'medium',
      note: '模块标题应保持一行或至少不压缩得太难看。'
    }));
    results.push(assessBlock({
      name: `module.${m.num}.en`,
      text: m.en,
      widthIn: 1.42,
      heightIn: 0.10,
      fontSizePt: mod.enFont,
      lineSpacing: 1.0,
      charFactor: 0.92,
      severityIfFail: 'low',
      note: '英文副标签过长会显得拥挤。'
    }));
    results.push(assessBlock({
      name: `module.${m.num}.body`,
      text: m.body,
      widthIn: 1.66,
      heightIn: 0.50,
      fontSizePt: mod.bodyFont,
      lineSpacing: 1.04,
      charFactor: 0.96,
      severityIfFail: 'high',
      note: '模块正文是这页最容易溢出的区域之一。'
    }));
  });

  (model.supports || []).forEach((s, idx) => {
    const sp = layout.supports[idx] || { titleFont: 10.1, bodyFont: 6.8 };
    results.push(assessBlock({
      name: `support.${idx + 1}.title`,
      text: s.title,
      widthIn: 3.12,
      heightIn: 0.10,
      fontSizePt: sp.titleFont,
      lineSpacing: 1.0,
      charFactor: 0.96,
      severityIfFail: 'medium',
      note: '支撑层标题不应溢出。'
    }));
    results.push(assessBlock({
      name: `support.${idx + 1}.body`,
      text: s.body,
      widthIn: 3.06,
      heightIn: 0.10,
      fontSizePt: sp.bodyFont,
      lineSpacing: 1.0,
      charFactor: 0.94,
      severityIfFail: 'medium',
      note: '支撑层说明文字通常字号较小，容易贴边。'
    }));
  });

  (model.outputs || []).forEach((label, idx) => {
    results.push(assessBlock({
      name: `outputs.${idx + 1}`,
      text: label,
      widthIn: (AI_MAIN.outputWidths[idx] || 1.22) - 0.06,
      heightIn: 0.10,
      fontSizePt: layout.outputs[idx]?.font || 7.4,
      lineSpacing: 1.0,
      charFactor: 0.96,
      severityIfFail: 'low',
      note: '输出 chip 太长会裁切。'
    }));
  });

  (model.base || []).forEach((label, idx) => {
    results.push(assessBlock({
      name: `base.${idx + 1}`,
      text: label,
      widthIn: AI_MAIN.baseWidths[idx] || 2.76,
      heightIn: 0.08,
      fontSizePt: layout.base[idx]?.font || 7.0,
      lineSpacing: 1.0,
      charFactor: 0.96,
      severityIfFail: 'low',
      note: '底座文字虽然不抢戏，但不能显得拥挤。'
    }));
  });

  results.push(assessBlock({
    name: 'takeaway',
    text: model.takeaway,
    widthIn: 11.63,
    heightIn: 0.14,
    fontSizePt: layout.takeawayFont,
    lineSpacing: 1.0,
    charFactor: 0.96,
    severityIfFail: 'medium',
    note: '底部总结句不应被压缩或触边。'
  }));

  results.push(assessSpacing({
    name: 'runtime.moduleToSupportGap',
    availableIn: 5.08 - (AI_MAIN.moduleY + AI_MAIN.moduleH),
    neededIn: 0.26,
    severityIfFail: 'medium',
    note: '主流程模块与支撑层之间应保留清晰分层间距。'
  }));

  results.push(assessSpacing({
    name: 'runtime.bottomPadding',
    availableIn: (AI_MAIN.boxY + AI_MAIN.boxH) - (AI_MAIN.supportY + AI_MAIN.supportH),
    neededIn: 0.16,
    severityIfFail: 'medium',
    note: '支撑层底部需要安全留白。'
  }));

  return { results, layout };
}

function summarize(results) {
  const counts = { fail: 0, warn: 0, ok: 0 };
  for (const r of results) counts[r.status] = (counts[r.status] || 0) + 1;
  const topIssues = results.filter(r => r.status !== 'ok').sort((a, b) => {
    const rank = { high: 3, medium: 2, low: 1, info: 0 };
    return (rank[b.severity] - rank[a.severity]) || (a.ratio - b.ratio);
  });
  return { counts, topIssues: topIssues.slice(0, 10) };
}

function main() {
  const opts = readArgs(process.argv);
  if (!opts) {
    usage();
    process.exit(1);
  }
  if (opts.help) {
    usage();
    process.exit(0);
  }
  const model = JSON.parse(fs.readFileSync(opts.model, 'utf8'));
  const preset = detectPreset(model, opts.preset);
  let payload;
  if (preset === V9_PRESET) payload = v9ArchitectureChecks(model);
  else if (preset === AI_RUNTIME_PRESET) payload = aiRuntimeChecks(model);
  else throw new Error(`Unsupported preset for QA: ${preset}`);

  const report = {
    preset,
    sourceModel: path.resolve(opts.model),
    summary: summarize(payload.results),
    checks: payload.results,
    layout: payload.layout,
    recommendations: [
      '对 fail 项优先加高容器或减小字号，不要依赖 fit/shrink 自动修复。',
      '对 warn 项优先增加安全留白，特别是标题-副标题、小卡片、chip 和总结句。',
      '生成后建议补一轮缩略图复核，用于抓漏。'
    ]
  };

  if (opts.report) {
    fs.mkdirSync(path.dirname(opts.report), { recursive: true });
    fs.writeFileSync(opts.report, JSON.stringify(report, null, 2), 'utf8');
  }

  console.log(JSON.stringify(report, null, 2));
}

main();