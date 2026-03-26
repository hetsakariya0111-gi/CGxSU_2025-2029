// Q197. First Non-Repeating Character in String
// Return first character that appears exactly once, or null if none.

function firstNonRepeat(str){
    for(let i=0; i<str.length; i++){
        let notpresent=true;
        for(let j=0; j<str.length; j++){
            if(i==j){
                continue;
            }
            else if(str[i]==str[j]){
                notpresent=false;
            }
        }
        if(notpresent){
            console.log(str[i]);
            return;
        }
    }
}
firstNonRepeat("swiss");