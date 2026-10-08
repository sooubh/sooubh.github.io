const projects = [
  {
    name: 'Pactora', icon: '🤝', type: 'live', status: 'Live',
    tagline: 'Make promises. Keep them.',
    description: 'An offline-first app for creating and tracking personal commitments without needing an account or cloud backend.',
    tags: ['Flutter', 'Dart', 'Drift', 'Riverpod'],
    links: [{ label: 'Play Store ↗', url: 'https://play.google.com/store/apps/details?id=com.sooubh.pactora' }]
  },
  {
    name: 'GoCrush', icon: '🔥', type: 'live', status: 'Live',
    tagline: 'Dating built around real profiles.',
    description: 'A Flutter dating app using Firebase, swipe matching, identity checks, geolocation, subscriptions and ads.',
    tags: ['Flutter', 'Firebase', 'ML Kit', 'AdMob'],
    links: [{ label: 'Play Store ↗', url: 'https://play.google.com/store/apps/details?id=com.sooubh.gocrush' }]
  },
  {
    name: 'Lovingo', icon: '💬', type: 'live', status: 'Live',
    tagline: 'Talk to your match with AI voice.',
    description: 'A dating app with Gemini voice features, Firebase services, in-app subscriptions and AdMob.',
    tags: ['Flutter', 'Gemini', 'Firebase', 'IAP'],
    links: [{ label: 'Play Store ↗', url: 'https://play.google.com/store/apps/details?id=com.sooubh.lovingo' }]
  },
  {
    name: 'Gully Cricket', icon: '🏏', type: 'live', status: 'Live',
    tagline: 'Score local matches without Wi-Fi.',
    description: 'A lightweight cricket scoring app with local storage, live match updates and a floating scoreboard.',
    tags: ['Flutter', 'Riverpod', 'Hive', 'WebSocket'],
    links: [{ label: 'Play Store ↗', url: 'https://play.google.com/store/apps/details?id=com.sooubh.gullycricket' }]
  },
  {
    name: 'BtwUs', icon: '💑', type: 'dev', status: 'Building',
    tagline: 'Your relationship, offline and private.',
    description: 'A privacy-first relationship archive for memories, promises and milestones, designed to work locally.',
    tags: ['Flutter', 'Drift', 'SQLite', 'Riverpod'],
    links: []
  },
  {
    name: 'CARE-AI', icon: '👶', type: 'hackathon', status: 'Hackathon',
    tagline: 'AI parenting companion.',
    description: 'A Flutter and Firebase prototype using Gemini-powered recommendations and local encryption for demos.',
    tags: ['Flutter', 'Firebase', 'Gemini AI', 'Encryption'],
    links: [{ label: 'GitHub ↗', url: 'https://github.com/sooubh' }]
  }
];

const grid = document.querySelector('#project-grid');
const filters = document.querySelectorAll('.filter');
const year = document.querySelector('#year');
const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('#site-nav');

function renderProjects(filter = 'all') {
  const visible = projects.filter(project => filter === 'all' || project.type === filter);
  grid.innerHTML = visible.map(project => `
    <article class="project-card reveal is-visible">
      <div class="project-top">
        <span class="project-icon" aria-hidden="true">${project.icon}</span>
        <span class="project-status">${project.status}</span>
      </div>
      <h3>${project.name}</h3>
      <p class="project-tagline">${project.tagline}</p>
      <p class="project-description">${project.description}</p>
      <div class="tags">${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}</div>
      ${project.links.length ? `<div class="project-links">${project.links.map(link => `<a href="${link.url}" target="_blank" rel="noreferrer">${link.label}</a>`).join('')}</div>` : ''}
    </article>
  `).join('');
}

filters.forEach(button => {
  button.addEventListener('click', () => {
    filters.forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    renderProjects(button.dataset.filter);
  });
});

menuToggle?.addEventListener('click', () => {
  const open = siteNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});

siteNav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

year.textContent = new Date().getFullYear();
renderProjects();

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
