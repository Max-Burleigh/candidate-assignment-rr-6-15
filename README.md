# R&R Multifunctional CBD Gummies Landing Page

## Project Summary

This project is an extremely close replication of the Figma mockup on desktop, with the proper creative liberties taken to ensure responsiveness on tablet and mobile. I mostly copied over exact 1 to 1 div structures from Figma -> code, as well as exact CSS styles I found in dev mode. As an example of my attention to detail, the initial ‘Shop Now’ button has a letter-spacing of exactly 1.12125px such that it will render natively as exactly 145 x 56 pixels whilst still utilizing flex, which quite literally matches the Figma design. However, I wouldn’t normally advise of being this extremely precise, as all of that falls apart the moment a user has any sort of zoom/accessibility settings turned on. In the real-world, it’s smarter to use em/rem units for things of this nature. For the sake of this project however, I took the approach of being a pixel-peeper, but I think in the real-world there are tradeoffs to taking extremely long lengths of time to be exactly that precise. A mix of both is best, to maximize productivity.

## Tech Stack:

HTML

CSS

JS (including completely vanilla implementation for scrolling banner).

\*Note: I know that the Slick library is used on the scrolling banner on the actual website, but for the sake of the project and to show technical capability, I opted for vanilla JS. Slick is highly robust though, and probably a much better implementation.

## Live Preview

[Live Preview Link - To Be Added After Deployment]

## Tracking Implementation

### Google Analytics 4 (GA4)

Placeholder code is included (commented out) for:

- **Page View**: Automatic tracking on page load.
- **Button Clicks**: Custom events for "Shop Now" CTA clicks.
- **Price Selection**: Events for regular vs. subscription pricing choices.

**Implementation Steps:**

1. I would replace `GA_MEASUREMENT_ID` in `index.html` with the actual ID.
2. Uncomment the GA4 script tags in `index.html`.
3. Uncomment the `gtag()` calls in `js/script.js` for event tracking.

**Validation:**

- Use the Google Tag Assistant extension.
- Check GA4 Real-Time reports.
- Verify in DebugView mode for detailed event analysis.

### Meta Pixel

Placeholder code is included (commented out) for:

- **PageView**: Standard page view tracking on load.
- **Lead Event**: Triggered on "Shop Now" clicks to track high-intent users.

**Implementation Steps:**

1. I would replace `YOUR_PIXEL_ID` in `index.html` with the actual ID.
2. Uncomment the Meta Pixel script in `index.html`.
3. Uncomment the `fbq()` calls in `js/script.js`.

**Validation:**

- Use the Meta Pixel Helper extension.
- Check the Events Manager dashboard in Meta Business Suite.
- Test with Meta's Event Testing tool.

## A/B Test Hypothesis

### Problem

A high bounce rate has been observed from paid ad traffic on this landing page. The "Featured In" logos—a key third-party trust signal for new visitors—are pushed below the initial viewport ("the fold") on many common mobile and laptop resolutions. Users with low brand familiarity are not immediately seeing one of our strongest credibility assets.

### Hypothesis

By making subtle reductions to the vertical height of the hero section, we can pull the "Featured In" logos into the initial viewport for a majority of users. This immediate exposure to social proof will build trust faster, reduce user hesitation and bounce rate, leading to increased engagement and a higher conversion rate.

### Test Structure

- **Control (A)**: The current design where the "Featured In" section is often below the fold.

  ```
  +----------------------------------+
  |                                  |
  |         [Hero Section]           |
  |     (H1, p, rating, CTA)         |
  |                                  |
  |                                  |
  +==================================+  <-- THE FOLD
  |  [Featured In Section - HIDDEN]  |
  +----------------------------------+
  ```

- **Variant (B)**: A modified design with a slightly shorter hero section, making the "Featured In" logos visible on page load.

  ```
  +----------------------------------+
  |     [Slightly Shorter Hero       |
  |           Section]               |
  +----------------------------------+
  |                                  |
  |  [Featured In Section - VISIBLE] |
  |                                  |
  +==================================+  <-- THE FOLD
  ```

### Success Metrics

- **Primary Metric**: Conversion Rate (clicks on "Shop Now" buttons).
- **Secondary Metrics**:

  - Bounce Rate (should decrease).
  - Scroll Depth (should increase).
  - Average Time on Page.

- **Target**: Achieve a statistically significant decrease in bounce rate and a 5-10% lift in conversion rate.

### Implementation

Use an A/B testing tool like Intelligems, to serve a 50/50 traffic split. Run the test for a minimum of 2 weeks or until statistical significance is reached on the primary metric.
