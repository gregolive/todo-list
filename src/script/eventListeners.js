import List from './list.js';

const openListModal = () => {
  const modal = document.getElementById('new-list-modal');
  modal.classList.add('show');
}

const closeListModal = () => {
  const modal = document.getElementById('new-list-modal');
  modal.classList.remove('show');
}

const submitListForm = (e) => {
  const title = document.getElementById('title').value,
        description = document.getElementById('description').value,
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

const addEventListeners = () => {
  // New List Modal
  document.querySelector('.new-list').addEventListener('click', openListModal);
  document.querySelector('.btn-close').addEventListener('click', closeListModal);
  document.querySelector('.btn-close').addEventListener('click', closeListModal);
  document.querySelector('.btn-submit-list').addEventListener('click', submitListForm);

  // New Group Modal
  
}

export default addEventListeners;