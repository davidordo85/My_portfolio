import CheckboxStyleChange from './controller/CheckboxStyleChange.js';
import NavbarRenderController from './controller/NavbarController.js';
import ProjectsRenderController from './controller/ProjectsRenderController.js';
import projectsData from '../data/projects.js';
import WhatProjectShow from './controller/WhatProjectShow.js';
import AboutMeController from './controller/AboutMeController.js';

window.addEventListener('DOMContentLoaded', async event => {
  const nav = document.querySelector('.navbar-list');
  const navbar = new NavbarRenderController(nav);
  navbar.render();

  const checkbox = document.querySelector('.checkbox');
  new CheckboxStyleChange(checkbox);

  const projectsRender = document.querySelector('.projects-container');
  const projects = new ProjectsRenderController(projectsRender);
  projects.renderProjects(projectsData);

  new WhatProjectShow(projectsRender);

  const aboutMe = document.querySelectorAll('.section');
  new AboutMeController(aboutMe);
});
