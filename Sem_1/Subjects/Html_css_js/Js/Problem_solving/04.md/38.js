// Q38. Palindrome String
// Check if a string is a palindrome.

let str="madam";

let i=0;
let j=str.length-1;

while(i<=j){
    if(str[i]==str[j]){
        console.log("Not Pallindrome");
        return;
    }
    i++; j--;
}
console.log("Pallindrome");