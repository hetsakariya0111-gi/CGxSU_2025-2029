// Q22. Sum of Digits
// Given a number, find sum of its digits.

    let num = prompt("Enter a num: ");
    num = num.replace("-","")
    let sum = 0;
    for(let i = 0; i < num.length; i++)
    sum+=Number(num[i]);
    console.log(sum);


// let n = 57081;
// let sum = 0;
// while(n>0) {
//     let check = n%10;
//     sum = sum+check;
//     n=Math.floor(n/10);
// }
// console.log(sum);