// Q35. To Uppercase
// Convert a string to uppercase.

let str = "Hello World";
let result = "";

for(let i=0; i<str.length; i++) {
    let ascii = str.charCodeAt(i);

    if(ascii>=97 && ascii<=122) {
        ascii = ascii - 32;
    }
    let char = String.fromCharCode(ascii)
    result = result + char;
}
console.log(result);