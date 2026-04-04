// Q78. Largest Positive and Smallest Negative
// Find largest positive and smallest negative (if they exist).

let arr = [-5,-9,5,3,8,7,15,95,-28,-64,58];

// let max=Math.max(...arr);
// let min=Math.min(...arr);

// console.log(max>0 ? max : null);
// console.log(min<0 ? min : null);

let max=0;
let min=0;

for(let i=0; i<arr.length; i++){
    if(arr[i]>max){
        max=arr[i];
    }
    if(arr[i]<min){
        min=arr[i];
    }
}

console.log(max>0 ? max : null);
console.log(min<0 ? min : null);