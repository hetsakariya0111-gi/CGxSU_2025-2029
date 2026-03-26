// Q70. Second Smallest Element
// Assume array has at least 2 distinct elements.

let arr = [85,24,67,95,28,19,94];

// let smallest = +Infinity;

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < smallest) {
//         smallest = arr[i];
//     }
// }

// console.log(smallest);

// let ssmallest=+Infinity;
// for(let i=0; i<arr.length; i++){
//     if(arr[i]<ssmallest && arr[i]>smallest){
//         ssmallest=arr[i];
//     }
// }
// console.log(ssmallest);

let smallest=Infinity;
let secondSmallest=Infinity;

for(let i=0; i<arr.length; i++){
    if(arr[i]<smallest){
        secondSmallest=smallest;
        smallest=arr[i];
    }
    else if(arr[i]<secondSmallest && arr[i]>smallest){
        secondSmallest=arr[i];
    }
}
console.log(secondSmallest);