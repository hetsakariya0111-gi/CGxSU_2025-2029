// Q177. Count Strings with Length > 3
// Given an array of strings, count how many have length greater than 3.

function lengthGreaterThree(arr){
    let count=0;
    for(let i=0; i<arr.length; i++){
        if(arr[i].length>3){
            count++;
        }
    }
    console.log(count);
}
lengthGreaterThree(["hi", "hello", "hey", "Java"]);