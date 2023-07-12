import CheckboxStyleChange from './controller/CheckboxStyleChange.js';
import NavbarRenderController from './controller/NavbarController.js';
import ProjectsController from './controller/ProjectsController.js';

window.addEventListener('DOMContentLoaded', async event => {
  const nav = document.querySelector('.navbar-list');
  const navbar = new NavbarRenderController(nav);
  navbar.render();

  const checkbox = document.querySelector('.checkbox');
  new CheckboxStyleChange(checkbox);

  const projectsRender = document.querySelector('.projects-container');
  const projects = new ProjectsController(projectsRender);
  projects.readJSONFILE('../data/projects.json');
});
