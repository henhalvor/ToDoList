export default class List {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    // Getters / Setters
    setName(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    getTasks() {
        return this.tasks;
    }

    // Methods
    addTask(newTask) {
        this.tasks.push(newTask);
    }

    deleteTask(taskName) {
        this.tasks = this.tasks.filter((task) => task.name !== taskName);
      }
}
