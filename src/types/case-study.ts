import type { CollectionEntry } from 'astro:content';

export type CaseStudy = CollectionEntry<'case-studies'>;
export type CaseStudyData = CaseStudy['data'];

export interface CaseStudyMetric {
  metric: string;
  before: string;
  after: string;
  improvement: string;
}

export interface BusinessMetric {
  metric: string;
  improvement: string;
}

export interface Technology {
  name: string;
  description: string;
}

export interface Feature {
  title: string;
  description: string;
  benefits: string[];
}

export interface Challenge {
  title: string;
  description: string;
  points: string[];
}

export interface Solution {
  title: string;
  description: string;
  approach: string[];
}

export interface Results {
  performance: CaseStudyMetric[];
  business: BusinessMetric[];
}

export interface Testimonial {
  text: string;
  author: string;
  position: string;
}

// Filter and sort types
export type FilterCriteria = {
  category?: string;
  client?: string;
  featured?: boolean;
};

export type SortCriteria = 'date' | 'client' | 'category' | 'featured';

// Service category mapping for gradients and styling
export type ServiceCategoryType =
  | 'Web Development'
  | 'Digital Marketing'
  | 'E-commerce Development'
  | 'Mobile App Development'
  | 'Performance Optimization'
  | 'SEO Services'
  | 'Content Marketing'
  | 'Social Media Marketing'
  | 'IT Support'
  | 'Migration Services'
  | 'Website Redesign'
  | 'Custom Software Development'
  | 'API Development'
  | 'Database Design'
  | 'UI/UX Design'
  | 'Technical Consulting'
  | 'Other';

// Color scheme for technologies
export type TechColorScheme = {
  bg: string;
  text: string;
  border: string;
};
