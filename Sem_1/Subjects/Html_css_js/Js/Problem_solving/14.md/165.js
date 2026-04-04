// Q165. At Least One Even?
// Return true if at least one element is even.

function oneEven(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2==0){
            console.log(true);
            return;
        }
    }
    console.log(false);
}
oneEven([1,5,1,8,94,2,62,94,62,8,49,9,26,5,4,621,65,495]);