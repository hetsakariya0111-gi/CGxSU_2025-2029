// Q95. Total Cost from Product Price Object
// Given object of {productName: price}, find total.

let obj = {apple: 50, banana: 20, mango: 30};

let sum=0;
for(let c in obj){
    sum=sum+obj[c];
}
console.log(sum);