import { SlideNav } from './slide.js';
import selectAbility from './selectAbility.js';
selectAbility();
const slide = new SlideNav('.slide', '.wrapper');
slide.init();

slide.activePrevSlide();
slide.addArrow('.prev', '.next');
slide.addControl('.custom-controls');
