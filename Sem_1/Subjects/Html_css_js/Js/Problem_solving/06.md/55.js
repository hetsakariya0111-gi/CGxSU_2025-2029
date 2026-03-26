// Q55. Count Even Numbers in Array
// Given an array of integers, count even numbers.

let arr = [1,2,3,4,5,6,7,8];
let count = 0;

for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0) count++;
}
console.log(count);