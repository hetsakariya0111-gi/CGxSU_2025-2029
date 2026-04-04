// Q28. First N Fibonacci Numbers
// Print first N Fibonacci numbers. (Start: 0, 1, 1, 2, 3, …)

let num = Number(prompt("Enter num: "));

let a = 0, b = 1;

if (num >= 1) console.log(a);
if (num >= 2) console.log(b);

for (let i = 3; i <= num; i++) {
    let next = a + b;
    console.log(next);
    a = b;
    b = next;
}

// let n = 5;
// let res = [];
// for(let i=1; i<=n; i++) {
//     if(i==1) {
//         res.push(0);
//         continue;
//     }
//     if(i==2) {
//         res.push(1);
//         continue;
//     }
//        res.push (res[i-3] + res[i-2]);

// }
//  console.log(res);
