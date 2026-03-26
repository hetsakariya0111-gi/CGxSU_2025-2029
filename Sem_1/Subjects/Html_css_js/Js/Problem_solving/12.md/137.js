// Q137. Sum of Squares 1² + 2² + … + n²
// Given n, compute sum of squares.

function squareSum(n){
    let sum=0;
    for(let i=1; i<=n; i++){
        sum=sum+i**2;
    }
    console.log(sum);
}
squareSum(5);