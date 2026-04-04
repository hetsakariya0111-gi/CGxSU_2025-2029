// Q125. Sum of All Even Numbers from 1 to n
// Given n, find sum of all even numbers from 1 to n.

function sumEven(n){
    let sum=0;
    for(let i=2; i<=n; i++){
        if(i%2==0){
            sum=sum+i;
        }
    }
    console.log(sum);
}

sumEven(10);