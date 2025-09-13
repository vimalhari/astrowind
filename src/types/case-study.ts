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
  industry?: string;
  category?: string;
  client?: string;
  featured?: boolean;
};

export type SortCriteria = 'date' | 'client' | 'industry' | 'featured';

// Industry gradient mapping
export type IndustryType = 
  | 'Financial Services'
  | 'Legal'
  | 'Healthcare'
  | 'Technology'
  | 'E-commerce'
  | 'Real Estate';

// Color scheme for technologies
export type TechColorScheme = {
  bg: string;
  text: string;
  border: string;
};