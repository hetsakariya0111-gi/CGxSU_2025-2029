// Q46. Count Uppercase Letters
// Given a string, count uppercase letters.

var str = "HelLo WoRLD";

var count = 0;

for(var i=0; i<=str.length; i++) {
    if(str[i]>="A" && str[i]<="Z") {
        count++;
    }
}

console.log(count);

// var count2 = 0;

// for(var j=0; j<str.length-1; j++) {
//     let ascii = str.charCodeAt(i)
//     if(ascii>=65 && ascii<=90) {
//         count2++;
//     }
// }
// console.log(count2);