// Q159. Anagram Check (Ignore Spaces and Case)
// Two strings are anagrams if they use same letters in same counts, order doesn’t matter.

function anagram(str1,str2){
    // let arr1=str1.split("");
    // arr1=arr1.sort();
    // let arr2=str2.split("");
    // arr2=arr2.sort();
    // str1=arr1.join("");
    // str2=arr2.join("");
    // if(str1==str2){
    //     console.log("Anagram");
    // }
    // else{
    //     console.log("Not a anagram");
    // }
    let obj1={};
    let obj2={};

    for(let char of str1){
        if(char==" "){
            continue;
        }
        if(obj1[char]){
            obj1[char]++;
        }
        else{
            obj1[char]=1;
        }
    }
    for(let char of str2){
        if(char==" "){
            continue;
        }
        if(obj2[char]){
            obj2[char]++;
        }
        else{
            obj2[char]=1;
        }
    }

console.log(obj1);
console.log(obj2);

    for(let char in obj1){
        if(obj1[char]!=obj2[char]){
            console.log("Stringa are not anagraam");
            return;
        }
    }
    for(let char in obj2){
        if(obj1[char]!=obj2[char]){
            console.log("Stringa are not anagraam");
            return;
        }
    }
    console.log("Strings are anagram");
}
anagram("hello","elhlo");

