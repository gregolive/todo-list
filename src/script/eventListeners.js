import List from './list.js';
import Group from './group.js';

// List functions

const openListModal = () => {
  document.getElementById('new-list-modal').classList.add('show');
}

const closeListModal = () => {
  document.getElementById('new-list-modal').classList.remove('show');
}

const submitListForm = e => {
  const title = document.getElementById('list-title').value,
        description = document.getElementById('list-description').value,
        date = document.getElementById('due-date').value,
        priorities = document.querySelectorAll("[name='priority']");
  let priority;

  priorities.forEach(level => {
    if (level.checked) {
      priority = level.value;
      return;
    }
  });

  new List(title, priority, date, description);
}

// Group functions 

const openGroupModal = () => {
  document.getElementById('new-group-modal').classList.add('show');
}

const closeGroupModal = () => {
  document.getElementById('new-group-modal').classList.remove('show');
}

const submitGroupModal = e => {
  const name = document.getElementById('group-name').value,
        color = document.getElementById('color').value;
  
  new Group(name, color);
}

const addEventListeners = () => {
  // New List Modal
  document.getElementById('new-list').addEventListener('click', openListModal);
  document.getElementById('close-list').addEventListener('click', closeListModal);
  document.getElementById('cancel-list').addEventListener('click', closeListModal);
  document.getElementById('submit-list').addEventListener('click', submitListForm);

  // New Group Modal
  document.getElementById('new-group').addEventListener('click', openGroupModal);
  document.getElementById('close-group').addEventListener('click', closeGroupModal);
  document.getElementById('cancel-group').addEventListener('click', closeGroupModal);
  document.getElementById('submit-group').addEventListener('click', submitGroupModal);
}

export default addEventListeners;