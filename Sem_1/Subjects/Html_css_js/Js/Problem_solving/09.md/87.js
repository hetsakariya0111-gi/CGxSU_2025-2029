// Q87. Check Perfect Square
// Return true if number is a perfect square.

let number = 20;

// let root=Math.floor(Math.sqrt(number));
// if(root*root==number){ 
//     console.log("Perfect square.")
// }
// else { 
//     console.log("Not a perfect square") 
// }

for(let i=1; i<number; i++){
    if(i*i==number){
        console.log("Perfect square");
        return;
    }
}
console.log("Not a perfect square");

