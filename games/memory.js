const emojis = ['🍎', '🍌', '🍇', '🍓', '🍒', '🍍', '🥝', '🍉'];
let cards = [];
let flipped = [];
let matchedCount = 0;

function shuffle(array) {
  return array.sort(() => 0.5 - Math.random());
}

function startGame() {
  const board = document.getElementById('game-board');
  board.innerHTML = '';
  matchedCount = 0;
  flipped = [];

  const shuffled = shuffle([...emojis, ...emojis]);
  cards = shuffled.map((emoji, index) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.emoji = emoji;
    card.dataset.index = index;
    card.textContent = emoji;

    card.addEventListener('click', () => flipCard(card));
    board.appendChild(card);
    return card;
  });
}

function flipCard(card) {
  if (flipped.length >= 2 || card.classList.contains('flipped') || card.classList.contains('matched')) {
    return;
  }

  card.classList.add('flipped');
  flipped.push(card);

  if (flipped.length === 2) {
    const [first, second] = flipped;
    if (first.dataset.emoji === second.dataset.emoji) {
      first.classList.add('matched');
      second.classList.add('matched');
      matchedCount += 2;
      flipped = [];

      if (matchedCount === cards.length) {
        setTimeout(() => alert('🎉 You won!'), 200);
      }
    } else {
      setTimeout(() => {
        first.classList.remove('flipped');
        second.classList.remove('flipped');
        flipped = [];
      }, 1000);
    }
  }
}

window.onload = startGame;
