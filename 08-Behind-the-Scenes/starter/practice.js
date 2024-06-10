'use strict';

// let age = 30;
// let oldAge = age;
// age = 31;

// console.log(age);
// console.log(oldAge);

// const me = {
//   name: 'Brad',
//   age: 30,
// };

// const friend = me;
// friend.age = 27;
// console.log('Friend:', friend);
// console.log('Me', me);

//primitive types
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//reference types
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;

marriedJessica.lastName = 'Davis';

console.log('Before marriage:', jessica);
console.log('After marriage: ', marriedJessica);

//Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  pets: ['Cliff the Dog', 'Blinky the Cat'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.pets.push('Flippy the Fish');

console.log('Before marriage:', jessica2);
console.log('After marriage: ', jessicaCopy);
