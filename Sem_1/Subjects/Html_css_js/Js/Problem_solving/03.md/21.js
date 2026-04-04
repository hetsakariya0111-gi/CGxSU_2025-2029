// Q21. Count Digits in a Number
// Given a number, count how many digits it has. (Ignore sign.)

let num = prompt("Enter a num: ");
num = num.replace("-","")
console.log(num.length);


//Method-2

// let n = -100
// n = Math.abs(n);
// n=String(n);
// let arr = n.split("");
// console.log(arr.length);

// Method-3

// let n = 57081;
// let count = 0;
// while(n>0) {
//     count++;
//     n=Math.floor(n/10);

// }
// console.log(count);

