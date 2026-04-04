// Q128. Count Numbers Divisible by Both 2 and 5 (1 to n)
// Effectively numbers divisible by 10.

function divisible(n){
    let count=0;
    for(let i=1; i<=n; i++){
        if(i%2==0 && i%5==0){
            count++;
        }
    }
    console.log(count);
}
divisible(20)