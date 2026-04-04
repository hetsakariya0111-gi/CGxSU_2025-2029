// Q40. Remove All Spaces
// Remove all spaces from a string.

let str="Hello World ";
// let res="";

// for(let i=0; i<str.length; i++){
//     if(str[i]==" "){
//         continue;
//     }
//     res=res+str[i];
// }
// console.log(res);


let arr=str.split(" ");
console.log(arr);

let res=arr.join("");
console.log(res);

console.log(str.split(" ").join(""));

