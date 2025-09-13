import type { CaseStudy, FilterCriteria, SortCriteria } from '~/types/case-study';

/**
 * Filter case studies based on given criteria
 */
export function filterCaseStudies(
  caseStudies: CaseStudy[],
  criteria: FilterCriteria
): CaseStudy[] {
  return caseStudies.filter((study) => {
    const { industry, category, client, featured } = criteria;
    
    if (industry && study.data.industry !== industry) return false;
    if (category && study.data.category !== category) return false;
    if (client && !study.data.client.toLowerCase().includes(client.toLowerCase())) return false;
    if (featured !== undefined && study.data.featured !== featured) return false;
    
    return true;
  });
}

/**
 * Sort case studies based on given criteria
 */
export function sortCaseStudies(
  caseStudies: CaseStudy[],
  criteria: SortCriteria,
  ascending: boolean = false
): CaseStudy[] {
  return [...caseStudies].sort((a, b) => {
    let comparison = 0;
    
    switch (criteria) {
      case 'date':
        comparison = new Date(b.data.launchDate).getTime() - new Date(a.data.launchDate).getTime();
        break;
      case 'client':
        comparison = a.data.client.localeCompare(b.data.client);
        break;
      case 'industry':
        comparison = a.data.industry.localeCompare(b.data.industry);
        break;
      case 'featured':
        comparison = (b.data.featured ? 1 : 0) - (a.data.featured ? 1 : 0);
        break;
    }
    
    return ascending ? comparison : -comparison;
  });
}

/**
 * Get related case studies based on industry or category
 */
export function getRelatedCaseStudies(
  currentStudy: CaseStudy,
  allStudies: CaseStudy[],
  limit: number = 3
): CaseStudy[] {
  return allStudies
    .filter((study) => {
      // Exclude the current study
      if (study.id === currentStudy.id) return false;
      
      // Match by industry first, then category
      return (
        study.data.industry === currentStudy.data.industry ||
        study.data.category === currentStudy.data.category
      );
    })
    .slice(0, limit);
}

/**
 * Get unique values for filtering options
 */
export function getUniqueValues(
  caseStudies: CaseStudy[],
  field: keyof CaseStudy['data']
): string[] {
  const values = caseStudies.map((study) => study.data[field] as string);
  return [...new Set(values)].filter(Boolean).sort();
}

/**
 * Search case studies by text
 */
export function searchCaseStudies(
  caseStudies: CaseStudy[],
  searchTerm: string
): CaseStudy[] {
  const term = searchTerm.toLowerCase().trim();
  if (!term) return caseStudies;
  
  return caseStudies.filter((study) => {
    const searchableText = [
      study.data.title,
      study.data.subtitle,
      study.data.description,
      study.data.client,
      study.data.industry,
      study.data.category,
      study.data.projectType,
      ...(study.data.tags || []),
      ...(study.data.seoKeywords || [])
    ].join(' ').toLowerCase();
    
    return searchableText.includes(term);
  });
}

/**
 * Format improvement percentage for display
 */
export function formatImprovement(improvement: string): string {
  // Extract number from improvement string
  const number = improvement.match(/\d+/)?.[0];
  if (!number) return improvement;
  
  return `+${number}%`;
}

/**
 * Calculate performance score based on metrics
 */
export function calculatePerformanceScore(metrics: CaseStudy['data']['results']['performance']): number {
  if (!metrics || metrics.length === 0) return 0;
  
  // Simple scoring based on improvement percentages
  const scores = metrics.map((metric) => {
    const improvement = parseInt(metric.improvement.replace(/\D/g, '')) || 0;
    return Math.min(improvement, 100); // Cap at 100%
  });
  
  return Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);
}

/**
 * Get reading time estimate for case study content
 */
export function getReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const wordCount = content.split(/\s+/).length;
  return Math.ceil(wordCount / wordsPerMinute);
}