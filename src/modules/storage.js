import Task from "./task";

export default class Storage {
  static allTasks = [];
  static allLists = [];
  static allTags = [];

  // Selection logic
  static selectedTag = null;
  static selectedList = null;
  static selectedTask = null;

  static getSelectedTag() {
    return Storage.selectedTag;
  }

  static getSelectedList() {
    return Storage.selectedList;
  }

  static getSelectedTagId() {
    if (Storage.selectedTag !== null) {
      return Storage.selectedTag.id;
    } else {
      throw new Error("Selected tag is null");
    }
  }

  static getSelectedListId() {
    if (Storage.selectedList !== null) {
      return Storage.selectedList.id;
    } else {
      throw new Error("Selected list is null");
    }
  }

  static getSelectedTask() {
    return Storage.selectedTask;
  }

  static setSelectedTag(tag) {
    Storage.selectedTag = tag;
  }

  static setSelectedList(list) {
    Storage.selectedList = list;
  }

  static setSelectedTask(task) {
    Storage.selectedTask = task;
  }

  // Save data related functions
  static savedata(array) {
    // Convert to JSON
    const jsonArray = JSON.stringify(array);
    // Save to localStorage under the key = name of array
    localStorage.setItem(`${array}`, jsonArray);
  }

  // LOAD DATA FROM STORAGE

  // Pass inn array variable as key
  static loadDataFromStorage(key) {
    // Get JSON
    const retrievedJson = localStorage.getItem(`${key}`);
    // Convert JSON from str to array of objects
    const retrievedArray = JSON.parse(retrievedJson);

    // update array
    key = retrievedArray;
  }

  // Getters
  static getAllTasks() {
    return Storage.allTasks;
  }

  static getAllLists() {
    return Storage.allLists;
  }

  static getAllTags() {
    return Storage.allTags;
  }

  static getTodayTasks() {
    const date = new Date();
    const day = date.getDate();

    const tasks = Storage.allTasks;
    let todayTasks = [];

    tasks.forEach((task) => {
      const taskDate = new Date(task.getDueDate());
      if (taskDate.getDate() === day) {
        todayTasks.push(task);
      }
    });

    return todayTasks;
  }

  static getThisWeekTasks() {
    const currentDate = new Date();
    const currentWeek = Storage.getWeekNumber(currentDate);

    const tasks = Storage.allTasks;
    let thisWeekTasks = [];

    tasks.forEach(task => {
      // Convert datetime-local string to Date object
      const dueDate = new Date(task.dueDate); 
      const taskWeek = Storage.getWeekNumber(dueDate);
  
      if(taskWeek === currentWeek) {
        thisWeekTasks.push(task);
      }
    });

    return thisWeekTasks;
  }

  // Setters
  static addTask(task) {
    return Storage.allTasks.push(task);
  }

  static addList(list) {
    return Storage.allLists.push(list);
  }

  static addTag(tag) {
    return Storage.allTags.push(tag);
  }

  static removeTask(task) {
    const index = Storage.allTasks.indexOf(task);
    Storage.allTasks.splice(index, 1);
  }

  static removeList(list) {
    const index = Storage.allLists.indexOf(list);
    Storage.allLists.splice(index, 1);
  }

  static removeTag(tag) {
    const index = Storage.allTags.indexOf(tag);
    Storage.allTags.splice(index, 1);
  }

  // Helper Functions
  static updateArrayWithoutDuplicates(originalArray, newArray) {
    // Create a Set from the original array to track existing values
    var existingValues = new Set(originalArray);

    // Filter out values from the new array that already exist in the original array
    var uniqueValues = newArray.filter((item) => !existingValues.has(item));

    // Concatenate the original array with the unique values from the new array
    var updatedArray = originalArray.concat(uniqueValues);

    return updatedArray;
  }

  static getWeekNumber(date) {
    const startDate = new Date(date.getFullYear(), 0, 1);
    const days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));
    const weekNumber = Math.ceil(days / 7);

    return weekNumber;
  }
}
