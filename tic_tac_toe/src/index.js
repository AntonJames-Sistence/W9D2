// Add your import statements for View and Game here
const Game = require('../ttt_node/game.js');

const View = require('./ttt-view.js');

// newGame.start();



document.addEventListener("DOMContentLoaded", () => {

  const newGame = new Game();
  const ttt = document.querySelector(".ttt");
  // debugger
  const newView = new View(newGame, ttt);
  

  // function setupBoard(){
    
  // };
  // Your code here

  



















});
