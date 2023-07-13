import BaseController from './BaseController.js';
import { projectsView } from '../views.js';

export default class ProjectsRenderController extends BaseController {
  renderProjects(projects) {
    projects.forEach((project, index) => {
      const article = document.createElement('article');
      const projectHTML = projectsView({
        index,
        project,
        length: projects.length,
      });
      article.innerHTML = projectHTML;
      this.element.appendChild(article);
    });
  }
}
