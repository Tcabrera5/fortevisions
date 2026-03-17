const BOOKING_EMAIL = 'hello@fortevisions.com';

const portfolioItems = [
  {
    category: 'events',
    title: 'Networking & Community Events',
    description: 'A polished mix of candid moments, room details, and key interactions for luncheons, mixers, and celebrations.',
    image: 'images/events-1.jpg',
    fallback: 'images/placeholders/events.svg'
  },
  {
    category: 'events',
    title: 'Speakers, Panels & Brand Moments',
    description: 'Coverage that captures atmosphere, professionalism, and the people behind the event.',
    image: 'images/events-2.jpg',
    fallback: 'images/placeholders/events.svg'
  },
  {
    category: 'portraits',
    title: 'Natural Portrait Sessions',
    description: 'Portraits that feel comfortable, flattering, and modern — ideal for personal branding or milestone sessions.',
    image: 'images/portraits-1.jpg',
    fallback: 'images/placeholders/portraits.svg'
  },
  {
    category: 'portraits',
    title: 'Editorial & Lifestyle Portraits',
    description: 'A cleaner, more intentional portrait style for graduates, creatives, and professionals.',
    image: 'images/portraits-2.jpg',
    fallback: 'images/placeholders/portraits.svg'
  },
  {
    category: 'aviation',
    title: 'Airshow & Aircraft Imagery',
    description: 'Strong lines, motion, and timing for aviation lovers, editorial features, and transportation-focused storytelling.',
    image: 'images/aviation-1.jpg',
    fallback: 'images/placeholders/aviation.svg'
  },
  {
    category: 'aviation',
    title: 'Airport & Travel Details',
    description: 'From aircraft closeups to travel atmosphere, these images bring movement and place together.',
    image: 'images/aviation-2.jpg',
    fallback: 'images/placeholders/aviation.svg'
  },
  {
    category: 'travel',
    title: 'Landscapes & Places',
    description: 'Destination imagery that can support editorial work, prints, or brand storytelling.',
    image: 'images/travel-1.jpg',
    fallback: 'images/placeholders/travel.svg'
  },
  {
    category: 'travel',
    title: 'Transport & Journey Stories',
    description: 'A flexible category for trains, terminals, coastlines, and moments in between.',
    image: 'images/travel-2.jpg',
    fallback: 'images/placeholders/travel.svg'
  }
];

const portfolioGrid = document.getElementById('portfolioGrid');
const filterButtons = document.querySelectorAll('.filter-button');
const menuToggle = document.getElementById('menuToggle');
const siteNav = document.getElementById('siteNav');
const yearNode = document.getElementById('year');
const contactForm = document.getElementById('contactForm');
const bookingEmailText = document.getElementById('bookingEmailText');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxCaption = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');

function renderPortfolio(filter = 'all') {
  const visibleItems = filter === 'all'
    ? portfolioItems
    : portfolioItems.filter((item) => item.category === filter);

  portfolioGrid.innerHTML = visibleItems.map((item, index) => `
    <article class="portfolio-card">
      <div class="portfolio-image">
        <img
          src="${item.image}"
          alt="${item.title}"
          loading="lazy"
          onerror="this.onerror=null;this.src='${item.fallback}'"
        >
      </div>
      <div class="portfolio-body">
        <span class="category-tag">${item.category}</span>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
        <div class="card-actions">
          <span class="muted">Replace with Marissa's best image</span>
          <button type="button" data-lightbox-index="${portfolioItems.indexOf(item)}">Preview</button>
        </div>
      </div>
    </article>
  `).join('');
}

function updateFilter(activeFilter) {
  filterButtons.forEach((button) => {
    const isActive = button.dataset.filter === activeFilter;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
  renderPortfolio(activeFilter);
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => updateFilter(button.dataset.filter));
});

portfolioGrid.addEventListener('click', (event) => {
  const previewButton = event.target.closest('[data-lightbox-index]');
  if (!previewButton) return;

  const item = portfolioItems[Number(previewButton.dataset.lightboxIndex)];
  if (!item) return;

  lightboxImage.src = item.image;
  lightboxImage.alt = item.title;
  lightboxImage.onerror = () => {
    lightboxImage.onerror = null;
    lightboxImage.src = item.fallback;
  };
  lightboxCaption.textContent = `${item.title} — ${item.description}`;
  lightbox.showModal();
});

lightboxClose.addEventListener('click', () => lightbox.close());
lightbox.addEventListener('click', (event) => {
  const rect = lightbox.getBoundingClientRect();
  const clickedInside = (
    rect.top <= event.clientY &&
    event.clientY <= rect.top + rect.height &&
    rect.left <= event.clientX &&
    event.clientX <= rect.left + rect.width
  );
  if (!clickedInside) {
    lightbox.close();
  }
});

menuToggle.addEventListener('click', () => {
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  siteNav.classList.toggle('open');
});

document.querySelectorAll('.site-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    siteNav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get('name');
  const email = formData.get('email');
  const shootType = formData.get('shootType');
  const date = formData.get('date') || 'Not specified';
  const message = formData.get('message');

  const subject = encodeURIComponent(`ForteVisions inquiry: ${shootType}`);
  const body = encodeURIComponent(
    `Hi Marissa,\n\n` +
    `My name is ${name}.\n` +
    `My email is ${email}.\n` +
    `I am interested in: ${shootType}.\n` +
    `Preferred date or timeframe: ${date}.\n\n` +
    `Project details:\n${message}\n\n` +
    `Thanks!`
  );

  window.location.href = `mailto:${BOOKING_EMAIL}?subject=${subject}&body=${body}`;
});

bookingEmailText.textContent = BOOKING_EMAIL;
yearNode.textContent = new Date().getFullYear();
updateFilter('all');
