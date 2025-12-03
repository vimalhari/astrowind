"""Utility functions for the blog generator."""

import re
from pathlib import Path


def get_existing_post_slugs(post_dir: str = "src/data/post") -> set[str]:
    """Get set of existing post slugs from the data directory.

    Args:
        post_dir: Path to the post directory (relative to repo root)

    Returns:
        Set of existing slugs (without .md/.mdx extension)
    """
    # Get repo root (3 levels up from this file: utils.py -> blog_generator -> scripts -> root)
    repo_root = Path(__file__).parent.parent.parent
    posts_path = repo_root / post_dir

    if not posts_path.exists():
        print(f"Warning: Posts directory not found at {posts_path}")
        return set()

    existing_slugs = set()
    for file_path in posts_path.glob("*.md*"):
        # Remove .md or .mdx extension
        slug = file_path.stem
        existing_slugs.add(slug)

    print(f"Found {len(existing_slugs)} existing blog posts")
    return existing_slugs


def slugify(text: str) -> str:
    """Convert text to URL-friendly slug.

    Args:
        text: The text to convert to a slug

    Returns:
        URL-friendly slug string
    """
    slug = text.lower().strip()
    slug = re.sub(r"\s+", "-", slug)
    slug = re.sub(r"[^\w-]+", "", slug)
    slug = re.sub(r"--+", "-", slug)
    slug = re.sub(r"^-+|-+$", "", slug)
    return slug


def sanitize_yaml(text: str) -> str:
    """Sanitize text for YAML frontmatter.

    Args:
        text: The text to sanitize

    Returns:
        Sanitized text safe for YAML
    """
    if not text:
        return ""
    return text.replace("\\", "").replace('"', '\\"')
