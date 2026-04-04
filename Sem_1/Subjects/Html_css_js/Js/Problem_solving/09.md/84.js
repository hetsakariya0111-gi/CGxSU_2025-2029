// Q84. Triangle with Repeated Row Number
// For N = 4:

var a=4;

for(let i=1; i<=a; i++){
    let bag="";
    for(let j=1; j<=i; j++){
        bag=bag+i+" ";
    }
    console.log(bag);
}