// Q93. Character Frequency in String (Object)
// Return object of character counts.

let arr = "hello";

let obj = {};

for(let n of arr){
    if(obj[n]==undefined){
        obj[n]=1;
    }
    else{
        obj[n]++;
    }
}
console.log(obj);