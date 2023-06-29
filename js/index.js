import ButtonNavbarController from './controller/ButtonNavbarController.js';
import NavbarRenderController from './controller/NavbarController.js';

window.addEventListener('DOMContentLoaded', async event => {
  const nav = document.querySelector('.navbar-list');
  const navbar = new NavbarRenderController(nav);
  navbar.render();

  const buttonController = new ButtonNavbarController(
    'toggleButton',
    'navbar-list',
  );
});
