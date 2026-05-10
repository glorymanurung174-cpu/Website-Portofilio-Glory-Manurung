/* Contact Page — Interactions */
document.addEventListener('DOMContentLoaded', () => {

  /* ---- Form submit handler ---- */
  const form = document.getElementById('contact-form');
  const status = document.getElementById('ct-status');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = document.getElementById('ct-submit');
      btn.textContent = 'Sending...';
      btn.disabled = true;

      // Simulate sending (replace with real endpoint later)
      setTimeout(() => {
        status.textContent = '✓ Message sent successfully! I\'ll get back to you soon.';
        status.className = 'ct-form__status ct-form__status--success';
        btn.innerHTML = '<img src="logo/envelope.svg" class="icon" alt="Send" style="width:1em;height:1em;filter:brightness(0) invert(1)"/> Send Message';
        btn.disabled = false;
        form.reset();
        setTimeout(() => { status.textContent = ''; }, 5000);
      }, 1200);
    });
  }

  /* ---- Scroll Reveal ---- */
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('ct-visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.ct-form-wrap, .ct-info-card, .ct-socials, .ct-availability').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = `opacity .6s ${i * 0.08}s ease-out, transform .6s ${i * 0.08}s ease-out`;
    obs.observe(el);
  });

  const s = document.createElement('style');
  s.textContent = '.ct-visible{opacity:1!important;transform:translateY(0)!important}';
  document.head.appendChild(s);
});
