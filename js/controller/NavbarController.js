import BaseController from './BaseController.js';
import { navView } from '../views.js';

export default class NavbarRenderController extends BaseController {
  render() {
    const navList = document.createElement('ul');
    navList.innerHTML = navView();
    navList.classList.add('list');
    this.element.appendChild(navList);
  }
}
