// Tags for todolist from list.js

export default class Tag {
    constructor(name, id) {
        this.name = name;
        this.lists = [];
        this.id = id;
    }

    addList(newList) {
        this.lists.push(newList);
    }

    deleteList(listName) {
        this.lists = this.lists.filter((list) => list.name !== listName);
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

    setId(id) {
        this.id = id;
    }

}