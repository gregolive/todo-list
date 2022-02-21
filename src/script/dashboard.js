import navbar from './navbar.js';
import sidebar from './sidebar.js';
import footer from './footer.js';

const dashboard = () => {
  const main = document.createElement('main');

  main.appendChild(navbar());
  main.appendChild(sidebar());
  main.appendChild(footer());
  document.body.appendChild(main);
}

export default dashboard;