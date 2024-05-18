'use strict';

//constant variables
const myButton = document.querySelector('.check');
const resetButton = document.querySelector('.again');

//variables (mutable)
let error = document.querySelector('.error');
let secretNumber = document.querySelector('.number');
// let score = document.querySelector('.score');
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//add input listener from box
myButton.addEventListener('click', function () {
  let inputtedNumber = Number(document.querySelector('.guess').value);

  //generates a random number between 1 and 20
  const randomNumber = function (max) {
    let numberSelected = Math.floor(Math.random() * max) + 1;
    if (numberSelected > 0) return numberSelected;
  };

  let randNumb = Number(randomNumber(5));

  //error handlers, checks if input is empty
  if (inputtedNumber === '') {
    displayMessage('Please enter a valid number');
    //error handlers, checks if input is less than 1 or greater than 20
  } else if (inputtedNumber < 1 || inputtedNumber > 5) {
    displayMessage('Please enter a number between 1 and 3');
  } else {
    secretNumber.textContent = randNumb;

    //guessed the right number
    if (inputtedNumber === randNumb && score > 0) {
      console.log(inputtedNumber);
      displayMessage('You guessed the number!');
      score++;
      document.querySelector('.score').textContent = score;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      //
      if (score > highscore) {
        console.log(`highscore is ${highscore} and current score is ${score}`);
        highscore = score;
        document.querySelector('.highscore').textContent = score;
      }
      //guessed the wrong number
    } else if (inputtedNumber !== randNumb && score > 0) {
      if (score > 1) {
        displayMessage(
          inputtedNumber > randNumb
            ? 'Incorrect: Too high'
            : 'Incorrect: Too low'
        );
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('body').style.backgroundColor = '#ff6663';
      } else {
        displayMessage('You lost the game!');
        score = 0;
        document.querySelector('.score').textContent = score;
      }
    }
  }
});

//resets game
resetButton.addEventListener('click', function () {
  displayMessage('Start guessing...');
  secretNumber.textContent = '?';
  document.querySelector('.score').textContent = 20;
});
