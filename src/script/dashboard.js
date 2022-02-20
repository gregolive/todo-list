import navbar from './navbar.js';
import sidebar from './sidebar.js';

const dashboard = () => {
  const main = document.createElement('main');

  main.appendChild(navbar());
  main.appendChild(sidebar());
  document.body.appendChild(main);
}

export default dashboard;