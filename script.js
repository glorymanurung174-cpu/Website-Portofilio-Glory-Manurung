// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

// Scroll Reveal Animation Functionality
const observerOptions = {
  root: null,
  rootMargin: "0px",
  threshold: 0.15, // Trigger when 15% of the element is visible
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Add class to trigger CSS transition
      entry.target.classList.add("is-visible");
      // Stop observing after it becomes visible if you only want it to animate once
      // observer.unobserve(entry.target);
    } else {
      // Remove this else block if you want elements to stay visible after scrolling past
      entry.target.classList.remove("is-visible");
    }
  });
}, observerOptions);

// Add animation classes strictly when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  // Select elements to animate
  const animateElements = document.querySelectorAll(
    ".about-content, .skill-card, .portfolio-item, .contact-info, .social-links a, h2",
  );

  // Apply initial hidden state class and observe
  animateElements.forEach((el, index) => {
    el.classList.add("animate-on-scroll");

    // Optional: Add staggered delay based on index for grid items
    if (
      el.classList.contains("skill-card") ||
      el.classList.contains("portfolio-item") ||
      el.tagName.toLowerCase() === "a"
    ) {
      el.style.transitionDelay = `${(index % 4) * 0.1}s`;
    }

    observer.observe(el);
  });
});
