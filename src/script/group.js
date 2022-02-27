export default class Group {
  constructor(name, color, lists) {
    this.name = name;
    this.color = color;
    this.lists = lists;
    this.created = new Date();
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem(this.name, JSON.stringify(this));
  }
}