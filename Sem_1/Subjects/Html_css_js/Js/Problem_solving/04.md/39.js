// Q39. Count Occurrences of 'a'
// Count how many times 'a' (or 'A') appears.

let str="Javascript";
let count=0;
let arr=str.split("");
arr.forEach((char) => {
    if(char=="a" || char=="A"){
        count++;
    }
});
console.log(count);