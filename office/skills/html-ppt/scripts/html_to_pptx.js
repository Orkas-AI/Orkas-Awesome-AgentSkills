#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const cheerio = require('cheerio');
const PptxGenJS = require('pptxgenjs');
const { PRESET: AI_RUNTIME_PRESET, extractAiRuntime, renderAiRuntime } = require('./ai_runtime_preset');

const V9_PRESET = 'v9-architecture';

function usage() {
  console.error(`Usage: node scripts/html_to_pptx.js <input.html> <output.pptx> [--preset=${V9_PRESET}|${AI_RUNTIME_PRESET}] [--dump-model <file.json>]`);
}

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

function readArgs(argv) {
  const args = argv.slice(2);
  if (args.includes('--help') || args.includes('-h')) return { help: true };
  if (args.length < 2) return null;
  const opts = {
    input: args[0],
    output: args[1],
    preset: null,
    dumpModel: null,
    help: false,
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

function detectPreset(inputPath, forcedPreset) {
  if (forcedPreset) return forcedPreset;
  const html = fs.readFileSync(inputPath, 'utf8');
  const $ = cheerio.load(html);
  const declared = $('body').attr('data-preset');
  if (declared) return declared;
  const lower = path.basename(inputPath).toLowerCase();
  if (lower.includes('runtime')) return AI_RUNTIME_PRESET;
  return V9_PRESET;
}

function runV9(opts) {
  const script = path.join(__dirname, 'html_to_pptx_v9.js');
  const args = [script, opts.input, opts.output, `--preset=${V9_PRESET}`];
  if (opts.dumpModel) args.push('--dump-model', opts.dumpModel);
  execFileSync(process.execPath, args, { stdio: 'inherit' });
}

async function runAiRuntime(opts) {
  const model = extractAiRuntime(opts.input);
  const pptx = new PptxGenJS();
  pptx.layout = 'LAYOUT_WIDE';
  pptx.author = 'Orkas';
  pptx.company = '矢安科技';
  pptx.subject = 'HTML slide to editable PPTX prototype';
  pptx.title = model.title;
  pptx.theme = { headFontFace: 'PingFang SC', bodyFontFace: 'PingFang SC' };

  const rendered = renderAiRuntime(model, opts.output, pptx);
  if (opts.dumpModel) {
    ensureDir(opts.dumpModel);
    fs.writeFileSync(opts.dumpModel, JSON.stringify(rendered.model, null, 2), 'utf8');
  }
  await rendered.write();
  console.log(opts.output);
}

async function main() {
  const opts = readArgs(process.argv);
  if (!opts) {
    usage();
    process.exit(1);
  }
  if (opts.help) {
    usage();
    process.exit(0);
  }
  const preset = detectPreset(opts.input, opts.preset);
  if (preset === V9_PRESET) return runV9(opts);
  if (preset === AI_RUNTIME_PRESET) return runAiRuntime(opts);
  throw new Error(`Unsupported preset: ${preset}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
