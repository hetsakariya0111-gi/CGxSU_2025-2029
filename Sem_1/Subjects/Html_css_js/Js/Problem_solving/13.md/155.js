// Q155. Contains Only Letters
// Return true if string has only a–z or A–Z (no digits, no spaces).

function noSpecial(str){
    let checkStr="1235468790";
    // for(let i=0; i<str.length; i++){
    //     if(!(checkStr.includes(str[i]))){
    //         console.log(false);
    //         return;
    //     }
    // }
    // console.log(true);
    for(let i=0; i<str.length; i++){
        if((str[i]>="a" && str[i]<="z") || (str[i]>="A" && str[i]<="Z")){
            continue;
        }
        else{
            console.log(false);
            return;
        }
    }
    console.log(true);
}

noSpecial("het")