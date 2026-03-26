// Q77. Count Elements Greater than Average
// Count how many numbers are greater than the average of array.

let arr = [5,25,78,64,5,95,45,35];
let sum=0;
let count=0;
for(let i=0; i<arr.length; i++){
    sum+=arr[i];
}
let avg = sum/arr.length;

for(let i=0; i<arr.length; i++){
    if(arr[i]>avg){
        count++;
    }
}

console.log(count);
