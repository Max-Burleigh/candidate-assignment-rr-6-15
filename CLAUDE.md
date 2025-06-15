# Claude Project Context - R&R CBD Gummies Landing Page

##IMPORTANT REMINDER: When writing code your only goal is to PERFECTLY match the designs within Figma. It is crucial that we maintain a pixel-perfect recreation to the best of our abilities.

##Figma Dev Notes:
DEV NOTE: Please incorporate the min and max width and height values used throughout the design into your build.

##Figma MCP Guidelines:

- The Figma Dev Mode MCP Server provides an assets endpoint which can serve image and SVG assets
- IMPORTANT: DO NOT import/add new icon packages, all the assets should be in the Figma payload
- IMPORTANT: do NOT use or create placeholders if a localhost source is provided

## Project Overview

This is a job candidate assignment for 5280 Brands to recreate a Figma design as a high-conversion landing page for R&R Multifunctional CBD Gummies. The project demonstrates front-end development skills, attention to detail, and strategic thinking around conversion optimization.

## Current Implementation Status

### ✅ Completed

1. **Pixel-Perfect Recreation**

   - Figma design URL: https://www.figma.com/design/1L8voEUu4r9DJcUycUqoy2/Max-Burleigh-Candidate-Assignment?node-id=1-45&m=dev
   - Implemented all sections according to design specs
   - Custom fonts properly integrated (Century Old Style & Poppins)
   - Brand colors implemented as CSS variables
   - **Refined Details (Latest Updates):**
     - Fixed all line-heights to exact pixel values (62px for h1, 29px for body)
     - Updated button styling with proper padding and min-heights
     - Corrected price button design (green/white for active, chartreuse/green for inactive)
     - Adjusted hero section padding and structure
     - Fixed FAQ icon sizing (15x15px) and rotation animation
     - Updated scrolling banner typography
     - Improved responsive breakpoints
     - **Product Section Refinements:**
       - Fixed price button widths to be equal (flex: 1)
       - Made Shop Now button full width in product section
       - Removed all creative effects (no lift, shadows, or transitions beyond color)
       - Simplified hover states to only change background colors
       - Removed focus outlines for cleaner appearance
       - Ensured strict adherence to Figma design without creative liberties

2. **Responsive Design**

   - Mobile-first approach
   - Breakpoints: Mobile (<768px), Tablet (768-1024px), Desktop (>1024px)
   - Separate hero images for mobile/desktop

3. **Interactive Elements**

   - FAQ accordion with smooth transitions
   - Price toggle between Regular ($55) and Subscribe ($44)
   - Hover states on all interactive elements
   - Infinite scrolling banner

4. **Tracking Placeholders**
   - GA4 setup (commented) with page view and custom events
   - Meta Pixel setup (commented) with PageView and Lead events
   - Complete documentation in README and code comments

### 🚧 Not Yet Implemented

- A/B test hypothesis (documented but not coded)
- Actual tracking integration (placeholders only)
- Deployment to live hosting

## Technical Stack

- **HTML5**: Semantic markup, SEO-friendly
- **CSS3**: Custom properties, Flexbox, Grid, animations
- **Vanilla JavaScript**: No dependencies, clean event handling
- **Assets**: All images and fonts provided locally

## Font Configuration (CRITICAL)

**⚠️ IMPORTANT: Font Weight Mappings**

The project uses specific font weight mappings that are crucial for matching Figma designs exactly:

### Poppins Font Weights:
- `font-weight: 300` → `Poppins-Light.ttf`
- `font-weight: 400` → `Poppins-Regular.ttf` ✅ **CRITICAL: Must use Regular, not Light**
- `font-weight: 500` → `Poppins-Medium.ttf`
- `font-weight: 700` → `Poppins-ExtraBold.ttf`

### Century Old Style Font Weights:
- `font-weight: 400` (normal) → `CenturyOldStyleRegular`
- `font-weight: 400` (italic) → `CenturyOldStyleItalic`
- `font-weight: 700` (bold) → `CenturyOldStyleBold`

### Font Rendering Optimization:
- All fonts use `font-display: swap` for performance
- Hero description uses `text-rendering: optimizeLegibility` for precise text wrapping
- **Text Wrapping**: Hero description width is exactly 343px to achieve proper line breaks matching Figma

**Font Issues Solved:**
- ✅ Hero text wrapping now matches Figma exactly (line breaks: "can" | "help...mood," | "and...")
- ✅ Button text weight corrected from thick to proper Regular weight
- ✅ All font weights properly mapped to correct font files

## Code Quality Standards

1. **No external dependencies** - Pure HTML/CSS/JS
2. **Clean, semantic HTML** - Proper heading hierarchy, ARIA where needed
3. **Modular CSS** - Organized by sections, reusable classes
4. **Commented tracking code** - Ready for production implementation
5. **Performance optimized** - Lazy loading, font-display: swap

## Key Design Tokens

```css
--white: #ffffff;
--green-dark-hover: #002e29;
--green-primary: #004943;
--green-dark: #063d35;
--chartreuse: #ebff9d;
--black: #2d2926;
--gray-light: #f8f8f8;
```

## Future Improvements to Consider

### Performance Enhancements

- [ ] Image optimization (WebP format with fallbacks)
- [ ] Critical CSS inlining
- [ ] Minification of CSS/JS for production
- [ ] CDN setup for assets

### Functionality Additions

- [ ] Form validation for email capture
- [ ] Cart/checkout integration
- [ ] Product variant selection
- [ ] Customer reviews API integration
- [ ] Live chat widget

### Conversion Optimization

- [ ] Exit-intent popup
- [ ] Countdown timer for offers
- [ ] Trust badges near CTA
- [ ] Video testimonials
- [ ] Sticky add-to-cart button on mobile

### Accessibility Improvements

- [ ] Full ARIA labeling
- [ ] Keyboard navigation indicators
- [ ] Screen reader testing
- [ ] High contrast mode support

### Testing & Analytics

- [ ] A/B test implementation
- [ ] Heatmap tracking setup
- [ ] Cross-browser testing
- [ ] Performance monitoring

## Development Commands

Currently no build process - pure static files. To run locally:

1. Open `index.html` in a browser
2. Use Live Server extension in VS Code for hot reload

## Important Notes

- **Figma MCP Access**: We have access to Figma designs via MCP integration
- **Asset Organization**: All images in `/Images/`, fonts in `/Fonts/`
- **No Frameworks**: Assignment specifically requires vanilla HTML/CSS/JS
- **Shopify Context**: Liquid syntax knowledge is a plus but not implemented
- **Design Accuracy**: Strict adherence to Figma mockup - no creative liberties or additional effects

## Latest Focus Areas

- **Hero Section & Announcement Bar Pixel-Perfect Updates (June 14, 2025):**
  - Fixed announcement bar font-weight to 300 for lighter appearance matching Figma
  - Adjusted hero description max-width to 380px to force text onto 3 lines exactly as shown in design
  - Updated Shop Now button font-weight from 400 to 300 for lighter appearance
  - Verified hero section spacing and positioning matches Figma layout
- Product section button accuracy (hover states, widths, layouts)
- Removing any creative additions not in original design
- Ensuring pixel-perfect recreation without embellishments

## Contact & Resources

- Assignment instructions: `/instructions.md`
- Design reference: Figma link above
- Tracking documentation: See README.md and inline code comments

---

_Last Updated: June 15, 2025 - Critical font configuration documented and text rendering issues resolved_
