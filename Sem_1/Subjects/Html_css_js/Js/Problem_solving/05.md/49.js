// Q49. Remove All Digits from a String
// Given a string, remove all digits

let str="abc123 bcd587";
let res = "";

for(let ch of str) {
    if(ch>="0" && ch<="9") {
        continue;
    }
    else {
        res = res+ch;
    }
}
console.log(res);