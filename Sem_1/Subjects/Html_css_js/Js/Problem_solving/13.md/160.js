// Q160. Pangram Check
// A pangram contains every letter a–z at least once (ignore case and non-letters).

let str = "the quick brown fox jumps over a lazy dog";
let checkStr="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
for(let i=0; i<str.length; i++){
    if(str.includes(checkStr[i])){
        console.log("Panagram");
        return;
    }
}
console.log("Non panagram");
