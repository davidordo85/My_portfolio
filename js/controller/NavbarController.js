import BaseController from './BaseController.js';
import { navView } from '../views.js';

export default class NavbarController extends BaseController {
  render() {
    const nav = document.createElement('nav');
    nav.innerHTML = navView();
    this.element.appendChild(nav);
  }
}
