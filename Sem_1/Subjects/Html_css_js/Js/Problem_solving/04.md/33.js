// Q33. Count Vowels
// Count vowels (a, e, i, o, u – you can decide if you treat uppercase as vowel too).

// let str = "javascript";
// let vowel = 0;
// for(var i = 0; i<str.length; i++) {
//     if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') {
//         vowel++;
//     }
//     else if(str[i] == " ") {
//         continue;
//     }

// }
// console.log(vowel);


//method-2
let input = "aaeeiioouu"
let vowel = "AEIOUaeiou";
let count = 0;

for(let i=0; i<input.length; i++) {
    if(vowel.includes(input[i])){
        count++;
    }
}
console.log(count);