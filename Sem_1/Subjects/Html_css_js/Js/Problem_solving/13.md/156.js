// Q156. Repeat Each Character Twice
// New string where each char appears twice.

function repeat(str){
    let res="";
    for(let i=0; i<str.length; i++){
        res=res+str[i]+str[i];
    }
    console.log(res);
}
repeat("het")