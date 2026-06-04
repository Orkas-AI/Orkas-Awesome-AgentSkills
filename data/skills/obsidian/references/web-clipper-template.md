# Web Clipper Template

Use this reference when the user wants an Obsidian Web Clipper JSON template for articles, recipes, videos, product pages, documentation, papers, or another web content type.

## Required Inputs

- Template goal: generic article, site-specific template, or content-type template.
- Sample URL, HTML, DOM snapshot, or screenshot for validation.
- Desired note path, note body format, properties, tags, and behavior.
- Optional Obsidian Base schema or field list when the user wants properties to match an existing vault structure.

If no sample page or schema is available, create only a draft template and mark selectors/fields as unverified.

## Process

1. Clarify the target.
   - Template name.
   - Content type and site.
   - Required properties.
   - Note body format.
   - Whether to use tags or folders.

2. Check existing schema.
   - If the user provides `Bases/*.base` or property names, reuse those fields.
   - Avoid inventing new property names when an existing Base uses a different convention.

3. Inspect the sample page.
   - Prefer Schema.org JSON-LD, OpenGraph, meta tags, semantic headings, and stable attributes.
   - Use CSS selectors only when stable semantic sources are not enough.
   - Verify each selector or field against the available page data.

4. Build the JSON.
   - Include fields supported by Obsidian Web Clipper such as `schemaVersion`, `name`, `behavior`, `note`, `properties`, and `triggers` when appropriate.
   - Keep simple pages simple.
   - Use conditions or fallbacks only when they reduce empty fields or broken notes.

5. Validate.
   - Check that the output is valid JSON.
   - Mark every field as verified, unverified, or user-provided.
   - Explain what the user should test inside Web Clipper.

## Source Priority

| Need | Prefer |
|---|---|
| Title | Web Clipper title variable, `og:title`, page `h1` |
| Author | JSON-LD author, meta author, page byline |
| Date | JSON-LD `datePublished`, `article:published_time`, visible page date |
| Body | Web Clipper content variable or verified content selector |
| Image | `og:image`, JSON-LD image |
| Recipe ingredients | Recipe JSON-LD `recipeIngredient` |
| Recipe steps | Recipe JSON-LD `recipeInstructions` |
| Video metadata | VideoObject JSON-LD, YouTube/page metadata |
| Tags | User-specified tags, site category, content type |

## Output

```markdown
# Obsidian Web Clipper Template

## Template Summary
- Content type:
- Sample URL:
- Base/schema:
- Verified fields:

## Field Mapping
| Obsidian property | Source | Method | Verified |
|---|---|---|---|

## Importable JSON
Use a valid JSON block in the final answer:

```json
{
  "schemaVersion": "0.1.0",
  "name": "Template Name",
  "behavior": "create",
  "note": "# {{title}}\n\n> Source: {{url}}\n\n{{content}}",
  "properties": {}
}
```

## Validation And Limits
- Verified:
- Unverified:
- Needs user test:
```

## Boundaries

- Do not directly clip content into the user's vault.
- Do not bypass login, paywalls, bot checks, or site restrictions.
- Do not guess selectors that cannot be verified.
- Do not output arbitrary JSON that is unrelated to Obsidian Web Clipper.
