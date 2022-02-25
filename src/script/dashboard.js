import navbar from './navbar.js';
import sidebar from './sidebar.js';
import listUI from './displayList.js';
import footer from './footer.js';
import newListModal from './listModal';
import newGroupModal from './groupModal';
import { fetchGroups } from './objectControl.js';

const main = () => {
  const main = document.createElement('main'),
        groups = fetchGroups();
  console.log(groups);
  main.className = 'd-flex flex-row';
  main.appendChild(sidebar());
  main.appendChild(listUI());

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