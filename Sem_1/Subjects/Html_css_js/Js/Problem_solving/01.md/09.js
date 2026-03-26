// Q9. Leap Year (Simple Rule)
// Given a year, check if it is a leap year. (Simple version: divisible by 4 → leap; you can refine later.)

let year = Number(prompt("Enter a year: "));

if(year % 4 == 0) console.log("Leap year");
else console.log("Non leap year");

// function checkLeapYear(year) {
//      if(year%100==0) { 
//         if(year%400 == 0) {
//         console.log("Leap year");
//      }
//     else{
//         console.log("not a leap year")
//     }
// }
//      else if(year%4==0) {
//         console.log("leap year");
//      }
//      else {
//         console.log("not a leap year");
//      }
// }

// checkLeapYear(2400);