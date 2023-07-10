import CheckboxStyleChange from './controller/CheckboxStyleChange.js';
import NavbarRenderController from './controller/NavbarController.js';

window.addEventListener('DOMContentLoaded', async event => {
  const nav = document.querySelector('.navbar-list');
  const navbar = new NavbarRenderController(nav);
  navbar.render();

  const checkbox = document.querySelector('.checkbox');
  new CheckboxStyleChange(checkbox);
});
