// Q144. Count Spaces in String
// Count how many space characters ' ' are present.

function spaces(str){
    let count=0;
    for(let i=0; i<str.length; i++){
        if(str[i]==" "){
            count++;
        }
    }
    console.log(count);
}
spaces("hd div eihf wsojwjdb wednj  .")