// Environment Variables:
// - OPENAI_API_KEY (required): Your OpenAI API key
// - OPENAI_MODEL (optional): Model to use for content generation (default: gpt-4o)
// - ENABLE_IMAGE_GENERATION (optional): Set to 'false' to disable DALL-E 3 image generation

import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const POSTS_DIR = path.join(__dirname, '../src/data/post');

// Configuration
const CONFIG = {
  apiKey: process.env.OPENAI_API_KEY,
  model: process.env.OPENAI_MODEL || 'gpt-4o',
  enableImageGeneration: process.env.ENABLE_IMAGE_GENERATION !== 'false',
  imageModel: 'dall-e-3',
  maxRetries: 3,
  retryDelay: 1000,
  timeout: 30000,
  apiDelay: 3000, // Delay between API calls to avoid rate limits
};

const TOPICS = [
  // IT Services & Support
  'IT Infrastructure Management for Growing Businesses',
  'Managed IT Services: Benefits and Best Practices',
  'IT Support Solutions for Remote Workforces',
  'Network Security and Monitoring Essentials',
  'IT Asset Management and Lifecycle Planning',
  'Help Desk vs Managed IT Services: Which is Right?',
  'Disaster Recovery Planning for Small Businesses',
  'IT Compliance and Regulatory Requirements',
  'Server Management and Maintenance Best Practices',
  'IT Consulting: When to Bring in the Experts',
  'Cybersecurity Risk Assessment for Businesses',
  'Enterprise IT Solutions for Digital Transformation',

  // Cloud Computing
  'Cloud Migration Strategy: Step-by-Step Guide',
  'AWS Cloud Services for Business Applications',
  'Azure Cloud Infrastructure Setup and Optimization',
  'Google Cloud Platform: Complete Business Guide',
  'Hybrid Cloud Architecture Design Patterns',
  'Multi-Cloud Strategy: Benefits and Challenges',
  'Cloud Cost Optimization Techniques',
  'Cloud Security Best Practices and Compliance',
  'Serverless Computing: When and How to Use It',
  'Cloud Storage Solutions Comparison',
  'Cloud-Native Application Development',
  'Cloud Backup and Disaster Recovery Solutions',
  'Kubernetes on Cloud: EKS, AKS, and GKE Comparison',
  'Cloud Infrastructure as Code with Terraform',
  'Cloud Monitoring and Observability Tools',

  // Custom Software Development
  'Custom Software Development Process: Complete Guide',
  'Enterprise Software Development Best Practices',
  'Building Custom CRM Systems for Your Business',
  'Custom ERP Solutions vs Off-the-Shelf Software',
  'Software Development Lifecycle (SDLC) Explained',
  'Agile vs Waterfall: Choosing Development Methodology',
  'Custom Mobile App Development: iOS and Android',
  'Legacy System Modernization Strategies',
  'API-First Development for Custom Applications',
  'Microservices Architecture for Custom Software',
  'Custom Software Integration with Existing Systems',
  'Quality Assurance in Custom Software Development',
  'DevOps Practices for Custom Application Delivery',
  'Custom Dashboard Development for Business Intelligence',
  'Software Scalability Planning and Implementation',

  // Frontend Frameworks
  'Astro Framework: The Future of Content-Focused Websites',
  'Building Lightning-Fast Sites with Astro',
  'SvelteKit Complete Guide for Modern Web Apps',
  'Why SvelteKit is Perfect for Your Next Project',
  'React vs Vue vs Svelte: Framework Comparison',
  'Next.js App Router Best Practices',
  'Remix Framework: Full-Stack React Done Right',

  // Backend & Languages
  'Django REST Framework for API Development',
  'Building Scalable APIs with Django',
  'FastAPI vs Django: Python Backend Showdown',
  'Rust for Web Development: Getting Started',
  'Why Rust is the Future of System Programming',
  'Go (Golang) Microservices Architecture',
  'Building High-Performance APIs with Go',
  'Python Automation for Business Workflows',
  'Node.js Performance Optimization Techniques',

  // DevOps & Infrastructure
  'Docker Containerization Best Practices',
  'Kubernetes for Small to Medium Businesses',
  'CI/CD Pipeline Setup with GitHub Actions',
  'Infrastructure as Code: Terraform vs CloudFormation',
  'Monitoring and Logging with Prometheus and Grafana',

  // Database & Data
  'PostgreSQL Advanced Query Optimization',
  'MongoDB vs PostgreSQL: Choosing the Right Database',
  'Redis Caching Strategies for Web Apps',
  'GraphQL vs REST API: Complete Comparison',
  'Database Migration Strategies for Production Systems',

  // Web Development
  'Web Performance Optimization: Core Web Vitals',
  'Progressive Web Apps (PWA) Implementation Guide',
  'WebAssembly: Running Native Code in the Browser',
  'Modern CSS: Grid, Flexbox, and Container Queries',
  'TypeScript Best Practices for Large Projects',
  'Accessibility (A11y) Best Practices for Web Apps',

  // Mobile Development
  'React Native vs Flutter: Mobile App Comparison',
  'Building Cross-Platform Apps with Flutter',
  'iOS App Development with Swift',
  'Android Jetpack Compose Tutorial',
  'Mobile App Testing and Quality Assurance',

  // Digital Marketing
  'SEO Best Practices for Technical Websites',
  'Content Marketing Strategy for Tech Companies',
  'Social Media Marketing for B2B Businesses',
  'Email Marketing Automation Strategies',
  'Conversion Rate Optimization Techniques',
  'Digital Marketing for IT Service Providers',

  // E-commerce
  'Shopify vs WooCommerce vs Custom Solution',
  'E-commerce Site Performance Optimization',
  'Payment Gateway Integration Best Practices',
  'Building Headless E-commerce with Shopify',
  'Custom E-commerce Platform Development',

  // Security
  'Web Application Security Best Practices',
  'Implementing OAuth 2.0 Authentication',
  'OWASP Top 10 Security Vulnerabilities',
  'API Security: Rate Limiting and Authentication',
  'Zero Trust Security Architecture',
  'Penetration Testing for Web Applications',

  // AI & Machine Learning
  'Integrating AI into Your Web Applications',
  'ChatGPT API Integration Guide',
  'Machine Learning Models Deployment',
  'Natural Language Processing for Business',
  'AI-Powered Custom Software Solutions',

  // Business & Strategy
  'Choosing the Right Tech Stack for Your Startup',
  'Technical Debt: Prevention and Management',
  'Agile Development Methodology Guide',
  'Remote Development Team Best Practices',
  'Code Review Best Practices',
  'Digital Transformation Roadmap for Businesses',
  'Software Vendor Selection: Build vs Buy Decision',
  'IT Outsourcing vs In-House Development',
];

const CATEGORIES = [
  'Web Development',
  'Digital Marketing',
  'SEO',
  'E-commerce',
  'Technology',
  'IT Services',
  'Cloud Computing',
  'Custom Software',
];

// Validation
function validateConfig() {
  if (!CONFIG.apiKey) {
    throw new Error('OPENAI_API_KEY environment variable is not set');
  }
}

function validatePostData(data) {
  const required = ['title', 'excerpt', 'content', 'category', 'tags'];
  const missing = required.filter((field) => !data[field]);

  if (missing.length > 0) {
    throw new Error(`Missing required fields: ${missing.join(', ')}`);
  }

  if (!CATEGORIES.includes(data.category)) {
    throw new Error(`Invalid category: ${data.category}`);
  }

  if (!Array.isArray(data.tags) || data.tags.length < 3) {
    throw new Error('Tags must be an array with at least 3 items');
  }
}

// Utilities
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w-]+/g, '')
    .replace(/--+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
    console.log(`Created directory: ${dirPath}`);
  }
}

function fileExists(filepath) {
  return fs.existsSync(filepath);
}

function getExistingPosts() {
  ensureDirectoryExists(POSTS_DIR);
  const files = fs.readdirSync(POSTS_DIR);
  return files
    .filter((file) => file.endsWith('.md'))
    .map((file) => {
      const content = fs.readFileSync(path.join(POSTS_DIR, file), 'utf8');
      // Handle both single and double quotes, multiline
      const titleMatch = content.match(/^title:\s*["'](.+?)["']\s*$/m);
      return titleMatch ? titleMatch[1].replace(/\\["']/g, (m) => m.slice(1)) : null;
    })
    .filter(Boolean);
}

function checkDuplicateContent(newTitle, existingTitles) {
  const normalizedNew = newTitle.toLowerCase().trim();

  return existingTitles.some((existing) => {
    const normalizedExisting = existing.toLowerCase().trim();

    // Exact match
    if (normalizedNew === normalizedExisting) return true;

    // Word overlap similarity
    const wordsA = normalizedNew
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(Boolean);
    const wordsB = normalizedExisting
      .replace(/[^\w\s]/g, '')
      .split(/\s+/)
      .filter(Boolean);

    const setA = new Set(wordsA);
    const setB = new Set(wordsB);
    const intersection = new Set([...setA].filter((x) => setB.has(x)));

    // If 5+ words overlap OR 70%+ similarity (with at least 3 words in smaller title), consider duplicate
    const overlapCount = intersection.size;
    const minWords = Math.min(setA.size, setB.size);
    const similarity = overlapCount / minWords;

    return overlapCount >= 5 || (similarity > 0.7 && minWords >= 3);
  });
}

async function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// API calls with retry logic
async function fetchWithRetry(url, options, retries = CONFIG.maxRetries) {
  for (let i = 0; i < retries; i++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), CONFIG.timeout);

      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorBody = await response.text();
        throw new Error(`HTTP ${response.status}: ${errorBody}`);
      }

      return response;
    } catch (error) {
      const isLastRetry = i === retries - 1;

      if (isLastRetry) {
        throw error;
      }

      console.warn(`Attempt ${i + 1} failed: ${error.message}. Retrying...`);
      await sleep(CONFIG.retryDelay * (i + 1));
    }
  }
}

async function generatePostContent(topic) {
  const prompt = `
Write a professional, engaging blog post about "${topic}" for Criztec Technologies, a full-service technology company specializing in:
- Web Development and Digital Marketing
- IT Services and Infrastructure Management
- Cloud Computing Solutions (AWS, Azure, Google Cloud)
- Custom Software Development for businesses

IMPORTANT: This post must be UNIQUE and different from typical generic content. Provide specific, actionable insights and fresh perspectives that showcase Criztec's expertise.
IMPORTANT: All content must be tailored for a UK audience. Use British English spelling (e.g., 'optimisation', 'colour', 'programme') and refer to UK-specific regulations (e.g., GDPR, UK Data Protection Act), currency (£ GBP), and business practices where applicable.

The output must be a valid JSON object with the following fields:
- title: A catchy, SEO-friendly title (max 60 characters). Make it unique and specific.
- excerpt: A compelling summary (2-3 sentences, max 160 characters).
- content: The full blog post content in Markdown format. Use ## for section headings. Include:
  * An engaging introduction with a unique angle or hook
  * 3-5 main sections with specific, actionable insights (not generic advice)
  * Real-world examples, code snippets, or case studies where relevant
  * How Criztec's services relate to the topic (naturally integrated, not salesy)
  * Data points or statistics to back up claims (prefer UK-specific data if available)
  * A strong conclusion with clear call-to-action
  * Do NOT include the title as an h1 in the content
- category: One of ['Web Development', 'Digital Marketing', 'SEO', 'E-commerce', 'Technology', 'IT Services', 'Cloud Computing', 'Custom Software'].
- tags: An array of 3-5 relevant, specific tags (e.g., "astro", "django-rest", "cloud-migration", "managed-it").
- image_prompt: A detailed, visual description for a header image (focus on professional tech/business aesthetics).

Ensure the tone is professional, informative, and actionable for business owners and technical decision-makers.
The content should be approximately 800-1200 words with ORIGINAL insights and perspectives.
`;

  const response = await fetchWithRetry('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${CONFIG.apiKey}`,
    },
    body: JSON.stringify({
      model: CONFIG.model,
      messages: [
        {
          role: 'system',
          content:
            'You are an expert content marketing assistant for Criztec Technologies, a company providing web development, IT services, cloud computing, and custom software development. Always output valid JSON. Create unique, high-quality content with original insights and specific examples that demonstrate technical expertise. Ensure all content is tailored for a UK audience using British English.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.9, // Higher temperature for more unique content
    }),
  });

  const data = await response.json();

  if (!data.choices?.[0]?.message?.content) {
    throw new Error('Invalid response from OpenAI API');
  }

  return JSON.parse(data.choices[0].message.content);
}

async function generateImageWithDallE(imagePrompt, title) {
  if (!CONFIG.enableImageGeneration) {
    console.log('📸 Image generation disabled, using placeholder');
    return '/images/blog-placeholder.webp';
  }

  try {
    console.log('🎨 Generating image with DALL-E 3...');

    const prompt =
      imagePrompt ||
      `Professional technology illustration for: ${title}. Modern, clean, business-focused aesthetic with tech elements. High quality, professional photography style.`;

    const response = await fetchWithRetry('https://api.openai.com/v1/images/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${CONFIG.apiKey}`,
      },
      body: JSON.stringify({
        model: CONFIG.imageModel,
        prompt: prompt.slice(0, 4000), // DALL-E 3 max prompt length
        n: 1,
        size: '1792x1024', // Landscape format perfect for blog headers
        quality: 'standard', // or 'hd' for higher quality ($0.080 vs $0.120)
        style: 'natural', // or 'vivid' for more dramatic images
      }),
    });

    const data = await response.json();

    if (!data.data?.[0]?.url) {
      throw new Error('Invalid response from DALL-E API');
    }

    const imageUrl = data.data[0].url;
    console.log(`✅ Image generated: ${imageUrl}`);

    // Return path that Astro will optimize
    // The actual URL will be downloaded and saved separately if needed
    return imageUrl;
  } catch (error) {
    console.error(`❌ Failed to generate image: ${error.message}`);
    console.log('📸 Falling back to placeholder image');
    return '/images/blog-placeholder.webp';
  }
}

async function generateMarkdownContent(data, slug) {
  const { title, excerpt, content, category, tags, image_prompt } = data;
  const publishDate = new Date().toISOString();
  const imageUrl = await generateImageWithDallE(image_prompt, title);

  // Sanitize title and excerpt to prevent YAML injection
  const sanitizeYAML = (str) => {
    return str
      .replace(/\\/g, '\\\\') // Escape backslashes to prevent interference with quote escaping
      .replace(/"/g, '\\"') // Escape quotes
      .replace(/\n/g, ' ') // Remove newlines
      .trim();
  };

  return `---
publishDate: ${publishDate}
title: "${sanitizeYAML(title)}"
excerpt: "${sanitizeYAML(excerpt)}"
image: "${imageUrl}"
category: ${category}
tags:
${tags.map((tag) => `  - ${tag}`).join('\n')}
metadata:
  canonical: https://criztec.com/${slug}
---

${content}
`;
}

async function savePost(content, filename) {
  ensureDirectoryExists(POSTS_DIR);
  const filepath = path.join(POSTS_DIR, filename);

  // This should never happen now due to slug collision handling
  if (fileExists(filepath)) {
    throw new Error(`File ${filename} already exists - this should have been handled by slug collision logic`);
  }

  fs.writeFileSync(filepath, content, 'utf8');
  return filepath;
}

async function generatePost(topic = null) {
  try {
    validateConfig();

    const selectedTopic = topic || TOPICS[Math.floor(Math.random() * TOPICS.length)];
    console.log(`\n📝 Generating post about: ${selectedTopic}`);

    // Check for duplicate content
    const existingPosts = getExistingPosts();
    console.log(`📚 Found ${existingPosts.length} existing posts`);

    const postData = await generatePostContent(selectedTopic);

    // Add delay after first API call
    await sleep(CONFIG.apiDelay);

    validatePostData(postData);

    // Verify the generated content is not a duplicate
    let retryCount = 0;
    const maxDuplicateRetries = 2;

    while (checkDuplicateContent(postData.title, existingPosts) && retryCount < maxDuplicateRetries) {
      console.warn(
        `⚠️  Duplicate content detected (attempt ${retryCount + 1}/${maxDuplicateRetries}): "${postData.title}"`
      );
      console.warn(`   Regenerating with more specific requirements...`);

      // Try again with more specific instructions
      const uniquePrompt =
        selectedTopic + ' (create a unique angle different from: ' + existingPosts.slice(-3).join(', ') + ')';
      const retryData = await generatePostContent(uniquePrompt);
      await sleep(CONFIG.apiDelay);

      validatePostData(retryData);
      Object.assign(postData, retryData);
      retryCount++;
    }

    if (checkDuplicateContent(postData.title, existingPosts)) {
      throw new Error('Unable to generate unique content after retries. Please try a different topic.');
    }

    // Handle slug collisions
    let baseSlug = slugify(postData.title);
    let slug = baseSlug;
    let filename = `${slug}.md`;
    let counter = 1;

    while (fileExists(path.join(POSTS_DIR, filename))) {
      slug = `${baseSlug}-${counter}`;
      filename = `${slug}.md`;
      counter++;
      console.log(`⚠️  Slug collision detected, using: ${filename}`);
    }

    const markdownContent = await generateMarkdownContent(postData, slug);
    const filepath = await savePost(markdownContent, filename);

    console.log(`✅ Successfully generated post: ${filepath}`);
    console.log(`   Title: ${postData.title}`);
    console.log(`   Category: ${postData.category}`);
    console.log(`   Tags: ${postData.tags.join(', ')}`);

    return {
      success: true,
      filepath,
      data: postData,
    };
  } catch (error) {
    console.error(`❌ Failed to generate post: ${error.message}`);
    if (error.stack) {
      console.error(error.stack);
    }
    throw error;
  }
}

// CLI support
const args = process.argv.slice(2);
const customTopic = args[0];

const currentFilePath = fileURLToPath(import.meta.url);
const executedFilePath = process.argv[1];

if (currentFilePath === executedFilePath) {
  generatePost(customTopic)
    .then(() => process.exit(0))
    .catch(() => process.exit(1));
}

export { generatePost, TOPICS, CATEGORIES };
