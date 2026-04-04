// Q8. Divisible by 3 and 5
// Given a number, print if it is divisible by both 3 and 5.

let num = Number(prompt("Enter a num: "));

if((num % 5 == 0) && (num % 3 == 0)) console.log("Divisible by 3 and 5");
else console.log("Not divisible by both");


// function divisibility(num) {
//     if(num%5 == 0 && num%3==0) {
//         console.log("divisible by 3 and 5");
//     }
//     else {
//         console.log("not divisible by both");
//     }
// }

// divisibility(25);