import NavbarController from './controller/NavbarController.js';

window.addEventListener('DOMContentLoaded', async event => {
  const nav = document.querySelector('.navbar');
  const navbar = new NavbarController(nav);
  navbar.render();
});
