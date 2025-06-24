function launchGame(gameName) {
  const container = document.getElementById('game-container');
  container.innerHTML = ''; // Clear previous game

  if (gameName === 'ticTacToe') {
    createTicTacToe(container);
  }
}

function createTicTacToe(container) {
  let currentPlayer = 'X';
  let board = Array(3).fill(null).map(() => Array(3).fill(''));
  let status = document.createElement('div');
  status.id = 'status';
  status.textContent = `Player ${currentPlayer}'s turn`;
  container.appendChild

