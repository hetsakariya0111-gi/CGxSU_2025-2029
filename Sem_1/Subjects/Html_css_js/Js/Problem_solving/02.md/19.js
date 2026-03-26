// Q19. Factorial (Iterative)
// Compute N! using a loop.

let num = Number(prompt("Enter a num: "));
let fact = 1;
for(let i=1; i<= num; i++)
    fact*=i; console.log(fact);

// function check (num){
//     let count =1;
//    for(let i=1; i<=num;i++){
//      count *=i;

//    }
//        console.log(count); 
//    }

// check(6);