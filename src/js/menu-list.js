import menuList from '../menu.json';
import menuListTpl from '../templates/menu.hbs';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const menuContainerRef = document.querySelector('.js-menu');
const toggleSwitch = document.querySelector('#theme-switch-toggle');
const bodyStyle = document.body.classList;

const createMenuMarkup = menuListTpl(menuList);
menuContainerRef.insertAdjacentHTML('beforeend', createMenuMarkup);


onActiveTheme();
toggleSwitch.addEventListener('change', onToggleTheme);

function onToggleTheme(e) {
  e.currentTarget.checked
    ? bodyStyle.add(Theme.DARK) & bodyStyle.remove(Theme.LIGHT)
    : bodyStyle.add(Theme.LIGHT) & bodyStyle.remove(Theme.DARK);
  localStorage.setItem('theme', bodyStyle.value);
}

function onActiveTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    bodyStyle.add(savedTheme);
  }
  if (bodyStyle.value === Theme.DARK) {
    toggleSwitch.checked = true;
  }
}
