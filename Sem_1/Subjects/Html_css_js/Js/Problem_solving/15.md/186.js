// Q186. Bubble Sort (Ascending)
// Sort an array using bubble sort algorithm.

function bubble(arr){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length-i-1; j++){
            if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
                // let temp = arr[j];
                // arr[j] = arr[j+1];
                // arr[j+1] = temp;
                
            }
        }
    }
    console.log(arr);
}
bubble([10, 3, 7, 1, 9, 4]);