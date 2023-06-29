import BaseController from './BaseController.js';

export default class ButtonNavbarController extends BaseController {
  constructor(elementId, targetElementId) {
    super();
    this.buttonElement = document.getElementById(elementId);
    this.targetElement = document.getElementById(targetElementId);
    this.buttonElement.addEventListener(
      'click',
      this.toggleComponent.bind(this),
    );
  }

  toggleComponent() {
    if (this.targetElement.style.display === 'none') {
      this.targetElement.style.display = 'block';
    } else {
      this.targetElement.style.display = 'none';
    }
  }
}
