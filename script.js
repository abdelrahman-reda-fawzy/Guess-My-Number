'use strict';

const random = Math.trunc(Math.random() * 20) + 1;

let score = 20,
  highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess && document.querySelector('.number').textContent != random) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (
    guess < random &&
    document.querySelector('.number').textContent != random
  ) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').textContent = random;
    }
  } else if (
    guess > random &&
    document.querySelector('.number').textContent != random
  ) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').textContent = random;
    }
  } else {
    if (score > 1) {
      document.querySelector('.message').textContent = '🎉 Correct Number!';

      document.querySelector('body').style.backgroundColor = '#60b347';

      document.querySelector('.number').textContent = random;

      if (score > highscore) {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
      }
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.highscore').textContent = '0';
  document.querySelector('body').style.backgroundColor = '#222';
  random = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  highscore = 0;
});
