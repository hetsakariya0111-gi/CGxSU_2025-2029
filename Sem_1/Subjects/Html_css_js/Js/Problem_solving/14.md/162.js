// Q162. Triple Each Element
// Given an array, return a new array with each element ×3.

function triple(arr){
    // for(let i=0; i<arr.length; i++){
    //     arr[i]=arr[i]*3;
    // }
    // console.log(arr);

    // let res=[];
    // for(let i=0; i<arr.length; i++){
    //     res.push(arr[i]*3);
    // }
    // console.log(res);

    let res = arr.map((value)=>{
        return value*3
    })
    console.log(res);
}
triple([1, 2, 3]);