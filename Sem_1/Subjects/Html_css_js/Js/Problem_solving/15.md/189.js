// Q189. k-th Smallest Element (Using Sort)
// Return the k-th smallest element (1-based index) after sorting.

function smallestElement(arr,k){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length-1-i; j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            }
        }
    }
    console.log(arr[k-1]);
}
smallestElement([7, 10, 4, 3, 20, 15],4);