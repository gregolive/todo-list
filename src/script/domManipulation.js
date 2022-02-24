import List from './list.js';

const openModal = () => {
  const modal = document.getElementById('new-list-modal');
  modal.classList.add('show');
}

const closeModal = () => {
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

  let list = new List(title, priority, date, description);
  console.log(list);
}

const addEventListeners = () => {
  // New List Modal
  document.querySelector('.new-list').addEventListener('click', openModal);
  document.querySelector('.btn-close').addEventListener('click', closeModal);
  document.querySelector('.btn-close').addEventListener('click', closeModal);
  document.querySelector('.btn-submit-list').addEventListener('click', submitListForm);
}

export default addEventListeners;