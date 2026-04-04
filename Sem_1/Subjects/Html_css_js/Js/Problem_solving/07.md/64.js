// Q64. Copy Array
// Given an array, create an exact copy.

let arr=[1,20,30,40,-1,-90,-80];

// let copy = [...arr];
// console.log(copy);

// let copy = arr.slice();
// console.log(copy);

let copy = [];
for (let i = 0; i < arr.length; i++) {
    copy[i] = arr[i];
}
console.log(copy);



