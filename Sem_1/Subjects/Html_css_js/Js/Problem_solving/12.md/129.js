// Q129. Perfect Number
// A perfect number equals the sum of its proper divisors (excluding itself).

function perfectNumber(n){
    let sum=0;
    for(let i=1; i<n; i++){
        if(n%i==0){
            sum=sum+i;
        }
    }
    console.log(n==sum ? "Perfect Number" : "Not a Perfect Number");
}
perfectNumber(6);