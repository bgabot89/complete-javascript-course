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

const flight = 'LH234'; //primitive value
const person = {
  name: 'bob ross',
  passport: 1234567890,
};

const checkIn = function (flightNumber, passenger) {
  flightNumber = 'SS333';
  passenger.name = 'Mr. ' + passenger.name; //manipulating object in the memory heap

  if (passenger.passport === 1234567890) {
    // alert('Check in');
    console.log('Check in');
  } else {
    // alert('Wrong Passport');
    console.log('Wrong passport');
  }
};

checkIn(flight, person);
console.log(flight);
console.log(person);

//passing primitive value, creates a copy and stored in memory. Passing in an object, will manipulate the original

const newPassport = function (person) {
  person.passport = Math.round(Math.random() * 10000000);
};

newPassport(person);
checkIn(flight, person);
