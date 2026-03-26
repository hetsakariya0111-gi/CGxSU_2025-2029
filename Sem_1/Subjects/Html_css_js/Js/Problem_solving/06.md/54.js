// Q54. Minimum in Array
// Given an array, find the minimum element.

// let arr = [1,2,3,4,5];
// let min = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }

// console.log(min);

let arr = [10, 5, 20, 3, 8];
let min = Math.min(...arr);

console.log("Minimum:", min);
