import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {switchTabs} from './modules/tabs';
import './modules/slider';
import './modules/video';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  switchTabs();

  window.addEventListener('load', () => {
    initModals();
  });
});
