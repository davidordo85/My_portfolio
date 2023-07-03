export const navView = () => {
  return `
    <ul class="container-list">
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
    </ul>
  `;
};

export const languagesView = language => {
  return `<p>${language}</p>`;
};
