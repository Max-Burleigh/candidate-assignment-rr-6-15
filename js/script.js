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

  let isVisible = true;
  let resizeTimer = null;

  // Store single set HTML
  const originalContent = scrollingContent.innerHTML;

  // Enhanced setup function with better calculations
  function setupBanner() {
    // Reset content to original
    scrollingContent.innerHTML = originalContent;

    const viewportWidth = window.innerWidth;
    let currentCopies = 1;

    // More robust duplication calculation
    while (scrollingContent.scrollWidth < viewportWidth * 2) {
      scrollingContent.innerHTML += originalContent;
      currentCopies += 1;
      // Safety break to prevent infinite loops
      if (currentCopies > 10) break;
    }

    // Enhanced measurement with multiple RAF calls for stability
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        const totalWidth = scrollingContent.scrollWidth;
        const singleWidth = totalWidth / currentCopies;

        scrollingContent.style.setProperty(
          "--scroll-width",
          `${singleWidth}px`
        );

        // Dynamic speed based on screen size for better UX
        const baseSpeed = window.innerWidth < 768 ? 80 : 100; // Slower on mobile
        const duration = singleWidth / baseSpeed;
        scrollingContent.style.setProperty("--scroll-duration", `${duration}s`);
      });
    });
  }

  // Intersection Observer for performance optimization
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isVisible = entry.isIntersecting;
        // Pause animation when not visible to save resources
        if (!isVisible) {
          scrollingContent.classList.add("paused");
        } else {
          scrollingContent.classList.remove("paused");
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: "50px",
    }
  );

  observer.observe(scrollingContent.parentElement);

  // Enhanced responsive handling with debouncing
  function handleResize() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (isVisible) {
        setupBanner();
      }
    }, 250); // Debounce resize events
  }

  // Touch event handlers for mobile UX enhancement
  let touchStartY = 0;
  function handleTouchStart(e) {
    touchStartY = e.touches[0].clientY;
  }

  function handleTouchMove(e) {
    const touchY = e.touches[0].clientY;
    const deltaY = Math.abs(touchY - touchStartY);

    // If vertical scroll gesture, temporarily pause for better UX
    if (deltaY > 10) {
      scrollingContent.classList.add("paused");
      setTimeout(() => {
        if (isVisible) {
          scrollingContent.classList.remove("paused");
        }
      }, 1000);
    }
  }

  // Event listeners with passive flags for better performance
  window.addEventListener("resize", handleResize, { passive: true });
  scrollingContent.addEventListener("touchstart", handleTouchStart, {
    passive: true,
  });
  scrollingContent.addEventListener("touchmove", handleTouchMove, {
    passive: true,
  });

  // Initial setup
  setupBanner();

  // Return cleanup function for potential future use
  return () => {
    observer.disconnect();
    window.removeEventListener("resize", handleResize);
    scrollingContent.removeEventListener("touchstart", handleTouchStart);
    scrollingContent.removeEventListener("touchmove", handleTouchMove);
    clearTimeout(resizeTimer);
  };
}

// Smooth Scroll for Anchor Links
document.addEventListener("DOMContentLoaded", function () {
  // Initialize infinite scrolling banner
  initScrollingBanner();

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
