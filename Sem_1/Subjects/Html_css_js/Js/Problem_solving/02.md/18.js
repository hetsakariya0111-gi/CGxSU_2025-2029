// Q18. Count Numbers Divisible by 3 (1 to N)
// Count how many numbers between 1 and N are divisible by 3.

let num = Number(prompt("Enter a num: "));
let count = 0;

for(let i=1; i<=num; i++)
    if(i % 3 == 0) count++; console.log(count);

// function check(num) {
//     let count = 0;
//     for (let i = 1; i <= num; i++) {
//         if (i % 3 == 0) {
//             count++;
//         }



//     }
//     console.log(count);
// }

// check(9);