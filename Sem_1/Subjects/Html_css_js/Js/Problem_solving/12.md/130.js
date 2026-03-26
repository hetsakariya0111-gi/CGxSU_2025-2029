// Q130. Co-prime Numbers
// Two numbers are co-prime if their GCD is 1.

function coPrime(a,b){
    let range=Math.min(a,b);
    let GCD;
    for(let i=range; i>=1; i--){
        if(a%i==0 && b%i==0){
            GCD=i;
        }
    }
    console.log(GCD==1 ? "CoPrime" : "Not a CoPrime");
}
coPrime(8,15)