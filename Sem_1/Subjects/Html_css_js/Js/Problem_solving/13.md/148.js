// Q148. First Word of a Sentence
// Characters from start until first space. If no space, whole string.

function space(str){
    // let arr = str.trim().split(" ");
    // console.log(arr[0]);
    let res="";
    let check=true;
    for(let i=0; i<str.length; i++){
          if(str[i]!=" "){
            check=false;
            res=res+str[i];
          }
          else if(check==true){
            continue;
          }
          else{
            break;
          }
    }
    console.log(res);
}
space("    het m. sakariya");