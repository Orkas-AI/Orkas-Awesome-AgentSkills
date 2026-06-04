#!/usr/bin/env python3
"""Deterministic local image processing for the image-process skill."""

from __future__ import annotations

import argparse
import glob
import json
import sys
from pathlib import Path

try:
    from PIL import Image, ImageOps
except ImportError as exc:  # pragma: no cover - exercised by users without Pillow.
    raise SystemExit("Pillow is required. Install with: python -m pip install Pillow") from exc


FORMAT_EXT = {
    "jpg": "jpg",
    "jpeg": "jpg",
    "png": "png",
    "webp": "webp",
    "tiff": "tiff",
    "bmp": "bmp",
}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Process local image files without overwriting originals.")
    parser.add_argument("--input", action="append", required=True, help="Input file path or glob. May be repeated.")
    parser.add_argument("--output-dir", required=True, help="Directory for processed files.")
    parser.add_argument("--width", type=int, help="Target width.")
    parser.add_argument("--height", type=int, help="Target height.")
    parser.add_argument("--fit", choices=("contain", "cover", "stretch"), default="contain")
    parser.add_argument("--format", choices=sorted(FORMAT_EXT), help="Output format.")
    parser.add_argument("--quality", type=int, default=90, help="JPEG/WebP quality, 1-100.")
    parser.add_argument("--strip-exif", action="store_true", help="Do not preserve metadata.")
    parser.add_argument("--suffix", default="processed", help="Filename suffix.")
    return parser.parse_args()


def expand_inputs(patterns: list[str]) -> list[Path]:
    files: list[Path] = []
    for pattern in patterns:
        matches = glob.glob(pattern)
        if matches:
            files.extend(Path(item) for item in matches)
        else:
            files.append(Path(pattern))
    seen: set[Path] = set()
    unique: list[Path] = []
    for path in files:
        resolved = path.expanduser()
        if resolved not in seen:
            seen.add(resolved)
            unique.append(resolved)
    return unique


def target_size(img: Image.Image, width: int | None, height: int | None) -> tuple[int, int] | None:
    if not width and not height:
        return None
    src_w, src_h = img.size
    if width and height:
        return width, height
    if width:
        return width, max(1, round(src_h * (width / src_w)))
    assert height is not None
    return max(1, round(src_w * (height / src_h))), height


def resize_image(img: Image.Image, size: tuple[int, int] | None, fit: str) -> Image.Image:
    if size is None:
        return img
    if fit == "stretch":
        return img.resize(size, Image.Resampling.LANCZOS)
    if fit == "cover":
        return ImageOps.fit(img, size, method=Image.Resampling.LANCZOS)
    result = img.copy()
    result.thumbnail(size, Image.Resampling.LANCZOS)
    return result


def output_path(src: Path, output_dir: Path, fmt: str | None, suffix: str) -> Path:
    ext = FORMAT_EXT.get((fmt or src.suffix.lstrip(".")).lower(), src.suffix.lstrip(".") or "png")
    return output_dir / f"{src.stem}-{suffix}.{ext}"


def process_one(src: Path, args: argparse.Namespace, output_dir: Path) -> dict:
    if not src.exists() or not src.is_file():
        raise FileNotFoundError(str(src))

    with Image.open(src) as opened:
        img = ImageOps.exif_transpose(opened)
        fmt = args.format or (opened.format or src.suffix.lstrip(".") or "png").lower()
        size = target_size(img, args.width, args.height)
        img = resize_image(img, size, args.fit)

        if fmt.lower() in {"jpg", "jpeg"} and img.mode in {"RGBA", "LA", "P"}:
            img = img.convert("RGB")

        out = output_path(src, output_dir, fmt, args.suffix)
        save_kwargs = {}
        if fmt.lower() in {"jpg", "jpeg", "webp"}:
            save_kwargs["quality"] = max(1, min(100, args.quality))
            save_kwargs["optimize"] = True
        if not args.strip_exif and "exif" in opened.info:
            save_kwargs["exif"] = opened.info["exif"]

        img.save(out, format=fmt.upper() if fmt.lower() != "jpg" else "JPEG", **save_kwargs)

    return {
        "path": str(out),
        "dimensions": f"{img.size[0]}x{img.size[1]}",
        "format": fmt.upper(),
        "file_size": out.stat().st_size,
        "operations": [
            op for op, enabled in [
                ("resize", bool(args.width or args.height)),
                ("convert", bool(args.format)),
                ("strip_exif", bool(args.strip_exif)),
            ] if enabled
        ],
    }


def main() -> int:
    args = parse_args()
    output_dir = Path(args.output_dir).expanduser()
    output_dir.mkdir(parents=True, exist_ok=True)

    outputs = []
    failed = []
    for src in expand_inputs(args.input):
        try:
            outputs.append(process_one(src, args, output_dir))
        except Exception as exc:  # noqa: BLE001 - report per-file failures to the user.
            failed.append({"path": str(src), "error": str(exc)})

    result = {"ok": not failed, "outputs": outputs, "failed": failed}
    print(json.dumps(result, ensure_ascii=False, indent=2))
    return 0 if not failed else 1


if __name__ == "__main__":
    raise SystemExit(main())
