// Remember, we're gonna use strict mode in all scripts now!
"use strict";

///////////////////////////////////////
// Using Google, StackOverflow and MDN

// PROBLEM 1:
// We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// const temperatures2 = [33, 14, 9, 3, -2];
// const temperatures3 = temperatures.concat(temperatures2);

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2) Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

// const calcTempAmplitude = function (t1, t2) {
//   const t3 = t1.concat(t2);

//   let max = t3[0];
//   let min = t3[0];

//   for (let i = 0; i < t3.length; i++) {
//     const curTemp = t3[i];

//     if (typeof curTemp !== "number") continue;

//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   return max - min;
// };

// const amplitude = calcTempAmplitude([3, 10, 1], [8, 14, -2]);

// console.log(amplitude);

const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    value: Number(prompt("Degrees Celsius:")),
    // value: 10,
  };

  const kelvin = measurement.value + 273.15;
  return kelvin;
};

console.log(measureKelvin());
