// Q176. Elements at Odd Indices
// Return new array with elements at indices 1, 3, 5, …

function evenIndices(arr){
    // let res=[];
    // for(let i=1; i<arr.length; i=i+2){
    //     res.push(arr[i]);
    // }
    // console.log(res);

    let res2=arr.filter((value,index)=>{
        return index%2!=0
    })
    console.log(res2);
}
evenIndices([10, 20, 30, 40, 50]);