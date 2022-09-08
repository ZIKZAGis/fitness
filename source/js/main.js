import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {switchTabs} from './tabs';
import './slider';
import './video';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  switchTabs();

  window.addEventListener('load', () => {
    initModals();
  });
});
