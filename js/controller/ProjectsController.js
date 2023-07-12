import BaseController from './BaseController.js';

export default class ProjectsController extends BaseController {
  renderProjects(projects) {
    console.log(projects);
    for (const project of projects) {
      const article = document.createElement('article');
      const projectHTML = projectsView(project);
      article.innerHTML = projectHTML;
    }
  }
}
