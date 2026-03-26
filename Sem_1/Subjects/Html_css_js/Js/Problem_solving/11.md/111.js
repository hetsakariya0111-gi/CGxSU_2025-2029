// Q111. Longer of Two Strings
// Write a function that returns the longer string. If equal, you can return the first.

function longer(str1,str2){
    if(str1.length>str2.length){
        return str1;
    }
    else if(str2.length>str1.length){
        return str2;
    }
    else{
        return str1;
    }
}