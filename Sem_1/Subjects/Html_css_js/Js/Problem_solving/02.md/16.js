// Q16. Product 1 to N
// Given N, find product of numbers from 1 to N.

let num = Number(prompt("Enter a num: "));
let product = 1;
for(let i=1; i<=num; i++)
    product*=i; console.log(product);

// var N = 5;
// var product = 1;
// for(var i = 1; i<=N; i++) {
//     product = product * i;

// }

// console.log(product);