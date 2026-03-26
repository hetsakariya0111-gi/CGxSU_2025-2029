// Q161. Count Positive, Negative, and Zero
// Given an array of numbers, count how many are positive, negative, and zero.

function specificsCount(arr){
    let positiveCount=0;
    let nagativeCount=0;
    let zeroCount=0;

    for(let i=0; i<arr.length; i++){
        if(arr[i]==0){
            zeroCount++;
        }
        else if(arr[i]>0){
            positiveCount++;
        }
        else{
            nagativeCount++;
        }
    }
    console.log(positiveCount);
    console.log(nagativeCount);
    console.log(zeroCount);
}
specificsCount([0,2,0,6,0,-9,20,-8,-9,0,5,3,0,8,0,-5,8,-8,88,59,5,8952]);
