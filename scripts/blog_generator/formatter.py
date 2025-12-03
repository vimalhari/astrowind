"""Markdown formatting for blog posts."""

from datetime import datetime

from prefect import task

from .config import IMAGE_FRONTMATTER_TEMPLATE, WEBSITE_URL
from .types import BlogContent, FormattedPost
from .utils import get_existing_post_slugs, sanitize_yaml, slugify


@task(name="Format Markdown Post")
def format_markdown_post(content_data: BlogContent) -> FormattedPost:
    """Format the blog post as markdown with frontmatter.

    Args:
        content_data: Dictionary containing blog content

    Returns:
        Tuple of (markdown content, slug, title)
    """
    base_slug = slugify(content_data["title"])
    existing_slugs = get_existing_post_slugs()

    # Ensure slug uniqueness - add timestamp suffix if needed
    slug = base_slug
    if slug in existing_slugs:
        timestamp = datetime.utcnow().strftime("%Y%m%d-%H%M")
        slug = f"{base_slug}-{timestamp}"
        print(f"Warning: Slug '{base_slug}' exists, using '{slug}' instead")
    date = datetime.utcnow().isoformat()

    title = sanitize_yaml(content_data["title"])
    excerpt = sanitize_yaml(content_data["excerpt"])
    image_path = IMAGE_FRONTMATTER_TEMPLATE.format(slug=slug)

    tags_yaml = "\n".join([f"  - {tag}" for tag in content_data["tags"]])

    frontmatter = f"""---
publishDate: {date}
title: "{title}"
excerpt: "{excerpt}"
image: {image_path}
category: {content_data["category"]}
tags:
{tags_yaml}
metadata:
  canonical: {WEBSITE_URL}/{slug}
---

{content_data["content"]}
"""

    print(f"Formatted post: {slug}")
    return FormattedPost(markdown=frontmatter, slug=slug, title=content_data["title"])
