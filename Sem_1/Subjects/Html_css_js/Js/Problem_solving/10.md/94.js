// Q94. Highest Marks from Array of Students
// Students as array of objects: {name, marks}.

let arr = [{name: "A", marks: 50}, {name: "B", marks: 80}, {name: "C", marks: 70}];

let maxMarks=0;
let student="";

for(let c of arr){
    if(c.marks>maxMarks){
        student=c.name;
        maxMarks=c.marks;
    }
}
console.log(student);