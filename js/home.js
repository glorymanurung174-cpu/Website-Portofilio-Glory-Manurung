/* Home Page — Interactions */
document.addEventListener('DOMContentLoaded', () => {

  /* ---- Typing Effect ---- */
  const roles = ['Web Developer', 'UI/UX Designer', 'Frontend Engineer', 'Creative Coder'];
  const el = document.getElementById('typed-role');
  if (el) {
    let roleIdx = 0, charIdx = 0, deleting = false;
    function typeLoop() {
      const current = roles[roleIdx];
      el.textContent = current.substring(0, charIdx);
      if (!deleting) {
        charIdx++;
        if (charIdx > current.length) { deleting = true; setTimeout(typeLoop, 1800); return; }
        setTimeout(typeLoop, 90);
      } else {
        charIdx--;
        if (charIdx < 0) { deleting = false; roleIdx = (roleIdx + 1) % roles.length; setTimeout(typeLoop, 400); return; }
        setTimeout(typeLoop, 45);
      }
    }
    setTimeout(typeLoop, 800);
  }

  /* ---- Stat Counter ---- */
  const countObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const numEl = entry.target.querySelector('.hm-stat__number');
      if (!numEl || numEl.dataset.done) return;
      const target = parseInt(numEl.dataset.target, 10);
      let count = 0;
      const step = Math.max(1, Math.floor(target / 40));
      const timer = setInterval(() => {
        count += step;
        if (count >= target) { count = target; clearInterval(timer); }
        numEl.textContent = count;
      }, 35);
      numEl.dataset.done = '1';
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('.hm-stat').forEach(s => countObserver.observe(s));

  /* ---- Scroll Reveal ---- */
  const revealObs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('hm-visible'); revealObs.unobserve(e.target); }
    });
  }, { threshold: 0.1 });

  const revealEls = document.querySelectorAll(
    '.hm-about__card, .hm-stat, .hm-skill-card, .hm-project-card, .hm-contact__card'
  );
  revealEls.forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = `opacity .7s ${i * 0.07}s ease-out, transform .7s ${i * 0.07}s ease-out`;
    revealObs.observe(el);
  });

  // Inject reveal class
  const s = document.createElement('style');
  s.textContent = '.hm-visible{opacity:1!important;transform:translateY(0)!important}';
  document.head.appendChild(s);
});
