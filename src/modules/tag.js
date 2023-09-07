// Tags for todolist from list.js

export default class Tag {
    constructor(name) {
        this.name = name;
        this.lists = [];
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

}