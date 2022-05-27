function initCarousel() {
  const btnPrev = document.querySelector('.carousel__arrow_left');
  const btnNext = document.querySelector('.carousel__arrow_right');
  const container = document.querySelector('.carousel__inner');
  let width = container.offsetWidth;
  let count = 0;
  btnPrev.style.display = 'none';

  btnNext.onclick = function () {
    if (count < 3) {
      btnPrev.style.display = '';
      count = count + 1;
      container.style.transform = `translateX(-${width * count}px)`;
      if (count == 3) {
        btnNext.style.display = 'none';
      }
    }
  };

  btnPrev.onclick = function () {
    if (count < 4) {
      btnNext.style.display = '';
      btnPrev.style.display = '';
      count = count - 1;
      container.style.transform = `translateX(-${width * count}px)`;
      if (count == 0) {
        btnPrev.style.display = 'none';
      }
    }
  };
}










