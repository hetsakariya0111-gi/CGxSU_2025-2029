// Q184. Rotate Array Left by k Positions
// Left rotation: first elements move to end.

function rotateLeft(arr, k) {
  if (arr.length < k) {
    k = k % arr.length;
  }

//   for (let i = 0; i < k; i++) {
//     let add = arr.shift();
//     arr.push(add);
//   }

//   console.log(arr);

  let res=[];
    for(let i=arr.length-k-1; i<arr.length; i++){
        res.push(arr[i]);
    }
    for(let i=0; i<arr.length-k-1; i++){
        res.push(arr[i]);
    }
    console.log(res);
}

rotateLeft([1, 2, 3, 4, 5], 2);
