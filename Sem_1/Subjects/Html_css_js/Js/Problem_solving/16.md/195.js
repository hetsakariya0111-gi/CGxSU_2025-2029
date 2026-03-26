// Q195. Maximum Subarray Sum (Brute Force)
// Find max possible sum of any contiguous subarray by checking all.

function maxSum(arr){
    let max=-Infinity;
    for(let i=0; i<arr.length; i++){
        let current=0;
        for(let j=i; j<arr.length; j++){
            current=current+arr[j];
            if(current>max){
                max=current;
            }
        }
    }
    console.log(max);
}
maxSum([1,3,-4,6,9]);