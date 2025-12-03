"""Type definitions for the blog generator."""

from typing import TypedDict


class BlogContent(TypedDict):
    """Structure for blog post content."""

    title: str
    excerpt: str
    content: str
    category: str
    tags: list[str]
    image_prompt: str


class FormattedPost(TypedDict):
    """Structure for formatted blog post."""

    markdown: str
    slug: str
    title: str
