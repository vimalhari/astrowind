"""Utility functions for the blog generator."""

import re


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
