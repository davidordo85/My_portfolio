import ButtonNavbarController from './controller/ButtonNavbarController.js';
import NavbarRenderController from './controller/NavbarController.js';

window.addEventListener('DOMContentLoaded', async event => {
  const nav = document.querySelector('.navbar-list');
  const navbar = new NavbarRenderController(nav);
  navbar.render();

  const button = document.getElementById('toggleButton');
  const navbarList = document.getElementById('navbar-list');
  const buttonController = new ButtonNavbarController(
    'toggleButton',
    'navbar-list',
  );
});
