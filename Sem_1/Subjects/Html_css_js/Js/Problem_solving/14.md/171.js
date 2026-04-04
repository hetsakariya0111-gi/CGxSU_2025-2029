// Q171. Unique Elements Without Set
// Return new array with all duplicates removed, using loops (not Set).

function uniqueElements(arr){
    let obj={};
    let res=[];
    for(let i=0; i<arr.length; i++){
        if(obj[arr[i]]==undefined){
            obj[arr[i]]=1;
        }
        else{
            obj[arr[i]]++;
        }
    }
    for(let char in obj){
        res.push(Number(char));
    }
    console.log(res);
}
uniqueElements([1,3,2,1,3,4,5,6,8,2,6,8,2,6,8,5,6]);