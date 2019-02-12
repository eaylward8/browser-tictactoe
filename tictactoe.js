document.addEventListener("DOMContentLoaded", function() {
  new TicTacToe();
});

class TicTacToe {
  constructor() {
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
    this.addClickListeners();
  }

  get currentPlayer() {
    return this._currentPlayer;
  }

  set currentPlayer(player) {
    this._currentPlayer = player;
  }

  get squares() {
    return Array.from(document.getElementsByClassName('square'));
  }

  get currentPlayerSquares() {
    return this.squares.filter(square => square.innerText === this.currentPlayer)
                       .map(square => parseInt(square.dataset.squareNum));
  }

  handleMove(square) {
    square.innerText = this.currentPlayer;

    if (this.winAchieved()) {
      this.alertAndResetGame(`Player ${this.currentPlayer} wins!`);
    } else if (this.isDraw()) {
      this.alertAndResetGame("It's a draw!");
    } else {
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X'
    }
  }

  async alertAndResetGame(message) {
    await new Promise(resolve => setTimeout(resolve, 200)); // slight pause to allow DOM to update
    alert(message);
    this.resetGame();
  }

  winAchieved() {
    return this.winCombinations.find(combination => {
      return combination.every(num => this.currentPlayerSquares.includes(num))
    });
  }

  isDraw() {
    return this.squares.every(square => square.innerText);
  }

  resetGame() {
    this.currentPlayer = 'X';
    this.squares.forEach(square => square.innerText = '');
  }

  addClickListeners() {
    this.squares.forEach(square => {
      square.addEventListener('click', (event) => {
        const square = event.target;
        // handle move only if square is empty
        if (!square.innerText) this.handleMove(square);
      })
    })
  }
}