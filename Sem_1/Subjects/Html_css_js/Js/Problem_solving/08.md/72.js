// Q72. Remove Duplicates
// Return a new array with unique elements (order can be original order).

let arr = [1, 2, 2, 3, 4, 3, 5];
// let res = [];

// for (let i = 0; i < arr.length; i++) {
//     if(arr[i]!=arr[i-1]){
//         res.push(arr[i])
//     }
// }

// console.log(res);

// let obj = {};
// let res = [];

// for(let i=0; i<arr.length; i++){
//     if(obj[arr[i]]){
//         obj[arr[i]]++
//     }
//     else{
//         (obj[arr[i]])=1
//     }
// }
// console.log(obj)

// for(let char in obj){
//  
res.push(Number(char));
// }
// console.log(res)

let i=0;
for(let i=0; i<arr.length; i++){
    if(arr[i]==arr[i+1]){
        arr.splice(i,1);
        i=i-1;
    }
}
console.log(arr)
