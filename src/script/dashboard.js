import navbar from './navbar.js';

const dashboard = () => {
  const main = document.createElement('main');

  main.appendChild(navbar());
  document.body.appendChild(main);
}

export default dashboard;