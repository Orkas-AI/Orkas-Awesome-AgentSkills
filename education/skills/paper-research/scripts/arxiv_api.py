#!/usr/bin/env python3
"""Fetch ArXiv metadata through the public Atom API.

This script intentionally uses only the Python standard library so the skill
does not depend on uv, venvs, API keys, or third-party packages.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
import time
import urllib.error
import urllib.parse
import urllib.request
import xml.etree.ElementTree as ET


API_URL = "https://export.arxiv.org/api/query"
ATOM_NS = {"atom": "http://www.w3.org/2005/Atom"}
NATIVE_PREFIX_RE = re.compile(r"^(all|au|cat|ti|abs|id|jr|co|rn):", re.I)
ARXIV_ID_RE = re.compile(
    r"(?P<id>(?:\d{4}\.\d{4,5})(?:v\d+)?|[a-z-]+(?:\.[A-Z]{2})?/\d{7}(?:v\d+)?)",
    re.I,
)


def normalize_arxiv_id(value: str) -> str:
    value = value.strip()
    if not value:
        raise ValueError("empty arXiv id")

    value = value.replace("https://arxiv.org/abs/", "")
    value = value.replace("http://arxiv.org/abs/", "")
    value = value.replace("https://arxiv.org/pdf/", "")
    value = value.replace("http://arxiv.org/pdf/", "")
    value = value.removesuffix(".pdf")

    match = ARXIV_ID_RE.search(value)
    if not match:
        raise ValueError(f"could not parse arXiv id from: {value}")
    return match.group("id")


def build_query(raw_query: str) -> str:
    query = raw_query.strip()
    if not query:
        raise ValueError("query is required")
    if NATIVE_PREFIX_RE.match(query):
        return query
    return f"all:{query}"


def fetch_atom(params: dict[str, str | int]) -> str:
    encoded = urllib.parse.urlencode(params)
    request = urllib.request.Request(
        f"{API_URL}?{encoded}",
        headers={"User-Agent": "orkas-paper-research/1.0"},
    )
    last_error: Exception | None = None
    for attempt in range(3):
        try:
            with urllib.request.urlopen(request, timeout=30) as response:
                return response.read().decode("utf-8", errors="replace")
        except urllib.error.HTTPError as error:
            last_error = error
            if error.code not in {429, 500, 502, 503, 504}:
                raise
            time.sleep(2 * (attempt + 1))
        except urllib.error.URLError as error:
            last_error = error
            time.sleep(2 * (attempt + 1))
    raise RuntimeError(f"ArXiv API request failed after retries: {last_error}")


def text_of(parent: ET.Element, path: str) -> str:
    element = parent.find(path, ATOM_NS)
    if element is None or element.text is None:
        return ""
    return " ".join(element.text.split())


def links_of(entry: ET.Element) -> dict[str, str]:
    links: dict[str, str] = {}
    for link in entry.findall("atom:link", ATOM_NS):
        href = link.attrib.get("href", "")
        title = link.attrib.get("title", "")
        rel = link.attrib.get("rel", "")
        link_type = link.attrib.get("type", "")
        if title == "pdf" or link_type == "application/pdf":
            links["pdf"] = href
        elif rel == "alternate":
            links["abs"] = href
    return links


def parse_entry(entry: ET.Element) -> dict[str, object]:
    arxiv_url = text_of(entry, "atom:id")
    arxiv_id = normalize_arxiv_id(arxiv_url)
    authors = [
        text_of(author, "atom:name")
        for author in entry.findall("atom:author", ATOM_NS)
    ]
    links = links_of(entry)
    categories = [
        category.attrib.get("term", "")
        for category in entry.findall("atom:category", ATOM_NS)
        if category.attrib.get("term")
    ]
    primary_category = ""
    primary = entry.find("atom:category", ATOM_NS)
    if primary is not None:
        primary_category = primary.attrib.get("term", "")

    return {
        "arxiv_id": arxiv_id,
        "title": text_of(entry, "atom:title"),
        "authors": authors,
        "published": text_of(entry, "atom:published"),
        "updated": text_of(entry, "atom:updated"),
        "summary": text_of(entry, "atom:summary"),
        "primary_category": primary_category,
        "categories": categories,
        "abs_url": links.get("abs", arxiv_url),
        "pdf_url": links.get("pdf", f"https://arxiv.org/pdf/{arxiv_id}"),
    }


def parse_feed(xml_text: str) -> list[dict[str, object]]:
    root = ET.fromstring(xml_text)
    return [parse_entry(entry) for entry in root.findall("atom:entry", ATOM_NS)]


def search(args: argparse.Namespace) -> dict[str, object]:
    count = max(1, min(args.count, 50))
    query = build_query(args.query)
    xml_text = fetch_atom(
        {
            "search_query": query,
            "start": args.start,
            "max_results": count,
            "sortBy": args.sort_by,
            "sortOrder": args.sort_order,
        }
    )
    papers = parse_feed(xml_text)
    return {
        "ok": True,
        "mode": "search",
        "query": query,
        "count": len(papers),
        "papers": papers,
    }


def read(args: argparse.Namespace) -> dict[str, object]:
    arxiv_id = normalize_arxiv_id(args.id)
    xml_text = fetch_atom({"id_list": arxiv_id, "max_results": 1})
    papers = parse_feed(xml_text)
    if not papers:
        raise ValueError(f"paper not found: {arxiv_id}")
    return {
        "ok": True,
        "mode": "read",
        "id": arxiv_id,
        "paper": papers[0],
    }


def make_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Fetch ArXiv API metadata")
    subparsers = parser.add_subparsers(dest="mode", required=True)

    search_parser = subparsers.add_parser("search")
    search_parser.add_argument("--query", required=True)
    search_parser.add_argument("--count", type=int, default=5)
    search_parser.add_argument("--start", type=int, default=0)
    search_parser.add_argument(
        "--sort-by",
        choices=["submittedDate", "lastUpdatedDate", "relevance"],
        default="submittedDate",
    )
    search_parser.add_argument(
        "--sort-order",
        choices=["ascending", "descending"],
        default="descending",
    )
    search_parser.set_defaults(func=search)

    read_parser = subparsers.add_parser("read")
    read_parser.add_argument("--id", required=True)
    read_parser.set_defaults(func=read)

    return parser


def main(argv: list[str]) -> int:
    parser = make_parser()
    args = parser.parse_args(argv)
    try:
        result = args.func(args)
    except Exception as error:
        print(
            json.dumps({"ok": False, "error": str(error)}, ensure_ascii=False),
            file=sys.stderr,
        )
        return 1
    print(json.dumps(result, ensure_ascii=False, indent=2))
    return 0


if __name__ == "__main__":
    raise SystemExit(main(sys.argv[1:]))
