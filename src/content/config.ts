import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const metadataDefinition = () =>
  z
    .object({
      title: z.string().optional(),
      ignoreTitleTemplate: z.boolean().optional(),

      canonical: z.string().url().optional(),

      robots: z
        .object({
          index: z.boolean().optional(),
          follow: z.boolean().optional(),
        })
        .optional(),

      description: z.string().optional(),

      openGraph: z
        .object({
          url: z.string().optional(),
          siteName: z.string().optional(),
          images: z
            .array(
              z.object({
                url: z.string(),
                width: z.number().optional(),
                height: z.number().optional(),
              })
            )
            .optional(),
          locale: z.string().optional(),
          type: z.string().optional(),
        })
        .optional(),

      twitter: z
        .object({
          handle: z.string().optional(),
          site: z.string().optional(),
          cardType: z.string().optional(),
        })
        .optional(),
    })
    .optional();

const postCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/data/post' }),
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    permalink: z.string().optional(),
    publishDate: z.date().or(z.string()).optional(),
    updateDate: z.date().or(z.string()).optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    tags: z.array(z.string()).default([]),
    category: z.string().optional(),
    author: z.string().optional(),
    metadata: metadataDefinition(),
    draft: z.boolean().optional(),
    excerpt: z.string().optional(),
    readingTime: z.number().optional(),
  }),
});

// Enhanced case study schema with better validation and additional fields
const caseStudyCollection = defineCollection({
  loader: glob({
    pattern: ['*.md', '*.mdx'],
    base: 'src/content/case-studies',
  }),
  schema: z
    .object({
      // Basic Information - Enhanced with validation
      title: z.string().min(1, 'Title is required').max(100, 'Title too long'),
      subtitle: z.string().min(1, 'Subtitle is required').max(200, 'Subtitle too long'),
      description: z.string().min(50, 'Description too short').max(500, 'Description too long'),
      category: z.enum(
        [
          'Web Development',
          'Digital Marketing',
          'E-commerce Development',
          'Mobile App Development',
          'Performance Optimization',
          'SEO Services',
          'Content Marketing',
          'Social Media Marketing',
          'IT Support',
          'Migration Services',
          'Website Redesign',
          'Custom Software Development',
          'API Development',
          'Database Design',
          'UI/UX Design',
          'Technical Consulting',
          'Other',
        ],
        { required_error: 'Service category is required' }
      ),
      client: z.string().min(1, 'Client name is required'),
      location: z.string().min(1, 'Location is required'),
      duration: z.string().min(1, 'Duration is required'),
      projectType: z.string().min(1, 'Project type is required'),
      website: z.string().url('Invalid website URL'),
      launchDate: z.string().regex(/^[A-Z][a-z]{2} \d{4}$/, 'Launch date must be in format "Jan 2024"'),
      featured: z.boolean().default(false),
      draft: z.boolean().optional().default(false),

      // Enhanced project details
      budget: z
        .object({
          range: z.enum(['Under $5K', '$5K-$15K', '$15K-$50K', '$50K-$100K', 'Over $100K']).optional(),
          currency: z.string().default('USD'),
        })
        .optional(),

      team: z
        .object({
          size: z.number().min(1).max(50).optional(),
          roles: z.array(z.string()).optional(),
          lead: z.string().optional(),
        })
        .optional(),

      // Challenge Information - Enhanced
      challenge: z.object({
        title: z.string().min(1, 'Challenge title is required'),
        description: z.string().min(50, 'Challenge description too short'),
        points: z
          .array(z.string().min(10, 'Challenge point too short'))
          .min(1, 'At least one challenge point required'),
        severity: z.enum(['Low', 'Medium', 'High', 'Critical']).optional(),
        impact: z.string().optional(),
      }),

      // Solution Information - Enhanced
      solution: z.object({
        title: z.string().min(1, 'Solution title is required'),
        description: z.string().min(50, 'Solution description too short'),
        approach: z.array(z.string().min(10, 'Approach step too short')).min(1, 'At least one approach step required'),
        methodology: z.enum(['Agile', 'Waterfall', 'Hybrid', 'Custom']).optional(),
        timeline: z
          .array(
            z.object({
              phase: z.string(),
              duration: z.string(),
              description: z.string(),
            })
          )
          .optional(),
      }),

      // Results and Metrics - Enhanced with validation
      results: z.object({
        performance: z
          .array(
            z.object({
              metric: z.string().min(1, 'Metric name is required'),
              before: z.string().min(1, 'Before value is required'),
              after: z.string().min(1, 'After value is required'),
              improvement: z.string().min(1, 'Improvement description is required'),
              category: z.enum(['Speed', 'SEO', 'Conversion', 'Traffic', 'User Experience', 'Technical']).optional(),
            })
          )
          .min(1, 'At least one performance metric required'),
        business: z
          .array(
            z.object({
              metric: z.string().min(1, 'Business metric name is required'),
              improvement: z.string().min(1, 'Business improvement is required'),
              timeframe: z.string().optional(),
              verified: z.boolean().default(false),
            })
          )
          .min(1, 'At least one business metric required'),
        roi: z
          .object({
            percentage: z.number().optional(),
            timeframe: z.string().optional(),
            description: z.string().optional(),
          })
          .optional(),
      }),

      // Technologies Used - Enhanced
      technologies: z
        .array(
          z.object({
            name: z.string().min(1, 'Technology name is required'),
            description: z.string().min(10, 'Technology description too short'),
            category: z.enum(['Frontend', 'Backend', 'Database', 'DevOps', 'Design', 'Analytics', 'Other']).optional(),
            version: z.string().optional(),
            why: z.string().optional(), // Why this technology was chosen
          })
        )
        .min(1, 'At least one technology required'),

      // Key Features - Enhanced
      features: z
        .array(
          z.object({
            title: z.string().min(1, 'Feature title is required'),
            description: z.string().min(20, 'Feature description too short'),
            benefits: z
              .array(z.string().min(5, 'Benefit description too short'))
              .min(1, 'At least one benefit required'),
            category: z
              .enum([
                'User Experience',
                'Performance',
                'Security',
                'Scalability',
                'Accessibility',
                'SEO',
                'Integration',
                'Other',
              ])
              .optional(),
            priority: z.enum(['Low', 'Medium', 'High', 'Critical']).optional(),
          })
        )
        .min(1, 'At least one feature required'),

      // Client Testimonial - Enhanced
      testimonial: z.object({
        text: z.string().min(50, 'Testimonial too short').max(1000, 'Testimonial too long'),
        author: z.string().min(1, 'Author name is required'),
        position: z.string().min(1, 'Author position is required'),
        company: z.string().optional(),
        avatar: z.string().url().optional(),
        rating: z.number().min(1).max(5).optional(),
        date: z.string().optional(),
      }),

      // SEO and Tags - Enhanced
      tags: z.array(z.string().min(2, 'Tag too short')).min(1, 'At least one tag required'),
      seoKeywords: z.array(z.string().min(2, 'Keyword too short')).min(3, 'At least 3 SEO keywords required'),

      // Images - Enhanced with validation
      heroImage: z.string().url().optional(),
      images: z
        .array(
          z.object({
            url: z.string().url(),
            alt: z.string().min(5, 'Image alt text too short'),
            caption: z.string().optional(),
            width: z.number().optional(),
            height: z.number().optional(),
          })
        )
        .optional(),

      // Additional fields for better case study management
      status: z.enum(['Draft', 'In Review', 'Published', 'Archived']).default('Published'),
      priority: z.number().min(1).max(10).default(5),
      readingTime: z.number().min(1).optional(),

      // Analytics and tracking
      views: z.number().min(0).default(0),
      likes: z.number().min(0).default(0),
      shares: z.number().min(0).default(0),

      // Collaboration fields
      author: z.string().optional(),
      reviewers: z.array(z.string()).optional(),
      lastUpdated: z.date().or(z.string()).optional(),

      // External links
      externalLinks: z
        .array(
          z.object({
            title: z.string(),
            url: z.string().url(),
            type: z.enum(['Live Site', 'Demo', 'Repository', 'Documentation', 'Article', 'Other']),
          })
        )
        .optional(),

      // Metadata for SEO - Enhanced
      metadata: metadataDefinition(),
    })
    .refine(
      (data) => {
        // Custom validation: ensure featured case studies have testimonials
        if (data.featured && !data.testimonial.text) {
          return false;
        }
        return true;
      },
      {
        message: 'Featured case studies must include a testimonial',
        path: ['testimonial'],
      }
    )
    .refine(
      (data) => {
        // Custom validation: ensure high-priority case studies have sufficient content
        if (data.priority >= 8) {
          return data.features.length >= 3 && data.results.performance.length >= 2;
        }
        return true;
      },
      {
        message: 'High-priority case studies must have at least 3 features and 2 performance metrics',
        path: ['priority'],
      }
    ),
});

export const collections = {
  post: postCollection,
  'case-studies': caseStudyCollection,
};
