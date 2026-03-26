// Q188. Insertion Sort (Ascending)
// Sort an array using insertion sort.

function insertion(arr){
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
    console.log(arr);
}
insertion([10, 3, 7, 1, 9, 4]);