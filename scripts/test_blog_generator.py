"""Test script for blog generator components."""

import os
import sys
from pathlib import Path

# Add parent directory to path
sys.path.insert(0, str(Path(__file__).parent))


def test_research():
    """Test the research module."""
    print("\n" + "=" * 60)
    print("🔍 Testing Research Module")
    print("=" * 60)

    from blog_generator.research import research_tech_trends

    try:
        research_data = research_tech_trends()
        print(f"\n✅ Research successful!")
        print(f"📊 Topic: {research_data['topic']}")
        print(f"🎯 Keywords: {', '.join(research_data.get('keywords', [])[:3])}...")
        print(f"👥 Target Audience: {research_data.get('target_audience', 'N/A')}")
        print(f"\n📝 Trend Context (first 200 chars):")
        print(research_data.get("trend_context", "")[:200] + "...")
        return research_data
    except Exception as e:
        print(f"\n❌ Research failed: {e}")
        raise


def test_content(research_data):
    """Test content generation."""
    print("\n" + "=" * 60)
    print("✍️  Testing Content Generation")
    print("=" * 60)

    from blog_generator.content import generate_blog_content

    try:
        topic = research_data["topic"]
        print(f"\n📝 Generating content for: {topic}")

        content_data = generate_blog_content(topic, research_context=research_data)

        print(f"\n✅ Content generated successfully!")
        print(f"📰 Title: {content_data['title']}")
        print(f"📏 Word count: ~{len(content_data['content'].split())} words")
        print(f"🏷️  Tags: {', '.join(content_data['tags'])}")
        print(f"📁 Category: {content_data['category']}")
        print(f"\n📄 Excerpt (first 150 chars):")
        print(content_data["excerpt"][:150] + "...")
        return content_data
    except Exception as e:
        print(f"\n❌ Content generation failed: {e}")
        raise


def test_image(content_data):
    """Test image generation."""
    print("\n" + "=" * 60)
    print("🎨 Testing Image Generation")
    print("=" * 60)

    from blog_generator.image import generate_hero_image

    try:
        print(f"\n🖼️  Image prompt: {content_data['image_prompt'][:100]}...")

        image_data = generate_hero_image(content_data["image_prompt"])

        print(f"\n✅ Image generated successfully!")
        print(f"📦 Image size: {len(image_data):,} bytes")
        return image_data
    except Exception as e:
        print(f"\n❌ Image generation failed: {e}")
        raise


def test_formatting(content_data):
    """Test markdown formatting."""
    print("\n" + "=" * 60)
    print("📝 Testing Markdown Formatting")
    print("=" * 60)

    from blog_generator.formatter import format_markdown_post

    try:
        formatted_post = format_markdown_post(content_data)

        print(f"\n✅ Formatting successful!")
        print(f"🔗 Slug: {formatted_post['slug']}")
        print(f"📰 Title: {formatted_post['title']}")
        print(f"\n📄 Frontmatter preview:")
        print(formatted_post["markdown"][:300] + "...")
        return formatted_post
    except Exception as e:
        print(f"\n❌ Formatting failed: {e}")
        raise


def main():
    """Run all tests."""
    print("\n" + "=" * 60)
    print("🚀 BLOG GENERATOR TEST SUITE")
    print("=" * 60)

    # Check environment variables
    required_env = ["OPENAI_API_KEY"]
    missing_env = [var for var in required_env if not os.getenv(var)]

    if missing_env:
        print(f"\n❌ Missing required environment variables: {', '.join(missing_env)}")
        print("\nSet them with:")
        print('   $env:OPENAI_API_KEY="your-key"')
        return 1

    try:
        # Run tests
        research_data = test_research()
        content_data = test_content(research_data)
        image_data = test_image(content_data)
        formatted_post = test_formatting(content_data)

        print("\n" + "=" * 60)
        print("✅ ALL TESTS PASSED!")
        print("=" * 60)
        print(f"\n📊 Summary:")
        print(f"   Topic: {research_data['topic']}")
        print(f"   Title: {formatted_post['title']}")
        print(f"   Slug: {formatted_post['slug']}")
        print(f"   Word count: ~{len(content_data['content'].split())} words")
        print(f"   Image size: {len(image_data):,} bytes")
        print("\n💡 To commit to GitHub, set GITHUB_TOKEN and run:")
        print("   uv run python main.py")
        print("=" * 60 + "\n")

        return 0

    except Exception as e:
        print("\n" + "=" * 60)
        print(f"❌ TEST FAILED: {e}")
        print("=" * 60 + "\n")
        return 1


if __name__ == "__main__":
    sys.exit(main())
