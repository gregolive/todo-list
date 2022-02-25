import Group from './group.js';
import { buildGroupsFromLocalStorage } from './objectControl.js'

export default class List {
  static _count = JSON.parse(localStorage.getItem('count')) || 0;

  constructor(title, priority, date, description) {
    this.id = ++List._count;
    this.title = title;
    this.priority = priority;
    this.date = date;
    this.description = description;
    this.addToGroup('All');
  }

  addToGroup(name) {
    let groups = buildGroupsFromLocalStorage();
    if (groups.length > 0) {
      let index = groups.findIndex((group) => group.name === name);
      const target = groups[index];
      target.lists.push(this);
      new Group(target.name, target.color, target.lists);
    } else {
      new Group('All', '000000', [this]);
    } 
  }
}