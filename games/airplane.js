const gameArea = document.getElementById('game-area');
const player = document.getElementById('player');
const scoreDisplay = document.getElementById('score');

let playerX = 180;
let score = 0;
let gameOver = false;

// Move player
document.addEventListener('keydown', (e) => {
  if (gameOver) return;
  if (e.key === 'ArrowLeft') {
    playerX = Math.max(0, playerX - 20);
  } else if (e.key === 'ArrowRight') {
    playerX = Math.min(gameArea.clientWidth - 40, playerX + 20);
  }
  player.style.left = playerX + 'px';
});

// Spawn enemies
function spawnEnemy() {
  const enemy = document.createElement('div');
  enemy.classList.add('enemy');
  enemy.style.left = Math.floor(Math.random() * (gameArea.clientWidth - 40)) + 'px';
  gameArea.appendChild(enemy);

  let enemyY = -40;
  const fallSpeed = 4;

  const moveEnemy = setInterval(() => {
    if (gameOver) {
      clearInterval(moveEnemy);
      return;
    }

    enemyY += fallSpeed;
    enemy.style.top = enemyY + 'px';

    // Collision check
    const enemyRect = enemy.getBoundingClientRect();
    const playerRect = player.getBoundingClientRect();

    if (
      enemyRect.bottom > playerRect.top &&
      enemyRect.top < playerRect.bottom &&
      enemyRect.left < playerRect.right &&
      enemyRect.right > playerRect.left
    ) {
      clearInterval(moveEnemy);
      gameArea.innerHTML = '<h2>💥 Game Over</h2>';
      gameOver = true;
    }

    if (enemyY > gameArea.clientHeight) {
      clearInterval(moveEnemy);
      enemy.remove();
    }
  }, 30);
}

// Update score
function updateScore() {
  if (gameOver) return;
  score++;
  scoreDisplay.textContent = score;
}

setInterval(spawnEnemy, 1000);
setInterval(updateScore, 500);
