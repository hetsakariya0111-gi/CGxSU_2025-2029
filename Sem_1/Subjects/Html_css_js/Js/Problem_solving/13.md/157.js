// Q157. Remove Special Characters (Keep Only Letters and Digits)
// Remove everything that is not a–z, A–Z, or 0–9.

function charSpecial(str){
    let res="";
    for(let i=0; i<str.length; i++){
        let char = str[i];
        if((char>=0 && char<=9)||(char>="a" && char<="z") || (char>="A" && char<="Z")){
            res=res+char; 
        }
        
    }
    console.log(res);
}

charSpecial("15#@$e1284");