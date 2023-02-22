import { changeColorBg } from './src/JS/changeColorBg.js';
import animatedScroll from './src/JS/animatedScroll.js';
import { SlideNav } from './src/JS/slide.js';
import selectAbility from './src/JS/selectAbility.js';
import ScrollSuave from './src/JS/scroll-suave.js';
import toggleMenu from './src/JS/toggleMenu.js';
import animateItems from './src/JS/simple-anime.js';
const scrollSuave = new ScrollSuave(
  ".navMenu a[href^='#'], #topo[href^='#'], .projectLink[href^='#']",
);
const slide = new SlideNav('.slide', '.wrapper');
animatedScroll();
animateItems();
changeColorBg();
toggleMenu();
selectAbility();
scrollSuave.init();
slide.init();
slide.slideConfig();
slide.activePrevSlide();
slide.addControl('.custom-controls');
slide.addArrow('.prev', '.next');
