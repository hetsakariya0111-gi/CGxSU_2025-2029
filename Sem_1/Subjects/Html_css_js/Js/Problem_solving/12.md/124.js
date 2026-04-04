// Q124. Print from n Down to 1
// Given n, print numbers from n down to 1.

function print(n){
    let res="";
    for(let i=n; i>=1; i--){
        res=res+i+" ";
    }
    console.log(res);
}

print(10);