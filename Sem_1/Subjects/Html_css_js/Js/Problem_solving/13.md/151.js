// Q151. Shortest Word in a Sentence
// Return the actual word with minimum length (if tie, you can return first shortest).

function shortest(str){

    let res=[];
    let count="";
    
    for(let i=0; i<str.length; i++){
        if(i == str.length-1 && str[i]!=" "){
            count=count+str[i];
            res.push(count);
        }
        else if(str[i] == " "){
            if(count.length > 0){
                res.push(count);
                count = "";
            }
        }
        else{
            count=count+str[i]; 
        }
    }
    let min = Infinity;
    let minWord="";
    for(let i=0; i<res.length; i++){
        if(res[i].length<min){
            min=res[i].length;
            minWord=res[i];
        }
    }
    console.log(minWord);
}
shortest("My name i het sakariya");