// Q179. Remove Empty Strings from Array
// Given array of strings, remove empty strings "".

function removeEmptyString(arr){
    // for(let i=0; i<arr.length; i++){
    //     if(arr[i]==""){
    //         arr.splice(i,1);
    //     }
    // }
    // console.log(arr);

    let res=arr.filter((value)=>{
        return value!="";
    })
    console.log(res);
}
removeEmptyString(["a", "", "b", "", "c"]);