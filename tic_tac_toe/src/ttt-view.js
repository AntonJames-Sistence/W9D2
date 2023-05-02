class View {
  constructor(game, el) {
    // debugger
    this.game = game;
    this.el = el;
    this.setupBoard();
    // debugger
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
      let pos = [i, j];
      li.dataset.position = [pos]
      ul.appendChild(li);
      // li.appendChild(document.createTextNode([i , j]));
      };
    };
  }

  handleClick(e) {
    this.el.addEventListener('click', (e) => {
      e.preventDefault();
      this.game.protoype.playMove([0,0]);
    })
  }

  makeMove(square) {
    // let element = e.target
    // element.classList.toggle("done")
  }

  handleGameOver() {
  }
}
module.exports = View;
// export default View;
