// Q152. Count 'the' as a Whole Word
// Count how many times 'the' appears as a separate word (case-insensitive if you like).


let str="the cat and the dog";
let count=0;

for(let i=0; i<str.length; i++){
    if((i==0 || str[i-1]==" ")&&str[i]=="t"&&str[i+1]=="h"&&str[i+2]=="e"&&(str[i+3] == " " || i+3 == str.length)){
        count++;
    }
}
console.log(count);