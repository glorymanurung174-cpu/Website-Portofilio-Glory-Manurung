/* Blog Page — Scroll Reveal */
document.addEventListener('DOMContentLoaded', () => {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('bl-visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.bl-featured-card, .bl-card').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity .7s ${i * 0.1}s ease-out, transform .7s ${i * 0.1}s ease-out`;
    obs.observe(el);
  });

  const s = document.createElement('style');
  s.textContent = '.bl-visible{opacity:1!important;transform:translateY(0)!important}';
  document.head.appendChild(s);
});
