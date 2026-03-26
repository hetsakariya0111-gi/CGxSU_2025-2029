// Q34. Count Consonants
// Count consonants (letters that are not vowels).

// let input = "Hello World";

// let str = input.toLowerCase();
// let count = 0;
// for (let i = 0; i < str.length; i++) {
//   let ascii = str.charCodeAt(i);
//   if (ascii >= 97 && ascii <= 122) {
//     if (
//       ascii == 97 ||
//       ascii == 101 ||
//       ascii == 105 ||
//       ascii == 111 ||
//       ascii == 117
//     ) {
//       continue;
//     } else {
//       count++;
//     }
//   }
// }
// console.log(count);

let str = "abcdefghijklmnopqrstuvwxyz";
let vowel = "AEIOUaeiou";
let count = 0;

for (let i = 0; i < str.length; i++) {
    if (!vowel.includes(str[i])) {
        count++;
    }
}

console.log(count); 
