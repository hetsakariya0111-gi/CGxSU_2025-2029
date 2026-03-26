// Q113. Sign of Number as Text
// Write a function that returns "positive", "negative", or "zero".

function sign(n){
    if(n==0){
        return "Zero";
    }
    else if(n==Math.abs(n)){
        return "Positive";
    }
    else{
        return "Nagative";
    }
}