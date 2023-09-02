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
        const tagPageWrapper = document.createElement("div");
        tagPageWrapper.classList.add("tag-page-wrapper");

        // Add List Btn
        const newListBtn = document.createElement("button");
        newListBtn.textContent = "+ Add List";
        newListBtn.classList.add("new-btn");
        newListBtn.addEventListener("click", () => {
            UI.createNewListModal();
            // Re-render lists after creating new one
            renderLists();
        });
        
        function renderLists() {
            const tagLists = tag.getLists();
            tagLists.forEach((list) => {
                // List tasks
                const listTasks = list.getTasks();

                // create card with list tasks and render in DOM
                const card = document.createElement("div");
                card.classList.add("list-card");
                // ADD EVENT LISTENER "CLICK" TO RENDER VIEW LIST MODAL

                // Card content
                const cardTitle = document.createElement("h2");
                cardTitle.textContent = `${list.getName()}`;
                card.appendChild(cardTitle)

                for (let i = 0; 1 < 5 && i < listTasks.length; i++) {
                    const task = listTasks[i];
                    const cardTaskEl = document.createElement("h4");
                    cardTaskEl.textContent = `${task.getName()}`;
                    card.appendChild(cardTaskEl);
                }

                tagPageWrapper.appendChild(card); 
            })

        }

        // Render lists within tag
        renderLists();


        // Append elements to wrapper
        tagPageWrapper.appendChild(newListBtn);

        UI.mainContentWrapper.appendChild(tagPageWrapper);
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
        const cancelBtn = document.getElementById("tag-modal-cancel-btn");
        cancelBtn.addEventListener("click", () => modal.close());
        
        // Submit btn
        const submitBtn = document.getElementById("tag-modal-submit-btn");
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

    static createNewListModal() {
        const modal = document.getElementById("new-list-modal");
        modal.showModal();

        // cancel btn
        const cancelBtn = document.getElementById("list-modal-cancel-btn");
        cancelBtn.addEventListener("click", () => modal.close());

        // Submit btn
        const submitBtn = document.getElementById("list-modal-submit-btn");
        submitBtn.addEventListener("click", () => {
            // Close modal
            modal.close();

            // Input field
            const inputField = document.getElementById("new-list-input-field");
            const listName = inputField.value;
            console.log(listName);

            // Check value
            if (listName !== "") {
                const list = new List(`${listName}`);
                Storage.allLists.push(list);
            }

            inputField.value = "";

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