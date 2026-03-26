// Q185. Merge Two Sorted Arrays into One Sorted Array
// Both arrays are sorted; merge into a single sorted array (without sorting at the end).

let arr1 = [-7,12,17,29,41,56,79];
let arr2 = [-9,-3,0,5,19];

function merge(arr1,arr2){
    let i=0; 
    let j=0;
    let res=[];
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            res.push(arr1[i]);
            i++
        }
        else{
            res.push(arr2[j]);
            j++
        }
    }
    while(i<arr1.length){
        res.push(arr1[i]);
        i++;
    }
    while(j<arr2.length){
        res.push(arr2[j]);
        j++;
    }
    console.log(res);
}
merge([-9,-3,0,5,19],[-7,12,17,29,41,56,79]);