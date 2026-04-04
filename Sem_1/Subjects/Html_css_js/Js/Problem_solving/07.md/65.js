// Q65. Check if Array Contains a Value
// Given an array and a value, return true if it’s present.

let arr=[1,20,3,40,-1,-90,-80];
let value=30;

// let result = arr.includes(value);
// console.log(result);

for (let num of arr) {
    if (num === value) {
        console.log(true);
        return;
    }
}
console.log(false);

