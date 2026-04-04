// Q99. Count Key-Value Pairs in Object
// Return how many properties object has.

let obj = {a: 1, b: 2, c: 3};

let count=0;

for(let char in obj){
    count++;
}
console.log(count);