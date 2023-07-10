import BaseController from './BaseController.js';

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
        this.styleNavbar(color);
        this.textColor(color);
        this.bodyBackground(color);
        this.sectionBackground(color);
        this.projectBackground(color);
      } else {
        color = 'dark';
        this.styleNavbar(color);
        this.textColor(color);
        this.bodyBackground(color);
        this.sectionBackground(color);
        this.projectBackground(color);
      }
    });
  }

  styleNavbar(color) {
    const navbar = document.querySelector('.navbar');
    if (color === 'light') {
      navbar.style.background = 'linear-gradient(#F8F9FA, #D3D3D3)';
    } else {
      navbar.style.removeProperty('background');
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
    const contact = document.querySelector('.contact-container');
    const project = document.querySelector('.projects-container');
    const sectionElements = [description, contact, project];
    sectionElements.forEach(section => {
      if (color === 'light') {
        section.style.background = '#CCCCCC';
      } else {
        section.style.removeProperty('background');
      }
    });
  }

  projectBackground(color) {
    const projects = document.querySelectorAll('.projects-container > div');
    projects.forEach(project => {
      if (color === 'light') {
        project.style.background = '#BFBFBF';
      } else {
        project.style.removeProperty('background');
      }
    });
  }
}
