import BaseController from './BaseController.js';

export default class AboutMeController extends BaseController {
  constructor(element) {
    super(element);
    this.attachEventListener();
  }

  attachEventListener() {
    this.element.forEach(element => {
      var title = element.querySelector('.section-title');
      var content = element.querySelector('.section-content');
      title.addEventListener('click', event => {
        var isActive = element.classList.toggle('active');
        content.style.display = isActive ? 'block' : 'none';
      });
    });
  }
}
