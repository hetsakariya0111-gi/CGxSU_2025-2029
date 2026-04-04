// Q143. Ends with '!'
// Return true if string ends with exclamation mark.

function check(str) {
    if(str[str.length-1]=="!"){
        return true;
    }
    else{
        return false;
    }
}
console.log(check("oh noo!!"));