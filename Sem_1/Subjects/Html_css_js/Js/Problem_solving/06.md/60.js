// Q60. Average of Array Elements
// Given an array of numbers, find the average.

let arr = [5, 10, 15, 20];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
let avg = sum / arr.length;
console.log("Avg:", avg);


