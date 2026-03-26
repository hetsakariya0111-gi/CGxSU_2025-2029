// Q168. Index of Maximum Element
// Return the index of the maximum element (first max if multiple).

function maximumIndex(arr){
    let maxIndex = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>arr[maxIndex]){
            maxIndex=i;
        }
    }
    console.log(maxIndex);
}
maximumIndex([1,8,1,6,4,2,9,21,1]);