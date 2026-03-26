// Q71. Remove Even Numbers (Keep Only Odd)
// Return a new array with only odd numbers.

let arr = [85,24,4,67,95,28,19,94];
let res = [];

// for(let i=0; i<arr.length; i++){
//     if(arr[i]%2!=0){
//         res.push(arr[i]);
//     } 
// }
// console.log(res);

// let res2=arr.filter((value)=>{
//     return value%2!=0;
// })
// console.log(res2);

for(let i=0; i<arr.length; i++){
    if(arr[i]%2==0){
        arr.splice(i,1);
        i=i-1;
    }
}
console.log(arr);