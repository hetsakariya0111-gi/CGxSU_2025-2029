// Q140. Automorphic Number
// A number is automorphic if its square ends with the same digits as the number.

function Automorphic(n){
    let length=String(n).length;

    let square=n*n;

    let lastDigit=square%(10**length);
    if(lastDigit==n){
        console.log("Automorphic number");
    }
    else{
        console.log("Not an Automorphic number");
        
    }
}
Automorphic(25);