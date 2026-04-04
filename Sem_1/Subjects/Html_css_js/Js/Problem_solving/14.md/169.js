// Q169. Index of Minimum Element
// Return the index of the minimum element (first min if multiple).

function minimumIndex(arr){
    let minIndex = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]<arr[minIndex]){
            minIndex=i;
        }
    }
    console.log(minIndex);
}
minimumIndex([1,8,1,6,4,2,9,21,1]);