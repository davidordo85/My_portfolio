export const navView = () => {
  return `
      <li class="navbar-item">
        <a href="#index">Home</a>
      </li>
      <li class="navbar-item"><a href="#about">About me</a></li>
      <li class="navbar-item">
        <a href="#projects">Projects</a>
      </li>
      <li class="navbar-item">
        <a href="#contact">Contact</a>
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

  return `<div class="project-item fade">
            <div class="numberText">${index + 1} / ${length}</div>
            <h3>${name}</h3>
            <div class="project-images">${imagesHTML}</div>
            <p class="project-description">${description}</p>
            <p class="project-instructions">${instructions}</p>
            <div class="project-links">${linksHTML}</div>
          </div>`;
};
