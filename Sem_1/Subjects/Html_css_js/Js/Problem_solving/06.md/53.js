// Q53. Maximum in Array
// Given an array, find the maximum element.

// let arr = [10, 25, 7, 98, 45];
// let max = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }

// console.log("Maximum:", max);

let arr = [10, 25, 7, 98, 45];
let max = Math.max(...arr);

console.log("Maximum:", max);

