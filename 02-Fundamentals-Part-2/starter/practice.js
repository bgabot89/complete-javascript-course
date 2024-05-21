"use strict"; //secure mode

const cart = [3, 4, 8, 9];

// let total = 0;

// const withTax = cart.map((cost) => {
//   total += cost;
//   return cost * 1.1;
// });

// console.log(withTax);

// const total = cart.reduce((acc, cost) => acc + cost, 0);

// const withTax = cart.map((cost) => cost * 1.1);

// console.log(total);

// console.log(withTax);

// const groceryItems = [
//   { item: "bread", price: 10 },
//   { item: "milk", price: 5 },
//   { item: "cheese", price: 15 },
// ];

// // const newGroceryPrice = groceryItems.map((item) => (item.price += 5));

// const newGroceryPrice = groceryItems.map((i) => (i.price *= 10));

// // const newPrice = cart.map((item) => item * 5);

// console.log(newGroceryPrice);

//bills
const bills = [125, 555, 44];
const tipsArr = [];

//calcTip function
const calcTip = function (bill) {
  for (let i = 0; i < bills.length; i++) {
    if (bill[i] > 50 && bill[i] < 300) {
      tipsArr.push(bill[i] * 0.15);
    } else {
      tipsArr.push(bill[i] * 0.2);
    }
  }
  return tipsArr;
};

const tips = calcTip(bills);

console.log(bills, tips);

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills, tips, totals);
