"""Enhanced content generation using OpenAI GPT-4 with quality improvements."""

import json
import os
import re

from openai import OpenAI
from prefect import task

from .config import COMPANY_CONTEXT, OPENAI_MODEL, TEMPERATURE
from .types import BlogContent


@task(name="Generate Blog Content", retries=2)
def generate_blog_content(
    topic: str,
    research_context: dict[str, str | list[str]] | None = None,
    content_depth: str = "comprehensive"  # Options: "comprehensive", "expert", "thought_leadership"
) -> BlogContent:
    """Generate high-value blog content with enhanced quality controls.

    Args:
        topic: The blog post topic
        research_context: Optional research data with trends, keywords, key points
        content_depth: Level of content depth and expertise required

    Returns:
        BlogContent with title, excerpt, content, category, tags, image_prompt

    Raises:
        ValueError: If API response is invalid or missing required fields
    """
    client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

    # Enhanced system prompt with quality emphasis
    system_prompt = """You are a senior content strategist and technical writer for Criztec Technologies with 15+ years of experience.

Your expertise includes:
- Creating content that ranks in top 3 Google positions
- Translating complex technical concepts into business value
- Writing with authentic voice that builds trust and authority
- Balancing SEO optimization with genuine reader value

Content Quality Standards:
- Every claim backed by reasoning or data
- Original insights beyond surface-level information
- Practical, actionable takeaways
- Storytelling that engages while educating
- Natural keyword integration that serves the reader

Always respond with valid JSON only, no markdown code blocks or other formatting."""

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

Primary Keywords: {keywords_str}
Target Audience: {research_context.get("target_audience", "UK businesses and tech professionals")}

Key Points to Address:
{key_points_str}

IMPORTANT: Use this research to create timely, relevant content that addresses current market needs."""

    # Content depth specifications
    depth_specs = {
        "comprehensive": {
            "word_count": "1200-1500",
            "approach": "Cover breadth with practical examples and clear explanations",
            "tone": "Accessible expert - confident but not condescending"
        },
        "expert": {
            "word_count": "1500-2000",
            "approach": "Deep technical analysis with implementation details and edge cases",
            "tone": "Technical authority - assume sophisticated audience"
        },
        "thought_leadership": {
            "word_count": "1800-2500",
            "approach": "Original perspectives, industry analysis, future predictions with strong POV",
            "tone": "Visionary - challenge conventions while backing claims with evidence"
        }
    }

    depth = depth_specs.get(content_depth, depth_specs["comprehensive"])

    user_prompt = f"""Write a {content_depth} blog post about "{topic}" for Criztec Technologies.

{COMPANY_CONTEXT}{research_section}

CONTENT DEPTH: {depth["approach"]}
TONE: {depth["tone"]}
TARGET LENGTH: {depth["word_count"]} words

HIGH-VALUE CONTENT REQUIREMENTS:

1. UNIQUE VALUE PROPOSITION
   - Lead with a compelling hook or counterintuitive insight
   - Provide original analysis, not rehashed generic advice
   - Include specific examples, case studies, or scenarios
   - Offer actionable frameworks or methodologies

2. STRUCTURE & READABILITY
   - Engaging introduction with clear value promise
   - Logical H2/H3 hierarchy that tells a story
   - Short paragraphs (2-4 sentences max)
   - Use of lists, callouts, and examples for scannability
   - Strong conclusion with clear next steps

3. SEO EXCELLENCE (Natural Integration)
   - Strategic keyword placement in title, headers, first 100 words
   - Semantic keyword variations throughout
   - Meta description that compels clicks (150-160 chars)
   - Internal linking suggestions noted in [brackets]
   - FAQ-style sections for featured snippet opportunities

4. CREDIBILITY & DEPTH
   - Include relevant statistics or data points (cite sources)
   - Address common objections or misconceptions
   - Show both benefits AND potential challenges
   - Technical accuracy with business context
   - Forward-looking insights or predictions

5. ENGAGEMENT ELEMENTS
   - Relatable analogies or metaphors
   - Practical tips or quick wins
   - Warning about common mistakes
   - Tools, resources, or templates mentioned
   - Clear calls-to-action where appropriate

AVOID:
- Generic platitudes or obvious statements
- Keyword stuffing or unnatural phrasing
- Surface-level listicles without substance
- Promotional language without educational value
- Jargon without explanation

Output MUST be valid JSON with fields: title, excerpt, content (markdown), category, tags (array), image_prompt, content_quality_score (self-assessment 1-10 with brief justification).

Respond ONLY with the JSON object, no other text or formatting.
Do NOT use escaped apostrophes (\\') - use regular apostrophes (').

JSON Format:
{{
  "title": "SEO-optimized, compelling title (60-70 characters)",
  "excerpt": "Click-worthy meta description with value promise (150-160 characters)",
  "content": "Full markdown content ({depth["word_count"]} words) with H2/H3 structure, examples, and actionable insights",
  "category": "Most Relevant Category",
  "tags": ["primary-keyword", "secondary-keyword", "topic-tag", "audience-tag", "content-type-tag"],
  "image_prompt": "Detailed DALL-E prompt for professional, on-brand hero image that captures the article's core message",
  "content_quality_score": 9,
  "quality_justification": "Brief explanation of why this content provides exceptional value"
}}"""

    # Use higher temperature for more creative, unique content
    enhanced_temperature = min(TEMPERATURE + 0.1, 1.0)

    response = client.chat.completions.create(
        model=OPENAI_MODEL,
        messages=[
            {"role": "system", "content": system_prompt},
            {"role": "user", "content": user_prompt},
        ],
        temperature=enhanced_temperature,
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
    required_fields = ["title", "excerpt", "content", "category", "tags", "image_prompt"]
    for field in required_fields:
        if field not in content_data:
            raise ValueError(f"Missing required field: {field}")

    # Quality validation
    word_count = len(content_data["content"].split())
    target_min = int(depth["word_count"].split("-")[0])

    if word_count < target_min:
        print(f"Warning: Content length ({word_count} words) below target ({depth['word_count']} words)")

    quality_score = content_data.get("content_quality_score", "N/A")
    print(f"Generated content: {content_data['title']}")
    print(f"Word count: {word_count}")
    print(f"Quality score: {quality_score}")

    if "quality_justification" in content_data:
        print(f"Quality note: {content_data['quality_justification']}")

    return content_data


@task(name="Review and Enhance Content")
def review_and_enhance_content(content: BlogContent) -> BlogContent:
    """Secondary pass to review and enhance generated content.

    This function performs a quality check and suggests improvements
    using a second GPT-4 call with a critic perspective.

    Args:
        content: Initial generated blog content

    Returns:
        Enhanced BlogContent with improvements applied
    """
    client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

    review_prompt = f"""You are a senior content editor reviewing this blog post for quality and impact.

CURRENT CONTENT:
Title: {content['title']}
Excerpt: {content['excerpt']}

Content:
{content['content']}

REVIEW CRITERIA:
1. Does the introduction hook readers immediately?
2. Are there specific examples and actionable insights?
3. Is the content unique or generic?
4. Are transitions smooth and logical?
5. Does it provide genuine value beyond basic information?
6. Are there opportunities for stronger storytelling?

Provide an enhanced version that:
- Strengthens weak sections
- Adds specific examples where generic
- Improves readability and flow
- Ensures every paragraph adds value
- Maintains the original intent and SEO optimization

Respond with JSON containing: enhanced_content (full markdown), improvements_made (brief list).
ONLY output valid JSON, no other text."""

    response = client.chat.completions.create(
        model=OPENAI_MODEL,
        messages=[{"role": "user", "content": review_prompt}],
        temperature=0.3,  # Lower temperature for consistent editing
    )

    review_json = response.choices[0].message.content
    if not review_json:
        return content

    review_json = re.sub(r"^```json\s*", "", review_json.strip())
    review_json = re.sub(r"\s*```$", "", review_json)

    try:
        review_data = json.loads(review_json)
        if "enhanced_content" in review_data:
            content["content"] = review_data["enhanced_content"]
            print(f"Content enhanced. Improvements: {review_data.get('improvements_made', 'Multiple refinements')}")
    except json.JSONDecodeError:
        print("Could not parse enhancement suggestions, using original content")

    return content
