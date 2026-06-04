#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const skillDir = path.resolve(__dirname, '..');
const pkgPath = path.join(skillDir, 'package.json');
const requiredFiles = [
  'SKILL.md',
  'package.json',
  'scripts/html_to_pptx.js',
  'scripts/preflight_qa.js',
  'references/presets.md',
  'references/setup.md',
];

function parseArgs(argv) {
  return {
    json: argv.includes('--json'),
  };
}

function versionMajor(version) {
  const major = String(version || '').split('.')[0];
  return Number(major || 0);
}

function fileExists(relPath) {
  return fs.existsSync(path.join(skillDir, relPath));
}

function canResolve(dep) {
  try {
    require.resolve(dep, { paths: [skillDir] });
    return true;
  } catch (_) {
    return false;
  }
}

function main() {
  const opts = parseArgs(process.argv.slice(2));
  const result = {
    ok: true,
    skillDir,
    node: {
      version: process.versions.node,
      recommendedMinimum: '18.0.0',
      status: 'ok',
      note: 'Node.js 18+ is recommended.',
    },
    files: [],
    dependencies: [],
    warnings: [],
    errors: [],
  };

  const major = versionMajor(process.versions.node);
  if (major < 18) {
    result.node.status = 'warn';
    result.warnings.push(`Node.js ${process.versions.node} detected. Node.js 18+ is recommended.`);
  }

  for (const rel of requiredFiles) {
    const exists = fileExists(rel);
    result.files.push({ path: rel, exists });
    if (!exists) result.errors.push(`Missing required file: ${rel}`);
  }

  if (!fs.existsSync(pkgPath)) {
    result.errors.push('Missing package.json; cannot verify dependencies.');
  } else {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    const deps = pkg.dependencies || {};
    for (const dep of Object.keys(deps)) {
      const resolved = canResolve(dep);
      result.dependencies.push({ name: dep, required: deps[dep], resolved });
      if (!resolved) result.errors.push(`Dependency not installed or not resolvable: ${dep}`);
    }
  }

  result.ok = result.errors.length === 0;

  if (opts.json) {
    console.log(JSON.stringify(result, null, 2));
    process.exit(result.ok ? 0 : 1);
  }

  console.log('html-ppt environment check');
  console.log(`skillDir: ${result.skillDir}`);
  console.log(`node: ${result.node.version} (${result.node.status})`);
  console.log('');
  console.log('Required files:');
  for (const f of result.files) {
    console.log(`- [${f.exists ? 'OK' : 'MISSING'}] ${f.path}`);
  }
  console.log('');
  console.log('Dependencies:');
  for (const d of result.dependencies) {
    console.log(`- [${d.resolved ? 'OK' : 'MISSING'}] ${d.name} (${d.required})`);
  }

  if (result.warnings.length) {
    console.log('');
    console.log('Warnings:');
    for (const w of result.warnings) console.log(`- ${w}`);
  }

  if (result.errors.length) {
    console.log('');
    console.log('Errors:');
    for (const e of result.errors) console.log(`- ${e}`);
  }

  console.log('');
  console.log(result.ok ? 'PASS' : 'FAIL');
  process.exit(result.ok ? 0 : 1);
}

main();
