'use strict';
document.querySelector('h1').style.backgroundColor = 'red';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

//flight

//creates a new method that passes a string and extracts first 3 chars and then converts to upper case
const getCode = str => str.slice(0, 3).toUpperCase();

for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_Delayed') ? '🔴' : ''} ${type.replaceAll(
    '_',
    ' '
  )} from ${getCode(from)} to ${getCode(to)} (${time.replace(
    ':',
    'h'
  )})`.padStart(36);
  console.log(output);
}

// `Delayed ${Arrival/Departure} from {airportDepart} to {airportArrival} (11h25)`

//weekdays

const weekDays = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

const openingHours = {
  [weekDays[3]]: {
    open: 12,
    close: 22,
  },
  [weekDays[4]]: {
    open: 11,
    close: 23,
  },
  [`${weekDays[2 + 4]}`]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //ES6 enhanced object literals
  openingHours,

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order Received ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} and ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 0,
  starterIndex: 2,
});

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
});

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// console.log(...arr);

// let [main, , second] = restaurant.categories;

// const temp = main;
// main = second;
// second = temp;
// console.log(main, second);

//deconstructing
// [main, second] = [second, main];
// console.log(main, second);

// //receive two values from a function
// const [starter, mainCourse] = restaurant.order(0, 2);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// // console.log(i, j);

// const [i, o, [j, k]] = nested;

// //Default values
// const [p, q = 9, r = 2] = [9, 8];
// console.log(p, q, r);

//destruct object
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;

// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starters = [] } = restaurant;

// console.log(menu, starters);

// //mutating variables
// let a = 111;
// let b = 999;

// const obj = { a: 23, b: 7, c: 14 };

// ({ a, b } = obj);

// console.log(a, b);

// //nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);

// const arr = [7, 8, 9];

// const goodNewArr = [1, 2, ...arr];

// console.log(goodNewArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //copyArray
// const mainMenuCopy = [...restaurant.mainMenu];

// //join two array
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// console.log(menu);

// //Iterables are arrays, strings, maps, sets. NOT objects
// const str = 'Jones';
// const letters = [...str, ' ', 'S.'];

// console.log(letters);
// console.log(...str);

//Real World Example

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];

// restaurant.orderPasta(...ingredients);

//Objects
// const newRestaurant = { ...restaurant, founder: 'Guy', foundingYear: 1999 };

// console.log(newRestaurant);

// let restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristoma';

// console.log(restaurantCopy.name);

// console.log(restaurant.name);

// 1 Destructuring

//spread, because on RIGHT side of =
// const diffArr = [1, 2, ...[3, 4]];

// //REST, because on LEFT side of
// const [a, b, ...others] = [1, 2, 3, 4, 5];

// // console.log(others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];

// console.log(pizza, risotto, ...otherFood);

// //Objects
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// //2 Functions
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//     console.log(sum);
//   }
// };

// // add(3, 4, 5, 6);

// const x = [33, 4, 12];
// add(...x);

// restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');

//SPREAD operator used for values, REST is where we put variable names, separate by commas

/*
////////////
//OR and AND OPERATORS
*/

//USE ANY data type, return ANY data type, short circuiting
// console.log('' || 'Jonas');

// // restaurant.numGuests = 2;
// const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
// console.log(guests1);

// const guests2 = restaurant.numGuests || 10;
// console.log(guests2);

// //// AND OPERATOR
// console.log(2 && 'Jonas' && 'tee');

//Practical Example
// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

//calls function if restaurant order Pizza exists
// restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach', 'soup');

///Null Coalescing Operator, Nullish values: null and undefined (Not 0 or '')
// restaurant.numGuests = '';
// const guests = restaurant.numGuests || 10;
// console.log(guests);

// const guestCorrect = restaurant.numGuests ?? 10;
// console.log(guestCorrect);

///OR Assignment Operator
// const rest1 = {
//   name: 'Capri',
//   numGuests: 0,
// };

// const rest2 = {
//   name: 'La Piazza',
//   owner: 'Giorno Giorvanna',
// };

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

//same as above commented out, OR equals
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// //nullish or
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

// rest1.owner = rest1.owner && '<ANONYMOUS>';
// rest2.owner = rest2.owner && '<ANONYMOUS>?';

// rest1.owner &&= '<ANONYMOUS>?';
// rest2.owner &&= '<ANONYMOUS>?';

// console.log(rest1);
// console.log(rest2);

////////* Do For loop*//////

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// for (const item of menu) console.log(item);

// for (const item of menu.entries()) {
//   console.log(item);
//   // console.log(`${item[0] + 1}: ${item[1]}`);
// }

// for (const [i, el] of menu.entries()) {
//   console.log(`${i}: ${el}`);
// }

// console.log([...menu.entries()]);

/*
//Optional Chaining - if a certain prop doesnt exist, undefined is returned immediately
*/

// if (restaurant.openingHours && restaurant.openingHours.mon)
//   console.log(restaurant.openingHours.mon.open);

// //WITH OPTIONAL CHAINING
// console.log(restaurant.openingHours.mon?.open);
// console.log(restaurant.openingHours?.mon?.open);

// //Example
// const days = ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'];

// for (const day of days) {
//   console.log(day);
//   const open = restaurant.openingHours[day]?.open ?? 'closed';
//   console.log(`On ${day}, we open at ${open}`);
// }

// //METHODS
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// //Arrays
// const users = [
//   { name: 'Jonas', email: 'hello@jonas.io' },
//   { name: 'Bob', email: 'bob@jonas.io' },
// ];

// console.log(users[1]?.name ?? 'user does not exist');

// if (users.length > 0) console.log(users[0].name);
// else console.log("user doesn't exist");

////////* Looping Objects/Iterables, property names and values*//////

//Property NAMES
// const properties = Object.keys(openingHours);
// // const properties = openingHours;
// console.log(properties);

// let openStr = `We are open on ${properties.length} days: `;
// for (const day of properties) {
//   openStr += `${day}, `;
// }

// console.log(openStr);

// //Property VALUES

// const values = Object.values(openingHours);
// console.log(values);

// //Entire object => turns object into array
// const entries = Object.entries(openingHours);
// console.log(entries);

// for (const [key, { open, close }] of entries) {
//   console.log(`On ${key} we open at ${open} and close at ${close}`);
// }

////////////* Sets: used to sort them in order or remove duplicates*////////////
// const ordersSet = new Set([
//   'Pasta',
//   'Pizza',
//   'Pizza',
//   'Risotto',
//   'Pasta',
//   'Pizza',
// ]);

// console.log(new Set('Jonas'));

// console.log(ordersSet.size);
// console.log(ordersSet.has('Pizza'));
// console.log(ordersSet.has('Ravioli'));
// ordersSet.add('Garlic Bread');
// ordersSet.add('Garlic Bread');

// ordersSet.delete('Risotto');
// // ordersSet.clear();
// console.log(ordersSet);

// for (const order of ordersSet) console.log(order);

// //Example
// const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// const staffSet = [...new Set(staff)];
// console.log(staffSet);
// console.log(new Set(staff).size);

// console.log(new Set('tupac shakur').size);

/////////////* Maps */////////////
// const rest = new Map();
// rest.set('name', 'Classico Italiano');
// rest.set(1, 'Firenze, Italy');
// rest.set(2, 'Lisbon, Portugal');

// rest
//   .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('open', 11)
//   .set('close', 23)
//   .set(true, 'We are open')
//   .set(false, 'We are closed');

// console.log(rest);
// console.log(rest.get('name'));
// console.log(rest.get(true));

// const time = 21;
// console.log(rest.get(time > rest.get('open') && time < rest.get('close')));

// console.log(rest.has('categories'));
// rest.delete(2);
// // rest.clear();
// const arr = [1, 2];
// rest.set(arr, 'Test');
// rest.set(document.querySelector('h1'), 'Heading');

// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

// /////* Maps Iteration*////////

// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'Javascript'],
//   ['correct', 3],
//   [true, 'Correct'],
//   [false, 'Incorrect, try again'],
// ]);

// //Convert object to map
// console.log(question);
// const hoursMap = new Map(Object.entries(openingHours));

// console.log(hoursMap);

// //Quiz app
// console.log(question.get('question'));

// for (const [key, value] of question) {
//   if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// }

// const answer = Number(prompt('Your answer'));
// console.log(answer);

// console.log(question.get(question.get('correct') === answer));

// //Convert to map to array
// console.log([...question]);
// console.log(question.entries());
// console.log(...question.keys());
// console.log(question.values());

/////**Working with strings */

const airline = 'TAP Air Portugal';
const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log('B737'.length);

// console.log(airline.indexOf('r'));

// console.log(airline.lastIndexOf('r'));

// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4, 7));

// console.log(airline.slice(0, airline.indexOf(' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));

// console.log(airline.slice(-2));

// console.log(airline.slice(1, -1));

// const checkMiddleSeat = function (seat) {
//   //B and E are Middle Seats
//   const s = seat.slice(-1);
//   if (s === 'B' || s === 'E') {
//     console.log('middle seat');
//   } else {
//     console.log('lucky');
//   }
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E');

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// //fix capitalization in name
// const passenger = 'jOnAs';
// const passengerLower = passenger.toLowerCase();
// const passengerCorrect =
//   passengerLower[0].toUpperCase() + passengerLower.slice(1);

// console.log(passengerCorrect);

// //comparing emails
// const email = 'hello@jonas.io';
// const loginEmail = ' Hello@Jonas.Io \n';

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();

// console.log(normalizedEmail);
// console.log(email === normalizedEmail);

// //replacing
// const priceGB = '288,97£';
// const priceUS = priceGB.slice(0, -1).replace(',', '.');
// console.log('$' + priceUS);

// const announcement =
//   'All passengers come to boarding door 23. Boarding door 23!';

// console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replaceAll('door', 'gate'));

// console.log(announcement.replace('/door/g', 'gate'));

// const newPlane = 'A230neo';
// console.log(newPlane.includes('A230'));
// console.log(newPlane.includes('Boeing'));

// //Booleans
// const otherPlane = 'Airbus A320neo';
// console.log(otherPlane.includes('A320'));
// console.log(otherPlane.includes('Boeing'));
// console.log(otherPlane.includes('Aib'));

// if (otherPlane.startsWith('Airbus') && otherPlane.endsWith('neo')) {
//   console.log('Part of the new Airbus family');
// }

// //Practice exercise
// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes('knife') || baggage.includes('gun')) {
//     console.log('Arrest this guy');
//   } else {
//     console.log('Ok to board');
//   }
// };

// checkBaggage('I have a laptop, some Food and a pocket knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');

// //split and join
// console.log('a+very+nice+string'.split('+'));

// console.log('Jonas Schedtmann'.split(' '));

// const [firstName, lastName] = 'Jonas Schedtmann'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');

// console.log(newName);

// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];
//   // console.log(names);
//   for (const n of names) {
//     namesUpper.push(n[0].toUpperCase() + n.slice(1));
//   }
//   console.log(namesUpper.join(' '));
// };

// capitalizeName('jessica ann smith davis');
// capitalizeName('bobby james');

// //Padding
// const message = 'Go to gate 23';
// console.log(message.padStart(25, '+').padEnd(35, '+'));
// console.log('Jonas'.padStart(25, '+'));

// //credit card example
// const maskCreditCard = function (number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*');
// };

// console.log(maskCreditCard(1234513456789));

// //Repeat
// const message2 = 'Bad weather... All Departures Delayed...';

// console.log(message2.repeat(3));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line${'✈️'.repeat(n)}`);
// };

// planesInLine(2);
// planesInLine(10);
