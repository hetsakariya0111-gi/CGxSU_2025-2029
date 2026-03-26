// Q174. Maximum Difference (max - min)
// Given array, find max - min.

function arrMinMaxDifference(arr){
    let max=-Infinity;
    let min=Infinity;
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max=arr[i];
        }
        if(arr[i]<min){
            min=arr[i];
        }
    }
    let diff = max-min;
    console.log(diff);


}
arrMinMaxDifference([1, 5, 3, 9]);