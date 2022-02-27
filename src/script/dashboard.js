import navbar from './navbar.js';
import sidebar from './sidebar.js';
import { listView } from './listView.js';
import footer from './footer.js';
import newListModal from './listModal';
import newGroupModal from './groupModal';
import { fetchGroups, firstAvaliableList } from './objectControl.js';
import addEventListeners from './eventListeners.js';

const main = list => {
  const main = document.createElement('main'),
        groups = fetchGroups(),
        displayList = list || firstAvaliableList(groups);
  console.log(displayList);
  main.id = 'main';
  main.className = 'd-flex flex-row';
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
  document.body.appendChild(newListModal());
  document.body.appendChild(newGroupModal());
  addEventListeners();
}

export { dashboard, updateDashboard };