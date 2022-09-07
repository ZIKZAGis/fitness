import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {switchTabs} from './tabs';
import './slider';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  switchTabs();

  window.addEventListener('load', () => {
    initModals();
  });
});

const tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;

document.getElementById('to-play').addEventListener('click', function () {
  player = new YT.Player('player', {
    playerVars: {
      'autoplay': 0,
      'controls': 0,
      'playsinline': 1,
    },
    videoId: '9TZXsZItgdw',
    events: {
      'onReady': onPlayerReady,
    },
  });
  document.querySelector('.gym__video-button').style.display = 'none';
  document.querySelector('.gym__video-rpeview').style.display = 'none';
});

function onPlayerReady(event) {
  event.target.playVideo();
}

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)
