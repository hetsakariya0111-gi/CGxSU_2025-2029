// Q163. Absolute Values of Array Elements
// Given an array, return new array of absolute values.

function absolute(arr){
    // for(let i=0; i<arr.length; i++){
    //     arr[i]=Math.abs(arr[i]);
    // }
    // console.log(arr);
    
    let res=[];
    for(let i=0; i<arr.length; i++){
        res.push(Math.abs(arr[i]));
    }
    console.log(res);
}
absolute([-1, 2, -3]);