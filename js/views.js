export const navView = () => {
  return `
      <li class="navbar-item">
        <a href="#index">Home</a>
      </li>
      <li class="navbar-item"><a href="#about">Sobre mi</a></li>
      <li class="navbar-item">
        <a href="#projects">Proyectos</a>
      </li>
      <li class="navbar-item">
        <a href="#contact">Contacto</a>
      </li>
  `;
};

export const projectsView = ({ index, project, length }) => {
  const { name, images, description, instructions, links } = project;

  let imagesHTML = '';
  let linksHTML = '';

  for (const image of images) {
    imagesHTML += `<img src="../images/${image}" alt="Project Image">`;
  }

  for (const link of links) {
    linksHTML += `<a href="${link.url}" target="_blank" rel="noopener noreferrer">
        ${link.name}
      </a>`;
  }

  return `<div class="project-item fade" id>
            <div class="numberText">${index + 1} / ${length}</div>
            <h3>${name}</h3>
            <div class="project-images">${imagesHTML}</div>
            <p class="project-description"><strong>Descripcion: </strong>${description}</p>
            <p class="project-instructions"><strong>Intrucciones: </strong>${instructions}</p>
            <div class="project-links">${linksHTML}</div>
          </div>`;
};
