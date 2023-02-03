import { SlideNav } from './slide.js';
import qualquercoisa from './selectAbility.js';
qualquercoisa();
const slide = new SlideNav('.slide', '.wrapper');
slide.init();

slide.activePrevSlide();
slide.addArrow('.prev', '.next');
slide.addControl('.custom-controls');
