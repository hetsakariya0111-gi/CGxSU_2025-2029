// Q67. Frequency of a Value
// Given an array and a value, count how many times value appears.

let arr = [10, 20, 30, 20, 40, 20];
let value = 20;

// let count = arr.filter(val => val === value).length;

// console.log(count); 


// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === value) {
//         count++;
//     }
// }

// console.log(count); 

let obj = {};
for(let i=0; i<arr.length; i++){
    if(obj[arr[i]]!=undefined){
        obj[arr[i]]++;
    }
    else{
        obj[arr[i]]=1;
    }
}
console.log(obj[value]);