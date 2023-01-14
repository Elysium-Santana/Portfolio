import { SlideNav } from './slide.js';
import selecActive from './selectHability.js';
selecActive();
const slide = new SlideNav('.slide', '.wrapper');
slide.init();

slide.activePrevSlide();
slide.addArrow('.prev', '.next');
slide.addControl('.custom-controls');
