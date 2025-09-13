import type { CaseStudy } from '../types/case-study';

/**
 * Performance-focused utilities for case study optimization
 */

/**
 * Lazy load images with intersection observer
 */
export function initImageLazyLoading(): void {
  if (typeof window === 'undefined') return;

  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target as HTMLImageElement;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.classList.remove('blur-sm');
          img.classList.add('transition-all', 'duration-300');
          observer.unobserve(img);
        }
      }
    });
  });

  const lazyImages = document.querySelectorAll('img[data-src]');
  lazyImages.forEach((img) => imageObserver.observe(img));
}

/**
 * Optimize case study data for performance
 */
export function optimizeCaseStudyData(studies: CaseStudy[]): CaseStudy[] {
  return studies.map((study) => ({
    ...study,
    data: {
      ...study.data,
      // Truncate description for list views
      description:
        study.data.description.length > 150 ? study.data.description.substring(0, 150) + '...' : study.data.description,
      // Limit technologies for initial display
      technologies: study.data.technologies.slice(0, 6),
      // Limit features for preview
      features: study.data.features.slice(0, 3),
    },
  }));
}

/**
 * Preload critical case study data
 */
export function preloadCriticalData(studies: CaseStudy[]): void {
  if (typeof window === 'undefined') return;

  // Preload first few case study pages
  const criticalStudies = studies.slice(0, 3);

  criticalStudies.forEach((study) => {
    const link = document.createElement('link');
    link.rel = 'prefetch';
    link.href = `/case-studies/${study.id}`;
    document.head.appendChild(link);
  });
}

/**
 * Debounce function for search input
 */
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Virtual scrolling for large case study lists
 */
export class VirtualScroller {
  private container: HTMLElement;
  private items: CaseStudy[];
  private itemHeight: number;
  private visibleItems: number;
  private startIndex: number = 0;

  constructor(container: HTMLElement, items: CaseStudy[], itemHeight: number = 400) {
    this.container = container;
    this.items = items;
    this.itemHeight = itemHeight;
    this.visibleItems = Math.ceil(container.clientHeight / itemHeight) + 5; // Buffer
    this.init();
  }

  private init(): void {
    this.container.style.height = `${this.items.length * this.itemHeight}px`;
    this.container.style.position = 'relative';
    this.render();

    this.container.addEventListener('scroll', this.handleScroll.bind(this));
  }

  private handleScroll(): void {
    const scrollTop = this.container.scrollTop;
    this.startIndex = Math.floor(scrollTop / this.itemHeight);
    this.render();
  }

  private render(): void {
    const endIndex = Math.min(this.startIndex + this.visibleItems, this.items.length);
    const visibleItems = this.items.slice(this.startIndex, endIndex);

    // Clear container
    this.container.innerHTML = '';

    // Create container for visible items
    const itemContainer = document.createElement('div');
    itemContainer.style.transform = `translateY(${this.startIndex * this.itemHeight}px)`;

    visibleItems.forEach((item, index) => {
      const element = this.createItemElement(item, this.startIndex + index);
      itemContainer.appendChild(element);
    });

    this.container.appendChild(itemContainer);
  }

  private createItemElement(item: CaseStudy, index: number): HTMLElement {
    // This would be implemented based on your specific case study card structure
    const element = document.createElement('div');
    element.style.height = `${this.itemHeight}px`;
    element.className = 'case-study-virtual-item';
    element.innerHTML = `<!-- Case study card content for item ${index} -->`;
    return element;
  }
}

/**
 * Performance monitoring utilities
 */
export class PerformanceMonitor {
  private metrics: Map<string, number> = new Map();

  startTiming(label: string): void {
    this.metrics.set(label, performance.now());
  }

  endTiming(label: string): number {
    const startTime = this.metrics.get(label);
    if (!startTime) return 0;

    const duration = performance.now() - startTime;
    console.log(`[Performance] ${label}: ${duration.toFixed(2)}ms`);
    return duration;
  }

  measureCaseStudyLoad(): void {
    this.startTiming('case-study-load');

    window.addEventListener('load', () => {
      this.endTiming('case-study-load');
    });
  }
}

/**
 * Resource preloading for case studies
 */
export function preloadResources(): void {
  if (typeof window === 'undefined') return;

  // Preload common images
  const commonImages = ['/assets/images/default.png', '/assets/images/CriztecLogo.png'];

  commonImages.forEach((src) => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'image';
    link.href = src;
    document.head.appendChild(link);
  });
}

/**
 * Optimize animations for better performance
 */
export function optimizeAnimations(): void {
  if (typeof window === 'undefined') return;

  // Reduce motion for users who prefer it
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (prefersReducedMotion.matches) {
    document.body.classList.add('reduced-motion');
  }

  // Use requestAnimationFrame for smooth animations
  const animatedElements = document.querySelectorAll('[data-animate]');

  const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        requestAnimationFrame(() => {
          entry.target.classList.add('animate-in');
        });
      }
    });
  });

  animatedElements.forEach((el) => animationObserver.observe(el));
}
