class Project {
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
    addTask(task) {
        this.tasks.push(task);
    }

    deleteTask(taskName) {
        this.tasks = this.tasks.filter((task) => task.name !== taskName);
      }
}