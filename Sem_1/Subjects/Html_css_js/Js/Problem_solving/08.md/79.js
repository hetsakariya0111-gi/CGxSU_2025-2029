// Q79. Count 0s and 1s in Binary Array
// Given array of only 0s and 1s, count both.

let arr=[1,1,0,1,0,1,0,1,0,1,1,1,1,1,1,1,0,0,0,0,1,0,1,0,1];

let zcount = 0;
let ocount = 0;

for(let i=0; i<arr.length; i++){
    if(arr[i]==1){
        ocount++;
    }
    if(arr[i]==0){
        zcount++;
    }
}
console.log(ocount);
console.log(zcount);