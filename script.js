// FAQ Accordion Functionality
function toggleFAQ(index) {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item, i) => {
    const icon = item.querySelector(".faq-icon");

    if (i === index) {
      // Toggle the clicked item
      item.classList.toggle("active");
      icon.textContent = item.classList.contains("active") ? "×" : "+";
    } else {
      // Ensure all other items are closed
      item.classList.remove("active");
      icon.textContent = "+";
    }
  });
}

// Price Toggle Functionality
function selectPrice(type) {
  const regularBtn = document.getElementById("regular-price");
  const subscribeBtn = document.getElementById("subscribe-price");

  if (type === "regular") {
    regularBtn.classList.add("active");
    subscribeBtn.classList.remove("active");

    // GA4 Event Placeholder (commented)
    // gtag('event', 'select_price', {
    //     'event_category': 'engagement',
    //     'event_label': 'regular_price',
    //     'value': 55
    // });
  } else {
    subscribeBtn.classList.add("active");
    regularBtn.classList.remove("active");

    // GA4 Event Placeholder (commented)
    // gtag('event', 'select_price', {
    //     'event_category': 'engagement',
    //     'event_label': 'subscribe_price',
    //     'value': 44
    // });
  }
}

// Shop Now Button Click Handler
function shopNow() {
  // GA4 Event Placeholder (commented)
  // gtag('event', 'click', {
  //     'event_category': 'engagement',
  //     'event_label': 'shop_now_button'
  // });

  // Meta Pixel Lead Event Placeholder (commented)
  // fbq('track', 'Lead', {
  //     content_name: 'Multifunctional CBD Gummies',
  //     content_category: 'CBD Products'
  // });

  // For demo purposes, scroll to product section
  document.querySelector(".product-section").scrollIntoView({
    behavior: "smooth",
  });
}

// Smooth Scroll for Anchor Links
document.addEventListener("DOMContentLoaded", function () {
  // Add smooth scrolling to all links
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
      }
    });
  });

  // Initialize first FAQ item as open
  const firstFAQ = document.querySelector(".faq-item");
  if (firstFAQ) {
    firstFAQ.classList.add("active");
    const icon = firstFAQ.querySelector(".faq-icon");
    if (icon) {
      icon.textContent = "×";
    }
  }
});

// Tracking Documentation
/*
TRACKING IMPLEMENTATION GUIDE:

1. Google Analytics 4 (GA4):
   - Page View: Automatically tracked when GA4 script is loaded
   - Shop Now Button Clicks: Tracked as custom events with 'click' action
   - Price Selection: Tracked as custom events with 'select_price' action
   
   To implement in production:
   - Replace 'GA_MEASUREMENT_ID' with your actual GA4 measurement ID
   - Uncomment the GA4 script in the <head> section
   - Uncomment the gtag event calls in the JavaScript functions
   
   To validate:
   - Use Google Tag Assistant Chrome extension
   - Check Real-Time reports in GA4 dashboard
   - Verify events in DebugView

2. Meta Pixel:
   - PageView: Automatically tracked when pixel is loaded
   - Lead Event: Triggered when "Shop Now" button is clicked
   
   To implement in production:
   - Replace 'YOUR_PIXEL_ID' with your actual Meta Pixel ID
   - Uncomment the Meta Pixel script in the <head> section
   - Uncomment the fbq event calls in the JavaScript functions
   
   To validate:
   - Use Meta Pixel Helper Chrome extension
   - Check Events Manager in Meta Business Suite
   - Test events using Meta's Event Testing tool

3. Best Practices:
   - Always test in a staging environment first
   - Use Google Tag Manager for easier management of multiple tags
   - Implement proper consent management for GDPR/CCPA compliance
   - Monitor tracking regularly to ensure data accuracy
*/
