"""Main entry point for the blog generator workflow."""

from prefect import flow

from blog_generator import (
    commit_to_github,
    format_markdown_post,
    generate_blog_content,
    generate_hero_image,
)
from blog_generator.research import research_tech_trends


@flow(name="Blog Post Generator", log_prints=True)
def blog_generator_flow() -> dict[str, str | bool]:
    """Main flow for automated blog post generation with trend research.

    Returns:
        Dictionary with success status, title, URL, and slug
    """
    print("🚀 Starting blog post generation workflow...")
    print("=" * 60)

    # Step 1: Research current trends
    print("\n📊 Step 1: Researching latest tech trends...")
    research_data = research_tech_trends()
    topic = research_data["topic"]
    print(f"✅ Selected trending topic: {topic}")

    # Step 2: Generate content with research context
    print("\n✍️  Step 2: Generating SEO-optimized content...")
    content_data = generate_blog_content(topic, research_context=research_data)

    # Step 3: Generate hero image
    print("\n🎨 Step 3: Generating hero image with Imagen 4.0...")
    image_data = generate_hero_image(content_data["image_prompt"])

    # Step 4: Format markdown with frontmatter
    print("\n📝 Step 4: Formatting markdown content...")
    formatted_post = format_markdown_post(content_data)

    # Step 5: Commit to GitHub
    print("\n🚀 Step 5: Committing to GitHub repository...")
    post_url = commit_to_github(
        formatted_post["markdown"],
        image_data,
        formatted_post["slug"],
        formatted_post["title"],
    )

    print("\n" + "=" * 60)
    print("✅ Blog post generation complete!")
    print(f"📝 Title: {formatted_post['title']}")
    print(f"📊 Word count: ~{len(content_data['content'].split())} words")
    print(f"🔗 URL: {post_url}")
    print("=" * 60)

    return {
        "success": True,
        "title": formatted_post["title"],
        "url": post_url,
        "slug": formatted_post["slug"],
    }


if __name__ == "__main__":
    blog_generator_flow()
