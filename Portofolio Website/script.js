// Menu navigasi untuk layar kecil (buka/tutup)
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

function setMenu(open) {
  navLinks.classList.toggle('open', open);
  navToggle.setAttribute('aria-expanded', String(open));
  navToggle.textContent = open ? 'Tutup' : 'Menu';
}

navToggle.addEventListener('click', () => {
  setMenu(!navLinks.classList.contains('open'));
});

// Tutup menu setelah salah satu link diklik
navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => setMenu(false));
});

// Tutup menu dengan tombol Escape
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') setMenu(false);
});