import UI from "./modules/ui";
import Storage from "./modules/storage";

function initialLoad() {
    // Load Data
    Storage.loadDataFromStorage(Storage.allTasks);
    Storage.loadDataFromStorage(Storage.allLists);
    Storage.loadDataFromStorage(Storage.allTags);
    
    // Load homePage
    UI.loadHomepage();
}

document.addEventListener("DOMContentLoaded", () => initialLoad());
