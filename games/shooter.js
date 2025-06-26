const container = document.getElementById('game-container');
const scoreDisplay = document.getElementById('score');
const crosshair = document.getElementById('crosshair');
let score = 0;

// Update crosshair position
container.addEventListener('mousemove', (e) => {
  const rect = container.getBoundingClientRect();
  crosshair.style.left = `${e.clientX - rect.left}px`;
  crosshair.style.top = `${e.clientY - rect.top}px`;
});

// Spawn targets
function spawnTarget() {
  const target = document.createElement('div');
  target.classList.add('target');

  const x = Math.random() * (container.clientWidth - 40);
  const y = Math.random() * (container.clientHeight - 40);
  target.style.left = `${x}px`;
  target.style.top = `${y}px`;

  target.addEventListener('click', () => {
    target.remove();
    score++;
    scoreDisplay.textContent = score;
  });

  container.appendChild(target);

  // Remove after 3 seconds if not clicked
  setTimeout(() => {
    if (container.contains(target)) {
      target.remove();
      score = Math.max(0, score - 1);
      scoreDisplay.textContent = score;
    }
  }, 3000);
}

// Keep spawning targets
setInterval(spawnTarget, 1500);
