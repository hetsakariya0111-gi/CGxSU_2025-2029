// Q74. Intersection of Two Arrays (Common Elements)
// Return new array with elements present in both (no duplicates).

let arr1=[1,1,3,2,2,3,4];
let arr2=[1,1,1,2,3,4,4];

let res=[];
arr1=arr1.sort((a,b)=>a-b)
arr2=arr2.sort((a,b)=>a-b)

// let i=0;
// let j=0;

// while(i<arr1.length && j<arr2.length){
//     if(arr1[i]==arr2[j]){
//         res.push(arr1[i])
//         i++;
//         j++;
//     }
//     else if(arr1[i]>arr2[j]){
//         j++;
//     }
//     else{
//         i++;
//     }
// }
// console.log(res)

for(let i=0; i<arr1.length; i++){
    if(arr2.includes(arr1[i]) && !(res.includes(arr1[i]))){
        res.push(arr1[i]);
    }
}
console.log(res)