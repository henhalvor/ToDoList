export default class Task {
  constructor(name, dueDate, status) {
    this.name = name;
    this.dueDate = dueDate;
    this.status = status;
    this.id = Math.floor(Math.random() * 1000000000);
  }

  setName(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }

  getDueDate() {
    return this.dueDate;
  }

  setStatus(status) {
    this.status = status;
  }

  getStatus() {
    return this.status;
  }

  getId() {
    return this.id;
}
}
