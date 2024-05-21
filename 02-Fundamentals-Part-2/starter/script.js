"use strict"; //secure mode

// let hasDriversLicense = true;

// const passTest = true;

// // if (passTest) hasDriversLicense = true;

// if (hasDriversLicense) console.log("true");

// function fruitProcessor(oranges, raspberries) {
//   let juice = `Juice with ${oranges} oranges and ${raspberries} raspberries.`;
//   return juice;
// }

// const fruitProcessor = (oranges, raspberries) => {
//   return `Juice with ${oranges} oranges and ${raspberries} raspberries`;
// };

// const output = fruitProcessor(5, 10);

// console.log(output);

// function calcAge1(birthYear) {
//   //function declaration
//   const age = 2037 - birthYear;
//   return age;
// }

// const age1 = calcAge1(1991);

// const calcAge = function (birthYear) {
//   //function expression, function without a name
//   return 2037 - birthYear;
// };

// const age2 = calcAge(1991);

// console.log(age1, age2);

// const calcAge = (birthYear) => 2037 - birthYear;

// const age3 = calcAge(1991);
// console.log(age3);

// const collegeParams = (fullname, age, enrollmentYear) => {
//   return `${fullname} is ${age} and ${enrollmentYear} is the enrollment year.`;
// };

// const collegeInfo1 = collegeParams("John", 25, 2020);

// console.log(collegeInfo1);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   if (retirement > 0) {
//     return `${firstName} retires in approximately ${retirement} years.`;
//   } else {
//     return "Is already at retirement age.";
//   }
// };

// console.log(yearsUntilRetirement(1968, "Bob"));

// function sliceFruits(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(oranges, raspberries) {
//   const orangePieces = sliceFruits(oranges);
//   const raspberriesPieces = sliceFruits(raspberries);
//   let juice = `Juice with ${orangePieces} oranges and ${raspberriesPieces} raspberries.`;
//   return juice;
// }

// console.log(fruitProcessor(5, 10));

// let friends = ["Michael", "Steven", "Peter"];

// friends[2] = "Jay";

// const friendSearch = function (friends) {
//   for (let i = 0; i < friends.length; i++) {
//     if (friends[i] === "Peter") {
//       return friends[i];
//     } else {
//       return "Not found";
//     }
//   }
// };

// console.log(friendSearch(friends));

// const years = new Array(1991, 1992, 1993);

// console.log(years);

// const friends = ["Michael", "Steven", "Peter"];

// //Add Elements
// const newLength = friends.push("Jay");

// console.log(newLength);

// friends.unshift("John");

// //Remove Elements
// friends.pop(); // Last element removed

// console.log(friends);

// // console.log(friends.indexOf("Steven"));

// // console.log(friends.includes("Steven"));

// const person = {
//   firstName: "Brian",
//   lastName: "Gabot",
//   birthYear: 1989,
//   foodsEaten: ["pizza", "fries", "burger"],
//   hasDriversLicense: true,

//   calcAge: function () {
//     this.age = 2024 - this.birthYear;
//     return this.age;
//   },

//   getSummary: function () {
//     return `${this.firstName} is ${this.calcAge()} years old, and ${
//       this.hasDriversLicense
//         ? "has a drivers license"
//         : "does not have a drivers license"
//     }`;
//   },
// };

// console.log(person.getSummary());

// console.log(person.foodsEaten);
// console.log(person["lastName"]);

// const nameKey = "Name";
// console.log(person["first" + nameKey]);

// const interestedIn = prompt(
//   "What do you want to know about me? firstName, lastName, age, foodsEaten"
// );
// console.log(person[interestedIn]);

// if (person[interestedIn]) {
//   console.log(person[interestedIn]);
// } else {
//   console.log("Invalid");
// }

//Brian has eaten 3 foods, and his favorite food is pizza.
// console.log(
//   `${person.firstName} has eaten ${person.foodsEaten.length} foods, and his favorite food is ${person.foodsEaten[0]}`
// );

// for (let i = 1; i <= 10; i++) {
//   console.log(`increment by ${i}`);
// }

// const years = [1991, 1992, 1993, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2037 - years[i]);
//     console.log(ages);
// }

//continue and break;
//only strings
// const person = ["Brian", "Gabot", 1989, ["pizza", "fries", "burger"]];
// const newPerson = [];

// for (let i = 0; i < person.length; i++) {
//   if (typeof person[i] !== "string") continue;
//   console.log(person[i], typeof person[i]);
// }

// //break with number

// for (let i = 0; i < person.length; i++) {
//   if (typeof person[i] !== "number") break;
//   console.log(person[i], typeof person[i]);
// }

const person = ["Brian", "Gabot", 1989, ["pizza", "fries", "burger"]];

// for (let i = person.length - 1; i >= 0; i--) {
//   console.log(person[i], typeof person[i]);
// }

// for (let exercise = 1; exercise <= 10; exercise++) {
//   console.log(`Starting exercise ${exercise}`);

//   //   for (let rep = 1; rep < 6; rep++) {
//   //     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
//   //   }
//   let rep = 1;
//   while (rep <= 10) {
//     console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
//     rep++;
//   }
// }

let dice = Math.round(Math.random() * 6) + 1;

while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.round(Math.random() * 6);
  if (dice === 6) {
    console.log("Loop is about to end");
  }
}
