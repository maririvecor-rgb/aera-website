const menuButton = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuButton && siteNav) {
  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Abrir menú' : 'Cerrar menú');
    siteNav.classList.toggle('is-open', !isOpen);
  });

  siteNav.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Abrir menú');
      siteNav.classList.remove('is-open');
    }
  });
}

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
document.querySelectorAll('.project-video').forEach((video) => {
  if (prefersReducedMotion.matches) {
    video.pause();
    video.removeAttribute('autoplay');
    video.removeAttribute('loop');
    video.controls = true;
  }
});

const promoVideo = document.querySelector('.promo-video');
if (promoVideo && !prefersReducedMotion.matches && 'IntersectionObserver' in window) {
  const promoObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio >= 0.15) {
        promoVideo.muted = true;
        promoVideo.play().catch(() => {});
      } else {
        promoVideo.pause();
      }
    });
  }, { threshold: [0, 0.15] });

  promoObserver.observe(promoVideo);
}
