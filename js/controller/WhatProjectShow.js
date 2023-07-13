import BaseController from './BaseController.js';

export default class WhatProjectShow extends BaseController {
  constructor(element) {
    super(element);
    this.projectIndex = 1;
    this.showProjects(this.projectIndex);
    this.attachEventListener();
  }

  attachEventListener() {
    const prevNext = document.querySelectorAll('.plusProjects');
    prevNext.forEach(link => {
      link.addEventListener('click', event => {
        if (link.classList[0] === 'next') {
          this.showProjects((this.projectIndex += 1));
        } else {
          this.showProjects((this.projectIndex += -1));
        }
      });
    });
  }

  showProjects(index) {
    let i;
    let projects = document.getElementsByClassName('project-item');
    if (index > projects.length) {
      this.projectIndex = 1;
    }
    if (index < 1) {
      this.projectIndex = projects.length;
    }
    for (i = 0; i < projects.length; i++) {
      projects[i].style.display = 'none';
    }
    projects[this.projectIndex - 1].style.display = 'block';
  }
}
