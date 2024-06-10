'use strict';

// console.log(firstName);

// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     const output = `${firstName} is ${age}, born in ${birthYear}`;
//     console.log(output);

//     if (birthYear >= 1981 && birthYear <= 1998) {
//       var millenial = true;
//       const firstName = 'Steven';
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);

//       function add(a, b) {
//         return a + b;
//       }
//     }
//     console.log(millenial);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Jonas';
// calcAge('1991');

// console.log(me);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// console.log(job);
// console.log(year);

// console.log(add(2, 3));

// function add(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// console.log(addExpr(2, 5));
// console.log(addArrow(2, 7));

// const calcAge = function (birthYear) {
//   console.log(2033 - birthYear);
//   console.log(this);
// };

// calcAge(1991);

// const calcAge = birthYear => {
//   console.log(2033 - birthYear); //arrow function does not get a this, uses lexical this parent scope
// };

// calcAge(1991);

const person = {
  firstName: 'Some Guy',
  year: 1990,
  calcAge: function () {
    //Solution 1
    // console.log(2037 - this.year);
    // const self = this;
    // console.log(self);
    // const isMillenial = function () {
    //   console.log(self.year >= 1988 && self.year <= 1996);
    // };
    // isMillenial();

    //Solution 2
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1980 && this.year <= 1996);
    };
    isMillenial();
  },

  // greet: () => {
  //   console.log(`${self.firstName}`);
  // },
};

person.calcAge();

// const matilda = {
//   year: 2008,
// };

// matilda.calcAge = person.calcAge;

// console.log(matilda.calcAge());

// const f = person.calcAge;
// console.log(f);

// const addExpr = function (a, b) {
//   console.log(arguments);
//   let sum = 0;
//   for (let i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// };

// // addExpr(2, 5);
// console.log(addExpr(2, 5, 10, 12));

// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 5);
