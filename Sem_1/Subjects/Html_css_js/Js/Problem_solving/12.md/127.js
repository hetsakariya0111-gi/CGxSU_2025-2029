// Q127. Count Numbers Divisible by 2 or 3 (1 to n)
// Given n, count how many numbers between 1 and n are divisible by 2 or 3.

function divisible(n){
    let count=0;
    for(let i=1; i<=n; i++){
        if(i%2==0 || i%3==0){
            count++;
        }
    }
    console.log(count);
}
divisible(6)