// Q25. Palindrome Number
// Check if a number reads same forwards and backwards.

let numStr = String(Number(prompt("Enter a num: ")));
let j = numStr.length - 1;
for(let i=1; i<=j; i++, j--)
    if(numStr[i]!==numStr[j])
        console.log("Not palindrome");
    console.log("palindrome");

    // var num = "1221";
// var n = num.length;
// var palindrome = false;
// for(var i=0; i<n/2; i++) {
//     if(num[i]!=num[n-i-1]) {
//         palindrome = false;
//         break;
//     }
//     else {
//         palindrome = true;
//     }
// }
// console.log(palindrome);