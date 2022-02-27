import { parseISO, format } from 'date-fns';
import Group from './group.js';
import { buildGroupsFromLocalStorage } from './objectControl.js'

export default class List {
  constructor(title, priority, date, description, group, todo = []) {
    this.title = title;
    this.priority = priority;
    this.date = format(parseISO(date), 'MMMM d, y');
    this.description = description;
    this.todo = todo;
    this.addToGroup(group);
  }

  addToGroup(name) {
    let groups = buildGroupsFromLocalStorage();
    if (groups.length > 0) {
      let index = groups.findIndex((group) => group.name === name);
      const target = groups[index];
      target.lists.push(this);
      new Group(target.name, target.color, target.lists);
    } else {
      new Group('My Lists', '000000', [this]);
    } 
  }
}