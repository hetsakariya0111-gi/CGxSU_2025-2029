// Q66. Find Index of a Value
// Given an array and a value, return index or -1.

let arr=[1,20,3,40,-1,-90,-80];
let value=3;


console.log(arr.indexOf(value));

let present = true;
for(let i=0; i<arr.length; i++){
    if(arr[i]==value){
        console.log(i);
        break;
    }else if(i==arr.length-1){
        present=false;
    }
}
if(present=false){
    console.log(-1);
}

