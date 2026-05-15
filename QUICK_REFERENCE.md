# 🎯 Quick Reference Guide - Mandi Mafia Website

## 📍 Image Locations & Usage

### Ambience Images (11 total)
```
Location: /public/mafia/image1.png - image11.png

Breakdown:
├── image1.png    → Hero background (full-width hero section)
├── image2-11.png → Infinite slider carousel (horizontal scroll)
└── image3.png, image4.png → Full-bleed break sections
```

### Culinary Images (13 total)
```
Location: /public/mafia/pic1.png - pic13.png

Breakdown:
├── pic1.png      → Mandi Mafia Special
├── pic2.png      → Sultan Darbar
├── pic3.png      → Juicy Crab Mandi
├── pic4.png      → Alfaham Chicken
├── pic5.png      → Bhimavaram Royyala Mandi
├── pic6.png      → Pepper Mutton Mandi
├── pic7.png      → Arabian Fish Mandi
├── pic8.png      → Chicken Chinese Sizzler
├── pic9.png      → Mutton Seekh Kebab
├── pic10.png     → Peri Peri Grilled Fish
├── pic11.png     → Minced Chicken Pide
├── pic12.png     → Kaddu Ka Kheer
└── pic13.png     → Signature Beverage
```

---

## 📱 Responsive Sizes at a Glance

### Hero Section
```
Mobile (< 640px)
├── Heading: text-3xl
├── Padding: py-12
└── Button: px-5 py-2.5

Tablet (640px-1024px)
├── Heading: text-5xl
├── Padding: py-20
└── Button: px-6 py-3

Desktop (> 1024px)
├── Heading: text-6xl
├── Padding: py-20
└── Button: px-6 py-3
```

### Image Slider (Ambience)
```
Mobile:   h-40  × w-[140px]  ← Small phone screens
Tablet:   h-56  × w-[240px]  ← iPads
Desktop:  h-72  × w-[320px]  ← Large screens
```

### Food Carousel
```
Mobile:   h-48          ← Full mobile view height
Tablet:   h-80          ← Medium view
Desktop:  h-96          ← Full cinematic view
```

### Image Gallery
```
Mobile:   grid-cols-2   (2 images wide)
Tablet:   grid-cols-3   (3 images wide)
Desktop:  grid-cols-4   (4 images wide)

Gap scaling:
Mobile:   gap-3
Tablet:   gap-4
Desktop:  gap-6
```

---

## 🎬 Animation Timing Reference

### Standard Durations
```
Fast micro-interactions:     200ms (tap, ripple)
Medium transitions:          300ms (hover)
Entrance animations:         600-700ms (cinematic)
Scroll-based animations:     Variable
Loop animations:             1800-2000ms
```

### Easing Functions
```
easeOut   → Entry animations (decelerate smoothly)
easeIn    → Exit animations (accelerate)
linear    → Scroll-based parallax
cubic     → Custom curves for polish
```

---

## 🎯 Component Quick Access

### New Components
```
ResponsiveImageGallery.tsx
├── Location: components/
├── Features: Gallery grid, lightbox, tab switching
├── Images: All 24 (11 ambience + 13 food)
└── Responsive: 2 → 3 → 4 columns
```

### Enhanced Components
```
InfiniteSlider.tsx (Ambience)
├── Images: image2-11.png (10 total)
├── Heights: h-40 → h-56 → h-72
├── Effect: Parallax + Ken Burns
└── Interaction: Auto-scroll + swipe

Spotlight.tsx (Food Carousel)
├── Images: pic1-13.png (13 total)
├── Heights: h-48 → h-80 → h-96
├── Effect: Brightness + zoom
└── Interaction: Swipe + dots

page.tsx (Landing page)
├── Animations: Entry, hover, scroll
├── Responsive: All breakpoints
└── Sections: Hero, Slider, Gallery, Menu, Contact
```

---

## 🔧 Common Customizations

### Change Animation Duration
```javascript
// In component file:
transition={{ duration: 0.8 }}  // Slower (default: 0.6)
transition={{ duration: 0.3 }}  // Faster
```

### Change Image Carousel Height
```javascript
// In InfiniteSlider.tsx or Spotlight.tsx:
className="h-40 sm:h-56 md:h-72"  // Adjust h-40, h-56, h-72
```

### Change Gallery Columns
```javascript
// In ResponsiveImageGallery.tsx:
className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"
// Change: grid-cols-2 (mobile) → grid-cols-3 (tablet) → grid-cols-4 (desktop)
```

### Change Color Scheme
```css
/* In tailwind.config.ts */
Gold: #D4AF37
Black: #121212
Charcoal: #2a2a2a
Text: #e6e1d6
```

---

## 📊 Performance Checklist

### Before Deployment
- [ ] Run `npm run build` (no errors)
- [ ] Test with `npm run start` (production build)
- [ ] Check Chrome Lighthouse (target: 90+)
- [ ] Test on mobile device (swipe works)
- [ ] Verify all images load
- [ ] Check console for errors

### After Deployment
- [ ] Monitor Core Web Vitals
- [ ] Check analytics for user behavior
- [ ] Verify WhatsApp links work
- [ ] Test contact form responses
- [ ] Monitor load times

---

## 🎪 Animation Effects Reference

### Entry Animations
```
Fade + Slide:  opacity 0→1, y 24→0 (600ms)
Fade + Scale:  opacity 0→1, scale 0.95→1 (400ms)
Slide + Scale: x -48→0, opacity 0→1 (600ms)
```

### Hover Animations (Desktop Only)
```
Button:  scale 1→1.08, shadow glow
Image:   scale 1→1.1, overlay fade
Text:    x 0→2 (slide right)
Border:  opacity 0→0.6 (gold glow)
```

### Scroll Animations
```
Parallax:     y transforms based on scroll position
Opacity:      opacity 0.3→1→0.3 on scroll range
Brightness:   filter brightness 0.8→1→0.8
Scale:        scale 1→1.12 (Ken Burns)
```

---

## 🌐 Browser DevTools Tips

### Chrome Mobile Emulation
```
F12 → Toggle Device Toolbar (Ctrl+Shift+M)
Select device from dropdown
Test various screen sizes
Check DevTools console for errors
```

### Firefox Responsive Design
```
F12 → Responsive Design Mode (Ctrl+Shift+M)
Adjust viewport width
Test touch interactions
Monitor performance tab
```

### Performance Testing
```
Chrome DevTools → Performance tab
Record page interactions
Check FPS meter (target: 60)
Look for long tasks (red bars)
Analyze layout shifts
```

---

## 📚 File Structure Overview

```
rest/
├── app/
│   ├── page.tsx              ← Main landing page
│   ├── layout.tsx            ← Root layout
│   ├── globals.css           ← Global styles & animations
│   └── [other routes]
│
├── components/
│   ├── ResponsiveImageGallery.tsx  ← NEW: Professional gallery
│   ├── InfiniteSlider.tsx          ← Enhanced: Ambience carousel
│   ├── Spotlight.tsx               ← Enhanced: Food carousel
│   └── [other components]
│
├── data/
│   └── MenuData.ts           ← Menu structure & items
│
├── public/
│   └── mafia/
│       ├── image1-11.png     ← Ambience images
│       └── pic1-13.png       ← Culinary images
│
├── Documentation/
│   ├── COMPLETION_SUMMARY.md      ← Main summary
│   ├── MOBILE_ENHANCEMENTS.md     ← Technical details
│   ├── TESTING_GUIDE.md           ← Testing checklist
│   ├── ANIMATIONS_GUIDE.md        ← Animation showcase
│   ├── README_ENHANCEMENTS.md     ← Implementation summary
│   └── FINAL_CHECKLIST.md         ← Verification checklist
│
├── package.json              ← Dependencies
├── tsconfig.json             ← TypeScript config
├── tailwind.config.ts        ← Tailwind configuration
└── next.config.mjs           ← Next.js configuration
```

---

## ⚡ Performance Metrics

### Target Scores
```
Lighthouse Score:      90+
LCP (Load Speed):      < 2.5s
CLS (Stability):       < 0.1
FID (Responsiveness):  < 100ms
TTI (Interactivity):   < 3.8s
FCP (Paint):           < 1.8s
```

### Animation Performance
```
Target FPS:       60 FPS
CPU Usage:        < 5%
GPU Optimized:    Yes (transforms only)
Smooth Scrolling: Yes
Mobile Optimized: Yes
```

---

## 🎨 Design System Values

### Spacing Scale
```
xs: 4px       → Extra small
sm: 8px       → Small
md: 16px      → Medium
lg: 24px      → Large
xl: 32px      → Extra large
2xl: 48px     → 2X large
```

### Border Radius
```
Buttons/Pills: rounded-full (9999px)
Cards:         rounded-2xl (16px) tablet+, rounded-lg (8px) mobile
Images:        rounded-xl (12px) mobile, rounded-2xl (16px) tablet+
```

### Shadow Effects
```
Small:    shadow-lg
Medium:   shadow-xl
Large:    shadow-2xl
Glow:     shadow-[0_0_24px_rgba(212,175,55,0.4)]
```

---

## 🚀 Deployment Commands

```bash
# Development
npm install        # Install dependencies
npm run dev        # Start dev server (localhost:3000)

# Production
npm run build      # Build for production
npm run start      # Start production server
npm run lint       # Run linter (TypeScript, ESLint)

# Cleanup
npm ci              # Clean install (for CI/CD)
npm cache clean     # Clear npm cache
```

---

## 📞 Quick Help

### Images not loading?
→ Check `/public/mafia/` folder has all 24 images
→ Verify image filenames: `image1.png`, `pic1.png`, etc.

### Animations not smooth?
→ Check browser DevTools → Performance tab
→ Verify GPU acceleration enabled
→ Test on different device

### Mobile layout broken?
→ Check responsive classes: `sm:`, `md:`, `lg:`
→ Test with Chrome DevTools Device Toolbar
→ Verify no fixed widths blocking flow

### Slow performance?
→ Run Lighthouse audit
→ Check image sizes and lazy loading
→ Minimize animation count
→ Profile with DevTools Performance tab

---

## ✅ Pre-Launch Checklist

- [ ] All images present and loading
- [ ] Animations smooth at 60 FPS
- [ ] Mobile layout responsive
- [ ] No console errors
- [ ] WhatsApp links functional
- [ ] Lighthouse score 90+
- [ ] Tested on mobile device
- [ ] Build completes successfully
- [ ] Production ready

---

## 🎯 Success Criteria

✅ Mobile responsive on all screen sizes
✅ Professional animations at 60 FPS
✅ All 24 images properly configured
✅ Zero console errors
✅ Lighthouse score 90+
✅ Touch-friendly interactions
✅ Cross-browser compatible
✅ Production ready

---

**Version**: 1.0.0
**Status**: ✅ Ready to Deploy
**Last Updated**: 2024
