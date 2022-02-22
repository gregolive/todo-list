import navbar from './navbar.js';
import sidebar from './sidebar.js';
import listUI from './listUI.js';
import footer from './footer.js';

const main = () => {
  const main = document.createElement('main');
  main.className = 'd-flex flex-row';
  main.appendChild(sidebar());
  main.appendChild(listUI());

  return main;
}

const dashboard = () => {
  document.body.appendChild(navbar());
  document.body.appendChild(main());
  document.body.appendChild(footer());
}

export default dashboard;