import type { ServiceCategoryType, TechColorScheme } from '~/types/case-study';

/**
 * Get service category-specific gradient classes
 */
export function getServiceCategoryGradient(category: string): string {
  const gradients: Record<ServiceCategoryType, string> = {
    'Web Development': 'from-blue-500 via-indigo-600 to-purple-600',
    'Digital Marketing': 'from-pink-500 via-red-600 to-orange-600',
    'E-commerce Development': 'from-green-500 via-emerald-600 to-teal-600',
    'Mobile App Development': 'from-purple-500 via-violet-600 to-indigo-600',
    'Performance Optimization': 'from-yellow-500 via-orange-600 to-red-600',
    'SEO Services': 'from-teal-500 via-cyan-600 to-blue-600',
    'Content Marketing': 'from-rose-500 via-pink-600 to-purple-600',
    'Social Media Marketing': 'from-violet-500 via-purple-600 to-pink-600',
    'IT Support': 'from-gray-500 via-slate-600 to-zinc-600',
    'Migration Services': 'from-amber-500 via-yellow-600 to-orange-600',
    'Website Redesign': 'from-indigo-500 via-blue-600 to-cyan-600',
    'Custom Software Development': 'from-emerald-500 via-green-600 to-teal-600',
    'API Development': 'from-sky-500 via-blue-600 to-indigo-600',
    'Database Design': 'from-stone-500 via-gray-600 to-slate-600',
    'UI/UX Design': 'from-fuchsia-500 via-pink-600 to-rose-600',
    'Technical Consulting': 'from-cyan-500 via-teal-600 to-emerald-600',
    Other: 'from-blue-500 via-indigo-600 to-purple-600',
  };

  return gradients[category as ServiceCategoryType] || 'from-blue-500 via-indigo-600 to-purple-600';
}

/**
 * Get technology-specific color schemes
 */
export function getTechColorScheme(index: number): TechColorScheme {
  const schemes: TechColorScheme[] = [
    {
      bg: 'bg-purple-100 dark:bg-purple-900/30',
      text: 'text-purple-700 dark:text-purple-300',
      border: 'border-purple-200 dark:border-purple-700',
    },
    {
      bg: 'bg-cyan-100 dark:bg-cyan-900/30',
      text: 'text-cyan-700 dark:text-cyan-300',
      border: 'border-cyan-200 dark:border-cyan-700',
    },
    {
      bg: 'bg-orange-100 dark:bg-orange-900/30',
      text: 'text-orange-700 dark:text-orange-300',
      border: 'border-orange-200 dark:border-orange-700',
    },
    {
      bg: 'bg-pink-100 dark:bg-pink-900/30',
      text: 'text-pink-700 dark:text-pink-300',
      border: 'border-pink-200 dark:border-pink-700',
    },
    {
      bg: 'bg-green-100 dark:bg-green-900/30',
      text: 'text-green-700 dark:text-green-300',
      border: 'border-green-200 dark:border-green-700',
    },
    {
      bg: 'bg-blue-100 dark:bg-blue-900/30',
      text: 'text-blue-700 dark:text-blue-300',
      border: 'border-blue-200 dark:border-blue-700',
    },
  ];

  return schemes[index % schemes.length];
}

/**
 * Get metric-specific color schemes for performance display
 */
export function getMetricColorScheme(type: 'performance' | 'business' | 'improvement'): {
  gradient: string;
  iconBg: string;
  textColor: string;
  borderColor: string;
} {
  const schemes = {
    performance: {
      gradient: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20',
      iconBg: 'bg-blue-100 dark:bg-blue-800/50',
      textColor: 'text-blue-600 dark:text-blue-400',
      borderColor: 'border-blue-200 dark:border-blue-800/50',
    },
    business: {
      gradient: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20',
      iconBg: 'bg-green-100 dark:bg-green-800/50',
      textColor: 'text-green-600 dark:text-green-400',
      borderColor: 'border-green-200 dark:border-green-800/50',
    },
    improvement: {
      gradient: 'from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20',
      iconBg: 'bg-purple-100 dark:bg-purple-800/50',
      textColor: 'text-purple-600 dark:text-purple-400',
      borderColor: 'border-purple-200 dark:border-purple-800/50',
    },
  };

  return schemes[type];
}

/**
 * Generate background pattern for service category cards
 */
export function generateBackgroundPattern(index: number): string {
  const patterns = [
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PGNpcmNsZSBjeD0iMyIgY3k9IjMiIHI9IjMiLz48L2c+PC9nPjwvc3ZnPg==',
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4xIj48cG9seWdvbiBwb2ludHM9IjIwIDIwIDQwIDQwIDAgNDAiLz48L2c+PC9nPjwvc3ZnPg==',
  ];

  return patterns[index % patterns.length];
}
