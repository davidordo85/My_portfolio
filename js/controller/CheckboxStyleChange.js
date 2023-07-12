import BaseController from './BaseController.js';
// TODO: refactorizar esta clase

export default class CheckboxStyleChange extends BaseController {
  constructor(element) {
    super(element);
    this.handleChecked();
  }

  handleChecked() {
    let color = '';
    this.element.addEventListener('change', event => {
      if (event.target.checked) {
        color = 'light';
        this.styleNavbarAndFooter(color);
        this.textColor(color);
        this.bodyBackground(color);
        this.sectionBackground(color);
      } else {
        color = 'dark';
        this.styleNavbarAndFooter(color);
        this.textColor(color);
        this.bodyBackground(color);
        this.sectionBackground(color);
      }
    });
  }

  styleNavbarAndFooter(color) {
    const navbar = document.querySelector('.navbar');
    const footer = document.querySelector('.footer');
    if (color === 'light') {
      navbar.style.background = 'linear-gradient(#F8F9FA, #D3D3D3)';
      footer.style.background = 'linear-gradient(#D3D3D3, #F8F9FA)';
    } else {
      navbar.style.removeProperty('background');
      footer.style.removeProperty('background');
    }
  }

  textColor(color) {
    const texts = document.querySelectorAll('*');
    texts.forEach(text => {
      if (color === 'light') {
        text.style.color = 'black';
      } else {
        text.style.removeProperty('color');
      }
    });
  }

  bodyBackground(color) {
    const body = document.querySelector('body');
    if (color === 'light') {
      body.style.background = 'white';
    } else {
      body.style.removeProperty('background');
    }
  }

  sectionBackground(color) {
    const description = document.querySelector('.description');
    const project = document.querySelector('.projects-container');
    const sectionElements = [description, project];
    sectionElements.forEach(section => {
      if (color === 'light') {
        section.style.background = '#CCCCCC';
      } else {
        section.style.removeProperty('background');
      }
    });
  }
}
