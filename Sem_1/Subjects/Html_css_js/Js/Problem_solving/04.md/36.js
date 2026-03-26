// Q36. To Lowercase
// Convert a string to lowercase.

let str="Javascript";

let res="";

for(let i=0; i<str.length; i++){
    let ascii=str.charCodeAt(i);

    if(ascii>=65 && ascii<=90){
        ascii=ascii+32;
    }
    let char=String.fromCharCode(ascii);
    res=res+char;   
}
console.log(res);