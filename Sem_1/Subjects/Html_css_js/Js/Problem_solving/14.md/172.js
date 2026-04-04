// Q172. Strictly Increasing Sorted Array?
// Return true if each element is strictly greater than previous.

function strictlyIncreasingSorted(arr){
    for(i=0; i<arr.length; i++){
        if(arr[i]<=arr[i-1]){
            console.log(false);
            return;
        }
    }
    console.log(true);
};
strictlyIncreasingSorted([1, 2, 2, 3]);