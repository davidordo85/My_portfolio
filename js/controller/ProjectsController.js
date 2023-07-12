import BaseController from './BaseController.js';

export default class ProjectsController extends BaseController {
  renderProjects(projects) {
    for (const project of projects) {
      const article = document.createElement('article');
      const projectHTML = projectsView(project);
      article.innerHTML = projectHTML;
    }
  }

  async readJSONFILE(file) {
    try {
      const response = await fetch(file);
      if (!response.ok) {
        throw new Error('Error en la carga del archivo JSON');
      }
      const jsonData = await response.json();
      console.log(jsonData);
    } catch (error) {
      console.log('Error: ', error);
    }
  }
}
