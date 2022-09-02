// const slides = document.querySelectorAll('.coaches__slider-line > div');
// const sliderLine = document.querySelector('.coaches__slider-line');
// const slider = document.querySelector('.coaches__slider');

// let count = 0;
// const width = document.querySelector('.coaches__slider-line > div').offsetWidth;

// const init = () => {
//   slides.forEach((slide) => {
//     slide.style.width = (slider.offsetWidth - 120) / 4 + 'px';
//   });
// };

// window.addEventListener('resize', init);

// document.querySelector('.coaches__slider-button--prev').addEventListener('click', () => {
//   count--;
//   if (count < 0) {
//     count = slides.length - 4;
//   }
//   rollSlider();
// });

// document.querySelector('.coaches__slider-button--next').addEventListener('click', () => {
//   count++;
//   if (count >= (slides.length - 3)) {
//     count = 0;
//   }
//   rollSlider();
// });

// function rollSlider() {
//   sliderLine.style.transform = 'translate(-' + count * (width + 40) + 'px)';
// }

// export {init};
