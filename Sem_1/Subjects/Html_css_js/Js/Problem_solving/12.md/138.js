// Q138. Sum of Cubes 1³ + 2³ + … + n³
// Given n, compute sum of cubes.

function squareSum(n){
    let sum=0;
    for(let i=1; i<=n; i++){
        sum=sum+i**3;
    }
    console.log(sum);
}
squareSum(5);