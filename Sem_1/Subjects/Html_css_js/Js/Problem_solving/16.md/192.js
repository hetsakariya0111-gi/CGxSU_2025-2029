// Q192. Count Occurrences of Target in Sorted Array
// Count how many times target value appears.

function CountOcureneces(arr,element){
    let left=null;
    let right=null;

    let i=0;
    let j=arr.length-1;

    while(j>=i){
        let mid=Math.floor((i+j)/2);
        if(arr[mid]==element){
            left=mid;
            j=mid-1;
        }
        else if(arr[mid]>element){
            j=mid-1;
        }
        else{
            i=mid+1;
        }
    }

    i=0;
    j=arr.length-1;

    while(j>=i){
        let mid=Math.floor((i+j)/2);
        if(arr[mid]==element){
            right=mid;
            i=mid+1;
        }
        else if(arr[mid]>element){
            j=mid-1;
        }
        else{
            i=mid+1;
        }
    }
    let result=right-left+1;
    console.log(result);
}
CountOcureneces([1,2,3,4,5,7,7,7,7,7,8,9,11,13],7);