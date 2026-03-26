// Q76. Rotate Array Left by 1
// Move first element to end.

let arr = [1,2,3,4];

// var a = arr.shift();
// var b = arr.push(a);
// console.log(arr);

let res = [];

for (let i = 1; i < arr.length; i++) {
    res.push(arr[i]);
}

res.push(arr[0]);

console.log(res);