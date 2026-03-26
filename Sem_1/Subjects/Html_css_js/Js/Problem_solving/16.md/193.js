// Q193. Any Pair with Given Sum (Brute Force)
// Check if there exists any pair of elements whose sum equals target.

function bruteForce(arr,sum){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j]==sum){
                console.log(true);
                return
            }
        }
    }
    console.log(false);
}
bruteForce([1, 2, 3, 4, 5],9);