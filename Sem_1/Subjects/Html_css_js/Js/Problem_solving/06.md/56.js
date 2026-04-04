// Q56. Count Odd Numbers in Array
// Given an array of integers, count odd numbers.

let arr = [1,2,3,4,5,6,7,8];
let count = 0;

for(let i=0; i<arr.length; i++){
    if(arr[i]%2!=0) count++;
}
console.log(count);