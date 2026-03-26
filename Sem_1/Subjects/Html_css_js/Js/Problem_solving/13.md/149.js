// Q149. Last Word of a Sentence
// Characters after the last space. If no space, whole string.

function space(str){
    // let arr = str.trim().split(" ");
    // console.log(arr[0]);
    let res="";
    let check=true;
    for(let i=str.length-1; i>=1; i--){
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

    let res2="";
    for(let i=res.length-1; i>=0; i--){
        res2+=res[i];
    }
    console.log(res2);
}
space("    het m. sakariya         ")