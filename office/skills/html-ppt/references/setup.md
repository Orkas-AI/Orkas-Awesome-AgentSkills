# Setup and portability

Use this file when installing `html-ppt` on a new machine, a new agent environment, or any host where dependency state is unknown.

## 1. Required runtime

- Node.js
- npm

Recommended:
- Node.js 18+

Core conversion flow does not require:
- Python
- browser automation
- LibreOffice
- Microsoft PowerPoint

## 2. Install dependencies

From the skill directory:

```bash
npm ci
```

If that fails because the lockfile is missing, stale, or intentionally not shipped:

```bash
npm install
```

## 3. Verify environment

Run the bundled self-check:

```bash
npm run check-env
```

This verifies:
- Node.js version
- required files
- whether npm dependencies can be resolved

## 4. Minimum file set to distribute

If you want another agent or machine to use the skill, ship at least:

- `SKILL.md`
- `package.json`
- `package-lock.json` if available
- `scripts/`
- `references/`

You may also ship `node_modules/`, but do not rely on it as the only installation path. Reinstall on the target machine if anything looks inconsistent.

## 5. First-run checklist for another agent

1. Read `SKILL.md`.
2. Read this file if environment/setup is unknown.
3. Run `npm ci` or `npm install`.
4. Run `npm run check-env`.
5. Read `references/preset-decision-rules.md` and decide whether to reuse, extend, or replace a preset.
6. If no preset matches, read `references/preset-template.md` and add a new preset instead of forcing conversion.
7. After generation, run QA.

## 6. Common failure modes

### Missing dependency

Symptoms:
- `Cannot find module 'cheerio'`
- `Cannot find module 'pptxgenjs'`

Fix:

```bash
npm ci
```

### Unsupported HTML family

Symptoms:
- extraction logic clearly does not fit the page
- output layout is structurally wrong, not just cosmetically off

Fix:
- create a new preset
- add extraction logic
- add layout/render logic
- add QA rules

### Copied skill works locally but not elsewhere

Symptoms:
- same files, different machine, runtime errors

Fix:
- reinstall dependencies on the target machine
- rerun `npm run check-env`
- avoid trusting copied `node_modules/` blindly

## 7. Portability principle

Treat this skill as a small Node project with agent instructions attached.

The agent side is driven by `SKILL.md`.
The runtime side is driven by `package.json` + `scripts/`.
The repeatability side is reinforced by `package-lock.json` + `scripts/check_env.js`.
