// Q173. Move All Negative Numbers to Front
// Reorder array so that all negatives come before non-negatives (0 and positives). Order within groups can be ignored.

function allNagativeFront(arr){
    let i=0;
    for(let j=0; j<arr.length; j++){
        if(arr[j]<0){
            [arr[i],arr[j]]=[arr[j],arr[i]];
            i++;
        }
    }
    console.log(arr);
}
allNagativeFront([1, -2, 3, -4, 0])