'use strict';
//THIS CODE NEEDS REFACTORING LOL. But.... it works for now lol

let secretNum = Math.floor(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNum;
let score = 20;
let highscore = 0;

var btn = document.querySelector('.check');

btn.addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'no number!';
  }
  //when player wins
  else if (guess === secretNum) {
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.message').textContent = 'Correct number!!!';
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
  }
  //if guess is too high
  else if (guess > secretNum) {
    if (score > 0) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent =
        'Too high!! Guess a lower number';
    } else {
      document.querySelector('body').style.backgroundColor = 'red';
      document.querySelector('.number').style.width = '60rem';
      document.querySelector(
        '.number'
      ).textContent = `correct num was ${secretNum}`;
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'YOU LOSE!';
    }
    //guess too low
  } else if (guess < secretNum) {
    if (score > 0) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'Too low!!Guess lower';
    } else {
      document.querySelector('.score').textContent = 0;
      document.querySelector('.message').textContent = 'YOU LOSE!';
    }
  }
});

var again = document.querySelector('.again');

again.addEventListener('click', function () {
  score = 20;
  secretNum = Math.floor(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
