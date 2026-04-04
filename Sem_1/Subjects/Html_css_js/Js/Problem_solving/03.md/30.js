// Q30. LCM of Two Numbers
// Given two numbers, find their least common multiple.

var num1=4;
var num2=6;
var n = Math.max(num1,num2);
 
for(var i = n; i<=num1*num2; i++) {

    if(i%num1==0 && i%num2==0) {
        console.log(i);
        return;
    }

}