// Q73. Concatenate Two Arrays
// Given two arrays, merge them into one.

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];

// let res1 = arr1.concat(arr2);
// let res = [...arr1,...arr2];

// console.log(res1);
// console.log(res);

let res3 = [];
for(let i=0; i<arr1.length; i++){
    res3.push(arr1[i])
}
for(let i=0; i<arr2.length; i++){
    res3.push(arr2[i])
}
console.log(res3)