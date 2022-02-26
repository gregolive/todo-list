import List from './list.js';
import Group from './group.js';

const findListFromLocalStorage = (listTitle, groupName) => {
  const group = JSON.parse(localStorage.getItem(groupName));
  const listIndex = group.lists.findIndex(list => list.title === listTitle);
  console.log(group[listIndex]);
  return group[listIndex];
}

const buildDefaultList = () => {
  new List('My First List', 'low', 'March 3, 2022', 'This is my first todo list on listify. How exciting!');
}

const buildGroupsFromLocalStorage = () => {
  let groups = [],
      keys = Object.keys(localStorage),
      i = keys.length;

  while ( i-- ) {
    groups.push( JSON.parse(localStorage.getItem(keys[i])) );
    console.log(groups)
  }

  return groups;
}

const fetchGroups = () => {
  if (localStorage.length === 0) {
    buildDefaultList();
  }
  return buildGroupsFromLocalStorage();
}

export { findListFromLocalStorage, buildGroupsFromLocalStorage, fetchGroups };