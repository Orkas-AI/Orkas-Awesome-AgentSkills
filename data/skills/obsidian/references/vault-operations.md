# Vault Operations

## Vault Structure

Typical Obsidian vault:

- Notes: `*.md`
- Config: `.obsidian/`
- Canvases: `*.canvas`
- Attachments: images, PDFs, audio, or other files in the user's chosen attachment folder

Usually avoid changing `.obsidian/` unless the user explicitly requests configuration work.

## Find The Active Vault

Obsidian desktop tracks vaults here:

```text
~/Library/Application Support/obsidian/obsidian.json
```

Use this as a source of truth when the user does not provide a vault path. If multiple vaults exist, use the one marked open when that is clear; otherwise ask the user to choose.

Optional `obsidian-cli` commands:

```bash
obsidian-cli print-default --path-only
obsidian-cli print-default
obsidian-cli set-default "<vault-folder-name>"
```

Do not hardcode vault paths into scripts.

## Common Operations

Search note names:

```bash
obsidian-cli search "query"
```

Search note contents:

```bash
obsidian-cli search-content "query"
```

Create a note:

```bash
obsidian-cli create "Folder/New note" --content "..." --open
```

Move or rename a note:

```bash
obsidian-cli move "old/path/note" "new/path/note"
```

Delete a note:

```bash
obsidian-cli delete "path/note"
```

Direct Markdown edits are often appropriate for content changes. Obsidian will pick them up.

## Safety Rules

- For search and read-only inspection, proceed once the vault is identified.
- For create operations, confirm the target folder and title if not obvious.
- For move, rename, delete, attachment relocation, bulk edits, or scripts, show the exact plan and get explicit confirmation.
- Protect sensitive files, attachments, canvases, and plugin-generated files.
- Avoid creating notes under hidden dot-folders; Obsidian URI handling may reject them.
- Preserve frontmatter, aliases, tags, embeds, backlinks, callouts, and attachment links unless the user asks otherwise.

## Result Checklist

- Vault path used.
- Files read, created, edited, moved, or deleted.
- Link update method.
- Skipped files and why.
- Risks or manual checks needed inside Obsidian.
