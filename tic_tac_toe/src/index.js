// Add your import statements for View and Game here
const Game = require('../ttt_node/game.js');
const View = require('./ttt-view.js');

// newGame.start();



document.addEventListener("DOMContentLoaded", () => {
    const ttt = document.querySelector(".ttt");
    function setupBoard(){
      let ul = document.createElement("ul");
      ttt.appendChild(ul);
      let li = document.createElement("li")
      // ul.appendChild(li)
      for (let i = 0; i < 9; i++) {
        ul.appendChild(li);
      };
      const newGame = new Game();
    };
  // Your code here
});
