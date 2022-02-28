export default class Todo {
  constructor(task, complete = false) {
    this.task = task;
    this.complete = complete;
  }
}