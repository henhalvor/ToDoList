/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ui */ \"./src/modules/ui.js\");\n/* harmony import */ var _modules_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/storage */ \"./src/modules/storage.js\");\n\n\n\nfunction initialLoad() {\n    // Load Data\n    _modules_storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loadDataFromStorage(_modules_storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].allTasks);\n    _modules_storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loadDataFromStorage(_modules_storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].allLists);\n    _modules_storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loadDataFromStorage(_modules_storage__WEBPACK_IMPORTED_MODULE_1__[\"default\"].allTags);\n    \n    // Load homePage\n    _modules_ui__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadHomepage();\n}\n\ndocument.addEventListener(\"DOMContentLoaded\", () => initialLoad());\n\n\n//# sourceURL=webpack://todolist/./src/index.js?");

/***/ }),

/***/ "./src/modules/list.js":
/*!*****************************!*\
  !*** ./src/modules/list.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ List)\n/* harmony export */ });\nclass List {\n    constructor(name) {\n        this.name = name;\n        this.tasks = [];\n    }\n\n    // Getters / Setters\n    setName(name) {\n        this.name = name;\n    }\n\n    getName() {\n        return this.name;\n    }\n\n    getTasks() {\n        return this.tasks;\n    }\n\n    // Methods\n    addTask(newTask) {\n        this.tasks.push(newTask);\n    }\n\n    deleteTask(taskName) {\n        this.tasks = this.tasks.filter((task) => task.name !== taskName);\n      }\n}\n\n\n//# sourceURL=webpack://todolist/./src/modules/list.js?");

/***/ }),

/***/ "./src/modules/storage.js":
/*!********************************!*\
  !*** ./src/modules/storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n\n\nclass Storage {\n  static allTasks = [];\n  static allLists = [];\n  static allTags = [];\n\n  // Save data related functions\n  static savedata(array) {\n    // Convert to JSON\n    const jsonArray = JSON.stringify(array);\n    // Save to localStorage under the key = name of array\n    localStorage.setItem(`${array}`, jsonArray);\n  }\n\n\n  // LOAD DATA FROM STORAGE\n\n  // Pass inn array variable as key\n  static loadDataFromStorage(key) {\n    // Get JSON\n    const retrievedJson = localStorage.getItem(`${key}`);\n    // Convert JSON from str to array of objects\n    const retrievedArray = JSON.parse(retrievedJson);\n\n    // update array\n    key = retrievedArray;\n  }\n\n\n  // PARSE AND SERVE DATA\n  static serveAllTasks() {\n    const tasks = Storage.allTasks;\n    return tasks; // shorten function\n  }\n\n  static serveTodayTasks() {\n    const date = new Date();\n    const day = date.getDate();\n\n    const tasks = Storage.allTasks;\n    let todayTasks = [];\n\n    tasks.map((task) => {\n      if (task.getDueDate() === day) {\n        todayTasks.push(task);\n      }\n    });\n\n    return todayTasks;\n  }\n\n  static serveThisWeekTasks() {\n    const currentDate = new Date();\n    const currentWeek = Storage.getWeekNumber(currentDate);\n\n    const tasks = Storage.allTasks;\n    let thisWeekTasks = [];\n\n    tasks.map((task) => {\n      const taskWeek = Storage.getWeekNumber(task.getDueDate());\n      if (taskWeek === currentWeek) {\n        thisWeekTasks.push(task);\n      }\n    });\n\n    return thisWeekTasks;\n  }\n\n  // HELPER FUNCTIONS\n  static updateArrayWithoutDuplicates(originalArray, newArray) {\n    // Create a Set from the original array to track existing values\n    var existingValues = new Set(originalArray);\n\n    // Filter out values from the new array that already exist in the original array\n    var uniqueValues = newArray.filter((item) => !existingValues.has(item));\n\n    // Concatenate the original array with the unique values from the new array\n    var updatedArray = originalArray.concat(uniqueValues);\n\n    return updatedArray;\n  }\n\n  static getWeekNumber(date) {\n    const startDate = new Date(date.getFullYear(), 0, 1);\n    const days = Math.floor((date - startDate) / (24 * 60 * 60 * 1000));\n    const weekNumber = Math.ceil(days / 7);\n\n    return weekNumber;\n  }\n}\n\n\n//# sourceURL=webpack://todolist/./src/modules/storage.js?");

/***/ }),

/***/ "./src/modules/tag.js":
/*!****************************!*\
  !*** ./src/modules/tag.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tag)\n/* harmony export */ });\n// Tags for todolist from list.js\n\nclass Tag {\n    constructor(name) {\n        this.name = name;\n        this.lists = [];\n    }\n\n    addList(newList) {\n        this.lists.push(newList);\n    }\n\n    deleteList(listName) {\n        this.lists = this.lists.filter((list) => list.name !== listName);\n    }\n\n    // getlists()\n    getLists() {\n        return this.lists;\n    }\n\n    // setLists()\n}\n\n//# sourceURL=webpack://todolist/./src/modules/tag.js?");

/***/ }),

/***/ "./src/modules/task.js":
/*!*****************************!*\
  !*** ./src/modules/task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n    constructor(name, dueDate, status) {\n        this.name = name;\n        this.dueDate = dueDate;\n        this.status = status;\n    }\n\n    // Getters and setters\n    setName(name) {\n        this.name = name;\n    }\n\n    getName() {\n        return this.name;\n    }\n\n    setDueDate(dueDate) {\n        this.dueDate = dueDate;\n    }\n\n    getDueDate() {\n        return this.dueDate;\n    }\n\n    setStatus(status) {\n        this.status = status;\n    }\n\n    getStatus() {\n        return this.status;\n    }\n\n}\n\n//# sourceURL=webpack://todolist/./src/modules/task.js?");

/***/ }),

/***/ "./src/modules/ui.js":
/*!***************************!*\
  !*** ./src/modules/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ \"./src/modules/list.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tag */ \"./src/modules/tag.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\n\n\n\n\n\n\nclass UI {\n    // Loading content\n\n    static mainContentWrapper = document.querySelector(\".main-content\");\n\n    static loadHomepage() {\n        // Maybe not needed\n        UI.mainContentWrapperReset();\n\n        // loadTagsToSidebar()\n        UI.loadAllTasksPage();\n        UI.initProjectsButtons();\n\n    }\n\n    static mainContentWrapperReset() {\n        UI.mainContentWrapper.innerHTML = \"\";\n    }\n    \n    static loadAllTasksPage() {\n        UI.mainContentWrapperReset();\n        // Storage.serveAllTasks()\n        // Create New Task input Button/form\n\n        // Test\n        const textEl = document.createElement(\"h2\");\n        textEl.textContent = \"All tasks\";\n        textEl.classList.add(\"text\");\n        const addTaskBtn = document.createElement(\"button\")\n\n        UI.mainContentWrapper.appendChild(textEl);\n    }\n\n    static loadTodayPage() {\n        UI.mainContentWrapperReset();\n    \n        const todayTasks = _storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].serveTodayTasks();\n        const todayList = new _list__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Today\");\n        todayTasks.map((task) => todayList.addTask(task));\n\n        // function to renderList(list)\n    }\n\n    static loadThisWeekPage() {\n        UI.mainContentWrapperReset();\n        // Storage.loadThisWeekTasks()\n    }\n\n    static loadTagPage(tag) {\n        UI.mainContentWrapperReset();\n        const tagPageWrapper = document.createElement(\"div\");\n        tagPageWrapper.classList.add(\"tag-page-wrapper\");\n\n\n        // Add List Btn\n        const newListBtn = document.createElement(\"button\");\n        newListBtn.textContent = \"+ Add List\";\n        newListBtn.classList.add(\"new-btn\");\n        newListBtn.addEventListener(\"click\", () => {\n            UI.createNewListModal(tag);\n            // Re-render lists after creating new one\n            renderLists();\n        });\n        \n        function renderLists() {\n            // clear wrapper\n            tagPageWrapper.innerHTML = \"\";\n\n            const tagLists = tag.getLists();\n            tagLists.forEach((list) => {\n                // List tasks\n                const listTasks = list.getTasks();\n\n                // create card with list tasks and render in DOM\n                const card = document.createElement(\"div\");\n                card.classList.add(\"list-card\");\n                card.addEventListener(\"click\", () => UI.viewListModal(list));\n\n                // Card content\n                const cardTitle = document.createElement(\"h2\");\n                cardTitle.textContent = `${list.getName()}`;\n                card.appendChild(cardTitle)\n\n                for (let i = 0;  true && i < listTasks.length; i++) {\n                    const task = listTasks[i];\n                    const cardTaskEl = document.createElement(\"h4\");\n                    cardTaskEl.textContent = `${task.getName()}`;\n                    card.appendChild(cardTaskEl);\n                }\n\n                tagPageWrapper.appendChild(card); \n            })\n\n        }\n\n        // Render lists within tag\n        renderLists();\n\n\n        // Append elements to wrapper\n        tagPageWrapper.appendChild(newListBtn);\n\n        UI.mainContentWrapper.appendChild(tagPageWrapper);\n    }\n\n    static loadTagsToSidebar() {\n        const tagBtnWrapper = document.querySelector(\".tag-buttons-wrapper\");\n        tagBtnWrapper.innerHTML = \"\";\n        const allTags = _storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].allTags;\n        allTags.forEach((tag) => {\n            const tagBtn = document.createElement(\"button\");\n            tagBtn.textContent = `${tag.name}`;\n            tagBtn.addEventListener(\"click\", () => UI.loadTagPage(tag));\n\n\n\n            // const tagBtnLeft = document.createElement(\"div\");\n\n            // // set name of tag element\n            // const tagBtnMiddle = document.createElement(\"p\");\n            // tagBtnMiddle.textContent = `${tag.name}`;\n\n            // const tagBtnRight = document.createElement(\"div\");\n\n            // // add css classes\n\n\n            // // append children\n            // tagBtn.appendChild(tagBtnLeft);\n            // tagBtn.appendChild(tagBtnMiddle);\n            // tagBtn.appendChild(tagBtnRight);\n\n            tagBtnWrapper.appendChild(tagBtn);\n        })\n    }\n\n\n    // Modals\n    static createNewTagModal() {\n        const modal = document.getElementById(\"new-tag-modal\");\n        modal.showModal();\n        \n        // cancel button\n        const cancelBtn = document.getElementById(\"tag-modal-cancel-btn\");\n        cancelBtn.addEventListener(\"click\", () => modal.close());\n        \n        // Submit btn\n        const submitBtn = document.getElementById(\"tag-modal-submit-btn\");\n        submitBtn.addEventListener(\"click\", () => {\n            // close modal\n            modal.close();\n\n            // Get value\n            const inputField = document.getElementById(\"new-tag-input-field\");\n            const tagName = inputField.value;\n            console.log(tagName)\n\n            // check value\n            if (tagName !== \"\") {\n                // Create tag\n                const tag = new _tag__WEBPACK_IMPORTED_MODULE_2__[\"default\"](`${tagName}`);\n\n                // Push to storage array\n                _storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].allTags.push(tag);\n            }\n\n            // Clear input field\n            inputField.value = \"\";\n\n\n\n            UI.loadTagsToSidebar();\n        })\n    }\n\n    static createNewListModal(tag) {\n        const modal = document.getElementById(\"new-list-modal\");\n        modal.showModal();\n\n        // Get input field\n        const inputField = document.getElementById(\"new-list-input-field\");\n\n        // cancel btn\n        const cancelBtn = document.getElementById(\"list-modal-cancel-btn\");\n        cancelBtn.addEventListener(\"click\", () => {\n            modal.close();\n            inputField.value = \"\";\n            UI.loadTagPage(tag);\n        });\n\n        // Submit btn\n        const submitBtn = document.getElementById(\"list-modal-submit-btn\");\n        submitBtn.addEventListener(\"click\", () => {\n            // Close modal\n            modal.close();\n\n            // Get value from input field\n            const listName = inputField.value;\n            console.log(listName);\n\n            // Check value\n            if (listName !== \"\") {\n                const list = new _list__WEBPACK_IMPORTED_MODULE_0__[\"default\"](`${listName}`);\n                // push to storage (maybe not needed)\n                _storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].allLists.push(list);\n                // push to tag lists arrray\n                tag.addList(list);\n\n                // reload page\n                UI.loadTagPage(tag);\n            }\n\n            inputField.value = \"\";\n\n        })\n    }\n\n    static viewListModal(list) {\n        const modal = document.getElementById(\"view-list-modal\");\n        modal.showModal();\n        // Reset html before rendering again\n        modal.innerHTML = \"\";\n\n\n        const listTasks = list.getTasks();\n\n        // Rendered elements\n        const listTitle = document.createElement(\"h2\");\n        listTitle.textContent = `${list.getName()}`;\n        modal.appendChild(listTitle);\n\n        listTasks.forEach((task) => {\n            const taskEl = document.createElement(\"p\");\n            taskEl.textContent = `${task.getName()}`;\n            modal.appendChild(taskEl);\n        })\n\n        // Add Btn\n        const addTaskBtn = document.createElement(\"button\");\n        addTaskBtn.textContent = \"Add\";\n        addTaskBtn.classList.add(\"add-btn\")\n        addTaskBtn.addEventListener(\"click\", () => UI.createNewTaskModal(list)) // ADD CREATE NEW TASK MODAL FUNCTION TO EVENT LISTENER\n        modal.appendChild(addTaskBtn);\n\n        // Close Btn\n        const closeBtn = document.createElement(\"button\");\n        closeBtn.textContent = \"Close\";\n        closeBtn.classList.add(\"close-btn\");\n        closeBtn.addEventListener(\"click\", () => modal.close());\n        modal.appendChild(closeBtn);\n    }\n\n    static createNewTaskModal(list) {\n        const modal = document.getElementById(\"new-task-modal\");\n        modal.showModal();\n\n        // Get Input Field\n        const inputField = document.getElementById(\"new-task-input-field\");\n\n        // Cancel Btn\n        const cancelBtn = document.getElementById(\"new-task-modal-cancel-btn\");\n        cancelBtn.addEventListener(\"click\", () => {\n            modal.close();\n            inputField.value = \"\";\n            // UI.viewListModal(list);\n        })\n\n        // Submit\n        const submitBtn = document.getElementById(\"new-task-modal-submit-btn\");\n        submitBtn.addEventListener(\"click\", () => {\n            modal.close();\n            const taskName = inputField.value;\n\n            if (taskName !== \"\") {\n                const task = new _task__WEBPACK_IMPORTED_MODULE_1__[\"default\"](taskName, \"Not Implemented\", \"Not completed\");\n                _storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].allTasks.push(task);\n                list.addTask(task);\n\n                UI.viewListModal(list);\n            }\n            inputField.value = \"\";\n        })\n    }\n\n\n\n\n    // Add event listeners\n    \n    static initProjectsButtons() {\n        // Buttons\n        const allTasksBtn = document.querySelector(\"#allTasksBtn\");\n        const todayBtn = document.querySelector(\"#todayBtn\");\n        const thisWeekBtn = document.querySelector(\"#thisWeekBtn\");\n        const addTagBtn = document.querySelector(\"#addTagBtn\");\n\n\n\n        // Event listeners\n        allTasksBtn.addEventListener(\"click\", () => UI.loadAllTasksPage());\n        todayBtn.addEventListener(\"click\", () => UI.loadTodayPage());\n        thisWeekBtn.addEventListener(\"click\", () => UI.loadThisWeekPage());\n        addTagBtn.addEventListener(\"click\", () => UI.createNewTagModal());\n    }\n\n\n    // Create content\n\n    static createNewListBtn() {}\n\n    static createNewTaskBtn() {\n        // <button>+ Add</button>\n        // onclick => createInputModal()\n    }\n}\n\n//# sourceURL=webpack://todolist/./src/modules/ui.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;