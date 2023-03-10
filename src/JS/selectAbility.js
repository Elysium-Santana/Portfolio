export default function selectAbility() {
  const button = document.querySelector('.voltarBtn');
  const images = document.querySelectorAll('.habilidade_img');
  const certifiedLogo = document.querySelector('.certifiedLogo');
  const certifiedDocument = document.querySelector('.certifiedDocument');
  const certifiedLogoImgBx = document.querySelector('.certifiedLogoImgBx');
  const subTitle = document.querySelector('.subTitle');

  fetchAbility('./src/img/javascript.svg');

  const certifieds = [
    {
      tecnologia: 'HTML',
      titulo: 'HTML Fundamentals',
      escola: 'ORIGAMID',
      carga_horaria: '46',
      inicio: '13/05/22',
      conclusao: '03/07/22',
      link: 'https://www.origamid.com/certificate/dd6750f5',
    },
    {
      tecnologia: 'CSS3',
      titulo: 'CSS Styling and Layout',
      escola: 'ORIGAMID',
      carga_horaria: '46',
      inicio: '13/05/22',
      conclusao: '03/07/22',
      link: 'https://www.origamid.com/certificate/dd6750f5',
    },
    {
      tecnologia: 'GITHUB',
      titulo: 'Git and GitHub for Web Developers',
      escola: 'Dev Quest',
      carga_horaria: '-- ',
      inicio: 'cursando...',
      conclusao: 'breve',
    },
    {
      tecnologia: 'GIT',
      titulo: 'Advanced Git Techniques',
      escola: 'Dev Quest',
      carga_horaria: '--',
      inicio: 'cursando...',
      conclusao: 'breve',
      link: '',
    },
    {
      tecnologia: 'UI',
      titulo: 'User Interface Design',
      escola: 'ORIGAMID',
      carga_horaria: '34',
      inicio: '23/05/22',
      conclusao: '10/06/22',
      link: 'https://www.origamid.com/certificate/aaa4acba',
    },
    {
      tecnologia: 'JAVASCRIPT',
      titulo: 'JavaScript Fundamentals',
      escola: 'ORIGAMID',
      carga_horaria: '74',
      inicio: '11/07/22',
      conclusao: '02/08/22',
      link: 'https://www.origamid.com/certificate/dc10be3a',
    },
    {
      tecnologia: 'FIGMA',
      titulo: 'Figma for Web Design',
      escola: 'ORIGAMID',
      carga_horaria: '34',
      inicio: '23/05/22',
      conclusao: '10/06/22',
      link: 'https://www.origamid.com/certificate/aaa4acba',
    },
    {
      tecnologia: 'REACT',
      titulo: 'REACT',
      escola: 'ORIGAMID',
      carga_horaria: '36',
      inicio: '05/07/22',
      conclusao: '28/12/22',
      link: 'https://www.origamid.com/certificate/a6a68646',
    },
  ];

  function animateOut({ target }) {
    images.forEach((image) => {
      if (!target.classList.contains('voltarBtn')) {
        setTimeout(
          () => (
            certifiedLogo.classList.add('active'),
            certifiedDocument.classList.add('active'),
            target.classList.remove('target'),
            subTitle.classList.remove('active')
          ),
          600,
        ),
          setTimeout(
            () => image.classList.remove('active'),
            Math.floor(Math.random() * 400),
          );
      } else {
        setTimeout(
          () =>
            setTimeout(
              () => image.classList.add('active'),
              Math.floor(Math.random() * 400),
            ),
          320,
        );
        subTitle.classList.add('active');
        certifiedDocument.classList.remove('active');
        certifiedLogo.classList.remove('active');
      }
    });
    if (!target.classList.contains('voltarBtn')) {
      const attributeSrc = target.getAttribute('src');
      target.classList.add('target');
      fetchAbility(attributeSrc);
    }
  }

  function fetchAbility(attributeSrc) {
    fetch(`${attributeSrc}`)
      .then((response) => response.text())
      .then((svgString) => {
        certifiedLogoImgBx.innerHTML = svgString;
        const certifiedLogoImg = certifiedLogoImgBx.querySelector('svg');
        certifiedLogoImg.classList.add('certifiedLogoImg');
        const tech = attributeSrc
          .replace('./src/img/', '')
          .replace('.svg', '')
          .toUpperCase();
        let index = certifieds.findIndex(
          (certified) => certified.tecnologia === tech,
        );

        document.querySelector('.tech').innerHTML =
          certifieds[index].tecnologia;
        document.querySelector('.slideY .inicio').innerHTML =
          certifieds[index].inicio;
        document.querySelector('.slideY .conclusao').innerHTML =
          certifieds[index].conclusao;
        document.querySelector('.horas').innerHTML =
          certifieds[index].carga_horaria;
        document.querySelector('.escola').innerHTML = certifieds[index].escola;
        document.querySelector('.slideY a').href = certifieds[index].link;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  button.addEventListener('click', animateOut);

  images.forEach((image) => {
    image.addEventListener('click', animateOut);
  });
}
