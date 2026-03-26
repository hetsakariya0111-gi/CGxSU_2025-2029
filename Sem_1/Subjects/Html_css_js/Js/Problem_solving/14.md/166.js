// Q166. All Elements Positive?
// Return true if all elements are > 0.

function allPositive(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]<=0){
            console.log(false);
            return;
        }
    }
    console.log(true);
}
allPositive([-1, 2, 3]);