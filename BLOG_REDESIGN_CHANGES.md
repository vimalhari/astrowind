# Blog Page Redesign - Three-Column Grid Layout

### Recent Updates (June 25, 2025)

#### Blog Post Count Changes
- **Homepage**: Updated to show **6 blog posts** instead of 4 (changed `count={6}` in BlogLatestPosts component)
- **Blog pages**: Updated to show **9 blog posts per page** instead of 6 (changed `postsPerPage: 9` in config.yaml)
- **Removed deprecated Tailwind plugin**: Removed `@tailwindcss/line-clamp` plugin as it's now included by default in Tailwind CSS v3.3+

### Configuration Changes
- `src/config.yaml`: Updated `postsPerPage` from 6 to 9
- `src/pages/index.astro`: Added `count={6}` parameter to BlogLatestPosts component
- `tailwind.config.js`: Removed deprecated line-clamp plugin import

## Overview
The blog pages have been redesigned to use a modern three-column grid layout that improves readability and visual balance. The new design features responsive card-based layout that adapts gracefully across different screen sizes.

## Changes Made

### 1. Updated Blog Layout Components

**Modified Files:**
- `src/pages/[...blog]/[...page].astro` - Main blog list page
- `src/pages/[...blog]/[category]/[...page].astro` - Category blog pages
- `src/pages/[...blog]/[tag]/[...page].astro` - Tag blog pages

**Changes:**
- Replaced `BlogList` component with `BlogGrid` component
- Updated container max-width from `max-w-4xl` to `max-w-7xl` for better grid accommodation
- Switched from vertical list layout to responsive grid layout

### 2. Enhanced Grid Component

**File:** `src/components/blog/Grid.astro`

**Changes:**
- Updated grid classes for three-column responsive layout:
  - Mobile: 1 column (default)
  - Small screens (sm): 2 columns
  - Large screens (lg): 3 columns
  - Extra large screens (xl): 3 columns (maintained)
- Improved grid spacing with `gap-8`
- Added `auto-rows-fr` for equal height cards

### 3. Redesigned Blog Cards

**File:** `src/components/blog/GridItem.astro`

**Key Improvements:**
- **Card Design**: Modern card layout with rounded corners, shadows, and hover effects
- **Full Height Cards**: Uses flexbox to ensure all cards have equal height
- **Image Enhancement**: Fixed height images (h-48) with hover scale effects
- **Typography**: Improved text hierarchy and spacing
- **Content Organization**: Better structured layout with proper padding and margins
- **Responsive Images**: Optimized image sizes for three-column layout
- **Text Truncation**: Added line-clamp utilities for consistent card heights
- **Footer Section**: Added publication date and category badges
- **Hover States**: Enhanced interactivity with smooth transitions

### 4. Enhanced Styling

**Added Dependencies:**
- `@tailwindcss/line-clamp` - Official Tailwind plugin for text truncation

**Updated Files:**
- `tailwind.config.js` - Added line-clamp plugin
- `src/assets/styles/tailwind.css` - Removed custom line-clamp styles (replaced with official plugin)

## Responsive Behavior

### Mobile Devices (< 640px)
- Single column layout
- Full-width cards
- Optimized for touch interaction

### Tablets (640px - 1024px)  
- Two-column grid
- Balanced card sizing
- Improved readability

### Desktop (> 1024px)
- Three-column grid
- Optimal visual balance
- Consistent card heights

## Features

### Card Components
- **Image Section**: Fixed aspect ratio (16:9) with hover zoom effect
- **Content Section**: Title, excerpt, and metadata with proper hierarchy
- **Interactive Elements**: Hover states for images and links
- **Category Badges**: Visual category indicators
- **Date Display**: Formatted publication dates
- **Text Truncation**: Consistent excerpt lengths using line-clamp

### Accessibility
- Maintained semantic HTML structure
- Proper alt text for images
- Keyboard navigation support
- Screen reader friendly content structure

### Performance
- Optimized image loading with proper sizes
- Lazy loading for images
- Reduced layout shift with fixed dimensions
- Efficient CSS transitions

## Benefits

1. **Improved Visual Balance**: Three-column layout creates better content distribution
2. **Enhanced Readability**: Consistent card heights and typography hierarchy
3. **Better User Experience**: Hover effects and smooth transitions
4. **Mobile-First Design**: Responsive behavior that works on all devices
5. **Modern Aesthetics**: Card-based design with shadows and rounded corners
6. **Consistent Layout**: Equal height cards prevent layout irregularities
7. **Performance Optimized**: Proper image sizing and lazy loading

## Affected Pages

The redesign applies to all blog-related pages:
- Main blog listing page (`/blog`)
- Category pages (`/blog/category/[category-name]`)
- Tag pages (`/blog/tag/[tag-name]`)
- Related posts sections (via BlogHighlightedPosts widget)

## Technical Notes

- The original `List.astro` and `ListItem.astro` components are preserved for potential future use
- All changes maintain backward compatibility
- The design system follows existing color schemes and typography
- Grid layout automatically adjusts based on content availability
