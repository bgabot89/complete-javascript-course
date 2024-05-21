//1
// const country = "USA";
// const continent = "North America";
// let population = 33300000;
// const isIsland = false;
// let language = "English";

// console.log("half of population would be" + " " + `${population / 2}`);

// console.log(population + 1);

// let finlandPopulation = 6000000;
// let averagePopulation = 33000000;

// if (finlandPopulation > population) {
//   console.log("Finland's population is higher than the US population");
// } else {
//   console.log("Finland's population is lower than the US population");
// }

// if (averagePopulation > population) {
//   console.log("Average population is higher than the US population");
// } else {
//   console.log("Average population is lower than the US population");
// }

// const description1 =
//   country +
//   " is in " +
//   continent +
//   ", and its " +
//   population +
//   " people speak " +
//   language +
//   ".";

// console.log(description1);

//3

/* Write your code below. Good luck! 🙂 */

let totalDolphins = [96, 108, 89];
let totalKoalas = [88, 91, 110];

// console.log(scoreDolphins);
// console.log(scoreKoalas);

function add(acc, currentValue) {
  // console.log(`current value is  ${currentValue} and previous value is ${acc}`);
  return acc + currentValue;
}

const scoreDolphins = totalDolphins.reduce(add) / totalDolphins.length;
const scoreKoalas = totalKoalas.reduce(add) / totalKoalas.length;

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
  console.log("Koalas win the trophy 🏆");
} else if (
  scoreDolphins === scoreKoalas &&
  scoreDolphins >= 100 &&
  scoreKoalas >= 100
) {
  console.log("Both win the trophy!");
} else {
  console.log("No one wins the trophy 😭");
}
