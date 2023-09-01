import List from "./list";
import Task from "./task";
import Tag from "./tag";
import Storage from "./storage";


export default class UI {
    // Loading content

    static mainContentWrapper = document.querySelector(".main-content");

    static loadHomepage() {
        // Maybe not needed
        UI.mainContentWrapperReset();

        // loadTagsToSidebar()
        UI.loadAllTasksPage();
        UI.initProjectsButtons();

    }

    static mainContentWrapperReset() {
        UI.mainContentWrapper.innerHTML = "";
    }
    
    static loadAllTasksPage() {
        UI.mainContentWrapperReset();
        // Storage.serveAllTasks()
        // Create New Task input Button/form

        // Test
        const textEl = document.createElement("h2");
        textEl.textContent = "All tasks";
        textEl.classList.add("text");
        const addTaskBtn = document.createElement("button")

        UI.mainContentWrapper.appendChild(textEl);
        UI.loadNewTagModal();
    }

    static loadTodayPage() {
        UI.mainContentWrapperReset();
    
        const todayTasks = Storage.serveTodayTasks();
        const todayList = new List("Today");
        todayTasks.map((task) => todayList.addTask(task));

        // function to renderList(list)
    }

    static loadThisWeekPage() {
        UI.mainContentWrapperReset();
        // Storage.loadThisWeekTasks()
    }

    static loadTagPage(tagName) {
        UI.mainContentWrapperReset();
        // createAddBtn()
        // renderList(list) using tag.getLists()
    }

    static loadTagsToSidebar() {
        const allTags = Storage.allTags;
        allTags.map((tag) => {
            const tagBtnWrapper = document.querySelector("tag-buttons-wrapper");
            const tagBtn = document.createElement("button");

            const tagBtnLeft = document.createElement("div");

            // set name of tag element
            const tagBtnMiddle = document.createElement("p");
            tagBtnMiddle.textContent = `${tag.name}`;

            const tagBtnRight = document.createElement("div");

            // add css classes
            

            // append children
            tagBtn.appendChild(tagBtnLeft);
            tagBtn.appendChild(tagBtnMiddle);
            tagBtn.appendChild(tagBtnRight);

            tagBtnWrapper.appendChild(tagBtn);

             
        })
    }


    // Modals
    static loadNewTagModal() {
        const modal = document.getElementById("new-tag-modal");
        modal.showModal();
        const form = document.getElementById("new-tag-form");
        form.addEventListener("submit", (event) => {
            // Prevent default form submission
            event.preventDefault();

            // Get value
            const inputField = document.getElementById("new-tag-input-field");
            const inputValue = inputField.value;

            // Clear input field
            inputField.value = "";

            // Create tag
            const tag = new Tag(inputValue);

            // Push to storage array
            Storage.allTags.push(tag);

            // loadHomePage()
        })
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
        allTasksBtn.addEventListener("click", () => UI.loadAllTasksPage());
        todayBtn.addEventListener("click", () => UI.loadTodayPage());
        thisWeekBtn.addEventListener("click", () => UI.loadThisWeekPage());
        addTagBtn.addEventListener("click", () => UI.createTagBtn());
        
        tagBtn.addEventListener("click", () => UI.loadTagPage(tagBtn.textContent)); // Needs logic to distinguish from different tag buttons by name

    }


    // Create content

    static createNewTagBtn() {
        // create new tag from tag.js

        // PopUp Modal

        const btn = document.createElement("button");
        btn.id = "tagBtn";
        btn.textContent = ""//Tag name / Modal return value;
    }

    static createInputModal(type) {
        // modal logic buttons, input tag, etc. type prop for createNewListModal or createNewTaskModal
        // return name of input
    }

    static createNewListBtn() {}

    static createNewTaskBtn() {
        // <button>+ Add</button>
        // onclick => createInputModal()
    }
}