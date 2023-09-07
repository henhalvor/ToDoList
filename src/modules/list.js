export default class List {
  constructor(name) {
    this.name = name;
    this.tasks = [];
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  getTasks() {
    return this.tasks;
  }

  addTask(newTask) {
    this.tasks.push(newTask);
  }

  deleteTask(taskName) {
    this.tasks = this.tasks.filter((task) => task.name !== taskName);
  }
}
