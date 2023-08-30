import Task from "./task";

export default class Storage {
  static allTasks = [];
  static allLists = [];
  static allTags = [];

  // Save data related functions
  static savedata(array) {
    // Convert to JSON
    const jsonArray = JSON.stringify(array);
    // Save to localStorage under the key = name of array
    localStorage.setItem(`${array}`, jsonArray);
  }

  // Load data from storage

  // Pass inn array variable as key
  static loadDataFromStorage(key) {
    // Get JSON
    const retrievedJson = localStorage.getItem(`${key}`);
    // Convert JSON from str to array of objects
    const retrievedArray = JSON.parse(retrievedJson);

    // update array
    key = retrievedArray;
  }

  // static updateArrayWithoutDuplicates(originalArray, newArray) {
  //     // Create a Set from the original array to track existing values
  //     var existingValues = new Set(originalArray);

  //     // Filter out values from the new array that already exist in the original array
  //     var uniqueValues = newArray.filter(item => !existingValues.has(item));

  //     // Concatenate the original array with the unique values from the new array
  //     var updatedArray = originalArray.concat(uniqueValues);

  //     return updatedArray;
  //   }

  // Parse and serve data
  static serveAllTasks() {
    const tasks = Storage.allTasks;
    return tasks; // shorten function
  }

  static serveTodayTasks() {
    const date = new Date();
    const day = date.getDate();

    const tasks = Storage.allTasks;
    let todayTasks = [];

    tasks.map((task) => {
      if (task.getDueDate() === day) {
        todayTasks.push(task);
      }
    });

    return todayTasks;
  }

  static serveThisWeekTasks() {
    const currentDate = new Date();
    const currentWeek = Storage.getWeekNumber(currentDate);

    const tasks = Storage.allTasks;
    let thisWeekTasks = [];

    tasks.map((task) => {
      const taskWeek = Storage.getWeekNumber(task.getDueDate());
      if (taskWeek === currentWeek) {
        thisWeekTasks.push(task);
      }
    });

    return thisWeekTasks;
  }

  // Helper functions
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
