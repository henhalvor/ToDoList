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

    static loadTagPage(tag) {
        UI.mainContentWrapperReset();
        // createAddBtn()
        // renderList(list) using tag.getLists()
    }

    static loadTagsToSidebar() {
        const tagBtnWrapper = document.querySelector(".tag-buttons-wrapper");
        tagBtnWrapper.innerHTML = "";
        const allTags = Storage.allTags;
        allTags.forEach((tag) => {
            const tagBtn = document.createElement("button");
            tagBtn.textContent = `${tag.name}`;
            tagBtn.addEventListener("click", () => UI.loadTagPage(tag));



            // const tagBtnLeft = document.createElement("div");

            // // set name of tag element
            // const tagBtnMiddle = document.createElement("p");
            // tagBtnMiddle.textContent = `${tag.name}`;

            // const tagBtnRight = document.createElement("div");

            // // add css classes


            // // append children
            // tagBtn.appendChild(tagBtnLeft);
            // tagBtn.appendChild(tagBtnMiddle);
            // tagBtn.appendChild(tagBtnRight);

            tagBtnWrapper.appendChild(tagBtn);
        })
    }


    // Modals
    static createNewTagModal() {
        const modal = document.getElementById("new-tag-modal");
        modal.showModal();
        
        // cancel button
        const cancelBtn = document.querySelector(".modal-cancel-btn");
        cancelBtn.addEventListener("click", () => modal.close());
        
        const submitBtn = document.querySelector(".modal-submit-btn");
        submitBtn.addEventListener("click", () => {
            // close modal
            modal.close();

            // Get value
            const inputField = document.getElementById("new-tag-input-field");
            const tagName = inputField.value;
            console.log(tagName)

            // check value
            if (tagName !== "") {
                // Create tag
                const tag = new Tag(`${tagName}`);
                
                // Push to storage array
                Storage.allTags.push(tag);
            }

            // Clear input field
            inputField.value = "";



            UI.loadTagsToSidebar();
        })
    }


    // Add event listeners
    
    static initProjectsButtons() {
        // Buttons
        const allTasksBtn = document.querySelector("#allTasksBtn");
        const todayBtn = document.querySelector("#todayBtn");
        const thisWeekBtn = document.querySelector("#thisWeekBtn");
        const addTagBtn = document.querySelector("#addTagBtn");



        // Event listeners
        allTasksBtn.addEventListener("click", () => UI.loadAllTasksPage());
        todayBtn.addEventListener("click", () => UI.loadTodayPage());
        thisWeekBtn.addEventListener("click", () => UI.loadThisWeekPage());
        addTagBtn.addEventListener("click", () => UI.createNewTagModal());
    }


    // Create content

    static createNewListBtn() {}

    static createNewTaskBtn() {
        // <button>+ Add</button>
        // onclick => createInputModal()
    }
}