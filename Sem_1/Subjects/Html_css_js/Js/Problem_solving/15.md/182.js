// Q182. Swap Elements at Indices i and j
// Given an array and two indices i and j, swap elements at those indices.

function swapij(arr,i,j){
        [arr[i],arr[j]]=[arr[j],arr[i]];
        console.log(arr);
}
swapij([1, 2, 3, 4],0,3);