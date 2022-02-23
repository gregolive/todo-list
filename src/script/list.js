class List {
  idCount = 0;

  constructor(title, priority, date, description, todo) {
    this.id = idCount;
    this.title = title;
    this.priority = priority;
    this.date = date;
    this.description = description;
    this.todo = todo;
    idCount++;
  }
}