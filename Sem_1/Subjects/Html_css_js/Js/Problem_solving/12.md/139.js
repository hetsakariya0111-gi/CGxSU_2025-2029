// Q139. Harshad Number (Niven Number)
// A number is Harshad if it’s divisible by sum of its digits.

function Harshad(n){
    let sum=0;
    while(n>0){
        sum=sum+n%10;
        n=Math.floor(n/10);
    }
    console.log(n%sum==0);
}
Harshad(10);
