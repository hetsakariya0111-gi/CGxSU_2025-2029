// Q62. Square Each Element
// Given an array, return a new array with each element squared.

let arr=[1,20,30,40,-1,-90,-80];

let res=[];

for(let i=0; i<arr.length; i++){
    res.push(arr[i]**2);
}
console.log(res);