import menuList from '../menu.json';
import menuListTpl from '../templates/menu.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

//добавляет меню
const menuContainerRef = document.querySelector('.js-menu');
const createMenuMarkup = menuListTpl(menuList);
menuContainerRef.insertAdjacentHTML('beforeend', createMenuMarkup);

//меняет цвет темы
const toggleSwitch = document.querySelector('#theme-switch-toggle');
const bodyStyle = document.body.classList;

setDarkTheme();
toggleSwitch.addEventListener('change', onToggleTheme);

function onToggleTheme(e) {
  e.currentTarget.checked
    ? bodyStyle.add(Theme.DARK) & bodyStyle.remove(Theme.LIGHT)
    : bodyStyle.add(Theme.LIGHT) & bodyStyle.remove(Theme.DARK);
  localStorage.setItem('theme', bodyStyle.value);
}

function setDarkTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    bodyStyle.add(savedTheme);
  }
  if (bodyStyle.value === Theme.DARK) {
    toggleSwitch.checked = true;
  }
}