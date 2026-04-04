// Q100. Filter Adults from Array of People
// Array of {name, age} → return only those with age > 18.

let obj = [{name: "A", age: 17}, {name: "B", age: 20}, {name: "C", age: 18}];
let res = [];


for(let char of obj){
    if(char.age>18){
        res.push(char);
    }
}
console.log(res);