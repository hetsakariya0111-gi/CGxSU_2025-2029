// Q91. Frequency of Numbers in Array (Object)
// Return an object where key = number, value = count.

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
console.log(obj);