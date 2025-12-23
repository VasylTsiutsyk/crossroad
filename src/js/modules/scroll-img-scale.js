import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger.js';

gsap.registerPlugin(ScrollTrigger);

export function initScrollScaleImages() {
  const images = document.querySelectorAll('[data-scroll-scale-img]');
  if (!(images && images.length)) return;

  [...images].forEach(img => {
    const heroSection = img.closest('section');

    if (heroSection) {
      gsap.to(img, {
        scrollTrigger: {
          trigger: heroSection,
          start: 'top top',
          end: 'bottom',
          scrub: !0,
        },
        scale: 1.5,
      });
    }
  });
}
