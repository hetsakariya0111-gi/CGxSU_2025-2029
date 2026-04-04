// Q145. Remove Leading and Trailing Spaces (Trim)
// Return a new string with spaces removed from start and end only.

function trim(str){
    let i=0;
    let j=str.length-1;
    while(str[i]==" "){
        i++;
    }
    while(str[j]==" "){
        j--;
    }
    let res="";
    for(let k=i; k<=j; k++){
        res=res+str[k];
    }
    console.log(res);
}
trim("   h  e   t      ")