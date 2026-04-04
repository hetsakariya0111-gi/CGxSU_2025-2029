// Q142. Starts with 'a' (case-insensitive)
// Return true if string starts with 'a' or 'A'.

function check(str){
    if(str[0]=="A"||str[0]=="a"){
        console.log(true);
    }
    else{
        console.log(false);
    }
}
check("Abc")