// Q75. Rotate Array Right by 1
// Move last element to front.

let arr = [1,2,3,4];

// let add = arr1.pop();
// arr1.unshift(add);
// console.log(arr1);

let res=[arr[arr.length-1]];
for(let i=0; i<arr.length-1;i++){
    res.push(arr[i]);
}
console.log(res); 