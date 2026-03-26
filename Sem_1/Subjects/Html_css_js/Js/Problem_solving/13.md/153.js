// Q153. Contains Any Vowel
// Return true if the string contains at least one vowel (a, e, i, o, u, case-insensitive).

let str = "My name is het sakariya";
let checkStr="AEIOUaeiou";
for(let i=0; i<str.length; i++){
    if(checkStr.includes(str[i])){
        console.log(true);
        return;
    }
}
console.log(false);
