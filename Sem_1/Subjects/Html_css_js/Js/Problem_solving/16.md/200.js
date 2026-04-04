// Q200. Remove Consecutive Duplicates in Array
// Given array, keep first of each group of same element, remove consecutive repeats.

function consecutiveDuplicateArr(arr){
    let res=[];
    for(let i=0; i<arr.length; i++){
        if(arr[i]==arr[i+1]){
            continue;
        }
        else{
            res.push(arr[i]);
        }
    }
    console.log(res);
}
consecutiveDuplicateArr([1, 1, 2, 2, 2, 3, 1, 1]);