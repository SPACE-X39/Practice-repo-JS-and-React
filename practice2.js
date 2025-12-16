//sum of a to n numbers 
function sum(n){
    let ans = 0;
    for(let i =1;i<=n;i++){
        ans = ans+i;
    }
    return ans;
}
let total = sum(10);
console.log(total);