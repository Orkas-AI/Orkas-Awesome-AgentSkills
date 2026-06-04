---
name: image-process
description_zh: 对已有本地图像做确定性处理：改尺寸、裁剪、转格式、压缩、设置质量、去 EXIF、批量规范化，并保留原图；适合“把这些图转成 webp 并压缩”“裁成 1080x1080”“批量去掉图片元数据”；触发词：改尺寸、裁剪、转格式、webp、压缩、去 EXIF、批量处理、图片后处理
description_en: Deterministically process local image files: resize, crop, convert format, compress, set quality, strip EXIF, batch-normalize, and preserve originals. Use for existing image files when no semantic AI generation/editing is needed.
category: creation
---

# Image Process

## When to Use

Use this skill when the user already has local image files and needs deterministic post-processing:

- Resize, crop, thumbnail, rotate, convert format, compress, set quality, or strip EXIF.
- Normalize a batch of images for web, social, app, marketplace, or document delivery.
- Produce non-destructive output files while preserving originals.

Do not use this skill for semantic AI edits such as "remove this person", "make the subject prettier", "change the background to a beach", or "generate a new image". Those require image design/editing or an AI image tool.

## Workflow

1. Confirm inputs:
   - exact file paths or glob range.
   - target operation, dimensions, output format, output directory, and whether metadata should be stripped.
2. Protect originals:
   - default to writing into an output directory or adding a suffix.
   - do not overwrite originals unless the user explicitly confirms overwrite.
3. For batches:
   - list or count matched files before processing.
   - confirm if the operation is destructive, lossy, or large-scale.
4. Process in a stable order:
   - auto-orient from EXIF, crop/fit, resize, convert, strip metadata, save quality.
5. Verify outputs:
   - path, dimensions, format, file size, and failures.

## Script

Use `scripts/image_process.py` when Python and Pillow are available.

Examples:

```bash
python scripts/image_process.py --input cover.png --output-dir out --width 1080 --format webp --quality 85 --strip-exif
python scripts/image_process.py --input "images/*.png" --output-dir out --width 1080 --height 1080 --fit cover --format jpg --quality 90
```

Install dependency if needed:

```bash
python -m pip install Pillow
```

Do not install dependencies without user approval in restricted or shared environments.

## Return Format

Return:

```json
{
  "ok": true,
  "outputs": [
    {
      "path": "output.webp",
      "dimensions": "1080x1080",
      "format": "WEBP",
      "file_size": 123456,
      "operations": ["resize", "convert", "strip_exif"]
    }
  ],
  "failed": []
}
```

For failures, return the failed files and cause.

## Dependencies

- Python 3.
- Pillow for image processing.
- Local read/write permissions.
- Optional HEIC/HEIF support may require extra libraries.

## Limits and Known Issues

- This skill does not perform AI semantic edits.
- Format conversion can be lossy.
- EXIF stripping removes metadata such as camera, date, and GPS fields.
- Cropping with `cover` may remove image edges.
- Large batches should be previewed before execution.

## Examples

User: "把 generated 目录下的 png 都转成 1080 宽的 webp，质量 85，去掉 EXIF。"

Handling: count matching files, confirm output directory, run the script with width, format, quality, and strip-exif, then return output paths and any failures.
