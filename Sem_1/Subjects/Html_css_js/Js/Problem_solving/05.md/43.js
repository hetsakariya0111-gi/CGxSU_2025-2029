// Q43. Check if String Contains a Character
// Given a string and a character, check if the character appears in the string.

let str="hello";
let ch="R";

// for(let i=0; i<str.length; i++){
//     if(str[i]==ch){
//         console.log(true);
//         return;
//     }
// }

let check = str.includes(ch);
console.log(check);