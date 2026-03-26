// Q41. Count Words in a Sentence
// Given a sentence, count how many words it has (split by spaces, ignore extra spaces if you want).

let str = "        hello       world        ";
let count = 0;
for(let i=0; i<str.length; i++){
    if(i==0 && str[i]!=" "){
        count++;
    }
    else if(str[i]!=" " && str[i-1]==" "){
        count++;
    }
}
console.log(count); 