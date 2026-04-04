// Q170. Contains Any Duplicate?
// Return true if array contains any value that appears more than once.

function containsDuplicate(arr){
    let obj={};
    for(let i=0; i<arr.length; i++){
        if(obj[arr[i]]){
            console.log(true);
            return;
        }
        else{
            obj[arr[i]]=1;
        }
    }
    console.log(false);
}
containsDuplicate([1, 2, 3, 2]);
