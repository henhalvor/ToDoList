// Tags for todolist from list.js

export default class Tag {
    constructor(name) {
        this.name = name;
        this.lists = [];
        this.id = Math.floor(Math.random() * 1000000000);
    }

    addList(newList) {
        this.lists.push(newList);
    }

    removeList(listToDelete) {
        this.lists = this.lists.filter((list) => list.id !== listToDelete.id);
    }

    getLists() {
        return this.lists;
    }

    getName() {
        return this.name;
    }
    
    setName(name) {
        this.name = name;
    }

    getId() {
        return this.id;
    }

}