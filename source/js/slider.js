import Swiper from '../../node_modules/swiper/swiper-bundle';

const init = () => {
  if (window.innerWidth >= 1200) {
    const swiper = new Swiper('.swiper', {
      slidesPerView: 4,
      spaceBetween: 40,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  } else if (window.innerWidth <= 1199 && window.innerWidth >= 768) {
    const swiper = new Swiper('.swiper', {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  } else {
    const swiper = new Swiper('.swiper', {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }
};

const initSlider = () => {
  window.addEventListener('resize', () => {
    init();
  });

  window.addEventListener('load', () => {
    init();
  });
};

initSlider();
