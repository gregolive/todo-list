import navbar from './navbar.js';
import sidebar from './sidebar.js';
import listView from './listView.js';
import footer from './footer.js';
import newListModal from './listModal';
import newGroupModal from './groupModal';
import { fetchGroups } from './objectControl.js';

const main = list => {
  const main = document.createElement('main'),
        groups = fetchGroups(),
        displayList = list || groups[0].lists[0];

  main.id = 'main';
  main.className = 'd-flex flex-row';
  main.appendChild(sidebar(groups));
  main.appendChild(listView(displayList));

  return main;
}

const updateDashboard = list => {
  const main = document.getElementById('main'),
        nav = document.querySelector('.navbar');
  main.remove();
  nav.insertAfter(main(list), nav);
}

const dashboard = () => {
  document.body.appendChild(navbar());
  document.body.appendChild(main());
  document.body.appendChild(footer());
  document.body.appendChild(newListModal());
  document.body.appendChild(newGroupModal());
}

export { dashboard, updateDashboard };