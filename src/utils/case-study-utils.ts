import type { CaseStudy, FilterCriteria, SortCriteria } from '~/types/case-study';

/**
 * Filter case studies based on given criteria
 */
export function filterCaseStudies(caseStudies: CaseStudy[], criteria: FilterCriteria): CaseStudy[] {
  return caseStudies.filter((study) => {
    const { category, client, featured } = criteria;

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
      case 'category':
        comparison = a.data.category.localeCompare(b.data.category);
        break;
      case 'featured':
        comparison = (b.data.featured ? 1 : 0) - (a.data.featured ? 1 : 0);
        break;
    }

    return ascending ? comparison : -comparison;
  });
}

/**
 * Get related case studies based on category or tags
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

      // Match by category or overlapping tags
      return (
        study.data.category === currentStudy.data.category ||
        study.data.tags.some((tag) => currentStudy.data.tags.includes(tag))
      );
    })
    .slice(0, limit);
}

/**
 * Get unique values for filtering options
 */
export function getUniqueValues(caseStudies: CaseStudy[], field: keyof CaseStudy['data']): string[] {
  const values = caseStudies.map((study) => study.data[field] as string);
  return [...new Set(values)].filter(Boolean).sort();
}

/**
 * Search case studies by text
 */
export function searchCaseStudies(caseStudies: CaseStudy[], searchTerm: string): CaseStudy[] {
  const term = searchTerm.toLowerCase().trim();
  if (!term) return caseStudies;

  return caseStudies.filter((study) => {
    const searchableText = [
      study.data.title,
      study.data.subtitle,
      study.data.description,
      study.data.client,
      study.data.category,
      study.data.projectType,
      ...(study.data.tags || []),
      ...(study.data.seoKeywords || []),
    ]
      .join(' ')
      .toLowerCase();

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
