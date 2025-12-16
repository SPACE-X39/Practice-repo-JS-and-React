let n = prompt("Enter th evalue of n:");
let arr = [];
for(let i=1;i<=n;i++){
    arr[i-1] = i;
}
console.log(arr);
const sum = arr.reduce((res,curr)=>{
    return res+curr;
})
console.log("sum of numbers:",sum);
const factorial = arr.reduce((res,curr)=>{
    return res*curr;
})
console.log("factorial of numbers is:",factorial);