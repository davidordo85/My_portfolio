import BaseController from './BaseController.js';
import { navView } from '../views.js';

export default class NavbarRenderController extends BaseController {
  render() {
    const navList = document.createElement('div');
    navList.innerHTML = navView();
    this.element.appendChild(navList);
  }
}
