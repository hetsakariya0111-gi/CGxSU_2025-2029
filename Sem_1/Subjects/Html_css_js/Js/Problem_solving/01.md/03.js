// Q3. Maximum of Three Numbers
// Given three numbers, print the largest.

let num1 = Number(prompt("Enter a num1: "));
let num2 = Number(prompt("Enter a num2: "));
let num3 = Number(prompt("Enter a num3: "));

if((num1 > num2) && (num1 > num3)){
    console.log("Larger num is: ", num1);
}
else if((num2 > num1) && (num2 > num3)){
    console.log("Larger num is: ", num2);
}
else{
    console.log("Larger num is: ", num3);
}

