#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');
const PptxGenJS = require('pptxgenjs');
const { computeV9Layout } = require('./layout_v9');

const COLORS = {
  navy: '163A5F',
  teal: '2E8B8B',
  teal2: '5BA7A7',
  orange: 'D97706',
  bg: 'F7FAFC',
  card: 'FFFFFF',
  line: 'D8E1EA',
  muted: '5B6573',
  softBlue: 'ECF3FA',
  softGreen: 'EAF7F5',
  softOrange: 'FFF4E6',
  softGray: 'F1F4F8',
  lightTeal: 'F6FBFA',
  tealBorder: '4CA0A0',
  orangeLine: 'E8BE88',
};

const FONT_CN = 'PingFang SC';
const FONT_EN = 'Arial';
const PRESET = 'v9-architecture';

function usage() {
  console.error(`Usage: node scripts/html_to_pptx.js <input.html> <output.pptx> [--preset=${PRESET}] [--dump-model <file.json>]`);
}

function normalizeText(text) {
  return String(text || '')
    .replace(/\u00a0/g, ' ')
    .replace(/[\t\r\n]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeNodeText(text) {
  return String(text || '')
    .replace(/\u00a0/g, ' ')
    .replace(/[\t\r\n]+/g, ' ')
    .trim();
}

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function readArgs(argv) {
  const args = argv.slice(2);
  if (args.length < 2) return null;
  const opts = {
    input: args[0],
    output: args[1],
    preset: PRESET,
    dumpModel: null,
  };
  for (let i = 2; i < args.length; i++) {
    const arg = args[i];
    if (arg.startsWith('--preset=')) {
      opts.preset = arg.split('=')[1];
    } else if (arg === '--dump-model') {
      opts.dumpModel = args[i + 1];
      i += 1;
    }
  }
  return opts;
}

function extractCoreRuns($, el) {
  const runs = [];
  $(el)
    .contents()
    .each((_, node) => {
      if (node.type === 'text') {
        const t = normalizeNodeText(node.data);
        if (t) runs.push({ text: t, color: COLORS.navy, bold: false });
      } else if (node.type === 'tag') {
        const t = normalizeText($(node).text());
        if (!t) return;
        const style = $(node).attr('style') || '';
        const isTeal = /var\(--teal\)|#2E8B8B|teal/i.test(style);
        const isBold = /font-weight\s*:\s*(700|800|900|bold)/i.test(style);
        runs.push({ text: t, color: isTeal ? COLORS.teal : COLORS.navy, bold: isBold });
      }
    });
  return runs;
}

function extractArchitectureV9(htmlPath) {
  const html = fs.readFileSync(htmlPath, 'utf8');
  const $ = cheerio.load(html);

  const leftPanel = $('.main > .panel').eq(0);
  const centerWrap = $('.center-wrap');
  const rightPanel = $('.judgement-panel');

  const sections = leftPanel.find('.drivers-body > .section');
  const topLayer = centerWrap.find('.layer').eq(0);
  const agentLayer = centerWrap.find('.layer').eq(1);
  const productLayer = centerWrap.find('.layer').eq(2);
  const foundationLayer = centerWrap.find('.layer').eq(3);

  return {
    preset: PRESET,
    eyebrow: normalizeText($('.eyebrow').first().text()),
    brand: normalizeText($('.brand').first().text()),
    title: normalizeText($('.title').first().text()),
    coreRuns: extractCoreRuns($, $('.core-box').first()),
    left: {
      title: normalizeText(leftPanel.find('.panel-title').first().text()),
      externalTitle: normalizeText($(sections[0]).find('.section-header').first().text()),
      externalItems: $(sections[0])
        .find('li span:last-child')
        .toArray()
        .map((el) => normalizeText($(el).text()))
        .filter(Boolean),
      bridgeTitle: normalizeText(leftPanel.find('.driver-bridge-title').first().text()),
      bridgeText: normalizeText(leftPanel.find('.driver-bridge-text').first().text()),
      internalTitle: normalizeText($(sections[1]).find('.section-header').first().text()),
      internalItems: $(sections[1])
        .find('li span:last-child')
        .toArray()
        .map((el) => normalizeText($(el).text()))
        .filter(Boolean),
    },
    center: {
      layers: [topLayer, agentLayer, productLayer, foundationLayer].map((layer, idx) => {
        const $layer = $(layer);
        const $h3 = $layer.find('h3').first().clone();
        const tag = normalizeText($h3.find('.layer-tag').first().text());
        $h3.find('.layer-tag').remove();
        return {
          index: idx,
          tag,
          title: normalizeText($h3.text()),
          desc: normalizeText($layer.find('.desc').first().text()),
          frameworks: $layer.find('.fw-card').toArray().map((card) => ({
            title: normalizeText($(card).find('strong').first().text()),
            body: normalizeText($(card).find('span').first().text()),
          })),
          products: $layer.find('.mini').toArray().map((card) => ({
            title: normalizeText($(card).find('strong').first().text()),
            body: normalizeText($(card).find('span').first().text()),
          })),
          chips: $layer.find('.chip').toArray().map((chip) => normalizeText($(chip).text())).filter(Boolean),
        };
      }),
    },
    right: {
      title: normalizeText(rightPanel.find('.panel-title').first().text()),
      subtitle: normalizeText(rightPanel.find('.judgement-sub').first().text()),
      items: rightPanel.find('.judgement-item').toArray().map((item) => {
        const $item = $(item);
        const spans = $item.children('span').toArray().map((el) => normalizeText($(el).text()));
        return {
          title: normalizeText($item.find('strong').first().text()),
          mechanism: spans[0] ? spans[0].replace(/^核心机制：\s*/, '') : '',
          output: spans[1] ? spans[1].replace(/^判断产出：\s*/, '') : '',
        };
      }),
    },
  };
}

function addShape(slide, pptx, shape, opts = {}) {
  slide.addShape(shape, opts);
}

function addRoundedRect(slide, pptx, opts = {}) {
  addShape(slide, pptx, pptx.ShapeType.roundRect, {
    rectRadius: 0.14,
    fill: { color: COLORS.card },
    line: { color: COLORS.line, width: 1 },
    ...opts,
  });
}

function addText(slide, text, opts = {}) {
  const base = {
    fontFace: FONT_CN,
    color: COLORS.navy,
    margin: 0,
    fit: 'none',
    valign: 'top',
    breakLine: false,
  };
  slide.addText(text, { ...base, ...opts });
}

function addCircleArrow(slide, pptx, x, y) {
  addShape(slide, pptx, pptx.ShapeType.ellipse, {
    x,
    y,
    w: 0.28,
    h: 0.28,
    fill: { color: COLORS.card },
    line: { color: COLORS.line, width: 1 },
    shadow: { type: 'outer', color: '163A5F', opacity: 0.1, blur: 1, offset: 1, angle: 45 },
  });
  addText(slide, '→', {
    x,
    y: y + 0.012,
    w: 0.28,
    h: 0.18,
    fontFace: FONT_EN,
    fontSize: 14,
    bold: true,
    color: COLORS.teal,
    align: 'center',
    valign: 'middle',
  });
}

function bulletBlock(items) {
  return items.map((t) => `• ${t}`).join('\n');
}

function addTagPill(slide, pptx, x, y, text, fill) {
  addShape(slide, pptx, pptx.ShapeType.roundRect, {
    x,
    y,
    w: 0.34,
    h: 0.20,
    rectRadius: 0.18,
    fill: { color: fill },
    line: { color: fill, width: 1 },
  });
  addText(slide, text, {
    x,
    y: y + 0.02,
    w: 0.34,
    h: 0.10,
    fontFace: FONT_EN,
    fontSize: 8,
    bold: true,
    color: 'FFFFFF',
    align: 'center',
  });
}

function addHeaderPill(slide, pptx, x, y, w, text) {
  addShape(slide, pptx, pptx.ShapeType.roundRect, {
    x,
    y,
    w,
    h: 0.22,
    rectRadius: 0.20,
    fill: { color: COLORS.card },
    line: { color: COLORS.line, width: 1 },
  });
  addText(slide, text, {
    x,
    y: y + 0.04,
    w,
    h: 0.08,
    fontSize: 9.5,
    bold: true,
    color: COLORS.navy,
    align: 'center',
  });
}

function addSimpleCard(slide, pptx, x, y, w, h, title, body, fill, line, titleSize = 8.7, bodySize = 7.3, titleH = 0.10, bodyH = 0.20) {
  addRoundedRect(slide, pptx, {
    x, y, w, h,
    fill: { color: fill },
    line: { color: line, width: 1 },
    rectRadius: 0.10,
  });
  addText(slide, title, {
    x: x + 0.06,
    y: y + 0.06,
    w: w - 0.12,
    h: titleH,
    fontSize: titleSize,
    bold: true,
    color: COLORS.navy,
    align: 'center',
  });
  addText(slide, body, {
    x: x + 0.06,
    y: y + 0.18,
    w: w - 0.12,
    h: bodyH,
    fontSize: bodySize,
    color: COLORS.muted,
    align: 'center',
    valign: 'middle',
    lineSpacingMultiple: 1.0,
  });
}

function renderArchitectureV9(model, outPath) {
  const pptx = new PptxGenJS();
  const layout = computeV9Layout(model);
  const { leftX, leftW, centerX, centerW, rightX, rightW, mainY, mainH } = layout.main;

  pptx.layout = 'LAYOUT_WIDE';
  pptx.author = 'Orkas';
  pptx.company = '矢安科技';
  pptx.subject = 'HTML slide to editable PPTX prototype';
  pptx.title = model.title;
  pptx.theme = { headFontFace: FONT_CN, bodyFontFace: FONT_CN };

  const slide = pptx.addSlide();
  slide.background = { color: COLORS.bg };

  addShape(slide, pptx, pptx.ShapeType.ellipse, {
    x: 11.1, y: -0.7, w: 2.6, h: 2.0,
    fill: { color: COLORS.teal, transparency: 92 },
    line: { color: COLORS.teal, transparency: 100, width: 0 },
  });
  addShape(slide, pptx, pptx.ShapeType.ellipse, {
    x: -0.7, y: 5.8, w: 2.8, h: 2.0,
    fill: { color: COLORS.navy, transparency: 95 },
    line: { color: COLORS.navy, transparency: 100, width: 0 },
  });

  addText(slide, model.eyebrow, {
    x: 0.54, y: 0.44, w: 3.1, h: 0.14,
    fontFace: FONT_EN, fontSize: 10.5, bold: true, color: COLORS.muted,
  });
  addText(slide, model.brand, {
    x: 9.55, y: 0.44, w: 3.25, h: 0.14,
    fontSize: 10.2, bold: false, color: COLORS.muted, align: 'right',
  });
  addText(slide, model.title, {
    x: 0.54, y: 0.74, w: 5.5, h: 0.34,
    fontSize: 28, bold: true, color: COLORS.navy,
  });

  addRoundedRect(slide, pptx, {
    x: 0.54, y: 1.14, w: 12.26, h: 0.55,
    rectRadius: 0.18,
    fill: { color: COLORS.card, transparency: 3 },
    line: { color: COLORS.line, width: 1 },
    shadow: { type: 'outer', color: COLORS.navy, opacity: 0.08, blur: 3, offset: 1, angle: 45 },
  });
  addText(slide, model.coreRuns.map((run) => ({
    text: run.text,
    options: {
      fontFace: FONT_CN,
      fontSize: 15,
      bold: !!run.bold,
      color: run.color,
      breakLine: false,
    },
  })), {
    x: 0.70, y: 1.30, w: 11.95, h: 0.18,
    fontSize: 15, color: COLORS.navy, margin: 0,
  });

  addRoundedRect(slide, pptx, {
    x: leftX, y: mainY, w: leftW, h: mainH,
    rectRadius: 0.22,
    fill: { color: COLORS.card },
    line: { color: COLORS.line, width: 1 },
    shadow: { type: 'outer', color: COLORS.navy, opacity: 0.08, blur: 3, offset: 1, angle: 45 },
  });
  addText(slide, model.left.title, {
    x: leftX + 0.18, y: mainY + 0.18, w: leftW - 0.36, h: 0.22,
    fontSize: 19, bold: true, color: COLORS.navy,
  });

  addRoundedRect(slide, pptx, {
    x: leftX + 0.14, y: layout.left.externalBox.y, w: leftW - 0.28, h: layout.left.externalBox.h,
    rectRadius: 0.16,
    fill: { color: COLORS.softBlue },
    line: { color: 'D7E4F7', width: 1 },
  });
  addHeaderPill(slide, pptx, leftX + 0.24, layout.left.externalPill.y, 0.64, model.left.externalTitle);
  addText(slide, bulletBlock(model.left.externalItems), {
    x: leftX + 0.24, y: layout.left.externalText.y, w: leftW - 0.48, h: layout.left.externalText.h,
    fontSize: layout.left.externalText.font, color: COLORS.navy, lineSpacingMultiple: 1.08,
  });

  addRoundedRect(slide, pptx, {
    x: leftX + 0.14, y: layout.left.bridgeBox.y, w: leftW - 0.28, h: layout.left.bridgeBox.h,
    rectRadius: 0.16,
    fill: { color: COLORS.softOrange, transparency: 8 },
    line: { color: COLORS.orangeLine, width: 1, dashType: 'dash' },
  });
  addText(slide, model.left.bridgeTitle, {
    x: leftX + 0.24, y: layout.left.bridgeTitle.y, w: 0.8, h: layout.left.bridgeTitle.h,
    fontSize: 10, bold: true, color: COLORS.orange,
  });
  addText(slide, model.left.bridgeText, {
    x: leftX + 0.24, y: layout.left.bridgeText.y, w: leftW - 0.48, h: layout.left.bridgeText.h,
    fontSize: layout.left.bridgeText.font, bold: true, color: COLORS.navy, lineSpacingMultiple: 1.04,
  });

  addRoundedRect(slide, pptx, {
    x: leftX + 0.14, y: layout.left.internalBox.y, w: leftW - 0.28, h: layout.left.internalBox.h,
    rectRadius: 0.16,
    fill: { color: COLORS.softGreen },
    line: { color: 'D5EEDC', width: 1 },
  });
  addHeaderPill(slide, pptx, leftX + 0.24, layout.left.internalPill.y, 0.64, model.left.internalTitle);
  addText(slide, bulletBlock(model.left.internalItems), {
    x: leftX + 0.24, y: layout.left.internalText.y, w: leftW - 0.48, h: layout.left.internalText.h,
    fontSize: layout.left.internalText.font, color: COLORS.navy, lineSpacingMultiple: 1.08,
  });

  addCircleArrow(slide, pptx, 3.51, 4.30);
  addCircleArrow(slide, pptx, 9.65, 4.30);

  const gap = 0.10;
  const layer1H = 0.80;
  const layer2H = 1.07;
  const layer3H = 1.42;
  const layer4H = 1.59;

  const c1Y = mainY;
  const c2Y = c1Y + layer1H + gap;
  const c3Y = c2Y + layer2H + gap;
  const c4Y = c3Y + layer3H + gap;

  const layers = model.center.layers;

  addRoundedRect(slide, pptx, {
    x: centerX, y: c1Y, w: centerW, h: layer1H,
    rectRadius: 0.18,
    fill: { color: COLORS.card },
    line: { color: COLORS.line, width: 1 },
    shadow: { type: 'outer', color: COLORS.navy, opacity: 0.08, blur: 3, offset: 1, angle: 45 },
  });
  addTagPill(slide, pptx, centerX + 0.14, c1Y + 0.12, layers[0].tag, COLORS.navy);
  addText(slide, layers[0].title, {
    x: centerX + 0.56, y: c1Y + 0.13, w: 2.5, h: 0.14,
    fontSize: 13, bold: true,
  });
  addText(slide, layers[0].desc, {
    x: centerX + 0.16, y: c1Y + 0.40, w: centerW - 0.32, h: 0.22,
    fontSize: 9.2, color: COLORS.muted, lineSpacingMultiple: 1.08,
  });

  addRoundedRect(slide, pptx, {
    x: centerX, y: c2Y, w: centerW, h: layer2H,
    rectRadius: 0.18,
    fill: { color: COLORS.card },
    line: { color: COLORS.teal, width: 1.25 },
    shadow: { type: 'outer', color: COLORS.navy, opacity: 0.08, blur: 3, offset: 1, angle: 45 },
  });
  addShape(slide, pptx, pptx.ShapeType.roundRect, {
    x: centerX, y: c2Y, w: centerW, h: layer2H,
    rectRadius: 0.18,
    fill: { color: COLORS.teal, transparency: 93 },
    line: { color: COLORS.teal, transparency: 100, width: 0 },
  });
  addTagPill(slide, pptx, centerX + 0.14, c2Y + 0.12, layers[1].tag, COLORS.teal);
  addText(slide, layers[1].title, {
    x: centerX + 0.56, y: c2Y + 0.12, w: 3.5, h: 0.14,
    fontSize: 14.2, bold: true,
  });
  const fwStartX = centerX + 0.12;
  const fwY = c2Y + 0.46;
  const fwGap = 0.06;
  const fwW = layout.center.frameworkCard.w;
  layers[1].frameworks.forEach((card, idx) => {
    const font = layout.center.frameworkCard.cards[idx] || { titleFont: 8.2, bodyFont: 7.0 };
    addSimpleCard(
      slide,
      pptx,
      fwStartX + idx * (fwW + fwGap),
      fwY,
      fwW,
      layout.center.frameworkCard.h,
      card.title,
      card.body,
      'FFFFFF',
      'D7ECF2',
      font.titleFont,
      font.bodyFont,
      layout.center.frameworkCard.titleH,
      layout.center.frameworkCard.bodyH
    );
  });

  addRoundedRect(slide, pptx, {
    x: centerX, y: c3Y, w: centerW, h: layer3H,
    rectRadius: 0.18,
    fill: { color: COLORS.softOrange, transparency: 12 },
    line: { color: 'F4E4C9', width: 1 },
    shadow: { type: 'outer', color: COLORS.navy, opacity: 0.08, blur: 3, offset: 1, angle: 45 },
  });
  addTagPill(slide, pptx, centerX + 0.14, c3Y + 0.12, layers[2].tag, COLORS.orange);
  addText(slide, layers[2].title, {
    x: centerX + 0.56, y: c3Y + 0.13, w: 3.0, h: 0.14,
    fontSize: 13.4, bold: true,
  });
  const prodW = layout.center.productCard.w;
  const prodH = layout.center.productCard.h;
  const prodGapX = 0.12;
  const prodGapY = 0.08;
  const prodStartX = centerX + 0.14;
  const prodStartY = c3Y + 0.48;
  layers[2].products.forEach((card, idx) => {
    const row = Math.floor(idx / 2);
    const col = idx % 2;
    const font = layout.center.productCard.cards[idx] || { titleFont: 8.0, bodyFont: 6.8 };
    addSimpleCard(
      slide,
      pptx,
      prodStartX + col * (prodW + prodGapX),
      prodStartY + row * (prodH + prodGapY),
      prodW,
      prodH,
      card.title,
      card.body,
      COLORS.softGray,
      COLORS.line,
      font.titleFont,
      font.bodyFont,
      layout.center.productCard.titleH,
      layout.center.productCard.bodyH
    );
  });

  addRoundedRect(slide, pptx, {
    x: centerX, y: c4Y, w: centerW, h: layer4H,
    rectRadius: 0.18,
    fill: { color: COLORS.card },
    line: { color: COLORS.teal, width: 1.15 },
    shadow: { type: 'outer', color: COLORS.navy, opacity: 0.08, blur: 3, offset: 1, angle: 45 },
  });
  addShape(slide, pptx, pptx.ShapeType.roundRect, {
    x: centerX, y: c4Y, w: centerW, h: layer4H,
    rectRadius: 0.18,
    fill: { color: COLORS.teal, transparency: 96 },
    line: { color: COLORS.teal, transparency: 100, width: 0 },
  });
  addTagPill(slide, pptx, centerX + 0.14, c4Y + 0.12, layers[3].tag, COLORS.navy);
  addText(slide, layers[3].title, {
    x: centerX + 0.56, y: c4Y + 0.13, w: 3.2, h: 0.14,
    fontSize: 13.4, bold: true,
  });
  addText(slide, layers[3].desc, {
    x: centerX + 0.14, y: c4Y + 0.42, w: centerW - 0.28, h: 0.26,
    fontSize: 8.9, color: COLORS.muted, lineSpacingMultiple: 1.08,
  });
  const chipXs = [centerX + 0.14, centerX + 1.42, centerX + 2.68, centerX + 0.14, centerX + 1.78, centerX + 3.08];
  const chipYs = [c4Y + 0.88, c4Y + 0.88, c4Y + 0.88, c4Y + 1.18, c4Y + 1.18, c4Y + 1.18];
  const chipWs = [1.20, 1.14, 1.58, 1.56, 1.24, 1.40];
  layers[3].chips.forEach((chip, idx) => {
    addShape(slide, pptx, pptx.ShapeType.roundRect, {
      x: chipXs[idx] || centerX + 0.14,
      y: chipYs[idx] || c4Y + 0.88,
      w: chipWs[idx] || 1.2,
      h: layout.center.foundationChip.h,
      rectRadius: 0.16,
      fill: { color: COLORS.teal, transparency: 90 },
      line: { color: COLORS.teal, transparency: 70, width: 1 },
    });
    const font = layout.center.foundationChip.chips[idx]?.font || 6.7;
    addText(slide, chip, {
      x: (chipXs[idx] || centerX + 0.14) + 0.02,
      y: (chipYs[idx] || c4Y + 0.88) + 0.05,
      w: (chipWs[idx] || 1.2) - 0.04,
      h: 0.09,
      fontSize: font,
      bold: true,
      color: COLORS.navy,
      align: 'center',
    });
  });

  addRoundedRect(slide, pptx, {
    x: rightX, y: mainY, w: rightW, h: mainH,
    rectRadius: 0.22,
    fill: { color: COLORS.card },
    line: { color: COLORS.line, width: 1 },
    shadow: { type: 'outer', color: COLORS.navy, opacity: 0.08, blur: 3, offset: 1, angle: 45 },
  });
  addText(slide, model.right.title, {
    x: rightX + 0.18, y: layout.right.title.y, w: rightW - 0.36, h: layout.right.title.h,
    fontSize: layout.right.title.font, bold: true, color: COLORS.navy,
    lineSpacingMultiple: 1.0,
  });
  addText(slide, model.right.subtitle, {
    x: rightX + 0.18, y: layout.right.subtitle.y, w: rightW - 0.36, h: layout.right.subtitle.h,
    fontSize: layout.right.subtitle.font, color: COLORS.muted, lineSpacingMultiple: 1.04,
  });

  let currentRightY = layout.right.itemStartY;
  model.right.items.forEach((item, idx) => {
    const itemLayout = layout.right.items[idx] || { titleFont: 8.6, mechanismFont: 6.9, outputFont: 6.9, titleH: 0.11, mechanismH: 0.22, outputH: 0.16, topPad: 0.05, gap1: 0.03, gap2: 0.02, h: 0.75 };
    const y = currentRightY;
    addRoundedRect(slide, pptx, {
      x: rightX + 0.12, y, w: rightW - 0.24, h: itemLayout.h,
      rectRadius: 0.14,
      fill: { color: COLORS.card },
      line: { color: COLORS.line, width: 1 },
    });
    addText(slide, item.title, {
      x: rightX + 0.20, y: y + itemLayout.topPad, w: rightW - 0.40, h: itemLayout.titleH,
      fontSize: itemLayout.titleFont, bold: true, color: COLORS.navy,
    });
    const mechanismY = y + itemLayout.topPad + itemLayout.titleH + itemLayout.gap1;
    addText(slide, [
      { text: '核心机制：', options: { bold: true, color: COLORS.navy, fontFace: FONT_CN, fontSize: itemLayout.mechanismFont } },
      { text: item.mechanism, options: { color: COLORS.muted, fontFace: FONT_CN, fontSize: itemLayout.mechanismFont } },
    ], {
      x: rightX + 0.20, y: mechanismY, w: rightW - 0.40, h: itemLayout.mechanismH,
      margin: 0,
      lineSpacingMultiple: 1.0,
    });
    const outputY = mechanismY + itemLayout.mechanismH + itemLayout.gap2;
    addText(slide, [
      { text: '判断产出：', options: { bold: true, color: COLORS.navy, fontFace: FONT_CN, fontSize: itemLayout.outputFont } },
      { text: item.output, options: { color: COLORS.muted, fontFace: FONT_CN, fontSize: itemLayout.outputFont } },
    ], {
      x: rightX + 0.20, y: outputY, w: rightW - 0.40, h: itemLayout.outputH,
      margin: 0,
      lineSpacingMultiple: 1.0,
    });
    currentRightY += itemLayout.h + layout.right.itemGap;
  });

  ensureDir(outPath);
  return pptx.writeFile({ fileName: outPath });
}

async function main() {
  const opts = readArgs(process.argv);
  if (!opts) {
    usage();
    process.exit(1);
  }
  if (opts.preset !== PRESET) {
    console.error(`Unsupported preset: ${opts.preset}`);
    process.exit(2);
  }

  const model = extractArchitectureV9(opts.input);
  if (opts.dumpModel) {
    ensureDir(opts.dumpModel);
    fs.writeFileSync(opts.dumpModel, JSON.stringify(model, null, 2), 'utf8');
  }
  await renderArchitectureV9(model, opts.output);
  console.log(opts.output);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
