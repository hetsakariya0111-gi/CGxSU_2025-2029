// Q136. Is 3-digit Number
// Return true if number is between 100 and 999 (inclusive).

function digit(n){
    let count=0;
    while(n>0){
        count++;
        n=Math.floor(n/10);
    }
    console.log((count==3));
}
digit(100)