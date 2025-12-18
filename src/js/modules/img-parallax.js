// js/modules/img-parallax.js

// ==================== SIMPLE PARALLAX ==================== //
// DOC: https://simpleparallax.com/
// HTML: <img src="img.jpg" data-img-parallax data-img-parallax-scale="1.2" data-img-parallax-orientation="up" data-img-parallax-delay="0.1" />

import SimpleParallax from 'simple-parallax-js/vanilla';

function initImgParallax() {
  const elements = document.querySelectorAll('[data-img-parallax]');
  if (!elements.length) return;

  [...elements].forEach(el => {
    const scale = parseFloat(el.dataset.imgParallaxScale) || 1.25;
    const orientation = el.dataset.imgParallaxOrientation || 'up';
    const delay = parseFloat(el.dataset.imgParallaxDelay) || 0.75;
    const overflow = el.dataset.imgParallaxOverflow === 'true';

    new SimpleParallax(el, {
      scale,
      orientation,
      delay,
      overflow,
    });
  });
}

export default initImgParallax;
