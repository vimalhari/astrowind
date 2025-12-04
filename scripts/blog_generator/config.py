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

# Google GenAI Configuration
GEMINI_MODEL: Final[str] = "gemini-2.5-flash"  # Fast, cost-effective, 1M context
TEMPERATURE: Final[float] = 0.7

# Imagen Configuration
IMAGEN_MODEL: Final[str] = "imagen-4.0-generate-001"  # Standard quality
IMAGEN_NUMBER_OF_IMAGES: Final[int] = 1
IMAGEN_IMAGE_SIZE: Final[str] = "2K"  # 2K resolution for hero images
IMAGEN_ASPECT_RATIO: Final[str] = "16:9"  # Widescreen for blog headers

# Paths
POST_PATH_TEMPLATE: Final[str] = "src/data/post/{slug}.md"
IMAGE_PATH_TEMPLATE: Final[str] = "src/assets/images/posts/{slug}.png"
IMAGE_FRONTMATTER_TEMPLATE: Final[str] = "~/assets/images/posts/{slug}.png"

# Website Configuration
WEBSITE_URL: Final[str] = "https://criztec.com"
