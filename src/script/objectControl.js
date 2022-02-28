import { format } from 'date-fns';
import List from './list.js';
import Todo from './todo.js';

// Resave group to local storage
const saveGroup = group => {
  localStorage.setItem(group.name, JSON.stringify(group));
}

// Find first list in first non-empty group
const firstAvaliableList = groups => {
  for (const group of groups) {
    if (group.lists.length > 0) {
      return group.lists[0];
    }
  }
}

// Find list in local storage
const findListFromLocalStorage = (listTitle, groupName) => {
  const group = JSON.parse(localStorage.getItem(groupName));
  const listIndex = group.lists.findIndex(list => list.title === listTitle);

  return group.lists[listIndex];
}

// Add todo to list in group
const addTodoToList = (task, listTitle, groupName) => {
  const group = JSON.parse(localStorage.getItem(groupName)),
        listIndex = group.lists.findIndex(list => list.title === listTitle),
        list = group.lists[listIndex];
  
  list.todo.push(new Todo(task));
  saveGroup(group);
}

// Update todo complete
const changeTodoStatus = (todoTask, listTitle, groupName) => {
  const group = JSON.parse(localStorage.getItem(groupName)),
        listIndex = group.lists.findIndex(list => list.title === listTitle),
        list = group.lists[listIndex],
        todoIndex = list.todo.findIndex(item => item.task === todoTask),
        todo = list.todo[todoIndex];
  
  todo.complete = (todo.complete === true) ? false : true;
  saveGroup(group);
}

// Rebuild todos
const buildTodo = todoSections => {
  const todoList = [];
  todoSections.forEach(section => {
    const complete = (section.firstChild.checked) ? true : false,
          task = section.firstChild.nextSibling.textContent;
 
    todoList.push(new Todo(task, complete));
  });
  console.log(todoList);
  return todoList;
}

// Remove List From Group
const removeListFromGroup = (listTitle, groupName) => {
  const group = JSON.parse(localStorage.getItem(groupName)),
        listIndex = group.lists.findIndex(list => list.title === listTitle);

  group.lists.splice(listIndex, 1);
  saveGroup(group);
}

// Default list for new session
const buildDefaultList = () => {
  new List( 'My First List',
            'low',
            format(new Date(), 'yyyy-MM-dd'),
            'This is my first todo list on listify. How exciting!',
            'My Lists',
            [new Todo('Create a new todo list'), new Todo('Share listify with my friends'), new Todo('Profit')] 
          );
}

// All groups saved to local storage
const buildGroupsFromLocalStorage = () => {
  let groups = [],
      keys = Object.keys(localStorage),
      i = keys.length;

  while ( i-- ) {
    groups.push( JSON.parse(localStorage.getItem(keys[i])) );
  }
  // Sort by date created
  groups.sort(function(a,b){
    return new Date(a.created) - new Date(b.created);
  });
  return groups;
}

// Find all groups, if none create default list
const fetchGroups = () => {
  if (localStorage.length === 0) {
    buildDefaultList();
  }

  return buildGroupsFromLocalStorage();
}

export { findListFromLocalStorage, buildGroupsFromLocalStorage, fetchGroups, firstAvaliableList, addTodoToList, changeTodoStatus, removeListFromGroup, buildTodo };