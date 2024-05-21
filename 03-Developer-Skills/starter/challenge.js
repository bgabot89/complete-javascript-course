"use strict";

/*
Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.

Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."

Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console.

Use the problem-solving framework: Understand the problem and break it up into sub-problems!

TEST DATA 1: [17, 21, 23]
TEST DATA 2: [12, 5, -5, 0, 4]
*/

//create a function called printForecast
//what is the x days?: x + 1;

//concatenate an array
//iterate through the array, console.log a string for each entry in the array

// let data1 = [17, 21, 23];
// let data2 = [12, 5, -5, 0, 4];
// let data3 = data1.concat(data2);

// const printForecast = function (arr) {
//   let str = "";
//   for (let i = 0; i < arr.length; i++) {
//     str += `${arr[i]}ºC in ${i + 1} days...`;
//   }
//   console.log("..." + str);
// };

// printForecast(data3);

function domainName(url) {
  //your code here
  //remove the protocol: https://www. or http:// from the string
  //remove the domain suffix, aka .com or .ru etc....
  //remove the relative pathname from the string
  //use regex to find the .com
  //pseudocode on how to execute
  //   if the string has an "https://" or "https://" remove
  //   if the string has a domain suffix of .com, .ru then remove
  //   if the string also has a pathname remove
  //   return string
  //   return (url = url.match(/^www\.(.*)\.com$/)[1]);

  //   const regex = /\/^/;
  const regex = /:\/\/(www[0-9]?\.)?(.[^/:]+)/i;
  console.log(url.match(regex));
  url = url.match(regex);
  let hostName = url[2].split(".");
  console.log(hostName);
  return hostName[0];
}

console.log(
  domainName("http://www.example.co.uk/foo/bar?hat=bowler&accessory=cane")
);
