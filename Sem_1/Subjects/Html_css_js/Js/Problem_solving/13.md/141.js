// Q141. Middle Character(s) of a String
// Return the middle character for odd length, middle two characters for even length.

function middle(str){
    let length=str.length;
    let mid=Math.floor(length/2);
    if(length%2==0){
        console.log(str[mid-1]+str[mid]);
    }
    else{
        console.log(str[mid]);
    }
}
middle("heet")