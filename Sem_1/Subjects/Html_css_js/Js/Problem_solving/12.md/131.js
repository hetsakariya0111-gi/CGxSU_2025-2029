// Q131. Largest Digit in a Number
// Given a number, return the largest digit.

function digit(n){
    // let arr=String(n).split("");
    // let res=Math.max(...arr);
    // console.log(res);

    let max=0;
    while(n>0){
        max=Math.max(max,n%10);
        n=Math.floor(n/10);
    }
    console.log(max);
}
digit(4365);

