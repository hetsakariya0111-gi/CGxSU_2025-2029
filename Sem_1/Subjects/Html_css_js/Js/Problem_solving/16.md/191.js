// Q191. Binary Search in Sorted Array
// Given sorted array and target, return index or -1 if not found./

function binary(arr,k){
    let i=0; 
    let j=arr.length-1;
    while(j>=i){
        let mid=Math.floor((i+j)/2);
        if(arr[mid]>k){
            j=mid-1;
        }
        else if(arr[mid]<k){
            i=mid+1;
        }
        else{
            console.log(mid);
            return;
        }
    }
    console.log(-1);
}
binary([1,2,3,4,5],);