// Q98. Print All Values of Object
// Given object, return array of values.

var obj = {name: "Neel", age: 25}
var arr = [];

for(let char in obj) {
   arr.push(obj[char]);
}
console.log(arr);