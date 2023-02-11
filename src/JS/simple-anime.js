export default function animate() {
  const dataAnime = document.querySelectorAll('[data-anime]');

  function animateItems() {
    dataAnime.forEach((item) => {
      const time = Number(item.getAttribute('data-anime'));
      if (!isNaN(time)) {
        setTimeout(() => {
          item.classList.toggle('anime');
        }, time);
      }
    });
  }
  animateItems();
}
