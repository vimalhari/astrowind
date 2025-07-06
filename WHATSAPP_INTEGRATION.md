# WhatsApp Integration Documentation

## Overview

This document describes the WhatsApp chat integration that has been implemented to replace the previous Tawk.to chat system.

## Changes Made

### 1. Removed Tawk Integration

- **File removed**: `src/components/common/TawkChat.astro`
- **Layout updated**: Removed TawkChat import and usage from `src/layouts/Layout.astro`
- **Security headers updated**: Removed Tawk.to domains from CSP in `public/_headers`

### 2. Added WhatsApp Integration

- **New component**: `src/components/common/WhatsAppChat.astro`
- **WhatsApp number**: +44 07404979307
- **Built with**: Tailwind CSS (no custom CSS required)
- **Features**:
  - Floating chat button in bottom-right corner
  - Fully responsive design using Tailwind breakpoints
  - Hover effects and animations using Tailwind utilities
  - Direct link to WhatsApp chat
  - Analytics tracking ready (Google Analytics events)
  - Mobile-first responsive design

### 3. Configuration

- **Phone number**: The WhatsApp number is currently hardcoded in the component
- **Enable/Disable**: Can be controlled via the `isEnabled` variable in the component
- **Styling**: Uses Tailwind CSS classes exclusively - no custom CSS
- **URL format**: Uses `https://wa.me/447404979307` (international format without + symbol)

## Component Features

### Visual Design

- **Floating button**: 48px (12 rem) on mobile, 64px (16 rem) on desktop
- **Colors**: Tailwind green gradient (`from-green-400 to-green-600`)
- **Icon**: WhatsApp SVG icon with proper branding
- **Text tooltip**: "Chat with us" appears on hover (desktop only)
- **Animations**: Tailwind `animate-pulse` with hover disable, scale effects

### Responsive Behavior

- **Desktop**: 64px button with hover tooltip and animations (`md:` breakpoint)
- **Mobile**: 48px simplified view without tooltip text
- **Positioning**: Fixed bottom-right with responsive spacing
- **Accessibility**: Proper ARIA labels and keyboard navigation support

### Tailwind Implementation

- **No custom CSS**: All styling done with Tailwind utilities
- **Responsive**: Uses Tailwind's responsive prefixes (`md:`)
- **Animations**: Built-in Tailwind animations (`animate-pulse`, `hover:scale-110`)
- **Colors**: Tailwind green color palette for WhatsApp branding
- **Shadows**: Tailwind shadow utilities with color variants

## Why Tailwind CSS?

The WhatsApp component was built using Tailwind CSS instead of custom CSS for several important reasons:

### ✅ **Consistency**

- Uses the same design system as the rest of the Astro project
- Maintains consistent spacing, colors, and typography scales
- Follows established Tailwind conventions already in use

### ✅ **Performance**

- No additional custom CSS bundle - uses existing Tailwind classes
- Better tree-shaking and optimization
- Smaller final CSS output due to Tailwind's purging

### ✅ **Maintainability**

- Easier to modify using familiar Tailwind utility classes
- Self-documenting code - classes describe the styling directly
- No need to manage separate CSS files or style conflicts

### ✅ **Responsive Design**

- Built-in responsive breakpoints (`md:`, `lg:`, etc.)
- Mobile-first approach consistent with modern best practices
- Predictable responsive behavior

### ✅ **Developer Experience**

- IntelliSense support for Tailwind classes in VS Code
- Faster development with utility-first approach
- No naming conventions needed for CSS classes

## Future Enhancements

### Potential Improvements

1. **Pre-filled message**: Add custom message when opening WhatsApp
2. **Business hours**: Show/hide based on operating hours
3. **Multiple contacts**: Support different departments or languages
4. **Analytics**: Enhanced tracking for click-through rates
5. **Configuration system**: Move settings to config.yaml

### Implementation Example for Pre-filled Message

```astro
const whatsappMessage = encodeURIComponent("Hello! I'm interested in your services."); const whatsappUrl =
`https://wa.me/${formattedNumber}?text=${whatsappMessage}`;
```

## Testing

- **Development**: Component tested on `http://localhost:4321`
- **Build**: Successfully builds without errors
- **Cross-browser**: Tested on modern browsers
- **Mobile**: Responsive design verified

## Maintenance

- **Number updates**: Change the `whatsappNumber` variable in the component
- **Styling**: Modify Tailwind classes directly in the component markup
- **Analytics**: Update the click tracking in the `<script>` section
- **Responsive behavior**: Use Tailwind responsive prefixes (`md:`, `lg:`, etc.)

## Security Considerations

- **External links**: WhatsApp links open in new tab with `rel="noopener noreferrer"`
- **CSP compliance**: No external scripts or styles required
- **Privacy**: No data collection beyond optional analytics tracking

## File Structure

```
src/
  components/
    common/
      WhatsAppChat.astro  # Main WhatsApp component
  layouts/
    Layout.astro         # Updated to use WhatsApp instead of Tawk
public/
  _headers              # Updated CSP to remove Tawk.to domains
```
