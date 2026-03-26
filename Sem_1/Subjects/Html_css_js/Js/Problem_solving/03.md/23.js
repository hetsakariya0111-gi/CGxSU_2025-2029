// Q23. Product of Digits
// Given a number, find product of its digits.

let num = prompt("Enter a num: ");
num = num.replace("-","")
let product = 1;
for(let i = 0; i < num.length; i++)
product*=Number(num[i]);
console.log(product);

// let n = 57;
// let product = 1;
// while(n>0) {
//     let check = n%10;
//     product = product*check;
//     n=Math.floor(n/10);

// }

// console.log(product);