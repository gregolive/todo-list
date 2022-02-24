export default class List {
  static _count = JSON.parse(localStorage.getItem('count')) || 0;

  constructor(title, priority, date, description) {
    this.id = ++List._count;
    this.title = title;
    this.priority = priority;
    this.date = date;
    this.description = description;
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem(`list${this.id}`, JSON.stringify(this));
    localStorage.setItem('count', this.id);
  }
}