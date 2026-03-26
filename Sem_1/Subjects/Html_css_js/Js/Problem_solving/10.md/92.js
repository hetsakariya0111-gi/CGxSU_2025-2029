// Q92. Most Frequent Number in Array
// Using a frequency object, return the number with highest count.

let arr = [1,2,5,1,2,8,1,3,6,4,2,2,1,5,1,5];

let obj = {};

for(let n of arr){
    if(obj[n]==undefined){
        obj[n]=1;
    }
    else{
        obj[n]++;
    }
}

let maxCount=0;
let maxValue=0;

for(let n in obj){
    if(obj[n]>maxValue){
        maxCount=n;
        maxValue=obj[n];
    }
}
console.log(maxCount);
console.log(maxValue);