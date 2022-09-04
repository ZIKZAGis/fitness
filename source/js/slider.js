import Swiper from '../../node_modules/swiper/swiper-bundle';

const coachSlider = () => {
  if (window.innerWidth >= 1200) {
    const swiper = new Swiper('.coaches__slider', {
      slidesPerView: 4,
      spaceBetween: 40,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,

      navigation: {
        nextEl: '.coaches__slider-button--next',
        prevEl: '.coaches__slider-button--prev',
      },
    });
  } else if (window.innerWidth <= 1199 && window.innerWidth >= 768) {
    const swiper = new Swiper('.coaches__slider', {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,

      navigation: {
        nextEl: '.coaches__slider-button--next',
        prevEl: '.coaches__slider-button--prev',
      },
    });
  } else {
    const swiper = new Swiper('.coaches__slider', {
      slidesPerView: 1,
      spaceBetween: 0,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,

      navigation: {
        nextEl: '.coaches__slider-button--next',
        prevEl: '.coaches__slider-button--prev',
      },
    });
  }
};

const reviewSlider = () => {
  const swiper = new Swiper('.reviews__slider', {
    direction: 'horizontal',
    loop: false,

    navigation: {
      nextEl: '.reviews__slider-button--next',
      prevEl: '.reviews__slider-button--prev',
    },
  });
};

const initSlider = () => {
  reviewSlider();

  window.addEventListener('resize', () => {
    coachSlider();
  });

  window.addEventListener('load', () => {
    coachSlider();
  });
};

initSlider();
