import navbar from './navbar.js';
import sidebar from './sidebar.js';
import { listView } from './listView.js';
import footer from './footer.js';
import listModal from './listModal';
import groupModal from './groupModal';
import { fetchGroups, firstAvaliableList } from './objectControl.js';
import addEventListeners from './eventListeners.js';

const main = list => {
  const main = document.createElement('main'),
        groups = fetchGroups(),
        displayList = list || firstAvaliableList(groups);

  main.id = 'main';
  main.className = 'd-flex';
  main.appendChild(sidebar(groups));
  main.appendChild(listView(displayList));

  return main;
}

const updateDashboard = list => {
  const mainEl = document.getElementById('main'),
        footer = document.querySelector('.footer');
  mainEl.remove();
  document.body.insertBefore(main(list), footer);
  addEventListeners();
}

const dashboard = () => {
  document.body.appendChild(navbar());
  document.body.appendChild(main());
  document.body.appendChild(footer());
  addEventListeners();
}

export { dashboard, updateDashboard };