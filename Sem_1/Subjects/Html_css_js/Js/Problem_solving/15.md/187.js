// Q187. Selection Sort (Ascending)
// Sort an array using selection sort.

function selection(arr){
    for(let i=0; i<arr.length; i++){
        let max=-Infinity;
        let maxIndex=0;
        for(let j=0; j<arr.length-i; j++){
            
            if(arr[j]>max){
                max=arr[j];
                maxIndex=j;
            }
        }
        [arr[arr.length-i-1],arr[maxIndex]]=[arr[maxIndex],arr[arr.length-i-1]]
    }
    console.log(arr);
}
selection([10, 3, 7, 1, 9, 4]);