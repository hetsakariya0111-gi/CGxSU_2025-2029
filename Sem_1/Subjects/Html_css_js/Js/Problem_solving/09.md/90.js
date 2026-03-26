// Q90. Longest String in Array
// Return the longest string (if tie, you can return first longest).

function length(str){
    let count=0;

    while(str[count]){
        count++;
    }
    return count;
}

function main(arr){
    let n=length(arr);
    let res="";
    let maxLength=0;
    for(let i=0; i<n; i++){
        let stringLength=length(arr[i]);
        if(stringLength>maxLength){
            res=arr[i];
            maxLength=stringLength;
        }
    }
    console.log(res);
}

main(["hello","het","how are you"]);