// Q81. Square Pattern of * of Size N
// For N = 3:

// var a = Number(prompt("Enter your num here:"));
var a=3;

for(let i=0; i<a; i++){
    let bag="";
    for(let j=0; j<a; j++){
        bag=bag+"* ";
    }
    console.log(bag);
}