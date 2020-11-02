import menuList from '../menu.json';
import menuListTpl from '../templates/menu.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuContainerRef = document.querySelector('.js-menu');

const createMenuMarkup = menuListTpl(menuList);
menuContainerRef.insertAdjacentHTML('beforeend', createMenuMarkup);