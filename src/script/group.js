export default class Group {
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.lists = [];
    this.saveToLocalStorage();
  }

  addList(list) {
    this.lists.push(list);
    this.saveToLocalStorage();
  }

  removeList(list) {
    this.lists = arr.filter(function(e) { return e !== list })
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem(this.name, JSON.stringify(this.lists));
    console.log('saved');
  }
}