// FAQ Accordion Functionality
function toggleFAQ(index) {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item, i) => {
    if (i === index) {
      // Toggle the clicked item
      item.classList.toggle("active");
    } else {
      // Ensure all other items are closed
      item.classList.remove("active");
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

  // Shopify Add to Cart
  // fetch('/cart/add.js', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({ id: variantId, quantity: 1 })
  // }).then(response => response.json())
  //   .then(data => window.location.href = '/cart');

  // For demo purposes, scroll to product section
  document.querySelector(".product-section").scrollIntoView({
    behavior: "smooth",
  });
}

// Enhanced Infinite Scrolling Banner with Advanced Performance
// Vanilla JS implementation with enterprise-level optimizations
function initScrollingBanner() {
  const scrollingContent = document.querySelector(".scrolling-content");
  if (!scrollingContent) return;

  let resizeTimer = null;

  // Store single set HTML
  const originalContent = scrollingContent.innerHTML;

  // Enhanced setup function with better calculations
  function setupBanner() {
    // Reset content to original
    scrollingContent.innerHTML = originalContent;

    // First, measure the width of ONE complete set of the 3 items
    const singleSetWidth = scrollingContent.scrollWidth;

    const viewportWidth = window.innerWidth;
    let currentCopies = 1;

    // Calculate how many copies we need for seamless scrolling
    // We need at least enough to fill 2x viewport width + 1 extra for seamless loop
    const copiesNeeded = Math.ceil((viewportWidth * 2) / singleSetWidth) + 2; // Changed from +1 to +2 for extra buffer

    // Duplicate content to ensure smooth infinite scroll
    for (let i = 1; i < copiesNeeded; i++) {
      scrollingContent.innerHTML += originalContent;
      currentCopies++;
    }

    // Set initial position to prevent flicker
    scrollingContent.style.transform = "translateX(0)";
    scrollingContent.style.webkitTransform = "translateX(0)";

    // Enhanced measurement with RAF for stability
    requestAnimationFrame(() => {
      // Set the scroll width to exactly one set's width
      scrollingContent.style.setProperty(
        "--scroll-width",
        `${singleSetWidth}px`
      );

      // Dynamic speed based on screen size for better UX
      const baseSpeed = window.innerWidth < 768 ? 60 : 80; // Slower on mobile
      const duration = singleSetWidth / baseSpeed;
      scrollingContent.style.setProperty("--scroll-duration", `${duration}s`);

      // Force a reflow to ensure animation starts cleanly
      scrollingContent.offsetHeight;
    });
  }

  // Enhanced responsive handling with debouncing
  function handleResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      setupBanner();
    }, 250); // Debounce resize events
  }

  // Event listeners with passive flags for better performance
  window.addEventListener("resize", handleResize, { passive: true });

  // Initial setup
  setupBanner();

  // Return cleanup function for potential future use
  return () => {
    window.removeEventListener("resize", handleResize);
    clearTimeout(resizeTimer);
  };
}

// Robust Banner Management with Dynamic Responsive Switching
let bannerManager = {
  interval: null,
  currentIndex: 0,
  isMobile: false,
  mobileMessages: [],

  init() {
    this.mobileMessages = document.querySelectorAll(".mobile-message");
    this.checkAndUpdate();
    this.addResizeListener();
  },

  checkAndUpdate() {
    const newIsMobile = window.innerWidth <= 768;

    // If mode changed, cleanup and reinitialize
    if (newIsMobile !== this.isMobile) {
      this.cleanup();
      this.isMobile = newIsMobile;

      if (this.isMobile) {
        this.startMobileCycling();
      }
    }
  },

  startMobileCycling() {
    if (this.mobileMessages.length === 0) return;

    // Reset all messages
    this.mobileMessages.forEach((msg) => msg.classList.remove("active"));

    // Start with first message
    this.currentIndex = 0;
    this.mobileMessages[this.currentIndex].classList.add("active");

    // Start cycling
    this.interval = setInterval(() => {
      // Hide current message
      this.mobileMessages[this.currentIndex].classList.remove("active");

      // Move to next message
      this.currentIndex = (this.currentIndex + 1) % this.mobileMessages.length;

      // Show next message
      this.mobileMessages[this.currentIndex].classList.add("active");
    }, 3000);
  },

  cleanup() {
    // Clear interval
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }

    // Reset all mobile messages
    this.mobileMessages.forEach((msg) => msg.classList.remove("active"));

    // Reset index
    this.currentIndex = 0;
  },

  addResizeListener() {
    let resizeTimeout;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        this.checkAndUpdate();
      }, 150); // Debounce resize events
    });
  },
};

// Smooth Scroll for Anchor Links
document.addEventListener("DOMContentLoaded", function () {
  // Initialize infinite scrolling banner
  initScrollingBanner();

  // Initialize robust banner management
  bannerManager.init();

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
  }
});
