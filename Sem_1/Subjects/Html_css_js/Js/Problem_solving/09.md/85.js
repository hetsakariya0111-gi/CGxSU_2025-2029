// Q85. Print Multiplication Tables from 1 to 10
// Print tables 1 to 10, each up to 10.

for(let i=1; i<=10; i++){
    let bag="";
    for(let j=1; j<=10; j++){
        bag=bag+i*j+" ";
    }
    console.log(bag);
}