class Group {
  constructor(title) {
    this.title = title;
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
    localStorage.setItem(title, JSON.stringify(this.lists));
  }
}