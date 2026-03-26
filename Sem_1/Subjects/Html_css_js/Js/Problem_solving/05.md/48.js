// Q48. Remove All Vowels from a String
// Given a string, remove vowels (a, e, i, o, u – you can treat uppercase similarly).

let str="Banana grapes";
let res = "";

for(let ch of str) {
    if(ch=="a" || ch=="e" || ch=="i" || ch=="o" || ch=="u" || ch=="A" || ch=="E" || ch=="I" || ch=="O" || ch=="U" ){
        continue;
    }
    else{
        res=res+ch
    }
}
console.log(res);
