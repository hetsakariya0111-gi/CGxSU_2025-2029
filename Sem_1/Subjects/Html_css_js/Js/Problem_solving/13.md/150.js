// Q150. Length of Longest Word in a Sentence
// Return just the number (length of the longest word).

function longest(str){
    let count=0;

    let res=[];
    
    for(let i=0; i<str.length; i++){
        if(i == str.length-1 && str[i]!=" "){
            count++;
            res.push(count);
        }
        else if(str[i] == " "){
            if(count > 0){
                res.push(count);
                count = 0;
            }
        }
        else{
            count++; 
        }
    }
    console.log(Math.max(...res));
}
longest("My name is het sakariya");
