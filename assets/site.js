// Simple lightbox + year
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

const lb = document.getElementById('lightbox');
const lbImg = document.getElementById('lightbox-img');
const lbClose = document.querySelector('.lightbox-close');

document.querySelectorAll('#gallery a.tile').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    lbImg.src = link.href;
    lb.classList.remove('hidden');
  });
});

lbClose.addEventListener('click', () => lb.classList.add('hidden'));
lb.addEventListener('click', (e) => {
  if (e.target === lb) lb.classList.add('hidden');
});
