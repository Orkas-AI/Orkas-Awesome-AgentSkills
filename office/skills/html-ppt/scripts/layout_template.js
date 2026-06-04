const { fitFontSize } = require('./layout_utils');

const MAIN = {
  headerX: 0.73,
  eyebrowY: 0.44,
  titleY: 0.86,
  subtitleY: 1.28,
  cardY: 2.04,
  cardW: 3.64,
  cardH: 3.98,
  cardXs: [0.73, 4.84, 8.95],
};

function computeTemplateLayout(model) {
  const titleFont = fitFontSize({
    text: model.title,
    widthIn: 8.5,
    heightIn: 0.34,
    startSizePt: 26,
    minSizePt: 20,
    lineSpacing: 1.0,
    charFactor: 0.98,
  });

  const subtitleFont = fitFontSize({
    text: model.subtitle,
    widthIn: 10.8,
    heightIn: 0.24,
    startSizePt: 12,
    minSizePt: 10,
    lineSpacing: 1.04,
    charFactor: 0.98,
  });

  const cards = (model.cards || []).map((card, idx) => ({
    x: MAIN.cardXs[idx] || MAIN.cardXs[0],
    y: MAIN.cardY,
    w: MAIN.cardW,
    h: MAIN.cardH,
    titleFont: fitFontSize({
      text: card.title,
      widthIn: MAIN.cardW - 0.32,
      heightIn: 0.18,
      startSizePt: 12,
      minSizePt: 10,
      lineSpacing: 1.0,
      charFactor: 0.96,
    }),
    bodyFont: fitFontSize({
      text: card.body,
      widthIn: MAIN.cardW - 0.32,
      heightIn: MAIN.cardH - 0.62,
      startSizePt: 8.6,
      minSizePt: 7.0,
      lineSpacing: 1.04,
      charFactor: 0.96,
    }),
  }));

  const takeawayFont = fitFontSize({
    text: model.takeaway,
    widthIn: 11.42,
    heightIn: 0.16,
    startSizePt: 12.6,
    minSizePt: 11.2,
    lineSpacing: 1.0,
    charFactor: 0.96,
  });

  return {
    main: MAIN,
    titleFont,
    subtitleFont,
    cards,
    takeawayFont,
  };
}

module.exports = {
  MAIN,
  computeTemplateLayout,
};