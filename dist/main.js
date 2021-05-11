/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/puzzle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/puzzle.js":
/*!***********************!*\
  !*** ./lib/puzzle.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

// /////////////
// // Rehearsal
// /////////////

// 1. Select elements: button, hint
const button = document.querySelector("#show-hint");
const hint = document.querySelector(".hint");

// 2. Listen to an event (click on the button)
button.addEventListener("click", (event) => {
  // 3. Change the DOM (show the hint)
  hint.classList.add("active");
});

// /////////////
// The GAME!
// /////////////

const checkWin = (cells) => {
  const order = [];
  cells.forEach((cell) => {
    order.push(cell.innerText);
  });
  console.log(order.join());
  return (order.join() == "1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,");
};

const swapCells = (clickedCell) => {
  const empty = document.querySelector('.empty');
  // copy the innerText of clicked cell to empty cell
  empty.innerText = clickedCell.innerText;
  // add class .empty cell to clicked cell
  clickedCell.classList.add("empty");
  // remove class .empty from empty cell
  empty.classList.remove("empty");
  // remove innerText from clicked cell
  clickedCell.innerText = '';
};

const checkIfEmptyNearby = (clickedCell) => {
  // get cell indexes of clickedCell
  const clickedCellRow = clickedCell.parentElement.rowIndex;
  const clickedCellCol = clickedCell.cellIndex;
  
  // get cell indexes of empty cell
  const empty = document.querySelector(".empty");
  const emptyRow = empty.parentElement.rowIndex;
  const emptyCol = empty.cellIndex;
  // check if next to each other
  const rowDiff = clickedCellRow - emptyRow;
  const colDiff = clickedCellCol - emptyCol;
  // Almost good 👇😅 but...
  // return (Math.abs(rowDiff) == 1 && Math.abs(colDiff) == 1 );
  return (Math.abs(rowDiff) + Math.abs(colDiff)) == 1 ;
};

// 1. Select all element (all title and cell)
const cells = document.querySelectorAll("td");
// 2. Iterate
cells.forEach((cell) => {
  // 3. Listen to an event (click)
  cell.addEventListener("click", (event) => {
    // 4. Check if empty space near the clicked cell
    const clickedCell = event.currentTarget;
    if (checkIfEmptyNearby(clickedCell)) {
      // 5. Swap clicked cell with empty cell
      swapCells(clickedCell);
      // 6. Check if win
      if ( checkWin(cells) ) {
        alert("We won!");
      }
    }
  });
});

/***/ })

/******/ });
//# sourceMappingURL=main.js.map