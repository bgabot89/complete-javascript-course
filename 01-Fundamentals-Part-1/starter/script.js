// let js = "amazing";

// console.log(40 + 8 + 23 - 10);

// if (js === "amazing") {
//   console.log("JavaScript is FUN!");
// }

// const now = 2037;
// const ageJonas = now - 1991;
// const ageSarah = now - 2018;

// averageAge = (ageJonas + ageSarah) / 2;

// console.log(averageAge);

// const fullAge = ageSarah >= 18;

// console.log(fullAge);

// let x = 10 + 5; // 15
// x += 5; //20
// x *= 4; //80
// console.log(x);

// const compare = function (age, now) {
//   let ageDiff = now - age;
//   if (ageDiff > 18) {
//     console.log(ageDiff);
//     return ageDiff + " is older than 18";
//   }
// };

// compare(1991, 2037);

// const firstName = "Jane";
// const lastName = "Doe";
// const birthYear = 1991;
// const year = 2016;
// const job = "student";

// const jonas = `I'm ${firstName}, a ${year - birthYear} years old ${job}.`;

// console.log(jonas);

// console.log(
//   "String with \n\
// multiple \n\
// lines"
// );

// console.log(`String
// multiple
// lines`);

// const age = 14;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log("Sarah can start driving license 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 2012;
// let century;

// if (birthYear <= 2000) {
//   century = 20;
// } else {
//   century = 21;
// }
// console.log(century);

// const inputYear = "1991";

// console.log(Number(inputYear) + 18); //converts string to number

// console.log(String(23), 23); //converts number to string

//5 falsy values: false, 0, empty string, null, undefined, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));

// const money = 10;
// if (money) {
//   console.log("Don't spend it all!");
// } else {
//   console.log("You should get a job!");
// }

// const favorite = prompt("What is your favorite number?");

// console.log(favorite);

// console.log(typeof favorite);

// if (favorite == 69) {
//   console.log("giggity");
// }

// const hasDriversLicense = true; // variable A
// const hasGoodVision = true; // variable B

// console.log(hasDriversLicense || hasGoodVision);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if (shouldDrive) {
//   console.log("Sarah is able to drive :D");
// } else {
//   console.log("Someone else should drive..");
// }

// const isTired = false;

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("Sarah is able to drive :D");
// } else {
//   console.log("Someone else should drive..");
// }

// console.log("Please");

const day = "monday";

switch (day) {
  case "monday": //day === monday
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code examples");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend :D");
    break;
  default:
    console.log("Not a valid day!");
}

const age = 23;

age >= 18
  ? console.log("I like to drink beer!")
  : console.log("I like to drink juice!");

const drink = age >= 18 ? "beer" : "juice";
console.log(drink);

console.log(`I like to drink ${age >= 18 ? "beer" : "juice"}`);
