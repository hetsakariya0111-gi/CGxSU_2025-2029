// Q47. Count Lowercase Letters
// Given a string, count lowercase letters.

var str = "helLLO Small world";
var count = 0;

for(var i=0; i<=str.length-1; i++) {
    if(str[i]>="a" && str[i]<="z") {
        count++;
    }
}
console.log(count);

// var count2 = 0;

// for(var j=0; j<str.length-1; j++) {
//     let ascii = str.charCodeAt(i)
//     if(ascii>=97 && ascii<=122) {
//         count2++;
//     }
// }
// console.log(count2);