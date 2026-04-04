// Q132. Smallest Digit in a Number
// Given a number, return the smallest digit.

function digit(n){
    // let arr=String(n).split("");
    // let res=Math.max(...arr);
    // console.log(res);

    let min=9;
    while(n>0){
        min=Math.min(min,n%10);
        n=Math.floor(n/10);
    }
    console.log(min);
}
digit(4365);