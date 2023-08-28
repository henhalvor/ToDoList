import List from "./list";
import Task from "./task";


export default class UI {
    // Loading content

    static mainContentWrapper = document.querySelector(".main-content");

    static loadHomepage() {
        // Maybe not needed
        UI.mainContentWrapperReset();

        UI.loadAllTasksPage();
        UI.initProjectsButtons();

    }

    static mainContentWrapperReset() {
        UI.mainContentWrapper.innerHTML = "";
    }
    
    static loadAllTasksPage() {
        UI.mainContentWrapperReset();

        const textEl = document.createElement("h2");
        textEl.textContent = "All tasks";
        textEl.classList.add("text");
        const addTaskBtn = document.createElement("button")

        UI.mainContentWrapper.appendChild(textEl);
    }

    static loadTodayPage() {}

    static loadThisWeekPage() {}

    static loadTagPage(tagName) {}


    // Add event listeners
    
    static initProjectsButtons() {
        // Buttons
        const allTasksBtn = document.querySelector("#allTasksBtn");
        const todayBtn = document.querySelector("#todayBtn");
        const thisWeekBtn = document.querySelector("#thisWeekBtn");
        const addTagBtn = document.querySelector("#addTagBtn");
        // Select all "tagBtn" buttons
        const tagBtn = document.querySelectorAll("#tagBtn");

        // Event listeners
        allTasksBtn.addEventListener("click", UI.loadAllTasksPage);
        todayBtn.addEventListener("click", UI.loadTodayPage);
        thisWeekBtn.addEventListener("click", UI.loadThisWeekPage);
        addTagBtn.addEventListener("click", UI.createTagBtn);
        // Needs logic to distinguish from different tag buttons by name
        tagBtn.addEventListener("click", UI.loadTagPage);

    }


    // Create content

    static createTagBtn() {
        // create new tag from tag.js

        const btn = document.createElement("button");
        btn.id = "tagBtn";
        btn.textContent = //Tag name
    }
}