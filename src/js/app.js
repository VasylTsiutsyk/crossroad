/* eslint-disable import/extensions */
/* eslint-disable node/no-unsupported-features/es-syntax */

import { SELECTORS, CLASSES } from './modules/constants';
import { isWebp, isMobile } from './modules/functions';
import { initMenu } from './modules/menu';
import { initHeader } from './modules/header';
import { initPhoneInputs } from './modules/tel-input';
import { initAosAnimations } from './modules/animations';
import initImgParallax from './modules/img-parallax';
import { initScrollScaleImages } from './modules/scroll-img-scale';
import { initLenisInstances } from './modules/lenis';

document.addEventListener('DOMContentLoaded', () => {
  // IS WEBP TEST
  isWebp();

  // IS MOBILE TEST
  isMobile();

  // HEADER MOBILE MENU
  initMenu();

  // Smooth Scrolling
  initLenisInstances();

  // HEADER SCROLLED STATE
  initHeader({
    selector: '.header',
    isScrolled: true,
    isHidden: true,
  });

  // Phone Inputs
  initPhoneInputs();

  // AOS
  initAosAnimations();

  // Img Parallax
  initImgParallax();

  initScrollScaleImages();

  SELECTORS.BODY.classList.add(CLASSES.LOADED);
});
