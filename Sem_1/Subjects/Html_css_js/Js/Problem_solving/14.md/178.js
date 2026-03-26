// Q178. First Character of Each String
// Given an array of strings, return array of their first characters.

function lengthGreaterThree(arr){
    // let res = [];
    // for(let i=0; i<arr.length; i++){
    //     res.push(arr[i][0]);
    // }
    // console.log(res);

    let res=arr.map((value)=>{
        return value[0];
    })
    console.log(res);
    
}
lengthGreaterThree(["hi", "hello", "hey", "Java"]);