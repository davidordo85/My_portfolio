import { weatherView } from '../views.js';
import BaseController from './BaseController.js';
import dataService from '../services/DataService.js';

export default class WeatherController extends BaseController {
  render(weatherData) {
    const div = document.createElement('div');
    div.innerHTML = weatherView(weatherData);
    this.element.appendChild(div);
  }

  async loadWeatherData() {
    try {
      const weatherData = await dataService.getWeatherData();
      this.render(weatherData);
      console.log(weatherData);
    } catch (error) {
      console.log(error);
    }
  }
}
