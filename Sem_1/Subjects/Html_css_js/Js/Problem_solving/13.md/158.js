// Q158. Count Words with Length ≥ 5
// Given a sentence, count how many words have length at least 5.

function countMaxLength(str){
    let count=0;
    let length=0;
    for(let i=0; i<str.length; i++){
        if(i==str.length && atr[i]!=" " && length>=4){
            count++;
        }
        else if(str[i]!=" "){
            length++;
        }
        else{
            if(length>=5){
                count++;
            }
            length=0;
        }
    }
    console.log(count);
}
countMaxLength("My name is sakariya het")