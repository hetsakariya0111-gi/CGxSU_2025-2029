// Q146. Replace All '?' with '!'
// Return new string with every ? replaced by !.

function replace(str){
    // let res=str.replaceAll("?","!");
    // console.log(res);
    let res="";
    for(let i=0; i<str.length; i++){
        if(str[i]=="?"){
            res=res+"!";
        }
        else{
            res=res+str[i]
        }
    }
    console.log(res);
}
replace("hello ??? ? ? ? ? ?");