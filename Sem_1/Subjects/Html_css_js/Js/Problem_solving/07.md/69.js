// Q69. Second Largest Element
// Assume array has at least 2 distinct elements.

let arr = [85,24,67,95,28,19,94];

// let largest = -Infinity;

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//         largest = arr[i];
//     }
// }

// console.log(largest);

// let slargest=-Infinity;
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>slargest && arr[i]<largest){
//         slargest=arr[i];
//     }
// }
// console.log(slargest);

let largest=-Infinity;
let secondLargest=-Infinity;

for(let i=0; i<arr.length; i++){
    if(arr[i]>largest){
        secondLargest=largest;
        largest=arr[i];
    }
    else if(arr[i]>secondLargest && arr[i]<largest){
        secondLargest=arr[i];
    }
}
console.log(secondLargest);