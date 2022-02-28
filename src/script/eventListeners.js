import List from './list.js';
import Group from './group.js';
import Todo from './todo.js';
import listModal from './listModal';
import groupModal from './groupModal';
import { findListFromLocalStorage, addTodoToList, changeTodoStatus, removeListFromGroup, buildTodo } from './objectControl.js';
import { updateDashboard } from './dashboard.js';
import { newTodoInput, buildTodoItem } from './listView.js';

// List functions

const openNewListModal = () => {
  document.body.appendChild(listModal());
  addListModalEventListeners();
}

const openEditListModal = () => {
  const listTitle = document.querySelector('h1').textContent,
        groupName = document.querySelector('.list-group').textContent,
        list = findListFromLocalStorage(listTitle, groupName);

  document.body.appendChild(listModal(list));
  addListModalEventListeners();
}

const closeListModal = () => {
  document.getElementById('list-modal').remove();
}

const submitListForm = (todo = []) => {
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

  new List(title, priority, date, description, group, todo);
}

const editListForm = () => {
  const listTitle = document.querySelector('h1').textContent,
        groupName = document.querySelector('.list-group').textContent,
        todoSections = document.querySelectorAll('.todo-section'),
        todo = buildTodo(todoSections);

  removeListFromGroup(listTitle, groupName);
  submitListForm(todo);
}

// Group functions 

const openGroupModal = () => {
  document.body.appendChild(groupModal());
  addGroupModalEventListeners();
}

const closeGroupModal = () => {
  document.getElementById('group-modal').remove();
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

// List functions

const addTodoInput = e => {
  const form = document.getElementById('todo-form');
  form.insertBefore(newTodoInput(), e.target);
  addTodoEventListener();
  e.target.remove();
}

const addTodo = e => {
  const form = document.getElementById('todo-form'),
        index = document.querySelectorAll('.form-check-input').length,
        todo = e.target.previousSibling.value,
        listTitle = document.querySelector('h1').textContent,
        groupName = document.querySelector('.list-group').textContent;

  addTodoToList(todo, listTitle, groupName);
  form.insertBefore(buildTodoItem(new Todo(todo), index), e.target.parentNode);
  e.preventDefault();
  console.log(e.target.previousSibling);
  form.reset();
}

const updateTodoComplete = e => {
  const todo = e.target.nextSibling.textContent,
        listTitle = document.querySelector('h1').textContent,
        groupName = document.querySelector('.list-group').textContent;

  changeTodoStatus(todo, listTitle, groupName);
}

const deleteList = () => {
  const listTitle = document.querySelector('h1').textContent,
        groupName = document.querySelector('.list-group').textContent;
  
  removeListFromGroup(listTitle, groupName);
  window.location.reload();
}

// Event Listeners

const addDefaultEventListeners = () => {
  // Open Modals
  document.getElementById('new-list').addEventListener('click', openNewListModal);
  document.getElementById('new-group').addEventListener('click', openGroupModal);

  // Sidebar Lists
  document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', viewList);
  });

  // List View (only if there is a list to display)
  const newTodo = document.getElementById('new-todo');
  if (newTodo !== null) {
    newTodo.addEventListener('click', addTodoInput);
    document.querySelectorAll('.form-check-input').forEach(checkbox => {
      checkbox.addEventListener('change', updateTodoComplete);
    })
    document.getElementById('delete-list').addEventListener('click', deleteList);
    document.getElementById('edit-list').addEventListener('click', openEditListModal);
  }
}

// New List Modal
const addListModalEventListeners = () => {
  document.getElementById('close-list').addEventListener('click', closeListModal);
  document.getElementById('cancel-list').addEventListener('click', closeListModal);
  if (document.querySelector('.modal-title').textContent === 'New List') {
    document.getElementById('submit-list').addEventListener('click', submitListForm);
  } else {
    document.getElementById('update-list').addEventListener('click', editListForm);
  }
  
  
}

// New Group Modal
const addGroupModalEventListeners = () => {
  document.getElementById('close-group').addEventListener('click', closeGroupModal);
  document.getElementById('cancel-group').addEventListener('click', closeGroupModal);
  document.getElementById('submit-group').addEventListener('click', submitGroupForm);
}

// Dynamic Todo Event Listeners

const addTodoEventListener = () => {
  document.querySelector('.submit-todo').addEventListener('click', addTodo);
}

export default addDefaultEventListeners;