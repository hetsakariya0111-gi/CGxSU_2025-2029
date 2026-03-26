// Q27. All Primes from 1 to N
// Print all prime numbers from 1 to N.

let num = Number(prompt("Enter num here :"));

for (let i = 2; i <= num; i++) {
    let isPrime = true;

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(i);
    }
}



// function checkPrime(X) {
//     for(let i=2; i<=Math.floor(X/2); i++) {
//         if(X%i==0) {
//             return false;
//         }
//     }
//     return true;
// }


// function main(n) {
//     let res=[];
//     for(let i=2; i<=n; i++) {
//         if(checkPrime(i)) {
//             res.push(i);

//         }
//     }
//     console.log(res.join(" "));
// }

// main(20);
