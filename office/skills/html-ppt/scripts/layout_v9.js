const { clamp, weightedLen, estimateLines, requiredTextHeightIn, fitFontSize, bulletBlock } = require('./layout_utils');

const MAIN = {
  leftX: 0.54,
  leftW: 2.83,
  centerX: 3.92,
  centerW: 5.58,
  rightX: 10.05,
  rightW: 2.75,
  mainY: 1.86,
  mainH: 5.28,
};

function buildRightItems(model, widthIn, availableH) {
  const itemGapOptions = [0.03, 0.02, 0.015];

  for (const itemGap of itemGapOptions) {
    for (let step = 0; step <= 10; step++) {
      const titleStart = 8.0 - step * 0.15;
      const mechStart = 6.6 - step * 0.10;
      const outputStart = 6.4 - step * 0.10;

      const items = (model.right.items || []).map((item) => {
        const titleFont = fitFontSize({
          text: item.title,
          widthIn,
          heightIn: 0.18,
          startSizePt: titleStart,
          minSizePt: 6.8,
          lineSpacing: 1.0,
          charFactor: 0.98,
        });
        const mechanismFont = fitFontSize({
          text: `核心机制：${item.mechanism}`,
          widthIn,
          heightIn: 0.30,
          startSizePt: mechStart,
          minSizePt: 5.8,
          lineSpacing: 1.0,
          charFactor: 0.96,
        });
        const outputFont = fitFontSize({
          text: `判断产出：${item.output}`,
          widthIn,
          heightIn: 0.22,
          startSizePt: outputStart,
          minSizePt: 5.6,
          lineSpacing: 1.0,
          charFactor: 0.94,
        });

        const titleH = clamp(requiredTextHeightIn(item.title, widthIn, titleFont, { lineSpacing: 1.0, charFactor: 0.98 }) + 0.015, 0.10, 0.18);
        const mechanismH = clamp(requiredTextHeightIn(`核心机制：${item.mechanism}`, widthIn, mechanismFont, { lineSpacing: 1.0, charFactor: 0.96 }) + 0.02, 0.16, 0.30);
        const outputH = clamp(requiredTextHeightIn(`判断产出：${item.output}`, widthIn, outputFont, { lineSpacing: 1.0, charFactor: 0.94 }) + 0.018, 0.14, 0.22);

        const topPad = 0.055;
        const gap1 = 0.03;
        const gap2 = 0.025;
        const bottomPad = 0.05;
        const h = topPad + titleH + gap1 + mechanismH + gap2 + outputH + bottomPad;

        return {
          titleFont,
          mechanismFont,
          outputFont,
          titleH,
          mechanismH,
          outputH,
          topPad,
          gap1,
          gap2,
          bottomPad,
          h,
        };
      });

      const totalH = items.reduce((sum, item) => sum + item.h, 0) + Math.max(0, items.length - 1) * itemGap;
      if (totalH <= availableH) {
        return { items, itemGap, totalH };
      }
    }
  }

  const itemGap = 0.015;
  const items = (model.right.items || []).map((item) => {
    const titleFont = 6.8;
    const mechanismFont = 5.8;
    const outputFont = 5.6;
    const titleH = clamp(requiredTextHeightIn(item.title, widthIn, titleFont, { lineSpacing: 1.0, charFactor: 0.98 }) + 0.015, 0.10, 0.18);
    const mechanismH = clamp(requiredTextHeightIn(`核心机制：${item.mechanism}`, widthIn, mechanismFont, { lineSpacing: 1.0, charFactor: 0.96 }) + 0.02, 0.16, 0.30);
    const outputH = clamp(requiredTextHeightIn(`判断产出：${item.output}`, widthIn, outputFont, { lineSpacing: 1.0, charFactor: 0.94 }) + 0.018, 0.14, 0.22);
    const topPad = 0.05;
    const gap1 = 0.028;
    const gap2 = 0.02;
    const bottomPad = 0.045;
    return { titleFont, mechanismFont, outputFont, titleH, mechanismH, outputH, topPad, gap1, gap2, bottomPad, h: topPad + titleH + gap1 + mechanismH + gap2 + outputH + bottomPad };
  });
  return { items, itemGap, totalH: items.reduce((sum, item) => sum + item.h, 0) + Math.max(0, items.length - 1) * itemGap };
}

function computeV9Layout(model) {
  const leftBodyW = MAIN.leftW - 0.48;
  const rightBodyW = MAIN.rightW - 0.40;

  const externalItemsFont = fitFontSize({
    text: bulletBlock(model.left.externalItems),
    widthIn: leftBodyW,
    heightIn: 0.82,
    startSizePt: 10.2,
    minSizePt: 9.2,
    lineSpacing: 1.08,
    charFactor: 1.02,
  });

  const internalItemsFont = fitFontSize({
    text: bulletBlock(model.left.internalItems),
    widthIn: leftBodyW,
    heightIn: 1.12,
    startSizePt: 9.8,
    minSizePt: 8.8,
    lineSpacing: 1.08,
    charFactor: 1.02,
  });

  const bridgeTextFont = fitFontSize({
    text: model.left.bridgeText,
    widthIn: leftBodyW,
    heightIn: 0.46,
    startSizePt: 8.7,
    minSizePt: 7.6,
    lineSpacing: 1.02,
    charFactor: 1.0,
  });

  const rightTitleFont = fitFontSize({
    text: model.right.title,
    widthIn: rightBodyW,
    heightIn: 0.54,
    startSizePt: 15.2,
    minSizePt: 13.4,
    lineSpacing: 1.0,
    charFactor: 1.0,
    slackIn: 0.02,
  });

  const rightTitleH = clamp(
    requiredTextHeightIn(model.right.title, rightBodyW, rightTitleFont, { lineSpacing: 1.0, charFactor: 1.0 }) + 0.06,
    0.40,
    0.54
  );

  const rightSubtitleFont = fitFontSize({
    text: model.right.subtitle,
    widthIn: rightBodyW,
    heightIn: 0.30,
    startSizePt: 8.1,
    minSizePt: 7.2,
    lineSpacing: 1.04,
    charFactor: 0.98,
    slackIn: 0.02,
  });

  const rightSubtitleH = clamp(
    requiredTextHeightIn(model.right.subtitle, rightBodyW, rightSubtitleFont, { lineSpacing: 1.04, charFactor: 0.98 }) + 0.04,
    0.22,
    0.30
  );

  const itemHeaderRel = 0.18 + rightTitleH + 0.07 + rightSubtitleH + 0.06;
  const itemBottomPad = 0.08;
  const rightItemsPack = buildRightItems(model, rightBodyW, MAIN.mainH - itemHeaderRel - itemBottomPad);

  const frameworkCardW = 1.30;
  const frameworkTitleH = 0.12;
  const frameworkBodyH = 0.20;
  const frameworkCards = (model.center.layers[1]?.frameworks || []).map((card) => ({
    titleFont: fitFontSize({
      text: card.title,
      widthIn: frameworkCardW - 0.12,
      heightIn: frameworkTitleH,
      startSizePt: 8.2,
      minSizePt: 7.0,
      lineSpacing: 1.0,
      charFactor: 0.94,
    }),
    bodyFont: fitFontSize({
      text: card.body,
      widthIn: frameworkCardW - 0.12,
      heightIn: frameworkBodyH,
      startSizePt: 6.9,
      minSizePt: 6.2,
      lineSpacing: 1.0,
      charFactor: 0.96,
    }),
  }));

  const productCardW = 2.58;
  const productTitleH = 0.12;
  const productBodyH = 0.12;
  const productCards = (model.center.layers[2]?.products || []).map((card) => ({
    titleFont: fitFontSize({
      text: card.title,
      widthIn: productCardW - 0.12,
      heightIn: productTitleH,
      startSizePt: 7.6,
      minSizePt: 6.8,
      lineSpacing: 1.0,
      charFactor: 0.94,
    }),
    bodyFont: fitFontSize({
      text: card.body,
      widthIn: productCardW - 0.12,
      heightIn: productBodyH,
      startSizePt: 6.6,
      minSizePt: 5.8,
      lineSpacing: 1.0,
      charFactor: 0.94,
    }),
  }));

  const chipWidths = [1.20, 1.14, 1.58, 1.56, 1.24, 1.40];
  const foundationChips = (model.center.layers[3]?.chips || []).map((chip, idx) => ({
    font: fitFontSize({
      text: chip,
      widthIn: (chipWidths[idx] || 1.20) - 0.04,
      heightIn: 0.12,
      startSizePt: 6.7,
      minSizePt: 6.0,
      lineSpacing: 1.0,
      charFactor: 0.98,
    })
  }));

  return {
    main: MAIN,
    left: {
      externalBox: { y: MAIN.mainY + 0.58, h: 1.30 },
      externalPill: { y: MAIN.mainY + 0.70 },
      externalText: { y: MAIN.mainY + 0.98, h: 0.82, font: externalItemsFont },
      bridgeBox: { y: MAIN.mainY + 2.03, h: 0.86 },
      bridgeTitle: { y: MAIN.mainY + 2.11, h: 0.10 },
      bridgeText: { y: MAIN.mainY + 2.25, h: 0.46, font: bridgeTextFont },
      internalBox: { y: MAIN.mainY + 3.01, h: 1.69 },
      internalPill: { y: MAIN.mainY + 3.13 },
      internalText: { y: MAIN.mainY + 3.40, h: 1.12, font: internalItemsFont },
    },
    right: {
      title: { y: MAIN.mainY + 0.18, h: rightTitleH, font: rightTitleFont },
      subtitle: { y: MAIN.mainY + 0.18 + rightTitleH + 0.07, h: rightSubtitleH, font: rightSubtitleFont },
      itemStartY: MAIN.mainY + itemHeaderRel,
      itemGap: rightItemsPack.itemGap,
      items: rightItemsPack.items,
      totalH: rightItemsPack.totalH,
      bottomPad: itemBottomPad,
    },
    center: {
      frameworkCard: { w: frameworkCardW, h: 0.46, titleH: frameworkTitleH, bodyH: frameworkBodyH, cards: frameworkCards },
      productCard: { w: productCardW, h: 0.34, titleH: productTitleH, bodyH: productBodyH, cards: productCards },
      foundationChip: { h: 0.22, chips: foundationChips },
    },
  };
}

module.exports = {
  MAIN,
  clamp,
  weightedLen,
  estimateLines,
  requiredTextHeightIn,
  fitFontSize,
  bulletBlock,
  computeV9Layout,
};