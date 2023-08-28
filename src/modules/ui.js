import List from "./list";
import Task from "./task";
import Tag from "./tag";


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
        // Storage.loadAllTasks()
        // Create New Task input Button/form

        // Test
        const textEl = document.createElement("h2");
        textEl.textContent = "All tasks";
        textEl.classList.add("text");
        const addTaskBtn = document.createElement("button")

        UI.mainContentWrapper.appendChild(textEl);
    }

    static loadTodayPage() {
        UI.mainContentWrapperReset();
        //const todayTag = new Tag("Today")
        // Storage.loadTodayTasks()
    }

    static loadThisWeekPage() {
        UI.mainContentWrapperReset();
        // Storage.loadThisWeekTasks()
    }

    static loadTagPage(tagName) {
        UI.mainContentWrapperReset();
        // createAddBtn()
        // Storage.loadTagLists(tagName)
    }


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
        
        tagBtn.addEventListener("click", UI.loadTagPage(tagBtn.textContent)); // Needs logic to distinguish from different tag buttons by name

    }


    // Create content

    static createTagBtn() {
        // create new tag from tag.js

        // PopUp Modal

        const btn = document.createElement("button");
        btn.id = "tagBtn";
        btn.textContent = ""//Tag name / Modal return value;
    }

    static createInputModal() {
        // modal logic buttons, input tag, etc.
        // return name of input
    }

    static createAddBtn() {
        // <button>+ Add</button>
        // onclick => createInputModal()
    }
}