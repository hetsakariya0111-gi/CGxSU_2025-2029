// Q29. GCD of Two Numbers (Simple Loop)
// Given two numbers, find their greatest common divisor.

var num1=12;
var num2=18;
var n = Math.min(num1,num2);



for(var i = n; i>0; i--) {

    if(num1%i==0 && num2%i==0) {
     console.log(i);
        break;
    }

}