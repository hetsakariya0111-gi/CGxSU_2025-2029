// Q196. Max Sum of Subarray of Size k (Brute Force)
// Given k, examine all subarrays of size k and return maximum sum.

function maxSum(arr,k){
    let max=-Infinity;
    for(let i=0; i<arr.length; i++){
        let current=0;
        for(let j=i; j<=k; j++){
            current=current+arr[j];
            if(current>max){
                max=current;
            }
        }
    }
    console.log(max);
}
maxSum([1,3,-4,6,9],3);