# Mandi Mafia Website - Mobile Responsive Testing Guide

## Project Setup & Running

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation & Running
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# The site will be available at http://localhost:3000
```

## Mobile Responsiveness Checklist

### **Device Screen Sizes to Test**

#### Mobile Phones
- [ ] iPhone SE (375 x 667)
- [ ] iPhone 12 (390 x 844)
- [ ] iPhone 14 Pro Max (430 x 932)
- [ ] Galaxy S21 (360 x 800)
- [ ] Pixel 6 (412 x 915)
- [ ] OnePlus 9 (360 x 800)

#### Tablets
- [ ] iPad Mini (768 x 1024)
- [ ] iPad (810 x 1080)
- [ ] iPad Pro 11" (834 x 1194)
- [ ] Galaxy Tab S8 (768 x 1024)

#### Desktop
- [ ] 1280 x 720 (Small Desktop)
- [ ] 1920 x 1080 (Full HD)
- [ ] 2560 x 1440 (2K)

---

## Component Testing

### **1. Header Navigation**
- [ ] Logo displays correctly on mobile (text-lg on mobile, text-xl on tablet+)
- [ ] Navigation menu hidden on mobile, visible on md breakpoint (768px+)
- [ ] "Reserve" button text fits on small mobile screens
- [ ] Header backdrop blur effect visible
- [ ] No horizontal scrolling on any screen size

### **2. Hero Section**
- [ ] Background image scales properly without gaps
- [ ] Hero heading text responsive: 3xl (mobile) → 5xl (tablet) → 6xl (desktop)
- [ ] Hero text paragraph readable on all sizes
- [ ] CTA buttons stack properly on mobile
- [ ] CTA buttons have proper padding and tap targets (44px+ height)
- [ ] Address text size appropriate for mobile

### **3. Infinite Slider (Ambience Section)**
- [ ] Images display correctly: h-40 (mobile) → h-56 (tablet) → h-72 (desktop)
- [ ] Image widths responsive: 140px (mobile) → 240px (tablet) → 320px (desktop)
- [ ] No horizontal scroll overflow on mobile
- [ ] Gap between images responsive: 2 (mobile) → 3 (tablet) → 4 (desktop)
- [ ] Border radius: rounded-xl (mobile) → rounded-2xl (tablet+)
- [ ] Pause/resume text visible and readable
- [ ] Parallax effect smooth on scroll

### **4. Food Spotlight Carousel**
- [ ] Image height responsive: h-48 (mobile) → h-80 (tablet) → h-96 (desktop)
- [ ] Name label text size: text-sm (mobile) → text-xl (tablet) → text-2xl (desktop)
- [ ] Dot indicators appropriately sized for mobile
- [ ] Navigation arrows hidden on mobile (touch swipe instead)
- [ ] "Swipe left/right" instruction visible on mobile only
- [ ] Carousel animations smooth and performant
- [ ] Touch/swipe events responsive

### **5. Image Gallery**
- [ ] Grid responsive: 2 cols (mobile) → 3 cols (tablet) → 4 cols (desktop)
- [ ] Gap between images: gap-3 (mobile) → gap-4 (tablet) → gap-6 (desktop)
- [ ] Image aspect ratio consistent (1:1 square)
- [ ] Tab buttons responsive: full width or inline
- [ ] Lightbox modal proper overlay on mobile
- [ ] Close button accessible on mobile
- [ ] Image loads with staggered animation
- [ ] Hover/tap effects working correctly

### **6. Menu Section**
- [ ] Menu items stack properly on mobile
- [ ] Category titles responsive sizing
- [ ] Two-column layout works on tablet, single column on mobile if needed
- [ ] Text truncation with ellipsis if needed
- [ ] "Highlight" badges with pulsing animation visible
- [ ] Price formatting clear
- [ ] No overflow on small screens

### **7. Contact Section**
- [ ] Grid layout responsive (2 cols on desktop, 1 col on mobile)
- [ ] Contact info readable on all screen sizes
- [ ] SVG map visualization scalable
- [ ] CTA button properly sized for mobile

### **8. Floating CTA Button**
- [ ] Positioned correctly on mobile (bottom-right with padding)
- [ ] Size appropriate for thumb accessibility
- [ ] Doesn't overlap with other content
- [ ] Animation smooth entrance
- [ ] Tap feedback visible (scale animation)
- [ ] WhatsApp link functional

### **9. Footer**
- [ ] Text visible and readable on mobile
- [ ] Proper padding on all sides
- [ ] Contact info formatted correctly

---

## Animation Performance Testing

### Desktop Performance Checks
```bash
# Check Core Web Vitals
# In Chrome DevTools:
# - Performance tab → Run Lighthouse
# - Check Largest Contentful Paint (LCP) < 2.5s
# - Check Cumulative Layout Shift (CLS) < 0.1
# - Check First Input Delay (FID) < 100ms
```

### Mobile Performance Checks
- [ ] Animations remain smooth at 60 FPS
- [ ] No janky scrolling during parallax effects
- [ ] Image lazy loading works without jumps
- [ ] Transitions between sections smooth
- [ ] Carousel swipe animations responsive to touch

### Animation Verification
- [ ] Header entrance animation smooth
- [ ] Fade-in animations on scroll working
- [ ] Staggered menu animations visible
- [ ] Hover animations work (desktop) / tap animations (mobile)
- [ ] Floating CTA entrance animation works
- [ ] Spotlight brightness transitions smooth
- [ ] Glow effects visible on hover

---

## Touch & Interaction Testing

### Mobile Touch Interactions
- [ ] Tap areas at least 44x44 pixels
- [ ] No hover-only functionality
- [ ] Swipe gestures work smoothly
- [ ] Long-press doesn't trigger unwanted actions
- [ ] Touch responsiveness immediate (< 100ms)

### Desktop Mouse Interactions
- [ ] Hover effects visible on all interactive elements
- [ ] Cursor changes appropriately
- [ ] Click areas clearly defined
- [ ] No double-click zoom issues

---

## Image Responsiveness Testing

### Image Loading
- [ ] All images load correctly
- [ ] No broken image icons
- [ ] Images scale without distortion
- [ ] Lazy loading works (images load as user scrolls)
- [ ] No image overflow on mobile

### Image Paths Verified
- [ ] `/mafia/image1.png` to `image11.png` - Ambience images
- [ ] `/mafia/pic1.png` to `pic13.png` - Food images
- [ ] All paths case-sensitive match actual files

### Image Quality
- [ ] Images clear and sharp on high-DPI displays
- [ ] No pixelation or blurring
- [ ] Aspect ratios preserved

---

## Responsive Typography Testing

### Font Sizes
- [ ] Body text readable at all breakpoints
- [ ] Headings scale appropriately
- [ ] No text overflow
- [ ] Line height adequate for readability

### Breakpoints Verified
```
mobile (default): text-xs, text-sm, text-base
sm (640px): text-sm, text-base, text-lg
md (768px): text-base, text-lg, text-xl, text-2xl
lg (1024px): text-lg, text-xl, text-2xl
```

---

## Build & Production Testing

### Build Process
```bash
# Build for production
npm run build

# Test production build locally
npm run start
```

- [ ] Build completes without errors
- [ ] No TypeScript compilation errors
- [ ] No build warnings
- [ ] Production bundle size reasonable

### Production Checks
- [ ] Site loads completely in < 3 seconds
- [ ] All animations work in production
- [ ] Images load correctly
- [ ] No console errors
- [ ] API/external links functional (WhatsApp)

---

## Browser Compatibility

### Chrome/Edge
- [ ] Latest version
- [ ] Animations smooth
- [ ] Mobile DevTools responsive view works
- [ ] All animations render correctly

### Firefox
- [ ] Latest version
- [ ] Animations smooth
- [ ] Responsive Design Mode works
- [ ] No CSS issues

### Safari
- [ ] macOS latest
- [ ] iOS 15+
- [ ] Animations smooth
- [ ] No WebKit-specific issues

### Mobile Browsers
- [ ] Chrome Mobile
- [ ] Firefox Mobile
- [ ] Safari Mobile
- [ ] Samsung Internet

---

## Common Issues Checklist

### Potential Issues to Look For
- [ ] Horizontal scrollbar appearing unexpectedly
- [ ] Text not centered on mobile
- [ ] Images not loading
- [ ] Animations causing layout shifts
- [ ] Touch events not registering
- [ ] Font sizes too small (< 16px)
- [ ] Buttons not tall enough for touch (< 44px)
- [ ] Overlapping elements on mobile
- [ ] Navigation not accessible on mobile

---

## Testing Tools

### Browser DevTools
```
Chrome: F12 → Toggle Device Toolbar (Ctrl+Shift+M)
Firefox: F12 → Responsive Design Mode (Ctrl+Shift+M)
Safari: Develop → Enter Responsive Design Mode
```

### Online Testing
- [ ] Google Mobile-Friendly Test: https://search.google.com/test/mobile-friendly
- [ ] PageSpeed Insights: https://pagespeed.web.dev/
- [ ] BrowserStack (paid): https://www.browserstack.com/

### Manual Testing Devices
- [ ] Physical iPhone/iPad
- [ ] Physical Android devices
- [ ] Android emulator
- [ ] iOS simulator

---

## Performance Metrics Target

- [ ] Lighthouse Score: 90+
- [ ] Largest Contentful Paint (LCP): < 2.5s
- [ ] Cumulative Layout Shift (CLS): < 0.1
- [ ] First Input Delay (FID): < 100ms
- [ ] Time to Interactive (TTI): < 3.8s

---

## Documentation & Assets

### What's Included
- ✅ **ResponsiveImageGallery.tsx**: Professional gallery with lightbox
- ✅ **Enhanced InfiniteSlider.tsx**: Mobile-optimized carousel
- ✅ **Enhanced Spotlight.tsx**: Food carousel with mobile controls
- ✅ **Enhanced app/page.tsx**: Fully responsive landing page
- ✅ **app/globals.css**: Animation keyframes and utilities
- ✅ **MOBILE_ENHANCEMENTS.md**: Detailed documentation
- ✅ **11 ambience images** (image1-11.png)
- ✅ **13 food images** (pic1-13.png)

---

## Sign-Off

- [ ] All components tested on mobile
- [ ] All animations performing smoothly
- [ ] No console errors
- [ ] Lighthouse scores acceptable
- [ ] Ready for deployment

---

**Testing Date**: _______________
**Tested By**: _______________
**Status**: ✅ Ready for Production / ⚠️ Issues Found

**Notes**:
________________________________
________________________________
________________________________
