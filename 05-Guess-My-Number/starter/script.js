'use strict';

//constant variables
const myButton = document.querySelector('.check');
const textField = document.querySelector('.guess');
const resetButton = document.querySelector('.again');

//variables (mutable)
let error = document.querySelector('.error');
let message = document.querySelector('.message');
let guessedNumber = document.querySelector('.number');
let score = document.querySelector('.label-score');

//add input listener from box
myButton.addEventListener('click', function () {
  //generates a random number between 1 and 20
  const randomNumber = function (max) {
    let numberSelected = Math.floor(Math.random() * max) + 1;
    if (numberSelected > 0) return numberSelected;
  };
  //error handlers, checks if input is empty
  if (textField.value === '') {
    message.textContent = 'Please enter a valid number';
    //error handlers, checks if input is less than 1 or greater than 20
  } else if (textField.value < 1 || textField.value > 3) {
    message.textContent = 'Please enter a number between 1 and 3';
  } else {
    let randNumb = randomNumber(3);
    console.log(randNumb);
    // console.log(
    //   `You guessed ${textField.value}, number generated was ${randNumb}`
    // );
    guessedNumber.textContent = Number(randNumb);
    if (Number(textField.value) === randNumb) {
      message.textContent = 'You guessed the number!';
      //   score.textContent = Number(score.textContent) + 1;
    } else if (Number(textField.value) !== randNumb) {
      message.textContent = 'Please try again';
    }
  }
});

//resets game
resetButton.addEventListener('click', function () {
  message.textContent = 'Start guessing...';
  guessedNumber.textContent = '?';
});
