# R&R Multifunctional CBD Gummies Landing Page

## Project Summary

This project is a pixel-perfect recreation of a high-conversion landing page for R&R's Multifunctional CBD Gummies product. The implementation focuses on clean, semantic HTML, modern CSS techniques, and vanilla JavaScript for interactivity.

## Live Preview

[Deploy this project to view live preview - instructions below]

## Technical Approach

### Structure

- **HTML5**: Semantic markup with proper meta tags and SEO optimization
- **CSS3**: Custom properties, flexbox, and grid for responsive layouts
- **JavaScript**: Vanilla JS for interactive elements (FAQ accordion, price toggle)

### Key Features

1. **Responsive Design**: Mobile-first approach with breakpoints at 768px and 1024px
2. **Custom Fonts**: Proper @font-face implementation for Century Old Style and Poppins
3. **Smooth Animations**: CSS transitions for hover states and scrolling banner
4. **Accessibility**: Semantic HTML and proper contrast ratios

### Performance Optimizations

- Lazy loading for featured logos
- Font display swap for better loading experience
- Optimized images from provided assets

## Tracking Implementation

### Google Analytics 4 (GA4)

Placeholder code is included (commented) for:

- **Page View**: Automatic tracking on page load
- **Button Clicks**: Custom events for "Shop Now" CTA
- **Price Selection**: Events for regular vs subscription pricing

**Implementation Steps:**

1. Replace `GA_MEASUREMENT_ID` with your actual ID
2. Uncomment GA4 script tags in index.html
3. Uncomment gtag() calls in script.js

**Validation:**

- Use Google Tag Assistant extension
- Check GA4 Real-Time reports
- Verify in DebugView mode

### Meta Pixel

Placeholder code is included (commented) for:

- **PageView**: Standard page view tracking
- **Lead Event**: Triggered on "Shop Now" clicks with product context

**Implementation Steps:**

1. Replace `YOUR_PIXEL_ID` with your actual ID
2. Uncomment Meta Pixel script in index.html
3. Uncomment fbq() calls in script.js

**Validation:**

- Use Meta Pixel Helper extension
- Check Events Manager dashboard
- Test with Meta's Event Testing tool

## Deployment Instructions

### Using Netlify (Recommended)

1. Create a [Netlify](https://www.netlify.com/) account
2. Drag and drop the project folder to Netlify dashboard
3. Site will be live instantly with a unique URL

### Using Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow prompts to deploy

### Using GitHub Pages

1. Push to GitHub repository
2. Go to Settings > Pages
3. Select source branch and save
4. Access via `https://[username].github.io/[repo-name]`

## A/B Test Hypothesis

### Current Issue

High bounce rate observed from paid ad traffic on this landing page.

### Test Hypothesis

**Adding social proof elements immediately below the fold will increase conversions by building trust faster.**

### Test Structure

- **Control (A)**: Current design
- **Variant (B)**: Add a testimonials carousel section after the hero, featuring:
  - 3-4 customer testimonials with names and locations
  - Before/after wellness scores
  - Verified purchase badges

### Success Metrics

- Primary: Conversion rate (Shop Now clicks → purchases)
- Secondary: Time on page, scroll depth, bounce rate
- Target: 15% increase in conversion rate

### Implementation

Use Google Optimize or similar tool to serve 50/50 traffic split. Run for minimum 2 weeks or until statistical significance is reached.

## Project Structure

```
5280-brands/
├── index.html          # Main landing page
├── styles.css          # All styling
├── fonts.css           # Font declarations
├── script.js           # Interactive functionality
├── README.md           # This file
├── Images/             # All image assets
└── Fonts/              # Custom font files
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Android)
