document.addEventListener('DOMContentLoaded', () => {
  const siteHeader = document.querySelector('[data-site-header]');
  const navToggle = document.querySelector('[data-nav-toggle]');
  const siteNav = document.querySelector('[data-site-nav]');

  const updateHeader = () => {
    if (!siteHeader) return;
    siteHeader.classList.toggle('is-scrolled', window.scrollY > 12);
  };

  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  if (navToggle && siteNav) {
    navToggle.addEventListener('click', () => {
      document.body.classList.toggle('nav-open');
    });

    siteNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => document.body.classList.remove('nav-open'));
    });
  }

  document.querySelectorAll('[data-current-year]').forEach((node) => {
    node.textContent = String(new Date().getFullYear());
  });

  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <button class="lightbox-close" type="button" aria-label="Close image">×</button>
    <div class="lightbox-frame">
      <img src="" alt="" />
      <div class="lightbox-caption">
        <span data-lightbox-alt></span>
        <span>Press Esc to close</span>
      </div>
    </div>
  `;
  document.body.appendChild(lightbox);

  const lightboxImg = lightbox.querySelector('img');
  const lightboxAlt = lightbox.querySelector('[data-lightbox-alt]');
  const closeLightbox = () => {
    lightbox.classList.remove('is-visible');
    document.body.style.overflow = '';
  };

  document.querySelectorAll('[data-lightbox]').forEach((img) => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', (event) => {
      event.preventDefault();
      lightboxImg.src = img.currentSrc || img.src;
      lightboxImg.alt = img.alt || '';
      lightboxAlt.textContent = img.alt || 'ForteVisions image';
      lightbox.classList.add('is-visible');
      document.body.style.overflow = 'hidden';
    });
  });

  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox || event.target.classList.contains('lightbox-close')) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeLightbox();
    }
  });

  document.querySelectorAll('[data-mailto-form]').forEach((form) => {
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const data = new FormData(form);
      const recipient = form.getAttribute('data-recipient') || 'hello@fortevisions.com';
      const subject = `ForteVisions inquiry: ${data.get('shootType') || 'New project'}`;
      const lines = [
        `Name: ${data.get('name') || ''}`,
        `Email: ${data.get('email') || ''}`,
        `Type of shoot: ${data.get('shootType') || ''}`,
        `Date / timeline: ${data.get('date') || ''}`,
        `Location: ${data.get('location') || ''}`,
        `Estimated hours: ${data.get('hours') || ''}`,
        '',
        'Project details:',
        `${data.get('details') || ''}`,
      ];
      const body = encodeURIComponent(lines.join('\n'));
      const href = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subject)}&body=${body}`;
      window.location.href = href;
    });
  });
});
