// Q63. Reverse Array into New Array
// Given an array, create a new array which is the reverse.

let arr=[1,20,30,40,-1,-90,-80];
// let res=arr.reverse();
// console.log(res);

// let arr2=[];
// for(let i=arr.length-1; i>=0; i--){
//     arr2.push(arr[i]);
// }
// console.log(arr2)

let i=0;
let j=arr.length-1;

while(i<=j){
    [arr[i],arr[j]]=[arr[j],arr[i]];
    i++;
    j--;
}
console.log(arr)

