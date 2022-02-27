import List from './list.js';
import Group from './group.js';
import { findListFromLocalStorage, addTodoToList } from './objectControl.js';
import { updateDashboard } from './dashboard.js';
import { newTodoInput } from './listView.js';

// List functions

const openListModal = () => {
  document.getElementById('new-list-modal').classList.add('show');
}

const closeListModal = () => {
  document.getElementById('new-list-modal').classList.remove('show');
}

const submitListForm = () => {
  const title = document.getElementById('list-title').value,
        description = document.getElementById('list-description').value,
        date = document.getElementById('due-date').value,
        group = document.getElementById('group').value,
        priorities = document.querySelectorAll("[name='priority']");
  let priority;

  priorities.forEach(level => {
    if (level.checked) {
      priority = level.value;
      return;
    }
  });

  new List(title, priority, date, description, group);
}

// Group functions 

const openGroupModal = () => {
  document.getElementById('new-group-modal').classList.add('show');
}

const closeGroupModal = () => {
  document.getElementById('new-group-modal').classList.remove('show');
}

const submitGroupForm = () => {
  const name = document.getElementById('group-name').value,
        color = document.getElementById('color').value;
  
  new Group(name, color, []);
}

// Sidebar list view function

const viewList = e => {
  const listTitle = e.target.textContent,
        groupName = e.target.closest('.collapse').previousSibling.textContent;
  updateDashboard(findListFromLocalStorage(listTitle, groupName));
}

// Add todo function

const addTodoInput = e => {
  const form = document.getElementById('todo-form');
  form.insertBefore(newTodoInput(), e.target);
  addTodoEventListener();
  e.target.remove();
}

const addTodo = e => {
  const todo = e.target.previousSibling.value,
        listTitle = document.querySelector('h1').textContent,
        groupName = document.querySelector('.list-group').textContent;

  addTodoToList(todo, listTitle, groupName);
}

// Default Event Listeners

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
  document.getElementById('submit-group').addEventListener('click', submitGroupForm);

  // Sidebar Lists
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', viewList)
  });

  // List View (only if there is a list to display)
  const newTodo = document.getElementById('new-todo');
  if (newTodo !== null) {
    newTodo.addEventListener('click', addTodoInput);
  }
}

// Dynamic Todo Event Listeners

const addTodoEventListener = () => {
  document.querySelector('.submit-todo').addEventListener('click', addTodo);
}

export default addEventListeners;