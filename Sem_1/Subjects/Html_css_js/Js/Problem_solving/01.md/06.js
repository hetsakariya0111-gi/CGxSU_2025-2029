// Q6. Grade Calculator
// Given marks 0–100, print grade.

let marks = Number(prompt("Enter a marks: "));

if (marks >= 90 && marks <= 100) console.log("Grade A");
else if (marks >= 80 && marks < 90) console.log("Grade B");
else if (marks >= 70 && marks < 80) console.log("Grade C");
else if (marks >= 60 && marks < 70) console.log("Grade D");
else if (marks < 60 && marks > 0) console.log("Grade F");
else console.log("Please enter a valid marks.");

// var marks = 15;
// if(marks>=90 && marks<=100) {
//     console.log("Grade A");
// }
// else if(marks>=80 && marks<=89) {
//     console.log("Grade B");
// }

// else if(marks>=70 && marks<=79) {
//     console.log("Grade C");
// }

// else if(marks>=60 && marks<=69){
//     console.log("Grade D");
// }

// else{
//     console.log("Grade F");
// }

// var marks = 5;

// switch(true) {
//     case (marks >90 && marks<100):
//       console.log("Grade A");
//       break;
//     case (marks>=80 && marks<=89):
//       console.log("Grade B");   
//       break;
//     case (marks>=70 && marks<=79):
//         console.log("Grade C");
//         break;
//     case (marks>=60 && marks<=69):
//         console.log("Grade D");
//         break;
//     case (marks>=0 && marks<=59):
//         console.log("Grade F");
//         break;          
//     default: console.log("invalid input");
// }