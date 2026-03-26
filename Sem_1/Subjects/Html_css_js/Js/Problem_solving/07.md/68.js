// Q68. Check if Array is Sorted (Increasing)
// Return true if each element is >= previous one.

let arr = [85,24,67,95,28,19,94];

for(let i=0; i<arr.length; i++){
    if(i==0){
        continue;
    }
    else if(arr[i]<arr[i-1]){
        console.log("array is not sorted");
        return;
    }
}
console.log("array is sorted");
