// Q180. Sum of Even Numbers in Array
// Return sum of only even numbers.

function sumEven(arr){
    // let sum=0;
    // for(let i=0; i<arr.length; i++){
    //     if(arr[i]%2==0){
    //         sum+=arr[i];
    //     }
    // }
    // console.log(sum);

    let sum=arr.reduce((current,next)=>{
        if(next%2==0){
            return current+next;
        }
        else{
            return current;
        }
    },0)
    console.log(sum);
}
sumEven([1, 2, 3, 4, 5]);