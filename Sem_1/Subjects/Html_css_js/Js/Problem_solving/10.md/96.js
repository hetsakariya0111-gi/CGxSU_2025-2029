// Q96. Average Marks from Subject-Marks Object
// Object like {math: 80, science: 90, english: 70}.

var obj = {math: 80, science: 90, english: 70};
var total = 0;
let count = 0;

for(let a in obj) {
    total = total + obj[a]
    count++;
}
console.log("Average: ", total/count);