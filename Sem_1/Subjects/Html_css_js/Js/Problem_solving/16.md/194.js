// Q194. Any Triplet with Given Sum (Brute Force)
// Check if there exist three numbers whose sum equals target.

function triplet(arr,sum){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            for(let k=j+1; k<arr.length; k++){
                if(arr[i]+arr[j]+arr[k]==sum){
                    console.log(true);
                    return;
                }
            }
        }
    }
    console.log(false);
}
triplet([1, 2, 3, 4, 5],12)