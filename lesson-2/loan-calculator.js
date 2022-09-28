let readline = require("readline-sync");

// let m = p * (j / (1 - Math.pow((1 + j), (-n))));

function ask(message) {
  console.log(`=> ${message}`);
}

// Shorthand for readline.question()
let input = readline.question;

// Get principal
ask("What is the principal amount of the loan?");
let principal = input();
console.log(`PRINCIPAL: $${principal}`);

// Get APR, convert to monthly interest rate
ask("What is the current APR?");
let monthlyInterest = (input() / 100 / 12) * 100; // <- https://www.thebalancemoney.com/calculate-monthly-interest-315421
console.log(`APR: ${monthlyInterest}`);

// Get duration of loan and conver to months
/** Code here */

// let monthlyPayment =
//   principal * (monthlyInterest / (1 - Math.pow(1 + monthlyInterest, -durationInMonths)));

// console.log(monthlyPayment);
