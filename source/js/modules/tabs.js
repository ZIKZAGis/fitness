const tabsButton = document.querySelectorAll('.subscript__tab');
const tabsPane = document.querySelectorAll('.subscript__pane');

const switchTabs = () => {
  tabsButton.forEach((item) => {
    item.addEventListener('click', () => {
      let tabId = item.getAttribute('data-tab');
      let currentPane = document.querySelector(tabId);

      if (!item.classList.contains('subscript__tab--active')) {
        tabsButton.forEach((btn) => {
          btn.classList.remove('subscript__tab--active');
        });

        tabsPane.forEach((btn) => {
          btn.classList.remove('subscript__pane--show');
        });

        item.classList.add('subscript__tab--active');
        currentPane.classList.add('subscript__pane--show');
      }
    });
  });
};

export {switchTabs};
