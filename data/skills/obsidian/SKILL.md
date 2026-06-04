---
name: obsidian
description_zh: "管理 Obsidian 知识库：发现 vault、搜索笔记、创建/编辑 Markdown、移动/重命名并维护 wikilink、生成 Web Clipper JSON 剪藏模板；适合\"查一下 Obsidian 笔记\"\"新建一篇 Obsidian 笔记\"\"移动这条笔记并更新链接\"\"做一个 Obsidian 剪藏模板\"；触发词：Obsidian、vault、笔记、wikilink、Markdown 知识库、Web Clipper、剪藏模板、Base"
description_en: "Manage Obsidian knowledge bases: discover vaults, search notes, create/edit Markdown, move/rename notes with wikilink safety, and create Obsidian Web Clipper JSON templates; For: \"search my Obsidian notes\", \"create an Obsidian note\", \"move this note and update links\", \"make an Obsidian clipping template\"; Triggers: Obsidian, vault, notes, wikilink, Markdown knowledge base, Web Clipper, clipping template, Base"
description: "Work with Obsidian vaults and Web Clipper templates. Use this skill whenever the user asks to search, create, edit, move, rename, or delete Obsidian notes, maintain wikilinks, inspect vault paths, or generate an Obsidian Web Clipper JSON template."
category: "data"
---

# Obsidian

Use this skill for Obsidian vault work and Obsidian Web Clipper template creation. An Obsidian vault is a normal folder of Markdown files plus `.obsidian/` configuration; treat it as user data and make changes conservatively.

## When To Use

- The user asks to find, search, read, create, edit, move, rename, or delete notes in an Obsidian vault.
- The user asks to identify the active vault or resolve vault paths.
- The user asks to preserve or update `[[wikilinks]]` while moving or renaming notes.
- The user asks to create, modify, or troubleshoot an Obsidian Web Clipper JSON template.

Do not use for:

- General file cleanup outside an Obsidian vault.
- Notion workspace reads/writes.
- Deep research, paper reading, or multi-source material organization unless the output is explicitly an Obsidian note.
- Directly scraping websites into the user's vault; this skill can create a Web Clipper template, not run a clipping workflow on the user's behalf.

## How To Call

1. Identify the task type:
   - `vault_operation`: vault discovery, note search, note create/edit, move/rename/delete, link maintenance.
   - `clipper_template`: Web Clipper JSON template generation, modification, or troubleshooting.

2. For vault operations:
   - Follow `references/vault-operations.md`.
   - Do not guess vault paths. Read Obsidian desktop config or use the user's explicit path.
   - For moves, renames, deletes, bulk edits, or scripts, show the exact plan and obtain confirmation before changing files.

3. For Web Clipper templates:
   - Follow `references/web-clipper-template.md`.
   - Use a real sample page, DOM snapshot, HTML, or screenshot when selector/schema validation is needed.
   - Output importable JSON and clearly mark verified and unverified fields.

4. Protect the vault:
   - Avoid editing `.obsidian/` unless the user explicitly asks and the change is understood.
   - Prefer direct Markdown edits for content updates.
   - Preserve frontmatter, existing headings, backlinks, embeds, and attachments unless the user asks to change them.
   - Never delete or move notes, attachments, canvases, or config files without explicit confirmation.

5. Return a concise result:
   - Vault/path used.
   - Files read or changed.
   - Link/template checks performed.
   - Skipped items, risks, and confirmation still needed.

## Default Output

For vault operations:

```markdown
# Obsidian Result

## Scope
- Vault:
- Operation:
- Files:

## Result
- ...

## Link / Safety Checks
- ...

## Next Step
- ...
```

For Web Clipper templates:

```markdown
# Obsidian Web Clipper Template

## Template Summary
- Content type:
- Sample page:
- Verified fields:

## Field Mapping
| Obsidian property | Source | Method | Verified |
|---|---|---|---|

## Importable JSON
Paste a valid JSON object here.

## Limits
- ...
```

## External Dependencies

- Obsidian desktop config is useful for discovering vaults: `~/Library/Application Support/obsidian/obsidian.json`.
- `obsidian-cli` is optional but useful for default vault selection, search, create, move, and delete operations.
- Obsidian URI handler is required for some `obsidian-cli create --open` flows.
- Web Clipper template work needs a sample page, HTML/DOM/screenshot, or user-provided field list.

## Limits And Known Issues

- Obsidian can have multiple vaults; always confirm or discover the intended one.
- `obsidian-cli move` is safer than raw `mv` because it can update common links, but still review the plan before execution.
- Direct filesystem edits are visible to Obsidian, but plugins may add conventions that are not obvious from Markdown alone.
- Dynamic websites, login pages, paywalls, and anti-scraping pages may prevent reliable Web Clipper selector validation.
- This skill does not install Obsidian plugins or guarantee exact behavior inside the user's local Obsidian app.
