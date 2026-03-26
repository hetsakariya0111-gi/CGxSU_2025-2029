// Q86. Sum of Each Row in 2D Array
// Given a 2D array, print sum of each row.

let arr = [
    [1,2,3],
    [8,5,2],
    [6,5,4]
];

let res=[];

for (let i = 0; i < arr.length; i++) {
    let sum = 0;

    for (let j = 0; j < arr[i].length; j++) {
        sum += arr[i][j];
    }
    res.push(sum);
}
console.log(res);
