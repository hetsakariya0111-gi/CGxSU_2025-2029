// Q198. First Repeating Character in String
// Return first character that appears more than once, or null if none.

function firstRepeat(str){
    for(let i=0; i<str.length; i++){
        for(let j=0; j<str.length; j++){
            if(i==j){
                continue;
            }
            else if(str[i]==str[j]){
                console.log(str[i]);
                return;
            }
        }
    }
}
firstRepeat("swiss");