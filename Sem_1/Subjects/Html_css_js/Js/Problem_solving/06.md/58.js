// Q57. Print Only Nagative Numbers
// Given an array, print only nagative numbers.

let arr = [1,8,-4,-6,0,2,9,15,-7];

for(let i=0; i<arr.length; i++){
    if(arr[i]<0) console.log(arr[i]);
}