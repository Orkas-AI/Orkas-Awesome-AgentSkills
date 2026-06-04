function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

function weightedLen(text) {
  let total = 0;
  for (const ch of String(text || '')) {
    if (/\s/.test(ch)) total += 0.3;
    else if (/^[\x00-\x7F]$/.test(ch)) total += 0.55;
    else total += 1.0;
  }
  return total;
}

function estimateLines(text, widthIn, fontSizePt, opts = {}) {
  const lineSpacing = opts.lineSpacing || 1.08;
  const widthPt = widthIn * 72;
  const avgCharPt = fontSizePt * (opts.charFactor || 1.0);
  const charsPerLine = Math.max(1, widthPt / avgCharPt);
  const parts = String(text || '').split(/\n+/);
  let lines = 0;
  for (const part of parts) {
    const len = Math.max(1, weightedLen(part));
    lines += Math.max(1, Math.ceil(len / charsPerLine));
  }
  return { lines, charsPerLine, lineHeightPt: fontSizePt * lineSpacing * 1.15 };
}

function requiredTextHeightIn(text, widthIn, fontSizePt, opts = {}) {
  const est = estimateLines(text, widthIn, fontSizePt, opts);
  return (est.lines * est.lineHeightPt) / 72;
}

function fitFontSize({ text, widthIn, heightIn, startSizePt, minSizePt = 6.0, lineSpacing = 1.08, charFactor = 1.0, slackIn = 0 }) {
  let size = startSizePt;
  while (size > minSizePt) {
    const need = requiredTextHeightIn(text, widthIn, size, { lineSpacing, charFactor }) + slackIn;
    if (need <= heightIn) return Number(size.toFixed(1));
    size -= 0.2;
  }
  return Number(minSizePt.toFixed(1));
}

function bulletBlock(items) {
  return (items || []).map((t) => `• ${t}`).join('\n');
}

module.exports = {
  clamp,
  weightedLen,
  estimateLines,
  requiredTextHeightIn,
  fitFontSize,
  bulletBlock,
};