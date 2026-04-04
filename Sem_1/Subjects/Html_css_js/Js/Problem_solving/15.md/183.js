// Q183. Rotate Array Right by k Positions
// Right rotation: last elements move to front.

function rotateRight(arr,k){
    if(arr.length<k){
        k=k%arr.length;
    }
    // for(let i=1; i<=k; i++){
    //     let add=arr.pop();
    //     arr.unshift(add);
    // }
    // console.log(arr);

    let res=[];
    for(let i=arr.length-k; i<arr.length; i++){
        res.push(arr[i]);
    }
    for(let i=0; i<arr.length-k; i++){
        res.push(arr[i]);
    }
    console.log(res);
}
rotateRight([1,2,3,4,5],2);