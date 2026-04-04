// Q154. Contains Only Digits
// Return true if every character is 0–9 and string is not empty.

function allDigit(str){
    let checkStr="1235468790";
    // for(let i=0; i<str.length; i++){
    //     if(!(checkStr.includes(str[i]))){
    //         console.log(false);
    //         return;
    //     }
    // }
    // console.log(true);
    for(let i=0; i<str.length; i++){
        if(str[i]>=0 && str[i]<=9){
            continue;
        }
        else{
            console.log(false);
            return;
        }
    }
    console.log(true);
}

allDigit("15e1284")




