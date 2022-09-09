import Swiper from 'swiper/swiper-bundle';

const coachesSlider = new Swiper('.coaches__slider', {
  slidesPerView: 4,
  spaceBetween: 40,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },

  navigation: {
    nextEl: '.coaches__slider-button--next',
    prevEl: '.coaches__slider-button--prev',
  },
});

const reviewsSlider = new Swiper('.reviews__slider', {
  direction: 'horizontal',
  loop: false,

  navigation: {
    nextEl: '.reviews__slider-button--next',
    prevEl: '.reviews__slider-button--prev',
  },
});
