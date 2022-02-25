import List from './list.js';
import Group from './group.js';

const buildDefaultList = () => {
  new List('My First List', 'low', 'March 3, 2022', 'This is my first todo list on listify. How exciting!');
}

const buildGroupsFromLocalStorage = () => {
  let groups = [],
      keys = Object.keys(localStorage),
      i = keys.length;

  while ( i-- ) {
    groups.push( JSON.parse(localStorage.getItem(keys[i])) );
  }

  return groups;
}

const fetchGroups = () => {
  localStorage.clear();
  if (localStorage.length === 0) {
    buildDefaultList();
  }
  return buildGroupsFromLocalStorage();
}

export { buildGroupsFromLocalStorage, fetchGroups };