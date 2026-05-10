/* ============================================================
   Skills Page — Interaction Script
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  // ---- Skill Bar Animation via IntersectionObserver ----
  const barObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const card = entry.target;
          const bar = card.querySelector('.skill-card__bar');
          const fill = card.querySelector('.skill-card__bar-fill');
          if (bar && fill) {
            const level = bar.getAttribute('data-level') || 0;
            fill.style.width = level + '%';
            // Small delay so the dot appears after bar finishes
            setTimeout(() => fill.classList.add('is-animated'), 1200);
          }
          barObserver.unobserve(card);
        }
      });
    },
    { threshold: 0.3 }
  );

  document.querySelectorAll('.skills-section .skill-card').forEach((card, i) => {
    // Stagger the card entrance with CSS custom property
    card.style.setProperty('--card-index', i);
    barObserver.observe(card);
  });

  // ---- Staggered Card Reveal ----
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('sk-revealed');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  // Observe cards with staggered delay
  document.querySelectorAll('.skills-section .skill-card').forEach((card, i) => {
    card.style.transitionDelay = `${i * 0.1}s`;
    card.classList.add('sk-hidden');
    revealObserver.observe(card);
  });

  // Observe CTA section
  const cta = document.querySelector('.skills-cta__inner');
  if (cta) {
    cta.classList.add('sk-hidden');
    revealObserver.observe(cta);
  }

  // Observe tech items
  document.querySelectorAll('.tech-stack__item').forEach((item, i) => {
    item.style.transitionDelay = `${i * 0.06}s`;
  });
});

/* --- CSS injected via JS for reveal states --- */
(function injectRevealStyles() {
  const style = document.createElement('style');
  style.textContent = `
    .sk-hidden {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.7s ease-out, transform 0.7s ease-out;
    }
    .sk-revealed {
      opacity: 1 !important;
      transform: translateY(0) !important;
    }
  `;
  document.head.appendChild(style);
})();
