// Q167. Count Elements Greater Than k
// Given array and number k, count how many elements are strictly greater than k.

function linearSearch(arr,k){
    let count=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>k){
            count++;
        }
    }
    console.log(count);
}
linearSearch([10, 20, 30],23);