export default function animatedScroll() {
  const sections = document.querySelectorAll('[data-scroll]');

  function sectionSelect() {
    if (sections) {
      sections.forEach((section) => {
        const tamanhoTela = innerHeight * 0.75;
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - tamanhoTela < 0;
        if (isSectionVisible) {
          section.classList.add('ativo');
        } else if (section.classList.contains('ativo')) {
          section.classList.remove('ativo');
        }
      });
    }
  }
  window.addEventListener('scroll', sectionSelect);
}
