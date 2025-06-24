function launchGame(gameName) {
  const container = document.getElementById('game-container');
  container.innerHTML = '';

  if (gameName === 'ticTacToe') {
    container.innerHTML = `<iframe src="games/tictactoe.html" width="400" height="400" style="border:none;"></iframe>`;
  } else if (gameName === 'memoryGame') {
    container.innerHTML = `<iframe src="games/memory.html" width="400" height="400" style="border:none;"></iframe>`;
  }
}
