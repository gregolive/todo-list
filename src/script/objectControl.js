import List from './list.js';

const firstAvaliableList = groups => {
  for(const group of groups) {
    if (group.lists !== []) {
      return group.lists[0];
    }
  }
}

const findListFromLocalStorage = (listTitle, groupName) => {
  const group = JSON.parse(localStorage.getItem(groupName));
  const listIndex = group.lists.findIndex(list => list.title === listTitle);

  return group.lists[listIndex];
}

const buildDefaultList = () => {
  new List( 'My First List',
            'low',
            'March 3, 2022',
            'This is my first todo list on listify. How exciting!',
            'My Lists',
            ['Create a new todo list', 'Share listify with my friends', 'Profit'] 
          );
}

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

const fetchGroups = () => {
  if (localStorage.length === 0) {
    buildDefaultList();
  }

  return buildGroupsFromLocalStorage();
}

export { findListFromLocalStorage, buildGroupsFromLocalStorage, fetchGroups, firstAvaliableList };