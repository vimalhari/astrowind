# Blog Post Generator

Automated blog post generation script using OpenAI's GPT-4 and DALL-E 3.

## Features

- 🤖 **AI-Powered Content Generation**: Uses GPT-4 for high-quality, unique blog posts
- 🎨 **DALL-E 3 Image Generation**: Professional header images with automatic fallback
- 🔍 **Smart Duplicate Detection**: Advanced word-overlap algorithm prevents duplicate content
- 📝 **Slug Collision Prevention**: Auto-increments filenames to prevent overwrites
- 🔒 **YAML Sanitization**: Prevents injection attacks in frontmatter
- ⏱️ **Rate Limiting**: Built-in delays to avoid API rate limits
- 🌍 **UK-Focused Content**: British English and UK-specific regulations

## Setup

### Prerequisites

- Node.js 18+ or 20+
- OpenAI API key

### Environment Variables

Create a `.env` file or set these environment variables:

```bash
# Required
OPENAI_API_KEY=your-api-key-here

# Optional
OPENAI_MODEL=gpt-4o                     # Default: gpt-4o
ENABLE_IMAGE_GENERATION=true            # Default: true, set to 'false' to disable
```

### Installation

```bash
npm install
```

## Usage

### Generate a Random Post

```bash
node scripts/generate-post.js
```

### Generate a Post on a Specific Topic

```bash
node scripts/generate-post.js "Cloud Migration Strategy"
```

## How It Works

### 1. Duplicate Detection

The script uses an advanced word-overlap similarity algorithm to detect duplicates:

- **Exact Match**: Title exactly matches an existing post
- **High Overlap**: 5+ words overlap with an existing post
- **High Similarity**: 70%+ similarity with at least 3 words in common

**Examples:**

| New Title | Existing Title | Result | Reason |
|-----------|---------------|--------|--------|
| "Cloud Migration Strategy" | "Cloud Migration Strategy" | ❌ Duplicate | Exact match |
| "Ultimate Cloud Migration Strategy Guide" | "Cloud Migration Strategy" | ❌ Duplicate | 100% similarity (3/3 words) |
| "Cloud Security Best Practices" | "Cloud Migration Strategy" | ✅ Unique | Only 1 word overlap |
| "Docker Containerization Guide" | "Complete Guide to Docker" | ✅ Unique | 60% similarity (below threshold) |

### 2. Slug Collision Prevention

If two posts would create the same filename, the script automatically increments:

```
cloud-migration-guide.md
cloud-migration-guide-1.md
cloud-migration-guide-2.md
```

### 3. Image Generation

**With DALL-E 3 (default):**
- Generates professional, unique images
- 1792x1024 landscape format
- ~$0.08 per image (standard quality)
- Falls back to placeholder on error

**Disabled (`ENABLE_IMAGE_GENERATION=false`):**
- Uses placeholder: `/images/blog-placeholder.webp`
- No API calls or costs

### 4. Content Generation

Posts are generated with:
- 800-1200 words
- SEO-optimized title and excerpt
- 3-5 relevant tags
- Proper category
- British English spelling
- UK-specific references where applicable

## Output Format

Generated posts are saved to `src/data/post/` with this frontmatter:

```yaml
---
publishDate: 2025-12-03T00:00:00.000Z
title: "Your Post Title"
excerpt: "A compelling summary of the post"
image: "https://oaidalleapiprodscus.blob.core.windows.net/..."
category: Technology
tags:
  - cloud-computing
  - aws
  - azure
metadata:
  canonical: https://criztec.com/your-post-title
---

Post content here...
```

## Cost Considerations

### OpenAI API Costs (as of 2024)

- **GPT-4o**: ~$0.005 per post (content generation)
- **DALL-E 3 Standard**: ~$0.080 per image
- **Total per post**: ~$0.085

To reduce costs:
- Set `ENABLE_IMAGE_GENERATION=false` to use placeholders
- Use `gpt-3.5-turbo` model (lower quality, cheaper)

## Rate Limiting

The script includes built-in rate limiting:
- 3-second delay between API calls
- Prevents hitting OpenAI rate limits
- Configurable via `CONFIG.apiDelay`

## Error Handling

The script gracefully handles:
- API failures (with retries)
- Duplicate content (regenerates with unique angle)
- Slug collisions (auto-increments)
- Image generation failures (uses placeholder)
- YAML injection attempts (sanitizes input)

## Troubleshooting

### "OPENAI_API_KEY environment variable is not set"

Set your API key:
```bash
export OPENAI_API_KEY="your-api-key-here"
```

### "Unable to generate unique content after retries"

The script tried 2 times but couldn't generate a unique title. Try:
- Using a more specific topic
- Checking if too many similar posts already exist
- Manually specifying a different topic

### Image generation fails

The script will automatically fall back to placeholder images. Check:
- Your API key has DALL-E 3 access
- You haven't hit rate limits
- Your account has sufficient credits

### Slug collisions still occurring

This shouldn't happen - the script prevents collisions automatically. If it does:
1. Check if the file is being created by another process
2. Verify filesystem permissions
3. Report as a bug

## Development

### Running Tests

```bash
# Basic functionality tests
node /tmp/test-generate-post.js

# Comprehensive duplicate detection tests
node /tmp/test-duplicate-detection.js
```

### Code Quality

```bash
# Lint
npm run check:eslint

# Format
npm run fix:prettier

# All checks
npm run check
```

## Security

The script includes multiple security measures:
- YAML injection prevention via proper escaping
- Input sanitization for titles and excerpts
- No execution of user-provided code
- API key never logged or exposed

**CodeQL Security Scan**: ✅ 0 alerts

## License

Part of the Criztec Technologies website project.
