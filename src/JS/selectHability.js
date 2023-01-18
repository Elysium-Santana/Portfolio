export default function selectHability() {
  const button = document.querySelector('.voltarBtn');
  const images = document.querySelectorAll('.habilidade_img');
  const certifiedLogo = document.querySelector('.certifiedLogo');
  const CertifiedDocument = document.querySelector('.CertifiedDocument');
  const certifiedLogoImg = document.querySelector('.certifiedLogoImg');

  function animateOut({ target }) {
    if (!target.classList.contains('voltarBtn')) {
      const attributeSrc = target.getAttribute('src');
      certifiedLogoImg.setAttribute('src', attributeSrc);
      certifiedLogoImg.style.fill = 'blue';
      // console.log(certifiedLogoImg.attributes.);
    }
    images.forEach((image) => {
      if (!target.classList.contains('voltarBtn')) {
        setTimeout(
          () => (
            certifiedLogo.classList.add('active'),
            CertifiedDocument.classList.add('active'),
            target.classList.remove('active')
          ),
          500,
        ),
          setTimeout(
            () => image.classList.remove('active'),
            Math.floor(Math.random() * 400),
          );
      } else {
        setTimeout(() => image.classList.add('active'), 400);
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
