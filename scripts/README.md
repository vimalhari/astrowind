# Blog Post Generator

Automated blog post generation using OpenAI's GPT-4, DALL-E 3, and Prefect orchestration with modern Python tooling.

## Features

- 🔍 **Automated Trend Research**: AI-powered research of latest tech trends and news
- 🎯 **SEO-Optimized Content**: 1200-1500 word posts with strategic keyword placement
- 🤖 **AI-Powered Content Generation**: Uses GPT-4o for high-quality, unique blog posts
- 🎨 **DALL-E 3 Image Generation**: Professional header images automatically created
- ⚡ **Prefect Orchestration**: Robust workflow management with retries and logging
- 📅 **Automated Schedule**: Runs weekly via GitHub Actions (every Monday at 9 AM UTC)
- 🌍 **UK-Focused Content**: British English and UK-specific regulations
- 🔧 **Modern Python Stack**: Built with Python 3.13, uv, ruff, and pyright
- 📦 **Modular Architecture**: Clean separation of concerns with dedicated modules
- 🚀 **Tech Stack Focus**: Astro, SvelteKit, Next.js, Django, Python, Rust, Go

## Project Structure

```
scripts/
├── blog_generator/           # Main package
│   ├── __init__.py          # Package exports
│   ├── __main__.py          # Module entry point
│   ├── config.py            # Configuration constants
│   ├── research.py          # 🆕 AI trend research
│   ├── content.py           # Content generation (GPT-4)
│   ├── image.py             # Image generation (DALL-E 3)
│   ├── formatter.py         # Markdown formatting
│   ├── github.py            # GitHub API integration
│   ├── types.py             # Type definitions
│   └── utils.py             # Utility functions
├── main.py                  # Main workflow orchestration
├── pyproject.toml           # Project configuration & dependencies
└── README.md                # This file
```

## How It Works

### 1. Automated Research Phase
The system researches current trends related to your tech stack:
- **Astro, SvelteKit, Next.js** - Latest framework updates and features
- **Django, Python, Rust, Go** - Backend technology trends
- **Web Development Best Practices** - Current industry standards
- **IT Services & Cloud** - Enterprise solutions and infrastructure

### 2. Intelligent Topic Selection
Based on research, selects trending topics that:
- Are current (released/discussed in last 2-3 months)
- Align with Criztec's services
- Have high SEO potential
- Target UK business audience

### 3. SEO-Optimized Content Generation
Creates comprehensive 1200-1500 word posts with:
- Strategic keyword placement
- Proper H2/H3 heading structure
- Meta description-optimized excerpt
- Current statistics and examples
- Internal linking opportunities

### 4. Professional Image Generation
DALL-E 3 creates unique hero images matching the content theme

### 5. Automatic Publishing
Commits directly to GitHub, triggering Netlify rebuild and deployment

## Setup

### GitHub Actions Setup

#### 1. GitHub Secrets

Add the following secret to your repository (Settings → Secrets and variables → Actions):
- `OPENAI_API_KEY`: Your OpenAI API key

The `GITHUB_TOKEN` is automatically provided by GitHub Actions.

#### 2. Repository Permissions

Ensure GitHub Actions has write permissions:
1. Go to Settings → Actions → General
2. Under "Workflow permissions", select "Read and write permissions"
3. Click "Save"

### Local Development Setup

#### Prerequisites

- Python 3.13+
- [uv](https://docs.astral.sh/uv/) (fast Python package manager)
- OpenAI API key

#### Environment Variables

Set these environment variables:

```bash
# Required
OPENAI_API_KEY=your-api-key-here
GITHUB_TOKEN=your-github-token
GITHUB_REPOSITORY=vimalhari/astrowind
```

#### Installation

```bash
# Install uv (if not already installed)
curl -LsSf https://astral.sh/uv/install.sh | sh

# Install dependencies
cd scripts
uv sync
```

## Usage

### Automated Runs (GitHub Actions)

The workflow runs automatically **every Monday at 9:00 AM UTC**.

### Manual Runs (GitHub Actions)

1. Go to the "Actions" tab in your repository
2. Select "Automated Blog Generator" workflow
3. Click "Run workflow"
4. Select the branch (usually `main`)
5. Click "Run workflow"

### Local Testing

```bash
# Test without committing to GitHub
cd scripts
$env:OPENAI_API_KEY="your-api-key"
uv run python test_blog_generator.py

# Full run with GitHub commit
$env:OPENAI_API_KEY="your-api-key"
$env:GITHUB_TOKEN="your-github-token"
$env:GITHUB_REPOSITORY="vimalhari/astrowind"
uv run python main.py
```

See [TESTING.md](TESTING.md) for detailed testing instructions.

## Development

### Code Quality Tools

The project uses modern Python tooling for code quality:

```bash
cd scripts

# Type checking with pyright (strict type safety)
uv run pyright blog_generator/

# Linting with ruff (fast Python linter)
uv run ruff check blog_generator/

# Auto-fix linting issues
uv run ruff check blog_generator/ --fix

# Format code with ruff
uv run ruff format blog_generator/

# Format code
uv run ruff format .
```

## Customization

### Modify Topics

Edit the `TOPICS` list in `scripts/blog_generator/config.py`:

```python
TOPICS: Final[list[str]] = [
    "Your Custom Topic 1",
    "Your Custom Topic 2",
    # Add more topics...
]
```

### Change Schedule

Edit the cron schedule in `.github/workflows/blog-generator.yml`:

```yaml
schedule:
  - cron: '0 9 * * 1'  # Every Monday at 9 AM UTC
```

**Examples:**
- Daily at 9 AM: `'0 9 * * *'`
- Twice a week (Mon & Thu): `'0 9 * * 1,4'`
- Monthly on 1st: `'0 9 1 * *'`

### Adjust Content Parameters

Modify settings in `scripts/blog_generator/config.py`:
- `COMPANY_CONTEXT`: Word count, structure, company focus
- `OPENAI_MODEL`: AI model selection
- `TEMPERATURE`: Creativity level (0.0-1.0)
- `IMAGE_SIZE`: Generated image dimensions

## How It Works

### Workflow Steps

1. **Topic Selection**: Randomly selects a topic from the predefined list
2. **Content Generation**: GPT-4o creates a complete blog post with:
   - Engaging title and excerpt
   - 800-1200 word markdown content
   - Category and tags
   - Image generation prompt
3. **Image Generation**: DALL-E 3 creates a unique hero image (1792x1024)
4. **Markdown Formatting**: Formats content with proper frontmatter
5. **GitHub Commit**: Commits both the post and image to the repository
6. **Build & Deploy**: Netlify automatically rebuilds and deploys the site

### Content Structure

Posts are generated with:

- 800-1200 words (SEO-optimized length)
- Engaging title and excerpt
- 3-5 relevant tags
- Proper category
- British English spelling
- UK-specific references where applicable
- Natural integration of Criztec services

## Output Format

Generated posts are saved to `src/data/post/` with this frontmatter:

```yaml
---
publishDate: 2025-12-03T00:00:00.000Z
title: "Your Post Title"
excerpt: "A compelling summary of the post"
image: ~/assets/images/posts/your-post-title.png
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

Images are saved to `src/assets/images/posts/`.

## Cost Considerations

### OpenAI API Costs (December 2025)

- **GPT-4o**: ~$0.10-0.20 per post (content generation)
- **DALL-E 3 Standard**: ~$0.04 per image
- **Total per post**: ~$0.14-0.24

**Running weekly**: ~$0.56-0.96/month

## File Structure

```
scripts/
├── blog_generator/         # Main package
│   ├── __init__.py        # Package exports
│   ├── config.py          # Configuration & constants
│   ├── types.py           # Type definitions
│   ├── utils.py           # Utility functions
│   ├── content.py         # Content generation (GPT-4)
│   ├── image.py           # Image generation (DALL-E)
│   ├── formatter.py       # Markdown formatting
│   └── github.py          # GitHub integration
├── main.py                # Entry point & Prefect flow
├── pyproject.toml         # Project config (uv, ruff, pyright)
└── README.md             # This file

.github/
└── workflows/
    └── blog-generator.yml  # GitHub Actions workflow

src/
├── assets/images/posts/    # Generated images
└── data/post/             # Generated blog posts
```

## Error Handling

Prefect automatically handles:

- **API failures**: Retries up to 2 times for content/image generation
- **GitHub failures**: Retries up to 2 times for commit operations
- **Logging**: All steps are logged for debugging
- **State management**: Tracks workflow execution state

## Troubleshooting

### Workflow fails with authentication error

**Check OpenAI API key:**
1. Go to Settings → Secrets and variables → Actions
2. Verify `OPENAI_API_KEY` is set correctly
3. Ensure your OpenAI account has available credits

**Check GitHub permissions:**
1. Go to Settings → Actions → General
2. Verify "Read and write permissions" is enabled

### Content not appearing on site

- Check that the post was committed to `src/data/post/`
- Verify Astro content config reads from this directory
- Wait for Netlify to rebuild (check deploy logs)
- Check frontmatter format matches your content config

### API rate limits

- OpenAI has rate limits for image generation
- Consider adjusting schedule if hitting limits
- GPT-4o has higher rate limits than GPT-4
- Verify your account has sufficient credits

### Workflow runs but no commit appears

1. Check the Actions tab for error messages
2. Verify the workflow has completed successfully
3. Check if the workflow is on the correct branch
4. Look for skipped steps in the workflow log

## Security

The script includes security measures:

- GitHub token is automatically provided (no manual token storage)
- OpenAI API key is securely stored in GitHub Secrets
- YAML injection prevention via proper escaping
- Input sanitization for titles and excerpts
- No execution of user-provided code
- API key never logged or exposed

**CodeQL Security Scan**: ✅ 0 alerts

## License

Part of the Criztec Technologies website project.
