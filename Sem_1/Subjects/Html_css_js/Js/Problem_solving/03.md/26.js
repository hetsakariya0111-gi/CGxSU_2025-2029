// Q26. Prime Number (Simple Check)
// Given a number, check if it is prime.

let num = Number(prompt("Enter a num: "));

if(num <= 1) console.log("Not prime");
else if (num === 2) console.log("Prime");
else
for(let i = 2; i < num; i++)
    if(num % i === 0) 
        {
            console.log("Not prime"); break;
        }
    else if(i === num - 1) console.log("Prime");

    // let num = [2,3,4,5,6,7,8,9,10];
// // var prime = false;
// var count = 0;

// function primeNo(num1) {
//     for(var i = 0; i<num.length-1; i++) {
//         if(num1%num[i]==0) {
//             count++;
//         }
//         else {
//             count = 0;
//         }
//     }

// }    

// if(count >=2) {
//     console.log("not prime")
// }
// else {
//     console.log("prime")
// }

// primeNo(16)

