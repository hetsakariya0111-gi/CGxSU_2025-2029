// Q88. Armstrong Number (3-digit)
// Number is Armstrong if sum of cubes of its digits equals the number (for 3-digit).

let number = 36;

let arr = String(number).split("");
console.log(arr);

let res = 0;

for(let i=0; i<arr.length; i++){
    res=res + Number(arr[i])**arr.length;
}
if(number==res){
    console.log("Numer is a armstrong");
}
else {
    console.log("Number is not armstrong");
}