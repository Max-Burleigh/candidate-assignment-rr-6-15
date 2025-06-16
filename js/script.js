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

/* ==========================================
   INFINITE SCROLLING BANNER  –  rebuilt
   ========================================== */
function initScrollingBanner() {
  const content = document.querySelector(".scrolling-content");
  if (!content) return;

  /* 1. Duplicate once — that's all we need for a perfect loop */
  const originalHTML = content.innerHTML.trim();
  content.innerHTML = originalHTML + originalHTML; // 200 %

  /* 2. Helper to (re)calculate speed so it feels identical on any screen */
  function setDuration() {
    const totalWidth   = content.scrollWidth;   // width of the 2 copies
    const distancePx   = totalWidth / 2;        // we only travel half of it
    const pxPerSecond  = window.innerWidth < 768 ? 60 : 90; // slower on mobile
    const duration     = distancePx / pxPerSecond;

    content.style.setProperty("--scroll-duration", `${duration}s`);
  }

  /* 3. Run once fonts have finished rendering, then on resize (debounced) */
  requestAnimationFrame(setDuration);

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(setDuration, 200);
  });

  /* 4. Pause when banner is outside viewport to save resources */
  const observer = new IntersectionObserver(
    ([entry]) =>
      content.classList.toggle("paused", !entry.isIntersecting),
    { threshold: 0 }
  );
  observer.observe(content);
}

// Robust Banner Management with Dynamic Responsive Switching
let bannerManager = {
  interval: null,
  currentIndex: 0,
  isMobile: false,
  mobileMessages: [],
  
  init() {
    this.mobileMessages = document.querySelectorAll('.mobile-message');
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
    this.mobileMessages.forEach(msg => msg.classList.remove('active'));
    
    // Start with first message
    this.currentIndex = 0;
    this.mobileMessages[this.currentIndex].classList.add('active');
    
    // Start cycling
    this.interval = setInterval(() => {
      // Hide current message
      this.mobileMessages[this.currentIndex].classList.remove('active');
      
      // Move to next message
      this.currentIndex = (this.currentIndex + 1) % this.mobileMessages.length;
      
      // Show next message
      this.mobileMessages[this.currentIndex].classList.add('active');
    }, 3000);
  },
  
  cleanup() {
    // Clear interval
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = null;
    }
    
    // Reset all mobile messages
    this.mobileMessages.forEach(msg => msg.classList.remove('active'));
    
    // Reset index
    this.currentIndex = 0;
  },
  
  addResizeListener() {
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        this.checkAndUpdate();
      }, 150); // Debounce resize events
    });
  }
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
