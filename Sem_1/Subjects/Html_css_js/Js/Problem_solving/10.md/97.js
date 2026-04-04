// Q97. Print All Keys of Object
// Given object, return array of keys.

var obj = {a: 1, b: 2, c: 3}
var arr = [];

for(let char in obj) {
   arr.push(char);
}
console.log(arr);