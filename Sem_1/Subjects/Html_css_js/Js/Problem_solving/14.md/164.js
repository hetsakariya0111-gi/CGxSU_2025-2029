// Q164. All Elements Even?
// Return true if all elements are even numbers.

function allEven(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2!=0){
            console.log(false);
            return;
        }
    }
    console.log(true);
}
allEven([1,5,,1,8,94,2,62,94,62,8,49,9,26,5,4,621,65,495]);