// Q190. k-th Largest Element (Using Sort)
// Return the k-th largest element (1-based index) after sorting.

function insertionLargest(arr,k){
    for(let i=0; i<arr.length; i++){
        for(let j=i; j>0; j--){
            if(arr[j]<arr[j-1]){
                [arr[j],arr[j-1]]=[arr[j-1],arr[j]];
            }
            else{
                break;
            }
        }
    }
    console.log(arr[arr.length-k]);
}
insertionLargest([10, 3, 7, 1, 9, 4],2);

function bubbleLargest(arr,k){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length-1-i; j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            }
        }
    }
    console.log(arr[arr.length-k]);
}
bubbleLargest([7, 10, 4, 3, 20, 15],4);