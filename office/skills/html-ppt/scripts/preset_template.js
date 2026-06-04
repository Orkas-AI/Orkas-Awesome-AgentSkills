const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const { computeTemplateLayout, MAIN } = require('./layout_template');

const COLORS = {
  navy: '163A5F',
  teal: '2E8B8B',
  bg: 'F6F8FB',
  card: 'FFFFFF',
  line: 'D3DBE6',
  muted: '627181',
  softBlue: 'ECF3FA',
};

const FONT_CN = 'PingFang SC';
const FONT_EN = 'Arial';
const PRESET = 'replace-me-preset';

function normalizeText(text) {
  return String(text || '')
    .replace(/\u00a0/g, ' ')
    .replace(/[\t\r\n]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function extractTemplatePage(htmlPath) {
  const $ = cheerio.load(fs.readFileSync(htmlPath, 'utf8'));

  return {
    preset: PRESET,
    eyebrow: normalizeText($('.eyebrow').first().text()),
    brand: normalizeText($('.brand').first().text()),
    title: normalizeText($('.title').first().text()),
    subtitle: normalizeText($('.subtitle').first().text()),
    cards: $('.card').toArray().map((el) => ({
      title: normalizeText($(el).find('.card-title').first().text()),
      body: normalizeText($(el).find('.card-body').first().text()),
    })),
    takeaway: normalizeText($('.takeaway').first().text()),
  };
}

function addRoundedRect(slide, pptx, opts = {}) {
  slide.addShape(pptx.ShapeType.roundRect, {
    rectRadius: 0.12,
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

function renderTemplatePage(model, outPath, pptx) {
  const layout = computeTemplateLayout(model);
  const slide = pptx.addSlide();
  slide.background = { color: COLORS.bg };

  addText(slide, model.eyebrow, {
    x: MAIN.headerX,
    y: MAIN.eyebrowY,
    w: 2.8,
    h: 0.16,
    fontFace: FONT_EN,
    fontSize: 10,
    bold: true,
    color: COLORS.teal,
  });

  addText(slide, model.brand, {
    x: 10.5,
    y: MAIN.eyebrowY,
    w: 1.8,
    h: 0.16,
    fontSize: 9.2,
    color: '8A97A6',
    align: 'right',
  });

  addText(slide, model.title, {
    x: MAIN.headerX,
    y: MAIN.titleY,
    w: 8.5,
    h: 0.30,
    fontSize: layout.titleFont,
    bold: true,
    color: COLORS.navy,
  });

  addText(slide, model.subtitle, {
    x: MAIN.headerX,
    y: MAIN.subtitleY,
    w: 10.8,
    h: 0.22,
    fontSize: layout.subtitleFont,
    color: COLORS.muted,
  });

  (model.cards || []).forEach((card, idx) => {
    const box = layout.cards[idx] || {
      x: MAIN.cardXs[idx] || MAIN.cardXs[0],
      y: MAIN.cardY,
      w: MAIN.cardW,
      h: MAIN.cardH,
      titleFont: 12,
      bodyFont: 8.5,
    };

    addRoundedRect(slide, pptx, {
      x: box.x,
      y: box.y,
      w: box.w,
      h: box.h,
      fill: { color: idx % 2 === 0 ? COLORS.card : COLORS.softBlue },
    });

    addText(slide, card.title, {
      x: box.x + 0.16,
      y: box.y + 0.14,
      w: box.w - 0.32,
      h: 0.16,
      fontSize: box.titleFont,
      bold: true,
      color: COLORS.navy,
    });

    addText(slide, card.body, {
      x: box.x + 0.16,
      y: box.y + 0.42,
      w: box.w - 0.32,
      h: box.h - 0.56,
      fontSize: box.bodyFont,
      color: COLORS.muted,
      lineSpacingMultiple: 1.04,
    });
  });

  addRoundedRect(slide, pptx, {
    x: 0.72,
    y: 6.74,
    w: 11.86,
    h: 0.42,
    fill: { color: COLORS.softBlue },
  });

  addText(slide, model.takeaway, {
    x: 0.94,
    y: 6.86,
    w: 11.42,
    h: 0.14,
    fontSize: layout.takeawayFont,
    bold: true,
    color: COLORS.navy,
    align: 'center',
  });

  ensureDir(outPath);
  return { model, layout, write: () => pptx.writeFile({ fileName: outPath }) };
}

module.exports = {
  PRESET,
  MAIN,
  extractTemplatePage,
  renderTemplatePage,
};