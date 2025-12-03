# Testing Guide

## Quick Start

### 1. Local Testing (Without GitHub Commit)

```powershell
# Set your OpenAI API key
$env:OPENAI_API_KEY="your-openai-api-key"

# Navigate to scripts directory
cd scripts

# Run the test suite (tests all components without committing)
uv run python test_blog_generator.py
```

This will:
- ✅ Research trending topics
- ✅ Generate SEO-optimized content (1200-1500 words)
- ✅ Create DALL-E hero image
- ✅ Format markdown with frontmatter
- ❌ NOT commit to GitHub (safe for testing)

### 2. Full Local Run (With GitHub Commit)

```powershell
# Set all required environment variables
$env:OPENAI_API_KEY="your-openai-api-key"
$env:GITHUB_TOKEN="your-github-personal-access-token"
$env:GITHUB_REPOSITORY="vimalhari/astrowind"

# Run the full workflow
cd scripts
uv run python main.py
```

This will generate and commit the blog post to your repository.

### 3. Manual Trigger via GitHub Actions

The workflow has `workflow_dispatch` enabled, so you can trigger it manually:

1. **Go to GitHub Actions tab**
   - Navigate to: https://github.com/vimalhari/astrowind/actions

2. **Select the workflow**
   - Click on "Automated Blog Generator" in the left sidebar

3. **Run workflow**
   - Click the "Run workflow" button (top right)
   - Select branch: `main`
   - Click "Run workflow"

4. **Monitor progress**
   - Click on the running workflow to see live logs
   - Watch each step: Research → Content → Image → Commit

## Testing Individual Components

### Test Research Module Only
```powershell
$env:OPENAI_API_KEY="your-key"
cd scripts
uv run python -c "from blog_generator.research import research_tech_trends; import json; print(json.dumps(research_tech_trends(), indent=2))"
```

### Test Content Generation Only
```powershell
$env:OPENAI_API_KEY="your-key"
cd scripts
uv run python -c "from blog_generator.content import generate_blog_content; content = generate_blog_content('Astro 5.0 Features'); print(f'Title: {content[\"title\"]}'); print(f'Words: {len(content[\"content\"].split())}')"
```

### Test Image Generation Only
```powershell
$env:OPENAI_API_KEY="your-key"
cd scripts
uv run python -c "from blog_generator.image import generate_hero_image; img = generate_hero_image('Modern web development with Astro framework'); print(f'Image size: {len(img):,} bytes')"
```

## Scheduled Runs

The workflow automatically runs:
- **Every Monday at 9:00 AM UTC**
- Schedule: `0 9 * * 1` (cron format)

To change the schedule, edit `.github/workflows/blog-generator.yml`:
```yaml
schedule:
  - cron: '0 9 * * 1'  # Every Monday at 9 AM UTC
```

Common schedules:
- Daily at 9 AM: `'0 9 * * *'`
- Twice weekly (Mon & Thu): `'0 9 * * 1,4'`
- Monthly on 1st: `'0 9 1 * *'`

## Troubleshooting

### "Missing OPENAI_API_KEY"
```powershell
# Verify it's set
echo $env:OPENAI_API_KEY

# Set it if missing
$env:OPENAI_API_KEY="sk-..."
```

### "GitHub Token authentication failed"
```powershell
# Create a Personal Access Token (classic) with 'repo' scope
# https://github.com/settings/tokens

$env:GITHUB_TOKEN="ghp_..."
```

### Test runs successfully but GitHub Actions fails
- Check that `OPENAI_API_KEY` is set in GitHub Secrets
- Verify GitHub Actions has write permissions (Settings → Actions → General)

## Expected Output

### Successful Test Run
```
============================================================
🚀 BLOG GENERATOR TEST SUITE
============================================================

============================================================
🔍 Testing Research Module
============================================================

✅ Research successful!
📊 Topic: Astro 5.0 Content Collections: Complete Guide
🎯 Keywords: astro, content collections, static site...
👥 Target Audience: UK web developers

============================================================
✍️  Testing Content Generation
============================================================

✅ Content generated successfully!
📰 Title: Astro 5.0 Content Collections: Complete Guide
📏 Word count: ~1350 words
🏷️  Tags: astro, sveltekit, web-development, seo, performance

============================================================
✅ ALL TESTS PASSED!
============================================================
```

## Cost Estimates

Per test/run:
- **Research**: ~$0.02 (GPT-4o)
- **Content**: ~$0.15 (GPT-4o, 1200-1500 words)
- **Image**: ~$0.04 (DALL-E 3)
- **Total**: ~$0.21 per blog post

Monthly (4 automatic runs): ~$0.84/month

## Next Steps

After successful testing:
1. ✅ Verify the test suite passes
2. ✅ Do a manual GitHub Actions run
3. ✅ Check the generated post in your repository
4. ✅ Wait for Netlify to rebuild and deploy
5. ✅ Visit the published blog post on your site
