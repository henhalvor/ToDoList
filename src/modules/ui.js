import List from "./list";
import Task from "./task";
import Tag from "./tag";
import Storage from "./storage";

const MAIN_CONTENT_CONTAINER = document.querySelector(".main-content");
const TAG_BTNS_CONTAINER = document.querySelector(".tag-buttons-wrapper");

export default class UI {
  static loadHomepage() {
    UI.mainContentWrapperReset();
    UI.initSideNavBtns();
    UI.loadAllTasks();
  }

  static loadAllTasks() {
    UI.mainContentWrapperReset();
    // Test
    const textEl = document.createElement("h2");
    textEl.textContent = "All tasks";
    textEl.classList.add("text");
    MAIN_CONTENT_CONTAINER.appendChild(textEl);
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
      console.log(tagName);

      // check value
      if (tagName !== "") {
        // Create tag
        const tag = new Tag(tagName);

        // Push to storage array
        Storage.addTag(tag);
      }

      // Clear input field
      inputField.value = "";

      UI.loadTagsToSidebar();
    });
  }

  static createNewListModal() {
    const tag = Storage.getSelectedTag();
    const modal = document.getElementById("new-list-modal");
    modal.showModal();

    // Get input field
    const inputField = document.getElementById("new-list-input-field");

    // cancel btn
    const cancelBtn = document.getElementById("list-modal-cancel-btn");
    cancelBtn.addEventListener("click", () => {
      modal.close();
      inputField.value = "";
      //UI.loadTagPage(tag);
    });

    // Submit btn
    const submitBtn = document.getElementById("list-modal-submit-btn");
    submitBtn.addEventListener("click", () => {
      // Close modal
      modal.close();

      // Get value from input field
      const listName = inputField.value;
      console.log(listName);

      // Check value
      if (listName !== "") {
        const list = new List(`${listName}`);
        // push to storage (maybe not needed)
        Storage.addList(list);
        // push to tag lists arrray
        tag.addList(list);

        // reload page
        UI.loadTagPage();
      }

      inputField.value = "";
    });
  }

  static viewListModal() {
    const list = Storage.getSelectedList();
    const modal = document.getElementById("view-list-modal");
    modal.showModal();
    // Reset html before rendering again
    modal.innerHTML = "";

    const listTasks = list.getTasks();

    // Rendered elements
    const listTitle = document.createElement("h2");
    listTitle.textContent = `${list.getName()}`;
    modal.appendChild(listTitle);

    listTasks.forEach((task) => {
      const taskEl = document.createElement("p");
      taskEl.textContent = `${task.getName()}`;
      modal.appendChild(taskEl);
    });

    // Add Btn
    const addTaskBtn = document.createElement("button");
    addTaskBtn.textContent = "Add";
    addTaskBtn.classList.add("add-btn");
    addTaskBtn.addEventListener("click", () => UI.createNewTaskModal()); // ADD CREATE NEW TASK MODAL FUNCTION TO EVENT LISTENER
    modal.appendChild(addTaskBtn);

    // Close Btn
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "Close";
    closeBtn.classList.add("close-btn");
    closeBtn.addEventListener("click", () => modal.close());
    modal.appendChild(closeBtn);
  }

  static createNewTaskModal() {
    const list = Storage.getSelectedList();
    const modal = document.getElementById("new-task-modal");
    modal.showModal();

    // Get Input Field
    const inputField = document.getElementById("new-task-input-field");

    // Cancel Btn
    const cancelBtn = document.getElementById("new-task-modal-cancel-btn");
    cancelBtn.addEventListener("click", () => {
      modal.close();
      inputField.value = "";
      // UI.viewListModal(list);
    });

    // Submit
    const submitBtn = document.getElementById("new-task-modal-submit-btn");
    submitBtn.addEventListener("click", () => {
      modal.close();
      const taskName = inputField.value;

      if (taskName !== "") {
        const task = new Task(taskName, "Not Implemented", "Not completed");
        Storage.addTask(task);
        list.addTask(task);

        UI.viewListModal(list);
      }
      inputField.value = "";
    });
  }

  // Loading Content
  static loadTagsToSidebar() {
    TAG_BTNS_CONTAINER.innerHTML = "";
    const allTags = Storage.allTags;
    allTags.forEach((tag) => {
      const tagBtn = document.createElement("button");
      tagBtn.textContent = tag.getName();
      tagBtn.addEventListener("click", () => {
        Storage.setSelectedTag(tag);
        UI.loadTagPage();
      });

      TAG_BTNS_CONTAINER.appendChild(tagBtn);
    });
  }

  static loadTagPage() {
    const tag = Storage.getSelectedTag();
    UI.mainContentWrapperReset();
    const tagPageContainer = document.createElement("div");
    tagPageContainer.classList.add("tag-page-wrapper");

    // Add List Btn
    const newListBtn = document.createElement("button");
    newListBtn.textContent = `+ Add List ID: ${tag.getId()}`;
    newListBtn.classList.add("new-btn");
    newListBtn.addEventListener("click", () => {
      UI.createNewListModal(tag);
      // Re-render lists after creating new one
      renderLists();
    });

    function renderLists() {
      // clear wrapper
      tagPageContainer.innerHTML = "";

      const tagLists = tag.getLists();
      tagLists.forEach((list) => {
        // List tasks
        const listTasks = list.getTasks();

        // create card with list tasks and render in DOM
        const card = document.createElement("div");
        card.classList.add("list-card");
        card.addEventListener("click", () => {
          Storage.setSelectedList(list);
          UI.viewListModal();
        });

        // Card content
        const cardTitle = document.createElement("h2");
        cardTitle.textContent = `${list.getName()}`;
        card.appendChild(cardTitle);

        for (let i = 0; 1 < 5 && i < listTasks.length; i++) {
          const task = listTasks[i];
          const cardTaskEl = document.createElement("h4");
          cardTaskEl.textContent = `${task.getName()}`;
          card.appendChild(cardTaskEl);
        }

        tagPageContainer.appendChild(card);
      });
    }

    // Render lists within tag
    renderLists();

    // Append elements to wrapper
    tagPageContainer.appendChild(newListBtn);

    MAIN_CONTENT_CONTAINER.appendChild(tagPageContainer);
  }

  // Initialize sidnav buttons

  static initSideNavBtns() {
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

  // Helper functions

  static mainContentWrapperReset() {
    MAIN_CONTENT_CONTAINER.innerHTML = "";
  }
}
