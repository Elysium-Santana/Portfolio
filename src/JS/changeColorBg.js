import { VanillaTilt } from './vanillaTilt.js';
export function changeColorBg() {
  VanillaTilt.init(document.querySelectorAll('.contactSectionContent li a'), {
    max: 25,
    speed: 400,
  });
  const listContact = document.querySelectorAll('.contactSectionContent li');
  const contactSection = document.querySelector('.contactSection');
  const mobileConfig = window.matchMedia('(max-width: 650px)');

  function changeBg(mobileConfig) {
    if (!mobileConfig.matches) {
      listContact.forEach((item) => {
        item.addEventListener('mouseenter', handleMouseEnter);
        item.addEventListener('mouseleave', handleMouseLeave);
      });
      //aqui eu quero que execute somente quando for maior que 650px
    } else {
      listContact.forEach((item) => {
        item.removeEventListener('mouseenter', handleMouseEnter);
        item.removeEventListener('mouseleave', handleMouseLeave);
      });
    }
  }

  function handleMouseLeave() {
    contactSection.style.backgroundColor = '#1e201d';
  }
  function handleMouseEnter(event) {
    const color = event.target.getAttribute('data-color');
    contactSection.style.backgroundColor = color;
  }
  mobileConfig.addEventListener('change', changeBg);
  //o problema é que funciona uma vez so. quendo eu aumento a tela (mobileConfig.matches) continua como true
}
