const fs = require('fs');
const cheerio = require('cheerio');
const { computeAiRuntimeLayout, MAIN } = require('./layout_ai_runtime');

const COLORS = {
  navy: '163A5F',
  teal: '2E8B8B',
  orange: 'D97706',
  bg: 'F6F8FB',
  card: 'FFFFFF',
  line: 'D3DBE6',
  muted: '627181',
  softBlue: 'ECF3FA',
  softGreen: 'E9F7F5',
  softOrange: 'FFF5E8',
  softGray: 'F1F4F8',
};

const MODULE_FILLS = [COLORS.softBlue, COLORS.softGreen, COLORS.softOrange, COLORS.card, COLORS.softBlue];
const FONT_CN = 'PingFang SC';
const FONT_EN = 'Arial';
const PRESET = 'ai-runtime-page';

function normalizeText(text) {
  return String(text || '').replace(/\u00a0/g, ' ').replace(/[\t\r\n]+/g, ' ').replace(/\s+/g, ' ').trim();
}

function ensureDir(filePath) {
  fs.mkdirSync(require('path').dirname(filePath), { recursive: true });
}

function extractAiRuntime(htmlPath) {
  const $ = cheerio.load(fs.readFileSync(htmlPath, 'utf8'));
  return {
    preset: PRESET,
    eyebrow: normalizeText($('.eyebrow').first().text()),
    brand: normalizeText($('.brand').first().text()),
    title: normalizeText($('.title').first().text()),
    lead: normalizeText($('.lead').first().text()),
    inputs: $('.inputs .chip').toArray().map(el => normalizeText($(el).text())).filter(Boolean),
    runtimeTitle: normalizeText($('.runtime-title').first().text()),
    modules: $('.modules .module').toArray().map((el) => ({
      num: normalizeText($(el).attr('data-num')),
      title: normalizeText($(el).find('.module-title').first().text()),
      en: normalizeText($(el).find('.module-en').first().text()),
      body: normalizeText($(el).find('.module-body').first().text()),
    })),
    supports: $('.supports .support').toArray().map((el) => ({
      title: normalizeText($(el).find('.support-title').first().text()),
      body: normalizeText($(el).find('.support-body').first().text()),
    })),
    outputs: $('.outputs .chip').toArray().map(el => normalizeText($(el).text())).filter(Boolean),
    base: $('.base-layer .base-item').toArray().map(el => normalizeText($(el).text())).filter(Boolean),
    takeaway: normalizeText($('.takeaway').first().text()),
  };
}

function addShape(slide, pptx, shape, opts = {}) {
  slide.addShape(shape, opts);
}

function addRoundedRect(slide, pptx, opts = {}) {
  slide.addShape(pptx.ShapeType.roundRect, {
    rectRadius: 0.14,
    fill: { color: COLORS.card },
    line: { color: COLORS.line, width: 1 },
    ...opts,
  });
}

function addText(slide, text, opts = {}) {
  slide.addText(text, {
    fontFace: FONT_CN,
    color: COLORS.navy,
    margin: 0,
    fit: 'none',
    valign: 'top',
    breakLine: false,
    ...opts,
  });
}

function addDownArrow(slide, pptx, x, y) {
  slide.addShape(pptx.ShapeType.downArrow, {
    x, y, w: 0.33, h: 0.18,
    fill: { color: COLORS.teal },
    line: { color: COLORS.teal, transparency: 100, width: 0 },
  });
}

function addChevron(slide, pptx, x, y) {
  slide.addShape(pptx.ShapeType.chevron, {
    x, y, w: 0.14, h: 0.20,
    fill: { color: COLORS.teal },
    line: { color: COLORS.teal, transparency: 100, width: 0 },
  });
}

function renderAiRuntime(model, outPath, pptx) {
  const layout = computeAiRuntimeLayout(model);
  const slide = pptx.addSlide();
  slide.background = { color: COLORS.bg };

  addText(slide, model.eyebrow, { x: 0.73, y: 0.44, w: 2.6, h: 0.18, fontFace: FONT_EN, fontSize: 10.5, bold: true, color: COLORS.teal });
  addText(slide, model.brand, { x: 10.70, y: 0.44, w: 1.9, h: 0.18, fontSize: 9.5, color: '8A97A6', align: 'right' });
  addText(slide, model.title, { x: 0.73, y: 0.84, w: 5.8, h: 0.30, fontSize: 28, bold: true, color: COLORS.navy });

  addRoundedRect(slide, pptx, { x: 0.73, y: 1.25, w: 11.87, h: 0.62, fill: { color: COLORS.card }, line: { color: COLORS.line, width: 1 } });
  addText(slide, model.lead, { x: 0.98, y: 1.41, w: 11.30, h: 0.32, fontSize: layout.leadFont, color: '253746', lineSpacingMultiple: 1.12 });

  addText(slide, '输入上下文 / STATE INPUTS', { x: 1.00, y: 2.05, w: 3.0, h: 0.15, fontFace: FONT_EN, fontSize: 10.2, bold: true, color: COLORS.teal });
  addRoundedRect(slide, pptx, { x: 0.92, y: 2.18, w: 11.50, h: 0.47, fill: { color: COLORS.softBlue }, line: { color: 'A7B7C7', width: 1 } });
  model.inputs.forEach((label, idx) => {
    const x = MAIN.inputXs[idx] || (1.12 + idx * 1.8);
    addRoundedRect(slide, pptx, { x, y: 2.28, w: MAIN.inputChipW, h: MAIN.inputChipH, fill: { color: COLORS.card }, line: { color: COLORS.line, width: 1 } });
    addText(slide, label, { x, y: 2.34, w: MAIN.inputChipW, h: 0.12, fontSize: layout.inputChipFonts[idx] || 10.6, bold: true, color: COLORS.navy, align: 'center' });
  });
  addDownArrow(slide, pptx, 6.50, 2.67);

  addRoundedRect(slide, pptx, { x: MAIN.boxX, y: MAIN.boxY, w: MAIN.boxW, h: MAIN.boxH, fill: { color: COLORS.card }, line: { color: COLORS.navy, width: 1.8 } });
  addText(slide, 'RUNTIME LAYER', { x: 1.14, y: 3.03, w: 2.3, h: 0.14, fontFace: FONT_EN, fontSize: 10.2, bold: true, color: COLORS.teal });
  addText(slide, model.runtimeTitle, { x: 4.80, y: 3.03, w: 3.8, h: 0.20, fontSize: 19.5, bold: true, color: COLORS.navy, align: 'center' });

  model.modules.forEach((m, idx) => {
    const x = MAIN.moduleXs[idx] || (1.13 + idx * 2.29);
    const modLayout = layout.modules[idx] || { titleFont: 12, enFont: 7.8, bodyFont: 8.4 };
    addRoundedRect(slide, pptx, { x, y: MAIN.moduleY, w: MAIN.moduleW, h: MAIN.moduleH, fill: { color: MODULE_FILLS[idx] || COLORS.card }, line: { color: 'A7B7C7', width: 1 } });
    slide.addShape(pptx.ShapeType.ellipse, { x: x + 0.13, y: MAIN.moduleY + 0.14, w: 0.22, h: 0.22, fill: { color: COLORS.navy }, line: { color: COLORS.navy, width: 1 } });
    addText(slide, m.num, { x: x + 0.13, y: MAIN.moduleY + 0.18, w: 0.22, h: 0.08, fontFace: FONT_EN, fontSize: 8.8, bold: true, color: 'FFFFFF', align: 'center' });
    addText(slide, m.title, { x: x + 0.40, y: MAIN.moduleY + 0.13, w: 1.42, h: 0.18, fontSize: modLayout.titleFont, bold: true, color: '253746' });
    addText(slide, m.en, { x: x + 0.40, y: MAIN.moduleY + 0.33, w: 1.42, h: 0.10, fontFace: FONT_EN, fontSize: modLayout.enFont, color: '8A97A6' });
    addText(slide, m.body, { x: x + 0.17, y: MAIN.moduleY + 0.58, w: 1.66, h: 0.50, fontSize: modLayout.bodyFont, color: COLORS.muted, lineSpacingMultiple: 1.04 });
    if (idx < model.modules.length - 1) addChevron(slide, pptx, x + MAIN.moduleW + 0.07, MAIN.moduleY + 0.48);
  });

  addText(slide, '支撑层 / SUPPORTING LAYER', { x: 1.14, y: 4.97, w: 2.8, h: 0.14, fontSize: 10.0, bold: true, color: COLORS.teal });
  model.supports.forEach((s, idx) => {
    const x = MAIN.supportXs[idx] || (1.13 + idx * 3.57);
    const sp = layout.supports[idx] || { titleFont: 10.1, bodyFont: 6.8 };
    addRoundedRect(slide, pptx, { x, y: MAIN.supportY, w: MAIN.supportW, h: MAIN.supportH, fill: { color: idx === 1 ? COLORS.card : COLORS.softGray }, line: { color: COLORS.line, width: 1 } });
    addText(slide, s.title, { x, y: MAIN.supportY + 0.06, w: MAIN.supportW, h: 0.10, fontSize: sp.titleFont, bold: true, color: '253746', align: 'center' });
    addText(slide, s.body, { x: x + 0.10, y: MAIN.supportY + 0.18, w: 3.12, h: 0.10, fontSize: sp.bodyFont, color: '8A97A6', align: 'center' });
  });

  addDownArrow(slide, pptx, 6.50, 5.70);

  addText(slide, '结果输出 / JUDGEMENT OUTPUTS', { x: 1.00, y: 5.86, w: 3.2, h: 0.15, fontSize: 10.2, bold: true, color: COLORS.teal });
  addRoundedRect(slide, pptx, { x: 0.92, y: 5.98, w: 11.50, h: 0.46, fill: { color: COLORS.softGreen }, line: { color: 'A7B7C7', width: 1 } });
  model.outputs.forEach((label, idx) => {
    const x = MAIN.outputXs[idx] || (1.18 + idx * 1.34);
    const w = MAIN.outputWidths[idx] || 1.22;
    addRoundedRect(slide, pptx, { x, y: 6.07, w, h: MAIN.outputH, fill: { color: COLORS.card }, line: { color: COLORS.line, width: 1 } });
    addText(slide, label, { x, y: 6.13, w, h: 0.10, fontSize: layout.outputs[idx]?.font || 7.4, bold: true, color: COLORS.navy, align: 'center' });
  });

  addRoundedRect(slide, pptx, { x: 2.10, y: 6.54, w: 9.13, h: 0.18, fill: { color: COLORS.softGray }, line: { color: COLORS.line, width: 0.8 } });
  slide.addShape(pptx.ShapeType.line, { x: 5.14, y: 6.56, w: 0, h: 0.14, line: { color: COLORS.line, width: 1 } });
  slide.addShape(pptx.ShapeType.line, { x: 8.18, y: 6.56, w: 0, h: 0.14, line: { color: COLORS.line, width: 1 } });
  (model.base || []).forEach((label, idx) => {
    addText(slide, label, { x: 2.22 + idx * 3.04, y: 6.59, w: 2.76, h: 0.06, fontSize: layout.base[idx]?.font || 7.0, bold: true, color: '8A97A6', align: 'center' });
  });

  addRoundedRect(slide, pptx, { x: 0.60, y: 6.82, w: 12.13, h: 0.45, fill: { color: COLORS.softBlue }, line: { color: COLORS.line, width: 1 } });
  addText(slide, model.takeaway, { x: 0.85, y: 6.95, w: 11.63, h: 0.14, fontSize: layout.takeawayFont, bold: true, color: COLORS.navy, align: 'center' });

  ensureDir(outPath);
  return { model, layout, write: () => pptx.writeFile({ fileName: outPath }) };
}

module.exports = {
  PRESET,
  MAIN,
  extractAiRuntime,
  renderAiRuntime,
};