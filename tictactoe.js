document.addEventListener("DOMContentLoaded", function() {
  let game = new TicTacToe(10);
  game.startGame();
});


// handle switching turns
// player 1 is x, player 2 is o
// add event listeners to each square
  // on click, check current player and insert x or o into dom

class TicTacToe {
  constructor(gridSize) {
    // buuild grid on the DOM
    this.currentPlayer = 'X';
    this.winCombinations = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
      [1, 4, 7],
      [2, 5, 8],
      [3, 6, 9],
      [1, 5, 9],
      [3, 5, 7]
    ];
  }

  get currentPlayer() {
    return this._currentPlayer;
  }

  set currentPlayer(player) {
    this._currentPlayer = player;
  }

  startGame() {
    this.addClickListeners();
  }

  isGameOver() {
    // query DOM for all squares that have the current player's marker as innerText
    const squares = Array.from(document.getElementsByClassName('square'));
    const currentPlayerSquares = squares.filter(square => square.innerText === this.currentPlayer);
    const x = currentPlayerSquares.map(square => square.dataset.square);
    // create map of all data-square attributes as integers
    // if player has any winCombination, they've won

    // rough idea for finding a win combination:
    combos.find(combo => {
      return combo.every(num => x.includes(num))
    });

      // alert players who won
      // restart game
  }

  handleMove(square) {
    square.innerText = this.currentPlayer;
    this.isGameOver();
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X'
  }

  addClickListeners() {
    // select all squares from page and add listeners
    const squares = Array.from(document.getElementsByClassName('square'));
    squares.forEach(square => {
      square.addEventListener('click', (event) => {
        const square = event.target;
        this.handleMove(square);
      })
    })
  }
}