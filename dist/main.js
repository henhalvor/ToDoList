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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tag)\n/* harmony export */ });\n// Tags for todolist from list.js\n\nclass Tag {\n    constructor(name) {\n        this.name = name;\n        this.lists = [];\n    }\n\n    addList(newList) {\n        this.lists.push(newList);\n    }\n\n    deleteList(listName) {\n        this.lists = this.lists.filter((list) => list.name !== listName);\n    }\n\n    // getlists()\n\n    // setLists()\n}\n\n//# sourceURL=webpack://todolist/./src/modules/tag.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ UI)\n/* harmony export */ });\n/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ \"./src/modules/list.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/modules/task.js\");\n/* harmony import */ var _tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tag */ \"./src/modules/tag.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ \"./src/modules/storage.js\");\n\n\n\n\n\n\nclass UI {\n    // Loading content\n\n    static mainContentWrapper = document.querySelector(\".main-content\");\n\n    static loadHomepage() {\n        // Maybe not needed\n        UI.mainContentWrapperReset();\n\n        UI.loadAllTasksPage();\n        //UI.initProjectsButtons();\n\n    }\n\n    static mainContentWrapperReset() {\n        UI.mainContentWrapper.innerHTML = \"\";\n    }\n    \n    static loadAllTasksPage() {\n        UI.mainContentWrapperReset();\n        // Storage.loadAllTasks()\n        // Create New Task input Button/form\n\n        // Test\n        const textEl = document.createElement(\"h2\");\n        textEl.textContent = \"All tasks\";\n        textEl.classList.add(\"text\");\n        const addTaskBtn = document.createElement(\"button\")\n\n        UI.mainContentWrapper.appendChild(textEl);\n        UI.loadNewTagModal();\n    }\n\n    static loadTodayPage() {\n        //UI.mainContentWrapperReset();\n    \n        const todayTasks = _storage__WEBPACK_IMPORTED_MODULE_3__[\"default\"].serveTodayTasks();\n        const todayList = new _list__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"Today\");\n        todayTasks.map((task) => todayList.addTask(task));\n\n        // function to renderList(list)\n    }\n\n    static loadThisWeekPage() {\n        //UI.mainContentWrapperReset();\n        // Storage.loadThisWeekTasks()\n    }\n\n    static loadTagPage(tagName) {\n        //UI.mainContentWrapperReset();\n        // createAddBtn()\n        // renderList(list) using tag.getLists()\n    }\n\n\n    // Modals\n    static loadNewTagModal() {\n        const modal = document.getElementById(\"new-tag-modal\");\n        modal.showModal()\n    }\n\n\n    // Add event listeners\n    \n    static initProjectsButtons() {\n        // Buttons\n        const allTasksBtn = document.querySelector(\"#allTasksBtn\");\n        const todayBtn = document.querySelector(\"#todayBtn\");\n        const thisWeekBtn = document.querySelector(\"#thisWeekBtn\");\n        const addTagBtn = document.querySelector(\"#addTagBtn\");\n        // Select all \"tagBtn\" buttons\n        const tagBtn = document.querySelectorAll(\"#tagBtn\");\n\n\n        // Event listeners\n        allTasksBtn.addEventListener(\"click\", () => UI.loadAllTasksPage());\n        todayBtn.addEventListener(\"click\", () => UI.loadTodayPage());\n        thisWeekBtn.addEventListener(\"click\", () => UI.loadThisWeekPage());\n        addTagBtn.addEventListener(\"click\", () => UI.createTagBtn());\n        \n        tagBtn.addEventListener(\"click\", () => UI.loadTagPage(tagBtn.textContent)); // Needs logic to distinguish from different tag buttons by name\n\n    }\n\n\n    // Create content\n\n    static createNewTagBtn() {\n        // create new tag from tag.js\n\n        // PopUp Modal\n\n        const btn = document.createElement(\"button\");\n        btn.id = \"tagBtn\";\n        btn.textContent = \"\"//Tag name / Modal return value;\n    }\n\n    static createInputModal(type) {\n        // modal logic buttons, input tag, etc. type prop for createNewListModal or createNewTaskModal\n        // return name of input\n    }\n\n    static createNewListBtn() {}\n\n    static createNewTaskBtn() {\n        // <button>+ Add</button>\n        // onclick => createInputModal()\n    }\n}\n\n//# sourceURL=webpack://todolist/./src/modules/ui.js?");

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