/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("// Add your import statements for View and Game here\nconst Game = __webpack_require__(/*! ../ttt_node/game.js */ \"./ttt_node/game.js\");\n\nconst View = __webpack_require__(/*! ./ttt-view.js */ \"./src/ttt-view.js\");\n\n// newGame.start();\n\n\n\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n\n  const newGame = new Game();\n  const ttt = document.querySelector(\".ttt\");\n  // debugger\n  const newView = new View(newGame, ttt);\n  \n\n  // function setupBoard(){\n    \n  // };\n  // Your code here\n\n  \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n});\n\n\n//# sourceURL=webpack://tic_tac_toe/./src/index.js?");

/***/ }),

/***/ "./src/ttt-view.js":
/*!*************************!*\
  !*** ./src/ttt-view.js ***!
  \*************************/
/***/ ((module) => {

eval("// class View {\n//   constructor(game, el) {\n//     // debugger\n//     this.game = game;\n//     this.el = el;\n//     this.setupBoard();\n//     // debugger\n//     this.el.addEventListener('click', this.handleClick)\n//     this.bindEvents()\n//     this.makeMove = this.makeMove.bind(this);\n//     this.handleClick = this.handleClick.bind(this);\n\n\n//   }\n\n//   setupBoard() {\n//     // const ttt = document.querySelector(\".ttt\");\n//     let ul = document.createElement(\"ul\");\n//     // debugger\n//     this.el.appendChild(ul);\n\n//     // ul.appendChild(li)\n//     for (let i = 0; i < 3; i++) {\n//       for (let j = 0; j < 3; j++) {\n//       let li = document.createElement(\"li\");\n\n//       // li.dataset.position = `[${i},${j}]`\n//       li.dataset.position = JSON.stringify([i, j]);\n//       ul.appendChild(li);\n//       // li.appendChild(document.createTextNode([i , j]));\n//       };\n//     };\n//   }\n//   bindEvents() {\n//     this.el.addEventListener(\"click\", this.handleClick)\n//   }\n//   handleClick(event) {\n//     const ele = event.target; // li datapos 5,2\n//     \"LI\" === ele.nodeName && this.makeMove(ele)\n\n//   }\n//   makeMove(square) { // li\n//     console.log(square);\n//     debugger\n//     // this.game.playMove(pos);\n\n//     this.game.currentPlayer = this.game.currentPlayer === \"x\" ? \"o\" : \"x\";\n\n\n//   }\n\n//   handleGameOver() {\n\n//   }\n// }\n// module.exports = View;\n// // export default View;\nclass View {\n  constructor(game, el) {\n    this.game = game;\n    this.el = el;\n    this.setupBoard();\n    this.makeMove = this.makeMove.bind(this);\n    this.handleClick = this.handleClick.bind(this);\n    this.el.addEventListener('click', this.handleClick);\n  }\n\n  setupBoard() {\n    let ul = document.createElement(\"ul\");\n    this.el.appendChild(ul);\n\n    for (let i = 0; i < 3; i++) {\n      for (let j = 0; j < 3; j++) {\n        let li = document.createElement(\"li\");\n        li.dataset.position = JSON.stringify([i, j]);\n        ul.appendChild(li);\n      };\n    };\n  }\n\n  handleClick(event) {\n    const ele = event.target;\n    if (ele.nodeName === \"LI\") {\n      this.makeMove(ele);\n    }\n  }\n\n  makeMove(square) {\n    // debugger\n    console.log(square);\n\n    // debugger\n    let pos = square.dataset.position\n    this.game.currentPlayer = this.game.currentPlayer === \"x\" ? \"o\" : \"x\";\n    this.game.playMove(JSON.parse(pos));\n\n  }\n\n  handleGameOver() {\n    // Handle game over logic\n  }\n}\n\nmodule.exports = View;\n\n\n//# sourceURL=webpack://tic_tac_toe/./src/ttt-view.js?");

/***/ }),

/***/ "./ttt_node/board.js":
/*!***************************!*\
  !*** ./ttt_node/board.js ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MoveError = __webpack_require__(/*! ./moveError */ \"./ttt_node/moveError.js\");\n\nclass Board {\n  constructor() {\n    this.grid = Board.makeGrid();\n  }\n\n  isEmptyPos(pos) {\n    if (!Board.isValidPos(pos)) {\n      throw new MoveError('Is not valid position!');\n    }\n\n    return (this.grid[pos[0]][pos[1]] === null);\n  }\n\n  isOver() {\n    if (this.winner() != null) {\n      return true;\n    }\n\n    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {\n      for (let colIdx = 0; colIdx < 3; colIdx++) {\n        if (this.isEmptyPos([rowIdx, colIdx])) {\n          return false;\n        }\n      }\n    }\n\n    return true;\n  }\n\n  placeMark(pos, mark) {\n    if (!this.isEmptyPos(pos)) {\n      throw new MoveError('Is not an empty position!');\n    }\n\n    this.grid[pos[0]][pos[1]] = mark;\n  }\n\n  print() {\n    const strs = [];\n    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {\n      const marks = [];\n      for (let colIdx = 0; colIdx < 3; colIdx++) {\n        marks.push(\n          this.grid[rowIdx][colIdx] ? this.grid[rowIdx][colIdx] : \" \"\n        );\n      }\n      strs.push(`${marks.join('|')}\\n`);\n    }\n\n    console.log(strs.join('-----\\n'));\n  }\n\n  winner() {\n    const posSeqs = [\n      // horizontals\n      [[0, 0], [0, 1], [0, 2]],\n      [[1, 0], [1, 1], [1, 2]],\n      [[2, 0], [2, 1], [2, 2]],\n      // verticals\n      [[0, 0], [1, 0], [2, 0]],\n      [[0, 1], [1, 1], [2, 1]],\n      [[0, 2], [1, 2], [2, 2]],\n      // diagonals\n      [[0, 0], [1, 1], [2, 2]],\n      [[2, 0], [1, 1], [0, 2]]\n    ];\n\n    for (let i = 0; i < posSeqs.length; i++) {\n      const winner = this.winnerHelper(posSeqs[i]);\n      if (winner != null) {\n        return winner;\n      }\n    }\n\n    return null;\n  }\n\n  winnerHelper(posSeq) {\n    for (let markIdx = 0; markIdx < Board.marks.length; markIdx++) {\n      const targetMark = Board.marks[markIdx];\n      let winner = true;\n      for (let posIdx = 0; posIdx < 3; posIdx++) {\n        const pos = posSeq[posIdx];\n        const mark = this.grid[pos[0]][pos[1]];\n\n        if (mark != targetMark) {\n          winner = false;\n        }\n      }\n\n      if (winner) {\n        return targetMark;\n      }\n    }\n\n    return null;\n  }\n\n  static isValidPos(pos) {\n    return (0 <= pos[0]) &&\n    (pos[0] < 3) &&\n    (0 <= pos[1]) &&\n    (pos[1] < 3);\n  }\n\n  static makeGrid() {\n    const grid = [];\n\n    for (let i = 0; i < 3; i++) {\n      grid.push([]);\n      for (let j = 0; j < 3; j++) {\n        grid[i].push(null);\n      }\n    }\n\n    return grid;\n  }\n}\n\nBoard.marks = ['x', 'o'];\n\nmodule.exports = Board;\n\n//# sourceURL=webpack://tic_tac_toe/./ttt_node/board.js?");

/***/ }),

/***/ "./ttt_node/game.js":
/*!**************************!*\
  !*** ./ttt_node/game.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Board = __webpack_require__(/*! ./board */ \"./ttt_node/board.js\");\nconst MoveError = __webpack_require__(/*! ./moveError */ \"./ttt_node/moveError.js\");\n\nclass Game {\n  constructor() {\n    this.board = new Board();\n    this.currentPlayer = Board.marks[0];\n  }\n\n  isOver() {\n    return this.board.isOver();\n  }\n\n  playMove(pos) {\n    this.board.placeMark(pos, this.currentPlayer);\n    this.swapTurn();\n  }\n\n  promptMove(reader, callback) {\n    const game = this;\n\n    this.board.print();\n    console.log(`Current Turn: ${this.currentPlayer}`);\n\n    reader.question('Enter rowIdx: ', rowIdxStr => {\n      const rowIdx = parseInt(rowIdxStr);\n      reader.question('Enter colIdx: ', colIdxStr => {\n        const colIdx = parseInt(colIdxStr);\n        callback([rowIdx, colIdx]);\n      });\n    });\n  }\n\n  run(reader, gameCompletionCallback) {\n    this.promptMove(reader, move => {\n      try {\n        this.playMove(move);\n      } catch (e) {\n        if (e instanceof MoveError) {\n          console.log(e.msg);\n        } else {\n          throw e;\n        }\n      }\n\n      if (this.isOver()) {\n        this.board.print();\n        if (this.winner()) {\n          console.log(`${this.winner()} has won!`);\n        } else {\n          console.log('NO ONE WINS!');\n        }\n        gameCompletionCallback();\n      } else {\n        // continue loop\n        this.run(reader, gameCompletionCallback);\n      }\n    });\n  }\n\n  swapTurn() {\n    if (this.currentPlayer === Board.marks[0]) {\n      this.currentPlayer = Board.marks[1];\n    } else {\n      this.currentPlayer = Board.marks[0];\n    }\n  }\n\n  winner() {\n    return this.board.winner();\n  }\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack://tic_tac_toe/./ttt_node/game.js?");

/***/ }),

/***/ "./ttt_node/moveError.js":
/*!*******************************!*\
  !*** ./ttt_node/moveError.js ***!
  \*******************************/
/***/ ((module) => {

eval("const MoveError = function (msg) { this.msg = msg; };\n\n// MoveError really should be a child class of the built in Error object provided\n// by Javascript, but since we haven't covered inheritance yet, we'll just\n// let it be a vanilla Object for now!\n\nmodule.exports = MoveError;\n\n//# sourceURL=webpack://tic_tac_toe/./ttt_node/moveError.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;