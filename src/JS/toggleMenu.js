export default function toggleMenu(event) {
  const hamburgerBx = document.querySelector('.hamburgerBx');
  const navMenu = document.querySelector('.navMenu');
  const topoBtn = document.querySelector('#topo');

  function toggleMenu(event) {
    hamburgerBx.classList.toggle('active');
    const active = hamburgerBx.classList.contains('active');
    hamburgerBx.setAttribute('aria-expanded', active);
    if (active) {
      hamburgerBx.setAttribute('aria-label', 'Fechar Menu');
    } else {
      hamburgerBx.setAttribute('aria-label', 'Abrir Menu');
    }
  }

  function removeMenu(event) {
    if (hamburgerBx.classList.contains('active')) {
      hamburgerBx.classList.remove('active');
    }
  }

  navMenu.addEventListener('click', toggleMenu);
  hamburgerBx.addEventListener('click', toggleMenu);
  document.addEventListener('scroll', removeMenu);

  //decidi criar esse evento separadamente.
  document.addEventListener('scroll', () => {
    if (window.scrollY > 350) {
      topoBtn.classList.add('active');
    } else {
      topoBtn.classList.remove('active');
    }
  });
}
