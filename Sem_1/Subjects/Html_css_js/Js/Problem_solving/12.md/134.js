// Q134. Count Odd Digits in a Number
// Given a number, count how many digits are odd.

function digit(n){

    let count=0;
    while(n>0){
        if(n%2!=0){
            count++;
        }
        n=Math.floor(n/10);
    }
    console.log(count);
}
digit(4365);