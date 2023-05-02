// class View {
//   constructor(game, el) {
//     // debugger
//     this.game = game;
//     this.el = el;
//     this.setupBoard();
//     // debugger
//     this.el.addEventListener('click', this.handleClick)
//     this.bindEvents()
//     this.makeMove = this.makeMove.bind(this);
//     this.handleClick = this.handleClick.bind(this);


//   }

//   setupBoard() {
//     // const ttt = document.querySelector(".ttt");
//     let ul = document.createElement("ul");
//     // debugger
//     this.el.appendChild(ul);

//     // ul.appendChild(li)
//     for (let i = 0; i < 3; i++) {
//       for (let j = 0; j < 3; j++) {
//       let li = document.createElement("li");

//       // li.dataset.position = `[${i},${j}]`
//       li.dataset.position = JSON.stringify([i, j]);
//       ul.appendChild(li);
//       // li.appendChild(document.createTextNode([i , j]));
//       };
//     };
//   }
//   bindEvents() {
//     this.el.addEventListener("click", this.handleClick)
//   }
//   handleClick(event) {
//     const ele = event.target; // li datapos 5,2
//     "LI" === ele.nodeName && this.makeMove(ele)

//   }
//   makeMove(square) { // li
//     console.log(square);
//     debugger
//     // this.game.playMove(pos);

//     this.game.currentPlayer = this.game.currentPlayer === "x" ? "o" : "x";


//   }

//   handleGameOver() {

//   }
// }
// module.exports = View;
// // export default View;
class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
    this.makeMove = this.makeMove.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.el.addEventListener('click', this.handleClick);
  }

  setupBoard() {
    let ul = document.createElement("ul");
    this.el.appendChild(ul);

    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        let li = document.createElement("li");
        li.dataset.position = JSON.stringify([i, j]);
        ul.appendChild(li);
      };
    };
  }

  handleClick(event) {
    const ele = event.target;
    if (ele.nodeName === "LI") {
      this.makeMove(ele);
    }
  }

  makeMove(square) {
    // debugger
    console.log(square);

    // debugger
    let pos = square.dataset.position
    this.game.currentPlayer = this.game.currentPlayer === "x" ? "o" : "x";
    this.game.playMove(JSON.parse(pos));

  }

  handleGameOver() {
    // Handle game over logic
  }
}

module.exports = View;
