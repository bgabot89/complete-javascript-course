'use strict';

//rules of pig

//a player rolls a dice against another player, the first to 100 pts wins
//a player can roll the dice as many times as they want
//the hold function allows the player to hold their points and end the round
//if a player rolls a one, that player loses all their points and the round ends

//player windows
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

//having the total score be zero by default
let score0 = document.querySelector('#score--0');
let score1 = document.querySelector('#score--1');
score0.textContent = 0;
score1.textContent = 0;

//display the dice, hidden by default
let diceDisplay = document.querySelector('.dice');
diceDisplay.classList.add('hidden');

//holds the currentScore
let currentScore = 0;

//current score for each player
let scores = [0, 0];
let activePlayer = 0;
let current0El = document.querySelector('#current--0');
let current1El = document.querySelector('#current--1');

///buttons
const diceRollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');
const newGameButton = document.querySelector('.btn--new');

//toggles player and determines if there is a winner
const togglePlayer = function () {
  if (currentScore >= 100) {
    console.log('reached 100');
    activePlayer === 0
      ? player0El.classList.toggle('player--winner')
      : player1El.classList.toggle('player--winner');
    activePlayer = null;
  } else {
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
};

//when clicking on the dice roll button, roll the dice
diceRollButton.addEventListener('click', function () {
  if (activePlayer != null) {
    //show the dice
    diceDisplay.classList.remove('hidden');
    //generate and display dice to have a random number between 1 and 6
    let diceResult = Math.floor(Math.random() * 6) + 1;
    diceDisplay.src = `dice-${diceResult}.png`;
    if (diceResult !== 1) {
      //if dice is not one, add to current score
      currentScore += diceResult;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //if dice is one, round ends
      console.log('rolled a one, round ends');
      //reset the current score
      activePlayer === 0 ? scores[0] : scores[1];
      //if player 1, switch to player 2 and vice versa
      togglePlayer();
    }
  }
});

//when clicking on the hold button, hold the current score and end the round
holdButton.addEventListener('click', function () {
  if (activePlayer != null) {
    //store the current score depending on the activePlayer
    activePlayer === 0
      ? scores.splice(0, 1, (currentScore += scores[0]))
      : scores.splice(1, 1, (currentScore += scores[1]));
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //resets current score
    current0El.textContent = 0;
    current1El.textContent = 0;
    //switches activePlayer
    togglePlayer();
  }
});

//resets the game state
newGameButton.addEventListener('click', function () {
  //have dice disappear
  diceDisplay.classList.add('hidden');
  //reset back to player 1
  activePlayer = 0;
  //resets style back to player 1
  player0El.classList.add('player--active');
  player1El.classList.remove('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  //reset score
  scores = [0, 0];
  currentScore = 0;
  //manipulate dom to show reset data
  current0El.textContent = 0;
  console.log(current0El);
  current1El.textContent = 0;
  score0.textContent = 0;
  score1.textContent = 0;
});
