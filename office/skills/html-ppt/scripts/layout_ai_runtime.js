const { clamp, fitFontSize } = require('./layout_utils');

const MAIN = {
  boxX: 0.92,
  boxY: 2.85,
  boxW: 11.50,
  boxH: 2.82,
  moduleY: 3.38,
  moduleW: 1.98,
  moduleH: 1.26,
  moduleXs: [1.13, 3.42, 5.71, 8.00, 10.29],
  supportY: 5.08,
  supportW: 3.32,
  supportH: 0.40,
  supportXs: [1.13, 4.70, 8.27],
  inputChipW: 1.62,
  inputChipH: 0.28,
  inputXs: [1.12, 2.92, 4.72, 6.52, 8.32, 10.12],
  outputWidths: [1.22, 1.22, 1.52, 1.22, 1.22, 1.22, 1.52],
  outputH: 0.28,
  outputXs: [1.18, 2.52, 3.86, 5.50, 6.84, 8.18, 9.52],
  baseWidths: [2.76, 2.76, 2.76],
};

function computeAiRuntimeLayout(model) {
  const leadFont = fitFontSize({
    text: model.lead,
    widthIn: 11.30,
    heightIn: 0.34,
    startSizePt: 14.2,
    minSizePt: 12.8,
    lineSpacing: 1.12,
    charFactor: 0.98,
  });

  const inputChipFonts = (model.inputs || []).map(() => 10.6);

  const modules = (model.modules || []).map((m) => ({
    titleFont: fitFontSize({
      text: m.title,
      widthIn: 1.42,
      heightIn: 0.20,
      startSizePt: 12.0,
      minSizePt: 10.6,
      lineSpacing: 1.0,
      charFactor: 0.96,
    }),
    enFont: fitFontSize({
      text: m.en,
      widthIn: 1.42,
      heightIn: 0.10,
      startSizePt: 7.8,
      minSizePt: 6.8,
      lineSpacing: 1.0,
      charFactor: 0.92,
    }),
    bodyFont: fitFontSize({
      text: m.body,
      widthIn: 1.66,
      heightIn: 0.50,
      startSizePt: 8.4,
      minSizePt: 7.2,
      lineSpacing: 1.04,
      charFactor: 0.96,
    }),
  }));

  const supports = (model.supports || []).map((s) => ({
    titleFont: fitFontSize({
      text: s.title,
      widthIn: 3.12,
      heightIn: 0.10,
      startSizePt: 10.1,
      minSizePt: 8.8,
      lineSpacing: 1.0,
      charFactor: 0.96,
    }),
    bodyFont: fitFontSize({
      text: s.body,
      widthIn: 3.06,
      heightIn: 0.12,
      startSizePt: 6.8,
      minSizePt: 6.0,
      lineSpacing: 1.0,
      charFactor: 0.94,
    }),
  }));

  const outputs = (model.outputs || []).map((t, idx) => ({
    font: fitFontSize({
      text: t,
      widthIn: (MAIN.outputWidths[idx] || 1.22) - 0.06,
      heightIn: 0.12,
      startSizePt: 7.4,
      minSizePt: 6.2,
      lineSpacing: 1.0,
      charFactor: 0.96,
    }),
  }));

  const base = (model.base || []).map(() => ({ font: 7.0 }));

  const takeawayFont = fitFontSize({
    text: model.takeaway,
    widthIn: 11.63,
    heightIn: 0.16,
    startSizePt: 13.0,
    minSizePt: 11.8,
    lineSpacing: 1.0,
    charFactor: 0.96,
  });

  return {
    main: MAIN,
    leadFont,
    inputChipFonts,
    modules,
    supports,
    outputs,
    base,
    takeawayFont,
  };
}

module.exports = {
  MAIN,
  computeAiRuntimeLayout,
};