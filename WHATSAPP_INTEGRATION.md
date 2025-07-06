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
- **Features**:
  - Floating chat button in bottom-right corner
  - Responsive design (optimized for mobile and desktop)
  - Hover effects and animations
  - Direct link to WhatsApp chat
  - Analytics tracking ready (Google Analytics events)

### 3. Configuration

- **Phone number**: The WhatsApp number is currently hardcoded in the component
- **Enable/Disable**: Can be controlled via the `isEnabled` variable in the component
- **Styling**: All styles are contained within the component
- **URL format**: Uses `https://wa.me/447404979307` (international format without + symbol)

## Component Features

### Visual Design

- **Floating button**: 60px diameter on desktop, 50px on mobile
- **Colors**: WhatsApp green gradient (#25d366 to #128c7e)
- **Icon**: WhatsApp SVG icon with proper branding
- **Text tooltip**: "Chat with us" appears on hover (desktop only)
- **Animations**: Pulse animation to draw attention, hover effects

### Responsive Behavior

- **Desktop**: Shows button with hover tooltip and animations
- **Mobile**: Simplified view without tooltip text
- **Accessibility**: Proper ARIA labels and keyboard navigation support

### Browser Compatibility

- **Modern browsers**: Full support with CSS Grid and Flexbox
- **Fallbacks**: Graceful degradation for older browsers
- **Performance**: Lightweight with minimal CSS and no external dependencies

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
- **Styling**: Modify CSS within the component's `<style>` section
- **Analytics**: Update the click tracking in the `<script>` section

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
