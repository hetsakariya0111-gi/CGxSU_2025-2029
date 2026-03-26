// Q24. Reverse a Number
// Given a number, print its reverse.

let num = prompt("Enter a num: ");
let rev = num.replace("-", "").split("").reverse().join("");    
console.log(rev);

// var number = 24895;
// var digit = 0;
// var reversed = 0;

// function reverseNum(number){
//     for(let i = number; i>0; i=Math.floor(i/10)) {
//         digit = i%10;
//         reversed = (reversed*10) + digit
//     }
//     console.log(reversed);
// }
// reverseNum(number);