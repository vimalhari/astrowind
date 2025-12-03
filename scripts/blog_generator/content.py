"""Content generation using OpenAI GPT-4."""

import json
import os
import re

from openai import (
    OpenAI,  # noqa: codacy.tools-configs.codacy.python.openai.import-without-guardrails
)
from prefect import task

from .config import COMPANY_CONTEXT, OPENAI_MODEL, TEMPERATURE
from .types import BlogContent


@task(name="Generate Blog Content", retries=2)
def generate_blog_content(
    topic: str, research_context: dict[str, str | list[str]] | None = None
) -> BlogContent:
    """Generate blog post with optional research context for current trends.

    Args:
        topic: The blog post topic
        research_context: Optional research data with trends, keywords, key points

    Returns:
        BlogContent with title, excerpt, content, category, tags, image_prompt

    Raises:
        ValueError: If API response is invalid or missing required fields
    """
    client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

    system_prompt = (
        "You are an expert content marketing and technical writing specialist for Criztec Technologies. "
        "Create comprehensive, SEO-optimized content with the latest industry insights. "
        "Always respond with valid JSON only, no markdown code blocks or other formatting."
    )

    # Build enhanced prompt with research context
    research_section = ""
    if research_context:
        keywords_str = ", ".join(research_context.get("keywords", []))
        key_points_str = "\n".join(
            [f"- {point}" for point in research_context.get("key_points", [])]
        )

        research_section = f"""

CURRENT TRENDS & RESEARCH:
{research_context.get("trend_context", "")}

Target Keywords: {keywords_str}
Target Audience: {research_context.get("target_audience", "UK businesses and tech professionals")}

Key Points to Cover:
{key_points_str}

Use this research to make the content current, relevant, and trending."""

    user_prompt = f"""Write a comprehensive, SEO-optimized blog post about "{topic}" for Criztec Technologies.

{COMPANY_CONTEXT}{research_section}

SEO Requirements:
- Word count: 1200-1500 words
- Strategic keyword placement (natural, not forced)
- Clear H2 and H3 heading structure
- Meta description-optimized excerpt (150-160 characters)
- Include statistics, examples, and current trends
- Internal linking opportunities mentioned
- Strong search intent alignment

Output MUST be valid JSON with fields: title, excerpt, content (markdown), category, tags (array), image_prompt.
Respond ONLY with the JSON object, no other text.
Do NOT use apostrophes with backslash like \\' - just use regular apostrophe '

JSON Format:
{{
  "title": "SEO-optimized title (60-70 characters)",
  "excerpt": "Compelling meta description (150-160 characters)",
  "content": "Full markdown content (1200-1500 words with proper H2/H3 structure)",
  "category": "Category Name",
  "tags": ["tag1", "tag2", "tag3", "tag4", "tag5"],
  "image_prompt": "DALL-E prompt for professional hero image"
}}"""

    response = client.chat.completions.create(
        model=OPENAI_MODEL,
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_prompt},
        ],
        temperature=TEMPERATURE,
    )

    content_json = response.choices[0].message.content
    if not content_json:
        raise ValueError("Empty response from OpenAI")

    content_json = content_json.strip()

    # Remove markdown code blocks if present
    content_json = re.sub(r"^```json\s*", "", content_json)
    content_json = re.sub(r"\s*```$", "", content_json)

    try:
        content_data: BlogContent = json.loads(content_json)
    except json.JSONDecodeError as e:
        raise ValueError(
            f"Failed to parse OpenAI response as JSON: {e}\nResponse: {content_json}"
        ) from e

    # Validate required fields
    required_fields: list[str] = ["title", "excerpt", "content", "category", "tags", "image_prompt"]
    for field in required_fields:
        if field not in content_data:
            raise ValueError(f"Missing required field: {field}")

    print(f"Generated content for: {content_data['title']}")
    return content_data
