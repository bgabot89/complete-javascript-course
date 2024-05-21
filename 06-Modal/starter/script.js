'use strict';

const modal = document.querySelector('.modal');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const btnClosemodal = document.querySelector('.close-modal');
const buttons = document.querySelectorAll('.show-modal');

// console.log(buttons);

function openModal() {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeModal() {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < buttons.length; i++) {
  console.log(buttons[i]);
  buttons[i].addEventListener('click', function () {
    openModal();
  });
}

//close modal when clicking on the x button or pressing escape
btnClosemodal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

//close modal when clicking on escape
window.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
