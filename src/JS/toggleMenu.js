import animateItems from './simple-anime.js';
export default function toggleMenu() {
  const hamburgerBx = document.querySelector('.hamburgerBx');
  const navMenu = document.querySelector('.navMenu');
  const skew = document.querySelector('.skew');
  const topoBtn = document.querySelector('#topo');
  const statusW = document.querySelector('.statusW');
  const statusH = document.querySelector('.statusH');
  // =======================================
  function updateScreenSize() {
    statusW.innerHTML = ` width ${window.innerWidth}`;
    statusH.innerHTML = ` height ${window.innerHeight}`;
  }

  window.addEventListener('resize', updateScreenSize);

  updateScreenSize();

  // ===============================================
  function toggleMenu() {
    hamburgerBx.classList.toggle('active');
    animateItems();
    const active = hamburgerBx.classList.contains('active');
    hamburgerBx.setAttribute('aria-expanded', active);
    if (active) {
      hamburgerBx.setAttribute('aria-label', 'Fechar Menu');
      skew.classList.add('active');
    } else {
      skew.classList.remove('active');
      hamburgerBx.setAttribute('aria-label', 'Abrir Menu');
    }
  }
  function removeMenu() {
    if (hamburgerBx.classList.contains('active')) {
      hamburgerBx.classList.remove('active');
      skew.classList.remove('active');
      animateItems();
    }
  }

  navMenu.addEventListener('click', toggleMenu);
  hamburgerBx.addEventListener('click', toggleMenu);
  document.addEventListener('scroll', removeMenu);
  // decidi criar esse evento separadamente.
  document.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      topoBtn.classList.add('active');
    } else {
      topoBtn.classList.remove('active');
    }
  });
}
