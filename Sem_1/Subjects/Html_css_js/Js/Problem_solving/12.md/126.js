// Q126. Sum of All Odd Numbers from 1 to n
// Given n, find sum of all odd numbers from 1 to n.

function sumOdd(n){
    let sum=0;
    for(let i=1; i<=n; i++){
        if(i%2!=0){
            sum=sum+i;
        }
    }
    console.log(sum);
}

sumOdd(10);