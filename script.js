import { VanillaTilt } from './src/JS/vanillaTilt.js';

VanillaTilt.init(document.querySelectorAll('.contactSectionContent li a'), {
  max: 30,
  speed: 400,
  glare: true,
  'max-glare': 1,
});
import { changeColorBg } from './src/JS/changeColorBg.js';
changeColorBg();
import { SlideNav } from './src/JS/slide.js';
import selectAbility from './src/JS/selectAbility.js';
import ScrollSuave from './src/JS/scroll-suave.js';
import toggleMenu from './src/JS/toggleMenu.js';
import animateItems from './src/JS/simple-anime.js';
animateItems();
const scrollSuave = new ScrollSuave(
  ".navMenu a[href^='#'], #topo[href^='#'], .projectLink[href^='#']",
);
scrollSuave.init();
toggleMenu();
selectAbility();
const slide = new SlideNav('.slide', '.wrapper');
slide.init();
slide.slideConfig();
slide.activePrevSlide();
slide.addControl('.custom-controls');
slide.addArrow('.prev', '.next');
