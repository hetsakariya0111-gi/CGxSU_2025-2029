// Q42. Replace All 'a' with 'e'
// Given a string, replace all 'a' with 'e'.

let str="Hat";
// for(let i=0; i<str.length; i++){
//     if(str[i]=="a"|| str[i]=="A"){
//         res=res+"e";
//     }
//     else{
//         res=res+str[i];
//     }
// }

let res=str.replaceAll("a","e").replaceAll("A","E");
console.log(res);