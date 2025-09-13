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
    publishDate: z.date().optional(),
    updateDate: z.date().optional(),
    draft: z.boolean().optional(),

    title: z.string(),
    excerpt: z.string().optional(),
    image: z.string().optional(),

    category: z.string().optional(),
    tags: z.array(z.string()).optional(),
    author: z.string().optional(),

    metadata: metadataDefinition(),
  }),
});

const caseStudyCollection = defineCollection({
  loader: glob({ pattern: ['*.md', '*.mdx'], base: 'src/content/case-studies' }),
  schema: z.object({
    // Basic Information
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    category: z.string(),
    client: z.string(),
    industry: z.string(),
    location: z.string(),
    duration: z.string(),
    projectType: z.string(),
    website: z.string().url(),
    launchDate: z.string(),
    featured: z.boolean().default(false),
    draft: z.boolean().optional().default(false),

    // Challenge Information
    challenge: z.object({
      title: z.string(),
      description: z.string(),
      points: z.array(z.string()),
    }),

    // Solution Information
    solution: z.object({
      title: z.string(),
      description: z.string(),
      approach: z.array(z.string()),
    }),

    // Results and Metrics
    results: z.object({
      performance: z.array(
        z.object({
          metric: z.string(),
          before: z.string(),
          after: z.string(),
          improvement: z.string(),
        })
      ),
      business: z.array(
        z.object({
          metric: z.string(),
          improvement: z.string(),
        })
      ),
    }),

    // Technologies Used
    technologies: z.array(
      z.object({
        name: z.string(),
        description: z.string(),
      })
    ),

    // Key Features
    features: z.array(
      z.object({
        title: z.string(),
        description: z.string(),
        benefits: z.array(z.string()),
      })
    ),

    // Client Testimonial
    testimonial: z.object({
      text: z.string(),
      author: z.string(),
      position: z.string(),
    }),

    // SEO and Tags
    tags: z.array(z.string()),
    seoKeywords: z.array(z.string()),

    // Images (optional)
    heroImage: z.string().optional(),
    images: z.array(z.string()).optional(),

    // Metadata for SEO
    metadata: metadataDefinition(),
  }),
});

export const collections = {
  post: postCollection,
  'case-studies': caseStudyCollection,
};
