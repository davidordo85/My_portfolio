import ButtonNavbarController from './controller/ButtonNavbarController.js';
import NavbarRenderController from './controller/NavbarController.js';
import WeatherController from './controller/WeatherController.js';

window.addEventListener('DOMContentLoaded', async event => {
  const nav = document.querySelector('.navbar-list');
  const navbar = new NavbarRenderController(nav);
  navbar.render();

  new ButtonNavbarController('toggleButton', 'navbar-list');

  const weatherContainer = document.querySelector('.time-container');
  const weatherLoad = new WeatherController(weatherContainer);
  weatherLoad.loadWeatherData();
});
