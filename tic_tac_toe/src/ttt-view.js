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
    for (let i = 0; i < 9; i++) {
      let li = document.createElement("li");
      ul.appendChild(li);
      li.appendChild(document.createTextNode(i));
    };
  }
  
  handleClick(e) {
  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }
}
module.exports = View;
// export default View;