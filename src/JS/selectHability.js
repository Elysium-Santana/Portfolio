export default function selectHability() {
  const button = document.querySelector('.voltar');
  const images = document.querySelectorAll('.habilidade_img');
  const habilidadesContent = document.querySelector('.habilidadesContent');
  button.classList.remove('active');

  const randomValue = Math.random() * 0.3 + 0.3;
  document.documentElement.style.setProperty('--random-scale', randomValue);

  function animateOut({ target }) {
    // setTimeout(() => (habilidadesContent.style.display = 'none'), 500);
    if (!target.classList.contains('voltar')) {
      target.classList.add('target');
    }

    images.forEach((image) => {
      if (image.classList.contains('active')) {
        button.classList.add('active');
        setTimeout(
          () => image.classList.remove('active'),
          Math.floor(Math.random() * 300),
        );
      } else {
        image.classList.add('active');
        button.classList.remove('active');
      }
    });
  }

  button.addEventListener('click', animateOut);

  images.forEach((image) => {
    image.addEventListener('click', animateOut);
  });
}

// if (button.classList.contains('active')) {
//   button.style.display = 'block';
// } else {
//   button.style.display = 'none';
// }

// function animateOut() {
//   habilidadesContent.style.opacity = 0;
//   habilidadesContent.style.transition = 'opacity 1s';
//   habilidadesContent.addEventListener('transitionend', () => {
//     habilidadesContent.style.display = 'none';
//     button.classList.add('actve');
//     let displayNone = false;
//     images.forEach((image) => {
//       if (image.style.display !== 'none') {
//         displayNone = false;
//       }
//     });
//   });
//   images.forEach((image) => {
//     if (image === this) {
//       image.style.transform = 'scale(1.5)';
//     } else {
//       image.style.transform = 'scale(0.5)';
//     }
//     image.style.transition = 'transform 1s';
//   });
// }
