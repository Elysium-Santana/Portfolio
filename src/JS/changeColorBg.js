import { VanillaTilt } from './vanillaTilt.js';
export function changeColorBg() {
  VanillaTilt.init(document.querySelectorAll('.contactSectionContent li a'), {
    max: 25,
    speed: 400,
  });
  const listContact = document.querySelectorAll('.contactSectionContent li');
  const contactSection = document.querySelector('.contactSection');
  console.log(listContact);

  listContact.forEach((item) => {
    item.addEventListener('mouseenter', ({ target }) => {
      const color = target.getAttribute('data-color');
      contactSection.style.backgroundColor = color;
    });
    item.addEventListener('mouseleave', ({ target }) => {
      const color = target.getAttribute('data-color');
      contactSection.style.backgroundColor = '#1e201d';
    });
  });
}
