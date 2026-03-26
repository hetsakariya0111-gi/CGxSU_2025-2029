// Q89. Length of Each String in Array
// Given array of strings, return array of lengths.

function length(str){
    let count=0;

    while(str[count]){
        count++;
    }
    return count;
}

function main(arr){
    let n=length(arr);
    let res=[];
    for(let i=0; i<n; i++){
        res.push(length(arr[i]));
    }
    console.log(res);
}

main(["hello","het","how are you"]);