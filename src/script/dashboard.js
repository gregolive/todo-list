import navbar from './navbar.js';
import sidebar from './sidebar.js';
import listUI from './listView.js';
import footer from './footer.js';
import newListModal from './listModal';
import newGroupModal from './groupModal';
import { fetchGroups } from './objectControl.js';

const main = () => {
  const main = document.createElement('main'),
        groups = fetchGroups(),
        defaultList = groups[0].lists[0];

  main.className = 'd-flex flex-row';
  main.appendChild(sidebar(groups));
  main.appendChild(listUI(defaultList));

  return main;
}

const dashboard = () => {
  document.body.appendChild(navbar());
  document.body.appendChild(main());
  document.body.appendChild(footer());
  document.body.appendChild(newListModal());
  document.body.appendChild(newGroupModal());
}

export default dashboard;