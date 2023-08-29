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
        
    }

    static serveTodayTasks() {}

    static serveThisWeekTasks() {}

    // Helper functions
    static updateArrayWithoutDuplicates(originalArray, newArray) {
        // Create a Set from the original array to track existing values
        var existingValues = new Set(originalArray);
      
        // Filter out values from the new array that already exist in the original array
        var uniqueValues = newArray.filter(item => !existingValues.has(item));
      
        // Concatenate the original array with the unique values from the new array
        var updatedArray = originalArray.concat(uniqueValues);
      
        return updatedArray;
      }
}