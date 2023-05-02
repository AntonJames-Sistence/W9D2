class View {
  constructor(game, el) {
    // debugger
    this.game = game;
    this.el = el;
    this.setupBoard();
    // debugger
    this.el.addEventListener('click', this.handleClick)

  }

  setupBoard() {
    // const ttt = document.querySelector(".ttt");
    let ul = document.createElement("ul");
    // debugger
    this.el.appendChild(ul);

    // ul.appendChild(li)
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
      let li = document.createElement("li");
      
      // li.dataset.position = `[${i},${j}]`
      li.dataset.position = JSON.stringify([i, j]);
      ul.appendChild(li);
      // li.appendChild(document.createTextNode([i , j]));
      };
    };
  }

  handleClick(event) {
    const ele = event.target; // li datapos 5,2
    makeMove(ele);
  }

  makeMove(square) { // li
    // let element = e.target
    // element.classList.toggle("done")
    this.game.playMove(pos);
  }

  handleGameOver() {
  }
}
module.exports = View;
// export default View;


