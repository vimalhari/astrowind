"""Automated Blog Post Generator for Criztec Technologies."""

from .content import generate_blog_content
from .formatter import format_markdown_post
from .github import commit_to_github
from .image import generate_hero_image
from .research import research_tech_trends

__version__ = "1.0.0"

__all__ = [
    "commit_to_github",
    "format_markdown_post",
    "generate_blog_content",
    "generate_hero_image",
    "research_tech_trends",
]
