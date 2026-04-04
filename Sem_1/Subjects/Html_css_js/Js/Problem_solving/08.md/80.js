// Q80. Separate Even and Odd into Two Arrays
// Given an array, return two arrays: evens and odds.

let arr = [54,25,87,96,25,36,41,62,98,53];

let arr1 = [];
let arr2 = [];

for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0){
        arr1.push(arr[i]);
    }
    else{
        arr2.push(arr[i]);
    }
}
console.log(arr1);
console.log(arr2);