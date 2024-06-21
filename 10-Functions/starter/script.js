'use strict';

// const bookings = [];

// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   price = 129 * numPassengers
// ) {
//   //ES5 method
//   //   numPassengers = numPassengers || 1;
//   //   price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 100);
// createBooking('LH123', 3);
// createBooking('LH123', undefined, 100);

//////*Values vs References*////

// const flight = 'LH234'; //primitive value
// const person = {
//   name: 'bob ross',
//   passport: 1234567890,
// };

// const checkIn = function (flightNumber, passenger) {
//   flightNumber = 'SS333';
//   passenger.name = 'Mr. ' + passenger.name; //manipulating object in the memory heap

//   if (passenger.passport === 1234567890) {
//     // alert('Check in');
//     console.log('Check in');
//   } else {
//     // alert('Wrong Passport');
//     console.log('Wrong passport');
//   }
// };

// checkIn(flight, person);
// console.log(flight);
// console.log(person);

// //passing primitive value, creates a copy and stored in memory. Passing in an object, will manipulate the original

// const newPassport = function (person) {
//   person.passport = Math.round(Math.random() * 10000000);
// };

// newPassport(person);
// checkIn(flight, person);

//////*Accepting Callback Functions*////

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //Higher order function, since it takes in another function
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);

//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('kS is the best', upperFirstWord);

// transformer('JS is the best', oneWord);

// //JS uses callbacks all the time
// const high5 = function () {
//   console.log('👍');
// };

// document.body.addEventListener('click', high5);

// ['lei', 'bob', 'thomas'].forEach(high5);

//callbacks are useful because makes easy to split up code and resuable. Allows to create obstruction: hide details of some code implementation

//////*Functions returning Functions*////

// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');

// greeterHey('Jonas');

// greet('hi')('bob');

//arrow function method

// const greet = greeting => name => console.log(`${greeting} ${name}`);

// // greet('hello', 'bob');

// greet('hi')('bob');

//////*Call and Apply Method*////

// const zipair = {
//   airline: 'zipAir',
//   iataCode: 'ZP',
//   bookings: [],
//   book: function (flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode} ${flightNum}`, name });
//   },
// };

// zipair.book(1234, 'Brian Gabot');
// zipair.book(2345, 'Rob Schneider');
// console.log(zipair);

// const unitedair = {
//   airline: 'United Airline',
//   iataCode: 'UN',
//   bookings: [],
// };

// const book = zipair.book;
// //Does not work
// // book(23, 'Sarah Williamns');

// //CALL METHOD

// book.call(unitedair, 23, 'Sarah Williams');
// console.log(unitedair);

// book.call(zipair, 238, 'Mary Blige');

// const swiss = {
//   airline: 'Swiss Air Lines',
//   iataCode: 'LX',
//   bookings: [],
// };

// book.call(swiss, 238, 'Tom Boos');

// //APPLY method, not used a lot in modern JS
// const flightData = [582, 'George Coopeer'];
// book.apply(swiss, flightData);

// //call method, used more often
// book.call(swiss, ...flightData);
// console.log(swiss);

// //////*BIND Method, manually set this keyword for any function called. Returns a new function with new this*////

// const bookUnited = book.bind(unitedair);
// const bookJP = book.bind(zipair);
// const bookLX = book.bind(swiss);

// bookUnited(23, 'Steven Williams');

// const bookEW23 = book.bind(unitedair, 23);
// bookEW23('Jonas BB');
// bookEW23('Martha Cooper');

// //With Event Listeners
// zipair.planes = 300;
// zipair.buyPlane = function () {
//   this.planes++;
//   console.log(this.planes);
// };

// const buyButton = document.querySelector('.buy');
// buyButton.addEventListener('click', zipair.buyPlane.bind(zipair));

// //Partial application

// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// // addVAT = value => value + value *0.23;

// console.log(addVAT(100));

// const addTaxRate = function (rate) {
//   return function (value) {
//     return value + value * rate;
//   };
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));

// //////*Immediately Invoked Functions*////

const runOnce = function () {
  console.log('Run once and then never again');
};

runOnce();

// IIFE
(function () {
  console.log('This will never run again');
})();

(() => console.log('This will also never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}

// console.log(isPrivate);
console.log(notPrivate);

////////*Closure Functions*////

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

//closures remembers all the variables that existed, at the functions birthplace
//A function has access to the variable environment (VE) of the execution context in which it was created, even after execution context is gone
/*A closure is the closed-over variable environment of the execution context in which a function was created, even after that 
execution context is gone.

/*A closure gives a function access to all the variables of its parent function, even after that parent function has returned.
The function keeps a reference to its outer scope, which preserves the scope chain throughout time.*/

/*A closure makes sure that a function doesn't loose connection to variables that existed at the functions birthplace*/

//Example 1
let f;

const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

//Re assigning  f function
const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 3);
  };
};

g();
f();

//Re-assigning f function
h();
f();
console.dir(f);

//Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;

boardPassengers(180, 3);
