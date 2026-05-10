/* Blog Page — Scroll Reveal & Full-Screen Modal */

// Article content data
const articleData = {
  'post-featured': {
    title: 'Karangturi International Choir Competition',
    tag: 'Experience',
    date: '2026',
    img: 'blog/Karangturi.jpeg',
    excerpt: 'Exploring the memorable experiences, teamwork, and beautiful harmonies from this prestigious international choir competition. A journey of music, friendship, and personal growth.',
    body: '<p>The Karangturi International Choir Competition was an unforgettable experience that brought together choir enthusiasts from around the world. This prestigious event showcased not only exceptional musical talent but also the power of collaboration and cultural exchange.</p><h2>The Journey Begins</h2><p>Our journey started months before the actual competition. We spent countless hours rehearsing, perfecting our harmonies, and building a strong sense of unity as a team. Each member contributed their passion and dedication to make this moment possible.</p><h2>Competition Day</h2><p>Standing on stage with my fellow choir members, looking out at an audience of thousands, was a defining moment. The energy, the music, and the shared purpose created an atmosphere that was truly magical. Every note we sang carried the effort and heart we had poured into our preparation.</p><h2>The Experience</h2><p>Beyond the competition itself, the experience of meeting choirs from different countries and cultures was invaluable. We exchanged melodies, shared stories, and formed friendships that will last a lifetime. These moments reminded me of the universal language of music and its power to connect people.</p><h2>Lessons Learned</h2><p>This competition taught me the importance of teamwork, perseverance, and the joy of achieving something as a collective. It reinforced my belief that the most beautiful moments in life come from working together towards a common goal.</p>'
  },
  'post-1': {
    title: 'Mastering CSS Animations',
    tag: 'CSS',
    date: '2026',
    img: 'blog/css-animations.png',
    excerpt: 'A deep dive into creating smooth, performant, and engaging animations without relying on JavaScript libraries.',
    body: '<p>CSS animations have become an essential tool in modern web development. They allow us to create engaging, interactive experiences that enhance user engagement without the overhead of JavaScript libraries.</p><h2>Understanding the Basics</h2><p>CSS animations are defined using keyframes, which specify the styles at different points in the animation timeline. By combining @keyframes with the animation property, you can create fluid, natural-looking movements that captivate your users.</p><h2>Performance Considerations</h2><p>One of the key advantages of CSS animations is their performance efficiency. They run on the GPU, making them much smoother than JavaScript-based animations, especially on lower-end devices. Always test your animations on various devices to ensure optimal performance.</p><h2>Common Techniques</h2><p>Some popular CSS animation techniques include fade-ins, slide-outs, scale transforms, and rotation effects. These can be combined to create complex, visually stunning sequences that guide users through your interface.</p><h2>Best Practices</h2><p>Keep animations short and purposeful. Use them to draw attention to important elements or provide feedback to user actions. Avoid over-animating, as it can distract from your content and negatively impact performance.</p>'
  },
  'post-2': {
    title: 'Designing with Empathy',
    tag: 'UI/UX',
    date: '2026',
    img: 'blog/design-empathy.png',
    excerpt: 'Why understanding your users\' struggles is the most important step in the UI/UX design process.',
    body: '<p>Empathy is the foundation of great design. When we understand our users—their needs, frustrations, and aspirations—we can create experiences that truly resonate with them.</p><h2>The Power of User Research</h2><p>Before diving into design, invest time in understanding your users. Conduct interviews, surveys, and usability tests. Listen to their feedback without judgment. These insights will inform every design decision you make.</p><h2>Creating User Personas</h2><p>User personas help you keep your audience in mind throughout the design process. They represent the different types of users your product will serve, complete with their goals, pain points, and behaviors.</p><h2>Accessibility Matters</h2><p>Designing with empathy means ensuring your product is accessible to everyone, including people with disabilities. This includes proper color contrast, keyboard navigation, screen reader compatibility, and more.</p><h2>Iterative Design</h2><p>Great design doesn\'t happen overnight. Through iterative testing and refinement, you can continuously improve your user experience. Gather feedback, analyze user behavior, and make data-driven decisions.</p>'
  },
  'post-3': {
    title: 'My Creative Journey So Far',
    tag: 'Life',
    date: '2026',
    img: 'blog/Karangturi.jpeg',
    excerpt: 'Reflecting on the path that led me from curiosity to crafting digital experiences — lessons, failures, and wins.',
    body: '<p>My journey into the world of web development and design has been filled with unexpected turns, valuable lessons, and moments of genuine joy. Looking back, I realize how much I\'ve grown and how much I still have to learn.</p><h2>The Beginning</h2><p>It all started with curiosity. I was fascinated by how websites worked, what made them beautiful, and how they made people feel. I taught myself HTML and CSS, created my first website, and never looked back.</p><h2>Overcoming Challenges</h2><p>The path wasn\'t always smooth. I faced imposter syndrome, struggled with complex problems, and questioned my abilities more times than I\'d like to admit. But each challenge became an opportunity to grow stronger and more resilient.</p><h2>The Joy of Creation</h2><p>There\'s something magical about bringing an idea to life—watching a concept transform into a fully functional, beautiful website. The moment a client sees their vision realized is incredibly rewarding and reminds me why I love what I do.</p><h2>Continuous Learning</h2><p>Technology evolves rapidly, and I\'m committed to staying updated with the latest trends and best practices. Whether it\'s learning a new framework, mastering a design principle, or understanding user psychology, the learning never stops.</p><h2>Looking Forward</h2><p>I\'m excited about what the future holds. I want to create experiences that not only look great but also make a positive impact on people\'s lives. My journey continues, and I\'m grateful for every step along the way.</p>'
  }
};

// Modal functionality
function initializeModal() {
  const modal = document.getElementById('articleModal');
  const overlay = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('modalClose');
  const body = document.body;

  console.log('Initializing modal...', modal);

  // Open modal function
  function openModal(articleId) {
    console.log('Opening modal for:', articleId);
    const article = articleData[articleId];
    if (!article) {
      console.log('Article not found:', articleId);
      return;
    }

    document.getElementById('modalImg').src = article.img;
    document.getElementById('modalTag').textContent = article.tag;
    document.getElementById('modalDate').textContent = article.date;
    document.getElementById('modalTitle').textContent = article.title;
    document.getElementById('modalExcerpt').textContent = article.excerpt;
    document.getElementById('modalBody').innerHTML = article.body;

    modal.classList.add('bl-modal--active');
    body.classList.add('bl-modal-open');
    console.log('Modal opened');
  }

  // Close modal function
  function closeModal() {
    console.log('Closing modal');
    modal.classList.remove('bl-modal--active');
    body.classList.remove('bl-modal-open');
  }

  // Event listeners for close button
  closeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    closeModal();
  });
  
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeModal();
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('bl-modal--active')) {
      closeModal();
    }
  });

  // Attach click handlers to read more links directly
  const readMoreLinks = document.querySelectorAll('.bl-read-more');
  readMoreLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      
      const article = link.closest('.bl-featured-card, .bl-card');
      if (article && article.id) {
        openModal(article.id);
      }
    });
  });
}

/* Scroll Reveal Animation */
document.addEventListener('DOMContentLoaded', () => {
  // Initialize modal
  initializeModal();

  // Scroll reveal observer
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
