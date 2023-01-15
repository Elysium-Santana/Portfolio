export default function selectHability() {
  const button = document.querySelector('.voltarBtn');
  const images = document.querySelectorAll('.habilidade_img');
  const certifiedLogo = document.querySelector('.certifiedLogo');
  const CertifiedDocument = document.querySelector('.CertifiedDocument');
  certifiedLogo.classList.remove('active');
  CertifiedDocument.classList.remove('active');

  const randomValue = Math.random() * 0.3 + 0.3;
  document.documentElement.style.setProperty('--random-scale', randomValue);

  function animateOut() {
    // setTimeout(() => (habilityContent_Icons.style.display = 'none'), 500);
    // if (!target.classList.contains('voltarBtn')) {
    //   target.classList.add('target');
    // }

    images.forEach((image) => {
      if (image.classList.contains('active')) {
        setTimeout(
          () => (
            certifiedLogo.classList.add('active'),
            CertifiedDocument.classList.add('active')
          ),
          500,
        ),
          setTimeout(
            () => image.classList.remove('active'),
            Math.floor(Math.random() * 300),
          );
      } else {
        image.classList.add('active');
        CertifiedDocument.classList.remove('active');
        certifiedLogo.classList.remove('active');
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
//   habilityContent_Icons.style.opacity = 0;
//   habilityContent_Icons.style.transition = 'opacity 1s';
//   habilityContent_Icons.addEventListener('transitionend', () => {
//     habilityContent_Icons.style.display = 'none';
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
