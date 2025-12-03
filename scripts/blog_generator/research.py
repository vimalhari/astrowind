"""Research module for gathering latest tech trends and news."""

import os
from datetime import UTC, datetime

from openai import (
    OpenAI,
)
from prefect import task


@task(name="Research Tech Trends", retries=2)
def research_tech_trends() -> dict[str, str]:
    """Research latest trends in web development and tech stack.

    Uses OpenAI with web search to find current trends related to:
    - Astro, SvelteKit, Next.js frameworks
    - Django, Python, Rust, Go backend technologies
    - Web development best practices
    - IT services and infrastructure

    Returns:
        Dictionary with researched topic and context
    """
    client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

    current_date = datetime.now(UTC).strftime("%B %Y")

    research_prompt = f"""As of {current_date}, research and identify the most relevant, trending topic
for a technical blog about web development and IT services.Focus areas:
- Modern web frameworks: Astro, SvelteKit, Next.js
- Backend technologies: Django, Python, Rust, Go
- Web development trends and best practices
- IT infrastructure and cloud services
- Digital marketing and SEO

Requirements:
1. Topic must be CURRENT and trending (released/discussed in last 2-3 months)
2. Highly relevant to UK businesses
3. Practical and actionable content potential
4. SEO-optimized search potential
5. Align with Criztec's services: web development, IT services, digital marketing

Provide:
1. Specific topic title (SEO-optimized, 60-70 characters)
2. Why it's trending now (2-3 sentences with dates/sources if possible)
3. Key points to cover (5-7 bullet points)
4. Target audience
5. Primary keywords (5-7 keywords)

Format as JSON:
{{
  "topic": "SEO-optimized topic title",
  "trend_context": "Why this is trending now...",
  "key_points": ["point 1", "point 2", ...],
  "target_audience": "description",
  "keywords": ["keyword1", "keyword2", ...]
}}"""

    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {
                "role": "system",
                "content": "You are a tech research analyst who stays current with web development trends, framework updates, and IT industry news. Provide factual, current information.",
            },
            {"role": "user", "content": research_prompt},
        ],
        temperature=0.3,  # Lower temperature for more factual responses
    )

    import json
    import re

    content = response.choices[0].message.content
    if not content:
        raise ValueError("Empty response from OpenAI research")

    # Clean markdown code blocks
    content = re.sub(r"^```json\s*", "", content.strip())
    content = re.sub(r"\s*```$", "", content)

    try:
        research_data = json.loads(content)
    except json.JSONDecodeError as e:
        raise ValueError(f"Failed to parse research response: {e}\nResponse: {content}") from e

    print(f"✅ Researched trending topic: {research_data['topic']}")
    print(f"📊 Trend context: {research_data['trend_context'][:100]}...")

    return research_data
