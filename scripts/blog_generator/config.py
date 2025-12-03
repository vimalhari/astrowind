"""Configuration for the blog generator."""

from typing import Final

# Core Technology Focus Areas for Research
TECH_FOCUS_AREAS: Final[list[str]] = [
    "Astro",
    "SvelteKit",
    "Next.js",
    "Django",
    "Python",
    "Rust",
    "Go",
    "TypeScript",
    "React",
    "Tailwind CSS",
]

# Service Areas for Content Alignment
SERVICE_AREAS: Final[list[str]] = [
    "Web Development",
    "Digital Marketing & SEO",
    "IT Infrastructure Management",
    "Cloud Computing (AWS, Azure, Google Cloud)",
    "Custom Software Development",
    "Mobile App Development",
    "IT Support & Managed Services",
]

# Company Context for Content Generation
COMPANY_CONTEXT: Final[str] = """
Criztec Technologies Services:
- Modern Web Development (Astro, SvelteKit, Next.js, Django)
- Digital Marketing & SEO Optimization
- IT Infrastructure & Cloud Services (AWS, Azure, Google Cloud)
- Custom Software Development (Python, Rust, Go, TypeScript)
- Mobile App Development
- IT Support & Managed Services

Content Requirements:
- UNIQUE, specific, actionable insights (no generic advice)
- UK Audience: British English spelling, UK regulations, £ GBP
- SEO-optimized: strategic keyword placement, proper headings, internal linking opportunities
- Natural integration of Criztec services and expertise
- Current trends and latest technology updates

Content Structure:
- Compelling intro with unique hook (100-150 words)
- 5-7 main sections with detailed insights and examples
- Real-world use cases and case studies
- Technical depth with practical implementation guidance
- Strong conclusion with clear CTA
- 1200-1500 words for optimal SEO
"""

# OpenAI Configuration
OPENAI_MODEL: Final[str] = "gpt-4o"
TEMPERATURE: Final[float] = 0.7
IMAGE_SIZE: Final[str] = "1792x1024"
IMAGE_QUALITY: Final[str] = "standard"

# Paths
POST_PATH_TEMPLATE: Final[str] = "src/data/post/{slug}.md"
IMAGE_PATH_TEMPLATE: Final[str] = "src/assets/images/posts/{slug}.png"
IMAGE_FRONTMATTER_TEMPLATE: Final[str] = "~/assets/images/posts/{slug}.png"

# Website Configuration
WEBSITE_URL: Final[str] = "https://criztec.com"
