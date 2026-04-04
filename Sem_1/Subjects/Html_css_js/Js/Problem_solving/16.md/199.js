// Q199. Remove Consecutive Duplicate Characters
// Given string, compress consecutive duplicates into a single occurrence.

function consecutiveDuplicateStr(str){
    let res="";
    for(let i=0; i<str.length; i++){
        if(str[i]!=str[i+1]){
            res+=str[i];
        }
    }
    console.log(res);
}
consecutiveDuplicateStr("aaabbcddd");